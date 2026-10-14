# Oeste

> Spanish for west. Pronounced *oh-EST-eh*.

Oeste is an open design system and component library built for three audiences at once:
- **Humans** (designers & developers): Clear documentation, live demos, component anatomy, keyboard navigation tables, and accessibility notes.
- **AI agents** (Cursor, Claude, v0): Machine-readable JSON specifications, token schemas, accessibility invariants, and copyable prompt contexts to prevent hallucinations.
- **Vibe coders**: Instant copy-paste code, zero config, and one-command CLI installation.

## Theme: Topanga
Topanga is the debut theme for Oeste — inspired by the hidden canyon in Los Angeles where creatives retreat and build. Warm paper, canyon clay, ochre, sagebrush, and precision hairlines.

Brand: hiddeninwest. Location: Los Angeles. No personal names, no family content, no precise locations.

### Canonical tokens (single source of truth)
`src/tokens.css` + `src/tokens.json` + `DESIGN_TOKENS` in `src/index.js` agree exactly. Run `npm run verify` to check.

| Token | Light | Dark | Notes |
|---|---|---|---|
| bg | `#F6F4F1` | `#121110` | Page background |
| surface | `#FCFAF7` | `#1C1917` | Cards, demos |
| text | `#1C1917` | `#F5F3EF` | Body text |
| muted | `#706963` | `#9E968F` | Secondary text |
| accent (Warm Ochre) | `#C47D3B` | `#DB914E` | Primary actions |
| accent-alt (Sage) | `#5E6B5A` | `#8B9B87` | Secondary accent |
| rust (Canyon Rust) | `#B85B35` | `#D98A63` | Decorative only — never small error text |
| danger | `#A83E22` | `#E07A52` | Semantic errors. WCAG AA 4.5:1 for normal text |
| success | `#2F6B3A` | `#6BA368` | Success states |
| warning | `#7A5A12` | `#D9A441` | Warnings |
| focus | `#1C1917` | `#F5F3EF` | 2px outline. Distinct from danger |

Type: Manrope (display + body), JetBrains Mono (code). Display: Manrope 500, 40px phones / 48px ≥480px / 72px ≥720px, line-height 1.1, letter-spacing -0.04em. Title `clamp(1.75rem, 4vw, 2.5rem)`, heading `clamp(1.25rem, 2.5vw, 1.5rem)`, headings weight 500, tracking -0.025em, body leading 1.55.
Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64. Radii: 4 / 8 / 12 + 999 pill. Motion: 180ms in / 140ms out, `cubic-bezier(.16,1,.3,1)`. Reduced motion: no animation. Breakpoints: mobile 0–640, tablet 641–1024, desktop 1025+. Touch targets: min 44px.

## Components (v0.3.0)
- **Button**: variants primary / secondary / ghost / danger, sizes sm / md / lg, disabled / loading / icon.
- **Input**: persistent label, described errors. Plus **Textarea** and **Select** with the same pattern.
- **Dialog**: native `<dialog>`, focus trap + restore, Escape closes.
- **Card**: native `<section>`, heading level matches outline.
- **Tabs**: roving tabindex, Arrow / Home / End.
- **Toast**: single clean card, `role=status`, manual dismiss, no auto-expiry.
- **Badge**: tones neutral / accent / success / danger, meaning in text.
- **Checkbox**: native input, clickable label.
- **Switch**: `role=switch` + `aria-checked`.
- **Textarea**: multi-line input, same label + error pattern as Input.
- **Select**: native select, real label.
- **Alert**: tones info / success / warning / danger, `role=status` (alert only for urgent errors), optional Dismiss.
- **Accordion**: real button triggers, `aria-expanded` + `aria-controls`, panel hidden when closed.
- **RadioGroup**: native radios in `fieldset` + `legend`, one shared name.
- **Progress**: `role=progressbar` + `aria-valuenow/min/max`, visible label + value text.
- **Avatar**: photo with initials fallback that always renders; accessible name is the person's name.
- **Separator**: hairline rule, horizontal / vertical, decorative (`aria-hidden`) or semantic (`role=separator`).
- **Slider**: native `input[type=range]`, visible label + value text, arrow keys step.
- **Tooltip**: shows on hover AND focus, `role=tooltip`, Escape dismisses.
- **Popover**: trigger-anchored panel, Escape / outside click closes, non-modal.
- **Dropdown Menu**: `role=menu` + `role=menuitem`, arrow keys move, Escape closes.
- **Toggle**: `aria-pressed` button, pressed state by fill + label.
- **Collapsible**: one trigger + panel, `aria-expanded` + `aria-controls`, reduced-motion safe.
- **Skeleton**: placeholder with `aria-busy`, labelled with what is loading, no strobing.
- **Label**: standalone label via `htmlFor`, visible required indicator + text.
- **Breadcrumb**: `nav` + `ol`, `aria-current="page"` on the current page (not a link).
- **Pagination**: `nav` + Previous / pages / Next, `aria-current="page"`, aria-hidden ellipsis.
- **Table**: semantic table, `caption`, `th scope`, sticky header.
- **Empty State**: aria-hidden icon, plain-words heading, next-step action.
- **Form** (pattern, not a primitive): Label + Input + Select + Checkbox + RadioGroup + Button + error summary (`role=alert`) + Toast confirm. See Patterns.

Every component ships: Human docs (anatomy / props / keyboard / invariants), Agent JSON contract (`oeste.component.v1`) + prompt, Vibe CLI + React code (dark-mode-complete). Demos are local only — no network, no auth.

## Docs site
Static, no build step, Vercel-ready — in `/site/` (`index.html` + `styles.css` + `app.js`).
Routes: `#/home`, `#/components/<id>?lens=human|agent|vibe`, `#/tokens`, `#/getting-started`, `#/theming`, `#/accessibility`, `#/patterns`, `#/changelog`, `#/migration`. Lens persists in the URL, Back button works, deep links work.

## Quickstart
```bash
npx @oeste/ui init
npx @oeste/ui add dialog
```
CLI strings are reference commands, not a guarantee of registry availability. The React snippets in `src/index.js` and the Vibe lens work today in any React + Tailwind app (React 18+, JSX transform).

## Structure
- `/src/index.js` — React primitives + `DESIGN_TOKENS` + `COMPONENT_DOCS`
- `/src/tokens.css` — CSS variables (light + dark via `data-theme`)
- `/src/tokens.json` — machine-readable tokens
- `/site/` — static docs site (Vercel-ready)
- `/scripts/verify.mjs` — checks token agreement + contrast
- `llms.txt` — machine-readable protocol for AI editors
- `package.json` — `@oeste/ui` v0.3.1, no runtime dependencies

## Verify
```bash
npm run verify
```
Checks tokens agree across CSS / JSON / JS, and that danger, muted, and accent text pairs meet WCAG AA 4.5:1.

## Changelog
- **v0.3.1 (2026-10-14)**: Typography correction — display/headings are Manrope 500, tracking -0.04em / -0.025em, leading 1.1 (Millie's actual Pally treatment, not the v0.3.0 800 / -0.025em / 1.05); wordmark 700 / 24px / -0.06em; body leading 1.55; hero locked to 2 lines (display 40px phones / 48px ≥480px / 72px ≥720px). No breaking changes.
- **v0.3.0 (2026-10-14)**: Menu auto-close on navigate + Escape; syntax highlighting in every code block (light + dark, 4.5:1 code text); 14 new primitives (Avatar, Separator, Slider, Tooltip, Popover, Dropdown Menu, Toggle, Collapsible, Skeleton, Label, Breadcrumb, Pagination, Table, Empty State); Form pattern. Total: 29 components. No breaking changes. (Its display-type values were corrected in v0.3.1.)
- **v0.2.0 (2026-10-14)**: Alert, Accordion, RadioGroup, Progress; Textarea + Select docs pages; Patterns, Changelog, Migration routes; Accessibility page with per-component checklist + contrast table; fuller brand story. No breaking changes for consumers.
- **v0.1.0 (2026-10-14)**: Token foundation + 9 primitives + docs site.
