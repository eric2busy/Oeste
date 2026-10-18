/* Mesa docs site — vanilla JS, hash routing, no build step. */
"use strict";

const COMPONENTS = [
  { id: "site-nav", name: "SiteNav", tagline: "Sticky header. Wordmark, links, tools, readbar.",
    anatomy: ["Wordmark placeholder", "Nav links", "Search IconButton (opens the CommandPalette)", "Theme toggle + nav toggle", "Readbar (2px oxblood)"],
    props: [["links", "{ label, href }[]", "No — []", "Nav links."], ["active", "string", "No — \"\"", "href of the current page (aria-current)."], ["theme", "light | dark", "No — dark", "Current theme; toggle labels the target mode."], ["onThemeToggle", "() => void", "No", "Theme toggle handler."], ["onMenuToggle", "() => void", "No", "Nav toggle handler."]],
    keyboard: [["Tab", "Move through links and tools."], ["Enter / Space", "Activate the focused link or tool."]],
    invariants: ["Sticky with nav-bg blur + bottom hairline.", "Active link is hero-em 600; hover is ink on line-soft.", "Header search is an IconButton (34px circle, magnifier) that opens the CommandPalette overlay — never a search pill in the header.", "Readbar is a 2px oxblood bar at the nav bottom.", "Wordmark is an image placeholder in Figma; the docs site uses text."],
    contract: { format: "oeste.component.v1", component: "SiteNav", props: { links: "array", active: "string", theme: ["light", "dark"] }, a11y: { nav: "nav + aria-label", current: "aria-current=page" } },
    prompt: "Build a Mesa SiteNav: sticky, nav-bg blur, bottom hairline, wordmark, links (active hero-em 600), search IconButton (34px circle, magnifier) that opens the CommandPalette overlay, theme toggle + nav toggle, 2px oxblood readbar. Mesa tokens: paper #faf9f7 / #100e0b, oxblood #8a1f2b / #c9404f.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/site-nav.json",
    code: "import { SiteNav } from \"@/components/ui/site-nav\";\n\nexport function Header() {\n  return <SiteNav links={[{ label: \"Home\", href: \"#/home\" }, { label: \"Components\", href: \"#/components/button\" }]} active=\"#/home\" />;\n}" },
  { id: "command-palette", name: "CommandPalette", tagline: "One overlay for search and jump.",
    anatomy: ["Scrim", "Box (radius 12, palette shadow)", "Borderless input + bottom hairline", "Results list + hint row"],
    props: [["open", "boolean", "No — false", "Controls visibility."], ["query / onQueryChange", "string / (v) => void", "Yes", "Controlled search text."], ["items", "{ id, label, kind }[]", "Yes", "Results."], ["onSelect", "(item) => void", "Yes", "Fires on result pick."], ["onClose", "() => void", "Yes", "Fires on scrim / Escape."]],
    keyboard: [["Type", "Filter results."], ["Enter", "Open the selected result."], ["Escape", "Close the palette."], ["ArrowUp / ArrowDown", "Not specified in source."]],
    invariants: ["Scrim is the palette overlay; there is no modal in Mesa.", "Selected / hover item gets the wash background.", "Box is max-width 580px, results max-height 330px.", "Hint row names Enter + Escape."],
    contract: { format: "oeste.component.v1", component: "CommandPalette", props: { open: "boolean", query: "string", items: "array" }, a11y: { dialog: "role=dialog + aria-modal", label: "aria-label" } },
    prompt: "Build a Mesa CommandPalette: fixed overlay with scrim, card box radius 12 with palette shadow, borderless input with bottom hairline, results max-height 330px, wash on hover/selected, hint row. Escape closes. Never build a separate modal — the palette is Mesa's overlay.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/command-palette.json",
    code: "import { useState } from \"react\";\nimport { CommandPalette } from \"@/components/ui/command-palette\";\n\nexport function Palette() {\n  const [open, setOpen] = useState(false);\n  const [query, setQuery] = useState(\"\");\n  return <CommandPalette open={open} query={query} onQueryChange={setQuery} items={[]} onSelect={() => setOpen(false)} onClose={() => setOpen(false)} />;\n}" },
  { id: "page-header", name: "PageHeader", tagline: "Eyebrow, H1, deck, reference, ghost number.",
    anatomy: ["Eyebrow (mono, faint)", "H1 (max 18ch)", "Deck (max 60ch)", "Reference line + ghost number"],
    props: [["eyebrow", "string", "No", "Mono eyebrow."], ["title", "string", "Yes", "H1 text."], ["deck", "string", "No", "Deck paragraph."], ["reference", "string", "No", "Mono reference line."], ["ghostNumber", "string", "No", "Ghost numeral, decorative."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["H1 is clamp(32px,7vw,52px), serif 700, max 18ch.", "Ghost number is Merriweather 900, 118px, ink at 6%, decorative.", "Deck is 17.5px ink-soft, max 60ch.", "Reference is mono 12.5px ink-soft."],
    contract: { format: "oeste.component.v1", component: "PageHeader", props: { title: "string", eyebrow: "string?", deck: "string?", reference: "string?", ghostNumber: "string?" }, a11y: { heading: "single h1", decorative: "ghost number aria-hidden" } },
    prompt: "Build a Mesa PageHeader: faint mono eyebrow, serif H1 clamp(32px,7vw,52px) max 18ch, 17.5px ink-soft deck max 60ch, mono reference line, ghost number (Merriweather 900, 118px, ink 6%, aria-hidden).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/page-header.json",
    code: "import { PageHeader } from \"@/components/ui/page-header\";\n\nexport function Head() {\n  return <PageHeader eyebrow=\"Components\" title=\"File Card\" deck=\"Reference, title, description, meta, assignment.\" reference=\"Ref 01\" ghostNumber=\"01\" />;\n}" },
  { id: "hero", name: "Hero", tagline: "Bignum, H1 with accent em, CTAs, trustline.",
    anatomy: ["Eyebrow (oxblood)", "Bignum-label above the bignum + bignum + optional suffix", "H1 with accent em", "Sub + CTA row + trustline"],
    props: [["eyebrow", "string", "No", "Mono eyebrow, oxblood."], ["bignum", "string", "No", "Big number."], ["bignumLabel", "string", "No", "Label above the bignum — names what the number counts."], ["bignumSuffix", "string", "No", "Suffix after the bignum (e.g. '+')."], ["title", "string", "Yes", "H1 text."], ["accent", "string", "No", "Accent segment of the H1."], ["sub", "string", "No", "Sub copy, max 56ch."], ["trustlineCount", "string", "No", "Linked count text in the trustline (e.g. '67 components')."], ["trustlineCountHref", "string", "No", "Destination of the trustline count link."], ["trustline", "string", "No", "Trustline statement after the count link."]],
    keyboard: [["Tab", "Move through the CTA buttons."], ["Enter / Space", "Activate the focused CTA."]],
    invariants: ["Bignum-label sits above the bignum (names what the number counts); suffix is a small span after the number.", "Bignum is serif 900, clamp(58px,16vw,124px), tabular, -0.015em.", "H1 em is italic accent-deep (light) / #e87a88 (dark).", "CTA row is 6px below the sub. CTAs are .btn + .btn.ghost; ghost carries a live dot.", "Trustline count link is oxblood (deep in light)."],
    contract: { format: "oeste.component.v1", component: "Hero", props: { title: "string", accent: "string?", bignum: "string?", bignumLabel: "string?", bignumSuffix: "string?", sub: "string?", trustlineCount: "string?", trustlineCountHref: "string?", trustline: "string?" }, a11y: { heading: "single h1", em: "accent segment" } },
    prompt: "Build a Mesa Hero: oxblood eyebrow, bignum-label above the bignum, serif-900 bignum clamp(58px,16vw,124px) with optional small suffix, H1 clamp(27px,6.8vw,42px) with italic accent em (accent-deep light / #e87a88 dark), sub max 56ch, CTA row 6px below sub with .btn + .btn.ghost (ghost carries a live dot), trustline with oxblood count link.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/hero.json",
    code: "import { Hero } from \"@/components/ui/hero\";\n\nexport function Top() {\n  return <Hero eyebrow=\"Library\" bignum=\"67\" bignumLabel=\"Components\" title=\"One system.\" accent=\"Three lenses.\" sub=\"Description goes here.\" trustlineCount=\"67 components\" trustlineCountHref=\"#/components\" trustline=\"3 lenses, 1 token set.\" />;\n}" },
  { id: "status-badge", name: "StatusBadge", tagline: "Live status with a pulsing dot.",
    anatomy: ["Dot (7px ok, 2.2s pulse)", "Label"],
    props: [["children", "ReactNode", "Yes", "Badge label."], ["live", "boolean", "No — true", "Shows the pulsing dot."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Pill radius 999, card bg, 1px line border, padding 6/14.", "Dot is 7px ok with a 2.2s pulse.", "Label is 12.5px ink-soft.", "Meaning is in the text, never color alone."],
    contract: { format: "oeste.component.v1", component: "StatusBadge", props: { live: "boolean" }, a11y: { meaning: "text, never color alone" } },
    prompt: "Build a Mesa StatusBadge: inline-flex pill, card bg, 1px line border, 12.5px ink-soft label, 7px ok dot with 2.2s pulse. Meaning in text, never color alone.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/status-badge.json",
    code: "import { StatusBadge } from \"@/components/ui/status-badge\";\n\nexport function Live() {\n  return <StatusBadge>All systems live</StatusBadge>;\n}" },
  { id: "file-card", name: "FileCard", tagline: "Reference, title, description, meta, assignment.",
    anatomy: ["Reference (mono, oxblood)", "Title (serif)", "Description + meta", "Assignment line"],
    props: [["reference", "string", "No", "Mono reference."], ["title", "string", "Yes", "Card title."], ["description", "string", "No", "Description."], ["meta", "string", "No", "Meta line."], ["assignment", "awaiting | on", "No", "Assignment state."]],
    keyboard: [["Tab", "Move focus to the card link."], ["Enter", "Open the card."]],
    invariants: ["Card bg, 1px line border, radius 10, padding 22.", "Hover: translateY(-2px) + card-hover shadow + border shift.", "Title is serif 700, clamp(21px,5vw,27px).", "Reference is mono 12px oxblood, 0.08em."],
    contract: { format: "oeste.component.v1", component: "FileCard", props: { title: "string", reference: "string?", description: "string?", meta: "string?", assignment: ["awaiting", "on"] }, a11y: { link: "real <a>", focus: "visible outline" } },
    prompt: "Build a Mesa FileCard: block link, card bg, 1px line border, radius 10, padding 22, hover translateY(-2px) + shadow, mono oxblood reference, serif title clamp(21px,5vw,27px), description, meta, AssignmentLine.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/file-card.json",
    code: "import { FileCard } from \"@/components/ui/file-card\";\n\nexport function Entry() {\n  return <FileCard reference=\"Ref 01\" title=\"Title goes here.\" description=\"Description goes here.\" meta=\"Meta goes here.\" assignment=\"awaiting\" />;\n}" },
  { id: "folder-card", name: "FolderCard", tagline: "Stamped folder with a meta row.",
    anatomy: ["Stamp pill (absolute, rotated 6deg)", "Title (sans 800, uppercase)", "Meta line + meta row (dashed top)", "Assignment line"],
    props: [["stamp", "open | new | review | closed", "No — open", "Stamp variant."], ["stampLabel", "string", "No", "Stamp text (defaults to the variant)."], ["title", "string", "Yes", "Folder title."], ["meta", "string", "No", "Mono meta line."], ["metaRow", "{ label, value }[]", "No", "Meta row items."], ["assignment", "awaiting | on", "No", "Assignment state."]],
    keyboard: [["—", "Not interactive in source. No keyboard behavior."]],
    invariants: ["Fixed 290px wide, radius 10, padding 34/20/16.", "Stamp: 10px, 800, 0.18em, 2px border, 4px radius, rotated 6deg.", "Stamp colors are fixed in both themes (Open #c9404f, New #d8a93f, Review #c98a2b, Closed #777777).", "Hover (hover-capable only): translateY(-4px) + folder shadow."],
    contract: { format: "oeste.component.v1", component: "FolderCard", props: { stamp: ["open", "new", "review", "closed"], title: "string", meta: "string?", metaRow: "array" }, a11y: { decorative: "stamp is presentational" } },
    prompt: "Build a Mesa FolderCard: 290px wide, radius 10, padding 34/20/16, rotated 6deg stamp pill (Open #c9404f, New #d8a93f, Review #c98a2b, Closed #777777, fixed both themes), sans-800 uppercase title, dashed meta row. Hover only on hover-capable devices.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/folder-card.json",
    code: "import { FolderCard } from \"@/components/ui/folder-card\";\n\nexport function Folder() {\n  return <FolderCard stamp=\"open\" title=\"Folder title\" meta=\"Meta goes here.\" metaRow={[{ label: \"Items\", value: \"12\" }]} assignment=\"on\" />;\n}" },
  { id: "data-table", name: "DataTable", tagline: "Rows with reference, title, meta, assignment.",
    anatomy: ["Row grid (150px / 1fr / auto / auto / 20px)", "Reference + title + meta", "Assignment + go arrow"],
    props: [["rows", "{ id, reference, title, meta, assignment?, href? }[]", "Yes", "Rows."]],
    keyboard: [["Tab", "Move through row links."], ["Enter", "Open the focused row."]],
    invariants: ["Top 1px line border; rows have a bottom 1px line border.", "Row hover is the wash background.", "Title is sans 700, 17px; reference is mono 12px oxblood.", "Go arrow is 18px ink-soft."],
    contract: { format: "oeste.component.v1", component: "DataTable", props: { rows: "array" }, a11y: { link: "real <a> per row" } },
    prompt: "Build a Mesa DataTable: top 1px line border, rows grid 150px/1fr/auto/auto/20px, padding 18/8, bottom hairlines, wash on hover, mono oxblood reference, sans-700 17px title, AssignmentLine, 18px go arrow.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/data-table.json",
    code: "import { DataTable } from \"@/components/ui/data-table\";\n\nexport function Ledger() {\n  return <DataTable rows={[{ id: \"1\", reference: \"Ref 01\", title: \"Title goes here.\", meta: \"Meta goes here.\", assignment: \"awaiting\" }]} />;\n}" },
  { id: "pill", name: "Pill", tagline: "Small uppercase status.",
    anatomy: ["Label"],
    props: [["variant", "type | open | verifying | reward | indexed | flag", "No — type", "Pill variant."], ["children", "ReactNode", "Yes", "Pill label."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["11px, 700, 0.08em, uppercase, radius 999, padding 3/10.", "Type / Indexed: transparent bg, 1px line border, ink-soft text.", "Open: border + text #2e2b25 (light) / #ffffff (dark).", "Verifying + Reward carry their own bg/text/border pairs.", "Flag is a separate treatment, not a rounded pill: fixed gold bg #e8c56a, dark text #0d0c0a, 4px radius, padding 4/10, 10.5px 800, 0.14em."],
    contract: { format: "oeste.component.v1", component: "Pill", props: { variant: ["type", "open", "verifying", "reward", "indexed", "flag"] }, a11y: { meaning: "text, never color alone" } },
    prompt: "Build a Mesa Pill: 11px 700 0.08em uppercase, radius 999, padding 3/10. Variants type/open/verifying/reward/indexed with their exact bg/border/text pairs. Flag is a separate treatment: fixed gold bg #e8c56a, dark text #0d0c0a, 4px radius, padding 4/10, 10.5px 800, 0.14em. Meaning in text, never color alone.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/pill.json",
    code: "import { Pill } from \"@/components/ui/pill\";\n\nexport function Status() {\n  return <Pill variant=\"verifying\">Verifying</Pill>;\n}" },
  { id: "stamp", name: "Stamp", tagline: "Rotated status mark.",
    anatomy: ["Label"],
    props: [["tone", "default | ok | dim | warn", "No — default", "Stamp tone."], ["children", "ReactNode", "Yes", "Stamp label."]],
    keyboard: [["—", "Decorative. No keyboard behavior."]],
    invariants: ["Rotated 6deg, 2px border, 4px radius, transparent bg.", "Mono 11px, 700, 0.14em, uppercase.", "Tones: default ink, ok, dim (ink-faint), warn.", "Stamp border is a 2px solid rule, not a shadow."],
    contract: { format: "oeste.component.v1", component: "Stamp", props: { tone: ["default", "ok", "dim", "warn"] }, a11y: { decorative: "presentational" } },
    prompt: "Build a Mesa Stamp: rotated 6deg, 2px border, 4px radius, transparent bg, mono 11px 700 0.14em uppercase. Tones default/ok/dim/warn.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/stamp.json",
    code: "import { Stamp } from \"@/components/ui/stamp\";\n\nexport function Mark() {\n  return <Stamp tone=\"ok\">Verified</Stamp>;\n}" },
  { id: "assignment-line", name: "AssignmentLine", tagline: "Lamp plus status text.",
    anatomy: ["Lamp (9px circle)", "Status text (mono)"],
    props: [["state", "awaiting | on", "No — awaiting", "Assignment state."], ["label", "string", "No", "Status text (defaults to the state)."], ["compact", "boolean", "No — false", "Hides the top hairline (table rows)."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Awaiting lamp #5a4a1f + halo rgba(216,169,63,0.12); on lamp #3f9e4d + glow + 2.2s pulse.", "Status is mono 10.5px, 0.16em, uppercase.", "On cards it sits under a top hairline.", "Lamp colors are fixed in both themes."],
    contract: { format: "oeste.component.v1", component: "AssignmentLine", props: { state: ["awaiting", "on"], label: "string?", compact: "boolean" }, a11y: { meaning: "text + lamp, never color alone" } },
    prompt: "Build a Mesa AssignmentLine: 9px lamp + mono 10.5px 0.16em uppercase status. Awaiting #5a4a1f + halo; on #3f9e4d + glow + 2.2s pulse. Top hairline on cards, compact mode in tables.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/assignment-line.json",
    code: "import { AssignmentLine } from \"@/components/ui/assignment-line\";\n\nexport function Assigned() {\n  return <AssignmentLine state=\"on\" />;\n}" },
  { id: "button", name: "Button", tagline: "Primary, solid, ghost, solid small.",
    anatomy: ["Label", "Surface", "Focus ring (3px oxblood at 12%)"],
    props: [["children", "ReactNode", "Yes", "Button label."], ["variant", "primary | solid | ghost | solid-small", "No — primary", "Button variant."], ["disabled", "boolean", "No — false", "Blocks interaction."], ["type", "button | submit", "No — button", "Button type."], ["onClick", "() => void", "No", "Click handler."]],
    keyboard: [["Tab", "Move focus to the button."], ["Enter / Space", "Activate."]],
    invariants: ["Primary (.btn): ink bg (light) / oxblood bg (dark). Solid is oxblood in both themes.", "Ghost: transparent, 1px line border (dark #4a4034); hover oxblood border + text.", "Hover lifts 1px + deepens to accent-deep.", "Focus is the 3px oxblood-at-12% ring. Disabled is 0.5 opacity."],
    contract: { format: "oeste.component.v1", component: "Button", props: { variant: ["primary", "solid", "ghost", "solid-small"], disabled: "boolean" }, a11y: { focus: "3px oxblood ring at 12%", disabled: "0.5 opacity" } },
    prompt: "Build a Mesa Button: variants primary/solid/ghost/solid-small. Primary is ink bg light / oxblood dark; solid is oxblood both themes; ghost is transparent with 1px line border. Hover lifts 1px + accent-deep. Focus is the 3px oxblood-at-12% ring.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/button.json",
    code: "import { Button } from \"@/components/ui/button\";\n\nexport function SaveAction() {\n  return <Button variant=\"primary\" onClick={() => {}}>Save changes</Button>;\n}" },
  { id: "filter-chip", name: "FilterChip", tagline: "Filter with a count.",
    anatomy: ["Label", "Count (0.55 opacity)"],
    props: [["children", "ReactNode", "Yes", "Chip label."], ["count", "number", "No", "Count badge."], ["active", "boolean", "No — false", "Active state (aria-pressed)."], ["onToggle", "() => void", "No", "Toggle handler."]],
    keyboard: [["Tab", "Move focus to the chip."], ["Enter / Space", "Toggle the chip."]],
    invariants: ["13px, padding 7/14, 1px line border, radius 999, card bg.", "Hover: ink-soft border + ink text.", "Active: ink bg/border (light) / oxblood bg/border (dark), white text.", "Count is 11.5px, 0.55 opacity, 5px left margin."],
    contract: { format: "oeste.component.v1", component: "FilterChip", props: { active: "boolean", count: "number?" }, a11y: { pressed: "aria-pressed", state: "fill + label, never color alone" } },
    prompt: "Build a Mesa FilterChip: 13px, padding 7/14, 1px line border, radius 999, card bg. Active is ink bg light / oxblood dark, white text. Count 11.5px at 0.55 opacity. aria-pressed tracks state.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/filter-chip.json",
    code: "import { useState } from \"react\";\nimport { FilterChip } from \"@/components/ui/filter-chip\";\n\nexport function Filter() {\n  const [active, setActive] = useState(false);\n  return <FilterChip active={active} onToggle={() => setActive(!active)} count={12}>Open</FilterChip>;\n}" },
  { id: "forum-control", name: "ForumControl", tagline: "Forum toggle.",
    anatomy: ["Label"],
    props: [["children", "ReactNode", "Yes", "Control label."], ["on", "boolean", "No — false", "On state (aria-pressed)."], ["onToggle", "() => void", "No", "Toggle handler."]],
    keyboard: [["Tab", "Move focus to the control."], ["Enter / Space", "Toggle the control."]],
    invariants: ["Mono 11.5px, 700, 0.08em, uppercase, padding 8/14, radius 999.", "Transparent bg, 1px line border, ink-soft text.", "On: oxblood bg/border, white text.", "State is fill + label, never color alone.", "Never underlined — the pill renders as <button> or <a>."],
    contract: { format: "oeste.component.v1", component: "ForumControl", props: { on: "boolean" }, a11y: { pressed: "aria-pressed" } },
    prompt: "Build a Mesa ForumControl: mono 11.5px 700 0.08em uppercase, padding 8/14, 1px line border, radius 999, never underlined. On is oxblood bg/border, white text. aria-pressed tracks state.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/forum-control.json",
    code: "import { useState } from \"react\";\nimport { ForumControl } from \"@/components/ui/forum-control\";\n\nexport function Forum() {\n  const [on, setOn] = useState(false);\n  return <ForumControl on={on} onToggle={() => setOn(!on)}>Discussion</ForumControl>;\n}" },
  { id: "submission-form", name: "SubmissionForm", tagline: "Labeled fields, radio options, submit.",
    anatomy: ["Field (label + input, hairline-separated)", "Textarea + select + radio options", "Submit (.btn)"],
    props: [["onSubmit", "(data: FormData) => void", "No", "Submit handler. Form is uncontrolled by default."]],
    keyboard: [["Tab", "Move through fields."], ["ArrowUp / ArrowDown", "Move between radio options."], ["Enter", "Submit the form."]],
    invariants: ["Form card: 1px line border, radius 8, card bg, padding 6/22/26.", "Labels are mono 11.5px, 700, 0.14em, uppercase, ink-soft.", "Inputs: full width, 1px line border, radius 6, paper bg, padding 12/14.", "Focus: oxblood border + 3px oxblood-at-12% ring. Radio labels are plain 15px body text."],
    contract: { format: "oeste.component.v1", component: "SubmissionForm", props: { onSubmit: "function?" }, a11y: { label: "htmlFor", focus: "oxblood ring" } },
    prompt: "Build a Mesa SubmissionForm: card radius 8, fields separated by hairlines, mono 11.5px uppercase labels, inputs radius 6 paper bg padding 12/14, focus oxblood border + 3px ring, radio options as bordered rows, submit with .btn.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/submission-form.json",
    code: "import { SubmissionForm } from \"@/components/ui/submission-form\";\n\nexport function Submit() {\n  return <SubmissionForm onSubmit={(data) => console.log(Object.fromEntries(data))} />;\n}" },
  { id: "directory-search", name: "DirectorySearch", tagline: "Full-width search input.",
    anatomy: ["Input", "Empty state (mono, faint)"],
    props: [["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["placeholder", "string", "No — Search the directory…", "Placeholder text."]],
    keyboard: [["Tab", "Move focus into the search."], ["Type", "Filter the directory."], ["Escape", "Not specified in source."]],
    invariants: ["Full width, card bg, 1px line border, radius 8, padding 12/14, 15px.", "Placeholder is ink-faint.", "Focus: oxblood border.", "Empty state is mono 13px ink-faint, padding 20/6."],
    contract: { format: "oeste.component.v1", component: "DirectorySearch", props: { value: "string", placeholder: "string?" }, a11y: { label: "aria-label", placeholder: "never the label" } },
    prompt: "Build a Mesa DirectorySearch: full-width input, card bg, 1px line border, radius 8, padding 12/14, 15px, ink-faint placeholder, oxblood focus border. Empty state is mono 13px ink-faint.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/directory-search.json",
    code: "import { useState } from \"react\";\nimport { DirectorySearch } from \"@/components/ui/directory-search\";\n\nexport function Search() {\n  const [value, setValue] = useState(\"\");\n  return <DirectorySearch value={value} onChange={setValue} />;\n}" },
  { id: "section-head", name: "SectionHead", tagline: "Kicker plus H2 plus lede.",
    anatomy: ["Kicker", "H2", "Lede (max 60ch)"],
    props: [["kicker", "string", "No", "Kicker text."], ["title", "string", "Yes", "H2 text."], ["lede", "string", "No", "Lede paragraph."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Kicker + H2 clamp(26px,5vw,36px) + lede 16.5px ink-soft.", "Margin-bottom 22.", "Lede max 60ch."],
    contract: { format: "oeste.component.v1", component: "SectionHead", props: { title: "string", kicker: "string?", lede: "string?" }, a11y: { heading: "h2" } },
    prompt: "Build a Mesa SectionHead: Kicker + H2 clamp(26px,5vw,36px) + 16.5px ink-soft lede max 60ch, margin-bottom 22.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/section-head.json",
    code: "import { SectionHead } from \"@/components/ui/section-head\";\n\nexport function Head() {\n  return <SectionHead kicker=\"Section\" title=\"Title goes here.\" lede=\"Description goes here.\" />;\n}" },
  { id: "kicker", name: "Kicker", tagline: "Mono eyebrow, hero-em or faint.",
    anatomy: ["Label"],
    props: [["children", "ReactNode", "Yes", "Kicker text."], ["variant", "default | faint", "No — default", "Ekick variant uses ink-faint."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Mono 11px, 700, 0.26em, uppercase, hero-em (the accessible accent for normal-size text).", "Ekick variant uses ink-faint.", "Kickers are never body text."],
    contract: { format: "oeste.component.v1", component: "Kicker", props: { variant: ["default", "faint"] }, a11y: { text: "never color alone as the only cue" } },
    prompt: "Build a Mesa Kicker: mono 11px 700 0.26em uppercase, hero-em. Faint variant uses ink-faint.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/kicker.json",
    code: "import { Kicker } from \"@/components/ui/kicker\";\n\nexport function Eyebrow() {\n  return <Kicker>Section</Kicker>;\n}" },
  { id: "breadcrumbs", name: "Breadcrumbs", tagline: "Trail with separators.",
    anatomy: ["Links", "Separators", "Current page (not a link)"],
    props: [["items", "{ label, href? }[]", "Yes", "Trail items; last is current."]],
    keyboard: [["Tab", "Move through links."], ["Enter", "Follow the focused link."]],
    invariants: ["12.5px ink-soft, 0.02em; links hover accent.", "Separators have 8px margins, 0.5 opacity.", "Current page is text with aria-current, never a link."],
    contract: { format: "oeste.component.v1", component: "Breadcrumbs", props: { items: "array" }, a11y: { nav: "aria-label=Breadcrumb", current: "aria-current=page" } },
    prompt: "Build Mesa Breadcrumbs: nav aria-label Breadcrumb, 12.5px ink-soft, separators at 0.5 opacity with 8px margins, current page as text with aria-current, never a link.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/breadcrumbs.json",
    code: "import { Breadcrumbs } from \"@/components/ui/breadcrumbs\";\n\nexport function Trail() {\n  return <Breadcrumbs items={[{ label: \"Home\", href: \"#/home\" }, { label: \"Components\", href: \"#/components/button\" }, { label: \"Button\" }]} />;\n}" },
  { id: "stats-band", name: "StatsBand", tagline: "Grid of labeled numbers.",
    anatomy: ["Cells (label + number)", "Dividers (line-soft)"],
    props: [["stats", "{ label, value, divider? }[]", "Yes", "Stat cells."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Grid 2 cols (4 at 700px+), bottom hairline.", "Cells: 14/4 padding, top line-soft hairline.", "Label mono 12px ink-faint; number mono 700 20px ink.", "Dividers are line-soft left borders on 2nd+ cells."],
    contract: { format: "oeste.component.v1", component: "StatsBand", props: { stats: "array" }, a11y: { list: "dl + dt/dd" } },
    prompt: "Build a Mesa StatsBand: grid 2 cols (4 at 700px+), bottom hairline, cells with top line-soft hairline, mono 12px ink-faint labels, mono 700 20px ink numbers.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/stats-band.json",
    code: "import { StatsBand } from \"@/components/ui/stats-band\";\n\nexport function Stats() {\n  return <StatsBand stats={[{ label: \"Items\", value: \"128\" }, { label: \"Open\", value: \"12\" }, { label: \"Done\", value: \"96\" }, { label: \"Review\", value: \"20\" }]} />;\n}" },
  { id: "activity-feed", name: "ActivityFeed", tagline: "Card with a live header and rows.",
    anatomy: ["Header (live dot + label)", "Rows (time + paragraph)"],
    props: [["entries", "{ id, time, name, text }[]", "Yes", "Feed entries."]],
    keyboard: [["—", "Not interactive in source. No keyboard behavior."]],
    invariants: ["Card, 1px line border, radius 8, overflow hidden, margin-top 34.", "Header: mono 11px 700 0.22em uppercase ink-soft, live dot 8px oxblood, 2.4s pulse.", "Rows: grid 86px/1fr, gap 12, padding 12/18, bottom line-soft hairline.", "Time mono 11.5px ink-faint; name ink 600 mono 12.5px."],
    contract: { format: "oeste.component.v1", component: "ActivityFeed", props: { entries: "array" }, a11y: { heading: "header label" } },
    prompt: "Build a Mesa ActivityFeed: card radius 8, header with 8px oxblood live dot (2.4s pulse) + mono label, rows grid 86px/1fr with mono time + paragraph, bottom line-soft hairlines.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/activity-feed.json",
    code: "import { ActivityFeed } from \"@/components/ui/activity-feed\";\n\nexport function Feed() {\n  return <ActivityFeed entries={[{ id: \"1\", time: \"10:00\", name: \"Member A\", text: \"updated the entry.\" }]} />;\n}" },
  { id: "activity-entry", name: "ActivityEntry", tagline: "Time block plus paragraph.",
    anatomy: ["Time block", "Paragraph (bold name + text)"],
    props: [["time", "string", "Yes", "Time label."], ["name", "string", "Yes", "Actor name."], ["text", "string", "Yes", "Entry text."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Time block mono 11.5px ink-faint, margin-bottom 6.", "Paragraph 14px ink-soft; name ink 600 mono 12.5px."],
    contract: { format: "oeste.component.v1", component: "ActivityEntry", props: { time: "string", name: "string", text: "string" }, a11y: { text: "plain paragraphs" } },
    prompt: "Build a Mesa ActivityEntry: mono 11.5px ink-faint time block + 14px ink-soft paragraph with ink 600 mono 12.5px name.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/activity-entry.json",
    code: "import { ActivityEntry } from \"@/components/ui/activity-entry\";\n\nexport function Entry() {\n  return <ActivityEntry time=\"10:00\" name=\"Member A\" text=\"updated the entry.\" />;\n}" },
  { id: "steps-list", name: "StepsList", tagline: "Numbered steps under a double rule.",
    anatomy: ["Number box (40x40)", "Title (serif 18px) + body", "Text links (oxblood)"],
    props: [["steps", "{ title, body }[]", "Yes", "Steps."]],
    keyboard: [["Tab", "Move through links inside step bodies."], ["Enter", "Follow the focused link."]],
    invariants: ["Top 3px double ink.", "Rows: grid 56px/1fr, gap 6/16, padding 20/6, bottom line-soft hairline.", "Number box: 40x40, mono 700 14px oxblood-deep, 1px oxblood border, radius 6.", "Text links: 700 oxblood-deep, underline oxblood, hover 8% oxblood wash."],
    contract: { format: "oeste.component.v1", component: "StepsList", props: { steps: "array" }, a11y: { list: "ol + li" } },
    prompt: "Build a Mesa StepsList: top 3px double ink, rows grid 56px/1fr, 40x40 number boxes (mono 700 14px oxblood-deep, 1px oxblood border), serif 18px titles, 15px ink-soft bodies, oxblood text links.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/steps-list.json",
    code: "import { StepsList } from \"@/components/ui/steps-list\";\n\nexport function Steps() {\n  return <StepsList steps={[{ title: \"Step one\", body: \"Description goes here.\" }, { title: \"Step two\", body: \"Description goes here.\" }]} />;\n}" },
  { id: "detail-card", name: "DetailCard", tagline: "Head, grid, source and assigned rows, foot.",
    anatomy: ["Head (kick + number + meta)", "Grid (dt/dd cells)", "Source + assigned rows", "Foot"],
    props: [["kick", "string", "No", "Head kick."], ["number", "string", "No", "Detail number."], ["meta", "string", "No", "Head meta."], ["fields", "{ label, value }[]", "Yes", "Grid cells."], ["source", "string", "No", "Source row."], ["assigned", "string", "No", "Assigned row (oxblood wash)."], ["foot", "string", "No", "Foot text."]],
    keyboard: [["—", "Not interactive in source. No keyboard behavior."]],
    invariants: ["Card, 1px line border, radius 14, overflow hidden.", "Head: flex space-between, padding 16/16/14, bottom hairline.", "Number mono 700 21px 0.02em; kick mono 10.5px 600 0.14em uppercase ink-faint.", "Assigned row gets a 5% oxblood wash. dt mono 10.5px 600 0.12em uppercase ink-faint; dd 14px/1.45."],
    contract: { format: "oeste.component.v1", component: "DetailCard", props: { fields: "array", kick: "string?", number: "string?", meta: "string?", source: "string?", assigned: "string?", foot: "string?" }, a11y: { list: "dl + dt/dd" } },
    prompt: "Build a Mesa DetailCard: radius 14 card, head with kick + mono-700 21px number + meta, 2-col dt/dd grid, source row, assigned row with 5% oxblood wash, foot in 12.5px ink-faint.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/detail-card.json",
    code: "import { DetailCard } from \"@/components/ui/detail-card\";\n\nexport function Detail() {\n  return <DetailCard kick=\"Detail\" number=\"01\" meta=\"Meta goes here.\" fields={[{ label: \"Status\", value: \"Open\" }]} source=\"Source 01\" assigned=\"Member A\" foot=\"Foot note.\" />;\n}" },
  { id: "summary-card", name: "SummaryCard", tagline: "Header plus key and value rows.",
    anatomy: ["Header (paper bg)", "Key/value rows"],
    props: [["title", "string", "Yes", "Header title."], ["rows", "{ key, value, mono? }[]", "Yes", "Rows."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Same shell as Detail Card (radius 14).", "Header: mono 11px 700 0.22em uppercase ink-soft, paper bg, 12/20 padding.", "Rows: grid 130px/1fr, gap 12, padding 11/20, bottom line-soft hairline.", "Key mono 11.5px ink-faint uppercase 0.1em; value 600; mono variant 13px 500."],
    contract: { format: "oeste.component.v1", component: "SummaryCard", props: { title: "string", rows: "array" }, a11y: { list: "dl + dt/dd" } },
    prompt: "Build a Mesa SummaryCard: radius 14 shell, paper-bg header (mono 11px 700 0.22em uppercase), rows grid 130px/1fr, keys mono 11.5px ink-faint, values 600 (mono variant 13px 500).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/summary-card.json",
    code: "import { SummaryCard } from \"@/components/ui/summary-card\";\n\nexport function Summary() {\n  return <SummaryCard title=\"Summary\" rows={[{ key: \"Status\", value: \"Open\" }, { key: \"Count\", value: \"12\", mono: true }]} />;\n}" },
  { id: "disclaimer", name: "Disclaimer", tagline: "Oxblood-bordered notice.",
    anatomy: ["Strong line (oxblood-deep mono)", "Body (ink-soft)"],
    props: [["strong", "string", "No", "Strong lead line."], ["children", "ReactNode", "Yes", "Body."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["1px oxblood border, radius 8, 5% oxblood wash over card.", "Padding 16/20, 14px ink-soft.", "Strong is oxblood-deep mono 12px 0.14em."],
    contract: { format: "oeste.component.v1", component: "Disclaimer", props: { strong: "string?" }, a11y: { note: "aside, text carries meaning" } },
    prompt: "Build a Mesa Disclaimer: 1px oxblood border, radius 8, 5% oxblood wash, padding 16/20, 14px ink-soft body, oxblood-deep mono 12px strong line.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/disclaimer.json",
    code: "import { Disclaimer } from \"@/components/ui/disclaimer\";\n\nexport function Note() {\n  return <Disclaimer strong=\"Please note\">Description goes here.</Disclaimer>;\n}" },
  { id: "pipeline-strip", name: "PipelineStrip", tagline: "Steps with dots and connectors.",
    anatomy: ["Kicker", "Steps (dot + label + connector)", "Note"],
    props: [["kicker", "string", "No", "Kicker."], ["steps", "{ label, done?, current? }[]", "Yes", "Steps."], ["note", "string", "No", "Note under the steps."]],
    keyboard: [["—", "Not interactive in source. No keyboard behavior."]],
    invariants: ["1px line border, radius 12, padding 22/24.", "Steps: 11.5px 700 0.08em uppercase ink-soft; dot 12px circle, 2px line border.", "Done: ink text, oxblood dot + connector. Current: ink text, oxblood dot border + 1.8s pulse.", "Note: 14px ink-soft, max 62ch."],
    contract: { format: "oeste.component.v1", component: "PipelineStrip", props: { steps: "array", kicker: "string?", note: "string?" }, a11y: { list: "ol + li", state: "text + dot, never color alone" } },
    prompt: "Build a Mesa PipelineStrip: radius 12, kicker, steps with 12px dots + 2px connectors, done = ink text + oxblood dot/connector, current = ink text + oxblood dot border + 1.8s pulse, 14px ink-soft note.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/pipeline-strip.json",
    code: "import { PipelineStrip } from \"@/components/ui/pipeline-strip\";\n\nexport function Pipeline() {\n  return <PipelineStrip kicker=\"Pipeline\" steps={[{ label: \"Draft\", done: true }, { label: \"Review\", current: true }, { label: \"Done\" }]} note=\"Description goes here.\" />;\n}" },
];
COMPONENTS.push(
  { id: "profile-rows", name: "ProfileRows", tagline: "Name, body, status rows.",
    anatomy: ["Name (700 15px)", "Body (max 64ch)", "Profile Status"],
    props: [["rows", "{ name, body, status? }[]", "Yes", "Rows."]],
    keyboard: [["—", "Not interactive in source. No keyboard behavior."]],
    invariants: ["Top 3px double ink.", "Row padding 16/0, bottom line-soft hairline.", "Name 700 15px; body 14px ink-soft, 1.65, max 64ch."],
    contract: { format: "oeste.component.v1", component: "ProfileRows", props: { rows: "array" }, a11y: { list: "plain articles" } },
    prompt: "Build Mesa ProfileRows: top 3px double ink, rows with 700 15px name, 14px ink-soft body max 64ch, ProfileStatus, bottom line-soft hairlines.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/profile-rows.json",
    code: "import { ProfileRows } from \"@/components/ui/profile-rows\";\n\nexport function People() {\n  return <ProfileRows rows={[{ name: \"Member A\", body: \"Description goes here.\", status: \"Active\" }]} />;\n}" },
  { id: "profile-status", name: "ProfileStatus", tagline: "Pill status for profile rows.",
    anatomy: ["Label"],
    props: [["children", "ReactNode", "Yes", "Status label."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Mono 11px 700 0.08em uppercase oxblood-deep.", "1px oxblood border, radius 999, padding 3/9.", "Table display in the audit; inline-block is equivalent."],
    contract: { format: "oeste.component.v1", component: "ProfileStatus", props: {}, a11y: { meaning: "text, never color alone" } },
    prompt: "Build a Mesa ProfileStatus: mono 11px 700 0.08em uppercase oxblood-deep, 1px oxblood border, radius 999, padding 3/9.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/profile-status.json",
    code: "import { ProfileStatus } from \"@/components/ui/profile-status\";\n\nexport function Status() {\n  return <ProfileStatus>Active</ProfileStatus>;\n}" },
  { id: "timeline", name: "Timeline", tagline: "Dated rows under a double rule.",
    anatomy: ["Date (oxblood-deep mono)", "Body + source"],
    props: [["entries", "{ date, body, source? }[]", "Yes", "Entries."]],
    keyboard: [["Tab", "Move through source links."], ["Enter", "Follow the focused link."]],
    invariants: ["Top 3px double ink.", "Rows: grid 1fr (210px/1fr at 700px+), padding 14/6, bottom line-soft hairline.", "Date mono 11.5px 700 0.1em uppercase oxblood-deep.", "Body 15px ink-soft max 64ch; source mono 11.5px ink-faint."],
    contract: { format: "oeste.component.v1", component: "Timeline", props: { entries: "array" }, a11y: { list: "ol + li" } },
    prompt: "Build a Mesa Timeline: top 3px double ink, rows grid 210px/1fr at 700px+, mono 11.5px oxblood-deep dates, 15px ink-soft bodies, mono ink-faint sources.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/timeline.json",
    code: "import { Timeline } from \"@/components/ui/timeline\";\n\nexport function History() {\n  return <Timeline entries={[{ date: \"Step 01\", body: \"Description goes here.\", source: \"Source 01\" }]} />;\n}" },
  { id: "media-card", name: "MediaCard", tagline: "Number, body, more link, source.",
    anatomy: ["Number (mono, faint)", "Body", "More link + source"],
    props: [["number", "string", "Yes", "Media number."], ["body", "string", "Yes", "Body text."], ["more", "string", "No", "More link label."], ["source", "string", "No", "Source line."]],
    keyboard: [["Tab", "Move focus to the card link."], ["Enter", "Open the card."]],
    invariants: ["Card, 1px line border, radius 8, padding 18, block link.", "Hover: ink-faint border.", "Number mono 11px 700 0.16em uppercase ink-faint.", "More is 13px 700 oxblood (hover underline); source mono 12px ink-faint."],
    contract: { format: "oeste.component.v1", component: "MediaCard", props: { number: "string", body: "string", more: "string?", source: "string?" }, a11y: { link: "real <a>" } },
    prompt: "Build a Mesa MediaCard: block link, radius 8, padding 18, hover ink-faint border, mono faint number, 15px ink-soft body, 13px 700 oxblood More link, mono 12px ink-faint source.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/media-card.json",
    code: "import { MediaCard } from \"@/components/ui/media-card\";\n\nexport function Media() {\n  return <MediaCard number=\"Media 01\" body=\"Description goes here.\" more=\"View item\" source=\"Source 01\" />;\n}" },
  { id: "open-questions", name: "OpenQuestions", tagline: "Questions with answers under an ok rule.",
    anatomy: ["Profile Status", "Question", "Answer (ok left rule)"],
    props: [["items", "{ question, status?, answer? }[]", "Yes", "Questions."]],
    keyboard: [["—", "Not interactive in source. No keyboard behavior."]],
    invariants: ["Row padding 18/0 (first 8px top), bottom line-soft hairline.", "Question 16.5px/1.55 ink-soft, max 64ch.", "Answer: margin 14/0/0, padding 2/0/2/14, left 2px ok border; kick ok-colored.", "Answer body 15px/1.6 ink-soft max 64ch."],
    contract: { format: "oeste.component.v1", component: "OpenQuestions", props: { items: "array" }, a11y: { list: "plain articles" } },
    prompt: "Build Mesa OpenQuestions: ProfileStatus + 16.5px ink-soft question, answers under a 2px ok left rule with ok-colored kick, 15px ink-soft answer bodies.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/open-questions.json",
    code: "import { OpenQuestions } from \"@/components/ui/open-questions\";\n\nexport function Questions() {\n  return <OpenQuestions items={[{ question: \"What comes next?\", status: \"Open\", answer: \"Description goes here.\" }]} />;\n}" },
  { id: "coverage-list", name: "CoverageList", tagline: "Link plus title plus date rows.",
    anatomy: ["Link + outlet + date"],
    props: [["items", "{ title, outlet, date, href? }[]", "Yes", "Coverage rows."]],
    keyboard: [["Tab", "Move through links."], ["Enter", "Follow the focused link."]],
    invariants: ["Top 3px double ink.", "Rows 14/0 padding, bottom line-soft hairline.", "Links inherit with underline offset 3px; outlet and date are plain text.", "Row text is 15px."],
    contract: { format: "oeste.component.v1", component: "CoverageList", props: { items: "array" }, a11y: { link: "real <a>" } },
    prompt: "Build a Mesa CoverageList: top 3px double ink, rows 14/0 with bottom hairlines, 15px text, links with underline offset 3px, outlet + date as plain text.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/coverage-list.json",
    code: "import { CoverageList } from \"@/components/ui/coverage-list\";\n\nexport function Coverage() {\n  return <CoverageList items={[{ title: \"Title goes here.\", outlet: \"Outlet\", date: \"Date\", href: \"#\" }]} />;\n}" },
  { id: "source-list", name: "SourceList", tagline: "Link block plus sub rows.",
    anatomy: ["Link block (title + sub)"],
    props: [["items", "{ title, sub, href? }[]", "Yes", "Source rows."]],
    keyboard: [["Tab", "Move through links."], ["Enter", "Follow the focused link."]],
    invariants: ["Top 3px double ink.", "Rows 14/0 padding, bottom line-soft hairline.", "Link block, underline offset 3px.", "Title 15px; sub 13px ink-faint."],
    contract: { format: "oeste.component.v1", component: "SourceList", props: { items: "array" }, a11y: { link: "real <a>" } },
    prompt: "Build a Mesa SourceList: top 3px double ink, rows 14/0 with bottom hairlines, link blocks with underline offset 3px, 15px title, 13px ink-faint sub.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/source-list.json",
    code: "import { SourceList } from \"@/components/ui/source-list\";\n\nexport function Sources() {\n  return <SourceList items={[{ title: \"Title goes here.\", sub: \"Sub goes here.\", href: \"#\" }]} />;\n}" },
  { id: "citations", name: "Citations", tagline: "Numbered citation rows.",
    anatomy: ["Number (mono, oxblood-deep)", "Text"],
    props: [["items", "{ text }[]", "Yes", "Citations (numbered by position)."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Top 3px double ink.", "Rows: grid 44px/1fr, padding 12/6, bottom line-soft hairline.", "Number mono 12px 700 oxblood-deep.", "Text 14.5px ink-soft."],
    contract: { format: "oeste.component.v1", component: "Citations", props: { items: "array" }, a11y: { list: "ol + li" } },
    prompt: "Build Mesa Citations: top 3px double ink, rows grid 44px/1fr, mono 12px 700 oxblood-deep numbers, 14.5px ink-soft text.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/citations.json",
    code: "import { Citations } from \"@/components/ui/citations\";\n\nexport function Notes() {\n  return <Citations items={[{ text: \"Citation text goes here.\" }]} />;\n}" },
  { id: "prev-next", name: "PrevNext", tagline: "Previous and next card links.",
    anatomy: ["Label (mono, faint)", "Title (serif 17px)"],
    props: [["prev", "{ title, href? }", "No", "Previous link."], ["next", "{ title, href? }", "No", "Next link."]],
    keyboard: [["Tab", "Move through links."], ["Enter", "Follow the focused link."]],
    invariants: ["2-col grid at 700px+, gap 12.", "Links: card, radius 8, padding 18/20, hover translateY(-2px) + ink-soft border.", "Label mono 10.5px 700 0.2em uppercase ink-faint.", "Title serif 700 17px."],
    contract: { format: "oeste.component.v1", component: "PrevNext", props: { prev: "object?", next: "object?" }, a11y: { nav: "aria-label", link: "real <a>" } },
    prompt: "Build Mesa PrevNext: 2-col grid at 700px+, card links radius 8 padding 18/20, hover translateY(-2px) + ink-soft border, mono faint labels, serif 700 17px titles.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/prev-next.json",
    code: "import { PrevNext } from \"@/components/ui/prev-next\";\n\nexport function Neighbors() {\n  return <PrevNext prev={{ title: \"Previous item\" }} next={{ title: \"Next item\" }} />;\n}" },
  { id: "diff-band", name: "DiffBand", tagline: "Dark band of compared rows.",
    anatomy: ["Kicker (light)", "H2 (white) + lede", "Rows (number + strong + body)"],
    props: [["kicker", "string", "No", "Kicker."], ["title", "string", "Yes", "H2 text."], ["lede", "string", "No", "Lede."], ["rows", "{ label, body }[]", "Yes", "Compared rows."]],
    keyboard: [["—", "Not interactive in source. No keyboard behavior."]],
    invariants: ["Bg ink (light) / #0b0908 (dark), text #f4f1ea, padding 46/0.", "Kicker #d98a8a; H2 white; lede #b9b4a8.", "Rows: grid 44px/1fr, gap 14, padding 18/0, top 1px #3a3232 border.", "Number mono 12px #d98a8a 0.06em; strong white 16px; body #b9b4a8 14.5px/1.6."],
    contract: { format: "oeste.component.v1", component: "DiffBand", props: { title: "string", kicker: "string?", lede: "string?", rows: "array" }, a11y: { heading: "h2", contrast: "pairs verified" } },
    prompt: "Build a Mesa DiffBand: dark band (ink light / #0b0908 dark), #f4f1ea text, #d98a8a kicker, white H2, #b9b4a8 lede, rows grid 44px/1fr with 1px #3a3232 top borders, white 16px strongs.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/diff-band.json",
    code: "import { DiffBand } from \"@/components/ui/diff-band\";\n\nexport function Diff() {\n  return <DiffBand kicker=\"Before / after\" title=\"What changed\" lede=\"Description goes here.\" rows={[{ label: \"Before\", body: \"Description goes here.\" }, { label: \"After\", body: \"Description goes here.\" }]} />;\n}" },
  { id: "role-card", name: "RoleCard", tagline: "Chip plus title plus body.",
    anatomy: ["Chip (oxblood pill)", "Title (serif 17px)", "Body"],
    props: [["chip", "string", "No", "Chip label."], ["title", "string", "Yes", "Title."], ["body", "string", "Yes", "Body."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["1px line border, radius 12, card bg, padding 16.", "Chip: mono 10.5px 700 0.18em uppercase oxblood, 1px oxblood border, radius 999.", "Title serif 17px, -0.01em; body 14px ink-soft/1.55."],
    contract: { format: "oeste.component.v1", component: "RoleCard", props: { title: "string", body: "string", chip: "string?" }, a11y: { text: "plain content" } },
    prompt: "Build a Mesa RoleCard: radius 12 card, mono 10.5px oxblood chip, serif 17px title, 14px ink-soft body.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/role-card.json",
    code: "import { RoleCard } from \"@/components/ui/role-card\";\n\nexport function Role() {\n  return <RoleCard chip=\"Role\" title=\"Title goes here.\" body=\"Description goes here.\" />;\n}" },
  { id: "step-gates", name: "StepGates", tagline: "Numbered gates with connectors.",
    anatomy: ["Number circle (29px)", "Title (serif 21px) + body", "Connector (1px line)"],
    props: [["gates", "{ title, body }[]", "Yes", "Gates."]],
    keyboard: [["—", "Not interactive in source. No keyboard behavior."]],
    invariants: ["Numbered list, 2-col grid at 1100px+.", "Items: padding 0/0/26/48, connector 1px line vertical.", "Number: 29x29 circle, 1px oxblood border, paper bg, oxblood text, mono 11px 700.", "Title serif 21px; body 15px ink-soft/1.55, max 36em."],
    contract: { format: "oeste.component.v1", component: "StepGates", props: { gates: "array" }, a11y: { list: "ol + li" } },
    prompt: "Build Mesa StepGates: 2-col grid at 1100px+, 29px oxblood number circles on paper bg, serif 21px titles, 15px ink-soft bodies, 1px line connectors.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/step-gates.json",
    code: "import { StepGates } from \"@/components/ui/step-gates\";\n\nexport function Gates() {\n  return <StepGates gates={[{ title: \"Gate one\", body: \"Description goes here.\" }, { title: \"Gate two\", body: \"Description goes here.\" }]} />;\n}" },
  { id: "pledge", name: "Pledge", tagline: "Promises behind an oxblood rule.",
    anatomy: ["Promise rows (strong + body)", "Oxblood left border (3px)"],
    props: [["promises", "{ strong, body }[]", "Yes", "Promises."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["1px line border, 3px oxblood left border, radius 12, card bg.", "Promise rows: padding 14/0, top 1px line-soft border (first none).", "Strong 16px; body 14.5px ink-soft/1.55."],
    contract: { format: "oeste.component.v1", component: "Pledge", props: { promises: "array" }, a11y: { list: "plain content" } },
    prompt: "Build a Mesa Pledge: card with 3px oxblood left border, promise rows with 16px strongs and 14.5px ink-soft bodies, line-soft separators.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/pledge.json",
    code: "import { Pledge } from \"@/components/ui/pledge\";\n\nexport function Promise() {\n  return <Pledge promises={[{ strong: \"We keep it simple.\", body: \"Description goes here.\" }]} />;\n}" },
  { id: "cta-band", name: "CtaBand", tagline: "Dark band with H2, body, button, link.",
    anatomy: ["H2 (white)", "Body (muted)", "Button (.btn-solid) + link"],
    props: [["title", "string", "Yes", "H2 text."], ["body", "string", "No", "Body."], ["buttonLabel", "string", "No — Get started", "Button label."], ["linkLabel", "string", "No", "Link label."]],
    keyboard: [["Tab", "Move through the button and link."], ["Enter / Space", "Activate the focused control."]],
    invariants: ["Bg ink (light) / #181410 (dark), 1px line border (dark), radius 12.", "Text #f4f1ea; H2 white clamp(22px,5.5vw,30px); body #b9b4a8 max 52ch, centered.", "Button is .btn-solid 14.5px, padding 12/22.", "Link #b9b4a8 14px, underline offset 3px (hover #f4f1ea)."],
    contract: { format: "oeste.component.v1", component: "CtaBand", props: { title: "string", body: "string?", buttonLabel: "string?", linkLabel: "string?" }, a11y: { heading: "h2", contrast: "pairs verified" } },
    prompt: "Build a Mesa CtaBand: dark band (ink light / #181410 dark), white H2, #b9b4a8 body max 52ch centered, .btn-solid button, #b9b4a8 link with underline offset 3px.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/cta-band.json",
    code: "import { CtaBand } from \"@/components/ui/cta-band\";\n\nexport function Cta() {\n  return <CtaBand title=\"Start building\" body=\"Description goes here.\" buttonLabel=\"Get started\" linkLabel=\"Read the docs\" />;\n}" },
  { id: "footer", name: "Footer", tagline: "Double-rule footer with columns and fine print.",
    anatomy: ["Brand blurb", "Link columns", "Fine print (hairline top)"],
    props: [["blurb", "string", "No", "Brand blurb."], ["columns", "{ heading, links: { label, href? }[] }[]", "Yes", "Link columns."], ["finePrint", "string", "No", "Fine print."]],
    keyboard: [["Tab", "Move through links."], ["Enter", "Follow the focused link."]],
    invariants: ["Top 3px double ink, margin-top 44, padding 34/0/48.", "Grid 1.2fr/2fr.", "Brand blurb 13px ink-soft; column headings 11px 0.14em uppercase ink-soft.", "Column links 13.5px ink-soft, 3px vertical padding (hover accent). Fine print: top hairline, 12.5px ink-soft."],
    contract: { format: "oeste.component.v1", component: "Footer", props: { columns: "array", blurb: "string?", finePrint: "string?" }, a11y: { landmark: "footer" } },
    prompt: "Build a Mesa Footer: top 3px double ink, grid 1.2fr/2fr, 13px ink-soft blurb, 11px uppercase column headings, 13.5px links, fine print under a hairline.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/footer.json",
    code: "import { Footer } from \"@/components/ui/footer\";\n\nexport function Foot() {\n  return <Footer blurb=\"Blurb goes here.\" columns={[{ heading: \"Docs\", links: [{ label: \"Getting started\" }] }]} finePrint=\"Fine print goes here.\" />;\n}" },
  { id: "theme-toggle", name: "ThemeToggle", tagline: "Circle icon button; the icon shows the target mode.",
    anatomy: ["Icon (target mode — sun in dark, moon in light)"],
    props: [["theme", "light | dark", "No — dark", "Current theme."], ["onToggle", "() => void", "No", "Toggle handler."]],
    keyboard: [["Tab", "Move focus to the toggle."], ["Enter / Space", "Toggle the theme."]],
    invariants: ["34px circle, 1px line border, transparent bg, ink-soft icon.", "Radius 50%, no label.", "Hover: oxblood border + icon.", "Icon shows the TARGET mode (sun in dark). aria-pressed tracks dark."],
    contract: { format: "oeste.component.v1", component: "ThemeToggle", props: { theme: ["light", "dark"] }, a11y: { pressed: "aria-pressed", label: "icon shows target mode" } },
    prompt: "Build a Mesa ThemeToggle: 34px circle icon button, 1px line border, sun icon in dark / moon icon in light (icon shows the target mode), hover oxblood border + icon, aria-pressed tracks dark.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/theme-toggle.json",
    code: "import { useState } from \"react\";\nimport { ThemeToggle } from \"@/components/ui/theme-toggle\";\n\nexport function Toggle() {\n  const [theme, setTheme] = useState(\"dark\");\n  return <ThemeToggle theme={theme} onToggle={() => setTheme(theme === \"dark\" ? \"light\" : \"dark\")} />;\n}" },
  { id: "icon-button", name: "IconButton", tagline: "34px circle button.",
    anatomy: ["Icon (16px)"],
    props: [["label", "string", "Yes", "Accessible label."], ["onClick", "() => void", "No", "Click handler."], ["children", "ReactNode", "No", "Icon (defaults to a magnifier mark)."]],
    keyboard: [["Tab", "Move focus to the button."], ["Enter / Space", "Activate."]],
    invariants: ["34x34 circle, 1px line border, transparent bg, ink-soft icon.", "Hover: oxblood border + oxblood icon.", "Search variant holds a 16px magnifier.", "Icon buttons always carry an accessible label."],
    contract: { format: "oeste.component.v1", component: "IconButton", props: { label: "string" }, a11y: { label: "aria-label required" } },
    prompt: "Build a Mesa IconButton: 34x34 circle, 1px line border, ink-soft icon, hover oxblood border + icon. Always carry an aria-label.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/icon-button.json",
    code: "import { IconButton } from \"@/components/ui/icon-button\";\n\nexport function SearchBtn() {\n  return <IconButton label=\"Search\" />;\n}" },
  { id: "nav-toggle", name: "NavToggle", tagline: "Hamburger that becomes an X.",
    anatomy: ["Three bars (20x2)"],
    props: [["open", "boolean", "No — false", "Open state (aria-expanded)."], ["onToggle", "() => void", "No", "Toggle handler."], ["label", "string", "No — Menu", "Accessible label."]],
    keyboard: [["Tab", "Move focus to the toggle."], ["Enter / Space", "Toggle the nav."]],
    invariants: ["Border 1px line, radius 6, padding 9/10.", "Three bars: 20x2, ink, 4px gaps.", "Open state: bars rotate to X (45deg / fade / -45deg).", "aria-expanded tracks the nav state."],
    contract: { format: "oeste.component.v1", component: "NavToggle", props: { open: "boolean", label: "string?" }, a11y: { expanded: "aria-expanded" } },
    prompt: "Build a Mesa NavToggle: 1px line border, radius 6, three 20x2 ink bars with 4px gaps. Open state rotates the bars to an X. aria-expanded tracks the nav.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/nav-toggle.json",
    code: "import { useState } from \"react\";\nimport { NavToggle } from \"@/components/ui/nav-toggle\";\n\nexport function Menu() {\n  const [open, setOpen] = useState(false);\n  return <NavToggle open={open} onToggle={() => setOpen(!open)} />;\n}" },
  { id: "ghost-number", name: "GhostNumber", tagline: "118px ghost numeral, decorative.",
    anatomy: ["Numeral"],
    props: [["children", "ReactNode", "Yes", "Numeral."]],
    keyboard: [["—", "Decorative, aria-hidden. No keyboard behavior."]],
    invariants: ["Merriweather 900, 118px, ink at 0.06 opacity.", "Absolute top-right, pointer-events none.", "Always aria-hidden; never carries meaning."],
    contract: { format: "oeste.component.v1", component: "GhostNumber", props: {}, a11y: { decorative: "aria-hidden, pointer-events none" } },
    prompt: "Build a Mesa GhostNumber: Merriweather 900, 118px, ink at 6% opacity, absolute top-right, pointer-events none, always aria-hidden.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/ghost-number.json",
    code: "import { GhostNumber } from \"@/components/ui/ghost-number\";\n\nexport function Ghost() {\n  return <div style={{ position: \"relative\" }}><GhostNumber>01</GhostNumber></div>;\n}" },
  { id: "shows-card", name: "ShowsCard", tagline: "Key and body rows in a card.",
    anatomy: ["Rows (key + body)"],
    props: [["rows", "{ key, value, muted? }[]", "Yes", "Rows."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Card, 1px line border, radius 8, overflow hidden.", "Rows: padding 14/18, bottom line-soft hairline.", "Key mono 11px 700 0.2em uppercase oxblood-deep (.no variant ink-faint).", "Body 15px ink-soft."],
    contract: { format: "oeste.component.v1", component: "ShowsCard", props: { rows: "array" }, a11y: { list: "plain rows" } },
    prompt: "Build a Mesa ShowsCard: card radius 8, rows padding 14/18 with line-soft hairlines, keys mono 11px 700 0.2em oxblood-deep (.no variant ink-faint), 15px ink-soft bodies.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/shows-card.json",
    code: "import { ShowsCard } from \"@/components/ui/shows-card\";\n\nexport function Shows() {\n  return <ShowsCard rows={[{ key: \"Status\", value: \"Open\" }, { key: \"Count\", value: \"12\", muted: true }]} />;\n}" },
  { id: "empty-attachment", name: "EmptyAttachment", tagline: "Dashed empty box.",
    anatomy: ["Text"],
    props: [["children", "ReactNode", "Yes", "Empty text."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["1.5px dashed line border, radius 6, padding 24/18, centered.", "Text 14.5px ink-soft; paragraphs 8px apart."],
    contract: { format: "oeste.component.v1", component: "EmptyAttachment", props: {}, a11y: { text: "plain content" } },
    prompt: "Build a Mesa EmptyAttachment: 1.5px dashed line border, radius 6, padding 24/18, centered, 14.5px ink-soft text.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/empty-attachment.json",
    code: "import { EmptyAttachment } from \"@/components/ui/empty-attachment\";\n\nexport function Empty() {\n  return <EmptyAttachment>No attachment yet.</EmptyAttachment>;\n}" },
  { id: "profile-avatar", name: "ProfileAvatar", tagline: "Initial badge in three sizes.",
    anatomy: ["Initials (mono 700, oxblood-deep)"],
    props: [["initials", "string", "Yes", "Initials."], ["size", "default | lg | xl", "No — default", "Avatar size."]],
    keyboard: [["—", "Decorative. No keyboard behavior."]],
    invariants: ["Mono 700 oxblood-deep, 1px oxblood border.", "Sizes: 40px/17px (default), 48px/20px (lg), 112px/52px (xl).", "Radii: 8px (default/lg), 10px (xl).", "Photos use the same sizes with an oxblood border."],
    contract: { format: "oeste.component.v1", component: "ProfileAvatar", props: { initials: "string", size: ["default", "lg", "xl"] }, a11y: { decorative: "aria-hidden" } },
    prompt: "Build a Mesa ProfileAvatar: mono 700 oxblood-deep initials, 1px oxblood border. Sizes 40px/17px, 48px/20px, 112px/52px. Radii 8/8/10.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/profile-avatar.json",
    code: "import { ProfileAvatar } from \"@/components/ui/profile-avatar\";\n\nexport function Avatar() {\n  return <ProfileAvatar initials=\"MA\" size=\"lg\" />;\n}" },
  { id: "profile-card-row", name: "ProfileCardRow", tagline: "Avatar plus name plus role link row.",
    anatomy: ["Avatar", "Name (serif 16px) + role (mono)"],
    props: [["initials", "string", "Yes", "Avatar initials."], ["name", "string", "Yes", "Name."], ["role", "string", "Yes", "Role."], ["roleLabel", "string", "No", "Role label (oxblood-deep, uppercase)."]],
    keyboard: [["Tab", "Move focus to the row link."], ["Enter", "Open the row."]],
    invariants: ["Flex gap 12, padding 10/2, bottom 1px line border, link.", "Hover: name goes oxblood-deep.", "Name serif 16px 700; role mono 11px ink-soft.", "Role label: oxblood-deep, uppercase, 0.12em, 10px."],
    contract: { format: "oeste.component.v1", component: "ProfileCardRow", props: { initials: "string", name: "string", role: "string", roleLabel: "string?" }, a11y: { link: "real <a>" } },
    prompt: "Build a Mesa ProfileCardRow: flex gap 12, padding 10/2, bottom hairline, hover name oxblood-deep, serif 16px name, mono 11px role, oxblood-deep role label.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/profile-card-row.json",
    code: "import { ProfileCardRow } from \"@/components/ui/profile-card-row\";\n\nexport function Row() {\n  return <ProfileCardRow initials=\"MA\" name=\"Member A\" role=\"Role goes here.\" roleLabel=\"Lead\" />;\n}" },
  { id: "status-line", name: "StatusLine", tagline: "Dot plus mono status text.",
    anatomy: ["Dot (8px ok, 2.4s pulse)", "Text"],
    props: [["children", "ReactNode", "Yes", "Status text."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Mono 12.5px ink-soft, flex gap 8.", "Dot 8px ok, 2.4s pulse.", "Meaning is in the text, never color alone."],
    contract: { format: "oeste.component.v1", component: "StatusLine", props: {}, a11y: { meaning: "text, never color alone" } },
    prompt: "Build a Mesa StatusLine: mono 12.5px ink-soft, flex gap 8, 8px ok dot with 2.4s pulse.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/status-line.json",
    code: "import { StatusLine } from \"@/components/ui/status-line\";\n\nexport function Status() {\n  return <StatusLine>All caught up</StatusLine>;\n}" },
  { id: "profile-hero", name: "ProfileHero", tagline: "Avatar xl plus handle plus status plus stats.",
    anatomy: ["Avatar xl + handle + role", "Status line + stats band"],
    props: [["initials", "string", "Yes", "Avatar initials."], ["handle", "string", "Yes", "Handle / name."], ["role", "string", "Yes", "Role line."], ["status", "string", "No", "Status line text."], ["stats", "{ label, value }[]", "No", "Stats band entries."]],
    keyboard: [["—", "Not interactive as a component. No keyboard behavior."]],
    invariants: ["Flex gap 20, avatar xl + h1 handle + role line.", "Followed by StatusLine + StatsBand.", "H1 is the page-header H1 treatment."],
    contract: { format: "oeste.component.v1", component: "ProfileHero", props: { initials: "string", handle: "string", role: "string", status: "string?", stats: "array?" }, a11y: { heading: "single h1" } },
    prompt: "Build a Mesa ProfileHero: flex gap 20, avatar xl + H1 handle + role line, then StatusLine + StatsBand.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/profile-hero.json",
    code: "import { ProfileHero } from \"@/components/ui/profile-hero\";\n\nexport function Hero() {\n  return <ProfileHero initials=\"MA\" handle=\"Member A\" role=\"Role goes here.\" status=\"Active\" stats={[{ label: \"Items\", value: \"12\" }]} />;\n}" },
  { id: "empty-state", name: "EmptyState", tagline: "Dashed empty state with CTA.",
    anatomy: ["Kicker + H2 + lede (centered)", ".btn"],
    props: [["kicker", "string", "No", "Kicker."], ["title", "string", "Yes", "H2 text."], ["lede", "string", "No", "Lede."], ["actionLabel", "string", "No", "CTA label."], ["onAction", "() => void", "No", "CTA handler."]],
    keyboard: [["Tab", "Move focus to the CTA."], ["Enter / Space", "Activate the CTA."]],
    invariants: ["1px dashed line border, radius 12, padding 44/36, centered.", "Kicker, H2, lede (centered), .btn.", "Empty states always offer a next step."],
    contract: { format: "oeste.component.v1", component: "EmptyState", props: { title: "string", kicker: "string?", lede: "string?", actionLabel: "string?" }, a11y: { heading: "h2", action: "real button" } },
    prompt: "Build a Mesa EmptyState: 1px dashed line border, radius 12, padding 44/36, centered kicker + H2 + lede + .btn. Always offer a next step.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/empty-state.json",
    code: "import { EmptyState } from \"@/components/ui/empty-state\";\n\nexport function Empty() {\n  return <EmptyState kicker=\"Empty\" title=\"Nothing here yet\" lede=\"Description goes here.\" actionLabel=\"Create item\" />;\n}" },
  { id: "review-queue", name: "ReviewQueue", tagline: "Expandable review rows with a ping.",
    anatomy: ["Header (reference + count)", "Row (avatar + text + chevron)", "Detail (hidden until open)"],
    props: [["reference", "string", "No", "Reference key."], ["count", "number", "No", "Queue count (defaults to rows.length)."], ["rows", "{ id, initials, text, detail?, byline?, href?, reviewing? }[]", "Yes", "Rows."]],
    keyboard: [["Tab", "Move through row buttons."], ["Enter / Space", "Expand or collapse the focused row."]],
    invariants: ["Header: reference key (mono 12px 700 0.14em uppercase oxblood-deep).", "Count: min-width 20px, height 20px, radius 10, ink bg, paper text, 11px.", "Row: button row (avatar + text + chevron), padding 8/2; hover underlines text.", "Chevron 11px ink-faint, rotates 180deg when open. Detail hidden until open. Reviewing state: #c9a227 ping ring on avatar. No selected row state exists in source."],
    contract: { format: "oeste.component.v1", component: "ReviewQueue", props: { rows: "array", reference: "string?", count: "number?" }, a11y: { trigger: "button + aria-expanded + aria-controls", detail: "hidden until open" } },
    prompt: "Build a Mesa ReviewQueue: header with oxblood-deep reference + ink count pill, button rows (avatar + text + chevron), detail hidden until open, chevron rotates 180deg, reviewing rows get a #c9a227 ping ring. No selected row state exists — do not invent one.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/review-queue.json",
    code: "import { ReviewQueue } from \"@/components/ui/review-queue\";\n\nexport function Queue() {\n  return <ReviewQueue reference=\"Ref 01\" rows={[{ id: \"1\", initials: \"MA\", text: \"Item awaiting review.\", detail: \"Detail goes here.\", byline: \"By Member A\", reviewing: true }]} />;\n}" },
  { id: "daily-summary", name: "DailySummary", tagline: "Kicker plus totals line.",
    anatomy: ["Kicker", "Totals line (bold counts in mono 700)"],
    props: [["kicker", "string", "No", "Kicker."], ["children", "ReactNode", "Yes", "Totals line."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Top 1px line border, padding 14/2/8.", "Kicker + totals line 16px ink, bold counts in mono 700."],
    contract: { format: "oeste.component.v1", component: "DailySummary", props: { kicker: "string?" }, a11y: { text: "plain content" } },
    prompt: "Build a Mesa DailySummary: top 1px line border, padding 14/2/8, kicker + 16px ink totals line with bold counts in mono 700.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/daily-summary.json",
    code: "import { DailySummary } from \"@/components/ui/daily-summary\";\n\nexport function Day() {\n  return <DailySummary kicker=\"Today\">12 items · 8 done · 4 open</DailySummary>;\n}" },
  { id: "next-up", name: "NextUp", tagline: "Key plus title plus sub.",
    anatomy: ["Key (mono, faint)", "Title + sub"],
    props: [["title", "string", "Yes", "Title."], ["sub", "string", "No", "Sub line."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Top 1px line-soft border, padding 16/2/0, margin-top 22.", "Key mono 11px 700 0.14em uppercase ink-faint.", "Title 14.5px; sub 13px ink-faint."],
    contract: { format: "oeste.component.v1", component: "NextUp", props: { title: "string", sub: "string?" }, a11y: { text: "plain content" } },
    prompt: "Build a Mesa NextUp: top 1px line-soft border, padding 16/2/0, margin-top 22, mono 11px faint key, 14.5px title, 13px ink-faint sub.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/next-up.json",
    code: "import { NextUp } from \"@/components/ui/next-up\";\n\nexport function Next() {\n  return <NextUp title=\"Title goes here.\" sub=\"Sub goes here.\" />;\n}" },
  { id: "rail", name: "Rail", tagline: "Horizontal snap-scroll card rail.",
    anatomy: ["Rail container (flex, snap-x mandatory)", "Cards (snap-start)", "Thin scrollbar (8px webkit thumb)"],
    props: [["children", "ReactNode", "Yes", "Cards in the rail. Each child carries snap-start."]],
    keyboard: [["Tab", "Move through the cards in the rail."], ["ArrowLeft / ArrowRight", "Not specified in source."]],
    invariants: ["Flex, gap 18px, overflow-x auto, scroll-snap-type x mandatory.", "Padding 20px 6px 22px, margin 0 -6px, scrollbar-width thin.", "Webkit scrollbar is 8px; thumb is line with a 4px radius.", "Children snap-start; the rail never wraps."],
    contract: { format: "oeste.component.v1", component: "Rail", props: { children: "array" }, a11y: { scroll: "native overflow", snap: "snap-start children" } },
    prompt: "Build a Mesa Rail: flex, gap 18px, overflow-x auto, snap-x mandatory, padding 20/6/22, margin 0 -6, scrollbar-width thin, webkit scrollbar 8px with line thumb radius 4. Children carry snap-start. Never wrap.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/rail.json",
    code: "import { Rail } from \"@/components/ui/rail\";\n\nexport function Shelf() {\n  return <Rail>\n    <div>Card one</div>\n    <div>Card two</div>\n  </Rail>;\n}" },
  { id: "result-card", name: "ResultCard", tagline: "Outcome card with number, title, outcome, key/value rows.",
    anatomy: ["File number (mono, oxblood)", "Title", "Outcome line", "Key/value list (dl, 130px/1fr)"],
    props: [["fileNumber", "string", "No", "Mono file number."], ["title", "string", "No", "Card title."], ["outcome", "string", "No", "Outcome line."], ["rows", "{ key, value }[]", "No", "Key/value rows."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Border 1px line, radius 12, padding 28, margin-bottom 18, background rgba(255,255,255,0.015).", "File number mono 12px oxblood, 0.08em.", "Title margin 10px 0 8px. Outcome 15px, margin-bottom 16.", "Key/value list is a dl grid 130px/1fr, gap 8/16, 14px; dt ink-soft uppercase 11px 0.1em 700; dd margin 0."],
    contract: { format: "oeste.component.v1", component: "ResultCard", props: { fileNumber: "string?", title: "string?", outcome: "string?", rows: "array?" }, a11y: { list: "dl + dt/dd" } },
    prompt: "Build a Mesa ResultCard: 1px line border, radius 12, padding 28, margin-bottom 18, rgba(255,255,255,0.015) bg, mono 12px oxblood file number, title margin 10/0/8, 15px outcome, dl grid 130px/1fr gap 8/16 with ink-soft uppercase 11px dt.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/result-card.json",
    code: "import { ResultCard } from \"@/components/ui/result-card\";\n\nexport function Result() {\n  return <ResultCard fileNumber=\"Ref 01\" title=\"Title goes here.\" outcome=\"Outcome goes here.\" rows={[{ key: \"Status\", value: \"Open\" }]} />;\n}" },
  { id: "forum-thread", name: "ForumThread", tagline: "Thread row with votes and replies.",
    anatomy: ["Votes (oxblood 700)", "Thread text", "Replies (hairline-separated)"],
    props: [["votes", "number", "No", "Vote count."], ["text", "string", "Yes", "Thread text."], ["replies", "{ text }[]", "No", "Replies."]],
    keyboard: [["Tab", "Not specified in source."], ["Enter / Space", "Not specified in source."]],
    invariants: ["Cursor pointer; hover is a 4% oxblood wash (rgba pair, light/dark).", "Paragraphs have margin 0.", "Votes are oxblood 700.", "Replies: border-top 1px line-soft, margin-top 12, padding-top 12. First reply: no border, margin-top 8, padding-top 0."],
    contract: { format: "oeste.component.v1", component: "ForumThread", props: { votes: "number?", text: "string", replies: "array?" }, a11y: { keyboard: "not specified in source" } },
    prompt: "Build a Mesa ForumThread: cursor pointer, hover 4% oxblood wash, oxblood 700 votes, margin-0 paragraphs, replies with 1px line-soft top borders (margin-top 12, padding-top 12; first reply no border, margin-top 8, padding-top 0). Keyboard is not specified in source — do not invent it.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/forum-thread.json",
    code: "import { ForumThread } from \"@/components/ui/forum-thread\";\n\nexport function Thread() {\n  return <ForumThread votes={12} text=\"Thread text goes here.\" replies={[{ text: \"Reply text goes here.\" }]} />;\n}" },
  { id: "mini-gates", name: "MiniGates", tagline: "Compact gate cards, four across.",
    anatomy: ["Cells (border, radius 8, padding 14)", "Number (mono, accent)", "Title (600 14px) + body (12.5px)"],
    props: [["gates", "{ number, title, body? }[]", "Yes", "Gate cells."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Grid 1 col narrow, 2 cols at 700px+, 4 cols at 1100px+; container margin 18px 0.", "Cell: 1px line border, radius 8, padding 14, card bg.", "Number mono 11.5px accent, 0.06em. Title 600 14px, margin-top 4. Body 12.5px ink-soft, margin-top 6, line-height 1.5."],
    contract: { format: "oeste.component.v1", component: "MiniGates", props: { gates: "array" }, a11y: { list: "plain content" } },
    prompt: "Build Mesa MiniGates: grid 1 col (2 at 700px+, 4 at 1100px+), container margin 18/0, cells with 1px line border, radius 8, padding 14, card bg, mono 11.5px accent numbers, 600 14px titles, 12.5px ink-soft bodies.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/mini-gates.json",
    code: "import { MiniGates } from \"@/components/ui/mini-gates\";\n\nexport function Gates() {\n  return <MiniGates gates={[{ number: \"01\", title: \"Gate one\", body: \"Description goes here.\" }]} />;\n}" },
  { id: "start-here", name: "StartHere", tagline: "Intro card with kick, title, body.",
    anatomy: ["Kick (mono, faint)", "Title (Merriweather 21px)", "Body (14.5px, max 62ch)"],
    props: [["kick", "string", "No", "Kick text."], ["title", "string", "Yes", "Title."], ["children", "ReactNode", "Yes", "Body content."]],
    keyboard: [["Tab", "Move through links inside the card."], ["Enter", "Follow the focused link."]],
    invariants: ["Border 1px line, radius 8, card bg, padding 20px 22px, margin-bottom 22.", "Kick mono 11px 700 0.22em uppercase ink-faint, margin-bottom 8.", "Title Merriweather 21px, margin-bottom 8.", "Body paragraphs margin 0 0 12, ink-soft 14.5px, line-height 1.6, max-width 62ch.", "Links inside the card use hero-em."],
    contract: { format: "oeste.component.v1", component: "StartHere", props: { title: "string", kick: "string?" }, a11y: { heading: "h3" } },
    prompt: "Build a Mesa StartHere: 1px line border, radius 8, card bg, padding 20/22, margin-bottom 22, mono 11px faint kick, Merriweather 21px title, body paragraphs 14.5px ink-soft, 1.6 line-height, max 62ch.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/start-here.json",
    code: "import { StartHere } from \"@/components/ui/start-here\";\n\nexport function Intro() {\n  return <StartHere kick=\"Start here\" title=\"Title goes here.\"><p>Description goes here.</p></StartHere>;\n}" },
  { id: "search-pill", name: "SearchPill", tagline: "Pill search with keyboard hint.",
    anatomy: ["Input (mono 13px, borderless)", "Kbd hint"],
    props: [["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["placeholder", "string", "No — Search…", "Placeholder text."], ["kbd", "string", "No — ⌘K", "Keyboard hint label."]],
    keyboard: [["Tab", "Move focus into the search."], ["Type", "Filter results."], ["Escape", "Not specified in source."]],
    invariants: ["Flex, gap 10, card bg, 1px line border, radius 999, padding 8/16, flex 1, min-width 200, max-width 380, margin-left auto.", "Focus-within: ink-soft border + 0 0 0 3px line-soft shadow.", "Input: border 0, outline 0, transparent bg, mono 13px, width 100%, ink.", "Kbd: mono 10.5px 700 ink-faint, 1px line border, radius 5, padding 2/7, paper bg, nowrap."],
    contract: { format: "oeste.component.v1", component: "SearchPill", props: { value: "string", placeholder: "string?", kbd: "string?" }, a11y: { label: "aria-label", placeholder: "never the label" } },
    prompt: "Build a Mesa SearchPill: flex gap 10, card bg, 1px line border, radius 999, padding 8/16, flex 1, min-width 200, max-width 380, margin-left auto, focus-within ink-soft border + 3px line-soft ring, borderless mono 13px input, mono 10.5px kbd hint.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/search-pill.json",
    code: "import { useState } from \"react\";\nimport { SearchPill } from \"@/components/ui/search-pill\";\n\nexport function Search() {\n  const [value, setValue] = useState(\"\");\n  return <SearchPill value={value} onChange={setValue} />;\n}" },
  { id: "banner", name: "Banner", tagline: "Always-dark notice bar.",
    anatomy: ["Text (12.5px, centered)", "Strong (700)"],
    props: [["children", "ReactNode", "Yes", "Banner text."]],
    keyboard: [["—", "Not interactive. No keyboard behavior."]],
    invariants: ["Always dark: light theme bg #181b1f, text #f3efe6; dark theme bg #060504, text #e8dfc9, border-bottom 1px line.", "Font 12.5px, letter-spacing 0.02em, padding 9px 20px, text-align center.", "Strong is 700.", "Banner is a notice bar, not a button. Never make it clickable."],
    contract: { format: "oeste.component.v1", component: "Banner", props: {}, a11y: { note: "plain content, never interactive" } },
    prompt: "Build a Mesa Banner: always-dark notice bar (light #181b1f/#f3efe6, dark #060504/#e8dfc9 + 1px line bottom border), 12.5px, 0.02em, padding 9/20, centered, strong 700. Never clickable.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/banner.json",
    code: "import { Banner } from \"@/components/ui/banner\";\n\nexport function Notice() {\n  return <Banner><strong>v0.2.0</strong> — current release.</Banner>;\n}" },
  { id: "duo-card", name: "DuoCard", tagline: "Two-up card with kick and hover lift.",
    anatomy: ["Kick (mono, faint)", "Title (Merriweather 21px)", "Body (15px)"],
    props: [["kick", "string", "No", "Kick text."], ["title", "string", "Yes", "Title."], ["children", "ReactNode", "Yes", "Body content."]],
    keyboard: [["Tab", "Move through links inside the card."], ["Enter", "Follow the focused link."]],
    invariants: ["Border 1px line, radius 8, card bg, padding 26px 24px.", "Transition: transform 450ms ease, border-color 300ms ease.", "Hover: translateY(-3px), border ink-soft.", "Kick mono 11px 700 0.2em uppercase ink-faint, margin-bottom 10. Title margin-bottom 8, 21px. Body paragraphs margin 0 0 14, ink-soft 15px."],
    contract: { format: "oeste.component.v1", component: "DuoCard", props: { title: "string", kick: "string?" }, a11y: { heading: "h3" } },
    prompt: "Build a Mesa DuoCard: 1px line border, radius 8, card bg, padding 26/24, transition transform 450ms + border-color 300ms, hover translateY(-3px) + ink-soft border, mono 11px faint kick, 21px title, 15px ink-soft body.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/duo-card.json",
    code: "import { DuoCard } from \"@/components/ui/duo-card\";\n\nexport function Pair() {\n  return <DuoCard kick=\"Pattern\" title=\"Title goes here.\"><p>Description goes here.</p></DuoCard>;\n}" },
  { id: "index-row", name: "IndexRow", tagline: "Index row with hover-reveal arrow.",
    anatomy: ["Row number (mono, faint)", "Title (19px) + description", "Tag + id (wide only)", "Go arrow (hover-reveal)"],
    props: [["number", "string", "Yes", "Row number."], ["title", "string", "Yes", "Row title."], ["description", "string", "No", "Row description."], ["tag", "string", "No", "Tag column (wide only)."], ["id", "string", "No", "Id column (wide only)."], ["href", "string", "No — #", "Row link."], ["dim", "boolean", "No — false", "Dim variant: not a link, no hover."]],
    keyboard: [["Tab", "Move focus to the row link."], ["Enter", "Open the row."]],
    invariants: ["Grid 64px/1fr, gap 4/14, padding 16/6, align start; wide (900px+) 70px/1fr/170px/130px, padding-left 10, padding-right 44.", "Border-bottom 1px line-soft; text-decoration none; position relative; transition background 300ms; hover card bg.", "Row number mono 700 15px ink-faint, padding-top 2 (hover oxblood). Title 19px, margin-bottom 4. Description ink-soft 14.5px, margin-bottom 10, max-width 64ch.", "Go arrow absolute right 10 top 18, oxblood, opacity 0, translateX(-8px), 18px (hover opacity 1, translateX 0). Wide: right 14, top 50%, margin-top -11px.", "Dim variant: cursor default, hover bg transparent, no arrow."],
    contract: { format: "oeste.component.v1", component: "IndexRow", props: { number: "string", title: "string", description: "string?", tag: "string?", id: "string?", href: "string?", dim: "boolean" }, a11y: { link: "real <a>", dim: "not a link" } },
    prompt: "Build a Mesa IndexRow: grid 64px/1fr (wide 900px+ 70px/1fr/170px/130px), padding 16/6 (wide 10 left, 44 right), border-bottom line-soft, hover card bg, mono 700 15px faint number (hover oxblood), 19px title, 14.5px ink-soft description, go arrow absolute right 10 top 18 (wide right 14, top 50%, margin-top -11px), opacity 0 translateX(-8px) until hover. Dim variant: cursor default, no hover, no arrow.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/index-row.json",
    code: "import { IndexRow } from \"@/components/ui/index-row\";\n\nexport function Row() {\n  return <IndexRow number=\"01\" title=\"Button\" description=\"Primary, solid, ghost, solid small.\" tag=\"controls\" id=\"button\" href=\"#/components/button\" />;\n}" },
  { id: "select", name: "Select", tagline: "Native select with custom chevron.",
    anatomy: ["Select (native, custom chevron)", "Chevron (8x8, rotated borders)"],
    props: [["id", "string", "No", "Select id."], ["value / onChange", "string / (v) => void", "Yes", "Controlled value."], ["options", "{ value, label }[]", "Yes", "Options."], ["placeholder", "string", "No", "Disabled first option."], ["required", "boolean", "No — false", "Required flag."], ["ariaLabel", "string", "No", "Accessible label."]],
    keyboard: [["Tab", "Move focus to the select."], ["ArrowUp / ArrowDown", "Move between options."], ["Enter / Space", "Open the select."]],
    invariants: ["Width 100%, 1px line border, radius 6, paper bg, padding 12/40/12/14, 15px, ink, font inherit, appearance none, cursor pointer.", "Focus: outline none, oxblood border, 0 0 0 3px oxblood-at-12% shadow.", ":invalid text is ink-faint.", "Chevron: absolute right 16 top 50%, 8x8, border-right + border-bottom 2px ink-faint, translateY(-70%) rotate(45deg), pointer-events none."],
    contract: { format: "oeste.component.v1", component: "Select", props: { value: "string", options: "array", placeholder: "string?", required: "boolean" }, a11y: { label: "label or aria-label", native: "native select" } },
    prompt: "Build a Mesa Select: native select, width 100%, 1px line border, radius 6, paper bg, padding 12/40/12/14, 15px, appearance none, cursor pointer, focus oxblood border + 3px oxblood-at-12% shadow, :invalid ink-faint, chevron absolute right 16 top 50% 8x8 with 2px ink-faint right/bottom borders, translateY(-70%) rotate(45deg).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/select.json",
    code: "import { useState } from \"react\";\nimport { Select } from \"@/components/ui/select\";\n\nexport function Picker() {\n  const [value, setValue] = useState(\"\");\n  return <Select value={value} onChange={setValue} placeholder=\"Choose one\" options={[{ value: \"a\", label: \"Option A\" }, { value: \"b\", label: \"Option B\" }]} />;\n}" },
  { id: "option-row", name: "OptionRow", tagline: "Bordered radio option row.",
    anatomy: ["Radio (18x18, accent oxblood-deep)", "Label (15px)"],
    props: [["name", "string", "Yes", "Radio group name."], ["value", "string", "Yes", "Option value."], ["checked", "boolean", "No — false", "Checked state."], ["onChange", "(v) => void", "No", "Change handler."], ["children", "ReactNode", "Yes", "Label text."]],
    keyboard: [["Tab", "Move focus to the radio."], ["ArrowUp / ArrowDown", "Move between radio options."], ["Space", "Select the focused option."]],
    invariants: ["Flex gap 12, align flex-start, 1px line border, radius 6, padding 14, margin-bottom 10, cursor pointer, paper bg.", "Input: 18x18, margin-top 3, flex none, accent-color oxblood-deep.", "Label text is plain 15px body text."],
    contract: { format: "oeste.component.v1", component: "OptionRow", props: { name: "string", value: "string", checked: "boolean" }, a11y: { group: "fieldset + legend", input: "real radio" } },
    prompt: "Build a Mesa OptionRow: label wrapping a radio, flex gap 12, 1px line border, radius 6, padding 14, margin-bottom 10, cursor pointer, paper bg, 18x18 radio with margin-top 3 and accent-color oxblood-deep, 15px label text.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/option-row.json",
    code: "import { useState } from \"react\";\nimport { OptionRow } from \"@/components/ui/option-row\";\n\nexport function Choice() {\n  const [value, setValue] = useState(\"note\");\n  return <div><OptionRow name=\"type\" value=\"note\" checked={value === \"note\"} onChange={setValue}>Note</OptionRow><OptionRow name=\"type\" value=\"question\" checked={value === \"question\"} onChange={setValue}>Question</OptionRow></div>;\n}" },
  { id: "data-grid", name: "DataGrid", tagline: "Sortable, filterable, pageable data grid.",
    anatomy: ["Toolbar (Export CSV + selected count)", "Header row (sort buttons + pin toggles)", "Filter row (per-column inputs)", "Group header (collapsible, when groupBy)", "Data rows (cells + selection checkbox)", "Pagination (prev/next, page indicator, page-size selector)"],
    props: [["columns", "{ key, label, sortable?, width?, align? }[]", "Yes", "Column definitions. align is left | right | center."], ["rows", "object[]", "Yes", "Rows, keyed by column key."], ["rowKey", "string", "No — id", "Unique key field for selection and identity."], ["pageSize", "number", "No — 10", "Rows per page. Selector offers 10 / 25 / 50 / 100."], ["selectable", "boolean", "No — false", "Enables row selection with checkboxes."], ["groupBy", "string", "No", "Column key to group rows by."], ["initialSort", "{ key, direction: asc | desc }", "No", "Initial sort. Click a header to cycle asc, desc, none."]],
    keyboard: [["Tab", "Move through sort buttons, filter inputs, pin toggles, checkboxes, group toggles, pagination, and export."], ["Enter / Space", "On a sort button: cycle asc, desc, none. On a checkbox: toggle selection. On a pin toggle: pin or unpin. On a group toggle: collapse or expand."], ["Type", "Filter inputs filter that column by substring, case-insensitive."]],
    invariants: ["Semantic table: caption with row count, thead, tbody, th scope col, first column th scope row.", "Sort: button in th cycles asc, desc, none; aria-sort on th. Only columns with sortable !== false sort.", "Filter: per-column text input in the filter row, substring match, case-insensitive. Filtering resets to page 1.", "Pagination: prev/next, Page X of Y, page-size selector 10 / 25 / 50 / 100. Only the current page renders (pagination is the virtualization). Pagination resets to page 1 when sort, filter, or grouping change.", "Selection (selectable): checkbox column, header select-all, aria-selected on rows, N selected count (aria-live polite). Selection persists across pages.", "Pinning: pin toggle in th, aria-pressed, pinned columns render first with position sticky left. At least one column stays unpinned.", "Grouping (groupBy): filter, then group, then sort within groups. Group header button with aria-expanded + count. Collapsed groups hide their rows but still occupy page slots; expand a group to see its rows. Grouping changes reset to page 1.", "CSV export: Export CSV downloads the filtered + sorted set (before pagination) as a .csv file, commas/quotes/newlines escaped.", "Selected rows: check + oxblood wash + aria-selected, never color alone."],
    contract: { format: "oeste.component.v1", component: "DataGrid", props: { columns: "array", rows: "array", rowKey: "string", pageSize: "number", selectable: "boolean", groupBy: "string?", initialSort: "object?" }, a11y: { table: "semantic table + caption + th scope", sort: "button in th + aria-sort", filter: "input + aria-label", select: "checkbox + aria-selected", group: "button + aria-expanded", pin: "button + aria-pressed" } },
    prompt: "Build a Mesa DataGrid: semantic table with caption, sort buttons in th with aria-sort cycling asc, desc, none, per-column filter inputs in a filter row, pagination with Page X of Y + page-size 10/25/50/100 (only the current page renders), selectable checkboxes with aria-selected + N selected count, pin toggles with aria-pressed (pinned columns render first, sticky left, at least one column stays unpinned), collapsible group headers with aria-expanded + count (collapsed groups hide their rows but still occupy page slots), grouping changes reset to page 1, CSV export of the filtered + sorted set. Selected rows use a check + oxblood wash + aria-selected, never color alone. Pagination is the virtualization; do not claim a separate virtualized scroll window.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/data-grid.json",
    code: "import { DataGrid } from \"@/components/ui/data-grid\";\n\nexport function Grid() {\n  const columns = [{ key: \"name\", label: \"Name\", sortable: true }, { key: \"status\", label: \"Status\" }];\n  const rows = [{ id: \"1\", name: \"Item A\", status: \"Open\" }, { id: \"2\", name: \"Item B\", status: \"Done\" }];\n  return <DataGrid columns={columns} rows={rows} selectable />;\n}" },
);

// Functional group per component id, mirroring TAGS in scripts/build_registry.py.
// Used for the tag column in IndexRow lists. Keep the two maps in sync.
const TAGS = {
  "site-nav": "navigation", "breadcrumbs": "navigation", "prev-next": "navigation", "footer": "navigation",
  "command-palette": "overlays",
  "page-header": "content", "hero": "content", "section-head": "content", "kicker": "content",
  "ghost-number": "content", "disclaimer": "content", "pledge": "content", "cta-band": "content",
  "start-here": "content",
  "file-card": "data", "folder-card": "data", "data-table": "data", "data-grid": "data", "stats-band": "data",
  "activity-feed": "data", "activity-entry": "data", "steps-list": "data", "detail-card": "data",
  "summary-card": "data", "pipeline-strip": "data", "timeline": "data", "media-card": "data",
  "open-questions": "data", "coverage-list": "data", "source-list": "data", "citations": "data",
  "role-card": "data", "step-gates": "data", "shows-card": "data", "profile-rows": "data",
  "profile-status": "data", "profile-card-row": "data", "profile-hero": "data",
  "daily-summary": "data", "next-up": "data", "review-queue": "data",
  "rail": "data", "result-card": "data", "forum-thread": "data", "mini-gates": "data",
  "duo-card": "data", "index-row": "data",
  "submission-form": "forms", "directory-search": "forms",
  "search-pill": "forms", "select": "forms", "option-row": "forms",
  "button": "controls", "filter-chip": "controls", "forum-control": "controls",
  "theme-toggle": "controls", "icon-button": "controls", "nav-toggle": "controls",
  "profile-avatar": "controls",
  "status-badge": "feedback", "pill": "feedback", "stamp": "feedback",
  "assignment-line": "feedback", "status-line": "feedback", "empty-state": "feedback",
  "empty-attachment": "feedback", "diff-band": "feedback", "banner": "feedback",
};

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function hl(src) {
  const re = /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b(?:import|export|from|const|let|function|return|if|else|for|new|typeof|default|true|false|null|undefined|boolean|string|number)\b)|(\b\d+(?:\.\d+)?\b)/g;
  let out = "";
  let last = 0;
  let m;
  while ((m = re.exec(src)) !== null) {
    out += esc(src.slice(last, m.index));
    const [full, comment, str, kw, num] = m;
    if (comment) out += '<span class="tok-comment">' + esc(full) + "</span>";
    else if (str) out += '<span class="tok-string">' + esc(full) + "</span>";
    else if (kw) out += '<span class="tok-keyword">' + esc(full) + "</span>";
    else if (num) out += '<span class="tok-number">' + esc(full) + "</span>";
    else out += esc(full);
    last = m.index + full.length;
  }
  out += esc(src.slice(last));
  return out;
}

function copyText(text, label) {
  const done = () => showToast(label || "Copied");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else fallbackCopy(text, done);
}
function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) { /* clipboard unavailable */ }
  document.body.removeChild(ta);
  done();
}
function showToast(msg) {
  const region = document.getElementById("toastRegion");
  const t = document.createElement("div");
  t.className = "toast";
  t.setAttribute("role", "status");
  t.innerHTML = "<span>" + esc(msg) + "</span>";
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = "Dismiss";
  b.addEventListener("click", () => t.remove());
  t.appendChild(b);
  region.appendChild(t);
}
function currentTheme() {
  return document.documentElement.dataset.theme || "dark";
}
// ThemeToggle icons: sun = switch to light, moon = switch to dark.
// The icon shows the TARGET mode, same as the old text label did.
const ICON_SUN = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
const ICON_MOON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("mesa-theme", theme); } catch (e) { /* storage unavailable */ }
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    btn.setAttribute("aria-label", "Theme: " + (theme === "dark" ? "Dark" : "Light") + ". Switch to " + (theme === "dark" ? "light" : "dark") + ".");
    // The ThemeToggle icon shows its target mode.
    btn.innerHTML = theme === "dark" ? ICON_SUN : ICON_MOON;
  }
}
function updateReadbar() {
  const fill = document.getElementById("readbarFill");
  if (!fill) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  fill.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
}
function parseHash() {
  const raw = (location.hash || "#/home").replace(/^#/, "");
  const [path, query] = raw.split("?");
  const parts = path.split("/").filter(Boolean);
  if (parts[0] === "components") {
    if (!parts[1]) return { route: "components-index", id: "", lens: "human" };
    return { route: "components", id: parts[1] || "site-nav", lens: new URLSearchParams(query || "").get("lens") || "human" };
  }
  return { route: parts[0] || "home", id: "", lens: "human" };
}
function lensBar(section, id, lens) {
  const lenses = [["human", "Human"], ["agent", "Agent"], ["vibe", "Vibe"]];
  return '<div class="lens-group" role="group" aria-label="Lens">' + lenses.map(([l, label]) =>
    '<a class="m-forum" href="#/' + section + "/" + id + "?lens=" + l + '" aria-pressed="' + (l === lens) + '">' + label + "</a>"
  ).join("") + "</div>";
}
function entryHead({ eyebrow, title, deck, ref, ghost }) {
  return '<div class="m-page-header"><p class="m-kicker faint">' + esc(eyebrow) + "</p><h1>" + esc(title) + "</h1>"
    + (deck ? '<p class="deck">' + esc(deck) + "</p>" : "")
    + (ref ? '<p class="ref">' + esc(ref) + "</p>" : "")
    + (ghost ? '<span class="m-ghost-num" aria-hidden="true">' + esc(ghost) + "</span>" : "")
    + "</div>";
}
// IndexRow list of every component. Home + the components index share it.
// Number = position in COMPONENTS (01–67). Tag/id columns show at 900px+.
function indexRowsHTML() {
  return '<div class="index-list">' + COMPONENTS.map((c, i) => {
    const n = String(i + 1).padStart(2, "0");
    return '<a class="m-index-row" href="#/components/' + c.id + '"><span class="m-index-num">' + n + '</span><span class="m-index-main"><h3 class="m-index-title">' + esc(c.name) + '</h3><span class="m-index-desc">' + esc(c.tagline) + '</span></span><span class="m-index-tag">' + esc(TAGS[c.id] || "") + '</span><span class="m-index-id">' + esc(c.id) + '</span><span class="m-index-go" aria-hidden="true">→</span></a>';
  }).join("") + "</div>";
}

// Guides index. Decks are copied verbatim from each page's entryHead.
const GUIDES = [
  ["getting-started", "Getting started", "Five steps. Tokens, one component, then ship."],
  ["setup", "Setup", "Full setup: tokens, Tailwind v3/v4, shadcn or copy-paste, troubleshooting."],
  ["patterns", "Patterns", "Mesa-native compositions. Each one is built from library components, nothing invented."],
  ["first-screen", "First screen", "One finished screen, end to end: Site Nav, Page Header, Directory Search, Filter Chip, File Card, Stats Band."],
  ["tokens", "Tokens", "The Mesa token set. Dark is the default theme. Swatches below are live — they follow the theme toggle, and the fixed colors stay put in both themes."],
  ["theming", "Theming", "Mesa is a theme, not a fork. Swap tokens, never components."],
  ["build-a-theme", "Build a theme", "Derive a palette, wire dark mode, turn a token file into a second theme."],
  ["layout", "Layout", "No layout primitives: native HTML plus the observed spacing values."],
  ["customizing", "Customizing", "Tokens first, compose second, fork third. Never break the invariants."],
  ["accessibility", "Accessibility", "Mesa's contract: keyboard first, meaning in text, contrast that is measured, not guessed."],
  ["migration", "Migration", "Adopting Mesa, from scratch or from Topanga."],
  ["faq", "FAQ", "The questions that come up."],
];
function guidesRowsHTML() {
  return '<div class="index-list">' + GUIDES.map(([route, title, deck], i) => {
    const n = String(i + 1).padStart(2, "0");
    return '<a class="m-index-row" href="#/' + route + '"><span class="m-index-num">' + n + '</span><span class="m-index-main"><h3 class="m-index-title">' + esc(title) + '</h3><span class="m-index-desc">' + esc(deck) + '</span></span><span class="m-index-tag"></span><span class="m-index-id">' + esc(route) + '</span><span class="m-index-go" aria-hidden="true">→</span></a>';
  }).join("") + "</div>";
}

function demoHTML(c) {
  const cap = '<p class="demo-caption">Real controls. Not a mockup.</p>';
  if (c.id === "site-nav") return '<div class="demo">' + cap + '<header class="topbar" style="position:static"><div class="topbar-inner"><a class="wordmark" href="#/home">mesa</a><nav aria-label="Demo"><a class="nav-link" style="display:inline-block" href="#/home">Home</a><a class="nav-link" style="display:inline-block" href="#/components/button">Components</a></nav><div class="nav-tools"><button type="button" class="m-icon-btn js-open-palette" aria-label="Search">⌕</button></div></div></header></div>';
  if (c.id === "command-palette") return '<div class="demo">' + cap + '<div class="m-palette"><input data-palette-input type="text" placeholder="Search or jump…" aria-label="Search or jump"><div data-palette-list><button type="button" class="m-palette-item" data-palette-item="Button"><span>Button</span><span class="kind">Component</span></button><button type="button" class="m-palette-item" data-palette-item="File Card"><span>File Card</span><span class="kind">Component</span></button><button type="button" class="m-palette-item" data-palette-item="Review Queue"><span>Review Queue</span><span class="kind">Component</span></button></div><p class="m-palette-hint">Enter to open. Escape to close.</p></div><p class="muted">Type to filter. This demo shows the palette box; the full overlay has a scrim.</p></div>';
  if (c.id === "page-header") return '<div class="demo"><div class="m-page-header"><p class="m-kicker faint">Components</p><h1>File Card</h1><p class="deck">Reference, title, description, meta, assignment.</p><p class="ref">Ref 01</p><span class="m-ghost-num" aria-hidden="true">01</span></div></div>';
  if (c.id === "hero") return '<div class="demo"><section class="m-hero-demo"><p class="m-kicker">Library</p><p class="m-hero-label">Components</p><p class="m-hero-bignum">67</p><h1 class="m-hero-h1">One system. <em>Three lenses.</em></h1><p class="lede">Description goes here.</p><div class="cta-row"><button type="button" class="m-btn">Get started</button><button type="button" class="m-btn m-btn-ghost"><span class="m-btn-dot" aria-hidden="true"></span>Browse components</button></div><p class="m-hero-trust"><a class="m-countlink" href="#/components"><strong>67 components</strong></a> · Trusted by teams.</p></section></div>';
  if (c.id === "status-badge") return '<div class="demo">' + cap + '<span class="m-status-badge"><span class="dot" aria-hidden="true"></span>All systems live</span></div>';
  if (c.id === "file-card") return '<div class="demo">' + cap + '<a class="m-file-card" href="#/components/file-card"><span class="m-file-ref">Ref 01</span><span class="m-file-title">Title goes here.</span><span class="muted" style="display:block">Description goes here.</span><span class="muted" style="display:block;font-size:13px;margin-top:8px">Meta goes here.</span><span class="m-assignment awaiting"><span class="lamp" aria-hidden="true"></span>Awaiting</span></a></div>';
  if (c.id === "folder-card") return '<div class="demo"><div class="demo-row"><article class="m-folder-card"><span class="m-stamp" style="position:absolute;right:16px;top:16px;border-color:var(--color-stamp-open);color:var(--color-stamp-open)">Open</span><p class="m-file-ref">Folder</p><h3 class="m-folder-title">Folder title</h3><p class="m-folder-meta">Meta goes here.</p><p class="m-folder-metarow"><span>Items <strong>12</strong></span></p><span class="m-assignment on"><span class="lamp" aria-hidden="true"></span>Assigned</span></article><article class="m-folder-card"><span class="m-stamp" style="position:absolute;right:16px;top:16px;border-color:var(--color-stamp-new);color:var(--color-stamp-new)">New</span><p class="m-file-ref">Folder</p><h3 class="m-folder-title">Second folder</h3><p class="m-folder-meta">Meta goes here.</p></article></div></div>';
  if (c.id === "data-table") return '<div class="demo"><div class="m-table"><a class="m-table-row" href="#/components/file-card"><span class="m-file-ref">Ref 01</span><strong>Title goes here.</strong><span class="muted" style="font-size:13px">Meta goes here.</span></a><a class="m-table-row" href="#/components/file-card"><span class="m-file-ref">Ref 02</span><strong>Second title.</strong><span class="muted" style="font-size:13px">Meta goes here.</span></a></div></div>';
  if (c.id === "pill") return '<div class="demo"><div class="demo-row"><span class="m-pill m-pill-type">Type</span><span class="m-pill m-pill-open">Open</span><span class="m-pill m-pill-verifying">Verifying</span><span class="m-pill m-pill-reward">Reward</span><span class="m-pill m-pill-indexed">Indexed</span><span class="m-pill m-pill-flag">Flag</span></div></div>';
  if (c.id === "stamp") return '<div class="demo"><div class="demo-row"><span class="m-stamp m-stamp-default">Default</span><span class="m-stamp m-stamp-ok">Ok</span><span class="m-stamp m-stamp-dim">Dim</span><span class="m-stamp m-stamp-warn">Warn</span></div></div>';
  if (c.id === "assignment-line") return '<div class="demo"><p class="m-assignment awaiting"><span class="lamp" aria-hidden="true"></span>Awaiting</p><p class="m-assignment on"><span class="lamp" aria-hidden="true"></span>Assigned</p></div>';
  if (c.id === "button") return '<div class="demo">' + cap + '<div class="demo-row"><button type="button" class="m-btn" data-demo-btn>Primary</button><button type="button" class="m-btn m-btn-solid">Solid</button><button type="button" class="m-btn m-btn-ghost">Ghost</button><button type="button" class="m-btn m-btn-solid m-btn-sm">Solid small</button><button type="button" class="m-btn" disabled>Disabled</button></div><p class="muted" id="demoBtnOut" aria-live="polite" style="margin-top:12px"></p></div>';
  if (c.id === "filter-chip") return '<div class="demo">' + cap + '<div class="demo-row"><button type="button" class="m-chip" data-chip aria-pressed="false">Open <span class="count">12</span></button><button type="button" class="m-chip" data-chip aria-pressed="true">Done <span class="count">96</span></button><button type="button" class="m-chip" data-chip aria-pressed="false">Review <span class="count">20</span></button></div><p class="muted" style="margin-top:12px">Tap a chip to toggle it.</p></div>';
  if (c.id === "forum-control") return '<div class="demo">' + cap + '<div class="demo-row"><button type="button" class="m-forum" data-forum aria-pressed="false">Discussion</button><button type="button" class="m-forum" data-forum aria-pressed="true">Announcements</button></div><p class="muted" style="margin-top:12px">Tap a control to toggle it.</p></div>';
  if (c.id === "submission-form") return '<div class="demo">' + cap + '<form data-submit-form style="max-width:520px"><div class="field"><label for="demoFormTitle">Title</label><input id="demoFormTitle" type="text" required placeholder="Title goes here."></div><div class="field" style="margin-top:16px"><label for="demoFormBody">Details</label><textarea id="demoFormBody" rows="3" placeholder="Description goes here."></textarea></div><fieldset style="border:0;padding:0;margin:16px 0 0"><legend style="font-weight:600;margin-bottom:8px">Type</legend><label class="radio-row"><input type="radio" name="demoType" value="note" checked> Note</label><label class="radio-row"><input type="radio" name="demoType" value="question"> Question</label></fieldset><button type="submit" class="m-btn" style="margin-top:20px">Submit</button></form></div>';
  if (c.id === "directory-search") return '<div class="demo">' + cap + '<input data-dir-search type="search" placeholder="Search the directory…" aria-label="Search the directory" style="width:100%;border:1px solid var(--color-border);border-radius:8px;background:var(--color-bg);color:var(--color-text);padding:12px 14px"><ul data-dir-list style="list-style:none;padding:0;margin:16px 0 0"><li data-dir-item="File Card">File Card</li><li data-dir-item="Folder Card">Folder Card</li><li data-dir-item="Review Queue">Review Queue</li></ul><p class="muted" data-dir-empty hidden>No matches.</p></div>';
  if (c.id === "section-head") return '<div class="demo"><p class="m-kicker">Section</p><h2>Title goes here.</h2><p class="muted" style="max-width:60ch">Description goes here.</p></div>';
  if (c.id === "kicker") return '<div class="demo"><p class="m-kicker">Default kicker</p><p class="m-kicker faint" style="margin-top:12px">Faint kicker</p></div>';
  if (c.id === "breadcrumbs") return '<div class="demo"><nav class="m-breadcrumb" aria-label="Breadcrumb"><a href="#/home">Home</a><span class="sep" aria-hidden="true">/</span><a href="#/components/button">Components</a><span class="sep" aria-hidden="true">/</span><span aria-current="page">Button</span></nav></div>';
  if (c.id === "stats-band") return '<div class="demo"><dl class="m-stats"><div><dt>Items</dt><dd>128</dd></div><div><dt>Open</dt><dd>12</dd></div><div><dt>Done</dt><dd>96</dd></div><div><dt>Review</dt><dd>20</dd></div></dl></div>';
  if (c.id === "activity-feed") return '<div class="demo"><section class="m-feed"><header class="m-feed-head"><span class="dot" aria-hidden="true"></span>Activity</header><div class="m-feed-row"><span class="m-feed-time">10:00</span><span class="muted"><strong>Member A</strong> updated the entry.</span></div><div class="m-feed-row"><span class="m-feed-time">09:12</span><span class="muted"><strong>Member B</strong> added a note.</span></div></section></div>';
  if (c.id === "activity-entry") return '<div class="demo"><p class="m-feed-time" style="margin-bottom:6px">10:00</p><p class="muted" style="font-size:14px"><strong>Member A</strong> updated the entry.</p></div>';
  if (c.id === "steps-list") return '<div class="demo"><ol class="m-steps"><li class="m-steps-row"><span class="m-steps-num">01</span><div><h3 style="font-size:18px;margin:0">Step one</h3><p class="muted" style="margin:4px 0 0;max-width:62ch">Description goes here.</p></div></li><li class="m-steps-row"><span class="m-steps-num">02</span><div><h3 style="font-size:18px;margin:0">Step two</h3><p class="muted" style="margin:4px 0 0;max-width:62ch">Description goes here.</p></div></li></ol></div>';
  if (c.id === "detail-card") return '<div class="demo"><article class="m-detail"><header class="m-detail-head"><span class="muted" style="font-family:var(--font-mono);font-size:10.5px">Detail</span><span style="font-family:var(--font-mono);font-size:21px;font-weight:700">01</span><span class="muted" style="font-size:13.5px">Meta</span></header><dl class="m-detail-grid"><div class="m-detail-cell"><dt>Status</dt><dd>Open</dd></div><div class="m-detail-cell"><dt>Count</dt><dd>12</dd></div></dl><p class="m-detail-row">Source: Source 01</p><p class="m-detail-row assigned">Assigned: Member A</p><footer style="padding:10px 16px;border-top:1px solid var(--color-border);font-size:12.5px" class="muted">Foot note.</footer></article></div>';
  if (c.id === "summary-card") return '<div class="demo"><article class="m-summary"><header class="m-summary-head">Summary</header><div class="m-summary-row"><span class="m-summary-key">Status</span><strong>Open</strong></div><div class="m-summary-row"><span class="m-summary-key">Count</span><strong style="font-family:var(--font-mono);font-weight:500;font-size:13px">12</strong></div></article></div>';
  if (c.id === "disclaimer") return '<div class="demo"><aside class="m-disclaimer"><strong>Please note</strong>Description goes here.</aside></div>';
  if (c.id === "pipeline-strip") return '<div class="demo"><section class="m-pipeline"><p class="m-kicker" style="margin-bottom:16px">Pipeline</p><div class="m-pipeline-steps"><span class="m-pipeline-step done"><span class="m-pipeline-dot" aria-hidden="true"></span>Draft</span><span class="m-pipeline-conn done" aria-hidden="true"></span><span class="m-pipeline-step current"><span class="m-pipeline-dot" aria-hidden="true"></span>Review</span><span class="m-pipeline-conn" aria-hidden="true"></span><span class="m-pipeline-step"><span class="m-pipeline-dot" aria-hidden="true"></span>Done</span></div><p class="muted" style="margin-top:16px;max-width:62ch">Description goes here.</p></section></div>';
  if (c.id === "profile-rows") return '<div class="demo"><div class="m-profile-rows"><article class="m-profile-row"><strong>Member A</strong><p class="muted" style="font-size:14px;line-height:1.65;max-width:64ch">Description goes here.</p><span class="m-profile-status">Active</span></article><article class="m-profile-row"><strong>Member B</strong><p class="muted" style="font-size:14px;line-height:1.65;max-width:64ch">Description goes here.</p></article></div></div>';
  if (c.id === "profile-status") return '<div class="demo"><span class="m-profile-status">Active</span></div>';
  if (c.id === "timeline") return '<div class="demo"><ol class="m-timeline"><li class="m-timeline-row"><span class="m-timeline-date">Step 01</span><div><p class="muted" style="max-width:64ch">Description goes here.</p><p class="muted" style="font-family:var(--font-mono);font-size:11.5px">Source: Source 01</p></div></li><li class="m-timeline-row"><span class="m-timeline-date">Step 02</span><div><p class="muted" style="max-width:64ch">Description goes here.</p></div></li></ol></div>';
  if (c.id === "media-card") return '<div class="demo"><a class="m-media" href="#/components/media-card"><span class="m-media-num">Media 01</span><p class="muted" style="margin:10px 0 0">Description goes here.</p><p class="m-media-more">View item</p><p class="muted" style="font-family:var(--font-mono);font-size:12px;margin:10px 0 0">Source: Source 01</p></a></div>';
  if (c.id === "open-questions") return '<div class="demo"><article class="m-questions-row"><span class="m-profile-status">Open</span><h3 class="m-questions-q">What comes next?</h3><div class="m-questions-a"><p class="kick">Answer</p><p class="muted">Description goes here.</p></div></article></div>';
  if (c.id === "coverage-list") return '<div class="demo"><ul class="m-list-double" style="list-style:none;padding:0;margin:0"><li class="m-list-row"><a href="#">Title goes here.</a> <span class="muted">· Outlet (Date)</span></li><li class="m-list-row"><a href="#">Second title.</a> <span class="muted">· Outlet (Date)</span></li></ul></div>';
  if (c.id === "source-list") return '<div class="demo"><ul class="m-list-double" style="list-style:none;padding:0;margin:0"><li class="m-list-row"><a href="#" style="display:block">Title goes here.<span class="muted" style="display:block;font-size:13px">Sub goes here.</span></a></li></ul></div>';
  if (c.id === "citations") return '<div class="demo"><ol class="m-list-double" style="list-style:none;padding:0;margin:0"><li class="m-cite-row"><span class="m-cite-num">01</span><span>Citation text goes here.</span></li><li class="m-cite-row"><span class="m-cite-num">02</span><span>Second citation.</span></li></ol></div>';
  if (c.id === "prev-next") return '<div class="demo"><nav class="m-prevnext" aria-label="Previous and next"><a href="#/components/pill"><span class="lbl">Previous</span><span class="ttl">Pill</span></a><a href="#/components/stamp"><span class="lbl">Next</span><span class="ttl">Stamp</span></a></nav></div>';
  if (c.id === "diff-band") return '<div class="demo"><section class="m-diff"><p class="kick m-kicker">Before / after</p><h2>What changed</h2><p class="lede">Description goes here.</p><div class="m-diff-row"><span class="m-diff-num">01</span><div><strong style="color:#fff">Before</strong><p style="color:var(--color-diff-muted);margin:4px 0 0">Description goes here.</p></div></div><div class="m-diff-row"><span class="m-diff-num">02</span><div><strong style="color:#fff">After</strong><p style="color:var(--color-diff-muted);margin:4px 0 0">Description goes here.</p></div></div></section></div>';
  if (c.id === "role-card") return '<div class="demo"><article class="m-role"><span class="m-role-chip">Role</span><h3 class="m-role-title">Title goes here.</h3><p class="muted" style="font-size:14px">Description goes here.</p></article></div>';
  if (c.id === "step-gates") return '<div class="demo"><ol class="m-gates" style="list-style:none;padding:0"><li class="m-gate"><span class="m-gate-num" aria-hidden="true">1</span><h3 class="m-gate-title">Gate one</h3><p class="muted">Description goes here.</p></li><li class="m-gate"><span class="m-gate-num" aria-hidden="true">2</span><h3 class="m-gate-title">Gate two</h3><p class="muted">Description goes here.</p></li></ol></div>';
  if (c.id === "pledge") return '<div class="demo"><section class="m-pledge"><div class="m-pledge-row"><strong>We keep it simple.</strong><p class="muted">Description goes here.</p></div><div class="m-pledge-row"><strong>We show our work.</strong><p class="muted">Description goes here.</p></div></section></div>';
  if (c.id === "cta-band") return '<div class="demo"><section class="m-cta"><h2>Start building</h2><p>Description goes here.</p><div style="margin-top:24px"><button type="button" class="m-btn m-btn-solid m-btn-sm">Get started</button></div><p style="margin-top:16px"><a href="#/getting-started">Read the docs</a></p></section></div>';
  if (c.id === "footer") return '<div class="demo"><footer class="m-footer-demo"><div style="display:grid;gap:24px"><p class="muted" style="font-size:13px">Blurb goes here.</p><div><h4>Docs</h4><a href="#/getting-started">Getting started</a><a href="#/tokens">Tokens</a></div></div><p class="muted" style="border-top:1px solid var(--color-border);margin-top:18px;padding-top:16px;font-size:12.5px">Fine print goes here.</p></footer></div>';
  if (c.id === "theme-toggle") return '<div class="demo">' + cap + '<button type="button" class="m-theme-toggle" data-theme-demo aria-label="Switch to light">' + ICON_SUN + '</button><p class="muted" style="margin-top:12px">Toggles this site between dark and light. The icon shows the target mode.</p></div>';
  if (c.id === "icon-button") return '<div class="demo">' + cap + '<button type="button" class="m-icon-btn" data-icon-demo aria-label="Search">⌕</button></div>';
  if (c.id === "nav-toggle") return '<div class="demo">' + cap + '<button type="button" class="m-nav-toggle" data-nav-demo aria-expanded="false" aria-label="Menu"><span class="bar" aria-hidden="true"></span><span class="bar" aria-hidden="true"></span><span class="bar" aria-hidden="true"></span></button><p class="muted" style="margin-top:12px">Tap to see the bars become an X.</p></div>';
  if (c.id === "ghost-number") return '<div class="demo"><div class="m-ghost"><p style="max-width:40ch">Content goes here, with a ghost number behind it.</p><span class="m-ghost-num" aria-hidden="true">01</span></div></div>';
  if (c.id === "shows-card") return '<div class="demo"><section class="m-shows"><div class="m-shows-row"><span class="m-shows-key">Status</span><span class="muted">Open</span></div><div class="m-shows-row"><span class="m-shows-key no">Count</span><span class="muted">12</span></div></section></div>';
  if (c.id === "empty-attachment") return '<div class="demo"><div class="m-empty-attach"><p style="margin:0">No attachment yet.</p></div></div>';
  if (c.id === "profile-avatar") return '<div class="demo"><div class="demo-row" style="align-items:flex-end"><span class="m-avatar m-avatar-default" aria-hidden="true">MA</span><span class="m-avatar m-avatar-lg" aria-hidden="true">MA</span><span class="m-avatar m-avatar-xl" aria-hidden="true">MA</span></div></div>';
  if (c.id === "profile-card-row") return '<div class="demo"><a class="m-card-row" href="#"><span class="m-avatar m-avatar-default" aria-hidden="true">MA</span><div><span class="m-card-name">Member A</span><span class="m-card-role">Role goes here.<span class="lbl">Lead</span></span></div></a><a class="m-card-row" href="#"><span class="m-avatar m-avatar-default" aria-hidden="true">MB</span><div><span class="m-card-name">Member B</span><span class="m-card-role">Role goes here.</span></div></a></div>';
  if (c.id === "status-line") return '<div class="demo"><p class="m-status-line"><span class="dot" aria-hidden="true"></span>All caught up</p></div>';
  if (c.id === "profile-hero") return '<div class="demo"><div style="display:flex;gap:20px;align-items:center"><span class="m-avatar m-avatar-xl" aria-hidden="true">MA</span><div><h1 style="margin:0">Member A</h1><p class="muted" style="font-family:var(--font-mono);font-size:12.5px">Role goes here.</p></div></div><p class="m-status-line" style="margin-top:16px"><span class="dot" aria-hidden="true"></span>Active</p><dl class="m-stats" style="margin-top:16px"><div><dt>Items</dt><dd>12</dd></div><div><dt>Done</dt><dd>8</dd></div></dl></div>';
  if (c.id === "empty-state") return '<div class="demo">' + cap + '<section class="m-empty-state"><p class="m-kicker">Empty</p><h2>Nothing here yet</h2><p class="muted">Description goes here.</p><button type="button" class="m-btn" data-empty-demo style="margin-top:20px">Create item</button></section></div>';
  if (c.id === "review-queue") return '<div class="demo">' + cap + '<p class="m-kicker" style="color:var(--color-accent-deep)">Ref 01</p><header style="display:flex;gap:8px;align-items:center;margin-top:8px"><h3 style="font-family:var(--font-mono);font-size:11px;margin:0">Review queue</h3><span class="m-queue-count">2</span></header><div><button type="button" class="m-queue-row" data-queue aria-expanded="false" aria-controls="demoQueue1"><span class="m-queue-avatar reviewing"><span class="m-avatar m-avatar-default" aria-hidden="true">MA</span></span><span style="flex:1;font-size:14px">Item awaiting review.</span><span class="muted" data-queue-chevron>▾</span></button><div id="demoQueue1" class="m-queue-detail" hidden><p>Detail goes here.</p><p class="muted" style="font-size:13px">By Member A</p></div><button type="button" class="m-queue-row" data-queue aria-expanded="false" aria-controls="demoQueue2"><span class="m-queue-avatar"><span class="m-avatar m-avatar-default" aria-hidden="true">MB</span></span><span style="flex:1;font-size:14px">Second item.</span><span class="muted" data-queue-chevron>▾</span></button><div id="demoQueue2" class="m-queue-detail" hidden><p>Detail goes here.</p></div></div></div>';
  if (c.id === "daily-summary") return '<div class="demo"><section class="m-daily"><p class="m-kicker">Today</p><p style="margin:4px 0 0">12 items · 8 done · 4 open</p></section></div>';
  if (c.id === "next-up") return '<div class="demo"><section class="m-nextup"><p class="m-kicker faint">Next up</p><p style="margin:4px 0 0;font-size:14.5px">Title goes here.</p><p class="muted" style="margin:2px 0 0;font-size:13px">Sub goes here.</p></section></div>';
  if (c.id === "rail") return '<div class="demo"><div class="m-rail"><article class="m-folder-card"><span class="m-stamp" style="position:absolute;right:16px;top:16px;border-color:var(--color-stamp-open);color:var(--color-stamp-open)">Open</span><p class="m-file-ref">Folder</p><h3 class="m-folder-title">Folder title</h3><p class="m-folder-meta">Meta goes here.</p></article><article class="m-folder-card"><span class="m-stamp" style="position:absolute;right:16px;top:16px;border-color:var(--color-stamp-new);color:var(--color-stamp-new)">New</span><p class="m-file-ref">Folder</p><h3 class="m-folder-title">Second folder</h3><p class="m-folder-meta">Meta goes here.</p></article><article class="m-folder-card"><span class="m-stamp" style="position:absolute;right:16px;top:16px;border-color:var(--color-stamp-review);color:var(--color-stamp-review)">Review</span><p class="m-file-ref">Folder</p><h3 class="m-folder-title">Third folder</h3><p class="m-folder-meta">Meta goes here.</p></article></div><p class="muted">Scroll the rail sideways. Cards snap-start.</p></div>';
  if (c.id === "result-card") return '<div class="demo"><article class="m-result-card"><p class="m-result-fno">Ref 01</p><h3>Title goes here.</h3><p class="m-result-outcome">Outcome goes here.</p><dl class="m-result-dl"><dt>Status</dt><dd>Open</dd><dt>Count</dt><dd>12</dd></dl></article></div>';
  if (c.id === "forum-thread") return '<div class="demo"><article class="m-thread"><p><span class="m-thread-votes">12</span> Thread text goes here.</p><p class="m-thread-reply">Reply text goes here.</p><p class="m-thread-reply">Second reply.</p></article><p class="muted">Hover the thread for the 4% oxblood wash.</p></div>';
  if (c.id === "mini-gates") return '<div class="demo"><div class="m-mini-gates"><div><p class="m-mini-num">01</p><p class="m-mini-title">Gate one</p><p class="m-mini-body">Description goes here.</p></div><div><p class="m-mini-num">02</p><p class="m-mini-title">Gate two</p><p class="m-mini-body">Description goes here.</p></div><div><p class="m-mini-num">03</p><p class="m-mini-title">Gate three</p><p class="m-mini-body">Description goes here.</p></div><div><p class="m-mini-num">04</p><p class="m-mini-title">Gate four</p><p class="m-mini-body">Description goes here.</p></div></div></div>';
  if (c.id === "start-here") return '<div class="demo"><section class="m-start-here"><p class="m-start-kick">Start here</p><h3>Title goes here.</h3><p>Description goes here. <a href="#/getting-started">Getting started</a></p></section></div>';
  if (c.id === "search-pill") return '<div class="demo">' + cap + '<label class="m-search-pill" for="demoSearchPill"><span class="sr-only">Search</span><input id="demoSearchPill" data-search-pill type="search" placeholder="Search…" aria-label="Search"><kbd aria-hidden="true">⌘K</kbd></label><ul data-search-pill-list style="list-style:none;padding:0;margin:16px 0 0"><li data-search-pill-item="File Card">File Card</li><li data-search-pill-item="Folder Card">Folder Card</li><li data-search-pill-item="Review Queue">Review Queue</li></ul><p class="muted" data-search-pill-empty hidden>No matches.</p></div>';
  if (c.id === "banner") return '<div class="demo"><div class="m-banner"><strong>v0.2.0</strong> — current release.</div><p class="muted" style="margin-top:12px">Always dark, in both themes. Never clickable.</p></div>';
  if (c.id === "duo-card") return '<div class="demo"><div style="display:grid;gap:16px;grid-template-columns:1fr 1fr"><article class="m-duo-card"><p class="m-duo-kick">Pattern</p><h3>Title goes here.</h3><p>Description goes here.</p></article><article class="m-duo-card"><p class="m-duo-kick">Pattern</p><h3>Second title.</h3><p>Description goes here.</p></article></div></div>';
  if (c.id === "index-row") return '<div class="demo"><div class="index-list"><a class="m-index-row" href="#/components/button"><span class="m-index-num">01</span><span class="m-index-main"><h3 class="m-index-title">Button</h3><span class="m-index-desc">Primary, solid, ghost, solid small.</span></span><span class="m-index-tag">controls</span><span class="m-index-id">button</span><span class="m-index-go" aria-hidden="true">→</span></a><a class="m-index-row" href="#/components/file-card"><span class="m-index-num">02</span><span class="m-index-main"><h3 class="m-index-title">File Card</h3><span class="m-index-desc">Reference, title, description, meta, assignment.</span></span><span class="m-index-tag">data</span><span class="m-index-id">file-card</span><span class="m-index-go" aria-hidden="true">→</span></a><div class="m-index-row dim"><span class="m-index-num">03</span><span class="m-index-main"><h3 class="m-index-title">Dim row</h3><span class="m-index-desc">Not a link. No hover, no arrow.</span></span><span class="m-index-tag">data</span><span class="m-index-id">dim</span></div></div></div>';
  if (c.id === "select") return '<div class="demo">' + cap + '<div class="field" style="max-width:420px"><label for="demoSelect">Choose one</label><span class="m-select-wrap"><select id="demoSelect" data-demo-select><option value="" disabled selected>Choose one</option><option value="a">Option A</option><option value="b">Option B</option></select></span></div></div>';
  if (c.id === "option-row") return '<div class="demo">' + cap + '<fieldset style="border:0;padding:0;margin:0;max-width:520px"><legend class="sr-only">Type</legend><label class="m-option-row"><input type="radio" name="demoOption" value="note" checked> Note</label><label class="m-option-row"><input type="radio" name="demoOption" value="question"> Question</label></fieldset></div>';
  if (c.id === "data-grid") return '<div class="demo">' + cap + '<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:12px"><button type="button" data-grid-export class="m-btn m-btn-ghost">Export CSV</button><p aria-live="polite" data-grid-selected class="muted" style="margin:0;font-size:13px">0 selected</p></div><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse"><caption class="muted" style="text-align:left;font-size:13px">Data grid demo. Sort with the header buttons, filter with the filter row, page with the pagination controls.</caption><thead><tr><th scope="col"><input type="checkbox" data-grid-select-all aria-label="Select all rows"></th><th scope="col" data-grid-th="name" aria-sort="none"><button type="button" data-grid-sort="name">Name</button></th><th scope="col" data-grid-th="status" aria-sort="none"><button type="button" data-grid-sort="status">Status</button></th><th scope="col" data-grid-th="score" aria-sort="none"><button type="button" data-grid-sort="score">Score</button></th></tr><tr><td></td><td><input type="text" data-grid-filter="name" placeholder="Filter Name" aria-label="Filter Name" style="width:100%;border:1px solid var(--color-border);border-radius:6px;background:var(--color-bg);color:var(--color-text);padding:8px 10px;font-size:13px"></td><td><input type="text" data-grid-filter="status" placeholder="Filter Status" aria-label="Filter Status" style="width:100%;border:1px solid var(--color-border);border-radius:6px;background:var(--color-bg);color:var(--color-text);padding:8px 10px;font-size:13px"></td><td><input type="text" data-grid-filter="score" placeholder="Filter Score" aria-label="Filter Score" style="width:100%;border:1px solid var(--color-border);border-radius:6px;background:var(--color-bg);color:var(--color-text);padding:8px 10px;font-size:13px"></td></tr></thead><tbody data-grid-body></tbody></table></div><div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:12px"><button type="button" data-grid-prev class="m-btn m-btn-ghost">Previous</button><span data-grid-page class="muted" style="font-size:13px">Page 1 of 3</span><button type="button" data-grid-next class="m-btn m-btn-ghost">Next</button></div></div>';
  return "";
}

function variantsHTML(c) {
  const row = (label, inner) => '<div class="variant-row"><span class="variant-label">' + label + '</span><div class="variant-demos">' + inner + "</div></div>";
  if (c.id === "folder-card") return "<h2>Variants</h2><p>Open and New stamps. Review and Closed use the same shell with their stamp colors.</p><div class=\"variant-matrix\">"
    + row("Open", '<article class="m-folder-card" style="width:240px"><span class="m-stamp" style="position:absolute;right:16px;top:16px;border-color:var(--color-stamp-open);color:var(--color-stamp-open)">Open</span><h3 class="m-folder-title">Folder</h3></article>')
    + row("New", '<article class="m-folder-card" style="width:240px"><span class="m-stamp" style="position:absolute;right:16px;top:16px;border-color:var(--color-stamp-new);color:var(--color-stamp-new)">New</span><h3 class="m-folder-title">Folder</h3></article>')
    + "</div>";
  if (c.id === "pill") return "<h2>Variants</h2><p>All six pill variants. Flag is a separate treatment, not a rounded pill.</p><div class=\"variant-matrix\">"
    + row("Type", '<span class="m-pill m-pill-type">Type</span>')
    + row("Open", '<span class="m-pill m-pill-open">Open</span>')
    + row("Verifying", '<span class="m-pill m-pill-verifying">Verifying</span>')
    + row("Reward", '<span class="m-pill m-pill-reward">Reward</span>')
    + row("Indexed", '<span class="m-pill m-pill-indexed">Indexed</span>')
    + row("Flag", '<span class="m-pill m-pill-flag">Flag</span>')
    + "</div>";
  if (c.id === "stamp") return "<h2>Variants</h2><p>All four stamp tones.</p><div class=\"variant-matrix\">"
    + row("Default", '<span class="m-stamp m-stamp-default">Default</span>')
    + row("Ok", '<span class="m-stamp m-stamp-ok">Ok</span>')
    + row("Dim", '<span class="m-stamp m-stamp-dim">Dim</span>')
    + row("Warn", '<span class="m-stamp m-stamp-warn">Warn</span>')
    + "</div>";
  if (c.id === "assignment-line") return "<h2>Variants</h2><p>Both assignment states.</p><div class=\"variant-matrix\">"
    + row("Awaiting", '<span class="m-assignment awaiting" style="border-top:none;margin:0;padding:0"><span class="lamp" aria-hidden="true"></span>Awaiting</span>')
    + row("On", '<span class="m-assignment on" style="border-top:none;margin:0;padding:0"><span class="lamp" aria-hidden="true"></span>Assigned</span>')
    + "</div>";
  if (c.id === "button") return "<h2>Variants</h2><p>Every variant in the contract, plus the disabled state.</p><div class=\"variant-matrix\">"
    + row("Primary", '<button type="button" class="m-btn">Primary</button>')
    + row("Solid", '<button type="button" class="m-btn m-btn-solid">Solid</button>')
    + row("Ghost", '<button type="button" class="m-btn m-btn-ghost">Ghost</button>')
    + row("Solid small", '<button type="button" class="m-btn m-btn-solid m-btn-sm">Solid small</button>')
    + row("Disabled", '<button type="button" class="m-btn" disabled>Disabled</button>')
    + "</div>";
  if (c.id === "filter-chip") return "<h2>Variants</h2><p>Default and active.</p><div class=\"variant-matrix\">"
    + row("Default", '<button type="button" class="m-chip" aria-pressed="false">Open <span class="count">12</span></button>')
    + row("Active", '<button type="button" class="m-chip" aria-pressed="true">Open <span class="count">12</span></button>')
    + "</div>";
  if (c.id === "forum-control") return "<h2>Variants</h2><p>Default and on.</p><div class=\"variant-matrix\">"
    + row("Default", '<button type="button" class="m-forum" aria-pressed="false">Discussion</button>')
    + row("On", '<button type="button" class="m-forum" aria-pressed="true">Discussion</button>')
    + "</div>";
  if (c.id === "profile-avatar") return "<h2>Variants</h2><p>All three sizes.</p><div class=\"variant-matrix\">"
    + row("Default (40px)", '<span class="m-avatar m-avatar-default" aria-hidden="true">MA</span>')
    + row("Lg (48px)", '<span class="m-avatar m-avatar-lg" aria-hidden="true">MA</span>')
    + row("Xl (112px)", '<span class="m-avatar m-avatar-xl" aria-hidden="true">MA</span>')
    + "</div>";
  return "";
}

function bindDemos() {
  const btn = document.querySelector("[data-demo-btn]");
  if (btn) btn.addEventListener("click", () => { document.getElementById("demoBtnOut").textContent = "Activated."; });
  document.querySelectorAll("[data-chip]").forEach((chip) => chip.addEventListener("click", () => {
    const on = chip.getAttribute("aria-pressed") === "true";
    chip.setAttribute("aria-pressed", String(!on));
  }));
  document.querySelectorAll("[data-forum]").forEach((ctl) => ctl.addEventListener("click", () => {
    const on = ctl.getAttribute("aria-pressed") === "true";
    ctl.setAttribute("aria-pressed", String(!on));
  }));
  const paletteInput = document.querySelector("[data-palette-input]");
  if (paletteInput) paletteInput.addEventListener("input", () => {
    const q = paletteInput.value.trim().toLowerCase();
    document.querySelectorAll("[data-palette-item]").forEach((item) => {
      item.style.display = item.dataset.paletteItem.toLowerCase().includes(q) ? "" : "none";
    });
  });
  const form = document.querySelector("[data-submit-form]");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Submitted. Nothing was sent or stored.");
  });
  const dirInput = document.querySelector("[data-dir-search]");
  if (dirInput) dirInput.addEventListener("input", () => {
    const q = dirInput.value.trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll("[data-dir-item]").forEach((item) => {
      const show = item.dataset.dirItem.toLowerCase().includes(q);
      item.style.display = show ? "" : "none";
      if (show) visible++;
    });
    const empty = document.querySelector("[data-dir-empty]");
    if (empty) empty.hidden = visible !== 0;
  });
  const searchPill = document.querySelector("[data-search-pill]");
  if (searchPill) searchPill.addEventListener("input", () => {
    const q = searchPill.value.trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll("[data-search-pill-item]").forEach((item) => {
      const show = item.dataset.searchPillItem.toLowerCase().includes(q);
      item.style.display = show ? "" : "none";
      if (show) visible++;
    });
    const empty = document.querySelector("[data-search-pill-empty]");
    if (empty) empty.hidden = visible !== 0;
  });
  const themeDemo = document.querySelector("[data-theme-demo]");
  if (themeDemo) themeDemo.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    setTheme(next);
    themeDemo.innerHTML = next === "dark" ? ICON_SUN : ICON_MOON;
    themeDemo.setAttribute("aria-label", "Switch to " + (next === "dark" ? "light" : "dark"));
  });
  const iconDemo = document.querySelector("[data-icon-demo]");
  if (iconDemo) iconDemo.addEventListener("click", () => showToast("Search opened. Nothing was sent."));
  const navDemo = document.querySelector("[data-nav-demo]");
  if (navDemo) navDemo.addEventListener("click", () => {
    const open = navDemo.getAttribute("aria-expanded") === "true";
    navDemo.setAttribute("aria-expanded", String(!open));
  });
  const emptyDemo = document.querySelector("[data-empty-demo]");
  if (emptyDemo) emptyDemo.addEventListener("click", () => showToast("New item started. Nothing was sent or stored."));
  document.querySelectorAll("[data-queue]").forEach((row) => row.addEventListener("click", () => {
    const open = row.getAttribute("aria-expanded") === "true";
    row.setAttribute("aria-expanded", String(!open));
    const panel = document.getElementById(row.getAttribute("aria-controls"));
    if (panel) panel.hidden = open;
    const chev = row.querySelector("[data-queue-chevron]");
    if (chev) chev.style.transform = open ? "" : "rotate(180deg)";
  }));
  // Patterns demos
  const patSave = document.querySelector("[data-pattern-save]");
  if (patSave) patSave.addEventListener("click", () => showToast("Filters applied. Nothing was sent or stored."));
  const patSubmit = document.querySelector("[data-pattern-submit]");
  if (patSubmit) patSubmit.addEventListener("click", () => showToast("Submitted for review. Nothing was sent or stored."));
  document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", () => copyText(b.dataset.copy, "Copied")));
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
        return '<tr' + (sel ? ' aria-selected="true" style="background:var(--color-surface)"' : '') + '><td><input type="checkbox" data-grid-row="' + r.id + '"' + (sel ? ' checked' : '') + ' aria-label="Select row ' + r.id + '"></td><th scope="row">' + esc(r.name) + '</th><td>' + esc(r.status) + '</td><td>' + esc(String(r.score)) + '</td></tr>';
      }).join("") || '<tr><td colspan="4" class="muted" style="text-align:center">No rows match the current filters.</td></tr>';
      gCols.forEach((k) => {
        const th = document.querySelector('[data-grid-th="' + k + '"]');
        const btn = document.querySelector('[data-grid-sort="' + k + '"]');
        if (!th || !btn) return;
        const sorted = gSort === k;
        th.setAttribute("aria-sort", sorted ? (gDir === "asc" ? "ascending" : "descending") : "none");
        btn.textContent = gLabels[k] + (sorted ? (gDir === "asc" ? " ↑" : " ↓") : "");
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
      if (allBox.checked) list.forEach((r) => gSelected.add(r.id));
      else list.forEach((r) => gSelected.delete(r.id));
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
}

function renderHome() {
  // Home follows the Topanga home structure: hero -> Start building
  // (install card) -> What Mesa means (prose) -> Three lenses -> one
  // Browse components button. The component list lives on the Components
  // page, not the home — one path to it, no redundancy.
  const installCmd = "npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/button.json";
  return '<section class="m-hero-demo">'
    + '<p class="m-kicker">Oeste · Mesa</p>'
    + '<h1 class="m-hero-h1">One system. <em>Three lenses.</em></h1>'
    + '<p class="lede">Mesa is a universal component library under Oeste, for humans, AI agents, and vibe coders — one set of tokens, one set of contracts, one set of components, read three ways.</p>'
    + "</section>"
    + '<section class="m-start-here"><h3>Start building</h3>'
    + '<p class="m-install-cmd"><code>' + installCmd + "</code></p>"
    + '<p><button type="button" class="m-btn" data-copy="' + installCmd + '">Copy command</button></p>'
    + '<p>Install Button via shadcn — see <a href="#/getting-started">Getting started</a>.</p></section>'
    + '<section class="m-home-block"><h2>What Mesa means</h2>'
    + "<p>Mesa is the feeling of a flat surface at the edge of the day \u2014 warm paper, near-black ink, one deep red for status. The light is low and golden, the work is laid out in front of you, and nothing shouts.</p>"
    + "<p>Mesa is a universal component library under Oeste, built on the shared foundation: one set of tokens, one set of contracts, one set of components. The theme is Mesa\u2019s own \u2014 warm paper, near-black ink, oxblood for status \u2014 but the structure belongs to Oeste.</p>"
    + "<p>Mesa is a quieter foundation for three ways of making. One set of tokens, one set of contracts, one set of components \u2014 read three ways. A designer reads the anatomy. An agent reads the contract. A vibe coder copies the code and ships. Nobody has to translate for anyone else, because the system already speaks all three languages.</p></section>"
    + '<section class="m-home-block"><h2>Three lenses, one system</h2>'
    + "<ul><li><strong>Human</strong> \u2014 anatomy, props, keyboard, accessibility.</li>"
    + "<li><strong>Agent</strong> \u2014 JSON contract + copyable prompt, so agents don\u2019t hallucinate props.</li>"
    + "<li><strong>Vibe</strong> \u2014 CLI + copy-paste React code, dark-mode-complete.</li></ul></section>"
    + '<section class="m-home-block"><a class="m-btn" href="#/components">Browse components</a></section>';
}

function renderComponentsIndex() {
  return entryHead({ eyebrow: "Docs", title: "Components", deck: "Every Mesa component, one index. 67 components.", ref: "Ref 00", ghost: "00" })
    + indexRowsHTML();
}

function renderGuides() {
  return entryHead({ eyebrow: "Docs", title: "Guides", deck: "Every guide, one index. 12 guides.", ref: "Ref 14", ghost: "14" })
    + guidesRowsHTML();
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
function renderComponent(id, lens) {
  const c = COMPONENTS.find((x) => x.id === id);
  if (!c) return "<h1>Not found</h1><p>No component with id " + esc(id) + ".</p>";
  const num = String(COMPONENTS.findIndex((x) => x.id === id) + 1).padStart(2, "0");
  // Order: entry-head -> demo -> lens pills -> lens content -> Anatomy /
  // Props / Keyboard / Invariants. All v0.1.0 content is kept; the shared
  // sections now follow the lens content on every lens.
  let html = entryHead({ eyebrow: "Components · " + c.id, title: c.name, deck: c.tagline, ref: "Ref " + num, ghost: num });
  const demo = demoHTML(c);
  if (demo) html += "<h2>Demo</h2>" + demo;
  html += lensBar("components", c.id, lens);
  if (lens === "agent") {
    html += "<h2>Contract</h2><p>Every contract is the same shape. Send it to any agent. One shape, one parser.</p>"
      + '<div class="code-head"><h3>Agent JSON</h3><button type="button" class="copy-btn" data-copy="' + esc(JSON.stringify(c.contract, null, 2)) + '">Copy contract</button></div>'
      + "<pre>" + hl(JSON.stringify(c.contract, null, 2)) + "</pre>"
      + '<div class="code-head"><h3>Prompt</h3><button type="button" class="copy-btn" data-copy="' + esc(c.prompt) + '">Copy prompt</button></div>'
      + '<p class="callout">' + esc(c.prompt) + "</p>";
  } else if (lens === "vibe") {
    html += '<div class="install-bar"><h2>Install with shadcn</h2><p>One command. shadcn writes the file into your project.</p><pre>' + hl(c.cli) + '</pre><p class="muted">Or copy-paste the code below into your own file and import from where you put it.</p></div>'
      + '<div class="code-head"><h3>Code</h3><button type="button" class="copy-btn" data-copy="' + esc(c.code) + '">Copy code</button></div>'
      + "<pre>" + hl(c.code) + "</pre>";
  } else {
    html += variantsHTML(c);
  }
  const ev = eventRows(c);
  const ay = a11yRows(c);
  html += "<h2>Anatomy</h2><table><thead><tr><th>Part</th><th>Notes</th></tr></thead><tbody>" + anatomyRows(c) + "</tbody></table>";
  html += "<h2>Props</h2><table><thead><tr><th>Prop</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody>"
    + c.props.map((p) => "<tr><td><code>" + esc(p[0]) + "</code></td><td><code>" + esc(p[1]) + "</code></td><td>" + esc(p[2]) + "</td><td>" + esc(p[3]) + "</td></tr>").join("")
    + "</tbody></table>";
  html += "<h2>Events</h2>" + (ev ? "<table><thead><tr><th>Event</th><th>Signature</th><th>Notes</th></tr></thead><tbody>" + ev + "</tbody></table>" : "<p>No events.</p>");
  const at = attributeRows(c);
  html += "<h2>Attributes</h2>" + (at.rows ? "<table><thead><tr><th>Attribute</th><th>Value</th><th>Element</th></tr></thead><tbody>" + at.rows + "</tbody></table>" + at.spreadNote : "<p>No data or ARIA attributes.</p>" + at.spreadNote);
  const st = stateRows(c);
  html += "<h2>States</h2>" + (st ? "<table><thead><tr><th>State</th><th>Via</th></tr></thead><tbody>" + st + "</tbody></table>" : "<p>No interaction states.</p>");
  html += "<h2>Keyboard</h2><table><thead><tr><th>Key</th><th>Behavior</th></tr></thead><tbody>"
    + c.keyboard.map((k) => "<tr><td><code>" + esc(k[0]) + "</code></td><td>" + esc(k[1]) + "</td></tr>").join("")
    + "</tbody></table>";
  html += "<h2>Accessibility contract</h2>" + (ay ? "<table><thead><tr><th>Aspect</th><th>Behavior</th></tr></thead><tbody>" + ay + "</tbody></table>" : "<p>No additional accessibility contract.</p>");
  html += "<h2>Invariants</h2><ul>" + c.invariants.map((i) => "<li>" + esc(i) + "</li>").join("") + "</ul>";
  return html;
}

function renderTokens() {
  const TOKENS = [
    ["bg", "--color-bg", "#faf9f7", "#100e0b", "Page background"],
    ["surface", "--color-surface", "#ffffff", "#181410", "Cards, palette box"],
    ["text", "--color-text", "#181b1f", "#ece3d0", "Headings, body"],
    ["muted", "--color-muted", "#5b5f65", "#a79b82", "Secondary text"],
    ["faint", "--color-faint", "#8a8e93", "#6e6455", "Tertiary only, never body"],
    ["border", "--color-border", "#ddd6c7", "#2e2720", "Hairlines"],
    ["border-soft", "--color-border-soft", "#ece5d5", "#221c16", "Soft hairlines"],
    ["accent", "--color-accent", "#8a1f2b", "#c9404f", "Oxblood — status, links, stamps"],
    ["accent-deep", "--color-accent-deep", "#6d1620", "#a52336", "Deep oxblood — hover, hero em (light)"],
    ["ok", "--color-ok", "#2e6b3e", "#8fae62", "Success, answers"],
    ["warn", "--color-warn", "#8a5a1f", "#c9404f", "Warning (dark = accent)"],
    ["wash", "--color-wash", "#f1ede5", "#14110c", "Hover wash"],
    ["btn-text", "--color-btn-text", "#f7f4ec", "#ffffff", "Text on ink buttons"],
    ["hero-em", "--color-hero-em", "#6d1620", "#e87a88", "Hero accent em"],
    ["diff-bg", "--color-diff-bg", "#181b1f", "#0b0908", "Diff band background"],
    ["diff-text", "--color-diff-text", "#f4f1ea", "#f4f1ea", "Diff band text (fixed)"],
    ["cta-bg", "--color-cta-bg", "#181b1f", "#181410", "CTA band background"],
    ["pill-reward", "--color-pill-reward-bg", "#f5e6c4", "#f5e6c4", "Reward pill (fixed)"],
    ["stamp-open", "--color-stamp-open", "#c9404f", "#c9404f", "Open stamp (fixed)"],
    ["stamp-new", "--color-stamp-new", "#d8a93f", "#d8a93f", "New stamp (fixed)"],
    ["stamp-review", "--color-stamp-review", "#c98a2b", "#c98a2b", "Review stamp (fixed)"],
    ["stamp-closed", "--color-stamp-closed", "#777777", "#777777", "Closed stamp (fixed)"],
    ["lamp-off", "--color-lamp-off", "#5a4a1f", "#5a4a1f", "Awaiting lamp (fixed)"],
    ["lamp-on", "--color-lamp-on", "#3f9e4d", "#3f9e4d", "Assigned lamp (fixed)"],
    ["queue-ping", "--color-queue-ping", "#c9a227", "#c9a227", "Queue ping ring (fixed)"],
  ];
  return entryHead({ eyebrow: "Docs", title: "Tokens", deck: "The Mesa token set. Dark is the default theme. Swatches below are live — they follow the theme toggle, and the fixed colors stay put in both themes.", ref: "Ref 03", ghost: "03" })
    + "<h2>Colors</h2><div class=\"swatches\">" + TOKENS.map(([name, v, light, dark, use]) =>
      '<div class="swatch"><div class="swatch-color" style="background:var(' + esc(v) + ')"></div><div class="swatch-body"><strong>' + esc(name) + '</strong><br><code>' + esc(v) + "</code><br>Light " + esc(light) + " · Dark " + esc(dark) + "<br>" + esc(use) + "</div></div>").join("")
    + "</div>"
    + "<h2>Type</h2><table><thead><tr><th>Token</th><th>Value</th></tr></thead><tbody>"
    + [["--font-serif", "Merriweather, Georgia, 'Times New Roman', serif — headings, big numbers"],
       ["--font-sans", "System sans stack — body"],
       ["--font-mono", "System mono stack — labels, references"],
       ["--type-h1-entry", "clamp(32px, 7vw, 52px) — page H1"],
       ["--type-hero-h1", "clamp(27px, 6.8vw, 42px) — hero H1"],
       ["--type-h2", "clamp(26px, 5vw, 36px) — section H2"],
       ["--type-bignum", "clamp(58px, 16vw, 124px), 900 — hero bignum"],
       ["--type-deck", "17.5px — deck"],
       ["--type-body", "16px / 1.6 — body"],
       ["--type-kicker", "11px mono 700, 0.26em — kicker"],
       ["--type-mono-label", "11.5px mono 700, 0.14em — labels"],
       ["--type-stamp", "11px mono 700, 0.14em — stamps"],
       ["--type-ghost", "118px Merriweather 900 — ghost number"],
       ["--leading-heading", "1.18"], ["--tracking-heading", "-0.01em"], ["--leading-body", "1.6"]]
      .map(([k, v]) => "<tr><td><code>" + esc(k) + "</code></td><td>" + esc(v) + "</td></tr>").join("")
    + "</tbody></table>"
    + "<h2>Layout</h2><p>Mesa has no formal spacing scale. The observed set — 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 34, 44 — is applied ad hoc per component. Do not invent a scale; use the values the components use.</p>"
    + "<table><thead><tr><th>Token</th><th>Value</th></tr></thead><tbody>"
    + [["--container-wrap", "1060px"], ["--section-padding", "34px 0"], ["--layout-wrap-padding", "0 20px"]]
      .map(([k, v]) => "<tr><td><code>" + esc(k) + "</code></td><td>" + esc(v) + "</td></tr>").join("")
    + "</tbody></table>"
    + "<h2>Radius</h2><p>No single radius token. Each component carries its own: detail card 14, button 6, card 8, chip 999, CTA band 12, dir search 8, empty state 12, file card 10, folder 10, forum control 999, status badge 999, icon button 50%, input 6, numbers 6/8/10, empty attachment 6, nav toggle 6, palette box 12, pill 999, profile status 999, pipeline strip 12, queue count 10, stamp 4, theme button 50%, media card 8, result card 12, mini gate 8, start here 8, search pill 999, duo card 8, select 6, option row 6, pill flag 4, rail thumb 4.</p>"
    + "<h2>Motion</h2><p>House easing: <code>cubic-bezier(.22,1,.36,1)</code>. Reveal: fade + rise 10px, 0.5s / 0.55s, stagger 45ms. Stamp strike: 0.26s. Pulses: 2.4s (status), 2.2s (queue ping), 1.8s (pipeline). Reduced motion: everything collapses to 0.01ms.</p>"
    + "<h2>Shadows</h2><p>Shadows exist only on the command palette box, file-card hover, folder hover, and the stamp-hit strike (dark only). Everything else uses hairline borders only. Focus rings are 3px oxblood at 12% (theme-aware).</p>";
}

function renderGettingStarted() {
  return entryHead({ eyebrow: "Docs", title: "Getting started", deck: "Five steps. Tokens, one component, then ship.", ref: "Ref 01", ghost: "01" })
    + '<section class="m-start-here"><p class="m-start-kick">Start here</p><h3>Five steps.</h3><p>Start with tokens, add one component, then ship. The five steps below are the whole setup.</p></section>'
    + "<h2>1 · Import the tokens</h2><p>Import <code>src/tokens.css</code> once, in your app entry. It defines the Mesa custom properties for both themes. Without it, every component is unstyled.</p><pre>" + hl("import \"@oeste/mesa/tokens.css\";") + "</pre>"
    + "<h2>2 · Wire the dark variant</h2><p>Dark is the default theme. In Tailwind v4, add the variant line to your CSS entry so <code>dark:</code> classes respond to <code>data-theme</code>:</p><pre>" + hl("@custom-variant dark (&:where([data-theme='dark'], [data-theme='dark'] *));") + "</pre><p>In Tailwind v3, set <code>darkMode: [\"class\", \"[data-theme='dark']\"]</code> in your config. Either way, the toggle must also set <code>data-theme</code> (see <a href=\"#/build-a-theme\">Build a theme</a>).</p>"
    + "<h2>3 · Add one component</h2><p>shadcn (recommended). One command per component; shadcn writes the file into your project:</p><pre>" + hl("npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/button.json") + "</pre><p>Import from where shadcn put the file. The docs show the shadcn default:</p><pre>" + hl("import { Button } from \"@/components/ui/button\";") + "</pre><p>Copy-paste. Open a component page, switch to the Vibe lens, copy the code into your own file, and import from where you put it. You own the file — change it like any other code in your project.</p>"
    + "<h2>4 · Agents</h2><p>Agents: use <a href=\"/llms.txt\">llms.txt</a> and <code>components.json</code>. Each component page has an Agent lens with a fixed <code>oeste.component.v1</code> contract. That contract is the only spec an agent needs for that component.</p>"
    + "<h2>5 · Read the invariants</h2><p>Every component page lists its invariants: the rules that are never optional. The most important ones: never use color alone, never restyle a locked component, never use a spacing scale that does not exist.</p>";
}

function renderTheming() {
  return entryHead({ eyebrow: "Docs", title: "Theming", deck: "Mesa is a theme, not a fork. Swap tokens, never components.", ref: "Ref 02", ghost: "02" })
    + "<p>Oeste is the system. Mesa is the second theme after Topanga. Every component reads the same token names; only the values change. A theme is a token file, not a component rewrite.</p>"
    + "<h2>Rules</h2><ul><li>Keep token names. Rename values, never names.</li><li>Dark is the default theme in Mesa. Keep both themes complete; a theme with a missing dark value is broken.</li><li>Fixed colors (diff band, CTA band text, pill reward, stamps, lamps, queue ping) are identical in both themes. Keep them fixed.</li><li>Mesa has no Danger token. Emphasis and errors use oxblood. Do not import Topanga's Danger token into Mesa.</li><li>Never use color alone to carry meaning.</li></ul>"
    + "<h2>What makes Mesa</h2><p>Warm paper, near-black ink, sparse oxblood accent, hairlines and double rules, restrained shadows, Merriweather serif headings with system sans body and system mono labels.</p>"
    + "<p>To build your own theme, see <a href=\"#/build-a-theme\">Build a theme</a>.</p>";
}

function renderAccessibility() {
  return entryHead({ eyebrow: "Docs", title: "Accessibility", deck: "Mesa's contract: keyboard first, meaning in text, contrast that is measured, not guessed.", ref: "Ref 04", ghost: "04" })
    + "<h2>Non-negotiables</h2><ul><li>Every interactive control is a real <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code>. Never a <code>div</code> with a click handler.</li><li>Every toggle states its state: <code>aria-pressed</code> on Filter Chip, Forum Control, Theme Toggle; <code>aria-expanded</code> on Nav Toggle and Review Queue rows.</li><li>Every input has a label. Placeholders are never labels.</li><li>Focus is visible everywhere. The focus ring is the 3px oxblood ring at 12%.</li><li>Never use color alone to carry meaning. Stamps, pills, lamps, and dots always pair with text.</li><li>Touch targets are 44px minimum on real controls.</li></ul>"
    + "<h2>Measured contrast (AA 4.5:1, normal text)</h2><p>Verified by <code>node scripts/verify.mjs</code> against <code>src/tokens.json</code>. All pairs below pass.</p>"
    + "<div class=\"pair-grid\">"
    + [["Light · ink on paper", "#181b1f", "#faf9f7", "16.42"], ["Light · muted on paper", "#5b5f65", "#faf9f7", "6.10"], ["Light · oxblood on paper", "#8a1f2b", "#faf9f7", "8.63"], ["Light · ok on paper", "#2e6b3e", "#faf9f7", "6.07"], ["Light · btn-text on ink", "#f7f4ec", "#181b1f", "15.72"], ["Light · white on oxblood", "#ffffff", "#8a1f2b", "9.08"],
       ["Dark · ink on paper", "#ece3d0", "#100e0b", "15.11"], ["Dark · muted on paper", "#a79b82", "#100e0b", "7.02"], ["Dark · ok on paper", "#8fae62", "#100e0b", "7.71"], ["Dark · btn-text on oxblood", "#ffffff", "#c9404f", "4.85"], ["Dark · hero-em on paper", "#e87a88", "#100e0b", "6.95"]]
      .map(([label, fg, bg, r]) => '<div class="pair-card"><div class="pair-sample" style="background:' + bg + '"><div class="pair-aa" style="color:' + fg + '">Aa</div></div><p class="pair-caption">' + esc(label) + " — " + r + ":1</p></div>").join("")
    + "</div>"
    + "<h2>Documented exceptions</h2><p>These four values pass 3:1 (large text / UI components) but NOT 4.5:1 (normal text). They are documented here and in <code>src/tokens.css</code> so nobody ships them as body text by accident.</p>"
    + "<ul><li><strong>Dark accent #c9404f on dark paper — 3.97:1.</strong> Dark accent text must be large/bold, or use hero-em <code>#e87a88</code> (6.95:1) for normal-size dark accent text.</li>"
    + "<li><strong>Dark accent-deep #a52336 on dark paper — 2.66:1.</strong> Never use dark accent-deep for text. Use it for hover surfaces only.</li>"
    + "<li><strong>Ink-faint, light 3.13:1 / dark 3.32:1.</strong> Tertiary only — timestamps, placeholders, ghost numbers. Never body text, never labels, never code comments.</li>"
    + "<li><strong>Stamp Open #c9404f on dark card — 3.78:1.</strong> Stamps are borders + short labels, treated as non-text contrast (3:1). Stamp labels are never body text.</li></ul>"
    + "<h2>Per-component keyboard</h2><p>Every component page has a Keyboard table. Where the source does not specify a behavior, the table says \"Not specified in source\" rather than inventing one.</p>"
    + "<h2>Reduced motion</h2><p>With <code>prefers-reduced-motion: reduce</code>, all animation collapses to 0.01ms. Pulses stop. Reveals stop. The page is fully readable without motion.</p>";
}

function renderPatterns() {
  return entryHead({ eyebrow: "Docs", title: "Patterns", deck: "Mesa-native compositions. Each one is built from library components, nothing invented.", ref: "Ref 05", ghost: "05" })
    + '<div class="m-mini-gates"><div><p class="m-mini-num">01</p><p class="m-mini-title">Directory browse</p><p class="m-mini-body">Search, filter, open.</p></div><div><p class="m-mini-num">02</p><p class="m-mini-title">Detail view</p><p class="m-mini-body">Header, card, sources.</p></div><div><p class="m-mini-num">03</p><p class="m-mini-title">Submission + review</p><p class="m-mini-body">Form, queue, status.</p></div><div><p class="m-mini-num">04</p><p class="m-mini-title">First screen</p><p class="m-mini-body">One finished screen.</p></div></div>'
    + "<h2>Directory browse</h2><p>Directory Search + Filter Chip + File Card (or Data Table for dense lists). Search filters, chips scope, cards open. The empty state is Directory Search's own mono empty line.</p>"
    + "<div class=\"demo\"><input type=\"search\" placeholder=\"Search the directory…\" aria-label=\"Search the directory\" style=\"width:100%;border:1px solid var(--color-border);border-radius:8px;background:var(--color-bg);color:var(--color-text);padding:12px 14px\"><div class=\"demo-row\" style=\"margin:16px 0\"><button type=\"button\" class=\"m-chip\" aria-pressed=\"true\">All</button><button type=\"button\" class=\"m-chip\" aria-pressed=\"false\">Open <span class=\"count\">12</span></button><button type=\"button\" class=\"m-chip\" aria-pressed=\"false\">Review <span class=\"count\">20</span></button></div><div style=\"display:grid;gap:12px\"><a class=\"m-file-card\" href=\"#/components/file-card\"><span class=\"m-file-ref\">Ref 01</span><span class=\"m-file-title\">Title goes here.</span><span class=\"muted\" style=\"display:block\">Description goes here.</span></a><a class=\"m-file-card\" href=\"#/components/file-card\"><span class=\"m-file-ref\">Ref 02</span><span class=\"m-file-title\">Second title.</span><span class=\"muted\" style=\"display:block\">Description goes here.</span></a></div><div style=\"margin-top:16px\"><button type=\"button\" class=\"m-btn\" data-pattern-save>Apply filters</button></div></div>"
    + "<h2>Detail view</h2><p>Breadcrumbs + Page Header + Detail Card + Citations + Prev/Next. The header carries the ghost number; the detail card carries the grid; citations carry the sources; Prev/Next carries the neighbors.</p>"
    + "<div class=\"demo\"><nav class=\"m-breadcrumb\" aria-label=\"Breadcrumb\"><a href=\"#/home\">Home</a><span class=\"sep\" aria-hidden=\"true\">/</span><span aria-current=\"page\">Detail</span></nav><div class=\"m-page-header\"><h1>Title goes here.</h1><p class=\"deck\">Description goes here.</p></div><article class=\"m-detail\" style=\"margin-top:24px\"><header class=\"m-detail-head\"><span class=\"muted\" style=\"font-family:var(--font-mono);font-size:10.5px\">Detail</span><span style=\"font-family:var(--font-mono);font-size:21px;font-weight:700\">01</span></header><div class=\"m-detail-grid\"><div class=\"m-detail-cell\"><dt>Status</dt><dd>Open</dd></div><div class=\"m-detail-cell\"><dt>Count</dt><dd>12</dd></div></div></article><ol class=\"m-list-double\" style=\"list-style:none;padding:0;margin:24px 0 0\"><li class=\"m-cite-row\"><span class=\"m-cite-num\">01</span><span>Citation text goes here.</span></li></ol><nav class=\"m-prevnext\" style=\"margin-top:24px\" aria-label=\"Previous and next\"><a href=\"#\"><span class=\"lbl\">Previous</span><span class=\"ttl\">Previous item</span></a><a href=\"#\"><span class=\"lbl\">Next</span><span class=\"ttl\">Next item</span></a></nav></div>"
    + "<h2>Submission + review</h2><p>Submission Form + Review Queue + Status Line + Empty State (when the queue is empty). The form is uncontrolled; the queue expands one row at a time; the status line shows the live state; the empty state offers the next step.</p>"
    + "<div class=\"demo\"><form style=\"max-width:520px\"><div class=\"field\"><label for=\"patTitle\">Title</label><input id=\"patTitle\" type=\"text\" required placeholder=\"Title goes here.\"></div><div style=\"margin-top:20px\"><button type=\"button\" class=\"m-btn\" data-pattern-submit>Submit for review</button></div></form><p class=\"m-status-line\" style=\"margin-top:24px\"><span class=\"dot\" aria-hidden=\"true\"></span>Waiting for review</p><p class=\"m-kicker\" style=\"margin-top:24px;color:var(--color-accent-deep)\">Ref 01</p><header style=\"display:flex;gap:8px;align-items:center;margin-top:8px\"><h3 style=\"font-family:var(--font-mono);font-size:11px;margin:0\">Review queue</h3><span class=\"m-queue-count\">1</span></header><p class=\"muted\" style=\"margin-top:12px\">One item in review.</p></div>"
    + "<div style=\"display:grid;gap:16px;grid-template-columns:1fr 1fr;margin-top:24px\"><article class=\"m-duo-card\"><p class=\"m-duo-kick\">Compose</p><h3>Compose, don't restyle</h3><p>Patterns arrange library components. They never change a component's styles.</p></article><article class=\"m-duo-card\"><p class=\"m-duo-kick\">Invariants</p><h3>Invariants travel</h3><p>Every component keeps its invariants inside a pattern. The pattern's job is order, not decoration.</p></article></div>"
    + "<p>Rules for every pattern: compose library components, never restyle them; keep the invariants of each component; the pattern's job is order, not decoration.</p>";
}

function renderFaq() {
  return entryHead({ eyebrow: "Docs", title: "FAQ", deck: "The questions that come up.", ref: "Ref 13", ghost: "13" })
    + "<h2>Is Mesa an npm package?</h2><p>Not a published package. <code>@oeste/mesa</code> is a reference command and a registry. Install components with shadcn, or copy-paste them. There is no package to import.</p>"
    + "<h2>Tailwind v3 or v4?</h2><p>Both. v4: add the <code>@custom-variant dark</code> line (see <a href=\"#/setup\">Setup</a>). v3: set <code>darkMode</code> in config. Either way, you also need the <code>data-theme</code> toggle — the variant alone does nothing visible.</p>"
    + "<h2>Does Mesa have a Danger token?</h2><p>No. Mesa's emphasis and error semantics are oxblood accent + Disclaimer + the oxblood focus ring. Do not import Topanga's Danger token into Mesa.</p>"
    + "<h2>Does Mesa have a modal?</h2><p>No. Command Palette is Mesa's overlay. Do not invent a Dialog component.</p>"
    + "<h2>Can I use Mesa without React?</h2><p>Yes. The components are patterns with exact tokens. The docs demos render in plain HTML/CSS. The registry files are React, but the tokens and the rules travel.</p>"
    + "<h2>Commercial use?</h2><p>Yes. MIT. <code>Copyright (c) 2026 hiddeninwest</code>. Use it in commercial work.</p>"
    + "<h2>Found a bug?</h2><p>Open an issue on the Oeste repo with the component id, the theme, and a minimal repro. Screenshots help; a failing <code>verify.mjs</code> output helps more.</p>";
}

function renderChangelog() {
  return entryHead({ eyebrow: "Docs", title: "Changelog", deck: "What changed, when, and what it means for you.", ref: "Ref 11", ghost: "11" })
    + '<div class="m-banner"><strong>v0.2.0</strong> — current release.</div>'
    + "<h2>v0.2.0 — Own architecture</h2><p>Mesa's own page architecture (no sidebar): top Site Nav with SearchPill, entry-head pages in a narrow 760/880px wrap, lens pills, IndexRow component index. 11 new components (67 total), Pill flag variant.</p><ul><li>11 new components: Rail, ResultCard, ForumThread, MiniGates, StartHere, SearchPill, Banner, DuoCard, IndexRow, Select, OptionRow.</li><li>Docs site: no sidebar; top nav + readbar + entry-head + narrow wrap.</li><li>Nav + hero spacing corrected to the prototype's rules: one tight sticky nav row, links behind a hamburger on mobile, hero margins bignum 8/4 + H1 14/12, page top from the page's own header (no double padding).</li><li>Header + hero composed from the library components as on the live site: search is an IconButton that opens the CommandPalette overlay (no search pill in the header), hero label sits above the bignum with an optional suffix, Primary is oxblood in dark, ghost CTA carries the live dot, trustline has the oxblood count link.</li><li>Home: cut the Rail + StatsBand (placeholder cards that linked nowhere, stats repeated the hero trustline) — hero → index → DiffBand → CtaBand.</li><li>Home restructured to the Topanga home structure: hero → Start building install card → What Mesa means → Three lenses → one Browse components button. The component list lives on the Components page only; DiffBand + CtaBand off the home.</li><li>ThemeToggle is now an icon button: 34px circle, sun in dark / moon in light (icon shows the target mode), same geometry + hover as IconButton.</li><li>Lens pills no longer underlined: ForumControl (rendered as an anchor by the lens bar) now carries text-decoration: none. The component demo used a button, which hid the bug.</li><li>Guides page added (Ref 14) + Guides in the menu: one index of the 12 guides (Getting started → FAQ). Previously the guides were reachable only via footer links, search, or in-page links.</li><li>Home text colors unified: Kicker now uses hero-em (the accessible accent for normal-size text) instead of oxblood — one accent for text, and it fixes the kicker's dark-mode contrast (oxblood was 3.97:1 at 11px). StartHere links use hero-em. Active nav link also uses hero-em (it was the second red in the header). Decks stay muted, content stays ink (site-wide rule).</li><li>Home: hero → Rail of FolderCards → StatsBand → IndexRow list → DiffBand → CtaBand.</li><li>Component pages: entry-head → demo → lens pills → lens content → Anatomy / Props / Keyboard / Invariants.</li></ul>"
    + "<h2>v0.1.0 — First release</h2><p>The first Mesa release: 56 components (72 Figma variants) across the Human, Agent, and Vibe lenses. Tokens, registry, docs site, verify script.</p><ul><li>56 registry items under <code>/mesa/r/</code>, generated from <code>src/index.js</code>.</li><li>Dark is the default theme; Light is the alternate.</li><li>Contrast verified for every text pair; four exceptions documented in Accessibility.</li></ul>";
}

function renderMigration() {
  return entryHead({ eyebrow: "Docs", title: "Migration", deck: "Adopting Mesa, from scratch or from Topanga.", ref: "Ref 12", ghost: "12" })
    + "<h2>From scratch</h2><p>Follow <a href=\"#/getting-started\">Getting started</a>: tokens, dark variant, one component.</p>"
    + "<h2>From Topanga</h2><p>Mesa is a different theme, not a drop-in rename. The moves:</p>"
    + "<table><thead><tr><th>Topanga</th><th>Mesa</th></tr></thead><tbody>"
    + [["<code>--color-accent</code> (ochre)", "<code>--color-accent</code> (oxblood) — same name, new value"],
       ["<code>--color-danger</code>", "None. Use oxblood + Disclaimer."],
       ["<code>--color-accent-alt</code> (sage)", "None."],
       ["<code>--color-rust</code>", "None."],
       ["<code>Manrope</code>", "<code>Merriweather</code> for headings; system sans for body."],
       ["<code>JetBrains Mono</code>", "System mono stack."],
       ["<code>--radius-lg</code> etc. (shared scale)", "Per-component radii — no shared scale."],
       ["<code>--space-*</code> (shared scale)", "No spacing scale. Use the observed values per component."],
       ["Light default", "Dark default."],
       ["29 components", "67 components (72 Figma variants + 11 site-derived)."]]
      .map(([a, b]) => "<tr><td>" + a + "</td><td>" + b + "</td></tr>").join("")
    + "</tbody></table>"
    + "<p>Do not mix themes: pick one theme per surface. Components are identical in structure; only tokens change.</p>";
}

function renderFirstScreen() {
  return entryHead({ eyebrow: "Docs", title: "First screen", deck: "One finished screen, end to end: Site Nav, Page Header, Directory Search, Filter Chip, File Card, Stats Band.", ref: "Ref 06", ghost: "06" })
    + "<div class=\"demo\"><header class=\"topbar\" style=\"position:static\"><div class=\"topbar-inner\"><a class=\"wordmark\" href=\"#/home\">mesa</a></div></header><div class=\"m-page-header\"><p class=\"m-kicker faint\">Directory</p><h1>Browse the directory</h1><p class=\"deck\">Search, filter, open.</p></div><input type=\"search\" placeholder=\"Search the directory…\" aria-label=\"Search the directory\" style=\"width:100%;border:1px solid var(--color-border);border-radius:8px;background:var(--color-bg);color:var(--color-text);padding:12px 14px;margin-top:24px\"><div class=\"demo-row\" style=\"margin:16px 0\"><button type=\"button\" class=\"m-chip\" aria-pressed=\"true\">All</button><button type=\"button\" class=\"m-chip\" aria-pressed=\"false\">Open <span class=\"count\">12</span></button></div><dl class=\"m-stats\"><div><dt>Items</dt><dd>128</dd></div><div><dt>Open</dt><dd>12</dd></div><div><dt>Done</dt><dd>96</dd></div><div><dt>Review</dt><dd>20</dd></div></dl><div style=\"display:grid;gap:12px;margin-top:24px\"><a class=\"m-file-card\" href=\"#/components/file-card\"><span class=\"m-file-ref\">Ref 01</span><span class=\"m-file-title\">Title goes here.</span><span class=\"muted\" style=\"display:block\">Description goes here.</span></a></div></div>"
    + "<p>One screen, six components, zero new styles. The screen is the pattern; the components are the library.</p>";
}

function renderBuildATheme() {
  return entryHead({ eyebrow: "Docs", title: "Build a theme", deck: "Derive a palette, wire dark mode, turn a token file into a second theme.", ref: "Ref 07", ghost: "07" })
    + "<h2>1 · Pick the order</h2><ol><li>Paper + ink (the page).</li><li>Accent (one color, used sparingly).</li><li>Ok + warn (status).</li><li>Fixed colors (diff band, CTA band, stamps, lamps, queue ping).</li><li>The dark set — every light value gets a dark twin.</li></ol>"
    + "<h2>2 · Wire dark mode</h2><p>Two things, both required: the <code>data-theme</code> toggle AND the Tailwind variant. Either one alone does nothing visible.</p><pre>" + hl("@custom-variant dark (&:where([data-theme='dark'], [data-theme='dark'] *));") + "</pre>"
    + "<h2>3 · Check the pairs</h2><p>Every text pair must meet AA 4.5:1. Run <code>node scripts/verify.mjs</code>. If a pair fails, change the value or restrict the usage — never ship a failing pair as body text.</p>"
    + "<h2>4 · What makes a good theme</h2><p>One accent, one typeface family per job, hairlines over shadows, and a dark theme that is designed, not inverted. Mesa is the example: warm paper, near-black ink, sparse oxblood, Merriweather serif, system sans body, system mono labels.</p>";
}

function renderLayout() {
  return entryHead({ eyebrow: "Docs", title: "Layout", deck: "No layout primitives: native HTML plus the observed spacing values.", ref: "Ref 08", ghost: "08" })
    + "<p>Mesa has no Row, Stack, or Grid component. Layout is native HTML: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, CSS grid and flex. The library gives you the pieces; you arrange them.</p>"
    + "<h2>The numbers</h2><ul><li>Wrap: max-width 1060px, padding 0 20px.</li><li>Docs pages use a narrow wrap: 760px, 880px at 900px+.</li><li>Section padding: 34px 0.</li><li>Spacing values: 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 34, 44 — applied ad hoc per component, not as a scale.</li><li>Rules: 1px hairlines for separation, 3px double ink for major section breaks.</li></ul>"
    + "<p>Do not invent a spacing scale. When a gap is not specified by the component, pick the nearest observed value and keep it consistent within the surface.</p>";
}

function renderCustomizing() {
  return entryHead({ eyebrow: "Docs", title: "Customizing", deck: "Tokens first, compose second, fork third. Never break the invariants.", ref: "Ref 09", ghost: "09" })
    + "<h2>1 · Tokens first</h2><p>Most customization is a token change. Change a value in <code>src/tokens.json</code> (and <code>src/tokens.css</code>), re-run <code>node scripts/verify.mjs</code>, and every component follows.</p>"
    + "<h2>2 · Compose second</h2><p>Need a new screen? Compose existing components (see <a href=\"#/patterns\">Patterns</a>). Composition never restyles a component.</p>"
    + "<h2>3 · Fork third</h2><p>If a component truly does not fit, copy its file and change the copy. The copy is yours; the library version stays canonical. Never restyle the library component in place.</p>"
    + "<h2>Never</h2><ul><li>Never use color alone to carry meaning.</li><li>Never use ink-faint for body text.</li><li>Never use dark accent or dark accent-deep for normal-size text.</li><li>Never invent a Dialog, Toast, or Dropdown. Mesa has no modal; Command Palette is the overlay.</li><li>Never invent a spacing scale.</li></ul>";
}

function renderSetup() {
  return entryHead({ eyebrow: "Docs", title: "Setup", deck: "Full setup: tokens, Tailwind v3/v4, shadcn or copy-paste, troubleshooting.", ref: "Ref 10", ghost: "10" })
    + '<div class="m-mini-gates"><div><p class="m-mini-num">01</p><p class="m-mini-title">Tokens</p><p class="m-mini-body">Import tokens.css once.</p></div><div><p class="m-mini-num">02</p><p class="m-mini-title">Tailwind variant</p><p class="m-mini-body">Wire the dark variant.</p></div><div><p class="m-mini-num">03</p><p class="m-mini-title">shadcn</p><p class="m-mini-body">One command per component.</p></div><div><p class="m-mini-num">04</p><p class="m-mini-title">Dark mode</p><p class="m-mini-body">Toggle + variant, both.</p></div></div>'
    + "<h2>1 · Tokens</h2><p>Import <code>src/tokens.css</code> once, in your app entry. It defines the Mesa custom properties for both themes.</p><pre>" + hl("import \"@oeste/mesa/tokens.css\";") + "</pre>"
    + "<h2>2 · Tailwind v4</h2><p>Add the variant line to your CSS entry:</p><pre>" + hl("@custom-variant dark (&:where([data-theme='dark'], [data-theme='dark'] *));") + "</pre>"
    + "<h2>3 · Tailwind v3</h2><p>Set <code>darkMode</code> in your config:</p><pre>" + hl("module.exports = {\n  darkMode: [\"class\", \"[data-theme='dark']\"],\n  content: [\"./src/**/*.{js,jsx,ts,tsx}\"],\n};") + "</pre>"
    + "<h2>4 · shadcn (recommended)</h2><p>One command per component; shadcn writes the file into your project:</p><pre>" + hl("npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/button.json") + "</pre><p>Import from where shadcn put the file. The docs show the shadcn default:</p><pre>" + hl("import { Button } from \"@/components/ui/button\";") + "</pre>"
    + "<h2>5 · Copy-paste</h2><p>Open a component page, switch to the Vibe lens, copy the code into your own file, and import from where you put it. You own the file — change it like any other code in your project.</p>"
    + "<h2>6 · Dark mode</h2><p>Dark mode needs two things: the <code>data-theme</code> toggle (see <a href=\"#/build-a-theme\">Build a theme</a>) <em>and</em> the Tailwind variant in §2. Either one alone does nothing visible.</p>"
    + "<h2>7 · Troubleshooting</h2><ul><li><strong>Dark mode does nothing</strong> — the §2 variant line is missing, or in the wrong file.</li><li><strong>“Cannot find module ‘@oeste/mesa’”</strong> — <code>@oeste/mesa</code> is not a published package. Import from the file path where shadcn put the component, or where you copied it.</li><li><strong>Styles look unstyled, or colors are wrong</strong> — <code>tokens.css</code> is not imported, or something overrides it. Check the import is in your app entry.</li><li><strong>shadcn asks where to put the file</strong> — any components directory works. Keep the <code>@/components/ui</code> convention so the docs’ import paths match.</li><li><strong>Tailwind v3 config change has no effect</strong> — restart the dev server.</li></ul>";
}

function render() {
  const { route, id, lens } = parseHash();
  const view = document.getElementById("view");
  // Home uses the full 1060px wrap; every other page uses the narrow wrap.
  view.classList.toggle("narrow", route !== "home");
  document.querySelectorAll(".nav-link").forEach((a) => a.classList.remove("active"));
  if (route === "home") view.innerHTML = renderHome();
  else if (route === "components") view.innerHTML = renderComponent(id, lens);
  else if (route === "components-index") view.innerHTML = renderComponentsIndex();
  else if (route === "guides") view.innerHTML = renderGuides();
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
  const navRoute = route === "components-index" ? "components" : route;
  const active = document.querySelector('.nav-link[href="#/' + navRoute + '"]');
  if (active) active.classList.add("active");
  bindDemos();
  updateReadbar();
  view.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

const SEARCH_DOCS = [
  { title: "Getting started", desc: "Tokens, copy a component, agents, registry.", route: "#/getting-started", keys: "install tokens registry shadcn add" },
  { title: "Theming", desc: "Mesa is theme #2. Swap tokens, not components.", route: "#/theming", keys: "theme tokens dark mode mesa" },
  { title: "Tokens", desc: "Canonical color, type, layout, radius, motion tokens.", route: "#/tokens", keys: "tokens css json color type radius motion" },
  { title: "Accessibility", desc: "Keyboard tables, ARIA, contrast, focus, search keys.", route: "#/accessibility", keys: "a11y keyboard aria contrast focus search" },
  { title: "Patterns", desc: "Directory browse, detail view, submission + review.", route: "#/patterns", keys: "patterns directory detail submission review" },
  { title: "First screen", desc: "One finished directory screen, end to end.", route: "#/first-screen", keys: "first screen directory example compose" },
  { title: "Build a theme", desc: "Derive a palette, wire dark mode, turn a token file into a second theme.", route: "#/build-a-theme", keys: "theme palette dark mode data-theme build" },
  { title: "Layout", desc: "No layout primitives: native HTML plus observed spacing.", route: "#/layout", keys: "layout container spacing gaps grid" },
  { title: "Customizing", desc: "Tokens first, compose second, fork third. Never break the invariants.", route: "#/customizing", keys: "customize override variant fork" },
  { title: "Setup", desc: "Full setup: tokens, Tailwind v3/v4, shadcn or copy-paste, troubleshooting.", route: "#/setup", keys: "setup install tailwind dark variant troubleshooting" },
  { title: "Changelog", desc: "What changed, when, and what it means for you.", route: "#/changelog", keys: "changelog version history" },
  { title: "Migration", desc: "Adopting Mesa, from scratch or from Topanga.", route: "#/migration", keys: "migration upgrade topanga" },
  { title: "FAQ", desc: "Is it an npm package? Tailwind v3/v4? React setups? Commercial use?", route: "#/faq", keys: "faq npm package tailwind react commercial license issue bug" },
  { title: "Guides", desc: "Every guide, one index. 12 guides.", route: "#/guides", keys: "guides docs index how to" },
  { title: "Home", desc: "One system. Three lenses.", route: "#/home", keys: "home overview" },
];
const SEARCH_TOKENS = [
  ["--color-bg", "Paper #FAF9F7 light / #100E0B dark", "color", "background bg paper"],
  ["--color-surface", "Surface #FFFFFF light / #181410 dark", "color", "surface card"],
  ["--color-text", "Text #181B1F light / #ECE3D0 dark", "color", "text ink"],
  ["--color-muted", "Muted #5B5F65 light / #A79B82 dark", "color", "muted secondary"],
  ["--color-faint", "Faint #8A8E93 light / #6E6455 dark, tertiary only", "color", "faint tertiary"],
  ["--color-border", "Hairline #DDD6C7 light / #2E2720 dark", "color", "border hairline"],
  ["--color-accent", "Oxblood #8A1F2B light / #C9404F dark", "color", "accent oxblood primary"],
  ["--color-accent-deep", "Deep oxblood #6D1620 light / #A52336 dark", "color", "accent deep hover"],
  ["--color-ok", "Ok #2E6B3E light / #8FAE62 dark", "color", "ok success"],
  ["--color-warn", "Warn #8A5A1F light / #C9404F dark", "color", "warn warning"],
  ["--color-hero-em", "Hero em #6D1620 light / #E87A88 dark", "color", "hero em accent"],
  ["--color-diff-bg", "Diff band #181B1F light / #0B0908 dark", "color", "diff band"],
  ["--color-cta-bg", "CTA band #181B1F light / #181410 dark", "color", "cta band"],
  ["--font-serif", "Merriweather — headings, big numbers", "type", "serif merriweather heading"],
  ["--font-sans", "System sans — body", "type", "sans body"],
  ["--font-mono", "System mono — labels, references", "type", "mono code label"],
  ["--type-h1-entry", "H1 entry clamp(32px, 7vw, 52px)", "type", "h1 entry heading"],
  ["--type-hero-h1", "Hero H1 clamp(27px, 6.8vw, 42px)", "type", "hero h1 heading"],
  ["--type-h2", "H2 clamp(26px, 5vw, 36px)", "type", "h2 heading"],
  ["--type-bignum", "Bignum clamp(58px, 16vw, 124px), 900", "type", "bignum hero number"],
  ["--type-deck", "Deck 17.5px", "type", "deck"],
  ["--type-body", "Body 16px / 1.6", "type", "body text"],
  ["--type-kicker", "Kicker 11px mono 700, 0.26em", "type", "kicker eyebrow"],
  ["--container-wrap", "Wrap max-width 1060px", "layout", "wrap container layout"],
  ["--section-padding", "Section padding 34px 0", "layout", "section padding layout"],
  ["--radius-detail-card", "Detail card radius 14px", "radius", "radius detail card"],
  ["--radius-button", "Button radius 6px", "radius", "radius button"],
  ["--radius-card", "Card radius 8px", "radius", "radius card"],
  ["--radius-pill", "Pill radius 999px", "radius", "radius pill"],
  ["--motion-easing", "Easing cubic-bezier(.22,1,.36,1)", "motion", "motion easing"],
].map(([name, detail, group, keys]) => ({ name, detail, group, route: "#/tokens", keys }));


function initPalette(closeMenu) {
  const overlay = document.getElementById("paletteOverlay");
  const input = document.getElementById("paletteInput");
  const list = document.getElementById("paletteList");
  const searchBtn = document.querySelector(".js-open-palette");
  let selected = -1;
  function matches(hay, terms) { return terms.every((t) => hay.includes(t)); }
  function collect(q) {
    const terms = q.split(/\s+/).filter(Boolean);
    const out = [];
    COMPONENTS.forEach((c) => {
      const hay = (c.name + " " + c.tagline + " " + c.props.map((p) => p[0]).join(" ") + " " + c.invariants.join(" ")).toLowerCase();
      if (matches(hay, terms)) out.push({ group: "Component", title: c.name, sub: c.tagline, route: "#/components/" + c.id });
    });
    SEARCH_TOKENS.forEach((t) => {
      const hay = (t.name + " " + t.detail + " " + t.keys).toLowerCase();
      if (matches(hay, terms)) out.push({ group: "Token", title: t.name, sub: t.detail, route: t.route });
    });
    SEARCH_DOCS.forEach((d) => {
      const hay = (d.title + " " + d.desc + " " + d.keys).toLowerCase();
      if (matches(hay, terms)) out.push({ group: "Docs", title: d.title, sub: d.desc, route: d.route });
    });
    return out;
  }
  function items() { return [...list.querySelectorAll("[data-goto]")]; }
  function mark(i) {
    const btns = items();
    selected = btns.length ? ((i % btns.length) + btns.length) % btns.length : -1;
    btns.forEach((b, j) => b.classList.toggle("is-selected", j === selected));
  }
  function render() {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      list.innerHTML = '<p class="m-palette-empty">Type to search components, tokens, docs.</p>';
      selected = -1;
      return;
    }
    const hits = collect(q);
    if (!hits.length) {
      list.innerHTML = '<p class="m-palette-empty">No matches. Try another term.</p>';
      selected = -1;
      return;
    }
    list.innerHTML = hits.map((h) => '<button type="button" class="m-palette-item" data-goto="' + h.route + '"><span>' + esc(h.title) + '</span><span class="kind">' + h.group + "</span></button>").join("");
    list.querySelectorAll("[data-goto]").forEach((b) => b.addEventListener("click", () => { close(false); location.hash = b.dataset.goto; }));
    list.querySelectorAll("[data-goto]").forEach((b) => b.addEventListener("mouseenter", () => mark(items().indexOf(b))));
    mark(0);
  }
  function open() {
    closeMenu();
    overlay.hidden = false;
    input.value = "";
    render();
    input.focus();
  }
  function close(restoreFocus) {
    if (overlay.hidden) return;
    overlay.hidden = true;
    input.value = "";
    list.innerHTML = "";
    selected = -1;
    if (restoreFocus && searchBtn) searchBtn.focus();
  }
  input.addEventListener("input", render);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); mark(selected + 1); }
    if (e.key === "ArrowUp") { e.preventDefault(); mark(selected - 1); }
    if (e.key === "Enter") {
      const btns = items();
      if (btns.length) { const target = btns[selected >= 0 ? selected : 0]; close(false); location.hash = target.dataset.goto; }
    }
    if (e.key === "Escape") { close(true); }
  });
  overlay.querySelector("[data-palette-close]").addEventListener("click", () => close(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) { close(true); return; }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); open(); }
  });
  document.addEventListener("click", (e) => { if (e.target.closest(".js-open-palette")) { e.preventDefault(); open(); } });
  window.addEventListener("hashchange", () => close(false));
}

function init() {
  let saved = "dark";
  try { saved = localStorage.getItem("mesa-theme") || "dark"; } catch (e) { /* storage unavailable */ }
  setTheme(saved === "light" ? "light" : "dark");
  document.getElementById("themeToggle").addEventListener("click", () => setTheme(currentTheme() === "light" ? "dark" : "light"));
  // Header nav toggle (mobile): opens/closes the link dropdown. Closes on
  // link click, Escape, or palette open.
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");
  const closeMenu = () => {
    primaryNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const open = primaryNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  primaryNav.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  initPalette(closeMenu);
  window.addEventListener("hashchange", render);
  window.addEventListener("scroll", updateReadbar, { passive: true });
  window.addEventListener("resize", updateReadbar);
  render();
}

document.addEventListener("DOMContentLoaded", init);
