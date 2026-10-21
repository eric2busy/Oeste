// Oeste Design System — Huntington theme (v0.2.0)
// React + Tailwind components, copy-paste ready.
// Requires: React 18+ in scope, Tailwind with arbitrary values, JSX transform.
// Tokens in this file MUST match src/tokens.json and src/tokens.css exactly.
// Demos are local only — no network, no auth, no data storage.
// 46 components: 37 from the Figma plugin v1.0.3 (44 built nodes, 4 variant
// sets: Photo Card x4, Filter Pill x2, Status Pill x3, Reaction Button x2)
// plus Toggle Tabs and Next Footer, added from the live site in v0.2.0,
// plus Search, added in v0.2.0 for consumers who need to filter a list,
// plus Calendar, DatePicker, TimePicker, and DateRangePicker, added in
// v0.2.0 for consumers who need to pick dates and times,
// plus Chart, added in v0.2.0 for consumers who need to chart one series,
// plus DataGrid, added in v0.2.0 for consumers who need a sortable, filterable, pageable table.
// One form control (Search). No filled primary button, no toast — the
// source has none. Props are content slots derived from the Figma builders.

export const DESIGN_TOKENS = Object.freeze({"name": "oeste-huntington", "version": "0.2.0", "defaultMood": "paper", "moods": ["paper", "ink", "rose", "sage", "dune"], "color": {"moods": {"paper": {"paper": "#f6f4f1", "card": "#fffdf9", "ink": "#1c1917", "body": "rgba(28,25,23,0.86)", "muted": "#756e6a", "line": "rgba(28,25,23,0.1)", "amountUp": "#1f7e5c", "amountDown": "#b25151"}, "ink": {"paper": "#151412", "card": "#1e1d1b", "ink": "#f0ede8", "body": "rgba(240,237,232,0.86)", "muted": "#a09a93", "line": "rgba(240,237,232,0.14)", "amountUp": "#34d399", "amountDown": "#f87171"}, "rose": {"paper": "#f8efeb", "card": "#fffbf9", "ink": "#2a211d", "body": "rgba(42,33,29,0.86)", "muted": "#7a6a62", "line": "rgba(42,33,29,0.1)", "amountUp": "#1e7b5a", "amountDown": "#ae5050"}, "sage": {"paper": "#edf0ea", "card": "#fbfdfa", "ink": "#1d211c", "body": "rgba(29,33,28,0.86)", "muted": "#676e67", "line": "rgba(29,33,28,0.1)", "amountUp": "#1e7a59", "amountDown": "#ad4f4f"}, "dune": {"paper": "#f3e9d7", "card": "#faf3e4", "ink": "#2b2114", "body": "rgba(43,33,20,0.86)", "muted": "#76674b", "line": "rgba(43,33,20,0.12)", "amountUp": "#1d7757", "amountDown": "#a84d4d"}}, "accents": {"live": "#d24247", "pulse": "#1a73e8", "statusActive": "#34d399", "statusIdle": "#60a5fa", "statusOffline": "#fbbf24", "amountUp": "#34d399", "amountDown": "#f87171", "orbDefault": "#ff6b1a", "orbBlue": "#7aa2d9", "orbRose": "#d9b5a3", "orbGreen": "#9dc08b", "white": "#ffffff", "logoCardDark": "#141210"}, "lightboxBg": "rgba(8,8,8,0.95)", "menuscrim": "rgba(0,0,0,0.18)", "photoGradients": {"default": ["#0e0f10", "#1d1e20", "#2b1f11"], "blue": ["#101418", "#1a2230", "#24344d"], "rose": ["#140f0e", "#241a17", "#3d2a22"], "green": ["#0e120e", "#1a241a", "#2a3d2a"]}}, "radius": {"card": "14px", "logocard": "18px", "carouselImage": "14px", "gridArt": "10px", "progressbar": "2px", "menusheetTop": "22px", "pill": "999px", "photo": "14px", "tile": "14px"}, "shadow": {"card": "none (hairline border instead)", "menupill": "0 8px 24px rgba(0,0,0,0.14)", "menusheet": "0 -18px 50px rgba(0,0,0,0.16)"}, "space": {"scale": {"s0": "0px", "s2": "2px", "s3": "3px", "s4": "4px", "s6": "6px", "s7": "7px", "s8": "8px", "s9": "9px", "s10": "10px", "s12": "12px", "s14": "14px", "s16": "16px", "s18": "18px", "s20": "20px", "s22": "22px", "s28": "28px", "s40": "40px", "s44": "44px", "s64": "64px", "s80": "80px"}, "layout": {"maxWidth": "672px", "pagePaddingBottom": "64px", "sectionPaddingTop": "44px", "sidePadding": "20px", "sidePaddingWide": "0px"}}, "type": {"fontFamily": "Manrope, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", "weightRange": "400-800 (variable font, no italics)", "styles": {"h1": {"size": "31px", "weight": 700, "leading": 1.22, "tracking": "-0.03em"}, "lede": {"size": "26px", "weight": 500, "leading": 1.28, "tracking": "-0.025em"}, "ledeWide": {"size": "34px", "weight": 500, "leading": 1.28, "tracking": "-0.025em"}, "ptitle": {"size": "26px", "weight": 600, "leading": 1.28, "tracking": "-0.025em"}, "body": {"size": "16px", "weight": 400, "leading": 1.65, "tracking": "0em"}, "hsub": {"size": "16px", "weight": 400, "leading": 1.65, "tracking": "0em"}, "secTitle": {"size": "17px", "weight": 700, "leading": 1.0, "tracking": "-0.01em"}, "secTitleNote": {"size": "13px", "weight": 500, "leading": 1.0, "tracking": "0em"}, "irowTitle": {"size": "16px", "weight": 600, "leading": 1.0, "tracking": "-0.015em"}, "irowDesc": {"size": "15px", "weight": 400, "leading": 1.5, "tracking": "0em"}, "irowMeta": {"size": "13px", "weight": 400, "leading": 1.0, "tracking": "0em"}, "statusValue": {"size": "15.5px", "weight": 800, "leading": 1.0, "tracking": "-0.01em"}, "statusValuePlain": {"size": "15.5px", "weight": 400, "leading": 1.0, "tracking": "-0.01em"}, "wordmark": {"size": "17px", "weight": 800, "leading": 1.0, "tracking": "-0.02em"}, "plabel": {"size": "12px", "weight": 500, "leading": 1.0, "tracking": "0.06em"}, "tag": {"size": "11px", "weight": 600, "leading": 1.0, "tracking": "0.08em"}, "menuSheetRowTitle": {"size": "17px", "weight": 700, "leading": 1.0, "tracking": "-0.015em"}, "footer": {"size": "13px", "weight": 400, "leading": 1.7, "tracking": "0em"}, "backLink": {"size": "13px", "weight": 400, "leading": 1.0, "tracking": "0em"}, "meta": {"size": "13px", "weight": 400, "leading": 1.0, "tracking": "0em"}}}, "breakpoint": {"narrow": "0-699px", "wide": "700px+"}, "touchMin": "44px", "motion": {"moodPulse": "1.1s scale pulse on mood change (audit)", "liveBlink": "LIVE dot blinks (audit)", "pulseRing": "2.4s ping (audit)", "equalizer": "staggered scaleY (audit)", "accordion": "300px max-height transition (audit)", "mediaDrift": "26s scale drift (audit)", "progressPulse": "fill opacity pulse while charging (audit)", "reducedMotion": "no animation"}, "notes": "Single token source of truth. Must match src/tokens.css and DESIGN_TOKENS in src/index.js. Default mood is Paper. Muted text meets WCAG AA 4.5:1 on paper and card in all five moods (Figma v2.5.0 values applied 2026-10-20). See Accessibility. Logo Card radius is 18px per these tokens + the audit; the Figma plugin builder used 14px."});

const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]";

/* ---------------- Photo Card variants ---------------- */

const PHOTO_CARD_VARIANTS = {
  default: { gradient: ["#0e0f10", "#1d1e20", "#2b1f11"], orb: "#ff6b1a" },
  blue: { gradient: ["#101418", "#1a2230", "#24344d"], orb: "#7aa2d9" },
  rose: { gradient: ["#140f0e", "#241a17", "#3d2a22"], orb: "#d9b5a3" },
  green: { gradient: ["#0e120e", "#1a241a", "#2a3d2a"], orb: "#9dc08b" },
};

/* ---------------- Status Pill dots ---------------- */

const STATUS_PILL_DOTS = {
  active: "#34d399",
  idle: "#60a5fa",
  offline: "#fbbf24",
};

/* ---------------- Header ---------------- */

export function Header({ wordmark = "Brand", mood, onMoodChange }) {
  return (
    <header className="flex items-start justify-between bg-[var(--color-paper)] pt-10">
      <a href="#/home" className="flex items-center gap-1.5 no-underline">
        <span aria-hidden="true" className="inline-block h-[30px] w-[30px] rounded-[4px] border border-[var(--color-line)] bg-[var(--color-card)]" />
        <span className="text-[var(--type-wordmark-size)] leading-[var(--type-wordmark-leading)] tracking-[var(--type-wordmark-tracking)] text-[var(--color-ink)] [font-weight:var(--type-wordmark-weight)]">{wordmark}</span>
      </a>
      <MoodButton mood={mood} onCycle={() => onMoodChange && onMoodChange()} />
    </header>
  );
}

/* ---------------- Mood Button ---------------- */

export function MoodButton({ mood = "paper", onCycle }) {
  return (
    <button type="button" onClick={onCycle} aria-label={"Mood: " + mood + ". Cycle to the next mood."}
      className={"inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border-0 bg-transparent p-1.5 " + FOCUS}>
      <span aria-hidden="true" className="inline-block h-[18px] w-[18px] rounded-full border-[1.5px] border-[var(--color-muted)] bg-[var(--color-paper)]" />
    </button>
  );
}

/* ---------------- Live Hero ---------------- */

export function LiveHero({ title, sub }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="m-0 max-w-[496px] text-[var(--type-h1-size)] leading-[var(--type-h1-leading)] tracking-[var(--type-h1-tracking)] text-[var(--color-ink)] [font-weight:var(--type-h1-weight)]">{title}</h1>
      <p className="m-0 max-w-[496px] text-[var(--type-hsub-size)] leading-[var(--type-hsub-leading)] text-[var(--color-muted)] [font-weight:var(--type-hsub-weight)]">{sub}</p>
    </div>
  );
}

/* ---------------- Lede ---------------- */

export function Lede({ children }) {
  return (
    <p className="m-0 max-w-[572px] text-[var(--type-lede-size)] leading-[var(--type-lede-leading)] tracking-[var(--type-lede-tracking)] text-[var(--color-ink)] [font-weight:var(--type-lede-weight)]">{children}</p>
  );
}

/* ---------------- Standfirst ---------------- */

export function Standfirst({ children }) {
  return (
    <p className="m-0 max-w-[544px] text-[var(--type-body-size)] leading-[var(--type-body-leading)] text-[var(--color-body)] [font-weight:var(--type-body-weight)]">{children}</p>
  );
}

/* ---------------- Page Title ---------------- */

export function PageTitle({ title, meta }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="m-0 text-[var(--type-ptitle-size)] leading-[var(--type-ptitle-leading)] tracking-[var(--type-ptitle-tracking)] text-[var(--color-ink)] [font-weight:var(--type-ptitle-weight)]">{title}</h1>
      {meta && <p className="m-0 text-[var(--type-meta-size)] leading-[var(--type-meta-leading)] text-[var(--color-muted)] [font-weight:var(--type-meta-weight)]">{meta}</p>}
    </div>
  );
}

/* ---------------- Section Title ---------------- */

export function SectionTitle({ title, note }) {
  return (
    <div className="flex items-baseline justify-between border-b border-[var(--color-border)] pb-[14px]">
      <h2 className="m-0 text-[var(--type-secTitle-size)] leading-[var(--type-secTitle-leading)] tracking-[var(--type-secTitle-tracking)] text-[var(--color-ink)] [font-weight:var(--type-secTitle-weight)]">{title}</h2>
      {note && <span className="text-[var(--type-secTitleNote-size)] leading-[var(--type-secTitleNote-leading)] text-[var(--color-muted)] [font-weight:var(--type-secTitleNote-weight)]">{note}</span>}
    </div>
  );
}

/* ---------------- List Row ---------------- */

export function ListRow({ title, description, meta, href, onClick, stacked = false }) {
  const titleEl = <span className="shrink-0 whitespace-nowrap overflow-hidden text-ellipsis text-[var(--type-irowTitle-size)] leading-[var(--type-irowTitle-leading)] tracking-[var(--type-irowTitle-tracking)] text-[var(--color-ink)] [font-weight:var(--type-irowTitle-weight)]">{title}</span>;
  const descEl = description && <span className="min-w-0 text-[var(--type-irowDesc-size)] leading-[var(--type-irowDesc-leading)] text-[var(--color-muted)] [font-weight:var(--type-irowDesc-weight)]">{description}</span>;
  const metaEl = meta && <span className="shrink-0 text-[var(--type-irowMeta-size)] leading-[var(--type-irowMeta-leading)] text-[var(--color-muted)] [font-weight:var(--type-irowMeta-weight)]">{meta}</span>;
  if (stacked) {
    const cls = "flex w-full flex-col gap-1 px-1 py-[15px] text-left no-underline " + FOCUS;
    const inner = (
      <>
        <span className="flex items-baseline justify-between gap-4">{titleEl}{metaEl}</span>
        {descEl}
      </>
    );
    if (href) return <a href={href} className={cls}>{inner}</a>;
    return <button type="button" onClick={onClick} className={"border-0 bg-transparent " + cls}>{inner}</button>;
  }
  const cls = "flex w-full items-baseline justify-between gap-4 px-1 py-[15px] text-left no-underline " + FOCUS;
  const inner = (
    <>
      <span className="flex items-baseline gap-[14px] min-w-0">{titleEl}{descEl}</span>
      {metaEl}
    </>
  );
  if (href) return <a href={href} className={cls}>{inner}</a>;
  return <button type="button" onClick={onClick} className={"border-0 bg-transparent " + cls}>{inner}</button>;
}}

/* ---------------- Status Row ---------------- */

export function StatusRow({ label, value, plain = false }) {
  return (
    <div className="flex items-baseline gap-4 px-1 py-[7px]">
      <span className="text-[var(--type-statusValuePlain-size)] leading-[var(--type-statusValuePlain-leading)] tracking-[var(--type-statusValuePlain-tracking)] text-[var(--color-muted)] [font-weight:var(--type-statusValuePlain-weight)]">{label}</span>
      <span className={"text-[var(--type-statusValue-size)] leading-[var(--type-statusValue-leading)] tracking-[var(--type-statusValue-tracking)] text-[var(--color-ink)] " + (plain ? "[font-weight:var(--type-statusValuePlain-weight)]" : "[font-weight:var(--type-statusValue-weight)]")}>{value}</span>
    </div>
  );
}

/* ---------------- Playlist Row ---------------- */

export function PlaylistRow({ title, meta, tracks = [], open = false, onToggle }) {
  const id = React.useId();
  return (
    <div className="flex flex-col gap-3">
      <button type="button" aria-expanded={open} aria-controls={id} onClick={onToggle}
        className={"flex w-full items-center gap-3 border-0 bg-transparent text-left " + FOCUS}>
        <span aria-hidden="true" className="inline-block h-16 w-16 shrink-0 rounded-[14px] border border-[var(--color-border)] bg-[var(--color-card)]" />
        <span className="flex flex-1 flex-col gap-1 min-w-0">
          <span className="text-[var(--type-irowTitle-size)] leading-[var(--type-irowTitle-leading)] tracking-[var(--type-irowTitle-tracking)] text-[var(--color-ink)] [font-weight:var(--type-irowTitle-weight)]">{title}</span>
          {meta && <span className="text-[var(--type-irowMeta-size)] leading-[var(--type-irowMeta-leading)] text-[var(--color-muted)] [font-weight:var(--type-irowMeta-weight)]">{meta}</span>}
        </span>
        <span aria-hidden="true" className="text-[var(--color-muted)]">{open ? "\u2304" : "\u2304"}</span>
      </button>
      {open && (
        <div id={id} className="flex flex-col gap-2 pl-20">
          {tracks.map((t, i) => (
            <p key={i} className="m-0 text-[14px] leading-[1.6] text-[var(--color-muted)]">{t}</p>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- Favorite Accordion ---------------- */

export function FavoriteAccordion({ title, details = [], open = false, onToggle }) {
  const id = React.useId();
  return (
    <div className="flex flex-col gap-2">
      <button type="button" aria-expanded={open} aria-controls={id} onClick={onToggle}
        className={"flex w-full min-h-[44px] items-center gap-2 border-0 bg-transparent text-left " + FOCUS}>
        <span aria-hidden="true" className="text-[var(--color-muted)]">{open ? "\u2304" : "\u2304"}</span>
        <span className="text-[var(--type-irowTitle-size)] leading-[var(--type-irowTitle-leading)] tracking-[var(--type-irowTitle-tracking)] text-[var(--color-ink)] [font-weight:var(--type-irowTitle-weight)]">{title}</span>
      </button>
      {open && (
        <div id={id} className="flex flex-col gap-2">
          {details.map((d, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-[14px] leading-[1.6] text-[var(--color-muted)]">{d.label}</span>
              <span className="text-[14px] leading-[1.6] text-[var(--color-ink)]">{d.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- Q&A Accordion ---------------- */

export function QAAccordion({ question, answer, open = false, onToggle }) {
  const id = React.useId();
  return (
    <div className="flex flex-col gap-2">
      <button type="button" aria-expanded={open} aria-controls={id} onClick={onToggle}
        className={"w-full px-1 py-[15px] text-left border-0 bg-transparent text-[16px] leading-[1] tracking-[-0.01em] text-[var(--color-ink)] font-semibold " + FOCUS}>{question}</button>
      {open && (
        <p id={id} className="m-0 max-w-[544px] text-[15px] leading-[1.65] text-[var(--color-body)]">{answer}</p>
      )}
    </div>
  );
}

/* ---------------- Photo Card ---------------- */

export function PhotoCard({ variant = "default", title, subtitle }) {
  const v = PHOTO_CARD_VARIANTS[variant] || PHOTO_CARD_VARIANTS.default;
  return (
    <div className="relative h-[170px] w-[320px] max-w-full overflow-hidden rounded-[14px]"
      style={{ background: "linear-gradient(135deg, " + v.gradient.join(", ") + ")" }}>
      <span aria-hidden="true" className="absolute left-[200px] top-[-50px] inline-block h-[150px] w-[150px] rounded-full opacity-80" style={{ background: v.orb }} />
      <span className="absolute left-4 top-[118px] flex flex-col gap-[2px]">
        <span className="text-[17px] font-semibold leading-[1] text-white">{title}</span>
        {subtitle && <span className="text-[12px] leading-[1] text-white opacity-60">{subtitle}</span>}
      </span>
    </div>
  );
}

/* ---------------- File Grid Cell ---------------- */

export function FileGridCell({ filename, meta, image }) {
  return (
    <div className="flex flex-col gap-2">
      {image
        ? <img src={image} alt={filename} className="h-[120px] w-[160px] rounded-[14px] border border-[var(--color-border)] object-cover" />
        : <span aria-hidden="true" className="inline-block h-[120px] w-[160px] rounded-[14px] border border-[var(--color-border)] bg-[var(--color-card)]" />}
      <span className="text-[13.5px] font-bold leading-[1] tracking-[-0.01em] text-[var(--color-ink)]">{filename}</span>
      {meta && <span className="text-[12px] leading-[1] text-[var(--color-muted)]">{meta}</span>}
    </div>
  );
}

/* ---------------- Logo Cell ---------------- */

export function LogoCell({ logo, alt }) {
  return (
    <div className="flex w-[160px] items-center justify-center rounded-[14px] border border-[var(--color-border)] bg-[var(--color-card)] px-6 py-10">
      <span className="flex w-[70%] max-h-[60px] items-center justify-center" role={alt ? "img" : undefined} aria-label={alt}>{logo}</span>
    </div>
  );
}

/* ---------------- Logo Card ---------------- */

export function LogoCard({ mark, alt, dark = false }) {
  return (
    <div className="flex w-[320px] max-w-full items-center justify-center rounded-[18px] border border-[var(--color-border)] px-32 py-11"
      style={{ background: dark ? "var(--color-logocard-dark)" : "var(--color-card)", color: dark ? "#f0ede8" : undefined }}>
      <span className="flex h-16 w-16 items-center justify-center" role={alt ? "img" : undefined} aria-label={alt}>{mark}</span>
    </div>
  );
}

/* ---------------- Carousel ---------------- */

export function Carousel({ images = [] }) {
  return (
    <div className="flex snap-x gap-[10px] overflow-x-auto pb-1">
      {images.map((src, i) => (
        <img key={i} src={src} alt="" className="h-[320px] w-[148px] shrink-0 snap-start rounded-[14px] border border-[var(--color-border)] object-cover" />
      ))}
    </div>
  );
}

/* ---------------- Photo Tile ---------------- */

export function PhotoTile({ name, category, image }) {
  return (
    <div className="flex flex-col gap-2">
      {image
        ? <img src={image} alt={name} className="h-[120px] w-[120px] rounded-[14px] border border-[var(--color-border)] object-cover" />
        : <span aria-hidden="true" className="inline-block h-[120px] w-[120px] rounded-[14px] border border-[var(--color-border)] bg-[var(--color-card)]" />}
      <span className="text-[12.5px] font-semibold leading-[1] tracking-[-0.01em] text-[var(--color-ink)]">{name}</span>
      {category && <span className="text-[11.5px] leading-[1] text-[var(--color-muted)]">{category}</span>}
    </div>
  );
}

/* ---------------- Gallery ---------------- */

export function Gallery({ title, count, images = [] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-1.5">
        <h3 className="m-0 text-[13px] font-bold leading-[1] text-[var(--color-ink)]">{title}</h3>
        {count !== undefined && <span className="text-[13px] leading-[1] text-[var(--color-muted)]">{count}</span>}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" className="aspect-square w-full rounded-[10px] border border-[var(--color-border)] object-cover" />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Filter Pill ---------------- */

export function FilterPill({ children, active = false, onToggle }) {
  return (
    <button type="button" aria-pressed={active} onClick={onToggle}
      className={"min-h-11 rounded-full border border-[var(--color-border)] px-[15px] py-[9px] text-[13px] font-bold leading-[1] " + (active ? "bg-[var(--color-ink)] text-[var(--color-paper)]" : "bg-[var(--color-card)] text-[var(--color-ink)]") + " " + FOCUS}>{children}</button>
  );
}

/* ---------------- Status Pill ---------------- */

export function StatusPill({ status = "active", children }) {
  const dot = STATUS_PILL_DOTS[status] || STATUS_PILL_DOTS.active;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-[11px] py-1">
      <span aria-hidden="true" className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: dot }} />
      <span className="text-[12.5px] font-semibold leading-[1] text-[var(--color-ink)]">{children || (status.charAt(0).toUpperCase() + status.slice(1))}</span>
    </span>
  );
}

/* ---------------- Status Dot ---------------- */

export function StatusDot({ status = "active", children }) {
  const dot = STATUS_PILL_DOTS[status] || STATUS_PILL_DOTS.active;
  return (
    <span className="inline-flex items-center gap-1.5">
      <span aria-hidden="true" className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: dot }} />
      <span className="text-[13px] font-medium leading-[1] text-[var(--color-muted)]">{children || (status.charAt(0).toUpperCase() + status.slice(1))}</span>
    </span>
  );
}

/* ---------------- Tag ---------------- */

export function Tag({ children }) {
  return (
    <span className="inline-flex rounded-full border border-[var(--color-border)] px-[10px] py-1 text-[var(--type-tag-size)] leading-[var(--type-tag-leading)] tracking-[var(--type-tag-tracking)] text-[var(--color-muted)] [font-weight:var(--type-tag-weight)] uppercase">{children}</span>
  );
}

/* ---------------- LIVE Badge ---------------- */

export function LIVEBadge() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-[var(--color-live)]" />
      <span className="text-[13px] font-bold leading-[1] tracking-[0.06em] text-[var(--color-live)] uppercase">Live</span>
    </span>
  );
}

/* ---------------- Reaction Button ---------------- */

export function ReactionButton({ label, caption, voted = false, onToggle }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <button type="button" aria-pressed={voted} aria-label={label} onClick={onToggle}
        className={"inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[var(--color-border)] bg-[var(--color-paper)] " + FOCUS}>
        <span aria-hidden="true" className="text-[var(--color-ink)]">+</span>
      </button>
      <span className="flex flex-col items-center gap-[1px]">
        <span className={"text-[15px] font-bold leading-[1] text-[var(--color-ink)] " + (voted ? "border-b-2 border-[var(--color-border)] pb-[1px]" : "")}>{label}</span>
        {caption && <span className="text-[13px] leading-[1] text-[var(--color-muted)]">{caption}</span>}
      </span>
    </div>
  );
}

/* ---------------- Text Link ---------------- */

export function TextLink({ href, children }) {
  return (
    <a href={href} className={"text-[15px] font-bold leading-[1] text-[var(--color-ink)] no-underline border-b-2 border-[var(--color-border)] pb-[1px] " + FOCUS}>{children}</a>
  );
}

/* ---------------- Back Link ---------------- */

export function BackLink({ href, children }) {
  return (
    <a href={href} className={"text-[var(--type-backLink-size)] leading-[var(--type-backLink-leading)] text-[var(--color-muted)] no-underline " + FOCUS}>{children || "\u2190 Back"}</a>
  );
}

/* ---------------- View All ---------------- */

export function ViewAll({ children, href, onClick }) {
  const cls = "block w-full rounded-[99px] border border-[var(--color-border)] px-[14px] py-[14px] text-center text-[14px] font-semibold leading-[1] tracking-[-0.01em] text-[var(--color-ink)] no-underline " + FOCUS;
  if (href) return <a href={href} className={cls}>{children || "View all"}</a>;
  return <button type="button" onClick={onClick} className={"bg-transparent " + cls}>{children || "View all"}</button>;
}

/* ---------------- Progress Bar ---------------- */

export function ProgressBar({ value, min = 0, max = 100 }) {
  const clamped = Math.min(max, Math.max(min, value));
  const pct = max === min ? 0 : Math.round(((clamped - min) / (max - min)) * 100);
  return (
    <div role="progressbar" aria-valuenow={clamped} aria-valuemin={min} aria-valuemax={max} aria-label={"Progress: " + pct + " percent"}
      className="relative h-[3px] w-[220px] max-w-full overflow-hidden rounded-[2px] bg-[var(--color-border)]">
      <span className="absolute left-0 top-0 block h-full rounded-[2px] bg-[var(--color-ink)]" style={{ width: pct + "%" }} />
    </div>
  );
}

/* ---------------- Menu Pill ---------------- */

export function MenuPill({ label = "Menu", onOpen }) {
  return (
    <button type="button" aria-expanded="false" onClick={onOpen}
      className={"min-h-11 rounded-full border border-[var(--color-border)] px-4 py-3 text-[13px] font-semibold leading-[1] tracking-[0.02em] text-[var(--color-ink)] shadow-[var(--shadow-menupill)] backdrop-blur-[12px] " + FOCUS}
      style={{ background: "color-mix(in srgb, var(--color-paper) 84%, transparent)" }}>{label}</button>
  );
}

/* ---------------- Lightbox ---------------- */

export function Lightbox({ image, alt, index, total, onPrev, onNext, onClose }) {
  return (
    <div role="dialog" aria-modal="true" aria-label={"Image " + index + " of " + total}
      className="relative flex h-[420px] w-[632px] max-w-full items-center justify-center" style={{ background: "var(--color-lightbox-bg)" }}>
      <button type="button" onClick={onClose} aria-label="Close lightbox"
        className={"absolute right-4 top-4 min-h-11 min-w-11 rounded-full border-0 bg-white/10 text-white " + FOCUS}>\u00d7</button>
      <img src={image} alt={alt || ""} className="h-[240px] w-[320px] max-w-[80%] rounded-[14px] border border-[var(--color-border)] object-cover" />
      <button type="button" onClick={onPrev} aria-label="Previous image"
        className={"absolute left-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white/10 text-[26px] text-white " + FOCUS}>\u2039</button>
      <button type="button" onClick={onNext} aria-label="Next image"
        className={"absolute right-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white/10 text-[26px] text-white " + FOCUS}>\u203a</button>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[13px] leading-[1] text-white opacity-70">{index} / {total}</span>
    </div>
  );
}

/* ---------------- Menu Bottom Sheet ---------------- */

export function MenuBottomSheet({ sections = [], onClose }) {
  return (
    <div role="dialog" aria-modal="true" aria-label="Menu"
      className="w-full max-w-[672px] rounded-t-[22px] bg-[var(--color-paper)] px-5 pb-6 pt-3 shadow-[var(--shadow-menusheet)]">
      <span aria-hidden="true" className="mx-auto mb-4 block h-1 w-[38px] rounded-[2px] bg-[var(--color-border)]" />
      {sections.map((s, si) => (
        <div key={si} className="flex flex-col gap-4">
          <p className="m-0 text-[12px] font-semibold uppercase leading-[1] tracking-[0.08em] text-[var(--color-muted)]">{s.label}</p>
          {s.rows.map((r, ri) => (
            <a key={ri} href={r.href || "#/home"} onClick={onClose}
              className={"flex w-full items-center justify-between gap-2 py-[14px] text-left no-underline " + FOCUS}>
              <span className="flex items-center gap-2">
                <span className="text-[var(--type-menuSheetRowTitle-size)] leading-[var(--type-menuSheetRowTitle-leading)] tracking-[var(--type-menuSheetRowTitle-tracking)] text-[var(--color-ink)] [font-weight:var(--type-menuSheetRowTitle-weight)]">{r.title}</span>
                {r.active && <span aria-hidden="true" className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--color-ink)]" />}
              </span>
              {r.note && <span className="text-[13px] leading-[1] text-[var(--color-muted)]">{r.note}</span>}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---------------- Media Card ---------------- */

export function MediaCard({ image, alt, statusBar, title, caption }) {
  return (
    <div className="relative h-[640px] w-[360px] max-w-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)]">
      <img src={image} alt={alt || ""} className="absolute inset-0 h-full w-full object-cover" />
      {statusBar && <p className="absolute left-1/2 top-4 m-0 -translate-x-1/2 whitespace-nowrap text-center text-[11px] font-semibold uppercase leading-[1] tracking-[0.18em] text-white">{statusBar}</p>}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-black/60 to-transparent p-4 pt-16">
        <p className="m-0 text-[22px] font-semibold leading-[1] text-white" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}>{title}</p>
        {caption && <p className="m-0 text-[14px] leading-[1] text-white opacity-70" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}>{caption}</p>}
      </div>
    </div>
  );
}

/* ---------------- Live Pulse Dot ---------------- */

export function LivePulseDot() {
  return (
    <span aria-hidden="true" className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center">
      <span className="absolute inset-0 rounded-full border-[1.5px] border-[var(--color-pulse)]" />
      <span className="absolute h-2 w-2 rounded-full bg-[var(--color-pulse)]" />
    </span>
  );
}

/* ---------------- Equalizer Bars ---------------- */

export function EqualizerBars({ label }) {
  return (
    <span role="img" aria-label={label || "Playing"} className="inline-flex items-end gap-[3px]">
      <span aria-hidden="true" className="inline-block h-[15px] w-[3px] bg-[var(--color-ink)]" />
      <span aria-hidden="true" className="inline-block h-[15px] w-[3px] bg-[var(--color-ink)]" />
      <span aria-hidden="true" className="inline-block h-[15px] w-[3px] bg-[var(--color-ink)]" />
      <span aria-hidden="true" className="inline-block h-[15px] w-[3px] bg-[var(--color-ink)]" />
    </span>
  );
}

/* ---------------- Stat ---------------- */

export function Stat({ label, value, unit }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[17px] font-medium leading-[1] text-[var(--color-body)]">{label}</span>
      <span className="flex items-end gap-1">
        <span className="text-[28px] font-bold leading-[1] tracking-[-0.025em] text-[var(--color-ink)]">{value}</span>
        {unit && <span className="text-[13px] leading-[1] text-[var(--color-muted)]">{unit}</span>}
      </span>
    </div>
  );
}

/* ---------------- Footer ---------------- */

export function Footer({ children }) {
  return (
    <footer className="pt-20">
      <p className="m-0 max-w-[544px] text-[var(--type-footer-size)] leading-[var(--type-footer-leading)] text-[var(--color-muted)] [font-weight:var(--type-footer-weight)]">{children || "\u00a9 2026 Brand name \u00b7 Footer copy goes here."}</p>
    </footer>
  );
}

/* ---------------- Component docs: Human / Agent / Vibe ---------------- */
/* Contracts use oeste.component.v1. Keep in sync with site/app.js and llms.txt. */

/* ---------------- Toggle Tabs ---------------- */

export function ToggleTabs({ tabs = [], activeTab, onTabChange }) {
  const ids = tabs.map((t) => t.id);
  return (
    <div role="tablist" aria-label="Tabs" className="flex gap-5">
      {tabs.map((t) => (
        <button key={t.id} type="button" role="tab" id={"tab-" + t.id} aria-selected={t.id === activeTab}
          aria-controls={"panel-" + t.id} tabIndex={t.id === activeTab ? 0 : -1}
          onClick={() => onTabChange && onTabChange(t.id)}
          onKeyDown={(e) => {
            if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
            e.preventDefault();
            const i = ids.indexOf(activeTab);
            const next = e.key === "ArrowRight" ? ids[(i + 1) % ids.length] : e.key === "ArrowLeft" ? ids[(i - 1 + ids.length) % ids.length] : e.key === "Home" ? ids[0] : ids[ids.length - 1];
            if (onTabChange) onTabChange(next);
            document.getElementById("tab-" + next)?.focus();
          }}
          className={"border-0 border-b-2 bg-transparent px-3.5 py-1.5 text-[13px] " + FOCUS + " " + (t.id === activeTab ? "border-[var(--color-ink)] font-bold text-[var(--color-ink)]" : "border-transparent font-normal text-[var(--color-muted)]")}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

/* ---------------- Next Footer ---------------- */

export function NextFooter({ title, description, meta, href }) {
  return (
    <nav aria-label="Next" className="mt-11 border-t border-[var(--color-border)] pt-1.5">
      <a href={href} className="flex items-baseline justify-between gap-4 px-1 py-[15px] no-underline">
        <span className="flex min-w-0 items-baseline gap-3.5">
          <span className="text-base font-semibold tracking-[-0.015em] text-[var(--color-ink)]">{title}</span>
          {description ? <span className="text-[15px] leading-[1.5] text-[var(--color-muted)]">{description}</span> : null}
        </span>
        {meta ? <span className="shrink-0 text-[13px] text-[var(--color-muted)]">{meta}</span> : null}
      </a>
    </nav>
  );
}

/* ---------------- Search ---------------- */

export function Search({ items = [], placeholder = "Search", emptyText = "No results.", onSelect }) {
  const [query, setQuery] = React.useState("");
  const [focus, setFocus] = React.useState(-1);
  const listId = React.useId();
  const q = query.trim().toLowerCase();
  const results = q ? items.filter((it) => (it.title + " " + (it.note || "")).toLowerCase().includes(q)) : items;
  const select = (it) => { if (onSelect) onSelect(it); else if (it && it.href) window.location.href = it.href; };
  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setFocus((f) => Math.min(f + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setFocus((f) => Math.max(f - 1, 0)); }
    else if (e.key === "Enter" && results[focus]) select(results[focus]);
    else if (e.key === "Escape") { setQuery(""); setFocus(-1); }
  };
  return (
    <div>
      <div className="flex items-center gap-2 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)] px-3">
        <input type="search" value={query} onChange={(e) => { setQuery(e.target.value); setFocus(-1); }} onKeyDown={onKeyDown}
          placeholder={placeholder} aria-label={placeholder} role="combobox" aria-controls={listId} aria-expanded="true" aria-autocomplete="list" aria-activedescendant={focus >= 0 ? listId + "-" + focus : undefined}
          className={"min-h-11 min-w-0 flex-1 border-0 bg-transparent text-[16px] leading-[1] text-[var(--color-ink)] " + FOCUS} />
        {query && <button type="button" onClick={() => { setQuery(""); setFocus(-1); }} aria-label="Clear search"
          className={"min-h-11 min-w-11 border-0 bg-transparent text-[20px] leading-[1] text-[var(--color-muted)] " + FOCUS}>\u00d7</button>}
      </div>
      <ul id={listId} role="listbox" className="m-0 list-none p-0">
        {results.length ? results.map((it, i) => (
          <li key={it.href} id={listId + "-" + i} role="option" aria-selected={focus === i}>
            <a href={it.href} onClick={(e) => { e.preventDefault(); select(it); }}
              className={"flex items-baseline gap-2 px-1 py-[15px] no-underline " + (focus === i ? "bg-[var(--color-surface)]" : "")}>
              <span className="text-[16px] font-semibold leading-[1] text-[var(--color-ink)]">{it.title}</span>
              {it.note && <span className="text-[15px] leading-[1.5] text-[var(--color-muted)]">{it.note}</span>}
            </a>
          </li>
        )) : <li className="px-1 py-[15px] text-[15px] leading-[1.5] text-[var(--color-muted)]">{emptyText}</li>}
      </ul>
    </div>
  );
}

/* ---------------- Date helpers (pickers) ---------------- */

const CAL_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
  return h12 + ":" + mi + " " + ap;
};
const shiftMonth = (v, delta) => {
  let y = v.y;
  let m = v.m + delta;
  if (m < 1) { m = 12; y -= 1; }
  if (m > 12) { m = 1; y += 1; }
  return { y, m };
};

/* ---------------- Calendar ---------------- */

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
    let dayClass = "border border-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface)]";
    if (isSelected) dayClass = "border-2 border-[var(--color-ink)] bg-transparent font-bold text-[var(--color-ink)]";
    else if (isToday) dayClass = "border border-[var(--color-muted)] font-semibold text-[var(--color-ink)]";
    return (
      <button type="button" key={iso} disabled={isDisabled} aria-disabled={isDisabled} aria-current={isToday ? "date" : undefined} aria-label={`${CAL_MONTHS[view.m - 1]} ${d}, ${view.y}${isSelected ? ", selected" : ""}`} onClick={() => onChange && onChange(iso)} className={"flex h-11 w-full items-center justify-center rounded-[8px] text-[13px] " + FOCUS + " " + dayClass + " disabled:opacity-40"}>{d}</button>
    );
  };
  return (
    <div className="w-full max-w-[340px]">
      <div className="flex items-center justify-between">
        <button type="button" aria-label="Previous month" onClick={() => setView(shiftMonth(view, -1))} className={"min-h-11 min-w-11 rounded border-0 bg-transparent text-[20px] leading-[1] text-[var(--color-ink)] " + FOCUS}>‹</button>
        <div aria-live="polite" className="text-[13px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink)]">{CAL_MONTHS[view.m - 1]} {view.y}</div>
        <button type="button" aria-label="Next month" onClick={() => setView(shiftMonth(view, 1))} className={"min-h-11 min-w-11 rounded border-0 bg-transparent text-[20px] leading-[1] text-[var(--color-ink)] " + FOCUS}>›</button>
      </div>
      <table className="mt-2 w-full border-collapse">
        <thead>
          <tr className="border-b border-[var(--color-line)]">{CAL_WEEKDAYS.map((wd) => (<th key={wd} scope="col" className="py-1.5 text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">{wd}</th>))}</tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi} className="border-b border-[var(--color-line)]">{week.map((d, di) => (<td key={di} className="border border-[var(--color-line)] p-0 text-center">{d === null ? null : renderDay(d)}</td>))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------------- Date Picker ---------------- */

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
      <label htmlFor={inputId} className="block text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink)]">{label}</label>
      <div className="mt-1 flex flex-col gap-2">
        <input id={inputId} type="text" readOnly value={display} placeholder={placeholder} aria-invalid={invalid} className={"min-h-11 w-full max-w-[320px] rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-[16px] leading-[1] text-[var(--color-ink)] " + FOCUS} />
        <button ref={triggerRef} type="button" aria-label={open ? "Close calendar" : "Open calendar"} aria-expanded={open} aria-controls={popId} onClick={() => setOpen(!open)} className={"min-h-11 w-full max-w-[320px] rounded-[12px] border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2 text-[13px] text-[var(--color-ink)] " + FOCUS}>Calendar</button>
      </div>
      {open && (
        <div id={popId} className="absolute z-10 mt-1 max-w-[calc(100vw-32px)] rounded-[14px] border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          <Calendar value={display || null} onChange={pick} min={min} max={max} />
          <div className="mt-3 flex gap-2">
            {clearable && display && (<button type="button" onClick={() => { if (onChange) onChange(null); close(); }} className={"min-h-11 flex-1 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2 text-[13px] text-[var(--color-ink)] " + FOCUS}>Clear</button>)}
            <button type="button" disabled={todayOutOfRange} aria-disabled={todayOutOfRange} onClick={() => pick(today)} className={"min-h-11 flex-1 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2 text-[13px] text-[var(--color-ink)] " + FOCUS + " disabled:opacity-40"}>Today</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Time Picker ---------------- */

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
    options.push((hh < 10 ? "0" + hh : String(hh)) + ":" + (mm < 10 ? "0" + mm : String(mm)));
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
      <label htmlFor={triggerId} className="block text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink)]">{label}</label>
      <button ref={triggerRef} id={triggerId} type="button" aria-haspopup="listbox" aria-expanded={open} aria-controls={listId} onClick={() => setOpen(!open)} className={"mt-1 min-h-11 w-full max-w-[320px] rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-left text-[16px] leading-[1] text-[var(--color-ink)] " + FOCUS}>{display}</button>
      {open && (
        <ul id={listId} role="listbox" className="absolute z-10 mt-1 max-h-60 w-full max-w-[320px] overflow-auto rounded-[14px] border border-[var(--color-border)] bg-[var(--color-card)] p-1.5">
          {options.map((t) => {
            const isSelected = t === valid;
            return (
              <li key={t} role="option" aria-selected={isSelected} className={isSelected ? "rounded-[10px] border-[1.5px] border-[var(--color-ink)]" : "border-[1.5px] border-transparent"}>
                <button type="button" onClick={() => pick(t)} className={"w-full rounded px-3 py-2.5 text-left text-[13px] " + (isSelected ? "font-bold text-[var(--color-ink)]" : "text-[var(--color-ink)] hover:bg-[var(--color-surface)]") + " " + FOCUS}>{formatTime12(t)}</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ---------------- Date Range Picker ---------------- */

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
      <legend className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink)]">{label}</legend>
      <div className="mt-1 flex flex-col items-stretch gap-4">
        <DatePicker value={validStart} onChange={handleStart} label="Start" min={min} max={max} clearable={false} />
        <DatePicker value={validEnd} onChange={handleEnd} label="End" min={min} max={max} clearable={false} invalid={hasError} />
      </div>
      {clearable && (validStart !== null || validEnd !== null) && (<button type="button" onClick={handleClear} className={"mt-4 min-h-11 w-full max-w-[320px] rounded-[12px] border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2 text-[13px] text-[var(--color-ink)] " + FOCUS}>Clear</button>)}
      {hasError && (<p role="alert" className="mt-3 text-[13px] text-[#e5484d]">{message}</p>)}
    </fieldset>
  );
}

/* ---------------- Chart ---------------- */

const CHART_PALETTE = ["fill-[#e5484d]", "fill-[#1a73e8]", "fill-[#34d399]", "fill-[#fbbf24]", "fill-[var(--color-ink)]"];
const CHART_PALETTE_BG = ["bg-[#e5484d]", "bg-[#1a73e8]", "bg-[#34d399]", "bg-[#fbbf24]", "bg-[var(--color-ink)]"];
const CHART_INK = "fill-[var(--color-ink)]";
const CHART_GRID = "stroke-[var(--color-line)]";
const CHART_MUTED = "fill-[var(--color-muted)]";

export function Chart({ type = "bar", data = [], title, height = 240, showTable = true }) {
  const rows = (Array.isArray(data) ? data : []).map((d) => ({ label: String(d && d.label != null ? d.label : ""), value: Math.max(0, Number(d && d.value) || 0) }));
  const n = rows.length;
  const max = rows.reduce((m, r) => Math.max(m, r.value), 0);
  const total = rows.reduce((s, r) => s + r.value, 0);
  const min = n > 0 ? rows.reduce((m, r) => Math.min(m, r.value), Infinity) : 0;
  const typeLabel = type === "line" ? "Line" : type === "area" ? "Area" : type === "pie" ? "Pie" : type === "donut" ? "Donut" : "Bar";
  const isPie = type === "pie" || type === "donut";
  if (n === 0 || max <= 0 || (isPie && total <= 0)) {
    return (<p className="text-[14px] text-[var(--color-muted)]">No data.</p>);
  }
  const H = Math.max(height || 240, 120);
  const pct = (v) => ((v / total) * 100).toFixed(1) + "%";
  const shortLabel = (s) => (s.length > 12 ? s.slice(0, 11) + "…" : s);
  const titleSuffix = title ? ": " + title : "";
  const summary = isPie ? `${n} slices, total ${total}.` : `${n} categories, values from ${min} to ${max}.`;
  const caption = (title ? `${title}: ${typeLabel} chart. ` : `${typeLabel} chart. `) + "The table lists every value shown in the chart.";
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
    const grid = ticks.map((t) => (<g key={t} aria-hidden="true"><line x1={LEFT} x2={LEFT + plotW} y1={y(t)} y2={y(t)} className={CHART_GRID} strokeWidth="1" /><text x={LEFT - 6} y={y(t) + 4} textAnchor="end" className={"text-[11px] " + CHART_MUTED}>{String(t)}</text></g>));
    const cats = rows.map((r, i) => (<text key={i} x={cx(i)} y={baseline + 18} textAnchor="middle" className={"text-[11px] " + CHART_INK}>{shortLabel(r.label)}</text>));
    return { LEFT, TOP, plotW, plotH, y, baseline, slotW, cx, grid, cats };
  };
  const renderBars = () => {
    const a = renderAxes();
    const barW = Math.min(a.slotW * 0.5, 40);
    return (<g aria-hidden="true">{a.grid}<line x1={a.LEFT} x2={a.LEFT + a.plotW} y1={a.baseline} y2={a.baseline} className={CHART_GRID} strokeWidth="1" />{rows.map((r, i) => { const x = a.cx(i) - barW / 2; const h = a.baseline - a.y(r.value); return (<g key={i}><rect x={x} y={a.y(r.value)} width={barW} height={Math.max(h, 0)} className={CHART_INK} /><text x={a.cx(i)} y={a.y(r.value) - 5} textAnchor="middle" className={"text-[11px] " + CHART_INK}>{String(r.value)}</text></g>); })}{a.cats}</g>);
  };
  const renderLineArea = () => {
    const a = renderAxes();
    const pts = rows.map((r, i) => [a.cx(i), a.y(r.value)]);
    const linePts = pts.map((p) => p.join(",")).join(" ");
    const areaD = `M ${pts[0].join(" ")} ` + pts.slice(1).map((p) => `L ${p.join(" ")}`).join(" ") + ` L ${pts[pts.length - 1][0]},${a.baseline} L ${pts[0][0]},${a.baseline} Z`;
    return (<g aria-hidden="true">{a.grid}<line x1={a.LEFT} x2={a.LEFT + a.plotW} y1={a.baseline} y2={a.baseline} className={CHART_GRID} strokeWidth="1" />{type === "area" && <path d={areaD} className={CHART_INK} fillOpacity="0.15" stroke="none" />}<polyline points={linePts} fill="none" className={"stroke-[var(--color-ink)]"} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />{pts.map((p, i) => (<g key={i}><circle cx={p[0]} cy={p[1]} r="3" className={CHART_INK} stroke="#ffffff" strokeWidth="1" /><text x={p[0]} y={p[1] - 9} textAnchor="middle" className={"text-[11px] " + CHART_INK}>{String(rows[i].value)}</text></g>))}{a.cats}</g>);
  };
  const renderPie = () => {
    const cx = 320, cy = H / 2;
    const R = Math.min(320, H / 2) - 20;
    const inner = type === "donut" ? R * 0.55 : 0;
    let acc = 0;
    const polar = (angleDeg, radius) => { const a = ((angleDeg - 90) * Math.PI) / 180; return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)]; };
    const slices = rows.map((r, i) => { const start = (acc / total) * 360; acc += r.value; const end = (acc / total) * 360; const large = end - start > 180 ? 1 : 0; const [x1, y1] = polar(start, R); const [x2, y2] = polar(end, R); let d; if (type === "donut") { const [ix2, iy2] = polar(end, inner); const [ix1, iy1] = polar(start, inner); d = `M ${x1},${y1} A ${R},${R} 0 ${large} 1 ${x2},${y2} L ${ix2},${iy2} A ${inner},${inner} 0 ${large} 0 ${ix1},${iy1} Z`; } else { d = `M ${cx},${cy} L ${x1},${y1} A ${R},${R} 0 ${large} 1 ${x2},${y2} Z`; } const mid = (start + end) / 2; const labelR = type === "donut" ? (R + inner) / 2 : R * 0.68; const [lx, ly] = polar(mid, labelR); return { r, i, d, lx, ly }; });
    return (<g aria-hidden="true">{slices.map((s) => (<g key={s.i}><path d={s.d} className={CHART_PALETTE[s.i % CHART_PALETTE.length]} stroke="#ffffff" strokeWidth="1" /><text x={s.lx} y={s.ly} textAnchor="middle" className={"text-[11px] " + CHART_INK}><tspan x={s.lx} dy="-1">{shortLabel(rows[s.i].label)}</tspan><tspan x={s.lx} dy="13">{pct(rows[s.i].value)}</tspan></text></g>))}{type === "donut" && (<g><text x={cx} y={cy - 2} textAnchor="middle" className={"text-[20px] font-bold " + CHART_INK}>{String(total)}</text><text x={cx} y={cy + 16} textAnchor="middle" className={"text-[11px] " + CHART_MUTED}>total</text></g>)}</g>);
  };
  return (
    <section>
      <svg role="img" aria-label={`${typeLabel} chart${titleSuffix}. ${summary}`} viewBox={`0 0 640 ${H}`} width="100%" style={{ display: "block", overflow: "visible" }}>
        {type === "bar" && renderBars()}
        {(type === "line" || type === "area") && renderLineArea()}
        {isPie && renderPie()}
      </svg>
      {isPie && (
        <ul className="mt-4 list-none p-0">
          {rows.map((r, i) => (
            <li key={i} className="flex items-center gap-2 border-b border-[var(--color-line)] py-1.5">
              <span aria-hidden="true" className={"inline-block h-2.5 w-2.5 shrink-0 rounded-full " + CHART_PALETTE_BG[i % CHART_PALETTE_BG.length]} />
              <span className="text-[13px] text-[var(--color-ink)]">{r.label}</span>
              <span className="ml-auto text-[13px] font-semibold text-[var(--color-ink)]">{String(r.value)} ({pct(r.value)})</span>
            </li>
          ))}
        </ul>
      )}
      {showTable && (
        <table className="mt-3 w-full border-collapse">
          <caption className="text-left text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--color-muted)]">{caption}</caption>
          <thead>
            <tr>
              <th scope="col" className="border-b border-[var(--color-line)] px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">Label</th>
              <th scope="col" className="border-b border-[var(--color-line)] px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">Value</th>
              {isPie && <th scope="col" className="border-b border-[var(--color-line)] px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">Percent</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <th scope="row" className="border-b border-[var(--color-line)] px-3 py-2.5 text-left text-[13px] font-semibold text-[var(--color-ink)]">{r.label}</th>
                <td className="border-b border-[var(--color-line)] px-3 py-2.5 text-[13px] text-[var(--color-ink)]">{String(r.value)}</td>
                {isPie && <td className="border-b border-[var(--color-line)] px-3 py-2.5 text-[13px] text-[var(--color-ink)]">{pct(r.value)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

/* ---------------- DataGrid ---------------- */

/* CSV cell escaping: quote a cell when it holds a comma, a quote, or a newline. */
const csvEscapeValue = (v) => { const s = v == null ? "" : String(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };

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
  const cellText = (v) => (v == null ? "" : String(v));
  const colWidth = (col) => { const n = parseInt(col.width || "", 10); return Number.isFinite(n) ? n : 160; };
  const compareValues = (a, b) => {
    if (a == null && b == null) return 0;
    if (a == null) return 1;
    if (b == null) return -1;
    if (typeof a === "number" && typeof b === "number") return a - b;
    return String(a).localeCompare(String(b), undefined, { sensitivity: "base" });
  };
  const sortList = (list) => {
    if (!sortKey) return list;
    const dir = sortDir === "desc" ? -1 : 1;
    return [...list].sort((x, y) => dir * compareValues(x[sortKey], y[sortKey]));
  };
  const filtered = rows.filter((row) => columns.every((col) => {
    const f = (filters[col.key] || "").trim().toLowerCase();
    if (!f) return true;
    return cellText(row[col.key]).toLowerCase().includes(f);
  }));
  const groupKeyOf = (row) => {
    const v = row[groupBy];
    return v == null ? "Unassigned" : String(v);
  };
  const grouped = (() => {
    if (!groupBy) return null;
    const order = [];
    const map = {};
    filtered.forEach((row) => {
      const g = groupKeyOf(row);
      if (!map[g]) { map[g] = []; order.push(g); }
      map[g].push(row);
    });
    return order.map((g) => ({ key: g, rows: sortList(map[g]) }));
  })();
  const flat = grouped ? grouped.flatMap((g) => g.rows) : sortList(filtered);
  const totalPages = Math.max(1, Math.ceil(flat.length / perPage));
  const safePage = Math.min(page, totalPages);
  const pageRows = flat.slice((safePage - 1) * perPage, safePage * perPage);
  const pageGroups = (() => {
    if (!groupBy) return null;
    const order = [];
    const map = {};
    pageRows.forEach((row) => {
      const g = groupKeyOf(row);
      if (!map[g]) { map[g] = []; order.push(g); }
      map[g].push(row);
    });
    return order.map((g) => {
      const full = grouped.find((x) => x.key === g) || { rows: [] };
      return { key: g, rows: map[g], total: full.rows.length };
    });
  })();
  const visibleColumns = [...pinned.map((k) => columns.find((c) => c.key === k)).filter(Boolean), ...columns.filter((c) => !pinned.includes(c.key))];
  const pinnedOffsets = (() => {
    const offsets = {};
    let left = 0;
    pinned.forEach((k) => {
      offsets[k] = left;
      const col = columns.find((c) => c.key === k);
      left += col ? colWidth(col) : 160;
    });
    return offsets;
  })();
  const isPinned = (key) => pinned.includes(key);
  const onSort = (key) => {
    if (sortKey !== key) { setSortKey(key); setSortDir("asc"); }
    else if (sortDir === "asc") { setSortDir("desc"); }
    else { setSortKey(null); setSortDir(null); }
    setPage(1);
  };
  const onFilter = (key, value) => { setFilters({ ...filters, [key]: value }); setPage(1); };
  const onPageSize = (n) => { setPerPage(n); setPage(1); };
  const toggleRow = (key) => { setSelected(selected.includes(key) ? selected.filter((k) => k !== key) : [...selected, key]); };
  const allKeys = flat.map((row) => row[rowKey]);
  const allSelected = allKeys.length > 0 && allKeys.every((k) => selected.includes(k));
  const someSelected = allKeys.some((k) => selected.includes(k));
  const toggleAll = () => { setSelected(allSelected ? [] : allKeys); };
  const togglePin = (key) => {
    if (isPinned(key)) { setPinned(pinned.filter((k) => k !== key)); }
    else if (pinned.length < columns.length - 1) { setPinned([...pinned, key]); }
  };
  const toggleGroup = (key) => { setCollapsed(collapsed.includes(key) ? collapsed.filter((k) => k !== key) : [...collapsed, key]); };
  const exportCsv = () => {
    const header = visibleColumns.map((c) => csvEscapeValue(c.label)).join(",");
    const lines = flat.map((row) => visibleColumns.map((c) => csvEscapeValue(row[c.key])).join(","));
    const csv = [header, ...lines].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data-grid.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
  const totalCols = visibleColumns.length + (selectable ? 1 : 0);
  const hasFilter = Object.keys(filters).some((k) => filters[k]);
  const alignCls = (col) => (col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left");
  const cellBorder = (isFirst, isLast, isSelected) => {
    if (!isSelected) return "border-b border-[var(--color-line)]";
    return "border-y-2 border-[var(--color-ink)]" + (isFirst ? " border-l-2" : "") + (isLast ? " border-r-2" : "");
  };
  const renderRow = (row) => {
    const key = row[rowKey];
    const isSelected = selected.includes(key);
    return (
      <tr key={key} aria-selected={selectable ? isSelected : undefined}>
        {selectable && (
          <td className={cellBorder(true, visibleColumns.length === 0, isSelected) + " px-3 py-2.5"}>
            <input type="checkbox" checked={isSelected} onChange={() => toggleRow(key)} aria-label={`Select row ${key}`} />
          </td>
        )}
        {visibleColumns.map((col, i) => {
          const isFirst = !selectable && i === 0;
          const isLast = i === visibleColumns.length - 1;
          const pinStyle = isPinned(col.key) ? { position: "sticky", left: pinnedOffsets[col.key], zIndex: 1 } : {};
          const style = { width: col.width || "160px", minWidth: col.width || "160px", ...pinStyle };
          const cls = cellBorder(isFirst, isLast, isSelected) + " px-3 py-2.5 text-[14px] text-[var(--color-ink)] " + alignCls(col) + (isPinned(col.key) ? " bg-[var(--color-card)]" : "");
          if (i === 0) {
            return (<th key={col.key} scope="row" style={style} className={cls + " font-semibold"}>{cellText(row[col.key])}</th>);
          }
          return (<td key={col.key} style={style} className={cls}>{cellText(row[col.key])}</td>);
        })}
      </tr>
    );
  };
  return (
    <section>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <button type="button" onClick={exportCsv} className={"min-h-11 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-[13px] font-semibold text-[var(--color-ink)] " + FOCUS}>Export CSV</button>
        {selectable && <p aria-live="polite" className="m-0 text-[13px] text-[var(--color-muted)]">{selected.length} selected</p>}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <caption className="text-left text-[13px] text-[var(--color-muted)]">Data grid. {flat.length} rows, {columns.length} columns. Sort with the header buttons, filter with the filter row, page with the pagination controls.</caption>
          <thead>
            <tr>
              {selectable && (
                <th scope="col" className="border-b border-[var(--color-line)] bg-[var(--color-card)] px-3 py-2.5">
                  <input type="checkbox" checked={allSelected} ref={(el) => { if (el) el.indeterminate = someSelected && !allSelected; }} onChange={toggleAll} aria-label="Select all rows" />
                </th>
              )}
              {visibleColumns.map((col) => {
                const sortable = col.sortable !== false;
                const sorted = sortKey === col.key;
                const pinnedCol = isPinned(col.key);
                const canPin = pinnedCol || pinned.length < columns.length - 1;
                return (
                  <th key={col.key} scope="col" aria-sort={sorted ? (sortDir === "asc" ? "ascending" : "descending") : "none"} style={{ width: col.width || "160px", minWidth: col.width || "160px", ...(pinnedCol ? { position: "sticky", left: pinnedOffsets[col.key], zIndex: 2 } : {}) }} className="border-b border-[var(--color-line)] bg-[var(--color-card)] px-3 py-2.5 text-left">
                    <span className="flex items-center gap-2">
                      {sortable ? (<button type="button" onClick={() => onSort(col.key)} aria-label={`Sort by ${col.label}`} className={"text-left text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink)] " + FOCUS + (sorted ? " underline decoration-2 underline-offset-4" : "")}>{col.label}{sorted ? (sortDir === "asc" ? " ↑" : " ↓") : ""}</button>) : (<span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink)]">{col.label}</span>)}
                      <button type="button" onClick={() => togglePin(col.key)} disabled={!canPin} aria-pressed={pinnedCol} aria-label={`${pinnedCol ? "Unpin" : "Pin"} ${col.label} column`} title={canPin ? "" : "At least one column must stay unpinned"} className={"text-[11px] " + FOCUS + " " + (pinnedCol ? "font-bold text-[var(--color-ink)] border-b-2 border-[var(--color-ink)]" : "text-[var(--color-muted)]") + " disabled:opacity-40"}>Pin</button>
                    </span>
                  </th>
                );
              })}
            </tr>
            <tr>
              {selectable && <td className="border-b border-[var(--color-line)] bg-[var(--color-card)] px-3 py-2" />}
              {visibleColumns.map((col) => (
                <td key={col.key} style={isPinned(col.key) ? { position: "sticky", left: pinnedOffsets[col.key], zIndex: 2 } : {}} className="border-b border-[var(--color-line)] bg-[var(--color-card)] px-3 py-2">
                  <input type="text" value={filters[col.key] || ""} onChange={(e) => onFilter(col.key, e.target.value)} placeholder={`Filter ${col.label}`} aria-label={`Filter ${col.label}`} className={"w-full rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1.5 text-[13px] text-[var(--color-ink)] " + FOCUS} />
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageGroups ? pageGroups.map((group) => {
              const isCollapsed = collapsed.includes(group.key);
              return (
                <React.Fragment key={group.key}>
                  <tr>
                    <td colSpan={totalCols} className="border-b border-[var(--color-line)] px-3 py-2">
                      <button type="button" onClick={() => toggleGroup(group.key)} aria-expanded={!isCollapsed} className={"flex items-center gap-2 text-left text-[13px] font-bold text-[var(--color-ink)] " + FOCUS}>
                        <span aria-hidden="true">{isCollapsed ? "▸" : "▾"}</span>{group.key} ({group.total})
                      </button>
                    </td>
                  </tr>
                  {!isCollapsed && group.rows.map((row) => renderRow(row))}
                </React.Fragment>
              );
            }) : pageRows.map((row) => renderRow(row))}
            {pageRows.length === 0 && (
              <tr>
                <td colSpan={totalCols} className={"px-3 py-6 text-center text-[14px] " + (hasFilter ? "text-[var(--color-live)]" : "text-[var(--color-muted)]")}>{hasFilter ? "No rows match the current filters." : "No rows."}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setPage(Math.max(1, safePage - 1))} disabled={safePage <= 1} className={"min-h-11 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-[13px] font-semibold text-[var(--color-ink)] " + FOCUS + " disabled:opacity-40"}>Previous</button>
        <span className="text-[13px] text-[var(--color-muted)]">Page {safePage} of {totalPages}</span>
        <button type="button" onClick={() => setPage(Math.min(totalPages, safePage + 1))} disabled={safePage >= totalPages} className={"min-h-11 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-[13px] font-semibold text-[var(--color-ink)] " + FOCUS + " disabled:opacity-40"}>Next</button>
        <label className="text-[13px] text-[var(--color-muted)]">Rows per page
          <select value={perPage} onChange={(e) => onPageSize(Number(e.target.value))} aria-label="Rows per page" className={"ml-2 min-h-11 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-card)] px-2 py-1.5 text-[13px] text-[var(--color-ink)] " + FOCUS}>
            {[10, 25, 50, 100].map((n) => (<option key={n} value={n}>{n}</option>))}
          </select>
        </label>
      </div>
    </section>
  );
}

export const COMPONENT_DOCS = Object.freeze([
  {
    id: "header", name: "Header", tagline: "Wordmark left, mood control right. The top of every page.",
    anatomy: ["Wordmark (mark + name)", "Mood Button"],
    props: [{"name": "wordmark", "type": "string", "required": true, "def": "—", "desc": "Brand name text. Generic placeholder: “Brand”."}, {"name": "mood", "type": "\"paper\" | \"ink\" | \"rose\" | \"sage\" | \"dune\"", "required": true, "def": "—", "desc": "Current mood, passed to Mood Button."}, {"name": "onMoodChange", "type": "(mood) => void", "required": true, "def": "—", "desc": "Fires when the mood cycles."}],
    keyboard: [{"key": "Tab", "action": "Move focus between the wordmark link and the Mood Button."}, {"key": "Enter / Space", "action": "Follow the wordmark link, or cycle the mood."}],
    invariants: ["Wordmark links home.", "Mood Button announces the current mood.", "Header holds nothing else: navigation lives in the Menu Bottom Sheet."],
    contract: {"props": {"wordmark": "string", "mood": ["paper", "ink", "rose", "sage", "dune"]}, "a11y": {"wordmark": "link to home", "mood": "button with aria-label naming the current mood"}},
    prompt: "Build a Huntington Header: wordmark (30px mark + 17/800 name) left, Mood Button right, 40px top padding, paper background. Wordmark links home. Nothing else in the header.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/header.json",
    code: `import { Header } from "@/components/ui/header";\n\nexport function Top({ mood, onMoodChange }) {\n  return <Header wordmark="Brand" mood={mood} onMoodChange={onMoodChange} />;\n}`,
  },
  {
    id: "mood-button", name: "Mood Button", tagline: "One dot. Five moods. Tap to cycle.",
    anatomy: ["Dot (paper fill, 1.5px muted border)", "Button (borderless, 6px padding)"],
    props: [{"name": "mood", "type": "\"paper\" | \"ink\" | \"rose\" | \"sage\" | \"dune\"", "required": true, "def": "—", "desc": "Current mood. The dot fills with the paper color."}, {"name": "onCycle", "type": "() => void", "required": true, "def": "—", "desc": "Fires on activation; the parent advances the mood."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the button."}, {"key": "Enter / Space", "action": "Cycle to the next mood."}],
    invariants: ["Dot is 18px, paper fill, 1.5px muted border.", "Cycles in order: Paper, Ink, Rose, Sage, Dune. Paper is the default mood.", "The choice persists (docs convention: localStorage).", "Motion (audit): 1.1s scale pulse on change. Reduced motion: no animation."],
    contract: {"props": {"mood": ["paper", "ink", "rose", "sage", "dune"]}, "a11y": {"role": "button", "label": "names the current mood + the cycle action"}},
    prompt: "Build a Huntington Mood Button: borderless button, 18px dot with paper fill and a 1.5px muted border, 6px padding. Cycles Paper, Ink, Rose, Sage, Dune. Audit motion: 1.1s scale pulse on change.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/mood-button.json",
    code: `import { MoodButton } from "@/components/ui/mood-button";\n\nexport function MoodControl({ mood, onCycle }) {\n  return <MoodButton mood={mood} onCycle={onCycle} />;\n}`,
  },
  {
    id: "live-hero", name: "Live Hero", tagline: "Headline + sub. The live moment, up top.",
    anatomy: ["Headline (H1)", "Sub (muted)"],
    props: [{"name": "title", "type": "string", "required": true, "def": "—", "desc": "Headline. The page H1."}, {"name": "sub", "type": "string", "required": true, "def": "—", "desc": "Supporting line, muted."}],
    keyboard: [{"key": "—", "action": "Live Hero is not interactive. No keyboard behavior."}],
    invariants: ["Headline is the page H1 (31/700/-0.03/1.22).", "Sub is muted 16/1.65 and never the only place for key information.", "Gap between headline and sub is 12px."],
    contract: {"props": {"title": "string", "sub": "string"}, "a11y": {"heading": "page H1", "sub": "muted supporting text"}},
    prompt: "Build a Huntington Live Hero: H1 31/700/-0.03/1.22 plus a muted 16/1.65 sub, 12px gap, 496px text width. The headline is the page H1.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/live-hero.json",
    code: `import { LiveHero } from "@/components/ui/live-hero";\n\nexport function Hero() {\n  return <LiveHero title="Live hero headline goes here" sub="Hero sub copy goes here." />;\n}`,
  },
  {
    id: "lede", name: "Lede", tagline: "The standfirst that sets the page. Big, quiet, one thought.",
    anatomy: ["Text (lede type)"],
    props: [{"name": "children", "type": "ReactNode", "required": true, "def": "—", "desc": "Lede copy."}],
    keyboard: [{"key": "—", "action": "Lede is not interactive. No keyboard behavior."}],
    invariants: ["Lede type: 26/500/1.28/-0.025 ink; 34px at 700px and up (audit).", "Max width 572px in the Figma build; lede reads as one thought, not a paragraph."],
    contract: {"props": {"children": "ReactNode"}, "a11y": {"text": "plain paragraph, never a heading unless it heads the page"}},
    prompt: "Build a Huntington Lede: 26/500/1.28/-0.025 ink, 34px at >=700px, max-width 572px. One thought, not a paragraph.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/lede.json",
    code: `import { Lede } from "@/components/ui/lede";\n\nexport function Intro() {\n  return <Lede>Lede copy goes here.</Lede>;\n}`,
  },
  {
    id: "standfirst", name: "Standfirst", tagline: "Body copy that opens a page. One paragraph, room to breathe.",
    anatomy: ["Text (body type, body color)"],
    props: [{"name": "children", "type": "ReactNode", "required": true, "def": "—", "desc": "Standfirst copy."}],
    keyboard: [{"key": "—", "action": "Standfirst is not interactive. No keyboard behavior."}],
    invariants: ["Body type: 16/1.65 in the body color.", "Max width 544px in the Figma build."],
    contract: {"props": {"children": "ReactNode"}, "a11y": {"text": "plain paragraph"}},
    prompt: "Build a Huntington Standfirst: 16/1.65 in the body color, max-width 544px.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/standfirst.json",
    code: `import { Standfirst } from "@/components/ui/standfirst";\n\nexport function Intro() {\n  return <Standfirst>Standfirst copy goes here.</Standfirst>;\n}`,
  },
  {
    id: "page-title", name: "Page Title", tagline: "A page's name + its meta. Smaller than a hero, firmer than a heading.",
    anatomy: ["Title (page-title type)", "Meta (muted)"],
    props: [{"name": "title", "type": "string", "required": true, "def": "—", "desc": "Page title."}, {"name": "meta", "type": "string", "required": false, "def": "—", "desc": "Meta line, muted."}],
    keyboard: [{"key": "—", "action": "Page Title is not interactive. No keyboard behavior."}],
    invariants: ["Title: 26/600/1.28/-0.025 ink. Meta: 13 muted.", "Gap between title and meta is 8px."],
    contract: {"props": {"title": "string", "meta": "string?"}, "a11y": {"title": "page heading", "meta": "muted supporting text"}},
    prompt: "Build a Huntington Page Title: 26/600/1.28/-0.025 ink plus 13 muted meta, 8px gap.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/page-title.json",
    code: `import { PageTitle } from "@/components/ui/page-title";\n\nexport function PageHead() {\n  return <PageTitle title="Page title" meta="Meta" />;\n}`,
  },
  {
    id: "section-title", name: "Section Title", tagline: "A section's name, an optional note, and a hairline underneath.",
    anatomy: ["Title", "Note (optional, muted)", "Hairline bottom border"],
    props: [{"name": "title", "type": "string", "required": true, "def": "—", "desc": "Section title."}, {"name": "note", "type": "string", "required": false, "def": "—", "desc": "Right-side note, 13/500 muted."}],
    keyboard: [{"key": "—", "action": "Section Title is not interactive. No keyboard behavior."}],
    invariants: ["Title: 17/700/-0.01 ink. Note: 13/500 muted.", "Padding-bottom 14px, 1px hairline bottom border.", "Title and note spread to the full width (space-between)."],
    contract: {"props": {"title": "string", "note": "string?"}, "a11y": {"title": "section heading", "note": "muted supporting text"}},
    prompt: "Build a Huntington Section Title: 17/700/-0.01 title + optional 13/500 muted note, space-between, 14px bottom padding, 1px hairline bottom border.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/section-title.json",
    code: `import { SectionTitle } from "@/components/ui/section-title";\n\nexport function Section() {\n  return <SectionTitle title="Section title" note="Note" />;\n}`,
  },
  {
    id: "list-row", name: "List Row", tagline: "A full-width row: title, description, and an optional meta. Inline (two columns without meta, three with it) or stacked (title + meta on top, description below). The index's workhorse.",
    anatomy: ["Title (one line, never wraps)", "Description (muted)", "Meta (right, muted — omit for the 2-column form)", "Stacked form: title + meta on one line, description below"],
    props: [{"name": "title", "type": "string", "required": true, "def": "—", "desc": "Row title."}, {"name": "description", "type": "string", "required": false, "def": "—", "desc": "Row description, muted."}, {"name": "meta", "type": "string", "required": false, "def": "—", "desc": "Right-side meta, 13 muted. Omit it for the 2-column form. In the stacked form it sits next to the title."}, {"name": "stacked", "type": "boolean", "required": false, "def": "false", "desc": "Stack the row: title + meta on one line, description below."}, {"name": "href", "type": "string", "required": false, "def": "—", "desc": "When present, the row renders as a link."}, {"name": "onClick", "type": "() => void", "required": false, "def": "—", "desc": "When present without href, the row renders as a button."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the row."}, {"key": "Enter / Space", "action": "Follow the link or activate the button. Space activates on key-up."}],
    invariants: ["Padding 15px vertical, 4px horizontal. Title/description gap 14px, baseline-aligned.", "Title: 16/600/-0.015 ink, never wraps (nowrap + ellipsis); the description wraps. Meta: 13 muted, optional — with meta the row has three columns, without it, two. Stacked form (stacked=true): title + meta share the top line; description sits below at full width. The Components page uses stacked rows with the library version as meta.", "A List Row is a real <a> or <button>, never a clickable div."],
    contract: {"props": {"title": "string", "description": "string?", "meta": "string?", "stacked": "boolean?", "href": "string?"}, "a11y": {"row": "real link or button", "name": "title text"}},
    prompt: "Build a Huntington List Row: full-width real <a> or <button>, padding 15x4, title 16/600/-0.015 never wraps, description 15/1.5 muted, right meta 13 muted and optional — omit it for the 2-column form. Stacked form (stacked=true): title + meta on one line, description below. Never a clickable div.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/list-row.json",
    code: `import { ListRow } from "@/components/ui/list-row";\n\nexport function Index() {\n  return (<><ListRow title="Row title" description="Row description" meta="Meta" href="#/row" /><ListRow title="Second row" description="Another description" href="#/row2" /><ListRow stacked title="Stacked row" description="Description below the title." meta="v0.2.0" href="#/row3" /></>);\n}`,
  },
  {
    id: "status-row", name: "Status Row", tagline: "Label + value, one line. Status at a glance.",
    anatomy: ["Label (muted)", "Value (ink)"],
    props: [{"name": "label", "type": "string", "required": true, "def": "—", "desc": "Label, muted."}, {"name": "value", "type": "ReactNode", "required": true, "def": "—", "desc": "Value. Inline links use the 2px underline style."}, {"name": "plain", "type": "boolean", "required": false, "def": "false", "desc": "When true, the value renders at weight 400 (labelless rows)."}],
    keyboard: [{"key": "Tab", "action": "Move focus through any links inside the value. The row itself is not interactive."}],
    invariants: ["Padding 7px vertical, 4px horizontal. Gap 16px.", "Label: 15.5/400 muted. Value: 15.5/800 ink, or 400 when plain.", "Values stay text-first; a value is never color alone."],
    contract: {"props": {"label": "string", "value": "ReactNode", "plain": "boolean"}, "a11y": {"row": "plain text; links inside are focusable"}},
    prompt: "Build a Huntington Status Row: padding 7x4, gap 16, label 15.5/400 muted, value 15.5/800 ink (400 when plain). Inline links use the 2px underline style.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/status-row.json",
    code: `import { StatusRow } from "@/components/ui/status-row";\n\nexport function Status() {\n  return <StatusRow label="Label" value="Value" />;\n}`,
  },
  {
    id: "playlist-row", name: "Playlist Row", tagline: "Thumb + title + meta, with a track list that unfolds.",
    anatomy: ["Thumb (64px)", "Title + meta", "Chevron", "Track list (expanded)"],
    props: [{"name": "title", "type": "string", "required": true, "def": "—", "desc": "Playlist title."}, {"name": "meta", "type": "string", "required": false, "def": "—", "desc": "Meta line, 13 muted."}, {"name": "tracks", "type": "string[]", "required": false, "def": "—", "desc": "Track titles shown when expanded."}, {"name": "open", "type": "boolean", "required": false, "def": "false", "desc": "Controls the expanded track list."}, {"name": "onToggle", "type": "() => void", "required": false, "def": "—", "desc": "Fires when the row is toggled."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the row button."}, {"key": "Enter / Space", "action": "Expand or collapse the track list."}],
    invariants: ["Thumb is 64x64, radius 14, hairline border.", "Title: 16/700/-0.015 ink. Meta: 13 muted. Row gap 12px.", "Expanded tracks indent 80px; track text is 14/1.6 muted (docs convention: no track spec in the audit).", "Trigger is a real <button> with aria-expanded + aria-controls."],
    contract: {"props": {"title": "string", "meta": "string?", "tracks": "array", "open": "boolean"}, "a11y": {"trigger": "button + aria-expanded + aria-controls", "tracks": "hidden when collapsed"}},
    prompt: "Build a Huntington Playlist Row: 64x64 thumb radius 14, title 16/700/-0.015, meta 13 muted, chevron, expanded tracks indented 80px at 14/1.6 muted. Trigger is a real button with aria-expanded + aria-controls.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/playlist-row.json",
    code: `import { PlaylistRow } from "@/components/ui/playlist-row";\n\nexport function List() {\n  return <PlaylistRow title="Playlist title" meta="Meta" tracks={["01  Track title", "02  Track title"]} />;\n}`,
  },
  {
    id: "favorite-accordion", name: "Favorite Accordion", tagline: "A favorite that opens into label/value detail rows.",
    anatomy: ["Header (chevron + title)", "Detail rows (label + value)"],
    props: [{"name": "title", "type": "string", "required": true, "def": "—", "desc": "Favorite title."}, {"name": "details", "type": "{ label, value }[]", "required": true, "def": "—", "desc": "Detail rows."}, {"name": "open", "type": "boolean", "required": false, "def": "false", "desc": "Controls the expanded body."}, {"name": "onToggle", "type": "() => void", "required": false, "def": "—", "desc": "Fires when the header is toggled."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the header button."}, {"key": "Enter / Space", "action": "Expand or collapse the body."}],
    invariants: ["Header: chevron + title 16/600. Detail rows: label/value 14/1.6 muted/ink, gap 16.", "Header button is min 44px tall (touch target).", "Trigger is a real <button> with aria-expanded + aria-controls; body is hidden when closed.", "Motion (audit): body max-height transition 300px. Reduced motion: no animation."],
    contract: {"props": {"title": "string", "details": "array", "open": "boolean"}, "a11y": {"trigger": "button + aria-expanded + aria-controls", "body": "hidden when closed"}},
    prompt: "Build a Huntington Favorite Accordion: header chevron + 16/600 title, detail rows label/value 14/1.6 muted/ink. Real button trigger with aria-expanded + aria-controls. Audit motion: 300px max-height transition.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/favorite-accordion.json",
    code: `import { FavoriteAccordion } from "@/components/ui/favorite-accordion";\n\nexport function Fav() {\n  return <FavoriteAccordion title="Favorite" details={[{ label: "Label", value: "Value" }]} />;\n}`,
  },
  {
    id: "qa-accordion", name: "Q&A Accordion", tagline: "Question up top, answer underneath. One at a time, plain words.",
    anatomy: ["Question (button)", "Answer (body copy)"],
    props: [{"name": "question", "type": "string", "required": true, "def": "—", "desc": "Question text."}, {"name": "answer", "type": "string", "required": true, "def": "—", "desc": "Answer copy."}, {"name": "open", "type": "boolean", "required": false, "def": "false", "desc": "Controls the visible answer."}, {"name": "onToggle", "type": "() => void", "required": false, "def": "—", "desc": "Fires when the question is toggled."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the question button."}, {"key": "Enter / Space", "action": "Show or hide the answer."}],
    invariants: ["Question: 16/600/-0.01, padding 15x4. Answer: 15/1.65 body color, 544 wide.", "Trigger is a real <button> with aria-expanded + aria-controls; answer is hidden when closed."],
    contract: {"props": {"question": "string", "answer": "string", "open": "boolean"}, "a11y": {"trigger": "button + aria-expanded + aria-controls", "answer": "hidden when closed"}},
    prompt: "Build a Huntington Q&A Accordion: question 16/600/-0.01 padding 15x4, answer 15/1.65 body color 544 wide. Real button trigger with aria-expanded + aria-controls.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/qa-accordion.json",
    code: `import { QAAccordion } from "@/components/ui/qa-accordion";\n\nexport function Faq() {\n  return <QAAccordion question="Question goes here?" answer="Answer copy goes here." />;\n}`,
  },
  {
    id: "photo-card", name: "Photo Card", tagline: "A gradient card with an orb and a label. Four moods of the same card.",
    anatomy: ["Gradient background", "Orb (150px, 80% opacity)", "Label (title + subtitle)"],
    props: [{"name": "variant", "type": "\"default\" | \"blue\" | \"rose\" | \"green\"", "required": false, "def": "\"default\"", "desc": "Gradient + orb color pair."}, {"name": "title", "type": "string", "required": true, "def": "—", "desc": "Card title, 17/600 white."}, {"name": "subtitle", "type": "string", "required": false, "def": "—", "desc": "Card subtitle, 12 white at 60%."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the card when it is a link. A plain card is not interactive."}],
    invariants: ["Size 320x170, radius 14, overflow hidden.", "Orb is 150px at 80% opacity, top-right. Label sits bottom-left.", "Title and subtitle are white text on the gradient, never color alone."],
    contract: {"props": {"variant": ["default", "blue", "rose", "green"], "title": "string", "subtitle": "string?"}, "a11y": {"label": "title text on the gradient", "card": "link when it navigates, plain otherwise"}},
    prompt: "Build a Huntington Photo Card: 320x170 radius 14, gradient background + 150px orb at 80% top-right, label 17/600 white + subtitle 12 white at 60%. Variants default/blue/rose/green.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/photo-card.json",
    code: `import { PhotoCard } from "@/components/ui/photo-card";\n\nexport function Card() {\n  return <PhotoCard variant="default" title="Card title" subtitle="Card subtitle" />;\n}`,
  },
  {
    id: "file-grid-cell", name: "File Grid Cell", tagline: "One file in a grid: art, filename, meta.",
    anatomy: ["Art (4:3)", "Filename", "Meta"],
    props: [{"name": "filename", "type": "string", "required": true, "def": "—", "desc": "Filename, 13.5/700/-0.01."}, {"name": "meta", "type": "string", "required": false, "def": "—", "desc": "Meta line, 12 muted."}, {"name": "image", "type": "string", "required": false, "def": "—", "desc": "Art image URL. A card-color placeholder shows without one."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the cell when it is a link. A plain cell is not interactive."}],
    invariants: ["Art is 160x120, radius 14, hairline border. Gap 8px.", "Filename: 13.5/700/-0.01 ink. Meta: 12 muted.", "Cells sit in a 2-column grid, gaps 18/12 (audit)."],
    contract: {"props": {"filename": "string", "meta": "string?", "image": "string?"}, "a11y": {"filename": "text", "cell": "link when it navigates, plain otherwise"}},
    prompt: "Build a Huntington File Grid Cell: art 160x120 radius 14 hairline, filename 13.5/700/-0.01, meta 12 muted, gap 8. Cells sit in a 2-column grid, gaps 18/12.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/file-grid-cell.json",
    code: `import { FileGridCell } from "@/components/ui/file-grid-cell";\n\nexport function File() {\n  return <FileGridCell filename="filename.jpg" meta="Meta" />;\n}`,
  },
  {
    id: "logo-cell", name: "Logo Cell", tagline: "A centered logo in a card cell. Quiet, even, 160 wide.",
    anatomy: ["Card surface", "Logo (centered)"],
    props: [{"name": "logo", "type": "ReactNode", "required": true, "def": "—", "desc": "Logo mark or image."}, {"name": "alt", "type": "string", "required": false, "def": "—", "desc": "Accessible name for the logo image."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the cell when it is a link. A plain cell is not interactive."}],
    invariants: ["Cell is 160 wide (via padding), 40px vertical padding, card bg, hairline, radius 14.", "Logo is 70% of the cell width, max 60px tall, centered."],
    contract: {"props": {"logo": "ReactNode", "alt": "string?"}, "a11y": {"logo": "image with alt text, or text"}},
    prompt: "Build a Huntington Logo Cell: 160 wide, 40px vertical padding, card bg, hairline, radius 14, logo 70% width max 60 tall centered.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/logo-cell.json",
    code: `import { LogoCell } from "@/components/ui/logo-cell";\n\nexport function Cell() {\n  return <LogoCell logo={<span>Brand</span>} alt="Brand" />;\n}`,
  },
  {
    id: "logo-card", name: "Logo Card", tagline: "A big centered mark. The logo gets the whole card.",
    anatomy: ["Card surface", "Mark (centered, 64px)"],
    props: [{"name": "mark", "type": "ReactNode", "required": true, "def": "—", "desc": "Mark or logo."}, {"name": "alt", "type": "string", "required": false, "def": "—", "desc": "Accessible name for the mark."}, {"name": "paper", "type": "boolean", "required": false, "def": "false", "desc": "Dark variant: #141210 background."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the card when it is a link. A plain card is not interactive."}],
    invariants: ["Card is 320 wide (via padding), 44px vertical padding, card bg, hairline, radius 18 (tokens + audit; the Figma plugin builder used 14 — the site follows the tokens).", "Mark placeholder is 64x64 (size unspecified in the audit; docs convention).", "Dark variant background is #141210."],
    contract: {"props": {"mark": "ReactNode", "alt": "string?", "dark": "boolean"}, "a11y": {"mark": "image with alt text, or text"}},
    prompt: "Build a Huntington Logo Card: 320 wide, 44px vertical padding, card bg, hairline, radius 18 (tokens + audit), centered 64px mark. Dark variant bg #141210.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/logo-card.json",
    code: `import { LogoCard } from "@/components/ui/logo-card";\n\nexport function Card() {\n  return <LogoCard mark={<span>Brand</span>} alt="Brand" />;\n}`,
  },
  {
    id: "carousel", name: "Carousel", tagline: "A horizontal scroll-snap row of tall images.",
    anatomy: ["Images (148x320, snap)"],
    props: [{"name": "images", "type": "string[]", "required": true, "def": "—", "desc": "Image URLs, one per frame."}],
    keyboard: [{"key": "Tab", "action": "Move focus through the focusable items inside the frames."}, {"key": "Arrow keys", "action": "Scroll the row when a frame is focused (native scroll behavior)."}],
    invariants: ["Images are 148x320, radius 14, hairline border, gap 10px.", "Horizontal scroll-snap (audit). Content never depends on scroll position alone."],
    contract: {"props": {"images": "array"}, "a11y": {"row": "native scroll container; items inside are focusable"}},
    prompt: "Build a Huntington Carousel: horizontal scroll-snap row, gap 10, images 148x320 radius 14 hairline. Native scroll behavior.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/carousel.json",
    code: `import { Carousel } from "@/components/ui/carousel";\n\nexport function Row() {\n  return <Carousel images={["/a.jpg", "/b.jpg", "/c.jpg"]} />;\n}`,
  },
  {
    id: "photo-tile", name: "Photo Tile", tagline: "Square art, a name, a category. The smallest photo unit.",
    anatomy: ["Art (square)", "Name", "Category"],
    props: [{"name": "name", "type": "string", "required": true, "def": "—", "desc": "Photo name, 12.5/600/-0.01."}, {"name": "category", "type": "string", "required": false, "def": "—", "desc": "Category, 11.5 muted."}, {"name": "image", "type": "string", "required": false, "def": "—", "desc": "Art image URL. A card-color placeholder shows without one."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the tile when it is a link. A plain tile is not interactive."}],
    invariants: ["Art is 120x120, radius 14, hairline border. Gap 8px.", "Name: 12.5/600/-0.01 ink. Category: 11.5 muted."],
    contract: {"props": {"name": "string", "category": "string?", "image": "string?"}, "a11y": {"name": "text", "tile": "link when it navigates, plain otherwise"}},
    prompt: "Build a Huntington Photo Tile: art 120x120 radius 14 hairline, name 12.5/600/-0.01, category 11.5 muted, gap 8.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/photo-tile.json",
    code: `import { PhotoTile } from "@/components/ui/photo-tile";\n\nexport function Tile() {\n  return <PhotoTile name="Photo name" category="Category" />;\n}`,
  },
  {
    id: "gallery", name: "Gallery", tagline: "A named group of photos: heading, count, three-across grid.",
    anatomy: ["Heading (title + count)", "Grid (3 columns)"],
    props: [{"name": "title", "type": "string", "required": true, "def": "—", "desc": "Gallery title, 13/700."}, {"name": "count", "type": "number", "required": false, "def": "—", "desc": "Item count, 13 muted."}, {"name": "images", "type": "string[]", "required": true, "def": "—", "desc": "Image URLs."}],
    keyboard: [{"key": "Tab", "action": "Move focus through the focusable items inside the grid."}],
    invariants: ["Heading: title 13/700 + count 13 muted, gap 6px.", "Grid: 3 columns, gap 8px, art square, radius 10."],
    contract: {"props": {"title": "string", "count": "number?", "images": "array"}, "a11y": {"heading": "text", "items": "focusable when they navigate"}},
    prompt: "Build a Huntington Gallery: heading 13/700 + count 13 muted, 3-column grid, gap 8, art square radius 10.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/gallery.json",
    code: `import { Gallery } from "@/components/ui/gallery";\n\nexport function Set() {\n  return <Gallery title="Gallery" count={12} images={["/a.jpg", "/b.jpg", "/c.jpg"]} />;\n}`,
  },
  {
    id: "filter-pill", name: "Filter Pill", tagline: "A filter you can tap. Inactive is outline, active is ink.",
    anatomy: ["Label", "Pill surface"],
    props: [{"name": "children", "type": "ReactNode", "required": true, "def": "—", "desc": "Filter label."}, {"name": "active", "type": "boolean", "required": false, "def": "false", "desc": "Active state: ink bg, paper text."}, {"name": "onToggle", "type": "() => void", "required": false, "def": "—", "desc": "Fires when the pill is toggled."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the pill."}, {"key": "Enter / Space", "action": "Toggle the filter."}],
    invariants: ["13/700, padding 9x15, radius 999, 1px hairline border, card bg.", "Active: ink bg, paper text. State is also visible by fill, never color alone (the label stays).", "Pill is a real <button> with aria-pressed."],
    contract: {"props": {"active": "boolean"}, "a11y": {"pill": "button + aria-pressed"}},
    prompt: "Build a Huntington Filter Pill: 13/700, padding 9x15, radius 999, hairline, card bg. Active: ink bg, paper text. Real button with aria-pressed.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/filter-pill.json",
    code: `import { FilterPill } from "@/components/ui/filter-pill";\n\nexport function Filters() {\n  return <FilterPill active>Filter</FilterPill>;\n}`,
  },
  {
    id: "status-pill", name: "Status Pill", tagline: "A status with a dot. Text carries it; the dot echoes it.",
    anatomy: ["Status dot (7px)", "Label"],
    props: [{"name": "status", "type": "\"active\" | \"idle\" | \"offline\"", "required": true, "def": "—", "desc": "Status. Dot color follows it."}, {"name": "children", "type": "ReactNode", "required": false, "def": "—", "desc": "Label. Defaults to the capitalized status."}],
    keyboard: [{"key": "—", "action": "Status Pill is not interactive. No keyboard behavior."}],
    invariants: ["12.5/600, padding 4x11, radius 999, hairline, card bg, gap 6px.", "Dots: Active #34d399, Idle #60a5fa, Offline #fbbf24.", "Meaning is in the label text, never the dot color alone."],
    contract: {"props": {"status": ["active", "idle", "offline"]}, "a11y": {"meaning": "label text, never dot color alone"}},
    prompt: "Build a Huntington Status Pill: 12.5/600, padding 4x11, radius 999, hairline, card bg, 7px dot. Active #34d399, Idle #60a5fa, Offline #fbbf24. Meaning in the label text.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/status-pill.json",
    code: `import { StatusPill } from "@/components/ui/status-pill";\n\nexport function Status() {\n  return <StatusPill status="active" />;\n}`,
  },
  {
    id: "status-dot", name: "Status Dot", tagline: "Inline status: a dot and a word. For sentences, not pills.",
    anatomy: ["Dot (7px)", "Text (muted)"],
    props: [{"name": "status", "type": "\"active\" | \"idle\" | \"offline\"", "required": false, "def": "\"active\"", "desc": "Status. Dot color follows it."}, {"name": "children", "type": "ReactNode", "required": false, "def": "—", "desc": "Text. Defaults to the capitalized status."}],
    keyboard: [{"key": "—", "action": "Status Dot is not interactive. No keyboard behavior."}],
    invariants: ["Text: 13/500 muted. Dot: 7px. Gap 6px.", "Meaning is in the text, never the dot color alone."],
    contract: {"props": {"status": ["active", "idle", "offline"]}, "a11y": {"meaning": "text, never dot color alone"}},
    prompt: "Build a Huntington Status Dot: 13/500 muted text + 7px dot, gap 6. Meaning in the text, never the dot color alone.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/status-dot.json",
    code: `import { StatusDot } from "@/components/ui/status-dot";\n\nexport function Inline() {\n  return <StatusDot status="active">Active</StatusDot>;\n}`,
  },
  {
    id: "tag", name: "Tag", tagline: "A small uppercase label. Quiet metadata, hairline border.",
    anatomy: ["Label (uppercase)"],
    props: [{"name": "children", "type": "ReactNode", "required": true, "def": "—", "desc": "Tag text. Rendered uppercase."}],
    keyboard: [{"key": "—", "action": "Tag is not interactive. No keyboard behavior. (If a tag filters, use Filter Pill with aria-pressed instead.)"}],
    invariants: ["11/600 uppercase, tracking +0.08, muted.", "Padding 4x10, radius 99, 1px hairline border.", "A Tag never acts as a button."],
    contract: {"props": {"children": "ReactNode"}, "a11y": {"tag": "plain text, never a button"}},
    prompt: "Build a Huntington Tag: 11/600 uppercase +0.08 muted, padding 4x10, radius 99, hairline. Plain text, never a button.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/tag.json",
    code: `import { Tag } from "@/components/ui/tag";\n\nexport function Meta() {\n  return <Tag>Tag</Tag>;\n}`,
  },
  {
    id: "live-badge", name: "LIVE Badge", tagline: "A red dot and the word LIVE. Small, loud, honest about its contrast.",
    anatomy: ["Dot (8px, live red)", "Text (LIVE)"],
    props: [],
    keyboard: [{"key": "—", "action": "LIVE Badge is not interactive. No keyboard behavior."}],
    invariants: ["Dot is 8px #e5484d. Text: 13/700/+0.06 #e5484d, uppercase. Gap 6px.", "Audit motion: the dot blinks. Reduced motion: no animation.", "Contrast note (measured): LIVE text is 3.85:1 on a paper card, 4.30:1 on a ink card — below 4.5:1. It is a status indicator with a dot, never body copy."],
    contract: {"props": {}, "a11y": {"badge": "text + dot, never dot alone", "contrast": "measured 3.85:1 paper / 4.30:1 ink — status indicator, not body text"}},
    prompt: "Build a Huntington LIVE Badge: 8px dot #e5484d + LIVE 13/700/+0.06 #e5484d uppercase, gap 6. Dot blinks (audit motion). Contrast note: 3.85:1 on paper card — a status indicator, never body copy.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/live-badge.json",
    code: `import { LIVEBadge } from "@/components/ui/live-badge";\n\nexport function Live() {\n  return <LIVEBadge />;\n}`,
  },
  {
    id: "reaction-button", name: "Reaction Button", tagline: "A circle to tap, a label, a caption. Voted gets an underline.",
    anatomy: ["Circle (44px)", "Label", "Caption"],
    props: [{"name": "label", "type": "string", "required": true, "def": "—", "desc": "Label, 15/700."}, {"name": "caption", "type": "string", "required": false, "def": "—", "desc": "Caption, 13 muted."}, {"name": "voted", "type": "boolean", "required": false, "def": "false", "desc": "Voted state: 2px underline under the label."}, {"name": "onToggle", "type": "() => void", "required": false, "def": "—", "desc": "Fires when the circle is tapped."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the circle button."}, {"key": "Enter / Space", "action": "Toggle the vote."}],
    invariants: ["Circle is 44px, 1.5px border. Gap 6px; label/caption gap 1px.", "Label: 15/700 ink. Caption: 13 muted.", "Voted: 2px line underline under the label (40px wide in Figma, docs convention).", "Circle is a real <button> with aria-pressed."],
    contract: {"props": {"label": "string", "caption": "string?", "voted": "boolean"}, "a11y": {"circle": "button + aria-pressed", "state": "underline + aria-pressed, never color alone"}},
    prompt: "Build a Huntington Reaction Button: 44px circle, 1.5px border, label 15/700 + caption 13 muted. Voted: 2px underline under the label. Real button with aria-pressed.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/reaction-button.json",
    code: `import { ReactionButton } from "@/components/ui/reaction-button";\n\nexport function React() {\n  return <ReactionButton label="React" caption="Caption" />;\n}`,
  },
  {
    id: "text-link", name: "Text Link", tagline: "The call to action. Bold ink, a 2px underline, nothing else.",
    anatomy: ["Text (bold ink)", "Underline (2px line)"],
    props: [{"name": "href", "type": "string", "required": true, "def": "—", "desc": "Link destination."}, {"name": "children", "type": "ReactNode", "required": true, "def": "—", "desc": "Link text."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the link."}, {"key": "Enter", "action": "Follow the link."}],
    invariants: ["15/700 ink. Underline: 2px solid line color, padding-bottom 1-2px.", "A Text Link is a real <a>. It is the primary call to action — there is no filled button in Huntington."],
    contract: {"props": {"href": "string", "children": "ReactNode"}, "a11y": {"link": "real anchor with visible text"}},
    prompt: "Build a Huntington Text Link: 15/700 ink, 2px solid line underline, padding-bottom 1-2px. A real <a>. It is the primary call to action.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/text-link.json",
    code: `import { TextLink } from "@/components/ui/text-link";\n\nexport function Go() {\n  return <TextLink href="#/more">Visit</TextLink>;\n}`,
  },
  {
    id: "back-link", name: "Back Link", tagline: "One quiet way back. Muted, small, arrow included.",
    anatomy: ["Text (muted)"],
    props: [{"name": "href", "type": "string", "required": true, "def": "—", "desc": "Link destination."}, {"name": "children", "type": "ReactNode", "required": false, "def": "—", "desc": "Link text. Defaults to “← Back”."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the link."}, {"key": "Enter", "action": "Follow the link."}],
    invariants: ["13 muted, no decoration.", "A Back Link is a real <a>."],
    contract: {"props": {"href": "string", "children": "ReactNode"}, "a11y": {"link": "real anchor with visible text"}},
    prompt: "Build a Huntington Back Link: 13 muted, no decoration. A real <a>. Default text: ← Back.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/back-link.json",
    code: `import { BackLink } from "@/components/ui/back-link";\n\nexport function Back() {\n  return <BackLink href="#/home" />;\n}`,
  },
  {
    id: "view-all", name: "View All", tagline: "A full-width pill that opens the whole list.",
    anatomy: ["Label", "Pill surface (full width)"],
    props: [{"name": "children", "type": "ReactNode", "required": false, "def": "—", "desc": "Label. Defaults to “View all”."}, {"name": "href", "type": "string", "required": false, "def": "—", "desc": "When present, renders as a link."}, {"name": "onClick", "type": "() => void", "required": false, "def": "—", "desc": "When present without href, renders as a button."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the control."}, {"key": "Enter / Space", "action": "Follow the link or activate the button."}],
    invariants: ["Full width, padding 14px, radius 99, 1px hairline border.", "Label: 14/600/-0.01 ink, centered.", "A View All is a real <a> or <button>, never a clickable div."],
    contract: {"props": {"children": "ReactNode", "href": "string?"}, "a11y": {"control": "real link or button"}},
    prompt: "Build a Huntington View All: full-width, padding 14, radius 99, hairline, 14/600/-0.01 ink centered. A real <a> or <button>.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/view-all.json",
    code: `import { ViewAll } from "@/components/ui/view-all";\n\nexport function More() {\n  return <ViewAll href="#/all">View all</ViewAll>;\n}`,
  },
  {
    id: "progress-bar", name: "Progress Bar", tagline: "A 3px bar. The number lives in the text next to it.",
    anatomy: ["Track (line color)", "Fill (ink)"],
    props: [{"name": "value", "type": "number", "required": true, "def": "—", "desc": "Current value."}, {"name": "min", "type": "number", "required": false, "def": "0", "desc": "Minimum."}, {"name": "max", "type": "number", "required": false, "def": "100", "desc": "Maximum."}],
    keyboard: [{"key": "—", "action": "Progress Bar is not interactive. No keyboard behavior."}],
    invariants: ["Track: 220x3, radius 2, line color. Fill: ink, clamped to min-max.", "The bar never stands alone: always pair it with visible value text nearby (label, Stat, or caption).", "Uses role=progressbar + aria-valuenow/min/max.", "Motion (audit): the fill pulses while charging. Reduced motion: no animation."],
    contract: {"props": {"value": "number", "min": "number", "max": "number"}, "a11y": {"role": "progressbar", "values": "aria-valuenow/min/max", "text": "visible value text nearby"}},
    prompt: "Build a Huntington Progress Bar: track 220x3 radius 2 line color, fill ink clamped to min-max, role=progressbar + aria-valuenow/min/max. Always pair with visible value text. Audit motion: fill pulses while charging.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/progress-bar.json",
    code: `import { ProgressBar } from "@/components/ui/progress-bar";\n\nexport function Loading() {\n  return <ProgressBar value={65} />;\n}`,
  },
  {
    id: "menu-pill", name: "Menu Pill", tagline: "The floating pill that opens the menu sheet.",
    anatomy: ["Label", "Pill surface (paper 84% + blur)"],
    props: [{"name": "label", "type": "string", "required": false, "def": "\"Menu\"", "desc": "Pill label."}, {"name": "onOpen", "type": "() => void", "required": false, "def": "—", "desc": "Fires when the pill is activated."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the pill."}, {"key": "Enter / Space", "action": "Open the Menu Bottom Sheet."}],
    invariants: ["Padding 12x16, radius 999, paper at 84% + 12px backdrop blur, hairline, shadow 0 8px 24px rgba(0,0,0,0.14).", "Label: 13/600/+0.02 ink. Fixed bottom-right in use (audit).", "Pill is a real <button> with aria-expanded + aria-controls pointing at the sheet."],
    contract: {"props": {"label": "string"}, "a11y": {"pill": "button + aria-expanded + aria-controls", "sheet": "labelled menu"}},
    prompt: "Build a Huntington Menu Pill: padding 12x16, radius 999, paper 84% + 12px backdrop blur, hairline, shadow 0 8px 24px rgba(0,0,0,0.14), label 13/600/+0.02. Real button with aria-expanded + aria-controls. Fixed bottom-right in use.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/menu-pill.json",
    code: `import { MenuPill } from "@/components/ui/menu-pill";\n\nexport function Menu() {\n  return <MenuPill onOpen={() => {}} />;\n}`,
  },
  {
    id: "lightbox", name: "Lightbox", tagline: "One photo, big, on near-black. Prev, next, count, close.",
    anatomy: ["Backdrop (near-black)", "Image", "Prev / Next buttons", "Count", "Close"],
    props: [{"name": "image", "type": "string", "required": true, "def": "—", "desc": "Image URL."}, {"name": "alt", "type": "string", "required": false, "def": "—", "desc": "Image alt text."}, {"name": "index", "type": "number", "required": true, "def": "—", "desc": "Current index (1-based)."}, {"name": "total", "type": "number", "required": true, "def": "—", "desc": "Total images."}, {"name": "onPrev", "type": "() => void", "required": false, "def": "—", "desc": "Fires on Previous."}, {"name": "onNext", "type": "() => void", "required": false, "def": "—", "desc": "Fires on Next."}, {"name": "onClose", "type": "() => void", "required": true, "def": "—", "desc": "Fires on Close / Escape."}],
    keyboard: [{"key": "Escape", "action": "Close the lightbox, return focus to the trigger."}, {"key": "Tab / Shift+Tab", "action": "Move focus between Close, Previous, Next (docs convention: focus stays inside)."}, {"key": "ArrowLeft / ArrowRight", "action": "Previous / Next (docs convention)."}],
    invariants: ["Frame 632x420, background rgba(8,8,8,0.95). Image 320x240, radius 14.", "Prev/Next are round 44px buttons, white 12% fill, 26px glyphs.", "Count is 13 white at 70%. White on near-black is 20.03:1.", "Lightbox is a dialog: role=dialog + aria-modal + aria-label. Focus returns to the trigger on close."],
    contract: {"props": {"image": "string", "index": "number", "total": "number"}, "a11y": {"dialog": "role=dialog + aria-modal", "focus": "returns to trigger on close", "count": "visible text"}},
    prompt: "Build a Huntington Lightbox: 632x420 rgba(8,8,8,0.95), image 320x240 radius 14, round 44px Prev/Next white 12% + 26px glyphs, count 13 white 70%. role=dialog + aria-modal, Escape closes, focus returns to trigger.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/lightbox.json",
    code: `import { Lightbox } from "@/components/ui/lightbox";\n\nexport function View() {\n  return <Lightbox image="/photo.jpg" alt="Photo" index={1} total={12} onClose={() => {}} />;\n}`,
  },
  {
    id: "menu-bottom-sheet", name: "Menu Bottom Sheet", tagline: "The menu, as a sheet: grab bar, sections, rows, active dot.",
    anatomy: ["Grab bar", "Section label", "Rows (title + note)", "Active dot"],
    props: [{"name": "sections", "type": "{ label, rows: { title, note?, active?, href? }[] }[]", "required": true, "def": "—", "desc": "Sections and their rows."}, {"name": "onClose", "type": "() => void", "required": false, "def": "—", "desc": "Fires on scrim click / Escape."}],
    keyboard: [{"key": "Escape", "action": "Close the sheet, return focus to the Menu Pill."}, {"key": "Tab", "action": "Move focus through the rows and the close control."}],
    invariants: ["Padding 12 top / 24 bottom / 20 sides. Top radius 22. Max width 672 (audit).", "Grab bar 38x4, radius 2 (radius unspecified in the audit; docs convention).", "Section label: 12/600 uppercase +0.08 muted. Row: padding 14, title 17/700/-0.015, note 13 muted.", "Active row gets a 7px ink dot after the title.", "Scrim rgba(0,0,0,0.18). Shadow 0 -18px 50px rgba(0,0,0,0.16)."],
    contract: {"props": {"sections": "array"}, "a11y": {"sheet": "dialog with labelled rows", "focus": "returns to Menu Pill on close", "scrim": "click closes"}},
    prompt: "Build a Huntington Menu Bottom Sheet: padding 12/24/20, top radius 22, grab bar 38x4, section label 12/600 uppercase +0.08 muted, rows padding 14 title 17/700/-0.015 + note 13 muted, active row 7px ink dot. Scrim rgba(0,0,0,0.18), shadow 0 -18px 50px rgba(0,0,0,0.16).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/menu-bottom-sheet.json",
    code: `import { MenuBottomSheet } from "@/components/ui/menu-bottom-sheet";\n\nexport function Menu() {\n  return <MenuBottomSheet sections={[{ label: "Section", rows: [{ title: "Row title", note: "Note" }] }]} />;\n}`,
  },
  {
    id: "media-card", name: "Media Card", tagline: "A full-bleed moment: status bar up top, caption at the bottom.",
    anatomy: ["Image (full-bleed)", "Status bar", "Caption (title + body)"],
    props: [{"name": "image", "type": "string", "required": true, "def": "—", "desc": "Image URL."}, {"name": "alt", "type": "string", "required": false, "def": "—", "desc": "Image alt text."}, {"name": "statusBar", "type": "string", "required": false, "def": "—", "desc": "Top status bar text, uppercase."}, {"name": "title", "type": "string", "required": true, "def": "—", "desc": "Caption title, 22/600 white."}, {"name": "caption", "type": "string", "required": false, "def": "—", "desc": "Caption body, 14 white at 72%."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the card when it is a link. A plain card is not interactive."}],
    invariants: ["Size 360x640. Image fills the frame; caption sits on a bottom gradient.", "Status bar: 11/600/+0.18 white, centered, uppercase.", "Caption title: 22/600 white. Caption body: 14 white at 72%.", "Caption text-shadow 0 1px 10px rgba(0,0,0,0.55) (audit; no Figma fill equivalent).", "Motion (audit): slow 26s scale drift. Reduced motion: no animation."],
    contract: {"props": {"image": "string", "title": "string", "caption": "string?", "statusBar": "string?"}, "a11y": {"image": "alt text", "caption": "white text on the image + shadow"}},
    prompt: "Build a Huntington Media Card: 360x640 full-bleed image, status bar 11/600/+0.18 white centered uppercase, caption title 22/600 white + body 14 white 72%, caption text-shadow 0 1px 10px rgba(0,0,0,0.55). Audit motion: 26s scale drift.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/media-card.json",
    code: `import { MediaCard } from "@/components/ui/media-card";\n\nexport function Moment() {\n  return <MediaCard image="/moment.jpg" alt="Moment" statusBar="Status bar" title="Card title" caption="Caption copy goes here." />;\n}`,
  },
  {
    id: "live-pulse-dot", name: "Live Pulse Dot", tagline: "An 8px dot and its expanding ring. Live, at a glance.",
    anatomy: ["Dot (8px, pulse blue)", "Ring (24px, 1.5px)"],
    props: [],
    keyboard: [{"key": "—", "action": "Live Pulse Dot is not interactive. No keyboard behavior."}],
    invariants: ["Dot is 8px #1a73e8. Ring is 24px, 1.5px stroke.", "Motion (audit): ring pings over 2.4s. Reduced motion: no animation. The Figma build is static.", "Always pair with visible text (e.g. LIVE Badge or a label) — the dot alone means nothing to a screen reader."],
    contract: {"props": {}, "a11y": {"dot": "aria-hidden; pair with visible text"}},
    prompt: "Build a Huntington Live Pulse Dot: 8px dot #1a73e8 + 24px ring 1.5px stroke. Audit motion: 2.4s ping. Always pair with visible text; the dot alone is aria-hidden.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/live-pulse-dot.json",
    code: `import { LivePulseDot } from "@/components/ui/live-pulse-dot";\n\nexport function Live() {\n  return (<span><LivePulseDot /> Live</span>);\n}`,
  },
  {
    id: "equalizer-bars", name: "Equalizer Bars", tagline: "Four bars that say: something is playing.",
    anatomy: ["Bars (4, ink)"],
    props: [{"name": "label", "type": "string", "required": false, "def": "—", "desc": "Accessible label for the playing state, e.g. “Now playing”."}],
    keyboard: [{"key": "—", "action": "Equalizer Bars are not interactive. No keyboard behavior."}],
    invariants: ["4 bars, 3px wide, 15px tall, ink color, gap 3px.", "Motion (audit): staggered scaleY animation. Reduced motion: no animation. The Figma build is static.", "Bars are aria-hidden; the playing state is announced by visible text or a label."],
    contract: {"props": {"label": "string?"}, "a11y": {"bars": "aria-hidden; state in visible text or label"}},
    prompt: "Build a Huntington Equalizer Bars: 4 bars 3x15 ink, gap 3. Audit motion: staggered scaleY. Bars are aria-hidden; the playing state lives in visible text or a label.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/equalizer-bars.json",
    code: `import { EqualizerBars } from "@/components/ui/equalizer-bars";\n\nexport function Playing() {\n  return (<span><EqualizerBars label="Now playing" /> Now playing</span>);\n}`,
  },
  {
    id: "stat", name: "Stat", tagline: "A metric, a big number, a unit. Nothing else.",
    anatomy: ["Label", "Number + unit"],
    props: [{"name": "label", "type": "string", "required": true, "def": "—", "desc": "Metric label, 17/500 body color."}, {"name": "value", "type": "string", "required": true, "def": "—", "desc": "Number, 28/700/-0.025 ink."}, {"name": "unit", "type": "string", "required": false, "def": "—", "desc": "Unit, 13 muted, bottom-aligned."}],
    keyboard: [{"key": "—", "action": "Stat is not interactive. No keyboard behavior."}],
    invariants: ["Label: 17/500 body color. Number: 28/700/-0.025 ink. Unit: 13 muted, bottom-aligned to the number.", "Gap 4px. Number and unit are one readable value, never number alone."],
    contract: {"props": {"label": "string", "value": "string", "unit": "string?"}, "a11y": {"value": "number + unit as one readable value"}},
    prompt: "Build a Huntington Stat: label 17/500 body color, number 28/700/-0.025 ink + unit 13 muted bottom-aligned, gap 4. Number + unit read as one value.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/stat.json",
    code: `import { Stat } from "@/components/ui/stat";\n\nexport function Metric() {\n  return <Stat label="Metric" value="7.4" unit="units" />;\n}`,
  },
  {
    id: "footer", name: "Footer", tagline: "The bottom of the page. Small, muted, done.",
    anatomy: ["Footer copy"],
    props: [{"name": "children", "type": "ReactNode", "required": false, "def": "—", "desc": "Footer copy. Defaults to the generic placeholder."}],
    keyboard: [{"key": "Tab", "action": "Move focus through any links inside the footer."}],
    invariants: ["13/400 muted, leading 1.7. Padding-top 80px.", "Component copy stays generic (“Brand name” placeholder). The docs site footer follows the Oeste footer pattern separately."],
    contract: {"props": {"children": "ReactNode"}, "a11y": {"footer": "landmark; links inside are focusable"}},
    prompt: "Build a Huntington Footer: 13/400 muted, leading 1.7, padding-top 80px. Generic placeholder copy.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/footer.json",
    code: `import { Footer } from "@/components/ui/footer";\n\nexport function Bottom() {\n  return <Footer />;\n}`,
  },
  {
    id: "toggle-tabs", name: "Toggle Tabs", tagline: "Two or more views, one row. Active is ink + underline.",
    anatomy: ["Tablist", "Tabs (labels)", "Active underline (2px ink)"],
    props: [{"name": "tabs", "type": "{ id, label }[]", "required": true, "def": "—", "desc": "Tabs. Each tab has an id and a label."}, {"name": "activeTab", "type": "string", "required": true, "def": "—", "desc": "Id of the active tab."}, {"name": "onTabChange", "type": "(id) => void", "required": false, "def": "—", "desc": "Fires when a tab is activated (click or arrow keys)."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the active tab. Inactive tabs are roving (tabindex -1)."}, {"key": "ArrowLeft / ArrowRight", "action": "Move to the previous / next tab and activate it."}, {"key": "Home / End", "action": "Move to the first / last tab and activate it."}],
    invariants: ["Row: flex, gap 20px.", "Tabs: 13px, padding 14x6, transparent background, 2px bottom border.", "Active: ink, weight 700, 2px ink underline. Inactive: muted, transparent underline (no layout shift).", "Tabs use roving tabindex; only the active tab is in the Tab order.", "role=tablist/tab + aria-selected + aria-controls; panels use role=tabpanel.", "Selection is never color alone: weight + underline + aria-selected."],
    contract: {"props": {"tabs": "array", "activeTab": "string", "onTabChange": "function?"}, "a11y": {"tablist": "role=tablist", "tab": "role=tab + aria-selected", "keyboard": "arrows + Home/End, roving tabindex"}},
    prompt: "Build a Huntington Toggle Tabs: flex row gap 20, tabs 13px padding 14x6, transparent bg, 2px bottom border (transparent inactive, ink active). Active: ink + weight 700. role=tablist/tab + aria-selected + aria-controls, roving tabindex, ArrowLeft/Right/Home/End move + activate.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/toggle-tabs.json",
    code: `import { ToggleTabs } from "@/components/ui/toggle-tabs";\n\nexport function Views() {\n  return <ToggleTabs tabs={[{ id: "one", label: "One" }, { id: "two", label: "Two" }]} activeTab="one" onTabChange={() => {}} />;\n}`,
  },
  {
    id: "next-footer", name: "Next Footer", tagline: "The way onward. A hairline, then the next row.",
    anatomy: ["Hairline top border", "Next row (List Row)"],
    props: [{"name": "title", "type": "string", "required": true, "def": "—", "desc": "Next page title, 16/600/-0.015 ink."}, {"name": "description", "type": "string", "required": false, "def": "—", "desc": "Next page description, 15/1.5 muted."}, {"name": "meta", "type": "string", "required": false, "def": "—", "desc": "Right-side meta, 13 muted."}, {"name": "href", "type": "string", "required": true, "def": "—", "desc": "Next page destination."}],
    keyboard: [{"key": "Tab", "action": "Move focus to the link."}, {"key": "Enter", "action": "Follow the link."}],
    invariants: ["Margin-top 44px, hairline top border, padding-top 6px.", "The row mirrors List Row: title 16/600/-0.015, description 15/1.5 muted, meta 13 muted, padding 15x4.", "The row is a real <a> inside a <nav aria-label=\"Next\">.", "Next Footer sits after the page body and before the Footer."],
    contract: {"props": {"title": "string", "description": "string?", "meta": "string?", "href": "string"}, "a11y": {"nav": "nav + aria-label Next", "row": "real link"}},
    prompt: "Build a Huntington Next Footer: nav aria-label Next, margin-top 44, hairline top border, padding-top 6, containing a List Row link (title 16/600/-0.015, description 15/1.5 muted, meta 13 muted, padding 15x4). The row is a real <a>.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/next-footer.json",
    code: `import { NextFooter } from "@/components/ui/next-footer";\n\nexport function Next() {\n  return <NextFooter title="Next page" description="What comes next" meta="Next" href="#/next" />;\n}`,
  },
  {
    id: "search", name: "Search", tagline: "Type to filter a list. Arrows move, Enter follows, Escape clears.",
    anatomy: ["Input (search field, placeholder)", "Clear button (×, appears with text)", "Results (List Rows)", "Empty state (one line of text)"],
    props: [{"name": "items", "type": "Array<{ title, note, href }>", "required": true, "def": "-", "desc": "Rows to filter. Title and note are matched; href is followed on Enter."}, {"name": "placeholder", "type": "string", "required": false, "def": "“Search”", "desc": "Hint text in the empty input."}, {"name": "emptyText", "type": "string", "required": false, "def": "“No results.”", "desc": "Text shown when nothing matches."}, {"name": "onSelect", "type": "(item) => void", "required": false, "def": "follow href", "desc": "Fires when a result is chosen. Default: follow the row link."}],
    keyboard: [{"key": "Tab", "action": "Move focus into the input."}, {"key": "Type", "action": "Filter the list as you type."}, {"key": "ArrowDown / ArrowUp", "action": "Move through results."}, {"key": "Enter", "action": "Follow the focused result."}, {"key": "Escape", "action": "Clear the query."}],
    invariants: ["Filtering is client-side and immediate: every keystroke updates the list.", "Results are real List Rows: real links, same row anatomy.", "Empty state is text, never a blank list.", "Input is a real <input type=\"search\"> with a label; list is a listbox with options.", "Escape clears the query; it never closes the page."],
    contract: {"props": {"items": "Array<{ title, note, href }>", "placeholder": "string", "emptyText": "string", "onSelect": "(item) => void"}, "a11y": {"input": "combobox with label, controls the listbox", "results": "listbox, one option per result", "clear": "button with aria-label \"Clear search\""}},
    prompt: "Build a Huntington Search: a hairline search input with placeholder text, a × clear button that appears when text is present, and results as List Rows that filter as you type. ArrowDown/ArrowUp move through results, Enter follows the focused result, Escape clears the query. Empty state is one line of text. The input is a real <input type=\"search\"> with a label; the list is a listbox with options.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/search.json",
    code: `import { Search } from \"@/components/ui/search\";\n\nexport function Finder() {\n  return <Search items={[{ title: \"Header\", note: \"Wordmark left, mood control right.\", href: \"#/components/header\" }, { title: \"Menu Pill\", note: \"The floating pill that opens the menu sheet.\", href: \"#/components/menu-pill\" }]} />;\n}`,
  },
  {
    id: "calendar", name: "Calendar", tagline: "Month grid. One button per day, min/max bounds.",
    anatomy: ["Prev / Next month buttons", "Month / year heading (aria-live)", "Weekday header row (Su-Sa)", "Day buttons (one per day)", "Empty cells (outside the month)"],
    props: [{"name": "value", "type": "string | null", "required": false, "def": "-", "desc": "Selected day as an ISO date (YYYY-MM-DD), or null."}, {"name": "onChange", "type": "(iso: string) => void", "required": true, "def": "-", "desc": "Fires with the picked day's ISO string."}, {"name": "min", "type": "string", "required": false, "def": "-", "desc": "Earliest pickable day, ISO date. Earlier days are disabled."}, {"name": "max", "type": "string", "required": false, "def": "-", "desc": "Latest pickable day, ISO date. Later days are disabled."}],
    keyboard: [{"key": "Tab", "action": "Move focus between the month buttons and the day buttons."}, {"key": "Enter / Space", "action": "Pick the focused day, or move one month."}],
    invariants: ["Dates are ISO strings only (YYYY-MM-DD). No Date objects in props, no locale parsing.", "Week starts Sunday. Month and day names are English.", "The displayed month starts at the value's month, or the current month when no value is set. It follows the value when the parent passes a new date in a different month.", "Prev/next move one month and do not call onChange.", "Days outside the current month render as empty cells (no buttons).", "Days outside min/max are disabled (disabled attribute + aria-disabled).", "The selected day has a 2px ink outline, a transparent background, and its aria-label ends with ', selected'. Today has aria-current=\"date\" plus a 1px muted outline.", "Tab + Enter/Space only. No roving tabindex, no arrow-key cell movement."],
    contract: {"props": {"value": "string?", "onChange": "function", "min": "string?", "max": "string?"}, "a11y": {"grid": "semantic table + th scope=col weekday headers", "days": "one button per day, aria-label with ', selected' suffix, aria-current=date for today", "disabled": "disabled + aria-disabled for out-of-range days", "nav": "prev/next buttons with aria-labels, heading aria-live=polite"}},
    prompt: "Build a Huntington Calendar: a month grid for one ISO date (YYYY-MM-DD). Prev-month button (aria-label Previous month), month/year heading (aria-live polite), next-month button (aria-label Next month). A semantic table: weekday header row (Su Mo Tu We Th Fr Sa), one button per day, empty cells outside the month. Clicking a day calls onChange with that day's ISO string. Days outside min/max are disabled (disabled + aria-disabled). Selected day: 2px ink outline, transparent background, never filled + aria-label ending with ', selected'. Today: aria-current=date + 1px muted outline. Week starts Sunday, English names. Displayed month starts at the value's month or the current month and follows the value when the parent passes a new date in a different month; prev/next move one month and do not call onChange. ISO strings only, no locale parsing. Tab + Enter/Space only, no roving tabindex, no arrow keys.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/calendar.json",
    code: `import { Calendar } from \"@/components/ui/calendar\";\n\nexport function Pick() {\n  return <Calendar value=\"2026-10-18\" onChange={(iso) => {}} />;\n}`,
  },
  {
    id: "date-picker", name: "DatePicker", tagline: "Read-only input plus popover calendar. Clear, Today.",
    anatomy: ["Label", "Read-only input (value or placeholder)", "Calendar button (opens / closes)", "Popover (Calendar + Clear + Today)"],
    props: [{"name": "value", "type": "string | null", "required": false, "def": "-", "desc": "Selected day as an ISO date (YYYY-MM-DD), or null."}, {"name": "onChange", "type": "(iso: string | null) => void", "required": true, "def": "-", "desc": "Fires with the picked ISO string, or null on Clear."}, {"name": "label", "type": "string", "required": false, "def": "“Date”", "desc": "Label above the input."}, {"name": "placeholder", "type": "string", "required": false, "def": "“YYYY-MM-DD”", "desc": "Hint text in the empty input."}, {"name": "min", "type": "string", "required": false, "def": "-", "desc": "Earliest pickable day, ISO date."}, {"name": "max", "type": "string", "required": false, "def": "-", "desc": "Latest pickable day, ISO date."}, {"name": "clearable", "type": "boolean", "required": false, "def": "true", "desc": "Show the Clear button when a value is set."}, {"name": "invalid", "type": "boolean", "required": false, "def": "false", "desc": "Puts aria-invalid on the input. DateRangePicker uses it for the End input."}],
    keyboard: [{"key": "Tab", "action": "Move focus between the input, the Calendar button, and (when open) the popover controls."}, {"key": "Enter / Space", "action": "Toggle the popover, pick a day, Clear, or Today."}, {"key": "Escape", "action": "Close the popover and return focus to the Calendar button."}],
    invariants: ["The input is read-only. Dates come from the Calendar only, so there is no free-text parsing to get wrong.", "Invalid value prop is treated as null (empty input, Calendar shows the current month).", "Selecting a day calls onChange and closes the popover.", "Clear calls onChange(null) and closes. It only renders when clearable and a value is set.", "Today sets today's ISO and closes. Today is disabled when today is outside min/max.", "Escape closes the popover and returns focus to the Calendar button. Clicking outside the picker closes it.", "The popover is a plain div, not a dialog: no modal behavior, no focus trap.", "ISO strings only, no locale parsing."],
    contract: {"props": {"value": "string?", "onChange": "function", "label": "string", "placeholder": "string", "min": "string?", "max": "string?", "clearable": "boolean", "invalid": "boolean"}, "a11y": {"input": "read-only input with label, aria-invalid", "trigger": "button aria-label Open/Close calendar, aria-expanded, aria-controls", "popover": "div with Calendar + Clear + Today", "keyboard": "Escape closes, focus returns to trigger"}},
    prompt: "Build a Huntington DatePicker: a label + a read-only text input (value or placeholder YYYY-MM-DD) + a Calendar button (aria-label Open/Close calendar, aria-expanded, aria-controls) that toggles a popover div with a Calendar + Clear + Today. The input is read-only: dates come from the Calendar only, no free-text parsing. Selecting a day calls onChange and closes. Clear (only when clearable and a value is set) calls onChange(null) and closes. Today sets today's ISO and closes, and is disabled when today is outside min/max. Escape closes and returns focus to the button. Clicking outside the picker closes it. Invalid value prop is treated as null. ISO strings only, no locale parsing.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/date-picker.json",
    code: `import { DatePicker } from \"@/components/ui/date-picker\";\n\nexport function Pick() {\n  return <DatePicker value=\"2026-10-18\" onChange={(iso) => {}} />;\n}`,
  },
  {
    id: "time-picker", name: "TimePicker", tagline: "Trigger plus time listbox. 12-hour labels, HH:MM value.",
    anatomy: ["Label", "Trigger button (value or Select time)", "Dropdown (ul role=listbox, one option per time)"],
    props: [{"name": "value", "type": "string | null", "required": false, "def": "-", "desc": "Selected time as HH:MM (24-hour), or null."}, {"name": "onChange", "type": "(time: string | null) => void", "required": true, "def": "-", "desc": "Fires with the picked HH:MM string."}, {"name": "label", "type": "string", "required": false, "def": "“Time”", "desc": "Label above the trigger."}, {"name": "step", "type": "30 | 60", "required": false, "def": "30", "desc": "Minutes between options. Anything else falls back to 30."}],
    keyboard: [{"key": "Tab", "action": "Move focus between the trigger and (when open) the option buttons."}, {"key": "Enter / Space", "action": "Toggle the dropdown, or pick the focused option."}, {"key": "Escape", "action": "Close the dropdown and return focus to the trigger."}],
    invariants: ["Times are HH:MM 24-hour strings. The list shows 12-hour labels (12:00 AM, 1:00 PM); the value stays HH:MM.", "Options run 00:00 to 23:30 (step 30) or 23:00 (step 60).", "Invalid value prop is treated as null (trigger shows Select time, no option selected).", "A valid value that is not on the step grid still displays; no option is highlighted.", "Clicking an option calls onChange and closes.", "Escape closes and returns focus to the trigger. Clicking outside the picker closes it.", "Options are buttons. Tab moves through them, Enter selects. No arrow-key navigation."],
    contract: {"props": {"value": "string?", "onChange": "function", "label": "string", "step": "30 | 60"}, "a11y": {"trigger": "button aria-haspopup=listbox, aria-expanded, aria-controls", "list": "ul role=listbox, li role=option aria-selected", "options": "buttons, Tab navigation, Enter selects", "display": "12-hour labels, value stays HH:MM"}},
    prompt: "Build a Huntington TimePicker: a label + a trigger button (value or Select time, aria-haspopup=listbox, aria-expanded, aria-controls) that toggles a dropdown ul role=listbox. Options are li role=option aria-selected, each holding a button. Step 30 gives 48 options (00:00 to 23:30), step 60 gives 24 (00:00 to 23:00). Labels are 12-hour (12:00 AM, 1:00 PM); the value stays HH:MM 24-hour. Clicking an option calls onChange and closes. Escape closes and returns focus to the trigger. Clicking outside the picker closes it. Options are buttons: Tab moves through them, Enter selects, no arrow keys. Invalid value prop is treated as null.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/time-picker.json",
    code: `import { TimePicker } from \"@/components/ui/time-picker\";\n\nexport function Pick() {\n  return <TimePicker value=\"14:30\" onChange={(t) => {}} />;\n}`,
  },
  {
    id: "date-range-picker", name: "DateRangePicker", tagline: "Two DatePickers, one range. End-before-start is an error.",
    anatomy: ["Fieldset + legend (label)", "Start DatePicker", "End DatePicker", "Clear button", "Error message (role=alert, when invalid)"],
    props: [{"name": "start", "type": "string | null", "required": false, "def": "-", "desc": "Range start as an ISO date (YYYY-MM-DD), or null."}, {"name": "end", "type": "string | null", "required": false, "def": "-", "desc": "Range end as an ISO date (YYYY-MM-DD), or null."}, {"name": "onChange", "type": "({ start, end }) => void", "required": true, "def": "-", "desc": "Fires with the new pair on any valid change, or { start: null, end: null } on Clear."}, {"name": "label", "type": "string", "required": false, "def": "“Date range”", "desc": "Legend for the fieldset."}, {"name": "min", "type": "string", "required": false, "def": "-", "desc": "Earliest pickable day, ISO date. Passed to both DatePickers."}, {"name": "max", "type": "string", "required": false, "def": "-", "desc": "Latest pickable day, ISO date. Passed to both DatePickers."}, {"name": "clearable", "type": "boolean", "required": false, "def": "true", "desc": "Show the range Clear button when either date is set."}],
    keyboard: [{"key": "Tab", "action": "Move focus between the Start and End pickers and the Clear button."}, {"key": "Enter / Space", "action": "Toggle a popover, pick a day, or Clear."}, {"key": "Escape", "action": "Close the open popover and return focus to its Calendar button."}],
    invariants: ["The range is two DatePickers (Start, End) with no per-picker Clear buttons; one range Clear button clears both.", "Same-day ranges are valid (end on or after start).", "When end is before start, an error message (role=alert) shows and the End input gets aria-invalid. onChange is NOT called with the invalid pair; the last valid pair stays.", "A stale error clears when the parent passes a new pair.", "Clear calls onChange({ start: null, end: null }).", "ISO strings only, no locale parsing."],
    contract: {"props": {"start": "string?", "end": "string?", "onChange": "function", "label": "string", "min": "string?", "max": "string?", "clearable": "boolean"}, "a11y": {"group": "fieldset + legend", "error": "role=alert message + aria-invalid on End input, invalid pair never passed to onChange", "pickers": "two DatePickers, Start and End"}},
    prompt: "Build a Huntington DateRangePicker: a fieldset + legend (label) holding two DatePickers (Start, End, clearable false) + one range Clear button + an error message. Start and End are ISO dates (YYYY-MM-DD) or null. Changing either calls onChange with the new { start, end } pair. Same-day ranges are valid. When end is before start, show a role=alert error message and put aria-invalid on the End input; do NOT call onChange with the invalid pair; the last valid pair stays. A stale error clears when the parent passes a new pair. Clear calls onChange({ start: null, end: null }). ISO strings only, no locale parsing.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/date-range-picker.json",
    code: `import { DateRangePicker } from \"@/components/ui/date-range-picker\";\n\nexport function Pick() {\n  return <DateRangePicker start=\"2026-10-01\" end=\"2026-10-15\" onChange={(pair) => {}} />;\n}`,
  },
  {
    id: "chart", name: "Chart", tagline: "Bar, line, area, pie, donut. One series, SVG + data table.",
    anatomy: ["SVG chart (bars, line, area, or slices)", "Value axis (ticks + gridlines, bar/line/area only)", "Category axis (labels, bar/line/area only)", "Legend (pie/donut only: swatch + label + value + percent)", "Data table (caption + Label/Value, Percent for pie/donut)"],
    props: [{"name": "type", "type": "\"bar\" | \"line\" | \"area\" | \"pie\" | \"donut\"", "required": false, "def": "“bar”", "desc": "Chart type."}, {"name": "data", "type": "{ label: string, value: number }[]", "required": true, "def": "-", "desc": "One series. Values are non-negative; negatives are treated as 0."}, {"name": "title", "type": "string", "required": false, "def": "-", "desc": "Chart title. Used in the table caption and the SVG aria-label."}, {"name": "height", "type": "number", "required": false, "def": "240", "desc": "SVG height in px. Width is 100% via viewBox. Minimum 120."}, {"name": "showTable", "type": "boolean", "required": false, "def": "true", "desc": "Render the accessible data table under the chart."}],
    keyboard: [{"key": "None", "action": "Not interactive. No keyboard behavior. The data table is read with a screen reader or scrolled; it has no focusable controls."}],
    invariants: ["One series only. No multi-series, tooltips, zoom, or animation.", "Values are non-negative. Negative values are treated as 0. Empty data, all-zero data, or a zero total (pie/donut) renders 'No data.'", "Bar/line/area share one axis system: value ticks at 0, 25%, 50%, 75%, 100% of max, rounded to a clean step. Horizontal gridlines. Category labels under each point.", "Bar: vertical bars, value label on each bar. Line: polyline + dots + value labels. Area: line + filled area under the line.", "Pie: slices proportional to values, label + percent at centroids. Donut: center hole + total in the center, plus a legend (swatch + label + value + percent).", "Slice labels sit at centroids and can crowd on tiny slices. Long category labels truncate in the SVG; the full label is always in the table.", "Colors come from Huntington tokens: ink for bars/lines, live/pulse/status-active/status-offline/ink for pie slices. All fills read in all five moods.", "The SVG is presentational (role=img + aria-label, shapes aria-hidden). The data table is the accessible representation."],
    contract: {"props": {"type": ["bar", "line", "area", "pie", "donut"], "data": "array", "title": "string?", "height": "number", "showTable": "boolean"}, "a11y": {"chart": "svg role=img + aria-label, shapes aria-hidden", "table": "semantic table + caption + th scope", "color": "values in table + slice text labels, never color alone"}},
    prompt: "Build a Huntington Chart: one series, SVG + data table. Types bar, line, area, pie, donut. Bar/line/area share one axis system (value ticks at 0, 25%, 50%, 75%, 100% of max rounded to a clean step, horizontal gridlines, category labels). Bar has value labels on bars; line has a polyline + dots + value labels; area adds the fill under the line. Pie slices are proportional with label + percent at centroids; donut adds a center hole + total in the center, plus a legend (swatch + label + value + percent). Colors from Huntington tokens: ink for bars/lines, live/pulse/status-active/status-offline/ink for pie slices. The SVG is role=img + a one-line summary aria-label, shapes aria-hidden; the semantic table (caption + th scope, Percent column for pie/donut) is the accessible representation. One series only, no tooltips, zoom, or animation. Empty, all-zero, or zero-total data renders 'No data.' Slice labels can crowd on tiny slices; long labels truncate in the SVG, full label in the table.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/chart.json",
    code: `import { Chart } from \"@/components/ui/chart\";\n\nexport function Sales() {\n  const data = [{ label: \"Jan\", value: 42 }, { label: \"Feb\", value: 87 }, { label: \"Mar\", value: 15 }, { label: \"Apr\", value: 63 }];\n  return <Chart type=\"bar\" data={data} title=\"Sales\" />;\n}`,
  },
  {
    id: "data-grid", name: "DataGrid", tagline: "Sortable, filterable, pageable data grid.",
    anatomy: ["Toolbar (Export CSV + selected count)", "Header row (sort buttons + pin toggles)", "Filter row (per-column inputs)", "Group header (collapsible, when groupBy)", "Data rows (cells + selection checkbox)", "Pagination (prev/next, page indicator, page-size selector)"],
    props: [{"name": "columns", "type": "{ key, label, sortable?, width?, align? }[]", "required": true, "def": "-", "desc": "Column definitions. align is left, right, or center."}, {"name": "rows", "type": "object[]", "required": true, "def": "-", "desc": "Rows, keyed by column key."}, {"name": "rowKey", "type": "string", "required": false, "def": "“id”", "desc": "Unique key field for selection and identity."}, {"name": "pageSize", "type": "number", "required": false, "def": "10", "desc": "Rows per page. Selector offers 10, 25, 50, 100."}, {"name": "selectable", "type": "boolean", "required": false, "def": "false", "desc": "Enables row selection with checkboxes."}, {"name": "groupBy", "type": "string", "required": false, "def": "-", "desc": "Column key to group rows by."}, {"name": "initialSort", "type": "{ key, direction: asc | desc }", "required": false, "def": "-", "desc": "Initial sort. Click a header to cycle asc, desc, none."}],
    keyboard: [{"key": "Tab", "action": "Move through sort buttons, filter inputs, pin toggles, checkboxes, group toggles, pagination, and export."}, {"key": "Enter / Space", "action": "On a sort button: cycle asc, desc, none. On a checkbox: toggle selection. On a pin toggle: pin or unpin. On a group toggle: collapse or expand."}, {"key": "Type", "action": "Filter inputs filter that column by substring, case-insensitive."}],
    invariants: ["Semantic table: caption with row count, thead, tbody, th scope col, first column th scope row. No role grid, no roving tabindex, no arrow-key navigation.", "Sort: button in th cycles asc, desc, none; aria-sort on th. Only columns with sortable not false sort. Sorting resets to page 1.", "Filter: per-column text input in the filter row, substring match, case-insensitive. Filtering resets to page 1. A filter that matches nothing renders a live-red message, never a blank table.", "Pagination: prev/next, Page X of Y, page-size selector 10, 25, 50, 100. Only the current page renders. Pagination is the virtualization; there is no separate virtualized scroll window. Page-size changes reset to page 1.", "Selection (selectable): checkbox column, header select-all, aria-selected on rows, N selected count (aria-live polite). Selection persists across pages.", "Pinning: pin toggle in th, aria-pressed, pinned columns render first with position sticky left and a card background. At least one column stays unpinned.", "Grouping (groupBy): filter, then group, then sort within groups. Group header button with aria-expanded plus count. Collapsed groups hide their rows but still occupy page slots, so a collapsed group can leave a page short. Grouping changes reset to page 1.", "CSV export: Export CSV downloads the filtered plus sorted set (before pagination) as a .csv file, commas, quotes, and newlines escaped.", "Selected rows: check plus ink outline plus aria-selected, never a fill, never color alone.", "Controls are outlined: Export, Previous, Next, and the page-size select use hairline borders and card backgrounds. Selected and pinned states use ink outlines and underlines, never fills."],
    contract: {"props": {"columns": "array", "rows": "array", "rowKey": "string", "pageSize": "number", "selectable": "boolean", "groupBy": "string?", "initialSort": "object?"}, "a11y": {"table": "semantic table + caption + th scope", "sort": "button in th + aria-sort", "filter": "input + aria-label", "select": "checkbox + aria-selected", "group": "button + aria-expanded", "pin": "button + aria-pressed"}},
    prompt: "Build a Huntington DataGrid: semantic table with caption, sort buttons in th with aria-sort cycling asc, desc, none, per-column filter inputs in a filter row, pagination with Page X of Y plus page-size 10/25/50/100 (only the current page renders), selectable checkboxes with aria-selected plus N selected count, pin toggles with aria-pressed (pinned columns render first, sticky left, card background, at least one column stays unpinned), collapsible group headers with aria-expanded plus count (collapsed groups hide their rows but still occupy page slots), grouping changes reset to page 1, CSV export of the filtered plus sorted set with commas, quotes, and newlines escaped. Selected rows use a check plus ink outline plus aria-selected, never a fill, never color alone. Controls are outlined hairline plus card, never filled. Pagination is the virtualization; do not claim a separate virtualized scroll window. No role grid, no roving tabindex, no arrow keys.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/data-grid.json",
    code: `import { DataGrid } from \"@/components/ui/data-grid\";\n\nexport function Grid() {\n  const columns = [{ key: \"name\", label: \"Name\", sortable: true }, { key: \"status\", label: \"Status\" }];\n  const rows = [{ id: \"1\", name: \"Item A\", status: \"Open\" }, { id: \"2\", name: \"Item B\", status: \"Done\" }];\n  return <DataGrid columns={columns} rows={rows} selectable />;\n}`,
  }
]);
