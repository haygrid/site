import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-6 py-10 grid sm:grid-cols-3 gap-8 text-sm">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-base mb-3">
            <img src="/assets/haygrid-logo.svg" alt="" aria-hidden="true" className="h-6 w-6" />
            <span>Haygrid <span className="text-amber-500">Systems</span></span>
          </Link>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">One integrated setup. Built for your space.</p>
          <div className="mt-4 space-y-1 text-zinc-500 dark:text-zinc-400">
            <p>
              <a href="mailto:info@haygrid.com" className="hover:text-amber-500 transition-colors">info@haygrid.com</a>
            </p>
            <p>
              <a href="https://wa.me/6580950315" target="_blank" rel="noopener" className="hover:text-amber-500 transition-colors">+65 8095 0315 (WhatsApp)</a>
            </p>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-3">Solutions</p>
          <ul className="space-y-2 text-zinc-500 dark:text-zinc-400">
            <li><Link href="/solutions/office" className="hover:text-amber-500 transition-colors">Office</Link></li>
            <li><Link href="/solutions/retail" className="hover:text-amber-500 transition-colors">Retail & F&B</Link></li>
            <li><Link href="/solutions/homes" className="hover:text-amber-500 transition-colors">Homes</Link></li>
          </ul>
        </div>

        {/* The Haygrid Advantage */}
        <div>
          <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-3">The Haygrid Advantage</p>
          <ul className="space-y-2 text-zinc-500 dark:text-zinc-400">
            <li><Link href="/advantage/stack" className="hover:text-amber-500 transition-colors">The Haygrid Stack</Link></li>
            <li><Link href="/advantage/renovation" className="hover:text-amber-500 transition-colors">Renovation Integrations</Link></li>
            <li><Link href="/advantage/support" className="hover:text-amber-500 transition-colors">Ongoing Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} Haygrid Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
