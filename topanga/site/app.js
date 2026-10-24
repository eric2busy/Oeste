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
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/button.json",
    code: "import { Button } from \"@/components/ui/button\";\n\nexport function SaveAction() {\n  return <Button variant=\"primary\" onClick={() => {}}>Save changes</Button>;\n}\n// Dark mode: built in via dark: classes. Focus: 2px ink/paper outline." },
  { id: "input", name: "Input", tagline: "Persistent label. Described errors. No placeholder-only fields.",
    anatomy: ["Label", "Field", "Hint", "Error message"],
    props: [["label", "string", "Yes", "Persistent visible label."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["error", "string", "No", "Sets aria-invalid + described error."], ["hint", "string", "No", "Helper text via aria-describedby."], ["disabled", "boolean", "No — false", "Blocks editing."]],
    keyboard: [["Tab", "Move focus into / out of the field."], ["Type", "Enter text. Errors announced via role=status."]],
    invariants: ["Label is always visible, never placeholder-only.", "Errors use text + role, never color alone.", "aria-invalid is set when error is present.", "Error text uses Danger (#A83E22 light / #E07A52 dark), never Canyon Rust."],
    contract: { format: "oeste.component.v1", component: "Input", props: { label: "string", error: "string?", hint: "string?", disabled: "boolean" }, a11y: { invalid: "aria-invalid + described error", label: "persistent <label>", errorRole: "status" } },
    prompt: "Build an Oeste Input with a persistent visible label, aria-invalid + described error when error is set, error text in Danger #A83E22 (light) / #E07A52 (dark). Never use placeholder as the label. Never use Canyon Rust for error text.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/input.json",
    code: "import { Input } from \"@/components/ui/input\";\n\nexport function NameField({ value, onChange, error }) {\n  return <Input label=\"Project name\" value={value} onChange={onChange} error={error} hint=\"At least 3 characters.\" />;\n}\n// Related: Textarea and Select share the same label + error pattern." },

  { id: "textarea", name: "Textarea", tagline: "Multi-line input. Same label + error pattern as Input.",
    anatomy: ["Label", "Field", "Hint", "Error message"],
    props: [["label", "string", "Yes", "Persistent visible label."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["rows", "number", "No — 4", "Visible rows."], ["error", "string", "No", "Sets aria-invalid + described error."], ["disabled", "boolean", "No — false", "Blocks editing."]],
    keyboard: [["Tab", "Move focus into / out of the field."], ["Type", "Enter multi-line text."]],
    invariants: ["Label is always visible, never placeholder-only.", "Errors use text + role, never color alone.", "aria-invalid is set when error is present.", "Error text uses Danger (#A83E22 light / #E07A52 dark), never Canyon Rust."],
    contract: { format: "oeste.component.v1", component: "Textarea", props: { label: "string", rows: "number", error: "string?", disabled: "boolean" }, a11y: { invalid: "aria-invalid + described error", label: "persistent <label>", errorRole: "status" } },
    prompt: "Build an Oeste Textarea with a persistent visible label, aria-invalid + described error when error is set, error text in Danger #A83E22 (light) / #E07A52 (dark). Same label + error pattern as Input. Never use placeholder as the label.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/textarea.json",
    code: "import { Textarea } from \"@/components/ui/textarea\";\n\nexport function Notes({ value, onChange }) {\n  return <Textarea label=\"Field notes\" value={value} onChange={onChange} rows={4} hint=\"Anything worth keeping.\" />;\n}\n// Dark mode: built in via dark: classes." },
  { id: "select", name: "Select", tagline: "One choice from a list. Native select, real label.",
    anatomy: ["Label", "Field", "Options"],
    props: [["label", "string", "Yes", "Persistent visible label."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["options", "{ value, label }[]", "Yes", "Options list."], ["disabled", "boolean", "No — false", "Blocks changes."]],
    keyboard: [["Tab", "Move focus to the select."], ["ArrowUp / ArrowDown", "Change the selected option."], ["Enter / Space", "Open the native list."]],
    invariants: ["Native <select>, never a custom listbox.", "Label is always visible and linked via htmlFor.", "Options carry real values, never index-only labels."],
    contract: { format: "oeste.component.v1", component: "Select", props: { label: "string", options: "array", disabled: "boolean" }, a11y: { native: "select", label: "htmlFor" } },
    prompt: "Build an Oeste Select with a native <select>, persistent visible label via htmlFor, options as { value, label } pairs. Never build a custom listbox when a native select will do.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/select.json",
    code: "import { Select } from \"@/components/ui/select\";\n\nexport function ThemePicker({ value, onChange }) {\n  return <Select label=\"Theme\" value={value} onChange={onChange} options={[{ value: \"topanga\", label: \"Topanga\" }, { value: \"paper\", label: \"Paper\" }]} />;\n}" },
  { id: "dialog", name: "Dialog", tagline: "Accessible modal. Focus in, Escape out, focus back.",
    anatomy: ["Trigger", "Backdrop", "Surface", "Title + description", "Fields", "Actions"],
    props: [["open", "boolean", "Yes", "Controls visibility."], ["onOpenChange", "(open) => void", "Yes", "Fires on close / Escape / backdrop."], ["title", "string", "Yes", "Accessible name via aria-labelledby."], ["description", "string", "Yes", "Accessible description."], ["children", "ReactNode", "No", "Dialog body."]],
    keyboard: [["Escape", "Close the dialog, return focus to trigger."], ["Tab / Shift+Tab", "Trap focus inside the dialog."], ["Enter", "Activate the focused action."]],
    invariants: ["Focus moves into the dialog on open and returns to trigger on close.", "Escape always closes.", "Backdrop click closes; content is inert behind the dialog.", "Title + description are always present."],
    contract: { format: "oeste.component.v1", component: "Dialog", props: { open: "boolean", title: "string", description: "string" }, a11y: { modal: "aria-modal=true", labelledby: "title", describedby: "description", focus: "trap + restore on close" } },
    prompt: "Build an Oeste Dialog using native <dialog> + showModal. Title + description required. Escape closes, focus traps inside, focus returns to trigger on close. Backdrop is inert. Use Topanga tokens, hairline border, dialog shadow.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/dialog.json",
    code: "import { useState } from \"react\";\nimport { Button } from \"@/components/ui/button\";\nimport { Dialog } from \"@/components/ui/dialog\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function EditProject() {\n  const [open, setOpen] = useState(false);\n  return (<>\n    <Button onClick={() => setOpen(true)}>Edit project</Button>\n    <Dialog open={open} onOpenChange={setOpen} title=\"Edit project\" description=\"Rename this project.\">\n      <Input label=\"Project name\" value=\"\" onChange={() => {}} />\n    </Dialog>\n  </>);\n}" },
  { id: "card", name: "Card", tagline: "Structural container with proper heading hierarchy.",
    anatomy: ["Heading", "Body", "Actions (optional)"],
    props: [["title", "string", "Yes", "Heading text, linked via aria-labelledby."], ["headingLevel", "2 | 3 | 4", "No — 3", "Keeps document outline correct."], ["children", "ReactNode", "No", "Card body."]],
    keyboard: [["Tab", "Move through interactive content inside the card."]],
    invariants: ["Heading level matches document outline.", "Cards never use color alone to convey status.", "Interactive cards use a real <button> or <a>, never a clickable div."],
    contract: { format: "oeste.component.v1", component: "Card", props: { title: "string", headingLevel: [2, 3, 4] }, a11y: { labelledby: "heading", section: "native <section>" } },
    prompt: "Build an Oeste Card: native <section> + aria-labelledby, heading level matching the page outline, hairline border, card shadow. Never use a clickable div for an interactive card.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/card.json",
    code: "import { Card } from \"@/components/ui/card\";\n\nexport function NoteCard() {\n  return <Card title=\"Field notes\" headingLevel={3}><p>Room to think.</p></Card>;\n}" },
  { id: "tabs", name: "Tabs", tagline: "Roving tabindex. Arrow keys move, Home/End jump.",
    anatomy: ["Tab list", "Tab", "Panel"],
    props: [["items", "{ label, content }[]", "Yes", "Tabs + panels."], ["defaultIndex", "number", "No — 0", "Initially selected tab."]],
    keyboard: [["ArrowRight / ArrowLeft", "Move to next / previous tab."], ["Home / End", "Jump to first / last tab."], ["Tab", "Move into the active panel."]],
    invariants: ["Only the active tab is in the tab order (roving tabindex).", "Panels are labelled by their tab.", "Inactive panels are hidden, not just visually."],
    contract: { format: "oeste.component.v1", component: "Tabs", props: { items: "array", defaultIndex: "number" }, a11y: { tabs: "roving tabindex", panels: "aria-labelledby tab" } },
    prompt: "Build Oeste Tabs with roving tabindex: only the active tab has tabIndex 0. ArrowRight/Left move, Home/End jump, panels labelled by their tab, inactive panels hidden.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/tabs.json",
    code: "import { Tabs } from \"@/components/ui/tabs\";\n\nexport function Views() {\n  return <Tabs items={[{ label: \"Overview\", content: \"Overview panel.\" }, { label: \"Details\", content: \"Details panel.\" }]} />;\n}" },
  { id: "toast", name: "Toast", tagline: "Polite status. Manual dismissal. Nothing auto-vanishes.",
    anatomy: ["Message", "Dismiss button"],
    props: [["message", "string", "Yes", "Status text."], ["open", "boolean", "No — false", "Controls visibility."], ["onDismiss", "() => void", "Yes", "Dismiss handler."]],
    keyboard: [["Tab", "Move focus to Dismiss."], ["Enter / Space", "Dismiss the toast."]],
    invariants: ["Toast is role=status + aria-live=polite.", "No auto-expiry: the user dismisses it.", "Message is text, never color alone."],
    contract: { format: "oeste.component.v1", component: "Toast", props: { message: "string", open: "boolean" }, a11y: { live: "polite", role: "status", dismiss: "manual, focusable" } },
    prompt: "Build an Oeste Toast: single clean card (no split rounded top/bottom), role=status + aria-live=polite, manual Dismiss button, no auto-expiry. Keep it in one card.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/toast.json",
    code: "import { useState } from \"react\";\nimport { Button } from \"@/components/ui/button\";\nimport { Toast } from \"@/components/ui/toast\";\n\nexport function Preview() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>Show toast</Button><Toast message=\"Preview complete. Nothing was sent.\" open={open} onDismiss={() => setOpen(false)} /></>);\n}" },
  { id: "badge", name: "Badge", tagline: "Small status. Text first, color second.",
    anatomy: ["Label"],
    props: [["children", "ReactNode", "Yes", "Badge label."], ["tone", "neutral | accent | success | danger", "No — neutral", "Status tone. Text always carries the meaning."]],
    keyboard: [["—", "Badge is not interactive. No keyboard behavior."]],
    invariants: ["Meaning is in the text, never color alone.", "Danger tone uses Danger token, not Canyon Rust.", "Badge text meets 4.5:1 on its background."],
    contract: { format: "oeste.component.v1", component: "Badge", props: { tone: ["neutral", "accent", "success", "danger"] }, a11y: { meaning: "text, never color alone" } },
    prompt: "Build an Oeste Badge: pill, border + tint, tone neutral/accent/success/danger. Meaning in text, never color alone. Danger tone uses Danger #A83E22 / #E07A52.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/badge.json",
    code: "import { Badge } from \"@/components/ui/badge\";\n\nexport function Status() {\n  return <Badge tone=\"success\">Ready</Badge>;\n}" },
  { id: "checkbox", name: "Checkbox", tagline: "Real input. Visible label. Described help.",
    anatomy: ["Box", "Label", "Description (optional)"],
    props: [["label", "string", "Yes", "Visible label."], ["checked / onChange", "boolean / (v) => void", "Yes", "Controlled state."], ["description", "string", "No", "Helper text."], ["disabled", "boolean", "No — false", "Blocks toggling."]],
    keyboard: [["Tab", "Move focus to the checkbox."], ["Space", "Toggle."]],
    invariants: ["Native <input type=checkbox>, never a div.", "Label is clickable and linked via htmlFor.", "Description is linked via aria-describedby."],
    contract: { format: "oeste.component.v1", component: "Checkbox", props: { label: "string", checked: "boolean", disabled: "boolean" }, a11y: { native: "input[type=checkbox]", label: "htmlFor", desc: "aria-describedby" } },
    prompt: "Build an Oeste Checkbox with a native input, clickable label via htmlFor, optional described help text, accent color for the checked state. Never build a checkbox from a div.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/checkbox.json",
    code: "import { useState } from \"react\";\nimport { Checkbox } from \"@/components/ui/checkbox\";\n\nexport function Notify() {\n  const [checked, setChecked] = useState(false);\n  return <Checkbox label=\"Email me updates\" checked={checked} onChange={setChecked} description=\"One email per change.\" />;\n}" },
  { id: "switch", name: "Switch", tagline: "On / off with a real role=switch.",
    anatomy: ["Track", "Thumb", "Label", "Description (optional)"],
    props: [["label", "string", "Yes", "Visible label."], ["checked / onChange", "boolean / (v) => void", "Yes", "Controlled state."], ["description", "string", "No", "Helper text."], ["disabled", "boolean", "No — false", "Blocks toggling."]],
    keyboard: [["Tab", "Move focus to the switch."], ["Space / Enter", "Toggle."]],
    invariants: ["Uses role=switch + aria-checked.", "State is visible by position + label, never color alone.", "Label is clickable."],
    contract: { format: "oeste.component.v1", component: "Switch", props: { label: "string", checked: "boolean", disabled: "boolean" }, a11y: { role: "switch", checked: "aria-checked", state: "position + label, never color alone" } },
    prompt: "Build an Oeste Switch with role=switch + aria-checked, thumb position showing state, clickable label. State visible by position + label, never color alone.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/switch.json",
    code: "import { useState } from \"react\";\nimport { Switch } from \"@/components/ui/switch\";\n\nexport function DarkMode() {\n  const [checked, setChecked] = useState(false);\n  return <Switch label=\"Dark mode\" checked={checked} onChange={setChecked} />;\n}" },
{ id: "alert", name: "Alert", tagline: "Status that stays put. Text first, tone second.",
    anatomy: ["Tone border / tint", "Message", "Dismiss button (optional)"],
    props: [["children", "ReactNode", "Yes", "Alert message."], ["tone", "info | success | warning | danger", "No — info", "Status tone. Text always carries the meaning."], ["role", "alert | status", "No — status", "Use alert for urgent errors, status for the rest."], ["onDismiss", "() => void", "No", "Adds a Dismiss button."]],
    keyboard: [["Tab", "Move focus to Dismiss when present."], ["Enter / Space", "Dismiss the alert."]],
    invariants: ["Meaning is in the text, never color alone.", "role=alert only for urgent errors; status for everything else.", "Danger tone uses Danger token, not Canyon Rust.", "Dismissible alerts remove themselves from the DOM."],
    contract: { format: "oeste.component.v1", component: "Alert", props: { tone: ["info", "success", "warning", "danger"], role: ["alert", "status"] }, a11y: { role: "alert or status", dismiss: "focusable Dismiss button" } },
    prompt: "Build an Oeste Alert: tone info/success/warning/danger, role=status by default (role=alert only for urgent errors), message in text, optional Dismiss button. Danger tone uses Danger #A83E22 / #E07A52, never Canyon Rust.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/alert.json",
    code: "import { Alert } from \"@/components/ui/alert\";\n\nexport function SaveError() {\n  return <Alert tone=\"danger\" role=\"alert\">Could not save. Your changes are still here.</Alert>;\n}\n// Dark mode: built in via dark: classes." },
  { id: "accordion", name: "Accordion", tagline: "Stacked sections. One open at a time or many — your call.",
    anatomy: ["Trigger button", "Panel", "Chevron / indicator"],
    props: [["items", "{ title, content }[]", "Yes", "Sections."], ["allowMultiple", "boolean", "No — false", "When true, more than one panel may stay open."]],
    keyboard: [["Tab", "Move focus between triggers."], ["Enter / Space", "Toggle the focused panel."]],
    invariants: ["Trigger is a real <button> with aria-expanded + aria-controls.", "Panel has a matching id and is hidden when closed.", "State is visible by indicator + expanded panel, never color alone."],
    contract: { format: "oeste.component.v1", component: "Accordion", props: { items: "array", allowMultiple: "boolean" }, a11y: { trigger: "button + aria-expanded + aria-controls", panel: "hidden when closed" } },
    prompt: "Build an Oeste Accordion: each trigger is a real <button> with aria-expanded + aria-controls, panel hidden when closed, state visible by indicator + panel. Tab moves between triggers, Enter/Space toggles.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/accordion.json",
    code: "import { Accordion } from \"@/components/ui/accordion\";\n\nexport function Faq() {\n  return <Accordion items={[{ title: \"What is Oeste?\", content: \"A design system for humans, agents, and vibe coders.\" }]} />;\n}" },
  { id: "radiogroup", name: "RadioGroup", tagline: "One choice from a few. Native radios, real grouping.",
    anatomy: ["Fieldset", "Legend", "Radio + label options"],
    props: [["legend", "string", "Yes", "Group label."], ["name", "string", "Yes", "Shared radio name."], ["options", "{ value, label, description? }[]", "Yes", "Options."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."]],
    keyboard: [["Tab", "Move focus into the group."], ["ArrowUp / ArrowDown", "Move between options and select."], ["Space", "Select the focused option."]],
    invariants: ["Native <input type=radio> inside <fieldset> + <legend>.", "All radios share one name.", "Labels are clickable and linked via htmlFor."],
    contract: { format: "oeste.component.v1", component: "RadioGroup", props: { legend: "string", name: "string", options: "array", value: "string" }, a11y: { native: "input[type=radio] in fieldset + legend", group: "shared name" } },
    prompt: "Build an Oeste RadioGroup with native radios inside <fieldset> + <legend>, one shared name, clickable labels. Arrow keys move and select. Never build radios from divs.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/radiogroup.json",
    code: "import { RadioGroup } from \"@/components/ui/radiogroup\";\n\nexport function SizePicker({ value, onChange }) {\n  return <RadioGroup legend=\"Size\" name=\"size\" value={value} onChange={onChange} options={[{ value: \"sm\", label: \"Small\" }, { value: \"md\", label: \"Medium\" }, { value: \"lg\", label: \"Large\" }]} />;\n}" },
  { id: "progress", name: "Progress", tagline: "How far along. Number + bar, never bar alone.",
    anatomy: ["Label", "Bar + fill", "Value text"],
    props: [["value", "number", "Yes", "Current value, 0–100 by default."], ["min", "number", "No — 0", "Minimum."], ["max", "number", "No — 100", "Maximum."], ["label", "string", "Yes", "Visible label, e.g. \"Upload\"."]],
    keyboard: [["—", "Progress is not interactive. No keyboard behavior."]],
    invariants: ["Uses role=progressbar + aria-valuenow/min/max.", "Value is shown as text, never bar alone.", "Value is clamped to min–max."],
    contract: { format: "oeste.component.v1", component: "Progress", props: { value: "number", min: "number", max: "number" }, a11y: { role: "progressbar", values: "aria-valuenow/min/max", text: "visible value" } },
    prompt: "Build an Oeste Progress with role=progressbar + aria-valuenow/min/max, visible label + value text, value clamped to min–max. Never show a bar without its number.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/progress.json",
    code: "import { Progress } from \"@/components/ui/progress\";\n\nexport function Upload({ done }) {\n  return <Progress label=\"Upload\" value={done} />;\n}\n// Dark mode: built in via dark: classes." },
  { id: "avatar", name: "Avatar", tagline: "A face or initials. Fallback always shows.",
    anatomy: ["Image (optional)", "Fallback initials", "Accessible name"],
    props: [["src", "string", "No", "Photo URL. When it fails, the fallback shows."], ["name", "string", "Yes", "Full name — used for initials + accessible name."], ["alt", "string", "No — name", "Image alt text."], ["size", "md | lg", "No — md", "44px or 64px."]],
    keyboard: [["—", "Avatar is not interactive. No keyboard behavior."]],
    invariants: ["Fallback initials always render when the image is missing or fails.", "Accessible name is the person's name, never empty.", "Initials are derived from the name, never hardcoded per instance."],
    contract: { format: "oeste.component.v1", component: "Avatar", props: { src: "string?", name: "string", size: ["md", "lg"] }, a11y: { name: "person name", fallback: "initials when image fails" } },
    prompt: "Build an Oeste Avatar: photo with an initials fallback that always renders when the image is missing or fails. Accessible name is the person's name. Sizes md (44px) and lg (64px). Never leave an empty circle.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/avatar.json",
    code: "import { Avatar } from \"@/components/ui/avatar\";\n\nexport function Teammate() {\n  return <Avatar name=\"Alex Rivera\" src=\"/photos/member.jpg\" />;\n}\n// If the photo fails, initials show. Dark mode: built in." },
  { id: "separator", name: "Separator", tagline: "A hairline that divides. Decorative or semantic.",
    anatomy: ["Line", "Orientation"],
    props: [["orientation", "horizontal | vertical", "No — horizontal", "Line direction."], ["decorative", "boolean", "No — true", "True = aria-hidden. False = role=separator with a label."]],
    keyboard: [["—", "Separator is not interactive. No keyboard behavior."]],
    invariants: ["Decorative separators are aria-hidden.", "Semantic separators use role=separator.", "A separator never replaces a heading or a labeled section."],
    contract: { format: "oeste.component.v1", component: "Separator", props: { orientation: ["horizontal", "vertical"], decorative: "boolean" }, a11y: { decorative: "aria-hidden", semantic: "role=separator" } },
    prompt: "Build an Oeste Separator: a hairline rule, horizontal or vertical. Decorative separators are aria-hidden; semantic ones use role=separator. Never use a separator in place of a heading.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/separator.json",
    code: "import { Separator } from \"@/components/ui/separator\";\n\nexport function Sections() {\n  return (<><p>First section.</p><Separator /><p>Second section.</p></>);\n}" },
  { id: "slider", name: "Slider", tagline: "Pick a number by dragging. Arrows work too.",
    anatomy: ["Label", "Track + fill", "Thumb", "Value text"],
    props: [["label", "string", "Yes", "Visible label."], ["value / onChange", "number / (v) => void", "Yes", "Controlled value."], ["min", "number", "No — 0", "Minimum."], ["max", "number", "No — 100", "Maximum."], ["step", "number", "No — 1", "Step size."]],
    keyboard: [["Tab", "Move focus to the thumb."], ["ArrowLeft / ArrowRight / ArrowUp / ArrowDown", "Decrease / increase by one step."], ["Home / End", "Jump to min / max."], ["PageUp / PageDown", "Move by 10 steps."]],
    invariants: ["Native <input type=range>, never a div thumb.", "Value is shown as text, never slider alone.", "aria-valuenow/min/max always reflect the value."],
    contract: { format: "oeste.component.v1", component: "Slider", props: { label: "string", value: "number", min: "number", max: "number", step: "number" }, a11y: { native: "input[type=range]", values: "aria-valuenow/min/max" } },
    prompt: "Build an Oeste Slider with a native <input type=range>, visible label, visible value text, aria-valuenow/min/max. Arrow keys step, Home/End jump. Never build a slider thumb from a div.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/slider.json",
    code: "import { useState } from \"react\";\nimport { Slider } from \"@/components/ui/slider\";\n\nexport function Volume() {\n  const [value, setValue] = useState(40);\n  return <Slider label=\"Volume\" value={value} onChange={setValue} min={0} max={100} />;\n}" },
  { id: "tooltip", name: "Tooltip", tagline: "A hint on hover and focus. Never the only way to know.",
    anatomy: ["Trigger", "Bubble", "Text"],
    props: [["children", "ReactNode", "Yes", "Trigger element."], ["content", "string", "Yes", "Hint text."], ["side", "top | bottom", "No — top", "Bubble placement."]],
    keyboard: [["Tab", "Focus the trigger to show the tooltip."], ["Escape", "Dismiss the tooltip."], ["Tab away / blur", "Hide the tooltip."]],
    invariants: ["Tooltip shows on hover AND on focus.", "Tooltip content uses role=tooltip + aria-describedby.", "The hint is never the only place its information lives.", "Escape dismisses; blur hides.", "The bubble never overflows the viewport: the shift is clamped to 8px viewport margins, moving the bubble toward the trigger when the trigger sits near an edge, and the bubble wraps at viewport width minus 16px when it cannot fit on one line."],
    contract: { format: "oeste.component.v1", component: "Tooltip", props: { content: "string", side: ["top", "bottom"] }, a11y: { role: "tooltip", describedby: "trigger aria-describedby", dismiss: "Escape / blur" } },
    prompt: "Build an Oeste Tooltip: shows on hover AND focus, role=tooltip + aria-describedby on the trigger, Escape dismisses, blur hides. Never put information only in a tooltip. The bubble never overflows the viewport: the shift is clamped to 8px viewport margins, moving the bubble toward the trigger near an edge, and the bubble wraps at viewport width minus 16px.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/tooltip.json",
    code: "import { Tooltip } from \"@/components/ui/tooltip\";\n\nexport function Help() {\n  return <Tooltip content=\"Saves to this project.\"><button type=\"button\">Save</button></Tooltip>;\n}" },
  { id: "popover", name: "Popover", tagline: "A small panel anchored to a trigger. Escape closes.",
    anatomy: ["Trigger", "Panel", "Content"],
    props: [["children", "ReactNode", "Yes", "Trigger + panel content."], ["open / onOpenChange", "boolean / (v) => void", "No", "Controlled open state. Uncontrolled by default."], ["label", "string", "Yes", "Accessible name for the panel."]],
    keyboard: [["Tab", "Move focus into the panel when open."], ["Escape", "Close and return focus to the trigger."], ["Click outside", "Close the panel."]],
    invariants: ["Panel is labelled by its trigger or label.", "Escape closes and returns focus to the trigger.", "Clicking outside closes; content behind stays interactive.", "Popover is non-modal — unlike Dialog, it does not trap focus or make the page inert."],
    contract: { format: "oeste.component.v1", component: "Popover", props: { label: "string", open: "boolean" }, a11y: { panel: "labelled", dismiss: "Escape / outside click", focus: "returns to trigger" } },
    prompt: "Build an Oeste Popover: trigger-anchored panel, Escape closes and returns focus to the trigger, outside click closes. Non-modal — no focus trap, page stays interactive. Panel is labelled.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/popover.json",
    code: "import { Popover } from \"@/components/ui/popover\";\n\nexport function Details() {\n  return <Popover label=\"Project details\"><button type=\"button\">Details</button><p>Topanga theme, 35 components.</p></Popover>;\n}" },
  { id: "dropdown-menu", name: "Dropdown Menu", tagline: "Actions in a list. Arrows move, Escape closes.",
    anatomy: ["Trigger", "Menu", "Menu items", "Separator (optional)"],
    props: [["label", "string", "Yes", "Accessible name for the menu."], ["items", "{ label, onSelect?, separator? }[]", "Yes", "Menu items."], ["children", "ReactNode", "Yes", "Trigger element."]],
    keyboard: [["Enter / Space / ArrowDown", "Open the menu, focus the first item."], ["ArrowDown / ArrowUp", "Move between items."], ["Enter / Space", "Activate the focused item."], ["Escape", "Close and return focus to the trigger."]],
    invariants: ["Menu uses role=menu, items use role=menuitem.", "Trigger uses aria-haspopup=menu + aria-expanded.", "Escape closes and returns focus to the trigger.", "Menu items are real buttons, never divs."],
    contract: { format: "oeste.component.v1", component: "DropdownMenu", props: { label: "string", items: "array" }, a11y: { menu: "role=menu", items: "role=menuitem", trigger: "aria-haspopup + aria-expanded" } },
    prompt: "Build an Oeste DropdownMenu: trigger with aria-haspopup=menu + aria-expanded, role=menu with role=menuitem buttons, Arrow keys move, Enter activates, Escape closes and returns focus. Items are real buttons, never divs.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/dropdown-menu.json",
    code: "import { DropdownMenu } from \"@/components/ui/dropdown-menu\";\n\nexport function Actions() {\n  return <DropdownMenu label=\"Project actions\" items={[{ label: \"Rename\", onSelect: () => {} }, { label: \"Duplicate\", onSelect: () => {} }]}><button type=\"button\">Actions</button></DropdownMenu>;\n}" },
  { id: "toggle", name: "Toggle", tagline: "A button that stays pressed. Fill + label, not color alone.",
    anatomy: ["Button", "Pressed state", "Label"],
    props: [["children", "ReactNode", "Yes", "Toggle label."], ["pressed / onPressedChange", "boolean / (v) => void", "Yes", "Controlled pressed state."], ["disabled", "boolean", "No — false", "Blocks toggling."]],
    keyboard: [["Tab", "Move focus to the toggle."], ["Enter / Space", "Toggle pressed state."]],
    invariants: ["Uses aria-pressed.", "Pressed state is visible by fill + label, never color alone.", "Toggle is a real <button>, never a div."],
    contract: { format: "oeste.component.v1", component: "Toggle", props: { pressed: "boolean" }, a11y: { pressed: "aria-pressed", state: "fill + label, never color alone" } },
    prompt: "Build an Oeste Toggle: a real <button> with aria-pressed, pressed state visible by fill + label, never color alone. Tab focuses, Enter/Space toggles.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/toggle.json",
    code: "import { useState } from \"react\";\nimport { Toggle } from \"@/components/ui/toggle\";\n\nexport function Bold() {\n  const [pressed, setPressed] = useState(false);\n  return <Toggle pressed={pressed} onPressedChange={setPressed}>Bold</Toggle>;\n}" },
  { id: "collapsible", name: "Collapsible", tagline: "One section that opens and closes. Accordion's simpler sibling.",
    anatomy: ["Trigger button", "Panel"],
    props: [["title", "string", "Yes", "Trigger label."], ["children", "ReactNode", "Yes", "Panel content."], ["open / onOpenChange", "boolean / (v) => void", "No", "Controlled open state. Uncontrolled by default."]],
    keyboard: [["Tab", "Move focus to the trigger."], ["Enter / Space", "Toggle the panel."]],
    invariants: ["Trigger is a real <button> with aria-expanded + aria-controls.", "Panel is hidden when closed.", "State is visible by indicator + panel, never color alone.", "Reduced motion: no height animation."],
    contract: { format: "oeste.component.v1", component: "Collapsible", props: { title: "string", open: "boolean" }, a11y: { trigger: "button + aria-expanded + aria-controls", panel: "hidden when closed" } },
    prompt: "Build an Oeste Collapsible: one trigger button with aria-expanded + aria-controls, one panel hidden when closed, state visible by indicator + panel. Reduced motion: no height animation.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/collapsible.json",
    code: "import { Collapsible } from \"@/components/ui/collapsible\";\n\nexport function Details() {\n  return <Collapsible title=\"Show details\"><p>Topanga theme, 35 components.</p></Collapsible>;\n}" },
  { id: "skeleton", name: "Skeleton", tagline: "A placeholder while content loads. Never flashing.",
    anatomy: ["Shape", "aria-busy region"],
    props: [["width", "string", "No — 100%", "Placeholder width."], ["height", "string", "No — 16px", "Placeholder height."], ["label", "string", "Yes", "What is loading, e.g. \"Loading project\"."]],
    keyboard: [["—", "Skeleton is not interactive. No keyboard behavior."]],
    invariants: ["Container has aria-busy=true while loading.", "Skeleton is labelled with what is loading.", "No flashing, no shimmer that strobes. Reduced motion: no pulse.", "Real content replaces the skeleton — never both at once."],
    contract: { format: "oeste.component.v1", component: "Skeleton", props: { width: "string", height: "string", label: "string" }, a11y: { busy: "aria-busy=true", label: "what is loading" } },
    prompt: "Build an Oeste Skeleton: placeholder shape with aria-busy=true, labelled with what is loading. No flashing, no strobing shimmer. Reduced motion: no pulse. Real content replaces it.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/skeleton.json",
    code: "import { Skeleton } from \"@/components/ui/skeleton\";\n\nexport function LoadingCard() {\n  return <Skeleton label=\"Loading project\" width=\"100%\" height=\"96px\" />;\n}" },
  { id: "label", name: "Label", tagline: "A label that stands on its own. Links to its control.",
    anatomy: ["Text", "Required indicator (optional)"],
    props: [["htmlFor", "string", "Yes", "Id of the control it labels."], ["children", "ReactNode", "Yes", "Label text."], ["required", "boolean", "No — false", "Shows a visible required indicator + aria."]],
    keyboard: [["—", "Label is not interactive. Clicking it focuses its control."]],
    invariants: ["Always linked via htmlFor to a real control id.", "Required is shown with a visible indicator AND text, never color alone.", "Label text is visible, never sr-only except when the control already has a visible label."],
    contract: { format: "oeste.component.v1", component: "Label", props: { htmlFor: "string", required: "boolean" }, a11y: { link: "htmlFor", required: "visible indicator + text" } },
    prompt: "Build an Oeste Label: standalone label linked via htmlFor to a real control id. Required shows a visible indicator plus text, never color alone. Clicking the label focuses its control.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/label.json",
    code: "import { Label } from \"@/components/ui/label\";\n\nexport function NameRow() {\n  return (<div><Label htmlFor=\"name\" required>Project name</Label><input id=\"name\" type=\"text\" /></div>);\n}" },
  { id: "breadcrumb", name: "Breadcrumb", tagline: "Where you are, and how you got here.",
    anatomy: ["List", "Links", "Current page"],
    props: [["items", "{ label, href? }[]", "Yes", "Trail. Last item is the current page."], ["ariaLabel", "string", "No — \"Breadcrumb\"", "Nav label."]],
    keyboard: [["Tab", "Move focus through the links. Current page is not a link."]],
    invariants: ["Wrapped in <nav aria-label=\"Breadcrumb\"> with an <ol>.", "Current page uses aria-current=\"page\" and is not a link.", "Separators are aria-hidden."],
    contract: { format: "oeste.component.v1", component: "Breadcrumb", props: { items: "array" }, a11y: { nav: "aria-label=Breadcrumb", current: "aria-current=page, not a link" } },
    prompt: "Build an Oeste Breadcrumb: <nav aria-label=\"Breadcrumb\"> with an <ol>, links for every step except the current page, current page uses aria-current=\"page\" and is not a link. Separators are aria-hidden.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/breadcrumb.json",
    code: "import { Breadcrumb } from \"@/components/ui/breadcrumb\";\n\nexport function Trail() {\n  return <Breadcrumb items={[{ label: \"Home\", href: \"#/home\" }, { label: \"Components\", href: \"#/components/button\" }, { label: \"Button\" }]} />;\n}" },
  { id: "pagination", name: "Pagination", tagline: "Page through a list. Current page is unmistakable.",
    anatomy: ["Previous", "Page buttons", "Ellipsis", "Next"],
    props: [["page", "number", "Yes", "Current page (1-based)."], ["totalPages", "number", "Yes", "Total pages."], ["onChange", "(page) => void", "Yes", "Fires when the page changes."]],
    keyboard: [["Tab", "Move focus through Previous, pages, Next."], ["Enter / Space", "Go to the focused page."]],
    invariants: ["Wrapped in <nav aria-label=\"Pagination\">.", "Current page uses aria-current=\"page\".", "Previous is disabled on page 1; Next is disabled on the last page.", "Ellipsis is aria-hidden, never a button."],
    contract: { format: "oeste.component.v1", component: "Pagination", props: { page: "number", totalPages: "number" }, a11y: { nav: "aria-label=Pagination", current: "aria-current=page", ellipsis: "aria-hidden" } },
    prompt: "Build an Oeste Pagination: <nav aria-label=\"Pagination\">, Previous / page buttons / Next, current page uses aria-current=\"page\", Previous disabled on page 1, Next disabled on the last page, ellipsis is aria-hidden, never a button.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/pagination.json",
    code: "import { useState } from \"react\";\nimport { Pagination } from \"@/components/ui/pagination\";\n\nexport function Pages() {\n  const [page, setPage] = useState(1);\n  return <Pagination page={page} totalPages={9} onChange={setPage} />;\n}" },
  { id: "table", name: "Table", tagline: "Rows and columns that screen readers can follow.",
    anatomy: ["Caption", "Header row", "Body rows"],
    props: [["caption", "string", "Yes", "What the table shows."], ["columns", "{ key, header }[]", "Yes", "Columns."], ["rows", "Record[]", "Yes", "Rows."]],
    keyboard: [["Tab", "Move focus through interactive cells, if any."]],
    invariants: ["<caption> describes what the table shows.", "Header cells use <th scope=\"col\">; row headers use <th scope=\"row\">.", "No layout tables, ever.", "Sticky header keeps column labels visible on long tables."],
    contract: { format: "oeste.component.v1", component: "Table", props: { caption: "string", columns: "array", rows: "array" }, a11y: { caption: "describes the table", headers: "th scope col/row" } },
    prompt: "Build an Oeste Table: semantic <table> with a <caption> describing what it shows, <th scope=\"col\"> headers (scope=\"row\" for row headers), sticky header on long tables. Never use a table for layout.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/table.json",
    code: "import { Table } from \"@/components/ui/table\";\n\nexport function Tokens() {\n  return <Table caption=\"Topanga tokens\" columns={[{ key: \"token\", header: \"Token\" }, { key: \"light\", header: \"Light\" }]} rows={[{ token: \"accent\", light: \"#C47D3B\" }]} />;\n}" },
  { id: "empty-state", name: "Empty State", tagline: "Nothing here yet — and a clear next step.",
    anatomy: ["Icon (decorative)", "Heading", "Text", "Action"],
    props: [["title", "string", "Yes", "What is empty."], ["description", "string", "Yes", "Why it is empty + what to do."], ["actionLabel", "string", "No", "Action button label."], ["onAction", "() => void", "No", "Action handler."]],
    keyboard: [["Tab", "Move focus to the action when present."], ["Enter / Space", "Activate the action."]],
    invariants: ["Icon is aria-hidden.", "Heading says what is empty, in plain words.", "There is always a next step: an action or a link.", "Empty state never blames the user."],
    contract: { format: "oeste.component.v1", component: "EmptyState", props: { title: "string", description: "string", actionLabel: "string?" }, a11y: { icon: "aria-hidden", action: "focusable button" } },
    prompt: "Build an Oeste Empty State: aria-hidden icon, heading that says what is empty in plain words, description with a next step, and a focusable action button. Never blame the user for an empty screen.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/empty-state.json",
    code: "import { EmptyState } from \"@/components/ui/empty-state\";\n\nexport function NoProjects() {\n  return <EmptyState title=\"No projects yet\" description=\"Create your first project to see it here.\" actionLabel=\"New project\" onAction={() => {}} />;\n}" },
  { id: "calendar", name: "Calendar", tagline: "Month grid. One button per day, min/max bounds.",
    anatomy: ["Prev/next month buttons", "Month/year heading (aria-live polite)", "Weekday header row", "Day buttons (one per day)", "Empty cells (outside the month)"],
    props: [["value", "string?", "No", "Selected date, ISO YYYY-MM-DD, or null."], ["onChange", "(iso: string) => void", "Yes", "Fires with the clicked day's ISO string."], ["min", "string?", "No", "Earliest selectable date, ISO. Earlier days are disabled."], ["max", "string?", "No", "Latest selectable date, ISO. Later days are disabled."]],
    keyboard: [["Tab", "Move focus between the nav buttons and day buttons."], ["Enter / Space", "Select the focused day (or move one month on the nav buttons)."]],
    invariants: ["Dates are ISO strings only (YYYY-MM-DD). No Date objects in props, no locale parsing.", "Week starts Sunday. Month and day names are English.", "The displayed month starts at the value's month, or the current month when no value is set. It follows the value when the parent passes a new date in a different month.", "Prev/next move one month and do not call onChange.", "Days outside the current month render as empty cells (no buttons).", "Days outside min/max are disabled (disabled attribute + aria-disabled).", "The selected day has an accent fill and its aria-label ends with ', selected'. Today has aria-current=\"date\" plus an accent outline.", "Day buttons are 44px circles (Topanga touch minimum).", "Tab + Enter/Space only. No roving tabindex, no arrow-key cell movement."],
    contract: { format: "oeste.component.v1", component: "Calendar", props: { value: "string?", onChange: "function", min: "string?", max: "string?" }, a11y: { grid: "semantic table + th scope=col weekday headers", days: "one button per day, aria-label with ', selected' suffix, aria-current=date for today", disabled: "disabled + aria-disabled for out-of-range days", nav: "prev/next buttons with aria-labels, heading aria-live=polite" } },
    prompt: "Build an Oeste Calendar: a month grid for one ISO date (YYYY-MM-DD). Prev-month button (aria-label Previous month), month/year heading (aria-live polite), next-month button (aria-label Next month). A semantic table: weekday header row (Su Mo Tu We Th Fr Sa), one button per day, empty cells outside the month. Clicking a day calls onChange with that day's ISO string. Days outside min/max are disabled (disabled + aria-disabled). Selected day: accent fill + aria-label ending with ', selected'. Today: aria-current=date + accent outline. Week starts Sunday, English names. Displayed month starts at the value's month or the current month and follows the value when the parent passes a new date in a different month; prev/next move one month and do not call onChange. Day buttons are 44px circles. ISO strings only, no locale parsing. Tab + Enter/Space only, no roving tabindex, no arrow keys. Use Topanga tokens: accent #C47D3B (light) / #DB914E (dark).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/calendar.json",
    code: "import { Calendar } from \"@/components/ui/calendar\";\n\nexport function Pick() {\n  const [day, setDay] = React.useState(\"2026-10-18\");\n  return <Calendar value={day} onChange={setDay} />;\n}" },
  { id: "date-picker", name: "DatePicker", tagline: "Read-only input plus popover calendar. Clear, Today.",
    anatomy: ["Label", "Read-only input (value or placeholder)", "Calendar trigger button", "Popover div (Calendar + Clear + Today)"],
    props: [["value", "string?", "No", "Selected date, ISO YYYY-MM-DD, or null."], ["onChange", "(iso: string | null) => void", "Yes", "Fires with the picked ISO string, or null on Clear."], ["label", "string", "No — Date", "Label text."], ["placeholder", "string", "No — YYYY-MM-DD", "Shown when no value is set."], ["min", "string?", "No", "Earliest selectable date, ISO."], ["max", "string?", "No", "Latest selectable date, ISO."], ["clearable", "boolean", "No — true", "Show the Clear button when a value is set."], ["invalid", "boolean", "No — false", "Sets aria-invalid on the input. Used by DateRangePicker for the End input."]],
    keyboard: [["Tab", "Move focus to the input (read-only), then the Calendar button, then into the popover."], ["Enter / Space", "Toggle the popover on the button; select a day inside it."], ["Escape", "Close the popover and return focus to the Calendar button."]],
    invariants: ["The input is read-only. Dates come from the Calendar only, so there is no free-text parsing to get wrong.", "Invalid value prop is treated as null (empty input, Calendar shows the current month).", "Selecting a day calls onChange and closes the popover.", "Clear calls onChange(null) and closes. It only renders when clearable and a value is set.", "Today sets today's ISO and closes. Today is disabled when today is outside min/max.", "Escape closes the popover and returns focus to the Calendar button. Clicking outside the picker closes it.", "The popover is a plain div, not a dialog: no modal behavior, no focus trap.", "ISO strings only, no locale parsing."],
    contract: { format: "oeste.component.v1", component: "DatePicker", props: { value: "string?", onChange: "function", label: "string", placeholder: "string", min: "string?", max: "string?", clearable: "boolean", invalid: "boolean" }, a11y: { input: "read-only input with label, aria-invalid", trigger: "button aria-label Open/Close calendar, aria-expanded, aria-controls", popover: "div with Calendar + Clear + Today", keyboard: "Escape closes, focus returns to trigger" } },
    prompt: "Build an Oeste DatePicker: a label + a read-only text input (value or placeholder YYYY-MM-DD) + a Calendar button (aria-label Open/Close calendar, aria-expanded, aria-controls) that toggles a popover div with a Calendar + Clear + Today. The input is read-only: dates come from the Calendar only, no free-text parsing. Selecting a day calls onChange and closes. Clear (only when clearable and a value is set) calls onChange(null) and closes. Today sets today's ISO and closes, and is disabled when today is outside min/max. Escape closes and returns focus to the button. Clicking outside the picker closes it. Invalid value prop is treated as null. ISO strings only, no locale parsing. Use Topanga tokens: accent #C47D3B (light) / #DB914E (dark).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/date-picker.json",
    code: "import { DatePicker } from \"@/components/ui/date-picker\";\n\nexport function Due() {\n  const [day, setDay] = React.useState(null);\n  return <DatePicker value={day} onChange={setDay} label=\"Due date\" />;\n}" },
  { id: "time-picker", name: "TimePicker", tagline: "Trigger plus time listbox. 12-hour labels, HH:MM value.",
    anatomy: ["Label", "Trigger button (value or Select time)", "Dropdown ul role=listbox", "Options (li role=option, each a button)"],
    props: [["value", "string?", "No", "Selected time, HH:MM 24-hour, or null."], ["onChange", "(time: string | null) => void", "Yes", "Fires with the picked HH:MM string."], ["label", "string", "No — Time", "Label text."], ["step", "30 | 60", "No — 30", "Minutes between options. Anything else falls back to 30."]],
    keyboard: [["Tab", "Move focus to the trigger, then through the option buttons."], ["Enter / Space", "Toggle the listbox on the trigger; select the focused option."], ["Escape", "Close the listbox and return focus to the trigger."]],
    invariants: ["Times are HH:MM 24-hour strings. The list shows 12-hour labels (12:00 AM, 1:00 PM); the value stays HH:MM.", "Options run 00:00 to 23:30 (step 30) or 23:00 (step 60).", "Invalid value prop is treated as null (trigger shows Select time, no option selected).", "A valid value that is not on the step grid still displays; no option is highlighted.", "Clicking an option calls onChange and closes.", "Escape closes and returns focus to the trigger. Clicking outside the picker closes it.", "Options are buttons. Tab moves through them, Enter selects. No arrow-key navigation."],
    contract: { format: "oeste.component.v1", component: "TimePicker", props: { value: "string?", onChange: "function", label: "string", step: "30 | 60" }, a11y: { trigger: "button aria-haspopup=listbox, aria-expanded, aria-controls", list: "ul role=listbox, li role=option aria-selected", options: "buttons, Tab navigation, Enter selects", display: "12-hour labels, value stays HH:MM" } },
    prompt: "Build an Oeste TimePicker: a label + a trigger button (value or Select time, aria-haspopup=listbox, aria-expanded, aria-controls) that toggles a dropdown ul role=listbox. Options are li role=option aria-selected, each holding a button. Step 30 gives 48 options (00:00 to 23:30), step 60 gives 24 (00:00 to 23:00). Labels are 12-hour (12:00 AM, 1:00 PM); the value stays HH:MM 24-hour. Clicking an option calls onChange and closes. Escape closes and returns focus to the trigger. Clicking outside the picker closes it. Options are buttons: Tab moves through them, Enter selects, no arrow keys. Invalid value prop is treated as null. Use Topanga tokens: accent #C47D3B (light) / #DB914E (dark).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/time-picker.json",
    code: "import { TimePicker } from \"@/components/ui/time-picker\";\n\nexport function Start() {\n  const [time, setTime] = React.useState(\"14:30\");\n  return <TimePicker value={time} onChange={setTime} label=\"Start time\" />;\n}" },
  { id: "date-range-picker", name: "DateRangePicker", tagline: "Two DatePickers, one range. End-before-start is an error.",
    anatomy: ["Fieldset + legend", "Start DatePicker", "End DatePicker (aria-invalid on error)", "Clear button", "Error message (role=alert)"],
    props: [["start", "string?", "No", "Start date, ISO YYYY-MM-DD, or null."], ["end", "string?", "No", "End date, ISO YYYY-MM-DD, or null."], ["onChange", "({ start, end }) => void", "Yes", "Fires with the new pair on any valid change, or { start: null, end: null } on Clear."], ["label", "string", "No — Date range", "Legend text."], ["min", "string?", "No", "Earliest selectable date, ISO."], ["max", "string?", "No", "Latest selectable date, ISO."], ["clearable", "boolean", "No — true", "Show the Clear button when either date is set."]],
    keyboard: [["Tab", "Move focus through the Start picker, then the End picker, then Clear."], ["Enter / Space", "Toggle each picker's popover; select days inside."], ["Escape", "Close the open popover and return focus to its trigger."]],
    invariants: ["Composes two DatePickers (Start, End) with clearable={false} plus one range Clear button.", "Changing Start or End calls onChange with the new pair.", "When end is before start, an error message (role=alert) shows and the End input gets aria-invalid. onChange is NOT called with the invalid pair; the last valid pair stays.", "A stale error clears when the parent passes a new pair.", "Same-day ranges are valid.", "Clear calls onChange({ start: null, end: null }).", "ISO strings only, no locale parsing."],
    contract: { format: "oeste.component.v1", component: "DateRangePicker", props: { start: "string?", end: "string?", onChange: "function", label: "string", min: "string?", max: "string?", clearable: "boolean" }, a11y: { group: "fieldset + legend", error: "role=alert message + aria-invalid on End input, invalid pair never passed to onChange", keyboard: "Escape closes popover, focus returns to trigger" } },
    prompt: "Build an Oeste DateRangePicker: a fieldset + legend holding two DatePickers (Start, End, clearable false) plus one range Clear button. Changing Start or End calls onChange with the new pair. When end is before start, show an error message (role=alert) and set aria-invalid on the End input; do NOT call onChange with the invalid pair, keep the last valid pair. A stale error clears when the parent passes a new pair. Same-day ranges are valid. Clear calls onChange({ start: null, end: null }). ISO strings only, no locale parsing. Use Topanga tokens: danger #A83E22 (light) / #E07A52 (dark) for the error text.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/date-range-picker.json",
    code: "import { DateRangePicker } from \"@/components/ui/date-range-picker\";\n\nexport function Trip() {\n  const [range, setRange] = React.useState({ start: \"2026-10-01\", end: \"2026-10-15\" });\n  return <DateRangePicker start={range.start} end={range.end} onChange={setRange} label=\"Trip dates\" />;\n}" },
  { id: "chart", name: "Chart", tagline: "Bar, line, area, pie, donut. One series, SVG + data table.",
    anatomy: ["SVG chart (bars, line, area, or slices)", "Value axis (ticks + gridlines, bar/line/area only)", "Category axis (labels, bar/line/area only)", "Legend (pie/donut only: swatch + label + value + percent)", "Data table (caption + Label/Value, Percent for pie/donut)"],
    props: [["type", "bar | line | area | pie | donut", "No - bar", "Chart type."], ["data", "{ label: string, value: number }[]", "Yes", "One series. Values are non-negative; negatives are treated as 0."], ["title", "string", "No", "Chart title. Used in the table caption and the SVG aria-label."], ["height", "number", "No - 240", "SVG height in px. Width is 100% via viewBox. Minimum 120."], ["showTable", "boolean", "No - true", "Render the accessible data table under the chart."]],
    keyboard: [["-", "Not interactive. No keyboard behavior. The data table is read with a screen reader; it has no focusable controls."]],
    invariants: ["One series only. No multi-series, tooltips, zoom, or animation.", "Values are non-negative. Negative values are treated as 0. Empty data, all-zero data, or a zero total (pie/donut) renders 'No data.'", "Bar/line/area share one axis system: value ticks at 0, 25%, 50%, 75%, 100% of max, rounded to a clean step. Horizontal gridlines. Category labels under each point.", "Bar: vertical bars, value label on each bar. Line: polyline + dots + value labels. Area: line + filled area under the line.", "Pie: slices proportional to values, label + percent at centroids. Donut: center hole + total in the center, plus a legend (swatch + label + value + percent).", "Slice labels sit at centroids and can crowd on tiny slices. Long category labels truncate in the SVG; the full label is always in the table.", "The SVG is role=img with a one-line summary aria-label; all shapes are aria-hidden. The semantic data table is the accessible representation. Values are in the table and on slice labels, never color alone."],
    contract: { format: "oeste.component.v1", component: "Chart", props: { type: ["bar", "line", "area", "pie", "donut"], data: "array", title: "string?", height: "number", showTable: "boolean" }, a11y: { chart: "svg role=img + aria-label, shapes aria-hidden", table: "semantic table + caption + th scope", color: "values in table + slice text labels, never color alone" } },
    prompt: "Build a Topanga Chart: one series, SVG + data table. Types bar, line, area, pie, donut. Bar/line/area share one axis system (value ticks at 0, 25%, 50%, 75%, 100% of max rounded to a clean step, horizontal gridlines, category labels). Bar has value labels on bars; line has a polyline + dots + value labels; area adds the fill under the line. Pie slices are proportional with label + percent at centroids; donut adds a center hole + total in the center, plus a legend (swatch + label + value + percent). The SVG is role=img with a one-line summary aria-label, shapes aria-hidden; the semantic data table (caption + th scope, Percent column for pie/donut) is the accessible representation. One series only, no tooltips, zoom, or animation. Empty, all-zero, or zero-total data renders 'No data.' Use Topanga tokens: accent #C47D3B (light) / #DB914E (dark), text #1C1917 / #F5F3EF, muted #706963 / #9E968F, sage #5E6B5A / #8B9B87, rust #B85B35 / #D98A63 for the categorical palette.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/chart.json",
    code: "import { Chart } from \"@/components/ui/chart\";\n\nexport function Sales() {\n  const data = [{ label: \"Jan\", value: 42 }, { label: \"Feb\", value: 87 }, { label: \"Mar\", value: 15 }, { label: \"Apr\", value: 63 }];\n  return <Chart type=\"bar\" data={data} title=\"Sales\" />;\n}" },
  { id: "data-grid", name: "DataGrid", tagline: "Sortable, filterable, pageable data grid.",
    anatomy: ["Toolbar (Export CSV + selected count)", "Header row (sort buttons + pin toggles)", "Filter row (per-column inputs)", "Group header (collapsible, when groupBy)", "Data rows (cells + selection checkbox)", "Pagination (prev/next, page indicator, page-size selector)"],
    props: [["columns", "{ key, label, sortable?, width?, align? }[]", "Yes", "Column definitions. align is left | right | center."], ["rows", "object[]", "Yes", "Rows, keyed by column key."], ["rowKey", "string", "No - id", "Unique key field for selection and identity."], ["pageSize", "number", "No - 10", "Rows per page. Selector offers 10 / 25 / 50 / 100."], ["selectable", "boolean", "No - false", "Enables row selection with checkboxes."], ["groupBy", "string", "No", "Column key to group rows by."], ["initialSort", "{ key, direction: asc | desc }", "No", "Initial sort. Click a header to cycle asc, desc, none."]],
    keyboard: [["Tab", "Move through sort buttons, filter inputs, pin toggles, checkboxes, group toggles, pagination, and export."], ["Enter / Space", "On a sort button: cycle asc, desc, none. On a checkbox: toggle selection. On a pin toggle: pin or unpin. On a group toggle: collapse or expand."], ["Type", "Filter inputs filter that column by substring, case-insensitive."], ["Arrow keys", "Not implemented. Every control is a Tab stop. No roving tabindex, no arrow-key cell movement."]],
    invariants: ["Semantic table: caption with row count, thead, tbody, th scope col, first column th scope row. No role=grid.", "Sort: button in th cycles asc, desc, none; aria-sort on th. Only columns with sortable !== false sort.", "Filter: per-column text input in the filter row, substring match, case-insensitive. Filtering resets to page 1.", "Pagination: prev/next, Page X of Y, page-size selector 10 / 25 / 50 / 100. Only the current page renders (pagination is the virtualization). Pagination resets to page 1 when sort, filter, or grouping change.", "Selection (selectable): checkbox column, header select-all, aria-selected on rows, N selected count (aria-live polite). Selection persists across pages.", "Pinning: pin toggle in th, aria-pressed, pinned columns render first with position sticky left. At least one column stays unpinned.", "Grouping (groupBy): filter, then group, then sort within groups. Group header button with aria-expanded + count. Collapsed groups hide their rows but still occupy page slots; expand a group to see its rows. Grouping changes reset to page 1.", "CSV export: Export CSV downloads the filtered + sorted set (before pagination) as a .csv file, commas/quotes/newlines escaped.", "Selected rows: check + accent wash + aria-selected, never color alone.", "Editorial spacing: 16px cell padding, 44px min touch on every control, precision hairlines. Topanga tokens only."],
    contract: { format: "oeste.component.v1", component: "DataGrid", props: { columns: "array", rows: "array", rowKey: "string", pageSize: "number", selectable: "boolean", groupBy: "string?", initialSort: "object?" }, a11y: { table: "semantic table + caption + th scope, no role=grid", sort: "button in th + aria-sort", filter: "input + aria-label", select: "checkbox + aria-selected", group: "button + aria-expanded", pin: "button + aria-pressed", keyboard: "Tab + Enter/Space only, no arrow keys" } },
    prompt: "Build a Topanga DataGrid: semantic table with caption, sort buttons in th with aria-sort cycling asc, desc, none, per-column filter inputs in a filter row, pagination with Page X of Y + page-size 10/25/50/100 (only the current page renders), selectable checkboxes with aria-selected + N selected count, pin toggles with aria-pressed (pinned columns render first, sticky left, at least one column stays unpinned), collapsible group headers with aria-expanded + count (collapsed groups hide their rows but still occupy page slots), grouping changes reset to page 1, CSV export of the filtered + sorted set. Selected rows use a check + accent wash + aria-selected, never color alone. Pagination is the virtualization; do not claim a separate virtualized scroll window. Semantic table, no role=grid, no roving tabindex, arrow keys not implemented. Editorial spacing: 16px cell padding, 44px min touch on every control, precision hairlines. Use Topanga tokens: accent #C47D3B (light) / #DB914E (dark), text #1C1917 / #F5F3EF, muted #706963 / #9E968F.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/data-grid.json",
    code: "import { DataGrid } from \"@/components/ui/data-grid\";\n\nexport function Grid() {\n  const columns = [{ key: \"name\", label: \"Name\", sortable: true }, { key: \"status\", label: \"Status\" }];\n  const rows = [{ id: \"1\", name: \"Item A\", status: \"Open\" }, { id: \"2\", name: \"Item B\", status: \"Done\" }];\n  return <DataGrid columns={columns} rows={rows} selectable />;\n}" }
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
    + '<span class="avatar" title="Alex Rivera"><span data-avatar-fallback aria-hidden="true">AR</span><img data-avatar-img src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2744%27 height=%2744%27%3E%3Crect width=%2744%27 height=%2744%27 fill=%27%23C47D3B%27/%3E%3C/svg%3E" alt="Alex Rivera" style="display:none"></span>'
    + '<span class="avatar avatar-lg" title="Sam Chen"><span>SC</span></span></div>'
    + '<button type="button" class="btn btn-secondary" style="margin-top:16px" data-avatar-toggle>Show photo</button></div>';
  if (c.id === "separator") return '<div class="demo"><p class="demo-caption">Hairlines, horizontal and vertical.</p><p style="margin:0">First section.</p><hr class="separator-h" aria-hidden="true"><p style="margin:0">Second section.</p>'
    + '<div style="display:flex;gap:16px;align-items:center;margin-top:16px"><span>Left</span><span class="separator-v" aria-hidden="true"></span><span>Right</span></div></div>';
  if (c.id === "slider") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Arrow keys step by 1.</p><div class="field" style="max-width:420px"><label for="demoSlider">Volume</label><input id="demoSlider" class="slider" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40 percent"><p class="muted" id="demoSliderOut" aria-live="polite">Volume: 40%</p></div></div>';
  if (c.id === "tooltip") return '<div class="demo"><p class="demo-caption">Hover or Tab to the button. Escape dismisses.</p><span class="tooltip-wrap"><button type="button" class="btn btn-primary" data-tooltip-trigger aria-describedby="demoTooltip">Save</button><span class="tooltip-bubble" role="tooltip" id="demoTooltip" hidden>Saves to this project.</span></span></div>';
  if (c.id === "popover") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Escape or outside click closes.</p><span class="popover-wrap"><button type="button" class="btn btn-primary" data-popover-trigger aria-expanded="false" aria-controls="demoPopover">Details</button><div class="popover-panel" id="demoPopover" hidden><p style="margin:0 0 8px"><strong>Project details</strong></p><p style="margin:0" class="muted">Topanga theme, 35 components.</p></div></span></div>';
  if (c.id === "dropdown-menu") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Enter opens, arrows move, Escape closes.</p><span class="dropdown-wrap"><button type="button" class="btn btn-primary" data-menu-trigger aria-haspopup="menu" aria-expanded="false" aria-controls="demoDropdown">Actions</button><ul class="dropdown-menu" role="menu" id="demoDropdown" aria-label="Project actions" hidden><li><button type="button" role="menuitem" data-menu-item>Rename</button></li><li><button type="button" role="menuitem" data-menu-item>Duplicate</button></li><li><button type="button" role="menuitem" data-menu-item>Archive</button></li></ul></span><p class="muted" id="demoMenuOut" aria-live="polite" style="margin-top:12px"></p></div>';
  if (c.id === "toggle") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><button type="button" class="toggle-btn" data-demo-toggle aria-pressed="false">Bold</button><p class="muted" id="demoToggleOut" aria-live="polite" style="margin-top:12px">Bold: off</p></div>';
  if (c.id === "collapsible") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><button type="button" class="collapsible-trigger" data-collapsible-trigger aria-expanded="false" aria-controls="demoCollapsiblePanel">Show details <span aria-hidden="true">+</span></button><div id="demoCollapsiblePanel" hidden><p style="margin:12px 0 0">Topanga theme, 35 components. One trigger, one panel.</p></div></div>';
  if (c.id === "skeleton") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Load the content to replace the skeleton.</p><div id="demoSkeletonWrap" aria-busy="true" aria-label="Loading project"><div class="skeleton" style="height:20px;width:60%;margin-bottom:12px"></div><div class="skeleton" style="height:16px;width:100%;margin-bottom:8px"></div><div class="skeleton" style="height:16px;width:80%"></div></div><button type="button" class="btn btn-secondary" style="margin-top:16px" data-skeleton-load>Load content</button></div>';
  if (c.id === "label") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Click the label — focus moves to the input.</p><div class="field" style="max-width:420px"><label for="demoLabelInput">Project name <span aria-hidden="true">*</span> <span class="muted">(required)</span></label><input id="demoLabelInput" type="text" aria-required="true" placeholder="Topanga"></div></div>';
  if (c.id === "breadcrumb") return '<div class="demo"><p class="demo-caption">Real navigation. Current page is not a link.</p><nav class="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="#/home">Home</a></li><li><a href="#/components/button">Components</a></li><li><a href="#/components/avatar">Avatar</a></li><li aria-current="page">Breadcrumb</li></ol></nav></div>';
  if (c.id === "pagination") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Pick a page.</p><nav class="pagination" aria-label="Pagination"><button type="button" class="page-btn" data-page-prev disabled>Previous</button><button type="button" class="page-btn" data-page-num aria-current="page">1</button><button type="button" class="page-btn" data-page-num>2</button><button type="button" class="page-btn" data-page-num>3</button><span aria-hidden="true">…</span><button type="button" class="page-btn" data-page-num>9</button><button type="button" class="page-btn" data-page-next>Next</button></nav><p class="muted" id="demoPageOut" aria-live="polite" style="margin-top:12px">Page 1 of 9</p></div>';
  if (c.id === "table") return '<div class="demo"><p class="demo-caption">Semantic table. Caption describes it; headers carry scope.</p><div style="overflow-x:auto"><table class="data-table"><caption>Topanga tokens — light values</caption><thead><tr><th scope="col">Token</th><th scope="col">Light</th><th scope="col">Use</th></tr></thead><tbody><tr><th scope="row">accent</th><td><code>#C47D3B</code></td><td>Primary actions</td></tr><tr><th scope="row">danger</th><td><code>#A83E22</code></td><td>Errors</td></tr></tbody></table></div></div>';
  if (c.id === "empty-state") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><div class="empty-state"><p class="empty-state-icon" aria-hidden="true">○</p><h3 style="margin:12px 0 8px">No projects yet</h3><p class="muted" style="margin:0 0 16px">Create your first project to see it here.</p><button type="button" class="btn btn-primary" data-empty-action>New project</button></div></div>';
  if (c.id === "calendar") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><div style="width:100%;max-width:384px"><div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:12px"><button type="button" class="btn btn-secondary" aria-label="Previous month">‹</button><div aria-live="polite" style="font-size:16px;font-weight:600;letter-spacing:-0.025em">October 2026</div><button type="button" class="btn btn-secondary" aria-label="Next month">›</button></div><table class="cal-grid" style="width:100%;border-collapse:collapse;margin-top:4px"><thead><tr><th scope="col" style="padding:12px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-muted)">Su</th><th scope="col" style="padding:12px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-muted)">Mo</th><th scope="col" style="padding:12px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-muted)">Tu</th><th scope="col" style="padding:12px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-muted)">We</th><th scope="col" style="padding:12px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-muted)">Th</th><th scope="col" style="padding:12px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-muted)">Fr</th><th scope="col" style="padding:12px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-muted)">Sa</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 1, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">1</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 2, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">2</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 3, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">3</button></td></tr><tr><td style="padding:4px;text-align:center"><button type="button" aria-label="October 4, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">4</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 5, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">5</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 6, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">6</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 7, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">7</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 8, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">8</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 9, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">9</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 10, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">10</button></td></tr><tr><td style="padding:4px;text-align:center"><button type="button" aria-label="October 11, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">11</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 12, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">12</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 13, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">13</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 14, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">14</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 15, 2026, selected" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;background:var(--color-accent);color:#1c1917;font-weight:600;border:1px solid transparent;-webkit-appearance:none;appearance:none">15</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 16, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">16</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 17, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">17</button></td></tr><tr><td style="padding:4px;text-align:center"><button type="button" aria-current="date" aria-label="October 18, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:2px solid var(--color-accent);font-weight:600;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">18</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 19, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">19</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 20, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">20</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 21, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">21</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 22, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">22</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 23, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">23</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 24, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">24</button></td></tr><tr><td style="padding:4px;text-align:center"><button type="button" aria-label="October 25, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">25</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 26, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">26</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 27, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">27</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 28, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">28</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 29, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">29</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 30, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">30</button></td><td style="padding:4px;text-align:center"><button type="button" aria-label="October 31, 2026" style="display:inline-flex;align-items:center;justify-content:center;width:100%;max-width:44px;height:44px;border-radius:999px;font-size:15px;border:1px solid transparent;color:var(--color-text);background:transparent;-webkit-appearance:none;appearance:none">31</button></td></tr></tbody></table></div></div>';
  if (c.id === "date-picker") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><div data-dp class="field" style="max-width:340px"><label for="demoDatePicker">Due date</label><div style="display:flex;gap:12px;position:relative"><input data-dp-input id="demoDatePicker" type="text" readonly value="2026-10-15" style="width:170px"><button data-dp-trigger type="button" class="btn btn-secondary" aria-label="Open calendar" aria-expanded="false">Calendar</button><div data-dp-pop hidden></div></div></div></div>';
  if (c.id === "time-picker") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><div data-tp data-tp-value="14:30" class="field" style="max-width:320px;position:relative"><label for="demoTimePicker">Start time</label><button data-tp-trigger id="demoTimePicker" type="button" class="btn btn-secondary" style="width:170px;text-align:left" aria-haspopup="listbox" aria-expanded="false">2:30 PM</button><ul data-tp-list hidden role="listbox" aria-label="Times"></ul></div></div>';
  if (c.id === "date-range-picker") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup.</p><fieldset data-dr style="border:0;margin:0;padding:0"><legend style="font-size:14px;font-weight:600;letter-spacing:-0.025em">Trip dates</legend><div style="display:flex;flex-wrap:wrap;gap:24px;margin-top:16px"><div data-dp class="field" style="max-width:260px"><label for="demoRangeStart">Start</label><div style="display:flex;gap:12px;position:relative"><input data-dp-input id="demoRangeStart" type="text" readonly value="2026-10-01"><button data-dp-trigger type="button" class="btn btn-secondary" aria-label="Open calendar" aria-expanded="false">Calendar</button><div data-dp-pop hidden></div></div></div><div data-dp class="field" style="max-width:260px"><label for="demoRangeEnd">End</label><div style="display:flex;gap:12px;position:relative"><input data-dp-input id="demoRangeEnd" type="text" readonly value="2026-10-15"><button data-dp-trigger type="button" class="btn btn-secondary" aria-label="Open calendar" aria-expanded="false">Calendar</button><div data-dp-pop hidden></div></div></div></div><p data-dr-band class="muted" style="margin-top:16px" aria-hidden="true">2026-10-01 \u2192 2026-10-15</p><p data-dr-error role="alert" hidden style="color:var(--color-danger);font-size:14px;margin-top:8px"></p><button data-dr-clear type="button" class="btn btn-secondary" style="margin-top:16px">Clear</button></fieldset></div>';
  if (c.id === "chart") return '<div class="demo"><p class="demo-caption">SVG chart plus the data table. The table is the accessible version.</p><div style="overflow-x:auto"><svg role="img" aria-label="Bar chart demo: 5 categories, values from 20 to 100." viewBox="0 0 640 240" width="100%" style="display:block;overflow:visible"><g aria-hidden="true"><line x1="40" x2="624" y1="212" y2="212" style="stroke:var(--color-border)" stroke-width="1" /><line x1="40" x2="624" y1="162" y2="162" style="stroke:var(--color-border)" stroke-width="1" /><line x1="40" x2="624" y1="112" y2="112" style="stroke:var(--color-border)" stroke-width="1" /><line x1="40" x2="624" y1="62" y2="62" style="stroke:var(--color-border)" stroke-width="1" /><line x1="40" x2="624" y1="12" y2="12" style="stroke:var(--color-border)" stroke-width="1" /><text x="34" y="216" text-anchor="end" style="fill:var(--color-muted);font-size:11px">0</text><text x="34" y="166" text-anchor="end" style="fill:var(--color-muted);font-size:11px">25</text><text x="34" y="116" text-anchor="end" style="fill:var(--color-muted);font-size:11px">50</text><text x="34" y="66" text-anchor="end" style="fill:var(--color-muted);font-size:11px">75</text><text x="34" y="16" text-anchor="end" style="fill:var(--color-muted);font-size:11px">100</text><rect x="80" y="172" width="36" height="40" style="fill:var(--color-accent)" /><rect x="197" y="132" width="36" height="80" style="fill:var(--color-accent)" /><rect x="314" y="92" width="36" height="120" style="fill:var(--color-accent)" /><rect x="431" y="52" width="36" height="160" style="fill:var(--color-accent)" /><rect x="548" y="12" width="36" height="200" style="fill:var(--color-accent)" /><text x="98" y="167" text-anchor="middle" style="fill:var(--color-text);font-size:12px;font-weight:600">20</text><text x="215" y="127" text-anchor="middle" style="fill:var(--color-text);font-size:12px;font-weight:600">40</text><text x="332" y="87" text-anchor="middle" style="fill:var(--color-text);font-size:12px;font-weight:600">60</text><text x="449" y="47" text-anchor="middle" style="fill:var(--color-text);font-size:12px;font-weight:600">80</text><text x="566" y="7" text-anchor="middle" style="fill:var(--color-text);font-size:12px;font-weight:600">100</text><text x="98" y="230" text-anchor="middle" style="fill:var(--color-text);font-size:12px;font-weight:600">A</text><text x="215" y="230" text-anchor="middle" style="fill:var(--color-text);font-size:12px;font-weight:600">B</text><text x="332" y="230" text-anchor="middle" style="fill:var(--color-text);font-size:12px;font-weight:600">C</text><text x="449" y="230" text-anchor="middle" style="fill:var(--color-text);font-size:12px;font-weight:600">D</text><text x="566" y="230" text-anchor="middle" style="fill:var(--color-text);font-size:12px;font-weight:600">E</text></g></svg></div><table class="data-table" style="margin-top:16px"><caption style="font-weight:600">Bar chart demo. The table lists every value shown in the chart.</caption><thead><tr><th scope="col" style="padding:12px 16px;text-align:left;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">Label</th><th scope="col" style="padding:12px 16px;text-align:left;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">Value</th></tr></thead><tbody><tr><th scope="row" style="padding:12px 16px;font-weight:500">A</th><td style="padding:12px 16px">20</td></tr><tr><th scope="row" style="padding:12px 16px;font-weight:500">B</th><td style="padding:12px 16px">40</td></tr><tr><th scope="row" style="padding:12px 16px;font-weight:500">C</th><td style="padding:12px 16px">60</td></tr><tr><th scope="row" style="padding:12px 16px;font-weight:500">D</th><td style="padding:12px 16px">80</td></tr><tr><th scope="row" style="padding:12px 16px;font-weight:500">E</th><td style="padding:12px 16px">100</td></tr></tbody></table></div>';
  if (c.id === "data-grid") return '<div class="demo"><p class="demo-caption">Real controls. Not a mockup. Sort, filter, page, select, export over 12 rows.</p>'
    + '<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:16px"><button type="button" class="btn btn-secondary" data-grid-export>Export CSV</button><p aria-live="polite" data-grid-selected class="muted" style="margin:0">0 selected</p></div>'
    + '<div style="overflow-x:auto"><table class="data-table" style="width:100%;border-collapse:collapse"><caption style="text-align:left;padding:12px 16px" class="muted">Data grid demo. Sort with the header buttons, filter with the filter row, page with the pagination controls.</caption>'
    + '<thead><tr><th scope="col" style="padding:16px;border-bottom:1px solid var(--color-border);text-align:left"><input type="checkbox" data-grid-select-all aria-label="Select all rows"></th>'
    + '<th scope="col" data-grid-th="name" aria-sort="none" style="padding:16px;border-bottom:1px solid var(--color-border);text-align:left"><button type="button" data-grid-sort="name" style="background:none;border:0;padding:0;min-height:44px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text);cursor:pointer;text-align:left">Name</button></th>'
    + '<th scope="col" data-grid-th="status" aria-sort="none" style="padding:16px;border-bottom:1px solid var(--color-border);text-align:left"><button type="button" data-grid-sort="status" style="background:none;border:0;padding:0;min-height:44px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text);cursor:pointer;text-align:left">Status</button></th>'
    + '<th scope="col" data-grid-th="score" aria-sort="none" style="padding:16px;border-bottom:1px solid var(--color-border);text-align:left"><button type="button" data-grid-sort="score" style="background:none;border:0;padding:0;min-height:44px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text);cursor:pointer;text-align:left">Score</button></th></tr>'
    + '<tr><td style="padding:12px 16px;border-bottom:1px solid var(--color-border)"></td>'
    + '<td style="padding:12px 16px;border-bottom:1px solid var(--color-border)"><input type="text" data-grid-filter="name" placeholder="Filter Name" aria-label="Filter Name" style="width:100%;min-height:44px;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);padding:12px;font-size:14px"></td>'
    + '<td style="padding:12px 16px;border-bottom:1px solid var(--color-border)"><input type="text" data-grid-filter="status" placeholder="Filter Status" aria-label="Filter Status" style="width:100%;min-height:44px;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);padding:12px;font-size:14px"></td>'
    + '<td style="padding:12px 16px;border-bottom:1px solid var(--color-border)"><input type="text" data-grid-filter="score" placeholder="Filter Score" aria-label="Filter Score" style="width:100%;min-height:44px;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);padding:12px;font-size:14px"></td></tr></thead>'
    + '<tbody data-grid-body></tbody></table></div>'
    + '<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:16px"><button type="button" class="btn btn-secondary" data-grid-prev>Previous</button><span data-grid-page class="muted">Page 1 of 3</span><button type="button" class="btn btn-secondary" data-grid-next>Next</button></div></div>';
  return "";
}

function variantsHTML(c) {
  const row = (label, inner) => '<div class="variant-row"><span class="variant-label">' + label + '</span><div class="variant-demos">' + inner + "</div></div>";
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

/* Picker demo wiring: the DatePicker, TimePicker, and DateRangePicker demos
   are live controls. Each [data-dp] unit gets a popover month calendar built
   by JS; each [data-tp] unit gets a listbox. Open popovers portal to
   document.body (position fixed) so no ancestor stacking context can trap
   them behind later page sections; each [data-dr] fieldset
   coordinates two units plus a range band, a Clear button, and an
   end-before-start alert. Day styling mirrors the real Calendar component:
   44px circles, accent fill for the selected day, accent ring for today. */
var DP_MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var DP_WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var DP_STYLE = {
  range: false,
  card: "background:var(--color-surface);border:1px solid var(--color-border);border-radius:12px;padding:12px;width:340px;max-width:calc(100vw - 48px);box-shadow:0 12px 32px rgba(0,0,0,0.16);",
  headBtn: "background:transparent;border:0;min-width:44px;min-height:44px;font-size:20px;line-height:1;color:var(--color-text);cursor:pointer;border-radius:8px;",
  headLabel: "font-size:16px;font-weight:600;letter-spacing:-0.025em;color:var(--color-text);",
  th: "padding:12px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-muted);",
  td: "padding:4px;text-align:center;",
  day: "margin:0 auto;display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:9999px;font-size:15px;border:1px solid transparent;background:transparent;color:var(--color-text);cursor:pointer;",
  daySelected: "background:var(--color-accent);color:var(--color-on-accent);font-weight:600;",
  dayInRange: "",
  dayToday: "border:2px solid var(--color-accent);font-weight:600;",
  footBtn: "min-height:44px;padding:0 16px;border:1px solid var(--color-border);border-radius:8px;background:transparent;color:var(--color-text);font-size:14px;cursor:pointer;",
  list: "background:var(--color-surface);border:1px solid var(--color-border);border-radius:12px;padding:8px;max-height:240px;overflow:auto;width:220px;box-shadow:0 12px 32px rgba(0,0,0,0.16);list-style:none;margin:4px 0 0;",
  optBtn: "display:block;width:100%;text-align:left;background:transparent;border:0;min-height:44px;padding:0 12px;font-size:14px;color:var(--color-text);cursor:pointer;border-radius:8px;",
  optSel: "background:var(--color-accent);color:var(--color-on-accent);font-weight:600;"
};
function dpParseISO(s) {
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || "");
  if (!m) return null;
  var y = +m[1], mo = +m[2], d = +m[3];
  var dt = new Date(y, mo - 1, d);
  if (dt.getFullYear() !== y || dt.getMonth() !== mo - 1 || dt.getDate() !== d) return null;
  return { y: y, m: mo, d: d };
}
function dpISO(y, m, d) {
  return y + "-" + String(m).padStart(2, "0") + "-" + String(d).padStart(2, "0");
}
function dpTodayISO() {
  var t = new Date();
  return dpISO(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
function tpLabel(hh, mm) {
  var ap = hh < 12 ? "AM" : "PM";
  var h12 = hh % 12;
  if (h12 === 0) h12 = 12;
  return h12 + ":" + String(mm).padStart(2, "0") + " " + ap;
}
function dpRenderPop(unit) {
  var pop = unit._dpPop;
  var input = unit.querySelector("[data-dp-input]");
  if (!pop || !input) return;
  var st = unit._dpState;
  var r = (unit.getAttribute("data-dp-range") || "").split(":");
  var validRange = DP_STYLE.range && dpParseISO(r[0]) && dpParseISO(r[1]) && r[0] <= r[1];
  var first = new Date(st.y, st.m - 1, 1).getDay();
  var dim = new Date(st.y, st.m, 0).getDate();
  var today = dpTodayISO();
  var html = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">'
    + '<button type="button" data-dp-prev aria-label="Previous month" style="' + DP_STYLE.headBtn + '">\u2039</button>'
    + '<div aria-live="polite" style="' + DP_STYLE.headLabel + '">' + DP_MONTHS[st.m - 1] + " " + st.y + "</div>"
    + '<button type="button" data-dp-next aria-label="Next month" style="' + DP_STYLE.headBtn + '">\u203a</button></div>';
  html += '<table style="width:100%;border-collapse:collapse"><thead><tr>';
  DP_WEEKDAYS.forEach(function (wd) { html += '<th scope="col" style="' + DP_STYLE.th + '">' + wd + "</th>"; });
  html += "</tr></thead><tbody><tr>";
  var cell = 0, d, iso, label, sel, rng, isToday, ds;
  for (d = 0; d < first; d++) { html += "<td></td>"; cell++; }
  for (d = 1; d <= dim; d++) {
    if (cell % 7 === 0 && cell > 0) html += "</tr><tr>";
    iso = dpISO(st.y, st.m, d);
    label = DP_MONTHS[st.m - 1] + " " + d + ", " + st.y;
    sel = input.value === iso;
    rng = validRange && iso >= r[0] && iso <= r[1];
    if (sel) label += ", selected";
    else if (rng) label += ", in range";
    isToday = iso === today;
    ds = DP_STYLE.day + (sel ? DP_STYLE.daySelected : "") + (!sel && rng ? DP_STYLE.dayInRange : "") + (isToday && !sel ? DP_STYLE.dayToday : "");
    html += '<td style="' + DP_STYLE.td + '"><button type="button" data-dp-day="' + iso + '"'
      + (isToday ? ' aria-current="date"' : "") + ' aria-label="' + label + '" style="' + ds + '">' + d + "</button></td>";
    cell++;
  }
  while (cell % 7 !== 0) { html += "<td></td>"; cell++; }
  html += "</tr></tbody></table>";
  html += '<div style="display:flex;gap:8px;margin-top:8px">'
    + (input.value ? '<button type="button" data-dp-clear style="' + DP_STYLE.footBtn + '">Clear</button>' : "")
    + '<button type="button" data-dp-today style="' + DP_STYLE.footBtn + '">Today</button></div>';
  pop.innerHTML = html;
}
var __dpN = 0;
var __dpPortals = [];
function bindPickerDemos() {
  __dpPortals.forEach(function (p) { if (p.parentNode) p.parentNode.removeChild(p); });
  __dpPortals = [];
  document.querySelectorAll("[data-dp]").forEach(function (unit) {
    var trigger = unit.querySelector("[data-dp-trigger]");
    var pop = unit.querySelector("[data-dp-pop]");
    var input = unit.querySelector("[data-dp-input]");
    if (!trigger || !pop || !input) return;
    unit._dpPop = pop;
    pop._dpUnit = unit;
    pop._dpHome = pop.parentNode;
    __dpN++;
    pop.id = "dp-pop-" + __dpN;
    trigger.setAttribute("aria-controls", pop.id);
    pop.style.cssText = DP_STYLE.card;
    var parsed = dpParseISO(input.value);
    var now = new Date();
    unit._dpState = { y: parsed ? parsed.y : now.getFullYear(), m: parsed ? parsed.m : now.getMonth() + 1 };
    unit._dpOpen = false;
    var setOpen = function (v) {
      if (v) {
        var pv = dpParseISO(input.value);
        if (pv) unit._dpState = { y: pv.y, m: pv.m };
        dpRenderPop(unit);
        pop.hidden = false;
        pop.style.position = "fixed";
        pop.style.zIndex = "90";
        pop.style.visibility = "hidden";
        document.body.appendChild(pop);
        if (__dpPortals.indexOf(pop) === -1) __dpPortals.push(pop);
        var r = trigger.getBoundingClientRect();
        var h = pop.offsetHeight || 420;
        var w = pop.offsetWidth || 340;
        var top = (r.bottom + 4 + h <= window.innerHeight) ? r.bottom + 4 : Math.max(8, r.top - h - 4);
        var left = Math.max(8, Math.min(r.left, window.innerWidth - w - 8));
        pop.style.top = top + "px";
        pop.style.left = left + "px";
        pop.style.visibility = "";
      } else {
        pop.hidden = true;
        pop.style.position = "";
        pop.style.zIndex = "";
        pop.style.top = "";
        pop.style.left = "";
        pop.style.visibility = "";
        if (pop._dpHome) pop._dpHome.appendChild(pop);
      }
      trigger.setAttribute("aria-expanded", String(v));
      trigger.setAttribute("aria-label", v ? "Close calendar" : "Open calendar");
      unit._dpOpen = v;
    };
    unit._dpSetOpen = setOpen;
    unit._dpRender = function () { if (unit._dpOpen) dpRenderPop(unit); };
    var pick = function (iso) {
      input.value = iso;
      var p = dpParseISO(iso);
      if (p) unit._dpState = { y: p.y, m: p.m };
      if (unit._dpOnPick) unit._dpOnPick(iso);
      setOpen(false);
      trigger.focus();
    };
    trigger.addEventListener("click", function () { setOpen(!unit._dpOpen); });
    pop.addEventListener("click", function (e) {
      var t = e.target;
      if (t.closest("[data-dp-prev]") || t.closest("[data-dp-next]")) {
        var st = unit._dpState;
        var m = st.m + (t.closest("[data-dp-prev]") ? -1 : 1), y = st.y;
        if (m < 1) { m = 12; y--; }
        if (m > 12) { m = 1; y++; }
        unit._dpState = { y: y, m: m };
        dpRenderPop(unit);
        return;
      }
      var day = t.closest("[data-dp-day]");
      if (day) { pick(day.getAttribute("data-dp-day")); return; }
      if (t.closest("[data-dp-clear]")) { pick(""); return; }
      if (t.closest("[data-dp-today]")) { pick(dpTodayISO()); return; }
    });
    var dpEsc = function (e) {
      if (e.key === "Escape" && unit._dpOpen) { setOpen(false); trigger.focus(); }
    };
    unit.addEventListener("keydown", dpEsc);
    pop.addEventListener("keydown", dpEsc);
  });
  document.querySelectorAll("[data-tp]").forEach(function (unit) {
    var trigger = unit.querySelector("[data-tp-trigger]");
    var list = unit.querySelector("[data-tp-list]");
    if (!trigger || !list) return;
    unit._tpList = list;
    list._tpUnit = unit;
    list._tpHome = list.parentNode;
    __dpN++;
    list.id = "tp-list-" + __dpN;
    trigger.setAttribute("aria-controls", list.id);
    list.style.cssText = DP_STYLE.list;
    if (!list.children.length) {
      var html = "", m, hh, mm, iso;
      for (m = 0; m < 24 * 60; m += 30) {
        hh = Math.floor(m / 60); mm = m % 60;
        iso = String(hh).padStart(2, "0") + ":" + String(mm).padStart(2, "0");
        html += '<li role="option" data-tp-opt="' + iso + '" aria-selected="false">'
          + '<button type="button" data-tp-pick="' + iso + '" style="' + DP_STYLE.optBtn + '">' + tpLabel(hh, mm) + "</button></li>";
      }
      list.innerHTML = html;
    }
    unit._tpOpen = false;
    var setOpen = function (v) {
      if (v) {
        list.hidden = false;
        list.style.position = "fixed";
        list.style.zIndex = "90";
        list.style.visibility = "hidden";
        document.body.appendChild(list);
        if (__dpPortals.indexOf(list) === -1) __dpPortals.push(list);
        var r = trigger.getBoundingClientRect();
        var h = list.offsetHeight || 240;
        var w = list.offsetWidth || 220;
        var top = (r.bottom + 4 + h <= window.innerHeight) ? r.bottom + 4 : Math.max(8, r.top - h - 4);
        var left = Math.max(8, Math.min(r.left, window.innerWidth - w - 8));
        list.style.top = top + "px";
        list.style.left = left + "px";
        list.style.visibility = "";
      } else {
        list.hidden = true;
        list.style.position = "";
        list.style.zIndex = "";
        list.style.top = "";
        list.style.left = "";
        list.style.visibility = "";
        if (list._tpHome) list._tpHome.appendChild(list);
      }
      trigger.setAttribute("aria-expanded", String(v));
      unit._tpOpen = v;
    };
    unit._tpSetOpen = setOpen;
    var markSelected = function (iso) {
      list.querySelectorAll('[role="option"]').forEach(function (o) {
        var on = o.getAttribute("data-tp-opt") === iso;
        o.setAttribute("aria-selected", String(on));
        var b = o.querySelector("[data-tp-pick]");
        if (b) b.style.cssText = DP_STYLE.optBtn + (on ? DP_STYLE.optSel : "");
      });
    };
    trigger.addEventListener("click", function () { setOpen(!unit._tpOpen); });
    list.addEventListener("click", function (e) {
      var b = e.target.closest("[data-tp-pick]");
      if (!b) return;
      var iso = b.getAttribute("data-tp-pick");
      unit.setAttribute("data-tp-value", iso);
      trigger.textContent = b.textContent;
      markSelected(iso);
      setOpen(false);
      trigger.focus();
    });
    var tpEsc = function (e) {
      if (e.key === "Escape" && unit._tpOpen) { setOpen(false); trigger.focus(); }
    };
    unit.addEventListener("keydown", tpEsc);
    list.addEventListener("keydown", tpEsc);
    markSelected(unit.getAttribute("data-tp-value") || "");
  });
  document.querySelectorAll("[data-dr]").forEach(function (dr) {
    var units = dr.querySelectorAll("[data-dp]");
    if (units.length < 2) return;
    var sU = units[0], eU = units[1];
    var sI = sU.querySelector("[data-dp-input]");
    var eI = eU.querySelector("[data-dp-input]");
    var band = dr.querySelector("[data-dr-band]");
    var errBox = dr.querySelector("[data-dr-error]");
    var clearBtn = dr.querySelector("[data-dr-clear]");
    if (!sI || !eI) return;
    var sync = function () {
      var s = sI.value, e = eI.value;
      sU.setAttribute("data-dp-range", s + ":" + e);
      eU.setAttribute("data-dp-range", s + ":" + e);
      if (band) band.textContent = s && e ? s + " \u2192 " + e : "No range selected.";
      var bad = !!(s && e && e < s);
      if (errBox) {
        errBox.hidden = !bad;
        if (bad) errBox.textContent = "End date is before the start date.";
      }
      eI.setAttribute("aria-invalid", String(bad));
      sU._dpRender();
      eU._dpRender();
    };
    sU._dpOnPick = sync;
    eU._dpOnPick = sync;
    if (clearBtn) clearBtn.addEventListener("click", function () {
      sI.value = ""; eI.value = ""; sync();
    });
    sync();
  });
}
function bindPickerDocOnce() {
  if (window.__dpDocBound) return;
  window.__dpDocBound = true;
  document.addEventListener("mousedown", function (e) {
    document.querySelectorAll("[data-dp-pop]").forEach(function (pop) {
      if (pop.hidden) return;
      var unit = pop._dpUnit;
      if (unit && !unit.contains(e.target) && !pop.contains(e.target) && unit._dpSetOpen) unit._dpSetOpen(false);
    });
    document.querySelectorAll("[data-tp-list]").forEach(function (list) {
      if (list.hidden) return;
      var unit = list._tpUnit;
      if (unit && !unit.contains(e.target) && !list.contains(e.target) && unit._tpSetOpen) unit._tpSetOpen(false);
    });
  });
  var closeOnScroll = function (e) {
    var t = e && e.target;
    document.querySelectorAll("[data-dp-pop]").forEach(function (pop) {
      if (pop.hidden || (t && pop.contains(t))) return;
      var unit = pop._dpUnit;
      if (unit && unit._dpSetOpen) unit._dpSetOpen(false);
    });
    document.querySelectorAll("[data-tp-list]").forEach(function (list) {
      if (list.hidden || (t && list.contains(t))) return;
      var unit = list._tpUnit;
      if (unit && unit._tpSetOpen) unit._tpSetOpen(false);
    });
  };
  document.addEventListener("scroll", closeOnScroll, true);
  window.addEventListener("resize", function () { closeOnScroll({ target: null }); });
}

function bindDemos() {
  bindPickerDemos();
  bindPickerDocOnce();
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
    const fallback = document.querySelector("[data-avatar-fallback]");
    const showing = img.style.display !== "none";
    img.style.display = showing ? "none" : "block";
    fallback.style.display = showing ? "" : "none";
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
    const show = () => {
      bubble.hidden = false;
      const triggerRect = tipTrigger.getBoundingClientRect();
      const bubbleWidth = bubble.getBoundingClientRect().width;
      const margin = 8;
      const center = triggerRect.left + triggerRect.width / 2;
      const half = bubbleWidth / 2;
      let shift = 0;
      if (center - half < margin) shift = margin - (center - half);
      else if (center + half > window.innerWidth - margin) shift = (window.innerWidth - margin) - (center + half);
      bubble.style.transform = "translateX(calc(-50% + " + shift + "px))";
    };
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
  // DataGrid demo: sort, filter, paginate, select, export over 12 rows.
  const gridBody = document.querySelector("[data-grid-body]");
  if (gridBody) {
    const gCols = ["name", "status", "score"];
    const gLabels = { name: "Name", status: "Status", score: "Score" };
    const gRows = [
      { id: "1", name: "Item A", status: "Open", score: 42 },
      { id: "2", name: "Item B", status: "Done", score: 87 },
      { id: "3", name: "Item C", status: "Open", score: 15 },
      { id: "4", name: "Item D", status: "Review", score: 63 },
      { id: "5", name: "Item E", status: "Done", score: 91 },
      { id: "6", name: "Item F", status: "Open", score: 28 },
      { id: "7", name: "Item G", status: "Review", score: 54 },
      { id: "8", name: "Item H", status: "Done", score: 73 },
      { id: "9", name: "Item I", status: "Open", score: 19 },
      { id: "10", name: "Item J", status: "Review", score: 68 },
      { id: "11", name: "Item K", status: "Done", score: 95 },
      { id: "12", name: "Item L", status: "Open", score: 33 },
    ];
    let gSort = null, gDir = null, gPage = 1;
    const gFilters = { name: "", status: "", score: "" };
    const gSelected = new Set();
    const PER = 5;
    const gCell = (v) => (v == null ? "" : String(v));
    function gFiltered() {
      const list = gRows.filter((r) => gCols.every((k) => {
        const f = (gFilters[k] || "").trim().toLowerCase();
        return !f || gCell(r[k]).toLowerCase().includes(f);
      }));
      if (!gSort) return list;
      const dir = gDir === "desc" ? -1 : 1;
      return [...list].sort((a, b) => {
        const x = a[gSort], y = b[gSort];
        if (typeof x === "number" && typeof y === "number") return dir * (x - y);
        return dir * String(x).localeCompare(String(y), undefined, { sensitivity: "base" });
      });
    }
    function gRender() {
      const list = gFiltered();
      const totalPages = Math.max(1, Math.ceil(list.length / PER));
      gPage = Math.min(gPage, totalPages);
      const pageRows = list.slice((gPage - 1) * PER, gPage * PER);
      gridBody.innerHTML = pageRows.map((r) => {
        const sel = gSelected.has(r.id);
        return '<tr' + (sel ? ' aria-selected="true" style="background:color-mix(in srgb, var(--color-accent) 10%, transparent)"' : '') + '><td style="padding:16px;border-bottom:1px solid var(--color-border)"><input type="checkbox" data-grid-row="' + r.id + '"' + (sel ? ' checked' : '') + ' aria-label="Select row ' + r.id + '"></td><th scope="row" style="padding:16px;border-bottom:1px solid var(--color-border);font-weight:500">' + esc(r.name) + '</th><td style="padding:16px;border-bottom:1px solid var(--color-border)">' + esc(r.status) + '</td><td style="padding:16px;border-bottom:1px solid var(--color-border)">' + esc(String(r.score)) + '</td></tr>';
      }).join("") || '<tr><td colspan="4" class="muted" style="text-align:center;padding:32px 16px">No rows match the current filters.</td></tr>';
      gCols.forEach((k) => {
        const th = document.querySelector('[data-grid-th="' + k + '"]');
        const btn = document.querySelector('[data-grid-sort="' + k + '"]');
        if (!th || !btn) return;
        const sorted = gSort === k;
        th.setAttribute("aria-sort", sorted ? (gDir === "asc" ? "ascending" : "descending") : "none");
        btn.textContent = gLabels[k] + (sorted ? (gDir === "asc" ? " \u2191" : " \u2193") : "");
      });
      const prev = document.querySelector("[data-grid-prev]");
      const next = document.querySelector("[data-grid-next]");
      const pageLabel = document.querySelector("[data-grid-page]");
      if (prev) prev.disabled = gPage <= 1;
      if (next) next.disabled = gPage >= totalPages;
      if (pageLabel) pageLabel.textContent = "Page " + gPage + " of " + totalPages;
      const selOut = document.querySelector("[data-grid-selected]");
      if (selOut) selOut.textContent = gSelected.size + " selected";
      const all = document.querySelector("[data-grid-select-all]");
      if (all) {
        const allKeys = list.map((r) => r.id);
        all.checked = allKeys.length > 0 && allKeys.every((k) => gSelected.has(k));
        all.indeterminate = allKeys.some((k) => gSelected.has(k)) && !all.checked;
      }
    }
    document.querySelectorAll("[data-grid-sort]").forEach((b) => b.addEventListener("click", () => {
      const key = b.dataset.gridSort;
      if (gSort !== key) { gSort = key; gDir = "asc"; }
      else if (gDir === "asc") { gDir = "desc"; }
      else { gSort = null; gDir = null; }
      gPage = 1; gRender();
    }));
    document.querySelectorAll("[data-grid-filter]").forEach((inp) => inp.addEventListener("input", () => {
      gFilters[inp.dataset.gridFilter] = inp.value;
      gPage = 1; gRender();
    }));
    const prevBtn = document.querySelector("[data-grid-prev]");
    if (prevBtn) prevBtn.addEventListener("click", () => { gPage = Math.max(1, gPage - 1); gRender(); });
    const nextBtn = document.querySelector("[data-grid-next]");
    if (nextBtn) nextBtn.addEventListener("click", () => { gPage = gPage + 1; gRender(); });
    const allBox = document.querySelector("[data-grid-select-all]");
    if (allBox) allBox.addEventListener("change", () => {
      const list = gFiltered();
      if (allBox.checked) list.forEach((r) => gSelected.add(r.id)); else list.forEach((r) => gSelected.delete(r.id));
      gRender();
    });
    gridBody.addEventListener("change", (e) => {
      const box = e.target.closest("[data-grid-row]");
      if (!box) return;
      const id = box.dataset.gridRow;
      if (box.checked) gSelected.add(id); else gSelected.delete(id);
      gRender();
    });
    const expBtn = document.querySelector("[data-grid-export]");
    if (expBtn) expBtn.addEventListener("click", () => {
      const list = gFiltered();
      const csvEsc = (v) => { const s = gCell(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
      const csv = [[gLabels.name, gLabels.status, gLabels.score].map(csvEsc).join(",")].concat(list.map((r) => [r.name, r.status, r.score].map(csvEsc).join(","))).join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "data-grid-demo.csv"; a.click();
      URL.revokeObjectURL(url);
    });
    gRender();
  }
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
    + "<h1>Three libraries.<br>Three lenses.</h1>"
    + '<p class="lede">Oeste is a design system for humans, AI agents, and vibe coders. Humans design it. Agents understand it. Vibe coders ship it — from the library they pick.</p>'
    + '<div class="install-bar"><strong>Start building</strong><code>npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/button.json</code><button type="button" class="copy-btn" data-copy="npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/button.json">Copy command</button><span class="muted">Install Button via shadcn — see <a href="#/getting-started">Getting started</a>.</span></div>'
    + '<div class="home-grid"><div><h2>Three libraries. Three lenses.</h2>'
    + '<p><strong>Topanga</strong> is the first theme: the hidden canyon in Los Angeles where creatives retreat and build. A canyon is not a stage — it is shelter. That is the feeling Topanga is built to carry: warm paper like sun on a wall, canyon clay, ochre, sagebrush, and precision hairlines. Nothing shouts. Everything is placed on purpose.</p>'
    + '<p>Oeste is three libraries under one roof. Topanga, Huntington, and Mesa each have their own tokens, their own components, their own design. What they share is how they are documented. Every component is written three ways. A designer reads the anatomy. An agent reads the contract. A vibe coder copies the code and ships. Nobody has to translate for anyone else, because every library already speaks all three languages.</p></div>'
    + '<div><h2>Three lenses, every component</h2><ul><li><strong>Human</strong> — anatomy, props, keyboard, accessibility.</li><li><strong>Agent</strong> — JSON contract + copyable prompt, so agents don’t hallucinate props.</li><li><strong>Vibe</strong> — CLI + copy-paste React code, dark-mode-complete.</li></ul>'
    + '<p><a class="btn btn-primary" href="#/components">Browse components</a></p></div></div>';
}

function componentsIndexRows() {
  return "<div class=\"index-list\">" + COMPONENTS.map((c, i) => '<a class="index-row" href="#/components/' + c.id + '"><span><strong>' + esc(c.name) + '</strong><br><span class="muted">' + esc(c.tagline) + '</span></span><span class="pill">' + String(i + 1).padStart(2, "0") + " / " + String(COMPONENTS.length).padStart(2, "0") + "</span></a>").join("") + "</div>";
}

function renderComponentsIndex() {
  return '<p class="eyebrow">Library</p><h1>Components</h1><p class="lede">All ' + COMPONENTS.length + ' components, one token set, one contract format — read three ways.</p>'
    + componentsIndexRows();
}

/* Blocks: full page sections composed from the components above.
   Source of truth for compositions: src/blocks.js (BLOCK_DOCS), built
   into r/<id>.json (type registry:block) + blocks.json by scripts/build_registry.py.
   Entries here carry the docs demo + usage snippet for each block;
   id / name / tagline / uses must match BLOCK_DOCS exactly. Blocks
   carry their own count everywhere: they are not components. */
const BLOCKS = [
  { id: "announcement-bar", name: "Announcement Bar", tagline: "A slim persistent band above the navbar with one message and one action.", category: "Marketing", uses: ["badge", "button", "separator"],
    code: "import { BlockAnnouncementBar } from \"@/components/blocks/BlockAnnouncementBar\";\n\nexport function PageTop() {\n  return <BlockAnnouncementBar />;\n}\n// Variants: variant=\"standard\" drops the Dismiss button." },
  { id: "navbar", name: "Navbar", tagline: "The top bar: wordmark, section links, one action, and an account menu.", category: "Navigation", uses: ["button", "dropdown-menu", "avatar", "badge", "separator"],
    code: "import { BlockNavbar } from \"@/components/blocks/BlockNavbar\";\n\nexport function SiteHeader() {\n  return <BlockNavbar />;\n}\n// Variants: variant=\"app\" swaps the sign-in row for an account menu with a count badge." },
  { id: "hero", name: "Hero", tagline: "The opening statement: headline, lede, two actions, and one composed product panel.", category: "Marketing", uses: ["badge", "button", "card", "chart", "progress", "avatar", "separator"],
    code: "import { BlockHero } from \"@/components/blocks/BlockHero\";\n\nexport function LandingTop() {\n  return <BlockHero />;\n}\n// Variants: variant=\"centred\" drops the panel for a centred statement." },
  { id: "logo-cloud", name: "Logo Cloud", tagline: "A ruled band of customer wordmarks set as text.", category: "Marketing", uses: ["separator"],
    code: "import { BlockLogoCloud } from \"@/components/blocks/BlockLogoCloud\";\n\nexport function ProofBand() {\n  return <BlockLogoCloud />;\n}" },
  { id: "features-bento", name: "Features", tagline: "A bento grid of feature tiles led by headings, with live component insets.", category: "Marketing", uses: ["card", "badge", "chart", "progress", "table", "calendar"],
    code: "import { BlockFeaturesBento } from \"@/components/blocks/BlockFeaturesBento\";\n\nexport function Features() {\n  return <BlockFeaturesBento />;\n}" },
  { id: "stats-band", name: "Stats Band", tagline: "A ruled band of three or four labelled figures.", category: "Marketing", uses: ["separator", "badge"],
    code: "import { BlockStatsBand } from \"@/components/blocks/BlockStatsBand\";\n\nexport function ProofNumbers() {\n  return <BlockStatsBand />;\n}\n// Variants: headed adds a section header above the band." },
  { id: "pricing", name: "Pricing", tagline: "Plan cards with a billing period control and an optional comparison table.", category: "Marketing", uses: ["card", "badge", "button", "separator", "radiogroup", "table"],
    code: "import { BlockPricing } from \"@/components/blocks/BlockPricing\";\n\nexport function Pricing() {\n  return <BlockPricing />;\n}\n// Variants: variant=\"full\" adds the comparison table under the cards." },
  { id: "testimonials", name: "Testimonials", tagline: "Quote cards with initial avatars, names, and roles.", category: "Marketing", uses: ["card", "avatar", "badge"],
    code: "import { BlockTestimonials } from \"@/components/blocks/BlockTestimonials\";\n\nexport function Quotes() {\n  return <BlockTestimonials />;\n}" },
  { id: "faq", name: "FAQ", tagline: "An accordion of questions with a contact route at the foot.", category: "Marketing", uses: ["accordion", "collapsible", "separator", "button"],
    code: "import { BlockFaq } from \"@/components/blocks/BlockFaq\";\n\nexport function Questions() {\n  return <BlockFaq />;\n}\n// Variants: variant=\"compact\" renders a collapsible list for narrow columns." },
  { id: "cta", name: "CTA", tagline: "One closing ask on a single card: heading, one line, one primary action.", category: "Marketing", uses: ["card", "button", "badge"],
    code: "import { BlockCta } from \"@/components/blocks/BlockCta\";\n\nexport function ClosingAsk() {\n  return <BlockCta />;\n}" },
  { id: "footer", name: "Footer", tagline: "The closing index: link columns, a wordmark, and a legal line.", category: "Navigation", uses: ["separator", "input", "button"],
    code: "import { BlockFooter } from \"@/components/blocks/BlockFooter\";\n\nexport function SiteFooter() {\n  return <BlockFooter />;\n}\n// Variants: variant=\"newsletter\" adds the signup row to the identity zone." },
  { id: "login-auth", name: "Login", tagline: "A sign-in card with labelled fields, an error alert, and an account switch.", category: "Application", uses: ["card", "input", "checkbox", "button", "alert", "separator", "tabs"],
    code: "import { BlockLoginAuth } from \"@/components/blocks/BlockLoginAuth\";\n\nexport function SignInPage() {\n  return <BlockLoginAuth />;\n}\n// Variants: mode=\"create\" opens on the create account tab with the matching heading." },
  { id: "blog-list", name: "Blog List", tagline: "A list of text-led post cards with category tabs and pagination.", category: "Content", uses: ["card", "badge", "avatar", "tabs", "pagination", "input", "separator", "skeleton"],
    code: "import { BlockBlogList } from \"@/components/blocks/BlockBlogList\";\n\nexport function JournalIndex() {\n  return <BlockBlogList />;\n}\n// Variants: layout=\"search\" adds the labelled search field; loading shows skeleton cards." },
  { id: "empty-state-block", name: "Empty State", tagline: "A full section empty state with one clear next step.", category: "Application", uses: ["empty-state", "card", "button"],
    code: "import { BlockEmptyStateBlock } from \"@/components/blocks/BlockEmptyStateBlock\";\n\nexport function EmptyProjects() {\n  return <BlockEmptyStateBlock />;\n}\n// Variants: variant=\"no-results\" and variant=\"error\" change the copy and the action discipline." },
];

/* The Phase 1 block set (Oeste Gap Plan, 2026-10-23). Shown on the
   index as planned until each block is composed from the spec pack
   (figma-libraries/topanga/blocks-spec.md) and lands in BLOCKS. */
const PLANNED_BLOCKS = [
  { id: "announcement-bar", name: "Announcement Bar", purpose: "A slim announcement bar above the navbar." },
  { id: "navbar", name: "Navbar", purpose: "Site navigation with wordmark, links, and actions." },
  { id: "hero", name: "Hero", purpose: "A first screen: headline, supporting line, primary actions." },
  { id: "logo-cloud", name: "Logo Cloud", purpose: "A row of customer or partner marks." },
  { id: "features", name: "Features", purpose: "A feature grid with a bento layout." },
  { id: "stats-band", name: "Stats Band", purpose: "A band of headline numbers." },
  { id: "pricing", name: "Pricing", purpose: "Pricing tiers with a featured plan." },
  { id: "testimonials", name: "Testimonials", purpose: "Quotes from customers, with names and roles." },
  { id: "faq", name: "FAQ", purpose: "Frequently asked questions in an accordion." },
  { id: "blog-list", name: "Blog List", purpose: "A list of article cards with dates and excerpts." },
  { id: "login", name: "Login", purpose: "A sign in and sign up card." },
  { id: "empty-state", name: "Empty State", purpose: "A page-level empty state with guidance and next steps." },
  { id: "cta", name: "CTA", purpose: "A closing call to action band." },
  { id: "footer", name: "Footer", purpose: "A full site footer with link columns." },
];

/* Block demos are static HTML strings in the same spirit as the
   component demos: real markup with the site's component classes,
   wired by bindDemos() where a block is interactive. Filled per block
   at compose time, from the spec pack. */
function blkBars(data, label) {
  const max = Math.max.apply(null, data.map((d) => d[1]));
  const w = 320, h = 120, base = 100, bw = 28, gap = (w - data.length * bw) / (data.length + 1);
  let rects = "", labels = "";
  data.forEach((d, i) => {
    const bh = Math.round((d[1] / max) * 84);
    const x = Math.round(gap + i * (bw + gap));
    rects += '<rect x="' + x + '" y="' + (base - bh) + '" width="' + bw + '" height="' + bh + '" style="fill:var(--color-accent)"></rect>';
    labels += '<text x="' + (x + bw / 2) + '" y="116" text-anchor="middle" style="fill:var(--color-muted);font-size:10px">' + d[0] + "</text>";
  });
  const rows = data.map((d) => "<tr><th scope=\"row\">" + d[0] + "</th><td>" + d[1] + "</td></tr>").join("");
  return '<svg role="img" aria-label="' + esc(label) + '" viewBox="0 0 ' + w + ' ' + h + '" width="100%" style="display:block" aria-hidden="false"><line x1="0" x2="' + w + '" y1="' + base + '" y2="' + base + '" style="stroke:var(--color-border)" stroke-width="1"></line>' + rects + labels + "</svg>"
    + '<table class="sr-only"><caption>' + esc(label) + "</caption><tbody>" + rows + "</tbody></table>";
}

function blkDemoAnnouncementBar() {
  return '<div class="blk-announce" data-blk-announce>'
    + '<div class="blk-announce-in"><span class="badge badge-accent">New</span>'
    + "<p>Fieldbook 2.0 is here: project pages now load twice as fast.</p>"
    + '<span class="blk-announce-actions"><button type="button" class="btn btn-ghost btn-sm">See what changed</button>'
    + '<button type="button" class="btn btn-ghost btn-sm" data-blk-dismiss>Dismiss</button></span></div>'
    + '<hr class="blk-rule"></div>';
}

function blkDemoNavbar() {
  const items = ["Product", "Pricing", "Journal", "About", "Start free"].map((l) => '<li><button type="button" role="menuitem" data-blk-menu-item>' + l + "</button></li>").join("");
  return '<header class="blk-navwrap"><nav class="blk-nav" aria-label="Main">'
    + '<a href="#" class="blk-wordmark">Fieldbook</a>'
    + '<span class="blk-navlinks"><a href="#" aria-current="page" class="blk-navlink blk-navlink-current">Product</a><a href="#" class="blk-navlink">Pricing</a><a href="#" class="blk-navlink">Journal</a><a href="#" class="blk-navlink">About</a></span>'
    + '<span class="blk-navright"><a href="#" class="blk-navlink blk-desktop-only">Sign in</a>'
    + '<button type="button" class="btn btn-primary blk-desktop-only">Start free</button>'
    + '<span class="dropdown-wrap blk-mobile-only"><button type="button" class="btn btn-ghost" data-blk-menu aria-haspopup="menu" aria-expanded="false">Menu</button>'
    + '<ul class="dropdown-menu" role="menu" aria-label="Site sections" hidden data-blk-menu-panel>' + items + "</ul></span></span>"
    + '</nav><hr class="blk-rule"></header>';
}

function blkDemoHero() {
  return '<section class="blk-section"><div class="blk-inner"><div class="blk-hero-grid" style="margin-top:0">'
    + '<div><span class="badge badge-accent">For small studios</span>'
    + '<h2 class="blk-display">Every project, one calm page.</h2>'
    + '<p class="blk-lede" style="font-size:1.125rem">Fieldbook keeps a project’s notes, decisions, and files on one page your whole studio can read at a glance. No digging through threads to find what was decided.</p>'
    + '<div class="blk-actions"><button type="button" class="btn btn-primary">Start a project</button><button type="button" class="btn btn-secondary">See how it works</button></div>'
    + '<div class="blk-proof"><span class="blk-avatars" aria-hidden="true"><span class="avatar">MC</span><span class="avatar">JW</span><span class="avatar">PN</span></span><p class="muted" style="margin:0">Trusted by 2,400 small studios.</p></div></div>'
    + '<div class="blk-card"><h3>Projects this year</h3>'
    + blkBars([["Feb", 18], ["Mar", 24], ["Apr", 21], ["May", 29], ["Jun", 33], ["Jul", 31]], "Projects completed per month: Feb 18, Mar 24, Apr 21, May 29, Jun 33, Jul 31.")
    + '<p style="margin:20px 0 8px"><strong>Workspace migration</strong> — 68%</p>'
    + '<div class="progress-track" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" aria-label="Workspace migration"><div class="progress-fill" style="width:68%"></div></div>'
    + '<p style="margin:16px 0 0"><span class="badge badge-success">On track</span></p></div>'
    + '</div><hr class="blk-rule" style="margin-top:64px"></div></section>';
}

function blkDemoLogoCloud() {
  const marks = ["Alder Studio", "Northlight", "Casa Verde", "Fern and Co", "Bluehour", "Atlas Ceramics"];
  return '<section class="blk-section" style="padding-top:48px;padding-bottom:48px" aria-label="Studios using Fieldbook"><div class="blk-inner">'
    + '<p class="muted" style="margin:0">Studios that keep their projects in Fieldbook</p>'
    + '<hr class="blk-rule" style="margin-top:24px">'
    + '<ul class="blk-marks">' + marks.map((m) => "<li>" + m + "</li>").join("") + "</ul>"
    + '<hr class="blk-rule"></div></section>';
}

function blkDemoFeatures() {
  const days = [[null, null, null, null, 1, 2, 3], [4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30, 31]];
  const cal = '<table class="cal-grid" aria-label="October 2026"><thead><tr>' + ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => '<th scope="col" style="text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-muted);padding:8px 0">' + d + "</th>").join("") + "</tr></thead><tbody>"
    + days.map((week) => "<tr>" + week.map((d) => d === null ? "<td></td>" : '<td style="text-align:center;padding:2px"><button type="button" class="blk-day' + (d === 14 ? " blk-day-selected" : "") + '" data-blk-day aria-label="October ' + d + ', 2026' + (d === 14 ? ", selected" : "") + '"' + (d === 23 ? ' aria-current="date"' : "") + ">" + d + "</button></td>").join("") + "</tr>").join("") + "</tbody></table>";
  return '<section class="blk-section"><div class="blk-inner">'
    + '<div class="blk-head"><span class="badge badge-accent">Capabilities</span>'
    + '<h2 class="blk-h2">Everything a project needs, nothing it does not</h2>'
    + '<p class="blk-lede">Five capabilities carry a project from first note to final delivery. Each one is a working part of the page, not a picture of one.</p></div>'
    + '<div class="blk-bento">'
    + '<div class="blk-card blk-span2"><h3>Progress you can see</h3><p class="blk-muted" style="line-height:1.55;margin:0">The page chart updates as work lands, so a client sees the same shape of the project you do.</p><div style="margin-top:16px">' + blkBars([["W1", 12], ["W2", 19], ["W3", 15], ["W4", 22], ["W5", 26]], "Tasks finished per week: W1 12, W2 19, W3 15, W4 22, W5 26.") + "</div></div>"
    + '<div class="blk-card blk-span2"><h3>Dates everyone shares</h3><p class="blk-muted" style="line-height:1.55;margin:0">Milestones sit on one calendar. Pick a day and the whole studio sees the same deadline.</p><div style="margin-top:16px;max-width:384px">' + cal + "</div></div>"
    + '<div class="blk-card"><h3>Budgets that stay honest</h3><p class="blk-muted" style="line-height:1.55;margin:0">Hours logged against the estimate, visible before the overrun, not after.</p><p style="margin:16px 0 8px"><strong>Hours used of 120</strong> — 57%</p><div class="progress-track" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" aria-label="Hours used of 120"><div class="progress-fill" style="width:57%"></div></div></div>'
    + '<div class="blk-card"><h3>Decisions on record</h3><p class="blk-muted" style="line-height:1.55;margin:0">Every decision lands in a table the client can read: what was decided, when, and by whom.</p><table style="width:100%;border-collapse:collapse;margin-top:8px"><caption style="text-align:left;font-weight:600;padding:8px 0">Recent decisions</caption><tbody>'
    + [["Homepage direction B", "Oct 6"], ["Print run of 500", "Oct 9"], ["Launch moved to Nov", "Oct 12"]].map((r) => '<tr><td style="padding:8px 8px 8px 0;border-bottom:1px solid var(--color-border)">' + r[0] + '</td><td style="padding:8px 0;border-bottom:1px solid var(--color-border)">' + r[1] + "</td></tr>").join("") + "</tbody></table></div>"
    + '<div class="blk-card blk-span2"><h3>Calm by default</h3><p class="blk-muted" style="line-height:1.55;margin:0">No feeds, no pings, no red dots. A project page is a place to read and write, and it behaves like one.</p><p style="margin:16px 0 0;display:flex;flex-wrap:wrap;gap:8px"><span class="badge">No notifications</span><span class="badge">No activity feed</span><span class="badge badge-accent">Weekly digest only</span></p></div>'
    + "</div></div></section>";
}

function blkDemoStats() {
  const figs = [
    ["2,400", "studios run their projects in Fieldbook", null],
    ["12,800", "projects completed last year", "Up 18 percent on the year before"],
    ["96%", "of studios renew after the first year", null],
    ["9 min", "median time to a first project page", null],
  ];
  return '<section class="blk-section"><div class="blk-inner"><hr class="blk-rule">'
    + '<dl class="blk-stats" style="margin:0">' + figs.map((f) => '<div><dd class="blk-figure">' + f[0] + '</dd><dt class="blk-stat-label">' + f[1] + "</dt>" + (f[2] ? '<p style="margin:12px 0 0"><span class="badge badge-success">' + f[2] + "</span></p>" : "") + "</div>").join("") + "</dl>"
    + '<p class="muted" style="margin:0 0 32px;font-size:0.875rem">From Fieldbook customer accounts, January to September 2026.</p>'
    + '<hr class="blk-rule"></div></section>';
}

function blkDemoPricing() {
  const plans = [
    { name: "Starter", monthly: 12, annual: 9, audience: "For one person getting organised.", features: ["Up to 5 active projects", "Notes, decisions, and files on one page", "One collaborator per project", "Email support"], recommended: false, action: "Start with Starter" },
    { name: "Studio", monthly: 24, annual: 18, audience: "For small studios working with clients.", features: ["Unlimited active projects", "Client-readable project pages", "Budgets and hour tracking", "Up to 15 seats included", "Priority support"], recommended: true, action: "Start with Studio" },
    { name: "Practice", monthly: 48, annual: 36, audience: "For practices with several teams.", features: ["Everything in Studio", "Multiple workspaces", "Decision archive and exports", "Unlimited seats", "A named support contact"], recommended: false, action: "Start with Practice" },
  ];
  const card = (p) => '<div class="blk-card"><h3>' + p.name + "</h3>"
    + (p.recommended ? '<p style="margin:0 0 16px"><span class="badge badge-accent">Recommended</span></p>' : "")
    + '<p style="margin:0"><span style="font-size:2.5rem;font-weight:700;letter-spacing:-0.06em;line-height:1" data-blk-price data-monthly="' + p.monthly + '" data-annual="' + p.annual + '">$' + p.monthly + '</span> <span class="muted">per person, per month, billed <span data-blk-period-word>monthly</span></span></p>'
    + '<p class="blk-muted" style="line-height:1.55;margin:12px 0 0">' + p.audience + "</p>"
    + '<hr class="blk-rule" style="margin:20px 0">'
    + '<ul style="list-style:none;margin:0;padding:0;line-height:1.9">' + p.features.map((f) => "<li>" + f + "</li>").join("") + "</ul>"
    + '<hr class="blk-rule" style="margin:20px 0">'
    + '<button type="button" class="btn ' + (p.recommended ? "btn-primary" : "btn-secondary") + '">' + p.action + "</button></div>";
  return '<section class="blk-section"><div class="blk-inner">'
    + '<div class="blk-head"><span class="badge badge-accent">Pricing</span>'
    + '<h2 class="blk-h2">One price per person, every feature included</h2>'
    + '<p class="blk-lede">Plans differ by scale, not by which features unlock. Pick the size of your studio; change plans whenever it changes.</p></div>'
    + '<fieldset style="border:0;margin:32px 0 0;padding:0;max-width:420px"><legend style="font-weight:600;margin-bottom:8px">Billing period</legend>'
    + '<label class="radio-row"><input type="radio" name="blk-period" value="monthly" checked> <span>Monthly</span></label>'
    + '<label class="radio-row"><input type="radio" name="blk-period" value="annual"> <span>Annual<span class="muted" style="display:block;font-size:0.875rem">Annual billing saves 25 percent on every plan.</span></span></label></fieldset>'
    + '<div class="blk-price-grid">' + plans.map(card).join("") + "</div>"
    + '<p class="muted" style="margin:32px 0 0;font-size:0.875rem">Prices in US dollars. Cancel any time; annual plans are refunded pro rata for unused months.</p>'
    + "</div></section>";
}

function blkDemoTestimonials() {
  const quotes = [
    { quote: "We stopped losing decisions in chat threads. Every call we make on a project sits on its page, and clients read the same page we do.", name: "Maya Chen", role: "Studio lead, Alder Studio", badge: "Studio plan" },
    { quote: "Bringing a freelancer in takes an afternoon now. They read the project page and start; nobody has to brief them from memory.", name: "Jonas Weber", role: "Producer, Northlight", badge: null },
    { quote: "Our end-of-project reviews write themselves. The page already holds what happened, in the order it happened, with the reasons attached.", name: "Priya Nair", role: "Founder, Fern and Co", badge: null },
  ];
  const initials = (n) => n.split(" ").map((w) => w[0]).join("");
  return '<section class="blk-section"><div class="blk-inner">'
    + '<div class="blk-head"><span class="badge badge-accent">Customers</span>'
    + '<h2 class="blk-h2">Studios that switched, in their words</h2>'
    + '<p class="blk-lede">Three studios on what changed once every project had one page.</p></div>'
    + '<div class="blk-quote-grid">' + quotes.map((q) => '<div class="blk-card"><h3>' + q.name + '</h3><blockquote style="margin:0"><p style="line-height:1.55;margin:0">' + q.quote + '</p></blockquote><footer style="margin-top:20px;display:flex;align-items:center;gap:12px"><span class="avatar" aria-hidden="true">' + initials(q.name) + '</span><p class="muted" style="margin:0;font-size:0.875rem">' + q.role + "</p></footer>" + (q.badge ? '<p style="margin:16px 0 0"><span class="badge">' + q.badge + "</span></p>" : "") + "</div>").join("") + "</div>"
    + "</div></section>";
}

function blkDemoFaq() {
  const items = [
    ["How much does Fieldbook cost?", "Plans run per person, per month: Starter is $12 monthly or $9 on annual billing, Studio is $24 or $18, and Practice is $48 or $36. Every plan includes every feature; plans differ by scale, not by unlocks."],
    ["Is there a free trial?", "Yes. Every plan starts with 30 days free, and no card is asked for up front. If you do nothing at the end of the trial, the workspace simply pauses; your pages stay readable for another 60 days."],
    ["Can clients read our project pages?", "Yes, on Studio and Practice plans. A client sees the page you share: notes, decisions, dates, and files, without needing an account or a login. You choose which pages are shared, and sharing can be withdrawn at any time."],
    ["How do we move existing projects in?", "Most studios start with their active projects and leave the archive where it is. Notes paste in as text, files attach to the page, and a typical project page takes about nine minutes to set up. Imports from common note tools are supported on every plan."],
    ["What happens to our pages if we cancel?", "Your pages export as plain files you keep, in full, including decisions and attachments. Cancellation takes effect at the end of the billing period, and annual plans are refunded pro rata for unused months."],
    ["Who can see a project page inside our studio?", "Only the people you add to the workspace. A page is visible to its project members and to workspace owners; there is no public directory of pages, and nothing is indexed or shared outside your studio."],
  ];
  return '<section class="blk-section"><div class="blk-inner">'
    + '<div class="blk-head"><h2 class="blk-h2" style="margin-top:0">Questions, answered plainly</h2>'
    + '<p class="blk-lede">The six questions every studio asks before switching, with the short answer first.</p></div>'
    + '<div style="max-width:880px;margin-top:40px"><div class="accordion">'
    + items.map((it, i) => '<div class="accordion-item"><h3 style="margin:0"><button type="button" class="blk-acc-trigger" aria-expanded="false" data-blk-acc aria-controls="blkFaqPanel' + i + '" id="blkFaqTrig' + i + '">' + it[0] + ' <span class="acc-glyph" aria-hidden="true">+</span></button></h3><div id="blkFaqPanel' + i + '" role="region" aria-labelledby="blkFaqTrig' + i + '" hidden><p style="margin:12px 0 16px;line-height:1.55">' + it[1] + "</p></div></div>").join("")
    + "</div></div>"
    + '<div style="max-width:880px;margin-top:40px"><hr class="blk-rule"><div style="margin-top:24px;display:flex;flex-wrap:wrap;align-items:center;gap:16px"><p class="muted" style="margin:0">Still deciding? Talk it through with a person.</p><button type="button" class="btn btn-secondary">Contact support</button></div></div>'
    + "</div></section>";
}

function blkDemoCta() {
  return '<section class="blk-section"><div class="blk-inner"><div class="blk-card" style="padding:32px">'
    + '<p style="margin:0 0 16px"><span class="badge">30 days free</span></p>'
    + '<h2 class="blk-h2" style="margin-top:0">Give every project a calm page</h2>'
    + '<p class="blk-lede">Set up a workspace in minutes, put one real project on a page, and see whether your studio reads it the way ours do.</p>'
    + '<div class="blk-actions"><button type="button" class="btn btn-primary">Create your workspace</button><a href="#" style="display:inline-flex;align-items:center;min-height:44px;font-weight:600">Talk to us first</a></div>'
    + "</div></div></section>";
}

function blkDemoFooter() {
  const columns = [
    ["Product", ["Features", "Pricing", "Journal", "Changelog"]],
    ["Studio", ["About", "Customers", "Careers", "Contact"]],
    ["Resources", ["Help centre", "Guides", "Community", "Status"]],
  ];
  return '<footer class="blk-section" style="padding-top:0;padding-bottom:40px"><div class="blk-inner"><hr class="blk-rule">'
    + '<div class="blk-footer-grid"><div><p style="font-size:1.125rem;font-weight:700;letter-spacing:-0.025em;margin:0">Fieldbook</p>'
    + '<p class="blk-muted" style="line-height:1.55;margin:12px 0 0;max-width:320px">A project journal for small studios: notes, decisions, and files on one calm page.</p></div>'
    + '<nav class="blk-footer-cols" aria-label="Footer">' + columns.map((c) => "<div><h3>" + c[0] + "</h3><ul>" + c[1].map((l) => '<li><a href="#">' + l + "</a></li>").join("") + "</ul></div>").join("") + "</nav></div>"
    + '<hr class="blk-rule"><div class="blk-legal"><p style="margin:0">Copyright 2026 Fieldbook Studio. All rights reserved.</p>'
    + '<p class="blk-legal-links" style="margin:0"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Licence</a></p></div>'
    + "</div></footer>";
}

function blkDemoLogin() {
  const field = (id, label, type, auto, hint) => '<div class="field"><label for="' + id + '">' + label + '</label><input id="' + id + '" type="' + type + '" autocomplete="' + auto + '" data-blk-field="' + id + '">' + (hint ? '<p class="hint">' + hint + "</p>" : "") + '<p class="error" role="status" data-blk-err="' + id + '" hidden></p></div>';
  const alert = '<div class="site-alert alert-danger" role="alert" data-blk-alert hidden style="margin-bottom:20px"><p style="margin:0;flex:1">We could not sign you in. Check the fields below and try again.</p></div>';
  const providers = '<div class="blk-divider"><hr class="blk-rule"><span class="muted" style="font-size:0.875rem">or continue with</span><hr class="blk-rule"></div>'
    + '<button type="button" class="btn btn-secondary blk-full-btn" style="margin-top:0">Continue with Google</button>'
    + '<button type="button" class="btn btn-secondary blk-full-btn">Continue with Microsoft</button>';
  const signin = '<form data-blk-authform novalidate>' + alert
    + field("blkEmail", "Email address", "email", "email", "")
    + '<div style="margin-top:16px">' + field("blkPassword", "Password", "password", "current-password", "") + "</div>"
    + '<div style="margin-top:16px;display:flex;flex-wrap:wrap;align-items:center;gap:12px"><label style="display:flex;gap:12px;align-items:center;min-height:44px"><input type="checkbox" style="width:20px;height:20px;accent-color:var(--color-accent)"> <span>Remember me</span></label><a href="#" style="margin-left:auto;font-weight:600">Forgot password</a></div>'
    + '<button type="submit" class="btn btn-primary blk-full-btn">Sign in</button></form>';
  const create = '<form data-blk-authform novalidate>' + alert
    + field("blkName", "Your name", "text", "name", "")
    + '<div style="margin-top:16px">' + field("blkEmail2", "Email address", "email", "email", "") + "</div>"
    + '<div style="margin-top:16px">' + field("blkPassword2", "Password", "password", "new-password", "At least 12 characters, or a passphrase you can remember.") + "</div>"
    + '<button type="submit" class="btn btn-primary blk-full-btn">Create account</button></form>';
  return '<section class="blk-section"><div class="blk-login-wrap"><div class="blk-card">'
    + '<h2 style="font-size:1.5rem;font-weight:500;margin:0" data-blk-auth-title>Sign in</h2>'
    + '<p class="blk-muted" style="line-height:1.55;margin:12px 0 24px" data-blk-auth-sub>Welcome back. Pick up your projects where you left them.</p>'
    + '<div class="tablist" role="tablist" aria-label="Account mode">'
    + '<button type="button" class="tab-btn active" role="tab" aria-selected="true" data-blk-authtab="signin">Sign in</button>'
    + '<button type="button" class="tab-btn" role="tab" aria-selected="false" data-blk-authtab="create">Create account</button></div>'
    + '<div data-blk-authpanel="signin" style="padding-top:20px">' + signin + providers + "</div>"
    + '<div data-blk-authpanel="create" style="padding-top:20px" hidden>' + create + providers + "</div>"
    + '</div><p class="muted" style="text-align:center;font-size:0.875rem;line-height:1.55;margin:24px 0 0" data-blk-auth-foot>New to Fieldbook? <a href="#" style="font-weight:600">Create an account</a> By continuing you agree to the <a href="#">terms</a> and <a href="#">privacy policy</a>.</p>'
    + "</div></section>";
}

function blkDemoBlog() {
  const posts = [
    { category: "Process", title: "The one-page project brief", excerpt: "A project brief that fits on one page forces the decisions that matter to the top. Here is the shape our studio uses, and the questions it answers before work starts.", author: "Maya Chen", date: "October 20, 2026", minutes: 6, featured: true },
    { category: "Process", title: "Decisions are deliverables too", excerpt: "Every project produces decisions as well as files. Recording them where the work lives saves the end-of-project archaeology dig.", author: "Jonas Weber", date: "October 14, 2026", minutes: 4, featured: false },
    { category: "Studio life", title: "Fewer meetings, longer notes", excerpt: "We replaced the Monday status meeting with a written page update. What changed, and what we had to learn to write clearly.", author: "Priya Nair", date: "October 8, 2026", minutes: 5, featured: false },
    { category: "Craft", title: "Naming files so future you says thanks", excerpt: "A small convention for file names that survives handovers, clients, and the passage of time. It takes one sentence to state.", author: "Maya Chen", date: "September 30, 2026", minutes: 3, featured: false },
    { category: "Process", title: "What to write in the weekly update", excerpt: "Three short sections cover a week of project work: what changed, what was decided, what happens next. Anything else is decoration.", author: "Jonas Weber", date: "September 22, 2026", minutes: 4, featured: false },
    { category: "Craft", title: "Handovers without the handover meeting", excerpt: "A project page that a colleague can pick up cold is a design problem, not a documentation problem. These are the pieces that make it work.", author: "Priya Nair", date: "September 15, 2026", minutes: 7, featured: false },
  ];
  const initials = (n) => n.split(" ").map((w) => w[0]).join("");
  const card = (p) => '<article class="blk-card blk-post" data-blk-post data-cat="' + esc(p.category) + '">'
    + '<div class="blk-cover"><span class="badge">' + p.category + "</span>" + (p.featured ? '<span class="badge badge-accent">Featured</span>' : "") + "</div>"
    + '<h3><a href="#" style="color:var(--color-text);text-decoration:none">' + p.title + '</a></h3>'
    + '<p class="blk-muted" style="line-height:1.55;margin:0">' + p.excerpt + "</p>"
    + '<p style="margin:16px 0 0;display:flex;align-items:center;gap:12px;font-size:0.875rem" class="muted"><span class="avatar" aria-hidden="true">' + initials(p.author) + "</span><span>" + p.author + " · " + p.date + " · " + p.minutes + " min read</span></p></article>";
  const cats = ["All", "Process", "Studio life", "Craft"];
  return '<section class="blk-section"><div class="blk-inner">'
    + '<h2 class="blk-h2" style="margin-top:0">The Fieldbook journal</h2>'
    + '<p class="blk-lede">Notes on running small studio projects with less noise: process, craft, and studio life.</p>'
    + '<hr class="blk-rule" style="margin:32px 0">'
    + '<div data-blk-blog><div class="tablist" role="tablist" aria-label="Article categories">'
    + cats.map((c, i) => '<button type="button" class="tab-btn' + (i === 0 ? " active" : "") + '" role="tab" aria-selected="' + (i === 0) + '" data-blk-tab="' + esc(c) + '">' + c + "</button>").join("")
    + '</div><p class="muted" role="status" data-blk-count style="margin:16px 0 0"></p>'
    + '<div data-blk-posts>' + posts.map(card).join("") + "</div>"
    + '<nav class="pagination" aria-label="Pagination" style="margin-top:32px"><button type="button" class="page-btn" data-blk-prev>Previous</button><span data-blk-pages></span><button type="button" class="page-btn" data-blk-next>Next</button></nav></div>'
    + "</div></section>";
}

function blkDemoEmptyState() {
  return '<section class="blk-section"><div class="blk-inner"><div class="blk-card"><h3>Projects</h3>'
    + '<div class="blk-empty"><p aria-hidden="true" style="font-size:1.875rem;line-height:1;margin:0">○</p>'
    + '<h3 style="margin-top:12px">No projects yet</h3>'
    + '<p class="blk-muted" style="line-height:1.55;margin:8px auto 0;max-width:448px">Your first project page will hold its notes, decisions, and files in one place.</p>'
    + '<p style="margin:20px 0 0"><button type="button" class="btn btn-primary">Create a project</button></p></div>'
    + "</div></div></section>";
}

function blockDemoHTML(b) {
  switch (b.id) {
    case "announcement-bar": return blkDemoAnnouncementBar();
    case "navbar": return blkDemoNavbar();
    case "hero": return blkDemoHero();
    case "logo-cloud": return blkDemoLogoCloud();
    case "features-bento": return blkDemoFeatures();
    case "stats-band": return blkDemoStats();
    case "pricing": return blkDemoPricing();
    case "testimonials": return blkDemoTestimonials();
    case "faq": return blkDemoFaq();
    case "cta": return blkDemoCta();
    case "footer": return blkDemoFooter();
    case "login-auth": return blkDemoLogin();
    case "blog-list": return blkDemoBlog();
    case "empty-state-block": return blkDemoEmptyState();
    default: return "";
  }
}

function bindBlockDemos() {
  const frame = document.querySelector(".block-frame");
  if (!frame) return;
  // Placeholder links inside a stage never navigate the docs page away.
  frame.querySelectorAll('a[href="#"]').forEach((a) => a.addEventListener("click", (e) => e.preventDefault()));
  // Announcement bar: dismiss hides the band for this view.
  const dismiss = frame.querySelector("[data-blk-dismiss]");
  if (dismiss) dismiss.addEventListener("click", () => { const band = frame.querySelector("[data-blk-announce]"); if (band) band.hidden = true; });
  // Navbar mobile menu: toggle the dropdown panel.
  const menuBtn = frame.querySelector("[data-blk-menu]");
  if (menuBtn) {
    const panel = frame.querySelector("[data-blk-menu-panel]");
    menuBtn.addEventListener("click", () => {
      const open = panel.hidden;
      panel.hidden = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    panel.querySelectorAll("[data-blk-menu-item]").forEach((item) => item.addEventListener("click", () => { panel.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); menuBtn.focus(); }));
  }
  // Features calendar inset: day buttons move the selection.
  frame.querySelectorAll("[data-blk-day]").forEach((btn) => btn.addEventListener("click", () => {
    frame.querySelectorAll("[data-blk-day]").forEach((b2) => { b2.classList.remove("blk-day-selected"); b2.setAttribute("aria-label", b2.getAttribute("aria-label").replace(", selected", "")); });
    btn.classList.add("blk-day-selected");
    btn.setAttribute("aria-label", btn.getAttribute("aria-label") + ", selected");
  }));
  // Pricing: the billing period radios update every price figure.
  frame.querySelectorAll('input[name="blk-period"]').forEach((radio) => radio.addEventListener("change", () => {
    const annual = radio.value === "annual" && radio.checked;
    const period = frame.querySelector('input[name="blk-period"]:checked');
    const isAnnual = period && period.value === "annual";
    frame.querySelectorAll("[data-blk-price]").forEach((el) => { el.textContent = "$" + (isAnnual ? el.dataset.annual : el.dataset.monthly); });
    frame.querySelectorAll("[data-blk-period-word]").forEach((el) => { el.textContent = isAnnual ? "annually" : "monthly"; });
  }));
  // FAQ accordion: one open at a time, matching the component default.
  frame.querySelectorAll("[data-blk-acc]").forEach((trig) => trig.addEventListener("click", () => {
    const panel = document.getElementById(trig.getAttribute("aria-controls"));
    const willOpen = panel.hidden;
    frame.querySelectorAll("[data-blk-acc]").forEach((t2) => {
      const p2 = document.getElementById(t2.getAttribute("aria-controls"));
      if (p2) p2.hidden = true;
      t2.setAttribute("aria-expanded", "false");
    });
    frame.querySelectorAll("[data-blk-acc] .acc-glyph").forEach((g) => { g.textContent = "+"; });
    if (willOpen) { panel.hidden = false; trig.setAttribute("aria-expanded", "true"); const g = trig.querySelector(".acc-glyph"); if (g) g.textContent = "\u2212"; }
  }));
  // Login: mode tabs switch the two forms, heading, subline, foot line.
  const authTabs = frame.querySelectorAll("[data-blk-authtab]");
  if (authTabs.length) {
    const title = frame.querySelector("[data-blk-auth-title]");
    const sub = frame.querySelector("[data-blk-auth-sub]");
    const foot = frame.querySelector("[data-blk-auth-foot]");
    authTabs.forEach((tab) => tab.addEventListener("click", () => {
      const mode = tab.dataset.blkAuthtab;
      authTabs.forEach((t2) => { const on = t2 === tab; t2.classList.toggle("active", on); t2.setAttribute("aria-selected", String(on)); });
      frame.querySelectorAll("[data-blk-authpanel]").forEach((p) => { p.hidden = p.dataset.blkAuthpanel !== mode; });
      if (mode === "create") {
        title.textContent = "Create account";
        sub.textContent = "Start your studio workspace. Set up takes a few minutes.";
        foot.innerHTML = 'Already have an account? <a href="#" style="font-weight:600">Sign in</a> By continuing you agree to the <a href="#">terms</a> and <a href="#">privacy policy</a>.';
      } else {
        title.textContent = "Sign in";
        sub.textContent = "Welcome back. Pick up your projects where you left them.";
        foot.innerHTML = 'New to Fieldbook? <a href="#" style="font-weight:600">Create an account</a> By continuing you agree to the <a href="#">terms</a> and <a href="#">privacy policy</a>.';
      }
      foot.querySelectorAll('a[href="#"]').forEach((a) => a.addEventListener("click", (e) => e.preventDefault()));
    }));
  }
  // Login forms: submit validates and surfaces the alert plus field errors.
  frame.querySelectorAll("[data-blk-authform]").forEach((form) => form.addEventListener("submit", (e) => {
    e.preventDefault();
    let bad = false;
    form.querySelectorAll("[data-blk-field]").forEach((input) => {
      const err = form.querySelector('[data-blk-err="' + input.dataset.blkField + '"]');
      let msg = "";
      if (input.type === "email" && !input.value.includes("@")) msg = "Enter the email address for your account, including the @ and the domain.";
      if (input.type === "password" && !input.value) msg = "Enter your password. If you have forgotten it, use the forgot password link below.";
      if (msg) bad = true;
      if (err) { err.textContent = msg; err.hidden = !msg; }
      input.setAttribute("aria-invalid", String(!!msg));
    });
    const alert = form.querySelector("[data-blk-alert]");
    if (alert) alert.hidden = !bad;
  }));
  // Blog list: category tabs filter, pagination pages within the filter.
  const blog = frame.querySelector("[data-blk-blog]");
  if (blog) {
    const cards = [...blog.querySelectorAll("[data-blk-post]")];
    const count = blog.querySelector("[data-blk-count]");
    const pagesBox = blog.querySelector("[data-blk-pages]");
    const prev = blog.querySelector("[data-blk-prev]");
    const next = blog.querySelector("[data-blk-next]");
    const PAGE_SIZE = 5;
    let cat = "All", page = 1;
    const renderBlog = () => {
      const list = cards.filter((c) => cat === "All" || c.dataset.cat === cat);
      const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
      if (page > totalPages) page = totalPages;
      cards.forEach((c) => { c.hidden = true; });
      list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).forEach((c) => { c.hidden = false; });
      count.textContent = list.length + (list.length === 1 ? " article" : " articles") + " in " + (cat === "All" ? "all categories" : cat) + ".";
      pagesBox.innerHTML = "";
      for (let i = 1; i <= totalPages; i++) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "page-btn";
        b.textContent = String(i);
        if (i === page) b.setAttribute("aria-current", "page");
        b.addEventListener("click", () => { page = i; renderBlog(); });
        pagesBox.appendChild(b);
      }
      prev.disabled = page <= 1;
      next.disabled = page >= totalPages;
    };
    blog.querySelectorAll("[data-blk-tab]").forEach((tab) => tab.addEventListener("click", () => {
      cat = tab.dataset.blkTab;
      page = 1;
      blog.querySelectorAll("[data-blk-tab]").forEach((t2) => { const on = t2 === tab; t2.classList.toggle("active", on); t2.setAttribute("aria-selected", String(on)); });
      renderBlog();
    }));
    prev.addEventListener("click", () => { if (page > 1) { page--; renderBlog(); } });
    next.addEventListener("click", () => { page++; renderBlog(); });
    renderBlog();
  }
}

const blockStageState = { view: "desktop", theme: null };
function blockStageHTML(b) {
  const theme = blockStageState.theme || currentTheme();
  return '<div class="block-tools">'
    + '<span class="block-tools-group" role="group" aria-label="Preview width">'
    + '<button type="button" class="stage-btn" data-stage-view="desktop" aria-pressed="' + (blockStageState.view === "desktop") + '">Desktop</button>'
    + '<button type="button" class="stage-btn" data-stage-view="mobile" aria-pressed="' + (blockStageState.view === "mobile") + '">Mobile</button></span>'
    + '<span class="block-tools-group" role="group" aria-label="Preview theme">'
    + '<button type="button" class="stage-btn" data-stage-theme="light" aria-pressed="' + (theme === "light") + '">Light</button>'
    + '<button type="button" class="stage-btn" data-stage-theme="dark" aria-pressed="' + (theme === "dark") + '">Dark</button></span></div>'
    + '<div class="block-stage" data-theme="' + theme + '"><div class="block-frame" data-view="' + blockStageState.view + '">' + blockDemoHTML(b) + "</div></div>";
}
function bindBlockStage() {
  const stage = document.querySelector(".block-stage");
  if (!stage) return;
  const frame = stage.querySelector(".block-frame");
  document.querySelectorAll("[data-stage-view]").forEach((btn) => btn.addEventListener("click", () => {
    blockStageState.view = btn.dataset.stageView;
    frame.dataset.view = blockStageState.view;
    document.querySelectorAll("[data-stage-view]").forEach((b2) => b2.setAttribute("aria-pressed", String(b2 === btn)));
  }));
  document.querySelectorAll("[data-stage-theme]").forEach((btn) => btn.addEventListener("click", () => {
    blockStageState.theme = btn.dataset.stageTheme;
    stage.dataset.theme = blockStageState.theme;
    document.querySelectorAll("[data-stage-theme]").forEach((b2) => b2.setAttribute("aria-pressed", String(b2 === btn)));
  }));
}

function renderBlocksIndex() {
  let body = '<p class="eyebrow">Library</p><h1>Blocks</h1><p class="lede">Full page sections composed from Topanga components. Every block installs on its own through the registry. Blocks carry their own count: they are not components, and the component count does not move.</p>';
  if (BLOCKS.length) {
    body += '<div class="index-list">' + BLOCKS.map((b, i) => '<a class="index-row" href="#/blocks/' + b.id + '"><span><strong>' + esc(b.name) + '</strong><br><span class="muted">' + esc(b.tagline) + '</span></span><span class="pill">' + String(i + 1).padStart(2, "0") + " / " + String(BLOCKS.length).padStart(2, "0") + "</span></a>").join("") + "</div>";
  } else {
    body += "<p>No blocks have landed yet. The section, its registry path (<code>r/&lt;id&gt;.json</code>, type registry:block), and its manifest (<code>blocks.json</code>) are in place. Each block below appears here with a staged preview, light and dark, desktop and mobile, as it is composed from the block spec.</p>";
    body += '<h2>Planned blocks</h2><div class="index-list">' + PLANNED_BLOCKS.map((b) => '<div class="index-row"><span><strong>' + esc(b.name) + '</strong><br><span class="muted">' + esc(b.purpose) + '</span></span><span class="pill">Planned</span></div>').join("") + "</div>";
  }
  return body;
}

function renderBlockNotFound(id) {
  return '<p class="eyebrow">Blocks</p><h1>Block not found</h1><p class="lede">There is no block called <code>' + esc(id) + '</code> in Topanga yet.</p>'
    + '<p><a href="#/blocks">Browse all Topanga blocks</a></p>';
}

function renderBlock(id) {
  const b = BLOCKS.find((x) => x.id === id);
  if (!b) return renderBlockNotFound(id);
  const cli = "npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/" + b.id + ".json";
  const usedNames = b.uses.map((u) => { const c = COMPONENTS.find((x) => x.id === u); return c ? '<a href="#/components/' + c.id + '">' + esc(c.name) + "</a>" : esc(u); }).join(", ");
  let body = '<p class="eyebrow">Blocks · ' + esc(b.name) + "</p><h1>" + esc(b.name) + '</h1><p class="lede">' + esc(b.tagline) + "</p>";
  body += blockStageHTML(b);
  body += "<h2>Built from</h2><p>" + usedNames + ". Nothing else: a block is only its components, composed.</p>";
  body += "<h2>Install</h2><p>Blocks install through the same registry as components. The registry file inlines every component the block uses, so one command is the whole block.</p>";
  body += '<div class="code-head"><h3>CLI</h3><button type="button" class="copy-btn" data-copy="' + esc(cli) + '">Copy CLI</button></div><pre>' + esc(cli) + "</pre>";
  if (b.code) body += '<div class="code-head"><h3>React code</h3><button type="button" class="copy-btn" data-copy="' + esc(b.code) + '">Copy code</button></div><pre>' + esc(b.code) + "</pre>";
  return body;
}

function anatomyRows(c) {
  return (c.anatomy || []).map((a) => {
    const m = String(a).match(/^(.*?)\s*\(([^)]+)\)\s*$/);
    const part = m ? m[1] : a;
    const notes = m ? m[2] : "";
    return "<tr><td>" + esc(part) + "</td><td>" + esc(notes) + "</td></tr>";
  }).join("");
}
function eventRows(c) {
  return (c.props || []).filter((p) => /=>/.test(p[1]) || /\bfunction\b/i.test(p[1]) || /\bcallback\b/i.test(p[1]))
    .map((p) => "<tr><td><code>" + esc(p[0]) + "</code></td><td><code>" + esc(p[1]) + "</code></td><td>" + esc(p[3]) + "</td></tr>").join("");
}
function a11yRows(c) {
  const a = (c.contract && c.contract.a11y) || {};
  return Object.entries(a).map(([k, v]) => "<tr><td><code>" + esc(k) + "</code></td><td>" + esc(typeof v === "string" ? v : JSON.stringify(v)) + "</td></tr>").join("");
}
function attributeRows(c) {
  const a = (typeof ATTRIBUTES !== "undefined" && ATTRIBUTES[c.id]) || { rows: [], spreads: [] };
  const rows = (a.rows || []).map((r) => "<tr><td><code>" + esc(r.attr) + "</code></td><td><code>" + esc(r.value) + "</code></td><td>" + esc(r.element) + "</td></tr>").join("");
  const spreadNote = (a.spreads || []).length ? "<p>Plus a <code>{..." + esc(a.spreads.join("} / {...")) + "}</code> spread: caller-provided props may add more attributes.</p>" : "";
  return { rows, spreadNote };
}
function stateRows(c) {
  const states = new Map();
  function add(state, via) {
    if (!states.has(state)) states.set(state, []);
    const list = states.get(state);
    if (!list.includes(via)) list.push(via);
  }
  const props = c.props || [];
  const a = (typeof ATTRIBUTES !== "undefined" && ATTRIBUTES[c.id]) || { rows: [] };
  const isEvent = (p) => /=>/.test(p[1]) || /\bfunction\b/i.test(p[1]) || /\bcallback\b/i.test(p[1]);
  const hasProp = (name) => props.some((p) => p[0].toLowerCase() === name);
  // A state ARIA attribute (aria-expanded, aria-selected, ...) only appears on interactive elements.
  const STATE_ARIA = ["aria-expanded", "aria-selected", "aria-checked", "aria-pressed", "aria-disabled", "aria-invalid", "aria-readonly", "aria-required"];
  const hasStateAria = (a.rows || []).some((r) => STATE_ARIA.includes(r.attr));
  // Hover + Focus apply to interactive components (events, a link target, a disabled/loading control, or state ARIA).
  if (props.some(isEvent) || hasProp("href") || hasProp("to") || hasProp("disabled") || hasProp("loading") || hasStateAria) {
    add("Hover", "CSS :hover");
    add("Focus", "CSS :focus-visible");
  }
  const PROP_STATES = { disabled: "Disabled", loading: "Loading", error: "Error", readonly: "Read-only", required: "Required", checked: "Checked", selected: "Selected", open: "Open", expanded: "Expanded", active: "Active", pressed: "Pressed", indeterminate: "Indeterminate", invalid: "Invalid", warning: "Warning" };
  props.forEach((p) => {
    // Docs use combined names for controlled props ("checked / onChange", "pressed / onPressedChange").
    // Match on the first token so those still map to their state.
    const first = (p[0].toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)[0] || "");
    const s = PROP_STATES[first];
    if (s) add(s, "prop `" + p[0] + "`");
  });
  (a.rows || []).forEach((r) => {
    if (r.attr === "aria-expanded") add("Expanded", "aria-expanded");
    else if (r.attr === "aria-selected") add("Selected", "aria-selected");
    else if (r.attr === "aria-checked") add("Checked", "aria-checked");
    else if (r.attr === "aria-pressed") add("Pressed", "aria-pressed");
    else if (r.attr === "aria-disabled") add("Disabled", "aria-disabled");
    else if (r.attr === "aria-invalid") add("Invalid", "aria-invalid");
    else if (r.attr === "aria-readonly") add("Read-only", "aria-readonly");
    else if (r.attr === "aria-required") add("Required", "aria-required");
    else if (r.attr === "data-state") {
      r.value.split("|").map((s) => s.trim()).filter(Boolean).forEach((v) => {
        add(v.charAt(0).toUpperCase() + v.slice(1), "data-state");
      });
    }
  });
  const ORDER = ["Hover", "Focus", "Selected", "Checked", "Pressed", "Expanded", "Open", "Active", "Indeterminate", "Disabled", "Read-only", "Required", "Loading", "Error", "Invalid", "Warning"];
  const rows = [];
  ORDER.forEach((name) => { if (states.has(name)) rows.push([name, states.get(name).join(" + ")]); });
  [...states.keys()].filter((k) => !ORDER.includes(k)).sort().forEach((name) => rows.push([name, states.get(name).join(" + ")]));
  return rows.map(([name, via]) => "<tr><td>" + esc(name) + "</td><td>" + esc(via) + "</td></tr>").join("");
}

/* Docs-site upgrades: props playground, entrance pattern, contrast steps.
   ADD-only layer. Reads the existing COMPONENTS data; it never rewrites it. */
function playgroundClassify(c) {
  const KEYWORDS = { string: 1, number: 1, boolean: 1, null: 1, undefined: 1, object: 1, array: 1, function: 1, void: 1, any: 1, unknown: 1, never: 1, true: 1, false: 1 };
  const editable = [];
  const skipped = [];
  (c.props || []).forEach((p) => {
    const name = String(p[0]);
    const type = String(p[1]);
    const req = String(p[2] || "");
    const m = req.match(/^No\s*[\u2014\u2013-]\s*(.*)$/);
    let def = m ? m[1] : "";
    if (def === "\u2014" || def === "\u2013" || def === "-") def = "";
    if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) || /=>|ReactNode|function|callback|\(\)|\{|\[/.test(type)) { skipped.push(name); return; }
    const parts = type.split("|").map((s) => s.trim().replace(/^["']|["']$/g, ""));
    if (parts.length >= 2 && parts.every((t) => /^[A-Za-z0-9_-]+$/.test(t) && !KEYWORDS[t])) {
      editable.push({ name: name, kind: "enum", options: parts, def: parts.indexOf(def) !== -1 ? def : parts[0] });
      return;
    }
    if (type === "boolean") { editable.push({ name: name, kind: "bool", def: /true/i.test(def) }); return; }
    if (type === "number") { const n = parseFloat(def); editable.push({ name: name, kind: "number", def: isNaN(n) ? 0 : n }); return; }
    if (type === "string" || type === "string?" || type === "string | null" || type === "string | undefined") {
      const s = def.replace(/^["']|["']$/g, "");
      editable.push({ name: name, kind: "string", def: /\s/.test(s) ? "" : s });
      return;
    }
    skipped.push(name);
  });
  return { editable: editable, skipped: skipped };
}
function playgroundEditable(c) { return playgroundClassify(c).editable; }
function playgroundSkipped(c) { return playgroundClassify(c).skipped; }
function pascalFromId(id) {
  return String(id).split(/[-_]/).map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : "")).join("");
}
function playgroundJSX(pascal, id, editable, values) {
  const parts = [];
  editable.forEach((e) => {
    const v = values[e.name];
    if (v === undefined) return;
    if (e.kind === "enum") { if (v !== "") parts.push(e.name + '="' + String(v).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'); }
    else if (e.kind === "bool") parts.push(e.name + "={" + (v ? "true" : "false") + "}");
    else if (e.kind === "number") parts.push(e.name + "={" + v + "}");
    else if (e.kind === "string") { if (v) parts.push(e.name + '="' + String(v).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'); }
  });
  const attrs = parts.length ? " " + parts.join(" ") : "";
  return 'import { ' + pascal + ' } from "@/components/ui/' + id + '";\n\nexport function Example() {\n  return <' + pascal + attrs + ' />;\n}';
}
function playgroundField(e) {
  const id = "pg-" + e.name;
  if (e.kind === "enum") {
    return '<div class="playground-field"><label for="' + id + '">' + esc(e.name) + '</label><select id="' + id + '" data-pg-prop="' + esc(e.name) + '">' + e.options.map((o) => '<option value="' + esc(o) + '"' + (o === e.def ? " selected" : "") + '>' + esc(o) + '</option>').join("") + '</select></div>';
  }
  if (e.kind === "bool") {
    return '<div class="playground-field"><label><input type="checkbox" data-pg-prop="' + esc(e.name) + '"' + (e.def ? " checked" : "") + '> ' + esc(e.name) + '</label></div>';
  }
  if (e.kind === "number") {
    return '<div class="playground-field"><label for="' + id + '">' + esc(e.name) + '</label><input id="' + id + '" type="number" data-pg-prop="' + esc(e.name) + '" value="' + esc(String(e.def)) + '"></div>';
  }
  return '<div class="playground-field"><label for="' + id + '">' + esc(e.name) + '</label><input id="' + id + '" type="text" data-pg-prop="' + esc(e.name) + '" value="' + esc(String(e.def)) + '"></div>';
}
/* Which playground controls update BOTH the demo above and the code below.
   Every other editable control updates the code only; playgroundHTML says so
   per component instead of promising demo updates it cannot make. */
function playgroundDemoWired(e) {
  if (e.kind === "bool") return e.name === "disabled" || e.name === "checked" || e.name === "pressed";
  if (e.kind === "string") return e.name === "label" || e.name === "placeholder" || e.name === "value";
  if (e.kind === "number") return e.name === "value";
  if (e.kind === "enum") return e.name === "variant" || e.name === "tone";
  return false;
}
function playgroundHTML(c) {
  const cls = playgroundClassify(c);
  const editable = cls.editable;
  const values = {};
  editable.forEach((e) => { values[e.name] = e.def; });
  const code = playgroundJSX(pascalFromId(c.id), c.id, editable, values);
  let html = '<section class="playground" data-pg-name="' + esc(pascalFromId(c.id)) + '" data-pg-id="' + esc(c.id) + '">';
  html += '<div class="playground-head"><span class="playground-dots" aria-hidden="true"><span></span><span></span><span></span></span><h2>Playground</h2><span class="playground-sub">Live demo + code</span></div>';
  html += '<div class="playground-controls">' + editable.map((e) => playgroundField(e)).join("") + '</div>';
  if (cls.skipped.length) {
    const shown = cls.skipped.slice(0, 5).map((s) => esc(s)).join(", ");
    const more = cls.skipped.length > 5 ? " and " + (cls.skipped.length - 5) + " more" : "";
    html += '<p class="playground-note">Complex props stay in the code: ' + shown + more + '. The playground covers simple props.</p>';
  }
  const wired = editable.filter((e) => playgroundDemoWired(e));
  const codeOnly = editable.filter((e) => !playgroundDemoWired(e));
  if (editable.length && codeOnly.length === 0) html += '<p class="playground-note">The controls update the demo above and the code below.</p>';
  else if (editable.length && wired.length === 0) html += '<p class="playground-note">The controls update the code below. The demo above does not change for this component. Use the demo above for interaction.</p>';
  else if (editable.length) html += '<p class="playground-note">The controls update the code below. The demo above updates for: ' + wired.map((e) => esc(e.name)).join(", ") + '. Other controls update the code only. Use the demo above for interaction.</p>';
  html += '<pre class="playground-code" data-pg-code data-hl="1">' + esc(code) + '</pre>';
  html += '<div class="playground-actions"><button type="button" class="copy-btn" data-copy="' + esc(code) + '" data-pg-copy-jsx>Copy JSX</button><button type="button" class="copy-btn" data-copy="' + esc(c.prompt) + '">Copy prompt</button><button type="button" class="copy-btn" data-pg-reset>Reset</button></div>';
  html += '</section>';
  return html;
}
function applyPlaygroundTransforms(demo, editable, values, pristine, lastEnum) {
  if (!demo) return;
  editable.forEach((e) => {
    const v = values[e.name];
    if (v === undefined) return;
    if (e.kind === "bool" && e.name === "disabled") {
      demo.querySelectorAll("button, input, select, textarea").forEach((el) => {
        el.disabled = (v === e.def) ? pristine.disabled.indexOf(el) !== -1 : v;
      });
    } else if (e.kind === "bool" && e.name === "checked") {
      demo.querySelectorAll('input[type="checkbox"]').forEach((el) => {
        el.checked = (v === e.def) ? pristine.checked.indexOf(el) !== -1 : v;
      });
      demo.querySelectorAll('[role="switch"]').forEach((el) => {
        el.setAttribute("aria-checked", String((v === e.def) ? pristine.checked.indexOf(el) !== -1 : v));
      });
    } else if (e.kind === "bool" && e.name === "pressed") {
      demo.querySelectorAll("[aria-pressed]").forEach((el) => {
        el.setAttribute("aria-pressed", String((v === e.def) ? pristine.pressed.indexOf(el) !== -1 : v));
      });
    } else if (e.kind === "string" && e.name === "label") {
      const lab = demo.querySelector("label");
      /* A label that wraps a control must never be flattened: setting
         textContent would delete the control it wraps (Checkbox demo). */
      if (lab && !lab.querySelector("input, select, textarea, button")) lab.textContent = (v && v !== e.def) ? v : pristine.label;
    } else if (e.kind === "string" && e.name === "placeholder") {
      const inp = demo.querySelector("input, textarea");
      if (inp) {
        if (v && v !== e.def) inp.setAttribute("placeholder", v);
        else if (pristine.placeholder === null) inp.removeAttribute("placeholder");
        else inp.setAttribute("placeholder", pristine.placeholder);
      }
    } else if ((e.kind === "string" || e.kind === "number") && e.name === "value") {
      const inp = demo.querySelector("input, textarea, select");
      if (inp) inp.value = (v !== "" && v !== e.def) ? v : pristine.value;
    } else if (e.kind === "enum" && (e.name === "variant" || e.name === "tone")) {
      const prev = lastEnum[e.name];
      if (prev && prev !== v) {
        demo.querySelectorAll("[class]").forEach((el) => {
          const cls = el.getAttribute("class") || "";
          const next = cls.split(/\s+/).map((tok) => (tok.length > prev.length + 1 && tok.slice(-(prev.length + 1)) === "-" + prev) ? tok.slice(0, -(prev.length)) + v : tok).join(" ");
          if (next !== cls) el.setAttribute("class", next);
        });
      }
      lastEnum[e.name] = v;
    }
  });
}
function bindPlayground() {
  const panel = document.querySelector(".playground");
  if (!panel) return;
  const id = panel.dataset.pgId;
  const c = COMPONENTS.find((x) => x.id === id);
  if (!c) return;
  const editable = playgroundEditable(c);
  const demo = document.querySelector("#view .demo");
  const pristine = { label: "", placeholder: null, value: "", disabled: [], checked: [], pressed: [] };
  if (demo) {
    const lab = demo.querySelector("label");
    if (lab) pristine.label = lab.textContent;
    const inp = demo.querySelector("input, textarea, select");
    if (inp) { pristine.placeholder = inp.getAttribute("placeholder"); pristine.value = inp.value; }
    pristine.disabled = Array.prototype.filter.call(demo.querySelectorAll("button, input, select, textarea"), (el) => el.disabled);
    pristine.checked = Array.prototype.filter.call(demo.querySelectorAll('input[type="checkbox"]'), (el) => el.checked);
    pristine.pressed = Array.prototype.filter.call(demo.querySelectorAll("[aria-pressed]"), (el) => el.getAttribute("aria-pressed") === "true");
  }
  const lastEnum = {};
  function readValues() {
    const values = {};
    panel.querySelectorAll("[data-pg-prop]").forEach((el) => {
      const prop = editable.find((e) => e.name === el.dataset.pgProp);
      if (!prop) return;
      if (prop.kind === "bool") values[prop.name] = el.checked;
      else if (prop.kind === "number") { const n = parseFloat(el.value); values[prop.name] = isNaN(n) ? prop.def : n; }
      else values[prop.name] = el.value;
    });
    return values;
  }
  function refresh() {
    const values = readValues();
    const code = playgroundJSX(panel.dataset.pgName, id, editable, values);
    const pre = panel.querySelector("[data-pg-code]");
    if (pre) pre.textContent = code;
    const jsxBtn = panel.querySelector("[data-pg-copy-jsx]");
    if (jsxBtn) jsxBtn.dataset.copy = code;
    applyPlaygroundTransforms(demo, editable, values, pristine, lastEnum);
  }
  function reset() {
    panel.querySelectorAll("[data-pg-prop]").forEach((el) => {
      const prop = editable.find((e) => e.name === el.dataset.pgProp);
      if (!prop) return;
      if (prop.kind === "bool") el.checked = prop.def;
      else el.value = prop.def;
    });
    refresh();
  }
  /* Correct the playground note against the real demo: playgroundHTML
     promises demo updates from playgroundDemoWired, but a control only
     updates the demo when its transform target exists in this demo (a
     label control cannot update a demo with no plain <label>, a value
     control cannot update a demo with no field, and so on). */
  function playgroundTargetExists(e) {
    if (!demo) return false;
    if (e.kind === "bool" && e.name === "disabled") return !!demo.querySelector("button, input, select, textarea");
    if (e.kind === "bool" && e.name === "checked") return !!demo.querySelector('input[type="checkbox"]') || !!demo.querySelector('[role="switch"]');
    if (e.kind === "bool" && e.name === "pressed") return !!demo.querySelector("[aria-pressed]");
    if (e.kind === "string" && e.name === "label") { const lab = demo.querySelector("label"); return !!lab && !lab.querySelector("input, select, textarea, button"); }
    if (e.kind === "string" && e.name === "placeholder") { const inp = demo.querySelector("input, textarea"); return !!inp && inp.type !== "checkbox" && inp.type !== "radio"; }
    if ((e.kind === "string" || e.kind === "number") && e.name === "value") { const inp = demo.querySelector("input, textarea, select"); return !!inp && inp.type !== "checkbox" && inp.type !== "radio"; }
    if (e.kind === "enum" && (e.name === "variant" || e.name === "tone")) {
      const def = String(e.def);
      let found = false;
      demo.querySelectorAll("[class]").forEach((el) => {
        (el.getAttribute("class") || "").split(/\s+/).forEach((tok) => { if (tok.length > def.length + 1 && tok.slice(-(def.length + 1)) === "-" + def) found = true; });
      });
      return found;
    }
    return false;
  }
  function correctPlaygroundNote() {
    if (!editable.length) return;
    const wired = editable.filter((e) => playgroundDemoWired(e) && playgroundTargetExists(e));
    const notes = Array.prototype.slice.call(panel.querySelectorAll(".playground-note"));
    const note = notes.find((p) => /update the demo above|update the code below/.test(p.textContent));
    if (!note) return;
    if (wired.length === editable.length) return;
    if (!wired.length) note.textContent = "The controls update the code below. The demo above does not change for this component. Use the demo above for interaction.";
    else note.textContent = "The controls update the code below. The demo above updates for: " + wired.map((e) => e.name).join(", ") + ". Other controls update the code only. Use the demo above for interaction.";
  }
  correctPlaygroundNote();
  panel.addEventListener("input", refresh);
  panel.addEventListener("change", refresh);
  panel.addEventListener("click", (e) => {
    if (e.target.closest("[data-pg-reset]")) { e.preventDefault(); reset(); }
  });
  refresh();
}
function ensureOesteDocsStyles() {
  if (document.getElementById("oeste-docs-upgrades")) return;
  const style = document.createElement("style");
  style.id = "oeste-docs-upgrades";
  const css = [
    "#view.oeste-enter > * { animation: oeste-docs-enter 180ms cubic-bezier(0.16,1,0.3,1) both; }",
    "#view.oeste-enter > *:nth-child(2) { animation-delay: 40ms; }",
    "#view.oeste-enter > *:nth-child(3) { animation-delay: 80ms; }",
    "#view.oeste-enter > *:nth-child(4) { animation-delay: 120ms; }",
    "#view.oeste-enter > *:nth-child(5) { animation-delay: 160ms; }",
    "#view.oeste-enter > *:nth-child(6) { animation-delay: 200ms; }",
    "#view.oeste-enter > *:nth-child(7) { animation-delay: 240ms; }",
    "#view.oeste-enter > *:nth-child(8) { animation-delay: 280ms; }",
    "@keyframes oeste-docs-enter { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }",
    "@media (prefers-reduced-motion: reduce) { #view.oeste-enter > * { animation: none; } }",
    ".playground { border: 1px solid var(--color-border); border-radius: 12px; background: var(--color-surface); padding: 20px; margin-top: 24px; }",
    ".playground-head { display: flex; align-items: center; gap: 10px; }",
    ".playground-head h2 { margin: 0; }",
    ".playground-dots { display: inline-flex; gap: 5px; }",
    ".playground-dots span { width: 8px; height: 8px; border-radius: 999px; background: var(--color-border); display: inline-block; }",
    ".playground-sub { color: var(--color-muted); font-size: 0.875rem; }",
    ".playground-controls { display: grid; gap: 12px; margin-top: 16px; }",
    ".playground-field label { display: block; font-weight: 600; font-size: 0.875rem; margin-bottom: 6px; }",
    ".playground-field input[type=\"text\"], .playground-field input[type=\"number\"], .playground-field select { width: 100%; max-width: 320px; padding: 8px 10px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-bg); color: var(--color-text); font: inherit; }",
    ".playground-field input[type=\"checkbox\"] { accent-color: var(--color-accent); }",
    ".playground-note { color: var(--color-muted); font-size: 0.875rem; margin: 12px 0 0; }",
    ".playground-code { margin-top: 16px; }",
    ".playground-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }"
  ].join("\n");
  style.textContent = css;
  document.head.appendChild(style);
}
function playOesteEntrance(view) {
  if (!view) return;
  view.classList.remove("oeste-enter");
  void view.offsetWidth;
  view.classList.add("oeste-enter");
}

/* Not-found state for unknown component ids. Never silently render a
   different component, never redirect. Equivalents come from this library's
   own COMPONENTS data (name/tagline token match). Cross-library links are
   filled in by bindNotFound after checking the other libraries' manifests. */
const NOT_FOUND_THIS = { id: "topanga", name: "Topanga", listUrl: "#/components" };
const NOT_FOUND_OTHERS = [{ id: "huntington", name: "Huntington" }, { id: "mesa", name: "Mesa" }];
function notFoundEquivalents(id) {
  const toks = String(id).toLowerCase().split(/[-_]+/).filter(Boolean);
  if (!toks.length) return [];
  const scored = COMPONENTS.map((c) => {
    const name = (c.name || "").toLowerCase();
    const tag = (c.tagline || "").toLowerCase();
    let score = 0;
    toks.forEach((t) => {
      if (name.indexOf(t) !== -1) score += 3;
      if (tag.indexOf(t) !== -1) score += 1;
    });
    return { c: c, score: score };
  }).filter((x) => x.score > 0).sort((a, b) => (b.score - a.score) || (a.c.name < b.c.name ? -1 : a.c.name > b.c.name ? 1 : 0));
  return scored.slice(0, 4).map((x) => x.c);
}
function renderNotFoundComponent(id) {
  const eq = notFoundEquivalents(id);
  let body = '<p class="eyebrow">Components</p><h1>Component not found</h1><p class="lede">There is no component called <code>' + esc(id) + '</code> in ' + NOT_FOUND_THIS.name + '.</p>';
  body += '<p><a href="' + NOT_FOUND_THIS.listUrl + '">Browse all ' + NOT_FOUND_THIS.name + ' components</a></p>';
  if (eq.length) {
    body += '<h2>Closest in ' + NOT_FOUND_THIS.name + '</h2><ul>' + eq.map((c) => '<li><a href="#/components/' + esc(c.id) + '">' + esc(c.name) + '</a> ' + esc(c.tagline) + '</li>').join("") + '</ul>';
  }
  body += '<div data-nf-cross data-nf-id="' + esc(id) + '"><p class="muted">Checking the other libraries.</p></div>';
  return body;
}
function bindNotFound() {
  const box = document.querySelector("[data-nf-cross]");
  if (!box) return;
  const id = box.dataset.nfId;
  Promise.all(NOT_FOUND_OTHERS.map((lib) => fetch("/" + lib.id + "/components.json").then((r) => r.json()).then((m) => ({ lib: lib, found: (m.components || []).some((c) => c.id === id) })).catch(() => ({ lib: lib, found: false }))))
    .then((results) => {
      const found = results.filter((r) => r.found);
      if (!found.length) { box.innerHTML = '<p class="muted">No other library has a component called <code>' + esc(id) + '</code> either.</p>'; return; }
      box.innerHTML = '<h2>In other libraries</h2><ul>' + found.map((r) => '<li><a href="/' + r.lib.id + '/#/components/' + esc(id) + '">' + esc(id) + ' in ' + r.lib.name + '</a></li>').join("") + '</ul>';
    });
}
function renderComponent(id, lens) {
  const c = COMPONENTS.find((x) => x.id === id);
  if (!c) return renderNotFoundComponent(id);
  const rows = c.props.map((p) => "<tr><td><code>" + esc(p[0]) + "</code></td><td><code>" + esc(p[1]) + "</code></td><td>" + esc(p[2]) + "</td><td>" + esc(p[3]) + "</td></tr>").join("");
  const keys = c.keyboard.map((k) => "<tr><td><code>" + esc(k[0]) + "</code></td><td>" + esc(k[1]) + "</td></tr>").join("");
  const inv = c.invariants.map((x) => "<li>" + esc(x) + "</li>").join("");
  const ev = eventRows(c);
  const ay = a11yRows(c);
  let body = '<p class="eyebrow">Components · ' + esc(c.name) + "</p><h1>" + esc(c.name) + "</h1><p class=\"lede\">" + esc(c.tagline) + "</p>";
  body += lensBar("components", c.id, lens);
  body += demoHTML(c);
  if (lens === "human") {
    body += variantsHTML(c);
    body += playgroundHTML(c);
    body += "<h2>Anatomy</h2><div style=\"overflow-x:auto\"><table><thead><tr><th>Part</th><th>Notes</th></tr></thead><tbody>" + anatomyRows(c) + "</tbody></table></div>";
    body += '<h2>Props</h2><div style="overflow-x:auto"><table><thead><tr><th>Prop</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody>' + rows + "</tbody></table></div>";
    body += "<h2>Events</h2>" + (ev ? '<div style="overflow-x:auto"><table><thead><tr><th>Event</th><th>Signature</th><th>Notes</th></tr></thead><tbody>' + ev + "</tbody></table></div>" : "<p>No events.</p>");
    const at = attributeRows(c);
    body += "<h2>Attributes</h2>" + (at.rows ? '<div style="overflow-x:auto"><table><thead><tr><th>Attribute</th><th>Value</th><th>Element</th></tr></thead><tbody>' + at.rows + "</tbody></table></div>" + at.spreadNote : "<p>No data or ARIA attributes.</p>" + at.spreadNote);
    const st = stateRows(c);
    body += "<h2>States</h2>" + (st ? '<div style="overflow-x:auto"><table><thead><tr><th>State</th><th>Via</th></tr></thead><tbody>' + st + "</tbody></table></div>" : "<p>No interaction states.</p>");
    body += '<h2>Keyboard</h2><div style="overflow-x:auto"><table><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody>' + keys + "</tbody></table></div>";
    body += "<h2>Accessibility contract</h2>" + (ay ? '<div style="overflow-x:auto"><table><thead><tr><th>Aspect</th><th>Behavior</th></tr></thead><tbody>' + ay + "</tbody></table></div>" : "<p>No additional accessibility contract.</p>");
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
    + "<h2>Spacing / radius / motion</h2><p>Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 px. Radii: 4 / 8 / 12 px + 999px pill. Motion: 180ms in / 140ms out, <code>cubic-bezier(.16,1,.3,1)</code>. Reduced motion: no animation. Breakpoints: mobile 0–640px, tablet 641–1024px, desktop 1025px+. Touch targets: min 44px.</p>"
    + "<h2>Contrast steps</h2><p>Four contrast steps plus two text steps. No values changed here: every row uses an existing token.</p><div style=\"overflow-x:auto\"><table><thead><tr><th>Step</th><th>Token</th><th>Values</th><th>Use</th></tr></thead><tbody><tr><td>Page</td><td><code>--color-bg</code></td><td>Light #F6F4F1 · Dark #121110</td><td>Page background</td></tr><tr><td>Surface</td><td><code>--color-surface</code></td><td>Light #FCFAF7 · Dark #1C1917</td><td>Cards, demos, panels</td></tr><tr><td>Raised</td><td><code>--color-surface + --color-border hairline</code></td><td>Same values as Surface</td><td>Raised by a hairline, not a fill</td></tr><tr><td>Border</td><td><code>--color-border</code></td><td>Light rgba(28,25,23,0.10) · Dark rgba(245,243,239,0.10)</td><td>Hairlines between steps</td></tr><tr><td>Text primary</td><td><code>--color-text</code></td><td>Light #1C1917 · Dark #F5F3EF</td><td>Body text, headings</td></tr><tr><td>Text muted</td><td><code>--color-muted</code></td><td>Light #706963 · Dark #9E968F</td><td>Secondary text, captions</td></tr></tbody></table></div>";
}

function renderGettingStarted() {
  return '<p class="eyebrow">Docs</p><h1>Getting started</h1><p class="lede">Oeste is React + Tailwind, copy-paste ready. No heavy dependency, no config hell. Five steps and you are building.</p>'
    + '<h2>1 · Get the tokens</h2><p>shadcn does <em>not</em> install the tokens — this step is manual. Download <a href="https://raw.githubusercontent.com/eric2busy/Oeste/main/topanga/src/tokens.css">tokens.css</a> (and <a href="https://raw.githubusercontent.com/eric2busy/Oeste/main/topanga/src/tokens.json">tokens.json</a> if you want the machine-readable copy), save it as <code>src/tokens.css</code>, and import it once at your app entry:</p><pre>import "./tokens.css";</pre><p>Light + dark ship together via <code>data-theme</code>.</p>'
    + '<h2>2 · Point Tailwind at data-theme</h2><p>Oeste components use <code>dark:</code> classes, but <code>dark:</code> does not follow <code>data-theme</code> until you tell Tailwind to. Tailwind v4, in your CSS after the Tailwind import:</p><pre>@custom-variant dark (&amp;:where([data-theme="dark"], [data-theme="dark"] *));</pre><p>Tailwind v3? See <a href="#/setup">Setup</a>. Without this line, dark mode silently does nothing.</p>'
    + '<h2>3 · Install a component</h2><p>Install any component with shadcn. shadcn writes the component file into your project:</p><pre>npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/button.json</pre><p>Replace <code>button</code> with any component id. The registry lives at <code>https://oeste.hiddeninwest.com/topanga/r/</code> (index: <code>r/registry.json</code>). Agents: the machine manifest is <code>components.json</code> at the repo root — every component with its registry URL, raw GitHub URL, docs link, and tags.</p>'
    + '<h2>4 · Use it</h2><p>Import from where shadcn put the file:</p><pre>import { Button } from "@/components/ui/button";\n\nexport function SaveAction() {\n  return &lt;Button variant="primary" onClick={() =&gt; {}}&gt;Save changes&lt;/Button&gt;;\n}</pre><p>The <code>@/components/ui/…</code> path is the shadcn default — adjust it if your setup puts files elsewhere.</p>'
    + '<h2>5 · For agents</h2><p>Paste the Agent prompt + JSON contract into your editor. Agents must not invent props beyond the contract. The full machine contract lives in <a href="/topanga/llms.txt">llms.txt</a>.</p>'
    + '<div class="callout"><strong>Honest install story.</strong> <code>@oeste/ui</code> is not a published package — there is nothing to <code>npm install</code>. Install via shadcn above, or copy a snippet and own the file (see <a href="#/setup">Setup</a> for the copy-paste path).</div>'
    + '<h2>Guides — go deeper</h2><p>Getting started covers the mechanics. The guides cover the judgment.</p><ul><li><a href="#/setup">Setup</a> — the full setup: Tailwind v3, copy-paste path, troubleshooting.</li><li><a href="#/first-screen">First screen</a> — one finished settings screen, end to end: Card + Input + Select + Switch + Button + Toast.</li><li><a href="#/build-a-theme">Build a theme</a> — derive a palette, wire dark mode, and turn a token file into a second theme.</li><li><a href="#/layout">Layout</a> — no layout primitives on purpose: native HTML + the spacing scale.</li><li><a href="#/customizing">Customizing</a> — tokens first, compose second, fork third. Never break the invariants.</li></ul><p>Also in these docs: <a href="#/theming">Theming</a>, <a href="#/tokens">Tokens</a>, <a href="#/accessibility">Accessibility</a>, <a href="#/patterns">Patterns</a>, <a href="#/changelog">Changelog</a>, <a href="#/migration">Migration</a>, <a href="#/faq">FAQ</a>.</p>';
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
    + '<h3>Vibe</h3><p>Copy each component from its Vibe lens, compose in one form, wire Save to a Toast. CLI: <code>npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/input.json</code>. The React snippets work today.</p>'
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

function renderFaq() {
  return '<p class="eyebrow">Docs</p><h1>FAQ</h1><p class="lede">Short answers to the questions people actually ask. If yours isn’t here, <a href="https://github.com/eric2busy/Oeste/issues">open an issue on GitHub</a>.</p>'
    + '<h2>Is Oeste an npm package?</h2><p>No. There is no <code>@oeste/ui</code> package to install. Install a component with shadcn (<code>npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/button.json</code>) or copy the code from the Vibe lens and own the file. See <a href="#/getting-started">Getting started</a>.</p>'
    + '<h2>Does it work with Tailwind v3 and v4?</h2><p>Yes, both. The one wiring step is pointing Tailwind’s <code>dark:</code> variant at <code>data-theme</code> — see <a href="#/setup">Setup</a>.</p>'
    + '<h2>Can I use Oeste without React?</h2><p>The components are React. The tokens (<code>src/tokens.css</code>) are plain CSS and work anywhere.</p>'
    + '<h2>Which React setups does it work with?</h2><p>Any React project — Vite, Next.js, Remix, and friends. Registry files are self-contained React + Tailwind.</p>'
    + '<h2>How does dark mode work?</h2><p>Two things, both required: the <code>data-theme</code> toggle and the Tailwind dark variant. Either one alone does nothing visible. See <a href="#/setup">Setup</a> and <a href="#/build-a-theme">Build a theme</a>.</p>'
    + '<h2>Do I have to use all 35 components?</h2><p>No. Install one at a time, only what you need.</p>'
    + '<h2>How do I customize the theme?</h2><p>Tokens first, compose second, fork third — and never break the accessibility invariants. See <a href="#/build-a-theme">Build a theme</a>.</p>'
    + '<h2>Can I use Oeste in a commercial project?</h2><p>Yes. Oeste is <a href="https://github.com/eric2busy/Oeste/blob/main/topanga/LICENSE">MIT licensed</a> — use it in commercial work, including closed-source work. Just keep the MIT copyright notice in copies of the code.</p>'
    + '<h2>How do I report a bug or request a component?</h2><p><a href="https://github.com/eric2busy/Oeste/issues">Open an issue on GitHub</a> — bugs, missing components, and docs fixes all live there.</p>';
}

function renderChangelog() {
  return '<p class="eyebrow">Docs</p><h1>Changelog</h1><p class="lede">What changed, when, and what it means for you. No rewritten history — entries land here when they ship.</p>'
    + '<h2>v0.4.8 — 2026-10-16</h2><ul><li><strong>Components index page (new):</strong> the full component list moves off the home page to its own <code>#/components</code> page. Home now ends at the call to action, and “Browse components” lands on the index instead of the Button page. The sidebar gains an “All components” link to the index.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.7 — 2026-10-15</h2><ul><li><strong>FAQ (new):</strong> a short FAQ page — npm package? Tailwind v3/v4? without React? commercial use? — plus a report-an-issue link to GitHub Issues. In the sidebar, the search index, and the Getting started cross-links.</li><li><strong>License:</strong> Oeste is now MIT licensed (<code>LICENSE</code> at the repo root).</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.6 — 2026-10-15</h2><ul><li><strong>Footer:</strong> tagline changes from “Built for three ways of making.” to “Made for the way you build.”, and the <code>© 2026 hiddeninwest</code> line moves below the nav links (standard footer order).</li><li><strong>Variants layout:</strong> the row label now sits above the demos instead of beside them, and each demo row stays on one scrollable line (buttons keep their true sizes).</li><li><strong>Avatar demo fix:</strong> the Show photo toggle now hides the initials fallback when the photo shows — previously both rendered at once, clipped into a sliced “R” + seam.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.5 — 2026-10-14</h2><ul><li><strong>Footer:</strong> the site footer gains a <code>© 2026 hiddeninwest</code> line linking to <a href="https://hiddeninwest.com">hiddeninwest.com</a>.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.4 — 2026-10-14</h2><ul><li><strong>Registry fix:</strong> the 15 registry files that use <code>React.useId</code> / <code>useState</code> / <code>useRef</code> / <code>useEffect</code> / <code>Children</code> / <code>cloneElement</code> now include <code>import React from "react";</code> — previously they assumed React in scope, which breaks in a standard Vite + React project (automatic JSX runtime). <code>scripts/build_registry.py</code> inserts the import automatically and fails the build if <code>React.*</code> is ever used without it. Files that don’t use <code>React.*</code> are unchanged.</li><li><strong>Search hint:</strong> the header search box now shows a visible <code>⌘K</code> hint (was hover-only via tooltip).</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.3 — 2026-10-14</h2><ul><li><strong>Copy audit:</strong> removed leaked-rules copy from the home page, README, <code>llms.txt</code>, and the sidebar footer; home eyebrow no longer claims <code>oeste.design</code>; Tokens type section corrected (stepped display scale, no “telemetry”); Huntington / Mesa framed as future themes; error docs corrected to “text + role”; Button <code>icon</code> prop documented; unexplained name-drops removed; Avatar demo uses neutral example names.</li><li><strong>Show-more:</strong> component pages gain a Variants section (Button 4 variants × 3 sizes + states; Input / Checkbox / Switch / Toggle / Select states; Progress + Slider values). Accessibility contrast pairs now render live, in both themes, with real tokens. Tokens swatches follow the current theme, and the Tokens page gains a Tokens-in-use section (buttons, text, alerts, badges, surface, progress, focus).</li><li><strong>Nested themes:</strong> <code>data-theme</code> now scopes to any container — a dark card on a light page gets the dark tokens. <code>src/tokens.css</code> + <code>scripts/verify.mjs</code> updated.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.2 — 2026-10-14</h2><ul><li><strong>Setup page (new):</strong> the full setup — tokens, Tailwind v4 + v3, shadcn or copy-paste, troubleshooting.</li><li><strong>Getting started rewritten:</strong> the minimal complete setup — token download, Tailwind dark variant, shadcn install, real import.</li><li><strong>Every snippet + CLI is now real:</strong> Vibe snippets import from <code>@/components/ui/…</code> (where shadcn puts the files); CLI fields are real shadcn registry commands; the home install bar is the real Button command. <code>@oeste/ui</code> is not a published package — the docs no longer imply it is.</li><li><strong>Display headings use the wordmark treatment:</strong> Manrope 700, tracking -0.06em (was 500 / -0.04em).</li><li><strong>Menu:</strong> on mobile/tablet the open menu pops up in the current viewport instead of at the top of the document.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.1 — 2026-10-14</h2><ul><li><strong>Guides:</strong> four new docs pages, linked from Getting started as a hub — <a href="#/first-screen">First screen</a> (one finished settings screen, end to end), <a href="#/build-a-theme">Build a theme</a> (palette derivation, dark-mode wiring, what makes a second theme), <a href="#/layout">Layout</a> (native HTML + spacing scale, no layout primitives), <a href="#/customizing">Customizing</a> (tokens first, compose second, fork third). All four are in the sidebar and the search index.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.4.0 — 2026-10-14</h2><ul><li><strong>Registry (shadcn-compatible):</strong> every component ships as a registry item at <code>https://oeste.hiddeninwest.com/topanga/r/&lt;id&gt;.json</code> (index: <code>r/registry.json</code>). Install with <code>npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/button.json</code>. Files are self-contained React + Tailwind, extracted from <code>src/index.js</code> by <code>scripts/build_registry.py</code> — regenerate, never hand-edit. Registry files need <code>src/tokens.css</code> (Topanga tokens) loaded once. The registry is served from oeste.hiddeninwest.com. Machine manifest: <code>components.json</code> at the repo root.</li><li><strong>Advanced search:</strong> header search is now faceted instant search: one box searches components + tokens + docs, results grouped with facet filters (All / Components / Tokens / Docs), instant as you type. Keys: Cmd+K / Ctrl+K focuses search, ArrowUp / Down moves through results, Enter opens, Escape closes.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.3.4 — 2026-10-14</h2><ul><li><strong>Header cluster tightened:</strong> the gap between the theme toggle and the Menu button is closed up. The Ghost component itself is untouched.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.3.3 — 2026-10-14</h2><ul><li><strong>Header Menu uses the Ghost Button component:</strong> the Menu button is now a real <code>.btn.btn-ghost</code> — no one-off menu styles. The docs site also gains real <code>.btn-ghost</code> and <code>.btn-danger</code> rules matching the library variants (ghost: transparent + ink/paper 5% hover; danger: Danger bg + paper text, dark text #121110). The Button demo’s fake Ghost (secondary + inline <code>border:0</code>) and inline-styled Danger now use the real components.</li><li><strong>Theme toggle goes borderless:</strong> the icon-only theme control drops its border and fill (ghost-equivalent for an icon button). The 44px touch targets, hover background, and 2px focus outline are unchanged.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.3.2 — 2026-10-14</h2><ul><li><strong>Wordmark:</strong> the header wordmark is now all lowercase — <strong>oeste</strong> (was “Oeste”). Same type treatment: Manrope 700, 24px, -0.06em.</li><li><strong>Breaking:</strong> none.</li></ul>'
    + '<h2>v0.3.1 — 2026-10-14</h2><ul><li><strong>Typography correction (the v0.3.0 display treatment was wrong):</strong> the real treatment from the reference preview build is Manrope <strong>500</strong>, tracking <strong>-0.04em</strong>, leading <strong>1.1</strong> — not 800 / -0.025em / 1.05. Headings (h2/h3) are also 500, tracking -0.025em. Wordmark is 700, 24px, -0.06em. Body leading is 1.55, hero copy 1.65. The unused Manrope 800 weight is no longer loaded.</li><li><strong>Hero heading locked to 2 lines:</strong> display size now steps 40px on phones, 48px at ≥480px, 72px at ≥720px, so “One system. / Three perspectives.” never wraps to a third line.</li><li><strong>Breaking:</strong> none. Token values only.</li></ul>'
    + '<h2>v0.3.0 — 2026-10-14</h2><ul><li><strong>Menu auto-close:</strong> tapping any sidebar link navigates and closes the menu. Escape also closes the menu when it is open.</li><li><strong>Syntax highlighting:</strong> every code block is now colorized (keywords, strings, numbers, comments, JSON keys, JSX tags/props, CLI flags) in light and dark, with code-text colors that pass WCAG AA 4.5:1 on the code background.</li><li><strong>Display typography (superseded by v0.3.1):</strong> display type was set to Manrope 800, 48px mobile → 72px desktop (clamp), line-height 1.05, letter-spacing -0.025em. Headings were weight 700. This was corrected in v0.3.1 to 500 / -0.04em / 1.1 (the reference build treatment).</li><li><strong>New primitives (14):</strong> Avatar, Separator, Slider, Tooltip, Popover, Dropdown Menu, Toggle, Collapsible, Skeleton, Label, Breadcrumb, Pagination, Table, Empty State — React + Tailwind in <code>src/index.js</code>, full docs pages with demos. Total: 35 components.</li><li><strong>Form pattern:</strong> a third Patterns entry — Label + Input + Select + Checkbox + RadioGroup + Button + error summary (role=alert) + Toast confirm.</li><li><strong>Breaking:</strong> none for consumers. Additive-only release.</li></ul>'
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
  return '<p class="eyebrow">Docs · Guide</p><h1>Build a theme</h1><p class="lede">A theme is a token file. Same names, same components, new values. Topanga ships two themes: light and dark.</p>'
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
    + '<h2>1 · Tokens</h2><p>Download <a href="https://raw.githubusercontent.com/eric2busy/Oeste/main/topanga/src/tokens.css">tokens.css</a> (and <a href="https://raw.githubusercontent.com/eric2busy/Oeste/main/topanga/src/tokens.json">tokens.json</a> if you want the machine-readable copy). Save it as <code>src/tokens.css</code> and import it first at your app entry:</p><pre>import "./tokens.css";</pre><p>shadcn does <em>not</em> install the tokens — this step is always manual.</p>'
    + '<h2>2 · Tailwind</h2><p>Oeste components use <code>dark:</code> classes. <code>dark:</code> follows <code>data-theme</code> only when you point it there.</p><p><strong>Tailwind v4</strong> — in your CSS, after the Tailwind import:</p><pre>@custom-variant dark (&amp;:where([data-theme="dark"], [data-theme="dark"] *));</pre><p><strong>Tailwind v3</strong> — in <code>tailwind.config.js</code>, then restart the dev server:</p><pre>export default {\n  darkMode: ["class", \'[data-theme="dark"]\'],\n  // …the rest of your config\n};</pre><p>Which version? Check <code>tailwindcss</code> in your <code>package.json</code>: <code>^4</code> is v4, <code>^3</code> is v3.</p>'
    + '<h2>3 · Install</h2><p><strong>shadcn (recommended).</strong> One command per component; shadcn writes the file into your project:</p><pre>npx shadcn@latest add https://oeste.hiddeninwest.com/topanga/r/button.json</pre><p>Import from where shadcn put the file. The docs show the shadcn default:</p><pre>import { Button } from "@/components/ui/button";</pre><p><strong>Copy-paste.</strong> Open a component page, switch to the Vibe lens, copy the code into your own file, and import from where you put it. You own the file — change it like any other code in your project.</p>'
    + '<h2>4 · Dark mode</h2><p>Dark mode needs two things: the <code>data-theme</code> toggle (see <a href="#/build-a-theme">Build a theme</a>) <em>and</em> the Tailwind variant in §2. Either one alone does nothing visible.</p>'
    + '<h2>5 · Troubleshooting</h2><ul><li><strong>Dark mode does nothing</strong> — the §2 variant line is missing, or in the wrong file.</li><li><strong>“Cannot find module ‘@oeste/ui’”</strong> — <code>@oeste/ui</code> is not a published package. Import from the file path where shadcn put the component, or where you copied it.</li><li><strong>Styles look unstyled, or colors are wrong</strong> — <code>tokens.css</code> is not imported, or something overrides it. Check the import is in your app entry.</li><li><strong>shadcn asks where to put the file</strong> — any components directory works. Keep the <code>@/components/ui</code> convention so the docs’ import paths match.</li><li><strong>Tailwind v3 config change has no effect</strong> — restart the dev server.</li></ul>';
}

function render() {
  const { route, id, lens } = parseHash();
  closeMenu();
  const view = $(" #view".trim());
  document.querySelectorAll(".nav-link").forEach((a) => a.classList.remove("active"));
  if (route === "home") view.innerHTML = renderHome();
  else if (route === "components") { view.innerHTML = id ? renderComponent(id, lens) : renderComponentsIndex(); }
  else if (route === "blocks") { view.innerHTML = id ? renderBlock(id) : renderBlocksIndex(); }
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
  else if (route === "faq") view.innerHTML = renderFaq();
  else view.innerHTML = renderHome();
  const active = document.querySelector('.nav-link[href="#/' + route + '"]');
  if (active) active.classList.add("active");
  document.querySelectorAll("#componentNav a").forEach((a) => a.classList.toggle("active", route === "components" && a.getAttribute("href").includes(id)));
  document.querySelectorAll("#blockNav a").forEach((a) => a.classList.toggle("active", route === "blocks" && a.getAttribute("href").includes(id)));
  highlightAll();
  bindDemos();
  bindBlockStage();
  bindBlockDemos();
  bindPlayground();
  bindNotFound();
  playOesteEntrance(view);
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
  { title: "FAQ", desc: "Is it an npm package? Tailwind v3/v4? React setups? Commercial use?", route: "#/faq", keys: "faq npm package tailwind react commercial license issue bug" },
  { title: "Components", desc: "All components in the library — browse the full index.", route: "#/components", keys: "components list index browse all" },
  { title: "Blocks", desc: "Full page sections composed from Topanga components. Own count, same registry.", route: "#/blocks", keys: "blocks sections hero pricing navbar footer page template" },
  { title: "Home", desc: "Three libraries. Three lenses.", route: "#/home", keys: "home overview" },
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
  const FACETS = [["all", "All"], ["components", "Components"], ["blocks", "Blocks"], ["tokens", "Tokens"], ["docs", "Docs"]];
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
    if (facet === "all" || facet === "blocks") {
      BLOCKS.forEach((b) => {
        const hay = (b.name + " " + b.tagline + " block section " + b.uses.join(" ")).toLowerCase();
        if (matches(hay, terms)) out.push({ group: "Blocks", title: b.name, sub: b.tagline, route: "#/blocks/" + b.id });
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
  ensureOesteDocsStyles();
  document.getElementById("componentNav").innerHTML = COMPONENTS.map((c) => '<a class="nav-link" href="#/components/' + c.id + '">' + esc(c.name) + "</a>").join("");
  document.getElementById("blockNav").innerHTML = BLOCKS.map((b) => '<a class="nav-link" href="#/blocks/' + b.id + '">' + esc(b.name) + "</a>").join("");
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
