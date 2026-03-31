"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "6580950315";
const CONTACT_API_URL = "https://www.haygrid.com/api/contact";

export function buildWhatsAppUrl(data: {
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

type ContactMethod = "whatsapp" | "email";

export default function ContactForm() {
  const [contactMethod, setContactMethod] = useState<ContactMethod>("whatsapp");

  // WhatsApp path state
  const [locked, setLocked] = useState(false);

  // Email path state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const disabled = locked || isSubmitting || submitSuccess;

  function handleWhatsAppSubmit(e: React.FormEvent<HTMLFormElement>) {
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

  async function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value || undefined,
      spaceType: (form.elements.namedItem("spaceType") as HTMLSelectElement).value || undefined,
      projectStage: (form.elements.namedItem("projectStage") as HTMLSelectElement).value || undefined,
      spaceSize: (form.elements.namedItem("spaceSize") as HTMLSelectElement).value || undefined,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value || undefined,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value || undefined,
    };

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitSuccess(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleMethodSwitch(method: ContactMethod) {
    setContactMethod(method);
    setLocked(false);
    setIsSubmitting(false);
    setSubmitSuccess(false);
    setSubmitError(false);
  }

  return (
    <div>
      {/* Contact method toggle */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          aria-pressed={contactMethod === "whatsapp"}
          onClick={() => handleMethodSwitch("whatsapp")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
            contactMethod === "whatsapp"
              ? "bg-amber-400 text-zinc-900"
              : "border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          }`}
        >
          WhatsApp
        </button>
        <button
          type="button"
          aria-pressed={contactMethod === "email"}
          onClick={() => handleMethodSwitch("email")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
            contactMethod === "email"
              ? "bg-amber-400 text-zinc-900"
              : "border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          }`}
        >
          Email
        </button>
      </div>

      <form onSubmit={contactMethod === "whatsapp" ? handleWhatsAppSubmit : handleEmailSubmit} className="space-y-5">
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
              disabled={disabled}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
              Email <span className="text-red-400">*</span>
              {contactMethod === "whatsapp" && (
                <span className="text-zinc-400 font-normal ml-1">— for follow-up</span>
              )}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={disabled}
              className={fieldClass}
            />
          </div>
        </div>

        {contactMethod === "email" && (
          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
              Phone <span className="text-zinc-400 font-normal">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              disabled={disabled}
              className={fieldClass}
            />
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="spaceType" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
              Type of space
            </label>
            <select
              id="spaceType"
              name="spaceType"
              disabled={disabled}
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
              disabled={disabled}
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
              disabled={disabled}
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
              disabled={disabled}
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
            disabled={disabled}
            className={`${fieldClass} resize-none`}
          />
        </div>

        {/* WhatsApp path actions */}
        {contactMethod === "whatsapp" && (
          locked ? (
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
          )
        )}

        {/* Email path actions */}
        {contactMethod === "email" && (
          submitSuccess ? (
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="text-green-500">✓</span>
              <span>We'll be in touch soon!</span>
            </div>
          ) : (
            <div className="space-y-3">
              {submitError && (
                <p className="text-sm text-red-500">Something went wrong — please try again.</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-amber-400 text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending…" : "Send enquiry →"}
              </button>
            </div>
          )
        )}
      </form>
    </div>
  );
}
