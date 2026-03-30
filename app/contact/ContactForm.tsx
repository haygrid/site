"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "6580950315";

function buildWhatsAppUrl(data: {
  name: string;
  email: string;
  spaceType: string;
  projectStage: string;
  spaceSize: string;
  budget: string;
  message: string;
}) {
  const lines = [
    `*New enquiry via haygrid.com*`,
    ``,
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
    data.spaceType ? `*Space type:* ${data.spaceType}` : null,
    data.projectStage ? `*Project stage:* ${data.projectStage}` : null,
    data.spaceSize ? `*Space size:* ${data.spaceSize}` : null,
    data.budget ? `*Budget:* ${data.budget}` : null,
    data.message ? `\n${data.message}` : null,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

const fieldClass = "w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-50 disabled:cursor-not-allowed";

export default function ContactForm() {
  const [locked, setLocked] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      spaceType: (form.elements.namedItem("spaceType") as HTMLSelectElement).value,
      projectStage: (form.elements.namedItem("projectStage") as HTMLSelectElement).value,
      spaceSize: (form.elements.namedItem("spaceSize") as HTMLSelectElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    window.open(buildWhatsAppUrl(data), "_blank", "noopener");
    setLocked(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={locked}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={locked}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="spaceType" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Type of space
          </label>
          <select
            id="spaceType"
            name="spaceType"
            disabled={locked}
            className={fieldClass}
          >
            <option value="">Select...</option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
            <option value="Retail & F&B">Retail & F&B</option>
          </select>
        </div>
        <div>
          <label htmlFor="spaceSize" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Size of space
          </label>
          <select
            id="spaceSize"
            name="spaceSize"
            disabled={locked}
            className={fieldClass}
          >
            <option value="">Select...</option>
            <option value="Under 500 sqft">Under 500 sqft</option>
            <option value="500–1,000 sqft">500–1,000 sqft</option>
            <option value="1,000–2,000 sqft">1,000–2,000 sqft</option>
            <option value="2,000–3,500 sqft">2,000–3,500 sqft</option>
            <option value="Above 3,500 sqft">Above 3,500 sqft</option>
            <option value="I'm not sure">I'm not sure</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="projectStage" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Project stage
          </label>
          <select
            id="projectStage"
            name="projectStage"
            disabled={locked}
            className={fieldClass}
          >
            <option value="">Select...</option>
            <option value="Planning">Planning</option>
            <option value="Renovation in progress">Renovation in progress</option>
            <option value="Renovation complete">Renovation complete</option>
            <option value="Already moved in">Already moved in</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Estimated budget <span className="text-zinc-400">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            disabled={locked}
            className={fieldClass}
          >
            <option value="">Select...</option>
            <option value="Under $5,000">Under $5,000</option>
            <option value="$5,000–$10,000">$5,000–$10,000</option>
            <option value="$10,000–$20,000">$10,000–$20,000</option>
            <option value="$20,000+">$20,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
          Tell us about your space or what you're trying to achieve
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={locked}
          className={`${fieldClass} resize-none`}
        />
      </div>

      {locked ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="text-green-500">✓</span>
            <span>WhatsApp is ready to send. Tap <strong>Send</strong> in WhatsApp to confirm.</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setLocked(false)}
              className="rounded-2xl border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Edit
            </button>
            <button
              type="submit"
              className="rounded-2xl bg-amber-400 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors"
            >
              Send again →
            </button>
          </div>
        </div>
      ) : (
        <button
          type="submit"
          className="w-full rounded-2xl bg-amber-400 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors"
        >
          Send via WhatsApp →
        </button>
      )}
    </form>
  );
}
