"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    label: "Offices",
    tagline: "The right access, for the right people, to the right systems.",
    description:
      "Not every system carries the same risk. We design office environments around criticality - structured access, clear audit trails, and the ability to escalate when it matters.",
    projectRange: "$3,000 – $40,000+",
    supportFrom: "$100/month",
    href: "/solutions/office",
    ctaLabel: "→ Office solutions",
    image: "/assets/office-hero.png",
    imageAlt: "Office environment",
  },
  {
    label: "Retail & F&B",
    tagline: "Uptime when you're open. Security when you're not.",
    description:
      "Dropped transactions mean lost revenue, and CCTV blind spots leave your store exposed to theft. We design retail systems that keep operations stable during trading hours and your store protected after closing.",
    projectRange: "$4,000 – $30,000+",
    supportFrom: "$300/month",
    href: "/solutions/retail",
    ctaLabel: "→ Retail & F&B solutions",
    image: "/assets/retail-hero.png",
    imageAlt: "Retail environment",
  },
  {
    label: "Homes",
    tagline: "Invisible by design. Present when you need it.",
    description:
      "No visible cables. No cluttered equipment. Technology built into your home rather than added to it - seamless to live with, simple to use.",
    projectRange: "$2,500 – $15,000+",
    supportFrom: "$30/month",
    href: "/solutions/homes",
    ctaLabel: "→ Home solutions",
    image: "/assets/residential-hero.png",
    imageAlt: "Modern home interior",
  },
];

export default function SolutionsTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
      {/* Tab bar */}
      <div className="grid grid-cols-3 border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`relative py-3.5 text-sm font-medium transition-colors
              ${i > 0 ? "border-l border-zinc-200 dark:border-zinc-700" : ""}
              ${active === i
                ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
          >
            {t.label}
            {active === i && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
            )}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        className="relative grid md:grid-cols-2 bg-cover bg-center md:bg-none"
        style={{ backgroundImage: `url(${tab.image})` }}
      >
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-white/80 dark:bg-zinc-900/80 md:hidden" />
        <div className="relative p-8 flex flex-col justify-between md:bg-white md:dark:bg-zinc-900">
          <div>
            <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">{tab.tagline}</p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">{tab.description}</p>
          </div>
          <div>
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-700 flex gap-8 text-sm">
              <div>
                <p className="text-xs text-zinc-700 dark:text-zinc-400 uppercase tracking-wide mb-1">Typical projects</p>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">{tab.projectRange}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-700 dark:text-zinc-400 uppercase tracking-wide mb-1">Support from</p>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">{tab.supportFrom}</p>
              </div>
            </div>
            <div className="mt-5">
              <Link href={tab.href} className="text-sm text-amber-500 hover:text-amber-600 font-medium transition-colors">
                {tab.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={tab.image}
            alt={tab.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
