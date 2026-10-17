// Huntington verify: tokens agree across CSS / JSON / JS, contrast is measured
// honestly (ink must pass 4.5:1; muted is reported, not faked), code colors pass,
// registry + manifest agree, and no sibling-library tokens leak in.
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const fail = [];
const warn = [];
const ok = (msg) => console.log("OK: " + msg);
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const hex = (c) => {
  const m = /^#([0-9a-f]{6})$/i.exec(c.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
};
const lum = (c) => {
  const rgb = hex(c);
  if (!rgb) return null;
  const f = (v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * f(rgb[0]) + 0.7152 * f(rgb[1]) + 0.0722 * f(rgb[2]);
};
const ratio = (a, b) => {
  const la = lum(a), lb = lum(b);
  if (la === null || lb === null) return null;
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
};
const rgbaToHex = (rgba, bg) => {
  // rgba(ink, alpha) over bg -> effective hex. Only handles rgba(r,g,b,a) form.
  const m = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/.exec(rgba.trim());
  if (!m) return null;
  const b = hex(bg);
  if (!b) return null;
  const a = parseFloat(m[4]);
  const mix = (fg, bgv) => Math.round((fg * a + bgv * (1 - a)) / 255 * 255);
  const r = mix(parseInt(m[1]), b[0] * 255), g = mix(parseInt(m[2]), b[1] * 255), bl = mix(parseInt(m[3]), b[2] * 255);
  return "#" + [r, g, bl].map((v) => v.toString(16).padStart(2, "0")).join("");
};

const tokensJson = JSON.parse(read("src/tokens.json"));
const css = read("src/tokens.css");
const src = read("src/index.js");
const pkg = JSON.parse(read("package.json"));

// --- version agreement ---
const dtMatch = src.match(/export const DESIGN_TOKENS = Object\.freeze\(([\s\S]*?)\);\n/);
if (!dtMatch) fail.push("DESIGN_TOKENS not found in src/index.js");
let designTokens = null;
if (dtMatch) {
  try { designTokens = JSON.parse(dtMatch[1]); } catch (e) { fail.push("DESIGN_TOKENS is not valid JSON: " + e.message); }
}
const versions = new Set([tokensJson.version, pkg.version, designTokens?.version]);
if (versions.size !== 1 || !versions.has("0.2.0")) fail.push("version mismatch: tokens.json=" + tokensJson.version + " package=" + pkg.version + " DESIGN_TOKENS=" + designTokens?.version);
else ok("version 0.2.0 agrees (tokens.json, package.json, DESIGN_TOKENS)");
if (tokensJson.name !== "oeste-huntington" || designTokens?.name !== "oeste-huntington") fail.push("token name must be oeste-huntington");
if (!src.startsWith("// Oeste Design System — Huntington theme (v0.2.0)")) fail.push("src/index.js header must name Huntington v0.2.0");

// --- CSS mood blocks vs JSON ---
const moods = tokensJson.moods || [];
for (const mood of moods) {
  const blockRe = new RegExp("(?:^|,)\\s*\\[data-theme='" + mood + "'\\]\\s*\\{([^}]*)\\}", "m");
  const block = css.match(blockRe);
  if (!block) { fail.push("no CSS block for mood " + mood); continue; }
  const body = block[1];
  for (const key of ["paper", "card", "ink", "muted", "line"]) {
    const varName = "--color-" + key;
    const m = body.match(new RegExp(varName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ":\\s*([^;]+);"));
    const expected = tokensJson.color.moods[mood][key];
    if (!m) fail.push("CSS missing " + varName + " in mood " + mood);
    else if (m[1].trim() !== expected) fail.push(`CSS ${varName} in ${mood} is ${m[1].trim()}, expected ${expected}`);
  }
  // DESIGN_TOKENS mood agreement
  const dt = designTokens?.color?.moods?.[mood];
  for (const key of ["paper", "card", "ink", "muted", "line"]) {
    if (dt?.[key] !== tokensJson.color.moods[mood][key]) fail.push("DESIGN_TOKENS mood " + mood + " " + key + " disagrees with tokens.json");
  }
}
if (!fail.length) ok("all 5 mood colors agree across CSS / JSON / JS");

// --- accents / radius / type / space agreement ---
for (const [k, v] of Object.entries(tokensJson.color.accents)) {
  if (designTokens?.color?.accents?.[k] !== v) fail.push("DESIGN_TOKENS accent " + k + " disagrees");
}
for (const [k, v] of Object.entries(tokensJson.radius)) {
  const m = css.match(new RegExp("--radius-" + k + ":\\s*([^;]+);"));
  if (!m || m[1].trim() !== v) fail.push("CSS radius " + k + " is " + (m?.[1]?.trim() ?? "missing") + ", expected " + v);
  if (designTokens?.radius?.[k] !== v) fail.push("DESIGN_TOKENS radius " + k + " disagrees");
}
for (const [k, v] of Object.entries(tokensJson.type.styles)) {
  const sizeRe = new RegExp("--type-" + k + "-size:\\s*([^;]+);");
  const m = css.match(sizeRe);
  if (!m || m[1].trim() !== v.size) fail.push("CSS type " + k + " size is " + (m?.[1]?.trim() ?? "missing") + ", expected " + v.size);
}
if (!fail.length) ok("accents, radius, type styles agree across CSS / JSON / JS");

// --- stray */ guard (lesson: a premature */ kills the token block) ---
const noComments = css.replace(/\/\*[\s\S]*?\*\//g, "");
if (noComments.includes("*/")) fail.push("stray */ outside comments in tokens.css");
else ok("no stray */ in tokens.css");

// --- contrast: ink must pass; muted + status colors reported honestly ---
for (const mood of moods) {
  const c = tokensJson.color.moods[mood];
  const inkPaper = ratio(c.ink, c.paper);
  const inkCard = ratio(c.ink, c.card);
  const mutedPaper = ratio(c.muted, c.paper);
  const mutedCard = ratio(c.muted, c.card);
  if (inkPaper < 4.5) fail.push(`${mood}: ink/paper ${inkPaper.toFixed(2)}:1 below 4.5:1`);
  if (inkCard < 4.5) fail.push(`${mood}: ink/card ${inkCard.toFixed(2)}:1 below 4.5:1`);
  const mutedNote = `${mood}: muted/paper ${mutedPaper.toFixed(2)}:1, muted/card ${mutedCard.toFixed(2)}:1` + (mutedPaper < 4.5 || mutedCard < 4.5 ? " (below 4.5:1 — secondary text only)" : " (passes)");
  warn.push(mutedNote);
  // Code colors on card must pass (docs-site code blocks).
  const block = css.match(new RegExp("(?:^|,)\\s*\\[data-theme='" + mood + "'\\]\\s*\\{([^}]*)\\}", "m"))[1];
  for (const key of ["keyword", "string", "number", "comment", "key", "punct"]) {
    const m = block.match(new RegExp("--code-" + key + ":\\s*([^;]+);"));
    const r = ratio(m[1].trim(), c.card);
    if (r < 4.5) fail.push(`${mood}: code ${key} ${m[1].trim()} on card ${r.toFixed(2)}:1 below 4.5:1`);
  }
}
ok("ink passes 4.5:1 on paper + card in all 5 moods; code colors pass on card in all moods");
for (const w of warn) console.log("NOTE: " + w);
const livePaper = ratio(tokensJson.color.accents.live, tokensJson.color.moods.paper.card);
const liveDark = ratio(tokensJson.color.accents.live, tokensJson.color.moods.ink.card);
console.log(`NOTE: LIVE text ${tokensJson.color.accents.live} on paper card ${livePaper.toFixed(2)}:1, on ink card ${liveDark.toFixed(2)}:1 (status indicator, not body text)`);

// --- component counts: functions, docs, site, registry ---
const fnNames = [...src.matchAll(/^export function (\w+)\(/gm)].map((m) => m[1]);
const docsSection = src.slice(src.indexOf("export const COMPONENT_DOCS"));
const docIds = [...docsSection.matchAll(/^\s*id: "([^"]+)"/gm)].map((m) => m[1]);
if (fnNames.length !== 40) fail.push("expected 40 export functions, found " + fnNames.length);
if (docIds.length !== 40) fail.push("expected 40 COMPONENT_DOCS entries, found " + docIds.length);
if (new Set(docIds).size !== docIds.length) fail.push("duplicate COMPONENT_DOCS ids");
const app = read("site/app.js");
for (const id of docIds) {
  if (!app.includes('"id": "' + id + '"')) fail.push("site/app.js missing component id " + id);
}
if (!fail.length) ok("40 components: functions, COMPONENT_DOCS, and site/app.js agree");

// --- no sibling-library leakage in Huntington source ---
const leaked = ["#C47D3B", "#DB914E", "#A83E22", "#E07A52", "Canyon Rust", "Warm Ochre", "Topanga"];
for (const s of leaked) {
  if (src.toLowerCase().includes("topanga") && s === "Topanga") { fail.push("src/index.js must not mention the sibling library"); continue; }
  if (src.includes(s)) fail.push("src/index.js leaks sibling-library token/copy: " + s);
}
if (!fail.length) ok("no sibling-library tokens/copy in src/index.js");

// --- registry + manifest ---
const manifest = JSON.parse(read("components.json"));
if (manifest.version !== "0.2.0") fail.push("components.json version " + manifest.version);
if (manifest.components.length !== 40) fail.push("components.json has " + manifest.components.length + " components, expected 40");
const rdir = join(ROOT, "r");
const rfiles = readdirSync(rdir).filter((f) => f.endsWith(".json") && f !== "registry.json");
if (rfiles.length !== 40) fail.push("r/ has " + rfiles.length + " component files, expected 40");
for (const id of docIds) {
  const p = join(rdir, id + ".json");
  if (!existsSync(p)) { fail.push("missing registry file r/" + id + ".json"); continue; }
  const item = JSON.parse(readFileSync(p, "utf8"));
  if (!item.files?.[0]?.content?.includes("export function")) fail.push("registry " + id + " content has no export function");
  if (item.registryDependencies === undefined) fail.push("registry " + id + " missing registryDependencies");
}
const index = JSON.parse(read("r/registry.json"));
if (index.items.length !== 40) fail.push("r/registry.json has " + index.items.length + " items, expected 40");
if (!fail.length) ok("registry: 40 items + registry.json + components.json agree");

// --- docs text mentions ---
for (const p of ["README.md", "llms.txt", "site/llms.txt"]) {
  const text = read(p);
  if (!text.includes("Huntington")) fail.push(p + " does not mention Huntington");
  for (const id of docIds) {
    if (p === "README.md" && !text.includes(id) && !text.toLowerCase().includes(id.replace(/-/g, " "))) {
      // README lists names, not ids; checked below by name.
    }
  }
}
const readme = read("README.md");
for (const id of docIds) {
  const name = manifest.components.find((c) => c.id === id)?.name;
  if (name && !readme.includes(name)) fail.push("README missing component " + name);
}
const lic = read("LICENSE");
if (!lic.includes("MIT License") || !lic.includes("hiddeninwest")) fail.push("LICENSE must be MIT with hiddeninwest copyright");
const vercel = JSON.parse(read("vercel.json"));
if (!vercel.rewrites?.length) fail.push("vercel.json must keep the rewrites");
if (!vercel.rewrites?.some((r) => r.source === "/huntington/r/(.*)" && r.destination === "/r/$1")) fail.push("vercel.json missing /huntington/r/(.*) -> /r/$1 rewrite");
if (!vercel.rewrites?.some((r) => r.source === "/huntington" && r.destination === "/site/index.html")) fail.push("vercel.json missing /huntington -> /site/index.html rewrite");
if (!fail.length) ok("README / llms.txt / LICENSE / vercel.json checks pass");

if (fail.length) {
  console.error("\nFAIL (" + fail.length + "):");
  for (const f of fail) console.error(" - " + f);
  process.exit(1);
}
console.log("\nVERIFY OK: Huntington v0.2.0 — 40 components, 5 moods, registry consistent.");
