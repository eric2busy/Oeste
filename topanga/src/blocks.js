// Oeste Blocks — Topanga theme (v0.4.8).
// Blocks are full page sections composed ONLY from the components in
// src/index.js. They live on the web side (docs + registry); the Figma
// library keeps its generic-placeholder rule, blocks demos may use
// realistic content.
//
// Source of truth for the registry builder (scripts/build_registry.py):
// one export function per block (Block<Name>) plus one BLOCK_DOCS entry.
// The builder inlines every component a block uses, so each block's
// registry file (r/<id>.json, type registry:block) is self-contained,
// same as components.
//
// BLOCK_DOCS entry shape:
//   {
//     id: "hero",            // url + registry id, kebab-case; never a
//                            // component id (slugs are collision-free)
//     name: "Hero",          // display name
//     tagline: "...",        // one line, used in docs + registry
//     category: "Marketing", // Marketing | Navigation | Content |
//                            // Application (per the spec pack)
//     uses: ["button"],      // component ids this block composes:
//                            // everything it renders directly, plus
//                            // any it is responsible for through a
//                            // direct dep (Button inside EmptyState).
//                            // The builder fails on a direct render
//                            // that is not declared, and on a
//                            // declaration that never reaches the
//                            // file; the transitive closure is
//                            // recorded as `includes`.
//   }
//
// Compositions come from the block spec pack
// (figma-libraries/topanga/blocks-spec.md). Do not invent compositions
// outside the spec.
//
// Recorded deviation (2026-10-23): the spec lists Label in the
// dependency sets for Footer, Login, and Blog List ("Label plus
// Input"). In the web set, Input renders its own <label> element and
// never composes the Label component, so Label cannot appear in
// those blocks' files. The spec's intent (a visible, persistent
// label on every field) is delivered by Input itself; `uses` records
// only what actually ships in the file.
//
// Decision (Eric, 2026-10-23, closing spec open decision 2): the
// Blog List cover area is Badge only. The spec left the cover
// treatment open; the big Rust display letter was built, Eric
// did not take it (he could not see what it was for), and the
// cover now carries only the category Badge, plus the Featured
// Badge where it applies.

export const BLOCK_DOCS = [
  {
    id: "hero",
    name: "Hero",
    tagline: "The opening statement: headline, lede, two actions, and one composed product panel.",
    category: "Marketing",
    uses: ["badge", "button", "card", "chart", "progress", "avatar", "separator"],
  },
  {
    id: "navbar",
    name: "Navbar",
    tagline: "The top bar: wordmark, section links, one action, and an account menu.",
    category: "Navigation",
    uses: ["button", "dropdown-menu", "avatar", "badge", "separator"],
  },
  {
    id: "logo-cloud",
    name: "Logo Cloud",
    tagline: "A ruled band of customer wordmarks set as text.",
    category: "Marketing",
    uses: ["separator"],
  },
  {
    id: "features-bento",
    name: "Features",
    tagline: "A bento grid of feature tiles led by headings, with live component insets.",
    category: "Marketing",
    uses: ["card", "badge", "chart", "progress", "table", "calendar"],
  },
  {
    id: "stats-band",
    name: "Stats Band",
    tagline: "A ruled band of three or four labelled figures.",
    category: "Marketing",
    uses: ["separator", "badge"],
  },
  {
    id: "pricing",
    name: "Pricing",
    tagline: "Plan cards with a billing period control and an optional comparison table.",
    category: "Marketing",
    uses: ["card", "badge", "button", "separator", "radiogroup", "table"],
  },
  {
    id: "testimonials",
    name: "Testimonials",
    tagline: "Quote cards with initial avatars, names, and roles.",
    category: "Marketing",
    uses: ["card", "avatar", "badge"],
  },
  {
    id: "faq",
    name: "FAQ",
    tagline: "An accordion of questions with a contact route at the foot.",
    category: "Marketing",
    uses: ["accordion", "collapsible", "separator", "button"],
  },
  {
    id: "cta",
    name: "CTA",
    tagline: "One closing ask on a single card: heading, one line, one primary action.",
    category: "Marketing",
    uses: ["card", "button", "badge"],
  },
  {
    id: "footer",
    name: "Footer",
    tagline: "The closing index: link columns, a wordmark, and a legal line.",
    category: "Navigation",
    uses: ["separator", "input", "button"],
  },
  {
    id: "login-auth",
    name: "Login",
    tagline: "A sign-in card with labelled fields, an error alert, and an account switch.",
    category: "Application",
    uses: ["card", "input", "checkbox", "button", "alert", "separator", "tabs"],
  },
  {
    id: "blog-list",
    name: "Blog List",
    tagline: "A list of text-led post cards with category tabs and pagination.",
    category: "Content",
    uses: ["card", "badge", "avatar", "tabs", "pagination", "input", "separator", "skeleton"],
  },
  {
    id: "empty-state-block",
    name: "Empty State",
    tagline: "A full section empty state with one clear next step.",
    category: "Application",
    uses: ["empty-state", "card", "button"],
  },
  {
    id: "announcement-bar",
    name: "Announcement Bar",
    tagline: "A slim persistent band above the navbar with one message and one action.",
    category: "Marketing",
    uses: ["badge", "button", "separator"],
  },
];

export function BlockHero({ variant = "split" }) {
  if (variant === "centred") {
    return (
      <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:py-24">
        <div className="mx-auto max-w-[760px] text-center">
          <Badge tone="accent">For small studios</Badge>
          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-[-0.06em] md:text-[3rem] lg:text-[4.5rem]">Every project, one calm page.</h1>
          <p className="mx-auto mt-6 max-w-[560px] text-lg leading-relaxed text-[#706963] dark:text-[#9e968f]">Fieldbook keeps a project's notes, decisions, and files on one page your whole studio can read at a glance.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="primary" onClick={() => {}}>Start a project</Button>
            <Button variant="secondary" onClick={() => {}}>See how it works</Button>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-16">
        <div>
          <Badge tone="accent">For small studios</Badge>
          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-[-0.06em] md:text-[3rem] lg:text-[4.5rem]">Every project, one calm page.</h1>
          <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-[#706963] dark:text-[#9e968f]">Fieldbook keeps a project's notes, decisions, and files on one page your whole studio can read at a glance. No digging through threads to find what was decided.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" onClick={() => {}}>Start a project</Button>
            <Button variant="secondary" onClick={() => {}}>See how it works</Button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <span className="flex -space-x-2" aria-hidden="true">
              <Avatar name="Maya Chen" />
              <Avatar name="Jonas Weber" />
              <Avatar name="Priya Nair" />
            </span>
            <p className="text-sm text-[#706963] dark:text-[#9e968f]">Trusted by 2,400 small studios.</p>
          </div>
        </div>
        <Card title="Projects this year" headingLevel={2}>
          <Chart type="bar" title="Projects completed per month" data={[{ label: "Feb", value: 18 }, { label: "Mar", value: 24 }, { label: "Apr", value: 21 }, { label: "May", value: 29 }, { label: "Jun", value: 33 }, { label: "Jul", value: 31 }]} />
          <div className="mt-6">
            <Progress label="Workspace migration" value={68} />
          </div>
          <div className="mt-4">
            <Badge tone="success">On track</Badge>
          </div>
        </Card>
      </div>
      <div className="mx-auto mt-16 max-w-[1200px]">
        <Separator />
      </div>
    </section>
  );
}

export function BlockNavbar({ variant = "marketing" }) {
  const linkCls = "inline-flex min-h-11 items-center text-[#1c1917] dark:text-[#f5f3ef]";
  return (
    <header className="bg-[#f6f4f1] text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef]">
      <nav aria-label="Main" className="mx-auto flex min-h-16 max-w-[1200px] items-center gap-6 px-6 py-2 lg:px-8">
        <a href="#" className="text-lg font-bold tracking-[-0.025em]">Fieldbook</a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#" aria-current="page" className={linkCls + " font-semibold"}>Product</a>
          <a href="#" className={linkCls}>Pricing</a>
          <a href="#" className={linkCls}>Journal</a>
          <a href="#" className={linkCls}>About</a>
        </div>
        <div className="ml-auto flex items-center gap-3">
          {variant === "app" ? (
            <span className="relative inline-flex">
              <DropdownMenu label="Account menu" items={[{ label: "Profile", onSelect: () => {} }, { label: "Settings", onSelect: () => {} }, { label: "Sign out", onSelect: () => {} }]}>
                <button type="button" aria-label="Account menu" className="inline-flex rounded-full">
                  <Avatar name="Maya Chen" />
                </button>
              </DropdownMenu>
              <span className="absolute -right-2 -top-2">
                <Badge tone="accent">3</Badge>
              </span>
            </span>
          ) : (
            <>
              <a href="#" className={"hidden md:inline-flex " + linkCls}>Sign in</a>
              <span className="hidden md:inline-flex">
                <Button variant="primary" onClick={() => {}}>Start free</Button>
              </span>
            </>
          )}
          <span className="md:hidden">
            <DropdownMenu label="Menu" items={[{ label: "Product", onSelect: () => {} }, { label: "Pricing", onSelect: () => {} }, { label: "Journal", onSelect: () => {} }, { label: "About", onSelect: () => {} }, { label: "Start free", onSelect: () => {} }]}>
              <button type="button" className="inline-flex min-h-11 items-center rounded-md px-3 font-semibold">Menu</button>
            </DropdownMenu>
          </span>
        </div>
      </nav>
      <Separator />
    </header>
  );
}

export function BlockLogoCloud() {
  const marks = ["Alder Studio", "Northlight", "Casa Verde", "Fern and Co", "Bluehour", "Atlas Ceramics"];
  return (
    <section aria-label="Studios using Fieldbook" className="bg-[#f6f4f1] px-6 py-12 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-sm text-[#706963] dark:text-[#9e968f]">Studios that keep their projects in Fieldbook</p>
        <div className="mt-6">
          <Separator />
        </div>
        <ul className="grid list-none grid-cols-2 gap-x-6 gap-y-4 p-0 py-8 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between">
          {marks.map((m) => (
            <li key={m} className="text-base font-semibold text-[#706963] dark:text-[#9e968f]">{m}</li>
          ))}
        </ul>
        <Separator />
      </div>
    </section>
  );
}

export function BlockFeaturesBento() {
  const [day, setDay] = React.useState("2026-10-14");
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[640px]">
          <Badge tone="accent">Capabilities</Badge>
          <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] lg:text-[2.5rem]">Everything a project needs, nothing it does not</h2>
          <p className="mt-4 leading-relaxed text-[#706963] dark:text-[#9e968f]">Five capabilities carry a project from first note to final delivery. Each one is a working part of the page, not a picture of one.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Card title="Progress you can see" headingLevel={3}>
              <p className="leading-relaxed">The page chart updates as work lands, so a client sees the same shape of the project you do.</p>
              <div className="mt-4">
                <Chart type="bar" title="Tasks finished per week" data={[{ label: "W1", value: 12 }, { label: "W2", value: 19 }, { label: "W3", value: 15 }, { label: "W4", value: 22 }, { label: "W5", value: 26 }]} />
              </div>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card title="Dates everyone shares" headingLevel={3}>
              <p className="leading-relaxed">Milestones sit on one calendar. Pick a day and the whole studio sees the same deadline.</p>
              <div className="mt-4">
                <Calendar value={day} onChange={setDay} />
              </div>
            </Card>
          </div>
          <div>
            <Card title="Budgets that stay honest" headingLevel={3}>
              <p className="leading-relaxed">Hours logged against the estimate, visible before the overrun, not after.</p>
              <div className="mt-4">
                <Progress label="Hours used of 120" value={57} />
              </div>
            </Card>
          </div>
          <div>
            <Card title="Decisions on record" headingLevel={3}>
              <p className="leading-relaxed">Every decision lands in a table the client can read: what was decided, when, and by whom.</p>
              <div className="mt-4">
                <Table caption="Recent decisions" columns={[{ key: "what", header: "Decision" }, { key: "when", header: "Date" }]} rows={[{ what: "Homepage direction B", when: "Oct 6" }, { what: "Print run of 500", when: "Oct 9" }, { what: "Launch moved to Nov", when: "Oct 12" }]} />
              </div>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card title="Calm by default" headingLevel={3}>
              <p className="leading-relaxed">No feeds, no pings, no red dots. A project page is a place to read and write, and it behaves like one.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge tone="neutral">No notifications</Badge>
                <Badge tone="neutral">No activity feed</Badge>
                <Badge tone="accent">Weekly digest only</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlockStatsBand({ headed = false }) {
  const figures = [
    { value: "2,400", label: "studios run their projects in Fieldbook", delta: null },
    { value: "12,800", label: "projects completed last year", delta: "Up 18 percent on the year before" },
    { value: "96%", label: "of studios renew after the first year", delta: null },
    { value: "9 min", label: "median time to a first project page", delta: null },
  ];
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        {headed ? (
          <div className="mb-10 max-w-[640px]">
            <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] lg:text-[2.5rem]">The year in numbers</h2>
            <p className="mt-4 leading-relaxed text-[#706963] dark:text-[#9e968f]">Four figures we report every year, counted the same way each time.</p>
          </div>
        ) : null}
        <Separator />
        <dl className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {figures.map((f) => (
            <div key={f.label} className="flex flex-col">
              <dd className="order-1 text-[2.5rem] font-bold leading-none tracking-[-0.06em]">{f.value}</dd>
              <dt className="order-2 mt-3 leading-relaxed text-[#706963] dark:text-[#9e968f]">{f.label}</dt>
              {f.delta ? (
                <p className="order-3 mt-3">
                  <Badge tone="success">{f.delta}</Badge>
                </p>
              ) : null}
            </div>
          ))}
        </dl>
        <p className="pb-8 text-sm text-[#706963] dark:text-[#9e968f]">From Fieldbook customer accounts, January to September 2026.</p>
        <Separator />
      </div>
    </section>
  );
}

export function BlockPricing({ variant = "cards" }) {
  const [period, setPeriod] = React.useState("monthly");
  const plans = [
    { name: "Starter", monthly: 12, annual: 9, audience: "For one person getting organised.", features: ["Up to 5 active projects", "Notes, decisions, and files on one page", "One collaborator per project", "Email support"], recommended: false, action: "Start with Starter" },
    { name: "Studio", monthly: 24, annual: 18, audience: "For small studios working with clients.", features: ["Unlimited active projects", "Client-readable project pages", "Budgets and hour tracking", "Up to 15 seats included", "Priority support"], recommended: true, action: "Start with Studio" },
    { name: "Practice", monthly: 48, annual: 36, audience: "For practices with several teams.", features: ["Everything in Studio", "Multiple workspaces", "Decision archive and exports", "Unlimited seats", "A named support contact"], recommended: false, action: "Start with Practice" },
  ];
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[640px]">
          <Badge tone="accent">Pricing</Badge>
          <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] lg:text-[2.5rem]">One price per person, every feature included</h2>
          <p className="mt-4 leading-relaxed text-[#706963] dark:text-[#9e968f]">Plans differ by scale, not by which features unlock. Pick the size of your studio; change plans whenever it changes.</p>
        </div>
        <div className="mt-8 max-w-[420px]">
          <RadioGroup legend="Billing period" name="billing-period" value={period} onChange={setPeriod} options={[{ value: "monthly", label: "Monthly" }, { value: "annual", label: "Annual", description: "Annual billing saves 25 percent on every plan." }]} />
        </div>
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} title={p.name} headingLevel={3}>
              {p.recommended ? (
                <p className="mb-4">
                  <Badge tone="accent">Recommended</Badge>
                </p>
              ) : null}
              <p>
                <span className="text-[2.5rem] font-bold leading-none tracking-[-0.06em]">${period === "monthly" ? p.monthly : p.annual}</span>{" "}
                <span className="text-[#706963] dark:text-[#9e968f]">per person, per month, billed {period === "monthly" ? "monthly" : "annually"}</span>
              </p>
              <p className="mt-3 leading-relaxed text-[#706963] dark:text-[#9e968f]">{p.audience}</p>
              <div className="my-5">
                <Separator />
              </div>
              <ul className="list-none space-y-2 p-0 leading-relaxed">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="my-5">
                <Separator />
              </div>
              <Button variant={p.recommended ? "primary" : "secondary"} onClick={() => {}}>{p.action}</Button>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm text-[#706963] dark:text-[#9e968f]">Prices in US dollars. Cancel any time; annual plans are refunded pro rata for unused months.</p>
        {variant === "full" ? (
          <div className="mt-12">
            <Table caption="Plan comparison" columns={[{ key: "feature", header: "Feature" }, { key: "starter", header: "Starter" }, { key: "studio", header: "Studio" }, { key: "practice", header: "Practice" }]} rows={[{ feature: "Active projects", starter: "Up to 5", studio: "Unlimited", practice: "Unlimited" }, { feature: "Client-readable pages", starter: "Not included", studio: "Included", practice: "Included" }, { feature: "Budgets and hours", starter: "Not included", studio: "Included", practice: "Included" }, { feature: "Seats included", starter: "1", studio: "Up to 15", practice: "Unlimited" }, { feature: "Decision archive", starter: "Not included", studio: "Not included", practice: "Included" }, { feature: "Support", starter: "Email", studio: "Priority email", practice: "Named contact" }]} />
            <p className="mt-6">
              <a href="#faq" className="font-semibold underline">Questions about plans, answered in the FAQ</a>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function BlockTestimonials() {
  const quotes = [
    { quote: "We stopped losing decisions in chat threads. Every call we make on a project sits on its page, and clients read the same page we do.", name: "Maya Chen", role: "Studio lead, Alder Studio", badge: "Studio plan" },
    { quote: "Bringing a freelancer in takes an afternoon now. They read the project page and start; nobody has to brief them from memory.", name: "Jonas Weber", role: "Producer, Northlight", badge: null },
    { quote: "Our end-of-project reviews write themselves. The page already holds what happened, in the order it happened, with the reasons attached.", name: "Priya Nair", role: "Founder, Fern and Co", badge: null },
  ];
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[640px]">
          <Badge tone="accent">Customers</Badge>
          <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] lg:text-[2.5rem]">Studios that switched, in their words</h2>
          <p className="mt-4 leading-relaxed text-[#706963] dark:text-[#9e968f]">Three studios on what changed once every project had one page.</p>
        </div>
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <Card key={q.name} title={q.name} headingLevel={3}>
              <blockquote>
                <p className="leading-relaxed">{q.quote}</p>
              </blockquote>
              <footer className="mt-5 flex items-center gap-3">
                <Avatar name={q.name} />
                <p className="text-sm text-[#706963] dark:text-[#9e968f]">{q.role}</p>
              </footer>
              {q.badge ? (
                <p className="mt-4">
                  <Badge tone="neutral">{q.badge}</Badge>
                </p>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlockFaq({ variant = "standard" }) {
  const items = [
    { title: "How much does Fieldbook cost?", content: "Plans run per person, per month: Starter is $12 monthly or $9 on annual billing, Studio is $24 or $18, and Practice is $48 or $36. Every plan includes every feature; plans differ by scale, not by unlocks." },
    { title: "Is there a free trial?", content: "Yes. Every plan starts with 30 days free, and no card is asked for up front. If you do nothing at the end of the trial, the workspace simply pauses; your pages stay readable for another 60 days." },
    { title: "Can clients read our project pages?", content: "Yes, on Studio and Practice plans. A client sees the page you share: notes, decisions, dates, and files, without needing an account or a login. You choose which pages are shared, and sharing can be withdrawn at any time." },
    { title: "How do we move existing projects in?", content: "Most studios start with their active projects and leave the archive where it is. Notes paste in as text, files attach to the page, and a typical project page takes about nine minutes to set up. Imports from common note tools are supported on every plan." },
    { title: "What happens to our pages if we cancel?", content: "Your pages export as plain files you keep, in full, including decisions and attachments. Cancellation takes effect at the end of the billing period, and annual plans are refunded pro rata for unused months." },
    { title: "Who can see a project page inside our studio?", content: "Only the people you add to the workspace. A page is visible to its project members and to workspace owners; there is no public directory of pages, and nothing is indexed or shared outside your studio." },
  ];
  if (variant === "compact") {
    return (
      <div className="bg-[#f6f4f1] px-6 py-8 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef]">
        <div className="space-y-4">
          {items.slice(0, 4).map((it) => (
            <Collapsible key={it.title} title={it.title}>
              <p className="leading-relaxed text-[#706963] dark:text-[#9e968f]">{it.content}</p>
            </Collapsible>
          ))}
        </div>
      </div>
    );
  }
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[640px]">
          <h2 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] lg:text-[2.5rem]">Questions, answered plainly</h2>
          <p className="mt-4 leading-relaxed text-[#706963] dark:text-[#9e968f]">The six questions every studio asks before switching, with the short answer first.</p>
        </div>
        <div className="mt-10 max-w-[880px]">
          <Accordion items={items} />
        </div>
        <div className="mt-10 max-w-[880px]">
          <Separator />
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <p className="leading-relaxed text-[#706963] dark:text-[#9e968f]">Still deciding? Talk it through with a person.</p>
            <Button variant="secondary" onClick={() => {}}>Contact support</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlockCta() {
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Card title="Give every project a calm page" headingLevel={2}>
          <p className="mb-5">
            <Badge tone="neutral">30 days free</Badge>
          </p>
          <p className="max-w-[640px] leading-relaxed text-[#706963] dark:text-[#9e968f]">Set up a workspace in minutes, put one real project on a page, and see whether your studio reads it the way ours do.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="primary" onClick={() => {}}>Create your workspace</Button>
            <a href="#" className="inline-flex min-h-11 items-center font-semibold underline">Talk to us first</a>
          </div>
        </Card>
      </div>
    </section>
  );
}

export function BlockFooter({ variant = "standard" }) {
  const columns = [
    { heading: "Product", links: ["Features", "Pricing", "Journal", "Changelog"] },
    { heading: "Studio", links: ["About", "Customers", "Careers", "Contact"] },
    { heading: "Resources", links: ["Help centre", "Guides", "Community", "Status"] },
  ];
  return (
    <footer className="bg-[#f6f4f1] px-6 pb-10 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Separator />
        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-lg font-bold tracking-[-0.025em]">Fieldbook</p>
            <p className="mt-3 max-w-[320px] leading-relaxed text-[#706963] dark:text-[#9e968f]">A project journal for small studios: notes, decisions, and files on one calm page.</p>
            {variant === "newsletter" ? (
              <form className="mt-6 max-w-[320px]" onSubmit={(e) => e.preventDefault()}>
                <Input id="footer-newsletter-email" label="Email address" value="" onChange={() => {}} type="email" autoComplete="email" hint="One email a month, on running a calmer studio." />
                <div className="mt-3">
                  <Button variant="secondary" type="submit">Subscribe</Button>
                </div>
              </form>
            ) : null}
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold">{col.heading}</h3>
                <ul className="mt-4 list-none space-y-1 p-0">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="inline-flex min-h-11 items-center text-[#706963] hover:text-[#1c1917] dark:text-[#9e968f] dark:hover:text-[#f5f3ef]">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <Separator />
        <div className="flex flex-col gap-3 pt-6 text-sm text-[#706963] dark:text-[#9e968f] lg:flex-row lg:items-center">
          <p>Copyright 2026 Fieldbook Studio. All rights reserved.</p>
          <p className="flex gap-6 lg:ml-auto">
            <a href="#" className="inline-flex min-h-11 items-center hover:text-[#1c1917] dark:hover:text-[#f5f3ef]">Privacy</a>
            <a href="#" className="inline-flex min-h-11 items-center hover:text-[#1c1917] dark:hover:text-[#f5f3ef]">Terms</a>
            <a href="#" className="inline-flex min-h-11 items-center hover:text-[#1c1917] dark:hover:text-[#f5f3ef]">Licence</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function BlockLoginAuth({ mode = "signin" }) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [error, setError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    const ee = email.includes("@") ? "" : "Enter the email address for your account, including the @ and the domain.";
    const pe = password.length >= 1 ? "" : "Enter your password. If you have forgotten it, use the forgot password link below.";
    setEmailError(ee);
    setPasswordError(pe);
    setError(ee || pe ? "We could not sign you in. Check the fields below and try again." : "");
  };
  const signInForm = (
    <form onSubmit={submit} noValidate>
      {error ? (
        <div className="mb-5">
          <Alert tone="danger" role="alert">{error}</Alert>
        </div>
      ) : null}
      <div className="space-y-4">
        <Input label="Email address" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} error={emailError || undefined} />
        <Input label="Password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} error={passwordError || undefined} />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Checkbox label="Remember me" checked={remember} onChange={setRemember} />
        <a href="#" className="ml-auto inline-flex min-h-11 items-center font-semibold underline">Forgot password</a>
      </div>
      <div className="mt-2 [&_button]:w-full">
        <Button variant="primary" type="submit">Sign in</Button>
      </div>
    </form>
  );
  const createForm = (
    <form onSubmit={submit} noValidate>
      {error ? (
        <div className="mb-5">
          <Alert tone="danger" role="alert">{error}</Alert>
        </div>
      ) : null}
      <div className="space-y-4">
        <Input label="Your name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email address" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} error={emailError || undefined} />
        <Input label="Password" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} error={passwordError || undefined} hint="At least 12 characters, or a passphrase you can remember." />
      </div>
      <div className="mt-5 [&_button]:w-full">
        <Button variant="primary" type="submit">Create account</Button>
      </div>
    </form>
  );
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:py-24">
      <div className="mx-auto max-w-[440px]">
        <Card title={mode === "create" ? "Create account" : "Sign in"} headingLevel={1}>
          <p className="mb-6 leading-relaxed text-[#706963] dark:text-[#9e968f]">{mode === "create" ? "Start your studio workspace. Set up takes a few minutes." : "Welcome back. Pick up your projects where you left them."}</p>
          <Tabs defaultIndex={mode === "create" ? 1 : 0} items={[{ label: "Sign in", content: signInForm }, { label: "Create account", content: createForm }]} />
          <div className="my-6 flex items-center gap-4 [&_hr]:my-0">
            <span className="flex-1">
              <Separator />
            </span>
            <span className="text-sm text-[#706963] dark:text-[#9e968f]">or continue with</span>
            <span className="flex-1">
              <Separator />
            </span>
          </div>
          <div className="space-y-3 [&_button]:w-full">
            <Button variant="secondary" onClick={() => {}}>Continue with Google</Button>
            <Button variant="secondary" onClick={() => {}}>Continue with Microsoft</Button>
          </div>
        </Card>
        <p className="mt-6 text-center text-sm leading-relaxed text-[#706963] dark:text-[#9e968f]">
          {mode === "create" ? (
            <>Already have an account? <a href="#" className="font-semibold text-[#1c1917] underline dark:text-[#f5f3ef]">Sign in</a></>
          ) : (
            <>New to Fieldbook? <a href="#" className="font-semibold text-[#1c1917] underline dark:text-[#f5f3ef]">Create an account</a></>
          )}{" "}
          By continuing you agree to the <a href="#" className="underline">terms</a> and <a href="#" className="underline">privacy policy</a>.
        </p>
      </div>
    </section>
  );
}

export function BlockBlogList({ layout = "featured", loading = false }) {
  const posts = [
    { category: "Process", title: "The one-page project brief", excerpt: "A project brief that fits on one page forces the decisions that matter to the top. Here is the shape our studio uses, and the questions it answers before work starts.", author: "Maya Chen", date: "October 20, 2026", minutes: 6, featured: true },
    { category: "Process", title: "Decisions are deliverables too", excerpt: "Every project produces decisions as well as files. Recording them where the work lives saves the end-of-project archaeology dig.", author: "Jonas Weber", date: "October 14, 2026", minutes: 4, featured: false },
    { category: "Studio life", title: "Fewer meetings, longer notes", excerpt: "We replaced the Monday status meeting with a written page update. What changed, and what we had to learn to write clearly.", author: "Priya Nair", date: "October 8, 2026", minutes: 5, featured: false },
    { category: "Craft", title: "Naming files so future you says thanks", excerpt: "A small convention for file names that survives handovers, clients, and the passage of time. It takes one sentence to state.", author: "Maya Chen", date: "September 30, 2026", minutes: 3, featured: false },
    { category: "Process", title: "What to write in the weekly update", excerpt: "Three short sections cover a week of project work: what changed, what was decided, what happens next. Anything else is decoration.", author: "Jonas Weber", date: "September 22, 2026", minutes: 4, featured: false },
    { category: "Craft", title: "Handovers without the handover meeting", excerpt: "A project page that a colleague can pick up cold is a design problem, not a documentation problem. These are the pieces that make it work.", author: "Priya Nair", date: "September 15, 2026", minutes: 7, featured: false },
  ];
  const categories = ["All", "Process", "Studio life", "Craft"];
  const [page, setPage] = React.useState(1);
  const [query, setQuery] = React.useState("");
  const pageSize = 5;
  const listFor = (cat) => posts.filter((p) => (cat === "All" || p.category === cat) && (p.title + " " + p.excerpt).toLowerCase().includes(query.toLowerCase()));
  const postCard = (p) => (
    <Card key={p.title} title={p.title} headingLevel={3}>
      <div className="mb-4 flex items-baseline gap-3 rounded-md bg-[#f6f4f1] px-4 py-3 dark:bg-[#121110]">
        <Badge tone="neutral">{p.category}</Badge>
        {p.featured ? <Badge tone="accent">Featured</Badge> : null}
      </div>
      <p className="leading-relaxed text-[#706963] dark:text-[#9e968f]">{p.excerpt}</p>
      <p className="mt-4 flex items-center gap-3 text-sm text-[#706963] dark:text-[#9e968f]">
        <Avatar name={p.author} />
        <span>{p.author} · {p.date} · {p.minutes} min read</span>
      </p>
    </Card>
  );
  const panelFor = (cat) => {
    const list = listFor(cat);
    const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
    const here = Math.min(page, totalPages);
    const slice = list.slice((here - 1) * pageSize, here * pageSize);
    return (
      <div>
        <p className="mb-5 text-sm text-[#706963] dark:text-[#9e968f]" role="status">{list.length} {list.length === 1 ? "article" : "articles"} in {cat === "All" ? "all categories" : cat}.</p>
        <div className="space-y-6">
          {slice.map(postCard)}
        </div>
        <div className="mt-8">
          <Pagination page={here} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>
    );
  };
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] lg:text-[2.5rem]">The Fieldbook journal</h1>
        <p className="mt-4 max-w-[640px] leading-relaxed text-[#706963] dark:text-[#9e968f]">Notes on running small studio projects with less noise: process, craft, and studio life.</p>
        {layout === "search" ? (
          <div className="mt-8 max-w-[440px]">
            <Input label="Search articles" type="search" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} />
          </div>
        ) : null}
        <div className="my-8">
          <Separator />
        </div>
        {loading ? (
          <div className="space-y-6" aria-label="Loading articles">
            <Skeleton height="180px" label="Loading article" />
            <Skeleton height="180px" label="Loading article" />
            <Skeleton height="180px" label="Loading article" />
          </div>
        ) : (
          <Tabs items={categories.map((cat) => ({ label: cat, content: panelFor(cat) }))} />
        )}
      </div>
    </section>
  );
}

export function BlockEmptyStateBlock({ variant = "first-use" }) {
  const copy = {
    "first-use": { title: "Projects", state: "No projects yet", body: "Your first project page will hold its notes, decisions, and files in one place.", action: "Create a project" },
    "no-results": { title: "Projects", state: "Nothing matched that filter", body: "No projects carry all the filters you set. Clear the filters to see the full list again.", action: "Clear filters" },
    "error": { title: "Projects", state: "Projects could not load", body: "Something went wrong on our side. Try again, and if it keeps happening, contact support.", action: "Try again" },
  };
  const c = copy[variant] || copy["first-use"];
  return (
    <section className="bg-[#f6f4f1] px-6 py-16 text-[#1c1917] dark:bg-[#121110] dark:text-[#f5f3ef] lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Card title={c.title} headingLevel={2}>
          <EmptyState title={c.state} description={c.body} actionLabel={c.action} onAction={() => {}} />
          {variant === "error" ? (
            <p className="mt-4 text-center">
              <a href="#" className="font-semibold underline">Go back to the dashboard</a>
            </p>
          ) : null}
        </Card>
      </div>
    </section>
  );
}

export function BlockAnnouncementBar({ variant = "dismissible" }) {
  const [dismissed, setDismissed] = React.useState(false);
  if (dismissed) return null;
  return (
    <div className="bg-[#fcfaf7] text-[#1c1917] dark:bg-[#1c1917] dark:text-[#f5f3ef]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-3 px-6 py-2 lg:px-8">
        <Badge tone="accent">New</Badge>
        <p className="leading-relaxed">Fieldbook 2.0 is here: project pages now load twice as fast.</p>
        <span className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => {}}>See what changed</Button>
          {variant === "dismissible" ? (
            <Button variant="ghost" size="sm" onClick={() => setDismissed(true)}>Dismiss</Button>
          ) : null}
        </span>
      </div>
      <Separator />
    </div>
  );
}
