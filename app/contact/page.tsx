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
    </section>
  );
}
