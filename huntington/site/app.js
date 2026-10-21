/* Huntington docs site — vanilla JS, hash routing, no build step. */
"use strict";

const MOODS = ["paper", "ink", "rose", "sage", "dune"];
const COMPONENTS = [{"id": "header", "name": "Header", "tagline": "Wordmark left, mood control right. The top of every page.", "anatomy": ["Wordmark (mark + name)", "Mood Button"], "props": [["wordmark", "string", "Yes", "Brand name text. Generic placeholder: “Brand”."], ["mood", "\"paper\" | \"ink\" | \"rose\" | \"sage\" | \"dune\"", "Yes", "Current mood, passed to Mood Button."], ["onMoodChange", "(mood) => void", "Yes", "Fires when the mood cycles."]], "keyboard": [["Tab", "Move focus between the wordmark link and the Mood Button."], ["Enter / Space", "Follow the wordmark link, or cycle the mood."]], "invariants": ["Wordmark links home.", "Mood Button announces the current mood.", "Header holds nothing else: navigation lives in the Menu Bottom Sheet."], "contract": {"props": {"wordmark": "string", "mood": ["paper", "ink", "rose", "sage", "dune"]}, "a11y": {"wordmark": "link to home", "mood": "button with aria-label naming the current mood"}}, "prompt": "Build a Huntington Header: wordmark (30px mark + 17/800 name) left, Mood Button right, 40px top padding, paper background. Wordmark links home. Nothing else in the header.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/header.json", "code": "import { Header } from \"@/components/ui/header\";\n\nexport function Top({ mood, onMoodChange }) {\n  return <Header wordmark=\"Brand\" mood={mood} onMoodChange={onMoodChange} />;\n}"}, {"id": "mood-button", "name": "Mood Button", "tagline": "One dot. Five moods. Tap to cycle.", "anatomy": ["Dot (paper fill, 1.5px muted border)", "Button (borderless, 6px padding)"], "props": [["mood", "\"paper\" | \"ink\" | \"rose\" | \"sage\" | \"dune\"", "Yes", "Current mood. The dot fills with the paper color."], ["onCycle", "() => void", "Yes", "Fires on activation; the parent advances the mood."]], "keyboard": [["Tab", "Move focus to the button."], ["Enter / Space", "Cycle to the next mood."]], "invariants": ["Dot is 18px, paper fill, 1.5px muted border.", "Cycles in order: Paper, Ink, Rose, Sage, Dune. Paper is the default mood.", "The choice persists (docs convention: localStorage).", "Motion (audit): 1.1s scale pulse on change. Reduced motion: no animation."], "contract": {"props": {"mood": ["paper", "ink", "rose", "sage", "dune"]}, "a11y": {"role": "button", "label": "names the current mood + the cycle action"}}, "prompt": "Build a Huntington Mood Button: borderless button, 18px dot with paper fill and a 1.5px muted border, 6px padding. Cycles Paper, Ink, Rose, Sage, Dune. Audit motion: 1.1s scale pulse on change.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/mood-button.json", "code": "import { MoodButton } from \"@/components/ui/mood-button\";\n\nexport function MoodControl({ mood, onCycle }) {\n  return <MoodButton mood={mood} onCycle={onCycle} />;\n}"}, {"id": "live-hero", "name": "Live Hero", "tagline": "Headline + sub. The live moment, up top.", "anatomy": ["Headline (H1)", "Sub (muted)"], "props": [["title", "string", "Yes", "Headline. The page H1."], ["sub", "string", "Yes", "Supporting line, muted."]], "keyboard": [["—", "Live Hero is not interactive. No keyboard behavior."]], "invariants": ["Headline is the page H1 (31/700/-0.03/1.22).", "Sub is muted 16/1.65 and never the only place for key information.", "Gap between headline and sub is 12px."], "contract": {"props": {"title": "string", "sub": "string"}, "a11y": {"heading": "page H1", "sub": "muted supporting text"}}, "prompt": "Build a Huntington Live Hero: H1 31/700/-0.03/1.22 plus a muted 16/1.65 sub, 12px gap, 496px text width. The headline is the page H1.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/live-hero.json", "code": "import { LiveHero } from \"@/components/ui/live-hero\";\n\nexport function Hero() {\n  return <LiveHero title=\"Live hero headline goes here\" sub=\"Hero sub copy goes here.\" />;\n}"}, {"id": "lede", "name": "Lede", "tagline": "The standfirst that sets the page. Big, quiet, one thought.", "anatomy": ["Text (lede type)"], "props": [["children", "ReactNode", "Yes", "Lede copy."]], "keyboard": [["—", "Lede is not interactive. No keyboard behavior."]], "invariants": ["Lede type: 26/500/1.28/-0.025 ink; 34px at 700px and up (audit).", "Max width 572px in the Figma build; lede reads as one thought, not a paragraph."], "contract": {"props": {"children": "ReactNode"}, "a11y": {"text": "plain paragraph, never a heading unless it heads the page"}}, "prompt": "Build a Huntington Lede: 26/500/1.28/-0.025 ink, 34px at >=700px, max-width 572px. One thought, not a paragraph.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/lede.json", "code": "import { Lede } from \"@/components/ui/lede\";\n\nexport function Intro() {\n  return <Lede>Lede copy goes here.</Lede>;\n}"}, {"id": "standfirst", "name": "Standfirst", "tagline": "Body copy that opens a page. One paragraph, room to breathe.", "anatomy": ["Text (body type, body color)"], "props": [["children", "ReactNode", "Yes", "Standfirst copy."]], "keyboard": [["—", "Standfirst is not interactive. No keyboard behavior."]], "invariants": ["Body type: 16/1.65 in the body color.", "Max width 544px in the Figma build."], "contract": {"props": {"children": "ReactNode"}, "a11y": {"text": "plain paragraph"}}, "prompt": "Build a Huntington Standfirst: 16/1.65 in the body color, max-width 544px.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/standfirst.json", "code": "import { Standfirst } from \"@/components/ui/standfirst\";\n\nexport function Intro() {\n  return <Standfirst>Standfirst copy goes here.</Standfirst>;\n}"}, {"id": "page-title", "name": "Page Title", "tagline": "A page's name + its meta. Smaller than a hero, firmer than a heading.", "anatomy": ["Title (page-title type)", "Meta (muted)"], "props": [["title", "string", "Yes", "Page title."], ["meta", "string", "No — —", "Meta line, muted."]], "keyboard": [["—", "Page Title is not interactive. No keyboard behavior."]], "invariants": ["Title: 26/600/1.28/-0.025 ink. Meta: 13 muted.", "Gap between title and meta is 8px."], "contract": {"props": {"title": "string", "meta": "string?"}, "a11y": {"title": "page heading", "meta": "muted supporting text"}}, "prompt": "Build a Huntington Page Title: 26/600/1.28/-0.025 ink plus 13 muted meta, 8px gap.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/page-title.json", "code": "import { PageTitle } from \"@/components/ui/page-title\";\n\nexport function PageHead() {\n  return <PageTitle title=\"Page title\" meta=\"Meta\" />;\n}"}, {"id": "section-title", "name": "Section Title", "tagline": "A section's name, an optional note, and a hairline underneath.", "anatomy": ["Title", "Note (optional, muted)", "Hairline bottom border"], "props": [["title", "string", "Yes", "Section title."], ["note", "string", "No — —", "Right-side note, 13/500 muted."]], "keyboard": [["—", "Section Title is not interactive. No keyboard behavior."]], "invariants": ["Title: 17/700/-0.01 ink. Note: 13/500 muted.", "Padding-bottom 14px, 1px hairline bottom border.", "Title and note spread to the full width (space-between)."], "contract": {"props": {"title": "string", "note": "string?"}, "a11y": {"title": "section heading", "note": "muted supporting text"}}, "prompt": "Build a Huntington Section Title: 17/700/-0.01 title + optional 13/500 muted note, space-between, 14px bottom padding, 1px hairline bottom border.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/section-title.json", "code": "import { SectionTitle } from \"@/components/ui/section-title\";\n\nexport function Section() {\n  return <SectionTitle title=\"Section title\" note=\"Note\" />;\n}"}, {"id": "list-row", "name": "List Row", "tagline": "A full-width row: title, description, and an optional meta. Inline (two columns without meta, three with it) or stacked (title + meta on top, description below). The index's workhorse.", "anatomy": ["Title (one line, never wraps)", "Description (muted)", "Meta (right, muted — omit for the 2-column form)", "Stacked form: title + meta on one line, description below"], "props": [["title", "string", "Yes", "Row title."], ["description", "string", "No — —", "Row description, muted."], ["meta", "string", "No — —", "Right-side meta, 13 muted. Omit it for the 2-column form. In the stacked form it sits next to the title."], ["stacked", "boolean", "No — false", "Stack the row: title + meta on one line, description below."], ["href", "string", "No — —", "When present, the row renders as a link."], ["onClick", "() => void", "No — —", "When present without href, the row renders as a button."]], "keyboard": [["Tab", "Move focus to the row."], ["Enter / Space", "Follow the link or activate the button. Space activates on key-up."]], "invariants": ["Padding 15px vertical, 4px horizontal. Title/description gap 14px, baseline-aligned.", "Title: 16/600/-0.015 ink, never wraps (nowrap + ellipsis); the description wraps. Meta: 13 muted, optional — with meta the row has three columns, without it, two. Stacked form (stacked=true): title + meta share the top line; description sits below at full width. The Components page uses stacked rows with the library version as meta.", "A List Row is a real <a> or <button>, never a clickable div."], "contract": {"props": {"title": "string", "description": "string?", "meta": "string?", "stacked": "boolean?", "href": "string?"}, "a11y": {"row": "real link or button", "name": "title text"}}, "prompt": "Build a Huntington List Row: full-width real <a> or <button>, padding 15x4, title 16/600/-0.015 never wraps, description 15/1.5 muted, right meta 13 muted and optional — omit it for the 2-column form. Stacked form (stacked=true): title + meta on one line, description below. Never a clickable div.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/list-row.json", "code": "import { ListRow } from \"@/components/ui/list-row\";\n\nexport function Index() {\n  return (<><ListRow title=\"Row title\" description=\"Row description\" meta=\"Meta\" href=\"#/row\" /><ListRow title=\"Second row\" description=\"Another description\" href=\"#/row2\" /><ListRow stacked title=\"Stacked row\" description=\"Description below the title.\" meta=\"v0.2.0\" href=\"#/row3\" /></>);\n}"}, {"id": "status-row", "name": "Status Row", "tagline": "Label + value, one line. Status at a glance.", "anatomy": ["Label (muted)", "Value (ink)"], "props": [["label", "string", "Yes", "Label, muted."], ["value", "ReactNode", "Yes", "Value. Inline links use the 2px underline style."], ["plain", "boolean", "No — false", "When true, the value renders at weight 400 (labelless rows)."]], "keyboard": [["Tab", "Move focus through any links inside the value. The row itself is not interactive."]], "invariants": ["Padding 7px vertical, 4px horizontal. Gap 16px.", "Label: 15.5/400 muted. Value: 15.5/800 ink, or 400 when plain.", "Values stay text-first; a value is never color alone."], "contract": {"props": {"label": "string", "value": "ReactNode", "plain": "boolean"}, "a11y": {"row": "plain text; links inside are focusable"}}, "prompt": "Build a Huntington Status Row: padding 7x4, gap 16, label 15.5/400 muted, value 15.5/800 ink (400 when plain). Inline links use the 2px underline style.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/status-row.json", "code": "import { StatusRow } from \"@/components/ui/status-row\";\n\nexport function Status() {\n  return <StatusRow label=\"Label\" value=\"Value\" />;\n}"}, {"id": "playlist-row", "name": "Playlist Row", "tagline": "Thumb + title + meta, with a track list that unfolds.", "anatomy": ["Thumb (64px)", "Title + meta", "Chevron", "Track list (expanded)"], "props": [["title", "string", "Yes", "Playlist title."], ["meta", "string", "No — —", "Meta line, 13 muted."], ["tracks", "string[]", "No — —", "Track titles shown when expanded."], ["open", "boolean", "No — false", "Controls the expanded track list."], ["onToggle", "() => void", "No — —", "Fires when the row is toggled."]], "keyboard": [["Tab", "Move focus to the row button."], ["Enter / Space", "Expand or collapse the track list."]], "invariants": ["Thumb is 64x64, radius 14, hairline border.", "Title: 16/700/-0.015 ink. Meta: 13 muted. Row gap 12px.", "Expanded tracks indent 80px; track text is 14/1.6 muted (docs convention: no track spec in the audit).", "Trigger is a real <button> with aria-expanded + aria-controls."], "contract": {"props": {"title": "string", "meta": "string?", "tracks": "array", "open": "boolean"}, "a11y": {"trigger": "button + aria-expanded + aria-controls", "tracks": "hidden when collapsed"}}, "prompt": "Build a Huntington Playlist Row: 64x64 thumb radius 14, title 16/700/-0.015, meta 13 muted, chevron, expanded tracks indented 80px at 14/1.6 muted. Trigger is a real button with aria-expanded + aria-controls.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/playlist-row.json", "code": "import { PlaylistRow } from \"@/components/ui/playlist-row\";\n\nexport function List() {\n  return <PlaylistRow title=\"Playlist title\" meta=\"Meta\" tracks={[\"01  Track title\", \"02  Track title\"]} />;\n}"}, {"id": "favorite-accordion", "name": "Favorite Accordion", "tagline": "A favorite that opens into label/value detail rows.", "anatomy": ["Header (chevron + title)", "Detail rows (label + value)"], "props": [["title", "string", "Yes", "Favorite title."], ["details", "{ label, value }[]", "Yes", "Detail rows."], ["open", "boolean", "No — false", "Controls the expanded body."], ["onToggle", "() => void", "No — —", "Fires when the header is toggled."]], "keyboard": [["Tab", "Move focus to the header button."], ["Enter / Space", "Expand or collapse the body."]], "invariants": ["Header: chevron + title 16/600. Detail rows: label/value 14/1.6 muted/ink, gap 16.", "Trigger is a real <button> with aria-expanded + aria-controls; body is hidden when closed.", "Motion (audit): body max-height transition 300px. Reduced motion: no animation."], "contract": {"props": {"title": "string", "details": "array", "open": "boolean"}, "a11y": {"trigger": "button + aria-expanded + aria-controls", "body": "hidden when closed"}}, "prompt": "Build a Huntington Favorite Accordion: header chevron + 16/600 title, detail rows label/value 14/1.6 muted/ink. Real button trigger with aria-expanded + aria-controls. Audit motion: 300px max-height transition.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/favorite-accordion.json", "code": "import { FavoriteAccordion } from \"@/components/ui/favorite-accordion\";\n\nexport function Fav() {\n  return <FavoriteAccordion title=\"Favorite\" details={[{ label: \"Label\", value: \"Value\" }]} />;\n}"}, {"id": "qa-accordion", "name": "Q&A Accordion", "tagline": "Question up top, answer underneath. One at a time, plain words.", "anatomy": ["Question (button)", "Answer (body copy)"], "props": [["question", "string", "Yes", "Question text."], ["answer", "string", "Yes", "Answer copy."], ["open", "boolean", "No — false", "Controls the visible answer."], ["onToggle", "() => void", "No — —", "Fires when the question is toggled."]], "keyboard": [["Tab", "Move focus to the question button."], ["Enter / Space", "Show or hide the answer."]], "invariants": ["Question: 16/600/-0.01, padding 15x4. Answer: 15/1.65 body color, 544 wide.", "Trigger is a real <button> with aria-expanded + aria-controls; answer is hidden when closed."], "contract": {"props": {"question": "string", "answer": "string", "open": "boolean"}, "a11y": {"trigger": "button + aria-expanded + aria-controls", "answer": "hidden when closed"}}, "prompt": "Build a Huntington Q&A Accordion: question 16/600/-0.01 padding 15x4, answer 15/1.65 body color 544 wide. Real button trigger with aria-expanded + aria-controls.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/qa-accordion.json", "code": "import { QAAccordion } from \"@/components/ui/qa-accordion\";\n\nexport function Faq() {\n  return <QAAccordion question=\"Question goes here?\" answer=\"Answer copy goes here.\" />;\n}"}, {"id": "photo-card", "name": "Photo Card", "tagline": "A gradient card with an orb and a label. Four moods of the same card.", "anatomy": ["Gradient background", "Orb (150px, 80% opacity)", "Label (title + subtitle)"], "props": [["variant", "\"default\" | \"blue\" | \"rose\" | \"green\"", "No — \"default\"", "Gradient + orb color pair."], ["title", "string", "Yes", "Card title, 17/600 white."], ["subtitle", "string", "No — —", "Card subtitle, 12 white at 60%."]], "keyboard": [["Tab", "Move focus to the card when it is a link. A plain card is not interactive."]], "invariants": ["Size 320x170, radius 14, overflow hidden.", "Orb is 150px at 80% opacity, top-right. Label sits bottom-left.", "Title and subtitle are white text on the gradient, never color alone."], "contract": {"props": {"variant": ["default", "blue", "rose", "green"], "title": "string", "subtitle": "string?"}, "a11y": {"label": "title text on the gradient", "card": "link when it navigates, plain otherwise"}}, "prompt": "Build a Huntington Photo Card: 320x170 radius 14, gradient background + 150px orb at 80% top-right, label 17/600 white + subtitle 12 white at 60%. Variants default/blue/rose/green.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/photo-card.json", "code": "import { PhotoCard } from \"@/components/ui/photo-card\";\n\nexport function Card() {\n  return <PhotoCard variant=\"default\" title=\"Card title\" subtitle=\"Card subtitle\" />;\n}"}, {"id": "file-grid-cell", "name": "File Grid Cell", "tagline": "One file in a grid: art, filename, meta.", "anatomy": ["Art (4:3)", "Filename", "Meta"], "props": [["filename", "string", "Yes", "Filename, 13.5/700/-0.01."], ["meta", "string", "No — —", "Meta line, 12 muted."], ["image", "string", "No — —", "Art image URL. A card-color placeholder shows without one."]], "keyboard": [["Tab", "Move focus to the cell when it is a link. A plain cell is not interactive."]], "invariants": ["Art is 160x120, radius 14, hairline border. Gap 8px.", "Filename: 13.5/700/-0.01 ink. Meta: 12 muted.", "Cells sit in a 2-column grid, gaps 18/12 (audit)."], "contract": {"props": {"filename": "string", "meta": "string?", "image": "string?"}, "a11y": {"filename": "text", "cell": "link when it navigates, plain otherwise"}}, "prompt": "Build a Huntington File Grid Cell: art 160x120 radius 14 hairline, filename 13.5/700/-0.01, meta 12 muted, gap 8. Cells sit in a 2-column grid, gaps 18/12.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/file-grid-cell.json", "code": "import { FileGridCell } from \"@/components/ui/file-grid-cell\";\n\nexport function File() {\n  return <FileGridCell filename=\"filename.jpg\" meta=\"Meta\" />;\n}"}, {"id": "logo-cell", "name": "Logo Cell", "tagline": "A centered logo in a card cell. Quiet, even, 160 wide.", "anatomy": ["Card surface", "Logo (centered)"], "props": [["logo", "ReactNode", "Yes", "Logo mark or image."], ["alt", "string", "No — —", "Accessible name for the logo image."]], "keyboard": [["Tab", "Move focus to the cell when it is a link. A plain cell is not interactive."]], "invariants": ["Cell is 160 wide (via padding), 40px vertical padding, card bg, hairline, radius 14.", "Logo is 70% of the cell width, max 60px tall, centered."], "contract": {"props": {"logo": "ReactNode", "alt": "string?"}, "a11y": {"logo": "image with alt text, or text"}}, "prompt": "Build a Huntington Logo Cell: 160 wide, 40px vertical padding, card bg, hairline, radius 14, logo 70% width max 60 tall centered.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/logo-cell.json", "code": "import { LogoCell } from \"@/components/ui/logo-cell\";\n\nexport function Cell() {\n  return <LogoCell logo={<span>Brand</span>} alt=\"Brand\" />;\n}"}, {"id": "logo-card", "name": "Logo Card", "tagline": "A big centered mark. The logo gets the whole card.", "anatomy": ["Card surface", "Mark (centered, 64px)"], "props": [["mark", "ReactNode", "Yes", "Mark or logo."], ["alt", "string", "No — —", "Accessible name for the mark."], ["dark", "boolean", "No — false", "Dark variant: #141210 background."]], "keyboard": [["Tab", "Move focus to the card when it is a link. A plain card is not interactive."]], "invariants": ["Card is 320 wide (via padding), 44px vertical padding, card bg, hairline, radius 18 (tokens + audit; the Figma plugin builder used 14 — the site follows the tokens).", "Mark placeholder is 64x64 (size unspecified in the audit; docs convention).", "Dark variant background is #141210."], "contract": {"props": {"mark": "ReactNode", "alt": "string?", "dark": "boolean"}, "a11y": {"mark": "image with alt text, or text"}}, "prompt": "Build a Huntington Logo Card: 320 wide, 44px vertical padding, card bg, hairline, radius 18 (tokens + audit), centered 64px mark. Dark variant bg #141210.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/logo-card.json", "code": "import { LogoCard } from \"@/components/ui/logo-card\";\n\nexport function Card() {\n  return <LogoCard mark={<span>Brand</span>} alt=\"Brand\" />;\n}"}, {"id": "carousel", "name": "Carousel", "tagline": "A horizontal scroll-snap row of tall images.", "anatomy": ["Images (148x320, snap)"], "props": [["images", "string[]", "Yes", "Image URLs, one per frame."]], "keyboard": [["Tab", "Nothing to focus: the images are decorative (empty alt text)."], ["Arrow keys", "Not applicable: nothing inside is focusable."]], "invariants": ["Images are 148x320, radius 14, hairline border, gap 10px.", "Horizontal scroll-snap (audit). Content never depends on scroll position alone."], "contract": {"props": {"images": "array"}, "a11y": {"row": "native scroll container of decorative images; no focusable items inside"}}, "prompt": "Build a Huntington Carousel: horizontal scroll-snap row, gap 10, images 148x320 radius 14 hairline. Native scroll behavior.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/carousel.json", "code": "import { Carousel } from \"@/components/ui/carousel\";\n\nexport function Row() {\n  return <Carousel images={[\"/a.jpg\", \"/b.jpg\", \"/c.jpg\"]} />;\n}"}, {"id": "photo-tile", "name": "Photo Tile", "tagline": "Square art, a name, a category. The smallest photo unit.", "anatomy": ["Art (square)", "Name", "Category"], "props": [["name", "string", "Yes", "Photo name, 12.5/600/-0.01."], ["category", "string", "No — —", "Category, 11.5 muted."], ["image", "string", "No — —", "Art image URL. A card-color placeholder shows without one."]], "keyboard": [["Tab", "Move focus to the tile when it is a link. A plain tile is not interactive."]], "invariants": ["Art is 120x120, radius 14, hairline border. Gap 8px.", "Name: 12.5/600/-0.01 ink. Category: 11.5 muted."], "contract": {"props": {"name": "string", "category": "string?", "image": "string?"}, "a11y": {"name": "text", "tile": "link when it navigates, plain otherwise"}}, "prompt": "Build a Huntington Photo Tile: art 120x120 radius 14 hairline, name 12.5/600/-0.01, category 11.5 muted, gap 8.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/photo-tile.json", "code": "import { PhotoTile } from \"@/components/ui/photo-tile\";\n\nexport function Tile() {\n  return <PhotoTile name=\"Photo name\" category=\"Category\" />;\n}"}, {"id": "gallery", "name": "Gallery", "tagline": "A named group of photos: heading, count, three-across grid.", "anatomy": ["Heading (title + count)", "Grid (3 columns)"], "props": [["title", "string", "Yes", "Gallery title, 13/700."], ["count", "number", "No — —", "Item count, 13 muted."], ["images", "string[]", "Yes", "Image URLs."]], "keyboard": [["Tab", "Move focus through the focusable items inside the grid."]], "invariants": ["Heading: title 13/700 + count 13 muted, gap 6px.", "Grid: 3 columns, gap 8px, art square, radius 10."], "contract": {"props": {"title": "string", "count": "number?", "images": "array"}, "a11y": {"heading": "text", "items": "focusable when they navigate"}}, "prompt": "Build a Huntington Gallery: heading 13/700 + count 13 muted, 3-column grid, gap 8, art square radius 10.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/gallery.json", "code": "import { Gallery } from \"@/components/ui/gallery\";\n\nexport function Set() {\n  return <Gallery title=\"Gallery\" count={12} images={[\"/a.jpg\", \"/b.jpg\", \"/c.jpg\"]} />;\n}"}, {"id": "filter-pill", "name": "Filter Pill", "tagline": "A filter you can tap. Inactive is outline, active is ink.", "anatomy": ["Label", "Pill surface"], "props": [["children", "ReactNode", "Yes", "Filter label."], ["active", "boolean", "No — false", "Active state: ink bg, paper text."], ["onToggle", "() => void", "No — —", "Fires when the pill is toggled."]], "keyboard": [["Tab", "Move focus to the pill."], ["Enter / Space", "Toggle the filter."]], "invariants": ["13/700, padding 9x15, radius 999, 1px hairline border, card bg.", "Active: ink bg, paper text. State is also visible by fill, never color alone (the label stays).", "Pill is a real <button> with aria-pressed."], "contract": {"props": {"active": "boolean"}, "a11y": {"pill": "button + aria-pressed"}}, "prompt": "Build a Huntington Filter Pill: 13/700, padding 9x15, radius 999, hairline, card bg. Active: ink bg, paper text. Real button with aria-pressed.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/filter-pill.json", "code": "import { FilterPill } from \"@/components/ui/filter-pill\";\n\nexport function Filters() {\n  return <FilterPill active>Filter</FilterPill>;\n}"}, {"id": "status-pill", "name": "Status Pill", "tagline": "A status with a dot. Text carries it; the dot echoes it.", "anatomy": ["Status dot (7px)", "Label"], "props": [["status", "\"active\" | \"idle\" | \"offline\"", "Yes", "Status. Dot color follows it."], ["children", "ReactNode", "No — —", "Label. Defaults to the capitalized status."]], "keyboard": [["—", "Status Pill is not interactive. No keyboard behavior."]], "invariants": ["12.5/600, padding 4x11, radius 999, hairline, card bg, gap 6px.", "Dots: Active #34d399, Idle #60a5fa, Offline #fbbf24.", "Meaning is in the label text, never the dot color alone."], "contract": {"props": {"status": ["active", "idle", "offline"]}, "a11y": {"meaning": "label text, never dot color alone"}}, "prompt": "Build a Huntington Status Pill: 12.5/600, padding 4x11, radius 999, hairline, card bg, 7px dot. Active #34d399, Idle #60a5fa, Offline #fbbf24. Meaning in the label text.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/status-pill.json", "code": "import { StatusPill } from \"@/components/ui/status-pill\";\n\nexport function Status() {\n  return <StatusPill status=\"active\" />;\n}"}, {"id": "status-dot", "name": "Status Dot", "tagline": "Inline status: a dot and a word. For sentences, not pills.", "anatomy": ["Dot (7px)", "Text (muted)"], "props": [["status", "\"active\" | \"idle\" | \"offline\"", "No — \"active\"", "Status. Dot color follows it."], ["children", "ReactNode", "No — —", "Text. Defaults to the capitalized status."]], "keyboard": [["—", "Status Dot is not interactive. No keyboard behavior."]], "invariants": ["Text: 13/500 muted. Dot: 7px. Gap 6px.", "Meaning is in the text, never the dot color alone."], "contract": {"props": {"status": ["active", "idle", "offline"]}, "a11y": {"meaning": "text, never dot color alone"}}, "prompt": "Build a Huntington Status Dot: 13/500 muted text + 7px dot, gap 6. Meaning in the text, never the dot color alone.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/status-dot.json", "code": "import { StatusDot } from \"@/components/ui/status-dot\";\n\nexport function Inline() {\n  return <StatusDot status=\"active\">Active</StatusDot>;\n}"}, {"id": "tag", "name": "Tag", "tagline": "A small uppercase label. Quiet metadata, hairline border.", "anatomy": ["Label (uppercase)"], "props": [["children", "ReactNode", "Yes", "Tag text. Rendered uppercase."]], "keyboard": [["—", "Tag is not interactive. No keyboard behavior. (If a tag filters, use Filter Pill with aria-pressed instead.)"]], "invariants": ["11/600 uppercase, tracking +0.08, muted.", "Padding 4x10, radius 99, 1px hairline border.", "A Tag never acts as a button."], "contract": {"props": {"children": "ReactNode"}, "a11y": {"tag": "plain text, never a button"}}, "prompt": "Build a Huntington Tag: 11/600 uppercase +0.08 muted, padding 4x10, radius 99, hairline. Plain text, never a button.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/tag.json", "code": "import { Tag } from \"@/components/ui/tag\";\n\nexport function Meta() {\n  return <Tag>Tag</Tag>;\n}"}, {"id": "live-badge", "name": "LIVE Badge", "tagline": "A red dot and the word LIVE. Small, loud, honest about its contrast.", "anatomy": ["Dot (8px, live red)", "Text (LIVE)"], "props": [], "keyboard": [["—", "LIVE Badge is not interactive. No keyboard behavior."]], "invariants": ["Dot is 8px #d24247. Text: 13/700/+0.06 #d24247, uppercase. Gap 6px.", "Audit motion: the dot blinks. Reduced motion: no animation.", "Contrast note (measured): LIVE text is 4.48:1 on a paper card, 3.70:1 on an ink card — below 4.5:1. It is a status indicator with a dot, never body copy."], "contract": {"props": {}, "a11y": {"badge": "text + dot, never dot alone", "contrast": "measured 4.48:1 paper / 3.70:1 dark — status indicator, not body text"}}, "prompt": "Build a Huntington LIVE Badge: 8px dot #d24247 + LIVE 13/700/+0.06 #d24247 uppercase, gap 6. Dot blinks (audit motion). Contrast note: 3.85:1 on paper card — a status indicator, never body copy.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/live-badge.json", "code": "import { LIVEBadge } from \"@/components/ui/live-badge\";\n\nexport function Live() {\n  return <LIVEBadge />;\n}"}, {"id": "reaction-button", "name": "Reaction Button", "tagline": "A circle to tap, a label, a caption. Voted gets an underline.", "anatomy": ["Circle (44px)", "Label", "Caption"], "props": [["label", "string", "Yes", "Label, 15/700."], ["caption", "string", "No — —", "Caption, 13 muted."], ["voted", "boolean", "No — false", "Voted state: 2px underline under the label."], ["onToggle", "() => void", "No — —", "Fires when the circle is tapped."]], "keyboard": [["Tab", "Move focus to the circle button."], ["Enter / Space", "Toggle the vote."]], "invariants": ["Circle is 44px, 1.5px border. Gap 6px; label/caption gap 1px.", "Label: 15/700 ink. Caption: 13 muted.", "Voted: 2px line underline under the label (40px wide in Figma, docs convention).", "Circle is a real <button> with aria-pressed."], "contract": {"props": {"label": "string", "caption": "string?", "voted": "boolean"}, "a11y": {"circle": "button + aria-pressed", "state": "underline + aria-pressed, never color alone"}}, "prompt": "Build a Huntington Reaction Button: 44px circle, 1.5px border, label 15/700 + caption 13 muted. Voted: 2px underline under the label. Real button with aria-pressed.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/reaction-button.json", "code": "import { ReactionButton } from \"@/components/ui/reaction-button\";\n\nexport function React() {\n  return <ReactionButton label=\"React\" caption=\"Caption\" />;\n}"}, {"id": "text-link", "name": "Text Link", "tagline": "The call to action. Bold ink, a 2px underline, nothing else.", "anatomy": ["Text (bold ink)", "Underline (2px line)"], "props": [["href", "string", "Yes", "Link destination."], ["children", "ReactNode", "Yes", "Link text."]], "keyboard": [["Tab", "Move focus to the link."], ["Enter", "Follow the link."]], "invariants": ["15/700 ink. Underline: 2px solid line color, padding-bottom 1-2px.", "A Text Link is a real <a>. It is the primary call to action — there is no filled button in Huntington."], "contract": {"props": {"href": "string", "children": "ReactNode"}, "a11y": {"link": "real anchor with visible text"}}, "prompt": "Build a Huntington Text Link: 15/700 ink, 2px solid line underline, padding-bottom 1-2px. A real <a>. It is the primary call to action.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/text-link.json", "code": "import { TextLink } from \"@/components/ui/text-link\";\n\nexport function Go() {\n  return <TextLink href=\"#/more\">Visit</TextLink>;\n}"}, {"id": "back-link", "name": "Back Link", "tagline": "One quiet way back. Muted, small, arrow included.", "anatomy": ["Text (muted)"], "props": [["href", "string", "Yes", "Link destination."], ["children", "ReactNode", "No — —", "Link text. Defaults to “← Back”."]], "keyboard": [["Tab", "Move focus to the link."], ["Enter", "Follow the link."]], "invariants": ["13 muted, no decoration.", "A Back Link is a real <a>."], "contract": {"props": {"href": "string", "children": "ReactNode"}, "a11y": {"link": "real anchor with visible text"}}, "prompt": "Build a Huntington Back Link: 13 muted, no decoration. A real <a>. Default text: ← Back.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/back-link.json", "code": "import { BackLink } from \"@/components/ui/back-link\";\n\nexport function Back() {\n  return <BackLink href=\"#/components\" />;\n}"}, {"id": "view-all", "name": "View All", "tagline": "A full-width pill that opens the whole list.", "anatomy": ["Label", "Pill surface (full width)"], "props": [["children", "ReactNode", "No — —", "Label. Defaults to “View all”."], ["href", "string", "No — —", "When present, renders as a link."], ["onClick", "() => void", "No — —", "When present without href, renders as a button."]], "keyboard": [["Tab", "Move focus to the control."], ["Enter / Space", "Follow the link or activate the button."]], "invariants": ["Full width, padding 14px, radius 99, 1px hairline border.", "Label: 14/600/-0.01 ink, centered.", "A View All is a real <a> or <button>, never a clickable div."], "contract": {"props": {"children": "ReactNode", "href": "string?"}, "a11y": {"control": "real link or button"}}, "prompt": "Build a Huntington View All: full-width, padding 14, radius 99, hairline, 14/600/-0.01 ink centered. A real <a> or <button>.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/view-all.json", "code": "import { ViewAll } from \"@/components/ui/view-all\";\n\nexport function More() {\n  return <ViewAll href=\"#/all\">View all</ViewAll>;\n}"}, {"id": "progress-bar", "name": "Progress Bar", "tagline": "A 3px bar. The number lives in the text next to it.", "anatomy": ["Track (line color)", "Fill (ink)"], "props": [["value", "number", "Yes", "Current value."], ["min", "number", "No — 0", "Minimum."], ["max", "number", "No — 100", "Maximum."]], "keyboard": [["—", "Progress Bar is not interactive. No keyboard behavior."]], "invariants": ["Track: 220x3, radius 2, line color. Fill: ink, clamped to min-max.", "The bar never stands alone: always pair it with visible value text nearby (label, Stat, or caption).", "Uses role=progressbar + aria-valuenow/min/max.", "Motion (audit): the fill pulses while charging. Reduced motion: no animation."], "contract": {"props": {"value": "number", "min": "number", "max": "number"}, "a11y": {"role": "progressbar", "values": "aria-valuenow/min/max", "text": "visible value text nearby"}}, "prompt": "Build a Huntington Progress Bar: track 220x3 radius 2 line color, fill ink clamped to min-max, role=progressbar + aria-valuenow/min/max. Always pair with visible value text. Audit motion: fill pulses while charging.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/progress-bar.json", "code": "import { ProgressBar } from \"@/components/ui/progress-bar\";\n\nexport function Loading() {\n  return <ProgressBar value={65} />;\n}"}, {"id": "menu-pill", "name": "Menu Pill", "tagline": "The floating pill that opens the menu sheet.", "anatomy": ["Label", "Pill surface (paper 84% + blur)"], "props": [["label", "string", "No — \"Menu\"", "Pill label."], ["onOpen", "() => void", "No — —", "Fires when the pill is activated."]], "keyboard": [["Tab", "Move focus to the pill."], ["Enter / Space", "Open the Menu Bottom Sheet."]], "invariants": ["Padding 12x16, radius 999, paper at 84% + 12px backdrop blur, hairline, shadow 0 8px 24px rgba(0,0,0,0.14).", "Label: 13/600/+0.02 ink. Fixed bottom-right in use (audit).", "Pill is a real <button> with aria-expanded + aria-controls pointing at the sheet."], "contract": {"props": {"label": "string"}, "a11y": {"pill": "button + aria-expanded + aria-controls", "sheet": "labelled menu"}}, "prompt": "Build a Huntington Menu Pill: padding 12x16, radius 999, paper 84% + 12px backdrop blur, hairline, shadow 0 8px 24px rgba(0,0,0,0.14), label 13/600/+0.02. Real button with aria-expanded + aria-controls. Fixed bottom-right in use.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/menu-pill.json", "code": "import { MenuPill } from \"@/components/ui/menu-pill\";\n\nexport function Menu() {\n  return <MenuPill onOpen={() => {}} />;\n}"}, {"id": "lightbox", "name": "Lightbox", "tagline": "One photo, big, on near-black. Prev, next, count, close.", "anatomy": ["Backdrop (near-black)", "Image", "Prev / Next buttons", "Count", "Close"], "props": [["image", "string", "Yes", "Image URL."], ["alt", "string", "No — —", "Image alt text."], ["index", "number", "Yes", "Current index (1-based)."], ["total", "number", "Yes", "Total images."], ["onPrev", "() => void", "No — —", "Fires on Previous."], ["onNext", "() => void", "No — —", "Fires on Next."], ["onClose", "() => void", "Yes", "Fires on Close / Escape."]], "keyboard": [["Escape", "Close the lightbox, return focus to the trigger."], ["Tab / Shift+Tab", "Move focus between Close, Previous, Next (docs convention: focus stays inside)."], ["ArrowLeft / ArrowRight", "Previous / Next (docs convention)."]], "invariants": ["Frame 632x420, background rgba(8,8,8,0.95). Image 320x240, radius 14.", "Prev/Next are round 44px buttons, white 12% fill, 26px glyphs.", "Count is 13 white at 70%. White on near-black is 20.03:1.", "Lightbox is a dialog: role=dialog + aria-modal + aria-label. Focus returns to the trigger on close."], "contract": {"props": {"image": "string", "index": "number", "total": "number"}, "a11y": {"dialog": "role=dialog + aria-modal", "focus": "returns to trigger on close", "count": "visible text"}}, "prompt": "Build a Huntington Lightbox: 632x420 rgba(8,8,8,0.95), image 320x240 radius 14, round 44px Prev/Next white 12% + 26px glyphs, count 13 white 70%. role=dialog + aria-modal, Escape closes, focus returns to trigger.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/lightbox.json", "code": "import { Lightbox } from \"@/components/ui/lightbox\";\n\nexport function View() {\n  return <Lightbox image=\"/photo.jpg\" alt=\"Photo\" index={1} total={12} onClose={() => {}} />;\n}"}, {"id": "menu-bottom-sheet", "name": "Menu Bottom Sheet", "tagline": "The menu, as a sheet: grab bar, sections, rows, active dot.", "anatomy": ["Grab bar", "Section label", "Rows (title + note)", "Active dot"], "props": [["sections", "{ label, rows: { title, note?, active?, href? }[] }[]", "Yes", "Sections and their rows."], ["onClose", "() => void", "No — —", "Fires on scrim click / Escape."]], "keyboard": [["Escape", "Close the sheet, return focus to the Menu Pill."], ["Tab", "Move focus through the rows and the close control."]], "invariants": ["Padding 12 top / 24 bottom / 20 sides. Top radius 22. Max width 672 (audit).", "Grab bar 38x4, radius 2 (radius unspecified in the audit; docs convention).", "Section label: 12/600 uppercase +0.08 muted. Row: padding 14, title 17/700/-0.015, note 13 muted.", "Active row gets a 7px ink dot after the title.", "Scrim rgba(0,0,0,0.18). Shadow 0 -18px 50px rgba(0,0,0,0.16)."], "contract": {"props": {"sections": "array"}, "a11y": {"sheet": "dialog with labelled rows", "focus": "returns to Menu Pill on close", "scrim": "click closes"}}, "prompt": "Build a Huntington Menu Bottom Sheet: padding 12/24/20, top radius 22, grab bar 38x4, section label 12/600 uppercase +0.08 muted, rows padding 14 title 17/700/-0.015 + note 13 muted, active row 7px ink dot. Scrim rgba(0,0,0,0.18), shadow 0 -18px 50px rgba(0,0,0,0.16).", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/menu-bottom-sheet.json", "code": "import { MenuBottomSheet } from \"@/components/ui/menu-bottom-sheet\";\n\nexport function Menu() {\n  return <MenuBottomSheet sections={[{ label: \"Section\", rows: [{ title: \"Row title\", note: \"Note\" }] }]} />;\n}"}, {"id": "media-card", "name": "Media Card", "tagline": "A full-bleed moment: status bar up top, caption at the bottom.", "anatomy": ["Image (full-bleed)", "Status bar", "Caption (title + body)"], "props": [["image", "string", "Yes", "Image URL."], ["alt", "string", "No — —", "Image alt text."], ["statusBar", "string", "No — —", "Top status bar text, uppercase."], ["title", "string", "Yes", "Caption title, 22/600 white."], ["caption", "string", "No — —", "Caption body, 14 white at 72%."]], "keyboard": [["Tab", "Move focus to the card when it is a link. A plain card is not interactive."]], "invariants": ["Size 360x640. Image fills the frame; caption sits on a bottom gradient.", "Status bar: 11/600/+0.18 white, centered, uppercase.", "Caption title: 22/600 white. Caption body: 14 white at 72%.", "Caption text-shadow 0 1px 10px rgba(0,0,0,0.55) (audit; no Figma fill equivalent).", "Motion (audit): slow 26s scale drift. Reduced motion: no animation."], "contract": {"props": {"image": "string", "title": "string", "caption": "string?", "statusBar": "string?"}, "a11y": {"image": "alt text", "caption": "white text on the image + shadow"}}, "prompt": "Build a Huntington Media Card: 360x640 full-bleed image, status bar 11/600/+0.18 white centered uppercase, caption title 22/600 white + body 14 white 72%, caption text-shadow 0 1px 10px rgba(0,0,0,0.55). Audit motion: 26s scale drift.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/media-card.json", "code": "import { MediaCard } from \"@/components/ui/media-card\";\n\nexport function Moment() {\n  return <MediaCard image=\"/moment.jpg\" alt=\"Moment\" statusBar=\"Status bar\" title=\"Card title\" caption=\"Caption copy goes here.\" />;\n}"}, {"id": "live-pulse-dot", "name": "Live Pulse Dot", "tagline": "An 8px dot and its expanding ring. Live, at a glance.", "anatomy": ["Dot (8px, pulse blue)", "Ring (24px, 1.5px)"], "props": [], "keyboard": [["—", "Live Pulse Dot is not interactive. No keyboard behavior."]], "invariants": ["Dot is 8px #1a73e8. Ring is 24px, 1.5px stroke.", "Motion (audit): ring pings over 2.4s. Reduced motion: no animation. The Figma build is static.", "Always pair with visible text (e.g. LIVE Badge or a label) — the dot alone means nothing to a screen reader."], "contract": {"props": {}, "a11y": {"dot": "aria-hidden; pair with visible text"}}, "prompt": "Build a Huntington Live Pulse Dot: 8px dot #1a73e8 + 24px ring 1.5px stroke. Audit motion: 2.4s ping. Always pair with visible text; the dot alone is aria-hidden.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/live-pulse-dot.json", "code": "import { LivePulseDot } from \"@/components/ui/live-pulse-dot\";\n\nexport function Live() {\n  return (<span><LivePulseDot /> Live</span>);\n}"}, {"id": "equalizer-bars", "name": "Equalizer Bars", "tagline": "Four bars that say: something is playing.", "anatomy": ["Bars (4, ink)"], "props": [["label", "string", "No — —", "Accessible label for the playing state, e.g. “Now playing”."]], "keyboard": [["—", "Equalizer Bars are not interactive. No keyboard behavior."]], "invariants": ["4 bars, 3px wide, 15px tall, ink color, gap 3px.", "Motion (audit): staggered scaleY animation. Reduced motion: no animation. The Figma build is static.", "Bars are aria-hidden; the playing state is announced by visible text or a label."], "contract": {"props": {"label": "string?"}, "a11y": {"bars": "aria-hidden; state in visible text or label"}}, "prompt": "Build a Huntington Equalizer Bars: 4 bars 3x15 ink, gap 3. Audit motion: staggered scaleY. Bars are aria-hidden; the playing state lives in visible text or a label.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/equalizer-bars.json", "code": "import { EqualizerBars } from \"@/components/ui/equalizer-bars\";\n\nexport function Playing() {\n  return (<span><EqualizerBars label=\"Now playing\" /> Now playing</span>);\n}"}, {"id": "stat", "name": "Stat", "tagline": "A metric, a big number, a unit. Nothing else.", "anatomy": ["Label", "Number + unit"], "props": [["label", "string", "Yes", "Metric label, 17/500 body color."], ["value", "string", "Yes", "Number, 28/700/-0.025 ink."], ["unit", "string", "No — —", "Unit, 13 muted, bottom-aligned."]], "keyboard": [["—", "Stat is not interactive. No keyboard behavior."]], "invariants": ["Label: 17/500 body color. Number: 28/700/-0.025 ink. Unit: 13 muted, bottom-aligned to the number.", "Gap 4px. Number and unit are one readable value, never number alone."], "contract": {"props": {"label": "string", "value": "string", "unit": "string?"}, "a11y": {"value": "number + unit as one readable value"}}, "prompt": "Build a Huntington Stat: label 17/500 body color, number 28/700/-0.025 ink + unit 13 muted bottom-aligned, gap 4. Number + unit read as one value.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/stat.json", "code": "import { Stat } from \"@/components/ui/stat\";\n\nexport function Metric() {\n  return <Stat label=\"Metric\" value=\"7.4\" unit=\"units\" />;\n}"}, {"id": "footer", "name": "Footer", "tagline": "The bottom of the page. Small, muted, done.", "anatomy": ["Footer copy"], "props": [["children", "ReactNode", "No — —", "Footer copy. Defaults to the generic placeholder."]], "keyboard": [["Tab", "Move focus through any links inside the footer."]], "invariants": ["13/400 muted, leading 1.7. Padding-top 80px.", "Component copy stays generic (“Brand name” placeholder). The docs site footer follows the Oeste footer pattern separately."], "contract": {"props": {"children": "ReactNode"}, "a11y": {"footer": "landmark; links inside are focusable"}}, "prompt": "Build a Huntington Footer: 13/400 muted, leading 1.7, padding-top 80px. Generic placeholder copy.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/footer.json", "code": "import { Footer } from \"@/components/ui/footer\";\n\nexport function Bottom() {\n  return <Footer />;\n}"}, {"id": "toggle-tabs", "name": "Toggle Tabs", "tagline": "Two or more views, one row. Active is ink + underline.", "anatomy": ["Tablist", "Tabs (labels)", "Active underline (2px ink)"], "props": [["tabs", "{ id, label }[]", "Yes", "Tabs. Each tab has an id and a label."], ["activeTab", "string", "Yes", "Id of the active tab."], ["onTabChange", "(id) => void", "No — —", "Fires when a tab is activated (click or arrow keys)."]], "keyboard": [["Tab", "Move focus to the active tab. Inactive tabs are roving (tabindex -1)."], ["ArrowLeft / ArrowRight", "Move to the previous / next tab and activate it."], ["Home / End", "Move to the first / last tab and activate it."]], "invariants": ["Row: flex, gap 20px.", "Tabs: 13px, padding 14x6, transparent background, 2px bottom border.", "Active: ink, weight 700, 2px ink underline. Inactive: muted, transparent underline (no layout shift).", "Tabs use roving tabindex; only the active tab is in the Tab order.", "role=tablist/tab + aria-selected + aria-controls; panels use role=tabpanel.", "Selection is never color alone: weight + underline + aria-selected."], "contract": {"props": {"tabs": "array", "activeTab": "string", "onTabChange": "function?"}, "a11y": {"tablist": "role=tablist", "tab": "role=tab + aria-selected", "keyboard": "arrows + Home/End, roving tabindex"}}, "prompt": "Build a Huntington Toggle Tabs: flex row gap 20, tabs 13px padding 14x6, transparent bg, 2px bottom border (transparent inactive, ink active). Active: ink + weight 700. role=tablist/tab + aria-selected + aria-controls, roving tabindex, ArrowLeft/Right/Home/End move + activate.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/toggle-tabs.json", "code": "import { ToggleTabs } from \"@/components/ui/toggle-tabs\";\n\nexport function Views() {\n  return <ToggleTabs tabs={[{ id: \"one\", label: \"One\" }, { id: \"two\", label: \"Two\" }]} activeTab=\"one\" onTabChange={() => {}} />;\n}"}, {"id": "next-footer", "name": "Next Footer", "tagline": "The way onward. A hairline, then the next row.", "anatomy": ["Hairline top border", "Next row (List Row)"], "props": [["title", "string", "Yes", "Next page title, 16/600/-0.015 ink."], ["description", "string", "No — —", "Next page description, 15/1.5 muted."], ["meta", "string", "No — —", "Right-side meta, 13 muted."], ["href", "string", "Yes", "Next page destination."]], "keyboard": [["Tab", "Move focus to the link."], ["Enter", "Follow the link."]], "invariants": ["Margin-top 44px, hairline top border, padding-top 6px.", "The row mirrors List Row: title 16/600/-0.015, description 15/1.5 muted, meta 13 muted, padding 15x4.", "The row is a real <a> inside a <nav aria-label=\"Next\">.", "Next Footer sits after the page body and before the Footer."], "contract": {"props": {"title": "string", "description": "string?", "meta": "string?", "href": "string"}, "a11y": {"nav": "nav + aria-label Next", "row": "real link"}}, "prompt": "Build a Huntington Next Footer: nav aria-label Next, margin-top 44, hairline top border, padding-top 6, containing a List Row link (title 16/600/-0.015, description 15/1.5 muted, meta 13 muted, padding 15x4). The row is a real <a>.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/next-footer.json", "code": "import { NextFooter } from \"@/components/ui/next-footer\";\n\nexport function Next() {\n  return <NextFooter title=\"Next page\" description=\"What comes next\" meta=\"Next\" href=\"#/next\" />;\n}"}, {"id": "search", "name": "Search", "tagline": "Type to filter a list. Arrows move, Enter follows, Escape clears.", "anatomy": ["Input (search field, placeholder)", "Clear button (×, appears with text)", "Results (List Rows)", "Empty state (one line of text)"], "props": [["items", "Array<{ title, note, href }>", "Yes", "Rows to filter. Title and note are matched; href is followed on Enter."], ["placeholder", "string", "No — “Search”", "Hint text in the empty input."], ["emptyText", "string", "No — “No results.”", "Text shown when nothing matches."], ["onSelect", "(item) => void", "No — follow href", "Fires when a result is chosen. Default: follow the row link."]], "keyboard": [["Tab", "Move focus into the input."], ["Type", "Filter the list as you type."], ["ArrowDown / ArrowUp", "Move through results."], ["Enter", "Follow the focused result."], ["Escape", "Clear the query."]], "invariants": ["Filtering is client-side and immediate: every keystroke updates the list.", "Results are real List Rows: real links, same row anatomy.", "Empty state is text, never a blank list.", "Input is a real <input type=\"search\"> with a label; list is a listbox with options.", "Escape clears the query; it never closes the page."], "contract": {"props": {"items": "Array<{ title, note, href }>", "placeholder": "string", "emptyText": "string", "onSelect": "(item) => void"}, "a11y": {"input": "combobox with label, controls the listbox", "results": "listbox, one option per result", "clear": "button with aria-label \"Clear search\""}}, "prompt": "Build a Huntington Search: a hairline search input with placeholder text, a × clear button that appears when text is present, and results as List Rows that filter as you type. ArrowDown/ArrowUp move through results, Enter follows the focused result, Escape clears the query. Empty state is one line of text. The input is a real <input type=\"search\"> with a label; the list is a listbox with options.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/search.json", "code": "import { Search } from \"@/components/ui/search\";\n\nexport function Finder() {\n  return <Search items={[{ title: \"Header\", note: \"Wordmark left, mood control right.\", href: \"#/components/header\" }, { title: \"Menu Pill\", note: \"The floating pill that opens the menu sheet.\", href: \"#/components/menu-pill\" }]} />;\n}"}, {"id": "calendar", "name": "Calendar", "tagline": "Month grid. One button per day, min/max bounds.", "anatomy": ["Prev / Next month buttons", "Month / year heading (aria-live)", "Weekday header row (Su-Sa)", "Day buttons (one per day)", "Empty cells (outside the month)"], "props": [["value", "string | null", "No", "Selected day as an ISO date (YYYY-MM-DD), or null."], ["onChange", "(iso: string) => void", "Yes", "Fires with the picked day's ISO string."], ["min", "string", "No", "Earliest pickable day, ISO date. Earlier days are disabled."], ["max", "string", "No", "Latest pickable day, ISO date. Later days are disabled."]], "keyboard": [["Tab", "Move focus between the month buttons and the day buttons."], ["Enter / Space", "Pick the focused day, or move one month."]], "invariants": ["Dates are ISO strings only (YYYY-MM-DD). No Date objects in props, no locale parsing.", "Week starts Sunday. Month and day names are English.", "The displayed month starts at the value's month, or the current month when no value is set. It follows the value when the parent passes a new date in a different month.", "Prev/next move one month and do not call onChange.", "Days outside the current month render as empty cells (no buttons).", "Days outside min/max are disabled (disabled attribute + aria-disabled).", "The selected day has a 2px ink outline, a transparent background, and its aria-label ends with ', selected'. Today has aria-current=\"date\" plus a 1px muted outline.", "Tab + Enter/Space only. No roving tabindex, no arrow-key cell movement."], "contract": {"props": {"value": "string?", "onChange": "function", "min": "string?", "max": "string?"}, "a11y": {"grid": "semantic table + th scope=col weekday headers", "days": "one button per day, aria-label with ', selected' suffix, aria-current=date for today", "disabled": "disabled + aria-disabled for out-of-range days", "nav": "prev/next buttons with aria-labels, heading aria-live=polite"}}, "prompt": "Build a Huntington Calendar: a month grid for one ISO date (YYYY-MM-DD). Prev-month button (aria-label Previous month), month/year heading (aria-live polite), next-month button (aria-label Next month). A semantic table: weekday header row (Su Mo Tu We Th Fr Sa), one button per day, empty cells outside the month. Clicking a day calls onChange with that day's ISO string. Days outside min/max are disabled (disabled + aria-disabled). Selected day: 2px ink outline, transparent background, never filled + aria-label ending with ', selected'. Today: aria-current=date + 1px muted outline. Week starts Sunday, English names. Displayed month starts at the value's month or the current month and follows the value when the parent passes a new date in a different month; prev/next move one month and do not call onChange. ISO strings only, no locale parsing. Tab + Enter/Space only, no roving tabindex, no arrow keys.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/calendar.json", "code": "import { Calendar } from \"@/components/ui/calendar\";\n\nexport function Pick() {\n  return <Calendar value=\"2026-10-18\" onChange={(iso) => {}} />;\n}"}, {"id": "date-picker", "name": "DatePicker", "tagline": "Read-only input plus popover calendar. Clear, Today.", "anatomy": ["Label", "Read-only input (value or placeholder)", "Calendar button (opens / closes)", "Popover (Calendar + Clear + Today)"], "props": [["value", "string | null", "No", "Selected day as an ISO date (YYYY-MM-DD), or null."], ["onChange", "(iso: string | null) => void", "Yes", "Fires with the picked ISO string, or null on Clear."], ["label", "string", "No", "Label above the input. Default Date."], ["placeholder", "string", "No", "Hint text in the empty input. Default YYYY-MM-DD."], ["min", "string", "No", "Earliest pickable day, ISO date."], ["max", "string", "No", "Latest pickable day, ISO date."], ["clearable", "boolean", "No", "Show the Clear button when a value is set. Default true."], ["invalid", "boolean", "No", "Puts aria-invalid on the input. DateRangePicker uses it for the End input. Default false."]], "keyboard": [["Tab", "Move focus between the input, the Calendar button, and (when open) the popover controls."], ["Enter / Space", "Toggle the popover, pick a day, Clear, or Today."], ["Escape", "Close the popover and return focus to the Calendar button."]], "invariants": ["The input is read-only. Dates come from the Calendar only, so there is no free-text parsing to get wrong.", "Invalid value prop is treated as null (empty input, Calendar shows the current month).", "Selecting a day calls onChange and closes the popover.", "Clear calls onChange(null) and closes. It only renders when clearable and a value is set.", "Today sets today's ISO and closes. Today is disabled when today is outside min/max.", "Escape closes the popover and returns focus to the Calendar button. Clicking outside the picker closes it.", "The popover is a plain div, not a dialog: no modal behavior, no focus trap.", "ISO strings only, no locale parsing."], "contract": {"props": {"value": "string?", "onChange": "function", "label": "string", "placeholder": "string", "min": "string?", "max": "string?", "clearable": "boolean", "invalid": "boolean"}, "a11y": {"input": "read-only input with label, aria-invalid", "trigger": "button aria-label Open/Close calendar, aria-expanded, aria-controls", "popover": "div with Calendar + Clear + Today", "keyboard": "Escape closes, focus returns to trigger"}}, "prompt": "Build a Huntington DatePicker: a label + a read-only text input (value or placeholder YYYY-MM-DD) + a Calendar button (aria-label Open/Close calendar, aria-expanded, aria-controls) that toggles a popover div with a Calendar + Clear + Today. The input is read-only: dates come from the Calendar only, no free-text parsing. Selecting a day calls onChange and closes. Clear (only when clearable and a value is set) calls onChange(null) and closes. Today sets today's ISO and closes, and is disabled when today is outside min/max. Escape closes and returns focus to the button. Clicking outside the picker closes it. Invalid value prop is treated as null. ISO strings only, no locale parsing.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/date-picker.json", "code": "import { DatePicker } from \"@/components/ui/date-picker\";\n\nexport function Pick() {\n  return <DatePicker value=\"2026-10-18\" onChange={(iso) => {}} />;\n}"}, {"id": "time-picker", "name": "TimePicker", "tagline": "Trigger plus time listbox. 12-hour labels, HH:MM value.", "anatomy": ["Label", "Trigger button (value or Select time)", "Dropdown (ul role=listbox, one option per time)"], "props": [["value", "string | null", "No", "Selected time as HH:MM (24-hour), or null."], ["onChange", "(time: string | null) => void", "Yes", "Fires with the picked HH:MM string."], ["label", "string", "No", "Label above the trigger. Default Time."], ["step", "30 | 60", "No", "Minutes between options. Default 30. Anything else falls back to 30."]], "keyboard": [["Tab", "Move focus between the trigger and (when open) the option buttons."], ["Enter / Space", "Toggle the dropdown, or pick the focused option."], ["Escape", "Close the dropdown and return focus to the trigger."]], "invariants": ["Times are HH:MM 24-hour strings. The list shows 12-hour labels (12:00 AM, 1:00 PM); the value stays HH:MM.", "Options run 00:00 to 23:30 (step 30) or 23:00 (step 60).", "Invalid value prop is treated as null (trigger shows Select time, no option selected).", "A valid value that is not on the step grid still displays; no option is highlighted.", "Clicking an option calls onChange and closes.", "Escape closes and returns focus to the trigger. Clicking outside the picker closes it.", "Options are buttons. Tab moves through them, Enter selects. No arrow-key navigation."], "contract": {"props": {"value": "string?", "onChange": "function", "label": "string", "step": "30 | 60"}, "a11y": {"trigger": "button aria-haspopup=listbox, aria-expanded, aria-controls", "list": "ul role=listbox, li role=option aria-selected", "options": "buttons, Tab navigation, Enter selects", "display": "12-hour labels, value stays HH:MM"}}, "prompt": "Build a Huntington TimePicker: a label + a trigger button (value or Select time, aria-haspopup=listbox, aria-expanded, aria-controls) that toggles a dropdown ul role=listbox. Options are li role=option aria-selected, each holding a button. Step 30 gives 48 options (00:00 to 23:30), step 60 gives 24 (00:00 to 23:00). Labels are 12-hour (12:00 AM, 1:00 PM); the value stays HH:MM 24-hour. Clicking an option calls onChange and closes. Escape closes and returns focus to the trigger. Clicking outside the picker closes it. Options are buttons: Tab moves through them, Enter selects, no arrow keys. Invalid value prop is treated as null.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/time-picker.json", "code": "import { TimePicker } from \"@/components/ui/time-picker\";\n\nexport function Pick() {\n  return <TimePicker value=\"14:30\" onChange={(t) => {}} />;\n}"}, {"id": "date-range-picker", "name": "DateRangePicker", "tagline": "Two DatePickers, one range. End-before-start is an error.", "anatomy": ["Fieldset + legend (label)", "Start DatePicker", "End DatePicker", "Clear button", "Error message (role=alert, when invalid)"], "props": [["start", "string | null", "No", "Range start as an ISO date (YYYY-MM-DD), or null."], ["end", "string | null", "No", "Range end as an ISO date (YYYY-MM-DD), or null."], ["onChange", "({ start, end }) => void", "Yes", "Fires with the new pair on any valid change, or { start: null, end: null } on Clear."], ["label", "string", "No", "Legend for the fieldset. Default Date range."], ["min", "string", "No", "Earliest pickable day, ISO date. Passed to both DatePickers."], ["max", "string", "No", "Latest pickable day, ISO date. Passed to both DatePickers."], ["clearable", "boolean", "No", "Show the range Clear button when either date is set. Default true."]], "keyboard": [["Tab", "Move focus between the Start and End pickers and the Clear button."], ["Enter / Space", "Toggle a popover, pick a day, or Clear."], ["Escape", "Close the open popover and return focus to its Calendar button."]], "invariants": ["The range is two DatePickers (Start, End) with no per-picker Clear buttons; one range Clear button clears both.", "Same-day ranges are valid (end on or after start).", "When end is before start, an error message (role=alert) shows and the End input gets aria-invalid. onChange is NOT called with the invalid pair; the last valid pair stays.", "A stale error clears when the parent passes a new pair.", "Clear calls onChange({ start: null, end: null }).", "ISO strings only, no locale parsing."], "contract": {"props": {"start": "string?", "end": "string?", "onChange": "function", "label": "string", "min": "string?", "max": "string?", "clearable": "boolean"}, "a11y": {"group": "fieldset + legend", "error": "role=alert message + aria-invalid on End input, invalid pair never passed to onChange", "pickers": "two DatePickers, Start and End"}}, "prompt": "Build a Huntington DateRangePicker: a fieldset + legend (label) holding two DatePickers (Start, End, clearable false) + one range Clear button + an error message. Start and End are ISO dates (YYYY-MM-DD) or null. Changing either calls onChange with the new { start, end } pair. Same-day ranges are valid. When end is before start, show a role=alert error message and put aria-invalid on the End input; do NOT call onChange with the invalid pair; the last valid pair stays. A stale error clears when the parent passes a new pair. Clear calls onChange({ start: null, end: null }). ISO strings only, no locale parsing.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/date-range-picker.json", "code": "import { DateRangePicker } from \"@/components/ui/date-range-picker\";\n\nexport function Pick() {\n  return <DateRangePicker start=\"2026-10-01\" end=\"2026-10-15\" onChange={(pair) => {}} />;\n}"}, {"id": "chart","name": "Chart","tagline": "Bar, line, area, pie, donut. One series, SVG + data table.","anatomy": ["SVG chart (bars, line, area, or slices)","Value axis (ticks + gridlines, bar/line/area only)","Category axis (labels, bar/line/area only)","Legend (pie/donut only: swatch + label + value + percent)","Data table (caption + Label/Value, Percent for pie/donut)"],"props": [["type","\"bar\" | \"line\" | \"area\" | \"pie\" | \"donut\"","No","Chart type."],["data","{ label: string, value: number }[]","Yes","One series. Values are non-negative; negatives are treated as 0."],["title","string","No","Chart title. Used in the table caption and the SVG aria-label."],["height","number","No","SVG height in px. Width is 100% via viewBox. Minimum 120."],["showTable","boolean","No","Render the accessible data table under the chart."]],"keyboard": [["None","Not interactive. No keyboard behavior. The data table is read with a screen reader or scrolled; it has no focusable controls."]],"invariants": ["One series only. No multi-series, tooltips, zoom, or animation.","Values are non-negative. Negative values are treated as 0. Empty data, all-zero data, or a zero total (pie/donut) renders 'No data.'","Bar/line/area share one axis system: value ticks at 0, 25%, 50%, 75%, 100% of max, rounded to a clean step. Horizontal gridlines. Category labels under each point.","Bar: vertical bars, value label on each bar. Line: polyline + dots + value labels. Area: line + filled area under the line.","Pie: slices proportional to values, label + percent at centroids. Donut: center hole + total in the center, plus a legend (swatch + label + value + percent).","Slice labels sit at centroids and can crowd on tiny slices. Long category labels truncate in the SVG; the full label is always in the table.","Colors come from Huntington tokens: ink for bars/lines, live/pulse/status-active/status-offline/ink for pie slices. All fills read in all five moods.","The SVG is presentational (role=img + aria-label, shapes aria-hidden). The data table is the accessible representation."],"contract": {"props": {"type": ["bar","line","area","pie","donut"],"data": "array","title": "string?","height": "number","showTable": "boolean"},"a11y": {"chart": "svg role=img + aria-label, shapes aria-hidden","table": "semantic table + caption + th scope","color": "values in table + slice text labels, never color alone"}},"prompt": "Build a Huntington Chart: one series, SVG + data table. Types bar, line, area, pie, donut. Bar/line/area share one axis system (value ticks at 0, 25%, 50%, 75%, 100% of max rounded to a clean step, horizontal gridlines, category labels). Bar has value labels on bars; line has a polyline + dots + value labels; area adds the fill under the line. Pie slices are proportional with label + percent at centroids; donut adds a center hole + total in the center, plus a legend (swatch + label + value + percent). Colors from Huntington tokens: ink for bars/lines, live/pulse/status-active/status-offline/ink for pie slices. The SVG is role=img + a one-line summary aria-label, shapes aria-hidden; the semantic table (caption + th scope, Percent column for pie/donut) is the accessible representation. One series only, no tooltips, zoom, or animation. Empty, all-zero, or zero-total data renders 'No data.' Slice labels can crowd on tiny slices; long labels truncate in the SVG, full label in the table.","cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/chart.json","code": "import { Chart } from \"@/components/ui/chart\";\n\nexport function Sales() {\n  const data = [{ label: \"Jan\", value: 42 }, { label: \"Feb\", value: 87 }, { label: \"Mar\", value: 15 }, { label: \"Apr\", value: 63 }];\n  return <Chart type=\"bar\" data={data} title=\"Sales\" />;\n}"}, {"id": "data-grid", "name": "DataGrid", "tagline": "Sortable, filterable, pageable data grid.", "anatomy": ["Toolbar (Export CSV + selected count)", "Header row (sort buttons + pin toggles)", "Filter row (per-column inputs)", "Group header (collapsible, when groupBy)", "Data rows (cells + selection checkbox)", "Pagination (prev/next, page indicator, page-size selector)"], "props": [["columns", "{ key, label, sortable?, width?, align? }[]", "Yes", "Column definitions. align is left, right, or center."], ["rows", "object[]", "Yes", "Rows, keyed by column key."], ["rowKey", "string", "No - id", "Unique key field for selection and identity."], ["pageSize", "number", "No - 10", "Rows per page. Selector offers 10 / 25 / 50 / 100."], ["selectable", "boolean", "No - false", "Enables row selection with checkboxes."], ["groupBy", "string", "No", "Column key to group rows by."], ["initialSort", "{ key, direction: asc | desc }", "No", "Initial sort. Click a header to cycle asc, desc, none."]], "keyboard": [["Tab", "Move through sort buttons, filter inputs, pin toggles, checkboxes, group toggles, pagination, and export."], ["Enter / Space", "On a sort button: cycle asc, desc, none. On a checkbox: toggle selection. On a pin toggle: pin or unpin. On a group toggle: collapse or expand."], ["Type", "Filter inputs filter that column by substring, case-insensitive."]], "invariants": ["Semantic table: caption with row count, thead, tbody, th scope col, first column th scope row. No role grid, no roving tabindex, no arrow-key navigation.", "Sort: button in th cycles asc, desc, none; aria-sort on th. Only columns with sortable not false sort. Sorting resets to page 1.", "Filter: per-column text input in the filter row, substring match, case-insensitive. Filtering resets to page 1. A filter that matches nothing renders a live-red message, never a blank table.", "Pagination: prev/next, Page X of Y, page-size selector 10, 25, 50, 100. Only the current page renders. Pagination is the virtualization; there is no separate virtualized scroll window. Page-size changes reset to page 1.", "Selection (selectable): checkbox column, header select-all, aria-selected on rows, N selected count (aria-live polite). Selection persists across pages.", "Pinning: pin toggle in th, aria-pressed, pinned columns render first with position sticky left and a card background. At least one column stays unpinned.", "Grouping (groupBy): filter, then group, then sort within groups. Group header button with aria-expanded plus count. Collapsed groups hide their rows but still occupy page slots, so a collapsed group can leave a page short. Grouping changes reset to page 1.", "CSV export: Export CSV downloads the filtered plus sorted set (before pagination) as a .csv file, commas, quotes, and newlines escaped.", "Selected rows: check plus ink outline plus aria-selected, never a fill, never color alone.", "Controls are outlined: Export, Previous, Next, and the page-size select use hairline borders and card backgrounds. Selected and pinned states use ink outlines and underlines, never fills."], "contract": {"format": "oeste.component.v1", "component": "DataGrid", "props": {"columns": "array", "rows": "array", "rowKey": "string", "pageSize": "number", "selectable": "boolean", "groupBy": "string?", "initialSort": "object?"}, "a11y": {"table": "semantic table + caption + th scope", "sort": "button in th + aria-sort", "filter": "input + aria-label", "select": "checkbox + aria-selected", "group": "button + aria-expanded", "pin": "button + aria-pressed"}}, "prompt": "Build a Huntington DataGrid: semantic table with caption, sort buttons in th with aria-sort cycling asc, desc, none, per-column filter inputs in a filter row, pagination with Page X of Y plus page-size 10/25/50/100 (only the current page renders), selectable checkboxes with aria-selected plus N selected count, pin toggles with aria-pressed (pinned columns render first, sticky left, card background, at least one column stays unpinned), collapsible group headers with aria-expanded plus count (collapsed groups hide their rows but still occupy page slots), grouping changes reset to page 1, CSV export of the filtered plus sorted set with commas, quotes, and newlines escaped. Selected rows use a check plus ink outline plus aria-selected, never a fill, never color alone. Controls are outlined hairline plus card, never filled. Pagination is the virtualization; do not claim a separate virtualized scroll window. No role grid, no roving tabindex, no arrow keys.", "cli": "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/data-grid.json", "code": "import { DataGrid } from \"@/components/ui/data-grid\";\n\nexport function Grid() {\n  const columns = [{ key: \"name\", label: \"Name\", sortable: true }, { key: \"status\", label: \"Status\" }];\n  const rows = [{ id: \"1\", name: \"Item A\", status: \"Open\" }, { id: \"2\", name: \"Item B\", status: \"Done\" }];\n  return <DataGrid columns={columns} rows={rows} selectable />;\n}"}];

/* Docs-site search: one box on the Components page filters the component
   list by name, tagline, id, and registry tag. Results are the same stacked
   List Rows as the full list, and each result links to its component page.
   The menu sheet links here with ?search=1, and Cmd/Ctrl+K jumps here too.
   Registry tags mirror TAGS in scripts/build_registry.py. */
const SEARCH_TAGS = {
  "back-link": "links", "calendar": "lists", "carousel": "cards", "chart": "lists",
  "data-grid": "lists", "date-picker": "lists", "date-range-picker": "lists",
  "equalizer-bars": "indicators", "favorite-accordion": "lists", "file-grid-cell": "cards",
  "filter-pill": "pills", "footer": "chrome", "gallery": "cards", "header": "chrome",
  "lede": "hero", "lightbox": "overlays", "list-row": "lists", "live-badge": "pills",
  "live-hero": "hero", "live-pulse-dot": "indicators", "logo-card": "cards",
  "logo-cell": "cards", "media-card": "overlays", "menu-bottom-sheet": "overlays",
  "menu-pill": "links", "mood-button": "chrome", "next-footer": "chrome",
  "page-title": "hero", "photo-card": "cards", "photo-tile": "cards",
  "playlist-row": "lists", "progress-bar": "links", "qa-accordion": "lists",
  "reaction-button": "pills", "search": "lists", "section-title": "sections",
  "standfirst": "hero", "stat": "indicators", "status-dot": "pills",
  "status-pill": "pills", "status-row": "lists", "tag": "pills",
  "text-link": "links", "time-picker": "lists", "toggle-tabs": "links",
  "view-all": "links"
};
function componentSearchHay(c) {
  return (c.name + " " + c.tagline + " " + c.id.replace(/-/g, " ") + " " + (SEARCH_TAGS[c.id] || "")).toLowerCase();
}
function componentSearchResults(query) {
  const terms = String(query || "").trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return COMPONENTS;
  return COMPONENTS.filter((c) => { const hay = componentSearchHay(c); return terms.every((t) => hay.includes(t)); });
}
function componentRowsHTML(list) {
  if (!list.length) return '<p class="muted" style="margin-top:16px">No components match. Try another term.</p>';
  return list.map((c) => '<a class="h-listrow h-listrow--stacked" href="#/components/' + c.id + '"><span class="h-rowtop"><span class="h-rowtitle">' + esc(c.name) + '</span> <span class="h-rowmeta">v0.2.0</span></span><span class="h-rowdesc">' + esc(c.tagline) + '</span></a>').join("");
}
function componentSearchHTML() {
  return '<div class="h-search"><label class="sr-only" for="componentSearchInput">Search components</label><input type="search" id="componentSearchInput" placeholder="Search components" aria-label="Search components" autocomplete="off"><button type="button" id="componentSearchClear" aria-label="Clear search" hidden>×</button></div>'
    + '<p class="muted" style="margin:12px 0 0">Type to filter the list. Enter opens the first match. Escape clears.</p>'
    + '<p class="muted" id="componentSearchCount" aria-live="polite" style="margin:12px 0 0">' + COMPONENTS.length + ' components</p>';
}
function bindComponentSearch() {
  const input = document.getElementById("componentSearchInput");
  const results = document.getElementById("componentSearchResults");
  const count = document.getElementById("componentSearchCount");
  const clear = document.getElementById("componentSearchClear");
  if (!input || !results) return;
  const apply = () => {
    const list = componentSearchResults(input.value);
    results.innerHTML = componentRowsHTML(list);
    if (count) count.textContent = input.value.trim() ? list.length + " of " + COMPONENTS.length + " components" : COMPONENTS.length + " components";
    if (clear) clear.hidden = !input.value;
  };
  input.addEventListener("input", apply);
  if (clear) clear.addEventListener("click", () => { input.value = ""; apply(); input.focus(); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { input.value = ""; apply(); }
    if (e.key === "Enter") { const first = results.querySelector("a"); if (first) location.hash = first.getAttribute("href"); }
    if (e.key === "ArrowDown") { const first = results.querySelector("a"); if (first) { e.preventDefault(); first.focus(); } }
  });
  results.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    const links = [...results.querySelectorAll("a")];
    const i = links.indexOf(document.activeElement);
    e.preventDefault();
    if (e.key === "ArrowDown" && links[i + 1]) links[i + 1].focus();
    if (e.key === "ArrowUp") (links[i - 1] || input).focus();
  });
}

const MOOD_SWATCHES = [{"mood": "paper", "paper": "#f6f4f1", "card": "#fffdf9", "ink": "#1c1917", "muted": "#756e6a"}, {"mood": "ink", "paper": "#151412", "card": "#1e1d1b", "ink": "#f0ede8", "muted": "#a09a93"}, {"mood": "rose", "paper": "#f8efeb", "card": "#fffbf9", "ink": "#2a211d", "muted": "#7a6a62"}, {"mood": "sage", "paper": "#edf0ea", "card": "#fbfdfa", "ink": "#1d211c", "muted": "#676e67"}, {"mood": "dune", "paper": "#f3e9d7", "card": "#faf3e4", "ink": "#2b2114", "muted": "#76674b"}];
const MOOD_PAIRS = {"paper": {"inkPaper": "15.93", "mutedPaper": "4.56", "inkCard": "17.21", "mutedCard": "4.93"}, "ink": {"inkPaper": "15.77", "mutedPaper": "6.61", "inkCard": "14.42", "mutedCard": "6.05"}, "rose": {"inkPaper": "13.90", "mutedPaper": "4.56", "inkCard": "15.31", "mutedCard": "5.02"}, "sage": {"inkPaper": "14.19", "mutedPaper": "4.56", "inkCard": "15.96", "mutedCard": "5.13"}, "dune": {"inkPaper": "13.12", "mutedPaper": "4.58", "inkCard": "14.29", "mutedCard": "4.99"}};
const DEMOS = {"header": "<div class=\"demo\"><p class=\"demo-caption\">Real header. The dot cycles the site mood.</p><div class=\"h-header\"><a class=\"h-wordmark\" href=\"#/components\"><span class=\"h-mark\" aria-hidden=\"true\"></span><span>Brand</span></a><button type=\"button\" class=\"h-moodbtn\" data-mood-cycle aria-label=\"Mood: Paper. Cycle to the next mood.\"><span class=\"h-dot\" aria-hidden=\"true\"></span></button></div></div>", "mood-button": "<div class=\"demo\"><p class=\"demo-caption\">Real control. Tap the dot to cycle Paper, Ink, Rose, Sage, Dune.</p><button type=\"button\" class=\"h-moodbtn\" data-mood-cycle aria-label=\"Mood: Paper. Cycle to the next mood.\"><span class=\"h-dot\" aria-hidden=\"true\"></span></button><p class=\"muted\" id=\"demoMoodOut\" aria-live=\"polite\" style=\"margin-top:12px\">Mood: Paper</p></div>", "live-hero": "<div class=\"demo\"><p class=\"demo-caption\">Type, not a mockup.</p><div class=\"h-hero\"><h1>Live hero headline goes here</h1><p class=\"h-sub\">Hero sub copy goes here.</p></div></div>", "lede": "<div class=\"demo\"><p class=\"h-lede\">Lede copy goes here.</p></div>", "standfirst": "<div class=\"demo\"><p class=\"h-standfirst\">Standfirst copy goes here.</p></div>", "page-title": "<div class=\"demo\"><div class=\"h-ptitle\"><h1>Page title</h1><p class=\"h-meta\">Meta</p></div></div>", "section-title": "<div class=\"demo\"><div class=\"h-sectitle\"><h2>Section title</h2><span class=\"h-note\">Note</span></div></div>", "list-row": "<div class=\"demo\"><p class=\"demo-caption\">Real rows — inline (three columns with meta, two without) and stacked (title + version, description below). Tab to one, Enter follows it.</p><a class=\"h-listrow\" href=\"#/components/list-row\"><span><span class=\"h-rowtitle\">Row title</span> <span class=\"h-rowdesc\">Row description</span></span><span class=\"h-rowmeta\">Meta</span></a><a class=\"h-listrow\" href=\"#/components/list-row\"><span><span class=\"h-rowtitle\">Second row</span> <span class=\"h-rowdesc\">Another description</span></span></a><a class=\"h-listrow h-listrow--stacked\" href=\"#/components/list-row\"><span class=\"h-rowtop\"><span class=\"h-rowtitle\">Stacked row</span> <span class=\"h-rowmeta\">v0.2.0</span></span><span class=\"h-rowdesc\">Description below the title.</span></a></div>", "status-row": "<div class=\"demo\"><div class=\"h-statusrow\"><span class=\"h-slabel\">Label</span><span class=\"h-svalue\">Value</span></div><div class=\"h-statusrow\"><span class=\"h-slabel\">Status</span><span class=\"h-svalue\">Active</span></div></div>", "playlist-row": "<div class=\"demo\"><p class=\"demo-caption\">Real control. Enter or Space expands the tracks.</p><div class=\"h-playlist\"><button type=\"button\" class=\"h-playrow\" data-playlist aria-expanded=\"false\" aria-controls=\"demoTracks\"><span class=\"h-thumb\" aria-hidden=\"true\"></span><span class=\"h-playtext\"><span class=\"h-rowtitle\">Playlist title</span><span class=\"h-rowmeta\">Meta</span></span><span class=\"h-chevron\" aria-hidden=\"true\">\\u2304</span></button><div id=\"demoTracks\" hidden><p class=\"h-track\">01&nbsp;&nbsp;Track title</p><p class=\"h-track\">02&nbsp;&nbsp;Track title</p><p class=\"h-track\">03&nbsp;&nbsp;Track title</p></div></div></div>", "favorite-accordion": "<div class=\"demo\"><p class=\"demo-caption\">Real control. Enter or Space toggles.</p><div class=\"h-fav\"><button type=\"button\" class=\"h-favhead\" data-acc aria-expanded=\"false\" aria-controls=\"demoFavBody\"><span aria-hidden=\"true\">\\u2304</span><span class=\"h-rowtitle\">Favorite</span></button><div id=\"demoFavBody\" hidden><div class=\"h-detail\"><span>Label</span><span>Value</span></div><div class=\"h-detail\"><span>Label</span><span>Value</span></div></div></div></div>", "qa-accordion": "<div class=\"demo\"><p class=\"demo-caption\">Real control. Enter or Space toggles.</p><div class=\"h-qa\"><button type=\"button\" class=\"h-qaq\" data-acc aria-expanded=\"false\" aria-controls=\"demoQaBody\">Question goes here?</button><p id=\"demoQaBody\" class=\"h-qaa\" hidden>Answer copy goes here.</p></div></div>", "photo-card": "<div class=\"demo\"><p class=\"demo-caption\">All four variants, real gradients.</p><div class=\"demo-row\"><div class=\"h-photocard h-pc-default\"><span class=\"h-orb\" aria-hidden=\"true\"></span><span class=\"h-pclabel\"><span class=\"h-pctitle\">Card title</span><span class=\"h-pcsub\">Card subtitle</span></span></div><div class=\"h-photocard h-pc-blue\"><span class=\"h-orb\" aria-hidden=\"true\"></span><span class=\"h-pclabel\"><span class=\"h-pctitle\">Card title</span><span class=\"h-pcsub\">Card subtitle</span></span></div></div></div>", "file-grid-cell": "<div class=\"demo\"><div style=\"display:grid;grid-template-columns:repeat(2,max-content);gap:18px 12px\"><div class=\"h-filecell\"><span class=\"h-fileart\" aria-hidden=\"true\"></span><span class=\"h-filename\">filename.jpg</span><span class=\"h-filemeta\">Meta</span></div><div class=\"h-filecell\"><span class=\"h-fileart\" aria-hidden=\"true\"></span><span class=\"h-filename\">notes.txt</span><span class=\"h-filemeta\">Meta</span></div></div></div>", "logo-cell": "<div class=\"demo\"><div class=\"h-logocell\"><span class=\"h-logo\">Brand</span></div></div>", "logo-card": "<div class=\"demo\"><div class=\"demo-row\"><div class=\"h-logocard\"><span class=\"h-logomark\">Brand</span></div><div class=\"h-logocard h-logocard-dark\"><span class=\"h-logomark\">Brand</span></div></div></div>", "carousel": "<div class=\"demo\"><p class=\"demo-caption\">Scroll sideways. Native scroll-snap.</p><div class=\"h-carousel\"><span class=\"h-carimg\" aria-hidden=\"true\"></span><span class=\"h-carimg\" aria-hidden=\"true\"></span><span class=\"h-carimg\" aria-hidden=\"true\"></span></div></div>", "photo-tile": "<div class=\"demo\"><div class=\"h-phototile\"><span class=\"h-tileart\" aria-hidden=\"true\"></span><span class=\"h-tilename\">Photo name</span><span class=\"h-tilecat\">Category</span></div></div>", "gallery": "<div class=\"demo\"><div class=\"h-gallery\"><div class=\"h-galhead\"><span>Gallery</span><span class=\"muted\">12</span></div><div class=\"h-galgrid\"><span class=\"h-galart\" aria-hidden=\"true\"></span><span class=\"h-galart\" aria-hidden=\"true\"></span><span class=\"h-galart\" aria-hidden=\"true\"></span></div></div></div>", "filter-pill": "<div class=\"demo\"><p class=\"demo-caption\">Real controls. Tap to toggle.</p><div class=\"demo-row\"><button type=\"button\" class=\"h-filterpill\" data-filter aria-pressed=\"false\">Filter</button><button type=\"button\" class=\"h-filterpill active\" data-filter aria-pressed=\"true\">Filter</button></div></div>", "status-pill": "<div class=\"demo\"><div class=\"demo-row\"><span class=\"h-statuspill\"><span class=\"h-dot7 h-dot-active\" aria-hidden=\"true\"></span>Active</span><span class=\"h-statuspill\"><span class=\"h-dot7 h-dot-idle\" aria-hidden=\"true\"></span>Idle</span><span class=\"h-statuspill\"><span class=\"h-dot7 h-dot-offline\" aria-hidden=\"true\"></span>Offline</span></div></div>", "status-dot": "<div class=\"demo\"><span class=\"h-statusdot\"><span class=\"h-dot7 h-dot-active\" aria-hidden=\"true\"></span>Active</span></div>", "tag": "<div class=\"demo\"><div class=\"demo-row\"><span class=\"h-tag\">Tag</span><span class=\"h-tag\">Field notes</span></div></div>", "live-badge": "<div class=\"demo\"><span class=\"h-livebadge\"><span class=\"h-dot8\" aria-hidden=\"true\"></span>LIVE</span></div>", "reaction-button": "<div class=\"demo\"><p class=\"demo-caption\">Real controls. Tap a circle to vote.</p><div class=\"demo-row\"><div class=\"h-react\"><button type=\"button\" class=\"h-reactcircle\" data-react aria-pressed=\"false\" aria-label=\"React\">+</button><span class=\"h-reactlabel\">React</span><span class=\"h-reactcap\">Caption</span></div><div class=\"h-react\"><button type=\"button\" class=\"h-reactcircle\" data-react aria-pressed=\"true\" aria-label=\"React\">+</button><span class=\"h-reactlabel voted\">React</span><span class=\"h-reactcap\">Caption</span></div></div></div>", "text-link": "<div class=\"demo\"><a class=\"h-textlink\" href=\"#/components/text-link\">Visit</a></div>", "back-link": "<div class=\"demo\"><a class=\"h-backlink\" href=\"#/components\">\\u2190 Back</a></div>", "view-all": "<div class=\"demo\"><a class=\"h-viewall\" href=\"#/components/view-all\">View all</a></div>", "progress-bar": "<div class=\"demo\"><p class=\"demo-caption\">Real control. Advance the bar.</p><p style=\"margin:0 0 8px\"><strong>Upload</strong> — <span id=\"demoProgressLabel\">65%</span></p><div class=\"h-progress\" role=\"progressbar\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-label=\"Upload progress\"><div class=\"h-progressfill\" id=\"demoProgressFill\" style=\"width:65%\"></div></div><button type=\"button\" class=\"btn btn-secondary\" style=\"margin-top:16px\" data-progress-advance>Advance 10%</button></div>", "menu-pill": "<div class=\"demo\"><p class=\"demo-caption\">Real control. Opens the sheet below.</p><button type=\"button\" class=\"h-menupill\" data-menu-open aria-expanded=\"false\" aria-controls=\"demoSheet\">Menu</button><div id=\"demoSheet\" class=\"h-sheet\" hidden><span class=\"h-grabbar\" aria-hidden=\"true\"></span><p class=\"h-sheetlabel\">Section</p><a class=\"h-sheetrow\" href=\"#/components/menu-bottom-sheet\"><span class=\"h-sheettitle\">Row title</span><span class=\"h-sheetnote\">Note</span></a><a class=\"h-sheetrow\" href=\"#/components/menu-bottom-sheet\"><span class=\"h-sheetleft\"><span class=\"h-sheettitle\">Row title</span><span class=\"h-dot7ink\" aria-hidden=\"true\"></span></span><span class=\"h-sheetnote\">Note</span></a></div></div>", "lightbox": "<div class=\"demo\"><p class=\"demo-caption\">Real control. Open it, then Escape closes.</p><button type=\"button\" class=\"btn btn-secondary\" data-lightbox-open>Open lightbox</button><div id=\"demoLightbox\" class=\"h-lightbox\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Image 1 of 12\" hidden><button type=\"button\" class=\"h-lbclose\" data-lightbox-close aria-label=\"Close lightbox\">\\u00d7</button><span class=\"h-lbimg\" aria-hidden=\"true\"></span><button type=\"button\" class=\"h-lbbtn h-lbprev\" data-lightbox-prev aria-label=\"Previous image\">\\u2039</button><button type=\"button\" class=\"h-lbbtn h-lbnext\" data-lightbox-next aria-label=\"Next image\">\\u203a</button><span class=\"h-lbcount\" id=\"demoLbCount\">1 / 12</span></div></div>", "menu-bottom-sheet": "<div class=\"demo\"><p class=\"demo-caption\">Real rows. Escape closes when open via the Menu Pill.</p><div class=\"h-sheet\"><span class=\"h-grabbar\" aria-hidden=\"true\"></span><p class=\"h-sheetlabel\">Section</p><a class=\"h-sheetrow\" href=\"#/components/menu-bottom-sheet\"><span class=\"h-sheettitle\">Row title</span><span class=\"h-sheetnote\">Note</span></a><a class=\"h-sheetrow\" href=\"#/components/menu-bottom-sheet\"><span class=\"h-sheetleft\"><span class=\"h-sheettitle\">Active row</span><span class=\"h-dot7ink\" aria-hidden=\"true\"></span></span><span class=\"h-sheetnote\">Note</span></a></div></div>", "media-card": "<div class=\"demo\"><div class=\"h-mediacard\"><p class=\"h-mcstatus\">Status bar</p><div class=\"h-mccaption\"><p class=\"h-mctitle\">Card title</p><p class=\"h-mcbody\">Caption copy goes here.</p></div></div></div>", "live-pulse-dot": "<div class=\"demo\"><p class=\"demo-caption\">Paired with text, as the invariant requires.</p><p style=\"margin:0;display:flex;align-items:center;gap:8px\"><span class=\"h-pulse\" aria-hidden=\"true\"><span class=\"h-pulsering\" aria-hidden=\"true\"></span><span class=\"h-pulsedot\" aria-hidden=\"true\"></span></span> Live</p></div>", "equalizer-bars": "<div class=\"demo\"><p style=\"margin:0;display:flex;align-items:center;gap:8px\"><span class=\"h-eq\" role=\"img\" aria-label=\"Now playing\"><span aria-hidden=\"true\"></span><span aria-hidden=\"true\"></span><span aria-hidden=\"true\"></span><span aria-hidden=\"true\"></span></span> Now playing</p></div>", "stat": "<div class=\"demo\"><div class=\"h-stat\"><span class=\"h-statlabel\">Metric</span><span class=\"h-statrow\"><span class=\"h-statnum\">7.4</span><span class=\"h-statunit\">units</span></span></div></div>", "footer": "<div class=\"demo\"><div class=\"h-footer\">\\u00a9 2026 Brand name \\u00b7 Footer copy goes here.</div></div>", "toggle-tabs": "<div class=\"demo\"><p class=\"demo-caption\">Real control. Click or use Arrow keys to switch tabs.</p><div class=\"h-tabs\" role=\"tablist\" aria-label=\"Demo tabs\"><button type=\"button\" class=\"h-tab active\" role=\"tab\" aria-selected=\"true\" data-tab>One</button><button type=\"button\" class=\"h-tab\" role=\"tab\" aria-selected=\"false\" data-tab tabindex=\"-1\">Two</button><button type=\"button\" class=\"h-tab\" role=\"tab\" aria-selected=\"false\" data-tab tabindex=\"-1\">Three</button></div><p class=\"muted\" style=\"margin:12px 0 0\">Tab One is active.</p></div>", "next-footer": "<div class=\"demo\"><nav class=\"h-nextfooter\" aria-label=\"Next\"><a class=\"h-listrow\" href=\"#/components/next-footer\"><span><span class=\"h-rowtitle\">Next page</span> <span class=\"h-rowdesc\">What comes next</span></span><span class=\"h-rowmeta\">Next</span></a></nav></div>", "search": "<div class=\"demo\"><p class=\"demo-caption\">Type to filter. Arrows move, Enter follows, Escape clears.</p><div class=\"h-search\"><input type=\"search\" data-search-input placeholder=\"Search\" aria-label=\"Search components\" autocomplete=\"off\"><button type=\"button\" data-search-clear aria-label=\"Clear search\" hidden>×</button></div><div data-search-results><a class=\"h-listrow\" data-search-row href=\"#/components/header\"><span><span class=\"h-rowtitle\">Header</span> <span class=\"h-rowdesc\">Wordmark left, mood control right.</span></span><span class=\"h-rowmeta\">Component</span></a><a class=\"h-listrow\" data-search-row href=\"#/components/mood-button\"><span><span class=\"h-rowtitle\">Mood Button</span> <span class=\"h-rowdesc\">One dot. Five moods. Tap to cycle.</span></span><span class=\"h-rowmeta\">Component</span></a><a class=\"h-listrow\" data-search-row href=\"#/components/list-row\"><span><span class=\"h-rowtitle\">List Row</span> <span class=\"h-rowdesc\">Title, description, meta. A real link.</span></span><span class=\"h-rowmeta\">Component</span></a><a class=\"h-listrow\" data-search-row href=\"#/components/menu-pill\"><span><span class=\"h-rowtitle\">Menu Pill</span> <span class=\"h-rowdesc\">The floating pill that opens the menu sheet.</span></span><span class=\"h-rowmeta\">Component</span></a><a class=\"h-listrow\" data-search-row href=\"#/components/search\"><span><span class=\"h-rowtitle\">Search</span> <span class=\"h-rowdesc\">Type to filter a list.</span></span><span class=\"h-rowmeta\">Component</span></a><a class=\"h-listrow\" data-search-row href=\"#/components/filter-pill\"><span><span class=\"h-rowtitle\">Filter Pill</span> <span class=\"h-rowdesc\">A filter you can tap.</span></span><span class=\"h-rowmeta\">Component</span></a></div><p class=\"muted\" data-search-empty hidden>No results.</p></div>", "calendar": "<div class=\"demo\"><p class=\"demo-caption\">Real grid. Tab to a day, Enter picks it.</p><div style=\"width:100%;max-width:340px\"><div style=\"display:flex;align-items:center;justify-content:space-between\"><button type=\"button\" aria-label=\"Previous month\" style=\"min-height:44px;min-width:44px;border:0;background:transparent;font-size:20px;line-height:1;color:var(--color-ink);-webkit-appearance:none;appearance:none\">‹</button><div aria-live=\"polite\" style=\"font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-ink)\">October 2026</div><button type=\"button\" aria-label=\"Next month\" style=\"min-height:44px;min-width:44px;border:0;background:transparent;font-size:20px;line-height:1;color:var(--color-ink);-webkit-appearance:none;appearance:none\">›</button></div><table class=\"cal-grid\" style=\"width:100%;border-collapse:collapse;margin-top:8px\"><thead><tr style=\"border-bottom:1px solid var(--color-line)\"><th scope=\"col\" style=\"padding:6px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-muted)\">Su</th><th scope=\"col\" style=\"padding:6px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-muted)\">Mo</th><th scope=\"col\" style=\"padding:6px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-muted)\">Tu</th><th scope=\"col\" style=\"padding:6px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-muted)\">We</th><th scope=\"col\" style=\"padding:6px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-muted)\">Th</th><th scope=\"col\" style=\"padding:6px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-muted)\">Fr</th><th scope=\"col\" style=\"padding:6px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-muted)\">Sa</th></tr></thead><tbody><tr style=\"border-bottom:1px solid var(--color-line)\"><td style=\"border:1px solid var(--color-line)\"></td><td style=\"border:1px solid var(--color-line)\"></td><td style=\"border:1px solid var(--color-line)\"></td><td style=\"border:1px solid var(--color-line)\"></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 1, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">1</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 2, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">2</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 3, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">3</button></td></tr><tr style=\"border-bottom:1px solid var(--color-line)\"><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 4, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">4</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 5, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">5</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 6, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">6</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 7, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">7</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 8, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">8</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 9, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">9</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 10, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">10</button></td></tr><tr style=\"border-bottom:1px solid var(--color-line)\"><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 11, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">11</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 12, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">12</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 13, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">13</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 14, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">14</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 15, 2026, selected\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;background:transparent;color:var(--color-ink);font-weight:700;border:2px solid var(--color-ink);-webkit-appearance:none;appearance:none\">15</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 16, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">16</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 17, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">17</button></td></tr><tr style=\"border-bottom:1px solid var(--color-line)\"><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-current=\"date\" aria-label=\"October 18, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid var(--color-muted);font-weight:600;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">18</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 19, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">19</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 20, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">20</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 21, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">21</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 22, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">22</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 23, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">23</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 24, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">24</button></td></tr><tr style=\"border-bottom:1px solid var(--color-line)\"><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 25, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">25</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 26, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">26</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 27, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">27</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 28, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">28</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 29, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">29</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 30, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">30</button></td><td style=\"border:1px solid var(--color-line);padding:0;text-align:center\"><button type=\"button\" aria-label=\"October 31, 2026\" style=\"display:flex;align-items:center;justify-content:center;width:100%;height:44px;border-radius:8px;font-size:13px;border:1px solid transparent;color:var(--color-ink);background:transparent;-webkit-appearance:none;appearance:none\">31</button></td></tr></tbody></table></div></div>", "date-picker": "<div class=\"demo\"><p class=\"demo-caption\">Read-only input. The Calendar button opens the popover.</p><div data-dp style=\"position:relative\"><div><label style=\"display:block;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-ink)\">Date</label><div style=\"margin-top:4px;display:flex;flex-direction:column;gap:8px;position:relative\"><input data-dp-input type=\"text\" readonly value=\"2026-10-15\" placeholder=\"YYYY-MM-DD\" aria-invalid=\"false\" style=\"min-height:44px;width:100%;max-width:320px;border-radius:12px;border:1px solid var(--color-border);background:var(--color-surface);padding:0 12px;font-size:16px;line-height:1;color:var(--color-ink)\"><button data-dp-trigger type=\"button\" aria-label=\"Open calendar\" aria-expanded=\"false\" style=\"min-height:44px;width:100%;max-width:320px;border-radius:12px;border:1px solid var(--color-border);background:var(--color-card);padding:8px 12px;font-size:13px;color:var(--color-ink)\">Calendar</button><div data-dp-pop hidden></div></div></div></div></div>", "time-picker": "<div class=\"demo\"><p class=\"demo-caption\">Trigger shows the value. The listbox opens on tap.</p><div data-tp data-tp-value=\"14:30\" style=\"position:relative\"><label style=\"display:block;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-ink)\">Time</label><button data-tp-trigger type=\"button\" aria-haspopup=\"listbox\" aria-expanded=\"false\" style=\"margin-top:4px;min-height:44px;width:100%;max-width:320px;border-radius:12px;border:1px solid var(--color-border);background:var(--color-surface);padding:8px 12px;text-align:left;font-size:16px;line-height:1;color:var(--color-ink)\">2:30 PM</button><ul data-tp-list hidden role=\"listbox\" aria-label=\"Times\"></ul></div></div>", "date-range-picker": "<div class=\"demo\"><p class=\"demo-caption\">Two pickers, one range. End before start is an error.</p><fieldset data-dr style=\"margin:0;border:0;padding:0\"><legend style=\"font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-ink)\">Date range</legend><div style=\"margin-top:4px;display:flex;flex-direction:column;align-items:stretch;gap:16px\"><div data-dp><label style=\"display:block;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-ink)\">Start</label><div style=\"margin-top:4px;display:flex;flex-direction:column;gap:8px;position:relative\"><input data-dp-input type=\"text\" readonly value=\"2026-10-01\" placeholder=\"YYYY-MM-DD\" aria-invalid=\"false\" style=\"min-height:44px;width:100%;max-width:320px;border-radius:12px;border:1px solid var(--color-border);background:var(--color-surface);padding:0 12px;font-size:16px;line-height:1;color:var(--color-ink)\"><button data-dp-trigger type=\"button\" aria-label=\"Open calendar\" aria-expanded=\"false\" style=\"min-height:44px;width:100%;max-width:320px;border-radius:12px;border:1px solid var(--color-border);background:var(--color-card);padding:8px 12px;font-size:13px;color:var(--color-ink)\">Calendar</button><div data-dp-pop hidden></div></div></div><div data-dp><label style=\"display:block;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-ink)\">End</label><div style=\"margin-top:4px;display:flex;flex-direction:column;gap:8px;position:relative\"><input data-dp-input type=\"text\" readonly value=\"2026-10-15\" placeholder=\"YYYY-MM-DD\" aria-invalid=\"false\" style=\"min-height:44px;width:100%;max-width:320px;border-radius:12px;border:1px solid var(--color-border);background:var(--color-surface);padding:0 12px;font-size:16px;line-height:1;color:var(--color-ink)\"><button data-dp-trigger type=\"button\" aria-label=\"Open calendar\" aria-expanded=\"false\" style=\"min-height:44px;width:100%;max-width:320px;border-radius:12px;border:1px solid var(--color-border);background:var(--color-card);padding:8px 12px;font-size:13px;color:var(--color-ink)\">Calendar</button><div data-dp-pop hidden></div></div></div></div><p data-dr-error role=\"alert\" hidden style=\"margin-top:16px;font-size:13px;color:var(--color-live)\"></p><button data-dr-clear type=\"button\" style=\"margin-top:16px;min-height:44px;width:100%;max-width:320px;border-radius:12px;border:1px solid var(--color-border);background:var(--color-card);padding:8px 12px;font-size:13px;color:var(--color-ink)\">Clear</button></fieldset></div>", "chart": "<div class=\"demo\"><p class=\"demo-caption\">Static bar chart plus the data table. Bars read in every mood.</p><div style=\"overflow-x:auto\"><svg role=\"img\" aria-label=\"Bar chart demo: 5 categories, values from 20 to 100.\" viewBox=\"0 0 640 240\" width=\"100%\" style=\"display:block;overflow:visible\"><g aria-hidden=\"true\"><line x1=\"40\" x2=\"624\" y1=\"212\" y2=\"212\" style=\"stroke:var(--color-line)\" stroke-width=\"1\" /><line x1=\"40\" x2=\"624\" y1=\"162\" y2=\"162\" style=\"stroke:var(--color-line)\" stroke-width=\"1\" /><line x1=\"40\" x2=\"624\" y1=\"112\" y2=\"112\" style=\"stroke:var(--color-line)\" stroke-width=\"1\" /><line x1=\"40\" x2=\"624\" y1=\"62\" y2=\"62\" style=\"stroke:var(--color-line)\" stroke-width=\"1\" /><line x1=\"40\" x2=\"624\" y1=\"12\" y2=\"12\" style=\"stroke:var(--color-line)\" stroke-width=\"1\" /><text x=\"34\" y=\"216\" text-anchor=\"end\" style=\"fill:var(--color-muted);font-size:11px\">0</text><text x=\"34\" y=\"166\" text-anchor=\"end\" style=\"fill:var(--color-muted);font-size:11px\">25</text><text x=\"34\" y=\"116\" text-anchor=\"end\" style=\"fill:var(--color-muted);font-size:11px\">50</text><text x=\"34\" y=\"66\" text-anchor=\"end\" style=\"fill:var(--color-muted);font-size:11px\">75</text><text x=\"34\" y=\"16\" text-anchor=\"end\" style=\"fill:var(--color-muted);font-size:11px\">100</text><rect x=\"78\" y=\"172\" width=\"40\" height=\"40\" style=\"fill:var(--color-ink)\" /><rect x=\"195\" y=\"132\" width=\"40\" height=\"80\" style=\"fill:var(--color-ink)\" /><rect x=\"312\" y=\"92\" width=\"40\" height=\"120\" style=\"fill:var(--color-ink)\" /><rect x=\"429\" y=\"52\" width=\"40\" height=\"160\" style=\"fill:var(--color-ink)\" /><rect x=\"546\" y=\"12\" width=\"40\" height=\"200\" style=\"fill:var(--color-ink)\" /><text x=\"98\" y=\"167\" text-anchor=\"middle\" style=\"fill:var(--color-ink);font-size:11px\">20</text><text x=\"215\" y=\"127\" text-anchor=\"middle\" style=\"fill:var(--color-ink);font-size:11px\">40</text><text x=\"332\" y=\"87\" text-anchor=\"middle\" style=\"fill:var(--color-ink);font-size:11px\">60</text><text x=\"449\" y=\"47\" text-anchor=\"middle\" style=\"fill:var(--color-ink);font-size:11px\">80</text><text x=\"566\" y=\"7\" text-anchor=\"middle\" style=\"fill:var(--color-ink);font-size:11px\">100</text><text x=\"98\" y=\"230\" text-anchor=\"middle\" style=\"fill:var(--color-ink);font-size:11px\">A</text><text x=\"215\" y=\"230\" text-anchor=\"middle\" style=\"fill:var(--color-ink);font-size:11px\">B</text><text x=\"332\" y=\"230\" text-anchor=\"middle\" style=\"fill:var(--color-ink);font-size:11px\">C</text><text x=\"449\" y=\"230\" text-anchor=\"middle\" style=\"fill:var(--color-ink);font-size:11px\">D</text><text x=\"566\" y=\"230\" text-anchor=\"middle\" style=\"fill:var(--color-ink);font-size:11px\">E</text></g></svg></div><table style=\"margin-top:12px;width:100%;border-collapse:collapse\"><caption style=\"text-align:left;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-muted)\">Bar chart demo. The table lists every value shown in the chart.</caption><thead><tr><th scope=\"col\" style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-muted)\">Label</th><th scope=\"col\" style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-muted)\">Value</th></tr></thead><tbody><tr><th scope=\"row\" style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;text-align:left;font-size:13px;font-weight:600;color:var(--color-ink)\">A</th><td style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;font-size:13px;color:var(--color-ink)\">20</td></tr><tr><th scope=\"row\" style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;text-align:left;font-size:13px;font-weight:600;color:var(--color-ink)\">B</th><td style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;font-size:13px;color:var(--color-ink)\">40</td></tr><tr><th scope=\"row\" style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;text-align:left;font-size:13px;font-weight:600;color:var(--color-ink)\">C</th><td style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;font-size:13px;color:var(--color-ink)\">60</td></tr><tr><th scope=\"row\" style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;text-align:left;font-size:13px;font-weight:600;color:var(--color-ink)\">D</th><td style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;font-size:13px;color:var(--color-ink)\">80</td></tr><tr><th scope=\"row\" style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;text-align:left;font-size:13px;font-weight:600;color:var(--color-ink)\">E</th><td style=\"border-bottom:1px solid var(--color-line);padding:10px 12px;font-size:13px;color:var(--color-ink)\">100</td></tr></tbody></table></div>", "data-grid": "<div class=\"demo\"><p class=\"demo-caption\">Real grid. Sort, filter, page, select, pin, group, export. 12 rows.</p><div style=\"display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:12px\"><button type=\"button\" data-hgrid-export class=\"copy-btn secondary\">Export CSV</button><p aria-live=\"polite\" data-hgrid-selected class=\"muted\" style=\"margin:0;font-size:13px\">0 selected</p><button type=\"button\" data-hgrid-group aria-pressed=\"false\" class=\"copy-btn secondary\">Group by status</button></div><div style=\"overflow-x:auto\"><table style=\"width:100%;border-collapse:collapse\"><caption class=\"muted\" style=\"text-align:left;font-size:13px\">Data grid demo. Sort with the header buttons, filter with the filter row, page with the pagination controls.</caption><thead data-hgrid-head></thead><tbody data-hgrid-body></tbody></table></div><div style=\"display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:12px\"><button type=\"button\" data-hgrid-prev class=\"copy-btn secondary\">Previous</button><span data-hgrid-page class=\"muted\" style=\"font-size:13px\">Page 1 of 3</span><button type=\"button\" data-hgrid-next class=\"copy-btn secondary\">Next</button><label class=\"muted\" style=\"font-size:13px\">Rows per page <select data-hgrid-pagesize aria-label=\"Rows per page\"><option value=\"5\">5</option><option value=\"10\">10</option></select></label></div></div>"};
const VARIANTS = {"photo-card": "<h2>Variants</h2><p>Four gradient + orb pairs. Same size, same label, same radius.</p><div class=\"variant-matrix\"><div class=\"variant-row\"><span class=\"variant-label\">Default</span><div class=\"variant-demos\"><div class=\"h-photocard h-pc-default\"><span class=\"h-orb\" aria-hidden=\"true\"></span><span class=\"h-pclabel\"><span class=\"h-pctitle\">Card title</span><span class=\"h-pcsub\">Card subtitle</span></span></div></div></div><div class=\"variant-row\"><span class=\"variant-label\">Blue</span><div class=\"variant-demos\"><div class=\"h-photocard h-pc-blue\"><span class=\"h-orb\" aria-hidden=\"true\"></span><span class=\"h-pclabel\"><span class=\"h-pctitle\">Card title</span><span class=\"h-pcsub\">Card subtitle</span></span></div></div></div><div class=\"variant-row\"><span class=\"variant-label\">Rose</span><div class=\"variant-demos\"><div class=\"h-photocard h-pc-rose\"><span class=\"h-orb\" aria-hidden=\"true\"></span><span class=\"h-pclabel\"><span class=\"h-pctitle\">Card title</span><span class=\"h-pcsub\">Card subtitle</span></span></div></div></div><div class=\"variant-row\"><span class=\"variant-label\">Green</span><div class=\"variant-demos\"><div class=\"h-photocard h-pc-green\"><span class=\"h-orb\" aria-hidden=\"true\"></span><span class=\"h-pclabel\"><span class=\"h-pctitle\">Card title</span><span class=\"h-pcsub\">Card subtitle</span></span></div></div></div></div>", "filter-pill": "<h2>Variants</h2><p>Default and Active. State is fill + label, and aria-pressed.</p><div class=\"variant-matrix\"><div class=\"variant-row\"><span class=\"variant-label\">Default</span><div class=\"variant-demos\"><button type=\"button\" class=\"h-filterpill\" aria-pressed=\"false\">Filter</button></div></div><div class=\"variant-row\"><span class=\"variant-label\">Active</span><div class=\"variant-demos\"><button type=\"button\" class=\"h-filterpill active\" aria-pressed=\"true\">Filter</button></div></div></div>", "status-pill": "<h2>Variants</h2><p>Three statuses. Meaning in the label text, never the dot alone.</p><div class=\"variant-matrix\"><div class=\"variant-row\"><span class=\"variant-label\">Active</span><div class=\"variant-demos\"><span class=\"h-statuspill\"><span class=\"h-dot7 h-dot-active\" aria-hidden=\"true\"></span>Active</span></div></div><div class=\"variant-row\"><span class=\"variant-label\">Idle</span><div class=\"variant-demos\"><span class=\"h-statuspill\"><span class=\"h-dot7 h-dot-idle\" aria-hidden=\"true\"></span>Idle</span></div></div><div class=\"variant-row\"><span class=\"variant-label\">Offline</span><div class=\"variant-demos\"><span class=\"h-statuspill\"><span class=\"h-dot7 h-dot-offline\" aria-hidden=\"true\"></span>Offline</span></div></div></div>", "reaction-button": "<h2>Variants</h2><p>Default and Voted. Voted adds the 2px underline under the label.</p><div class=\"variant-matrix\"><div class=\"variant-row\"><span class=\"variant-label\">Default</span><div class=\"variant-demos\"><div class=\"h-react\"><button type=\"button\" class=\"h-reactcircle\" aria-pressed=\"false\" aria-label=\"React\">+</button><span class=\"h-reactlabel\">React</span><span class=\"h-reactcap\">Caption</span></div></div></div><div class=\"variant-row\"><span class=\"variant-label\">Voted</span><div class=\"variant-demos\"><div class=\"h-react\"><button type=\"button\" class=\"h-reactcircle\" aria-pressed=\"true\" aria-label=\"React\">+</button><span class=\"h-reactlabel voted\">React</span><span class=\"h-reactcap\">Caption</span></div></div></div></div>", "progress-bar": "<h2>Variants</h2><p>Empty, half, full. The bar never stands alone — each row pairs it with visible value text.</p><div class=\"variant-matrix\"><div class=\"variant-row\"><span class=\"variant-label\">0%</span><div class=\"variant-demos\"><div class=\"h-progress\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-label=\"Upload progress\"><div class=\"h-progressfill\" style=\"width:0%\"></div></div><span>0%</span></div></div><div class=\"variant-row\"><span class=\"variant-label\">50%</span><div class=\"variant-demos\"><div class=\"h-progress\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-label=\"Upload progress\"><div class=\"h-progressfill\" style=\"width:50%\"></div></div><span>50%</span></div></div><div class=\"variant-row\"><span class=\"variant-label\">100%</span><div class=\"variant-demos\"><div class=\"h-progress\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-label=\"Upload progress\"><div class=\"h-progressfill\" style=\"width:100%\"></div></div><span>100%</span></div></div></div>", "status-dot": "<h2>Variants</h2><p>Three statuses, inline.</p><div class=\"variant-matrix\"><div class=\"variant-row\"><span class=\"variant-label\">Active</span><div class=\"variant-demos\"><span class=\"h-statusdot\"><span class=\"h-dot7 h-dot-active\" aria-hidden=\"true\"></span>Active</span></div></div><div class=\"variant-row\"><span class=\"variant-label\">Idle</span><div class=\"variant-demos\"><span class=\"h-statusdot\"><span class=\"h-dot7 h-dot-idle\" aria-hidden=\"true\"></span>Idle</span></div></div><div class=\"variant-row\"><span class=\"variant-label\">Offline</span><div class=\"variant-demos\"><span class=\"h-statusdot\"><span class=\"h-dot7 h-dot-offline\" aria-hidden=\"true\"></span>Offline</span></div></div></div>", "logo-card": "<h2>Variants</h2><p>Default card surface and the dark variant (#141210).</p><div class=\"variant-matrix\"><div class=\"variant-row\"><span class=\"variant-label\">Default</span><div class=\"variant-demos\"><div class=\"h-logocard\"><span class=\"h-logomark\">Brand</span></div></div></div><div class=\"variant-row\"><span class=\"variant-label\">Dark</span><div class=\"variant-demos\"><div class=\"h-logocard h-logocard-dark\"><span class=\"h-logomark\">Brand</span></div></div></div></div>"};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const $ = (sel) => document.querySelector(sel);

const GUIDE_PAGES = [
  { route: "getting-started", title: "Getting started", note: "Install, moods, troubleshooting" },
  { route: "tokens", title: "Tokens", note: "Moods, type, spacing" },
  { route: "accessibility", title: "Accessibility", note: "Keyboard, contrast" },
  { route: "patterns", title: "Patterns", note: "Components, detail, overlay" },
  { route: "faq", title: "FAQ", note: "Questions, answered" },
  { route: "changelog", title: "Changelog", note: "What changed" },
  { route: "migration", title: "Migration", note: "Adopting Huntington" },
];
const MENU_ROUTES = [
  { route: "components", title: "Components", note: COMPONENTS.length + " components" },
  { route: "components?search=1", title: "Search components", note: "Find a component" },
  { route: "guides", title: "Guides", note: GUIDE_PAGES.length + " guides" },
  ...GUIDE_PAGES,
];

function openMenu() {
  const sheet = document.getElementById("menuSheet");
  const scrim = document.getElementById("menuScrim");
  const pill = document.getElementById("menuPill");
  sheet.hidden = false; scrim.hidden = false;
  pill.setAttribute("aria-expanded", "true");
  sheet.focus();
}
function closeMenu() {
  const sheet = document.getElementById("menuSheet");
  const scrim = document.getElementById("menuScrim");
  const pill = document.getElementById("menuPill");
  if (!sheet || sheet.hidden) return;
  sheet.hidden = true; scrim.hidden = true;
  pill.setAttribute("aria-expanded", "false");
  pill.focus();
}
function pageTitleFor(route, id) {
  if (route === "components") {
    const c = COMPONENTS.find((x) => x.id === id);
    return c ? c.name : "Components";
  }
  if (route === "guides") return "Guides";
  if (route === "home") return "Home";
  if (route === "setup") return "Getting started";
  const g = GUIDE_PAGES.find((x) => x.route === route);
  return g ? g.title : "Components";
}
function updateMenuLabels(route, id) {
  const title = pageTitleFor(route, id);
  const pillLabel = document.getElementById("menuPillLabel");
  const sheetLabel = document.getElementById("menuSheetLabel");
  if (pillLabel) pillLabel.textContent = title;
  if (sheetLabel) sheetLabel.textContent = title;
  const rows = document.getElementById("menuSheetRows");
  if (rows) rows.innerHTML = MENU_ROUTES.map((r) => {
    const active = r.route === route || (r.route === "getting-started" && route === "setup");
    return '<a class="h-sheetrow" href="#/' + r.route + '"><span class="h-sheetleft"><span class="h-sheettitle">' + esc(r.title) + "</span>" + (active ? '<span class="h-dot7ink" aria-hidden="true"></span>' : "") + '</span><span class="h-sheetnote">' + esc(r.note) + "</span></a>";
  }).join("");
}
function guideNextFooter(route) {
  const i = GUIDE_PAGES.findIndex((r) => r.route === route);
  if (i === -1) return "";
  const next = i + 1 < GUIDE_PAGES.length ? GUIDE_PAGES[i + 1] : { route: "components", title: "Components", note: COMPONENTS.length + " components" };
  return '<nav class="h-nextfooter" aria-label="Next"><a class="h-listrow" href="#/' + next.route + '"><span><span class="h-rowtitle">' + esc(next.title) + '</span> <span class="h-rowdesc">' + esc(next.note) + '</span></span><span class="h-rowmeta">Next</span></a></nav>';
}

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

function currentMood() { return document.documentElement.dataset.theme || "paper"; }
function setMood(mood) {
  document.documentElement.dataset.theme = mood;
  localStorage.setItem("huntington-mood", mood);
  const cap = mood.charAt(0).toUpperCase() + mood.slice(1);
  const btn = document.getElementById("moodToggle");
  if (btn) btn.setAttribute("aria-label", "Mood: " + cap + ". Cycle to the next mood.");
  document.querySelectorAll("[data-mood-cycle]").forEach((b) => b.setAttribute("aria-label", "Mood: " + cap + ". Cycle to the next mood."));
  const out = document.getElementById("demoMoodOut");
  if (out) out.textContent = "Mood: " + cap;
}
function cycleMood() {
  const next = MOODS[(MOODS.indexOf(currentMood()) + 1) % MOODS.length];
  setMood(next);
}
function parseHash() {
  const raw = location.hash.replace(/^#\/?/, "") || "home";
  const [path, query] = raw.split("?");
  const params = new URLSearchParams(query || "");
  const parts = path.split("/");
  return { route: parts[0] || "home", id: parts[1] || "", lens: params.get("lens") || "human", search: params.get("search") === "1" };
}
function lensLink(route, id, lens) {
  const base = route === "components" ? "#/components/" + id : "#/" + route;
  return base + "?lens=" + lens;
}
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => showToast((label || "Copied") + " to clipboard."));
}
function showToast(msg) {
  const region = document.getElementById("toastRegion");
  region.innerHTML = '<div class="site-toast" role="status"><p style="margin:0;flex:1">' + esc(msg) + '</p><button type="button" class="copy-btn secondary" data-toast-dismiss>Dismiss</button></div>';
  region.querySelector("[data-toast-dismiss]").addEventListener("click", () => { region.innerHTML = ""; });
}
function lensTabs(route, id, lens) {
  const lenses = [["human", "Human", "Understand the details"], ["agent", "Agent", "Machine-readable spec"], ["vibe", "Vibe", "Copy and ship"]];
  const tabs = lenses.map(([key, label]) => '<button type="button" class="h-tab' + (lens === key ? " active" : "") + '" role="tab" aria-selected="' + (lens === key) + '" data-lens-tab data-href="' + lensLink(route, id, key) + '"' + (lens === key ? "" : ' tabindex="-1"') + ">" + label + "</button>").join("");
  return '<div class="h-tabs" role="tablist" aria-label="Perspective">' + tabs + "</div>"
    + '<p class="muted">' + esc(lenses.find(([k]) => k === lens)[2]) + "</p>";
}
function demoHTML(c) { return DEMOS[c.id] || ""; }
function variantsHTML(c) { return VARIANTS[c.id] || ""; }
/* Picker demo wiring: the DatePicker, TimePicker, and DateRangePicker demos
   are live controls. Each [data-dp] unit gets a popover month calendar built
   by JS; each [data-tp] unit gets a listbox. Open popovers portal to
   document.body (position fixed) so no ancestor stacking context can trap
   them behind later page sections; each [data-dr] fieldset
   coordinates two units plus a Clear button and an end-before-start alert.
   Day styling mirrors the real Calendar component: a true hairline grid,
   selected days get a 2px ink outline and are never filled, today gets a
   muted hairline. */
var DP_MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var DP_WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var DP_STYLE = {
  range: false,
  card: "background:var(--color-card);border:1px solid var(--color-line);border-radius:12px;padding:12px;width:340px;max-width:calc(100vw - 48px);",
  headBtn: "background:transparent;border:0;min-width:44px;min-height:44px;font-size:20px;line-height:1;color:var(--color-ink);cursor:pointer;",
  headLabel: "font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-ink);",
  th: "padding:6px 0;text-align:center;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-muted);border-bottom:1px solid var(--color-line);",
  td: "border:1px solid var(--color-line);padding:0;text-align:center;",
  day: "display:flex;align-items:center;justify-content:center;width:100%;min-height:44px;font-size:13px;border:2px solid transparent;border-radius:8px;background:transparent;color:var(--color-ink);cursor:pointer;",
  daySelected: "border-color:var(--color-ink);font-weight:700;",
  dayInRange: "",
  dayToday: "border-color:var(--color-muted);font-weight:600;",
  footBtn: "min-height:44px;padding:8px 12px;border:1px solid var(--color-border);border-radius:12px;background:var(--color-card);color:var(--color-ink);font-size:13px;cursor:pointer;",
  list: "background:var(--color-card);border:1px solid var(--color-line);border-radius:12px;padding:8px;max-height:240px;overflow:auto;width:100%;max-width:320px;list-style:none;margin:4px 0 0;",
  optBtn: "display:block;width:100%;text-align:left;background:transparent;border:0;min-height:44px;padding:8px 12px;font-size:16px;color:var(--color-ink);cursor:pointer;border-radius:8px;",
  optSel: "outline:2px solid var(--color-ink);outline-offset:-2px;font-weight:700;"
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
  document.querySelectorAll("[data-mood-cycle]").forEach((b) => b.addEventListener("click", cycleMood));
  document.querySelectorAll("[data-acc]").forEach((t) => t.addEventListener("click", () => {
    const open = t.getAttribute("aria-expanded") === "true";
    t.setAttribute("aria-expanded", String(!open));
    document.getElementById(t.getAttribute("aria-controls")).hidden = open;
  }));
  document.querySelectorAll("[data-playlist]").forEach((t) => t.addEventListener("click", () => {
    const open = t.getAttribute("aria-expanded") === "true";
    t.setAttribute("aria-expanded", String(!open));
    document.getElementById(t.getAttribute("aria-controls")).hidden = open;
  }));
  document.querySelectorAll("[data-filter]").forEach((b) => b.addEventListener("click", () => {
    const on = b.getAttribute("aria-pressed") === "true";
    b.setAttribute("aria-pressed", String(!on));
    b.classList.toggle("active", !on);
  }));
  document.querySelectorAll("[data-search-input]").forEach((input) => {
    const demo = input.closest(".demo");
    if (!demo) return;
    const clear = demo.querySelector("[data-search-clear]");
    const rows = Array.from(demo.querySelectorAll("[data-search-row]"));
    const empty = demo.querySelector("[data-search-empty]");
    const visible = () => rows.filter((r) => !r.hidden);
    const apply = () => {
      const q = input.value.trim().toLowerCase();
      let shown = 0;
      rows.forEach((r) => {
        const hit = !q || r.textContent.toLowerCase().includes(q);
        r.hidden = !hit;
        if (hit) shown++;
      });
      if (empty) empty.hidden = shown > 0;
      if (clear) clear.hidden = !input.value;
    };
    input.addEventListener("input", apply);
    if (clear) clear.addEventListener("click", () => { input.value = ""; apply(); input.focus(); });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { input.value = ""; apply(); }
      if (e.key === "ArrowDown") { const v = visible(); if (v.length) { e.preventDefault(); v[0].focus(); } }
    });
    rows.forEach((r) => r.addEventListener("keydown", (e) => {
      const v = visible();
      const i = v.indexOf(r);
      if (e.key === "ArrowDown" && v[i + 1]) { e.preventDefault(); v[i + 1].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); (v[i - 1] || input).focus(); }
    }));
  });
  document.querySelectorAll("[data-react]").forEach((b) => b.addEventListener("click", () => {
    const on = b.getAttribute("aria-pressed") === "true";
    b.setAttribute("aria-pressed", String(!on));
    const label = b.parentElement.querySelector(".h-reactlabel");
    if (label) label.classList.toggle("voted", !on);
  }));
  document.querySelectorAll("[data-menu-open]").forEach((b) => b.addEventListener("click", () => {
    const sheet = document.getElementById(b.getAttribute("aria-controls"));
    const open = sheet.hidden;
    sheet.hidden = !open;
    b.setAttribute("aria-expanded", String(open));
  }));
  const lb = document.getElementById("demoLightbox");
  let lbIndex = 1;
  const lbTotal = 12;
  const lbCount = () => {
    const el = document.getElementById("demoLbCount");
    if (el) el.textContent = lbIndex + " / " + lbTotal;
    if (lb) lb.setAttribute("aria-label", "Image " + lbIndex + " of " + lbTotal);
  };
  document.querySelectorAll("[data-lightbox-open]").forEach((b) => b.addEventListener("click", () => { if (lb) lb.hidden = false; }));
  document.querySelectorAll("[data-lightbox-close]").forEach((b) => b.addEventListener("click", () => { if (lb) lb.hidden = true; }));
  document.querySelectorAll("[data-lightbox-prev]").forEach((b) => b.addEventListener("click", () => { lbIndex = lbIndex === 1 ? lbTotal : lbIndex - 1; lbCount(); }));
  document.querySelectorAll("[data-lightbox-next]").forEach((b) => b.addEventListener("click", () => { lbIndex = lbIndex === lbTotal ? 1 : lbIndex + 1; lbCount(); }));
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (lb && !lb.hidden) lb.hidden = true;
    document.querySelectorAll("[data-menu-open][aria-expanded='true']").forEach((b) => {
      const sheet = document.getElementById(b.getAttribute("aria-controls"));
      if (sheet) sheet.hidden = true;
      b.setAttribute("aria-expanded", "false");
    });
  });
  const progBtn = document.querySelector("[data-progress-advance]");
  if (progBtn) progBtn.addEventListener("click", () => {
    const track = document.querySelector(".h-progress");
    const next = Math.min(100, parseInt(track.getAttribute("aria-valuenow"), 10) + 10);
    track.setAttribute("aria-valuenow", String(next));
    document.getElementById("demoProgressFill").style.width = next + "%";
    document.getElementById("demoProgressLabel").textContent = next + "%";
  });
  document.querySelectorAll("[data-lens-tab]").forEach((b) => b.addEventListener("click", () => { location.hash = b.dataset.href; }));
  document.querySelectorAll("[data-lens-tab]").forEach((b) => b.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const tabs = [...document.querySelectorAll("[data-lens-tab]")];
    const i = tabs.indexOf(b);
    const next = e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length] : e.key === "ArrowLeft" ? tabs[(i - 1 + tabs.length) % tabs.length] : e.key === "Home" ? tabs[0] : tabs[tabs.length - 1];
    location.hash = next.dataset.href;
  }));
  document.querySelectorAll("[data-tab]").forEach((b) => b.addEventListener("click", () => {
    const tabs = [...document.querySelectorAll("[data-tab]")];
    tabs.forEach((t) => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); t.setAttribute("tabindex", "-1"); });
    b.classList.add("active"); b.setAttribute("aria-selected", "true"); b.removeAttribute("tabindex");
    const label = b.closest(".demo").querySelector(".muted");
    if (label) label.textContent = "Tab " + b.textContent + " is active.";
  }));
  document.querySelectorAll("[data-tab]").forEach((b) => b.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const tabs = [...document.querySelectorAll("[data-tab]")];
    const i = tabs.indexOf(b);
    const next = e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length] : e.key === "ArrowLeft" ? tabs[(i - 1 + tabs.length) % tabs.length] : e.key === "Home" ? tabs[0] : tabs[tabs.length - 1];
    next.click(); next.focus();
  }));
  document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", () => copyText(b.dataset.copy, "Copied")));
  const patSave = document.querySelector("[data-pattern-save]");
  if (patSave) patSave.addEventListener("click", () => showToast("Saved. Nothing was sent or stored."));
  const gridBody = document.querySelector("[data-hgrid-body]");
  if (gridBody) {
    const gridTable = gridBody.closest("table");
    const gridHead = document.querySelector("[data-hgrid-head]");
    const gCols = ["name", "status", "score"];
    const gLabels = { name: "Name", status: "Status", score: "Score" };
    const gRows = [
      { id: "1", name: "Item A", status: "Open", score: 42 },
      { id: "2", name: "Item B", status: "Done", score: 87 },
      { id: "3", name: "Item C", status: "Open", score: 15 },
      { id: "4", name: "Item D", status: "Done", score: 63 },
      { id: "5", name: "Item E", status: "Open", score: 91 },
      { id: "6", name: "Item F", status: "Done", score: 28 },
      { id: "7", name: 'Item G, "quoted"', status: "Open", score: 55 },
      { id: "8", name: "Item H", status: "Done", score: 74 },
      { id: "9", name: "Item I", status: "Open", score: 33 },
      { id: "10", name: "Item J", status: "Done", score: 68 },
      { id: "11", name: "Item K", status: "Open", score: 49 },
      { id: "12", name: "Item L", status: "Done", score: 81 }
    ];
    let gSort = null;
    let gDir = null;
    let gPage = 1;
    let gPerPage = 5;
    const gFilters = {};
    const gSelected = new Set();
    let gPinned = [];
    let gGrouped = false;
    const gCollapsed = new Set();
    const gCell = (v) => (v == null ? "" : String(v));
    const gCompare = (a, b) => {
      if (typeof a === "number" && typeof b === "number") return a - b;
      return String(a).localeCompare(String(b), undefined, { sensitivity: "base" });
    };
    const gOrdered = () => {
      let list = gRows.filter((r) => gCols.every((k) => {
        const f = (gFilters[k] || "").trim().toLowerCase();
        return !f || gCell(r[k]).toLowerCase().includes(f);
      }));
      if (gSort) {
        const dir = gDir === "desc" ? -1 : 1;
        list = [...list].sort((x, y) => dir * gCompare(x[gSort], y[gSort]));
      }
      return list;
    };
    const gRender = () => {
      const ae = document.activeElement;
      const focusedFilter = ae && ae.matches && ae.matches("[data-hgrid-filter]") ? ae.getAttribute("data-hgrid-filter") : null;
      const list = gOrdered();
      const totalPages = Math.max(1, Math.ceil(list.length / gPerPage));
      gPage = Math.min(gPage, totalPages);
      const pageRows = list.slice((gPage - 1) * gPerPage, gPage * gPerPage);
      const visible = [...gPinned, ...gCols.filter((k) => !gPinned.includes(k))];
      const offsets = {};
      let left = 0;
      gPinned.forEach((k) => { offsets[k] = left; left += 160; });
      let head = '<tr><th scope="col" style="border-bottom:1px solid var(--color-line);background:var(--color-card);padding:10px 12px"><input type="checkbox" data-hgrid-select-all aria-label="Select all rows"></th>';
      visible.forEach((k) => {
        const sorted = gSort === k;
        const pinnedCol = gPinned.includes(k);
        const canPin = pinnedCol || gPinned.length < gCols.length - 1;
        head += '<th scope="col" data-hgrid-th="' + k + '" aria-sort="' + (sorted ? (gDir === "asc" ? "ascending" : "descending") : "none") + '" style="border-bottom:1px solid var(--color-line);background:var(--color-card);padding:10px 12px;width:160px;min-width:160px' + (pinnedCol ? ';position:sticky;left:' + offsets[k] + 'px;z-index:2' : '') + '"><span style="display:flex;align-items:center;gap:8px"><button type="button" data-hgrid-sort="' + k + '" style="text-align:left;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-ink)' + (sorted ? ';text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px' : '') + '">' + gLabels[k] + (sorted ? (gDir === "asc" ? " ↑" : " ↓") : "") + '</button><button type="button" data-hgrid-pin="' + k + '" aria-pressed="' + pinnedCol + '"' + (canPin ? '' : ' disabled title="At least one column must stay unpinned"') + ' style="font-size:11px;color:' + (pinnedCol ? 'var(--color-ink)' : 'var(--color-muted)') + (pinnedCol ? ';font-weight:700;border-bottom:2px solid var(--color-ink)' : '') + '">Pin</button></span></th>';
      });
      head += '</tr><tr><td style="border-bottom:1px solid var(--color-line);background:var(--color-card);padding:8px 12px"></td>';
      visible.forEach((k) => {
        head += '<td style="border-bottom:1px solid var(--color-line);background:var(--color-card);padding:8px 12px' + (gPinned.includes(k) ? ';position:sticky;left:' + offsets[k] + 'px;z-index:2' : '') + '"><input type="text" data-hgrid-filter="' + k + '" value="' + esc(gFilters[k] || "") + '" placeholder="Filter ' + gLabels[k] + '" aria-label="Filter ' + gLabels[k] + '" style="width:100%;border:1px solid var(--color-border);border-radius:12px;background:var(--color-surface);color:var(--color-text);padding:8px 10px;font-size:13px"></td>';
      });
      head += "</tr>";
      if (gridHead) gridHead.innerHTML = head;
      const selBorder = (isFirst, isLast, isSel) => {
        if (!isSel) return "border-bottom:1px solid var(--color-line)";
        return "border-top:2px solid var(--color-ink);border-bottom:2px solid var(--color-ink)" + (isFirst ? ";border-left:2px solid var(--color-ink)" : "") + (isLast ? ";border-right:2px solid var(--color-ink)" : "");
      };
      const renderRow = (r) => {
        const isSel = gSelected.has(r.id);
        let html = '<tr aria-selected="' + isSel + '">';
        html += '<td style="' + selBorder(true, visible.length === 0, isSel) + ';padding:10px 12px"><input type="checkbox" data-hgrid-row="' + r.id + '"' + (isSel ? " checked" : "") + ' aria-label="Select row ' + r.id + '"></td>';
        visible.forEach((k, i) => {
          const pinnedCol = gPinned.includes(k);
          const style = selBorder(false, i === visible.length - 1, isSel) + ';padding:10px 12px;font-size:13px;color:var(--color-ink);width:160px;min-width:160px' + (pinnedCol ? ';position:sticky;left:' + offsets[k] + 'px;z-index:1;background:var(--color-card)' : '');
          if (i === 0) html += '<th scope="row" style="' + style + ';font-weight:600">' + esc(gCell(r[k])) + '</th>';
          else html += '<td style="' + style + '">' + esc(gCell(r[k])) + '</td>';
        });
        return html + "</tr>";
      };
      let body = "";
      const hasFilter = gCols.some((k) => gFilters[k]);
      if (gGrouped) {
        const fullGroups = {};
        const fullOrder = [];
        list.forEach((r) => { const g = gCell(r.status); if (!fullGroups[g]) { fullGroups[g] = []; fullOrder.push(g); } fullGroups[g].push(r); });
        const pageGroups = {};
        const pageOrder = [];
        pageRows.forEach((r) => { const g = gCell(r.status); if (!pageGroups[g]) { pageGroups[g] = []; pageOrder.push(g); } pageGroups[g].push(r); });
        pageOrder.forEach((g) => {
          const open = !gCollapsed.has(g);
          body += '<tr><td colspan="' + (visible.length + 1) + '" style="border-bottom:1px solid var(--color-line);padding:8px 12px"><button type="button" data-hgrid-group-row="' + esc(g) + '" aria-expanded="' + open + '" style="display:flex;align-items:center;gap:8px;text-align:left;font-size:13px;font-weight:700;color:var(--color-ink)"><span aria-hidden="true">' + (open ? "▾" : "▸") + '</span>' + esc(g) + ' (' + fullGroups[g].length + ')</button></td></tr>';
          if (open) pageGroups[g].forEach((r) => { body += renderRow(r); });
        });
      } else {
        pageRows.forEach((r) => { body += renderRow(r); });
      }
      if (!pageRows.length) {
        body += '<tr><td colspan="' + (visible.length + 1) + '" style="padding:24px 12px;text-align:center;font-size:14px;color:' + (hasFilter ? 'var(--color-live)' : 'var(--color-muted)') + '">' + (hasFilter ? "No rows match the current filters." : "No rows.") + '</td></tr>';
      }
      gridBody.innerHTML = body;
      const prev = document.querySelector("[data-hgrid-prev]");
      const next = document.querySelector("[data-hgrid-next]");
      const pageLabel = document.querySelector("[data-hgrid-page]");
      const selOut = document.querySelector("[data-hgrid-selected]");
      const allBox = document.querySelector("[data-hgrid-select-all]");
      const groupBtn = document.querySelector("[data-hgrid-group]");
      if (prev) prev.disabled = gPage <= 1;
      if (next) next.disabled = gPage >= totalPages;
      if (pageLabel) pageLabel.textContent = "Page " + gPage + " of " + totalPages;
      if (selOut) selOut.textContent = gSelected.size + " selected";
      if (allBox) {
        const keys = list.map((r) => r.id);
        allBox.checked = keys.length > 0 && keys.every((k) => gSelected.has(k));
        allBox.indeterminate = keys.some((k) => gSelected.has(k)) && !allBox.checked;
      }
      if (groupBtn) groupBtn.setAttribute("aria-pressed", String(gGrouped));
      if (focusedFilter && gridHead) {
        const inp = gridHead.querySelector('[data-hgrid-filter="' + focusedFilter + '"]');
        if (inp) {
          inp.focus();
          try { inp.setSelectionRange(inp.value.length, inp.value.length); } catch (e) { /* caret placement is best-effort */ }
        }
      }
    };
    gridTable.addEventListener("click", (e) => {
      const sortBtn = e.target.closest("[data-hgrid-sort]");
      if (sortBtn) {
        const k = sortBtn.getAttribute("data-hgrid-sort");
        if (gSort !== k) { gSort = k; gDir = "asc"; }
        else if (gDir === "asc") { gDir = "desc"; }
        else { gSort = null; gDir = null; }
        gPage = 1; gRender();
        return;
      }
      const pinBtn = e.target.closest("[data-hgrid-pin]");
      if (pinBtn) {
        const k = pinBtn.getAttribute("data-hgrid-pin");
        if (gPinned.includes(k)) gPinned = gPinned.filter((x) => x !== k);
        else if (gPinned.length < gCols.length - 1) gPinned = [...gPinned, k];
        gRender();
        return;
      }
      const grpBtn = e.target.closest("[data-hgrid-group-row]");
      if (grpBtn) {
        const g = grpBtn.getAttribute("data-hgrid-group-row");
        if (gCollapsed.has(g)) gCollapsed.delete(g); else gCollapsed.add(g);
        gRender();
      }
    });
    gridTable.addEventListener("input", (e) => {
      const inp = e.target.closest("[data-hgrid-filter]");
      if (!inp) return;
      gFilters[inp.getAttribute("data-hgrid-filter")] = inp.value;
      gPage = 1; gRender();
    });
    gridTable.addEventListener("change", (e) => {
      const all = e.target.closest("[data-hgrid-select-all]");
      if (all) {
        const list = gOrdered();
        if (all.checked) list.forEach((r) => gSelected.add(r.id));
        else list.forEach((r) => gSelected.delete(r.id));
        gRender();
        return;
      }
      const row = e.target.closest("[data-hgrid-row]");
      if (row) {
        const id = row.getAttribute("data-hgrid-row");
        if (row.checked) gSelected.add(id); else gSelected.delete(id);
        gRender();
      }
    });
    const expBtn = document.querySelector("[data-hgrid-export]");
    if (expBtn) expBtn.addEventListener("click", () => {
      const list = gOrdered();
      const csvEsc = (v) => { const s = gCell(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
      const csv = [[gLabels.name, gLabels.status, gLabels.score].map(csvEsc).join(",")].concat(list.map((r) => [r.name, r.status, r.score].map(csvEsc).join(","))).join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "data-grid-demo.csv"; a.click(); URL.revokeObjectURL(url);
    });
    const prevBtn = document.querySelector("[data-hgrid-prev]");
    if (prevBtn) prevBtn.addEventListener("click", () => { gPage = Math.max(1, gPage - 1); gRender(); });
    const nextBtn = document.querySelector("[data-hgrid-next]");
    if (nextBtn) nextBtn.addEventListener("click", () => { gPage = Math.min(Math.max(1, Math.ceil(gOrdered().length / gPerPage)), gPage + 1); gRender(); });
    const sizeSel = document.querySelector("[data-hgrid-pagesize]");
    if (sizeSel) sizeSel.addEventListener("change", () => { gPerPage = Number(sizeSel.value); gPage = 1; gRender(); });
    const grpToggle = document.querySelector("[data-hgrid-group]");
    if (grpToggle) grpToggle.addEventListener("click", () => { gGrouped = !gGrouped; gPage = 1; gRender(); });
    gRender();
  }
}


function renderHome() {
  const installCmd = "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/header.json";
  return '<div class="h-hero"><p class="eyebrow" style="margin:0 0 12px">Oeste · Component library</p><h1>One column.<br>Five moods.</h1><p class="h-sub">Huntington is a single-column component library for humans, AI agents, and vibe coders. Humans read the anatomy. Agents read the contract. Vibe coders copy the code — from Huntington&rsquo;s own tokens and components.</p></div>'
    + '<div class="demo" style="margin-top:32px"><div class="h-sectitle"><h2>Start building</h2></div><pre style="margin-top:16px">' + esc(installCmd) + '</pre><button type="button" class="copy-btn" data-copy="' + esc(installCmd) + '" style="margin-top:12px">Copy command</button><p class="muted" style="margin:12px 0 0">Install Header via shadcn — see <a href="#/getting-started">Getting started</a>.</p></div>'
    + '<div class="h-sectitle" style="margin-top:44px"><h2>What Huntington means</h2></div>'
    + '<p>Huntington is a single column. One column, 672px wide, hairline borders instead of card shadows, underlined text links instead of filled buttons. Nothing shouts. Everything is placed on purpose.</p>'
    + '<p>Five moods, one dot to cycle them: Paper, Ink, Rose, Sage, Dune. The same components, the same tokens — read five ways. Paper is the default; Ink is the dark one; Rose, Sage, and Dune are quiet color.</p>'
    + '<p>Huntington is one of three Oeste libraries. It has its own tokens, its own components, its own design. What it shares with Topanga and Mesa is how it is documented. Every component is written three ways. A designer reads the anatomy. An agent reads the contract. A vibe coder copies the code and ships. Nobody has to translate for anyone else, because every library already speaks all three languages.</p>'
    + '<div class="h-sectitle" style="margin-top:44px"><h2>Three lenses, every component</h2></div>'
    + '<ul><li><strong>Human</strong> — anatomy, props, keyboard, accessibility.</li><li><strong>Agent</strong> — JSON contract + copyable prompt, so agents don’t hallucinate props.</li><li><strong>Vibe</strong> — CLI + copy-paste React code, mood-complete.</li></ul>'
    + '<nav class="h-nextfooter" aria-label="Next"><a class="h-listrow" href="#/components"><span><span class="h-rowtitle">Browse components</span> <span class="h-rowdesc">All ' + COMPONENTS.length + ' components</span></span><span class="h-rowmeta">Next</span></a></nav>';
}
function renderComponents() {
  return '<p class="eyebrow">Docs</p><h1>Components</h1><p class="lede">All ' + COMPONENTS.length + ' components, one list. Pick one to see its anatomy, contract, and code.</p>'
    + componentSearchHTML()
    + '<div id="componentSearchResults" style="margin-top:16px">' + componentRowsHTML(COMPONENTS) + '</div>';
}
function renderGuides() {
  return '<p class="eyebrow">Docs</p><h1>Guides</h1><p class="lede">How to install, theme, and ship with Huntington.</p>'
    + GUIDE_PAGES.map((r) => '<a class="h-listrow" href="#/' + r.route + '"><span><span class="h-rowtitle">' + esc(r.title) + '</span> <span class="h-rowdesc">' + esc(r.note) + '</span></span><span class="h-rowmeta">Guide</span></a>').join("");
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
  if (e.kind === "enum") return e.name === "variant" || e.name === "tone" || e.name === "mood";
  return false;
}
function playgroundHTML(c) {
  const cls = playgroundClassify(c);
  const editable = cls.editable;
  const values = {};
  editable.forEach((e) => { values[e.name] = e.def; });
  const code = playgroundJSX(pascalFromId(c.id), c.id, editable, values);
  let html = '<section class="playground" data-pg-name="' + esc(pascalFromId(c.id)) + '" data-pg-id="' + esc(c.id) + '">';
  html += '<div class="playground-head"><h2>Playground</h2><span class="playground-sub">Live demo + code</span></div>';
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
    } else if (e.kind === "enum" && e.name === "mood") {
      // Mood Button / Header: mood is the page theme. Previewing a mood
      // updates the demo text + background without persisting the choice
      // (the demo's own dot still persists, as documented).
      const cap = String(v).charAt(0).toUpperCase() + String(v).slice(1);
      document.documentElement.dataset.theme = v;
      demo.querySelectorAll("[data-mood-cycle]").forEach((b) => {
        b.setAttribute("aria-label", "Mood: " + cap + ". Cycle to the next mood.");
      });
      const out = demo.querySelector("#demoMoodOut");
      if (out) out.textContent = "Mood: " + cap;
      const toggle = document.getElementById("moodToggle");
      if (toggle) toggle.setAttribute("aria-label", "Mood: " + cap + ". Cycle to the next mood.");
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
  const pristine = { label: "", placeholder: null, value: "", disabled: [], checked: [], pressed: [], mood: document.documentElement.dataset.theme || "paper" };
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
      else if (prop.name === "mood") el.value = pristine.mood;
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
    /* Huntington mood preview always applies: it sets the page theme. */
    if (e.kind === "enum" && e.name === "mood") return true;
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
  // The mood control reflects the mood the page loaded in, so the demo and
  // the code start truthful instead of snapping to the first option.
  const moodProp = editable.find((e) => e.name === "mood");
  const moodEl = panel.querySelector('[data-pg-prop="mood"]');
  if (moodProp && moodEl && moodProp.options.indexOf(pristine.mood) !== -1) moodEl.value = pristine.mood;
  refresh();
}
function ensureOesteDocsStyles() {
  if (document.getElementById("oeste-docs-upgrades")) return;
  const style = document.createElement("style");
  style.id = "oeste-docs-upgrades";
  const css = [
    "#view.oeste-enter > * { animation: oeste-docs-enter 200ms ease-out both; }",
    "#view.oeste-enter > *:nth-child(2) { animation-delay: 40ms; }",
    "#view.oeste-enter > *:nth-child(3) { animation-delay: 80ms; }",
    "#view.oeste-enter > *:nth-child(4) { animation-delay: 120ms; }",
    "#view.oeste-enter > *:nth-child(5) { animation-delay: 160ms; }",
    "#view.oeste-enter > *:nth-child(6) { animation-delay: 200ms; }",
    "#view.oeste-enter > *:nth-child(7) { animation-delay: 240ms; }",
    "#view.oeste-enter > *:nth-child(8) { animation-delay: 280ms; }",
    "@keyframes oeste-docs-enter { from { opacity: 0; transform: translateY(4px);  } to { opacity: 1; transform: none; filter: none; } }",
    "@media (prefers-reduced-motion: reduce) { #view.oeste-enter > * { animation: none; } }",
    ".playground { border: 1px solid var(--color-border); border-radius: 14px; background: var(--color-card); padding: 20px; margin-top: 24px; }",
    ".playground-head { display: flex; align-items: center; gap: 10px; }",
    ".playground-head h2 { margin: 0; }",
    ".playground-sub { color: var(--color-muted); font-size: 0.875rem; }",
    ".playground-controls { display: grid; gap: 12px; margin-top: 16px; }",
    ".playground-field label { display: block; font-weight: 600; font-size: 0.875rem; margin-bottom: 6px; }",
    ".playground-field input[type=\"text\"], .playground-field input[type=\"number\"], .playground-field select { width: 100%; max-width: 320px; padding: 8px 10px; border: 1px solid var(--color-border); border-radius: 10px; background: var(--color-paper); color: var(--color-text); font: inherit; }",
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
const NOT_FOUND_THIS = { id: "huntington", name: "Huntington", listUrl: "#/components" };
const NOT_FOUND_OTHERS = [{ id: "topanga", name: "Topanga" }, { id: "mesa", name: "Mesa" }];
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
  let body = '<a class="h-backlink" href="#/components">\u2190 Components</a>'
    + '<div class="h-ptitle" style="margin-top:16px"><h1>Component not found</h1><p class="h-meta">Not found</p></div>'
    + '<p class="lede" style="margin-top:16px">There is no component called <code>' + esc(id) + '</code> in ' + NOT_FOUND_THIS.name + '.</p>';
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
  const idx = COMPONENTS.indexOf(c);
  const next = COMPONENTS[(idx + 1) % COMPONENTS.length];
  const rows = c.props.map((p) => "<tr><td><code>" + esc(p[0]) + "</code></td><td><code>" + esc(p[1]) + "</code></td><td>" + esc(p[2]) + "</td><td>" + esc(p[3]) + "</td></tr>").join("");
  const keys = c.keyboard.map((k) => "<tr><td><code>" + esc(k[0]) + "</code></td><td>" + esc(k[1]) + "</td></tr>").join("");
  const inv = c.invariants.map((x) => "<li>" + esc(x) + "</li>").join("");
  const ev = eventRows(c);
  const ay = a11yRows(c);
  let body = '<a class="h-backlink" href="#/components">\u2190 Components</a>'
    + '<div class="h-ptitle" style="margin-top:16px"><h1>' + esc(c.name) + '</h1><p class="h-meta">Component · ' + esc(c.id) + "</p></div>"
    + '<p class="lede" style="margin-top:16px">' + esc(c.tagline) + "</p>";
  body += lensTabs("components", c.id, lens);
  body += demoHTML(c);
  if (lens === "human") {
    body += variantsHTML(c);
    body += playgroundHTML(c);
    body += "<h2>Anatomy</h2><div style=\"overflow-x:auto\"><table><thead><tr><th>Part</th><th>Notes</th></tr></thead><tbody>" + anatomyRows(c) + "</tbody></table></div>";
    body += '<h2>Props</h2>' + (c.props.length ? '<div style="overflow-x:auto"><table><thead><tr><th>Prop</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead><tbody>' + rows + "</tbody></table></div>" : "<p>No props.</p>");
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
    body += "<h2>Vibe</h2><p>Copy, paste, ship. All snippets are mood-complete.</p>";
    body += '<div class="code-head"><h3>CLI</h3><button type="button" class="copy-btn" data-copy="' + esc(c.cli) + '">Copy CLI</button></div><pre>' + esc(c.cli) + "</pre>";
    body += '<div class="code-head"><h3>React code</h3><button type="button" class="copy-btn" data-copy="' + esc(c.code) + '">Copy code</button></div><pre>' + esc(c.code) + "</pre>";
    body += '<div class="callout"><strong>Install.</strong> The CLI command installs from the live registry. The React snippets work today in any React + Tailwind app.</div>';
  }
  body += '<nav class="h-nextfooter" aria-label="Next"><a class="h-listrow" href="#/components/' + next.id + '"><span><span class="h-rowtitle">' + esc(next.name) + '</span> <span class="h-rowdesc">' + esc(next.tagline) + '</span></span><span class="h-rowmeta">Next</span></a></nav>';
  return body;
}
function renderTokens() {
  const swatches = MOOD_SWATCHES.map((m) => '<div class="swatch" data-theme="' + m.mood + '"><div class="swatch-color" style="background:var(--color-paper)"></div><div class="swatch-body"><strong>' + m.mood.charAt(0).toUpperCase() + m.mood.slice(1) + ' mood</strong><span>Paper ' + m.paper + ' · Card ' + m.card + ' · Ink ' + m.ink + ' · Muted ' + m.muted + '</span><p style="margin:8px 0 0">One mood, four surfaces. The dot button cycles all five.</p></div></div>').join("");
  const typeRows = [
    ["H1", "31 / 700 / -0.03 / 1.22"], ["Lede", "26 / 500 / -0.025 / 1.28 (34px at ≥700px)"], ["Lede Wide", "34 / 500 / -0.025 / 1.28"],
    ["Page Title", "26 / 600 / -0.025 / 1.28"], ["Body", "16 / 400 / 1.65"], ["Hero Sub", "16 / 400 / 1.65"],
    ["Section Title", "17 / 700 / -0.01"], ["Section Title Note", "13 / 500"], ["List Row Title", "16 / 600 / -0.015"],
    ["List Row Desc", "15 / 400 / 1.5"], ["List Row Meta", "13 / 400"], ["Status Value", "15.5 / 800 / -0.01"],
    ["Status Value Plain", "15.5 / 400 / -0.01"], ["Wordmark", "17 / 800 / -0.02"], ["Tag", "11 / 600 / +0.08 uppercase"],
    ["Menu Sheet Row Title", "17 / 700 / -0.015"], ["Footer", "13 / 400 / 1.7"], ["Back Link", "13 / 400"], ["Meta", "13 / 400"], ["Eyebrow", "12 / 500 / +0.06 uppercase"],
  ].map((r) => "<tr><td>" + r[0] + "</td><td><code>" + r[1] + "</code></td></tr>").join("");
  return '<p class="eyebrow">Foundations</p><h1>Tokens</h1><p class="lede">One source of truth: <code>src/tokens.css</code>, <code>src/tokens.json</code>, and <code>DESIGN_TOKENS</code> in <code>src/index.js</code> agree exactly. Default mood is Paper. Muted text does not meet 4.5:1 on paper in every mood — see <a href="#/accessibility">Accessibility</a> for the measured table.</p>'
    + '<div class="swatches">' + swatches + "</div>"
    + "<h2>Accents (all moods)</h2><p>Live <code>#d24247</code>, pulse <code>#1a73e8</code>, status Active <code>#34d399</code> / Idle <code>#60a5fa</code> / Offline <code>#fbbf24</code>, amount up <code>#34d399</code> / down <code>#f87171</code>, orbs default <code>#ff6b1a</code> / blue <code>#7aa2d9</code> / rose <code>#d9b5a3</code> / green <code>#9dc08b</code>, logoCardDark <code>#141210</code>.</p>"
    + "<h2>Type</h2><p>Manrope only, variable 400–800, no italics. 20 text styles (size / weight / tracking / leading):</p>"
    + '<div style="overflow-x:auto"><table><thead><tr><th>Style</th><th>Spec</th></tr></thead><tbody>' + typeRows + "</tbody></table></div>"
    + "<h2>Spacing / radius / motion / layout</h2><p>Spacing scale: 0 / 2 / 3 / 4 / 6 / 7 / 8 / 9 / 10 / 12 / 14 / 16 / 18 / 20 / 22 / 28 / 40 / 44 / 64 / 80 px. Radii: card/photo/tile/carousel 14, Logo Card 18, grid art 10, Progress Bar 2, menu-sheet top 22, pill 999. Shadows: cards none (hairline instead); Menu Pill <code>0 8px 24px rgba(0,0,0,0.14)</code>; Menu Bottom Sheet <code>0 -18px 50px rgba(0,0,0,0.16)</code>. Layout: max width 672, side padding 20 (0 at 700px+), section padding-top 44, page padding-bottom 64, one breakpoint at 700px. Motion (audit): mood pulse 1.1s, LIVE blink, pulse ring 2.4s, equalizer staggered scaleY, accordion 300px max-height, media drift 26s, progress pulse. Reduced motion: no animation.</p>"
    + "<h2>Tokens in use</h2><p>Tokens doing real work — the same components the library ships. Cycle the site mood: every demo below follows it.</p>"
    + '<div class="demo"><p class="demo-caption">Header + Section Title + List Row.</p><div class="h-header"><a class="h-wordmark" href="#/components"><span class="h-mark" aria-hidden="true"></span><span>Brand</span></a><button type="button" class="h-moodbtn" data-mood-cycle aria-label="Mood: Paper. Cycle to the next mood."><span class="h-dot" aria-hidden="true"></span></button></div><div class="h-sectitle" style="margin-top:24px"><h2>Section title</h2><span class="h-note">Note</span></div><a class="h-listrow" href="#/components/list-row"><span><span class="h-rowtitle">Row title</span> <span class="h-rowdesc">Row description</span></span><span class="h-rowmeta">Meta</span></a></div>'
    + '<div class="demo"><p class="demo-caption">Pills + badges + progress.</p><div class="demo-row"><button type="button" class="h-filterpill" aria-pressed="false">Filter</button><button type="button" class="h-filterpill active" aria-pressed="true">Filter</button><span class="h-statuspill"><span class="h-dot7 h-dot-active" aria-hidden="true"></span>Active</span><span class="h-livebadge"><span class="h-dot8" aria-hidden="true"></span>LIVE</span></div><div class="h-progress" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="Demo progress" style="margin-top:16px"><div class="h-progressfill" style="width:65%"></div></div><p style="margin:12px 0 0"><strong>Upload</strong> — <span>65%</span>.</p></div>'
    + "<h2>Contrast steps</h2><p>Four contrast steps plus two text steps, shown for the Paper mood. Every mood carries its own paper, card, ink, and muted values. No values changed here.</p><div style=\"overflow-x:auto\"><table><thead><tr><th>Step</th><th>Token</th><th>Values</th><th>Use</th></tr></thead><tbody><tr><td>Page</td><td><code>--color-paper</code></td><td>Paper #f6f4f1</td><td>Page background</td></tr><tr><td>Surface</td><td><code>--color-card</code></td><td>Paper #fffdf9</td><td>Cards, demos, panels</td></tr><tr><td>Raised</td><td><code>--color-card + --color-border hairline</code></td><td>Same values as Surface</td><td>Raised by a hairline, not a fill</td></tr><tr><td>Border</td><td><code>--color-border</code></td><td>Hairline, mood-aware</td><td>Hairlines between steps</td></tr><tr><td>Text primary</td><td><code>--color-ink</code></td><td>Paper #1c1917</td><td>Body text, headings</td></tr><tr><td>Text muted</td><td><code>--color-muted</code></td><td>Paper #756e6a</td><td>Secondary text, captions. Muted on paper is 4.56:1 in Paper mood and meets 4.5:1 in every mood. See Accessibility.</td></tr></tbody></table></div>";
}
function renderGettingStarted() {
  return '<p class="eyebrow">Docs</p><h1>Getting started</h1><p class="lede">Huntington is React + Tailwind, copy-paste ready. No heavy dependency, no config hell. Five steps and you are building — then moods in depth, and what to do when it breaks.</p>'
    + '<p>Requirements: React 18+, Tailwind (arbitrary values), JSX transform.</p>'
    + '<h2>1 · Get the tokens</h2><p>Download <code>tokens.css</code> (and <code>tokens.json</code> if you want the machine-readable copy). Save it as <code>src/tokens.css</code> and import it first at your app entry.</p><pre>import "./tokens.css";</pre><p>shadcn does <em>not</em> install the tokens — this step is always manual.</p>'
    + '<h2>2 · Set the mood</h2><p>Set <code>data-theme</code> on <code>&lt;html&gt;</code> before first paint:</p><pre>&lt;script&gt;\n  const saved = localStorage.getItem("huntington-mood");\n  document.documentElement.dataset.theme = saved || "paper";\n&lt;/script&gt;</pre><p>Values: <code>paper</code> (default), <code>ink</code>, <code>rose</code>, <code>sage</code>, <code>dune</code>. The Mood Button cycles them and saves the choice. <code>data-theme</code> also works on any container — a rose card on an ink page gets the rose tokens.</p>'
    + '<h2>3 · Install a component</h2><p><strong>shadcn.</strong> One command per component; shadcn writes the file into your project:</p><pre>npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/header.json</pre><p>Replace <code>header</code> with any component id.</p><p><strong>Copy-paste.</strong> Open a component page, switch to the Vibe lens, copy the code into your own file, and import from where you put it. You own the file — change it like any other code in your project.</p>'
    + '<h2>4 · Use it</h2><p>Import from where shadcn put the file:</p><pre>import { Header } from \"@/components/ui/header\";\n\nexport function Top({ mood, onMoodChange }) {\n  return &lt;Header wordmark=\"Brand\" mood={mood} onMoodChange={onMoodChange} /&gt;;\n}</pre><p>The <code>@/components/ui/…</code> path is the shadcn default.</p>'
    + '<h2>5 · For agents</h2><p>Paste the Agent prompt + JSON contract into your editor. Agents must not invent props beyond the contract. The full machine contract lives in <a href="/huntington/llms.txt">llms.txt</a>.</p>'
    + '<div class="callout"><strong>Honest install story.</strong> <code>@oeste/huntington</code> is not a published package — there is nothing to <code>npm install</code>. Install via shadcn, or copy a snippet and own the file.</div>'
    + '<h2>6 · Troubleshooting</h2><ul><li><strong>Colors are wrong or missing</strong> — <code>tokens.css</code> is not imported, or something overrides it. Check the import is in your app entry.</li><li><strong>“Cannot find module ‘@oeste/huntington’”</strong> — <code>@oeste/huntington</code> is not a published package. Import from the file path where shadcn put the component, or where you copied it.</li><li><strong>Mood does not change</strong> — <code>data-theme</code> is not set, or is set on the wrong element. Check <code>document.documentElement.dataset.theme</code>.</li><li><strong>shadcn asks where to put the file</strong> — any components directory works. Keep the <code>@/components/ui</code> convention so the docs’ import paths match.</li><li><strong>Styles look unstyled</strong> — Tailwind arbitrary values (<code>bg-[var(--color-card)]</code>) need Tailwind v3.1+ or v4.</li></ul>'
    + '<h2>Guides — go deeper</h2><ul><li><a href="#/patterns">Patterns</a> — index page, detail page, overlay flow.</li></ul><p>Also in these docs: <a href="#/tokens">Tokens</a>, <a href="#/accessibility">Accessibility</a>, <a href="#/changelog">Changelog</a>, <a href="#/migration">Migration</a>, <a href="#/faq">FAQ</a>.</p>';
}


function renderAccessibility() {
  const rows = COMPONENTS.map((c) => {
    const kb = c.keyboard.map((k) => esc(k[0]) + ": " + esc(k[1])).join(" · ");
    const inv = c.invariants.slice(0, 2).join(" ");
    return "<tr><td><a href=\"#/components/" + c.id + "\">" + esc(c.name) + "</a></td><td>" + kb + "</td><td>" + esc(inv) + "</td></tr>";
  }).join("");
  const pairCards = [];
  MOOD_SWATCHES.forEach((m) => {
    const p = MOOD_PAIRS[m.mood];
    const cap = m.mood.charAt(0).toUpperCase() + m.mood.slice(1);
    [["Ink on paper", "ink", "paper", m.ink, m.paper, p.inkPaper], ["Muted on paper", "muted", "paper", m.muted, m.paper, p.mutedPaper],
     ["Ink on card", "ink", "card", m.ink, m.card, p.inkCard], ["Muted on card", "muted", "card", m.muted, m.card, p.mutedCard]].forEach((t) => {
      const pass = parseFloat(t[5]) >= 4.5;
      pairCards.push('<div class="pair-card" data-theme="' + m.mood + '"><div class="pair-sample" style="color:var(--color-' + t[1] + ');background:var(--color-' + t[2] + ')"><span class="pair-aa">Aa</span><p>Pack my box with five dozen liquor jugs.</p></div><p class="pair-caption"><strong>' + cap + " · " + t[0] + "</strong><br><code>" + t[3] + " on " + t[4] + "</code> · " + t[5] + ":1 · " + (pass ? "passes 4.5:1" : "BELOW 4.5:1 — secondary text only") + "</p></div>");
    });
  });
  return '<p class="eyebrow">Docs</p><h1>Accessibility</h1><p class="lede">Accessibility is load-bearing in Huntington, not a badge. Every component ships its keyboard table, invariants, and a11y contract. Where the Figma source is silent on keyboard behavior, the docs say so and document only native semantics.</p>'
    + "<h2>Non-negotiables</h2><ul><li>Visible focus: 2px ink outline, never removed.</li><li>Touch targets: min 44px for primary actions. Compact inline controls (Status Pill, Tag, text links) are source-faithful compact sizes — when one is the sole action, give it a 44px hit area.</li><li>Never color alone: every state has text, icon, or position.</li><li>Contrast: normal text 4.5:1, large text 3:1. Muted text is secondary/caption text. It meets 4.5:1 on paper and card in every mood. Ink always passes (13.12–17.21:1). Every pair below is verified by calculation (see <code>scripts/verify.mjs</code>).</li><li>Reduced motion: no animation. Content never depends on motion to be understood.</li></ul>"
    + "<h2>Per-component keyboard + ARIA checklist</h2><p>One row per component. Full tables live on each component page (Human lens).</p>"
    + '<div style="overflow-x:auto"><table><thead><tr><th>Component</th><th>Keyboard</th><th>Key ARIA / invariants</th></tr></thead><tbody>' + rows + "</tbody></table></div>"
    + "<h2>Live contrast pairs</h2><p>Every pair renders with the real tokens in its own mood — each card is a <code>data-theme</code> container. Ink passes everywhere. Muted fails 4.5:1 on paper in Paper (4.37), Rose (2.88), Sage (3.31), and Dune (2.71), and on card in Rose (3.17), Sage (3.72), and Dune (2.95). Do not use muted for body copy in those moods.</p>"
    + '<div class="pair-grid">' + pairCards.join("") + "</div>"
    + "<h2>Status colors</h2><p>Status dots and the LIVE dot are indicators, not text. Status Pill and Status Dot put the meaning in the label text. LIVE text is 3.85:1 on a paper card / 4.30:1 on an ink card — below 4.5:1 — so the LIVE Badge is a status indicator with a dot, never body copy. Status dot colors on a paper card are low-contrast (Active 1.89, Idle 2.50, Offline 1.64) and must never be the only carrier of meaning.</p>"
    + "<h2>Reduced motion</h2><p>Audit motion: mood pulse 1.1s, LIVE blink, pulse ring 2.4s, equalizer staggered scaleY, accordion 300px max-height, media drift 26s, progress pulse. With <code>prefers-reduced-motion: reduce</code>, Huntington ships no animation. Content never depends on motion to be understood.</p>"
    + "<h2>Focus</h2><p>Focus is always visible: 2px ink outline with 2px offset. It is never removed, never replaced by color alone, and never left on a hidden element. Lightbox and Menu Bottom Sheet return focus to their trigger on close.</p>"
    + "<h2>Touch targets</h2><p>Primary actions meet 44px: Menu Pill, View All, Reaction Button circle (44px), accordion triggers, List Row, Menu Bottom Sheet rows. Compact inline controls (Status Pill, Tag, Text Link, Back Link) are source-faithful compact sizes. Small text links inside body copy are the only exception, and they are never the sole way to act.</p>"
    + "<h2>Live regions</h2><p>Status updates use <code>role=status</code> + <code>aria-live=polite</code>. Nothing auto-vanishes: the user dismisses status UI.</p>";
}
function renderPatterns() {
  return '<p class="eyebrow">Docs</p><h1>Patterns</h1><p class="lede">Components composed into real flows. Every pattern is working vanilla JS on this page — the same structure the React snippets describe. One form control: Search filters a list; it never submits one.</p>'
    + '<h2>Components page</h2><p>Header + Page Title + List Rows + Footer. The single-column components index, end to end.</p>'
    + '<div class="demo"><div class="h-header"><a class="h-wordmark" href="#/components"><span class="h-mark" aria-hidden="true"></span><span>Brand</span></a><button type="button" class="h-moodbtn" data-mood-cycle aria-label="Mood: Paper. Cycle to the next mood."><span class="h-dot" aria-hidden="true"></span></button></div>'
    + '<div class="h-ptitle" style="margin-top:24px"><h1>Components</h1><p class="h-meta">40 components</p></div>'
    + '<a class="h-listrow h-listrow--stacked" href="#/components/list-row"><span class="h-rowtop"><span class="h-rowtitle">Row title</span> <span class="h-rowmeta">v0.2.0</span></span><span class="h-rowdesc">Row description</span></a>'
    + '<a class="h-listrow h-listrow--stacked" href="#/components/list-row"><span class="h-rowtop"><span class="h-rowtitle">Second row</span> <span class="h-rowmeta">v0.2.0</span></span><span class="h-rowdesc">Another description</span></a>'
    + '<div class="h-footer">© 2026 Brand name · Footer copy goes here.</div></div>'
    + '<h3>Human notes</h3><ul><li>One H1 (the Page Title).</li><li>The Home page carries the editorial sections and the Browse button: Start building, What Huntington means, Three lenses.</li><li>List Rows are real links.</li><li>The Components page uses the stacked List Row (title + version, description below); guides and detail pages use the inline form.</li><li>Footer sits 80px below the last row.</li></ul>'
    + '<h3>Agent prompt</h3><pre>Compose a Huntington components page from Header + Page Title + List Row + Footer. One H1. Rows are real links, stacked with the library version as meta. Never invent props beyond the component contracts.</pre>'
    + '<h2>Detail page</h2><p>Back Link + Page Title + Standfirst + Photo Card + Gallery + Reaction Button + Footer.</p>'
    + '<div class="demo"><a class="h-backlink" href="#/components">← Back</a><div class="h-ptitle" style="margin-top:16px"><h1>Page title</h1><p class="h-meta">Meta</p></div><p class="h-standfirst" style="margin-top:16px">Standfirst copy goes here.</p><div class="h-photocard h-pc-default" style="margin-top:16px"><span class="h-orb" aria-hidden="true"></span><span class="h-pclabel"><span class="h-pctitle">Card title</span><span class="h-pcsub">Card subtitle</span></span></div><div class="h-gallery" style="margin-top:16px"><div class="h-galhead"><span>Gallery</span><span class="muted">12</span></div><div class="h-galgrid"><span class="h-galart" aria-hidden="true"></span><span class="h-galart" aria-hidden="true"></span><span class="h-galart" aria-hidden="true"></span></div></div><div class="h-react" style="margin-top:16px"><button type="button" class="h-reactcircle" data-react aria-pressed="false" aria-label="React">+</button><span class="h-reactlabel">React</span><span class="h-reactcap">Caption</span></div><div class="h-footer">© 2026 Brand name · Footer copy goes here.</div></div>'
    + '<h3>Human notes</h3><ul><li>Back Link is the only way back — it is a real link, muted, small.</li><li>Page Title is the page heading; the standfirst opens the body.</li><li>Reaction Button is a real button with aria-pressed.</li></ul>'
    + '<h3>Agent prompt</h3><pre>Compose a Huntington detail page from Back Link + Page Title + Standfirst + Photo Card + Gallery + Reaction Button + Footer. Back Link first, Footer last. Never invent props beyond the component contracts.</pre>'
    + '<h2>Overlay flow</h2><p>Menu Pill → Menu Bottom Sheet, and a Lightbox for one photo. Escape closes both; focus returns to the trigger.</p>'
    + '<div class="demo"><button type="button" class="h-menupill" data-menu-open aria-expanded="false" aria-controls="patternSheet">Menu</button><div id="patternSheet" class="h-sheet" hidden><span class="h-grabbar" aria-hidden="true"></span><p class="h-sheetlabel">Section</p><a class="h-sheetrow" href="#/components/menu-bottom-sheet"><span class="h-sheettitle">Row title</span><span class="h-sheetnote">Note</span></a></div><button type="button" class="btn btn-secondary" data-lightbox-open style="margin-top:16px">Open lightbox</button><div id="demoLightbox" class="h-lightbox" role="dialog" aria-modal="true" aria-label="Image 1 of 12" hidden><button type="button" class="h-lbclose" data-lightbox-close aria-label="Close lightbox">\u00d7</button><span class="h-lbimg" aria-hidden="true"></span><button type="button" class="h-lbbtn h-lbprev" data-lightbox-prev aria-label="Previous image">\u2039</button><button type="button" class="h-lbbtn h-lbnext" data-lightbox-next aria-label="Next image">\u203a</button><span class="h-lbcount" id="demoLbCount">1 / 12</span></div></div>'
    + '<h3>Human notes</h3><ul><li>Menu Pill is a real button with aria-expanded + aria-controls.</li><li>The sheet is a dialog; the scrim click closes it.</li><li>The Lightbox is a dialog with a count; Escape closes and returns focus.</li></ul>'
    + '<h3>Agent prompt</h3><pre>Compose a Huntington overlay flow from Menu Pill + Menu Bottom Sheet + Lightbox. Escape closes, focus returns to the trigger. Never invent props beyond the component contracts.</pre>';
}
function renderChangelog() {
  return '<p class="eyebrow">Docs</p><h1>Changelog</h1><p class="lede">What changed, when, and what it means for you. No rewritten history — entries land here when they ship.</p>'
    + '<h2>v0.2.0 — 2026-10-15</h2><ul><li><strong>Docs rebuilt index-first.</strong> The docs site is now a Huntington page: one 672px column, no sidebar, no search. Navigation is the Menu Pill + Menu Bottom Sheet, the Components page is an index of stacked List Rows (title + version, description below); Home is a landing page with a Browse components button. List Row gains documented inline (2/3-column) and stacked forms (meta optional), component and guide pages follow the detail pattern (Back Link, Page Title, Next Footer), and the Human/Agent/Vibe lenses are Toggle Tabs.</li><li><strong>Mood names corrected to the live site:</strong> Ink, Rose, Dune (were Dark, Blush, Sand); default mood is Paper (was Dark). Hex values unchanged. <strong>Breaking:</strong> <code>data-theme</code> values <code>dark</code> / <code>blush</code> / <code>sand</code> are renamed <code>ink</code> / <code>rose</code> / <code>dune</code>.</li><li><strong>Three new components:</strong> Toggle Tabs, Next Footer, and Search (40 total). Toggle Tabs was previously documented as absent; the live site has it.</li><li><strong>Footer:</strong> the docs footer no longer links to any project site. Component copy stays generic placeholders.</li></ul>'
    + '<h2>v0.1.0 — 2026-10-15</h2><ul><li><strong>First web release of Huntington.</strong> 37 components (44 built Figma nodes) from the Figma plugin v1.0.3. Five moods, Dark default. shadcn-compatible registry at <code>/huntington/r/</code> (live at integration).</li><li><strong>Logo Card radius</strong> follows tokens + audit (18px); the Figma plugin builder used 14px.</li><li><strong>Contrast, honestly:</strong> muted text does not meet 4.5:1 on paper in Paper (4.37), Blush (2.88), Sage (3.31), or Sand (2.71). Muted is for secondary/caption text. See <a href="#/accessibility">Accessibility</a>.</li><li><strong>Breaking:</strong> none. First release.</li></ul>';
}
function renderMigration() {
  return '<p class="eyebrow">Docs</p><h1>Migration</h1><p class="lede">Adopting Huntington, from scratch or from the Figma library.</p>'
    + '<h2>From scratch</h2><ol><li>Import <code>src/tokens.css</code> once, or copy <code>src/tokens.json</code>.</li><li>Copy the components you need from <code>src/index.js</code> (React 18+, Tailwind, JSX transform).</li><li>Read the Agent prompt + JSON contract for each component before generating code with an agent.</li></ol>'
    + '<h2>From the Figma library</h2><p>Web components keep the Figma names, measurements, moods, and variant sets. The web adds what Figma cannot carry: real interactivity (accordions, menu sheet, lightbox, mood persistence), keyboard behavior, contracts, and code. One difference to know: Logo Card radius is 18px on the web (tokens + audit); the Figma plugin builder used 14px.</p>'
    + '<h2>What did not change</h2><p>Component contracts (<code>oeste.component.v1</code>), keyboard behaviors, lens URLs (<code>#/components/&lt;id&gt;?lens=</code>), and the token file layout follow the Oeste contract pattern.</p>';
}
function renderFaq() {
  return '<p class="eyebrow">Docs</p><h1>FAQ</h1><p class="lede">Short answers to the questions people actually ask. If yours isn’t here, <a href="https://github.com/eric2busy/Oeste/issues">open an issue on GitHub</a>.</p>'
    + '<h2>Is Huntington an npm package?</h2><p>No. There is no <code>@oeste/huntington</code> package to install. Install a component with shadcn (<code>npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/header.json</code>) or copy the code from the Vibe lens and own the file. See <a href="#/getting-started">Getting started</a>.</p>'
    + '<h2>Does it work with Tailwind v3 and v4?</h2><p>Yes, both. Huntington components use <code>var()</code> token classes, so there is no dark-variant wiring step — set <code>data-theme</code> and the components follow. Tailwind arbitrary values need v3.1+ or v4. See <a href="#/getting-started">Getting started</a>.</p>'
    + '<h2>Can I use Huntington without React?</h2><p>The components are React. The tokens (<code>src/tokens.css</code>) are plain CSS and work anywhere.</p>'
    + '<h2>Which React setups does it work with?</h2><p>Any React project — Vite, Next.js, Remix, and friends. Registry files are self-contained React + Tailwind.</p>'
    + '<h2>How do moods work?</h2><p>Set <code>data-theme</code> to <code>paper</code>, <code>ink</code>, <code>rose</code>, <code>sage</code>, or <code>dune</code> on <code>&lt;html&gt;</code>. The Mood Button cycles them and saves the choice to <code>localStorage</code>. See <a href="#/getting-started">Getting started</a>.</p>'
    + '<h2>Do I have to use all 40 components?</h2><p>No. Install one at a time, only what you need.</p>'
    + '<h2>Why is there no Button?</h2><p>The source has no Button, so v0.2.0 has none. Huntington’s actions are Text Link, Filter Pill, View All, Menu Pill, and rows that are real links or buttons. Search is the one form control — it filters a list; it never submits one.</p>'
    + '<h2>How do I customize the theme?</h2><p>Tokens first, compose second, fork third — and never break the accessibility invariants. Muted text is already below 4.5:1 in three moods; do not make it lighter.</p>'
    + '<h2>Can I use Huntington in a commercial project?</h2><p>Yes. Huntington is <a href="https://github.com/eric2busy/Oeste/blob/main/huntington/LICENSE">MIT licensed</a> — use it in commercial work, including closed-source work. Just keep the MIT copyright notice in copies of the code.</p>'
    + '<h2>How do I report a bug or request a component?</h2><p><a href="https://github.com/eric2busy/Oeste/issues">Open an issue on GitHub</a> — bugs, missing components, and docs fixes all live there.</p>';
}
function render() {
  const { route, id, lens, search } = parseHash();
  closeMenu();
  const view = document.getElementById("view");
  const backToComponents = '<a class="h-backlink" href="#/components">\u2190 Components</a>';
  const backToGuides = '<a class="h-backlink" href="#/guides">\u2190 Guides</a>';
  if (route === "components" && !id) view.innerHTML = renderComponents();
  else if (route === "components") view.innerHTML = renderComponent(id, lens);
  else if (route === "guides") view.innerHTML = renderGuides();
  else if (route === "home") view.innerHTML = renderHome();
  else if (route === "tokens") view.innerHTML = backToGuides + renderTokens() + guideNextFooter(route);
  else if (route === "getting-started") view.innerHTML = backToGuides + renderGettingStarted() + guideNextFooter(route);
  else if (route === "accessibility") view.innerHTML = backToGuides + renderAccessibility() + guideNextFooter(route);
  else if (route === "patterns") view.innerHTML = backToGuides + renderPatterns() + guideNextFooter(route);
  else if (route === "setup") view.innerHTML = backToGuides + renderGettingStarted() + guideNextFooter("getting-started");
  else if (route === "changelog") view.innerHTML = backToGuides + renderChangelog() + guideNextFooter(route);
  else if (route === "migration") view.innerHTML = backToGuides + renderMigration() + guideNextFooter(route);
  else if (route === "faq") view.innerHTML = backToGuides + renderFaq() + guideNextFooter(route);
  else view.innerHTML = renderComponents();
  updateMenuLabels(route, id);
  highlightAll();
  bindDemos();
  bindComponentSearch();
  bindPlayground();
  bindNotFound();
  playOesteEntrance(view);
  view.focus({ preventScroll: true });
  window.scrollTo(0, 0);
  if (search && route === "components" && !id) {
    const searchInput = document.getElementById("componentSearchInput");
    if (searchInput) searchInput.focus();
  }
}

function init() {
  ensureOesteDocsStyles();
  const saved = localStorage.getItem("huntington-mood");
  setMood(MOODS.includes(saved) ? saved : "paper");
  document.getElementById("moodToggle").addEventListener("click", cycleMood);
  const pill = document.getElementById("menuPill");
  pill.addEventListener("click", () => {
    const sheet = document.getElementById("menuSheet");
    if (sheet.hidden) openMenu(); else closeMenu();
  });
  document.getElementById("menuScrim").addEventListener("click", closeMenu);
  document.getElementById("menuSheet").addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !document.getElementById("menuSheet").hidden) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      location.hash = "#/components?search=1";
    }
  });
  window.addEventListener("hashchange", render);
  render();
}
document.addEventListener("DOMContentLoaded", init);
