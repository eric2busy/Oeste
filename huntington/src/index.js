// Oeste Design System — Huntington theme (v0.2.0)
// React + Tailwind components, copy-paste ready.
// Requires: React 18+ in scope, Tailwind with arbitrary values, JSX transform.
// Tokens in this file MUST match src/tokens.json and src/tokens.css exactly.
// Demos are local only — no network, no auth, no data storage.
// 40 components: 37 from the Figma plugin v1.0.3 (44 built nodes, 4 variant
// sets: Photo Card x4, Filter Pill x2, Status Pill x3, Reaction Button x2)
// plus Toggle Tabs and Next Footer, added from the live site in v0.2.0,
// plus Search, added in v0.2.0 for consumers who need to filter a list.
// One form control (Search). No filled primary button, no toast — the
// source has none. Props are content slots derived from the Figma builders.

export const DESIGN_TOKENS = Object.freeze({"name": "oeste-huntington", "version": "0.2.0", "defaultMood": "paper", "moods": ["paper", "ink", "rose", "sage", "dune"], "color": {"moods": {"paper": {"paper": "#f6f4f1", "card": "#fffdf9", "ink": "#1c1917", "body": "rgba(28,25,23,0.86)", "muted": "#78716c", "line": "rgba(28,25,23,0.1)"}, "ink": {"paper": "#151412", "card": "#1e1d1b", "ink": "#f0ede8", "body": "rgba(240,237,232,0.86)", "muted": "#a09a93", "line": "rgba(240,237,232,0.14)"}, "rose": {"paper": "#f8efeb", "card": "#fffbf9", "ink": "#2a211d", "body": "rgba(42,33,29,0.86)", "muted": "#a08a80", "line": "rgba(42,33,29,0.1)"}, "sage": {"paper": "#edf0ea", "card": "#fbfdfa", "ink": "#1d211c", "body": "rgba(29,33,28,0.86)", "muted": "#7d857c", "line": "rgba(29,33,28,0.1)"}, "dune": {"paper": "#f3e9d7", "card": "#faf3e4", "ink": "#2b2114", "body": "rgba(43,33,20,0.86)", "muted": "#a08c66", "line": "rgba(43,33,20,0.12)"}}, "accents": {"live": "#e5484d", "pulse": "#1a73e8", "statusActive": "#34d399", "statusIdle": "#60a5fa", "statusOffline": "#fbbf24", "amountUp": "#34d399", "amountDown": "#f87171", "orbDefault": "#ff6b1a", "orbBlue": "#7aa2d9", "orbRose": "#d9b5a3", "orbGreen": "#9dc08b", "white": "#ffffff", "logoCardDark": "#141210"}, "lightboxBg": "rgba(8,8,8,0.95)", "menuscrim": "rgba(0,0,0,0.18)", "photoGradients": {"default": ["#0e0f10", "#1d1e20", "#2b1f11"], "blue": ["#101418", "#1a2230", "#24344d"], "rose": ["#140f0e", "#241a17", "#3d2a22"], "green": ["#0e120e", "#1a241a", "#2a3d2a"]}}, "radius": {"card": "14px", "logocard": "18px", "carouselImage": "14px", "gridArt": "10px", "progressbar": "2px", "menusheetTop": "22px", "pill": "999px", "photo": "14px", "tile": "14px"}, "shadow": {"card": "none (hairline border instead)", "menupill": "0 8px 24px rgba(0,0,0,0.14)", "menusheet": "0 -18px 50px rgba(0,0,0,0.16)"}, "space": {"scale": {"s0": "0px", "s2": "2px", "s3": "3px", "s4": "4px", "s6": "6px", "s7": "7px", "s8": "8px", "s9": "9px", "s10": "10px", "s12": "12px", "s14": "14px", "s16": "16px", "s18": "18px", "s20": "20px", "s22": "22px", "s28": "28px", "s40": "40px", "s44": "44px", "s64": "64px", "s80": "80px"}, "layout": {"maxWidth": "672px", "pagePaddingBottom": "64px", "sectionPaddingTop": "44px", "sidePadding": "20px", "sidePaddingWide": "0px"}}, "type": {"fontFamily": "Manrope, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", "weightRange": "400-800 (variable font, no italics)", "styles": {"h1": {"size": "31px", "weight": 700, "leading": 1.22, "tracking": "-0.03em"}, "lede": {"size": "26px", "weight": 500, "leading": 1.28, "tracking": "-0.025em"}, "ledeWide": {"size": "34px", "weight": 500, "leading": 1.28, "tracking": "-0.025em"}, "ptitle": {"size": "26px", "weight": 600, "leading": 1.28, "tracking": "-0.025em"}, "body": {"size": "16px", "weight": 400, "leading": 1.65, "tracking": "0em"}, "hsub": {"size": "16px", "weight": 400, "leading": 1.65, "tracking": "0em"}, "secTitle": {"size": "17px", "weight": 700, "leading": 1.0, "tracking": "-0.01em"}, "secTitleNote": {"size": "13px", "weight": 500, "leading": 1.0, "tracking": "0em"}, "irowTitle": {"size": "16px", "weight": 600, "leading": 1.0, "tracking": "-0.015em"}, "irowDesc": {"size": "15px", "weight": 400, "leading": 1.5, "tracking": "0em"}, "irowMeta": {"size": "13px", "weight": 400, "leading": 1.0, "tracking": "0em"}, "statusValue": {"size": "15.5px", "weight": 800, "leading": 1.0, "tracking": "-0.01em"}, "statusValuePlain": {"size": "15.5px", "weight": 400, "leading": 1.0, "tracking": "-0.01em"}, "wordmark": {"size": "17px", "weight": 800, "leading": 1.0, "tracking": "-0.02em"}, "plabel": {"size": "12px", "weight": 500, "leading": 1.0, "tracking": "0.06em"}, "tag": {"size": "11px", "weight": 600, "leading": 1.0, "tracking": "0.08em"}, "menuSheetRowTitle": {"size": "17px", "weight": 700, "leading": 1.0, "tracking": "-0.015em"}, "footer": {"size": "13px", "weight": 400, "leading": 1.7, "tracking": "0em"}, "backLink": {"size": "13px", "weight": 400, "leading": 1.0, "tracking": "0em"}, "meta": {"size": "13px", "weight": 400, "leading": 1.0, "tracking": "0em"}}}, "breakpoint": {"narrow": "0-699px", "wide": "700px+"}, "touchMin": "44px", "motion": {"moodPulse": "1.1s scale pulse on mood change (audit)", "liveBlink": "LIVE dot blinks (audit)", "pulseRing": "2.4s ping (audit)", "equalizer": "staggered scaleY (audit)", "accordion": "300px max-height transition (audit)", "mediaDrift": "26s scale drift (audit)", "progressPulse": "fill opacity pulse while charging (audit)", "reducedMotion": "no animation"}, "notes": "Single token source of truth. Must match src/tokens.css and DESIGN_TOKENS in src/index.js. Default mood is Paper. Muted text does NOT meet WCAG AA 4.5:1 on paper in Rose (2.88), Sage (3.31), Dune (2.71), or Paper (4.37) — see Accessibility. Logo Card radius is 18px per these tokens + the audit; the Figma plugin builder used 14px."});

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
    props: [{"name": "items", "type": "Array<{ title, note, href }>", "required": true, "def": "—", "desc": "Rows to filter. Title and note are matched; href is followed on Enter."}, {"name": "placeholder", "type": "string", "required": false, "def": "“Search”", "desc": "Hint text in the empty input."}, {"name": "emptyText", "type": "string", "required": false, "def": "“No results.”", "desc": "Text shown when nothing matches."}, {"name": "onSelect", "type": "(item) => void", "required": false, "def": "follow href", "desc": "Fires when a result is chosen. Default: follow the row link."}],
    keyboard: [{"key": "Tab", "action": "Move focus into the input."}, {"key": "Type", "action": "Filter the list as you type."}, {"key": "ArrowDown / ArrowUp", "action": "Move through results."}, {"key": "Enter", "action": "Follow the focused result."}, {"key": "Escape", "action": "Clear the query."}],
    invariants: ["Filtering is client-side and immediate: every keystroke updates the list.", "Results are real List Rows: real links, same row anatomy.", "Empty state is text, never a blank list.", "Input is a real <input type=\"search\"> with a label; list is a listbox with options.", "Escape clears the query; it never closes the page."],
    contract: {"props": {"items": "Array<{ title, note, href }>", "placeholder": "string", "emptyText": "string", "onSelect": "(item) => void"}, "a11y": {"input": "combobox with label, controls the listbox", "results": "listbox, one option per result", "clear": "button with aria-label \"Clear search\""}},
    prompt: "Build a Huntington Search: a hairline search input with placeholder text, a × clear button that appears when text is present, and results as List Rows that filter as you type. ArrowDown/ArrowUp move through results, Enter follows the focused result, Escape clears the query. Empty state is one line of text. The input is a real <input type=\"search\"> with a label; the list is a listbox with options.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/huntington/r/search.json",
    code: `import { Search } from \"@/components/ui/search\";\n\nexport function Finder() {\n  return <Search items={[{ title: \"Header\", note: \"Wordmark left, mood control right.\", href: \"#/components/header\" }, { title: \"Menu Pill\", note: \"The floating pill that opens the menu sheet.\", href: \"#/components/menu-pill\" }]} />;\n}`,
  }
]);
