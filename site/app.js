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

  { id: "textarea", name: "Textarea", tagline: "Multi-line input. Same label + error pattern as Input.",
    anatomy: ["Label", "Field", "Hint", "Error message"],
    props: [["label", "string", "Yes", "Persistent visible label."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["rows", "number", "No — 4", "Visible rows."], ["error", "string", "No", "Sets aria-invalid + described error."], ["disabled", "boolean", "No — false", "Blocks editing."]],
    keyboard: [["Tab", "Move focus into / out of the field."], ["Type", "Enter multi-line text."]],
    invariants: ["Label is always visible, never placeholder-only.", "Errors use text + role, never color alone.", "aria-invalid is set when error is present.", "Error text uses Danger (#A83E22 light / #E07A52 dark), never Canyon Rust."],
    contract: { format: "oeste.component.v1", component: "Textarea", props: { label: "string", rows: "number", error: "string?", disabled: "boolean" }, a11y: { invalid: "aria-invalid + described error", label: "persistent <label>", errorRole: "status" } },
    prompt: "Build an Oeste Textarea with a persistent visible label, aria-invalid + described error when error is set, error text in Danger #A83E22 (light) / #E07A52 (dark). Same label + error pattern as Input. Never use placeholder as the label.",
    cli: "npx @oeste/ui add textarea",
    code: "import { Textarea } from \"@oeste/ui\";\n\nexport function Notes({ value, onChange }) {\n  return <Textarea label=\"Field notes\" value={value} onChange={onChange} rows={4} hint=\"Anything worth keeping.\" />;\n}\n// Dark mode: built in via dark: classes." },
  { id: "select", name: "Select", tagline: "One choice from a list. Native select, real label.",
    anatomy: ["Label", "Field", "Options"],
    props: [["label", "string", "Yes", "Persistent visible label."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["options", "{ value, label }[]", "Yes", "Options list."], ["disabled", "boolean", "No — false", "Blocks changes."]],
    keyboard: [["Tab", "Move focus to the select."], ["ArrowUp / ArrowDown", "Change the selected option."], ["Enter / Space", "Open the native list."]],
    invariants: ["Native <select>, never a custom listbox.", "Label is always visible and linked via htmlFor.", "Options carry real values, never index-only labels."],
    contract: { format: "oeste.component.v1", component: "Select", props: { label: "string", options: "array", disabled: "boolean" }, a11y: { native: "select", label: "htmlFor" } },
    prompt: "Build an Oeste Select with a native <select>, persistent visible label via htmlFor, options as { value, label } pairs. Never build a custom listbox when a native select will do.",
    cli: "npx @oeste/ui add select",
    code: "import { Select } from \"@oeste/ui\";\n\nexport function ThemePicker({ value, onChange }) {\n  return <Select label=\"Theme\" value={value} onChange={onChange} options={[{ value: \"topanga\", label: \"Topanga\" }, { value: \"paper\", label: \"Paper\" }]} />;\n}" },
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
{ id: "alert", name: "Alert", tagline: "Status that stays put. Text first, tone second.",
    anatomy: ["Tone border / tint", "Message", "Dismiss button (optional)"],
    props: [["children", "ReactNode", "Yes", "Alert message."], ["tone", "info | success | warning | danger", "No — info", "Status tone. Text always carries the meaning."], ["role", "alert | status", "No — status", "Use alert for urgent errors, status for the rest."], ["onDismiss", "() => void", "No", "Adds a Dismiss button."]],
    keyboard: [["Tab", "Move focus to Dismiss when present."], ["Enter / Space", "Dismiss the alert."]],
    invariants: ["Meaning is in the text, never color alone.", "role=alert only for urgent errors; status for everything else.", "Danger tone uses Danger token, not Canyon Rust.", "Dismissible alerts remove themselves from the DOM."],
    contract: { format: "oeste.component.v1", component: "Alert", props: { tone: ["info", "success", "warning", "danger"], role: ["alert", "status"] }, a11y: { role: "alert or status", dismiss: "focusable Dismiss button" } },
    prompt: "Build an Oeste Alert: tone info/success/warning/danger, role=status by default (role=alert only for urgent errors), message in text, optional Dismiss button. Danger tone uses Danger #A83E22 / #E07A52, never Canyon Rust.",
    cli: "npx @oeste/ui add alert",
    code: "import { Alert } from \"@oeste/ui\";\n\nexport function SaveError() {\n  return <Alert tone=\"danger\" role=\"alert\">Could not save. Your changes are still here.</Alert>;\n}\n// Dark mode: built in via dark: classes." },
  { id: "accordion", name: "Accordion", tagline: "Stacked sections. One open at a time or many — your call.",
    anatomy: ["Trigger button", "Panel", "Chevron / indicator"],
    props: [["items", "{ title, content }[]", "Yes", "Sections."], ["allowMultiple", "boolean", "No — false", "When true, more than one panel may stay open."]],
    keyboard: [["Tab", "Move focus between triggers."], ["Enter / Space", "Toggle the focused panel."]],
    invariants: ["Trigger is a real <button> with aria-expanded + aria-controls.", "Panel has a matching id and is hidden when closed.", "State is visible by indicator + expanded panel, never color alone."],
    contract: { format: "oeste.component.v1", component: "Accordion", props: { items: "array", allowMultiple: "boolean" }, a11y: { trigger: "button + aria-expanded + aria-controls", panel: "hidden when closed" } },
    prompt: "Build an Oeste Accordion: each trigger is a real <button> with aria-expanded + aria-controls, panel hidden when closed, state visible by indicator + panel. Tab moves between triggers, Enter/Space toggles.",
    cli: "npx @oeste/ui add accordion",
    code: "import { Accordion } from \"@oeste/ui\";\n\nexport function Faq() {\n  return <Accordion items={[{ title: \"What is Oeste?\", content: \"A design system for humans, agents, and vibe coders.\" }]} />;\n}" },
  { id: "radiogroup", name: "RadioGroup", tagline: "One choice from a few. Native radios, real grouping.",
    anatomy: ["Fieldset", "Legend", "Radio + label options"],
    props: [["legend", "string", "Yes", "Group label."], ["name", "string", "Yes", "Shared radio name."], ["options", "{ value, label, description? }[]", "Yes", "Options."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."]],
    keyboard: [["Tab", "Move focus into the group."], ["ArrowUp / ArrowDown", "Move between options and select."], ["Space", "Select the focused option."]],
    invariants: ["Native <input type=radio> inside <fieldset> + <legend>.", "All radios share one name.", "Labels are clickable and linked via htmlFor."],
    contract: { format: "oeste.component.v1", component: "RadioGroup", props: { legend: "string", name: "string", options: "array", value: "string" }, a11y: { native: "input[type=radio] in fieldset + legend", group: "shared name" } },
    prompt: "Build an Oeste RadioGroup with native radios inside <fieldset> + <legend>, one shared name, clickable labels. Arrow keys move and select. Never build radios from divs.",
    cli: "npx @oeste/ui add radiogroup",
    code: "import { RadioGroup } from \"@oeste/ui\";\n\nexport function SizePicker({ value, onChange }) {\n  return <RadioGroup legend=\"Size\" name=\"size\" value={value} onChange={onChange} options={[{ value: \"sm\", label: \"Small\" }, { value: \"md\", label: \"Medium\" }, { value: \"lg\", label: \"Large\" }]} />;\n}" },
  { id: "progress", name: "Progress", tagline: "How far along. Number + bar, never bar alone.",
    anatomy: ["Label", "Bar + fill", "Value text"],
    props: [["value", "number", "Yes", "Current value, 0–100 by default."], ["min", "number", "No — 0", "Minimum."], ["max", "number", "No — 100", "Maximum."], ["label", "string", "Yes", "Visible label, e.g. \"Upload\"."]],
    keyboard: [["—", "Progress is not interactive. No keyboard behavior."]],
    invariants: ["Uses role=progressbar + aria-valuenow/min/max.", "Value is shown as text, never bar alone.", "Value is clamped to min–max."],
    contract: { format: "oeste.component.v1", component: "Progress", props: { value: "number", min: "number", max: "number" }, a11y: { role: "progressbar", values: "aria-valuenow/min/max", text: "visible value" } },
    prompt: "Build an Oeste Progress with role=progressbar + aria-valuenow/min/max, visible label + value text, value clamped to min–max. Never show a bar without its number.",
    cli: "npx @oeste/ui add progress",
    code: "import { Progress } from \"@oeste/ui\";\n\nexport function Upload({ done }) {\n  return <Progress label=\"Upload\" value={done} />;\n}\n// Dark mode: built in via dark: classes." }
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
  if (c.id === "textarea") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><div class="field" style="max-width:480px"><label for="demoTextarea">Field notes</label><textarea id="demoTextarea" rows="4">Warm paper, canyon clay.</textarea><p class="hint" id="demoTextareaCount" aria-live="polite"></p></div></div>';
  if (c.id === "select") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><div class="field" style="max-width:320px"><label for="demoSelect">Theme</label><select id="demoSelect"><option value="topanga">Topanga</option><option value="paper">Paper</option><option value="ink">Ink</option></select></div><p class="muted" id="demoSelectOut" aria-live="polite" style="margin-top:12px"></p></div>';
  if (c.id === "alert") return '<div class="demo"><p class="demo-caption">Real alerts. Dismiss one to see it leave.</p>'
    + '<div class="site-alert alert-info" role="status"><p style="margin:0;flex:1"><strong>Info.</strong> Changes are local until you save.</p></div>'
    + '<div class="site-alert alert-success" role="status" style="margin-top:12px"><p style="margin:0;flex:1"><strong>Saved.</strong> Nothing was sent.</p></div>'
    + '<div class="site-alert alert-warning" role="status" style="margin-top:12px"><p style="margin:0;flex:1"><strong>Heads up.</strong> This name is already in use.</p></div>'
    + '<div class="site-alert alert-danger" role="alert" style="margin-top:12px" id="demoAlertDanger"><p style="margin:0;flex:1"><strong>Could not save.</strong> Your changes are still here.</p><button type="button" class="copy-btn secondary" data-dismiss-alert>Dismiss</button></div></div>';
  if (c.id === "accordion") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Tab to a trigger, Enter or Space toggles.</p><div class="accordion" id="demoAccordion">'
    + '<div class="accordion-item"><h3 style="margin:0"><button type="button" class="accordion-trigger" aria-expanded="false" aria-controls="demoAccPanel0" id="demoAccTrig0">What is Oeste? <span aria-hidden="true">+</span></button></h3><div id="demoAccPanel0" role="region" aria-labelledby="demoAccTrig0" hidden><p style="margin:12px 0 4px">A design system for humans, agents, and vibe coders.</p></div></div>'
    + '<div class="accordion-item"><h3 style="margin:0"><button type="button" class="accordion-trigger" aria-expanded="false" aria-controls="demoAccPanel1" id="demoAccTrig1">What is Topanga? <span aria-hidden="true">+</span></button></h3><div id="demoAccPanel1" role="region" aria-labelledby="demoAccTrig1" hidden><p style="margin:12px 0 4px">The first theme: the hidden canyon in Los Angeles.</p></div></div></div></div>';
  if (c.id === "radiogroup") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Arrow keys move and select.</p><fieldset style="border:0;margin:0;padding:0"><legend style="font-weight:600;margin-bottom:8px">Size</legend>'
    + '<label class="radio-row"><input type="radio" name="demoSize" value="sm"> Small</label>'
    + '<label class="radio-row"><input type="radio" name="demoSize" value="md" checked> Medium</label>'
    + '<label class="radio-row"><input type="radio" name="demoSize" value="lg"> Large</label></fieldset><p class="muted" id="demoRadioOut" aria-live="polite" style="margin-top:12px">Selected: Medium</p></div>';
  if (c.id === "progress") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><p style="margin:0 0 8px"><strong>Upload</strong> — <span id="demoProgressLabel">40%</span></p><div class="progress-track" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress"><div class="progress-fill" id="demoProgressFill" style="width:40%"></div></div><button type="button" class="btn btn-secondary" style="margin-top:16px" data-progress-advance>Advance 10%</button></div>';
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
  const ta = document.getElementById("demoTextarea");
  if (ta) { const upd = () => { document.getElementById("demoTextareaCount").textContent = ta.value.length + " characters."; }; ta.addEventListener("input", upd); upd(); }
  const sel = document.getElementById("demoSelect");
  if (sel) sel.addEventListener("change", () => { document.getElementById("demoSelectOut").textContent = "Selected: " + sel.options[sel.selectedIndex].text; });
  const alertDismiss = document.querySelector("[data-dismiss-alert]");
  if (alertDismiss) alertDismiss.addEventListener("click", () => { document.getElementById("demoAlertDanger").remove(); });
  document.querySelectorAll(".accordion-trigger").forEach((t) => t.addEventListener("click", () => {
    const open = t.getAttribute("aria-expanded") === "true";
    t.setAttribute("aria-expanded", String(!open));
    document.getElementById(t.getAttribute("aria-controls")).hidden = open;
    t.querySelector("span").textContent = open ? "+" : "\u2212";
  }));
  document.querySelectorAll('input[name="demoSize"]').forEach((r) => r.addEventListener("change", () => {
    document.getElementById("demoRadioOut").textContent = "Selected: " + r.parentElement.textContent.trim();
  }));
  const progBtn = document.querySelector("[data-progress-advance]");
  if (progBtn) progBtn.addEventListener("click", () => {
    const track = document.querySelector(".progress-track");
    const next = Math.min(100, parseInt(track.getAttribute("aria-valuenow"), 10) + 10);
    track.setAttribute("aria-valuenow", String(next));
    document.getElementById("demoProgressFill").style.width = next + "%";
    document.getElementById("demoProgressLabel").textContent = next + "%";
  });
  // Patterns demos
  const patSave = document.querySelector("[data-pattern-save]");
  if (patSave) patSave.addEventListener("click", () => showToast("Settings saved. Nothing was sent or stored."));
  const patOpen = document.querySelector("[data-pattern-open]");
  if (patOpen) { const d = document.getElementById("patternDialog"); patOpen.addEventListener("click", () => d.showModal()); d.querySelectorAll("[data-pattern-close]").forEach((b) => b.addEventListener("click", () => d.close())); const form = document.getElementById("patternEditForm"); if (form) form.addEventListener("submit", (e) => { e.preventDefault(); d.close(); showToast("Project renamed. Nothing was sent or stored."); }); }
  document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", () => copyText(b.dataset.copy, "Copied")));
}

function renderHome() {
  return '<p class="eyebrow">Oeste.design · Component library</p>'
    + "<h1>One system.<br>Three perspectives.</h1>"
    + '<p class="lede">Oeste is a design system for humans, AI agents, and vibe coders. Humans design it. Agents understand it. Vibe coders ship it — from the same tokens, the same contracts, the same components.</p>'
    + '<div class="install-bar"><strong>Start building</strong><code>npx @oeste/ui init</code><button type="button" class="copy-btn" data-copy="npx @oeste/ui init">Copy command</button><span class="muted">Reference command — see <a href="#/getting-started">Getting started</a>.</span></div>'
    + '<div class="home-grid"><div><h2>What Oeste means</h2><p><strong>Oeste</strong> is Spanish for “west” — hiddeninwest, translated. It names a direction, not a monument: westward, toward the edge of the map, where things get built by hand.</p>'
    + '<p><strong>Topanga</strong> is the first theme: the hidden canyon in Los Angeles where creatives retreat and build. A canyon is not a stage — it is shelter. That is the feeling Topanga is built to carry: warm paper like sun on a wall, canyon clay, ochre, sagebrush, and precision hairlines. Nothing shouts. Everything is placed on purpose.</p>'
    + '<p>Oeste is a quieter foundation for three ways of making. One set of tokens, one set of contracts, one set of components — read three ways. A designer reads the anatomy. An agent reads the contract. A vibe coder copies the code and ships. Nobody has to translate for anyone else, because the system already speaks all three languages.</p>'
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
  const rows = COMPONENTS.map((c) => {
    const kb = c.keyboard.map((k) => esc(k[0]) + ": " + esc(k[1])).join(" · ");
    const inv = c.invariants.slice(0, 2).join(" ");
    return "<tr><td><a href=\"#/components/" + c.id + "\">" + esc(c.name) + "</a></td><td>" + kb + "</td><td>" + esc(inv) + "</td></tr>";
  }).join("");
  const contrast = [
    ["Light", "Text on paper", "#1C1917 on #F6F4F1", "15.93:1"], ["Light", "Text on surface", "#1C1917 on #FCFAF7", "16.79:1"],
    ["Light", "Muted on paper", "#706963 on #F6F4F1", "4.92:1"], ["Light", "Danger on paper", "#A83E22 on #F6F4F1", "5.66:1"],
    ["Light", "Success on paper", "#2F6B3A on #F6F4F1", "5.82:1"], ["Light", "Warning on paper", "#7A5A12 on #F6F4F1", "5.80:1"],
    ["Light", "Sage on paper", "#5E6B5A on #F6F4F1", "5.13:1"], ["Light", "Ink on Warm Ochre", "#1C1917 on #C47D3B", "5.28:1"],
    ["Light", "Paper on Danger", "#F6F4F1 on #A83E22", "5.66:1"],
    ["Dark", "Text on bg", "#F5F3EF on #121110", "17.02:1"], ["Dark", "Text on surface", "#F5F3EF on #1C1917", "15.78:1"],
    ["Dark", "Muted on bg", "#9E968F on #121110", "6.48:1"], ["Dark", "Danger on bg", "#E07A52 on #121110", "6.35:1"],
    ["Dark", "Success on bg", "#6BA368 on #121110", "6.34:1"], ["Dark", "Warning on bg", "#D9A441 on #121110", "8.39:1"],
    ["Dark", "Sage on bg", "#8B9B87 on #121110", "6.41:1"], ["Dark", "Ink on Warm Ochre", "#1C1917 on #DB914E", "6.81:1"],
  ].map((r) => "<tr><td>" + r[0] + "</td><td>" + esc(r[1]) + "</td><td><code>" + esc(r[2]) + "</code></td><td>" + r[3] + "</td></tr>").join("");
  return '<p class="eyebrow">Docs</p><h1>Accessibility</h1><p class="lede">Accessibility is load-bearing in Oeste, not a badge. Every component ships its keyboard table, invariants, and a11y contract.</p>'
    + "<h2>Non-negotiables</h2><ul><li>Visible focus: 2px ink/paper outline, never removed.</li><li>Touch targets: min 44px.</li><li>Never color alone: every state has text, icon, or position.</li><li>Labels are persistent and visible, never placeholder-only.</li><li>Errors use text + role, never color alone.</li><li>Reduced motion: no animation.</li><li>Contrast: normal text 4.5:1, large text 3:1. Every pair below is verified by calculation (see <code>scripts/verify.mjs</code>).</li></ul>"
    + "<h2>Per-component keyboard + ARIA checklist</h2><p>One row per component. Full tables live on each component page (Human lens).</p>"
    + '<div style="overflow-x:auto"><table><thead><tr><th>Component</th><th>Keyboard</th><th>Key ARIA / invariants</th></tr></thead><tbody>' + rows + "</tbody></table></div>"
    + "<h2>Contrast table</h2><p>All text pairs meet WCAG AA 4.5:1 for normal text. Canyon Rust (#B85B35 light) is decorative only and is not listed here as a text color — it does not meet 4.5:1 for small text on paper.</p>"
    + '<div style="overflow-x:auto"><table><thead><tr><th>Mode</th><th>Pair</th><th>Values</th><th>Ratio</th></tr></thead><tbody>' + contrast + "</tbody></table></div>"
    + "<h2>Reduced motion</h2><p>Motion is 180ms in / 140ms out, <code>cubic-bezier(.16,1,.3,1)</code>. With <code>prefers-reduced-motion: reduce</code>, Oeste ships no animation: no transitions, no reveals, no smooth scrolling. Content never depends on motion to be understood.</p>"
    + "<h2>Focus</h2><p>Focus is always visible: 2px ink/paper outline with 2px offset. It is never removed, never replaced by color alone, and never left on a hidden element. Dialogs trap focus and restore it to the trigger on close. Tabs use roving tabindex so only the active tab is in the tab order.</p>"
    + "<h2>Touch targets</h2><p>Every interactive control is at least 44px on its smallest side: buttons, lens pills, tabs, switches, checkboxes, theme toggle, menu button, and Dismiss buttons. Small text links inside body copy are the only exception, and they are never the sole way to act.</p>"
    + "<h2>Live regions</h2><p>Toast uses <code>role=status</code> + <code>aria-live=polite</code>. Input errors use <code>role=status</code>. Alerts use <code>role=status</code> by default and <code>role=alert</code> only for urgent errors. Nothing auto-vanishes: the user dismisses status UI.</p>";
}
function renderPatterns() {
  return '<p class="eyebrow">Docs</p><h1>Patterns</h1><p class="lede">Components composed into real flows. Every pattern is working vanilla JS on this page — the same structure the React snippets describe.</p>'
    + '<h2>Settings form</h2><p>Input + Checkbox + Switch + Select + Button + Toast confirm. One form, one save, one confirmation the user dismisses.</p>'
    + '<div class="demo"><div class="field" style="max-width:480px"><label for="patName">Display name</label><input id="patName" type="text" value="Topanga"></div>'
    + '<label style="display:flex;gap:12px;align-items:flex-start;margin-top:16px"><input type="checkbox" checked style="margin-top:4px;width:20px;height:20px;accent-color:var(--color-accent)"> <span><strong>Email me updates</strong><br><span class="muted">One email per change.</span></span></label>'
    + '<div style="margin-top:16px;display:flex;gap:12px;align-items:center"><button type="button" role="switch" aria-checked="false" class="btn btn-secondary" style="min-width:64px">Off</button><span><strong>Dark mode</strong></span></div>'
    + '<div class="field" style="max-width:320px;margin-top:16px"><label for="patTheme">Theme</label><select id="patTheme"><option>Topanga</option><option>Paper</option></select></div>'
    + '<button type="button" class="btn btn-primary" style="margin-top:20px" data-pattern-save>Save settings</button></div>'
    + '<h3>Human notes</h3><ul><li>One primary action (Save settings). Everything else is a field.</li><li>Labels are visible and persistent. No placeholder-only fields.</li><li>Confirmation is a Toast the user dismisses — nothing auto-vanishes.</li></ul>'
    + '<h3>Agent prompt</h3><pre>Compose an Oeste Settings form from Input + Checkbox + Switch + Select + Button + Toast. Persistent labels. One primary Save action. Toast confirm on save, manual dismiss, no auto-expiry. Never invent props beyond the component contracts.</pre>'
    + '<h3>Vibe</h3><p>Copy each component from its Vibe lens, compose in one form, wire Save to a Toast. CLI: <code>npx @oeste/ui add input</code> (reference command — see Getting started). The React snippets work today.</p>'
    + '<h2>Project edit flow</h2><p>Card + Button + Dialog with Input + Toast. Open, rename, confirm — focus in, Escape out, focus back.</p>'
    + '<div class="demo"><section aria-labelledby="patCardTitle" style="border:1px solid var(--color-border);border-radius:12px;padding:24px;background:var(--color-bg)"><h3 id="patCardTitle" style="margin:0">Field notes</h3><p style="margin:12px 0 0">Room to think.</p><button type="button" class="btn btn-primary" style="margin-top:16px" data-pattern-open>Edit project</button></section>'
    + '<dialog class="site-dialog" id="patternDialog"><form id="patternEditForm"><h3 style="margin-top:0">Edit project</h3><p class="muted">Rename this project.</p><div class="field" style="margin-top:16px"><label for="patEditInput">Project name</label><input id="patEditInput" type="text" value="Field notes"></div><div class="demo-row" style="margin-top:20px"><button type="submit" class="btn btn-primary">Save</button><button type="button" class="btn btn-secondary" data-pattern-close>Cancel</button></div></form></dialog></div>'
    + '<h3>Human notes</h3><ul><li>The Card holds the current state; the Dialog holds the edit.</li><li>Escape closes the Dialog and returns focus to Edit project.</li><li>Save closes the Dialog and confirms with a Toast.</li></ul>'
    + '<h3>Agent prompt</h3><pre>Compose an Oeste Project edit flow from Card + Button + Dialog + Input + Toast. Dialog: native &lt;dialog&gt;, Escape closes, focus traps inside, focus returns to trigger. Save closes and confirms with a manual-dismiss Toast. Never invent props beyond the component contracts.</pre>'
    + '<h3>Vibe</h3><p>Copy Dialog + Input from their Vibe lenses, wrap the edit in the Dialog, confirm with Toast. The React snippets work today.</p>';
}

function renderChangelog() {
  return '<p class="eyebrow">Docs</p><h1>Changelog</h1><p class="lede">What changed, when, and what it means for you. No rewritten history — entries land here when they ship.</p>'
    + '<h2>v0.2.0 — 2026-10-14</h2><ul><li><strong>New primitives:</strong> Alert, Accordion, RadioGroup, Progress — React + Tailwind in <code>src/index.js</code>, full docs pages with demos.</li><li><strong>New docs pages:</strong> Textarea and Select (implementations existed; docs did not). Total: 15 components.</li><li><strong>New routes:</strong> Patterns (Settings form + Project edit flow), Changelog, Migration.</li><li><strong>Accessibility page:</strong> per-component keyboard + ARIA checklist for all 15 components, full contrast table, reduced-motion / focus / touch-target / live-region rules.</li><li><strong>Home:</strong> fuller Oeste / Topanga brand story.</li><li><strong>Header + lens pills:</strong> Menu moved to the far right, theme toggle is now an icon to the left of Menu; lens pills are pill-only (no underline), text centered.</li><li><strong>Breaking:</strong> none for consumers. Docs-only + additive release.</li></ul>'
    + '<h2>v0.1.0 — 2026-10-14</h2><ul><li><strong>Foundation:</strong> single token source of truth (<code>src/tokens.css</code> + <code>src/tokens.json</code> + <code>DESIGN_TOKENS</code>), verified by <code>scripts/verify.mjs</code>.</li><li><strong>Canonical tokens:</strong> Warm Ochre accent #C47D3B, Canyon Rust #B85B35 decorative-only, Danger #A83E22 / #E07A52 at 5.66:1 / 6.35:1, Focus = ink/paper.</li><li><strong>9 primitives:</strong> Button, Input, Dialog, Card, Tabs, Toast, Badge, Checkbox, Switch — plus Textarea + Select implementations.</li><li><strong>Docs site:</strong> static, hash routes, Human / Agent / Vibe lenses, lens in URL, Getting started / Theming / Tokens / Accessibility.</li><li><strong>CLI:</strong> reference commands only. No npm package yet — the React snippets work today.</li></ul>';
}

function renderMigration() {
  return '<p class="eyebrow">Docs</p><h1>Migration</h1><p class="lede">Adopting Oeste, from scratch or from the earlier 6-component Pally preview.</p>'
    + '<h2>From scratch</h2><ol><li>Import <code>src/tokens.css</code> once, or copy <code>src/tokens.json</code>.</li><li>Copy the components you need from <code>src/index.js</code> (React 18+, Tailwind, JSX transform).</li><li>Read the Agent prompt + JSON contract for each component before generating code with an agent.</li></ol>'
    + '<h2>From the 6-component Pally preview</h2><p>The preview had Button, Input, Dialog, Card, Tabs, Toast. Oeste v0.1.0 kept all six and added Badge, Checkbox, Switch (plus Textarea + Select implementations). v0.2.0 adds Alert, Accordion, RadioGroup, Progress, and docs for Textarea + Select.</p>'
    + '<h2>Breaking notes</h2><ul><li><strong>Token renames:</strong> one canonical name per color. <code>clay</code> is gone — use <code>accent</code> (Warm Ochre #C47D3B) for actions, <code>rust</code> (Canyon Rust #B85B35) for large decorative accents only, <code>danger</code> (#A83E22 / #E07A52) for errors. If your preview code used #C25E38 or #E08244 for errors, switch to Danger.</li><li><strong>Danger darkened:</strong> light Danger is now #A83E22 (was #C25E38) to meet 4.5:1 on paper. Update any hardcoded error colors.</li><li><strong>Focus is not danger:</strong> focus outline is ink/paper (2px), never the Danger color.</li><li><strong>Lens pills:</strong> pill-only, no underline. If you copied the old pill + underline style, drop the underline.</li><li><strong>Header:</strong> Menu is now far right, theme toggle is an icon to its left. If you copied the old header, reorder to wordmark / Topanga / search / theme icon / Menu.</li><li><strong>CLI:</strong> still reference commands. Do not treat <code>npx @oeste/ui</code> as a published package yet.</li></ul>'
    + '<h2>What did not change</h2><p>Component contracts (<code>oeste.component.v1</code>), keyboard behaviors, lens URLs (<code>#/components/&lt;id&gt;?lens=</code>), and the token file layout are unchanged from v0.1.0.</p>';
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
  else if (route === "patterns") view.innerHTML = renderPatterns();
  else if (route === "changelog") view.innerHTML = renderChangelog();
  else if (route === "migration") view.innerHTML = renderMigration();
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
