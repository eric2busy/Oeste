#!/usr/bin/env node
// Oeste MCP server. Stdio, zero dependencies.
// Serves Oeste's component contracts (Topanga, Huntington, Mesa) to AI clients.
// Data comes from the live site (oeste.hiddeninwest.com) so it is always current.
// Override the base URL with OESTE_BASE_URL (useful for previews).
// Protocol: MCP 2025-03-26 over stdio (newline-delimited JSON-RPC 2.0).

import readline from "node:readline";

const BASE = (process.env.OESTE_BASE_URL || "https://oeste.hiddeninwest.com").replace(/\/$/, "");
const LIBRARIES = ["topanga", "huntington", "mesa"];
const PROTOCOL_VERSION = "2025-03-26";
const SERVER_VERSION = "0.1.0";

function log(...args) { console.error("[oeste-mcp]", ...args); }

async function fetchJson(path) {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`fetch ${path} failed with HTTP ${res.status}`);
  return res.json();
}

async function fetchText(path) {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`fetch ${path} failed with HTTP ${res.status}`);
  return res.text();
}

function isLibrary(v) { return typeof v === "string" && LIBRARIES.includes(v); }

function textResult(text) {
  return { content: [{ type: "text", text }] };
}

function textError(message) {
  return { content: [{ type: "text", text: `Error: ${message}` }], isError: true };
}

// ---------------------------------------------------------------- tools

const TOOLS = [
  {
    name: "list_components",
    description: "List Oeste components. Pass a library to list only that library, or omit it to list all three. Pass a query to filter by name, id, description, or tag (case-insensitive substring). Returns library, id, name, and description for each match. Use this first to discover the exact component id, then call get_component for the full contract.",
    inputSchema: {
      type: "object",
      properties: {
        library: { type: "string", enum: ["topanga", "huntington", "mesa", "all"], description: "Library to list. Defaults to all." },
        query: { type: "string", description: "Optional filter: case-insensitive substring matched against id, name, description, and tags." },
      },
    },
  },
  {
    name: "get_component",
    description: "Get the full contract for one component: Human docs (anatomy, props, keyboard, accessibility), Agent contract (oeste.component.v1), and Vibe code (copy-paste React + Tailwind, registry URL). The returned JSON is the source of truth for that component. Always fetch the contract before generating UI for a component. Never mix tokens across libraries.",
    inputSchema: {
      type: "object",
      properties: {
        library: { type: "string", enum: LIBRARIES, description: "Library the component belongs to." },
        id: { type: "string", description: "Component id exactly as returned by list_components (for example, button, card, dialog)." },
      },
      required: ["library", "id"],
    },
  },
  {
    name: "get_theme_variables",
    description: "Get the design tokens for one library (colors, type, spacing, radii) in light and dark. Use these values when styling; never invent color values, and never mix tokens across libraries.",
    inputSchema: {
      type: "object",
      properties: {
        library: { type: "string", enum: LIBRARIES, description: "Library whose tokens to return." },
      },
      required: ["library"],
    },
  },
  {
    name: "get_library_docs",
    description: "Get the full llms.txt contract for one library: usage rules, install commands, and the complete component reference. Use it when you need the library-wide picture rather than one component.",
    inputSchema: {
      type: "object",
      properties: {
        library: { type: "string", enum: LIBRARIES, description: "Library whose llms.txt to return." },
      },
      required: ["library"],
    },
  },
];

async function listComponents(args) {
  const library = args.library || "all";
  const query = typeof args.query === "string" ? args.query.toLowerCase() : "";
  const libs = library === "all" ? LIBRARIES : [library];
  if (library !== "all" && !isLibrary(library)) {
    return textError(`Unknown library "${library}". Use topanga, huntington, mesa, or all.`);
  }
  const out = [];
  for (const lib of libs) {
    const manifest = await fetchJson(`/${lib}/components.json`);
    const items = Array.isArray(manifest) ? manifest : (manifest.components || []);
    for (const c of items) {
      const hay = [c.id, c.name, c.description, ...(c.tags || [])].join(" ").toLowerCase();
      if (query && !hay.includes(query)) continue;
      out.push({ library: lib, id: c.id, name: c.name, description: c.description });
    }
  }
  return textResult(JSON.stringify(out));
}

async function getComponent(args) {
  if (!isLibrary(args.library)) {
    return textError(`Unknown library "${args.library}". Use topanga, huntington, or mesa.`);
  }
  if (typeof args.id !== "string" || !args.id) {
    return textError("Missing component id. Call list_components first to get the exact id.");
  }
  const safeId = args.id.replace(/[^a-z0-9-]/gi, "");
  if (safeId !== args.id) {
    return textError(`Invalid component id "${args.id}". Use the exact id from list_components.`);
  }
  try {
    const item = await fetchJson(`/${args.library}/r/${safeId}.json`);
    return textResult(JSON.stringify(item));
  } catch (e) {
    return textError(`Component "${safeId}" not found in ${args.library} (${e.message}). Call list_components to see the available ids.`);
  }
}

async function getThemeVariables(args) {
  if (!isLibrary(args.library)) {
    return textError(`Unknown library "${args.library}". Use topanga, huntington, or mesa.`);
  }
  const tokens = await fetchJson(`/${args.library}/src/tokens.json`);
  return textResult(JSON.stringify(tokens));
}

async function getLibraryDocs(args) {
  if (!isLibrary(args.library)) {
    return textError(`Unknown library "${args.library}". Use topanga, huntington, or mesa.`);
  }
  const docs = await fetchText(`/${args.library}/llms.txt`);
  return textResult(docs);
}

const HANDLERS = {
  list_components: listComponents,
  get_component: getComponent,
  get_theme_variables: getThemeVariables,
  get_library_docs: getLibraryDocs,
};

// ---------------------------------------------------------------- JSON-RPC

function ok(id, result) { return { jsonrpc: "2.0", id, result }; }
function err(id, code, message) { return { jsonrpc: "2.0", id, error: { code, message } }; }

async function handleOne(msg) {
  if (!msg || typeof msg !== "object") return null;
  if (typeof msg.method === "string" && msg.method.startsWith("notifications/")) return null;
  const id = msg.id === undefined ? null : msg.id;

  try {
    switch (msg.method) {
      case "initialize":
        return ok(id, {
          protocolVersion: PROTOCOL_VERSION,
          capabilities: { tools: {} },
          serverInfo: { name: "oeste", version: SERVER_VERSION },
        });
      case "ping":
        return ok(id, {});
      case "tools/list":
        return ok(id, { tools: TOOLS });
      case "tools/call": {
        const name = msg.params && msg.params.name;
        const args = (msg.params && msg.params.arguments) || {};
        const handler = HANDLERS[name];
        if (!handler) return err(id, -32602, `Unknown tool "${name}".`);
        try {
          const result = await handler(args);
          return ok(id, result);
        } catch (e) {
          return ok(id, textError(e.message || String(e)));
        }
      }
      default:
        if (msg.method === undefined) return null;
        return err(id, -32601, `Method not found: ${msg.method}`);
    }
  } catch (e) {
    return err(id, -32603, e.message || String(e));
  }
}

async function handle(msg) {
  if (Array.isArray(msg)) {
    const results = [];
    for (const m of msg) {
      const r = await handleOne(m);
      if (r) results.push(r);
    }
    return results.length ? results : null;
  }
  return handleOne(msg);
}

const rl = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
rl.on("line", async (line) => {
  if (!line.trim()) return;
  let msg;
  try {
    msg = JSON.parse(line);
  } catch {
    return;
  }
  let out;
  try {
    out = await handle(msg);
  } catch (e) {
    log("handler crashed:", e);
    out = err(msg && msg.id !== undefined ? msg.id : null, -32603, "Internal error");
  }
  if (out) process.stdout.write(JSON.stringify(out) + "\n");
});

rl.on("close", () => process.exit(0));
process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));
