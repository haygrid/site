import Link from "next/link";

export const metadata = {
  title: "Office Solutions | Haygrid Systems",
  description: "The right access, for the right people, to the right systems.",
};

export default function OfficePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            The right access, for the right people, to the right systems.
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Most office setups grow without a plan. A new system here, a new tool there - each added when needed, rarely designed to work together. Over time, access becomes unclear, critical systems aren't properly protected, and nobody has a complete picture of what's running.
          </p>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            We design office environments the way they should have been built from the start - structured around what matters, secured at every level, and built to stay that way.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center rounded-2xl bg-amber-400 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors">
              → Plan your setup
            </Link>
          </div>
        </div>
        <div>
          <img
            src="/assets/office-hero.png"
            srcSet="/assets/office-hero-400w.png 400w, /assets/office-hero.png 800w"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Office environment"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Built for how teams actually work */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Built for how teams actually work
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-base mb-2">Stay connected and operational</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Your team needs consistent, reliable connectivity across every device and every corner of the office. Downtime stops work.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-base mb-2">Structure access around what matters</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Not every system carries the same risk. We design environments where we separate and protect critical systems - financials, operations, client data - while keeping everyday tools accessible. You control access, log activity, and nothing falls through the gaps.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-base mb-2">Stay secure without slowing down</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Security shouldn't require your team to jump through hoops. We design access structures that are tight where they need to be, and frictionless everywhere else, including secure remote access for teams that work across locations.
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
            We build every office setup on the Haygrid Stack - a proven combination of components configured to work together reliably. This means fewer compatibility issues, more predictable performance, and a setup that stays stable over time.
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
            All packages include the equipment required for your office, along with installation and full configuration, delivered as a complete, ready-to-use system.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Office Core */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-lg">Office Core</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">For very small teams with simple connectivity needs and no complex access or security requirements.</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Network and WiFi setup</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Core system configuration</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$3,000 – $6,000</strong></p>
                <p>Support from: <strong className="text-zinc-700 dark:text-zinc-300">$100/month</strong></p>
              </div>
            </div>

            {/* Office Pro (recommended) */}
            <div className="rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute -top-3 left-4 bg-amber-400 text-zinc-900 text-xs font-semibold px-3 py-1 rounded-full">Recommended</div>
              <h3 className="font-semibold text-lg">Office Pro</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">For most SMBs - teams that depend on their systems daily, handle sensitive data, or need clear structure across their access and operations.</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Full network infrastructure</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Structured system design based on criticality</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Integrated physical and system access control</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Data protection and backup</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Integrated systems for daily operations</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$6,000 – $15,000</strong></p>
                <p>Support from: <strong className="text-zinc-700 dark:text-zinc-300">$300/month</strong></p>
              </div>
            </div>

            {/* Office Enterprise */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-lg">Office Enterprise</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">For larger offices, multi-site setups, or businesses with more demanding security, redundancy, or compliance requirements.</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Advanced network and segmentation</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Enhanced security and redundancy</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Multi-site or scalable setups</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Extended monitoring and support</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$15,000 – $40,000+</strong></p>
                <p>Support from: <strong className="text-zinc-700 dark:text-zinc-300">$500/month</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One partner */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">One partner, from design to support</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Most businesses manage their technology through a mix of vendors — one for the network, another for security, someone else for support. When something goes wrong, accountability gets lost between them.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          We design, build, and support your entire setup as one team. That means a single point of contact, full visibility across every system, and clear accountability.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          After the build is complete, we stay involved - monitoring your systems, applying security and firmware updates, resolving issues remotely before they affect your team, and adapting your setup as your business grows.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          We also work with you before installation begins - planning your infrastructure and system placement alongside your renovation or fitout, so we build everything in properly from the start.
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
