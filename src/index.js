// Oeste Design System — Topanga theme (v0.2.0)
// React + Tailwind primitives, copy-paste ready.
// Requires: React 18+ in scope, Tailwind with dark: variant, JSX transform.
// Tokens in this file MUST match src/tokens.json and src/tokens.css exactly.
// Demos are local only — no network, no auth, no data storage.

export const DESIGN_TOKENS = Object.freeze({
  name: "oeste-topanga",
  version: "0.2.0",
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
  },
  type: {
    display: "clamp(2.5rem, 6vw, 4.5rem)", title: "clamp(1.75rem, 4vw, 2.5rem)",
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
      { name: "onClick", type: "() => void", required: false, def: "—", desc: "Click handler." },
    ],
    keyboard: [
      { key: "Tab", action: "Move focus to the button." },
      { key: "Enter / Space", action: "Activate. Space activates on key-up." },
    ],
    invariants: ["Label is always visible text, never icon-only without aria-label.", "Disabled buttons never rely on color alone.", "Focus is 2px ink/paper outline, never removed.", "Danger variant only for destructive actions with a confirm step."],
    contract: { format: "oeste.component.v1", component: "Button", props: { variant: ["primary", "secondary", "ghost", "danger"], size: ["sm", "md", "lg"], disabled: "boolean", loading: "boolean" }, a11y: { focus: "2px ink/paper outline", target: "min 44px", busy: "aria-busy when loading" } },
    prompt: "Build an Oeste Button: variant primary/secondary/ghost/danger, size sm/md/lg, 44px min touch, 2px ink/paper focus outline, aria-busy when loading. Never icon-only without an accessible label. Use Topanga tokens: accent #C47D3B, danger #A83E22 (light) / #E07A52 (dark).",
    cli: "npx @oeste/ui add button",
    code: `import { Button } from "@oeste/ui";\n\nexport function SaveAction() {\n  return <Button variant="primary" onClick={() => {}}>Save changes</Button>;\n}\n// Dark mode: built in via dark: classes. Focus: 2px ink/paper outline.`,
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
    invariants: ["Label is always visible, never placeholder-only.", "Errors use text + icon/role, never color alone.", "aria-invalid is set when error is present.", "Error text uses Danger (#A83E22 light / #E07A52 dark), never Canyon Rust."],
    contract: { format: "oeste.component.v1", component: "Input", props: { label: "string", error: "string?", hint: "string?", disabled: "boolean" }, a11y: { invalid: "aria-invalid + described error", label: "persistent <label>", errorRole: "status" } },
    prompt: "Build an Oeste Input with a persistent visible label, aria-invalid + described error when error is set, error text in Danger #A83E22 (light) / #E07A52 (dark). Never use placeholder as the label. Never use Canyon Rust for error text.",
    cli: "npx @oeste/ui add input",
    code: `import { Input } from "@oeste/ui";\n\nexport function NameField({ value, onChange, error }) {\n  return <Input label="Project name" value={value} onChange={onChange} error={error} hint="At least 3 characters." />;\n}\n// Related: Textarea and Select share the same label + error pattern.`,
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
    cli: "npx @oeste/ui add dialog",
    code: `import { useState } from "react";\nimport { Button, Dialog, Input } from "@oeste/ui";\n\nexport function EditProject() {\n  const [open, setOpen] = useState(false);\n  return (<>\n    <Button onClick={() => setOpen(true)}>Edit project</Button>\n    <Dialog open={open} onOpenChange={setOpen} title="Edit project" description="Rename this project.">\n      <Input label="Project name" value="" onChange={() => {}} />\n    </Dialog>\n  </>);\n}`,
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
    cli: "npx @oeste/ui add card",
    code: `import { Card } from "@oeste/ui";\n\nexport function NoteCard() {\n  return <Card title="Field notes" headingLevel={3}><p>Room to think.</p></Card>;\n}`,
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
    cli: "npx @oeste/ui add tabs",
    code: `import { Tabs } from "@oeste/ui";\n\nexport function Views() {\n  return <Tabs items={[{ label: "Overview", content: "Overview panel." }, { label: "Details", content: "Details panel." }]} />;\n}`,
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
    cli: "npx @oeste/ui add toast",
    code: `import { useState } from "react";\nimport { Button, Toast } from "@oeste/ui";\n\nexport function Preview() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>Show toast</Button><Toast message="Preview complete. Nothing was sent." open={open} onDismiss={() => setOpen(false)} /></>);\n}`,
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
    cli: "npx @oeste/ui add badge",
    code: `import { Badge } from "@oeste/ui";\n\nexport function Status() {\n  return <Badge tone="success">Ready</Badge>;\n}`,
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
    cli: "npx @oeste/ui add checkbox",
    code: `import { useState } from "react";\nimport { Checkbox } from "@oeste/ui";\n\nexport function Notify() {\n  const [checked, setChecked] = useState(false);\n  return <Checkbox label="Email me updates" checked={checked} onChange={setChecked} description="One email per change." />;\n}`,
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
    cli: "npx @oeste/ui add switch",
    code: `import { useState } from "react";\nimport { Switch } from "@oeste/ui";\n\nexport function DarkMode() {\n  const [checked, setChecked] = useState(false);\n  return <Switch label="Dark mode" checked={checked} onChange={setChecked} />;\n}`,
  },,
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
    invariants: ["Label is always visible, never placeholder-only.", "Errors use text + icon/role, never color alone.", "aria-invalid is set when error is present.", "Error text uses Danger (#A83E22 light / #E07A52 dark), never Canyon Rust."],
    contract: { format: "oeste.component.v1", component: "Textarea", props: { label: "string", rows: "number", error: "string?", disabled: "boolean" }, a11y: { invalid: "aria-invalid + described error", label: "persistent <label>", errorRole: "status" } },
    prompt: "Build an Oeste Textarea with a persistent visible label, aria-invalid + described error when error is set, error text in Danger #A83E22 (light) / #E07A52 (dark). Same label + error pattern as Input. Never use placeholder as the label.",
    cli: "npx @oeste/ui add textarea",
    code: `import { Textarea } from "@oeste/ui";\n\nexport function Notes({ value, onChange }) {\n  return <Textarea label="Field notes" value={value} onChange={onChange} rows={4} hint="Anything worth keeping." />;\n}\n// Dark mode: built in via dark: classes.`,
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
    cli: "npx @oeste/ui add select",
    code: `import { Select } from "@oeste/ui";\n\nexport function ThemePicker({ value, onChange }) {\n  return <Select label="Theme" value={value} onChange={onChange} options={[{ value: "topanga", label: "Topanga" }, { value: "paper", label: "Paper" }]} />;\n}`,
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
    cli: "npx @oeste/ui add alert",
    code: `import { Alert } from "@oeste/ui";\n\nexport function SaveError() {\n  return <Alert tone="danger" role="alert">Could not save. Your changes are still here.</Alert>;\n}\n// Dark mode: built in via dark: classes.`,
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
    cli: "npx @oeste/ui add accordion",
    code: `import { Accordion } from "@oeste/ui";\n\nexport function Faq() {\n  return <Accordion items={[{ title: "What is Oeste?", content: "A design system for humans, agents, and vibe coders." }]} />;\n}`,
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
    cli: "npx @oeste/ui add radiogroup",
    code: `import { RadioGroup } from "@oeste/ui";\n\nexport function SizePicker({ value, onChange }) {\n  return <RadioGroup legend="Size" name="size" value={value} onChange={onChange} options={[{ value: "sm", label: "Small" }, { value: "md", label: "Medium" }, { value: "lg", label: "Large" }]} />;\n}`,
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
    cli: "npx @oeste/ui add progress",
    code: `import { Progress } from "@oeste/ui";\n\nexport function Upload({ done }) {\n  return <Progress label="Upload" value={done} />;\n}\n// Dark mode: built in via dark: classes.`,
  },

]);
