import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { buildWhatsAppUrl } from "./ContactForm";
import ContactForm from "./ContactForm";

// ---------------------------------------------------------------------------
// Unit tests: buildWhatsAppUrl
// ---------------------------------------------------------------------------

describe("buildWhatsAppUrl", () => {
  const base = {
    name: "Jane Doe",
    email: "jane@example.com",
    spaceType: "Home",
    projectStage: "Planning",
    spaceSize: "500–1,000 sqft",
    budget: "$5,000–$10,000",
    message: "Looking for a smart home setup.",
  };

  it("targets the correct WhatsApp number", () => {
    expect(buildWhatsAppUrl(base)).toMatch(/^https:\/\/wa\.me\/6580950315\?text=/);
  });

  it("always includes the haygrid.com header", () => {
    const decoded = decodeURIComponent(buildWhatsAppUrl(base).split("?text=")[1]);
    expect(decoded).toContain("*New enquiry via haygrid.com*");
  });

  it("formats all fields with bold labels", () => {
    const decoded = decodeURIComponent(buildWhatsAppUrl(base).split("?text=")[1]);
    expect(decoded).toContain("*Name:* Jane Doe");
    expect(decoded).toContain("*Email:* jane@example.com");
    expect(decoded).toContain("*Space type:* Home");
    expect(decoded).toContain("*Project stage:* Planning");
    expect(decoded).toContain("*Space size:* 500–1,000 sqft");
    expect(decoded).toContain("*Budget:* $5,000–$10,000");
    expect(decoded).toContain("Looking for a smart home setup.");
  });

  it("omits optional fields when empty", () => {
    const url = buildWhatsAppUrl({ ...base, spaceType: "", projectStage: "", spaceSize: "", budget: "", message: "" });
    const decoded = decodeURIComponent(url.split("?text=")[1]);
    expect(decoded).not.toContain("Space type");
    expect(decoded).not.toContain("Project stage");
    expect(decoded).not.toContain("Space size");
    expect(decoded).not.toContain("Budget");
  });

  it("URL-encodes special characters in the message", () => {
    const url = buildWhatsAppUrl({ ...base, message: "Hello & goodbye <test>" });
    expect(() => decodeURIComponent(url.split("?text=")[1])).not.toThrow();
    const decoded = decodeURIComponent(url.split("?text=")[1]);
    expect(decoded).toContain("Hello & goodbye <test>");
  });
});

// ---------------------------------------------------------------------------
// Component tests: ContactForm
// ---------------------------------------------------------------------------

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubGlobal("open", vi.fn());
    vi.stubGlobal("fetch", vi.fn());
  });

  // -------------------------------------------------------------------------
  // Toggle behaviour
  // -------------------------------------------------------------------------

  describe("contact method toggle", () => {
    it("defaults to WhatsApp", () => {
      render(<ContactForm />);
      const whatsappBtn = screen.getByRole("button", { name: "WhatsApp" });
      const emailBtn = screen.getByRole("button", { name: "Email" });
      expect(whatsappBtn).toHaveAttribute("aria-pressed", "true");
      expect(emailBtn).toHaveAttribute("aria-pressed", "false");
    });

    it("switches to Email when Email toggle is clicked", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(screen.getByRole("button", { name: "Email" }));
      expect(screen.getByRole("button", { name: "Email" })).toHaveAttribute("aria-pressed", "true");
      expect(screen.getByRole("button", { name: "WhatsApp" })).toHaveAttribute("aria-pressed", "false");
    });
  });

  // -------------------------------------------------------------------------
  // WhatsApp path (default)
  // -------------------------------------------------------------------------

  describe("WhatsApp path", () => {
    it("renders all form fields including email as backup contact", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/type of space/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/size of space/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/project stage/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/estimated budget/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/tell us about/i)).toBeInTheDocument();
    });

    it("does not show phone field in WhatsApp mode", () => {
      render(<ContactForm />);
      expect(screen.queryByLabelText(/phone/i)).not.toBeInTheDocument();
    });

    it("email label indicates it is a backup contact method", () => {
      render(<ContactForm />);
      expect(screen.getByText(/for follow-up/i)).toBeInTheDocument();
    });

    it("name and email inputs are required", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/name/i)).toBeRequired();
      expect(screen.getByLabelText(/email/i)).toBeRequired();
    });

    it("opens WhatsApp with encoded form data on submit", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.selectOptions(screen.getByLabelText(/type of space/i), "Home");
      await user.type(screen.getByLabelText(/tell us about/i), "Smart home setup.");

      await user.click(screen.getByRole("button", { name: /send via whatsapp/i }));

      expect(window.open).toHaveBeenCalledOnce();
      const calledUrl = (window.open as ReturnType<typeof vi.fn>).mock.calls[0][0] as string;
      expect(calledUrl).toMatch(/^https:\/\/wa\.me\/6580950315\?text=/);
      const decoded = decodeURIComponent(calledUrl.split("?text=")[1]);
      expect(decoded).toContain("*Name:* Jane Doe");
      expect(decoded).toContain("*Email:* jane@example.com");
      expect(decoded).toContain("*Space type:* Home");
      expect(decoded).toContain("Smart home setup.");
    });

    it("does not call fetch on WhatsApp submit", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send via whatsapp/i }));
      expect(fetch).not.toHaveBeenCalled();
    });

    it("disables all fields and shows confirmation + Edit + Send again after submit", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send via whatsapp/i }));

      expect(screen.getByText(/whatsapp is ready to send/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/name/i)).toBeDisabled();
      expect(screen.getByLabelText(/email/i)).toBeDisabled();
      expect(screen.getByRole("button", { name: /edit/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /send again/i })).toBeInTheDocument();
    });

    it("re-enables all fields when Edit is clicked", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send via whatsapp/i }));
      await user.click(screen.getByRole("button", { name: /edit/i }));

      expect(screen.getByLabelText(/name/i)).not.toBeDisabled();
      expect(screen.getByLabelText(/email/i)).not.toBeDisabled();
      expect(screen.getByRole("button", { name: /send via whatsapp/i })).toBeInTheDocument();
    });

    it("Send again opens WhatsApp again", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send via whatsapp/i }));
      await user.click(screen.getByRole("button", { name: /send again/i }));

      expect(window.open).toHaveBeenCalledTimes(2);
    });

    it("omits empty optional fields from the WhatsApp URL", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send via whatsapp/i }));

      const calledUrl = (window.open as ReturnType<typeof vi.fn>).mock.calls[0][0] as string;
      const decoded = decodeURIComponent(calledUrl.split("?text=")[1]);
      expect(decoded).not.toContain("Space type");
      expect(decoded).not.toContain("Project stage");
      expect(decoded).not.toContain("Space size");
      expect(decoded).not.toContain("Budget");
    });
  });

  // -------------------------------------------------------------------------
  // Email path
  // -------------------------------------------------------------------------

  describe("Email path", () => {
    async function switchToEmail() {
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(screen.getByRole("button", { name: "Email" }));
      return user;
    }

    it("shows phone field in email mode", async () => {
      await switchToEmail();
      expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    });

    it("does not show Send via WhatsApp button in email mode", async () => {
      await switchToEmail();
      expect(screen.queryByRole("button", { name: /send via whatsapp/i })).not.toBeInTheDocument();
    });

    it("shows Send enquiry button in email mode", async () => {
      await switchToEmail();
      expect(screen.getByRole("button", { name: /send enquiry/i })).toBeInTheDocument();
    });

    it("name and email are required in email mode", async () => {
      await switchToEmail();
      expect(screen.getByLabelText(/name/i)).toBeRequired();
      expect(screen.getByLabelText(/email/i)).toBeRequired();
    });

    it("phone is optional in email mode", async () => {
      await switchToEmail();
      expect(screen.getByLabelText(/phone/i)).not.toBeRequired();
    });

    it("shows loading state while submitting", async () => {
      vi.mocked(fetch).mockReturnValue(new Promise(() => {})); // never resolves
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(screen.getByRole("button", { name: "Email" }));
      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send enquiry/i }));

      expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled();
    });

    it("disables all fields while submitting", async () => {
      vi.mocked(fetch).mockReturnValue(new Promise(() => {}));
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(screen.getByRole("button", { name: "Email" }));
      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send enquiry/i }));

      expect(screen.getByLabelText(/name/i)).toBeDisabled();
      expect(screen.getByLabelText(/email/i)).toBeDisabled();
    });

    it("shows success message on successful submit", async () => {
      vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(screen.getByRole("button", { name: "Email" }));
      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send enquiry/i }));

      await waitFor(() => expect(screen.getByText(/we.ll be in touch/i)).toBeInTheDocument());
      expect(window.open).not.toHaveBeenCalled();
    });

    it("POSTs to the correct endpoint with form data", async () => {
      vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(screen.getByRole("button", { name: "Email" }));
      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.type(screen.getByLabelText(/phone/i), "+65 9000 0000");
      await user.click(screen.getByRole("button", { name: /send enquiry/i }));

      await waitFor(() => expect(fetch).toHaveBeenCalledOnce());
      const [url, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0];
      expect(url).toBe("https://www.haygrid.com/api/contact");
      expect(init.method).toBe("POST");
      const body = JSON.parse(init.body);
      expect(body.name).toBe("Jane Doe");
      expect(body.email).toBe("jane@example.com");
      expect(body.phone).toBe("+65 9000 0000");
    });

    it("shows error message when fetch fails (network error)", async () => {
      vi.mocked(fetch).mockRejectedValue(new Error("Network error"));
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(screen.getByRole("button", { name: "Email" }));
      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send enquiry/i }));

      await waitFor(() => expect(screen.getByText(/something went wrong/i)).toBeInTheDocument());
      expect(screen.getByRole("button", { name: /send enquiry/i })).toBeInTheDocument();
    });

    it("shows error message when server returns non-ok response", async () => {
      vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ error: "SES error" }), { status: 500 }));
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(screen.getByRole("button", { name: "Email" }));
      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send enquiry/i }));

      await waitFor(() => expect(screen.getByText(/something went wrong/i)).toBeInTheDocument());
    });

    it("re-enables form and allows retry after error", async () => {
      vi.mocked(fetch).mockRejectedValue(new Error("Network error"));
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(screen.getByRole("button", { name: "Email" }));
      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send enquiry/i }));

      await waitFor(() => expect(screen.getByRole("button", { name: /send enquiry/i })).not.toBeDisabled());
      expect(screen.getByLabelText(/name/i)).not.toBeDisabled();
    });

    it("does not open WhatsApp on email path submit", async () => {
      vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
      const user = userEvent.setup();
      render(<ContactForm />);
      await user.click(screen.getByRole("button", { name: "Email" }));
      await user.type(screen.getByLabelText(/name/i), "Jane Doe");
      await user.type(screen.getByLabelText(/email/i), "jane@example.com");
      await user.click(screen.getByRole("button", { name: /send enquiry/i }));

      await waitFor(() => expect(screen.getByText(/we.ll be in touch/i)).toBeInTheDocument());
      expect(window.open).not.toHaveBeenCalled();
    });
  });
});
