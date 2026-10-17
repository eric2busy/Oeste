# Oeste

One system. Three perspectives.

Oeste is a component reference for humans, AI agents, and vibe coders. Three component libraries, each complete: Human docs, Agent contracts, Vibe code.

## Libraries

- **Topanga** (v0.4.8, 29 components) — The debut library. Warm paper, canyon clay, ochre, sagebrush, precision hairlines. Light + dark. Docs: https://oeste.hiddeninwest.com/topanga/
- **Huntington** (v0.2.0, 40 components) — A single-column library. Five moods: Paper, Ink, Rose, Sage, Dune. Hairlines instead of shadows, no filled button. Docs: https://oeste.hiddeninwest.com/huntington/
- **Mesa** (v0.2.0, 67 components) — Warm paper, near-black ink, oxblood for status. Dark by default. Hairlines and double rules. Docs: https://oeste.hiddeninwest.com/mesa/

## Layout

- `index.html` — The Oeste home page (oeste.hiddeninwest.com).
- `vercel.json` — Routing: library paths plus Topanga legacy redirects.
- `llms.txt` — Index for agents.
- `support/` — Support page (oeste.hiddeninwest.com/support/).
- `topanga/` — Topanga library source (docs site, tokens, registry, scripts).
- `huntington/` — Huntington library source.
- `mesa/` — Mesa library source.

Each library has its own `components.json` manifest, `r/` registry items, `src/` tokens and components, `site/` docs, `scripts/` builders, and `llms.txt` contract.

## Install

```
npx shadcn@latest add https://oeste.hiddeninwest.com/<library>/r/<component>.json
```

Replace `<library>` with `topanga`, `huntington`, or `mesa`, and `<component>` with a component id from that library's manifest.

## Backwards compatibility

- `/r/*` redirects to `/topanga/r/*` (Topanga's registry kept its old address working).
- `/components.json` redirects to `/topanga/components.json`.
- Old Topanga deep links (`oeste.hiddeninwest.com/#/...`) redirect to `/topanga/#/...`.
- Old Topanga asset paths `/src/*` and `/site/*` redirect to `/topanga/src/*` and `/topanga/site/*`.

## License

MIT. See LICENSE.
