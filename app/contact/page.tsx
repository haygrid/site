import ContactForm from "./ContactForm";

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

      <div className="mt-10">
        <ContactForm />
      </div>

      <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-200 mb-4">Prefer to reach out directly?</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:info@haygrid.com"
            className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-700 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
          >
            <span>✉</span>
            <div>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5">Email</p>
              <p>info@haygrid.com</p>
            </div>
          </a>
          <a
            href="https://wa.me/6580950315"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-700 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
          >
            <img src="/assets/whatsapp-logo.svg" alt="" className="h-4 w-4" />
            <div>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5">WhatsApp</p>
              <p>+65 8095 0315</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
