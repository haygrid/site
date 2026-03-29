import Link from "next/link";

export const metadata = {
  title: "The Haygrid Stack | Haygrid Systems",
  description: "A proven set of components and system designs, built to work together from day one.",
};

export default function StackPage() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          The Haygrid Stack
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Most technology problems come from components that were never designed to work together - chosen separately, configured independently, and left to figure out the gaps on their own.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          The Haygrid Stack is our answer to that problem: a proven set of components and system designs, tested across real environments, built to work together from day one.
        </p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center rounded-2xl bg-amber-400 text-white px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors">
            → Plan your setup
          </Link>
        </div>
      </section>

      {/* What the Haygrid Stack is */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What the Haygrid Stack is</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              The Haygrid Stack is a curated set of components and system designs built up through internal testing and real client deployments across offices, retail stores, and homes.
            </p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              We start from combinations we already know work and configure them for your specific space, removing the guesswork from what is otherwise a process of trial and error.
            </p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              The result is a setup that behaves predictably, integrates cleanly, and stays stable over time - not because we got lucky, but because we've done it before.
            </p>
          </div>
          <div>
            <img
              src="/assets/haygrid-stack.png"
              alt="The Haygrid Stack diagram"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Applied to your space */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Applied to your space</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          The Haygrid Stack is a curated library of components and configurations. For each project, we assess your space, your usage requirements, and how you want to live or work in it, then select and combine the right elements from that library. The result is a setup that's tailored to you, built on components we already know work.
        </p>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          If your space or requirements are unusual, the Stack extends to meet them.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-white/60 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Tell us about your project</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Share a few details about your space, and we'll take it from there.</p>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center rounded-2xl bg-amber-400 text-white px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors">
              → Plan your setup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
