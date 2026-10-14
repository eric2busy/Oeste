/* Oeste docs site — vanilla JS, hash routing, no build step. */
"use strict";

const COMPONENTS = [
  { id: "button", name: "Button", tagline: "One action. A clear hierarchy.",
    anatomy: ["Label", "Surface", "Focus state", "Icon slot (optional)"],
    props: [["children", "ReactNode", "Yes", "Button label."], ["variant", "primary | secondary | ghost | danger", "No — primary", "Visual hierarchy. Danger only for destructive actions."], ["size", "sm | md | lg", "No — md", "Padding + type. All sizes keep 44px min touch."], ["disabled", "boolean", "No — false", "Blocks interaction. Never color alone."], ["loading", "boolean", "No — false", "Shows progress, sets aria-busy, blocks clicks."]],
    keyboard: [["Tab", "Move focus to the button."], ["Enter / Space", "Activate. Space activates on key-up."]],
    invariants: ["Label is always visible text, never icon-only without aria-label.", "Disabled buttons never rely on color alone.", "Focus is 2px ink/paper outline, never removed.", "Danger variant only for destructive actions with a confirm step."],
    contract: { format: "oeste.component.v1", component: "Button", props: { variant: ["primary", "secondary", "ghost", "danger"], size: ["sm", "md", "lg"], disabled: "boolean", loading: "boolean" }, a11y: { focus: "2px ink/paper outline", target: "min 44px", busy: "aria-busy when loading" } },
    prompt: "Build an Oeste Button: variant primary/secondary/ghost/danger, size sm/md/lg, 44px min touch, 2px ink/paper focus outline, aria-busy when loading. Never icon-only without an accessible label. Use Topanga tokens: accent #C47D3B, danger #A83E22 (light) / #E07A52 (dark).",
    cli: "npx @oeste/ui add button",
    code: "import { Button } from \"@oeste/ui\";\n\nexport function SaveAction() {\n  return <Button variant=\"primary\" onClick={() => {}}>Save changes</Button>;\n}\n// Dark mode: built in via dark: classes. Focus: 2px ink/paper outline." },
  { id: "input", name: "Input", tagline: "Persistent label. Described errors. No placeholder-only fields.",
    anatomy: ["Label", "Field", "Hint", "Error message"],
    props: [["label", "string", "Yes", "Persistent visible label."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["error", "string", "No", "Sets aria-invalid + described error."], ["hint", "string", "No", "Helper text via aria-describedby."], ["disabled", "boolean", "No — false", "Blocks editing."]],
    keyboard: [["Tab", "Move focus into / out of the field."], ["Type", "Enter text. Errors announced via role=status."]],
    invariants: ["Label is always visible, never placeholder-only.", "Errors use text + role, never color alone.", "aria-invalid is set when error is present.", "Error text uses Danger (#A83E22 light / #E07A52 dark), never Canyon Rust."],
    contract: { format: "oeste.component.v1", component: "Input", props: { label: "string", error: "string?", hint: "string?", disabled: "boolean" }, a11y: { invalid: "aria-invalid + described error", label: "persistent <label>", errorRole: "status" } },
    prompt: "Build an Oeste Input with a persistent visible label, aria-invalid + described error when error is set, error text in Danger #A83E22 (light) / #E07A52 (dark). Never use placeholder as the label. Never use Canyon Rust for error text.",
    cli: "npx @oeste/ui add input",
    code: "import { Input } from \"@oeste/ui\";\n\nexport function NameField({ value, onChange, error }) {\n  return <Input label=\"Project name\" value={value} onChange={onChange} error={error} hint=\"At least 3 characters.\" />;\n}\n// Related: Textarea and Select share the same label + error pattern." },
  { id: "dialog", name: "Dialog", tagline: "Accessible modal. Focus in, Escape out, focus back.",
    anatomy: ["Trigger", "Backdrop", "Surface", "Title + description", "Fields", "Actions"],
    props: [["open", "boolean", "Yes", "Controls visibility."], ["onOpenChange", "(open) => void", "Yes", "Fires on close / Escape / backdrop."], ["title", "string", "Yes", "Accessible name via aria-labelledby."], ["description", "string", "Yes", "Accessible description."], ["children", "ReactNode", "No", "Dialog body."]],
    keyboard: [["Escape", "Close the dialog, return focus to trigger."], ["Tab / Shift+Tab", "Trap focus inside the dialog."], ["Enter", "Activate the focused action."]],
    invariants: ["Focus moves into the dialog on open and returns to trigger on close.", "Escape always closes.", "Backdrop click closes; content is inert behind the dialog.", "Title + description are always present."],
    contract: { format: "oeste.component.v1", component: "Dialog", props: { open: "boolean", title: "string", description: "string" }, a11y: { modal: "aria-modal=true", labelledby: "title", describedby: "description", focus: "trap + restore on close" } },
    prompt: "Build an Oeste Dialog using native <dialog> + showModal. Title + description required. Escape closes, focus traps inside, focus returns to trigger on close. Backdrop is inert. Use Topanga tokens, hairline border, dialog shadow.",
    cli: "npx @oeste/ui add dialog",
    code: "import { useState } from \"react\";\nimport { Button, Dialog, Input } from \"@oeste/ui\";\n\nexport function EditProject() {\n  const [open, setOpen] = useState(false);\n  return (<>\n    <Button onClick={() => setOpen(true)}>Edit project</Button>\n    <Dialog open={open} onOpenChange={setOpen} title=\"Edit project\" description=\"Rename this project.\">\n      <Input label=\"Project name\" value=\"\" onChange={() => {}} />\n    </Dialog>\n  </>);\n}" },
  { id: "card", name: "Card", tagline: "Structural container with proper heading hierarchy.",
    anatomy: ["Heading", "Body", "Actions (optional)"],
    props: [["title", "string", "Yes", "Heading text, linked via aria-labelledby."], ["headingLevel", "2 | 3 | 4", "No — 3", "Keeps document outline correct."], ["children", "ReactNode", "No", "Card body."]],
    keyboard: [["Tab", "Move through interactive content inside the card."]],
    invariants: ["Heading level matches document outline.", "Cards never use color alone to convey status.", "Interactive cards use a real <button> or <a>, never a clickable div."],
    contract: { format: "oeste.component.v1", component: "Card", props: { title: "string", headingLevel: [2, 3, 4] }, a11y: { labelledby: "heading", section: "native <section>" } },
    prompt: "Build an Oeste Card: native <section> + aria-labelledby, heading level matching the page outline, hairline border, card shadow. Never use a clickable div for an interactive card.",
    cli: "npx @oeste/ui add card",
    code: "import { Card } from \"@oeste/ui\";\n\nexport function NoteCard() {\n  return <Card title=\"Field notes\" headingLevel={3}><p>Room to think.</p></Card>;\n}" },
  { id: "tabs", name: "Tabs", tagline: "Roving tabindex. Arrow keys move, Home/End jump.",
    anatomy: ["Tab list", "Tab", "Panel"],
    props: [["items", "{ label, content }[]", "Yes", "Tabs + panels."], ["defaultIndex", "number", "No — 0", "Initially selected tab."]],
    keyboard: [["ArrowRight / ArrowLeft", "Move to next / previous tab."], ["Home / End", "Jump to first / last tab."], ["Tab", "Move into the active panel."]],
    invariants: ["Only the active tab is in the tab order (roving tabindex).", "Panels are labelled by their tab.", "Inactive panels are hidden, not just visually."],
    contract: { format: "oeste.component.v1", component: "Tabs", props: { items: "array", defaultIndex: "number" }, a11y: { tabs: "roving tabindex", panels: "aria-labelledby tab" } },
    prompt: "Build Oeste Tabs with roving tabindex: only the active tab has tabIndex 0. ArrowRight/Left move, Home/End jump, panels labelled by their tab, inactive panels hidden.",
    cli: "npx @oeste/ui add tabs",
    code: "import { Tabs } from \"@oeste/ui\";\n\nexport function Views() {\n  return <Tabs items={[{ label: \"Overview\", content: \"Overview panel.\" }, { label: \"Details\", content: \"Details panel.\" }]} />;\n}" },
  { id: "toast", name: "Toast", tagline: "Polite status. Manual dismissal. Nothing auto-vanishes.",
    anatomy: ["Message", "Dismiss button"],
    props: [["message", "string", "Yes", "Status text."], ["open", "boolean", "No — false", "Controls visibility."], ["onDismiss", "() => void", "Yes", "Dismiss handler."]],
    keyboard: [["Tab", "Move focus to Dismiss."], ["Enter / Space", "Dismiss the toast."]],
    invariants: ["Toast is role=status + aria-live=polite.", "No auto-expiry: the user dismisses it.", "Message is text, never color alone."],
    contract: { format: "oeste.component.v1", component: "Toast", props: { message: "string", open: "boolean" }, a11y: { live: "polite", role: "status", dismiss: "manual, focusable" } },
    prompt: "Build an Oeste Toast: single clean card (no split rounded top/bottom), role=status + aria-live=polite, manual Dismiss button, no auto-expiry. Keep it in one card.",
    cli: "npx @oeste/ui add toast",
    code: "import { useState } from \"react\";\nimport { Button, Toast } from \"@oeste/ui\";\n\nexport function Preview() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>Show toast</Button><Toast message=\"Preview complete. Nothing was sent.\" open={open} onDismiss={() => setOpen(false)} /></>);\n}" },
  { id: "badge", name: "Badge", tagline: "Small status. Text first, color second.",
    anatomy: ["Label"],
    props: [["children", "ReactNode", "Yes", "Badge label."], ["tone", "neutral | accent | success | danger", "No — neutral", "Status tone. Text always carries the meaning."]],
    keyboard: [["—", "Badge is not interactive. No keyboard behavior."]],
    invariants: ["Meaning is in the text, never color alone.", "Danger tone uses Danger token, not Canyon Rust.", "Badge text meets 4.5:1 on its background."],
    contract: { format: "oeste.component.v1", component: "Badge", props: { tone: ["neutral", "accent", "success", "danger"] }, a11y: { meaning: "text, never color alone" } },
    prompt: "Build an Oeste Badge: pill, border + tint, tone neutral/accent/success/danger. Meaning in text, never color alone. Danger tone uses Danger #A83E22 / #E07A52.",
    cli: "npx @oeste/ui add badge",
    code: "import { Badge } from \"@oeste/ui\";\n\nexport function Status() {\n  return <Badge tone=\"success\">Ready</Badge>;\n}" },
  { id: "checkbox", name: "Checkbox", tagline: "Real input. Visible label. Described help.",
    anatomy: ["Box", "Label", "Description (optional)"],
    props: [["label", "string", "Yes", "Visible label."], ["checked / onChange", "boolean / (v) => void", "Yes", "Controlled state."], ["description", "string", "No", "Helper text."], ["disabled", "boolean", "No — false", "Blocks toggling."]],
    keyboard: [["Tab", "Move focus to the checkbox."], ["Space", "Toggle."]],
    invariants: ["Native <input type=checkbox>, never a div.", "Label is clickable and linked via htmlFor.", "Description is linked via aria-describedby."],
    contract: { format: "oeste.component.v1", component: "Checkbox", props: { label: "string", checked: "boolean", disabled: "boolean" }, a11y: { native: "input[type=checkbox]", label: "htmlFor", desc: "aria-describedby" } },
    prompt: "Build an Oeste Checkbox with a native input, clickable label via htmlFor, optional described help text, accent color for the checked state. Never build a checkbox from a div.",
    cli: "npx @oeste/ui add checkbox",
    code: "import { useState } from \"react\";\nimport { Checkbox } from \"@oeste/ui\";\n\nexport function Notify() {\n  const [checked, setChecked] = useState(false);\n  return <Checkbox label=\"Email me updates\" checked={checked} onChange={setChecked} description=\"One email per change.\" />;\n}" },
  { id: "switch", name: "Switch", tagline: "On / off with a real role=switch.",
    anatomy: ["Track", "Thumb", "Label", "Description (optional)"],
    props: [["label", "string", "Yes", "Visible label."], ["checked / onChange", "boolean / (v) => void", "Yes", "Controlled state."], ["description", "string", "No", "Helper text."], ["disabled", "boolean", "No — false", "Blocks toggling."]],
    keyboard: [["Tab", "Move focus to the switch."], ["Space / Enter", "Toggle."]],
    invariants: ["Uses role=switch + aria-checked.", "State is visible by position + label, never color alone.", "Label is clickable."],
    contract: { format: "oeste.component.v1", component: "Switch", props: { label: "string", checked: "boolean", disabled: "boolean" }, a11y: { role: "switch", checked: "aria-checked", state: "position + label, never color alone" } },
    prompt: "Build an Oeste Switch with role=switch + aria-checked, thumb position showing state, clickable label. State visible by position + label, never color alone.",
    cli: "npx @oeste/ui add switch",
    code: "import { useState } from \"react\";\nimport { Switch } from \"@oeste/ui\";\n\nexport function DarkMode() {\n  const [checked, setChecked] = useState(false);\n  return <Switch label=\"Dark mode\" checked={checked} onChange={setChecked} />;\n}" },
];

const TOKENS = [
  { name: "Paper / bg", light: "#F6F4F1", dark: "#121110", use: "Page background." },
  { name: "Surface", light: "#FCFAF7", dark: "#1C1917", use: "Cards, demos, panels." },
  { name: "Ink / text", light: "#1C1917", dark: "#F5F3EF", use: "Body text, headings." },
  { name: "Muted", light: "#706963", dark: "#9E968F", use: "Secondary text, captions." },
  { name: "Warm Ochre (accent)", light: "#C47D3B", dark: "#DB914E", use: "Primary actions, active states." },
  { name: "Sage (accent-alt)", light: "#5E6B5A", dark: "#8B9B87", use: "Secondary accent, success-adjacent." },
  { name: "Canyon Rust (decorative)", light: "#B85B35", dark: "#D98A63", use: "Large decorative accents only. Never small error text." },
  { name: "Danger (semantic)", light: "#A83E22", dark: "#E07A52", use: "Errors, destructive actions. WCAG AA 4.5:1 for normal text." },
  { name: "Success", light: "#2F6B3A", dark: "#6BA368", use: "Success states." },
  { name: "Warning", light: "#7A5A12", dark: "#D9A441", use: "Warnings." },
  { name: "Focus", light: "#1C1917", dark: "#F5F3EF", use: "2px focus outline. Distinct from danger." },
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const $ = (sel) => document.querySelector(sel);

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("oeste-theme", theme);
  const btn = $(" #themeToggle".trim());
  btn.textContent = theme === "light" ? "Light" : "Dark";
  btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  btn.setAttribute("aria-label", "Theme: " + (theme === "light" ? "Light" : "Dark") + ". Switch to " + (theme === "light" ? "dark" : "light") + ".");
}
function currentTheme() { return document.documentElement.dataset.theme || "light"; }

function parseHash() {
  const raw = location.hash.replace(/^#\/?/, "") || "home";
  const [path, query] = raw.split("?");
  const params = new URLSearchParams(query || "");
  const parts = path.split("/");
  return { route: parts[0] || "home", id: parts[1] || "", lens: params.get("lens") || "human" };
}
function lensLink(route, id, lens) {
  const base = route === "components" ? "#/components/" + id : "#/" + route;
  return base + "?lens=" + lens;
}
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => showToast((label || "Copied") + " to clipboard."));
}
function showToast(msg) {
  const region = $(" #toastRegion".trim());
  region.innerHTML = '<div class="site-toast" role="status"><p style="margin:0;flex:1">' + esc(msg) + '</p><button type="button" class="copy-btn secondary" data-toast-dismiss>Dismiss</button></div>';
  region.querySelector("[data-toast-dismiss]").addEventListener("click", () => { region.innerHTML = ""; });
}

function lensBar(route, id, lens) {
  const lenses = [["human", "Human", "Understand the details"], ["agent", "Agent", "Machine-readable spec"], ["vibe", "Vibe", "Copy and ship"]];
  return '<div class="lens-bar" role="group" aria-label="Perspective">' + lenses.map(([key, label]) => '<a class="lens-btn' + (lens === key ? " active" : "") + '" href="' + lensLink(route, id, key) + '" aria-pressed="' + (lens === key) + '">' + label + "</a>").join("") + "</div>"
    + '<p class="muted">' + esc(lenses.find(([k]) => k === lens)[2]) + "</p>";
}

function demoHTML(c) {
  if (c.id === "button") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><div class="demo-row">'
    + '<button type="button" class="btn btn-primary" data-demo-btn>Try button</button>'
    + '<button type="button" class="btn btn-secondary">Secondary</button>'
    + '<button type="button" class="btn btn-secondary" style="border:0">Ghost</button>'
    + '<button type="button" class="btn" style="background:var(--color-danger);color:#F6F4F1">Danger</button>'
    + '<span id="demoBtnOut" aria-live="polite"></span></div></div>';
  if (c.id === "input") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Type fewer than 3 characters and press Enter.</p>'
    + '<div class="field" style="max-width:420px"><label for="demoInput">Project name</label><input id="demoInput" type="text" value="Topanga" aria-describedby="demoInputHint"><p class="hint" id="demoInputHint">At least 3 characters.</p><p class="error" id="demoInputError" role="status"></p></div></div>';
  if (c.id === "dialog") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><button type="button" class="btn btn-primary" data-open-dialog>Open dialog</button>'
    + '<dialog class="site-dialog" id="demoDialog"><h3 style="margin-top:0">Edit project</h3><p class="muted">Rename this project.</p><div class="field" style="margin-top:16px"><label for="demoDialogInput">Project name</label><input id="demoDialogInput" type="text" value="Topanga"></div>'
    + '<div class="demo-row" style="margin-top:20px"><button type="button" class="btn btn-primary" data-close-dialog>Preview changes</button><button type="button" class="btn btn-secondary" data-close-dialog>Cancel</button></div></dialog></div>';
  if (c.id === "card") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><section aria-labelledby="demoCardTitle" style="border:1px solid var(--color-border);border-radius:12px;padding:24px;background:var(--color-bg)"><h3 id="demoCardTitle" style="margin:0">Field notes</h3><p style="margin:12px 0 0">Room to think.</p></section></div>';
  if (c.id === "tabs") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Use Arrow keys, Home, End.</p><div class="tablist" role="tablist" aria-label="Content views" id="demoTablist">'
    + '<button type="button" class="tab-btn active" role="tab" aria-selected="true" aria-controls="demoPanel0" id="demoTab0" tabindex="0" data-tab="0">Overview</button>'
    + '<button type="button" class="tab-btn" role="tab" aria-selected="false" aria-controls="demoPanel1" id="demoTab1" tabindex="-1" data-tab="1">Details</button>'
    + '<button type="button" class="tab-btn" role="tab" aria-selected="false" aria-controls="demoPanel2" id="demoTab2" tabindex="-1" data-tab="2">Notes</button></div>'
    + '<div id="demoPanel0" role="tabpanel" aria-labelledby="demoTab0" class="tab-panel">Overview panel.</div>'
    + '<div id="demoPanel1" role="tabpanel" aria-labelledby="demoTab1" class="tab-panel" hidden>Details panel.</div>'
    + '<div id="demoPanel2" role="tabpanel" aria-labelledby="demoTab2" class="tab-panel" hidden>Notes panel.</div></div>';
  if (c.id === "toast") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><button type="button" class="btn btn-primary" data-show-toast>Show toast</button></div>';
  if (c.id === "badge") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><div class="demo-row"><span class="badge">Neutral</span><span class="badge badge-accent">Topanga</span><span class="badge badge-success">Ready</span><span class="badge badge-danger">Needs attention</span></div></div>';
  if (c.id === "checkbox") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><label style="display:flex;gap:12px;align-items:flex-start"><input type="checkbox" style="margin-top:4px;width:20px;height:20px;accent-color:var(--color-accent)"> <span><strong>Email me updates</strong><br><span class="muted">One email per change.</span></span></label></div>';
  if (c.id === "switch") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><button type="button" role="switch" aria-checked="false" class="btn btn-secondary" data-demo-switch aria-label="Dark mode switch demo">Dark mode: off</button></div>';
  return "";
}

function bindDemos() {
  const btn = document.querySelector("[data-demo-btn]");
  if (btn) btn.addEventListener("click", () => { document.getElementById("demoBtnOut").textContent = "Activated."; });
  const input = document.getElementById("demoInput");
  if (input) input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const err = document.getElementById("demoInputError");
      if (input.value.trim().length < 3) { err.textContent = "Enter at least 3 characters."; input.setAttribute("aria-invalid", "true"); }
      else { err.textContent = ""; input.removeAttribute("aria-invalid"); }
    }
  });
  const dialog = document.getElementById("demoDialog");
  if (dialog) {
    document.querySelector("[data-open-dialog]").addEventListener("click", () => dialog.showModal());
    dialog.querySelectorAll("[data-close-dialog]").forEach((b) => b.addEventListener("click", () => dialog.close()));
  }
  const tablist = document.getElementById("demoTablist");
  if (tablist) {
    const tabs = [...tablist.querySelectorAll("[role=tab]")];
    const activate = (i) => {
      tabs.forEach((t, j) => {
        const on = j === i;
        t.classList.toggle("active", on); t.setAttribute("aria-selected", on ? "true" : "false"); t.tabIndex = on ? 0 : -1;
        document.getElementById("demoPanel" + j).hidden = !on;
      });
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => { activate(i); });
      t.addEventListener("keydown", (e) => {
        const map = { ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 };
        if (map[e.key] === undefined) return;
        e.preventDefault(); activate(map[e.key]); tabs[map[e.key]].focus();
      });
    });
  }
  const toastBtn = document.querySelector("[data-show-toast]");
  if (toastBtn) toastBtn.addEventListener("click", () => showToast("Preview complete. Nothing was sent or saved."));
  const sw = document.querySelector("[data-demo-switch]");
  if (sw) sw.addEventListener("click", () => {
    const on = sw.getAttribute("aria-checked") === "true";
    sw.setAttribute("aria-checked", String(!on)); sw.textContent = "Dark mode: " + (!on ? "on" : "off");
  });
  document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", () => copyText(b.dataset.copy, "Copied")));
}

function renderHome() {
  return '<p class="eyebrow">Oeste.design · Component library</p>'
    + "<h1>One system.<br>Three perspectives.</h1>"
    + '<p class="lede">Oeste is a design system for humans, AI agents, and vibe coders. Humans design it. Agents understand it. Vibe coders ship it — from the same tokens, the same contracts, the same components.</p>'
    + '<div class="install-bar"><strong>Start building</strong><code>npx @oeste/ui init</code><button type="button" class="copy-btn" data-copy="npx @oeste/ui init">Copy command</button><span class="muted">Reference command — see <a href="#/getting-started">Getting started</a>.</span></div>'
    + '<div class="home-grid"><div><h2>What Oeste means</h2><p><strong>Oeste</strong> is Spanish for “west” — hiddeninwest, translated. <strong>Topanga</strong> is the first theme: the hidden canyon in Los Angeles where creatives retreat and build. Warm paper, canyon clay, ochre, sagebrush, and precision hairlines. A quieter foundation for three ways of making.</p>'
    + '<p class="muted">From hiddeninwest · Los Angeles. Minimalist, simple, clean, utility-packed. No personal names, no family content, no precise locations — the work speaks.</p></div>'
    + '<div><h2>Three lenses, one system</h2><ul><li><strong>Human</strong> — anatomy, props, keyboard, accessibility.</li><li><strong>Agent</strong> — JSON contract + copyable prompt, so agents don’t hallucinate props.</li><li><strong>Vibe</strong> — CLI + copy-paste React code, dark-mode-complete.</li></ul>'
    + '<p><a class="btn btn-primary" href="#/components/button">Browse components</a></p></div></div>'
    + "<h2>Components</h2><div class=\"index-list\">" + COMPONENTS.map((c, i) => '<a class="index-row" href="#/components/' + c.id + '"><span><strong>' + esc(c.name) + '</strong><br><span class="muted">' + esc(c.tagline) + '</span></span><span class="pill">' + String(i + 1).padStart(2, "0") + " / " + String(COMPONENTS.length).padStart(2, "0") + "</span></a>").join("") + "</div>";
}

function renderComponent(id, lens) {
  const c = COMPONENTS.find((x) => x.id === id) || COMPONENTS[0];
  const rows = c.props.map((p) => "<tr><td><code>" + esc(p[0]) + "</code></td><td><code>" + esc(p[1]) + "</code></td><td>" + esc(p[2]) + "</td><td>" + esc(p[3]) + "</td></tr>").join("");
  const keys = c.keyboard.map((k) => "<tr><td><code>" + esc(k[0]) + "</code></td><td>" + esc(k[1]) + "</td></tr>").join("");
  const inv = c.invariants.map((x) => "<li>" + esc(x) + "</li>").join("");
  let body = '<p class="eyebrow">Components · ' + esc(c.name) + "</p><h1>" + esc(c.name) + "</h1><p class=\"lede\">" + esc(c.tagline) + "</p>";
  body += lensBar("components", c.id, lens);
  body += demoHTML(c);
  if (lens === "human") {
    body += "<h2>Anatomy</h2><ul>" + c.anatomy.map((a) => "<li>" + esc(a) + "</li>").join("") + "</ul>";
    body += '<h2>Props</h2><div style="overflow-x:auto"><table><thead><tr><th>Prop</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody>' + rows + "</tbody></table></div>";
    body += '<h2>Keyboard</h2><div style="overflow-x:auto"><table><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody>' + keys + "</tbody></table></div>";
    body += "<h2>Accessibility invariants</h2><ul>" + inv + "</ul>";
  } else if (lens === "agent") {
    body += "<h2>Agent spec</h2><p>Machine-readable contract. Agents: read this before generating code. Never invent props beyond this contract.</p>";
    body += '<div class="code-head"><h3>JSON contract</h3><button type="button" class="copy-btn" data-copy="' + esc(JSON.stringify(c.contract, null, 2)) + '">Copy JSON</button></div><pre>' + esc(JSON.stringify(c.contract, null, 2)) + "</pre>";
    body += '<div class="code-head"><h3>Agent prompt</h3><button type="button" class="copy-btn" data-copy="' + esc(c.prompt) + '">Copy prompt</button></div><pre>' + esc(c.prompt) + "</pre>";
    body += "<h2>Invariants</h2><ul>" + inv + "</ul>";
  } else {
    body += "<h2>Vibe</h2><p>Copy, paste, ship. All snippets are dark-mode-complete.</p>";
    body += '<div class="code-head"><h3>CLI</h3><button type="button" class="copy-btn" data-copy="' + esc(c.cli) + '">Copy CLI</button></div><pre>' + esc(c.cli) + "</pre>";
    body += '<div class="code-head"><h3>React code</h3><button type="button" class="copy-btn" data-copy="' + esc(c.code) + '">Copy code</button></div><pre>' + esc(c.code) + "</pre>";
    body += '<div class="callout"><strong>Reference command.</strong> The CLI is a reference command, not a guarantee of registry availability. The React snippets work today in any React + Tailwind app.</div>';
  }
  return body;
}

function renderTokens() {
  return '<p class="eyebrow">Foundations</p><h1>Tokens</h1><p class="lede">One source of truth: <code>src/tokens.css</code>, <code>src/tokens.json</code>, and <code>DESIGN_TOKENS</code> in <code>src/index.js</code> agree exactly. Canyon Rust is decorative only — never use it for small error text. Danger is the semantic error token.</p>'
    + '<div class="swatches">' + TOKENS.map((t) => '<div class="swatch"><div class="swatch-color" style="background:' + esc(t.light) + '"></div><div class="swatch-body"><strong>' + esc(t.name) + '</strong><span>Light ' + esc(t.light) + " · Dark " + esc(t.dark) + '</span><p style="margin:8px 0 0">' + esc(t.use) + '</p><button type="button" class="copy-btn secondary" style="margin-top:10px" data-copy="' + esc(t.light) + '">Copy light hex</button></div></div>').join("") + "</div>"
    + "<h2>Type</h2><p>Manrope for display + body, JetBrains Mono for code + telemetry. Fluid: display <code>clamp(2.5rem, 6vw, 4.5rem)</code>, title <code>clamp(1.75rem, 4vw, 2.5rem)</code>, heading <code>clamp(1.25rem, 2.5vw, 1.5rem)</code>.</p>"
    + "<h2>Spacing / radius / motion</h2><p>Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 px. Radii: 4 / 8 / 12 px + 999px pill. Motion: 180ms in / 140ms out, <code>cubic-bezier(.16,1,.3,1)</code>. Reduced motion: no animation. Breakpoints: mobile 0–640px, tablet 641–1024px, desktop 1025px+. Touch targets: min 44px.</p>";
}

function renderGettingStarted() {
  return '<p class="eyebrow">Docs</p><h1>Getting started</h1><p class="lede">Oeste is React + Tailwind, copy-paste ready. No heavy dependency, no config hell.</p>'
    + "<h2>1 · Add tokens</h2><p>Import <code>src/tokens.css</code> once, or copy <code>src/tokens.json</code> into your own system. Light + dark ship together via <code>data-theme</code>.</p><pre>@import \"@oeste/ui/tokens.css\";</pre>"
    + "<h2>2 · Copy a component</h2><p>Open any component, switch to the Vibe lens, copy the CLI + React code. Paste into your app. Dark mode is built in via <code>dark:</code> classes.</p>"
    + "<h2>3 · For agents</h2><p>Paste the Agent prompt + JSON contract into your editor. Agents must not invent props beyond the contract. The full machine contract lives in <a href=\"llms.txt\">llms.txt</a>.</p>"
    + '<div class="callout"><strong>Reference command.</strong> <code>npx @oeste/ui init</code> is a reference command, not a guarantee of registry availability. The React snippets work today.</div>';
}

function renderTheming() {
  return '<p class="eyebrow">Docs</p><h1>Theming</h1><p class="lede">Topanga is theme #1. Themes swap tokens, not components. A new theme is a new token file — same contracts, same keyboard, same a11y rules.</p>'
    + "<h2>How it works</h2><ol><li>Copy <code>src/tokens.css</code> + <code>src/tokens.json</code>.</li><li>Change the color values. Keep the token names.</li><li>Keep Danger at WCAG AA 4.5:1 for normal text. Keep Focus distinct from Danger.</li><li>Keep the same type, spacing, radius, motion, and breakpoints unless the theme has a reason to change them.</li></ol>"
    + "<h2>Rules</h2><ul><li>Never use Canyon Rust for small error text — Danger is the semantic error token.</li><li>Never use color alone to convey state.</li><li>Dark mode is not an afterthought: every snippet must be dark-mode-complete.</li></ul>";
}

function renderAccessibility() {
  return '<p class="eyebrow">Docs</p><h1>Accessibility</h1><p class="lede">Accessibility is load-bearing in Oeste, not a badge. Every component ships its keyboard table, invariants, and a11y contract.</p>'
    + "<h2>Non-negotiables</h2><ul><li>Visible focus: 2px ink/paper outline, never removed.</li><li>Touch targets: min 44px.</li><li>Never color alone: every state has text, icon, or position.</li><li>Labels are persistent and visible, never placeholder-only.</li><li>Errors use text + role, never color alone.</li><li>Reduced motion: no animation.</li><li>Contrast: normal text 4.5:1, large text 3:1. Danger, muted, and accent pairs are verified against these targets.</li></ul>"
    + "<h2>Keyboard</h2><p>Dialog: Escape closes, focus traps, focus returns to trigger. Tabs: roving tabindex, Arrow keys move, Home/End jump. Toast: manual Dismiss, no auto-expiry. Full tables live on each component page (Human lens).</p>";
}

function render() {
  const { route, id, lens } = parseHash();
  const view = $(" #view".trim());
  document.querySelectorAll(".nav-link").forEach((a) => a.classList.remove("active"));
  if (route === "home") view.innerHTML = renderHome();
  else if (route === "components") { view.innerHTML = renderComponent(id, lens); }
  else if (route === "tokens") view.innerHTML = renderTokens();
  else if (route === "getting-started") view.innerHTML = renderGettingStarted();
  else if (route === "theming") view.innerHTML = renderTheming();
  else if (route === "accessibility") view.innerHTML = renderAccessibility();
  else view.innerHTML = renderHome();
  const active = document.querySelector('.nav-link[href="#/' + route + '"]');
  if (active) active.classList.add("active");
  document.querySelectorAll("#componentNav a").forEach((a) => a.classList.toggle("active", route === "components" && a.getAttribute("href").includes(id)));
  bindDemos();
  view.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function initSearch() {
  const input = document.getElementById("siteSearch");
  const box = document.getElementById("searchResults");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { box.hidden = true; box.innerHTML = ""; return; }
    const hits = COMPONENTS.filter((c) => c.name.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q));
    box.hidden = false;
    box.innerHTML = '<p style="margin:4px 8px" role="status">' + hits.length + " component" + (hits.length === 1 ? "" : "s") + " found. Press Enter to open the first.</p>"
      + (hits.length ? hits.map((c) => '<button type="button" data-goto="#/components/' + c.id + '">' + esc(c.name) + " — " + esc(c.tagline) + "</button>").join("") : "<p style='margin:8px'>No matches.</p>");
    box.querySelectorAll("[data-goto]").forEach((b) => b.addEventListener("click", () => { location.hash = b.dataset.goto; input.value = ""; box.hidden = true; }));
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const first = box.querySelector("[data-goto]");
      if (first) { location.hash = first.dataset.goto; input.value = ""; box.hidden = true; }
    }
    if (e.key === "Escape") { box.hidden = true; }
  });
  document.addEventListener("click", (e) => { if (!box.contains(e.target) && e.target !== input) box.hidden = true; });
}

function init() {
  document.getElementById("componentNav").innerHTML = COMPONENTS.map((c) => '<a class="nav-link" href="#/components/' + c.id + '">' + esc(c.name) + "</a>").join("");
  const saved = localStorage.getItem("oeste-theme");
  setTheme(saved === "dark" ? "dark" : "light");
  document.getElementById("themeToggle").addEventListener("click", () => setTheme(currentTheme() === "light" ? "dark" : "light"));
  const menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    const open = sidebar.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  initSearch();
  window.addEventListener("hashchange", render);
  render();
}

document.addEventListener("DOMContentLoaded", init);
