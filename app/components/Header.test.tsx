import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("Header", () => {
  it("renders the Haygrid Systems logo link", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /haygrid systems/i })).toHaveAttribute("href", "/");
  });

  it("renders top-level nav items", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /solutions/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /the haygrid advantage/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /contact/i }).length).toBeGreaterThan(0);
  });

  it("desktop Solutions dropdown opens on click", async () => {
    const user = userEvent.setup();
    render(<Header />);

    // Dropdown items not visible initially
    expect(screen.queryByRole("link", { name: /^office$/i })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /solutions/i }));

    expect(screen.getByRole("link", { name: /^office$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^retail & f&b$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^homes$/i })).toBeInTheDocument();
  });

  it("Solutions dropdown closes when clicked again", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: /solutions/i }));
    await user.click(screen.getByRole("button", { name: /solutions/i }));

    expect(screen.queryByRole("link", { name: /^office$/i })).not.toBeInTheDocument();
  });

  it("Advantage dropdown opens on click", async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(screen.queryByRole("link", { name: /the haygrid stack/i })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /the haygrid advantage/i }));

    expect(screen.getByRole("link", { name: /the haygrid stack/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /renovation integrations/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ongoing support/i })).toBeInTheDocument();
  });

  it("opening Solutions dropdown closes Advantage dropdown", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: /the haygrid advantage/i }));
    expect(screen.getByRole("link", { name: /the haygrid stack/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /solutions/i }));
    expect(screen.queryByRole("link", { name: /the haygrid stack/i })).not.toBeInTheDocument();
  });

  it("mobile menu is not rendered initially", () => {
    render(<Header />);
    // The mobile menu is conditionally rendered — before hamburger click,
    // "Plan your setup" appears only once (the desktop CTA).
    expect(screen.getAllByRole("link", { name: /plan your setup/i })).toHaveLength(1);
  });

  it("hamburger button renders mobile menu with a second Plan your setup link", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: /toggle menu/i }));

    // Desktop CTA + mobile menu link = 2
    expect(screen.getAllByRole("link", { name: /plan your setup/i })).toHaveLength(2);
  });
});
