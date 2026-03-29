import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | Haygrid Systems",
  description: "Tell us about your space and we'll take it from there.",
};

const mailto = "mailto:info@haygrid.com?subject=Consultation%20Request%20—%20Haygrid%20Systems";
const whatsapp = "https://wa.me/6580950315";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-16 items-start">
      {/* Left: intro + direct contact */}
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          Tell us about your space
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Whether you're planning a new setup, mid-renovation, or looking to improve what you already have: share a few details and we'll take it from there.
        </p>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm">
          We'll get back to you within one business day.
        </p>

        <div className="mt-10">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-4">Or get in touch directly</p>
          <div className="space-y-3">
            <a
              href={mailto}
              className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-base">✉️</span>
              info@haygrid.com
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                <img src="/assets/whatsapp-logo.svg" alt="" className="h-4 w-4" />
              </span>
              +65 8095 0315
            </a>
          </div>
        </div>
      </div>

      {/* Right: form */}
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-8">
        <ContactForm />
      </div>
    </section>
  );
}
