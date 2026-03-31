import { test, expect } from "@playwright/test";

test.describe("Contact page — direct contact section", () => {
  async function getDirectSection(page: import("@playwright/test").Page) {
    return page.locator("div").filter({
      has: page.getByRole("heading", { name: /prefer to reach out directly/i }),
    });
  }

  test("shows Email label and correct mailto link", async ({ page }) => {
    await page.goto("/contact/");
    const section = await getDirectSection(page);
    const emailLink = section.getByRole("link", { name: /info@haygrid\.com/i });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", "mailto:info@haygrid.com");
    await expect(section.getByText("Email", { exact: true })).toBeVisible();
  });

  test("shows WhatsApp label, phone number and correct wa.me link", async ({ page }) => {
    await page.goto("/contact/");
    const section = await getDirectSection(page);
    const waLink = section.getByRole("link", { name: /\+65 8095 0315/i });
    await expect(waLink).toBeVisible();
    await expect(waLink).toHaveAttribute("href", "https://wa.me/6580950315");
    await expect(section.getByText("WhatsApp", { exact: true })).toBeVisible();
  });

  test("shows direct contact links on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/contact/");
    const section = await getDirectSection(page);
    await expect(section.getByRole("link", { name: /info@haygrid\.com/i })).toBeVisible();
    await expect(section.getByRole("link", { name: /\+65 8095 0315/i })).toBeVisible();
  });
});
