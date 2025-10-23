import React from "react";
import { motion } from "framer-motion";

export default function HaygridWebsite() {
	const emailAddress = "haygridsystems@gmail.com"
  const mailto = "mailto:" + emailAddress + "?subject=Consultation%20Request%20—%20Haygrid%20Systems";

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-zinc-950/50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl">Haygrid <span className="text-indigo-600">Systems</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-indigo-600" href="#services">Services</a>
            <a className="hover:text-indigo-600" href="#approach">Approach</a>
            <a className="hover:text-indigo-600" href="#industries">Industries</a>
            <a className="hover:text-indigo-600" href="#contact">Contact</a>
          </nav>
          <a href={mailto} className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-zinc-800">Request a consult</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {/* Tagline removed as requested */}
            <h1 className="mt-0 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              We connect your <span className="text-indigo-600">systems</span> so your business can move <span className="text-indigo-600">faster</span>.
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              IT Systems design, implementation, and operations spanning 
							Haygrid Systems designs, implements, and operates robust integrations—bridging cloud, data, and enterprise apps with security and observability built in.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={mailto} className="inline-flex items-center rounded-2xl bg-indigo-600 text-white px-5 py-3 text-sm font-medium hover:bg-indigo-700">Talk to an architect</a>
              <a href="#services" className="text-sm hover:underline">Explore services</a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {["5-day integration assessment", "Fixed-scope pilots", "Runbook handover"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-zinc-600 dark:text-zinc-300">✓ {t}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Team working on systems integration"
              className="rounded-2xl shadow-lg border object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <div className="inline-block rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-medium text-indigo-700 dark:text-indigo-200 mb-3">What we do</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Integration services that scale with you</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">From discovery to run-state, we deliver secure, observable and maintainable integrations.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature icon="🛠️" title="Systems Integration" desc="Connect ERPs, CRMs, data platforms and on-prem/edge systems with robust, secure flows." />
          <Feature icon="⚙️" title="Process Automation" desc="Streamline workflows and eliminate swivel-chair ops across teams and tools." />
          <Feature icon="🛡️" title="Governance & Compliance" desc="Identity, audit and policy guardrails baked into every environment." />
          <Feature icon="📈" title="Observability" desc="Dashboards, tracing and alerting so your data paths are measurable and dependable." />
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-white/60 dark:bg-zinc-900/60 border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <div className="inline-block rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-medium text-indigo-700 dark:text-indigo-200 mb-3">How we work</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A clear, outcomes-first delivery model</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-2xl border p-6 bg-white dark:bg-zinc-950">
              <div className="text-3xl">🧭</div>
              <h3 className="mt-3 font-semibold">1. Discover & Blueprint</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Landscape review, integration map, security posture, success metrics.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white dark:bg-zinc-950">
              <div className="text-3xl">🚀</div>
              <h3 className="mt-3 font-semibold">2. Pilot & Prove</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Ship a thin slice to production quickly, validate value and reliability.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-white dark:bg-zinc-950">
              <div className="text-3xl">🔁</div>
              <h3 className="mt-3 font-semibold">3. Scale & Operate</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Handover runbooks, dashboards, and train your team for sustainable ops.</p>
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
              {["Retail & E-commerce","High-Tech & SaaS","Logistics & Supply Chain","Manufacturing","Financial Services","Public Sector"].map((i)=> (
                <li key={i} className="rounded-xl border px-4 py-3 bg-white/60 dark:bg-zinc-900/60">{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Platforms we work with</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              {["AWS • Azure • GCP","Kubernetes • Docker","Kafka • RabbitMQ • SQS","Snowflake • BigQuery • Databricks","dbt • Airflow • Dagster","Salesforce • Netsuite • SAP • Workday","OIDC • SSO • SCIM"].map((s)=> (
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
            <h2 className="text-3xl font-semibold tracking-tight">Start your integration</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">Tell us about your goals. We'll respond within one business day.</p>
            <div className="mt-6 space-y-2 text-sm">
              <p><strong>Email:</strong> <a className="underline" href={mailto}>{emailAddress}</a></p>
              <p><strong>Phone:</strong> +65-91520915</p>
            </div>
            <a href={mailto} className="mt-6 inline-flex items-center rounded-2xl bg-indigo-600 text-white px-5 py-3 text-sm font-medium hover:bg-indigo-700">Email us</a>
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
const Feature = ({ title, desc, icon }) => (
  <div className="rounded-2xl border bg-white/60 dark:bg-zinc-900/60 p-5 shadow-sm">
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200 text-xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);
