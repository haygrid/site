import Link from "next/link";

export const metadata = {
  title: "Haygrid Systems",
  description: "One integrated setup. Built for your space.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-cover bg-center min-h-[480px] md:min-h-[560px] flex items-end"
        style={{ backgroundImage: "url('/assets/office-hero.png')" }}
      >
        <div className="absolute inset-0 bg-zinc-900/60" />
        <div className="relative mx-auto max-w-7xl w-full px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
              One integrated setup. Built for your space.
            </h1>
            <p className="mt-4 text-lg text-zinc-200">
              Your network, security, devices, and smart home, designed to work together from day one.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-2xl bg-amber-400 text-white px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors"
              >
                → Plan your setup
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Designed differently */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Designed differently from typical IT setups
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Most setups come together piece by piece - different vendors, different components, often without a clear structure. The result is systems that don't work well together, gaps that are hard to diagnose, and setups that get harder to manage over time.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Every setup we design starts from the Haygrid Stack - a proven combination of components built to work together. The result is a single integrated setup, designed specifically for your space, that works reliably from day one.
          </p>
          <p className="mt-6">
            <Link href="/advantage/stack" className="text-amber-500 hover:text-amber-600 font-medium transition-colors">
              → Learn more about the Haygrid Stack
            </Link>
          </p>
        </div>
      </section>

      {/* Solutions for every space */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Solutions for every space
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Offices */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 flex flex-col">
            <h3 className="font-semibold text-lg">Offices</h3>
            <p className="mt-1 text-sm font-medium text-amber-600 dark:text-amber-400">
              The right access, for the right people, to the right systems.
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Not every system carries the same risk. We design office environments around criticality - structured access, clear audit trails, and the ability to escalate when it matters.
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
              <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$3,000 – $40,000+</strong></p>
              <p>Support plans from: <strong className="text-zinc-700 dark:text-zinc-300">$100/month</strong></p>
            </div>
            <div className="mt-5">
              <Link href="/solutions/office" className="text-sm text-amber-500 hover:text-amber-600 font-medium transition-colors">
                → Office solutions
              </Link>
            </div>
          </div>

          {/* Retail & F&B */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 flex flex-col">
            <h3 className="font-semibold text-lg">Retail & F&B</h3>
            <p className="mt-1 text-sm font-medium text-amber-600 dark:text-amber-400">
              Uptime when you're open. Security when you're not.
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Dropped transactions mean lost revenue, and CCTV blind spots leave your store exposed to theft. We design retail systems that keep operations stable during trading hours and your store protected after closing.
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
              <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$4,000 – $30,000+</strong></p>
              <p>Support plans from: <strong className="text-zinc-700 dark:text-zinc-300">$300/month</strong></p>
            </div>
            <div className="mt-5">
              <Link href="/solutions/retail" className="text-sm text-amber-500 hover:text-amber-600 font-medium transition-colors">
                → Retail & F&B solutions
              </Link>
            </div>
          </div>

          {/* Homes */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 flex flex-col">
            <h3 className="font-semibold text-lg">Homes</h3>
            <p className="mt-1 text-sm font-medium text-amber-600 dark:text-amber-400">
              Invisible by design. Present when you need it.
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No visible cables. No cluttered equipment. Technology built into your home rather than added to it - seamless to live with, simple to use.
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
              <p>Typical projects: <strong className="text-zinc-700 dark:text-zinc-300">$2,500 – $15,000+</strong></p>
              <p>Support plans from: <strong className="text-zinc-700 dark:text-zinc-300">$30/month</strong></p>
            </div>
            <div className="mt-5">
              <Link href="/solutions/homes" className="text-sm text-amber-500 hover:text-amber-600 font-medium transition-colors">
                → Home solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Designed early. Maintained over time. */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Designed early. Maintained over time.
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            The best systems start with planning before installation and benefit from ongoing care.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            We work with your renovation or setup timeline to ensure we design everything into your space from the start. Once your setup is ready, we stay involved: monitoring your systems, keeping firmware and security current, and resolving issues before they surface.
          </p>
          <div className="mt-6 space-y-2">
            <p>
              <Link href="/advantage/renovation" className="text-amber-500 hover:text-amber-600 font-medium transition-colors">
                → Learn about renovation integration
              </Link>
            </p>
            <p>
              <Link href="/advantage/support" className="text-amber-500 hover:text-amber-600 font-medium transition-colors">
                → Learn about ongoing support
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Get started CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Get started</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Tell us about your space, and we'll take it from there.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-2xl bg-amber-400 text-white px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors"
            >
              → Plan your setup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
