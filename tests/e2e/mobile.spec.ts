import { test, expect } from "@playwright/test";

// All tests in this file use a mobile viewport
test.use({ viewport: { width: 375, height: 667 } });

test.describe("Mobile layout", () => {
  test("shows hamburger button, hides desktop nav", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: /toggle menu/i })).toBeVisible();
    // Desktop nav buttons are CSS-hidden on mobile
    await expect(page.locator("header").getByRole("button", { name: /^solutions$/i })).not.toBeVisible();
    await expect(page.locator("header").getByRole("button", { name: /the haygrid advantage/i })).not.toBeVisible();
  });

  test("hamburger opens mobile menu", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    // Desktop header CTA is CSS-hidden on mobile; mobile menu not yet rendered
    await expect(header.getByRole("link", { name: /plan your setup/i })).not.toBeVisible();

    await page.getByRole("button", { name: /toggle menu/i }).click();

    await expect(header.getByRole("link", { name: /plan your setup/i })).toBeVisible();
  });

  test("hamburger closes mobile menu", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    const hamburger = page.getByRole("button", { name: /toggle menu/i });

    await hamburger.click();
    await expect(header.getByRole("link", { name: /plan your setup/i })).toBeVisible();

    await hamburger.click();
    await expect(header.getByRole("link", { name: /plan your setup/i })).not.toBeVisible();
  });

  test("mobile Solutions accordion expands and shows links", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    await page.getByRole("button", { name: /toggle menu/i }).click();

    // Solutions links not yet visible in the mobile menu
    await expect(header.getByRole("link", { name: /^office$/i })).not.toBeVisible();

    await header.getByRole("button", { name: /^solutions$/i }).click();

    await expect(header.getByRole("link", { name: /^office$/i })).toBeVisible();
    await expect(header.getByRole("link", { name: /^retail & f&b$/i })).toBeVisible();
    await expect(header.getByRole("link", { name: /^homes$/i })).toBeVisible();
  });

  test("mobile nav links navigate to the correct pages", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /toggle menu/i }).click();
    await page.locator("header").getByRole("link", { name: /^contact$/i }).click();
    await expect(page).toHaveURL("/contact/");
  });
});

test.describe("Desktop layout", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("shows desktop nav, hides hamburger", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: /toggle menu/i })).not.toBeVisible();
    await expect(page.getByRole("button", { name: /^solutions$/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /the haygrid advantage/i })).toBeVisible();
  });
});
