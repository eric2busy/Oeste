# Oeste

> Spanish for west. Pronounced *oh-EST-eh*.

Oeste is an open design system and component library built for three audiences at once:
- **Humans** (designers & developers): Clear documentation, live demos, component anatomy, keyboard navigation tables, and accessibility notes.
- **AI agents** (Cursor, Claude Composer, v0): Machine-readable JSON specifications, token schemas, accessibility invariants, and copyable prompt contexts to prevent hallucinations.
- **Vibe coders**: Instant copy-paste code, zero config, and one-command CLI installation.

## Theme: Topanga
Topanga is the debut theme for Oeste—inspired by the hidden canyon in Los Angeles where creatives retreat and build. Warm paper, canyon clay, ochre, sagebrush, and precision hairlines.

- **Canvas / Paper**: `#F6F4F1` (Dark: `#121110`)
- **Surface**: `#FCFAF7` (Dark: `#1C1A18`)
- **Ink**: `#1C1917` (Dark: `#F5F3EF`)
- **Terracotta Clay**: `#C25E38`
- **Warm Ochre**: `#E08244`
- **Sagebrush**: `#6C7A68`

## Components (v1)
- **Button**: One action. A clear hierarchy. Native focus ring and touch targets.
- **Input**: Persistent accessible label, described errors, and validation states.
- **Dialog**: Accessible modal dialog with native focus trap, Escape dismissal, and trigger restoration.
- **Card**: Structural container with proper document heading hierarchy.
- **Tabs**: Full roving tabindex and keyboard navigation (Arrow keys, Home, End).
- **Toast**: Polite live region status notifications with manual dismissal.

## Quickstart
```bash
npx @oeste/ui init
npx @oeste/ui add dialog
```

## Structure
- `/src`: Core primitives and documentation site
- `/tokens`: Topanga design tokens and CSS variables
- `llms.txt`: Machine-readable protocol for AI code editors
