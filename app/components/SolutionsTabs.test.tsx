import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SolutionsTabs from "./SolutionsTabs";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("SolutionsTabs", () => {
  it("renders the Offices tab by default", () => {
    render(<SolutionsTabs />);
    expect(screen.getByText(/The right access, for the right people/i)).toBeInTheDocument();
  });

  it("shows Retail & F&B content when that tab is clicked", async () => {
    const user = userEvent.setup();
    render(<SolutionsTabs />);

    await user.click(screen.getByRole("button", { name: /retail/i }));

    expect(screen.getByText(/Uptime when you're open/i)).toBeInTheDocument();
    expect(screen.queryByText(/The right access, for the right people/i)).not.toBeInTheDocument();
  });

  it("shows Homes content when that tab is clicked", async () => {
    const user = userEvent.setup();
    render(<SolutionsTabs />);

    await user.click(screen.getByRole("button", { name: /homes/i }));

    expect(screen.getByText(/Invisible by design/i)).toBeInTheDocument();
    expect(screen.queryByText(/The right access, for the right people/i)).not.toBeInTheDocument();
  });

  it("each tab links to the correct solutions page", () => {
    render(<SolutionsTabs />);
    expect(screen.getByRole("link", { name: /office solutions/i })).toHaveAttribute("href", "/solutions/office");
  });

  it("shows the correct solutions page link after switching tabs", async () => {
    const user = userEvent.setup();
    render(<SolutionsTabs />);

    await user.click(screen.getByRole("button", { name: /homes/i }));
    expect(screen.getByRole("link", { name: /home solutions/i })).toHaveAttribute("href", "/solutions/homes");
  });
});
