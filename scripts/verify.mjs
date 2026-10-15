// Oeste verify: token agreement (css/json/js) + WCAG AA contrast for text pairs.
// Run: node scripts/verify.mjs  (node >= 18, no deps)
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(root, "src/tokens.css"), "utf8");
const json = JSON.parse(readFileSync(join(root, "src/tokens.json"), "utf8"));
const js = readFileSync(join(root, "src/index.js"), "utf8");

let failures = 0;
const check = (label, cond, detail = "") => {
  console.log(`${cond ? "PASS" : "FAIL"}  ${label}${detail ? " — " + detail : ""}`);
  if (!cond) failures++;
};

// --- CSS extraction: split :root blocks ---
function cssBlock(selector) {
  const re = new RegExp(selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\{([\\s\\S]*?)\\}", "m");
  const m = css.match(re);
  return m ? m[1] : "";
}
function cssVar(block, name) {
  const m = block.match(new RegExp(`--${name}:\\s*([^;]+);`));
  return m ? m[1].trim().toLowerCase() : null;
}
const lightBlock = cssBlock(":root");
const darkBlock = cssBlock(":root[data-theme='dark']");

const KEYS = ["bg", "surface", "text", "muted", "border", "accent", "onAccent", "accentAlt", "rust", "danger", "success", "warning", "focus"];
const CSS_NAME = { bg: "color-bg", surface: "color-surface", text: "color-text", muted: "color-muted", border: "color-border", accent: "color-accent", onAccent: "color-on-accent", accentAlt: "color-accent-alt", rust: "color-rust", danger: "color-danger", success: "color-success", warning: "color-warning", focus: "color-focus" };

function norm(v) {
  return String(v).replace(/\s+/g, "").replace(/0\.10\)/g, "0.1)").toLowerCase();
}
for (const theme of ["light", "dark"]) {
  for (const k of KEYS) {
    const cssVal = norm(cssVar(theme === "light" ? lightBlock : darkBlock, CSS_NAME[k]));
    const jsonVal = norm(json.color[theme][k]);
    check(`token ${theme}.${k} css==json`, cssVal === jsonVal, `css=${cssVal} json=${jsonVal}`);
    // JS: look for the value in index.js, normalized the same way.
    const jsNorm = norm(js);
    const jsHas = jsNorm.includes(jsonVal) || jsNorm.includes(jsonVal.toUpperCase().toLowerCase());
    check(`token ${theme}.${k} present in index.js`, jsHas, jsonVal);
  }
}

// --- Contrast ---
function lum(hex) {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const f = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function ratio(a, b) {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
const PAIRS = [
  ["light", "text on bg", json.color.light.text, json.color.light.bg],
  ["light", "muted on bg", json.color.light.muted, json.color.light.bg],
  ["light", "danger on bg", json.color.light.danger, json.color.light.bg],
  ["light", "success on bg", json.color.light.success, json.color.light.bg],
  ["light", "warning on bg", json.color.light.warning, json.color.light.bg],
  ["light", "ink on accent", json.color.light.onAccent, json.color.light.accent],
  ["light", "bg on danger (reversed)", json.color.light.bg, json.color.light.danger],
  ["light", "sage on bg", json.color.light.accentAlt, json.color.light.bg],
  ["light", "text on surface", json.color.light.text, json.color.light.surface],
  ["dark", "text on bg", json.color.dark.text, json.color.dark.bg],
  ["dark", "muted on bg", json.color.dark.muted, json.color.dark.bg],
  ["dark", "danger on bg", json.color.dark.danger, json.color.dark.bg],
  ["dark", "success on bg", json.color.dark.success, json.color.dark.bg],
  ["dark", "warning on bg", json.color.dark.warning, json.color.dark.bg],
  ["dark", "ink on accent", json.color.dark.onAccent, json.color.dark.accent],
  ["dark", "sage on bg", json.color.dark.accentAlt, json.color.dark.bg],
  ["dark", "text on surface", json.color.dark.text, json.color.dark.surface],
];
for (const [theme, label, fg, bg] of PAIRS) {
  const r = ratio(fg, bg);
  check(`contrast ${theme} ${label} = ${r.toFixed(2)}:1 >= 4.5`, r >= 4.5, `${fg} on ${bg}`);
}

// --- Code highlighting colors: --code-* on surface, both themes ---
const CODE_KEYS = ["keyword", "string", "number", "comment", "key", "punct"];
for (const theme of ["light", "dark"]) {
  const block = theme === "light" ? lightBlock : darkBlock;
  const surf = theme === "light" ? json.color.light.surface : json.color.dark.surface;
  for (const k of CODE_KEYS) {
    const val = cssVar(block, "code-" + k);
    if (!val) { check(`code color ${theme}.${k} present in css`, false, "missing --code-" + k); continue; }
    const r = ratio(val, surf);
    check(`contrast code ${theme}.${k} = ${r.toFixed(2)}:1 >= 4.5`, r >= 4.5, `${val} on ${surf}`);
  }
}

// --- Registry: r/*.json + components.json exist, parse, and agree ---
import { readdirSync, existsSync } from "node:fs";
const manifest = JSON.parse(readFileSync(join(root, "components.json"), "utf8"));
check("registry manifest version matches tokens.json", manifest.version === json.version, manifest.version);
check("registry manifest has 29 components", manifest.components.length === 29, String(manifest.components.length));
const registryIndex = JSON.parse(readFileSync(join(root, "r/registry.json"), "utf8"));
check("registry index has 29 items", registryIndex.items.length === 29, String(registryIndex.items.length));
const manifestIds = new Set(manifest.components.map((c) => c.id));
const indexIds = new Set(registryIndex.items.map((i) => i.id));
check("registry index ids == manifest ids", manifestIds.size === indexIds.size && [...manifestIds].every((id) => indexIds.has(id)));
for (const c of manifest.components) {
  const file = join(root, "r", c.id + ".json");
  check(`registry item ${c.id} exists`, existsSync(file));
  if (!existsSync(file)) continue;
  const item = JSON.parse(readFileSync(file, "utf8"));
  const content = item.files?.[0]?.content || "";
  check(`registry item ${c.id} content non-empty + exports its component`, content.length > 100 && content.includes("export function " + c.name), `${content.length} chars`);
  check(`registry item ${c.id} registryUrl matches manifest`, c.registryUrl === `https://oeste.hiddeninwest.com/r/${c.id}.json`);
  check(`registry item ${c.id} githubRawUrl matches manifest`, c.githubRawUrl === `https://raw.githubusercontent.com/eric2busy/Oeste/main/r/${c.id}.json`);
  check(`registry item ${c.id} docsUrl matches manifest`, c.docsUrl === `#/components/${c.id}`);
}

if (failures > 0) { console.error(`\n${failures} check(s) failed.`); process.exit(1); }
console.log("\nAll token + contrast checks passed.");
