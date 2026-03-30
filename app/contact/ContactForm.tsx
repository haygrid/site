"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      spaceType: (form.elements.namedItem("spaceType") as HTMLSelectElement).value,
      projectStage: (form.elements.namedItem("projectStage") as HTMLSelectElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(apiUrl!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  const mailto = "mailto:info@haygrid.com?subject=Consultation%20Request%20—%20Haygrid%20Systems";
  const whatsapp = "https://wa.me/6580950315";

  if (!apiUrl) {
    return (
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">Contact form coming soon</p>
        <p>In the meantime, please reach out directly:</p>
        <div className="mt-3 space-y-2">
          <p><a href={mailto} className="text-amber-500 hover:text-amber-600 font-medium">info@haygrid.com</a></p>
          <p><a href={whatsapp} target="_blank" rel="noopener" className="text-amber-500 hover:text-amber-600 font-medium">WhatsApp: +65 8095 0315</a></p>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-3xl mb-3">✓</div>
        <p className="font-semibold text-lg">Thanks. We'll be in touch shortly.</p>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">We'll review your details and get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Name <span className="text-red-400">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Email <span className="text-red-400">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">WhatsApp / Phone <span className="text-zinc-400">(optional)</span></label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="spaceType" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Type of space</label>
          <select
            id="spaceType"
            name="spaceType"
            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Select...</option>
            <option value="home">Home</option>
            <option value="office">Office</option>
            <option value="retail">Retail & F&B</option>
          </select>
        </div>
        <div>
          <label htmlFor="projectStage" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Project stage</label>
          <select
            id="projectStage"
            name="projectStage"
            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Select...</option>
            <option value="planning">Planning</option>
            <option value="renovation-in-progress">Renovation in progress</option>
            <option value="renovation-complete">Renovation complete</option>
            <option value="already-moved-in">Already moved in</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Estimated budget <span className="text-zinc-400">(optional)</span></label>
        <select
          id="budget"
          name="budget"
          className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="">Select...</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 – $10,000</option>
          <option value="10k-20k">$10,000 – $20,000</option>
          <option value="20k-plus">$20,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Tell us about your space or what you're trying to achieve</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-2xl bg-amber-400 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Plan your setup →"}
      </button>
    </form>
  );
}
