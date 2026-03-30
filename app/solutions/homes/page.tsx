import Link from "next/link";

export const metadata = {
  title: "Home Solutions | Haygrid Systems",
  description: "Homes that are ready the moment you move in.",
};

export default function HomesPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Homes that are ready the moment you move in
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            In a well-designed home, you shouldn't see your technology. No access points on the ceiling. No cables along skirting boards. No equipment that disrupts how your space looks.
          </p>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            We design home technology for high-end homes - built into the structure before renovation ends, invisible once it's done, and ready the moment you move in.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center rounded-2xl bg-amber-400 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors">
              → Plan your setup
            </Link>
          </div>
        </div>
        <div>
          <img
            src="/assets/residential-hero.png"
            srcSet="/assets/residential-hero-400w.png 400w, /assets/residential-hero.png 800w"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Modern home interior"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Built for how you actually live */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Built for how you actually live
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-base mb-2">Seamless connectivity everywhere</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Full-home WiFi coverage with no dead zones - every room, every device, without a visible access point in sight. We plan coverage around your floor plan before walls are closed, so nothing gets added after the fact.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-base mb-2">A home that responds to you</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Lighting that sets the mood, climate that adjusts to your routine, blinds and entertainment that work together with a single command. We integrate your entire smart home as one system - simple to use from day one, with nothing left to configure after you move in.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-base mb-2">Security that stays out of the way</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Cameras, door access, and monitoring built into your home - present when you need them, invisible when you don't. No visible hardware that compromises the look of your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built on the Haygrid Stack */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10 p-8 max-w-2xl">
          <h2 className="text-xl font-semibold mb-3">Built on the Haygrid Stack</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
            We build every home setup on the Haygrid Stack - a proven combination of components configured to work together reliably. This means seamless integration between your connectivity, smart home, and security systems, with no compatibility issues and no guesswork.
          </p>
          <p className="mt-4">
            <Link href="/advantage/stack" className="text-amber-500 hover:text-amber-600 font-medium text-sm transition-colors">
              → Learn more about the Haygrid Stack
            </Link>
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Packages</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-8">
            All packages include the equipment required for your home, along with installation and full configuration, delivered as a complete, ready-to-use system.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Home Essential */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-lg">Home Essential</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">For homeowners who need clean, reliable connectivity. Smart home not included.</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>WiFi coverage across key areas</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Core system setup</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$2,500 – $4,500</strong></p>
                <p>Support from: <strong className="text-zinc-700 dark:text-zinc-300">$30/month</strong></p>
              </div>
            </div>

            {/* Home Complete (recommended) */}
            <div className="rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute -top-3 left-4 bg-amber-400 text-zinc-900 text-xs font-semibold px-3 py-1 rounded-full">Recommended</div>
              <h3 className="font-semibold text-lg">Home Complete</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">For most homes - full connectivity, integrated smart home, and security, ready from day one.</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Full-home WiFi coverage</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Integrated smart home setup</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Security system setup</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$3,500 – $8,000</strong></p>
                <p>Support from: <strong className="text-zinc-700 dark:text-zinc-300">$50/month</strong></p>
              </div>
            </div>

            {/* Home Plus */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-lg">Home Plus</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">For larger homes or more advanced setups - multi-zone coverage, enhanced smart home integration, and expanded security.</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Multi-zone coverage</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Enhanced smart home integration</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Expanded security setup</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$8,000 – $15,000+</strong></p>
                <p>Support from: <strong className="text-zinc-700 dark:text-zinc-300">$100/month</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One partner */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">One partner, from design to support</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Most homeowners piece their technology together across multiple providers — one for WiFi, another for smart home, someone else for security. When something doesn't work, nobody takes responsibility.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          We design, build, and support your entire home setup as one team. That means a single point of contact, full visibility across every system, and clear accountability.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          After the build is complete, we stay involved - monitoring your systems, keeping firmware and security current, and resolving issues remotely so they never interrupt how you live. Your home works the way we designed it to, together.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          We also work with you before renovation begins - planning your infrastructure, cable routing, and device placement so we build everything in cleanly from the start.
        </p>
        <div className="mt-6 space-y-2">
          <p><Link href="/advantage/renovation" className="text-amber-500 hover:text-amber-600 font-medium transition-colors">→ Learn about renovation integration</Link></p>
          <p><Link href="/advantage/support" className="text-amber-500 hover:text-amber-600 font-medium transition-colors">→ Learn about ongoing support</Link></p>
          <p><Link href="/contact" className="text-amber-500 hover:text-amber-600 font-medium transition-colors">→ Plan your setup</Link></p>
        </div>
      </section>
    </>
  );
}
