import Link from "next/link";

const features = [
  {
    title: "Strategy in Motion",
    description: "Translate product vision into motion frameworks that guide every interaction with clarity.",
    accent: "bg-gradient-to-br from-emerald-300/80 to-sky-300/70",
    stats: ["3 core blueprints", "97% faster onboarding"]
  },
  {
    title: "Adaptive UI Blocks",
    description: "Compose modular UI blocks that stay elegant across breakpoints with auto-layout thinking.",
    accent: "bg-gradient-to-br from-rose-200/90 to-purple-200/80",
    stats: ["40+ responsive slices", "Fully tokenized"]
  },
  {
    title: "Narrative Labs",
    description: "Co-create micro-stories and product walkthroughs that feel human, crisp, and evergreen.",
    accent: "bg-gradient-to-br from-blue-200/80 to-emerald-200/80",
    stats: ["Voice & tone decks", "Session scripting"]
  }
];

const sprints = [
  {
    label: "Day 1",
    title: "Signal Mapping",
    body: "Align on value pillars and audit interaction gaps while we set visual guardrails."
  },
  {
    label: "Day 3",
    title: "Orchestration Lab",
    body: "Prototype motion flows, signature moments, and creative direction that feel distinctly yours."
  },
  {
    label: "Day 5",
    title: "Launch Blueprint",
    body: "Ship fully documented UI libraries, storytelling assets, and implementation-ready specs."
  }
];

const testimonials = [
  {
    quote:
      "EchoFlow captured the essence of our product in ways our internal team struggled to articulate. The final system feels effortless yet unmistakably ours.",
    name: "Lena Park",
    role: "Founder, Relay Analytics"
  },
  {
    quote:
      "They gave us a motion language that actually reinforces our strategy. Everything from onboarding to empty states now feels purposeful.",
    name: "Jordan Michaels",
    role: "Chief Product Officer, Coral"
  }
];

const metrics = [
  { label: "Launch timelines", value: "−36%", detail: "Average reduction after implementing EchoFlow systems." },
  { label: "Activation uplift", value: "+24%", detail: "Feature adoption increase across customer cohorts." },
  { label: "UX debt", value: "↓ to zero", detail: "Teams maintain consistency without slowing experimentation." }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-mesh-light opacity-80" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/5 bg-white/80 shadow-glow backdrop-blur">
            <span className="text-lg font-semibold text-dusk">E</span>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-dusk/60">EchoFlow Studio</p>
            <p className="text-sm text-dusk/70">Minimal systems for expressive teams</p>
          </div>
        </div>

        <div className="hidden items-center gap-4 text-sm md:flex">
          <Link
            href="#workshop"
            className="rounded-full border border-dusk/10 bg-white/60 px-5 py-2 text-dusk/80 shadow-sm backdrop-blur transition hover:border-dusk/20 hover:text-dusk"
          >
            Workshop
          </Link>
          <Link
            href="#cases"
            className="rounded-full border border-transparent bg-dusk px-5 py-2 text-pearl transition hover:bg-midnight"
          >
            Case Library
          </Link>
        </div>
      </header>

      <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-10 md:px-10 lg:flex-row lg:items-center">
        <div className="relative max-w-xl space-y-6">
          <span className="text-sm font-medium uppercase tracking-[0.4em] text-dusk/60">Product Design Partner</span>
          <h1 className="text-4xl font-semibold leading-tight text-dusk md:text-5xl lg:text-6xl">
            Minimalist experiences that still feel alive, guided by strategy-first design.
          </h1>
          <p className="text-lg text-dusk/70">
            We land your next release with modular UI kits, motion libraries, and brand narratives that your team can
            iterate on without losing soul.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="gradient-border rounded-full bg-dusk px-8 py-3 text-center text-pearl shadow-lg shadow-emerald-200/30 transition hover:bg-midnight"
            >
              Start a micro-sprint
            </Link>
            <Link
              href="#cases"
              className="rounded-full border border-dusk/15 bg-white/60 px-8 py-3 text-center text-dusk/80 shadow-sm backdrop-blur transition hover:border-dusk/25 hover:text-dusk"
            >
              Browse signature systems
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/40 bg-white/70 px-5 py-4 shadow-sm backdrop-blur"
              >
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-dusk/50">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-dusk">{metric.value}</p>
                <p className="mt-1 text-sm text-dusk/60">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-md space-y-6">
            <div className="floating" data-delay="200">
              <div className="rounded-3xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium uppercase tracking-[0.3em] text-dusk/50">Systems</span>
                  <span className="text-xs text-dusk/40">v2.4</span>
                </div>
                <p className="mt-4 text-xl font-semibold text-dusk">Adaptive design language</p>
                <p className="mt-2 text-sm text-dusk/60">
                  Tokenized layouts, motion arcs, and interface choreography captured in one living document.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-200 via-sky-200 to-blue-200" />
                  <div>
                    <p className="text-sm font-medium text-dusk">Flow Atlas</p>
                    <p className="text-xs text-dusk/50">Design API connection live</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating" data-delay="400">
              <div className="rounded-3xl border border-white/30 bg-dusk/90 p-6 text-pearl shadow-xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-pearl/70">Motion cues</p>
                <p className="mt-4 text-xl font-semibold leading-snug">
                  We choreograph interface states with micro-interactions that enhance clarity.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {["Pulse", "Glide", "Cascade"].map((item) => (
                    <div key={item} className="rounded-2xl border border-pearl/10 bg-pearl/10 px-3 py-4 text-center text-xs uppercase tracking-[0.4em] text-pearl/80">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs text-pearl/70">Playable motion specs inside Figma & Lottie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-6xl space-y-10 px-6 pb-24 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.4em] text-dusk/60">Capability Stack</span>
            <h2 className="mt-4 text-3xl font-semibold text-dusk md:text-4xl">Shapes built to scale with your roadmap.</h2>
          </div>
          <Link
            href="#contact"
            className="rounded-full border border-dusk/10 bg-white/70 px-6 py-2 text-sm text-dusk/70 backdrop-blur transition hover:border-dusk/20 hover:text-dusk"
          >
            Download service outline
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-dusk/5 bg-white/80 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`absolute inset-x-6 top-6 h-32 rounded-3xl blur-3xl filter ${feature.accent}`} />
              <div className="relative flex h-full flex-col gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-dusk">{feature.title}</h3>
                  <p className="mt-3 text-sm text-dusk/65">{feature.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  {feature.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-dusk/10 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-dusk/70"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="workshop" className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 md:px-10 lg:flex-row">
        <div className="w-full rounded-3xl border border-dusk/5 bg-white/70 p-8 shadow-lg backdrop-blur lg:max-w-sm">
          <span className="text-sm font-medium uppercase tracking-[0.4em] text-dusk/60">Micro-sprints</span>
          <h2 className="mt-4 text-3xl font-semibold text-dusk">5-day design labs with measurable momentum.</h2>
          <p className="mt-4 text-sm text-dusk/65">
            Collaborative workshops that merge narrative and interface, designed for teams ready to translate vision
            into living products.
          </p>
          <div className="mt-6 space-y-6">
            {sprints.map((sprint) => (
              <div key={sprint.title} className="rounded-2xl border border-dusk/10 bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-dusk/50">{sprint.label}</p>
                <p className="mt-2 text-lg font-semibold text-dusk">{sprint.title}</p>
                <p className="mt-1 text-sm text-dusk/65">{sprint.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-6 rounded-3xl border border-dusk/5 bg-dusk/95 p-8 text-pearl shadow-xl">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-pearl/60">
            <span>Live case library</span>
            <span>Signal depth</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Nebula OS", tag: "SaaS Core", copy: "Reframed the onboarding narrative with ambient motion." },
              {
                title: "Marq Labs",
                tag: "Fintech",
                copy: "Introduced calm states across complex data workflows."
              },
              {
                title: "Horizon",
                tag: "Healthcare",
                copy: "Unified design language bridging web and native surfaces."
              },
              {
                title: "Coral",
                tag: "Community",
                copy: "Crafted motion dialect for playful yet focused collaboration."
              }
            ].map((project) => (
              <div key={project.title} className="rounded-2xl border border-pearl/10 bg-pearl/5 p-5">
                <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.4em] text-pearl/60">
                  <span>{project.tag}</span>
                  <span>Case note</span>
                </div>
                <p className="mt-3 text-lg font-semibold text-pearl">{project.title}</p>
                <p className="mt-2 text-sm text-pearl/70">{project.copy}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-pearl/60">
            Every engagement ends with a living toolkit: intuitive documentation, motion libraries, storytelling decks,
            and engineering-ready specs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <div className="rounded-3xl border border-dusk/5 bg-white/75 p-8 shadow-lg backdrop-blur md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.4em] text-dusk/60">Voices</span>
              <h2 className="mt-4 text-3xl font-semibold text-dusk md:text-4xl">Momentum our partners are feeling.</h2>
              <div className="mt-6 space-y-6">
                {testimonials.map((testimonial) => (
                  <blockquote key={testimonial.name} className="rounded-2xl border border-dusk/10 bg-white/70 p-6">
                    <p className="text-sm text-dusk/70">“{testimonial.quote}”</p>
                    <footer className="mt-4 text-sm font-medium text-dusk">
                      {testimonial.name} <span className="font-normal text-dusk/60">— {testimonial.role}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-dusk/10 bg-dusk/95 p-6 text-pearl shadow-xl">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-pearl/70">Partner snapshot</p>
                <p className="mt-3 text-2xl font-semibold text-pearl">“We ship prettier and clearer releases now.”</p>
                <p className="mt-3 text-sm text-pearl/70">
                  Product and marketing teams have a shared design language that unlocks creative momentum without
                  compromising clarity.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm uppercase tracking-[0.35em] text-pearl/70">
                <div className="rounded-2xl border border-pearl/10 bg-pearl/10 p-4">
                  <p>Design API</p>
                  <p className="mt-2 text-2xl font-semibold text-pearl">Live</p>
                </div>
                <div className="rounded-2xl border border-pearl/10 bg-pearl/10 p-4">
                  <p>Rollout</p>
                  <p className="mt-2 text-2xl font-semibold text-pearl">6 wks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-20 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-dusk/5 bg-gradient-to-br from-pearl via-white to-emerald-50 p-10 shadow-2xl">
          <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-200 via-sky-200 to-blue-200 opacity-70 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-3">
              <span className="text-sm font-medium uppercase tracking-[0.4em] text-dusk/60">Let&apos;s design the calm</span>
              <h2 className="text-3xl font-semibold text-dusk md:text-4xl">
                Tell us about the experience you can’t wait to ship.
              </h2>
              <p className="text-sm text-dusk/65">
                Drop in your roadmap, we’ll translate it into micro-sprints, motion language, and story-driven UI ready
                for engineering.
              </p>
            </div>
            <Link
              href="mailto:hello@echoflow.studio"
              className="rounded-full border border-dusk/10 bg-dusk px-7 py-3 text-sm text-pearl transition hover:bg-midnight"
            >
              hello@echoflow.studio
            </Link>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-6 pb-12 text-xs text-dusk/60 md:flex-row md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} EchoFlow Studio. Crafted with precision & calm energy.</p>
        <div className="flex items-center gap-5">
          <Link href="#cases" className="transition hover:text-dusk">
            Systems
          </Link>
          <Link href="#workshop" className="transition hover:text-dusk">
            Workshops
          </Link>
          <a href="https://dribbble.com" className="transition hover:text-dusk" target="_blank" rel="noreferrer">
            Dribbble
          </a>
          <a href="https://www.behance.net" className="transition hover:text-dusk" target="_blank" rel="noreferrer">
            Behance
          </a>
        </div>
      </footer>
    </main>
  );
}
