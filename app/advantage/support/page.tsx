import Link from "next/link";

export const metadata = {
  title: "Ongoing Support | Haygrid Systems",
  description: "We stay involved after the installation is complete. That's not an add-on — it's how we work.",
};

export default function SupportPage() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          Your system needs more than a good installation
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Most integrators build and leave.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Once the work is done, the system becomes your responsibility: to monitor, maintain, and troubleshoot. When something goes wrong, you're either calling someone who no longer knows your setup, or figuring it out yourself.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          We stay involved after the installation is complete.
        </p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center rounded-2xl bg-amber-400 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors">
            → Plan your setup
          </Link>
        </div>
      </section>

      {/* What happens without ongoing support */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What happens without ongoing support</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            A well-built system doesn't stay that way on its own.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Firmware falls behind security standards. Configurations drift after power events or software updates. Devices age past their reliable lifespan without anyone noticing. Security gaps appear quietly and rarely surface until something goes wrong.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Systems that fail most visibly usually started well but never received ongoing maintenance.
          </p>
        </div>
      </section>

      {/* What ongoing support includes */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">What ongoing support includes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
            <h3 className="font-semibold mb-2">Proactive monitoring</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We monitor your system continuously - network health, device status, and security signals. We catch and resolve most issues before they're visible to anyone using the space.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
            <h3 className="font-semibold mb-2">Remote resolution</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              When something needs attention, we diagnose and fix it remotely where possible. No waiting for a site visit, no disruption to your day.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
            <h3 className="font-semibold mb-2">Security and firmware updates</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We keep every device on your network current — applying firmware updates and security patches as they're released, so your system stays protected without you having to manage it.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
            <h3 className="font-semibold mb-2">On-site support</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              When remote fixes aren't enough, we come to you - already familiar with your setup, so there's no time lost explaining from scratch.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
            <h3 className="font-semibold mb-2">Growth and change support</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              When your space or requirements evolve - a new office floor, additional staff, a renovation, new devices - we adapt your system to match.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Ongoing support plans run monthly, scoped to your setup. We stay connected to your system remotely, respond when issues arise, and check in periodically to make sure everything is performing as it should.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Support is available across all three spaces - offices, retail and F&B, and homes - and is included as an option with every package we deliver.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Tell us about your project</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">Share a few details about your space, and we'll take it from there.</p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center rounded-2xl bg-amber-400 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors">
            → Plan your setup
          </Link>
        </div>
      </section>
    </>
  );
}
