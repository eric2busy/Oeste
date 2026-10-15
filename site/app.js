/* Oeste docs site — vanilla JS, hash routing, no build step. */
"use strict";

const COMPONENTS = [
  { id: "button", name: "Button", tagline: "One action. A clear hierarchy.",
    anatomy: ["Label", "Surface", "Focus state", "Icon slot (optional)"],
    props: [["children", "ReactNode", "Yes", "Button label."], ["variant", "primary | secondary | ghost | danger", "No — primary", "Visual hierarchy. Danger only for destructive actions."], ["size", "sm | md | lg", "No — md", "Padding + type. All sizes keep 44px min touch."], ["disabled", "boolean", "No — false", "Blocks interaction. Never color alone."], ["loading", "boolean", "No — false", "Shows progress, sets aria-busy, blocks clicks."], ["icon", "ReactNode", "No — null", "Optional icon before the label. Replaced by the loading mark while loading."]],
    keyboard: [["Tab", "Move focus to the button."], ["Enter / Space", "Activate. Space activates on key-up."]],
    invariants: ["Label is always visible text, never icon-only without aria-label.", "Disabled buttons never rely on color alone.", "Focus is 2px ink/paper outline, never removed.", "Danger variant only for destructive actions with a confirm step."],
    contract: { format: "oeste.component.v1", component: "Button", props: { variant: ["primary", "secondary", "ghost", "danger"], size: ["sm", "md", "lg"], disabled: "boolean", loading: "boolean" }, a11y: { focus: "2px ink/paper outline", target: "min 44px", busy: "aria-busy when loading" } },
    prompt: "Build an Oeste Button: variant primary/secondary/ghost/danger, size sm/md/lg, optional icon slot, 44px min touch, 2px ink/paper focus outline, aria-busy when loading. Never icon-only without an accessible label. Use Topanga tokens: accent #C47D3B, danger #A83E22 (light) / #E07A52 (dark).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/button.json",
    code: "import { Button } from \"@/components/ui/button\";\n\nexport function SaveAction() {\n  return <Button variant=\"primary\" onClick={() => {}}>Save changes</Button>;\n}\n// Dark mode: built in via dark: classes. Focus: 2px ink/paper outline." },
  { id: "input", name: "Input", tagline: "Persistent label. Described errors. No placeholder-only fields.",
    anatomy: ["Label", "Field", "Hint", "Error message"],
    props: [["label", "string", "Yes", "Persistent visible label."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["error", "string", "No", "Sets aria-invalid + described error."], ["hint", "string", "No", "Helper text via aria-describedby."], ["disabled", "boolean", "No — false", "Blocks editing."]],
    keyboard: [["Tab", "Move focus into / out of the field."], ["Type", "Enter text. Errors announced via role=status."]],
    invariants: ["Label is always visible, never placeholder-only.", "Errors use text + role, never color alone.", "aria-invalid is set when error is present.", "Error text uses Danger (#A83E22 light / #E07A52 dark), never Canyon Rust."],
    contract: { format: "oeste.component.v1", component: "Input", props: { label: "string", error: "string?", hint: "string?", disabled: "boolean" }, a11y: { invalid: "aria-invalid + described error", label: "persistent <label>", errorRole: "status" } },
    prompt: "Build an Oeste Input with a persistent visible label, aria-invalid + described error when error is set, error text in Danger #A83E22 (light) / #E07A52 (dark). Never use placeholder as the label. Never use Canyon Rust for error text.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/input.json",
    code: "import { Input } from \"@/components/ui/input\";\n\nexport function NameField({ value, onChange, error }) {\n  return <Input label=\"Project name\" value={value} onChange={onChange} error={error} hint=\"At least 3 characters.\" />;\n}\n// Related: Textarea and Select share the same label + error pattern." },

  { id: "textarea", name: "Textarea", tagline: "Multi-line input. Same label + error pattern as Input.",
    anatomy: ["Label", "Field", "Hint", "Error message"],
    props: [["label", "string", "Yes", "Persistent visible label."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["rows", "number", "No — 4", "Visible rows."], ["error", "string", "No", "Sets aria-invalid + described error."], ["disabled", "boolean", "No — false", "Blocks editing."]],
    keyboard: [["Tab", "Move focus into / out of the field."], ["Type", "Enter multi-line text."]],
    invariants: ["Label is always visible, never placeholder-only.", "Errors use text + role, never color alone.", "aria-invalid is set when error is present.", "Error text uses Danger (#A83E22 light / #E07A52 dark), never Canyon Rust."],
    contract: { format: "oeste.component.v1", component: "Textarea", props: { label: "string", rows: "number", error: "string?", disabled: "boolean" }, a11y: { invalid: "aria-invalid + described error", label: "persistent <label>", errorRole: "status" } },
    prompt: "Build an Oeste Textarea with a persistent visible label, aria-invalid + described error when error is set, error text in Danger #A83E22 (light) / #E07A52 (dark). Same label + error pattern as Input. Never use placeholder as the label.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/textarea.json",
    code: "import { Textarea } from \"@/components/ui/textarea\";\n\nexport function Notes({ value, onChange }) {\n  return <Textarea label=\"Field notes\" value={value} onChange={onChange} rows={4} hint=\"Anything worth keeping.\" />;\n}\n// Dark mode: built in via dark: classes." },
  { id: "select", name: "Select", tagline: "One choice from a list. Native select, real label.",
    anatomy: ["Label", "Field", "Options"],
    props: [["label", "string", "Yes", "Persistent visible label."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["options", "{ value, label }[]", "Yes", "Options list."], ["disabled", "boolean", "No — false", "Blocks changes."]],
    keyboard: [["Tab", "Move focus to the select."], ["ArrowUp / ArrowDown", "Change the selected option."], ["Enter / Space", "Open the native list."]],
    invariants: ["Native <select>, never a custom listbox.", "Label is always visible and linked via htmlFor.", "Options carry real values, never index-only labels."],
    contract: { format: "oeste.component.v1", component: "Select", props: { label: "string", options: "array", disabled: "boolean" }, a11y: { native: "select", label: "htmlFor" } },
    prompt: "Build an Oeste Select with a native <select>, persistent visible label via htmlFor, options as { value, label } pairs. Never build a custom listbox when a native select will do.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/select.json",
    code: "import { Select } from \"@/components/ui/select\";\n\nexport function ThemePicker({ value, onChange }) {\n  return <Select label=\"Theme\" value={value} onChange={onChange} options={[{ value: \"topanga\", label: \"Topanga\" }, { value: \"paper\", label: \"Paper\" }]} />;\n}" },
  { id: "dialog", name: "Dialog", tagline: "Accessible modal. Focus in, Escape out, focus back.",
    anatomy: ["Trigger", "Backdrop", "Surface", "Title + description", "Fields", "Actions"],
    props: [["open", "boolean", "Yes", "Controls visibility."], ["onOpenChange", "(open) => void", "Yes", "Fires on close / Escape / backdrop."], ["title", "string", "Yes", "Accessible name via aria-labelledby."], ["description", "string", "Yes", "Accessible description."], ["children", "ReactNode", "No", "Dialog body."]],
    keyboard: [["Escape", "Close the dialog, return focus to trigger."], ["Tab / Shift+Tab", "Trap focus inside the dialog."], ["Enter", "Activate the focused action."]],
    invariants: ["Focus moves into the dialog on open and returns to trigger on close.", "Escape always closes.", "Backdrop click closes; content is inert behind the dialog.", "Title + description are always present."],
    contract: { format: "oeste.component.v1", component: "Dialog", props: { open: "boolean", title: "string", description: "string" }, a11y: { modal: "aria-modal=true", labelledby: "title", describedby: "description", focus: "trap + restore on close" } },
    prompt: "Build an Oeste Dialog using native <dialog> + showModal. Title + description required. Escape closes, focus traps inside, focus returns to trigger on close. Backdrop is inert. Use Topanga tokens, hairline border, dialog shadow.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/dialog.json",
    code: "import { useState } from \"react\";\nimport { Button } from \"@/components/ui/button\";\nimport { Dialog } from \"@/components/ui/dialog\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function EditProject() {\n  const [open, setOpen] = useState(false);\n  return (<>\n    <Button onClick={() => setOpen(true)}>Edit project</Button>\n    <Dialog open={open} onOpenChange={setOpen} title=\"Edit project\" description=\"Rename this project.\">\n      <Input label=\"Project name\" value=\"\" onChange={() => {}} />\n    </Dialog>\n  </>);\n}" },
  { id: "card", name: "Card", tagline: "Structural container with proper heading hierarchy.",
    anatomy: ["Heading", "Body", "Actions (optional)"],
    props: [["title", "string", "Yes", "Heading text, linked via aria-labelledby."], ["headingLevel", "2 | 3 | 4", "No — 3", "Keeps document outline correct."], ["children", "ReactNode", "No", "Card body."]],
    keyboard: [["Tab", "Move through interactive content inside the card."]],
    invariants: ["Heading level matches document outline.", "Cards never use color alone to convey status.", "Interactive cards use a real <button> or <a>, never a clickable div."],
    contract: { format: "oeste.component.v1", component: "Card", props: { title: "string", headingLevel: [2, 3, 4] }, a11y: { labelledby: "heading", section: "native <section>" } },
    prompt: "Build an Oeste Card: native <section> + aria-labelledby, heading level matching the page outline, hairline border, card shadow. Never use a clickable div for an interactive card.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/card.json",
    code: "import { Card } from \"@/components/ui/card\";\n\nexport function NoteCard() {\n  return <Card title=\"Field notes\" headingLevel={3}><p>Room to think.</p></Card>;\n}" },
  { id: "tabs", name: "Tabs", tagline: "Roving tabindex. Arrow keys move, Home/End jump.",
    anatomy: ["Tab list", "Tab", "Panel"],
    props: [["items", "{ label, content }[]", "Yes", "Tabs + panels."], ["defaultIndex", "number", "No — 0", "Initially selected tab."]],
    keyboard: [["ArrowRight / ArrowLeft", "Move to next / previous tab."], ["Home / End", "Jump to first / last tab."], ["Tab", "Move into the active panel."]],
    invariants: ["Only the active tab is in the tab order (roving tabindex).", "Panels are labelled by their tab.", "Inactive panels are hidden, not just visually."],
    contract: { format: "oeste.component.v1", component: "Tabs", props: { items: "array", defaultIndex: "number" }, a11y: { tabs: "roving tabindex", panels: "aria-labelledby tab" } },
    prompt: "Build Oeste Tabs with roving tabindex: only the active tab has tabIndex 0. ArrowRight/Left move, Home/End jump, panels labelled by their tab, inactive panels hidden.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/tabs.json",
    code: "import { Tabs } from \"@/components/ui/tabs\";\n\nexport function Views() {\n  return <Tabs items={[{ label: \"Overview\", content: \"Overview panel.\" }, { label: \"Details\", content: \"Details panel.\" }]} />;\n}" },
  { id: "toast", name: "Toast", tagline: "Polite status. Manual dismissal. Nothing auto-vanishes.",
    anatomy: ["Message", "Dismiss button"],
    props: [["message", "string", "Yes", "Status text."], ["open", "boolean", "No — false", "Controls visibility."], ["onDismiss", "() => void", "Yes", "Dismiss handler."]],
    keyboard: [["Tab", "Move focus to Dismiss."], ["Enter / Space", "Dismiss the toast."]],
    invariants: ["Toast is role=status + aria-live=polite.", "No auto-expiry: the user dismisses it.", "Message is text, never color alone."],
    contract: { format: "oeste.component.v1", component: "Toast", props: { message: "string", open: "boolean" }, a11y: { live: "polite", role: "status", dismiss: "manual, focusable" } },
    prompt: "Build an Oeste Toast: single clean card (no split rounded top/bottom), role=status + aria-live=polite, manual Dismiss button, no auto-expiry. Keep it in one card.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/toast.json",
    code: "import { useState } from \"react\";\nimport { Button } from \"@/components/ui/button\";\nimport { Toast } from \"@/components/ui/toast\";\n\nexport function Preview() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>Show toast</Button><Toast message=\"Preview complete. Nothing was sent.\" open={open} onDismiss={() => setOpen(false)} /></>);\n}" },
  { id: "badge", name: "Badge", tagline: "Small status. Text first, color second.",
    anatomy: ["Label"],
    props: [["children", "ReactNode", "Yes", "Badge label."], ["tone", "neutral | accent | success | danger", "No — neutral", "Status tone. Text always carries the meaning."]],
    keyboard: [["—", "Badge is not interactive. No keyboard behavior."]],
    invariants: ["Meaning is in the text, never color alone.", "Danger tone uses Danger token, not Canyon Rust.", "Badge text meets 4.5:1 on its background."],
    contract: { format: "oeste.component.v1", component: "Badge", props: { tone: ["neutral", "accent", "success", "danger"] }, a11y: { meaning: "text, never color alone" } },
    prompt: "Build an Oeste Badge: pill, border + tint, tone neutral/accent/success/danger. Meaning in text, never color alone. Danger tone uses Danger #A83E22 / #E07A52.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/badge.json",
    code: "import { Badge } from \"@/components/ui/badge\";\n\nexport function Status() {\n  return <Badge tone=\"success\">Ready</Badge>;\n}" },
  { id: "checkbox", name: "Checkbox", tagline: "Real input. Visible label. Described help.",
    anatomy: ["Box", "Label", "Description (optional)"],
    props: [["label", "string", "Yes", "Visible label."], ["checked / onChange", "boolean / (v) => void", "Yes", "Controlled state."], ["description", "string", "No", "Helper text."], ["disabled", "boolean", "No — false", "Blocks toggling."]],
    keyboard: [["Tab", "Move focus to the checkbox."], ["Space", "Toggle."]],
    invariants: ["Native <input type=checkbox>, never a div.", "Label is clickable and linked via htmlFor.", "Description is linked via aria-describedby."],
    contract: { format: "oeste.component.v1", component: "Checkbox", props: { label: "string", checked: "boolean", disabled: "boolean" }, a11y: { native: "input[type=checkbox]", label: "htmlFor", desc: "aria-describedby" } },
    prompt: "Build an Oeste Checkbox with a native input, clickable label via htmlFor, optional described help text, accent color for the checked state. Never build a checkbox from a div.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/checkbox.json",
    code: "import { useState } from \"react\";\nimport { Checkbox } from \"@/components/ui/checkbox\";\n\nexport function Notify() {\n  const [checked, setChecked] = useState(false);\n  return <Checkbox label=\"Email me updates\" checked={checked} onChange={setChecked} description=\"One email per change.\" />;\n}" },
  { id: "switch", name: "Switch", tagline: "On / off with a real role=switch.",
    anatomy: ["Track", "Thumb", "Label", "Description (optional)"],
    props: [["label", "string", "Yes", "Visible label."], ["checked / onChange", "boolean / (v) => void", "Yes", "Controlled state."], ["description", "string", "No", "Helper text."], ["disabled", "boolean", "No — false", "Blocks toggling."]],
    keyboard: [["Tab", "Move focus to the switch."], ["Space / Enter", "Toggle."]],
    invariants: ["Uses role=switch + aria-checked.", "State is visible by position + label, never color alone.", "Label is clickable."],
    contract: { format: "oeste.component.v1", component: "Switch", props: { label: "string", checked: "boolean", disabled: "boolean" }, a11y: { role: "switch", checked: "aria-checked", state: "position + label, never color alone" } },
    prompt: "Build an Oeste Switch with role=switch + aria-checked, thumb position showing state, clickable label. State visible by position + label, never color alone.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/switch.json",
    code: "import { useState } from \"react\";\nimport { Switch } from \"@/components/ui/switch\";\n\nexport function DarkMode() {\n  const [checked, setChecked] = useState(false);\n  return <Switch label=\"Dark mode\" checked={checked} onChange={setChecked} />;\n}" },
{ id: "alert", name: "Alert", tagline: "Status that stays put. Text first, tone second.",
    anatomy: ["Tone border / tint", "Message", "Dismiss button (optional)"],
    props: [["children", "ReactNode", "Yes", "Alert message."], ["tone", "info | success | warning | danger", "No — info", "Status tone. Text always carries the meaning."], ["role", "alert | status", "No — status", "Use alert for urgent errors, status for the rest."], ["onDismiss", "() => void", "No", "Adds a Dismiss button."]],
    keyboard: [["Tab", "Move focus to Dismiss when present."], ["Enter / Space", "Dismiss the alert."]],
    invariants: ["Meaning is in the text, never color alone.", "role=alert only for urgent errors; status for everything else.", "Danger tone uses Danger token, not Canyon Rust.", "Dismissible alerts remove themselves from the DOM."],
    contract: { format: "oeste.component.v1", component: "Alert", props: { tone: ["info", "success", "warning", "danger"], role: ["alert", "status"] }, a11y: { role: "alert or status", dismiss: "focusable Dismiss button" } },
    prompt: "Build an Oeste Alert: tone info/success/warning/danger, role=status by default (role=alert only for urgent errors), message in text, optional Dismiss button. Danger tone uses Danger #A83E22 / #E07A52, never Canyon Rust.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/alert.json",
    code: "import { Alert } from \"@/components/ui/alert\";\n\nexport function SaveError() {\n  return <Alert tone=\"danger\" role=\"alert\">Could not save. Your changes are still here.</Alert>;\n}\n// Dark mode: built in via dark: classes." },
  { id: "accordion", name: "Accordion", tagline: "Stacked sections. One open at a time or many — your call.",
    anatomy: ["Trigger button", "Panel", "Chevron / indicator"],
    props: [["items", "{ title, content }[]", "Yes", "Sections."], ["allowMultiple", "boolean", "No — false", "When true, more than one panel may stay open."]],
    keyboard: [["Tab", "Move focus between triggers."], ["Enter / Space", "Toggle the focused panel."]],
    invariants: ["Trigger is a real <button> with aria-expanded + aria-controls.", "Panel has a matching id and is hidden when closed.", "State is visible by indicator + expanded panel, never color alone."],
    contract: { format: "oeste.component.v1", component: "Accordion", props: { items: "array", allowMultiple: "boolean" }, a11y: { trigger: "button + aria-expanded + aria-controls", panel: "hidden when closed" } },
    prompt: "Build an Oeste Accordion: each trigger is a real <button> with aria-expanded + aria-controls, panel hidden when closed, state visible by indicator + panel. Tab moves between triggers, Enter/Space toggles.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/accordion.json",
    code: "import { Accordion } from \"@/components/ui/accordion\";\n\nexport function Faq() {\n  return <Accordion items={[{ title: \"What is Oeste?\", content: \"A design system for humans, agents, and vibe coders.\" }]} />;\n}" },
  { id: "radiogroup", name: "RadioGroup", tagline: "One choice from a few. Native radios, real grouping.",
    anatomy: ["Fieldset", "Legend", "Radio + label options"],
    props: [["legend", "string", "Yes", "Group label."], ["name", "string", "Yes", "Shared radio name."], ["options", "{ value, label, description? }[]", "Yes", "Options."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."]],
    keyboard: [["Tab", "Move focus into the group."], ["ArrowUp / ArrowDown", "Move between options and select."], ["Space", "Select the focused option."]],
    invariants: ["Native <input type=radio> inside <fieldset> + <legend>.", "All radios share one name.", "Labels are clickable and linked via htmlFor."],
    contract: { format: "oeste.component.v1", component: "RadioGroup", props: { legend: "string", name: "string", options: "array", value: "string" }, a11y: { native: "input[type=radio] in fieldset + legend", group: "shared name" } },
    prompt: "Build an Oeste RadioGroup with native radios inside <fieldset> + <legend>, one shared name, clickable labels. Arrow keys move and select. Never build radios from divs.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/radiogroup.json",
    code: "import { RadioGroup } from \"@/components/ui/radiogroup\";\n\nexport function SizePicker({ value, onChange }) {\n  return <RadioGroup legend=\"Size\" name=\"size\" value={value} onChange={onChange} options={[{ value: \"sm\", label: \"Small\" }, { value: \"md\", label: \"Medium\" }, { value: \"lg\", label: \"Large\" }]} />;\n}" },
  { id: "progress", name: "Progress", tagline: "How far along. Number + bar, never bar alone.",
    anatomy: ["Label", "Bar + fill", "Value text"],
    props: [["value", "number", "Yes", "Current value, 0–100 by default."], ["min", "number", "No — 0", "Minimum."], ["max", "number", "No — 100", "Maximum."], ["label", "string", "Yes", "Visible label, e.g. \"Upload\"."]],
    keyboard: [["—", "Progress is not interactive. No keyboard behavior."]],
    invariants: ["Uses role=progressbar + aria-valuenow/min/max.", "Value is shown as text, never bar alone.", "Value is clamped to min–max."],
    contract: { format: "oeste.component.v1", component: "Progress", props: { value: "number", min: "number", max: "number" }, a11y: { role: "progressbar", values: "aria-valuenow/min/max", text: "visible value" } },
    prompt: "Build an Oeste Progress with role=progressbar + aria-valuenow/min/max, visible label + value text, value clamped to min–max. Never show a bar without its number.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/progress.json",
    code: "import { Progress } from \"@/components/ui/progress\";\n\nexport function Upload({ done }) {\n  return <Progress label=\"Upload\" value={done} />;\n}\n// Dark mode: built in via dark: classes." },
  { id: "avatar", name: "Avatar", tagline: "A face or initials. Fallback always shows.",
    anatomy: ["Image (optional)", "Fallback initials", "Accessible name"],
    props: [["src", "string", "No", "Photo URL. When it fails, the fallback shows."], ["name", "string", "Yes", "Full name — used for initials + accessible name."], ["alt", "string", "No — name", "Image alt text."], ["size", "md | lg", "No — md", "44px or 64px."]],
    keyboard: [["—", "Avatar is not interactive. No keyboard behavior."]],
    invariants: ["Fallback initials always render when the image is missing or fails.", "Accessible name is the person's name, never empty.", "Initials are derived from the name, never hardcoded per instance."],
    contract: { format: "oeste.component.v1", component: "Avatar", props: { src: "string?", name: "string", size: ["md", "lg"] }, a11y: { name: "person name", fallback: "initials when image fails" } },
    prompt: "Build an Oeste Avatar: photo with an initials fallback that always renders when the image is missing or fails. Accessible name is the person's name. Sizes md (44px) and lg (64px). Never leave an empty circle.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/avatar.json",
    code: "import { Avatar } from \"@/components/ui/avatar\";\n\nexport function Teammate() {\n  return <Avatar name=\"Alex Rivera\" src=\"/photos/member.jpg\" />;\n}\n// If the photo fails, initials show. Dark mode: built in." },
  { id: "separator", name: "Separator", tagline: "A hairline that divides. Decorative or semantic.",
    anatomy: ["Line", "Orientation"],
    props: [["orientation", "horizontal | vertical", "No — horizontal", "Line direction."], ["decorative", "boolean", "No — true", "True = aria-hidden. False = role=separator with a label."]],
    keyboard: [["—", "Separator is not interactive. No keyboard behavior."]],
    invariants: ["Decorative separators are aria-hidden.", "Semantic separators use role=separator.", "A separator never replaces a heading or a labeled section."],
    contract: { format: "oeste.component.v1", component: "Separator", props: { orientation: ["horizontal", "vertical"], decorative: "boolean" }, a11y: { decorative: "aria-hidden", semantic: "role=separator" } },
    prompt: "Build an Oeste Separator: a hairline rule, horizontal or vertical. Decorative separators are aria-hidden; semantic ones use role=separator. Never use a separator in place of a heading.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/separator.json",
    code: "import { Separator } from \"@/components/ui/separator\";\n\nexport function Sections() {\n  return (<><p>First section.</p><Separator /><p>Second section.</p></>);\n}" },
  { id: "slider", name: "Slider", tagline: "Pick a number by dragging. Arrows work too.",
    anatomy: ["Label", "Track + fill", "Thumb", "Value text"],
    props: [["label", "string", "Yes", "Visible label."], ["value / onChange", "number / (v) => void", "Yes", "Controlled value."], ["min", "number", "No — 0", "Minimum."], ["max", "number", "No — 100", "Maximum."], ["step", "number", "No — 1", "Step size."]],
    keyboard: [["Tab", "Move focus to the thumb."], ["ArrowLeft / ArrowRight / ArrowUp / ArrowDown", "Decrease / increase by one step."], ["Home / End", "Jump to min / max."], ["PageUp / PageDown", "Move by 10 steps."]],
    invariants: ["Native <input type=range>, never a div thumb.", "Value is shown as text, never slider alone.", "aria-valuenow/min/max always reflect the value."],
    contract: { format: "oeste.component.v1", component: "Slider", props: { label: "string", value: "number", min: "number", max: "number", step: "number" }, a11y: { native: "input[type=range]", values: "aria-valuenow/min/max" } },
    prompt: "Build an Oeste Slider with a native <input type=range>, visible label, visible value text, aria-valuenow/min/max. Arrow keys step, Home/End jump. Never build a slider thumb from a div.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/slider.json",
    code: "import { useState } from \"react\";\nimport { Slider } from \"@/components/ui/slider\";\n\nexport function Volume() {\n  const [value, setValue] = useState(40);\n  return <Slider label=\"Volume\" value={value} onChange={setValue} min={0} max={100} />;\n}" },
  { id: "tooltip", name: "Tooltip", tagline: "A hint on hover and focus. Never the only way to know.",
    anatomy: ["Trigger", "Bubble", "Text"],
    props: [["children", "ReactNode", "Yes", "Trigger element."], ["content", "string", "Yes", "Hint text."], ["side", "top | bottom", "No — top", "Bubble placement."]],
    keyboard: [["Tab", "Focus the trigger to show the tooltip."], ["Escape", "Dismiss the tooltip."], ["Tab away / blur", "Hide the tooltip."]],
    invariants: ["Tooltip shows on hover AND on focus.", "Tooltip content uses role=tooltip + aria-describedby.", "The hint is never the only place its information lives.", "Escape dismisses; blur hides."],
    contract: { format: "oeste.component.v1", component: "Tooltip", props: { content: "string", side: ["top", "bottom"] }, a11y: { role: "tooltip", describedby: "trigger aria-describedby", dismiss: "Escape / blur" } },
    prompt: "Build an Oeste Tooltip: shows on hover AND focus, role=tooltip + aria-describedby on the trigger, Escape dismisses, blur hides. Never put information only in a tooltip.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/tooltip.json",
    code: "import { Tooltip } from \"@/components/ui/tooltip\";\n\nexport function Help() {\n  return <Tooltip content=\"Saves to this project.\"><button type=\"button\">Save</button></Tooltip>;\n}" },
  { id: "popover", name: "Popover", tagline: "A small panel anchored to a trigger. Escape closes.",
    anatomy: ["Trigger", "Panel", "Content"],
    props: [["children", "ReactNode", "Yes", "Trigger + panel content."], ["open / onOpenChange", "boolean / (v) => void", "No", "Controlled open state. Uncontrolled by default."], ["label", "string", "Yes", "Accessible name for the panel."]],
    keyboard: [["Tab", "Move focus into the panel when open."], ["Escape", "Close and return focus to the trigger."], ["Click outside", "Close the panel."]],
    invariants: ["Panel is labelled by its trigger or label.", "Escape closes and returns focus to the trigger.", "Clicking outside closes; content behind stays interactive.", "Popover is non-modal — unlike Dialog, it does not trap focus or make the page inert."],
    contract: { format: "oeste.component.v1", component: "Popover", props: { label: "string", open: "boolean" }, a11y: { panel: "labelled", dismiss: "Escape / outside click", focus: "returns to trigger" } },
    prompt: "Build an Oeste Popover: trigger-anchored panel, Escape closes and returns focus to the trigger, outside click closes. Non-modal — no focus trap, page stays interactive. Panel is labelled.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/popover.json",
    code: "import { Popover } from \"@/components/ui/popover\";\n\nexport function Details() {\n  return <Popover label=\"Project details\"><button type=\"button\">Details</button><p>Topanga theme, 29 components.</p></Popover>;\n}" },
  { id: "dropdown-menu", name: "Dropdown Menu", tagline: "Actions in a list. Arrows move, Escape closes.",
    anatomy: ["Trigger", "Menu", "Menu items", "Separator (optional)"],
    props: [["label", "string", "Yes", "Accessible name for the menu."], ["items", "{ label, onSelect?, separator? }[]", "Yes", "Menu items."], ["children", "ReactNode", "Yes", "Trigger element."]],
    keyboard: [["Enter / Space / ArrowDown", "Open the menu, focus the first item."], ["ArrowDown / ArrowUp", "Move between items."], ["Enter / Space", "Activate the focused item."], ["Escape", "Close and return focus to the trigger."]],
    invariants: ["Menu uses role=menu, items use role=menuitem.", "Trigger uses aria-haspopup=menu + aria-expanded.", "Escape closes and returns focus to the trigger.", "Menu items are real buttons, never divs."],
    contract: { format: "oeste.component.v1", component: "DropdownMenu", props: { label: "string", items: "array" }, a11y: { menu: "role=menu", items: "role=menuitem", trigger: "aria-haspopup + aria-expanded" } },
    prompt: "Build an Oeste DropdownMenu: trigger with aria-haspopup=menu + aria-expanded, role=menu with role=menuitem buttons, Arrow keys move, Enter activates, Escape closes and returns focus. Items are real buttons, never divs.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/dropdown-menu.json",
    code: "import { DropdownMenu } from \"@/components/ui/dropdown-menu\";\n\nexport function Actions() {\n  return <DropdownMenu label=\"Project actions\" items={[{ label: \"Rename\", onSelect: () => {} }, { label: \"Duplicate\", onSelect: () => {} }]}><button type=\"button\">Actions</button></DropdownMenu>;\n}" },
  { id: "toggle", name: "Toggle", tagline: "A button that stays pressed. Fill + label, not color alone.",
    anatomy: ["Button", "Pressed state", "Label"],
    props: [["children", "ReactNode", "Yes", "Toggle label."], ["pressed / onPressedChange", "boolean / (v) => void", "Yes", "Controlled pressed state."], ["disabled", "boolean", "No — false", "Blocks toggling."]],
    keyboard: [["Tab", "Move focus to the toggle."], ["Enter / Space", "Toggle pressed state."]],
    invariants: ["Uses aria-pressed.", "Pressed state is visible by fill + label, never color alone.", "Toggle is a real <button>, never a div."],
    contract: { format: "oeste.component.v1", component: "Toggle", props: { pressed: "boolean" }, a11y: { pressed: "aria-pressed", state: "fill + label, never color alone" } },
    prompt: "Build an Oeste Toggle: a real <button> with aria-pressed, pressed state visible by fill + label, never color alone. Tab focuses, Enter/Space toggles.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/toggle.json",
    code: "import { useState } from \"react\";\nimport { Toggle } from \"@/components/ui/toggle\";\n\nexport function Bold() {\n  const [pressed, setPressed] = useState(false);\n  return <Toggle pressed={pressed} onPressedChange={setPressed}>Bold</Toggle>;\n}" },
  { id: "collapsible", name: "Collapsible", tagline: "One section that opens and closes. Accordion's simpler sibling.",
    anatomy: ["Trigger button", "Panel"],
    props: [["title", "string", "Yes", "Trigger label."], ["children", "ReactNode", "Yes", "Panel content."], ["open / onOpenChange", "boolean / (v) => void", "No", "Controlled open state. Uncontrolled by default."]],
    keyboard: [["Tab", "Move focus to the trigger."], ["Enter / Space", "Toggle the panel."]],
    invariants: ["Trigger is a real <button> with aria-expanded + aria-controls.", "Panel is hidden when closed.", "State is visible by indicator + panel, never color alone.", "Reduced motion: no height animation."],
    contract: { format: "oeste.component.v1", component: "Collapsible", props: { title: "string", open: "boolean" }, a11y: { trigger: "button + aria-expanded + aria-controls", panel: "hidden when closed" } },
    prompt: "Build an Oeste Collapsible: one trigger button with aria-expanded + aria-controls, one panel hidden when closed, state visible by indicator + panel. Reduced motion: no height animation.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/collapsible.json",
    code: "import { Collapsible } from \"@/components/ui/collapsible\";\n\nexport function Details() {\n  return <Collapsible title=\"Show details\"><p>Topanga theme, 29 components.</p></Collapsible>;\n}" },
  { id: "skeleton", name: "Skeleton", tagline: "A placeholder while content loads. Never flashing.",
    anatomy: ["Shape", "aria-busy region"],
    props: [["width", "string", "No — 100%", "Placeholder width."], ["height", "string", "No — 16px", "Placeholder height."], ["label", "string", "Yes", "What is loading, e.g. \"Loading project\"."]],
    keyboard: [["—", "Skeleton is not interactive. No keyboard behavior."]],
    invariants: ["Container has aria-busy=true while loading.", "Skeleton is labelled with what is loading.", "No flashing, no shimmer that strobes. Reduced motion: no pulse.", "Real content replaces the skeleton — never both at once."],
    contract: { format: "oeste.component.v1", component: "Skeleton", props: { width: "string", height: "string", label: "string" }, a11y: { busy: "aria-busy=true", label: "what is loading" } },
    prompt: "Build an Oeste Skeleton: placeholder shape with aria-busy=true, labelled with what is loading. No flashing, no strobing shimmer. Reduced motion: no pulse. Real content replaces it.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/skeleton.json",
    code: "import { Skeleton } from \"@/components/ui/skeleton\";\n\nexport function LoadingCard() {\n  return <Skeleton label=\"Loading project\" width=\"100%\" height=\"96px\" />;\n}" },
  { id: "label", name: "Label", tagline: "A label that stands on its own. Links to its control.",
    anatomy: ["Text", "Required indicator (optional)"],
    props: [["htmlFor", "string", "Yes", "Id of the control it labels."], ["children", "ReactNode", "Yes", "Label text."], ["required", "boolean", "No — false", "Shows a visible required indicator + aria."]],
    keyboard: [["—", "Label is not interactive. Clicking it focuses its control."]],
    invariants: ["Always linked via htmlFor to a real control id.", "Required is shown with a visible indicator AND text, never color alone.", "Label text is visible, never sr-only except when the control already has a visible label."],
    contract: { format: "oeste.component.v1", component: "Label", props: { htmlFor: "string", required: "boolean" }, a11y: { link: "htmlFor", required: "visible indicator + text" } },
    prompt: "Build an Oeste Label: standalone label linked via htmlFor to a real control id. Required shows a visible indicator plus text, never color alone. Clicking the label focuses its control.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/label.json",
    code: "import { Label } from \"@/components/ui/label\";\n\nexport function NameRow() {\n  return (<div><Label htmlFor=\"name\" required>Project name</Label><input id=\"name\" type=\"text\" /></div>);\n}" },
  { id: "breadcrumb", name: "Breadcrumb", tagline: "Where you are, and how you got here.",
    anatomy: ["List", "Links", "Current page"],
    props: [["items", "{ label, href? }[]", "Yes", "Trail. Last item is the current page."], ["ariaLabel", "string", "No — \"Breadcrumb\"", "Nav label."]],
    keyboard: [["Tab", "Move focus through the links. Current page is not a link."]],
    invariants: ["Wrapped in <nav aria-label=\"Breadcrumb\"> with an <ol>.", "Current page uses aria-current=\"page\" and is not a link.", "Separators are aria-hidden."],
    contract: { format: "oeste.component.v1", component: "Breadcrumb", props: { items: "array" }, a11y: { nav: "aria-label=Breadcrumb", current: "aria-current=page, not a link" } },
    prompt: "Build an Oeste Breadcrumb: <nav aria-label=\"Breadcrumb\"> with an <ol>, links for every step except the current page, current page uses aria-current=\"page\" and is not a link. Separators are aria-hidden.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/breadcrumb.json",
    code: "import { Breadcrumb } from \"@/components/ui/breadcrumb\";\n\nexport function Trail() {\n  return <Breadcrumb items={[{ label: \"Home\", href: \"#/home\" }, { label: \"Components\", href: \"#/components/button\" }, { label: \"Button\" }]} />;\n}" },
  { id: "pagination", name: "Pagination", tagline: "Page through a list. Current page is unmistakable.",
    anatomy: ["Previous", "Page buttons", "Ellipsis", "Next"],
    props: [["page", "number", "Yes", "Current page (1-based)."], ["totalPages", "number", "Yes", "Total pages."], ["onChange", "(page) => void", "Yes", "Fires when the page changes."]],
    keyboard: [["Tab", "Move focus through Previous, pages, Next."], ["Enter / Space", "Go to the focused page."]],
    invariants: ["Wrapped in <nav aria-label=\"Pagination\">.", "Current page uses aria-current=\"page\".", "Previous is disabled on page 1; Next is disabled on the last page.", "Ellipsis is aria-hidden, never a button."],
    contract: { format: "oeste.component.v1", component: "Pagination", props: { page: "number", totalPages: "number" }, a11y: { nav: "aria-label=Pagination", current: "aria-current=page", ellipsis: "aria-hidden" } },
    prompt: "Build an Oeste Pagination: <nav aria-label=\"Pagination\">, Previous / page buttons / Next, current page uses aria-current=\"page\", Previous disabled on page 1, Next disabled on the last page, ellipsis is aria-hidden, never a button.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/pagination.json",
    code: "import { useState } from \"react\";\nimport { Pagination } from \"@/components/ui/pagination\";\n\nexport function Pages() {\n  const [page, setPage] = useState(1);\n  return <Pagination page={page} totalPages={9} onChange={setPage} />;\n}" },
  { id: "table", name: "Table", tagline: "Rows and columns that screen readers can follow.",
    anatomy: ["Caption", "Header row", "Body rows"],
    props: [["caption", "string", "Yes", "What the table shows."], ["columns", "{ key, header }[]", "Yes", "Columns."], ["rows", "Record[]", "Yes", "Rows."]],
    keyboard: [["Tab", "Move focus through interactive cells, if any."]],
    invariants: ["<caption> describes what the table shows.", "Header cells use <th scope=\"col\">; row headers use <th scope=\"row\">.", "No layout tables, ever.", "Sticky header keeps column labels visible on long tables."],
    contract: { format: "oeste.component.v1", component: "Table", props: { caption: "string", columns: "array", rows: "array" }, a11y: { caption: "describes the table", headers: "th scope col/row" } },
    prompt: "Build an Oeste Table: semantic <table> with a <caption> describing what it shows, <th scope=\"col\"> headers (scope=\"row\" for row headers), sticky header on long tables. Never use a table for layout.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/table.json",
    code: "import { Table } from \"@/components/ui/table\";\n\nexport function Tokens() {\n  return <Table caption=\"Topanga tokens\" columns={[{ key: \"token\", header: \"Token\" }, { key: \"light\", header: \"Light\" }]} rows={[{ token: \"accent\", light: \"#C47D3B\" }]} />;\n}" },
  { id: "empty-state", name: "Empty State", tagline: "Nothing here yet — and a clear next step.",
    anatomy: ["Icon (decorative)", "Heading", "Text", "Action"],
    props: [["title", "string", "Yes", "What is empty."], ["description", "string", "Yes", "Why it is empty + what to do."], ["actionLabel", "string", "No", "Action button label."], ["onAction", "() => void", "No", "Action handler."]],
    keyboard: [["Tab", "Move focus to the action when present."], ["Enter / Space", "Activate the action."]],
    invariants: ["Icon is aria-hidden.", "Heading says what is empty, in plain words.", "There is always a next step: an action or a link.", "Empty state never blames the user."],
    contract: { format: "oeste.component.v1", component: "EmptyState", props: { title: "string", description: "string", actionLabel: "string?" }, a11y: { icon: "aria-hidden", action: "focusable button" } },
    prompt: "Build an Oeste Empty State: aria-hidden icon, heading that says what is empty in plain words, description with a next step, and a focusable action button. Never blame the user for an empty screen.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/empty-state.json",
    code: "import { EmptyState } from \"@/components/ui/empty-state\";\n\nexport function NoProjects() {\n  return <EmptyState title=\"No projects yet\" description=\"Create your first project to see it here.\" actionLabel=\"New project\" onAction={() => {}} />;\n}" }
];

const TOKENS = [
  { name: "Paper / bg", v: "--color-bg", light: "#F6F4F1", dark: "#121110", use: "Page background." },
  { name: "Surface", v: "--color-surface", light: "#FCFAF7", dark: "#1C1917", use: "Cards, demos, panels." },
  { name: "Ink / text", v: "--color-text", light: "#1C1917", dark: "#F5F3EF", use: "Body text, headings." },
  { name: "Muted", v: "--color-muted", light: "#706963", dark: "#9E968F", use: "Secondary text, captions." },
  { name: "Warm Ochre (accent)", v: "--color-accent", light: "#C47D3B", dark: "#DB914E", use: "Primary actions, active states." },
  { name: "Sage (accent-alt)", v: "--color-accent-alt", light: "#5E6B5A", dark: "#8B9B87", use: "Secondary accent, success-adjacent." },
  { name: "Canyon Rust (decorative)", v: "--color-rust", light: "#B85B35", dark: "#D98A63", use: "Large decorative accents only. Never small error text." },
  { name: "Danger (semantic)", v: "--color-danger", light: "#A83E22", dark: "#E07A52", use: "Errors, destructive actions. WCAG AA 4.5:1 for normal text." },
  { name: "Success", v: "--color-success", light: "#2F6B3A", dark: "#6BA368", use: "Success states." },
  { name: "Warning", v: "--color-warning", light: "#7A5A12", dark: "#D9A441", use: "Warnings." },
  { name: "Focus", v: "--color-focus", light: "#1C1917", dark: "#F5F3EF", use: "2px focus outline. Distinct from danger." },
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const $ = (sel) => document.querySelector(sel);

/* ---------- Menu auto-close ---------- */
function closeMenu() {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menuBtn");
  if (!sidebar || !menuBtn) return;
  sidebar.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}

/* ---------- Syntax highlighting (dependency-free) ----------
   Tokenizes raw code and emits escaped spans. Colors come from --code-*
   vars in tokens.css (both themes). Light-mode keyword/number use darker
   same-hue derivatives so code text passes WCAG AA 4.5:1 on surface. */
function hlSpan(cls, raw) { return '<span class="' + cls + '">' + esc(raw) + "</span>"; }

function highlightJSX(raw) {
  const re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|\b(\d[\d_]*(?:\.\d+)?)\b|\b(import|export|from|default|const|let|var|function|return|if|else|for|of|in|new|typeof|true|false|null|undefined|async|await)\b|(<\/?)([A-Za-z][\w.]*)|([A-Za-z_$][\w$-]*)(?=\s*=)/g;
  let out = "", pos = 0, m;
  while ((m = re.exec(raw)) !== null) {
    out += esc(raw.slice(pos, m.index));
    pos = m.index + m[0].length;
    if (m[1]) out += hlSpan("tok-com", m[1]);
    else if (m[2]) out += hlSpan("tok-str", m[2]);
    else if (m[3]) out += hlSpan("tok-num", m[3]);
    else if (m[4]) out += hlSpan("tok-kw", m[4]);
    else if (m[5]) out += hlSpan("tok-punct", m[5]) + hlSpan("tok-tag", m[6]);
    else if (m[7]) out += hlSpan("tok-prop", m[7]);
  }
  out += esc(raw.slice(pos));
  return out;
}
function highlightJSON(raw) {
  const re = /("(?:\\.|[^"\\])*")(\s*:)?|\b(\d[\d.]*(?:[eE][+-]?\d+)?)\b|\b(true|false|null)\b/g;
  let out = "", pos = 0, m;
  while ((m = re.exec(raw)) !== null) {
    out += esc(raw.slice(pos, m.index));
    pos = m.index + m[0].length;
    if (m[1]) out += m[2] ? hlSpan("tok-key", m[1]) + esc(m[2]) : hlSpan("tok-str", m[1]);
    else if (m[3]) out += hlSpan("tok-num", m[3]);
    else if (m[4]) out += hlSpan("tok-kw", m[4]);
  }
  out += esc(raw.slice(pos));
  return out;
}
function highlightBash(raw) {
  return raw.split("\n").map((line) => {
    const first = line.match(/^(\s*)([^\s]+)([\s\S]*)$/);
    if (!first) return esc(line);
    const re = /(--[\w-]+)|("[^"]*"|'[^']*')|(\b\d+\b)/g;
    let out = "", pos = 0, m;
    const rest = first[3];
    while ((m = re.exec(rest)) !== null) {
      out += esc(rest.slice(pos, m.index));
      pos = m.index + m[0].length;
      if (m[1]) out += hlSpan("tok-str", m[1]);
      else if (m[2]) out += hlSpan("tok-str", m[2]);
      else if (m[3]) out += hlSpan("tok-num", m[3]);
    }
    out += esc(rest.slice(pos));
    return esc(first[1]) + hlSpan("tok-kw", first[2]) + out;
  }).join("\n");
}
function highlightCSS(raw) {
  return esc(raw)
    .replace(/(@[\w-]+)/g, (m) => '<span class="tok-kw">' + m + "</span>")
    .replace(/(&quot;[^&]*?&quot;)/g, (m) => '<span class="tok-str">' + m + "</span>");
}
function detectLang(text) {
  const t = text.trim();
  if (t.startsWith("{")) return "json";
  if (/^(npx|npm|pnpm|yarn)\b/.test(t)) return "bash";
  if (t.startsWith("@")) return "css";
  if (/^(import|export|const|let|var|function)\b/.test(t)) return "jsx";
  if (t.includes("<") && (t.includes("return") || t.includes("=>") || t.includes("from"))) return "jsx";
  return "text";
}
function highlightCode(raw, lang) {
  if (lang === "json") return highlightJSON(raw);
  if (lang === "bash") return highlightBash(raw);
  if (lang === "css") return highlightCSS(raw);
  if (lang === "text") return esc(raw);
  return highlightJSX(raw);
}
function highlightAll() {
  document.querySelectorAll("#view pre").forEach((pre) => {
    if (pre.dataset.hl) return;
    pre.dataset.hl = "1";
    const raw = pre.textContent;
    pre.innerHTML = highlightCode(raw, detectLang(raw));
  });
}

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
    + '<button type="button" class="btn btn-ghost">Ghost</button>'
    + '<button type="button" class="btn btn-danger">Danger</button>'
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
  if (c.id === "avatar") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Toggle the photo to see the fallback.</p><div class="demo-row">'
    + '<span class="avatar" title="Alex Rivera"><span data-avatar-fallback>AR</span><img data-avatar-img src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2744%27 height=%2744%27%3E%3Crect width=%2744%27 height=%2744%27 fill=%27%23C47D3B%27/%3E%3C/svg%3E" alt="Alex Rivera" style="display:none"></span>'
    + '<span class="avatar avatar-lg" title="Sam Chen"><span>SC</span></span></div>'
    + '<button type="button" class="btn btn-secondary" style="margin-top:16px" data-avatar-toggle>Show photo</button></div>';
  if (c.id === "separator") return '<div class="demo"><p class="demo-caption">Hairlines, horizontal and vertical.</p><p style="margin:0">First section.</p><hr class="separator-h" aria-hidden="true"><p style="margin:0">Second section.</p>'
    + '<div style="display:flex;gap:16px;align-items:center;margin-top:16px"><span>Left</span><span class="separator-v" aria-hidden="true"></span><span>Right</span></div></div>';
  if (c.id === "slider") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Arrow keys step by 1.</p><div class="field" style="max-width:420px"><label for="demoSlider">Volume</label><input id="demoSlider" class="slider" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40 percent"><p class="muted" id="demoSliderOut" aria-live="polite">Volume: 40%</p></div></div>';
  if (c.id === "tooltip") return '<div class="demo"><p class="demo-caption">Hover or Tab to the button. Escape dismisses.</p><span class="tooltip-wrap"><button type="button" class="btn btn-primary" data-tooltip-trigger aria-describedby="demoTooltip">Save</button><span class="tooltip-bubble" role="tooltip" id="demoTooltip" hidden>Saves to this project.</span></span></div>';
  if (c.id === "popover") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Escape or outside click closes.</p><span class="popover-wrap"><button type="button" class="btn btn-primary" data-popover-trigger aria-expanded="false" aria-controls="demoPopover">Details</button><div class="popover-panel" id="demoPopover" hidden><p style="margin:0 0 8px"><strong>Project details</strong></p><p style="margin:0" class="muted">Topanga theme, 29 components.</p></div></span></div>';
  if (c.id === "dropdown-menu") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Enter opens, arrows move, Escape closes.</p><span class="dropdown-wrap"><button type="button" class="btn btn-primary" data-menu-trigger aria-haspopup="menu" aria-expanded="false" aria-controls="demoDropdown">Actions</button><ul class="dropdown-menu" role="menu" id="demoDropdown" aria-label="Project actions" hidden><li><button type="button" role="menuitem" data-menu-item>Rename</button></li><li><button type="button" role="menuitem" data-menu-item>Duplicate</button></li><li><button type="button" role="menuitem" data-menu-item>Archive</button></li></ul></span><p class="muted" id="demoMenuOut" aria-live="polite" style="margin-top:12px"></p></div>';
  if (c.id === "toggle") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><button type="button" class="toggle-btn" data-demo-toggle aria-pressed="false">Bold</button><p class="muted" id="demoToggleOut" aria-live="polite" style="margin-top:12px">Bold: off</p></div>';
  if (c.id === "collapsible") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><button type="button" class="collapsible-trigger" data-collapsible-trigger aria-expanded="false" aria-controls="demoCollapsiblePanel">Show details <span aria-hidden="true">+</span></button><div id="demoCollapsiblePanel" hidden><p style="margin:12px 0 0">Topanga theme, 29 components. One trigger, one panel.</p></div></div>';
  if (c.id === "skeleton") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Load the content to replace the skeleton.</p><div id="demoSkeletonWrap" aria-busy="true" aria-label="Loading project"><div class="skeleton" style="height:20px;width:60%;margin-bottom:12px"></div><div class="skeleton" style="height:16px;width:100%;margin-bottom:8px"></div><div class="skeleton" style="height:16px;width:80%"></div></div><button type="button" class="btn btn-secondary" style="margin-top:16px" data-skeleton-load>Load content</button></div>';
  if (c.id === "label") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Click the label — focus moves to the input.</p><div class="field" style="max-width:420px"><label for="demoLabelInput">Project name <span aria-hidden="true">*</span> <span class="muted">(required)</span></label><input id="demoLabelInput" type="text" aria-required="true" placeholder="Topanga"></div></div>';
  if (c.id === "breadcrumb") return '<div class="demo"><p class="demo-caption">Real navigation. Current page is not a link.</p><nav class="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="#/home">Home</a></li><li><a href="#/components/button">Components</a></li><li><a href="#/components/avatar">Avatar</a></li><li aria-current="page">Breadcrumb</li></ol></nav></div>';
  if (c.id === "pagination") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Pick a page.</p><nav class="pagination" aria-label="Pagination"><button type="button" class="page-btn" data-page-prev disabled>Previous</button><button type="button" class="page-btn" data-page-num aria-current="page">1</button><button type="button" class="page-btn" data-page-num>2</button><button type="button" class="page-btn" data-page-num>3</button><span aria-hidden="true">…</span><button type="button" class="page-btn" data-page-num>9</button><button type="button" class="page-btn" data-page-next>Next</button></nav><p class="muted" id="demoPageOut" aria-live="polite" style="margin-top:12px">Page 1 of 9</p></div>';
  if (c.id === "table") return '<div class="demo"><p class="demo-caption">Semantic table. Caption describes it; headers carry scope.</p><div style="overflow-x:auto"><table class="data-table"><caption>Topanga tokens — light values</caption><thead><tr><th scope="col">Token</th><th scope="col">Light</th><th scope="col">Use</th></tr></thead><tbody><tr><th scope="row">accent</th><td><code>#C47D3B</code></td><td>Primary actions</td></tr><tr><th scope="row">danger</th><td><code>#A83E22</code></td><td>Errors</td></tr></tbody></table></div></div>';
  if (c.id === "empty-state") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><div class="empty-state"><p class="empty-state-icon" aria-hidden="true">○</p><h3 style="margin:12px 0 8px">No projects yet</h3><p class="muted" style="margin:0 0 16px">Create your first project to see it here.</p><button type="button" class="btn btn-primary" data-empty-action>New project</button></div></div>';
  return "";
}

function variantsHTML(c) {
  const row = (label, inner) => '<div class="variant-row"><span class="variant-label">' + label + "</span>" + inner + "</div>";
  if (c.id === "button") {
    const btn = (v, s) => '<button type="button" class="btn btn-' + v + " btn-" + (s === "md" ? "" : s) + '">' + v[0].toUpperCase() + v.slice(1) + " · " + s + "</button>";
    return "<h2>Variants</h2><p>Every variant × size in the contract, plus states. All sizes keep the 44px min touch.</p><div class=\"variant-matrix\">"
      + row("Primary", btn("primary", "sm") + btn("primary", "md") + btn("primary", "lg"))
      + row("Secondary", btn("secondary", "sm") + btn("secondary", "md") + btn("secondary", "lg"))
      + row("Ghost", btn("ghost", "sm") + btn("ghost", "md") + btn("ghost", "lg"))
      + row("Danger", btn("danger", "sm") + btn("danger", "md") + btn("danger", "lg"))
      + row("States", '<button type="button" class="btn btn-primary" disabled>Disabled</button><button type="button" class="btn btn-primary" disabled aria-busy="true"><span aria-hidden="true">…</span> Loading</button><button type="button" class="btn btn-primary"><span aria-hidden="true">→</span> With icon</button>')
      + "</div>";
  }
  if (c.id === "input") return "<h2>Variants</h2><p>Default, error, disabled — the error state is text + role, never color alone.</p><div class=\"variant-matrix\">"
    + row("Default", '<div class="field" style="max-width:320px"><label for="vInput0">Email</label><input id="vInput0" type="text" aria-describedby="vInput0Hint"><p class="hint" id="vInput0Hint">We never share it.</p></div>')
    + row("Error", '<div class="field" style="max-width:320px"><label for="vInput1">Email</label><input id="vInput1" type="text" aria-invalid="true" aria-describedby="vInput1Err" value="not-an-email"><p class="error" id="vInput1Err" role="status">Enter a valid email.</p></div>')
    + row("Disabled", '<div class="field" style="max-width:320px"><label for="vInput2">Email</label><input id="vInput2" type="text" disabled value="alex@example.com"></div>')
    + "</div>";
  if (c.id === "checkbox") return "<h2>Variants</h2><p>Unchecked, checked, disabled.</p><div class=\"variant-matrix\">"
    + row("Unchecked", '<label style="display:flex;gap:8px;align-items:center"><input type="checkbox"> <span>Send me updates</span></label>')
    + row("Checked", '<label style="display:flex;gap:8px;align-items:center"><input type="checkbox" checked> <span>Send me updates</span></label>')
    + row("Disabled", '<label style="display:flex;gap:8px;align-items:center"><input type="checkbox" disabled> <span>Send me updates</span></label>')
    + "</div>";
  if (c.id === "switch") return "<h2>Variants</h2><p>Off, on, disabled — state is position + label, never color alone.</p><div class=\"variant-matrix\">"
    + row("Off", '<button type="button" role="switch" aria-checked="false" class="btn btn-secondary" aria-label="Notifications switch">Notifications: off</button>')
    + row("On", '<button type="button" role="switch" aria-checked="true" class="btn btn-secondary" aria-label="Notifications switch">Notifications: on</button>')
    + row("Disabled", '<button type="button" role="switch" aria-checked="false" class="btn btn-secondary" disabled aria-label="Notifications switch">Notifications: off</button>')
    + "</div>";
  if (c.id === "toggle") return "<h2>Variants</h2><p>Unpressed and pressed — fill + label, never color alone.</p><div class=\"variant-matrix\">"
    + row("Off", '<button type="button" class="toggle-btn" aria-pressed="false">Bold</button>')
    + row("On", '<button type="button" class="toggle-btn" aria-pressed="true">Bold</button>')
    + "</div>";
  if (c.id === "select") return "<h2>Variants</h2><p>Enabled and disabled.</p><div class=\"variant-matrix\">"
    + row("Enabled", '<div class="field" style="max-width:280px"><label for="vSelect0">Theme</label><select id="vSelect0"><option>Topanga</option><option>Paper</option></select></div>')
    + row("Disabled", '<div class="field" style="max-width:280px"><label for="vSelect1">Theme</label><select id="vSelect1" disabled><option>Topanga</option></select></div>')
    + "</div>";
  if (c.id === "progress") return "<h2>Variants</h2><p>Empty, half, full — value is always visible text, not just the bar.</p><div class=\"variant-matrix\">"
    + row("0%", '<div style="flex:1;max-width:320px"><div class="progress-track" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress"><div class="progress-fill" style="width:0%"></div></div></div><span>0%</span>')
    + row("50%", '<div style="flex:1;max-width:320px"><div class="progress-track" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress"><div class="progress-fill" style="width:50%"></div></div></div><span>50%</span>')
    + row("100%", '<div style="flex:1;max-width:320px"><div class="progress-track" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress"><div class="progress-fill" style="width:100%"></div></div></div><span>100%</span>')
    + "</div>";
  if (c.id === "slider") return "<h2>Variants</h2><p>Min, middle, max — value announced via <code>aria-valuetext</code>.</p><div class=\"variant-matrix\">"
    + row("0", '<div class="field" style="flex:1;max-width:320px"><label for="vSlider0">Volume</label><input id="vSlider0" class="slider" type="range" min="0" max="100" step="1" value="0" aria-valuetext="0 percent"></div><span>0%</span>')
    + row("50", '<div class="field" style="flex:1;max-width:320px"><label for="vSlider1">Volume</label><input id="vSlider1" class="slider" type="range" min="0" max="100" step="1" value="50" aria-valuetext="50 percent"></div><span>50%</span>')
    + row("100", '<div class="field" style="flex:1;max-width:320px"><label for="vSlider2">Volume</label><input id="vSlider2" class="slider" type="range" min="0" max="100" step="1" value="100" aria-valuetext="100 percent"></div><span>100%</span>')
    + "</div>";
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
  // New in v0.3.0 — Avatar, Slider, Tooltip, Popover, Dropdown, Toggle, Collapsible, Skeleton, Pagination, Empty State
  const avatarToggle = document.querySelector("[data-avatar-toggle]");
  if (avatarToggle) avatarToggle.addEventListener("click", () => {
    const img = document.querySelector("[data-avatar-img]");
    const showing = img.style.display !== "none";
    img.style.display = showing ? "none" : "block";
    avatarToggle.textContent = showing ? "Show photo" : "Show fallback";
  });
  const slider = document.getElementById("demoSlider");
  if (slider) slider.addEventListener("input", () => {
    slider.setAttribute("aria-valuetext", slider.value + " percent");
    document.getElementById("demoSliderOut").textContent = "Volume: " + slider.value + "%";
  });
  const tipTrigger = document.querySelector("[data-tooltip-trigger]");
  if (tipTrigger) {
    const bubble = document.getElementById("demoTooltip");
    const show = () => { bubble.hidden = false; };
    const hide = () => { bubble.hidden = true; };
    tipTrigger.addEventListener("mouseenter", show);
    tipTrigger.addEventListener("focus", show);
    tipTrigger.addEventListener("mouseleave", hide);
    tipTrigger.addEventListener("blur", hide);
    tipTrigger.addEventListener("keydown", (e) => { if (e.key === "Escape") { hide(); tipTrigger.blur(); } });
  }
  const popTrigger = document.querySelector("[data-popover-trigger]");
  if (popTrigger) {
    const panel = document.getElementById("demoPopover");
    const close = () => { panel.hidden = true; popTrigger.setAttribute("aria-expanded", "false"); };
    popTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = panel.hidden;
      panel.hidden = !open;
      popTrigger.setAttribute("aria-expanded", String(open));
      if (open) panel.querySelector("p").focus?.();
    });
    document.addEventListener("click", (e) => { if (!panel.hidden && !panel.contains(e.target) && e.target !== popTrigger) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) { close(); popTrigger.focus(); } });
  }
  const menuTrigger = document.querySelector("[data-menu-trigger]");
  if (menuTrigger) {
    const menu = document.getElementById("demoDropdown");
    const items = [...menu.querySelectorAll("[role=menuitem]")];
    const close = () => { menu.hidden = true; menuTrigger.setAttribute("aria-expanded", "false"); items.forEach((i) => i.removeAttribute("data-active")); };
    const open = () => { menu.hidden = false; menuTrigger.setAttribute("aria-expanded", "true"); items[0].setAttribute("data-active", "true"); items[0].focus(); };
    menuTrigger.addEventListener("click", (e) => { e.stopPropagation(); menu.hidden ? open() : close(); });
    menuTrigger.addEventListener("keydown", (e) => { if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    items.forEach((item, i) => {
      item.addEventListener("click", () => { document.getElementById("demoMenuOut").textContent = "Chose: " + item.textContent.trim(); close(); menuTrigger.focus(); });
      item.addEventListener("keydown", (e) => {
        let next = null;
        if (e.key === "ArrowDown") next = items[(i + 1) % items.length];
        if (e.key === "ArrowUp") next = items[(i + items.length - 1) % items.length];
        if (e.key === "Escape") { close(); menuTrigger.focus(); return; }
        if (e.key === "Home") next = items[0];
        if (e.key === "End") next = items[items.length - 1];
        if (next) { e.preventDefault(); items.forEach((x) => x.removeAttribute("data-active")); next.setAttribute("data-active", "true"); next.focus(); }
      });
    });
    document.addEventListener("click", (e) => { if (!menu.hidden && !menu.contains(e.target) && e.target !== menuTrigger) close(); });
  }
  const toggleBtn = document.querySelector("[data-demo-toggle]");
  if (toggleBtn) toggleBtn.addEventListener("click", () => {
    const on = toggleBtn.getAttribute("aria-pressed") === "true";
    toggleBtn.setAttribute("aria-pressed", String(!on));
    document.getElementById("demoToggleOut").textContent = "Bold: " + (!on ? "on" : "off");
  });
  const collTrigger = document.querySelector("[data-collapsible-trigger]");
  if (collTrigger) collTrigger.addEventListener("click", () => {
    const open = collTrigger.getAttribute("aria-expanded") === "true";
    collTrigger.setAttribute("aria-expanded", String(!open));
    document.getElementById("demoCollapsiblePanel").hidden = open;
    collTrigger.querySelector("span").textContent = open ? "+" : "−";
  });
  const skelBtn = document.querySelector("[data-skeleton-load]");
  if (skelBtn) skelBtn.addEventListener("click", () => {
    const wrap = document.getElementById("demoSkeletonWrap");
    wrap.setAttribute("aria-busy", "false");
    wrap.innerHTML = "<p style=\"margin:0\"><strong>Field notes</strong></p><p style=\"margin:8px 0 0\">Room to think.</p>";
  });
  const pageBtns = [...document.querySelectorAll("[data-page-num]")];
  if (pageBtns.length) {
    const prev = document.querySelector("[data-page-prev]");
    const next = document.querySelector("[data-page-next]");
    const out = document.getElementById("demoPageOut");
    const go = (n) => {
      pageBtns.forEach((b) => { const on = parseInt(b.textContent, 10) === n; b.toggleAttribute("aria-current", on); if (on) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
      prev.disabled = n === 1;
      next.disabled = n === 9;
      out.textContent = "Page " + n + " of 9";
    };
    pageBtns.forEach((b) => b.addEventListener("click", () => go(parseInt(b.textContent, 10))));
    prev.addEventListener("click", () => { const cur = pageBtns.find((b) => b.hasAttribute("aria-current")); go(parseInt(cur.textContent, 10) - 1); });
    next.addEventListener("click", () => { const cur = pageBtns.find((b) => b.hasAttribute("aria-current")); go(parseInt(cur.textContent, 10) + 1); });
  }
  const emptyBtn = document.querySelector("[data-empty-action]");
  if (emptyBtn) emptyBtn.addEventListener("click", () => showToast("New project started. Nothing was sent or stored."));
  // Patterns demos
  const patSave = document.querySelector("[data-pattern-save]");
  if (patSave) patSave.addEventListener("click", () => showToast("Settings saved. Nothing was sent or stored."));
  const patOpen = document.querySelector("[data-pattern-open]");
  if (patOpen) { const d = document.getElementById("patternDialog"); patOpen.addEventListener("click", () => d.showModal()); d.querySelectorAll("[data-pattern-close]").forEach((b) => b.addEventListener("click", () => d.close())); const form = document.getElementById("patternEditForm"); if (form) form.addEventListener("submit", (e) => { e.preventDefault(); d.close(); showToast("Project renamed. Nothing was sent or stored."); }); }
  // Form pattern: validate on submit, error summary + field error, Toast on success.
  const formPat = document.getElementById("patternForm");
  if (formPat) formPat.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("formName");
    const summary = document.getElementById("patternFormErrors");
    const fieldErr = document.getElementById("formNameError");
    if (name.value.trim().length < 3) {
      name.setAttribute("aria-invalid", "true");
      fieldErr.textContent = "Enter at least 3 characters.";
      summary.hidden = false;
      summary.innerHTML = '<p style="margin:0"><strong>Fix 1 error to continue:</strong> <a href="#formName">Project name — enter at least 3 characters.</a></p>';
      name.focus();
    } else {
      name.removeAttribute("aria-invalid");
      fieldErr.textContent = "";
      summary.hidden = true;
      summary.innerHTML = "";
      showToast("Project created. Nothing was sent or stored.");
    }
  });
  document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", () => copyText(b.dataset.copy, "Copied")));
}

function renderHome() {
  return '<p class="eyebrow">Oeste · Component library</p>'
    + "<h1>One system.<br>Three perspectives.</h1>"
    + '<p class="lede">Oeste is a design system for humans, AI agents, and vibe coders. Humans design it. Agents understand it. Vibe coders ship it — from the same tokens, the same contracts, the same components.</p>'
    + '<div class="install-bar"><strong>Start building</strong><code>npx shadcn@latest add https://oeste.hiddeninwest.com/r/button.json</code><button type="button" class="copy-btn" data-copy="npx shadcn@latest add https://oeste.hiddeninwest.com/r/button.json">Copy command</button><span class="muted">Install Button via shadcn — see <a href="#/getting-started">Getting started</a>.</span></div>'
    + '<div class="home-grid"><div><h2>What Oeste means</h2><p><strong>Oeste</strong> is Spanish for “west”. It names a direction, not a monument: westward, toward the edge of the map, where things get built by hand.</p>'
    + '<p><strong>Topanga</strong> is the first theme: the hidden canyon in Los Angeles where creatives retreat and build. A canyon is not a stage — it is shelter. That is the feeling Topanga is built to carry: warm paper like sun on a wall, canyon clay, ochre, sagebrush, and precision hairlines. Nothing shouts. Everything is placed on purpose.</p>'
    + '<p>Oeste is a quieter foundation for three ways of making. One set of tokens, one set of contracts, one set of components — read three ways. A designer reads the anatomy. An agent reads the contract. A vibe coder copies the code and ships. Nobody has to translate for anyone else, because the system already speaks all three languages.</p></div>'
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
    body += variantsHTML(c);
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
    body += '<div class="callout"><strong>Install.</strong> The CLI command installs from the live registry. The React snippets work today in any React + Tailwind app.</div>';
  }
  return body;
}

function renderTokens() {
  return '<p class="eyebrow">Foundations</p><h1>Tokens</h1><p class="lede">One source of truth: <code>src/tokens.css</code>, <code>src/tokens.json</code>, and <code>DESIGN_TOKENS</code> in <code>src/index.js</code> agree exactly. Canyon Rust is decorative only — never use it for small error text. Danger is the semantic error token.</p>'
    + '<div class="swatches">' + TOKENS.map((t) => '<div class="swatch"><div class="swatch-color" style="background:var(' + esc(t.v) + ')"></div><div class="swatch-body"><strong>' + esc(t.name) + '</strong><span>Light ' + esc(t.light) + " · Dark " + esc(t.dark) + '</span><p style="margin:8px 0 0">' + esc(t.use) + '</p><button type="button" class="copy-btn secondary" style="margin-top:10px" data-copy="' + esc(t.light) + '">Copy light hex</button></div></div>').join("") + "</div>"
    + "<h2>Tokens in use</h2><p>Tokens doing real work — the same classes the components use. Toggle the site theme: every swatch and demo below follows it.</p>"
    + '<div class="demo"><p class="demo-caption">Buttons — accent, text, danger.</p><div class="demo-row"><button type="button" class="btn btn-primary">Primary</button><button type="button" class="btn btn-secondary">Secondary</button><button type="button" class="btn btn-ghost">Ghost</button><button type="button" class="btn btn-danger">Danger</button></div></div>'
    + '<div class="demo"><p class="demo-caption">Text — body, muted, error.</p><div class="field"><p style="margin:0">Body text in <code>--color-text</code> on <code>--color-bg</code>.</p><p class="muted" style="margin:8px 0 0">Secondary text in <code>--color-muted</code>.</p><p class="error" role="status" style="margin:8px 0 0">Error text in <code>--color-danger</code> — never Canyon Rust.</p></div></div>'
    + '<div class="demo"><p class="demo-caption">Alerts + badges — every tone.</p><div class="site-alert alert-info" role="status"><p style="margin:0;flex:1"><strong>Info.</strong> Accent-adjacent, calm.</p></div><div class="site-alert alert-success" role="status" style="margin-top:12px"><p style="margin:0;flex:1"><strong>Saved.</strong> Success tone.</p></div><div class="site-alert alert-warning" role="status" style="margin-top:12px"><p style="margin:0;flex:1"><strong>Heads up.</strong> Warning tone.</p></div><div class="site-alert alert-danger" role="alert" style="margin-top:12px"><p style="margin:0;flex:1"><strong>Could not save.</strong> Danger tone.</p></div><div class="demo-row" style="margin-top:16px"><span class="badge">Neutral</span><span class="badge badge-accent">Accent</span><span class="badge badge-success">Success</span><span class="badge badge-danger">Danger</span></div></div>'
    + '<div class="demo"><p class="demo-caption">Surface + progress + focus.</p><div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:12px;padding:20px"><p style="margin:0">A card in <code>--color-surface</code>, hairline in <code>--color-border</code>.</p><div class="progress-track" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="Demo progress" style="margin-top:16px"><div class="progress-fill" style="width:65%"></div></div><p style="margin:12px 0 0"><strong>Upload</strong> — <span>65%</span>, fill in <code>--color-accent</code>.</p><button type="button" class="btn btn-secondary" style="margin-top:16px">Tab to me</button> <span class="muted">Focus is a 2px ink/paper outline.</span></div></div>'
    + "<h2>Type</h2><p>Manrope for display + body, JetBrains Mono for code. Display steps: 40px phones / 48px ≥480px / 72px ≥720px, title <code>clamp(1.75rem, 4vw, 2.5rem)</code>, heading <code>clamp(1.25rem, 2.5vw, 1.5rem)</code>.</p>"
    + "<h2>Spacing / radius / motion</h2><p>Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 px. Radii: 4 / 8 / 12 px + 999px pill. Motion: 180ms in / 140ms out, <code>cubic-bezier(.16,1,.3,1)</code>. Reduced motion: no animation. Breakpoints: mobile 0–640px, tablet 641–1024px, desktop 1025px+. Touch targets: min 44px.</p>";
}

function renderGettingStarted() {
  return '<p class="eyebrow">Docs</p><h1>Getting started</h1><p class="lede">Oeste is React + Tailwind, copy-paste ready. No heavy dependency, no config hell. Five steps and you are building.</p>'
    + '<h2>1 · Get the tokens</h2><p>shadcn does <em>not</em> install the tokens — this step is manual. Download <a href="https://raw.githubusercontent.com/eric2busy/Oeste/main/src/tokens.css">tokens.css</a> (and <a href="https://raw.githubusercontent.com/eric2busy/Oeste/main/src/tokens.json">tokens.json</a> if you want the machine-readable copy), save it as <code>src/tokens.css</code>, and import it once at your app entry:</p><pre>import "./tokens.css";</pre><p>Light + dark ship together via <code>data-theme</code>.</p>'
    + '<h2>2 · Point Tailwind at data-theme</h2><p>Oeste components use <code>dark:</code> classes, but <code>dark:</code> does not follow <code>data-theme</code> until you tell Tailwind to. Tailwind v4, in your CSS after the Tailwind import:</p><pre>@custom-variant dark (&amp;:where([data-theme="dark"], [data-theme="dark"] *));</pre><p>Tailwind v3? See <a href="#/setup">Setup</a>. Without this line, dark mode silently does nothing.</p>'
    + '<h2>3 · Install a component</h2><p>Install any component with shadcn. shadcn writes the component file into your project:</p><pre>npx shadcn@latest add https://oeste.hiddeninwest.com/r/button.json</pre><p>Replace <code>button</code> with any component id. The registry lives at <code>https://oeste.hiddeninwest.com/r/</code> (index: <code>r/registry.json</code>). Agents: the machine manifest is <code>components.json</code> at the repo root — every component with its registry URL, raw GitHub URL, docs link, and tags.</p>'
    + '<h2>4 · Use it</h2><p>Import from where shadcn put the file:</p><pre>import { Button } from "@/components/ui/button";\n\nexport function SaveAction() {\n  return &lt;Button variant="primary" onClick={() =&gt; {}}&gt;Save changes&lt;/Button&gt;;\n}</pre><p>The <code>@/components/ui/…</code> path is the shadcn default — adjust it if your setup puts files elsewhere.</p>'
    + '<h2>5 · For agents</h2><p>Paste the Agent prompt + JSON contract into your editor. Agents must not invent props beyond the contract. The full machine contract lives in <a href="llms.txt">llms.txt</a>.</p>'
    + '<div class="callout"><strong>Honest install story.</strong> <code>@oeste/ui</code> is not a published package — there is nothing to <code>npm install</code>. Install via shadcn above, or copy a snippet and own the file (see <a href="#/setup">Setup</a> for the copy-paste path).</div>'
    + '<h2>Guides — go deeper</h2><p>Getting started covers the mechanics. The guides cover the judgment.</p><ul><li><a href="#/setup">Setup</a> — the full setup: Tailwind v3, copy-paste path, troubleshooting.</li><li><a href="#/first-screen">First screen</a> — one finished settings screen, end to end: Card + Input + Select + Switch + Button + Toast.</li><li><a href="#/build-a-theme">Build a theme</a> — derive a palette, wire dark mode, and turn a token file into a second theme.</li><li><a href="#/layout">Layout</a> — no layout primitives on purpose: native HTML + the spacing scale.</li><li><a href="#/customizing">Customizing</a> — tokens first, compose second, fork third. Never break the invariants.</li></ul><p>Also in these docs: <a href="#/theming">Theming</a>, <a href="#/tokens">Tokens</a>, <a href="#/accessibility">Accessibility</a>, <a href="#/patterns">Patterns</a>, <a href="#/changelog">Changelog</a>, <a href="#/migration">Migration</a>.</p>';
}

function renderTheming() {
  return '<p class="eyebrow">Docs</p><h1>Theming</h1><p class="lede">Topanga is theme #1. Themes swap tokens, not components. A new theme is a new token file — same contracts, same keyboard, same a11y rules.</p>'
    + "<h2>How it works</h2><ol><li>Copy <code>src/tokens.css</code> + <code>src/tokens.json</code>.</li><li>Change the color values. Keep the token names.</li><li>Keep Danger at WCAG AA 4.5:1 for normal text. Keep Focus distinct from Danger.</li><li>Keep the same type, spacing, radius, motion, and breakpoints unless the theme has a reason to change them.</li></ol>"
    + "<h2>Rules</h2><ul><li>Never use Canyon Rust for small error text — Danger is the semantic error token.</li><li>Never use color alone to convey state.</li><li>Dark mode is not an afterthought: every snippet must be dark-mode-complete.</li><li><code>data-theme</code> works on any container, not just <code>&lt;html&gt;</code> — a dark card on a light page gets the dark tokens. The token file scopes both themes to <code>[data-theme]</code>.</li></ul>";
}

function renderAccessibility() {
  const rows = COMPONENTS.map((c) => {
    const kb = c.keyboard.map((k) => esc(k[0]) + ": " + esc(k[1])).join(" · ");
    const inv = c.invariants.slice(0, 2).join(" ");
    return "<tr><td><a href=\"#/components/" + c.id + "\">" + esc(c.name) + "</a></td><td>" + kb + "</td><td>" + esc(inv) + "</td></tr>";
  }).join("");
  const pairs = [
    ["light", "Text on paper", "text", "bg", "#1C1917 on #F6F4F1", "15.93:1"], ["light", "Text on surface", "text", "surface", "#1C1917 on #FCFAF7", "16.79:1"],
    ["light", "Muted on paper", "muted", "bg", "#706963 on #F6F4F1", "4.92:1"], ["light", "Danger on paper", "danger", "bg", "#A83E22 on #F6F4F1", "5.66:1"],
    ["light", "Success on paper", "success", "bg", "#2F6B3A on #F6F4F1", "5.82:1"], ["light", "Warning on paper", "warning", "bg", "#7A5A12 on #F6F4F1", "5.80:1"],
    ["light", "Sage on paper", "accent-alt", "bg", "#5E6B5A on #F6F4F1", "5.13:1"], ["light", "Ink on Warm Ochre", "on-accent", "accent", "#1C1917 on #C47D3B", "5.28:1"],
    ["light", "Paper on Danger", "bg", "danger", "#F6F4F1 on #A83E22", "5.66:1"],
    ["dark", "Text on bg", "text", "bg", "#F5F3EF on #121110", "17.02:1"], ["dark", "Text on surface", "text", "surface", "#F5F3EF on #1C1917", "15.78:1"],
    ["dark", "Muted on bg", "muted", "bg", "#9E968F on #121110", "6.48:1"], ["dark", "Danger on bg", "danger", "bg", "#E07A52 on #121110", "6.35:1"],
    ["dark", "Success on bg", "success", "bg", "#6BA368 on #121110", "6.34:1"], ["dark", "Warning on bg", "warning", "bg", "#D9A441 on #121110", "8.39:1"],
    ["dark", "Sage on bg", "accent-alt", "bg", "#8B9B87 on #121110", "6.41:1"], ["dark", "Ink on Warm Ochre", "on-accent", "accent", "#1C1917 on #DB914E", "6.81:1"],
  ];
  const pairCards = pairs.map((p) => '<div class="pair-card" data-theme="' + p[0] + '"><div class="pair-sample" style="color:var(--color-' + p[2] + ');background:var(--color-' + p[3] + ')"><span class="pair-aa">Aa</span><p>Pack my box with five dozen liquor jugs.</p></div><p class="pair-caption"><strong>' + (p[0] === "light" ? "Light" : "Dark") + " · " + esc(p[1]) + "</strong><br><code>" + esc(p[4]) + "</code> · " + p[5] + "</p></div>").join("");
  return '<p class="eyebrow">Docs</p><h1>Accessibility</h1><p class="lede">Accessibility is load-bearing in Oeste, not a badge. Every component ships its keyboard table, invariants, and a11y contract.</p>'
    + "<h2>Non-negotiables</h2><ul><li>Visible focus: 2px ink/paper outline, never removed.</li><li>Touch targets: min 44px.</li><li>Never color alone: every state has text, icon, or position.</li><li>Labels are persistent and visible, never placeholder-only.</li><li>Errors use text + role, never color alone.</li><li>Reduced motion: no animation.</li><li>Contrast: normal text 4.5:1, large text 3:1. Every pair below is verified by calculation (see <code>scripts/verify.mjs</code>).</li></ul>"
    + "<h2>Per-component keyboard + ARIA checklist</h2><p>One row per component. Full tables live on each component page (Human lens).</p>"
    + '<div style="overflow-x:auto"><table><thead><tr><th>Component</th><th>Keyboard</th><th>Key ARIA / invariants</th></tr></thead><tbody>' + rows + "</tbody></table></div>"
    + "<h2>Live contrast pairs</h2><p>Every pair renders with the real tokens in its own theme — the Light cards are <code>data-theme=\"light\"</code> containers, the Dark cards are <code>data-theme=\"dark\"</code>. All text pairs meet WCAG AA 4.5:1 for normal text. Canyon Rust (#B85B35 light) is decorative only and is not listed here as a text color — it does not meet 4.5:1 for small text on paper.</p>"
    + '<div class="pair-grid">' + pairCards + "</div>"
    + "<h2>Reduced motion</h2><p>Motion is 180ms in / 140ms out, <code>cubic-bezier(.16,1,.3,1)</code>. With <code>prefers-reduced-motion: reduce</code>, Oeste ships no animation: no transitions, no reveals, no smooth scrolling. Content never depends on motion to be understood.</p>"
    + "<h2>Focus</h2><p>Focus is always visible: 2px ink/paper outline with 2px offset. It is never removed, never replaced by color alone, and never left on a hidden element. Dialogs trap focus and restore it to the trigger on close. Tabs use roving tabindex so only the active tab is in the tab order.</p>"
    + "<h2>Touch targets</h2><p>Every interactive control is at least 44px on its smallest side: buttons, lens pills, tabs, switches, checkboxes, theme toggle, menu button, and Dismiss buttons. Small text links inside body copy are the only exception, and they are never the sole way to act.</p>"
    + "<h2>Search</h2><p>The header search is faceted instant search: one box searches components, tokens, and docs pages. Results appear as you type, grouped under Components / Tokens / Docs, with facet filters (All / Components / Tokens / Docs) to narrow them. Keys: <code>Cmd+K</code> / <code>Ctrl+K</code> focuses search from anywhere on the site, <code>ArrowDown</code> / <code>ArrowUp</code> move through results, <code>Enter</code> opens the focused result, <code>Escape</code> closes the results. Results are real buttons with visible focus; the result count is announced via <code>role=status</code>.</p>"
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
    + '<h3>Vibe</h3><p>Copy each component from its Vibe lens, compose in one form, wire Save to a Toast. CLI: <code>npx shadcn@latest add https://oeste.hiddeninwest.com/r/input.json</code>. The React snippets work today.</p>'
    + '<h2>Project edit flow</h2><p>Card + Button + Dialog with Input + Toast. Open, rename, confirm — focus in, Escape out, focus back.</p>'
    + '<div class="demo"><section aria-labelledby="patCardTitle" style="border:1px solid var(--color-border);border-radius:12px;padding:24px;background:var(--color-bg)"><h3 id="patCardTitle" style="margin:0">Field notes</h3><p style="margin:12px 0 0">Room to think.</p><button type="button" class="btn btn-primary" style="margin-top:16px" data-pattern-open>Edit project</button></section>'
    + '<dialog class="site-dialog" id="patternDialog"><form id="patternEditForm"><h3 style="margin-top:0">Edit project</h3><p class="muted">Rename this project.</p><div class="field" style="margin-top:16px"><label for="patEditInput">Project name</label><input id="patEditInput" type="text" value="Field notes"></div><div class="demo-row" style="margin-top:20px"><button type="submit" class="btn btn-primary">Save</button><button type="button" class="btn btn-secondary" data-pattern-close>Cancel</button></div></form></dialog></div>'
    + '<h3>Human notes</h3><ul><li>The Card holds the current state; the Dialog holds the edit.</li><li>Escape closes the Dialog and returns focus to Edit project.</li><li>Save closes the Dialog and confirms with a Toast.</li></ul>'
    + '<h3>Agent prompt</h3><pre>Compose an Oeste Project edit flow from Card + Button + Dialog + Input + Toast. Dialog: native &lt;dialog&gt;, Escape closes, focus traps inside, focus returns to trigger. Save closes and confirms with a manual-dismiss Toast. Never invent props beyond the component contracts.</pre>'
    + '<h3>Vibe</h3><p>Copy Dialog + Input from their Vibe lenses, wrap the edit in the Dialog, confirm with Toast. The React snippets work today.</p>'
    + '<h2>Form</h2><p>Label + Input + Select + Checkbox + RadioGroup + Button + error summary. One form, one submit, errors announced in one place.</p>'
    + '<div class="demo"><form id="patternForm" novalidate><div class="form-error-summary" id="patternFormErrors" role="alert" aria-live="assertive" hidden></div>'
    + '<div class="field" style="max-width:480px"><label for="formName">Project name <span aria-hidden="true">*</span> <span class="muted">(required)</span></label><input id="formName" type="text" aria-required="true" aria-describedby="formNameError"><p class="error" id="formNameError" role="status"></p></div>'
    + '<div class="field" style="max-width:320px;margin-top:16px"><label for="formTheme">Theme</label><select id="formTheme"><option>Topanga</option><option>Paper</option></select></div>'
    + '<label style="display:flex;gap:12px;align-items:flex-start;margin-top:16px"><input type="checkbox" id="formNotify" style="margin-top:4px;width:20px;height:20px;accent-color:var(--color-accent)"> <span><strong>Email me updates</strong><br><span class="muted">One email per change.</span></span></label>'
    + '<fieldset style="border:0;margin:16px 0 0;padding:0"><legend style="font-weight:600;margin-bottom:8px">Size</legend>'
    + '<label class="radio-row"><input type="radio" name="formSize" value="sm"> Small</label>'
    + '<label class="radio-row"><input type="radio" name="formSize" value="md" checked> Medium</label>'
    + '<label class="radio-row"><input type="radio" name="formSize" value="lg"> Large</label></fieldset>'
    + '<button type="submit" class="btn btn-primary" style="margin-top:20px">Create project</button></form></div>'
    + '<h3>Human notes</h3><ul><li>Every field has a persistent visible label. No placeholder-only fields.</li><li>Errors are announced twice, in sync: once in the error summary (role=alert), once at the field (role=status). The summary links to the field.</li><li>Submit validates, then confirms with a Toast the user dismisses.</li></ul>'
    + '<h3>Agent prompt</h3><pre>Compose an Oeste Form from Label + Input + Select + Checkbox + RadioGroup + Button. Persistent labels. Required fields marked with a visible indicator + text. On submit, validate and show one error summary (role=alert, aria-live=assertive) that links to each field error, plus described errors at the fields. Success confirms with a manual-dismiss Toast. Never invent props beyond the component contracts.</pre>'
    + '<h3>Vibe</h3><p>Copy Label + Input + Select + Checkbox + RadioGroup + Button from their Vibe lenses, compose in one form, wire submit to the error summary + Toast. The React snippets work today.</p>';
}

function renderChangelog() {
  return '<p class="eyebrow">Docs</p><h1>Changelog</h1><p class="lede">What changed, when, and what it means for you. No rewritten history — entries land here when they ship.</p>'
    + '<h2>v0.4.4 — 2026-10-14</h2><ul><li><strong>Registry fix:</strong> the 15 registry files that use <code>React.useId</code> / <code>useState</code> / <code>useRef</code> / <code>useEffect</code> / <code>Children</code> / <code>cloneElement</code> now include <code>import React from "react";</code> — previously they assumed React in scope, which breaks in a standard Vite + React project (automatic JSX runtime). <code>scripts/build_registry.py</code> inserts the import automatically and fails the build if <code>React.*</code> is ever used without it. Files that don’t use <code>React.*</code> are unchanged.</li><li><strong>Search hint:</strong> the header search box now shows a visible <code>⌘K</code> hint (was hover-only via tooltip).</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.3 — 2026-10-14</h2><ul><li><strong>Copy audit:</strong> removed leaked-rules copy from the home page, README, <code>llms.txt</code>, and the sidebar footer; home eyebrow no longer claims <code>oeste.design</code>; Tokens type section corrected (stepped display scale, no “telemetry”); Huntington / Mesa framed as future themes; error docs corrected to “text + role”; Button <code>icon</code> prop documented; unexplained name-drops removed; Avatar demo uses neutral example names.</li><li><strong>Show-more:</strong> component pages gain a Variants section (Button 4 variants × 3 sizes + states; Input / Checkbox / Switch / Toggle / Select states; Progress + Slider values). Accessibility contrast pairs now render live, in both themes, with real tokens. Tokens swatches follow the current theme, and the Tokens page gains a Tokens-in-use section (buttons, text, alerts, badges, surface, progress, focus).</li><li><strong>Nested themes:</strong> <code>data-theme</code> now scopes to any container — a dark card on a light page gets the dark tokens. <code>src/tokens.css</code> + <code>scripts/verify.mjs</code> updated.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.2 — 2026-10-14</h2><ul><li><strong>Setup page (new):</strong> the full setup — tokens, Tailwind v4 + v3, shadcn or copy-paste, troubleshooting.</li><li><strong>Getting started rewritten:</strong> the minimal complete setup — token download, Tailwind dark variant, shadcn install, real import.</li><li><strong>Every snippet + CLI is now real:</strong> Vibe snippets import from <code>@/components/ui/…</code> (where shadcn puts the files); CLI fields are real shadcn registry commands; the home install bar is the real Button command. <code>@oeste/ui</code> is not a published package — the docs no longer imply it is.</li><li><strong>Display headings use the wordmark treatment:</strong> Manrope 700, tracking -0.06em (was 500 / -0.04em).</li><li><strong>Menu:</strong> on mobile/tablet the open menu pops up in the current viewport instead of at the top of the document.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.1 — 2026-10-14</h2><ul><li><strong>Guides:</strong> four new docs pages, linked from Getting started as a hub — <a href="#/first-screen">First screen</a> (one finished settings screen, end to end), <a href="#/build-a-theme">Build a theme</a> (palette derivation, dark-mode wiring, what makes a second theme), <a href="#/layout">Layout</a> (native HTML + spacing scale, no layout primitives), <a href="#/customizing">Customizing</a> (tokens first, compose second, fork third). All four are in the sidebar and the search index.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.0 — 2026-10-14</h2><ul><li><strong>Registry (shadcn-compatible):</strong> every component ships as a registry item at <code>https://oeste.hiddeninwest.com/r/&lt;id&gt;.json</code> (index: <code>r/registry.json</code>). Install with <code>npx shadcn@latest add https://oeste.hiddeninwest.com/r/button.json</code>. Files are self-contained React + Tailwind, extracted from <code>src/index.js</code> by <code>scripts/build_registry.py</code> — regenerate, never hand-edit. Registry files need <code>src/tokens.css</code> (Topanga tokens) loaded once. The registry is served from oeste.hiddeninwest.com. Machine manifest: <code>components.json</code> at the repo root.</li><li><strong>Advanced search:</strong> header search is now faceted instant search: one box searches components + tokens + docs, results grouped with facet filters (All / Components / Tokens / Docs), instant as you type. Keys: Cmd+K / Ctrl+K focuses search, ArrowUp / Down moves through results, Enter opens, Escape closes.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.3.4 — 2026-10-14</h2><ul><li><strong>Header cluster tightened:</strong> the gap between the theme toggle and the Menu button is closed up. The Ghost component itself is untouched.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.3.3 — 2026-10-14</h2><ul><li><strong>Header Menu uses the Ghost Button component:</strong> the Menu button is now a real <code>.btn.btn-ghost</code> — no one-off menu styles. The docs site also gains real <code>.btn-ghost</code> and <code>.btn-danger</code> rules matching the library variants (ghost: transparent + ink/paper 5% hover; danger: Danger bg + paper text, dark text #121110). The Button demo’s fake Ghost (secondary + inline <code>border:0</code>) and inline-styled Danger now use the real components.</li><li><strong>Theme toggle goes borderless:</strong> the icon-only theme control drops its border and fill (ghost-equivalent for an icon button). The 44px touch targets, hover background, and 2px focus outline are unchanged.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.3.2 — 2026-10-14</h2><ul><li><strong>Wordmark:</strong> the header wordmark is now all lowercase — <strong>oeste</strong> (was “Oeste”). Same type treatment: Manrope 700, 24px, -0.06em.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.3.1 — 2026-10-14</h2><ul><li><strong>Typography correction (the v0.3.0 display treatment was wrong):</strong> the real treatment from the reference preview build is Manrope <strong>500</strong>, tracking <strong>-0.04em</strong>, leading <strong>1.1</strong> — not 800 / -0.025em / 1.05. Headings (h2/h3) are also 500, tracking -0.025em. Wordmark is 700, 24px, -0.06em. Body leading is 1.55, hero copy 1.65. The unused Manrope 800 weight is no longer loaded.</li><li><strong>Hero heading locked to 2 lines:</strong> display size now steps 40px on phones, 48px at ≥480px, 72px at ≥720px, so “One system. / Three perspectives.” never wraps to a third line.</li><li><strong>Breaking:</strong> none. Token values only.</li></ul>'
    + '<h2>v0.3.0 — 2026-10-14</h2><ul><li><strong>Menu auto-close:</strong> tapping any sidebar link navigates and closes the menu. Escape also closes the menu when it is open.</li><li><strong>Syntax highlighting:</strong> every code block is now colorized (keywords, strings, numbers, comments, JSON keys, JSX tags/props, CLI flags) in light and dark, with code-text colors that pass WCAG AA 4.5:1 on the code background.</li><li><strong>Display typography (superseded by v0.3.1):</strong> display type was set to Manrope 800, 48px mobile → 72px desktop (clamp), line-height 1.05, letter-spacing -0.025em. Headings were weight 700. This was corrected in v0.3.1 to 500 / -0.04em / 1.1 (the reference build treatment).</li><li><strong>New primitives (14):</strong> Avatar, Separator, Slider, Tooltip, Popover, Dropdown Menu, Toggle, Collapsible, Skeleton, Label, Breadcrumb, Pagination, Table, Empty State — React + Tailwind in <code>src/index.js</code>, full docs pages with demos. Total: 29 components.</li><li><strong>Form pattern:</strong> a third Patterns entry — Label + Input + Select + Checkbox + RadioGroup + Button + error summary (role=alert) + Toast confirm.</li><li><strong>Breaking:</strong> none for consumers. Additive-only release.</li></ul>'
    + '<h2>v0.2.0 — 2026-10-14</h2><ul><li><strong>New primitives:</strong> Alert, Accordion, RadioGroup, Progress — React + Tailwind in <code>src/index.js</code>, full docs pages with demos.</li><li><strong>New docs pages:</strong> Textarea and Select (implementations existed; docs did not). Total: 15 components.</li><li><strong>New routes:</strong> Patterns (Settings form + Project edit flow), Changelog, Migration.</li><li><strong>Accessibility page:</strong> per-component keyboard + ARIA checklist for all 15 components, full contrast table, reduced-motion / focus / touch-target / live-region rules.</li><li><strong>Home:</strong> fuller Oeste / Topanga brand story.</li><li><strong>Header + lens pills:</strong> on mobile/tablet, Menu is far right with the theme toggle as an icon to its left (desktop shows the sidebar, so no Menu button is needed); lens pills are pill-only (no underline), text centered.</li><li><strong>Breaking:</strong> none for consumers. Docs-only + additive release.</li></ul>'
    + '<h2>v0.1.0 — 2026-10-14</h2><ul><li><strong>Foundation:</strong> single token source of truth (<code>src/tokens.css</code> + <code>src/tokens.json</code> + <code>DESIGN_TOKENS</code>), verified by <code>scripts/verify.mjs</code>.</li><li><strong>Canonical tokens:</strong> Warm Ochre accent #C47D3B, Canyon Rust #B85B35 decorative-only, Danger #A83E22 / #E07A52 at 5.66:1 / 6.35:1, Focus = ink/paper.</li><li><strong>9 primitives:</strong> Button, Input, Dialog, Card, Tabs, Toast, Badge, Checkbox, Switch — plus Textarea + Select implementations.</li><li><strong>Docs site:</strong> static, hash routes, Human / Agent / Vibe lenses, lens in URL, Getting started / Theming / Tokens / Accessibility.</li><li><strong>CLI:</strong> reference commands only. No npm package — the React snippets work today.</li></ul>';
}

function renderMigration() {
  return '<p class="eyebrow">Docs</p><h1>Migration</h1><p class="lede">Adopting Oeste, from scratch or from the earlier 6-component preview.</p>'
    + '<h2>From scratch</h2><ol><li>Import <code>src/tokens.css</code> once, or copy <code>src/tokens.json</code>.</li><li>Copy the components you need from <code>src/index.js</code> (React 18+, Tailwind, JSX transform).</li><li>Read the Agent prompt + JSON contract for each component before generating code with an agent.</li></ol>'
    + '<h2>From the 6-component preview</h2><p>The preview had Button, Input, Dialog, Card, Tabs, Toast. Oeste v0.1.0 kept all six and added Badge, Checkbox, Switch (plus Textarea + Select implementations). v0.2.0 adds Alert, Accordion, RadioGroup, Progress, and docs for Textarea + Select. v0.3.0 adds 14 more primitives (Avatar, Separator, Slider, Tooltip, Popover, Dropdown Menu, Toggle, Collapsible, Skeleton, Label, Breadcrumb, Pagination, Table, Empty State) plus a Form pattern.</p>'
    + '<h2>v0.3.1 notes (token values only, no breaking changes)</h2><ul><li><strong>Display type corrected:</strong> Manrope 500, tracking -0.04em, leading 1.1; sizes 40px phones / 48px ≥480px / 72px ≥720px. The v0.3.0 values (800 / -0.025em / 1.05) were wrong — update any hardcoded copies to the v0.3.1 tokens.</li></ul>'
    + '<h2>v0.3.0 notes (additive only, no breaking changes)</h2><ul><li><strong>Menu behavior:</strong> tapping a sidebar link now closes the menu automatically. If you copied the old menu code, add the close-on-navigate + close-on-Escape behavior.</li><li><strong>Display type (superseded by v0.3.1):</strong> v0.3.0 set display headings to Manrope 800, 48px → 72px, line-height 1.05, letter-spacing -0.025em. Use the v0.3.1 tokens instead.</li><li><strong>Code blocks:</strong> syntax highlighting is docs-site-only. The React snippets are unchanged.</li></ul>'
    + '<h2>Breaking notes</h2><ul><li><strong>Token renames:</strong> one canonical name per color. <code>clay</code> is gone — use <code>accent</code> (Warm Ochre #C47D3B) for actions, <code>rust</code> (Canyon Rust #B85B35) for large decorative accents only, <code>danger</code> (#A83E22 / #E07A52) for errors. If your preview code used #C25E38 or #E08244 for errors, switch to Danger.</li><li><strong>Danger darkened:</strong> light Danger is now #A83E22 (was #C25E38) to meet 4.5:1 on paper. Update any hardcoded error colors.</li><li><strong>Focus is not danger:</strong> focus outline is ink/paper (2px), never the Danger color.</li><li><strong>Lens pills:</strong> pill-only, no underline. If you copied the old pill + underline style, drop the underline.</li><li><strong>Header:</strong> on mobile/tablet, Menu is far right with the theme toggle as an icon to its left (desktop shows the sidebar, so no Menu button). If you copied the old header, reorder to wordmark / Topanga / search / theme icon / Menu.</li><li><strong>CLI:</strong> install via shadcn — see <a href="#/getting-started">Getting started</a>. Do not treat <code>npx @oeste/ui</code> as a published package.</li></ul>'
    + '<h2>What did not change</h2><p>Component contracts (<code>oeste.component.v1</code>), keyboard behaviors, lens URLs (<code>#/components/&lt;id&gt;?lens=</code>), and the token file layout are unchanged from v0.1.0.</p>';
}

function renderFirstScreen() {
  return '<p class="eyebrow">Docs · Guide</p><h1>First screen</h1><p class="lede">One screen, end to end. Tokens in, a working settings screen out — Card, Input, Select, Switch, Button, Toast, composed the way Oeste expects.</p>'
    + '<h2>What you are building</h2><p>A Project settings screen: a name field, a theme picker, an updates switch, one Save button, and a Toast that confirms. One file. Every prop below is a real prop from the component contracts — nothing invented.</p>'
    + '<h2>The code</h2><pre>import { useState } from \"react\";\nimport { Button } from \"@/components/ui/button\";\nimport { Card } from \"@/components/ui/card\";\nimport { Input } from \"@/components/ui/input\";\nimport { Select } from \"@/components/ui/select\";\nimport { Switch } from \"@/components/ui/switch\";\nimport { Toast } from \"@/components/ui/toast\";\n\nexport function ProjectSettings() {\n  const [name, setName] = useState(\"Field notes\");\n  const [theme, setTheme] = useState(\"topanga\");\n  const [updates, setUpdates] = useState(true);\n  const [saved, setSaved] = useState(false);\n  const [error, setError] = useState(\"\");\n\n  function save() {\n    if (name.trim().length < 3) {\n      setError(\"Use at least 3 characters.\");\n      return;\n    }\n    setError(\"\");\n    setSaved(true);\n  }\n\n  return (\n    &lt;&gt;\n      &lt;Card title=\"Project settings\" headingLevel={2}&gt;\n        &lt;Input label=\"Project name\" value={name} onChange={setName} error={error} hint=\"At least 3 characters.\" /&gt;\n        &lt;Select label=\"Theme\" value={theme} onChange={setTheme} options={[\n          { value: \"topanga\", label: \"Topanga\" },\n          { value: \"paper\", label: \"Paper\" },\n        ]} /&gt;\n        &lt;Switch label=\"Email me updates\" checked={updates} onChange={setUpdates} description=\"One email per change.\" /&gt;\n        &lt;Button variant=\"primary\" onClick={save}&gt;Save changes&lt;/Button&gt;\n      &lt;/Card&gt;\n      &lt;Toast message=\"Settings saved.\" open={saved} onDismiss={() => setSaved(false)} /&gt;\n    &lt;/&gt;\n  );\n}</pre>'
    + '<h2>Why it is shaped this way</h2><ul><li><strong>One Card, one section.</strong> The Card holds the form; <code>headingLevel={2}</code> keeps the page outline honest.</li><li><strong>Labels stay put.</strong> Every field has a persistent visible label. Errors are text + role — Input sets <code>aria-invalid</code> and describes the error for you.</li><li><strong>State lives in the screen, not the components.</strong> Every component here is controlled: value in, change out. The screen owns the save logic and the error.</li><li><strong>Confirmation is a Toast the user dismisses.</strong> Nothing auto-vanishes. Save → Toast → user closes it.</li></ul>'
    + '<h2>Make it yours</h2><p>Change the copy, add fields from the same components, keep the contract shapes. To change how it <em>looks</em>, swap the token file — see <a href="#/build-a-theme">Build a theme</a>. To change how it <em>lays out</em>, see <a href="#/layout">Layout</a>. Import <code>src/tokens.css</code> once at your app root first (see <a href="#/getting-started">Getting started</a>).</p>';
}

function renderBuildATheme() {
  return '<p class="eyebrow">Docs · Guide</p><h1>Build a theme</h1><p class="lede">A theme is a token file. Same names, same components, new values. Topanga is theme #1 — future themes (Huntington, Mesa) follow the same pattern.</p>'
    + '<h2>What a theme is</h2><p><code>src/tokens.css</code> + <code>src/tokens.json</code>, with the same token names as Topanga. Components never change. A theme becomes a library when it ships its own token file plus its own docs and changelog.</p>'
    + '<h2>Pick in this order</h2><ol><li><strong>Paper + ink.</strong> Background and text first. They must pass 4.5:1 for normal text.</li><li><strong>One accent + one accentAlt.</strong> Accent is for primary actions. AccentAlt is for secondary emphasis. One of each, not five.</li><li><strong>Semantic tokens: Danger, Success, Warning.</strong> Each must pass 4.5:1 on the background — and read as distinct from each other and from Accent.</li><li><strong>One decorative token.</strong> Topanga has Canyon Rust. It may fail text contrast because it is never text: large accents only, never small error text.</li><li><strong>Dark mode is a second full set, not an inversion.</strong> Lighten Accent and Danger so they hold contrast on the dark background. Topanga dark: accent <code>#DB914E</code>, danger <code>#E07A52</code>, background <code>#121110</code>.</li></ol>'
    + '<h2>Dark mode wiring</h2><p>Set <code>data-theme</code> on <code>&lt;html&gt;</code> before first paint, so there is no flash. A tiny script in <code>&lt;head&gt;</code> reads the saved theme, or the system preference on first visit:</p><pre>&lt;script&gt;\n  const saved = localStorage.getItem(\"oeste-theme\");\n  const theme = saved || (matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"dark\" : \"light\");\n  document.documentElement.dataset.theme = theme;\n&lt;/script&gt;</pre><p>The toggle is a plain button that flips the attribute, saves the choice, and says what it did:</p><pre>function ThemeToggle() {\n  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || \"light\");\n  function toggle() {\n    const next = theme === \"light\" ? \"dark\" : \"light\";\n    document.documentElement.dataset.theme = next;\n    localStorage.setItem(\"oeste-theme\", next);\n    setTheme(next);\n  }\n  return (\n    &lt;button type=\"button\" onClick={toggle} aria-pressed={theme === \"dark\"}\n      aria-label={\"Theme: \" + theme + \". Switch to \" + (theme === \"light\" ? \"dark\" : \"light\") + \".\"}&gt;\n      {theme === \"light\" ? \"Dark\" : \"Light\"}\n    &lt;/button&gt;\n  );\n}</pre><p>Every snippet must be dark-mode-complete: test both themes, not just the one you like.</p>'
    + '<h2>What makes a good second theme</h2><ul><li><strong>Keep the token names and the contracts.</strong> Agents, the registry, and the docs keep working.</li><li><strong>Change values, not structure.</strong> Same type, spacing, radius, motion, and breakpoints — unless the theme has a reason to change them.</li><li><strong>Keep Danger at AA and Focus distinct from Danger.</strong> Focus is ink/paper, never the Danger color.</li><li><strong>Keep the type discipline.</strong> One family for display + body, one mono for code. Topanga: Manrope + JetBrains Mono.</li><li><strong>Name it for a place, not a feature.</strong> Topanga, Huntington, Mesa — a theme is a world, not a setting.</li></ul>';
}

function renderLayout() {
  return '<p class="eyebrow">Docs · Guide</p><h1>Layout</h1><p class="lede">Oeste has no layout primitives on purpose. Pages are native HTML plus the spacing scale — one column, one gap scale, hairlines for structure.</p>'
    + '<h2>The skeleton</h2><p><code>&lt;header&gt;</code> / <code>&lt;main&gt;</code> / <code>&lt;footer&gt;</code>. Main sits in a container. Two container widths, from the tokens: <strong>narrow 720px</strong> for forms and reading, <strong>wide 1160px</strong> for lists and dashboards.</p><pre>&lt;header&gt;…&lt;/header&gt;\n&lt;main&gt;\n  &lt;div&gt;{/* container: max-width 720px or 1160px, centered */}\n    …sections…\n  &lt;/div&gt;\n&lt;/main&gt;\n&lt;footer&gt;…&lt;/footer&gt;</pre>'
    + '<h2>One column first</h2><p>Stack on mobile (0–640px). Widen at tablet (641–1024px). Full width at desktop (1025px+). Add a second column only when the content earns it — a list beside a detail pane, not two equal halves of one form.</p>'
    + '<h2>Gaps from the scale</h2><p>Use the space scale and nothing else: 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 px. Start here: <strong>16px between fields</strong> in a form, <strong>24px between sections</strong>, <strong>32–48px between page sections</strong>. Fields read best at about <strong>480px max</strong>, selects at about <strong>320px</strong> — the Patterns demos are built that way.</p>'
    + '<h2>Cards and lists</h2><p>Cards are peers in a list: one column on mobile, a grid only when the cards are equal peers. Never stretch a form into a grid just to fill space.</p>'
    + '<h2>Header cluster</h2><p>Wordmark left, actions right, every control at least 44px on its smallest side. This site does it as wordmark / search / theme toggle / Menu on phones, with the sidebar taking over on desktop.</p>'
    + '<h2>Hairlines</h2><p>Topanga rule: hairlines are for structure and separation, not every control. Ghost controls can be borderless — visible hover state plus the 2px focus outline does the work.</p>';
}

function renderCustomizing() {
  return '<p class="eyebrow">Docs · Guide</p><h1>Customizing</h1><p class="lede">Oeste is copy-paste, so you own the code. Customize in this order: tokens, compose, fork — and never break the invariants.</p>'
    + '<h2>1 · Tokens first</h2><p>Most customization is a token change. If what you want is color, type, spacing, radius, or motion, it belongs in the token file — see <a href="#/build-a-theme">Build a theme</a>.</p>'
    + '<h2>2 · Compose</h2><p>Combine primitives before forking one. Card + Button + Dialog is an edit flow. Card + Input + Toast is a settings screen. The <a href="#/patterns">Patterns</a> page has the flows.</p>'
    + '<h2>3 · Fork your copy</h2><p>The snippet is yours. Change it in your codebase: add the variant your product needs, rename for your domain. Keep the contract shape — the same prop names and types — so agents can still read it. And when you fork, update that component\'s Agent prompt and contract, or agents will hallucinate the old props.</p>'
    + '<h2>What never changes</h2><ul><li>Focus: 2px ink/paper outline, never removed.</li><li>Touch targets: minimum 44px.</li><li>Contrast: normal text 4.5:1, large text 3:1.</li><li>Labels persistent and visible, never placeholder-only.</li><li>Errors: text + role, never color alone. Danger for errors, never Canyon Rust.</li><li>Reduced motion: no animation.</li></ul>'
    + '<h2>What not to do</h2><ul><li>Do not invent a prop and expect agents or the registry to know it.</li><li>Do not shrink touch targets for density.</li><li>Do not shadow tokens per-component. Change the token file.</li><li>Do not use color alone to carry state.</li></ul>';
}

function renderSetup() {
  return '<p class="eyebrow">Docs · Guide</p><h1>Setup</h1><p class="lede">The full setup. Getting started gives you the minimal path — this page has everything else: Tailwind v3, the copy-paste path, and what to do when it breaks.</p>'
    + '<p>Requirements: React 18+, Tailwind, JSX transform.</p>'
    + '<h2>1 · Tokens</h2><p>Download <a href="https://raw.githubusercontent.com/eric2busy/Oeste/main/src/tokens.css">tokens.css</a> (and <a href="https://raw.githubusercontent.com/eric2busy/Oeste/main/src/tokens.json">tokens.json</a> if you want the machine-readable copy). Save it as <code>src/tokens.css</code> and import it first at your app entry:</p><pre>import "./tokens.css";</pre><p>shadcn does <em>not</em> install the tokens — this step is always manual.</p>'
    + '<h2>2 · Tailwind</h2><p>Oeste components use <code>dark:</code> classes. <code>dark:</code> follows <code>data-theme</code> only when you point it there.</p><p><strong>Tailwind v4</strong> — in your CSS, after the Tailwind import:</p><pre>@custom-variant dark (&amp;:where([data-theme="dark"], [data-theme="dark"] *));</pre><p><strong>Tailwind v3</strong> — in <code>tailwind.config.js</code>, then restart the dev server:</p><pre>export default {\n  darkMode: ["class", \'[data-theme="dark"]\'],\n  // …the rest of your config\n};</pre><p>Which version? Check <code>tailwindcss</code> in your <code>package.json</code>: <code>^4</code> is v4, <code>^3</code> is v3.</p>'
    + '<h2>3 · Install</h2><p><strong>shadcn (recommended).</strong> One command per component; shadcn writes the file into your project:</p><pre>npx shadcn@latest add https://oeste.hiddeninwest.com/r/button.json</pre><p>Import from where shadcn put the file. The docs show the shadcn default:</p><pre>import { Button } from "@/components/ui/button";</pre><p><strong>Copy-paste.</strong> Open a component page, switch to the Vibe lens, copy the code into your own file, and import from where you put it. You own the file — change it like any other code in your project.</p>'
    + '<h2>4 · Dark mode</h2><p>Dark mode needs two things: the <code>data-theme</code> toggle (see <a href="#/build-a-theme">Build a theme</a>) <em>and</em> the Tailwind variant in §2. Either one alone does nothing visible.</p>'
    + '<h2>5 · Troubleshooting</h2><ul><li><strong>Dark mode does nothing</strong> — the §2 variant line is missing, or in the wrong file.</li><li><strong>“Cannot find module ‘@oeste/ui’”</strong> — <code>@oeste/ui</code> is not a published package. Import from the file path where shadcn put the component, or where you copied it.</li><li><strong>Styles look unstyled, or colors are wrong</strong> — <code>tokens.css</code> is not imported, or something overrides it. Check the import is in your app entry.</li><li><strong>shadcn asks where to put the file</strong> — any components directory works. Keep the <code>@/components/ui</code> convention so the docs’ import paths match.</li><li><strong>Tailwind v3 config change has no effect</strong> — restart the dev server.</li></ul>';
}

function render() {
  const { route, id, lens } = parseHash();
  closeMenu();
  const view = $(" #view".trim());
  document.querySelectorAll(".nav-link").forEach((a) => a.classList.remove("active"));
  if (route === "home") view.innerHTML = renderHome();
  else if (route === "components") { view.innerHTML = renderComponent(id, lens); }
  else if (route === "tokens") view.innerHTML = renderTokens();
  else if (route === "getting-started") view.innerHTML = renderGettingStarted();
  else if (route === "theming") view.innerHTML = renderTheming();
  else if (route === "accessibility") view.innerHTML = renderAccessibility();
  else if (route === "patterns") view.innerHTML = renderPatterns();
  else if (route === "first-screen") view.innerHTML = renderFirstScreen();
  else if (route === "build-a-theme") view.innerHTML = renderBuildATheme();
  else if (route === "layout") view.innerHTML = renderLayout();
  else if (route === "customizing") view.innerHTML = renderCustomizing();
  else if (route === "setup") view.innerHTML = renderSetup();
  else if (route === "changelog") view.innerHTML = renderChangelog();
  else if (route === "migration") view.innerHTML = renderMigration();
  else view.innerHTML = renderHome();
  const active = document.querySelector('.nav-link[href="#/' + route + '"]');
  if (active) active.classList.add("active");
  document.querySelectorAll("#componentNav a").forEach((a) => a.classList.toggle("active", route === "components" && a.getAttribute("href").includes(id)));
  highlightAll();
  bindDemos();
  view.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

/* Search index for docs + tokens (components come from COMPONENTS).
   Faceted instant search: one box, instant results, facet filters. */
const SEARCH_DOCS = [
  { title: "Getting started", desc: "Tokens, copy a component, agents, registry.", route: "#/getting-started", keys: "install tokens registry shadcn add" },
  { title: "Theming", desc: "Topanga is theme #1. Swap tokens, not components.", route: "#/theming", keys: "theme tokens dark mode" },
  { title: "Tokens", desc: "Canonical color, type, spacing, radius, motion tokens.", route: "#/tokens", keys: "tokens css json color type spacing" },
  { title: "Accessibility", desc: "Keyboard tables, ARIA, contrast, focus, search keys.", route: "#/accessibility", keys: "a11y keyboard aria contrast focus search" },
  { title: "Patterns", desc: "Settings form, project edit flow, validated form.", route: "#/patterns", keys: "patterns form settings validation" },
  { title: "First screen", desc: "One finished settings screen, end to end: Card, Input, Select, Switch, Button, Toast.", route: "#/first-screen", keys: "first screen settings example compose" },
  { title: "Build a theme", desc: "Derive a palette, wire dark mode, turn a token file into a second theme.", route: "#/build-a-theme", keys: "theme palette dark mode data-theme build" },
  { title: "Layout", desc: "No layout primitives: native HTML plus the spacing scale.", route: "#/layout", keys: "layout container spacing gaps grid" },
  { title: "Customizing", desc: "Tokens first, compose second, fork third. Never break the invariants.", route: "#/customizing", keys: "customize override variant fork" },
  { title: "Setup", desc: "Full setup: tokens, Tailwind v3/v4, shadcn or copy-paste, troubleshooting.", route: "#/setup", keys: "setup install tailwind dark variant troubleshooting" },
  { title: "Changelog", desc: "What changed, when, and what it means for you.", route: "#/changelog", keys: "changelog version history" },
  { title: "Migration", desc: "Adopting Oeste, from scratch or from the earlier preview.", route: "#/migration", keys: "migration upgrade preview" },
  { title: "Home", desc: "One system. Three perspectives.", route: "#/home", keys: "home overview" },
];
const SEARCH_TOKENS = [
  ["--color-bg", "Paper #F6F4F1 light / ink #121110 dark", "color", "background bg paper"],
  ["--color-surface", "Surface #FCFAF7 light / #1C1917 dark", "color", "surface card"],
  ["--color-text", "Text #1C1917 light / #F5F3EF dark", "color", "text ink"],
  ["--color-muted", "Muted #706963 light / #9E968F dark", "color", "muted secondary"],
  ["--color-border", "Hairline rgba ink 10% / rgba paper 10%", "color", "border hairline"],
  ["--color-accent", "Warm Ochre #C47D3B light / #DB914E dark", "color", "accent ochre primary"],
  ["--color-on-accent", "On accent #1C1917", "color", "on accent"],
  ["--color-accent-alt", "Sage #5E6B5A light / #8B9B87 dark", "color", "sage secondary"],
  ["--color-rust", "Canyon Rust #B85B35 light / #D98A63 dark, decorative only", "color", "rust decorative"],
  ["--color-danger", "Danger #A83E22 light / #E07A52 dark", "color", "danger error"],
  ["--color-success", "Success #2F6B3A light / #6BA368 dark", "color", "success"],
  ["--color-warning", "Warning #7A5A12 light / #D9A441 dark", "color", "warning"],
  ["--color-focus", "Focus #1C1917 light / #F5F3EF dark", "color", "focus outline"],
  ["--type-display", "Display 40px phones / 48px ≥480px / 72px ≥720px, Manrope 700", "type", "display hero type"],
  ["--type-title", "Title clamp(1.75rem, 4vw, 2.5rem)", "type", "title heading"],
  ["--type-heading", "Heading clamp(1.25rem, 2.5vw, 1.5rem)", "type", "heading"],
  ["--type-body", "Body 1rem, Manrope, leading 1.55", "type", "body text"],
  ["--type-label", "Label 0.875rem", "type", "label"],
  ["--type-caption", "Caption 0.75rem", "type", "caption"],
  ["--type-mono", "Mono 0.75rem, JetBrains Mono", "type", "mono code"],
  ["--space-xs", "Spacing 4px", "spacing", "space"],
  ["--space-sm", "Spacing 8px", "spacing", "space"],
  ["--space-md", "Spacing 12px", "spacing", "space"],
  ["--space-lg", "Spacing 16px", "spacing", "space"],
  ["--space-xl", "Spacing 24px", "spacing", "space"],
  ["--space-2xl", "Spacing 32px", "spacing", "space"],
  ["--space-3xl", "Spacing 40px", "spacing", "space"],
  ["--space-4xl", "Spacing 48px", "spacing", "space"],
  ["--space-5xl", "Spacing 64px", "spacing", "space"],
  ["--radius-sm", "Radius 4px", "radius", "radius corner"],
  ["--radius-md", "Radius 8px", "radius", "radius corner"],
  ["--radius-lg", "Radius 12px", "radius", "radius corner"],
  ["--radius-pill", "Radius 999px pill", "radius", "radius pill"],
  ["--motion-in", "Motion in 180ms", "motion", "motion animation"],
  ["--motion-out", "Motion out 140ms", "motion", "motion animation"],
  ["--motion-easing", "Easing cubic-bezier(.16,1,.3,1)", "motion", "motion easing"],
].map(([name, detail, group, keys]) => ({ name, detail, group, route: "#/tokens", keys }));

function initSearch() {
  const input = document.getElementById("siteSearch");
  const box = document.getElementById("searchResults");
  let facet = "all";
  const FACETS = [["all", "All"], ["components", "Components"], ["tokens", "Tokens"], ["docs", "Docs"]];
  function hide() { box.hidden = true; box.innerHTML = ""; input.setAttribute("aria-expanded", "false"); }
  function matches(hay, terms) { return terms.every((t) => hay.includes(t)); }
  function collect(q) {
    const terms = q.split(/\s+/).filter(Boolean);
    const out = [];
    if (facet === "all" || facet === "components") {
      COMPONENTS.forEach((c) => {
        const hay = (c.name + " " + c.tagline + " " + c.props.map((p) => p[0]).join(" ") + " " + c.invariants.join(" ")).toLowerCase();
        if (matches(hay, terms)) out.push({ group: "Components", title: c.name, sub: c.tagline, route: "#/components/" + c.id });
      });
    }
    if (facet === "all" || facet === "tokens") {
      SEARCH_TOKENS.forEach((t) => {
        const hay = (t.name + " " + t.detail + " " + t.keys).toLowerCase();
        if (matches(hay, terms)) out.push({ group: "Tokens", title: t.name, sub: t.detail, route: t.route });
      });
    }
    if (facet === "all" || facet === "docs") {
      SEARCH_DOCS.forEach((d) => {
        const hay = (d.title + " " + d.desc + " " + d.keys).toLowerCase();
        if (matches(hay, terms)) out.push({ group: "Docs", title: d.title, sub: d.desc, route: d.route });
      });
    }
    return out;
  }
  function render() {
    const q = input.value.trim().toLowerCase();
    if (!q) { hide(); return; }
    const hits = collect(q);
    const facetBtns = FACETS.map(([f, label]) => '<button type="button" class="search-facet" data-facet="' + f + '" aria-pressed="' + (f === facet) + '">' + label + "</button>").join("");
    let html = '<div class="search-facets" role="group" aria-label="Filter results">' + facetBtns + "</div>";
    html += '<p class="search-status" role="status">' + hits.length + " result" + (hits.length === 1 ? "" : "s") + ". ArrowDown to browse, Enter to open, Escape to close.</p>";
    if (!hits.length) {
      html += "<p style='margin:8px'>No matches. Try another term, or switch facet.</p>";
    } else {
      let lastGroup = "";
      hits.forEach((h) => {
        if (h.group !== lastGroup) { html += '<p class="search-group">' + h.group + "</p>"; lastGroup = h.group; }
        html += '<button type="button" role="option" class="search-result" data-goto="' + h.route + '"><strong>' + esc(h.title) + '</strong><span class="muted"> — ' + esc(h.sub) + "</span></button>";
      });
    }
    box.hidden = false;
    box.innerHTML = html;
    input.setAttribute("aria-expanded", "true");
    box.querySelectorAll("[data-facet]").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); facet = b.dataset.facet; render(); input.focus(); }));
    box.querySelectorAll("[data-goto]").forEach((b) => b.addEventListener("click", () => { facet = "all"; location.hash = b.dataset.goto; input.value = ""; hide(); }));
    box.querySelectorAll("[data-goto]").forEach((b) => b.addEventListener("keydown", (e) => {
      const btns = [...box.querySelectorAll("[data-goto]")];
      const i = btns.indexOf(b);
      if (e.key === "ArrowDown") { e.preventDefault(); btns[(i + 1) % btns.length].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); if (i === 0) input.focus(); else btns[i - 1].focus(); }
      if (e.key === "Escape") { hide(); input.focus(); }
    }));
  }
  input.addEventListener("input", render);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const first = box.querySelector("[data-goto]");
      if (first) { facet = "all"; location.hash = first.dataset.goto; input.value = ""; hide(); }
    }
    if (e.key === "ArrowDown") {
      const first = box.querySelector("[data-goto]");
      if (first) { e.preventDefault(); first.focus(); }
    }
    if (e.key === "Escape") { hide(); }
  });
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); input.focus(); input.select(); }
  });
  document.addEventListener("click", (e) => { if (!box.contains(e.target) && e.target !== input) hide(); });
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
  // Tapping any sidebar link opens its page and closes the menu.
  document.getElementById("sidebar").addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });
  // Escape closes the menu when it is open.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.getElementById("sidebar").classList.contains("open")) closeMenu();
  });
  initSearch();
  window.addEventListener("hashchange", render);
  render();
}

document.addEventListener("DOMContentLoaded", init);
