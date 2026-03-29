"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const solutions = [
  { label: "Office", href: "/solutions/office" },
  { label: "Retail & F&B", href: "/solutions/retail" },
  { label: "Homes", href: "/solutions/homes" },
];

const advantage = [
  { label: "The Haygrid Stack", href: "/advantage/stack" },
  { label: "Renovation Integrations", href: "/advantage/renovation" },
  { label: "Ongoing Support", href: "/advantage/support" },
];

export default function Header() {
  const pathname = usePathname();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [advantageOpen, setAdvantageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileAdvantageOpen, setMobileAdvantageOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
        setAdvantageOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
    setAdvantageOpen(false);
  }, [pathname]);

  const isSolutions = pathname.startsWith("/solutions");
  const isAdvantage = pathname.startsWith("/advantage");
  const isContact = pathname === "/contact";

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-xl">
          <img src="/assets/haygrid-logo.svg" alt="" aria-hidden="true" className="h-7 w-7" />
          <span>Haygrid <span className="text-amber-500">Systems</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {/* Solutions dropdown */}
          <div className="relative">
            <button
              onClick={() => { setSolutionsOpen(!solutionsOpen); setAdvantageOpen(false); }}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-amber-500 transition-colors ${isSolutions ? "text-amber-500 font-medium" : ""}`}
            >
              Solutions
              <svg className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg py-1">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm hover:bg-amber-50 dark:hover:bg-zinc-800 hover:text-amber-600 ${pathname === item.href ? "text-amber-500 font-medium" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Haygrid Advantage dropdown */}
          <div className="relative">
            <button
              onClick={() => { setAdvantageOpen(!advantageOpen); setSolutionsOpen(false); }}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-amber-500 transition-colors ${isAdvantage ? "text-amber-500 font-medium" : ""}`}
            >
              The Haygrid Advantage
              <svg className={`h-4 w-4 transition-transform ${advantageOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {advantageOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg py-1">
                {advantage.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm hover:bg-amber-50 dark:hover:bg-zinc-800 hover:text-amber-600 ${pathname === item.href ? "text-amber-500 font-medium" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`px-3 py-2 rounded-lg hover:text-amber-500 transition-colors ${isContact ? "text-amber-500 font-medium" : ""}`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-xl bg-amber-400 text-white px-4 py-2 text-sm font-medium hover:bg-amber-500 transition-colors"
          >
            Plan your setup
          </Link>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-3 space-y-1">
          {/* Solutions accordion */}
          <button
            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-amber-50 dark:hover:bg-zinc-800 ${isSolutions ? "text-amber-500 font-medium" : ""}`}
          >
            Solutions
            <svg className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileSolutionsOpen && (
            <div className="pl-4 space-y-1">
              {solutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg text-sm hover:bg-amber-50 dark:hover:bg-zinc-800 hover:text-amber-600 ${pathname === item.href ? "text-amber-500 font-medium" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Haygrid Advantage accordion */}
          <button
            onClick={() => setMobileAdvantageOpen(!mobileAdvantageOpen)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-amber-50 dark:hover:bg-zinc-800 ${isAdvantage ? "text-amber-500 font-medium" : ""}`}
          >
            The Haygrid Advantage
            <svg className={`h-4 w-4 transition-transform ${mobileAdvantageOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileAdvantageOpen && (
            <div className="pl-4 space-y-1">
              {advantage.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg text-sm hover:bg-amber-50 dark:hover:bg-zinc-800 hover:text-amber-600 ${pathname === item.href ? "text-amber-500 font-medium" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            className={`block px-3 py-2 rounded-lg text-sm hover:bg-amber-50 dark:hover:bg-zinc-800 ${isContact ? "text-amber-500 font-medium" : ""}`}
          >
            Contact
          </Link>

          <div className="pt-2 pb-1">
            <Link
              href="/contact"
              className="block text-center rounded-xl bg-amber-400 text-white px-4 py-2 text-sm font-medium hover:bg-amber-500"
            >
              Plan your setup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
