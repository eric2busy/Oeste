# Oeste MCP server

An MCP server for the Oeste component libraries: Topanga, Huntington, and Mesa. It serves the live contracts from oeste.hiddeninwest.com, so an AI client always reads the current version.

One system. Three perspectives.

## Tools

- `list_components` — List components across all three libraries, or one library. Filter by a query (name, id, description, tag). Use this first to discover the exact component id.
- `get_component` — Get the full contract for one component: Human docs, Agent contract (oeste.component.v1), and Vibe code (copy-paste React + Tailwind). Always fetch the contract before generating UI for a component.
- `get_theme_variables` — Get the design tokens for one library (light and dark). Use these values when styling. Never invent color values, and never mix tokens across libraries.
- `get_library_docs` — Get the full llms.txt contract for one library (usage rules, install commands, complete component reference).

## Quickstart

No install. Add the server to your AI client, and it runs via npx from GitHub.

### Claude Code

```bash
claude mcp add --transport stdio oeste -- npx -y github:eric2busy/Oeste
```

### Cursor

Add to your MCP config (`~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "oeste": {
      "command": "npx",
      "args": ["-y", "github:eric2busy/Oeste"]
    }
  }
}
```

### VS Code (Copilot)

Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "oeste": {
      "command": "npx",
      "args": ["-y", "github:eric2busy/Oeste"]
    }
  }
}
```

### Run it directly

```bash
node mcp/server.mjs
```

Requires Node 18 or newer. No dependencies. The server speaks MCP over stdio (newline-delimited JSON-RPC 2.0).

## Environment

- `OESTE_BASE_URL` — Base URL the server fetches contracts from. Defaults to `https://oeste.hiddeninwest.com`. Point it at a preview deployment to test against unreleased content.

## Skills and prompting

- `SKILL.md` — A Skills file for AI clients that support them. Copy it into your client's skills directory. It teaches the discover, then fetch, then integrate workflow.
- `PROMPTING.md` — A short prompting guide: how to ask for Oeste UI so the agent builds it right the first time.

## License

MIT.
