const mailto = "mailto:info@haygrid.com?subject=Consultation%20Request%20—%20Haygrid%20Systems";
const whatsapp = "https://wa.me/6580950315";

export const metadata = {
  title: "Contact Us | Haygrid Systems",
  description: "Tell us about your space and we'll take it from there.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 md:py-20">
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
        Tell us about your space
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
        Whether you're planning a new setup, mid-renovation, or looking to improve what you already have — get in touch and we'll take it from there.
      </p>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm">
        We'll get back to you within one business day.
      </p>

      <div className="mt-10 space-y-4">
        <a
          href={mailto}
          className="flex items-center gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400 hover:border-amber-400 hover:text-amber-500 transition-colors"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-base">✉️</span>
          <div>
            <p className="font-medium text-zinc-800 dark:text-zinc-200">Email us</p>
            <p className="text-zinc-500 dark:text-zinc-400">info@haygrid.com</p>
          </div>
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400 hover:border-amber-400 hover:text-amber-500 transition-colors"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
            <img src="/assets/whatsapp-logo.svg" alt="" className="h-5 w-5" />
          </span>
          <div>
            <p className="font-medium text-zinc-800 dark:text-zinc-200">WhatsApp</p>
            <p className="text-zinc-500 dark:text-zinc-400">+65 8095 0315</p>
          </div>
        </a>
      </div>
    </section>
  );
}
