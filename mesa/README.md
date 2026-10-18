# Mesa — Oeste Design System

**Warm paper. Near-black ink. Oxblood for status.**

Mesa is a universal component library under [Oeste](https://oeste.hiddeninwest.com) — the third library after Topanga and Huntington. The theme is warm paper, near-black ink, sparse oxblood accent, hairlines and double rules, restrained shadows. Dark is the default theme.

> **Mesa. Three lenses.**
> - **Human** — docs you can read: anatomy, props, keyboard, invariants.
> - **Agent** — `oeste.component.v1` contracts you can generate from.
> - **Vibe** — copy-paste code you can ship.

The library is for humans, AI agents, and vibe coders. You are reading it on the Mesa docs site.

**Docs site:** https://oeste.hiddeninwest.com/mesa/
**Registry:** https://oeste.hiddeninwest.com/mesa/r/
**Status:** v0.2.0 · 68 components · MIT

---

## Quickstart

```bash
npx shadcn@latest add https://oeste.hiddeninwest.com/mesa/r/button.json
```

```js
import { Button } from "@/components/ui/button";
```

Import `src/tokens.css` once. See [Getting started](https://oeste.hiddeninwest.com/mesa/#/getting-started) for the full setup, and [llms.txt](llms.txt) for the agent protocol.

## Install for agents

Agents: use `components.json` for the index, then fetch the registry item. Registry items are generated — never hand-edited.

```json
{
  "components": [
    { "id": "button", "registryUrl": "https://oeste.hiddeninwest.com/mesa/r/button.json" }
  ]
}
```

A registry item is a shadcn-compatible record: `name`, `type`, `title`, `description`, `registryDependencies`, `files` (one self-contained JSX file), `docs`, `categories`. If a component composes another component, the dependency is in `registryDependencies` AND its source is inlined, so the file stays self-contained.

## Tokens

Mesa tokens live in `src/tokens.json` and `src/tokens.css`. `DESIGN_TOKENS` in `src/index.js` mirrors them. All three must agree — `node scripts/verify.mjs` checks.

### Colors

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--color-bg` | `#faf9f7` | `#100e0b` | Page background |
| `--color-surface` | `#ffffff` | `#181410` | Cards, palette box |
| `--color-text` | `#181b1f` | `#ece3d0` | Headings, body |
| `--color-muted` | `#5b5f65` | `#a79b82` | Secondary text |
| `--color-faint` | `#8a8e93` | `#6e6455` | Tertiary only, never body |
| `--color-border` | `#ddd6c7` | `#2e2720` | Hairlines |
| `--color-border-soft` | `#ece5d5` | `#221c16` | Soft hairlines |
| `--color-accent` | `#8a1f2b` | `#c9404f` | Oxblood — status, links, stamps |
| `--color-accent-deep` | `#6d1620` | `#a52336` | Deep oxblood — hover, hero em (light) |
| `--color-ok` | `#2e6b3e` | `#8fae62` | Success, answers |
| `--color-warn` | `#8a5a1f` | `#c9404f` | Warning (dark = accent) |
| `--color-wash` | `#f1ede5` | `#14110c` | Hover wash |
| `--color-btn-text` | `#f7f4ec` | `#ffffff` | Text on ink buttons |
| `--color-hero-em` | `#6d1620` | `#e87a88` | Hero accent em |
| `--color-diff-bg` | `#181b1f` | `#0b0908` | Diff band background |
| `--color-diff-text` | `#f4f1ea` | `#f4f1ea` | Diff band text (fixed) |
| `--color-cta-bg` | `#181b1f` | `#181410` | CTA band background |
| `--color-pill-reward-bg` | `#f5e6c4` | `#f5e6c4` | Reward pill (fixed) |
| `--color-stamp-open` | `#c9404f` | `#c9404f` | Open stamp (fixed) |
| `--color-stamp-new` | `#d8a93f` | `#d8a93f` | New stamp (fixed) |
| `--color-stamp-review` | `#c98a2b` | `#c98a2b` | Review stamp (fixed) |
| `--color-stamp-closed` | `#777777` | `#777777` | Closed stamp (fixed) |
| `--color-lamp-off` | `#5a4a1f` | `#5a4a1f` | Awaiting lamp (fixed) |
| `--color-lamp-on` | `#3f9e4d` | `#3f9e4d` | Assigned lamp (fixed) |
| `--color-queue-ping` | `#c9a227` | `#c9a227` | Queue ping ring (fixed) |

Mesa has **no Danger token**. Emphasis and errors use oxblood accent + Disclaimer + the oxblood focus ring. Do not import Topanga's Danger token into Mesa.

### Type

Headings and big numbers are Merriweather, Georgia fallback. Body is system sans. Labels and references are system mono.

| Token | Value | Use |
| --- | --- | --- |
| `--type-h1-entry` | `clamp(32px, 7vw, 52px)` | Page H1 |
| `--type-hero-h1` | `clamp(27px, 6.8vw, 42px)` | Hero H1 |
| `--type-h2` | `clamp(26px, 5vw, 36px)` | Section H2 |
| `--type-bignum` | `clamp(58px, 16vw, 124px)`, 900 | Hero bignum |
| `--type-deck` | `17.5px` | Deck |
| `--type-body` | `16px / 1.6` | Body |
| `--type-kicker` | `11px mono 700, 0.26em` | Kicker |
| `--type-mono-label` | `11.5px mono 700, 0.14em` | Labels |
| `--type-stamp` | `11px mono 700, 0.14em` | Stamps |
| `--type-ghost` | `118px Merriweather 900` | Ghost number |

Heading tracking is `-0.01em`; heading line height is `1.18`; heading weight is `700` (900 for bignum/ghost).

### Layout

Mesa has **no formal spacing scale**. The observed set — 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 34, 44 — is applied ad hoc per component. Do not invent a scale.

Wrap: max-width 1060px, padding 0 20px. Section padding: 34px 0. Docs pages use a narrow wrap: 760px, 880px at 900px+.

### Radius

No single radius token. Each component carries its own: detail card 14, button 6, card 8, chip 999, CTA band 12, dir search 8, empty state 12, file card 10, folder 10, forum control 999, status badge 999, icon button 50%, input 6, numbers 6/8/10, empty attachment 6, nav toggle 6, palette box 12, pill 999, profile status 999, pipeline strip 12, queue count 10, stamp 4, theme button 50%, media card 8, result card 12, mini gate 8, start here 8, search pill 999, duo card 8, select 6, option row 6, pill flag 4, rail thumb 4.

### Motion

House easing: `cubic-bezier(.22,1,.36,1)`. Reveal: fade + rise 10px, 0.5s / 0.55s, stagger 45ms. Stamp strike: 0.26s. Pulses: 2.4s (status), 2.2s (queue ping), 1.8s (pipeline). Reduced motion collapses everything to 0.01ms.

### Shadows

Shadows exist only on the command palette box, file-card hover, folder hover, and the stamp-hit strike (dark only). Everything else uses hairline borders only. Focus rings are 3px oxblood at 12% (theme-aware).

## Components (68)

| Component | What it does |
| --- | --- |
| SiteNav | Sticky header. Wordmark, links, tools, readbar. |
| CommandPalette | One overlay for search and jump. |
| PageHeader | Eyebrow, H1, deck, reference, ghost number. |
| Hero | Bignum, H1 with accent em, CTAs, trustline. |
| StatusBadge | Live status with a pulsing dot. |
| FileCard | Reference, title, description, meta, assignment. |
| FolderCard | Stamped folder with a meta row. |
| DataTable | Rows with reference, title, meta, assignment. |
| DataGrid | Sortable, filterable, pageable data grid. |
| Pill | Small uppercase status. |
| Stamp | Rotated status mark. |
| AssignmentLine | Lamp plus status text. |
| Button | Primary, solid, ghost, solid small. |
| FilterChip | Filter with a count. |
| ForumControl | Forum toggle. |
| SubmissionForm | Labeled fields, radio options, submit. |
| DirectorySearch | Full-width search input. |
| SectionHead | Kicker plus H2 plus lede. |
| Kicker | Mono eyebrow, oxblood or faint. |
| Breadcrumbs | Trail with separators. |
| StatsBand | Grid of labeled numbers. |
| ActivityFeed | Card with a live header and rows. |
| ActivityEntry | Time block plus paragraph. |
| StepsList | Numbered steps under a double rule. |
| DetailCard | Head, grid, source and assigned rows, foot. |
| SummaryCard | Header plus key and value rows. |
| Disclaimer | Oxblood-bordered notice. |
| PipelineStrip | Steps with dots and connectors. |
| ProfileRows | Name, body, status rows. |
| ProfileStatus | Pill status for profile rows. |
| Timeline | Dated rows under a double rule. |
| MediaCard | Number, body, more link, source. |
| OpenQuestions | Questions with answers under an ok rule. |
| CoverageList | Link plus title plus date rows. |
| SourceList | Link block plus sub rows. |
| Citations | Numbered citation rows. |
| PrevNext | Previous and next card links. |
| DiffBand | Dark band of compared rows. |
| RoleCard | Chip plus title plus body. |
| StepGates | Numbered gates with connectors. |
| Pledge | Promises behind an oxblood rule. |
| CtaBand | Dark band with H2, body, button, link. |
| Footer | Double-rule footer with columns and fine print. |
| ThemeToggle | Button that names its target mode. |
| IconButton | 34px circle button. |
| NavToggle | Hamburger that becomes an X. |
| GhostNumber | 118px ghost numeral, decorative. |
| ShowsCard | Key and body rows in a card. |
| EmptyAttachment | Dashed empty box. |
| ProfileAvatar | Initial badge in three sizes. |
| ProfileCardRow | Avatar plus name plus role link row. |
| StatusLine | Dot plus mono status text. |
| ProfileHero | Avatar xl plus handle plus status plus stats. |
| EmptyState | Dashed empty state with CTA. |
| ReviewQueue | Expandable review rows with a ping. |
| DailySummary | Kicker plus totals line. |
| NextUp | Key plus title plus sub. |
| Rail | Horizontal snap-scroll card rail. |
| ResultCard | Outcome card with number, title, outcome, key/value rows. |
| ForumThread | Thread row with votes and replies. |
| MiniGates | Compact gate cards, four across. |
| StartHere | Intro card with kick, title, body. |
| SearchPill | Pill search with keyboard hint. |
| Banner | Always-dark notice bar. |
| DuoCard | Two-up card with kick and hover lift. |
| IndexRow | Index row with hover-reveal arrow. |
| Select | Native select with custom chevron. |
| OptionRow | Bordered radio option row. |

Variant sets: Folder Card (Open, New), Pill (Type, Open, Verifying, Reward, Indexed, Flag), Stamp (Default, Ok, Dim, Warn), Assignment Line (Awaiting, On), Button (Primary, Solid, Ghost, Solid Small), Filter Chip (Default, Active), Forum Control (Default, On), Profile Avatar (Default, Lg, Xl). 68 logical components: 56 from Figma (72 variants) + 11 derived from the live prototype site + DataGrid.

## Docs site

The docs site is a static SPA in `site/` — no build step. Routes: home, component index, one docs page per component (with Human / Agent / Vibe lenses), tokens, getting started, theming, accessibility, patterns, first screen, build a theme, layout, customizing, setup, changelog, migration, FAQ. No sidebar: top Site Nav with wordmark, nav links, SearchPill + ThemeToggle, and a scroll-progress readbar; every page is an entry-head (kicker, H1, deck, ghost number, ref line) followed by sections with section-heads in a narrow wrap (760px, 880px at 900px+). Home uses the full 1060px wrap: hero → Rail of FolderCards → StatsBand → IndexRow list → DiffBand → CtaBand. The docs site dogfoods Mesa components; shared shell chrome is allowed.

`site/app.js` holds the docs content. `site/styles.css` holds the docs styles. The docs site uses the same tokens as the library.

## Structure

```
LICENSE
README.md
components.json        # registry manifest (generated)
llms.txt               # agent protocol
package.json           # @oeste/mesa
r/                     # shadcn registry items (generated)
scripts/
  build_registry.py    # builds r/*.json + components.json from src/index.js
  verify.mjs           # token agreement + contrast + registry agreement
site/
  index.html           # docs shell
  app.js               # docs content + router + search
  styles.css           # docs styles
src/
  index.js             # 68 components + DESIGN_TOKENS + COMPONENT_DOCS
  tokens.css           # Mesa custom properties (both themes)
  tokens.json          # Mesa tokens (canonical)
vercel.json
```

## Verify

```bash
python3 scripts/build_registry.py   # regen registry after src/index.js changes
node scripts/verify.mjs            # token agreement + contrast + registry agreement
```

`verify.mjs` checks: no stray `*/` outside comments (a premature `*/` once killed the whole light token block); every color token agrees across CSS, JSON, and JS for both themes; every radius key exists in CSS; every text pair meets WCAG AA 4.5:1; code-highlight colors meet 4.5:1 on surface; the manifest and index each have 68 items; every registry item parses, exports its component, and carries the right URLs.

## Contrast exceptions (documented, not hidden)

Four values pass 3:1 (large text / UI components) but NOT 4.5:1 (normal text):

- Dark accent `#c9404f` on dark paper — 3.97:1. Dark accent text must be large/bold, or use hero-em `#e87a88` (6.95:1).
- Dark accent-deep `#a52336` on dark paper — 2.66:1. Never use for text. Hover surfaces only.
- Ink-faint, light 3.13:1 / dark 3.32:1. Tertiary only — timestamps, placeholders, ghost numbers. Never body text.
- Stamp Open `#c9404f` on dark card — 3.78:1. Stamps are borders + short labels (non-text contrast). Never body text.

## Changelog

### v0.2.0

Mesa's own page architecture (no sidebar): top Site Nav with SearchPill, entry-head pages in a narrow 760/880px wrap, lens pills, IndexRow component index. 11 new components (67 total), Pill flag variant.

- 11 new components: Rail, ResultCard, ForumThread, MiniGates, StartHere, SearchPill, Banner, DuoCard, IndexRow, Select, OptionRow.
- Docs site: no sidebar; top nav + readbar + entry-head + narrow wrap.
- Home: hero → Start building install card → What Mesa means → Three lenses → one Browse components button. The component list lives on the Components page only.
- Component pages: entry-head → demo → lens pills → lens content → Anatomy / Props / Keyboard / Invariants.
- Nav + hero spacing corrected to the prototype's rules: one tight sticky nav row, links behind a hamburger on mobile, hero margins bignum 8/4 + H1 14/12, page top from the page's own header (no double padding).
- Home: cut the Rail + StatsBand (placeholder cards that linked nowhere, stats repeated the hero trustline) — hero → index → DiffBand → CtaBand.
- Home restructured to the Topanga home structure: hero → Start building install card → What Mesa means → Three lenses → one Browse components button. The component list lives on the Components page only; DiffBand + CtaBand off the home.
- ThemeToggle is now an icon button: 34px circle, sun in dark / moon in light (icon shows the target mode), same geometry + hover as IconButton.
- Lens pills no longer underlined: ForumControl (rendered as an anchor by the lens bar) now carries text-decoration: none. The component demo used a button, which hid the bug.
- Guides page added (Ref 14) + Guides in the menu: one index of the 12 guides (Getting started → FAQ). Previously the guides were reachable only via footer links, search, or in-page links.
- Home text colors unified: Kicker now uses hero-em (the accessible accent for normal-size text) instead of oxblood — one accent for text, and it fixes the kicker's dark-mode contrast (oxblood was 3.97:1 at 11px). StartHere links use hero-em. Active nav link also uses hero-em (it was the second red in the header). Decks stay muted, content stays ink (site-wide rule).

### v0.1.0

First Mesa release: 56 components (72 Figma variants) across the Human, Agent, and Vibe lenses. Tokens, registry, docs site, verify script. Dark is the default theme. Contrast verified for every text pair; four exceptions documented.

## License

MIT. Copyright (c) 2026 hiddeninwest.
