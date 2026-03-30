import Link from "next/link";

export const metadata = {
  title: "Renovation Integration | Haygrid Systems",
  description: "We work with you early — during planning and renovation — so your system is designed into your space from the start.",
};

export default function RenovationPage() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          The best time to design your system is before renovation begins
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Most technology problems start before anything is installed.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          When you add technology after renovation, it must fit into a space not designed for it - leading to compromises, visible wiring, and suboptimal performance.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          We work with you early - during planning and renovation - so we design your system into your space from the start.
        </p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center rounded-2xl bg-amber-400 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors">
            → Plan your setup
          </Link>
        </div>
      </section>

      {/* What happens when systems are added too late */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What happens when you add systems too late</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            When technology becomes an afterthought, the space ends up shaping the system rather than the other way around. Cables run wherever they fit, equipment goes wherever there's room, and coverage gaps appear in exactly the areas that matter most. Fixing these issues after the fact is possible, but it comes with higher cost, additional disruption, and compromises that are often permanent.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Once walls are closed and layouts are fixed, your options become limited. The decisions that are easiest to get right before renovation are the hardest and most expensive to undo after.
          </p>
        </div>
      </section>

      {/* A design-first approach + Working alongside */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-8">
            <h2 className="text-xl font-semibold mb-4">A design-first approach</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We plan your entire system - network infrastructure, cable routing, device placement, and coverage - before renovation begins. We design your physical space and technology together.
            </p>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We build everything on the Haygrid Stack, so the components we specify are already proven to work together. By the time your renovation is complete, your system is ready.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-8">
            <h2 className="text-xl font-semibold mb-4">Working alongside your renovation team</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We coordinate directly with your renovation or interior design team, aligning on layout plans, specifying cable routes before walls are closed, and ensuring every device is placed exactly where it needs to be.
            </p>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              During renovation, we stay involved to make sure we implement everything exactly as planned, so nothing needs reworking after the fact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Tell us about your project</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            If you're planning a renovation or in the early stages of a fitout, now is the right time to get in touch.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center rounded-2xl bg-amber-400 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors">
              → Plan your setup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
