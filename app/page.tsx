import React from "react";

export default function HaygridWebsite() {
	const emailAddress = "info@haygrid.com"
  const mailto = "mailto:" + emailAddress + "?subject=Consultation%20Request%20—%20Haygrid%20Systems";
	const whatsappNumber = "+65-8095-0315"
  const whatsappLink = "https://wa.me/6580950315"

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-zinc-950/50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-xl">
            <img src="/assets/haygrid-logo.svg" alt="" aria-hidden="true" className="h-7 w-7" />
            <span>Haygrid <span className="text-amber-500">Systems</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-amber-500" href="#services">Services</a>
            <a className="hover:text-amber-500" href="#approach">Approach</a>
            <a className="hover:text-amber-500" href="#industries">Industries</a>
            <a className="hover:text-amber-500" href="#contact">Contact</a>
          </nav>
          <a href={mailto} className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-amber-50/60 dark:hover:bg-zinc-800">Request a consult</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            {/* Tagline removed as requested */}
            <h1 className="mt-0 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              IT consultation for <span className="text-amber-500">businesses</span> and <span className="text-amber-500">homes</span> — built to be reliable, secure, and simple.
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              From strategy to support, we deliver websites and applications, networks, security, and systems integration — plus backups, automation, and ongoing maintenance.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={mailto} className="inline-flex items-center rounded-2xl bg-amber-400 text-white px-5 py-3 text-sm font-medium hover:bg-amber-500">Request a consultation</a>
              <a href="#services" className="text-sm hover:underline">Explore services</a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {["Business & home consultations", "Build + maintain plans", "Security-first systems"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-zinc-600 dark:text-zinc-300">✓ {t}</span>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Team working on systems integration"
              className="rounded-2xl shadow-lg border object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <div className="inline-block rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-600 dark:text-amber-200 mb-3">What we do</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Practical IT services for businesses and homes</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Consulting, build-outs, and ongoing support for secure, maintainable systems that fit your space and your goals.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Build</h3>
            <Feature icon="🧭" title="Consultation & Planning" desc="Technology assessments, site surveys, budgeting, and security posture reviews." />
            <Feature icon="🌐" title="Websites & Applications" desc="Website and app builds, hosting, domains, SSL, and ongoing maintenance." />
            <Feature icon="📡" title="Networks & Connectivity" desc="Network design, Wi‑Fi optimization, switching, routing, and internet failover." />
            <Feature icon="🔗" title="Systems Integration" desc="Smart business/home, apps, and device/IoT integration." />
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Operate</h3>
            <Feature icon="🛡️" title="Physical + Virtual Security" desc="Cameras, access control, alarm integration, MFA, and device protection." />
            <Feature icon="⚡" title="Automation & Productivity" desc="Workflow automation, scheduled tasks, and alerting." />
            <Feature icon="💾" title="Data Protection & Continuity" desc="Backups, disaster recovery planning, and data migration." />
            <Feature icon="🧰" title="Ongoing Support" desc="Managed services, help desk support, and lifecycle management." />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-white/60 dark:bg-zinc-900/60 border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <div className="inline-block rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-600 dark:text-amber-200 mb-3">How we work</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A customer-focused, outcomes-first delivery model</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="rounded-2xl border p-6 bg-white dark:bg-zinc-950">
              <div className="text-3xl">🧭</div>
              <h3 className="mt-3 font-semibold">1. Understand Needs</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Listen first, assess your space and goals, then define the right scope.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white dark:bg-zinc-950">
              <div className="text-3xl">🗺️</div>
              <h3 className="mt-3 font-semibold">2. Plan & Align</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Recommend solutions, confirm priorities, and align on timeline and budget.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white dark:bg-zinc-950">
              <div className="text-3xl">🚀</div>
              <h3 className="mt-3 font-semibold">3. Pilot & Prove</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Implement core systems quickly, validate performance and usability.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white dark:bg-zinc-950">
              <div className="text-3xl">🔁</div>
              <h3 className="mt-3 font-semibold">4. Scale & Operate</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Ongoing maintenance, monitoring, and support as your needs grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Stack */}
      <section id="industries" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold">Industries</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              {["Home Offices","Small Business","Retail & Hospitality","Professional Services","Real Estate","Public Sector"].map((i)=> (
                <li key={i} className="rounded-xl border px-4 py-3 bg-white/60 dark:bg-zinc-900/60">{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Systems we support</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              {["Home & office networks","Wi‑Fi, switches, and routing","Cameras, sensors, and access control","Websites, domains, and email","Servers, NAS, and backups","Cloud and on‑prem apps","Automation and monitoring"].map((s)=> (
                <div key={s} className="rounded-xl border px-4 py-3 bg-white/60 dark:bg-zinc-900/60">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact (no form) */}
      <section id="contact" className="bg-white/60 dark:bg-zinc-900/60 border-t">
        <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-1 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Start your consultation</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">Tell us about your business or home needs. We'll respond within one business day.</p>
            <div className="mt-6 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span aria-hidden="true">✉️</span>
                <strong>Email:</strong> <a className="underline" href={mailto}>{emailAddress}</a>
              </p>
              <p className="flex items-center gap-2">
                <img src="/assets/whatsapp-logo.svg" alt="" aria-hidden="true" className="h-4 w-4" />
								<strong>WhatsApp:</strong>{" "}
                <a className="underline" href={whatsappLink} target="_blank" rel="noopener">
                  {whatsappNumber}
                </a>
							</p>
            </div>
            <a href={mailto} className="mt-6 inline-flex items-center rounded-2xl bg-amber-400 text-white px-5 py-3 text-sm font-medium hover:bg-amber-500">Email us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Haygrid Systems. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#approach" className="hover:underline">Approach</a>
            <a href="#industries" className="hover:underline">Industries</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

// Local Feature component used in Services
const Feature = ({ title, desc, icon }: { title: string; desc: string; icon: string }) => (
  <div className="rounded-2xl border bg-white/60 dark:bg-zinc-900/60 p-5 shadow-sm">
    <div className="flex items-start gap-4">
    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-200 text-xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);
