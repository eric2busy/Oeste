// Mesa verify: token agreement (css/json/js) + WCAG AA contrast for text pairs.
// Run: node scripts/verify.mjs  (node >= 18, no deps)
import { readFileSync, readdirSync, existsSync } from "node:fs";
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

// --- CSS guard: no stray */ outside comments (a premature */ once closed
// the header comment early, leaving bare text that merged with the :root
// selector and made the browser drop the whole light token block) ---
const cssNoComments = css.replace(/\/\*[\s\S]*?\*\//g, "");
check("no stray */ outside comments", !cssNoComments.includes("*/"));

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
const lightBlock = cssBlock(":root, [data-theme='light']");
const darkBlock = cssBlock(":root[data-theme='dark'], [data-theme='dark']");

// Mesa token shape: top-level color = light values + theme-independent fixed
// values; color.darkMode overrides for dark. Dark map = light + darkMode.
const lightColor = {};
for (const [k, v] of Object.entries(json.color)) {
  if (k !== "darkMode") lightColor[k] = v;
}
const darkColor = { ...lightColor, ...json.color.darkMode };

// token key -> [json key, css var suffix]
const KEYS = [
  ["bg", "bg", "color-bg"],
  ["paper", "paper", "color-paper"],
  ["surface", "card", "color-surface"],
  ["dark", "dark", "color-dark"],
  ["text", "ink", "color-text"],
  ["muted", "inkSoft", "color-muted"],
  ["faint", "inkFaint", "color-faint"],
  ["border", "line", "color-border"],
  ["borderSoft", "lineSoft", "color-border-soft"],
  ["accent", "accent", "color-accent"],
  ["oxblood", "oxblood", "color-oxblood"],
  ["accentDeep", "oxbloodDeep", "color-accent-deep"],
  ["ok", "ok", "color-ok"],
  ["warn", "warn", "color-warn"],
  ["wash", "wash", "color-wash"],
  ["btnText", "btnText", "color-btn-text"],
  ["navBg", "navBg", "color-nav-bg"],
  ["focusRing", "focusRing", "color-focus-ring"],
  ["selectionBg", "selectionBg", "color-selection-bg"],
  ["selectionText", "selectionText", "color-selection-text"],
  ["scrim", "paletteScrim", "color-scrim"],
  ["heroEm", "heroEm", "color-hero-em"],
  ["ghostBtnBorder", "ghostBtnBorder", "color-ghost-btn-border"],
  ["pillOpenText", "pillOpenText", "color-pill-open-text"],
  ["pillVerifyingBg", "pillVerifyingBg", "color-pill-verifying-bg"],
  ["pillVerifyingText", "pillVerifyingText", "color-pill-verifying-text"],
  ["diffBg", "diffBandBg", "color-diff-bg"],
  ["diffText", "diffBandText", "color-diff-text"],
  ["diffHeading", "diffBandHeading", "color-diff-heading"],
  ["diffKicker", "diffBandKicker", "color-diff-kicker"],
  ["diffMuted", "diffBandMuted", "color-diff-muted"],
  ["diffLine", "diffBandLine", "color-diff-line"],
  ["ctaBg", "ctaBandBg", "color-cta-bg"],
  ["ctaText", "ctaBandText", "color-cta-text"],
  ["ctaHeading", "ctaBandHeading", "color-cta-heading"],
  ["ctaMuted", "ctaBandMuted", "color-cta-muted"],
  ["pillRewardBg", "pillRewardBg", "color-pill-reward-bg"],
  ["pillRewardText", "pillRewardText", "color-pill-reward-text"],
  ["pillRewardBorder", "pillRewardBorder", "color-pill-reward-border"],
  ["stampOpen", "stampOpen", "color-stamp-open"],
  ["stampNew", "stampNew", "color-stamp-new"],
  ["stampReview", "stampReview", "color-stamp-review"],
  ["stampClosed", "stampClosed", "color-stamp-closed"],
  ["lampOff", "assignLampOff", "color-lamp-off"],
  ["lampOffRing", "assignLampOffRing", "color-lamp-off-ring"],
  ["lampOn", "assignLampOn", "color-lamp-on"],
  ["queuePing", "queuePingRing", "color-queue-ping"],
];

function norm(v) {
  return String(v).replace(/\s+/g, "").replace(/0\.10\)/g, "0.1)").toLowerCase();
}
for (const theme of ["light", "dark"]) {
  const map = theme === "light" ? lightColor : darkColor;
  for (const [, jsonKey, cssName] of KEYS) {
    const cssVal = norm(cssVar(theme === "light" ? lightBlock : darkBlock, cssName));
    const jsonVal = norm(map[jsonKey]);
    check(`token ${theme}.${jsonKey} css==json`, cssVal === jsonVal, `css=${cssVal} json=${jsonVal}`);
    const jsNorm = norm(js);
    check(`token ${theme}.${jsonKey} present in index.js`, jsNorm.includes(jsonVal), jsonVal);
  }
}

// --- Radius keys present in CSS (per-component radii, no single scale) ---
const kebab = (s) => s.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
for (const key of Object.keys(json.radius)) {
  const cssVal = cssVar(lightBlock, "radius-" + kebab(key));
  check(`radius ${key} present in css`, cssVal !== null, `--radius-${kebab(key)}`);
  check(`radius ${key} value matches json`, norm(cssVal || "") === norm(json.radius[key]), `${cssVal} vs ${json.radius[key]}`);
}

// --- Contrast ---
// Pairs below must meet WCAG AA 4.5:1 for normal text.
// DOCUMENTED EXCEPTIONS (not in this list; see Accessibility):
// dark accent-deep #a52336 = 2.66:1 (fill only, never text) and Stamp Open
// on dark card 3.78:1 (borders + short labels, non-text contrast).
// Accent is the text-safe tint (#da4e63 in dark); solid fills with white
// text use oxblood. Values aligned with the Figma library v0.8.0 (2026-10-20).
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
  ["light", "text on bg", lightColor.ink, lightColor.bg],
  ["light", "muted on bg", lightColor.inkSoft, lightColor.bg],
  ["light", "accent on bg", lightColor.oxblood, lightColor.bg],
  ["light", "accent-deep on bg", lightColor.oxbloodDeep, lightColor.bg],
  ["light", "ok on bg", lightColor.ok, lightColor.bg],
  ["light", "warn on bg", lightColor.warn, lightColor.bg],
  ["light", "btn-text on ink", lightColor.btnText, lightColor.ink],
  ["light", "white on accent", "#ffffff", lightColor.oxblood],
  ["light", "text on surface", lightColor.ink, lightColor.card],
  ["light", "diff text on diff bg", lightColor.diffBandText, lightColor.diffBandBg],
  ["light", "diff kicker on diff bg", lightColor.diffBandKicker, lightColor.diffBandBg],
  ["light", "cta text on cta bg", lightColor.ctaBandText, lightColor.ctaBandBg],
  ["light", "cta muted on cta bg", lightColor.ctaBandMuted, lightColor.ctaBandBg],
  ["light", "pill reward text on bg", lightColor.pillRewardText, lightColor.pillRewardBg],
  ["light", "pill verifying text on bg", lightColor.pillVerifyingText, lightColor.pillVerifyingBg],
  ["dark", "text on bg", darkColor.ink, darkColor.bg],
  ["dark", "muted on bg", darkColor.inkSoft, darkColor.bg],
  ["dark", "ok on bg", darkColor.ok, darkColor.bg],
  ["dark", "btn-text on accent", darkColor.btnText, darkColor.oxblood],
  ["dark", "hero-em on bg", darkColor.heroEm, darkColor.bg],
  ["dark", "text on surface", darkColor.ink, darkColor.card],
  ["dark", "ok on surface", darkColor.ok, darkColor.card],
  ["dark", "diff text on diff bg", darkColor.diffBandText, darkColor.diffBandBg],
  ["dark", "diff kicker on diff bg", darkColor.diffBandKicker, darkColor.diffBandBg],
  ["dark", "cta text on cta bg", darkColor.ctaBandText, darkColor.ctaBandBg],
  ["dark", "cta muted on cta bg", darkColor.ctaBandMuted, darkColor.ctaBandBg],
  ["dark", "pill verifying text on bg", darkColor.pillVerifyingText, darkColor.pillVerifyingBg],
  ["dark", "accent on bg", darkColor.accent, darkColor.bg],
  ["dark", "accent on surface", darkColor.accent, darkColor.card],
  ["light", "faint on bg", lightColor.inkFaint, lightColor.bg],
  ["light", "faint on surface", lightColor.inkFaint, lightColor.card],
  ["dark", "faint on bg", darkColor.inkFaint, darkColor.bg],
  ["dark", "faint on surface", darkColor.inkFaint, darkColor.card],
];
for (const [theme, label, fg, bg] of PAIRS) {
  const r = ratio(fg, bg);
  check(`contrast ${theme} ${label} = ${r.toFixed(2)}:1 >= 4.5`, r >= 4.5, `${fg} on ${bg}`);
}

// --- Code highlighting colors: --code-* on surface, both themes ---
const CODE_KEYS = ["keyword", "string", "number", "comment", "key", "punct"];
for (const theme of ["light", "dark"]) {
  const block = theme === "light" ? lightBlock : darkBlock;
  const surf = theme === "light" ? lightColor.card : darkColor.card;
  for (const k of CODE_KEYS) {
    const val = cssVar(block, "code-" + k);
    if (!val) { check(`code color ${theme}.${k} present in css`, false, "missing --code-" + k); continue; }
    const r = ratio(val, surf);
    check(`contrast code ${theme}.${k} = ${r.toFixed(2)}:1 >= 4.5`, r >= 4.5, `${val} on ${surf}`);
  }
}

// --- Registry: r/*.json + components.json exist, parse, and agree ---
const manifest = JSON.parse(readFileSync(join(root, "components.json"), "utf8"));
check("registry manifest version matches tokens.json", manifest.version === json.version, manifest.version);
check("registry manifest has 73 components", manifest.components.length === 73, String(manifest.components.length));
const registryIndex = JSON.parse(readFileSync(join(root, "r/registry.json"), "utf8"));
check("registry index has 73 items", registryIndex.items.length === 73, String(registryIndex.items.length));
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
  check(`registry item ${c.id} registryUrl matches manifest`, c.registryUrl === `https://oeste.hiddeninwest.com/mesa/r/${c.id}.json`);
  check(`registry item ${c.id} githubRawUrl matches manifest`, c.githubRawUrl === `https://raw.githubusercontent.com/eric2busy/Oeste/main/mesa/r/${c.id}.json`);
  check(`registry item ${c.id} docsUrl matches manifest`, c.docsUrl === `#/components/${c.id}`);
}

if (failures > 0) { console.error(`\n${failures} check(s) failed.`); process.exit(1); }
console.log("\nAll token + contrast checks passed.");
