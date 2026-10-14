// Oeste Design System — Topanga theme
// Standalone ES Module worker & documentation workbench

export const DESIGN_TOKENS = Object.freeze({
  name: "oeste-topanga",
  palette: {
    background: "#F6F4F1",
    surface: "#FCFAF7",
    text: "#1C1917",
    muted: "#706963",
    accent: "#E08244",
    accentAlt: "#6C7A68",
    onAccent: "#1C1917",
    border: "rgba(28,25,23,0.1)",
    danger: "#C25E38",
  },
  darkMode: {
    background: "#121110",
    surface: "#1C1A18",
    text: "#F5F3EF",
    muted: "#9E968F",
    accent: "#DB914E",
    accentAlt: "#8B9B87",
    onAccent: "#1C1917",
    border: "rgba(245,243,239,0.1)",
    danger: "#D16D45",
  },
  fonts: {
    body: '"Manrope", Arial, Helvetica, sans-serif',
    display: '"Manrope", Arial, Helvetica, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  radii: { small: "0.25rem", medium: "0.5rem", large: "0.75rem", pill: "999px" },
});

// React Primitives (copy-paste implementations)

export function Button({ children, disabled = false, type = "button", onClick }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="min-h-11 rounded bg-[#e08244] px-5 py-3 font-semibold text-[#1c1917] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export function Input({ label, value, onChange, error, disabled = false }) {
  const id = React.useId();
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">{label}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? id + "-error" : undefined}
        className="min-h-11 w-full rounded border border-[#1c1917]/20 bg-transparent p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-50"
      />
      {error && <p id={id + "-error"} role="status" className="mt-2 text-sm text-[#c25e38]">{error}</p>}
    </div>
  );
}

export function Dialog({ open = false, onOpenChange, title, description, children }) {
  const ref = React.useRef(null);
  const trigger = React.useRef(null);
  const id = React.useId();
  React.useEffect(() => {
    const node = ref.current;
    if (open && !node.open) {
      trigger.current = document.activeElement;
      node.showModal();
    } else if (!open && node.open) node.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      aria-modal="true"
      aria-labelledby={id + "-title"}
      aria-describedby={id + "-description"}
      onCancel={() => onOpenChange(false)}
      onClose={() => {
        onOpenChange(false);
        trigger.current?.focus();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-xl border border-[#1c1917]/10 bg-[#f6f4f1] p-8 text-[#1c1917] backdrop:bg-black/30 dark:border-[#f5f3ef]/10 dark:bg-[#121110] dark:text-[#f5f3ef]"
    >
      <h2 id={id + "-title"} className="text-2xl font-medium">{title}</h2>
      <p id={id + "-description"} className="mt-3 text-sm text-[#706963]">{description}</p>
      <div className="mt-6">{children}</div>
      <button
        type="button"
        onClick={() => onOpenChange(false)}
        className="mt-6 min-h-11 rounded border px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        Close dialog
      </button>
    </dialog>
  );
}

export function Card({ title, children, headingLevel = 3 }) {
  const id = React.useId();
  const Heading = "h" + headingLevel;
  return (
    <section aria-labelledby={id} className="rounded-lg border border-[#1c1917]/10 bg-[#fcfaf7] p-6 text-[#1c1917]">
      <Heading id={id} className="text-xl font-medium">{title}</Heading>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function Tabs({ items, defaultIndex = 0 }) {
  const [active, setActive] = React.useState(defaultIndex);
  const id = React.useId();
  const refs = React.useRef([]);
  function move(event, index) {
    const last = items.length - 1;
    const next = {
      ArrowRight: (index + 1) % items.length,
      ArrowLeft: (index + last) % items.length,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }
  return (
    <div>
      <div role="tablist" aria-label="Content views" className="flex gap-2 border-b pb-2">
        {items.map((item, index) => (
          <button
            key={index}
            ref={(node) => { refs.current[index] = node; }}
            id={id + "-tab-" + index}
            role="tab"
            type="button"
            aria-selected={active === index}
            aria-controls={id + "-panel-" + index}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => move(event, index)}
            className="min-h-11 rounded border px-4 focus-visible:outline focus-visible:outline-2"
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          id={id + "-panel-" + index}
          role="tabpanel"
          aria-labelledby={id + "-tab-" + index}
          hidden={active !== index}
          tabIndex={0}
          className="pt-4"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}

export function Toast({ message, open = false, onDismiss }) {
  return (
    <div className="fixed bottom-6 right-6 max-w-[calc(100%-3rem)]">
      <p role="status" aria-live="polite" aria-atomic="true" className={open ? "rounded-t border bg-[#f6f4f1] p-4 text-[#1c1917]" : "sr-only"}>
        {open ? message : ""}
      </p>
      {open && (
        <button
          type="button"
          onClick={onDismiss}
          className="min-h-11 w-full rounded-b border bg-[#f6f4f1] px-4 text-[#1c1917] focus-visible:outline focus-visible:outline-2"
        >
          Dismiss notification
        </button>
      )}
    </div>
  );
}
