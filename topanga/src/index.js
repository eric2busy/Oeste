// Oeste Design System — Topanga theme (v0.4.8)
// React + Tailwind primitives, copy-paste ready.
// Requires: React 18+ in scope, Tailwind with dark: variant, JSX transform.
// Tokens in this file MUST match src/tokens.json and src/tokens.css exactly.
// Demos are local only — no network, no auth, no data storage.

export const DESIGN_TOKENS = Object.freeze({
  name: "oeste-topanga",
  version: "0.4.8",
  color: {
    light: {
      bg: "#F6F4F1", surface: "#FCFAF7", text: "#1C1917", muted: "#706963",
      border: "rgba(28,25,23,0.10)", accent: "#C47D3B", onAccent: "#1C1917",
      accentAlt: "#5E6B5A", rust: "#B85B35", danger: "#A83E22",
      success: "#2F6B3A", warning: "#7A5A12", focus: "#1C1917",
    },
    dark: {
      bg: "#121110", surface: "#1C1917", text: "#F5F3EF", muted: "#9E968F",
      border: "rgba(245,243,239,0.10)", accent: "#DB914E", onAccent: "#1C1917",
      accentAlt: "#8B9B87", rust: "#D98A63", danger: "#E07A52",
      success: "#6BA368", warning: "#D9A441", focus: "#F5F3EF",
    },
  },
  fonts: {
    body: '"Manrope", Arial, Helvetica, sans-serif',
    display: '"Manrope", Arial, Helvetica, sans-serif',
    mono: '"JetBrains Mono", Consolas, monospace',
    weightDisplay: 700,
    weightHeading: 500,
  },
  tracking: { display: "-0.06em", heading: "-0.025em" },
  leading: { display: 1.1, title: 1.1, heading: 1.25, body: 1.55, label: 1.5 },
  type: {
    display: "2.5rem (<480px) · 3rem (≥480px) · 4.5rem (≥720px)", title: "clamp(1.75rem, 4vw, 2.5rem)",
    heading: "clamp(1.25rem, 2.5vw, 1.5rem)", body: "1rem",
    label: "0.875rem", caption: "0.75rem", mono: "0.75rem",
  },
  space: { xs: "4px", sm: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "32px", "3xl": "40px", "4xl": "48px", "5xl": "64px" },
  radius: { sm: "4px", md: "8px", lg: "12px", pill: "999px" },
  motion: { in: "180ms", out: "140ms", easing: "cubic-bezier(0.16,1,0.3,1)", reducedMotion: "no animation" },
  touchMin: "44px",
});

const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1917] dark:focus-visible:outline-[#f5f3ef]";
const TOUCH = "min-h-11";

/* ---------------- Button ---------------- */

const BUTTON_VARIANTS = {
  primary: "bg-[#c47d3b] text-[#1c1917] hover:opacity-90 dark:bg-[#db914e] dark:text-[#1c1917]",
  secondary: "border border-[#1c1917]/20 bg-transparent text-[#1c1917] hover:bg-[#1c1917]/5 dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] dark:hover:bg-[#f5f3ef]/5",
  ghost: "bg-transparent text-[#1c1917] hover:bg-[#1c1917]/5 dark:text-[#f5f3ef] dark:hover:bg-[#f5f3ef]/5",
  danger: "bg-[#a83e22] text-[#f6f4f1] hover:opacity-90 dark:bg-[#e07a52] dark:text-[#121110]",
};
const BUTTON_SIZES = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-3.5 text-lg",
};

export function Button({ children, variant = "primary", size = "md", disabled = false, loading = false, type = "button", onClick, icon = null }) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading || undefined}
      className={`${TOUCH} inline-flex items-center justify-center gap-2 rounded-md font-semibold disabled:cursor-not-allowed disabled:opacity-50 ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${FOCUS}`}
    >
      {loading ? <span aria-hidden="true">…</span> : icon}
      {children}
    </button>
  );
}

/* ---------------- Input / Textarea / Select ---------------- */

const FIELD = "min-h-11 w-full rounded-md border border-[#1c1917]/20 bg-transparent px-3 py-3 text-[#1c1917] placeholder:text-[#706963] dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] dark:placeholder:text-[#9e968f]";

export function Input({ label, value, onChange, error, disabled = false, hint, id: idProp, ...rest }) {
  const autoId = React.useId();
  const id = idProp || autoId;
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">{label}</label>
      <input
        id={id} value={value} onChange={onChange} disabled={disabled}
        aria-invalid={!!error} aria-describedby={[errorId, hintId].filter(Boolean).join(" ") || undefined}
        className={`${FIELD} ${error ? "border-[#a83e22] dark:border-[#e07a52]" : ""} disabled:opacity-50 ${FOCUS}`} {...rest}
      />
      {hint && !error && <p id={hintId} className="mt-2 text-sm text-[#706963] dark:text-[#9e968f]">{hint}</p>}
      {error && <p id={errorId} role="status" className="mt-2 text-sm text-[#a83e22] dark:text-[#e07a52]">{error}</p>}
    </div>
  );
}

export function Textarea({ label, value, onChange, error, disabled = false, rows = 4, id: idProp, ...rest }) {
  const autoId = React.useId();
  const id = idProp || autoId;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">{label}</label>
      <textarea
        id={id} value={value} onChange={onChange} disabled={disabled} rows={rows}
        aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined}
        className={`${FIELD} min-h-24 resize-y disabled:opacity-50 ${FOCUS}`} {...rest}
      />
      {error && <p id={`${id}-error`} role="status" className="mt-2 text-sm text-[#a83e22] dark:text-[#e07a52]">{error}</p>}
    </div>
  );
}

export function Select({ label, value, onChange, options = [], disabled = false, id: idProp, ...rest }) {
  const autoId = React.useId();
  const id = idProp || autoId;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">{label}</label>
      <select
        id={id} value={value} onChange={onChange} disabled={disabled}
        className={`${FIELD} disabled:opacity-50 ${FOCUS}`} {...rest}
      >
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

/* ---------------- Dialog ---------------- */

export function Dialog({ open = false, onOpenChange, title, description, children }) {
  const ref = React.useRef(null);
  const trigger = React.useRef(null);
  const id = React.useId();
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (open && !node.open) { trigger.current = document.activeElement; node.showModal(); }
    else if (!open && node.open) node.close();
  }, [open ]);
  return (
    <dialog
      ref={ref} aria-modal="true" aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`}
      onCancel={() => onOpenChange(false)}
      onClose={() => { onOpenChange(false); trigger.current?.focus(); }}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-xl border border-[#1c1917]/10 bg-[#f6f4f1] p-8 text-[#1c1917] shadow-[0_16px_64px_rgba(28,25,23,0.16)] backdrop:bg-black/30 dark:border-[#f5f3ef]/10 dark:bg-[#121110] dark:text-[#f5f3ef]"
    >
      <h2 id={`${id}-title`} className="text-2xl font-medium">{title}</h2>
      <p id={`${id}-description`} className="mt-3 text-sm text-[#706963] dark:text-[#9e968f]">{description}</p>
      <div className="mt-6">{children}</div>
      <button type="button" onClick={() => onOpenChange(false)} className={`${TOUCH} mt-6 rounded-md border border-[#1c1917]/20 px-4 dark:border-[#f5f3ef]/20 ${FOCUS}`}>Close dialog</button>
    </dialog>
  );
}

/* ---------------- Card ---------------- */

export function Card({ title, children, headingLevel = 3 }) {
  const id = React.useId();
  const Heading = `h${headingLevel}`;
  return (
    <section aria-labelledby={id} className="rounded-lg border border-[#1c1917]/10 bg-[#fcfaf7] p-6 text-[#1c1917] shadow-[0_1px_2px_rgba(28,25,23,0.06)] dark:border-[#f5f3ef]/10 dark:bg-[#1c1917] dark:text-[#f5f3ef]">
      <Heading id={id} className="text-xl font-medium">{title}</Heading>
      <div className="mt-3">{children}</div>
    </section>
  );
}

/* ---------------- Tabs ---------------- */

export function Tabs({ items, defaultIndex = 0 }) {
  const [active, setActive] = React.useState(defaultIndex);
  const id = React.useId();
  const refs = React.useRef([]);
  function move(event, index) {
    const last = items.length - 1;
    const next = { ArrowRight: (index + 1) % items.length, ArrowLeft: (index + last) % items.length, Home: 0, End: last }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }
  return (
    <div>
      <div role="tablist" aria-label="Content views" className="flex flex-wrap gap-2 border-b border-[#1c1917]/10 pb-2 dark:border-[#f5f3ef]/10">
        {items.map((item, index) => (
          <button
            key={index} ref={(n) => { refs.current[index] = n; }}
            id={`${id}-tab-${index}`} role="tab" type="button"
            aria-selected={active === index} aria-controls={`${id}-panel-${index}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)} onKeyDown={(e) => move(e, index)}
            className={`${TOUCH} rounded-md border px-4 ${active === index ? "border-[#1c1917]/30 bg-[#1c1917]/5 dark:border-[#f5f3ef]/30 dark:bg-[#f5f3ef]/5" : "border-transparent"} ${FOCUS}`}
          >{item.label}</button>
        ))}
      </div>
      {items.map((item, index) => (
        <div key={index} id={`${id}-panel-${index}`} role="tabpanel" aria-labelledby={`${id}-tab-${index}`} hidden={active !== index} tabIndex={0} className="pt-4">{item.content}</div>
      ))}
    </div>
  );
}

/* ---------------- Toast (clean single card, no rounded split) ---------------- */

export function Toast({ message, open = false, onDismiss }) {
  if (!open) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 flex max-w-[calc(100%-3rem)] items-start gap-3 rounded-lg border border-[#1c1917]/10 bg-[#f6f4f1] p-4 text-[#1c1917] shadow-[0_16px_64px_rgba(28,25,23,0.16)] dark:border-[#f5f3ef]/10 dark:bg-[#121110] dark:text-[#f5f3ef]" role="status" aria-live="polite" aria-atomic="true">
      <p className="flex-1">{message}</p>
      <button type="button" onClick={onDismiss} className={`${TOUCH} shrink-0 rounded-md border border-[#1c1917]/20 px-3 text-sm dark:border-[#f5f3ef]/20 ${FOCUS}`}>Dismiss</button>
    </div>
  );
}

/* ---------------- Badge / Checkbox / Switch (new in v0.1.0) ---------------- */

const BADGE_TONES = {
  neutral: "border-[#1c1917]/20 text-[#1c1917] dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef]",
  accent: "border-[#c47d3b]/40 bg-[#c47d3b]/10 text-[#1c1917] dark:border-[#db914e]/40 dark:bg-[#db914e]/10 dark:text-[#f5f3ef]",
  success: "border-[#2f6b3a]/40 bg-[#2f6b3a]/10 text-[#2f6b3a] dark:border-[#6ba368]/40 dark:bg-[#6ba368]/10 dark:text-[#6ba368]",
  danger: "border-[#a83e22]/40 bg-[#a83e22]/10 text-[#a83e22] dark:border-[#e07a52]/40 dark:bg-[#e07a52]/10 dark:text-[#e07a52]",
};

export function Badge({ children, tone = "neutral" }) {
  return <span className={`inline-flex min-h-8 items-center rounded-full border px-3 py-1 text-xs font-semibold ${BADGE_TONES[tone]}`}>{children}</span>;
}

export function Checkbox({ label, checked, onChange, disabled = false, description, id: idProp }) {
  const autoId = React.useId();
  const id = idProp || autoId;
  return (
    <div className="flex items-start gap-3">
      <input id={id} type="checkbox" checked={checked} onChange={onChange} disabled={disabled}
        aria-describedby={description ? `${id}-desc` : undefined}
        className={`mt-1 h-5 w-5 shrink-0 accent-[#c47d3b] disabled:opacity-50 ${FOCUS}`} />
      <div>
        <label htmlFor={id} className="text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">{label}</label>
        {description && <p id={`${id}-desc`} className="mt-1 text-sm text-[#706963] dark:text-[#9e968f]">{description}</p>}
      </div>
    </div>
  );
}

export function Switch({ label, checked, onChange, disabled = false, description, id: idProp }) {
  const autoId = React.useId();
  const id = idProp || autoId;
  return (
    <div className="flex items-start gap-3">
      <button id={id} type="button" role="switch" aria-checked={checked} disabled={disabled}
        aria-describedby={description ? `${id}-desc` : undefined} onClick={() => onChange(!checked)}
        className={`relative mt-0.5 h-7 w-12 shrink-0 rounded-full border transition-colors disabled:opacity-50 ${checked ? "bg-[#c47d3b] border-[#c47d3b] dark:bg-[#db914e] dark:border-[#db914e]" : "bg-transparent border-[#1c1917]/30 dark:border-[#f5f3ef]/30"} ${FOCUS}`}>
        <span aria-hidden="true" className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[#1c1917] transition-all dark:bg-[#f5f3ef] ${checked ? "left-6" : "left-1"}`} />
      </button>
      <div>
        <label htmlFor={id} className="cursor-pointer text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]" onClick={() => !disabled && onChange(!checked)}>{label}</label>
        {description && <p id={`${id}-desc`} className="mt-1 text-sm text-[#706963] dark:text-[#9e968f]">{description}</p>}
      </div>
    </div>
  );
}


/* ---------------- Alert ---------------- */

const ALERT_TONES = {
  info: "border-[#1c1917]/20 bg-[#1c1917]/5 text-[#1c1917] dark:border-[#f5f3ef]/20 dark:bg-[#f5f3ef]/5 dark:text-[#f5f3ef]",
  success: "border-[#2f6b3a]/40 bg-[#2f6b3a]/10 text-[#2f6b3a] dark:border-[#6ba368]/40 dark:bg-[#6ba368]/10 dark:text-[#6ba368]",
  warning: "border-[#7a5a12]/40 bg-[#7a5a12]/10 text-[#7a5a12] dark:border-[#d9a441]/40 dark:bg-[#d9a441]/10 dark:text-[#d9a441]",
  danger: "border-[#a83e22]/40 bg-[#a83e22]/10 text-[#a83e22] dark:border-[#e07a52]/40 dark:bg-[#e07a52]/10 dark:text-[#e07a52]",
};

export function Alert({ children, tone = "info", role = "status", onDismiss }) {
  return (
    <div role={role} className={`flex items-start gap-3 rounded-lg border p-4 ${ALERT_TONES[tone]}`}>
      <p className="flex-1">{children}</p>
      {onDismiss && <button type="button" onClick={onDismiss} className={`${TOUCH} shrink-0 rounded-md border border-current px-3 text-sm ${FOCUS}`}>Dismiss</button>}
    </div>
  );
}

/* ---------------- Accordion ---------------- */

export function Accordion({ items, allowMultiple = false }) {
  const id = React.useId();
  const [open, setOpen] = React.useState([]);
  const toggle = (i) => setOpen((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : (allowMultiple ? [...prev, i] : [i]));
  return (
    <div className="divide-y divide-[#1c1917]/10 dark:divide-[#f5f3ef]/10">
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={i}>
            <h3 className="m-0">
              <button type="button" aria-expanded={isOpen} aria-controls={`${id}-panel-${i}`} id={`${id}-trigger-${i}`} onClick={() => toggle(i)}
                className={`${TOUCH} flex w-full items-center justify-between gap-3 py-3 text-left font-medium text-[#1c1917] dark:text-[#f5f3ef] ${FOCUS}`}>
                {item.title}<span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div id={`${id}-panel-${i}`} role="region" aria-labelledby={`${id}-trigger-${i}`} hidden={!isOpen} className="pb-4 text-[#1c1917] dark:text-[#f5f3ef]">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- RadioGroup ---------------- */

export function RadioGroup({ legend, name, options = [], value, onChange }) {
  return (
    <fieldset className="m-0 border-0 p-0">
      <legend className="mb-2 text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">{legend}</legend>
      {options.map((o) => (
        <label key={o.value} htmlFor={`${name}-${o.value}`} className="flex cursor-pointer items-start gap-3 py-2 text-[#1c1917] dark:text-[#f5f3ef]">
          <input id={`${name}-${o.value}`} type="radio" name={name} value={o.value} checked={value === o.value} onChange={() => onChange(o.value)}
            className={`mt-1 h-5 w-5 shrink-0 accent-[#c47d3b] ${FOCUS}`} />
          <span><span className="block text-sm font-medium">{o.label}</span>{o.description && <span className="mt-0.5 block text-sm text-[#706963] dark:text-[#9e968f]">{o.description}</span>}</span>
        </label>
      ))}
    </fieldset>
  );
}

/* ---------------- Progress ---------------- */

export function Progress({ value, min = 0, max = 100, label }) {
  const clamped = Math.min(max, Math.max(min, value));
  const pct = max === min ? 0 : Math.round(((clamped - min) / (max - min)) * 100);
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">{label} — {pct}%</p>
      <div role="progressbar" aria-valuenow={clamped} aria-valuemin={min} aria-valuemax={max} aria-label={label}
        className="h-2.5 overflow-hidden rounded-full bg-[#1c1917]/10 dark:bg-[#f5f3ef]/10">
        <div className="h-full rounded-full bg-[#c47d3b] dark:bg-[#db914e]" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/* ---------------- Avatar ---------------- */

export function Avatar({ src, name, alt, size = "md" }) {
  const initials = name.split(/\s+/).map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const [failed, setFailed] = React.useState(false);
  const dims = size === "lg" ? "h-16 w-16 text-lg" : "h-11 w-11 text-sm";
  return (
    <span title={name} role="img" aria-label={name}
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#c47d3b] font-bold text-[#1c1917] dark:bg-[#db914e] dark:text-[#1c1917] ${dims}`}>
      {src && !failed
        ? <img src={src} alt={alt || name} onError={() => setFailed(true)} className="h-full w-full object-cover" />
        : <span aria-hidden="true">{initials}</span>}
    </span>
  );
}

/* ---------------- Separator ---------------- */

export function Separator({ orientation = "horizontal", decorative = true }) {
  if (orientation === "vertical") {
    return decorative
      ? <span aria-hidden="true" className="inline-block w-px self-stretch bg-[#1c1917]/10 dark:bg-[#f5f3ef]/10" />
      : <span role="separator" aria-orientation="vertical" className="inline-block w-px self-stretch bg-[#1c1917]/10 dark:bg-[#f5f3ef]/10" />;
  }
  return decorative
    ? <hr aria-hidden="true" className="my-4 border-0 border-t border-[#1c1917]/10 dark:border-[#f5f3ef]/10" />
    : <hr role="separator" aria-orientation="horizontal" className="my-4 border-0 border-t border-[#1c1917]/10 dark:border-[#f5f3ef]/10" />;
}

/* ---------------- Slider ---------------- */

export function Slider({ label, value, onChange, min = 0, max = 100, step = 1, id: idProp }) {
  const autoId = React.useId();
  const id = idProp || autoId;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">{label}</label>
      <input id={id} type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={`${value} of ${max}`}
        className={`w-full accent-[#c47d3b] ${FOCUS}`} />
      <p className="mt-2 text-sm text-[#706963] dark:text-[#9e968f]" aria-live="polite">{label}: {value}</p>
    </div>
  );
}

/* ---------------- Tooltip ---------------- */

export function Tooltip({ children, content, side = "top" }) {
  const [open, setOpen] = React.useState(false);
  const id = React.useId();
  return (
    <span className="relative inline-block"
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {React.cloneElement(React.Children.only(children), {
        "aria-describedby": id,
        onFocus: () => setOpen(true),
        onBlur: () => setOpen(false),
        onKeyDown: (e) => { if (e.key === "Escape") setOpen(false); },
      })}
      {open && (
        <span role="tooltip" id={id}
          className={`absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1c1917] px-3 py-2 text-xs text-[#f6f4f1] dark:bg-[#f5f3ef] dark:text-[#121110] ${side === "top" ? "bottom-full mb-2" : "top-full mt-2"}`}>
          {content}
        </span>
      )}
    </span>
  );
}

/* ---------------- Popover ---------------- */

export function Popover({ children, label }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const triggerRef = React.useRef(null);
  const id = React.useId();
  React.useEffect(() => {
    if (!open) return;
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target) && !triggerRef.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") { setOpen(false); triggerRef.current?.focus(); } };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("keydown", onKey); };
  }, [open ]);
  const [trigger, ...rest] = React.Children.toArray(children);
  return (
    <span className="relative inline-block">
      <span ref={triggerRef}>
        {React.cloneElement(trigger, { "aria-expanded": open, "aria-controls": id, onClick: () => setOpen((v) => !v) })}
      </span>
      {open && (
        <span ref={ref} id={id} role="group" aria-label={label}
          className="absolute left-0 top-full z-10 mt-2 min-w-60 rounded-lg border border-[#1c1917]/10 bg-[#fcfaf7] p-4 text-[#1c1917] shadow-[0_16px_64px_rgba(28,25,23,0.16)] dark:border-[#f5f3ef]/10 dark:bg-[#1c1917] dark:text-[#f5f3ef]">
          {rest}
        </span>
      )}
    </span>
  );
}

/* ---------------- Dropdown Menu ---------------- */

export function DropdownMenu({ children, label, items = [] }) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const ref = React.useRef(null);
  const triggerRef = React.useRef(null);
  const id = React.useId();
  const close = () => { setOpen(false); triggerRef.current?.focus(); };
  React.useEffect(() => {
    if (!open) return;
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target) && !triggerRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open ]);
  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => (a + 1) % items.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => (a + items.length - 1) % items.length); }
    else if (e.key === "Escape") { close(); }
    else if (e.key === "Home") { e.preventDefault(); setActive(0); }
    else if (e.key === "End") { e.preventDefault(); setActive(items.length - 1); }
  };
  return (
    <span className="relative inline-block">
      <span ref={triggerRef}>
        {React.cloneElement(React.Children.only(children), {
          "aria-haspopup": "menu", "aria-expanded": open, "aria-controls": id,
          onClick: () => { setOpen((v) => !v); setActive(0); },
          onKeyDown: (e) => { if (["ArrowDown", "Enter", " "].includes(e.key)) { e.preventDefault(); setOpen(true); setActive(0); } },
        })}
      </span>
      {open && (
        <ul ref={ref} id={id} role="menu" aria-label={label} onKeyDown={onKeyDown}
          className="absolute left-0 top-full z-10 mt-2 min-w-50 list-none rounded-lg border border-[#1c1917]/10 bg-[#fcfaf7] p-2 text-[#1c1917] shadow-[0_16px_64px_rgba(28,25,23,0.16)] dark:border-[#f5f3ef]/10 dark:bg-[#1c1917] dark:text-[#f5f3ef]">
          {items.map((item, i) => (
            <li key={i} role="none">
              <button type="button" role="menuitem" autoFocus={i === active}
                onClick={() => { setOpen(false); item.onSelect?.(); triggerRef.current?.focus(); }}
                className={`${TOUCH} block w-full rounded-md px-3 text-left text-sm font-semibold ${i === active ? "bg-[#1c1917]/5 dark:bg-[#f5f3ef]/5" : ""} ${FOCUS}`}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </span>
  );
}

/* ---------------- Toggle ---------------- */

export function Toggle({ children, pressed, onPressedChange, disabled = false }) {
  return (
    <button type="button" aria-pressed={pressed} disabled={disabled}
      onClick={() => onPressedChange(!pressed)}
      className={`${TOUCH} inline-flex items-center justify-center gap-2 rounded-md border px-4 font-semibold disabled:cursor-not-allowed disabled:opacity-50 ${pressed ? "border-[#1c1917] bg-[#1c1917] text-[#f6f4f1] dark:border-[#f5f3ef] dark:bg-[#f5f3ef] dark:text-[#121110]" : "border-[#1c1917]/20 bg-transparent text-[#1c1917] dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef]"} ${FOCUS}`}>
      {children}
    </button>
  );
}

/* ---------------- Collapsible ---------------- */

export function Collapsible({ title, children, open: openProp, onOpenChange }) {
  const [inner, setInner] = React.useState(false);
  const open = openProp !== undefined ? openProp : inner;
  const id = React.useId();
  const toggle = () => { const next = !open; if (onOpenChange) onOpenChange(next); else setInner(next); };
  return (
    <div>
      <button type="button" aria-expanded={open} aria-controls={`${id}-panel`} onClick={toggle}
        className={`${TOUCH} flex w-full items-center justify-between gap-3 rounded-md border border-[#1c1917]/20 px-4 text-left font-semibold text-[#1c1917] dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] ${FOCUS}`}>
        {title}<span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={`${id}-panel`} hidden={!open} className="pt-3 text-[#1c1917] dark:text-[#f5f3ef]">{children}</div>
    </div>
  );
}

/* ---------------- Skeleton ---------------- */

export function Skeleton({ width = "100%", height = "16px", label }) {
  return (
    <div role="status" aria-label={label} aria-busy="true"
      className="rounded-md bg-[#1c1917]/10 dark:bg-[#f5f3ef]/10"
      style={{ width, height }} />
  );
}

/* ---------------- Label ---------------- */

export function Label({ htmlFor, children, required = false }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">
      {children}
      {required && <span aria-hidden="true"> *</span>}
      {required && <span> <span className="text-[#706963] dark:text-[#9e968f]">(required)</span></span>}
    </label>
  );
}

/* ---------------- Breadcrumb ---------------- */

export function Breadcrumb({ items = [], ariaLabel = "Breadcrumb" }) {
  return (
    <nav aria-label={ariaLabel}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const current = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" className="text-[#706963] dark:text-[#9e968f]">/</span>}
              {current || !item.href
                ? <span aria-current="page" className="font-semibold text-[#1c1917] dark:text-[#f5f3ef]">{item.label}</span>
                : <a href={item.href} className="text-[#1c1917] underline-offset-2 hover:underline dark:text-[#f5f3ef]">{item.label}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* ---------------- Pagination ---------------- */

export function Pagination({ page, totalPages, onChange }) {
  const go = (n) => { if (n >= 1 && n <= totalPages && n !== page) onChange(n); };
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - page) <= 1) pages.push(i);
    else if (pages[pages.length - 1] !== "…") pages.push("…");
  }
  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center gap-2">
      <button type="button" disabled={page === 1} onClick={() => go(page - 1)}
        className={`${TOUCH} rounded-md border border-[#1c1917]/20 px-3 font-semibold text-[#1c1917] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] ${FOCUS}`}>Previous</button>
      {pages.map((p, i) => p === "…"
        ? <span key={i} aria-hidden="true" className="px-1 text-[#706963] dark:text-[#9e968f]">…</span>
        : <button key={i} type="button" aria-current={p === page ? "page" : undefined} onClick={() => go(p)}
            className={`${TOUCH} min-w-11 rounded-md border px-3 font-semibold ${p === page ? "border-[#1c1917] bg-[#1c1917] text-[#f6f4f1] dark:border-[#f5f3ef] dark:bg-[#f5f3ef] dark:text-[#121110]" : "border-[#1c1917]/20 text-[#1c1917] dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef]"} ${FOCUS}`}>{p}</button>)}
      <button type="button" disabled={page === totalPages} onClick={() => go(page + 1)}
        className={`${TOUCH} rounded-md border border-[#1c1917]/20 px-3 font-semibold text-[#1c1917] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] ${FOCUS}`}>Next</button>
    </nav>
  );
}

/* ---------------- Table ---------------- */

export function Table({ caption, columns = [], rows = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <caption className="py-2 text-left text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">{caption}</caption>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} scope="col" className="border-b border-[#1c1917]/10 px-3 py-3 text-sm font-semibold text-[#1c1917] dark:border-[#f5f3ef]/10 dark:text-[#f5f3ef]">{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((c, j) => j === 0
                ? <th key={c.key} scope="row" className="border-b border-[#1c1917]/10 px-3 py-3 font-medium text-[#1c1917] dark:border-[#f5f3ef]/10 dark:text-[#f5f3ef]">{row[c.key]}</th>
                : <td key={c.key} className="border-b border-[#1c1917]/10 px-3 py-3 text-[#1c1917] dark:border-[#f5f3ef]/10 dark:text-[#f5f3ef]">{row[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------------- Empty State ---------------- */

export function EmptyState({ title, description, actionLabel, onAction }) {
  return (
    <div className="rounded-lg border border-dashed border-[#1c1917]/20 px-6 py-8 text-center dark:border-[#f5f3ef]/20">
      <p aria-hidden="true" className="text-3xl leading-none">○</p>
      <h3 className="mt-3 text-xl font-medium text-[#1c1917] dark:text-[#f5f3ef]">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-[#706963] dark:text-[#9e968f]">{description}</p>
      {actionLabel && <Button variant="primary" onClick={onAction}>{actionLabel}</Button>}
    </div>
  );
}

/* ---------------- Calendar / DatePicker / TimePicker / DateRangePicker ---------------- */
/* Dates are ISO strings (YYYY-MM-DD). Times are HH:MM 24-hour. No date library, no locale parsing. */

const CAL_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const CAL_WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const isValidISODate = (s) => {
  if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const y = Number(s.slice(0, 4));
  const m = Number(s.slice(5, 7));
  const d = Number(s.slice(8, 10));
  if (m < 1 || m > 12 || d < 1) return false;
  return d <= new Date(y, m, 0).getDate();
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
    let dayClass = "border border-transparent text-[#1c1917] hover:bg-[#1c1917]/5 dark:text-[#f5f3ef] dark:hover:bg-[#f5f3ef]/5";
    if (isSelected) dayClass = "bg-[#c47d3b] font-semibold text-[#1c1917] ring-2 ring-[#1c1917]/10 dark:bg-[#db914e] dark:text-[#1c1917] dark:ring-[#f5f3ef]/10";
    else if (isToday) dayClass = "border-2 border-[#c47d3b] font-semibold text-[#1c1917] dark:border-[#db914e] dark:text-[#f5f3ef]";
    return (
      <button type="button" key={iso} disabled={isDisabled} aria-disabled={isDisabled} aria-current={isToday ? "date" : undefined} aria-label={`${CAL_MONTHS[view.m - 1]} ${d}, ${view.y}${isSelected ? ", selected" : ""}`} onClick={() => onChange && onChange(iso)} className={`mx-auto flex h-11 w-full max-w-[44px] items-center justify-center rounded-full text-[15px] ${FOCUS} ${dayClass} disabled:opacity-40`}>{d}</button>
    );
  };
  return (
    <div className="w-full max-w-[384px]">
      <div className="flex items-center justify-between border-b border-[#1c1917]/10 pb-3 dark:border-[#f5f3ef]/10">
        <button type="button" aria-label="Previous month" onClick={() => setView(shiftMonth(view, -1))} className={`${TOUCH} rounded-md px-2 py-1 text-base text-[#1c1917] dark:text-[#f5f3ef] ${FOCUS}`}>‹</button>
        <div aria-live="polite" className="text-base font-semibold tracking-[-0.025em] text-[#1c1917] dark:text-[#f5f3ef]">{CAL_MONTHS[view.m - 1]} {view.y}</div>
        <button type="button" aria-label="Next month" onClick={() => setView(shiftMonth(view, 1))} className={`${TOUCH} rounded-md px-2 py-1 text-base text-[#1c1917] dark:text-[#f5f3ef] ${FOCUS}`}>›</button>
      </div>
      <table className="mt-3 w-full border-collapse">
        <thead>
          <tr>{CAL_WEEKDAYS.map((wd) => (<th key={wd} scope="col" className="py-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#706963] dark:text-[#9e968f]">{wd}</th>))}</tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>{week.map((d, di) => (<td key={di} className="p-1 text-center">{d === null ? null : renderDay(d)}</td>))}</tr>
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
      <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">{label}</label>
      <div className="mt-1 flex items-center gap-3">
        <input id={inputId} type="text" readOnly value={display} placeholder={placeholder} aria-invalid={invalid} className={`min-h-11 w-[170px] rounded-md border border-[#1c1917]/20 bg-transparent px-3 py-3 text-sm text-[#1c1917] placeholder:text-[#706963] dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] dark:placeholder:text-[#9e968f] ${FOCUS}`} />
        <button ref={triggerRef} type="button" aria-label={open ? "Close calendar" : "Open calendar"} aria-expanded={open} aria-controls={popId} onClick={() => setOpen(!open)} className={`${TOUCH} rounded-md border border-[#1c1917]/20 bg-transparent px-4 py-2 text-sm text-[#1c1917] hover:bg-[#1c1917]/5 dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] dark:hover:bg-[#f5f3ef]/5 ${FOCUS}`}>Calendar</button>
      </div>
      {open && (
        <div id={popId} className="absolute z-10 mt-1 max-w-[calc(100vw-32px)] rounded-lg border border-[#1c1917]/20 bg-[#fcfaf7] p-4 dark:border-[#f5f3ef]/20 dark:bg-[#1c1917]">
          <Calendar value={display || null} onChange={pick} min={min} max={max} />
          <div className="mt-3 flex gap-3">
            {clearable && display && (<button type="button" onClick={() => { if (onChange) onChange(null); close(); }} className={`${TOUCH} rounded-md border border-[#1c1917]/20 bg-transparent px-4 py-2 text-sm text-[#1c1917] hover:bg-[#1c1917]/5 dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] dark:hover:bg-[#f5f3ef]/5 ${FOCUS}`}>Clear</button>)}
            <button type="button" disabled={todayOutOfRange} aria-disabled={todayOutOfRange} onClick={() => pick(today)} className={`${TOUCH} rounded-md border border-[#1c1917]/20 bg-transparent px-4 py-2 text-sm text-[#1c1917] hover:bg-[#1c1917]/5 dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] dark:hover:bg-[#f5f3ef]/5 ${FOCUS} disabled:opacity-40`}>Today</button>
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
      <label htmlFor={triggerId} className="mb-2 block text-sm font-medium text-[#1c1917] dark:text-[#f5f3ef]">{label}</label>
      <button ref={triggerRef} id={triggerId} type="button" aria-haspopup="listbox" aria-expanded={open} aria-controls={listId} onClick={() => setOpen(!open)} className={`${TOUCH} mt-1 w-[170px] rounded-lg border border-[#1c1917]/20 bg-transparent px-4 py-2 text-left text-sm text-[#1c1917] hover:bg-[#1c1917]/5 dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] dark:hover:bg-[#f5f3ef]/5 ${FOCUS}`}>{display}</button>
      {open && (
        <ul id={listId} role="listbox" className="absolute z-10 mt-1 max-h-60 w-[170px] overflow-auto rounded-lg border border-[#1c1917]/20 bg-[#fcfaf7] p-2 dark:border-[#f5f3ef]/20 dark:bg-[#1c1917]">
          {options.map((t) => {
            const isSelected = t === valid;
            return (
              <li key={t} role="option" aria-selected={isSelected} className={isSelected ? "rounded-md bg-[#c47d3b] dark:bg-[#db914e]" : ""}>
                <button type="button" onClick={() => pick(t)} className={`${TOUCH} w-full rounded px-4 py-2.5 text-left text-sm ${isSelected ? "font-semibold text-[#1c1917]" : "text-[#1c1917] hover:bg-[#1c1917]/5 dark:text-[#f5f3ef] dark:hover:bg-[#f5f3ef]/5"} ${FOCUS}`}>{formatTime12(t)}</button>
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
      <legend className="text-sm font-semibold tracking-[-0.025em] text-[#1c1917] dark:text-[#f5f3ef]">{label}</legend>
      <div className="mt-4 flex flex-wrap items-start gap-6">
        <DatePicker value={validStart} onChange={handleStart} label="Start" min={min} max={max} clearable={false} />
        <DatePicker value={validEnd} onChange={handleEnd} label="End" min={min} max={max} clearable={false} invalid={hasError} />
      </div>
      {clearable && (validStart !== null || validEnd !== null) && (<button type="button" onClick={handleClear} className={`${TOUCH} mt-4 rounded-md border border-[#1c1917]/20 bg-transparent px-4 py-2 text-sm text-[#1c1917] hover:bg-[#1c1917]/5 dark:border-[#f5f3ef]/20 dark:text-[#f5f3ef] dark:hover:bg-[#f5f3ef]/5 ${FOCUS}`}>Clear</button>)}
      {hasError && (<p role="alert" className="mt-3 text-sm text-[#a83e22] dark:text-[#e07a52]">{message}</p>)}
    </fieldset>
  );
}

/* ---------------- Chart ---------------- */
/* One series, SVG + data table. Bar, line, area, pie, donut. */

const CHART_PALETTE = [
  "fill-[#c47d3b] dark:fill-[#db914e]",
  "fill-[#1c1917] dark:fill-[#f5f3ef]",
  "fill-[#706963] dark:fill-[#9e968f]",
  "fill-[#5e6b5a] dark:fill-[#8b9b87]",
  "fill-[#b85b35] dark:fill-[#d98a63]",
];
const CHART_PALETTE_BG = [
  "bg-[#c47d3b] dark:bg-[#db914e]",
  "bg-[#1c1917] dark:bg-[#f5f3ef]",
  "bg-[#706963] dark:bg-[#9e968f]",
  "bg-[#5e6b5a] dark:bg-[#8b9b87]",
  "bg-[#b85b35] dark:bg-[#d98a63]",
];
const CHART_STROKE = "stroke-[#c47d3b] dark:stroke-[#db914e]";
const CHART_GRID = "stroke-[#1c1917]/10 dark:stroke-[#f5f3ef]/10";

export function Chart({ type = "bar", data = [], title, height = 240, showTable = true }) {
  const rows = (Array.isArray(data) ? data : []).map((d) => ({ label: String(d && d.label != null ? d.label : ""), value: Math.max(0, Number(d && d.value) || 0) }));
  const n = rows.length;
  const max = rows.reduce((m, r) => Math.max(m, r.value), 0);
  const total = rows.reduce((s, r) => s + r.value, 0);
  const min = n > 0 ? rows.reduce((m, r) => Math.min(m, r.value), Infinity) : 0;
  const typeLabel = type === "line" ? "Line" : type === "area" ? "Area" : type === "pie" ? "Pie" : type === "donut" ? "Donut" : "Bar";
  const isPie = type === "pie" || type === "donut";
  if (n === 0 || max <= 0 || (isPie && total <= 0)) {
    return (<p className="text-sm text-[#706963] dark:text-[#9e968f]">No data.</p>);
  }
  const H = Math.max(height || 240, 120);
  const pct = (v) => ((v / total) * 100).toFixed(1) + "%";
  const shortLabel = (s) => (s.length > 12 ? s.slice(0, 11) + "…" : s);
  const titleSuffix = title ? ": " + title : "";
  const summary = isPie ? `${n} slices, total ${total}.` : `${n} categories, values from ${min} to ${max}.`;
  const caption = (title ? `${title} - ${typeLabel} chart. ` : `${typeLabel} chart. `) + "The table lists every value shown in the chart.";
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
    const grid = ticks.map((t) => (<g key={t} aria-hidden="true"><line x1={LEFT} x2={LEFT + plotW} y1={y(t)} y2={y(t)} className={CHART_GRID} strokeWidth="1" /><text x={LEFT - 6} y={y(t) + 4} textAnchor="end" className="text-[11px] text-[#706963] dark:text-[#9e968f]" fill="currentColor">{String(t)}</text></g>));
    const cats = rows.map((r, i) => (<text key={i} x={cx(i)} y={baseline + 18} textAnchor="middle" className="text-[12px] font-semibold text-[#1c1917] dark:text-[#f5f3ef]" fill="currentColor">{shortLabel(r.label)}</text>));
    return { LEFT, TOP, plotW, plotH, y, baseline, slotW, cx, grid, cats };
  };
  const renderBars = () => {
    const a = renderAxes();
    const barW = Math.min(a.slotW * 0.42, 36);
    return (<g aria-hidden="true">{a.grid}<line x1={a.LEFT} x2={a.LEFT + a.plotW} y1={a.baseline} y2={a.baseline} className={CHART_GRID} strokeWidth="1" />{rows.map((r, i) => { const x = a.cx(i) - barW / 2; const h = a.baseline - a.y(r.value); return (<g key={i}><rect x={x} y={a.y(r.value)} width={barW} height={Math.max(h, 0)} className={CHART_PALETTE[0]} /><text x={a.cx(i)} y={a.y(r.value) - 5} textAnchor="middle" className="text-[12px] font-semibold text-[#1c1917] dark:text-[#f5f3ef]" fill="currentColor">{String(r.value)}</text></g>); })}{a.cats}</g>);
  };
  const renderLineArea = () => {
    const a = renderAxes();
    const pts = rows.map((r, i) => [a.cx(i), a.y(r.value)]);
    const linePts = pts.map((p) => p.join(",")).join(" ");
    const areaD = `M ${pts[0].join(" ")} ` + pts.slice(1).map((p) => `L ${p.join(" ")}`).join(" ") + ` L ${pts[pts.length - 1][0]},${a.baseline} L ${pts[0][0]},${a.baseline} Z`;
    return (<g aria-hidden="true">{a.grid}<line x1={a.LEFT} x2={a.LEFT + a.plotW} y1={a.baseline} y2={a.baseline} className={CHART_GRID} strokeWidth="1" />{type === "area" && <path d={areaD} className={CHART_PALETTE[0]} fillOpacity="0.08" stroke="none" />}<polyline points={linePts} fill="none" className={CHART_STROKE} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />{pts.map((p, i) => (<g key={i}><circle cx={p[0]} cy={p[1]} r="5" className={CHART_PALETTE[0]} stroke="#ffffff" strokeWidth="2" /><text x={p[0]} y={p[1] - 9} textAnchor="middle" className="text-[12px] font-semibold text-[#1c1917] dark:text-[#f5f3ef]" fill="currentColor">{String(rows[i].value)}</text></g>))}{a.cats}</g>);
  };
  const renderPie = () => {
    const cx = 320, cy = H / 2;
    const R = Math.min(320, H / 2) - 20;
    const inner = type === "donut" ? R * 0.55 : 0;
    let acc = 0;
    const polar = (angleDeg, radius) => { const a = ((angleDeg - 90) * Math.PI) / 180; return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)]; };
    const slices = rows.map((r, i) => { const start = (acc / total) * 360; acc += r.value; const end = (acc / total) * 360; const large = end - start > 180 ? 1 : 0; const [x1, y1] = polar(start, R); const [x2, y2] = polar(end, R); let d; if (type === "donut") { const [ix2, iy2] = polar(end, inner); const [ix1, iy1] = polar(start, inner); d = `M ${x1},${y1} A ${R},${R} 0 ${large} 1 ${x2},${y2} L ${ix2},${iy2} A ${inner},${inner} 0 ${large} 0 ${ix1},${iy1} Z`; } else { d = `M ${cx},${cy} L ${x1},${y1} A ${R},${R} 0 ${large} 1 ${x2},${y2} Z`; } const mid = (start + end) / 2; const labelR = type === "donut" ? (R + inner) / 2 : R * 0.68; const [lx, ly] = polar(mid, labelR); return { r, i, d, lx, ly }; });
    return (<g aria-hidden="true">{slices.map((s) => (<g key={s.i}><path d={s.d} className={CHART_PALETTE[s.i % CHART_PALETTE.length]} stroke="#ffffff" strokeWidth="1" /><text x={s.lx} y={s.ly} textAnchor="middle" className="text-[12px] font-semibold text-[#1c1917] dark:text-[#f5f3ef]" fill="currentColor"><tspan x={s.lx} dy="-1">{shortLabel(rows[s.i].label)}</tspan><tspan x={s.lx} dy="13">{pct(rows[s.i].value)}</tspan></text></g>))}{type === "donut" && (<g><text x={cx} y={cy - 2} textAnchor="middle" className="text-xl font-bold text-[#1c1917] dark:text-[#f5f3ef]" fill="currentColor">{String(total)}</text><text x={cx} y={cy + 16} textAnchor="middle" className="text-[11px] text-[#706963] dark:text-[#9e968f]" fill="currentColor">total</text></g>)}</g>);
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
            <li key={i} className="flex items-center gap-3 py-1.5">
              <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${CHART_PALETTE_BG[i % CHART_PALETTE_BG.length]}`} />
              <span className="text-sm text-[#1c1917] dark:text-[#f5f3ef]">{r.label}</span>
              <span className="ml-auto text-sm font-semibold text-[#1c1917] dark:text-[#f5f3ef]">{String(r.value)} ({pct(r.value)})</span>
            </li>
          ))}
        </ul>
      )}
      {showTable && (
        <table className="mt-3 w-full border-collapse text-left">
          <caption className="py-2 text-left text-sm font-semibold text-[#1c1917] dark:text-[#f5f3ef]">{caption}</caption>
          <thead>
            <tr>
              <th scope="col" className="border-b border-[#1c1917]/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#1c1917] dark:border-[#f5f3ef]/10 dark:text-[#f5f3ef]">Label</th>
              <th scope="col" className="border-b border-[#1c1917]/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#1c1917] dark:border-[#f5f3ef]/10 dark:text-[#f5f3ef]">Value</th>
              {isPie && <th scope="col" className="border-b border-[#1c1917]/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#1c1917] dark:border-[#f5f3ef]/10 dark:text-[#f5f3ef]">Percent</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <th scope="row" className="border-b border-[#1c1917]/10 px-4 py-3 font-medium text-[#1c1917] dark:border-[#f5f3ef]/10 dark:text-[#f5f3ef]">{r.label}</th>
                <td className="border-b border-[#1c1917]/10 px-4 py-3 text-[#1c1917] dark:border-[#f5f3ef]/10 dark:text-[#f5f3ef]">{String(r.value)}</td>
                {isPie && <td className="border-b border-[#1c1917]/10 px-4 py-3 text-[#1c1917] dark:border-[#f5f3ef]/10 dark:text-[#f5f3ef]">{pct(r.value)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

/* ---------------- Component docs: Human / Agent / Vibe ---------------- */
/* Contracts use oeste.component.v1. Keep in sync with site/app.js and llms.txt. */

export const COMPONENT_DOCS = Object.freeze([
  {
    id: "button", name: "Button", tagline: "One action. A clear hierarchy.",
    anatomy: ["Label", "Surface", "Focus state", "Icon slot (optional)"],
    props: [
      { name: "children", type: "ReactNode", required: true, def: "—", desc: "Button label." },
      { name: "variant", type: '"primary" | "secondary" | "ghost" | "danger"', required: false, def: '"primary"', desc: "Visual hierarchy. Danger only for destructive actions." },
      { name: "size", type: '"sm" | "md" | "lg"', required: false, def: '"md"', desc: "Padding + type scale. All sizes keep 44px min touch." },
      { name: "disabled", type: "boolean", required: false, def: "false", desc: "Blocks interaction. Never use color alone to show it." },
      { name: "loading", type: "boolean", required: false, def: "false", desc: "Shows progress, sets aria-busy, blocks clicks." },
      { name: "icon", type: "ReactNode", required: false, def: "null", desc: "Optional icon before the label. Replaced by the loading mark while loading." },
      { name: "onClick", type: "() => void", required: false, def: "—", desc: "Click handler." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the button." },
      { key: "Enter / Space", action: "Activate. Space activates on key-up." },
    ],
    invariants: ["Label is always visible text, never icon-only without aria-label.", "Disabled buttons never rely on color alone.", "Focus is 2px ink/paper outline, never removed.", "Danger variant only for destructive actions with a confirm step."],
    contract: { format: "oeste.component.v1", component: "Button", props: { variant: ["primary", "secondary", "ghost", "danger"], size: ["sm", "md", "lg"], disabled: "boolean", loading: "boolean" }, a11y: { focus: "2px ink/paper outline", target: "min 44px", busy: "aria-busy when loading" } },
    prompt: "Build an Oeste Button: variant primary/secondary/ghost/danger, size sm/md/lg, optional icon slot, 44px min touch, 2px ink/paper focus outline, aria-busy when loading. Never icon-only without an accessible label. Use Topanga tokens: accent #C47D3B, danger #A83E22 (light) / #E07A52 (dark).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/button.json",
    code: `import { Button } from "@/components/ui/button";\n\nexport function SaveAction() {\n  return <Button variant="primary" onClick={() => {}}>Save changes</Button>;\n}\n// Dark mode: built in via dark: classes. Focus: 2px ink/paper outline.`,
  },
  {
    id: "input", name: "Input", tagline: "Persistent label. Described errors. No placeholder-only fields.",
    anatomy: ["Label", "Field", "Hint", "Error message"],
    props: [
      { name: "label", type: "string", required: true, def: "—", desc: "Persistent visible label." },
      { name: "value / onChange", type: "string / (v) => void", required: true, def: "—", desc: "Controlled value." },
      { name: "error", type: "string", required: false, def: "—", desc: "Sets aria-invalid + described error." },
      { name: "hint", type: "string", required: false, def: "—", desc: "Helper text, described by aria-describedby." },
      { name: "disabled", type: "boolean", required: false, def: "false", desc: "Blocks editing." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus into / out of the field." },
      { key: "Type", action: "Enter text. Errors are announced via role=status." },
    ],
    invariants: ["Label is always visible, never placeholder-only.", "Errors use text + role, never color alone.", "aria-invalid is set when error is present.", "Error text uses Danger (#A83E22 light / #E07A52 dark), never Canyon Rust."],
    contract: { format: "oeste.component.v1", component: "Input", props: { label: "string", error: "string?", hint: "string?", disabled: "boolean" }, a11y: { invalid: "aria-invalid + described error", label: "persistent <label>", errorRole: "status" } },
    prompt: "Build an Oeste Input with a persistent visible label, aria-invalid + described error when error is set, error text in Danger #A83E22 (light) / #E07A52 (dark). Never use placeholder as the label. Never use Canyon Rust for error text.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/input.json",
    code: `import { Input } from "@/components/ui/input";\n\nexport function NameField({ value, onChange, error }) {\n  return <Input label="Project name" value={value} onChange={onChange} error={error} hint="At least 3 characters." />;\n}\n// Related: Textarea and Select share the same label + error pattern.`,
  },
  {
    id: "dialog", name: "Dialog", tagline: "Accessible modal. Focus in, Escape out, focus back.",
    anatomy: ["Trigger", "Backdrop", "Surface", "Title + description", "Fields", "Actions"],
    props: [
      { name: "open", type: "boolean", required: true, def: "—", desc: "Controls visibility." },
      { name: "onOpenChange", type: "(open) => void", required: true, def: "—", desc: "Fires on close / Escape / backdrop." },
      { name: "title", type: "string", required: true, def: "—", desc: "Accessible name via aria-labelledby." },
      { name: "description", type: "string", required: true, def: "—", desc: "Accessible description." },
      { name: "children", type: "ReactNode", required: false, def: "—", desc: "Dialog body." },
    ],
    keyboard: [
      { key: "Escape", action: "Close the dialog, return focus to trigger." },
      { key: "Tab / Shift+Tab", action: "Trap focus inside the dialog." },
      { key: "Enter", action: "Activate the focused action." },
    ],
    invariants: ["Focus moves into the dialog on open and returns to trigger on close.", "Escape always closes.", "Backdrop click closes; content is inert behind the dialog.", "Title + description are always present."],
    contract: { format: "oeste.component.v1", component: "Dialog", props: { open: "boolean", title: "string", description: "string" }, a11y: { modal: "aria-modal=true", labelledby: "title", describedby: "description", focus: "trap + restore on close" } },
    prompt: "Build an Oeste Dialog using native <dialog> + showModal. Title + description required. Escape closes, focus traps inside, focus returns to trigger on close. Backdrop is inert. Use Topanga tokens, hairline border, dialog shadow.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/dialog.json",
    code: `import { useState } from "react";\nimport { Button } from "@/components/ui/button";\nimport { Dialog } from "@/components/ui/dialog";\nimport { Input } from "@/components/ui/input";\n\nexport function EditProject() {\n  const [open, setOpen] = useState(false);\n  return (<>\n    <Button onClick={() => setOpen(true)}>Edit project</Button>\n    <Dialog open={open} onOpenChange={setOpen} title="Edit project" description="Rename this project.">\n      <Input label="Project name" value="" onChange={() => {}} />\n    </Dialog>\n  </>);\n}`,
  },
  {
    id: "card", name: "Card", tagline: "Structural container with proper heading hierarchy.",
    anatomy: ["Heading", "Body", "Actions (optional)"],
    props: [
      { name: "title", type: "string", required: true, def: "—", desc: "Heading text, linked via aria-labelledby." },
      { name: "headingLevel", type: "2 | 3 | 4", required: false, def: "3", desc: "Keeps document outline correct." },
      { name: "children", type: "ReactNode", required: false, def: "—", desc: "Card body." },
    ],
    keyboard: [{ key: "Tab", action: "Move through interactive content inside the card." }],
    invariants: ["Heading level matches document outline.", "Cards never use color alone to convey status.", "Interactive cards use a real <button> or <a>, never a clickable div."],
    contract: { format: "oeste.component.v1", component: "Card", props: { title: "string", headingLevel: [2, 3, 4] }, a11y: { labelledby: "heading", section: "native <section>" } },
    prompt: "Build an Oeste Card: native <section> + aria-labelledby, heading level matching the page outline, hairline border, card shadow. Never use a clickable div for an interactive card.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/card.json",
    code: `import { Card } from "@/components/ui/card";\n\nexport function NoteCard() {\n  return <Card title="Field notes" headingLevel={3}><p>Room to think.</p></Card>;\n}`,
  },
  {
    id: "tabs", name: "Tabs", tagline: "Roving tabindex. Arrow keys move, Home/End jump.",
    anatomy: ["Tab list", "Tab", "Panel"],
    props: [
      { name: "items", type: "{ label, content }[]", required: true, def: "—", desc: "Tabs + panels." },
      { name: "defaultIndex", type: "number", required: false, def: "0", desc: "Initially selected tab." },
    ],
    keyboard: [
      { key: "ArrowRight / ArrowLeft", action: "Move to next / previous tab." },
      { key: "Home / End", action: "Jump to first / last tab." },
      { key: "Tab", action: "Move into the active panel." },
    ],
    invariants: ["Only the active tab is in the tab order (roving tabindex).", "Panels are labelled by their tab.", "Inactive panels are hidden, not just visually."],
    contract: { format: "oeste.component.v1", component: "Tabs", props: { items: "array", defaultIndex: "number" }, a11y: { tabs: "roving tabindex", panels: "aria-labelledby tab" } },
    prompt: "Build Oeste Tabs with roving tabindex: only the active tab has tabIndex 0. ArrowRight/Left move, Home/End jump, panels labelled by their tab, inactive panels hidden.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/tabs.json",
    code: `import { Tabs } from "@/components/ui/tabs";\n\nexport function Views() {\n  return <Tabs items={[{ label: "Overview", content: "Overview panel." }, { label: "Details", content: "Details panel." }]} />;\n}`,
  },
  {
    id: "toast", name: "Toast", tagline: "Polite status. Manual dismissal. Nothing auto-vanishes.",
    anatomy: ["Message", "Dismiss button"],
    props: [
      { name: "message", type: "string", required: true, def: "—", desc: "Status text." },
      { name: "open", type: "boolean", required: false, def: "false", desc: "Controls visibility." },
      { name: "onDismiss", type: "() => void", required: true, def: "—", desc: "Dismiss handler." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to Dismiss." },
      { key: "Enter / Space", action: "Dismiss the toast." },
    ],
    invariants: ["Toast is role=status + aria-live=polite.", "No auto-expiry: the user dismisses it.", "Message is text, never color alone."],
    contract: { format: "oeste.component.v1", component: "Toast", props: { message: "string", open: "boolean" }, a11y: { live: "polite", role: "status", dismiss: "manual, focusable" } },
    prompt: "Build an Oeste Toast: single clean card (no split rounded top/bottom), role=status + aria-live=polite, manual Dismiss button, no auto-expiry. Keep it in one card.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/toast.json",
    code: `import { useState } from "react";\nimport { Button } from "@/components/ui/button";\nimport { Toast } from "@/components/ui/toast";\n\nexport function Preview() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>Show toast</Button><Toast message="Preview complete. Nothing was sent." open={open} onDismiss={() => setOpen(false)} /></>);\n}`,
  },
  {
    id: "badge", name: "Badge", tagline: "Small status. Text first, color second.",
    anatomy: ["Label"],
    props: [
      { name: "children", type: "ReactNode", required: true, def: "—", desc: "Badge label." },
      { name: "tone", type: '"neutral" | "accent" | "success" | "danger"', required: false, def: '"neutral"', desc: "Status tone. Text always carries the meaning." },
    ],
    keyboard: [{ key: "—", action: "Badge is not interactive. No keyboard behavior." }],
    invariants: ["Meaning is in the text, never color alone.", "Danger tone uses Danger token, not Canyon Rust.", "Badge text meets 4.5:1 on its background."],
    contract: { format: "oeste.component.v1", component: "Badge", props: { tone: ["neutral", "accent", "success", "danger"] }, a11y: { meaning: "text, never color alone" } },
    prompt: "Build an Oeste Badge: pill, border + tint, tone neutral/accent/success/danger. Meaning in text, never color alone. Danger tone uses Danger #A83E22 / #E07A52.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/badge.json",
    code: `import { Badge } from "@/components/ui/badge";\n\nexport function Status() {\n  return <Badge tone="success">Ready</Badge>;\n}`,
  },
  {
    id: "checkbox", name: "Checkbox", tagline: "Real input. Visible label. Described help.",
    anatomy: ["Box", "Label", "Description (optional)"],
    props: [
      { name: "label", type: "string", required: true, def: "—", desc: "Visible label." },
      { name: "checked / onChange", type: "boolean / (v) => void", required: true, def: "—", desc: "Controlled state." },
      { name: "description", type: "string", required: false, def: "—", desc: "Helper text." },
      { name: "disabled", type: "boolean", required: false, def: "false", desc: "Blocks toggling." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the checkbox." },
      { key: "Space", action: "Toggle." },
    ],
    invariants: ["Native <input type=checkbox>, never a div.", "Label is clickable and linked via htmlFor.", "Description is linked via aria-describedby."],
    contract: { format: "oeste.component.v1", component: "Checkbox", props: { label: "string", checked: "boolean", disabled: "boolean" }, a11y: { native: "input[type=checkbox]", label: "htmlFor", desc: "aria-describedby" } },
    prompt: "Build an Oeste Checkbox with a native input, clickable label via htmlFor, optional described help text, accent color for the checked state. Never build a checkbox from a div.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/checkbox.json",
    code: `import { useState } from "react";\nimport { Checkbox } from "@/components/ui/checkbox";\n\nexport function Notify() {\n  const [checked, setChecked] = useState(false);\n  return <Checkbox label="Email me updates" checked={checked} onChange={setChecked} description="One email per change." />;\n}`,
  },
  {
    id: "switch", name: "Switch", tagline: "On / off with a real role=switch.",
    anatomy: ["Track", "Thumb", "Label", "Description (optional)"],
    props: [
      { name: "label", type: "string", required: true, def: "—", desc: "Visible label." },
      { name: "checked / onChange", type: "boolean / (v) => void", required: true, def: "—", desc: "Controlled state." },
      { name: "description", type: "string", required: false, def: "—", desc: "Helper text." },
      { name: "disabled", type: "boolean", required: false, def: "false", desc: "Blocks toggling." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the switch." },
      { key: "Space / Enter", action: "Toggle." },
    ],
    invariants: ["Uses role=switch + aria-checked.", "State is visible by position + label, never color alone.", "Label is clickable."],
    contract: { format: "oeste.component.v1", component: "Switch", props: { label: "string", checked: "boolean", disabled: "boolean" }, a11y: { role: "switch", checked: "aria-checked", state: "position + label, never color alone" } },
    prompt: "Build an Oeste Switch with role=switch + aria-checked, thumb position showing state, clickable label. State visible by position + label, never color alone.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/switch.json",
    code: `import { useState } from "react";\nimport { Switch } from "@/components/ui/switch";\n\nexport function DarkMode() {\n  const [checked, setChecked] = useState(false);\n  return <Switch label="Dark mode" checked={checked} onChange={setChecked} />;\n}`,
  },
  {
    id: "textarea", name: "Textarea", tagline: "Multi-line input. Same label + error pattern as Input.",
    anatomy: ["Label", "Field", "Hint", "Error message"],
    props: [
      { name: "label", type: "string", required: true, def: "—", desc: "Persistent visible label." },
      { name: "value / onChange", type: "string / (v) => void", required: true, def: "—", desc: "Controlled value." },
      { name: "rows", type: "number", required: false, def: "4", desc: "Visible rows." },
      { name: "error", type: "string", required: false, def: "—", desc: "Sets aria-invalid + described error." },
      { name: "disabled", type: "boolean", required: false, def: "false", desc: "Blocks editing." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus into / out of the field." },
      { key: "Type", action: "Enter multi-line text." },
    ],
    invariants: ["Label is always visible, never placeholder-only.", "Errors use text + role, never color alone.", "aria-invalid is set when error is present.", "Error text uses Danger (#A83E22 light / #E07A52 dark), never Canyon Rust."],
    contract: { format: "oeste.component.v1", component: "Textarea", props: { label: "string", rows: "number", error: "string?", disabled: "boolean" }, a11y: { invalid: "aria-invalid + described error", label: "persistent <label>", errorRole: "status" } },
    prompt: "Build an Oeste Textarea with a persistent visible label, aria-invalid + described error when error is set, error text in Danger #A83E22 (light) / #E07A52 (dark). Same label + error pattern as Input. Never use placeholder as the label.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/textarea.json",
    code: `import { Textarea } from "@/components/ui/textarea";\n\nexport function Notes({ value, onChange }) {\n  return <Textarea label="Field notes" value={value} onChange={onChange} rows={4} hint="Anything worth keeping." />;\n}\n// Dark mode: built in via dark: classes.`,
  },
  {
    id: "select", name: "Select", tagline: "One choice from a list. Native select, real label.",
    anatomy: ["Label", "Field", "Options"],
    props: [
      { name: "label", type: "string", required: true, def: "—", desc: "Persistent visible label." },
      { name: "value / onChange", type: "string / (v) => void", required: true, def: "—", desc: "Controlled value." },
      { name: "options", type: "{ value, label }[]", required: true, def: "—", desc: "Options list." },
      { name: "disabled", type: "boolean", required: false, def: "false", desc: "Blocks changes." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the select." },
      { key: "ArrowUp / ArrowDown", action: "Change the selected option." },
      { key: "Enter / Space", action: "Open the native list." },
    ],
    invariants: ["Native <select>, never a custom listbox.", "Label is always visible and linked via htmlFor.", "Options carry real values, never index-only labels."],
    contract: { format: "oeste.component.v1", component: "Select", props: { label: "string", options: "array", disabled: "boolean" }, a11y: { native: "select", label: "htmlFor" } },
    prompt: "Build an Oeste Select with a native <select>, persistent visible label via htmlFor, options as { value, label } pairs. Never build a custom listbox when a native select will do.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/select.json",
    code: `import { Select } from "@/components/ui/select";\n\nexport function ThemePicker({ value, onChange }) {\n  return <Select label="Theme" value={value} onChange={onChange} options={[{ value: "topanga", label: "Topanga" }, { value: "paper", label: "Paper" }]} />;\n}`,
  },
  {
    id: "alert", name: "Alert", tagline: "Status that stays put. Text first, tone second.",
    anatomy: ["Tone border / tint", "Message", "Dismiss button (optional)"],
    props: [
      { name: "children", type: "ReactNode", required: true, def: "—", desc: "Alert message." },
      { name: "tone", type: '"info" | "success" | "warning" | "danger"', required: false, def: '"info"', desc: "Status tone. Text always carries the meaning." },
      { name: "role", type: '"alert" | "status"', required: false, def: '"status"', desc: "Use alert for urgent errors, status for the rest." },
      { name: "onDismiss", type: "() => void", required: false, def: "—", desc: "Adds a Dismiss button." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to Dismiss when present." },
      { key: "Enter / Space", action: "Dismiss the alert." },
    ],
    invariants: ["Meaning is in the text, never color alone.", "role=alert only for urgent errors; status for everything else.", "Danger tone uses Danger token, not Canyon Rust.", "Dismissible alerts remove themselves from the DOM."],
    contract: { format: "oeste.component.v1", component: "Alert", props: { tone: ["info", "success", "warning", "danger"], role: ["alert", "status"] }, a11y: { role: "alert or status", dismiss: "focusable Dismiss button" } },
    prompt: "Build an Oeste Alert: tone info/success/warning/danger, role=status by default (role=alert only for urgent errors), message in text, optional Dismiss button. Danger tone uses Danger #A83E22 / #E07A52, never Canyon Rust.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/alert.json",
    code: `import { Alert } from "@/components/ui/alert";\n\nexport function SaveError() {\n  return <Alert tone="danger" role="alert">Could not save. Your changes are still here.</Alert>;\n}\n// Dark mode: built in via dark: classes.`,
  },
  {
    id: "accordion", name: "Accordion", tagline: "Stacked sections. One open at a time or many — your call.",
    anatomy: ["Trigger button", "Panel", "Chevron / indicator"],
    props: [
      { name: "items", type: "{ title, content }[]", required: true, def: "—", desc: "Sections." },
      { name: "allowMultiple", type: "boolean", required: false, def: "false", desc: "When true, more than one panel may stay open." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus between triggers." },
      { key: "Enter / Space", action: "Toggle the focused panel." },
    ],
    invariants: ["Trigger is a real <button> with aria-expanded + aria-controls.", "Panel has a matching id and is hidden when closed.", "State is visible by indicator + expanded panel, never color alone."],
    contract: { format: "oeste.component.v1", component: "Accordion", props: { items: "array", allowMultiple: "boolean" }, a11y: { trigger: "button + aria-expanded + aria-controls", panel: "hidden when closed" } },
    prompt: "Build an Oeste Accordion: each trigger is a real <button> with aria-expanded + aria-controls, panel hidden when closed, state visible by indicator + panel. Tab moves between triggers, Enter/Space toggles.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/accordion.json",
    code: `import { Accordion } from "@/components/ui/accordion";\n\nexport function Faq() {\n  return <Accordion items={[{ title: "What is Oeste?", content: "A design system for humans, agents, and vibe coders." }]} />;\n}`,
  },
  {
    id: "radiogroup", name: "RadioGroup", tagline: "One choice from a few. Native radios, real grouping.",
    anatomy: ["Fieldset", "Legend", "Radio + label options"],
    props: [
      { name: "legend", type: "string", required: true, def: "—", desc: "Group label." },
      { name: "name", type: "string", required: true, def: "—", desc: "Shared radio name." },
      { name: "options", type: "{ value, label, description? }[]", required: true, def: "—", desc: "Options." },
      { name: "value / onChange", type: "string / (v) => void", required: true, def: "—", desc: "Controlled value." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus into the group." },
      { key: "ArrowUp / ArrowDown", action: "Move between options and select." },
      { key: "Space", action: "Select the focused option." },
    ],
    invariants: ["Native <input type=radio> inside <fieldset> + <legend>.", "All radios share one name.", "Labels are clickable and linked via htmlFor."],
    contract: { format: "oeste.component.v1", component: "RadioGroup", props: { legend: "string", name: "string", options: "array", value: "string" }, a11y: { native: "input[type=radio] in fieldset + legend", group: "shared name" } },
    prompt: "Build an Oeste RadioGroup with native radios inside <fieldset> + <legend>, one shared name, clickable labels. Arrow keys move and select. Never build radios from divs.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/radiogroup.json",
    code: `import { RadioGroup } from "@/components/ui/radiogroup";\n\nexport function SizePicker({ value, onChange }) {\n  return <RadioGroup legend="Size" name="size" value={value} onChange={onChange} options={[{ value: "sm", label: "Small" }, { value: "md", label: "Medium" }, { value: "lg", label: "Large" }]} />;\n}`,
  },
  {
    id: "progress", name: "Progress", tagline: "How far along. Number + bar, never bar alone.",
    anatomy: ["Label", "Bar + fill", "Value text"],
    props: [
      { name: "value", type: "number", required: true, def: "—", desc: "Current value, 0–100 by default." },
      { name: "min", type: "number", required: false, def: "0", desc: "Minimum." },
      { name: "max", type: "number", required: false, def: "100", desc: "Maximum." },
      { name: "label", type: "string", required: true, def: "—", desc: 'Visible label, e.g. "Upload".' },
    ],
    keyboard: [{ key: "—", action: "Progress is not interactive. No keyboard behavior." }],
    invariants: ["Uses role=progressbar + aria-valuenow/min/max.", "Value is shown as text, never bar alone.", "Value is clamped to min–max."],
    contract: { format: "oeste.component.v1", component: "Progress", props: { value: "number", min: "number", max: "number" }, a11y: { role: "progressbar", values: "aria-valuenow/min/max", text: "visible value" } },
    prompt: "Build an Oeste Progress with role=progressbar + aria-valuenow/min/max, visible label + value text, value clamped to min–max. Never show a bar without its number.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/progress.json",
    code: `import { Progress } from "@/components/ui/progress";\n\nexport function Upload({ done }) {\n  return <Progress label="Upload" value={done} />;\n}\n// Dark mode: built in via dark: classes.`,
  },
  {
    id: "avatar", name: "Avatar", tagline: "A face or initials. Fallback always shows.",
    anatomy: ["Image (optional)", "Fallback initials", "Accessible name"],
    props: [
      { name: "src", type: "string", required: false, def: "—", desc: "Photo URL. When it fails, the fallback shows." },
      { name: "name", type: "string", required: true, def: "—", desc: "Full name — used for initials + accessible name." },
      { name: "alt", type: "string", required: false, def: "name", desc: "Image alt text." },
      { name: "size", type: '"md" | "lg"', required: false, def: '"md"', desc: "44px or 64px." },
    ],
    keyboard: [{ key: "—", action: "Avatar is not interactive. No keyboard behavior." }],
    invariants: ["Fallback initials always render when the image is missing or fails.", "Accessible name is the person's name, never empty.", "Initials are derived from the name, never hardcoded per instance."],
    contract: { format: "oeste.component.v1", component: "Avatar", props: { src: "string?", name: "string", size: ["md", "lg"] }, a11y: { name: "person name", fallback: "initials when image fails" } },
    prompt: "Build an Oeste Avatar: photo with an initials fallback that always renders when the image is missing or fails. Accessible name is the person's name. Sizes md (44px) and lg (64px). Never leave an empty circle.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/avatar.json",
    code: `import { Avatar } from "@/components/ui/avatar";\n\nexport function Teammate() {\n  return <Avatar name="Hidden Inwest" src="/photos/member.jpg" />;\n}\n// If the photo fails, initials show. Dark mode: built in.`,
  },
  {
    id: "separator", name: "Separator", tagline: "A hairline that divides. Decorative or semantic.",
    anatomy: ["Line", "Orientation"],
    props: [
      { name: "orientation", type: '"horizontal" | "vertical"', required: false, def: '"horizontal"', desc: "Line direction." },
      { name: "decorative", type: "boolean", required: false, def: "true", desc: "True = aria-hidden. False = role=separator with a label." },
    ],
    keyboard: [{ key: "—", action: "Separator is not interactive. No keyboard behavior." }],
    invariants: ["Decorative separators are aria-hidden.", "Semantic separators use role=separator.", "A separator never replaces a heading or a labeled section."],
    contract: { format: "oeste.component.v1", component: "Separator", props: { orientation: ["horizontal", "vertical"], decorative: "boolean" }, a11y: { decorative: "aria-hidden", semantic: "role=separator" } },
    prompt: "Build an Oeste Separator: a hairline rule, horizontal or vertical. Decorative separators are aria-hidden; semantic ones use role=separator. Never use a separator in place of a heading.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/separator.json",
    code: `import { Separator } from "@/components/ui/separator";\n\nexport function Sections() {\n  return (<><p>First section.</p><Separator /><p>Second section.</p></>);\n}`,
  },
  {
    id: "slider", name: "Slider", tagline: "Pick a number by dragging. Arrows work too.",
    anatomy: ["Label", "Track + fill", "Thumb", "Value text"],
    props: [
      { name: "label", type: "string", required: true, def: "—", desc: "Visible label." },
      { name: "value / onChange", type: "number / (v) => void", required: true, def: "—", desc: "Controlled value." },
      { name: "min", type: "number", required: false, def: "0", desc: "Minimum." },
      { name: "max", type: "number", required: false, def: "100", desc: "Maximum." },
      { name: "step", type: "number", required: false, def: "1", desc: "Step size." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the thumb." },
      { key: "ArrowLeft / ArrowRight / ArrowUp / ArrowDown", action: "Decrease / increase by one step." },
      { key: "Home / End", action: "Jump to min / max." },
      { key: "PageUp / PageDown", action: "Move by 10 steps." },
    ],
    invariants: ["Native <input type=range>, never a div thumb.", "Value is shown as text, never slider alone.", "aria-valuenow/min/max always reflect the value."],
    contract: { format: "oeste.component.v1", component: "Slider", props: { label: "string", value: "number", min: "number", max: "number", step: "number" }, a11y: { native: "input[type=range]", values: "aria-valuenow/min/max" } },
    prompt: "Build an Oeste Slider with a native <input type=range>, visible label, visible value text, aria-valuenow/min/max. Arrow keys step, Home/End jump. Never build a slider thumb from a div.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/slider.json",
    code: `import { useState } from "react";\nimport { Slider } from "@/components/ui/slider";\n\nexport function Volume() {\n  const [value, setValue] = useState(40);\n  return <Slider label="Volume" value={value} onChange={setValue} min={0} max={100} />;\n}`,
  },
  {
    id: "tooltip", name: "Tooltip", tagline: "A hint on hover and focus. Never the only way to know.",
    anatomy: ["Trigger", "Bubble", "Text"],
    props: [
      { name: "children", type: "ReactNode", required: true, def: "—", desc: "Trigger element." },
      { name: "content", type: "string", required: true, def: "—", desc: "Hint text." },
      { name: "side", type: '"top" | "bottom"', required: false, def: '"top"', desc: "Bubble placement." },
    ],
    keyboard: [
      { key: "Tab", action: "Focus the trigger to show the tooltip." },
      { key: "Escape", action: "Dismiss the tooltip." },
      { key: "Tab away / blur", action: "Hide the tooltip." },
    ],
    invariants: ["Tooltip shows on hover AND on focus.", "Tooltip content uses role=tooltip + aria-describedby.", "The hint is never the only place its information lives.", "Escape dismisses; blur hides."],
    contract: { format: "oeste.component.v1", component: "Tooltip", props: { content: "string", side: ["top", "bottom"] }, a11y: { role: "tooltip", describedby: "trigger aria-describedby", dismiss: "Escape / blur" } },
    prompt: "Build an Oeste Tooltip: shows on hover AND focus, role=tooltip + aria-describedby on the trigger, Escape dismisses, blur hides. Never put information only in a tooltip.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/tooltip.json",
    code: `import { Tooltip } from "@/components/ui/tooltip";\n\nexport function Help() {\n  return <Tooltip content="Saves to this project."><button type="button">Save</button></Tooltip>;\n}`,
  },
  {
    id: "popover", name: "Popover", tagline: "A small panel anchored to a trigger. Escape closes.",
    anatomy: ["Trigger", "Panel", "Content"],
    props: [
      { name: "children", type: "ReactNode", required: true, def: "—", desc: "Trigger + panel content." },
      { name: "open / onOpenChange", type: "boolean / (v) => void", required: false, def: "—", desc: "Controlled open state. Uncontrolled by default." },
      { name: "label", type: "string", required: true, def: "—", desc: "Accessible name for the panel." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus into the panel when open." },
      { key: "Escape", action: "Close and return focus to the trigger." },
      { key: "Click outside", action: "Close the panel." },
    ],
    invariants: ["Panel is labelled by its trigger or label.", "Escape closes and returns focus to the trigger.", "Clicking outside closes; content behind stays interactive.", "Popover is non-modal — unlike Dialog, it does not trap focus or make the page inert."],
    contract: { format: "oeste.component.v1", component: "Popover", props: { label: "string", open: "boolean" }, a11y: { panel: "labelled", dismiss: "Escape / outside click", focus: "returns to trigger" } },
    prompt: "Build an Oeste Popover: trigger-anchored panel, Escape closes and returns focus to the trigger, outside click closes. Non-modal — no focus trap, page stays interactive. Panel is labelled.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/popover.json",
    code: `import { Popover } from "@/components/ui/popover";\n\nexport function Details() {\n  return <Popover label="Project details"><button type="button">Details</button><p>Topanga theme, 29 components.</p></Popover>;\n}`,
  },
  {
    id: "dropdown-menu", name: "Dropdown Menu", tagline: "Actions in a list. Arrows move, Escape closes.",
    anatomy: ["Trigger", "Menu", "Menu items", "Separator (optional)"],
    props: [
      { name: "label", type: "string", required: true, def: "—", desc: "Accessible name for the menu." },
      { name: "items", type: "{ label, onSelect?, separator? }[]", required: true, def: "—", desc: "Menu items." },
      { name: "children", type: "ReactNode", required: true, def: "—", desc: "Trigger element." },
    ],
    keyboard: [
      { key: "Enter / Space / ArrowDown", action: "Open the menu, focus the first item." },
      { key: "ArrowDown / ArrowUp", action: "Move between items." },
      { key: "Enter / Space", action: "Activate the focused item." },
      { key: "Escape", action: "Close and return focus to the trigger." },
    ],
    invariants: ["Menu uses role=menu, items use role=menuitem.", "Trigger uses aria-haspopup=menu + aria-expanded.", "Escape closes and returns focus to the trigger.", "Menu items are real buttons, never divs."],
    contract: { format: "oeste.component.v1", component: "DropdownMenu", props: { label: "string", items: "array" }, a11y: { menu: "role=menu", items: "role=menuitem", trigger: "aria-haspopup + aria-expanded" } },
    prompt: "Build an Oeste DropdownMenu: trigger with aria-haspopup=menu + aria-expanded, role=menu with role=menuitem buttons, Arrow keys move, Enter activates, Escape closes and returns focus. Items are real buttons, never divs.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/dropdown-menu.json",
    code: `import { DropdownMenu } from "@/components/ui/dropdown-menu";\n\nexport function Actions() {\n  return <DropdownMenu label="Project actions" items={[{ label: "Rename", onSelect: () => {} }, { label: "Duplicate", onSelect: () => {} }]}><button type="button">Actions</button></DropdownMenu>;\n}`,
  },
  {
    id: "toggle", name: "Toggle", tagline: "A button that stays pressed. Fill + label, not color alone.",
    anatomy: ["Button", "Pressed state", "Label"],
    props: [
      { name: "children", type: "ReactNode", required: true, def: "—", desc: "Toggle label." },
      { name: "pressed / onPressedChange", type: "boolean / (v) => void", required: true, def: "—", desc: "Controlled pressed state." },
      { name: "disabled", type: "boolean", required: false, def: "false", desc: "Blocks toggling." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the toggle." },
      { key: "Enter / Space", action: "Toggle pressed state." },
    ],
    invariants: ["Uses aria-pressed.", "Pressed state is visible by fill + label, never color alone.", "Toggle is a real <button>, never a div."],
    contract: { format: "oeste.component.v1", component: "Toggle", props: { pressed: "boolean" }, a11y: { pressed: "aria-pressed", state: "fill + label, never color alone" } },
    prompt: "Build an Oeste Toggle: a real <button> with aria-pressed, pressed state visible by fill + label, never color alone. Tab focuses, Enter/Space toggles.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/toggle.json",
    code: `import { useState } from "react";\nimport { Toggle } from "@/components/ui/toggle";\n\nexport function Bold() {\n  const [pressed, setPressed] = useState(false);\n  return <Toggle pressed={pressed} onPressedChange={setPressed}>Bold</Toggle>;\n}`,
  },
  {
    id: "collapsible", name: "Collapsible", tagline: "One section that opens and closes. Accordion's simpler sibling.",
    anatomy: ["Trigger button", "Panel"],
    props: [
      { name: "title", type: "string", required: true, def: "—", desc: "Trigger label." },
      { name: "children", type: "ReactNode", required: true, def: "—", desc: "Panel content." },
      { name: "open / onOpenChange", type: "boolean / (v) => void", required: false, def: "—", desc: "Controlled open state. Uncontrolled by default." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the trigger." },
      { key: "Enter / Space", action: "Toggle the panel." },
    ],
    invariants: ["Trigger is a real <button> with aria-expanded + aria-controls.", "Panel is hidden when closed.", "State is visible by indicator + panel, never color alone.", "Reduced motion: no height animation."],
    contract: { format: "oeste.component.v1", component: "Collapsible", props: { title: "string", open: "boolean" }, a11y: { trigger: "button + aria-expanded + aria-controls", panel: "hidden when closed" } },
    prompt: "Build an Oeste Collapsible: one trigger button with aria-expanded + aria-controls, one panel hidden when closed, state visible by indicator + panel. Reduced motion: no height animation.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/collapsible.json",
    code: `import { Collapsible } from "@/components/ui/collapsible";\n\nexport function Details() {\n  return <Collapsible title="Show details"><p>Topanga theme, 29 components.</p></Collapsible>;\n}`,
  },
  {
    id: "skeleton", name: "Skeleton", tagline: "A placeholder while content loads. Never flashing.",
    anatomy: ["Shape", "aria-busy region"],
    props: [
      { name: "width", type: "string", required: false, def: '"100%"', desc: "Placeholder width." },
      { name: "height", type: "string", required: false, def: '"16px"', desc: "Placeholder height." },
      { name: "label", type: "string", required: true, def: "—", desc: "What is loading, e.g. \"Loading project\"." },
    ],
    keyboard: [{ key: "—", action: "Skeleton is not interactive. No keyboard behavior." }],
    invariants: ["Container has aria-busy=true while loading.", "Skeleton is labelled with what is loading.", "No flashing, no shimmer that strobes. Reduced motion: no pulse.", "Real content replaces the skeleton — never both at once."],
    contract: { format: "oeste.component.v1", component: "Skeleton", props: { width: "string", height: "string", label: "string" }, a11y: { busy: "aria-busy=true", label: "what is loading" } },
    prompt: "Build an Oeste Skeleton: placeholder shape with aria-busy=true, labelled with what is loading. No flashing, no strobing shimmer. Reduced motion: no pulse. Real content replaces it.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/skeleton.json",
    code: `import { Skeleton } from "@/components/ui/skeleton";\n\nexport function LoadingCard() {\n  return <Skeleton label="Loading project" width="100%" height="96px" />;\n}`,
  },
  {
    id: "label", name: "Label", tagline: "A label that stands on its own. Links to its control.",
    anatomy: ["Text", "Required indicator (optional)"],
    props: [
      { name: "htmlFor", type: "string", required: true, def: "—", desc: "Id of the control it labels." },
      { name: "children", type: "ReactNode", required: true, def: "—", desc: "Label text." },
      { name: "required", type: "boolean", required: false, def: "false", desc: "Shows a visible required indicator + aria." },
    ],
    keyboard: [{ key: "—", action: "Label is not interactive. Clicking it focuses its control." }],
    invariants: ["Always linked via htmlFor to a real control id.", "Required is shown with a visible indicator AND text, never color alone.", "Label text is visible, never sr-only except when the control already has a visible label."],
    contract: { format: "oeste.component.v1", component: "Label", props: { htmlFor: "string", required: "boolean" }, a11y: { link: "htmlFor", required: "visible indicator + text" } },
    prompt: "Build an Oeste Label: standalone label linked via htmlFor to a real control id. Required shows a visible indicator plus text, never color alone. Clicking the label focuses its control.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/label.json",
    code: `import { Label } from "@/components/ui/label";\n\nexport function NameRow() {\n  return (<div><Label htmlFor="name" required>Project name</Label><input id="name" type="text" /></div>);\n}`,
  },
  {
    id: "breadcrumb", name: "Breadcrumb", tagline: "Where you are, and how you got here.",
    anatomy: ["List", "Links", "Current page"],
    props: [
      { name: "items", type: "{ label, href? }[]", required: true, def: "—", desc: "Trail. Last item is the current page." },
      { name: "ariaLabel", type: "string", required: false, def: '"Breadcrumb"', desc: "Nav label." },
    ],
    keyboard: [{ key: "Tab", action: "Move focus through the links. Current page is not a link." }],
    invariants: ["Wrapped in <nav aria-label=\"Breadcrumb\"> with an <ol>.", "Current page uses aria-current=\"page\" and is not a link.", "Separators are aria-hidden."],
    contract: { format: "oeste.component.v1", component: "Breadcrumb", props: { items: "array" }, a11y: { nav: "aria-label=Breadcrumb", current: "aria-current=page, not a link" } },
    prompt: "Build an Oeste Breadcrumb: <nav aria-label=\"Breadcrumb\"> with an <ol>, links for every step except the current page, current page uses aria-current=\"page\" and is not a link. Separators are aria-hidden.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/breadcrumb.json",
    code: `import { Breadcrumb } from "@/components/ui/breadcrumb";\n\nexport function Trail() {\n  return <Breadcrumb items={[{ label: "Home", href: "#/home" }, { label: "Components", href: "#/components/button" }, { label: "Button" }]} />;\n}`,
  },
  {
    id: "pagination", name: "Pagination", tagline: "Page through a list. Current page is unmistakable.",
    anatomy: ["Previous", "Page buttons", "Ellipsis", "Next"],
    props: [
      { name: "page", type: "number", required: true, def: "—", desc: "Current page (1-based)." },
      { name: "totalPages", type: "number", required: true, def: "—", desc: "Total pages." },
      { name: "onChange", type: "(page) => void", required: true, def: "—", desc: "Fires when the page changes." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus through Previous, pages, Next." },
      { key: "Enter / Space", action: "Go to the focused page." },
    ],
    invariants: ["Wrapped in <nav aria-label=\"Pagination\">.", "Current page uses aria-current=\"page\".", "Previous is disabled on page 1; Next is disabled on the last page.", "Ellipsis is aria-hidden, never a button."],
    contract: { format: "oeste.component.v1", component: "Pagination", props: { page: "number", totalPages: "number" }, a11y: { nav: "aria-label=Pagination", current: "aria-current=page", ellipsis: "aria-hidden" } },
    prompt: "Build an Oeste Pagination: <nav aria-label=\"Pagination\">, Previous / page buttons / Next, current page uses aria-current=\"page\", Previous disabled on page 1, Next disabled on the last page, ellipsis is aria-hidden, never a button.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/pagination.json",
    code: `import { useState } from "react";\nimport { Pagination } from "@/components/ui/pagination";\n\nexport function Pages() {\n  const [page, setPage] = useState(1);\n  return <Pagination page={page} totalPages={9} onChange={setPage} />;\n}`,
  },
  {
    id: "table", name: "Table", tagline: "Rows and columns that screen readers can follow.",
    anatomy: ["Caption", "Header row", "Body rows"],
    props: [
      { name: "caption", type: "string", required: true, def: "—", desc: "What the table shows." },
      { name: "columns", type: "{ key, header }[]", required: true, def: "—", desc: "Columns." },
      { name: "rows", type: "Record[]", required: true, def: "—", desc: "Rows." },
    ],
    keyboard: [{ key: "Tab", action: "Move focus through interactive cells, if any." }],
    invariants: ["<caption> describes what the table shows.", "Header cells use <th scope=\"col\">; row headers use <th scope=\"row\">.", "No layout tables, ever.", "Sticky header keeps column labels visible on long tables."],
    contract: { format: "oeste.component.v1", component: "Table", props: { caption: "string", columns: "array", rows: "array" }, a11y: { caption: "describes the table", headers: "th scope col/row" } },
    prompt: "Build an Oeste Table: semantic <table> with a <caption> describing what it shows, <th scope=\"col\"> headers (scope=\"row\" for row headers), sticky header on long tables. Never use a table for layout.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/table.json",
    code: `import { Table } from "@/components/ui/table";\n\nexport function Tokens() {\n  return <Table caption="Topanga tokens" columns={[{ key: "token", header: "Token" }, { key: "light", header: "Light" }]} rows={[{ token: "accent", light: "#C47D3B" }]} />;\n}`,
  },
  {
    id: "empty-state", name: "Empty State", tagline: "Nothing here yet — and a clear next step.",
    anatomy: ["Icon (decorative)", "Heading", "Text", "Action"],
    props: [
      { name: "title", type: "string", required: true, def: "—", desc: "What is empty." },
      { name: "description", type: "string", required: true, def: "—", desc: "Why it is empty + what to do." },
      { name: "actionLabel", type: "string", required: false, def: "—", desc: "Action button label." },
      { name: "onAction", type: "() => void", required: false, def: "—", desc: "Action handler." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the action when present." },
      { key: "Enter / Space", action: "Activate the action." },
    ],
    invariants: ["Icon is aria-hidden.", "Heading says what is empty, in plain words.", "There is always a next step: an action or a link.", "Empty state never blames the user."],
    contract: { format: "oeste.component.v1", component: "EmptyState", props: { title: "string", description: "string", actionLabel: "string?" }, a11y: { icon: "aria-hidden", action: "focusable button" } },
    prompt: "Build an Oeste Empty State: aria-hidden icon, heading that says what is empty in plain words, description with a next step, and a focusable action button. Never blame the user for an empty screen.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/empty-state.json",
    code: `import { EmptyState } from "@/components/ui/empty-state";\n\nexport function NoProjects() {\n  return <EmptyState title="No projects yet" description="Create your first project to see it here." actionLabel="New project" onAction={() => {}} />;\n}`,
  },
  {
    id: "calendar", name: "Calendar", tagline: "Month grid. One button per day, min/max bounds.",
    anatomy: ["Prev/next month buttons", "Month/year heading (aria-live polite)", "Weekday header row", "Day buttons (one per day)", "Empty cells (outside the month)"],
    props: [
      { name: "value", type: "string?", required: false, def: "—", desc: "Selected date, ISO YYYY-MM-DD, or null." },
      { name: "onChange", type: "(iso: string) => void", required: true, def: "—", desc: "Fires with the clicked day's ISO string." },
      { name: "min", type: "string?", required: false, def: "—", desc: "Earliest selectable date, ISO. Earlier days are disabled." },
      { name: "max", type: "string?", required: false, def: "—", desc: "Latest selectable date, ISO. Later days are disabled." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus between the nav buttons and day buttons." },
      { key: "Enter / Space", action: "Select the focused day (or move one month on the nav buttons)." },
    ],
    invariants: ["Dates are ISO strings only (YYYY-MM-DD). No Date objects in props, no locale parsing.", "Week starts Sunday. Month and day names are English.", "The displayed month starts at the value's month, or the current month when no value is set. It follows the value when the parent passes a new date in a different month.", "Prev/next move one month and do not call onChange.", "Days outside the current month render as empty cells (no buttons).", "Days outside min/max are disabled (disabled attribute + aria-disabled).", "The selected day has an accent fill and its aria-label ends with ', selected'. Today has aria-current=\"date\" plus an accent outline.", "Day buttons are 44px circles (Topanga touch minimum).", "Tab + Enter/Space only. No roving tabindex, no arrow-key cell movement."],
    contract: { format: "oeste.component.v1", component: "Calendar", props: { value: "string?", onChange: "function", min: "string?", max: "string?" }, a11y: { grid: "semantic table + th scope=col weekday headers", days: "one button per day, aria-label with ', selected' suffix, aria-current=date for today", disabled: "disabled + aria-disabled for out-of-range days", nav: "prev/next buttons with aria-labels, heading aria-live=polite" } },
    prompt: "Build an Oeste Calendar: a month grid for one ISO date (YYYY-MM-DD). Prev-month button (aria-label Previous month), month/year heading (aria-live polite), next-month button (aria-label Next month). A semantic table: weekday header row (Su Mo Tu We Th Fr Sa), one button per day, empty cells outside the month. Clicking a day calls onChange with that day's ISO string. Days outside min/max are disabled (disabled + aria-disabled). Selected day: accent fill + aria-label ending with ', selected'. Today: aria-current=date + accent outline. Week starts Sunday, English names. Displayed month starts at the value's month or the current month and follows the value when the parent passes a new date in a different month; prev/next move one month and do not call onChange. Day buttons are 44px circles. ISO strings only, no locale parsing. Tab + Enter/Space only, no roving tabindex, no arrow keys. Use Topanga tokens: accent #C47D3B (light) / #DB914E (dark).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/calendar.json",
    code: `import { Calendar } from "@/components/ui/calendar";\n\nexport function Pick() {\n  const [day, setDay] = React.useState("2026-10-18");\n  return <Calendar value={day} onChange={setDay} />;\n}`,
  },
  {
    id: "date-picker", name: "DatePicker", tagline: "Read-only input plus popover calendar. Clear, Today.",
    anatomy: ["Label", "Read-only input (value or placeholder)", "Calendar trigger button", "Popover div (Calendar + Clear + Today)"],
    props: [
      { name: "value", type: "string?", required: false, def: "—", desc: "Selected date, ISO YYYY-MM-DD, or null." },
      { name: "onChange", type: "(iso: string | null) => void", required: true, def: "—", desc: "Fires with the picked ISO string, or null on Clear." },
      { name: "label", type: "string", required: false, def: "Date", desc: "Label text." },
      { name: "placeholder", type: "string", required: false, def: "YYYY-MM-DD", desc: "Shown when no value is set." },
      { name: "min", type: "string?", required: false, def: "—", desc: "Earliest selectable date, ISO." },
      { name: "max", type: "string?", required: false, def: "—", desc: "Latest selectable date, ISO." },
      { name: "clearable", type: "boolean", required: false, def: "true", desc: "Show the Clear button when a value is set." },
      { name: "invalid", type: "boolean", required: false, def: "false", desc: "Sets aria-invalid on the input. Used by DateRangePicker for the End input." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the input (read-only), then the Calendar button, then into the popover." },
      { key: "Enter / Space", action: "Toggle the popover on the button; select a day inside it." },
      { key: "Escape", action: "Close the popover and return focus to the Calendar button." },
    ],
    invariants: ["The input is read-only. Dates come from the Calendar only, so there is no free-text parsing to get wrong.", "Invalid value prop is treated as null (empty input, Calendar shows the current month).", "Selecting a day calls onChange and closes the popover.", "Clear calls onChange(null) and closes. It only renders when clearable and a value is set.", "Today sets today's ISO and closes. Today is disabled when today is outside min/max.", "Escape closes the popover and returns focus to the Calendar button. Clicking outside the picker closes it.", "The popover is a plain div, not a dialog: no modal behavior, no focus trap.", "ISO strings only, no locale parsing."],
    contract: { format: "oeste.component.v1", component: "DatePicker", props: { value: "string?", onChange: "function", label: "string", placeholder: "string", min: "string?", max: "string?", clearable: "boolean", invalid: "boolean" }, a11y: { input: "read-only input with label, aria-invalid", trigger: "button aria-label Open/Close calendar, aria-expanded, aria-controls", popover: "div with Calendar + Clear + Today", keyboard: "Escape closes, focus returns to trigger" } },
    prompt: "Build an Oeste DatePicker: a label + a read-only text input (value or placeholder YYYY-MM-DD) + a Calendar button (aria-label Open/Close calendar, aria-expanded, aria-controls) that toggles a popover div with a Calendar + Clear + Today. The input is read-only: dates come from the Calendar only, no free-text parsing. Selecting a day calls onChange and closes. Clear (only when clearable and a value is set) calls onChange(null) and closes. Today sets today's ISO and closes, and is disabled when today is outside min/max. Escape closes and returns focus to the button. Clicking outside the picker closes it. Invalid value prop is treated as null. ISO strings only, no locale parsing. Use Topanga tokens: accent #C47D3B (light) / #DB914E (dark).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/date-picker.json",
    code: `import { DatePicker } from "@/components/ui/date-picker";\n\nexport function Due() {\n  const [day, setDay] = React.useState(null);\n  return <DatePicker value={day} onChange={setDay} label="Due date" />;\n}`,
  },
  {
    id: "time-picker", name: "TimePicker", tagline: "Trigger plus time listbox. 12-hour labels, HH:MM value.",
    anatomy: ["Label", "Trigger button (value or Select time)", "Dropdown ul role=listbox", "Options (li role=option, each a button)"],
    props: [
      { name: "value", type: "string?", required: false, def: "—", desc: "Selected time, HH:MM 24-hour, or null." },
      { name: "onChange", type: "(time: string | null) => void", required: true, def: "—", desc: "Fires with the picked HH:MM string." },
      { name: "label", type: "string", required: false, def: "Time", desc: "Label text." },
      { name: "step", type: "30 | 60", required: false, def: "30", desc: "Minutes between options. Anything else falls back to 30." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the trigger, then through the option buttons." },
      { key: "Enter / Space", action: "Toggle the listbox on the trigger; select the focused option." },
      { key: "Escape", action: "Close the listbox and return focus to the trigger." },
    ],
    invariants: ["Times are HH:MM 24-hour strings. The list shows 12-hour labels (12:00 AM, 1:00 PM); the value stays HH:MM.", "Options run 00:00 to 23:30 (step 30) or 23:00 (step 60).", "Invalid value prop is treated as null (trigger shows Select time, no option selected).", "A valid value that is not on the step grid still displays; no option is highlighted.", "Clicking an option calls onChange and closes.", "Escape closes and returns focus to the trigger. Clicking outside the picker closes it.", "Options are buttons. Tab moves through them, Enter selects. No arrow-key navigation."],
    contract: { format: "oeste.component.v1", component: "TimePicker", props: { value: "string?", onChange: "function", label: "string", step: "30 | 60" }, a11y: { trigger: "button aria-haspopup=listbox, aria-expanded, aria-controls", list: "ul role=listbox, li role=option aria-selected", options: "buttons, Tab navigation, Enter selects", display: "12-hour labels, value stays HH:MM" } },
    prompt: "Build an Oeste TimePicker: a label + a trigger button (value or Select time, aria-haspopup=listbox, aria-expanded, aria-controls) that toggles a dropdown ul role=listbox. Options are li role=option aria-selected, each holding a button. Step 30 gives 48 options (00:00 to 23:30), step 60 gives 24 (00:00 to 23:00). Labels are 12-hour (12:00 AM, 1:00 PM); the value stays HH:MM 24-hour. Clicking an option calls onChange and closes. Escape closes and returns focus to the trigger. Clicking outside the picker closes it. Options are buttons: Tab moves through them, Enter selects, no arrow keys. Invalid value prop is treated as null. Use Topanga tokens: accent #C47D3B (light) / #DB914E (dark).",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/time-picker.json",
    code: `import { TimePicker } from "@/components/ui/time-picker";\n\nexport function Start() {\n  const [time, setTime] = React.useState("14:30");\n  return <TimePicker value={time} onChange={setTime} label="Start time" />;\n}`,
  },
  {
    id: "date-range-picker", name: "DateRangePicker", tagline: "Two DatePickers, one range. End-before-start is an error.",
    anatomy: ["Fieldset + legend", "Start DatePicker", "End DatePicker (aria-invalid on error)", "Clear button", "Error message (role=alert)"],
    props: [
      { name: "start", type: "string?", required: false, def: "—", desc: "Start date, ISO YYYY-MM-DD, or null." },
      { name: "end", type: "string?", required: false, def: "—", desc: "End date, ISO YYYY-MM-DD, or null." },
      { name: "onChange", type: "({ start, end }) => void", required: true, def: "—", desc: "Fires with the new pair on any valid change, or { start: null, end: null } on Clear." },
      { name: "label", type: "string", required: false, def: "Date range", desc: "Legend text." },
      { name: "min", type: "string?", required: false, def: "—", desc: "Earliest selectable date, ISO." },
      { name: "max", type: "string?", required: false, def: "—", desc: "Latest selectable date, ISO." },
      { name: "clearable", type: "boolean", required: false, def: "true", desc: "Show the Clear button when either date is set." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus through the Start picker, then the End picker, then Clear." },
      { key: "Enter / Space", action: "Toggle each picker's popover; select days inside." },
      { key: "Escape", action: "Close the open popover and return focus to its trigger." },
    ],
    invariants: ["Composes two DatePickers (Start, End) with clearable={false} plus one range Clear button.", "Changing Start or End calls onChange with the new pair.", "When end is before start, an error message (role=alert) shows and the End input gets aria-invalid. onChange is NOT called with the invalid pair; the last valid pair stays.", "A stale error clears when the parent passes a new pair.", "Same-day ranges are valid.", "Clear calls onChange({ start: null, end: null }).", "ISO strings only, no locale parsing."],
    contract: { format: "oeste.component.v1", component: "DateRangePicker", props: { start: "string?", end: "string?", onChange: "function", label: "string", min: "string?", max: "string?", clearable: "boolean" }, a11y: { group: "fieldset + legend", error: "role=alert message + aria-invalid on End input, invalid pair never passed to onChange", keyboard: "Escape closes popover, focus returns to trigger" } },
    prompt: "Build an Oeste DateRangePicker: a fieldset + legend holding two DatePickers (Start, End, clearable false) plus one range Clear button. Changing Start or End calls onChange with the new pair. When end is before start, show an error message (role=alert) and set aria-invalid on the End input; do NOT call onChange with the invalid pair, keep the last valid pair. A stale error clears when the parent passes a new pair. Same-day ranges are valid. Clear calls onChange({ start: null, end: null }). ISO strings only, no locale parsing. Use Topanga tokens: danger #A83E22 (light) / #E07A52 (dark) for the error text.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/date-range-picker.json",
    code: `import { DateRangePicker } from "@/components/ui/date-range-picker";\n\nexport function Trip() {\n  const [range, setRange] = React.useState({ start: "2026-10-01", end: "2026-10-15" });\n  return <DateRangePicker start={range.start} end={range.end} onChange={setRange} label="Trip dates" />;\n}`,
  },
  {
    id: "chart", name: "Chart", tagline: "Bar, line, area, pie, donut. One series, SVG + data table.",
    anatomy: ["SVG chart (bars, line, area, or slices)", "Value axis (ticks + gridlines, bar/line/area only)", "Category axis (labels, bar/line/area only)", "Legend (pie/donut only: swatch + label + value + percent)", "Data table (caption + Label/Value, Percent for pie/donut)"],
    props: [
      { name: "type", type: '"bar" | "line" | "area" | "pie" | "donut"', required: false, def: '"bar"', desc: "Chart type." },
      { name: "data", type: "{ label: string, value: number }[]", required: true, def: "-", desc: "One series. Values are non-negative; negatives are treated as 0." },
      { name: "title", type: "string", required: false, def: "-", desc: "Chart title. Used in the table caption and the SVG aria-label." },
      { name: "height", type: "number", required: false, def: "240", desc: "SVG height in px. Width is 100% via viewBox. Minimum 120." },
      { name: "showTable", type: "boolean", required: false, def: "true", desc: "Render the accessible data table under the chart." },
    ],
    keyboard: [
      { key: "-", action: "Not interactive. No keyboard behavior. The data table is read with a screen reader; it has no focusable controls." },
    ],
    invariants: ["One series only. No multi-series, tooltips, zoom, or animation.", "Values are non-negative. Negative values are treated as 0. Empty data, all-zero data, or a zero total (pie/donut) renders 'No data.'", "Bar/line/area share one axis system: value ticks at 0, 25%, 50%, 75%, 100% of max, rounded to a clean step. Horizontal gridlines. Category labels under each point.", "Bar: vertical bars, value label on each bar. Line: polyline + dots + value labels. Area: line + filled area under the line.", "Pie: slices proportional to values, label + percent at centroids. Donut: center hole + total in the center, plus a legend (swatch + label + value + percent).", "Slice labels sit at centroids and can crowd on tiny slices. Long category labels truncate in the SVG; the full label is always in the table.", "The SVG is role=img with a one-line summary aria-label; all shapes are aria-hidden. The semantic data table is the accessible representation. Values are in the table and on slice labels, never color alone."],
    contract: { format: "oeste.component.v1", component: "Chart", props: { type: ["bar", "line", "area", "pie", "donut"], data: "array", title: "string?", height: "number", showTable: "boolean" }, a11y: { chart: "svg role=img + aria-label, shapes aria-hidden", table: "semantic table + caption + th scope", color: "values in table + slice text labels, never color alone" } },
    prompt: "Build a Topanga Chart: one series, SVG + data table. Types bar, line, area, pie, donut. Bar/line/area share one axis system (value ticks at 0, 25%, 50%, 75%, 100% of max rounded to a clean step, horizontal gridlines, category labels). Bar has value labels on bars; line has a polyline + dots + value labels; area adds the fill under the line. Pie slices are proportional with label + percent at centroids; donut adds a center hole + total in the center, plus a legend (swatch + label + value + percent). The SVG is role=img with a one-line summary aria-label, shapes aria-hidden; the semantic data table (caption + th scope, Percent column for pie/donut) is the accessible representation. One series only, no tooltips, zoom, or animation. Empty, all-zero, or zero-total data renders 'No data.' Use Topanga tokens: accent #C47D3B (light) / #DB914E (dark), text #1C1917 / #F5F3EF, muted #706963 / #9E968F, sage #5E6B5A / #8B9B87, rust #B85B35 / #D98A63 for the categorical palette.",
    cli: "npx shadcn@latest add https://oeste.hiddeninwest.com/r/chart.json",
    code: `import { Chart } from "@/components/ui/chart";\n\nexport function Sales() {\n  const data = [{ label: "Jan", value: 42 }, { label: "Feb", value: 87 }, { label: "Mar", value: 15 }, { label: "Apr", value: 63 }];\n  return <Chart type="bar" data={data} title="Sales" />;\n}`,
  },

]);
