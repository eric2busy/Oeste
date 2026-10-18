// Oeste Design System — Mesa theme (v0.2.0)
// React + Tailwind primitives, copy-paste ready.
// Requires: React 18+ in scope, Tailwind with dark: variant, JSX transform.
// Tokens in this file MUST match src/tokens.json and src/tokens.css exactly.
// Demos are local only — no network, no auth, no data storage.
// Dark is the default theme. Mesa is a universal component library:
// every component carries a generic name and generic placeholder copy.

export const DESIGN_TOKENS = Object.freeze({
  name: "oeste-mesa",
  version: "0.2.0",
  color: {
    accent: "#8a1f2b",
    accentDeep: "#6d1620",
    assignLampOff: "#5a4a1f",
    assignLampOffRing: "rgba(216,169,63,0.12)",
    assignLampOn: "#3f9e4d",
    bg: "#faf9f7",
    btnText: "#f7f4ec",
    card: "#ffffff",
    ctaBandBg: "#181b1f",
    ctaBandHeading: "#ffffff",
    ctaBandMuted: "#b9b4a8",
    ctaBandText: "#f4f1ea",
    dark: "#141114",
    darkMode: {
      accent: "#c9404f",
      accentDeep: "#a52336",
      bg: "#100e0b",
      btnText: "#ffffff",
      card: "#181410",
      ctaBandBg: "#181410",
      dark: "#0a0806",
      diffBandBg: "#0b0908",
      focusRing: "rgba(201,64,79,0.12)",
      ghostBtnBorder: "#4a4034",
      heroEm: "#e87a88",
      ink: "#ece3d0",
      inkFaint: "#6e6455",
      inkSoft: "#a79b82",
      line: "#2e2720",
      lineSoft: "#221c16",
      navBg: "rgba(16,14,11,0.87)",
      ok: "#8fae62",
      oxblood: "#c9404f",
      oxbloodDeep: "#a52336",
      paletteScrim: "rgba(5,4,3,0.6)",
      paper: "#100e0b",
      pillOpenText: "#ffffff",
      pillVerifyingBg: "#2a2112",
      pillVerifyingText: "#e87a88",
      selectionBg: "#c9404f",
      selectionText: "#ffffff",
      themeColor: "#100e0b",
      warn: "#c9404f",
      wash: "#14110c",
    },
    diffBandBg: "#181b1f",
    diffBandHeading: "#ffffff",
    diffBandKicker: "#d98a8a",
    diffBandLine: "#3a3232",
    diffBandMuted: "#b9b4a8",
    diffBandText: "#f4f1ea",
    focusRing: "rgba(138,31,43,0.12)",
    ghostBtnBorder: "#ddd6c7",
    heroEm: "#6d1620",
    ink: "#181b1f",
    inkFaint: "#8a8e93",
    inkSoft: "#5b5f65",
    line: "#ddd6c7",
    lineSoft: "#ece5d5",
    navBg: "rgba(255,255,255,0.88)",
    ok: "#2e6b3e",
    oxblood: "#8a1f2b",
    oxbloodDeep: "#6d1620",
    paletteScrim: "rgba(24,27,31,0.45)",
    paper: "#faf9f7",
    pillOpenText: "#2e2b25",
    pillRewardBg: "#f5e6c4",
    pillRewardBorder: "#e3cf9a",
    pillRewardText: "#7a5c14",
    pillVerifyingBg: "#f7ecd7",
    pillVerifyingText: "#8a5a1f",
    queuePingRing: "#c9a227",
    selectionBg: "#8a1f2b",
    selectionText: "#ffffff",
    stampClosed: "#777777",
    stampNew: "#d8a93f",
    stampOpen: "#c9404f",
    stampReview: "#c98a2b",
    themeColor: "#faf9f7",
    warn: "#8a5a1f",
    wash: "#f1ede5",
  },
  radius: {
    detailCard: "14px",
    button: "6px",
    card: "8px",
    chip: "999px",
    ctaband: "12px",
    dirSearch: "8px",
    emptyState: "12px",
    fcard: "10px",
    folder: "10px",
    forumCtl: "999px",
    statusBadge: "999px",
    iconbtn: "50%",
    input: "6px",
    num: "6px",
    numLg: "8px",
    numXl: "10px",
    emptyAttachment: "6px",
    navToggle: "6px",
    paletteBox: "12px",
    pill: "999px",
    profileStatus: "999px",
    pstrip: "12px",
    queueCount: "10px",
    stamp: "4px",
    themebtn: "999px",
    wfile: "4px",
    mediaCard: "8px",
    resultCard: "12px",
    miniGate: "8px",
    startHere: "8px",
    searchPill: "999px",
    duoCard: "8px",
    select: "6px",
    optionRow: "6px",
    pillFlag: "4px",
    railThumb: "4px",
  },
  shadow: {
    cardHoverDark: "0 12px 32px rgba(0,0,0,0.35)",
    cardHoverLight: "0 12px 32px rgba(24,27,31,0.09)",
    focusRing: "0 0 0 3px rgba(138,31,43,0.12)",
    folderHover: "0 16px 36px rgba(0,0,0,0.35)",
    none: "none",
    paletteBox: "0 24px 64px rgba(0,0,0,0.28)",
    stampHitDark: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
  },
  space: {
    layoutWrapMax: "1060px",
    layoutWrapPadding: "0 20px",
    observed: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 34, 44],
    sectionPadding: "34px 0",
  },
  type: {
    families: {
      mono: "ui-monospace, 'SF Mono', 'Cascadia Code', Menlo, Consolas, 'Liberation Mono', monospace",
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, Helvetica, Arial, sans-serif",
      serif: "Merriweather, Georgia, 'Times New Roman', serif",
    },
    headingLineHeight: "1.18",
    headingTracking: "-0.01em",
    headingWeight: 700,
    letterSpacing: {
      diffNum: "0.06em",
      fileNumber: "0.24em",
      kicker: "0.26em",
      label: "0.14em",
      monoMeta: "0.1em-0.2em",
      queueLabel: "0.1em",
      stamp: "0.14em",
    },
    sizes: {
      detailNo: "21px",
      body: "16px",
      bodyLineHeight: "1.6",
      deck: "17.5px",
      folderTitle: "24px",
      ghostNum: "118px",
      h1Entry: "clamp(32px, 7vw, 52px)",
      h2: "clamp(26px, 5vw, 36px)",
      heroBignum: "clamp(58px, 16vw, 124px)",
      heroH1: "clamp(27px, 6.8vw, 42px)",
      kicker: "11px",
      statNum: "20px",
      tableTitle: "17px",
      monoLabel: "11.5px",
      stamp: "11px",
    },
  },
});

const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#181b1f] dark:focus-visible:outline-[#ece3d0]";
const SERIF = "font-['Merriweather',Georgia,'Times_New_Roman',serif]";
const MONO = "font-[ui-monospace,'SF_Mono','Cascadia_Code',Menlo,Consolas,monospace]";
const INK = "text-[#181b1f] dark:text-[#ece3d0]";
const SOFT = "text-[#5b5f65] dark:text-[#a79b82]";
const FAINT = "text-[#8a8e93] dark:text-[#6e6455]";
const LINE = "border-[#ddd6c7] dark:border-[#2e2720]";
const CARD = "bg-[#ffffff] dark:bg-[#181410]";
const DOUBLE_TOP = "border-t-[3px] border-t-double border-t-[#181b1f] dark:border-t-[#ece3d0]";

/* ---------------- Site Nav ---------------- */

export function SiteNav({ links = [], active = "", theme = "dark", onThemeToggle, onMenuToggle }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ddd6c7] bg-[rgba(255,255,255,0.88)] backdrop-blur-md dark:border-[#2e2720] dark:bg-[rgba(16,14,11,0.87)]">
      <div className="mx-auto flex max-w-[1060px] flex-wrap items-center gap-2 px-5 py-3">
        <a href="#/" className={`text-xl font-bold tracking-[-0.01em] ${INK} ${FOCUS}`}>mesa</a>
        <nav className="flex flex-wrap gap-1" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} aria-current={l.href === active ? "page" : undefined} className={`rounded px-2 py-2 text-[13px] ${l.href === active ? "font-semibold text-[#8a1f2b] dark:text-[#c9404f]" : `${SOFT} hover:text-[#181b1f] dark:hover:text-[#ece3d0]`} ${FOCUS}`}>{l.label}</a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <NavToggle onToggle={onMenuToggle} />
        </div>
      </div>
      <div className="h-[2px] bg-[#8a1f2b] dark:bg-[#c9404f]" aria-hidden="true" />
    </header>
  );
}

/* ---------------- Command Palette ---------------- */

export function CommandPalette({ open = false, query = "", onQueryChange, items = [], onSelect, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-[rgba(24,27,31,0.45)] p-4 dark:bg-[rgba(5,4,3,0.6)]" onClick={onClose} role="presentation">
      <div className={`w-full max-w-[580px] overflow-hidden rounded-xl ${CARD} border ${LINE} shadow-[0_24px_64px_rgba(0,0,0,0.28)]`} role="dialog" aria-modal="true" aria-label="Command palette" onClick={(e) => e.stopPropagation()}>
        <input autoFocus value={query} onChange={(e) => onQueryChange && onQueryChange(e.target.value)} placeholder="Search or jump…" aria-label="Search or jump" className={`w-full border-b ${LINE} bg-transparent px-4 py-4 text-base ${INK} placeholder:text-[#8a8e93] dark:placeholder:text-[#6e6455] focus:outline-none`} />
        <ul className="max-h-[330px] overflow-auto p-2" role="listbox" aria-label="Results">
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" role="option" aria-selected={false} onClick={() => onSelect && onSelect(item)} className={`flex w-full items-baseline justify-between gap-3 rounded px-3 py-2.5 text-left hover:bg-[#f1ede5] dark:hover:bg-[#14110c] ${FOCUS}`}>
                <span className={INK}>{item.label}</span>
                <span className={`${MONO} text-[10.5px] uppercase ${SOFT}`}>{item.kind}</span>
              </button>
            </li>
          ))}
        </ul>
        <p className={`border-t ${LINE} px-4 py-2 text-[11.5px] ${SOFT}`}>Enter to open. Escape to close.</p>
      </div>
    </div>
  );
}

/* ---------------- Page Header ---------------- */

export function PageHeader({ eyebrow, title, deck, reference, ghostNumber }) {
  return (
    <header className="relative pt-11">
      {ghostNumber && <span aria-hidden="true" className={`${SERIF} pointer-events-none absolute right-0 top-0 text-[118px] font-black leading-none text-[#181b1f] opacity-[0.06] dark:text-[#ece3d0]`}>{ghostNumber}</span>}
      {eyebrow && <p className={`${MONO} text-[11px] font-bold uppercase tracking-[0.26em] ${FAINT}`}>{eyebrow}</p>}
      <h1 className={`${SERIF} mt-3 max-w-[18ch] text-[clamp(32px,7vw,52px)] font-bold leading-[1.18] tracking-[-0.01em] ${INK}`}>{title}</h1>
      {deck && <p className={`mt-4 max-w-[60ch] text-[17.5px] leading-[1.6] ${SOFT}`}>{deck}</p>}
      {reference && <p className={`${MONO} mt-4 text-[12.5px] tracking-[0.02em] ${SOFT}`}>{reference}</p>}
    </header>
  );
}

/* ---------------- Hero ---------------- */

export function Hero({ eyebrow, bignum, bignumLabel, bignumSuffix, title, accent, sub, trustlineCount, trustlineCountHref, trustline }) {
  return (
    <section className="py-[60px] pb-9">
      {eyebrow && <p className={`${MONO} mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#8a1f2b] dark:text-[#c9404f]`}>{eyebrow}</p>}
      {bignumLabel && <p className="mt-3 mb-1 text-[13px] uppercase tracking-[0.14em] text-[#5b5f65] dark:text-[#a79b82]">{bignumLabel}</p>}
      {bignum && (
        <p className={`${SERIF} mt-2 mb-1 text-[clamp(58px,16vw,124px)] font-black leading-none tracking-[-0.015em] tabular-nums ${INK}`}>{bignum}{bignumSuffix && <span className="text-[0.32em]">{bignumSuffix}</span>}</p>
      )}
      <h1 className={`${SERIF} mt-[14px] mb-3 max-w-[20ch] text-[clamp(27px,6.8vw,42px)] font-bold leading-[1.18] tracking-[-0.01em] ${INK}`}>{title} {accent && <em className="italic text-[#6d1620] dark:text-[#e87a88]">{accent}</em>}</h1>
      {sub && <p className={`mt-2.5 max-w-[56ch] text-base leading-[1.6] ${SOFT}`}>{sub}</p>}
      <div className="mt-1.5 flex flex-wrap gap-3">
        <Button variant="primary">Get started</Button>
        <Button variant="ghost"><span aria-hidden="true" className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#2e6b3e] dark:bg-[#8fae62]" />Browse components</Button>
      </div>
      {trustline && <p className={`mt-[26px] text-sm ${SOFT}`}>{trustlineCount ? <><a href={trustlineCountHref} className="font-bold text-[#6d1620] no-underline dark:text-[#c9404f]">{trustlineCount}</a> · </> : null}{trustline}</p>}
    </section>
  );
}

/* ---------------- Status Badge ---------------- */

export function StatusBadge({ children, live = true }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border ${LINE} ${CARD} px-3.5 py-1.5 text-[12.5px] ${SOFT}`}>
      {live && <span aria-hidden="true" className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#2e6b3e] dark:bg-[#8fae62]" />}
      {children}
    </span>
  );
}

/* ---------------- File Card ---------------- */

export function FileCard({ reference, title, description, meta, assignment }) {
  return (
    <a href="#" className={`block rounded-[10px] border ${LINE} ${CARD} p-[22px] transition hover:-translate-y-0.5 hover:border-[#d5cdbb] hover:shadow-[0_12px_32px_rgba(24,27,31,0.09)] dark:hover:border-[#3d342a] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] ${FOCUS}`}>
      <div className="mb-2.5 flex gap-2">
        {reference && <span className={`${MONO} text-xs tracking-[0.08em] text-[#8a1f2b] dark:text-[#c9404f]`}>{reference}</span>}
      </div>
      <h3 className={`${SERIF} text-[clamp(21px,5vw,27px)] font-bold leading-[1.18] ${INK}`}>{title}</h3>
      {description && <p className={`mt-2 text-[15px] leading-[1.6] ${SOFT}`}>{description}</p>}
      {meta && <p className={`mt-2 text-[13px] ${SOFT}`}>{meta}</p>}
      {assignment && <AssignmentLine state={assignment} />}
    </a>
  );
}

/* ---------------- Folder Card ---------------- */

const FOLDER_STAMPS = {
  open: "border-[#c9404f] text-[#c9404f]",
  new: "border-[#d8a93f] text-[#d8a93f]",
  review: "border-[#c98a2b] text-[#c98a2b]",
  closed: "border-[#777777] text-[#777777]",
};

export function FolderCard({ stamp = "open", stampLabel, title, meta, metaRow = [], assignment }) {
  return (
    <article className={`relative w-[290px] rounded-[10px] border ${LINE} ${CARD} px-5 pb-4 pt-[34px] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]`}>
      <span aria-hidden="true" className={`${MONO} absolute right-4 top-4 rotate-6 rounded border-2 bg-transparent px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] ${FOLDER_STAMPS[stamp] || FOLDER_STAMPS.open}`}>{stampLabel || stamp}</span>
      <p className={`${MONO} text-xs tracking-[0.08em] text-[#8a1f2b] dark:text-[#c9404f]`}>Folder</p>
      <h3 className="mt-2 text-2xl font-extrabold uppercase leading-[1.04] tracking-[0.005em] text-[#181b1f] dark:text-[#ece3d0]">{title}</h3>
      {meta && <p className={`${MONO} mt-2 text-[11px] uppercase tracking-[0.14em] ${SOFT}`}>{meta}</p>}
      {metaRow.length > 0 && (
        <p className={`${MONO} mt-3 flex gap-4 border-t border-dashed ${LINE} pt-3 text-[10.5px] uppercase tracking-[0.12em] ${SOFT}`}>
          {metaRow.map((m) => (<span key={m.label}>{m.label} <strong className={INK}>{m.value}</strong></span>))}
        </p>
      )}
      {assignment && <AssignmentLine state={assignment} />}
    </article>
  );
}

/* ---------------- Data Table ---------------- */

export function DataTable({ rows = [] }) {
  return (
    <div className={`border-t ${LINE}`}>
      {rows.map((row) => (
        <a key={row.id} href={row.href || "#"} className={`grid grid-cols-[150px_1fr_auto_auto_20px] items-baseline gap-5 border-b ${LINE} px-2 py-[18px] hover:bg-[rgba(255,255,255,0.025)] dark:hover:bg-[rgba(255,255,255,0.025)] ${FOCUS}`}>
          <span className={`${MONO} text-xs tracking-[0.08em] text-[#8a1f2b] dark:text-[#c9404f]`}>{row.reference}</span>
          <span className={`text-[17px] font-bold ${INK}`}>{row.title}</span>
          <span className={`text-[13px] ${SOFT}`}>{row.meta}</span>
          {row.assignment && <AssignmentLine state={row.assignment} compact />}
          <span aria-hidden="true" className={`text-[18px] ${SOFT}`}>→</span>
        </a>
      ))}
    </div>
  );
}

/* ---------------- Pill ---------------- */

const PILL_STYLES = {
  type: "border border-[#ddd6c7] bg-transparent text-[#5b5f65] dark:border-[#2e2720] dark:text-[#a79b82]",
  open: "border border-[#2e2b25] bg-transparent text-[#2e2b25] dark:border-[#ffffff] dark:text-[#ffffff]",
  verifying: "bg-[#f7ecd7] text-[#8a5a1f] dark:bg-[#2a2112] dark:text-[#e87a88]",
  reward: "border border-[#e3cf9a] bg-[#f5e6c4] text-[#7a5c14]",
  indexed: "border border-[#ddd6c7] bg-transparent text-[#5b5f65] dark:border-[#2e2720] dark:text-[#a79b82]",
};

export function Pill({ variant = "type", children }) {
  // Flag is a separate treatment, not a rounded pill: fixed gold bg, dark
  // text, 4px radius, 10.5px 800 type. It does not share the pill base.
  if (variant === "flag") {
    return (
      <span className="inline-block rounded bg-[#e8c56a] px-2.5 py-1 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#0d0c0a]">{children}</span>
    );
  }
  return (
    <span className={`inline-block rounded-full px-2.5 py-[3px] text-[11px] font-bold uppercase tracking-[0.08em] ${PILL_STYLES[variant] || PILL_STYLES.type}`}>{children}</span>
  );
}

/* ---------------- Stamp ---------------- */

const STAMP_STYLES = {
  default: "border-[#181b1f] text-[#181b1f] dark:border-[#ece3d0] dark:text-[#ece3d0]",
  ok: "border-[#2e6b3e] text-[#2e6b3e] dark:border-[#8fae62] dark:text-[#8fae62]",
  dim: "border-[#8a8e93] text-[#8a8e93] dark:border-[#6e6455] dark:text-[#6e6455]",
  warn: "border-[#8a5a1f] text-[#8a5a1f] dark:border-[#c9404f] dark:text-[#c9404f]",
};

export function Stamp({ tone = "default", children }) {
  return (
    <span className={`${MONO} inline-block rotate-6 rounded border-2 bg-transparent px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${STAMP_STYLES[tone] || STAMP_STYLES.default}`}>{children}</span>
  );
}

/* ---------------- Assignment Line ---------------- */

export function AssignmentLine({ state = "awaiting", label, compact = false }) {
  const on = state === "on";
  return (
    <p className={`${MONO} flex items-center gap-2.5 ${compact ? "" : "mt-3 border-t border-[#ddd6c7] pt-3 dark:border-[#2e2720]"} text-[10.5px] uppercase tracking-[0.16em] ${on ? INK : SOFT}`}>
      <span aria-hidden="true" className={`inline-block h-[9px] w-[9px] rounded-full ${on ? "bg-[#3f9e4d] shadow-[0_0_8px_rgba(63,158,77,0.8)] animate-pulse" : "bg-[#5a4a1f] shadow-[0_0_0_3px_rgba(216,169,63,0.12)]"}`} />
      {label || (on ? "Assigned" : "Awaiting")}
    </p>
  );
}

/* ---------------- Button ---------------- */

const BUTTON_STYLES = {
  primary: "bg-[#181b1f] text-[#f7f4ec] hover:bg-[#6d1620] dark:bg-[#c9404f] dark:text-[#ffffff] dark:hover:bg-[#a52336]",
  solid: "bg-[#8a1f2b] text-[#ffffff] hover:bg-[#6d1620] dark:bg-[#c9404f] dark:text-[#ffffff] dark:hover:bg-[#a52336]",
  ghost: "border border-[#ddd6c7] bg-transparent text-[#181b1f] hover:border-[#8a1f2b] hover:text-[#8a1f2b] dark:border-[#4a4034] dark:text-[#a79b82] dark:hover:border-[#ece3d0] dark:hover:text-[#ffffff]",
  "solid-small": "bg-[#8a1f2b] px-4 py-2 text-[13.5px] font-semibold text-[#ffffff] hover:bg-[#6d1620] dark:bg-[#c9404f] dark:hover:bg-[#a52336]",
};

export function Button({ children, variant = "primary", disabled = false, onClick, type = "button" }) {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-[26px] py-[14px] text-[15px] font-bold transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50 ${BUTTON_STYLES[variant] || BUTTON_STYLES.primary} ${FOCUS}`}>
      {children}
    </button>
  );
}

/* ---------------- Filter Chip ---------------- */

export function FilterChip({ children, count, active = false, onToggle }) {
  return (
    <button type="button" aria-pressed={active} onClick={onToggle} className={`rounded-full border px-3.5 py-[7px] text-[13px] transition ${active ? "border-[#181b1f] bg-[#181b1f] text-[#ffffff] dark:border-[#c9404f] dark:bg-[#c9404f]" : `border-[#ddd6c7] bg-[#ffffff] text-[#5b5f65] hover:border-[#5b5f65] hover:text-[#181b1f] dark:border-[#2e2720] dark:bg-[#181410] dark:text-[#a79b82] dark:hover:border-[#a79b82] dark:hover:text-[#ece3d0]`} ${FOCUS}`}>
      {children}
      {count !== undefined && <span className="ml-[5px] text-[11.5px] opacity-55">{count}</span>}
    </button>
  );
}

/* ---------------- Forum Control ---------------- */

export function ForumControl({ children, on = false, onToggle }) {
  return (
    <button type="button" aria-pressed={on} onClick={onToggle} className={`${MONO} rounded-full border px-3.5 py-2 text-[11.5px] font-bold uppercase tracking-[0.08em] transition ${on ? "border-[#8a1f2b] bg-[#8a1f2b] text-[#ffffff] dark:border-[#c9404f] dark:bg-[#c9404f]" : `border-[#ddd6c7] bg-transparent text-[#5b5f65] dark:border-[#2e2720] dark:text-[#a79b82]`} ${FOCUS}`}>
      {children}
    </button>
  );
}

/* ---------------- Submission Form ---------------- */

export function SubmissionForm({ onSubmit }) {
  const autoId = React.useId();
  return (
    <form className={`rounded-lg border ${LINE} ${CARD} px-[22px] py-1.5 pt-[26px]`} onSubmit={(e) => { e.preventDefault(); if (onSubmit) onSubmit(new FormData(e.currentTarget)); }}>
      <div className={`border-b ${LINE} py-4`}>
        <label htmlFor={`${autoId}-title`} className={`${MONO} mb-2.5 block text-[11.5px] font-bold uppercase tracking-[0.14em] ${SOFT}`}>Title</label>
        <input id={`${autoId}-title`} name="title" type="text" required className={`w-full rounded-md border ${LINE} bg-[#faf9f7] px-3.5 py-3 text-[15px] ${INK} placeholder:text-[#8a8e93] focus:border-[#8a1f2b] focus:outline-none focus:ring-[0_0_0_3px_rgba(138,31,43,0.12)] dark:bg-[#100e0b] dark:placeholder:text-[#6e6455] dark:focus:border-[#c9404f] dark:focus:ring-[0_0_0_3px_rgba(201,64,79,0.12)]`} placeholder="Title goes here." />
      </div>
      <div className={`border-b ${LINE} py-4`}>
        <label htmlFor={`${autoId}-body`} className={`${MONO} mb-2.5 block text-[11.5px] font-bold uppercase tracking-[0.14em] ${SOFT}`}>Details</label>
        <textarea id={`${autoId}-body`} name="body" rows={4} className={`w-full rounded-md border ${LINE} bg-[#faf9f7] px-3.5 py-3 text-[15px] ${INK} placeholder:text-[#8a8e93] focus:border-[#8a1f2b] focus:outline-none focus:ring-[0_0_0_3px_rgba(138,31,43,0.12)] dark:bg-[#100e0b] dark:placeholder:text-[#6e6455] dark:focus:border-[#c9404f] dark:focus:ring-[0_0_0_3px_rgba(201,64,79,0.12)]`} placeholder="Description goes here." />
      </div>
      <fieldset className="py-4">
        <legend className={`${MONO} mb-2.5 text-[11.5px] font-bold uppercase tracking-[0.14em] ${SOFT}`}>Type</legend>
        <label className={`mb-2 flex items-center gap-3 rounded-md border ${LINE} bg-[#faf9f7] px-4 py-3.5 text-[15px] ${INK} dark:bg-[#100e0b]`}>
          <input type="radio" name="type" value="note" defaultChecked /> Note
        </label>
        <label className={`flex items-center gap-3 rounded-md border ${LINE} bg-[#faf9f7] px-4 py-3.5 text-[15px] ${INK} dark:bg-[#100e0b]`}>
          <input type="radio" name="type" value="question" /> Question
        </label>
      </fieldset>
      <div className="pb-4">
        <Button variant="primary" type="submit">Submit</Button>
      </div>
    </form>
  );
}

/* ---------------- Directory Search ---------------- */

export function DirectorySearch({ value = "", onChange, placeholder = "Search the directory…" }) {
  return (
    <div>
      <input type="search" value={value} onChange={(e) => onChange && onChange(e.target.value)} placeholder={placeholder} aria-label="Search the directory" className={`w-full rounded-lg border ${LINE} ${CARD} px-3.5 py-3 text-[15px] ${INK} placeholder:text-[#8a8e93] focus:border-[#8a1f2b] focus:outline-none dark:placeholder:text-[#6e6455] dark:focus:border-[#c9404f] ${FOCUS}`} />
    </div>
  );
}

/* ---------------- Section Head ---------------- */

export function SectionHead({ kicker, title, lede }) {
  return (
    <div className="mb-[22px]">
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 className={`${SERIF} mt-2 text-[clamp(26px,5vw,36px)] font-bold leading-[1.18] tracking-[-0.01em] ${INK}`}>{title}</h2>
      {lede && <p className={`mt-2 max-w-[60ch] text-[16.5px] leading-[1.6] ${SOFT}`}>{lede}</p>}
    </div>
  );
}

/* ---------------- Kicker ---------------- */

export function Kicker({ children, variant = "default" }) {
  return (
    <p className={`${MONO} text-[11px] font-bold uppercase tracking-[0.26em] ${variant === "faint" ? FAINT : "text-[#8a1f2b] dark:text-[#c9404f]"}`}>{children}</p>
  );
}

/* ---------------- Breadcrumbs ---------------- */

export function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-0 text-[12.5px] tracking-[0.02em] text-[#5b5f65] dark:text-[#a79b82]">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center">
            {i > 0 && <span aria-hidden="true" className="mx-2 opacity-50">/</span>}
            {item.href && i < items.length - 1 ? <a href={item.href} className={`hover:text-[#8a1f2b] dark:hover:text-[#c9404f] ${FOCUS}`}>{item.label}</a> : <span aria-current={i === items.length - 1 ? "page" : undefined}>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------------- Stats Band ---------------- */

export function StatsBand({ stats = [] }) {
  return (
    <dl className={`grid grid-cols-2 gap-0 border-b ${LINE} md:grid-cols-4`}>
      {stats.map((s) => (
        <div key={s.label} className={`border-t border-[#ece5d5] px-1 py-3.5 dark:border-[#221c16] ${s.divider ? "border-l border-[#ece5d5] pl-3 dark:border-[#221c16]" : ""}`}>
          <dt className={`${MONO} text-xs tracking-[0.06em] ${FAINT}`}>{s.label}</dt>
          <dd className={`${MONO} mt-1 block text-xl font-bold ${INK}`}>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------------- Activity Feed ---------------- */

export function ActivityFeed({ entries = [] }) {
  return (
    <section className={`mt-[34px] overflow-hidden rounded-lg border ${LINE} ${CARD}`}>
      <header className={`flex items-center gap-2.5 border-b ${LINE} px-[18px] py-3`}>
        <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-[#8a1f2b] dark:bg-[#c9404f]" />
        <h3 className={`${MONO} text-[11px] font-bold uppercase tracking-[0.22em] ${SOFT}`}>Activity</h3>
      </header>
      <ul>
        {entries.map((e) => (
          <li key={e.id} className={`grid grid-cols-[86px_1fr] gap-3 border-b border-[#ece5d5] px-[18px] py-3 text-sm last:border-b-0 dark:border-[#221c16]`}>
            <time className={`${MONO} text-[11.5px] ${FAINT}`}>{e.time}</time>
            <p className={SOFT}><strong className={`${MONO} text-[12.5px] font-semibold ${INK}`}>{e.name}</strong> {e.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- Activity Entry ---------------- */

export function ActivityEntry({ time, name, text }) {
  return (
    <article>
      <p className={`${MONO} mb-1.5 text-[11.5px] ${FAINT}`}>{time}</p>
      <p className={`text-sm leading-[1.6] ${SOFT}`}><strong className={`${MONO} text-[12.5px] font-semibold ${INK}`}>{name}</strong> {text}</p>
    </article>
  );
}

/* ---------------- Steps List ---------------- */

export function StepsList({ steps = [] }) {
  return (
    <ol className={DOUBLE_TOP}>
      {steps.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[56px_1fr] gap-x-4 gap-y-1.5 border-b border-[#ece5d5] px-1.5 py-5 dark:border-[#221c16]">
          <span className={`${MONO} flex h-10 w-10 items-center justify-center rounded-md border border-[#8a1f2b] text-sm font-bold text-[#6d1620] dark:border-[#c9404f] dark:text-[#c9404f]`}>{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className={`${SERIF} text-lg ${INK}`}>{s.title}</h3>
            <p className={`mt-1 max-w-[62ch] text-[15px] leading-[1.6] ${SOFT}`}>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- Detail Card ---------------- */

export function DetailCard({ kick, number, meta, fields = [], source, assigned, foot }) {
  return (
    <article className={`overflow-hidden rounded-[14px] border ${LINE} ${CARD}`}>
      <header className={`flex items-baseline justify-between gap-3 border-b ${LINE} px-4 pb-3.5 pt-4`}>
        {kick && <p className={`${MONO} text-[10.5px] font-semibold uppercase tracking-[0.14em] ${FAINT}`}>{kick}</p>}
        {number && <p className={`${MONO} text-[21px] font-bold tracking-[0.02em] ${INK}`}>{number}</p>}
        {meta && <p className={`text-[13.5px] ${SOFT}`}>{meta}</p>}
      </header>
      <dl className="grid grid-cols-2">
        {fields.map((f) => (
          <div key={f.label} className="px-4 pb-1 pt-2">
            <dt className={`${MONO} text-[10.5px] font-semibold uppercase tracking-[0.12em] ${FAINT}`}>{f.label}</dt>
            <dd className="mt-1 text-sm leading-[1.45] text-[#181b1f] dark:text-[#ece3d0]">{f.value}</dd>
          </div>
        ))}
      </dl>
      {source && <p className={`border-t ${LINE} px-4 py-3 text-sm ${SOFT}`}>Source: {source}</p>}
      {assigned && <p className={`border-t ${LINE} bg-[rgba(138,31,43,0.05)] px-4 py-3 text-sm ${SOFT} dark:bg-[rgba(201,64,79,0.05)]`}>Assigned: {assigned}</p>}
      {foot && <footer className={`border-t ${LINE} px-4 py-2.5 text-[12.5px] ${FAINT}`}>{foot}</footer>}
    </article>
  );
}

/* ---------------- Summary Card ---------------- */

export function SummaryCard({ title, rows = [] }) {
  return (
    <article className={`overflow-hidden rounded-[14px] border ${LINE} ${CARD}`}>
      <header className={`border-b ${LINE} bg-[#faf9f7] px-5 py-3 dark:bg-[#100e0b]`}>
        <h3 className={`${MONO} text-[11px] font-bold uppercase tracking-[0.22em] ${SOFT}`}>{title}</h3>
      </header>
      <dl>
        {rows.map((r) => (
          <div key={r.key} className="grid grid-cols-[130px_1fr] gap-3 border-b border-[#ece5d5] px-5 py-[11px] text-sm last:border-b-0 dark:border-[#221c16]">
            <dt className={`${MONO} text-[11.5px] uppercase tracking-[0.1em] ${FAINT}`}>{r.key}</dt>
            <dd className={`font-semibold ${INK} ${r.mono ? `${MONO} text-[13px] font-medium` : ""}`}>{r.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

/* ---------------- Disclaimer ---------------- */

export function Disclaimer({ children, strong }) {
  return (
    <aside className="rounded-lg border border-[#8a1f2b] bg-[rgba(138,31,43,0.05)] px-5 py-4 text-sm leading-[1.6] text-[#5b5f65] dark:border-[#c9404f] dark:bg-[rgba(201,64,79,0.05)] dark:text-[#a79b82]">
      {strong && <p className={`${MONO} mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[#6d1620] dark:text-[#c9404f]`}>{strong}</p>}
      {children}
    </aside>
  );
}

/* ---------------- Pipeline Strip ---------------- */

export function PipelineStrip({ kicker, steps = [], note }) {
  return (
    <section className={`rounded-xl border ${LINE} bg-[rgba(255,255,255,0.015)] px-6 py-[22px] ${CARD}`}>
      {kicker && <p className={`${MONO} mb-4 text-[11px] font-bold uppercase tracking-[0.14em] ${SOFT}`}>{kicker}</p>}
      <ol className="flex flex-wrap items-center gap-0">
        {steps.map((s, i) => (
          <li key={s.label} className="flex items-center">
            {i > 0 && <span aria-hidden="true" className={`mx-2 h-[2px] w-8 ${s.done || s.current ? "bg-[#8a1f2b] dark:bg-[#c9404f]" : "bg-[#ddd6c7] dark:bg-[#2e2720]"}`} />}
            <span className={`flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.08em] ${s.done || s.current ? INK : SOFT}`}>
              <span aria-hidden="true" className={`inline-block h-3 w-3 rounded-full border-2 ${s.done ? "border-[#8a1f2b] bg-[#8a1f2b] dark:border-[#c9404f] dark:bg-[#c9404f]" : s.current ? "animate-pulse border-[#8a1f2b] dark:border-[#c9404f]" : "border-[#ddd6c7] dark:border-[#2e2720]"}`} />
              {s.label}
            </span>
          </li>
        ))}
      </ol>
      {note && <p className={`mt-4 max-w-[62ch] text-sm leading-[1.6] ${SOFT}`}>{note}</p>}
    </section>
  );
}

/* ---------------- Profile Rows ---------------- */

export function ProfileRows({ rows = [] }) {
  return (
    <div className={DOUBLE_TOP}>
      {rows.map((r) => (
        <article key={r.name} className="border-b border-[#ece5d5] py-4 dark:border-[#221c16]">
          <h3 className="text-[15px] font-bold text-[#181b1f] dark:text-[#ece3d0]">{r.name}</h3>
          <p className={`mt-1 max-w-[64ch] text-sm leading-[1.65] ${SOFT}`}>{r.body}</p>
          {r.status && <ProfileStatus>{r.status}</ProfileStatus>}
        </article>
      ))}
    </div>
  );
}

/* ---------------- Profile Status ---------------- */

export function ProfileStatus({ children }) {
  return (
    <span className={`${MONO} mt-2 inline-block rounded-full border border-[#8a1f2b] px-[9px] py-[3px] text-[11px] font-bold uppercase tracking-[0.08em] text-[#6d1620] dark:border-[#c9404f] dark:text-[#c9404f]`}>{children}</span>
  );
}

/* ---------------- Timeline ---------------- */

export function Timeline({ entries = [] }) {
  return (
    <ol className={DOUBLE_TOP}>
      {entries.map((e) => (
        <li key={e.date + e.body} className="grid gap-2 border-b border-[#ece5d5] px-1.5 py-3.5 dark:border-[#221c16] md:grid-cols-[210px_1fr]">
          <time className={`${MONO} text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#6d1620] dark:text-[#c9404f]`}>{e.date}</time>
          <div>
            <p className={`max-w-[64ch] text-[15px] leading-[1.6] ${SOFT}`}>{e.body}</p>
            {e.source && <p className={`${MONO} mt-1 text-[11.5px] ${FAINT}`}>Source: {e.source}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- Media Card ---------------- */

export function MediaCard({ number, body, more, source }) {
  return (
    <a href="#" className={`block rounded-lg border ${LINE} ${CARD} p-[18px] hover:border-[#8a8e93] dark:hover:border-[#6e6455] ${FOCUS}`}>
      <div className="mb-2.5 flex items-baseline justify-between">
        <span className={`${MONO} text-[11px] font-bold uppercase tracking-[0.16em] ${FAINT}`}>{number}</span>
      </div>
      <p className={`text-[15px] leading-[1.55] ${SOFT}`}>{body}</p>
      {more && <p className="mt-3 text-[13px] font-bold text-[#8a1f2b] hover:underline dark:text-[#c9404f]">{more}</p>}
      {source && <p className={`${MONO} mt-2.5 text-xs ${FAINT}`}>Source: {source}</p>}
    </a>
  );
}

/* ---------------- Open Questions ---------------- */

export function OpenQuestions({ items = [] }) {
  return (
    <div>
      {items.map((item) => (
        <article key={item.question} className="border-b border-[#ece5d5] py-[18px] first:pt-2 dark:border-[#221c16]">
          <ProfileStatus>{item.status || "Open"}</ProfileStatus>
          <h3 className={`mt-3 max-w-[64ch] text-[16.5px] leading-[1.55] ${SOFT}`}>{item.question}</h3>
          {item.answer && (
            <div className="ml-0 mt-3.5 border-l-2 border-[#2e6b3e] py-0.5 pl-3.5 dark:border-[#8fae62]">
              <p className={`${MONO} text-[11px] font-bold uppercase tracking-[0.14em] text-[#2e6b3e] dark:text-[#8fae62]`}>Answer</p>
              <p className={`mt-1 max-w-[64ch] text-[15px] leading-[1.6] ${SOFT}`}>{item.answer}</p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

/* ---------------- Coverage List ---------------- */

export function CoverageList({ items = [] }) {
  return (
    <ul className={DOUBLE_TOP}>
      {items.map((item) => (
        <li key={item.title} className="border-b border-[#ece5d5] py-3.5 dark:border-[#221c16]">
          <a href={item.href || "#"} className={`text-[15px] underline decoration-[#ddd6c7] underline-offset-[3px] hover:text-[#8a1f2b] hover:decoration-[#8a1f2b] dark:decoration-[#2e2720] dark:hover:text-[#c9404f] dark:hover:decoration-[#c9404f] ${FOCUS}`}>{item.title}</a>
          <span className={`text-[15px] ${SOFT}`}> &middot; {item.outlet} ({item.date})</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------- Source List ---------------- */

export function SourceList({ items = [] }) {
  return (
    <ul className={DOUBLE_TOP}>
      {items.map((item) => (
        <li key={item.title} className="border-b border-[#ece5d5] py-3.5 dark:border-[#221c16]">
          <a href={item.href || "#"} className={`block underline decoration-[#ddd6c7] underline-offset-[3px] hover:text-[#8a1f2b] hover:decoration-[#8a1f2b] dark:decoration-[#2e2720] dark:hover:text-[#c9404f] dark:hover:decoration-[#c9404f] ${FOCUS}`}>
            <span className={`text-[15px] ${INK}`}>{item.title}</span>
            <span className={`mt-0.5 block text-[13px] ${FAINT}`}>{item.sub}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ---------------- Citations ---------------- */

export function Citations({ items = [] }) {
  return (
    <ol className={DOUBLE_TOP}>
      {items.map((item, i) => (
        <li key={item.text} className="grid grid-cols-[44px_1fr] gap-1.5 border-b border-[#ece5d5] px-1.5 py-3 text-[14.5px] leading-[1.6] text-[#5b5f65] dark:border-[#221c16] dark:text-[#a79b82]">
          <span className={`${MONO} text-xs font-bold text-[#6d1620] dark:text-[#c9404f]`}>{String(i + 1).padStart(2, "0")}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- Prev Next ---------------- */

export function PrevNext({ prev, next }) {
  return (
    <nav className="grid gap-3 md:grid-cols-2" aria-label="Previous and next">
      {prev && (
        <a href={prev.href || "#"} className={`rounded-lg border ${LINE} ${CARD} px-5 py-[18px] transition hover:-translate-y-0.5 hover:border-[#8a8e93] dark:hover:border-[#6e6455] ${FOCUS}`}>
          <span className={`${MONO} text-[10.5px] font-bold uppercase tracking-[0.2em] ${FAINT}`}>Previous</span>
          <span className={`${SERIF} mt-1 block text-[17px] font-bold ${INK}`}>{prev.title}</span>
        </a>
      )}
      {next && (
        <a href={next.href || "#"} className={`rounded-lg border ${LINE} ${CARD} px-5 py-[18px] text-right transition hover:-translate-y-0.5 hover:border-[#8a8e93] dark:hover:border-[#6e6455] ${FOCUS}`}>
          <span className={`${MONO} text-[10.5px] font-bold uppercase tracking-[0.2em] ${FAINT}`}>Next</span>
          <span className={`${SERIF} mt-1 block text-[17px] font-bold ${INK}`}>{next.title}</span>
        </a>
      )}
    </nav>
  );
}

/* ---------------- Diff Band ---------------- */

export function DiffBand({ kicker, title, lede, rows = [] }) {
  return (
    <section className="bg-[#181b1f] px-0 py-[46px] text-[#f4f1ea] dark:bg-[#0b0908]">
      <div className="mx-auto max-w-[1060px] px-5">
        {kicker && <p className={`${MONO} text-[11px] font-bold uppercase tracking-[0.26em] text-[#d98a8a]`}>{kicker}</p>}
        <h2 className={`${SERIF} mt-2 text-[clamp(26px,5vw,36px)] font-bold leading-[1.18] text-[#ffffff]`}>{title}</h2>
        {lede && <p className="mt-2 max-w-[60ch] text-[15px] leading-[1.6] text-[#b9b4a8]">{lede}</p>}
        <dl>
          {rows.map((r, i) => (
            <div key={r.label} className="grid grid-cols-[44px_1fr] gap-3.5 border-t border-[#3a3232] py-[18px]">
              <dt className={`${MONO} text-xs tracking-[0.06em] text-[#d98a8a]`}>{String(i + 1).padStart(2, "0")}</dt>
              <dd>
                <p className="text-base font-semibold text-[#ffffff]">{r.label}</p>
                <p className="mt-1 text-[14.5px] leading-[1.6] text-[#b9b4a8]">{r.body}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------- Role Card ---------------- */

export function RoleCard({ chip, title, body }) {
  return (
    <article className={`rounded-xl border ${LINE} ${CARD} p-4`}>
      {chip && <span className={`${MONO} mb-2.5 inline-block rounded-full border border-[#8a1f2b] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#8a1f2b] dark:border-[#c9404f] dark:text-[#c9404f]`}>{chip}</span>}
      <h3 className={`${SERIF} text-[17px] tracking-[-0.01em] ${INK}`}>{title}</h3>
      <p className={`mt-1.5 text-sm leading-[1.55] ${SOFT}`}>{body}</p>
    </article>
  );
}

/* ---------------- Step Gates ---------------- */

export function StepGates({ gates = [] }) {
  return (
    <ol className="grid gap-x-8 lg:grid-cols-2">
      {gates.map((g, i) => (
        <li key={g.title} className="relative pb-[26px] pl-12">
          <span aria-hidden="true" className="absolute bottom-0 left-[14px] top-9 w-px bg-[#ddd6c7] dark:bg-[#2e2720]" />
          <span aria-hidden="true" className={`${MONO} absolute left-0 top-0 flex h-[29px] w-[29px] items-center justify-center rounded-full border border-[#8a1f2b] bg-[#faf9f7] text-[11px] font-bold text-[#8a1f2b] dark:border-[#c9404f] dark:bg-[#100e0b] dark:text-[#c9404f]`}>{i + 1}</span>
          <h3 className={`${SERIF} text-[21px] tracking-[-0.01em] ${INK}`}>{g.title}</h3>
          <p className={`mt-1 max-w-[36em] text-[15px] leading-[1.55] ${SOFT}`}>{g.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- Pledge ---------------- */

export function Pledge({ promises = [] }) {
  return (
    <section className={`rounded-xl border ${LINE} border-l-[3px] border-l-[#8a1f2b] ${CARD} px-[18px] py-1 dark:border-l-[#c9404f]`}>
      {promises.map((p, i) => (
        <div key={p.strong} className={`py-3.5 ${i > 0 ? `border-t border-[#ece5d5] dark:border-[#221c16]` : ""}`}>
          <p className="text-base font-semibold text-[#181b1f] dark:text-[#ece3d0]">{p.strong}</p>
          <p className={`mt-1 text-[14.5px] leading-[1.55] ${SOFT}`}>{p.body}</p>
        </div>
      ))}
    </section>
  );
}

/* ---------------- CTA Band ---------------- */

export function CtaBand({ title, body, buttonLabel, linkLabel }) {
  return (
    <section className="mx-auto my-[52px] mb-2 rounded-xl border border-[#ddd6c7] bg-[#181b1f] px-7 py-[38px] text-center text-[#f4f1ea] dark:border-[#2e2720] dark:bg-[#181410]">
      <h2 className={`${SERIF} text-[clamp(22px,5.5vw,30px)] font-bold leading-[1.18] text-[#ffffff]`}>{title}</h2>
      {body && <p className="mx-auto mt-3 max-w-[52ch] text-[15px] leading-[1.6] text-[#b9b4a8]">{body}</p>}
      <div className="mt-6">
        <Button variant="solid-small">{buttonLabel || "Get started"}</Button>
      </div>
      {linkLabel && <p className="mt-4"><a href="#" className={`text-sm text-[#b9b4a8] underline underline-offset-[3px] hover:text-[#f4f1ea] ${FOCUS}`}>{linkLabel}</a></p>}
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function Footer({ columns = [], blurb, finePrint }) {
  return (
    <footer className="mt-11 border-t-[3px] border-t-double border-t-[#181b1f] py-[34px] pb-12 dark:border-t-[#ece3d0]">
      <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className={`text-[13px] leading-[1.6] ${SOFT}`}>{blurb}</p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className={`${MONO} text-[11px] uppercase tracking-[0.14em] ${SOFT}`}>{col.heading}</h4>
              <ul className="mt-2">
                {col.links.map((l) => (
                  <li key={l.label}><a href={l.href || "#"} className={`inline-block py-[3px] text-[13.5px] ${SOFT} hover:text-[#8a1f2b] dark:hover:text-[#c9404f] ${FOCUS}`}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {finePrint && <p className={`mt-[18px] border-t ${LINE} py-4 pb-[26px] text-[12.5px] ${SOFT}`}>{finePrint}</p>}
    </footer>
  );
}

/* ---------------- Theme Toggle ---------------- */

export function ThemeToggle({ theme = "dark", onToggle }) {
  return (
    <button type="button" aria-pressed={theme === "dark"} aria-label={`Theme: ${theme}. Switch to ${theme === "dark" ? "light" : "dark"}.`} onClick={onToggle} className={`${MONO} whitespace-nowrap rounded-full border ${LINE} bg-transparent px-3.5 py-2 text-[11px] uppercase tracking-[0.14em] text-[#5b5f65] hover:border-[#8a8e93] hover:text-[#181b1f] dark:text-[#a79b82] dark:hover:border-[#6e6455] dark:hover:text-[#ece3d0] ${FOCUS}`}>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

/* ---------------- Icon Button ---------------- */

export function IconButton({ label, onClick, children }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className={`inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border ${LINE} bg-transparent text-[#5b5f65] hover:border-[#8a1f2b] hover:text-[#8a1f2b] dark:text-[#a79b82] dark:hover:border-[#c9404f] dark:hover:text-[#c9404f] ${FOCUS}`}>
      {children || <span aria-hidden="true">⌕</span>}
    </button>
  );
}

/* ---------------- Nav Toggle ---------------- */

export function NavToggle({ open = false, onToggle, label = "Menu" }) {
  return (
    <button type="button" aria-expanded={open} aria-label={label} onClick={onToggle} className={`rounded-md border ${LINE} px-2.5 py-[9px] ${FOCUS}`}>
      <span className="flex flex-col gap-1" aria-hidden="true">
        <span className={`block h-[2px] w-5 bg-[#181b1f] transition dark:bg-[#ece3d0] ${open ? "translate-y-[6px] rotate-45" : ""}`} />
        <span className={`block h-[2px] w-5 bg-[#181b1f] transition dark:bg-[#ece3d0] ${open ? "opacity-0" : ""}`} />
        <span className={`block h-[2px] w-5 bg-[#181b1f] transition dark:bg-[#ece3d0] ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
      </span>
    </button>
  );
}

/* ---------------- Ghost Number ---------------- */

export function GhostNumber({ children }) {
  return (
    <span aria-hidden="true" className={`${SERIF} pointer-events-none absolute right-0 top-0 select-none text-[118px] font-black leading-none text-[#181b1f] opacity-[0.06] dark:text-[#ece3d0]`}>{children}</span>
  );
}

/* ---------------- Shows Card ---------------- */

export function ShowsCard({ rows = [] }) {
  return (
    <section className={`overflow-hidden rounded-lg border ${LINE} ${CARD}`}>
      {rows.map((r) => (
        <div key={r.key} className="flex gap-4 border-b border-[#ece5d5] px-[18px] py-3.5 last:border-b-0 dark:border-[#221c16]">
          <span className={`${MONO} w-24 shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] ${r.muted ? FAINT : "text-[#6d1620] dark:text-[#c9404f]"}`}>{r.key}</span>
          <span className={`text-[15px] ${SOFT}`}>{r.value}</span>
        </div>
      ))}
    </section>
  );
}

/* ---------------- Empty Attachment ---------------- */

export function EmptyAttachment({ children }) {
  return (
    <div className={`rounded-md border-[1.5px] border-dashed ${LINE} px-[18px] py-6 text-center text-[14.5px] ${SOFT}`}>
      {children}
    </div>
  );
}

/* ---------------- Profile Avatar ---------------- */

const AVATAR_SIZES = {
  default: "h-10 w-10 text-[17px] rounded-lg",
  lg: "h-12 w-12 text-xl rounded-lg",
  xl: "h-[112px] w-[112px] text-[52px] rounded-[10px]",
};

export function ProfileAvatar({ initials, size = "default" }) {
  return (
    <span aria-hidden="true" className={`${MONO} inline-flex items-center justify-center border border-[#8a1f2b] font-bold text-[#6d1620] dark:border-[#c9404f] dark:text-[#c9404f] ${AVATAR_SIZES[size] || AVATAR_SIZES.default}`}>{initials}</span>
  );
}

/* ---------------- Profile Card Row ---------------- */

export function ProfileCardRow({ initials, name, role, roleLabel }) {
  return (
    <a href="#" className={`flex items-center gap-3 border-b ${LINE} px-0.5 py-2.5 last:border-b-0 hover:[&>div>span]:text-[#6d1620] dark:hover:[&>div>span]:text-[#c9404f] ${FOCUS}`}>
      <ProfileAvatar initials={initials} />
      <div>
        <span className={`${SERIF} block text-base font-bold ${INK}`}>{name}</span>
        <span className={`${MONO} block text-[11px] ${SOFT}`}>{role}{roleLabel && <span className="ml-2 text-[10px] uppercase tracking-[0.12em] text-[#6d1620] dark:text-[#c9404f]">{roleLabel}</span>}</span>
      </div>
    </a>
  );
}

/* ---------------- Status Line ---------------- */

export function StatusLine({ children }) {
  return (
    <p className={`${MONO} flex items-center gap-2 text-[12.5px] ${SOFT}`}>
      <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-[#2e6b3e] dark:bg-[#8fae62]" />
      {children}
    </p>
  );
}

/* ---------------- Profile Hero ---------------- */

export function ProfileHero({ initials, handle, role, status, stats = [] }) {
  return (
    <section>
      <div className="flex items-center gap-5">
        <ProfileAvatar initials={initials} size="xl" />
        <div>
          <h1 className={`${SERIF} text-[clamp(32px,7vw,52px)] font-bold leading-[1.18] ${INK}`}>{handle}</h1>
          <p className={`${MONO} mt-1 text-[12.5px] tracking-[0.02em] ${SOFT}`}>{role}</p>
        </div>
      </div>
      {status && <div className="mt-4"><StatusLine>{status}</StatusLine></div>}
      {stats.length > 0 && <div className="mt-4"><StatsBand stats={stats} /></div>}
    </section>
  );
}

/* ---------------- Empty State ---------------- */

export function EmptyState({ kicker, title, lede, actionLabel, onAction }) {
  return (
    <section className="rounded-xl border border-dashed border-[#ddd6c7] px-9 py-11 text-center dark:border-[#2e2720]">
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 className={`${SERIF} mt-2 text-[clamp(26px,5vw,36px)] font-bold leading-[1.18] ${INK}`}>{title}</h2>
      {lede && <p className={`mx-auto mt-2 max-w-[52ch] text-[15px] leading-[1.6] ${SOFT}`}>{lede}</p>}
      {actionLabel && <div className="mt-5"><Button variant="primary" onClick={onAction}>{actionLabel}</Button></div>}
    </section>
  );
}

/* ---------------- Review Queue ---------------- */

export function ReviewQueue({ reference, count, rows = [] }) {
  const [openId, setOpenId] = React.useState(null);
  return (
    <section>
      {reference && <p className={`${MONO} text-xs font-bold uppercase tracking-[0.14em] text-[#6d1620] dark:text-[#c9404f]`}>{reference}</p>}
      <header className="mt-2 flex items-center gap-2">
        <h3 className={`${MONO} text-[11px] font-bold uppercase tracking-[0.14em] ${FAINT}`}>Review queue</h3>
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-[10px] bg-[#181b1f] px-1.5 text-[11px] text-[#faf9f7] dark:bg-[#ece3d0] dark:text-[#100e0b]">{count ?? rows.length}</span>
      </header>
      <ul>
        {rows.map((row) => {
          const open = openId === row.id;
          return (
            <li key={row.id} className={`border-b ${LINE} last:border-b-0`}>
              <button type="button" aria-expanded={open} aria-controls={`queue-${row.id}`} onClick={() => setOpenId(open ? null : row.id)} className={`flex w-full items-center gap-3 px-0.5 py-2 text-left hover:underline ${FOCUS}`}>
                <span className="relative inline-flex">
                  <ProfileAvatar initials={row.initials} />
                  {row.reviewing && <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-lg ring-2 ring-[#c9a227]" />}
                </span>
                <span className="flex-1 text-sm leading-[1.45] text-[#181b1f] dark:text-[#ece3d0]">{row.text}</span>
                <span aria-hidden="true" className={`text-[11px] ${FAINT} transition ${open ? "rotate-180" : ""}`}>▾</span>
              </button>
              {open && (
                <div id={`queue-${row.id}`} className="px-0.5 pb-3.5 pl-[46px] text-[13.5px] leading-[1.6] text-[#5b5f65] dark:text-[#a79b82]">
                  {row.detail && <p>{row.detail}</p>}
                  {row.byline && <p className={`mt-1 text-[13px] ${FAINT}`}>{row.byline}</p>}
                  {row.href && <p className="mt-1"><a href={row.href} className="underline underline-offset-[3px] hover:text-[#8a1f2b] dark:hover:text-[#c9404f]">Open item</a></p>}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------------- Daily Summary ---------------- */

export function DailySummary({ kicker, children }) {
  return (
    <section className={`border-t ${LINE} px-0.5 pb-2 pt-3.5`}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <p className={`mt-1 text-base ${INK}`}>{children}</p>
    </section>
  );
}

/* ---------------- Next Up ---------------- */

export function NextUp({ title, sub }) {
  return (
    <section className="mt-[22px] border-t border-[#ece5d5] px-0.5 pb-0 pt-4 dark:border-[#221c16]">
      <p className={`${MONO} text-[11px] font-bold uppercase tracking-[0.14em] ${FAINT}`}>Next up</p>
      <p className={`mt-1 text-[14.5px] ${INK}`}>{title}</p>
      {sub && <p className={`mt-0.5 text-[13px] ${FAINT}`}>{sub}</p>}
    </section>
  );
}

/* ---------------- Rail ---------------- */

export function Rail({ children }) {
  // Children carry snap-start (the docs demo applies it via CSS).
  return (
    <div className="mx-[-6px] flex snap-x snap-mandatory gap-[18px] overflow-x-auto px-1.5 pb-[22px] pt-5 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-[#ddd6c7] dark:[&::-webkit-scrollbar-thumb]:bg-[#2e2720]">
      {children}
    </div>
  );
}

/* ---------------- Result Card ---------------- */

export function ResultCard({ fileNumber, title, outcome, rows = [] }) {
  return (
    <article className="mb-[18px] rounded-xl border border-[#ddd6c7] bg-[rgba(255,255,255,0.015)] p-7 dark:border-[#2e2720]">
      {fileNumber && <p className={`${MONO} text-[12px] tracking-[0.08em] text-[#c9404f]`}>{fileNumber}</p>}
      {title && <h3 className={`${SERIF} mb-2 mt-[10px] font-bold`}>{title}</h3>}
      {outcome && <p className="mb-4 text-[15px]">{outcome}</p>}
      {rows.length > 0 && (
        <dl className="grid grid-cols-[130px_1fr] gap-x-4 gap-y-2 text-[14px]">
          {rows.flatMap((row) => [
            <dt key={`${row.key}-k`} className={`${MONO} text-[11px] font-bold uppercase tracking-[0.1em] ${SOFT}`}>{row.key}</dt>,
            <dd key={`${row.key}-v`} className="m-0">{row.value}</dd>,
          ])}
        </dl>
      )}
    </article>
  );
}

/* ---------------- Forum Thread ---------------- */

export function ForumThread({ votes, text, replies = [] }) {
  return (
    <article className="cursor-pointer px-2 py-3 hover:bg-[rgba(138,31,43,0.04)] dark:hover:bg-[rgba(201,64,79,0.04)]">
      <div className="flex items-baseline gap-3">
        {votes !== undefined && <span className="font-bold text-[#8a1f2b] dark:text-[#c9404f]">{votes}</span>}
        {text && <p className="m-0 text-[14.5px]">{text}</p>}
      </div>
      {replies.length > 0 && (
        <div>
          {replies.map((reply, i) => (
            <p key={i} className={`m-0 text-[14px] ${i === 0 ? "mt-2 border-t-0 pt-0" : "mt-3 border-t border-[#ece5d5] pt-3 dark:border-[#221c16]"}`}>{reply.text}</p>
          ))}
        </div>
      )}
    </article>
  );
}

/* ---------------- Mini Gates ---------------- */

export function MiniGates({ gates = [] }) {
  return (
    <div className="my-[18px] grid grid-cols-1 gap-3 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-4">
      {gates.map((g) => (
        <div key={g.number} className={`rounded-lg border ${LINE} ${CARD} p-[14px]`}>
          <p className={`${MONO} text-[11.5px] tracking-[0.06em] text-[#8a1f2b] dark:text-[#c9404f]`}>{g.number}</p>
          <p className="mt-1 text-[14px] font-semibold">{g.title}</p>
          {g.body && <p className={`mt-1.5 text-[12.5px] leading-[1.5] ${SOFT}`}>{g.body}</p>}
        </div>
      ))}
    </div>
  );
}

/* ---------------- Start Here ---------------- */

export function StartHere({ kick, title, children }) {
  return (
    <section className={`mb-[22px] rounded-lg border ${LINE} ${CARD} px-[22px] py-5`}>
      {kick && <p className={`${MONO} mb-2 text-[11px] font-bold uppercase tracking-[0.22em] ${FAINT}`}>{kick}</p>}
      {title && <h3 className={`${SERIF} mb-2 text-[21px] font-bold`}>{title}</h3>}
      <div className={`[&_p]:mx-0 [&_p]:mb-3 [&_p]:mt-0 [&_p]:max-w-[62ch] [&_p]:text-[14.5px] [&_p]:leading-[1.6] ${SOFT}`}>{children}</div>
    </section>
  );
}

/* ---------------- Search Pill ---------------- */

export function SearchPill({ value = "", onChange, placeholder = "Search…", kbd = "⌘K" }) {
  return (
    <label className="ml-auto flex min-w-[200px] max-w-[380px] flex-1 items-center gap-2.5 rounded-full border border-[#ddd6c7] bg-[#ffffff] px-4 py-2 focus-within:border-[#5b5f65] focus-within:shadow-[0_0_0_3px_#ece5d5] dark:border-[#2e2720] dark:bg-[#181410] dark:focus-within:border-[#a79b82] dark:focus-within:shadow-[0_0_0_3px_#221c16]">
      <span className="sr-only">Search</span>
      <input
        type="search"
        aria-label="Search"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        className={`${MONO} w-full border-0 bg-transparent text-[13px] text-[#181b1f] outline-0 dark:text-[#ece3d0]`}
      />
      {kbd && <kbd className={`${MONO} whitespace-nowrap rounded border border-[#ddd6c7] bg-[#faf9f7] px-[7px] py-[2px] text-[10.5px] font-bold text-[#8a8e93] dark:border-[#2e2720] dark:bg-[#100e0b] dark:text-[#6e6455]`}>{kbd}</kbd>}
    </label>
  );
}

/* ---------------- Banner ---------------- */

export function Banner({ children }) {
  return (
    <div className="bg-[#181b1f] px-5 py-[9px] text-center text-[12.5px] tracking-[0.02em] text-[#f3efe6] dark:border-b dark:border-[#2e2720] dark:bg-[#060504] dark:text-[#e8dfc9] [&_strong]:font-bold">
      {children}
    </div>
  );
}

/* ---------------- Duo Card ---------------- */

export function DuoCard({ kick, title, children }) {
  return (
    <article className={`rounded-lg border ${LINE} ${CARD} px-6 py-[26px] transition-[transform_450ms_ease,border-color_300ms_ease] hover:-translate-y-[3px] hover:border-[#5b5f65] dark:hover:border-[#a79b82]`}>
      {kick && <p className={`${MONO} mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] ${FAINT}`}>{kick}</p>}
      {title && <h3 className={`${SERIF} mb-2 text-[21px] font-bold`}>{title}</h3>}
      <div className={`[&_p]:m-0 [&_p]:mb-3.5 [&_p]:text-[15px] ${SOFT}`}>{children}</div>
    </article>
  );
}

/* ---------------- Index Row ---------------- */

export function IndexRow({ number, title, description, tag, id, href = "#", dim = false }) {
  const cls = `relative grid grid-cols-[64px_1fr] items-start gap-x-[14px] gap-y-1 border-b border-[#ece5d5] px-1.5 py-4 no-underline transition-colors duration-300 dark:border-[#221c16] min-[900px]:grid-cols-[70px_1fr_170px_130px] min-[900px]:pl-2.5 min-[900px]:pr-11 ${dim ? "cursor-default" : "group hover:bg-[#ffffff] dark:hover:bg-[#181410]"}`;
  const Tag = dim ? "div" : "a";
  return (
    <Tag href={dim ? undefined : href} className={cls}>
      <span className={`${MONO} pt-0.5 text-[15px] font-bold ${FAINT} group-hover:text-[#8a1f2b] dark:group-hover:text-[#c9404f]`}>{number}</span>
      <span>
        <h3 className="m-0 mb-1 text-[19px] font-bold">{title}</h3>
        {description && <span className={`mb-2.5 block max-w-[64ch] text-[14.5px] ${SOFT}`}>{description}</span>}
      </span>
      {tag && <span className={`hidden ${MONO} text-[12px] ${FAINT} min-[900px]:block`}>{tag}</span>}
      {id && <span className={`hidden ${MONO} text-[12px] ${FAINT} min-[900px]:block`}>{id}</span>}
      {!dim && <span aria-hidden="true" className="absolute right-2.5 top-[18px] -translate-x-2 text-[18px] text-[#8a1f2b] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-[#c9404f] min-[900px]:right-3.5 min-[900px]:top-1/2 min-[900px]:-mt-[11px]">→</span>}
    </Tag>
  );
}

/* ---------------- Select ---------------- */

export function Select({ id, value, onChange, options = [], placeholder, required = false, ariaLabel }) {
  return (
    <span className="relative block">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        required={required}
        aria-label={ariaLabel}
        className="w-full cursor-pointer appearance-none rounded-md border border-[#ddd6c7] bg-[#faf9f7] py-3 pl-3.5 pr-10 text-[15px] text-[#181b1f] invalid:text-[#8a8e93] focus:border-[#8a1f2b] focus:outline-none focus:shadow-[0_0_0_3px_rgba(138,31,43,0.12)] dark:border-[#2e2720] dark:bg-[#100e0b] dark:text-[#ece3d0] dark:invalid:text-[#6e6455] dark:focus:border-[#c9404f] dark:focus:shadow-[0_0_0_3px_rgba(201,64,79,0.12)]"
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-2 w-2 -translate-y-[70%] rotate-45 border-b-2 border-r-2 border-[#8a8e93] dark:border-[#6e6455]" />
    </span>
  );
}

/* ---------------- Option Row ---------------- */

export function OptionRow({ name, value, checked, onChange, children }) {
  return (
    <label className="mb-2.5 flex cursor-pointer items-start gap-3 rounded-md border border-[#ddd6c7] bg-[#faf9f7] p-3.5 dark:border-[#2e2720] dark:bg-[#100e0b]">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="mt-[3px] h-[18px] w-[18px] flex-none accent-[#6d1620] dark:accent-[#a52336]"
      />
      <span className="text-[15px]">{children}</span>
    </label>
  );
}

/* ---------------- Data Grid ---------------- */

export function DataGrid({ columns = [], rows = [], rowKey = "id", pageSize = 10, selectable = false, groupBy, initialSort }) {
  const [sortKey, setSortKey] = React.useState(initialSort ? initialSort.key : null);
  const [sortDir, setSortDir] = React.useState(initialSort ? initialSort.direction : null);
  const [filters, setFilters] = React.useState({});
  const [page, setPage] = React.useState(1);
  const [prevGroupBy, setPrevGroupBy] = React.useState(groupBy);
  if (prevGroupBy !== groupBy) { setPrevGroupBy(groupBy); setPage(1); }
  const [perPage, setPerPage] = React.useState(pageSize);
  const [selected, setSelected] = React.useState([]);
  const [pinned, setPinned] = React.useState([]);
  const [collapsed, setCollapsed] = React.useState([]);
  const colWidth = (col) => { const n = parseInt(col.width || "", 10); return Number.isFinite(n) ? n : 160; };
  const cellText = (v) => (v == null ? "" : String(v));
  const compareValues = (a, b) => { if (a == null && b == null) return 0; if (a == null) return 1; if (b == null) return -1; if (typeof a === "number" && typeof b === "number") return a - b; return String(a).localeCompare(String(b), undefined, { sensitivity: "base" }); };
  const sortRows = (list) => { if (!sortKey) return list; const dir = sortDir === "desc" ? -1 : 1; return [...list].sort((x, y) => dir * compareValues(x[sortKey], y[sortKey])); };
  const filtered = rows.filter((row) => columns.every((col) => { const f = (filters[col.key] || "").trim().toLowerCase(); if (!f) return true; return cellText(row[col.key]).toLowerCase().includes(f); }));
  const groupKeyOf = (row) => { const v = row[groupBy]; return v == null ? "Unassigned" : String(v); };
  const grouped = (() => { if (!groupBy) return null; const order = []; const map = {}; filtered.forEach((row) => { const g = groupKeyOf(row); if (!map[g]) { map[g] = []; order.push(g); } map[g].push(row); }); return order.map((g) => ({ key: g, rows: sortRows(map[g]) })); })();
  const flat = grouped ? grouped.flatMap((g) => g.rows) : sortRows(filtered);
  const totalPages = Math.max(1, Math.ceil(flat.length / perPage));
  const safePage = Math.min(page, totalPages);
  const pageRows = flat.slice((safePage - 1) * perPage, safePage * perPage);
  const pageGroups = (() => { if (!groupBy) return null; const order = []; const map = {}; pageRows.forEach((row) => { const g = groupKeyOf(row); if (!map[g]) { map[g] = []; order.push(g); } map[g].push(row); }); return order.map((g) => { const full = grouped.find((x) => x.key === g) || { rows: [] }; return { key: g, rows: map[g], total: full.rows.length }; }); })();
  const visibleColumns = [...pinned.map((k) => columns.find((c) => c.key === k)).filter(Boolean), ...columns.filter((c) => !pinned.includes(c.key))];
  const pinnedOffsets = (() => { const offsets = {}; let left = 0; pinned.forEach((k) => { offsets[k] = left; const col = columns.find((c) => c.key === k); left += col ? colWidth(col) : 160; }); return offsets; })();
  const isPinned = (key) => pinned.includes(key);
  const onSort = (key) => { if (sortKey !== key) { setSortKey(key); setSortDir("asc"); } else if (sortDir === "asc") { setSortDir("desc"); } else { setSortKey(null); setSortDir(null); } setPage(1); };
  const onFilter = (key, value) => { setFilters({ ...filters, [key]: value }); setPage(1); };
  const onPageSize = (n) => { setPerPage(n); setPage(1); };
  const toggleRow = (key) => { setSelected(selected.includes(key) ? selected.filter((k) => k !== key) : [...selected, key]); };
  const allKeys = flat.map((row) => row[rowKey]);
  const allSelected = allKeys.length > 0 && allKeys.every((k) => selected.includes(k));
  const someSelected = allKeys.some((k) => selected.includes(k));
  const toggleAll = () => { setSelected(allSelected ? [] : allKeys); };
  const togglePin = (key) => { if (isPinned(key)) { setPinned(pinned.filter((k) => k !== key)); } else if (pinned.length < columns.length - 1) { setPinned([...pinned, key]); } };
  const toggleGroup = (key) => { setCollapsed(collapsed.includes(key) ? collapsed.filter((k) => k !== key) : [...collapsed, key]); };
  const csvEscape = (v) => { const s = cellText(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const exportCsv = () => { const header = visibleColumns.map((c) => csvEscape(c.label)).join(","); const lines = flat.map((row) => visibleColumns.map((c) => csvEscape(row[c.key])).join(",")); const csv = [header, ...lines].join("\n"); const blob = new Blob([csv], { type: "text/csv" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "data-grid.csv"; a.click(); URL.revokeObjectURL(url); };
  const totalCols = visibleColumns.length + (selectable ? 1 : 0);
  const wash = "bg-[rgba(138,31,43,0.06)] dark:bg-[rgba(201,64,79,0.08)]";
  const surface = "bg-[#ffffff] dark:bg-[#181410]";
  const renderRow = (row) => { const key = row[rowKey]; const isSelected = selected.includes(key); return (
    <tr key={key} aria-selected={selectable ? isSelected : undefined} className={selectable && isSelected ? wash : ""}>
      {selectable && (
        <td className={`border-b ${LINE} px-3 py-2.5`}>
          <input type="checkbox" checked={isSelected} onChange={() => toggleRow(key)} aria-label={`Select row ${key}`} className="accent-[#8a1f2b] dark:accent-[#c9404f]" />
        </td>
      )}
      {visibleColumns.map((col, i) => { const isRowHeader = i === 0; const align = col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"; const pinStyle = isPinned(col.key) ? { position: "sticky", left: pinnedOffsets[col.key], zIndex: 1 } : {}; const pinBg = isPinned(col.key) ? (selectable && isSelected ? wash : surface) : ""; const cls = `border-b ${LINE} px-3 py-2.5 text-[14px] ${INK} ${align} ${pinBg}`; const style = { width: col.width || "160px", minWidth: col.width || "160px", ...pinStyle }; if (isRowHeader) return (<th key={col.key} scope="row" style={style} className={cls + " font-semibold"}>{cellText(row[col.key])}</th>); return (<td key={col.key} style={style} className={cls}>{cellText(row[col.key])}</td>); })}
    </tr>
  ); };
  return (
    <section>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <button type="button" onClick={exportCsv} className={`rounded-md border ${LINE} bg-[#ffffff] px-4 py-2 text-[13.5px] font-semibold ${INK} hover:border-[#8a1f2b] dark:bg-[#181410] dark:hover:border-[#c9404f] ${FOCUS}`}>Export CSV</button>
        {selectable && <p aria-live="polite" className={`text-[13px] ${SOFT}`}>{selected.length} selected</p>}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <caption className={`text-left text-[13px] ${SOFT}`}>Data grid. {flat.length} rows, {columns.length} columns. Sort with the header buttons, filter with the filter row, page with the pagination controls.</caption>
          <thead>
            <tr>
              {selectable && (
                <th scope="col" className={`border-b ${LINE} bg-[#ffffff] px-3 py-2.5 dark:bg-[#181410]`}>
                  <input type="checkbox" checked={allSelected} ref={(el) => { if (el) el.indeterminate = someSelected && !allSelected; }} onChange={toggleAll} aria-label="Select all rows" className="accent-[#8a1f2b] dark:accent-[#c9404f]" />
                </th>
              )}
              {visibleColumns.map((col) => { const sortable = col.sortable !== false; const sorted = sortKey === col.key; const pinnedCol = isPinned(col.key); const canPin = pinnedCol || pinned.length < columns.length - 1; return (
                <th key={col.key} scope="col" aria-sort={sorted ? (sortDir === "asc" ? "ascending" : sortDir === "desc" ? "descending" : "none") : "none"} style={{ width: col.width || "160px", minWidth: col.width || "160px", ...(pinnedCol ? { position: "sticky", left: pinnedOffsets[col.key], zIndex: 2 } : {}) }} className={`border-b ${LINE} bg-[#ffffff] px-3 py-2.5 text-left dark:bg-[#181410]`}>
                  <span className="flex items-center gap-2">
                    {sortable ? (<button type="button" onClick={() => onSort(col.key)} aria-label={`Sort by ${col.label}`} className={`text-left text-[12px] font-bold uppercase tracking-[0.08em] ${INK} hover:underline ${FOCUS}`}>{col.label}{sorted ? (sortDir === "asc" ? " ↑" : " ↓") : ""}</button>) : (<span className={`text-[12px] font-bold uppercase tracking-[0.08em] ${INK}`}>{col.label}</span>)}
                    <button type="button" onClick={() => togglePin(col.key)} disabled={!canPin} aria-pressed={pinnedCol} aria-label={`${pinnedCol ? "Unpin" : "Pin"} ${col.label} column`} title={canPin ? "" : "At least one column must stay unpinned"} className={`text-[11px] ${MONO} ${pinnedCol ? "text-[#8a1f2b] dark:text-[#c9404f]" : SOFT} ${FOCUS} disabled:opacity-40`}>Pin</button>
                  </span>
                </th>
              ); })}
            </tr>
            <tr>
              {selectable && <td className={`border-b ${LINE} bg-[#ffffff] dark:bg-[#181410]`} />}
              {visibleColumns.map((col) => (
                <td key={col.key} style={isPinned(col.key) ? { position: "sticky", left: pinnedOffsets[col.key], zIndex: 2 } : {}} className={`border-b ${LINE} bg-[#ffffff] px-3 py-2 dark:bg-[#181410]`}>
                  <input type="text" value={filters[col.key] || ""} onChange={(e) => onFilter(col.key, e.target.value)} placeholder={`Filter ${col.label}`} aria-label={`Filter ${col.label}`} className={`w-full rounded border ${LINE} bg-[#faf9f7] px-2 py-1.5 text-[13px] ${INK} dark:bg-[#100e0b] ${FOCUS}`} />
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageGroups ? pageGroups.map((group) => { const isCollapsed = collapsed.includes(group.key); return (
              <React.Fragment key={group.key}>
                <tr>
                  <td colSpan={totalCols} className={`border-b ${LINE} px-3 py-2`}>
                    <button type="button" onClick={() => toggleGroup(group.key)} aria-expanded={!isCollapsed} className={`flex items-center gap-2 text-left text-[13px] font-bold ${INK} ${FOCUS}`}>
                      <span aria-hidden="true">{isCollapsed ? "▸" : "▾"}</span>{group.key} ({group.total})
                    </button>
                  </td>
                </tr>
                {!isCollapsed && group.rows.map((row) => renderRow(row))}
              </React.Fragment>
            ); }) : pageRows.map((row) => renderRow(row))}
            {pageRows.length === 0 && (
              <tr>
                <td colSpan={totalCols} className={`px-3 py-6 text-center text-[14px] ${SOFT}`}>{Object.keys(filters).some((k) => filters[k]) ? "No rows match the current filters." : "No rows."}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setPage(Math.max(1, safePage - 1))} disabled={safePage <= 1} className={`rounded-md border ${LINE} bg-[#ffffff] px-4 py-2 text-[13.5px] font-semibold ${INK} hover:border-[#8a1f2b] dark:bg-[#181410] dark:hover:border-[#c9404f] disabled:cursor-not-allowed disabled:opacity-50 ${FOCUS}`}>Previous</button>
        <span className={`text-[13px] ${SOFT}`}>Page {safePage} of {totalPages}</span>
        <button type="button" onClick={() => setPage(Math.min(totalPages, safePage + 1))} disabled={safePage >= totalPages} className={`rounded-md border ${LINE} bg-[#ffffff] px-4 py-2 text-[13.5px] font-semibold ${INK} hover:border-[#8a1f2b] dark:bg-[#181410] dark:hover:border-[#c9404f] disabled:cursor-not-allowed disabled:opacity-50 ${FOCUS}`}>Next</button>
        <label className={`text-[13px] ${SOFT}`}>Rows per page
          <select value={perPage} onChange={(e) => onPageSize(Number(e.target.value))} aria-label="Rows per page" className={`ml-2 rounded border ${LINE} bg-[#ffffff] px-2 py-1.5 text-[13px] ${INK} dark:bg-[#181410] ${FOCUS}`}>
            {[10, 25, 50, 100].map((n) => (<option key={n} value={n}>{n}</option>))}
          </select>
        </label>
      </div>
    </section>
  );
}

const CHART_PALETTE = [
  "fill-[#8a1f2b] dark:fill-[#c9404f]",
  "fill-[#181b1f] dark:fill-[#ece3d0]",
  "fill-[#5b5f65] dark:fill-[#a79b82]",
  "fill-[#3f9e4d]",
  "fill-[#e8c56a]",
];
const CHART_PALETTE_BG = [
  "bg-[#8a1f2b] dark:bg-[#c9404f]",
  "bg-[#181b1f] dark:bg-[#ece3d0]",
  "bg-[#5b5f65] dark:bg-[#a79b82]",
  "bg-[#3f9e4d]",
  "bg-[#e8c56a]",
];
const CHART_STROKE = "stroke-[#8a1f2b] dark:stroke-[#c9404f]";
const CHART_GRID = "stroke-[#ddd6c7] dark:stroke-[#2e2720]";

export function Chart({ type = "bar", data = [], title, height = 240, showTable = true }) {
  const rows = (Array.isArray(data) ? data : []).map((d) => ({ label: String(d && d.label != null ? d.label : ""), value: Math.max(0, Number(d && d.value) || 0) }));
  const n = rows.length;
  const max = rows.reduce((m, r) => Math.max(m, r.value), 0);
  const total = rows.reduce((s, r) => s + r.value, 0);
  const min = n > 0 ? rows.reduce((m, r) => Math.min(m, r.value), Infinity) : 0;
  const typeLabel = type === "line" ? "Line" : type === "area" ? "Area" : type === "pie" ? "Pie" : type === "donut" ? "Donut" : "Bar";
  const isPie = type === "pie" || type === "donut";
  if (n === 0 || max <= 0 || (isPie && total <= 0)) {
    return (<p className={`text-[14px] ${SOFT}`}>No data.</p>);
  }
  const H = Math.max(height || 240, 120);
  const pct = (v) => ((v / total) * 100).toFixed(1) + "%";
  const shortLabel = (s) => (s.length > 12 ? s.slice(0, 11) + "…" : s);
  const titleSuffix = title ? ": " + title : "";
  const summary = isPie ? `${n} slices, total ${total}.` : `${n} categories, values from ${min} to ${max}.`;
  const caption = (title ? `${title} — ${typeLabel} chart. ` : `${typeLabel} chart. `) + "The table lists every value shown in the chart.";
  const niceStep = (m) => { const raw = m / 4; const mag = Math.pow(10, Math.floor(Math.log10(raw))); const norm = raw / mag; if (norm <= 1) return mag; if (norm <= 2) return 2 * mag; if (norm <= 2.5) return 2.5 * mag; if (norm <= 5) return 5 * mag; return 10 * mag; };
  const renderAxes = () => {
    const LEFT = 44, RIGHT = 12, TOP = 12, BOTTOM = 28;
    const plotW = 640 - LEFT - RIGHT;
    const plotH = H - TOP - BOTTOM;
    const step = niceStep(max);
    const tickMax = step * 4;
    const y = (v) => TOP + plotH * (1 - v / tickMax);
    const baseline = y(0);
    const slotW = plotW / n;
    const cx = (i) => LEFT + (i + 0.5) * slotW;
    const ticks = [0, step, step * 2, step * 3, step * 4];
    const grid = ticks.map((t) => (<g key={t} aria-hidden="true"><line x1={LEFT} x2={LEFT + plotW} y1={y(t)} y2={y(t)} className={CHART_GRID} strokeWidth="1" /><text x={LEFT - 6} y={y(t) + 4} textAnchor="end" className={`text-[11px] ${SOFT}`} fill="currentColor">{String(t)}</text></g>));
    const cats = rows.map((r, i) => (<text key={i} x={cx(i)} y={baseline + 18} textAnchor="middle" className={`text-[11px] font-semibold ${INK}`} fill="currentColor">{shortLabel(r.label)}</text>));
    return { LEFT, TOP, plotW, plotH, y, baseline, slotW, cx, grid, cats };
  };
  const renderBars = () => {
    const a = renderAxes();
    const barW = Math.min(a.slotW * 0.7, 72);
    return (<g aria-hidden="true">{a.grid}<line x1={a.LEFT} x2={a.LEFT + a.plotW} y1={a.baseline} y2={a.baseline} className={CHART_GRID} strokeWidth="1" />{rows.map((r, i) => { const x = a.cx(i) - barW / 2; const h = a.baseline - a.y(r.value); return (<g key={i}><rect x={x} y={a.y(r.value)} width={barW} height={Math.max(h, 0)} className={CHART_PALETTE[0]} /><text x={a.cx(i)} y={a.y(r.value) - 5} textAnchor="middle" className={`text-[11px] font-semibold ${INK}`} fill="currentColor">{String(r.value)}</text></g>); })}{a.cats}</g>);
  };
  const renderLineArea = () => {
    const a = renderAxes();
    const pts = rows.map((r, i) => [a.cx(i), a.y(r.value)]);
    const linePts = pts.map((p) => p.join(",")).join(" ");
    const areaD = `M ${pts[0].join(" ")} ` + pts.slice(1).map((p) => `L ${p.join(" ")}`).join(" ") + ` L ${pts[pts.length - 1][0]},${a.baseline} L ${pts[0][0]},${a.baseline} Z`;
    return (<g aria-hidden="true">{a.grid}<line x1={a.LEFT} x2={a.LEFT + a.plotW} y1={a.baseline} y2={a.baseline} className={CHART_GRID} strokeWidth="1" />{type === "area" && <path d={areaD} className={CHART_PALETTE[0]} fillOpacity="0.25" stroke="none" />}<polyline points={linePts} fill="none" className={CHART_STROKE} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />{pts.map((p, i) => (<g key={i}><circle cx={p[0]} cy={p[1]} r="4" className={CHART_PALETTE[0]} stroke="#ffffff" strokeWidth="1.5" /><text x={p[0]} y={p[1] - 9} textAnchor="middle" className={`text-[11px] font-semibold ${INK}`} fill="currentColor">{String(rows[i].value)}</text></g>))}{a.cats}</g>);
  };
  const renderPie = () => {
    const cx = 320, cy = H / 2;
    const R = Math.min(320, H / 2) - 20;
    const inner = type === "donut" ? R * 0.55 : 0;
    let acc = 0;
    const polar = (angleDeg, radius) => { const a = ((angleDeg - 90) * Math.PI) / 180; return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)]; };
    const slices = rows.map((r, i) => { const start = (acc / total) * 360; acc += r.value; const end = (acc / total) * 360; const large = end - start > 180 ? 1 : 0; const [x1, y1] = polar(start, R); const [x2, y2] = polar(end, R); let d; if (type === "donut") { const [ix2, iy2] = polar(end, inner); const [ix1, iy1] = polar(start, inner); d = `M ${x1},${y1} A ${R},${R} 0 ${large} 1 ${x2},${y2} L ${ix2},${iy2} A ${inner},${inner} 0 ${large} 0 ${ix1},${iy1} Z`; } else { d = `M ${cx},${cy} L ${x1},${y1} A ${R},${R} 0 ${large} 1 ${x2},${y2} Z`; } const mid = (start + end) / 2; const labelR = type === "donut" ? (R + inner) / 2 : R * 0.68; const [lx, ly] = polar(mid, labelR); return { r, i, d, lx, ly }; });
    return (<g aria-hidden="true">{slices.map((s) => (<g key={s.i}><path d={s.d} className={CHART_PALETTE[s.i % CHART_PALETTE.length]} stroke="#ffffff" strokeWidth="1" /><text x={s.lx} y={s.ly} textAnchor="middle" className={`text-[11px] font-semibold ${INK}`} fill="currentColor"><tspan x={s.lx} dy="-1">{shortLabel(rows[s.i].label)}</tspan><tspan x={s.lx} dy="13">{pct(rows[s.i].value)}</tspan></text></g>))}{type === "donut" && (<g><text x={cx} y={cy - 2} textAnchor="middle" className={`text-[20px] font-bold ${INK}`} fill="currentColor">{String(total)}</text><text x={cx} y={cy + 16} textAnchor="middle" className={`text-[11px] ${SOFT}`} fill="currentColor">total</text></g>)}</g>);
  };
  return (
    <section>
      <svg role="img" aria-label={`${typeLabel} chart${titleSuffix}. ${summary}`} viewBox={`0 0 640 ${H}`} width="100%" style={{ display: "block", overflow: "visible" }}>
        {type === "bar" && renderBars()}
        {(type === "line" || type === "area") && renderLineArea()}
        {isPie && renderPie()}
      </svg>
      {isPie && (
        <ul className="mt-2 list-none p-0">
          {rows.map((r, i) => (
            <li key={i} className="flex items-center gap-2 py-0.5">
              <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 shrink-0 rounded-[2px] ${CHART_PALETTE_BG[i % CHART_PALETTE_BG.length]}`} />
              <span className={`text-[13px] ${INK}`}>{r.label}</span>
              <span className={`ml-auto text-[13px] font-semibold ${INK}`}>{String(r.value)} ({pct(r.value)})</span>
            </li>
          ))}
        </ul>
      )}
      {showTable && (
        <table className="mt-3 w-full border-collapse">
          <caption className={`text-left text-[11px] font-bold uppercase tracking-[0.14em] ${SOFT}`}>{caption}</caption>
          <thead>
            <tr>
              <th scope="col" className={`border-b-4 border-double ${LINE} px-2 py-1.5 text-left text-[11px] font-bold uppercase tracking-[0.14em]`}>Label</th>
              <th scope="col" className={`border-b-4 border-double ${LINE} px-2 py-1.5 text-left text-[11px] font-bold uppercase tracking-[0.14em]`}>Value</th>
              {isPie && <th scope="col" className={`border-b-4 border-double ${LINE} px-2 py-1.5 text-left text-[11px] font-bold uppercase tracking-[0.14em]`}>Percent</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <th scope="row" className={`border-b ${LINE} px-2 py-1.5 text-left font-semibold ${INK}`}>{r.label}</th>
                <td className={`border-b ${LINE} px-2 py-1.5 ${INK}`}>{String(r.value)}</td>
                {isPie && <td className={`border-b ${LINE} px-2 py-1.5 ${INK}`}>{pct(r.value)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

/* ---------------- Date + Time pickers ---------------- */

const CAL_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const CAL_WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const isValidISODate = (s) => {
  if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const m = Number(s.slice(5, 7));
  const d = Number(s.slice(8, 10));
  if (m < 1 || m > 12 || d < 1) return false;
  return d <= new Date(Number(s.slice(0, 4)), m, 0).getDate();
};
const parseISODate = (s) => {
  if (!isValidISODate(s)) return null;
  return { y: Number(s.slice(0, 4)), m: Number(s.slice(5, 7)), d: Number(s.slice(8, 10)) };
};
const formatISODate = (y, m, d) => y + "-" + (m < 10 ? "0" + m : String(m)) + "-" + (d < 10 ? "0" + d : String(d));
const todayISO = () => {
  const t = new Date();
  return formatISODate(t.getFullYear(), t.getMonth() + 1, t.getDate());
};
const isValidTime = (s) => {
  if (typeof s !== "string" || !/^\d{2}:\d{2}$/.test(s)) return false;
  const h = Number(s.slice(0, 2));
  const mi = Number(s.slice(3, 5));
  return h >= 0 && h <= 23 && mi >= 0 && mi <= 59;
};
const formatTime12 = (s) => {
  if (!isValidTime(s)) return "";
  const h = Number(s.slice(0, 2));
  const mi = s.slice(3, 5);
  const h12 = h % 12 || 12;
  const ap = h < 12 ? "AM" : "PM";
  return `${h12}:${mi} ${ap}`;
};
const shiftMonth = (v, delta) => {
  let y = v.y;
  let m = v.m + delta;
  if (m < 1) { m = 12; y -= 1; }
  if (m > 12) { m = 1; y += 1; }
  return { y, m };
};

export function Calendar({ value, onChange, min, max }) {
  const parsed = parseISODate(value);
  const today = todayISO();
  const todayParsed = parseISODate(today);
  const [view, setView] = React.useState(parsed ? { y: parsed.y, m: parsed.m } : { y: todayParsed.y, m: todayParsed.m });
  const prevValueRef = React.useRef(value);
  if (value !== prevValueRef.current) {
    prevValueRef.current = value;
    if (parsed) setView({ y: parsed.y, m: parsed.m });
  }
  const lo = isValidISODate(min) ? min : null;
  const hi = isValidISODate(max) ? max : null;
  const daysInMonth = new Date(view.y, view.m, 0).getDate();
  const firstWeekday = new Date(view.y, view.m - 1, 1).getDay();
  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  const renderDay = (d) => {
    const iso = formatISODate(view.y, view.m, d);
    const isSelected = parsed !== null && iso === value;
    const isToday = iso === today;
    const isDisabled = (lo !== null && iso < lo) || (hi !== null && iso > hi);
    let dayClass = `border border-transparent ${INK} hover:bg-[#f1ede5] dark:hover:bg-[#14110c]`;
    if (isSelected) dayClass = "bg-[#8a1f2b] font-bold text-[#ffffff] dark:bg-[#c9404f]";
    else if (isToday) dayClass = `border-2 border-[#8a1f2b] font-bold ${INK} dark:border-[#c9404f]`;
    return (
      <button type="button" key={iso} disabled={isDisabled} aria-disabled={isDisabled} aria-current={isToday ? "date" : undefined} aria-label={`${CAL_MONTHS[view.m - 1]} ${d}, ${view.y}${isSelected ? ", selected" : ""}`} onClick={() => onChange && onChange(iso)} className={`flex h-9 w-9 items-center justify-center rounded-[4px] text-[13px] ${FOCUS} ${dayClass} disabled:opacity-40`}>{d}</button>
    );
  };
  return (
    <div className="w-full max-w-[300px]">
      <div className={`flex items-center justify-between border-b-4 border-double ${LINE} pb-2`}>
        <button type="button" aria-label="Previous month" onClick={() => setView(shiftMonth(view, -1))} className={`rounded px-2 py-1 text-[16px] ${INK} ${FOCUS}`}>‹</button>
        <div aria-live="polite" className={`text-[13px] font-bold uppercase tracking-[0.14em] ${INK}`}>{CAL_MONTHS[view.m - 1]} {view.y}</div>
        <button type="button" aria-label="Next month" onClick={() => setView(shiftMonth(view, 1))} className={`rounded px-2 py-1 text-[16px] ${INK} ${FOCUS}`}>›</button>
      </div>
      <table className="mt-1 w-full border-collapse">
        <thead>
          <tr className={`border-b-4 border-double ${LINE}`}>{CAL_WEEKDAYS.map((wd) => (<th key={wd} scope="col" className={`py-1.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] ${SOFT}`}>{wd}</th>))}</tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>{week.map((d, di) => (<td key={di} className="p-0.5 text-center">{d === null ? null : renderDay(d)}</td>))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DatePicker({ value, onChange, label = "Date", placeholder = "YYYY-MM-DD", min, max, clearable = true, invalid = false }) {
  const [open, setOpen] = React.useState(false);
  const inputId = React.useId();
  const popId = React.useId();
  const triggerRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const display = isValidISODate(value) ? value : "";
  const lo = isValidISODate(min) ? min : null;
  const hi = isValidISODate(max) ? max : null;
  const today = todayISO();
  const todayOutOfRange = (lo !== null && today < lo) || (hi !== null && today > hi);
  const close = () => setOpen(false);
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      close();
      if (triggerRef.current) triggerRef.current.focus();
    }
  };
  const pick = (iso) => {
    if (onChange) onChange(iso);
    close();
  };
  return (
    <div ref={wrapRef} className="relative" onKeyDown={handleKeyDown}>
      <label htmlFor={inputId} className={`block text-[11px] font-bold uppercase tracking-[0.14em] ${INK}`}>{label}</label>
      <div className="mt-1 flex items-center gap-1.5">
        <input id={inputId} type="text" readOnly value={display} placeholder={placeholder} aria-invalid={invalid} className={`w-[140px] rounded border ${LINE} px-2.5 py-1.5 text-[13px] ${INK} ${CARD} ${FOCUS}`} />
        <button ref={triggerRef} type="button" aria-label={open ? "Close calendar" : "Open calendar"} aria-expanded={open} aria-controls={popId} onClick={() => setOpen(!open)} className={`rounded border ${LINE} px-2.5 py-1.5 text-[13px] ${INK} ${FOCUS}`}>Calendar</button>
      </div>
      {open && (
        <div id={popId} className={`absolute z-10 mt-1 max-w-[calc(100vw-32px)] p-2 ${CARD} border ${LINE}`}>
          <Calendar value={display || null} onChange={pick} min={min} max={max} />
          <div className="mt-1.5 flex gap-1.5">
            {clearable && display && (<button type="button" onClick={() => { if (onChange) onChange(null); close(); }} className={`rounded border ${LINE} px-2.5 py-1.5 text-[13px] ${INK} ${FOCUS}`}>Clear</button>)}
            <button type="button" disabled={todayOutOfRange} aria-disabled={todayOutOfRange} onClick={() => pick(today)} className={`rounded border ${LINE} px-2.5 py-1.5 text-[13px] ${INK} ${FOCUS} disabled:opacity-40`}>Today</button>
          </div>
        </div>
      )}
    </div>
  );
}

export function TimePicker({ value, onChange, label = "Time", step = 30 }) {
  const [open, setOpen] = React.useState(false);
  const triggerId = React.useId();
  const listId = React.useId();
  const triggerRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const stepMin = step === 60 ? 60 : 30;
  const valid = isValidTime(value) ? value : null;
  const display = valid ? formatTime12(valid) : "Select time";
  const options = [];
  for (let m = 0; m < 24 * 60; m += stepMin) {
    const hh = Math.floor(m / 60);
    const mm = m % 60;
    options.push(`${hh < 10 ? "0" + hh : String(hh)}:${mm < 10 ? "0" + mm : String(mm)}`);
  }
  const close = () => setOpen(false);
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      close();
      if (triggerRef.current) triggerRef.current.focus();
    }
  };
  const pick = (t) => {
    if (onChange) onChange(t);
    close();
  };
  return (
    <div ref={wrapRef} className="relative" onKeyDown={handleKeyDown}>
      <label htmlFor={triggerId} className={`block text-[11px] font-bold uppercase tracking-[0.14em] ${INK}`}>{label}</label>
      <button ref={triggerRef} id={triggerId} type="button" aria-haspopup="listbox" aria-expanded={open} aria-controls={listId} onClick={() => setOpen(!open)} className={`mt-1 w-[140px] rounded border ${LINE} px-2.5 py-1.5 text-left text-[13px] ${INK} ${CARD} ${FOCUS}`}>{display}</button>
      {open && (
        <ul id={listId} role="listbox" className={`absolute z-10 mt-1 max-h-60 w-[140px] overflow-auto p-1 ${CARD} border ${LINE}`}>
          {options.map((t) => {
            const isSelected = t === valid;
            return (
              <li key={t} role="option" aria-selected={isSelected} className={isSelected ? "bg-[#8a1f2b] dark:bg-[#c9404f]" : ""}>
                <button type="button" onClick={() => pick(t)} className={`w-full rounded px-2.5 py-1.5 text-left text-[13px] ${isSelected ? "font-bold text-[#ffffff]" : `${INK} hover:bg-[#f1ede5] dark:hover:bg-[#14110c]`} ${FOCUS}`}>{formatTime12(t)}</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function DateRangePicker({ start, end, onChange, label = "Date range", min, max, clearable = true }) {
  const [error, setError] = React.useState(null);
  const [prevPair, setPrevPair] = React.useState([start, end]);
  if (prevPair[0] !== start || prevPair[1] !== end) {
    setPrevPair([start, end]);
    if (error) setError(null);
  }
  const message = "End date must be on or after the start date.";
  const validStart = isValidISODate(start) ? start : null;
  const validEnd = isValidISODate(end) ? end : null;
  const propsInvalid = validStart !== null && validEnd !== null && validEnd < validStart;
  const hasError = error !== null || propsInvalid;
  const handleStart = (next) => {
    if (next !== null && validEnd !== null && next > validEnd) {
      setError(message);
      return;
    }
    setError(null);
    if (onChange) onChange({ start: next, end: validEnd });
  };
  const handleEnd = (next) => {
    if (next !== null && validStart !== null && next < validStart) {
      setError(message);
      return;
    }
    setError(null);
    if (onChange) onChange({ start: validStart, end: next });
  };
  const handleClear = () => {
    setError(null);
    if (onChange) onChange({ start: null, end: null });
  };
  return (
    <fieldset className="m-0 border-0 p-0">
      <legend className={`text-[11px] font-bold uppercase tracking-[0.14em] ${INK}`}>{label}</legend>
      <div className="mt-1 flex flex-wrap items-start gap-2">
        <DatePicker value={validStart} onChange={handleStart} label="Start" min={min} max={max} clearable={false} />
        <DatePicker value={validEnd} onChange={handleEnd} label="End" min={min} max={max} clearable={false} invalid={hasError} />
      </div>
      {validStart !== null && validEnd !== null && !hasError && (<div aria-hidden="true" className="mt-2 bg-[#8a1f2b] px-3 py-1.5 text-[12px] font-semibold text-[#ffffff] dark:bg-[#c9404f]">{validStart} → {validEnd}</div>)}
      {clearable && (validStart !== null || validEnd !== null) && (<button type="button" onClick={handleClear} className={`mt-2 rounded border ${LINE} px-2.5 py-1.5 text-[13px] ${INK} ${FOCUS}`}>Clear</button>)}
      {hasError && (<p role="alert" className="mt-2 text-[13px] text-[#8a1f2b] dark:text-[#c9404f]">{message}</p>)}
    </fieldset>
  );
}

export const COMPONENT_DOCS = [
  {
    id: "site-nav",
    name: "SiteNav",
    tagline: "Sticky header. Wordmark, links, tools, readbar.",
  },
  {
    id: "command-palette",
    name: "CommandPalette",
    tagline: "One overlay for search and jump.",
  },
  {
    id: "page-header",
    name: "PageHeader",
    tagline: "Eyebrow, H1, deck, reference, ghost number.",
  },
  {
    id: "hero",
    name: "Hero",
    tagline: "Bignum, H1 with accent em, CTAs, trustline.",
  },
  {
    id: "status-badge",
    name: "StatusBadge",
    tagline: "Live status with a pulsing dot.",
  },
  {
    id: "file-card",
    name: "FileCard",
    tagline: "Reference, title, description, meta, assignment.",
  },
  {
    id: "folder-card",
    name: "FolderCard",
    tagline: "Stamped folder with a meta row.",
  },
  {
    id: "data-table",
    name: "DataTable",
    tagline: "Rows with reference, title, meta, assignment.",
  },
  {
    id: "pill",
    name: "Pill",
    tagline: "Small uppercase status.",
  },
  {
    id: "stamp",
    name: "Stamp",
    tagline: "Rotated status mark.",
  },
  {
    id: "assignment-line",
    name: "AssignmentLine",
    tagline: "Lamp plus status text.",
  },
  {
    id: "button",
    name: "Button",
    tagline: "Primary, solid, ghost, solid small.",
  },
  {
    id: "filter-chip",
    name: "FilterChip",
    tagline: "Filter with a count.",
  },
  {
    id: "forum-control",
    name: "ForumControl",
    tagline: "Forum toggle.",
  },
  {
    id: "submission-form",
    name: "SubmissionForm",
    tagline: "Labeled fields, radio options, submit.",
  },
  {
    id: "directory-search",
    name: "DirectorySearch",
    tagline: "Full-width search input.",
  },
  {
    id: "section-head",
    name: "SectionHead",
    tagline: "Kicker plus H2 plus lede.",
  },
  {
    id: "kicker",
    name: "Kicker",
    tagline: "Mono eyebrow, hero-em or faint.",
  },
  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    tagline: "Trail with separators.",
  },
  {
    id: "stats-band",
    name: "StatsBand",
    tagline: "Grid of labeled numbers.",
  },
  {
    id: "activity-feed",
    name: "ActivityFeed",
    tagline: "Card with a live header and rows.",
  },
  {
    id: "activity-entry",
    name: "ActivityEntry",
    tagline: "Time block plus paragraph.",
  },
  {
    id: "steps-list",
    name: "StepsList",
    tagline: "Numbered steps under a double rule.",
  },
  {
    id: "detail-card",
    name: "DetailCard",
    tagline: "Head, grid, source and assigned rows, foot.",
  },
  {
    id: "summary-card",
    name: "SummaryCard",
    tagline: "Header plus key and value rows.",
  },
  {
    id: "disclaimer",
    name: "Disclaimer",
    tagline: "Oxblood-bordered notice.",
  },
  {
    id: "pipeline-strip",
    name: "PipelineStrip",
    tagline: "Steps with dots and connectors.",
  },
  {
    id: "profile-rows",
    name: "ProfileRows",
    tagline: "Name, body, status rows.",
  },
  {
    id: "profile-status",
    name: "ProfileStatus",
    tagline: "Pill status for profile rows.",
  },
  {
    id: "timeline",
    name: "Timeline",
    tagline: "Dated rows under a double rule.",
  },
  {
    id: "media-card",
    name: "MediaCard",
    tagline: "Number, body, more link, source.",
  },
  {
    id: "open-questions",
    name: "OpenQuestions",
    tagline: "Questions with answers under an ok rule.",
  },
  {
    id: "coverage-list",
    name: "CoverageList",
    tagline: "Link plus title plus date rows.",
  },
  {
    id: "source-list",
    name: "SourceList",
    tagline: "Link block plus sub rows.",
  },
  {
    id: "citations",
    name: "Citations",
    tagline: "Numbered citation rows.",
  },
  {
    id: "prev-next",
    name: "PrevNext",
    tagline: "Previous and next card links.",
  },
  {
    id: "diff-band",
    name: "DiffBand",
    tagline: "Dark band of compared rows.",
  },
  {
    id: "role-card",
    name: "RoleCard",
    tagline: "Chip plus title plus body.",
  },
  {
    id: "step-gates",
    name: "StepGates",
    tagline: "Numbered gates with connectors.",
  },
  {
    id: "pledge",
    name: "Pledge",
    tagline: "Promises behind an oxblood rule.",
  },
  {
    id: "cta-band",
    name: "CtaBand",
    tagline: "Dark band with H2, body, button, link.",
  },
  {
    id: "footer",
    name: "Footer",
    tagline: "Double-rule footer with columns and fine print.",
  },
  {
    id: "theme-toggle",
    name: "ThemeToggle",
    tagline: "Circle icon button; the icon shows the target mode.",
  },
  {
    id: "icon-button",
    name: "IconButton",
    tagline: "34px circle button.",
  },
  {
    id: "nav-toggle",
    name: "NavToggle",
    tagline: "Hamburger that becomes an X.",
  },
  {
    id: "ghost-number",
    name: "GhostNumber",
    tagline: "118px ghost numeral, decorative.",
  },
  {
    id: "shows-card",
    name: "ShowsCard",
    tagline: "Key and body rows in a card.",
  },
  {
    id: "empty-attachment",
    name: "EmptyAttachment",
    tagline: "Dashed empty box.",
  },
  {
    id: "profile-avatar",
    name: "ProfileAvatar",
    tagline: "Initial badge in three sizes.",
  },
  {
    id: "profile-card-row",
    name: "ProfileCardRow",
    tagline: "Avatar plus name plus role link row.",
  },
  {
    id: "status-line",
    name: "StatusLine",
    tagline: "Dot plus mono status text.",
  },
  {
    id: "profile-hero",
    name: "ProfileHero",
    tagline: "Avatar xl plus handle plus status plus stats.",
  },
  {
    id: "empty-state",
    name: "EmptyState",
    tagline: "Dashed empty state with CTA.",
  },
  {
    id: "review-queue",
    name: "ReviewQueue",
    tagline: "Expandable review rows with a ping.",
  },
  {
    id: "daily-summary",
    name: "DailySummary",
    tagline: "Kicker plus totals line.",
  },
  {
    id: "next-up",
    name: "NextUp",
    tagline: "Key plus title plus sub.",
  },
  {
    id: "rail",
    name: "Rail",
    tagline: "Horizontal snap-scroll card rail.",
  },
  {
    id: "result-card",
    name: "ResultCard",
    tagline: "Outcome card with number, title, outcome, key/value rows.",
  },
  {
    id: "forum-thread",
    name: "ForumThread",
    tagline: "Thread row with votes and replies.",
  },
  {
    id: "mini-gates",
    name: "MiniGates",
    tagline: "Compact gate cards, four across.",
  },
  {
    id: "start-here",
    name: "StartHere",
    tagline: "Intro card with kick, title, body.",
  },
  {
    id: "search-pill",
    name: "SearchPill",
    tagline: "Pill search with keyboard hint.",
  },
  {
    id: "banner",
    name: "Banner",
    tagline: "Always-dark notice bar.",
  },
  {
    id: "duo-card",
    name: "DuoCard",
    tagline: "Two-up card with kick and hover lift.",
  },
  {
    id: "index-row",
    name: "IndexRow",
    tagline: "Index row with hover-reveal arrow.",
  },
  {
    id: "select",
    name: "Select",
    tagline: "Native select with custom chevron.",
  },
  {
    id: "option-row",
    name: "OptionRow",
    tagline: "Bordered radio option row.",
  },
  {
    id: "data-grid",
    name: "DataGrid",
    tagline: "Sortable, filterable, pageable data grid.",
  },
  {
    id: "chart",
    name: "Chart",
    tagline: "Bar, line, area, pie, donut. One series, SVG + data table.",
  },
  {
    id: "calendar",
    name: "Calendar",
    tagline: "Month grid. One button per day, min/max bounds.",
  },
  {
    id: "date-picker",
    name: "DatePicker",
    tagline: "Read-only input plus popover calendar. Clear, Today.",
  },
  {
    id: "time-picker",
    name: "TimePicker",
    tagline: "Trigger plus time listbox. 12-hour labels, HH:MM value.",
  },
  {
    id: "date-range-picker",
    name: "DateRangePicker",
    tagline: "Two DatePickers, one range. End-before-start is an error.",
  },
];
