---
name: oeste
description: Build UI with Oeste component libraries (Topanga, Huntington, Mesa). Use when the user wants a component, a page, or UI from Oeste, or mentions Oeste, Topanga, Huntington, or Mesa. Covers discovering components, fetching contracts, and integrating copy-paste React + Tailwind code.
---

# Oeste

Oeste is three component libraries on one foundation. One system. Three perspectives.

- **Topanga** — The debut library. Warm paper, canyon clay, ochre, sagebrush, precision hairlines. Light + dark.
- **Huntington** — A single-column library. Five moods: Paper, Ink, Rose, Sage, Dune. Hairlines instead of shadows, no filled button.
- **Mesa** — Warm paper, near-black ink, oxblood for status. Dark by default. Hairlines and double rules.

All three are MIT, free, and copy-paste: you own the code. Install via the shadcn registry, or copy the snippet and own the file.

## Workflow: discover, then fetch, then integrate

Never guess a component id, a prop, or a color value. Follow this order every time.

1. **Discover.** Call `list_components` (optionally with a `query` and a `library`) to find the exact component id. If the user named a library, use it. If not, pick the library that fits the product's look (Topanga for warm editorial, Huntington for single-column minimal, Mesa for data and app UI).
2. **Fetch.** Call `get_component` with the library and the exact id. Read the full contract: Human docs (anatomy, props, keyboard, accessibility), Agent contract, and Vibe code. If you need tokens, call `get_theme_variables` for that library. If you need the library-wide picture, call `get_library_docs`.
3. **Integrate.** Use the Vibe code from the contract as the base. Keep the component's structure, props, and keyboard behavior exactly as specified. Style only with the library's tokens (from `get_theme_variables`). Load that library's `src/tokens.css` once. Never mix tokens across libraries. Never invent a prop, a variant, or a color.

## Rules

- Always fetch the contract before generating UI for a component. The contract is the source of truth.
- One library per surface. Never mix Topanga, Huntington, and Mesa tokens or components on the same page.
- Tokens live in `<library>/src/tokens.css` + `<library>/src/tokens.json`. Use them. Never hardcode a color from memory.
- Install with shadcn (`npx shadcn@latest add https://oeste.hiddeninwest.com/<library>/r/<id>.json`) or copy the snippet. Do not invent an install command.
- If a component does not exist in the requested library, say so and suggest the closest match from `list_components`. Do not substitute a component from another library without telling the user.
- If the user asks for something Oeste does not have (for example, a data grid outside Mesa), say so plainly instead of building a lookalike from another library's tokens.

## Prompting the user

When the user asks for Oeste UI but does not name a library, ask which library fits (one question), or pick the best fit and say which one you picked. When they describe a page, name the skeleton first (for example, "Card plus Button plus Dialog from Topanga"), then describe the delta, one request at a time. See `PROMPTING.md` for examples.
