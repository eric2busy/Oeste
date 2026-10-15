// Oeste Design System — Topanga theme (v0.4.3)
// React + Tailwind primitives, copy-paste ready.
// Requires: React 18+ in scope, Tailwind with dark: variant, JSX transform.
// Tokens in this file MUST match src/tokens.json and src/tokens.css exactly.
// Demos are local only — no network, no auth, no data storage.

export const DESIGN_TOKENS = Object.freeze({
  name: "oeste-topanga",
  version: "0.4.3",
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

]);
