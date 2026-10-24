#!/usr/bin/env python3
"""Build Oeste's shadcn-compatible registry (r/*.json) + components.json manifest.

Reads src/index.js (single source of truth), extracts each component function
plus any module-level constants it references, and emits:
  r/<id>.json        shadcn registry item per component
  r/registry.json    index of all components
  components.json    machine-parseable manifest for agents

Run: python3 scripts/build_registry.py
Regenerate after any change to src/index.js. Never hand-edit r/*.json.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src" / "index.js"
RDIR = ROOT / "r"
SITE_BASE = "https://oeste.hiddeninwest.com"
REGISTRY_BASE = SITE_BASE + "/r/"
GITHUB_RAW = "https://raw.githubusercontent.com/eric2busy/Oeste/main/r/"
VERSION = "0.4.8"

# Functional group per component id (used as tags in components.json).
TAGS = {
    "button": ["controls"],
    "input": ["forms"], "textarea": ["forms"], "select": ["forms"],
    "checkbox": ["forms"], "switch": ["forms"], "radiogroup": ["forms"],
    "slider": ["forms"], "toggle": ["forms"], "label": ["forms"],
    "dialog": ["overlays"], "popover": ["overlays"], "tooltip": ["overlays"],
    "dropdown-menu": ["overlays"],
    "toast": ["feedback"], "alert": ["feedback"],
    "card": ["data"], "tabs": ["data"], "accordion": ["data"], "badge": ["data"],
    "progress": ["data"], "avatar": ["data"], "separator": ["data"],
    "table": ["data"], "empty-state": ["data"], "skeleton": ["data"],
    "breadcrumb": ["navigation"], "pagination": ["navigation"],
    "collapsible": ["disclosure"],
    "calendar": ["forms"], "date-picker": ["forms"], "time-picker": ["forms"], "date-range-picker": ["forms"],
    "chart": ["data"],
    "data-grid": ["data"],
}

HEADER = """// Oeste {name} — Topanga theme (v{version}).
// Copy-paste ready. Requires: React 18+, Tailwind with dark: variant, JSX transform.
// Requires Topanga tokens: import src/tokens.css once (or copy src/tokens.json).
// Source: https://github.com/eric2busy/Oeste/blob/main/src/index.js
// Docs: https://oeste.hiddeninwest.com/#/components/{id}
"""


def extract_top_level(text, start_pat):
    """Extract a top-level statement starting at a line matching start_pat.

    The statement ends at the first subsequent line that is exactly `}`, `};`,
    or `];` or a line ending the statement (single-line const). Returns the statement text.
    """
    lines = text.split("\n")
    for i, line in enumerate(lines):
        if re.match(start_pat, line):
            # Single-line statement (const string, etc.)
            if line.rstrip().endswith(";") and line.count("{") == line.count("}"):
                return line + "\n"
            for j in range(i + 1, len(lines)):
                if lines[j] in ("}", "};", "];"):
                    return "\n".join(lines[i:j + 1]) + "\n"
            raise ValueError(f"no terminator for statement starting at line {i + 1}: {line}")
    raise ValueError(f"no statement matching {start_pat}")


def norm(name):
    return name.lower().replace("-", "").replace("_", "")


def main():
    text = SRC.read_text()

    # --- version check: source must already be at VERSION ---
    m = re.search(r'// Oeste Design System — Topanga theme \(v([^)]+)\)', text)
    if not m or m.group(1) != VERSION:
        print(f"FAIL: src/index.js header version is {m.group(1) if m else 'missing'}, expected {VERSION}", file=sys.stderr)
        return 1

    # --- module-level consts (candidates for inclusion) ---
    const_names = re.findall(r"^const (\w+) = ", text, re.M)
    const_src = {name: extract_top_level(text, rf"^const {name} = ") for name in const_names}

    # --- component functions ---
    fn_names = re.findall(r"^export function (\w+)\(", text, re.M)
    fn_src = {name: extract_top_level(text, rf"^export function {name}\(") for name in fn_names}

    # --- COMPONENT_DOCS: id -> (name, tagline) ---
    docs_text = text.split("export const COMPONENT_DOCS", 1)[1]
    entries = re.split(r"\n  \{\n    id: ", docs_text)[1:]
    meta = {}
    for entry in entries:
        idm = re.match(r'"([^"]+)"', entry)
        tagm = re.search(r'tagline: "((?:[^"\\]|\\.)*)"', entry)
        if not idm or not tagm:
            print(f"FAIL: could not parse a COMPONENT_DOCS entry near: {entry[:120]!r}", file=sys.stderr)
            return 1
        meta[idm.group(1)] = tagm.group(1)
    if len(meta) != len(fn_names):
        print(f"FAIL: COMPONENT_DOCS has {len(meta)} entries but {len(fn_names)} component functions", file=sys.stderr)
        return 1

    # --- map id -> export function name (case-insensitive, hyphens ignored) ---
    by_norm = {norm(n): n for n in fn_names}
    items = []
    for cid, tagline in sorted(meta.items()):
        export_name = by_norm.get(norm(cid))
        if not export_name:
            print(f"FAIL: no export function for component id {cid!r}", file=sys.stderr)
            return 1
        body = fn_src[export_name]
        # Referenced module-level consts (whole-word match).
        needed = [c for c in const_names if re.search(rf"\b{c}\b", body)]
        # Referenced sibling components via JSX usage <Name ...> (e.g. EmptyState renders <Button>).
        # These become registryDependencies AND are inlined so the file stays self-contained.
        dep_names = [n for n in fn_names
                     if n != export_name and re.search(rf"<{n}[\s>/]", body)]
        if dep_names:
            seen = set()
            queue = list(dep_names)
            while queue:
                d = queue.pop(0)
                if d in seen:
                    continue
                seen.add(d)
                for n2 in fn_names:
                    if n2 != d and n2 not in seen and re.search(rf"<{n2}[\s>/]", fn_src[d]):
                        queue.append(n2)
            dep_names = sorted(seen)
        dep_ids = sorted({norm(n) for n in dep_names})
        # Consts needed by the component AND its inlined deps.
        dep_bodies = "".join(fn_src[d] for d in dep_names)
        for c in const_names:
            if c not in needed and re.search(rf"\b{c}\b", dep_bodies):
                needed.append(c)
        # Every referenced const must be one we extracted (they all are, by construction).
        # Assemble the body first so the React-import decision sees the full file:
        # components use React.useId / useState / useRef / useEffect / Children /
        # cloneElement, and a standard Vite + React project (automatic JSX runtime)
        # has no React in scope — the file must import React itself.
        body_src = ""
        for c in needed:
            body_src += "\n" + const_src[c]
        # Inlined deps first (so the component's own function can use them),
        # then the component's own function. The file stays a single module.
        for d in dep_names:
            body_src += "\n" + fn_src[d]
        body_src += "\n" + body
        content = HEADER.format(name=export_name, version=VERSION, id=cid)
        if re.search(r"\bReact\.", body_src):
            content += 'import React from "react";\n'
        content += body_src
        # Safety: no dangling reference to a module const that was NOT included.
        for c in const_names:
            if c not in needed and re.search(rf"\b{c}\b", content):
                print(f"FAIL: {export_name} content references {c} without including it", file=sys.stderr)
                return 1
        # Safety: React.* usage without the import must never ship again.
        if re.search(r"\bReact\.", content) and "import React from" not in content:
            print(f"FAIL: {export_name} uses React.* without importing React", file=sys.stderr)
            return 1
        if cid not in TAGS:
            print(f"FAIL: no tag group for component id {cid!r}", file=sys.stderr)
            return 1
        items.append({
            "id": cid,
            "export": export_name,
            "tagline": tagline,
            "content": content,
            "deps": dep_ids,
            "tags": TAGS[cid],
        })

    # --- emit (write-if-changed: a regen must not rewrite — and therefore
    # re-upload — all 29 files when only one component changed) ---
    def write_if_changed(path, text):
        try:
            if path.read_text() == text:
                return False
        except FileNotFoundError:
            pass
        path.write_text(text)
        return True

    changed = 0
    RDIR.mkdir(exist_ok=True)
    for it in items:
        item = {
            "$schema": "https://ui.shadcn.com/schema/registry-item.json",
            "name": it["id"],
            "type": "registry:ui",
            "title": it["export"],
            "description": it["tagline"],
            "registryDependencies": it["deps"],
            "files": [{
                "path": f"components/{it['export']}.jsx",
                "content": it["content"],
                "type": "registry:component",
            }],
            "docs": f"{SITE_BASE}/#/components/{it['id']}",
            "categories": ["oeste"],
        }
        if write_if_changed(RDIR / f"{it['id']}.json", json.dumps(item, indent=1) + "\n"):
            changed += 1

    index = {
        "name": "oeste",
        "version": VERSION,
        "registryBase": REGISTRY_BASE,
        "items": [{
            "id": it["id"],
            "name": it["id"],
            "title": it["export"],
            "description": it["tagline"],
            "url": f"{REGISTRY_BASE}{it['id']}.json",
        } for it in items],
    }
    if write_if_changed(RDIR / "registry.json", json.dumps(index, indent=1) + "\n"):
        changed += 1

    manifest = {
        "version": VERSION,
        "registryBase": REGISTRY_BASE,
        "components": [{
            "id": it["id"],
            "name": it["export"],
            "description": it["tagline"],
            "registryUrl": f"{REGISTRY_BASE}{it['id']}.json",
            "githubRawUrl": f"{GITHUB_RAW}{it['id']}.json",
            "docsUrl": f"#/components/{it['id']}",
            "tags": it["tags"],
        } for it in items],
    }
    if write_if_changed(ROOT / "components.json", json.dumps(manifest, indent=1) + "\n"):
        changed += 1

    # --- blocks (src/blocks.js): full page sections composed from the
    # components above. Blocks install through the SAME registry path
    # as components (r/<id>.json, type registry:block; block slugs never
    # collide with component ids) and carry their OWN manifest
    # (blocks.json) and count; they never enter components.json or
    # r/registry.json, so the component count is untouched. Each block
    # file inlines every component it uses (transitively), same as
    # components inline their sibling deps, so it stays self-contained.
    # BLOCK_DOCS `uses` declares the components the block composes:
    # the ones it renders directly plus any it is responsible for
    # through a direct dep (Button inside EmptyState, Calendar inside
    # DatePicker). The builder fails if the code renders a component
    # directly without declaring it, or declares one that never
    # reaches the file; the full transitive closure is recorded as
    # `includes` / registryDependencies. ---
    BLOCK_HEADER = """// Oeste {name} — Topanga block (v{version}).
// A full page section composed from Oeste components, inlined below so
// this file is self-contained. Copy-paste ready. Requires: React 18+,
// Tailwind with dark: variant, JSX transform.
// Requires Topanga tokens: import src/tokens.css once (or copy src/tokens.json).
// Source: https://github.com/eric2busy/Oeste/blob/main/src/blocks.js
// Docs: https://oeste.hiddeninwest.com/#/blocks/{id}
"""
    blocks_path = ROOT / "src" / "blocks.js"
    block_items = []
    # Previous manifest: the builder owns the flat r/<block-id>.json
    # files of ids it emitted before, so a removed block leaves no stale
    # registry item behind. Component ids are never touched.
    prev_block_ids = []
    if (ROOT / "blocks.json").exists():
        try:
            prev_block_ids = [b["id"] for b in
                              json.loads((ROOT / "blocks.json").read_text()).get("blocks", [])]
        except Exception:
            prev_block_ids = []
    if blocks_path.exists():
        btext = blocks_path.read_text()
        bfn_names = re.findall(r"^export function (\w+)\(", btext, re.M)
        bfn_src = {name: extract_top_level(btext, rf"^export function {name}\(") for name in bfn_names}
        bconst_names = re.findall(r"^const (\w+) = ", btext, re.M)
        bconst_src = {name: extract_top_level(btext, rf"^const {name} = ") for name in bconst_names}
        bmeta = {}
        if "export const BLOCK_DOCS" in btext:
            bdocs = btext.split("export const BLOCK_DOCS", 1)[1]
            for entry in re.split(r"\n  \{\n    id: ", bdocs)[1:]:
                idm = re.match(r'"([^"]+)"', entry)
                namem = re.search(r'name: "((?:[^"\\]|\\.)*)"', entry)
                tagm = re.search(r'tagline: "((?:[^"\\]|\\.)*)"', entry)
                catm = re.search(r'category: "((?:[^"\\]|\\.)*)"', entry)
                usem = re.search(r"uses: \[([^\]]*)\]", entry)
                if not idm or not namem or not tagm or not catm or not usem:
                    print(f"FAIL: could not parse a BLOCK_DOCS entry near: {entry[:120]!r}", file=sys.stderr)
                    return 1
                bmeta[idm.group(1)] = {
                    "name": namem.group(1), "tagline": tagm.group(1),
                    "category": catm.group(1),
                    "uses": re.findall(r'"([^"]+)"', usem.group(1)),
                }
        if len(bmeta) != len(bfn_names):
            print(f"FAIL: BLOCK_DOCS has {len(bmeta)} entries but {len(bfn_names)} block functions", file=sys.stderr)
            return 1
        all_fn_src = dict(fn_src)
        all_fn_src.update(bfn_src)
        by_norm_all = {norm(n): n for n in all_fn_src}
        fn_to_cid = {v: k for k, v in ((cid, by_norm.get(norm(cid))) for cid in meta) if v}
        fn_to_bid = {}
        for bid in bmeta:
            fn = by_norm_all.get(norm("Block" + bid))
            if fn:
                fn_to_bid[fn] = bid
        for bid, bm in sorted(bmeta.items()):
            if bid in meta:
                print(f"FAIL: block id {bid!r} collides with a component id", file=sys.stderr)
                return 1
            export_name = by_norm_all.get(norm("Block" + bid))
            if not export_name or export_name not in bfn_src:
                print(f"FAIL: no block export function for block id {bid!r} (expected a Block-prefixed export)", file=sys.stderr)
                return 1
            body = bfn_src[export_name]
            direct = [n for n in all_fn_src
                      if n != export_name and re.search(rf"<{n}[\s>/]", body)]
            direct_cids = sorted({fn_to_cid[d] for d in direct if d in fn_to_cid})
            undeclared = [c for c in direct_cids if c not in bm["uses"]]
            if undeclared:
                print(f"FAIL: block {bid!r} directly composes {undeclared} but does not declare them in uses={sorted(bm['uses'])}", file=sys.stderr)
                return 1
            seen = set()
            queue = list(direct)
            while queue:
                d = queue.pop(0)
                if d in seen:
                    continue
                seen.add(d)
                for n2 in all_fn_src:
                    if n2 != d and n2 not in seen and re.search(rf"<{n2}[\s>/]", all_fn_src[d]):
                        queue.append(n2)
            dep_names = sorted(seen)
            includes = sorted({fn_to_cid[d] for d in dep_names if d in fn_to_cid})
            phantom = [c for c in bm["uses"] if c not in includes]
            if phantom:
                print(f"FAIL: block {bid!r} declares uses {phantom} but they never reach the file (closure is {includes})", file=sys.stderr)
                return 1
            dep_bids = sorted({fn_to_bid[d] for d in dep_names if d in fn_to_bid})
            needed = [c for c in const_names if re.search(rf"\b{c}\b", body)]
            bneeded = [c for c in bconst_names if re.search(rf"\b{c}\b", body)]
            dep_bodies = "".join(all_fn_src[d] for d in dep_names)
            for c in const_names:
                if c not in needed and re.search(rf"\b{c}\b", dep_bodies):
                    needed.append(c)
            for c in bconst_names:
                if c not in bneeded and re.search(rf"\b{c}\b", dep_bodies):
                    bneeded.append(c)
            body_src = ""
            for c in needed:
                body_src += "\n" + const_src[c]
            for c in bneeded:
                body_src += "\n" + bconst_src[c]
            for d in dep_names:
                body_src += "\n" + all_fn_src[d]
            body_src += "\n" + body
            content = BLOCK_HEADER.format(name=export_name, version=VERSION, id=bid)
            if re.search(r"\bReact\.", body_src):
                content += 'import React from "react";\n'
            content += body_src
            for c in const_names + bconst_names:
                if c not in needed and c not in bneeded and re.search(rf"\b{c}\b", content):
                    print(f"FAIL: block {export_name} content references {c} without including it", file=sys.stderr)
                    return 1
            if re.search(r"\bReact\.", content) and "import React from" not in content:
                print(f"FAIL: block {export_name} uses React.* without importing React", file=sys.stderr)
                return 1
            block_items.append({
                "id": bid, "name": bm["name"], "export": export_name,
                "tagline": bm["tagline"], "category": bm["category"],
                "content": content, "uses": sorted(bm["uses"]),
                "includes": includes, "deps": sorted(set(includes) | set(dep_bids)),
            })

    live_block_ids = {it["id"] for it in block_items}
    for it in block_items:
        item = {
            "$schema": "https://ui.shadcn.com/schema/registry-item.json",
            "name": it["id"],
            "type": "registry:block",
            "title": it["export"],
            "description": it["tagline"],
            "registryDependencies": it["deps"],
            "files": [{
                "path": f"blocks/{it['export']}.jsx",
                "content": it["content"],
                "type": "registry:block",
            }],
            "docs": f"{SITE_BASE}/#/blocks/{it['id']}",
            "categories": ["oeste", "blocks", it["category"].lower()],
        }
        if write_if_changed(RDIR / f"{it['id']}.json", json.dumps(item, indent=1) + "\n"):
            changed += 1
    for old_id in prev_block_ids:
        if old_id not in live_block_ids and old_id not in meta:
            stale = RDIR / f"{old_id}.json"
            if stale.exists():
                stale.unlink()
                changed += 1

    blocks_manifest = {
        "name": "oeste-topanga-blocks",
        "version": VERSION,
        "registryBase": SITE_BASE + "/r/",
        "count": len(block_items),
        "blocks": [{
            "id": it["id"],
            "name": it["name"],
            "export": it["export"],
            "description": it["tagline"],
            "category": it["category"],
            "registryUrl": f"{SITE_BASE}/r/{it['id']}.json",
            "githubRawUrl": f"{GITHUB_RAW}{it['id']}.json",
            "docsUrl": f"#/blocks/{it['id']}",
            "uses": it["uses"],
            "includes": it["includes"],
        } for it in block_items],
    }
    if write_if_changed(ROOT / "blocks.json", json.dumps(blocks_manifest, indent=1) + "\n"):
        changed += 1

    print(f"OK: {len(items)} registry items + registry.json + components.json (v{VERSION}, {changed} files changed)")
    print(f"OK: {len(block_items)} block items + blocks.json (own count; components stay {len(items)})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
