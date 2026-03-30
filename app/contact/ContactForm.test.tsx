import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
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
    // The raw URL must be a valid percent-encoded string
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
  });

  it("renders all form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/type of space/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/size of space/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project stage/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/estimated budget/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tell us about/i)).toBeInTheDocument();
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

  it("disables all fields and shows confirmation + Edit + Send again after submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.click(screen.getByRole("button", { name: /send via whatsapp/i }));

    // Confirmation message
    expect(screen.getByText(/whatsapp is ready to send/i)).toBeInTheDocument();

    // All fields are disabled
    expect(screen.getByLabelText(/name/i)).toBeDisabled();
    expect(screen.getByLabelText(/email/i)).toBeDisabled();
    expect(screen.getByLabelText(/type of space/i)).toBeDisabled();
    expect(screen.getByLabelText(/size of space/i)).toBeDisabled();
    expect(screen.getByLabelText(/project stage/i)).toBeDisabled();
    expect(screen.getByLabelText(/estimated budget/i)).toBeDisabled();
    expect(screen.getByLabelText(/tell us about/i)).toBeDisabled();

    // Action buttons
    expect(screen.getByRole("button", { name: /edit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send again/i })).toBeInTheDocument();
  });

  it("re-enables all fields and restores Send button when Edit is clicked", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.click(screen.getByRole("button", { name: /send via whatsapp/i }));
    await user.click(screen.getByRole("button", { name: /edit/i }));

    // All fields re-enabled
    expect(screen.getByLabelText(/name/i)).not.toBeDisabled();
    expect(screen.getByLabelText(/email/i)).not.toBeDisabled();
    expect(screen.getByLabelText(/type of space/i)).not.toBeDisabled();
    expect(screen.getByLabelText(/size of space/i)).not.toBeDisabled();
    expect(screen.getByLabelText(/project stage/i)).not.toBeDisabled();
    expect(screen.getByLabelText(/estimated budget/i)).not.toBeDisabled();
    expect(screen.getByLabelText(/tell us about/i)).not.toBeDisabled();

    // Back to initial submit button
    expect(screen.getByRole("button", { name: /send via whatsapp/i })).toBeInTheDocument();
  });

  it("Send again opens WhatsApp a second time with the same data", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.click(screen.getByRole("button", { name: /send via whatsapp/i }));
    await user.click(screen.getByRole("button", { name: /send again/i }));

    expect(window.open).toHaveBeenCalledTimes(2);
    const firstUrl = (window.open as ReturnType<typeof vi.fn>).mock.calls[0][0] as string;
    const secondUrl = (window.open as ReturnType<typeof vi.fn>).mock.calls[1][0] as string;
    expect(firstUrl).toEqual(secondUrl);
  });

  it("omits empty optional fields from the WhatsApp URL", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    // leave all optional fields empty
    await user.click(screen.getByRole("button", { name: /send via whatsapp/i }));

    const calledUrl = (window.open as ReturnType<typeof vi.fn>).mock.calls[0][0] as string;
    const decoded = decodeURIComponent(calledUrl.split("?text=")[1]);
    expect(decoded).not.toContain("Space type");
    expect(decoded).not.toContain("Project stage");
    expect(decoded).not.toContain("Space size");
    expect(decoded).not.toContain("Budget");
  });
});
