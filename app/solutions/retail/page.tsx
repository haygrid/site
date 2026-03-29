import Link from "next/link";

export const metadata = {
  title: "Retail & F&B Solutions | Haygrid Systems",
  description: "Retail systems that keep your store running — and protected.",
};

export default function RetailPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Retail systems that keep your store running — and protected
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            During trading hours, your network is your lifeline. A dropped connection means failed transactions, a stalled floor, and frustrated customers walking out.
          </p>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            When you close for the night, the risks don't stop — they shift. Without the right systems in place, your store is exposed: no visibility, no deterrence, and no record if something goes wrong.
          </p>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            We design integrated systems for retail and F&B operators — built to keep operations running under pressure, and your store protected around the clock.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center rounded-2xl bg-amber-400 text-white px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors">
              → Plan your setup
            </Link>
          </div>
        </div>
        <div>
          <img
            src="/assets/retail-hero.png"
            srcSet="/assets/retail-hero-400w.png 400w, /assets/retail-hero.png 800w"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Retail environment"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Designed for every hour */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
            Designed for every hour you're open — and every hour you're not
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Retail */}
            <div>
              <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-4">Retail</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Keep transactions running</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Retail networks need to be segmented — POS, staff, guest, and CCTV all on separate traffic — so a problem in one area never brings down another. Transactions stay stable regardless of what else is happening on the network.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Deter theft and capture incidents</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    A well-placed, visible CCTV system does two jobs: it deters theft before it happens, and provides clear footage when it does. We design coverage around your floor plan, not as an afterthought.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Secure access and protect after hours</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We implement access control that restricts and logs entry — limiting who can access stockrooms, back offices, and the premises after closing. Your systems stay on watch even when you're not there.
                  </p>
                </div>
              </div>
            </div>

            {/* F&B */}
            <div>
              <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-4">F&B</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Keep orders and payments moving</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Your ordering systems, payment terminals, and kitchen displays all depend on the same network. We design and segment your infrastructure so each system operates independently — a table management issue never takes down your POS.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Maintain visibility across the floor and kitchen</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    CCTV in F&B isn't just about security — it's operational visibility. We design coverage across front-of-house, kitchen entry points, and cash handling areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Secure access and protect after hours</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Access control, entry logs, and systems that stay active when the last staff member leaves — so your premises stay protected through the night.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built on the Haygrid Stack */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10 p-8 max-w-2xl">
          <h2 className="text-xl font-semibold mb-3">Built on the Haygrid Stack</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
            Every retail and F&B setup we design is built on the Haygrid Stack — a proven combination of components selected and configured to work together reliably. This means fewer compatibility issues, more predictable performance, and a setup that stays stable over time.
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
            All packages include the required equipment, installation, and configuration — delivered as a complete, ready-to-use system.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Retail Essential */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-lg">Retail Essential</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">For very small shops or kiosks with basic connectivity and minimal security requirements.</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Network and WiFi setup</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>POS-ready configuration</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Basic CCTV system</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$4,000 – $7,000</strong></p>
                <p>Support from: <strong className="text-zinc-700 dark:text-zinc-300">$300/month</strong></p>
              </div>
            </div>

            {/* Retail Secure (recommended) */}
            <div className="rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute -top-3 left-4 bg-amber-400 text-white text-xs font-semibold px-3 py-1 rounded-full">Recommended</div>
              <h3 className="font-semibold text-lg">Retail Secure</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">For most retail and F&B operators — stores that handle daily transactions, need full CCTV coverage, and want controlled access.</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Full network with traffic separation</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>POS-optimized setup</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>CCTV system with full coverage</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Access control for secure entry</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Storage and backup</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$7,000 – $15,000</strong></p>
                <p>Support from: <strong className="text-zinc-700 dark:text-zinc-300">$300/month</strong></p>
              </div>
            </div>

            {/* Retail Pro */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-semibold text-lg">Retail Pro</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">For larger stores, multi-outlet operations, or higher-risk environments needing advanced coverage and redundancy.</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Multi-zone CCTV coverage</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Advanced access control systems</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Alarm integration</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Backup connectivity options</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span>Enhanced monitoring and redundancy</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$15,000 – $30,000+</strong></p>
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
          Most retailers and F&B operators manage their technology through a mix of vendors — one for the network, another for CCTV, someone else for support. When something goes wrong, accountability gets lost between them.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          We design, build, and support your entire setup as one team. That means a single point of contact, full visibility across every system, and nobody to pass the blame.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          After the build is complete, we stay involved — monitoring your systems, applying security and firmware updates, resolving issues remotely before they affect your operations, and adapting your setup as your store grows.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          We also work with you before installation begins — planning your infrastructure and system placement alongside your renovation or fitout, so everything is built in properly from the start.
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
