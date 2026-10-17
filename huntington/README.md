# Oeste — Huntington

> A single-column component library. Five moods, hairlines instead of shadows, no filled button.

Huntington is the second public component library under Oeste, built with Figma-source discipline: every component ships Human docs (anatomy / props / keyboard / invariants), an Agent JSON contract (`oeste.component.v1`) + prompt, and Vibe CLI + React code. Demos are local only — no network, no auth.

## Theme: Huntington
Huntington is a single-column index. One column, 672px wide, hairline borders instead of card shadows, underlined text links instead of filled buttons. Five moods — Paper (default), Ink, Rose, Sage, Dune — cycle with one dot button and persist. The source is the Huntington Figma library (plugin v1.0.3, 44 built nodes / 37 components, plus Toggle Tabs, Next Footer, and Search — 40 total).

### Moods (single source of truth)
`src/tokens.css` + `src/tokens.json` + `DESIGN_TOKENS` in `src/index.js` agree exactly. Run `npm run verify` to check.

| Mood | Paper | Card | Ink | Muted |
|---|---|---|---|---|
| Paper | `#f6f4f1` | `#fffdf9` | `#1c1917` | `#78716c` |
| Ink | `#151412` | `#1e1d1b` | `#f0ede8` | `#a09a93` |
| Rose | `#f8efeb` | `#fffbf9` | `#2a211d` | `#a08a80` |
| Sage | `#edf0ea` | `#fbfdfa` | `#1d211c` | `#7d857c` |
| Dune | `#f3e9d7` | `#faf3e4` | `#2b2114` | `#a08c66` |

Accents (same in all moods): live `#e5484d`, pulse `#1a73e8`, status Active `#34d399` / Idle `#60a5fa` / Offline `#fbbf24`, amount up `#34d399` / down `#f87171`, orbs default `#ff6b1a` / blue `#7aa2d9` / rose `#d9b5a3` / green `#9dc08b`, logoCardDark `#141210`.

Type: Manrope only, variable 400–800, no italics. 20 text styles (see `src/tokens.json`). Layout: max width 672px, side padding 20px (0 at 700px+), section padding-top 44px, page padding-bottom 64px, one breakpoint at 700px. Radii: cards/photos 14, Logo Card 18, grid art 10, menu-sheet top 22, pills 999, Progress Bar 2. Shadows: cards none (hairline instead); Menu Pill `0 8px 24px rgba(0,0,0,0.14)`; Menu Bottom Sheet `0 -18px 50px rgba(0,0,0,0.16)`.

Muted-text contrast is honest, not rounded up: muted meets 4.5:1 on card only in Paper (4.72) and Ink (6.05); it falls short in Rose (3.17), Sage (3.72), and Dune (2.95). Muted is for secondary/caption text — never body copy. See Accessibility for the measured table.

## Components (v0.2.0)
- **Header**: Wordmark left, mood control right. The top of every page.
- **MoodButton**: One dot. Five moods. Tap to cycle.
- **LiveHero**: Headline + sub. The live moment, up top.
- **Lede**: The standfirst that sets the page. Big, quiet, one thought.
- **Standfirst**: Body copy that opens a page. One paragraph, room to breathe.
- **PageTitle**: A page's name + its meta. Smaller than a hero, firmer than a heading.
- **SectionTitle**: A section's name, an optional note, and a hairline underneath.
- **ListRow**: A full-width row: title, description, meta. The index's workhorse.
- **StatusRow**: Label + value, one line. Status at a glance.
- **PlaylistRow**: Thumb + title + meta, with a track list that unfolds.
- **FavoriteAccordion**: A favorite that opens into label/value detail rows.
- **QAAccordion**: Question up top, answer underneath. One at a time, plain words.
- **PhotoCard**: A gradient card with an orb and a label. Four moods of the same card. Variants: Default / Blue / Rose / Green.
- **FileGridCell**: One file in a grid: art, filename, meta.
- **LogoCell**: A centered logo in a card cell. Quiet, even, 160 wide.
- **LogoCard**: A big centered mark. The logo gets the whole card. Plus dark variant.
- **Carousel**: A horizontal scroll-snap row of tall images.
- **PhotoTile**: Square art, a name, a category. The smallest photo unit.
- **Gallery**: A named group of photos: heading, count, three-across grid.
- **FilterPill**: A filter you can tap. Inactive is outline, active is ink. Variants: Default / Active.
- **StatusPill**: A status with a dot. Text carries it; the dot echoes it. Variants: Active / Idle / Offline.
- **StatusDot**: Inline status: a dot and a word. For sentences, not pills.
- **Tag**: A small uppercase label. Quiet metadata, hairline border.
- **LIVEBadge**: A red dot and the word LIVE. Small, loud, honest about its contrast.
- **ReactionButton**: A circle to tap, a label, a caption. Voted gets an underline. Variants: Default / Voted.
- **TextLink**: The call to action. Bold ink, a 2px underline, nothing else.
- **BackLink**: One quiet way back. Muted, small, arrow included.
- **ViewAll**: A full-width pill that opens the whole list.
- **ProgressBar**: A 3px bar. The number lives in the text next to it.
- **MenuPill**: The floating pill that opens the menu sheet.
- **Lightbox**: One photo, big, on near-black. Prev, next, count, close.
- **MenuBottomSheet**: The menu, as a sheet: grab bar, sections, rows, active dot.
- **MediaCard**: A full-bleed moment: status bar up top, caption at the bottom.
- **LivePulseDot**: An 8px dot and its expanding ring. Live, at a glance.
- **EqualizerBars**: Four bars that say: something is playing.
- **Stat**: A metric, a big number, a unit. Nothing else.
- **Footer**: The bottom of the page. Small, muted, done.
- **ToggleTabs**: Two or more views, one row. Active is ink + underline.
- **NextFooter**: The way onward. A hairline, then the next row.

Deliberately absent: no filled/primary Button, no toast, no dialog. The source has none. One form control: Search filters a list; it never submits one. Actions are Text Link, Filter Pill, View All, Menu Pill, and rows that are real links/buttons.

## Docs site
Static, no build step, Vercel-ready — in `/site/` (`index.html` + `styles.css` + `app.js`).
Routes: `#/home`, `#/components`, `#/components/<id>?lens=human|agent|vibe`, `#/guides`, `#/tokens`, `#/getting-started`, `#/accessibility`, `#/patterns`, `#/changelog`, `#/migration`, `#/faq`. Lens persists in the URL, Back button works, deep links work.

## Quickstart
```bash
npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/header.json
```
Install any component from the shadcn registry at `https://oeste.hiddeninwest.com/huntington/r/` (index: `r/registry.json`). The registry goes live when Huntington is integrated into oeste.hiddeninwest.com/huntington; until then, copy from the Vibe lens. `@oeste/huntington` is not a published package. The React snippets in `src/index.js` and the Vibe lens import from `@/components/ui/…` — where shadcn puts the files — and work today in any React + Tailwind app (React 18+, JSX transform).

## Registry (v0.2.0)
Every component ships as a shadcn-compatible registry item: `r/<id>.json` with self-contained React + Tailwind code (extracted from `src/index.js`, including any shared constants or sibling components it renders). Registry files need `src/tokens.css` (Huntington tokens) loaded once. `components.json` at the repo root is the machine manifest — every component with registry URL, raw GitHub URL, docs link, and tags. Regenerate after any change to `src/index.js` (never hand-edit `r/*.json`):
```bash
python3 scripts/build_registry.py
npm run verify
```

## Structure
- `/src/index.js` — React components + `DESIGN_TOKENS` + `COMPONENT_DOCS`
- `/src/tokens.css` — CSS variables (5 moods via `data-theme`)
- `/src/tokens.json` — machine-readable tokens
- `/site/` — static docs site (Vercel-ready)
- `/scripts/verify.mjs` — checks token agreement + contrast
- `llms.txt` — machine-readable protocol for AI editors
- `package.json` — `@oeste/huntington` v0.2.0, no runtime dependencies

## Verify
```bash
npm run verify
```
Checks tokens agree across CSS / JSON / JS, ink-on-paper and ink-on-card meet WCAG AA 4.5:1 in every mood, muted pairs are measured and reported honestly, code colors pass 4.5:1 on card in every mood, and registry files (`r/*.json` + `components.json`) parse and agree with each other.

## Changelog
- **v0.2.0 (2026-10-15)**: Docs rebuilt index-first (Menu Pill + Menu Bottom Sheet nav, no sidebar/search; detail pages with Back Link, Page Title, Next Footer; lenses as Toggle Tabs). Mood names corrected to Ink/Rose/Dune, default Paper (breaking: `data-theme` values `dark`/`blush`/`sand` renamed). Three new components: Toggle Tabs, Next Footer, Search (40 total). Docs footer no longer links to any project site.
- **v0.1.0 (2026-10-15)**: First web release of Huntington. 37 components (44 built Figma nodes) from the Figma plugin v1.0.3. Five moods, Dark default. shadcn-compatible registry at `/huntington/r/`. Logo Card radius follows tokens + audit (18px); the Figma plugin builder used 14px. No breaking changes (first release).
