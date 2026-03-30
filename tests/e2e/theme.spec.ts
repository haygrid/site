import { test, expect } from "@playwright/test";

// Tailwind zinc palette (used in layout.tsx body classes):
//   Light: from-zinc-50 (#fafafa) to-zinc-100 (#f4f4f5)
//   Dark:  from-zinc-950 (#09090b) to-zinc-900 (#18181b)
//
// The body uses background-image (CSS gradient), so background-color is transparent.
// We check background-image for gradient colours instead.

async function getBodyColor(page: import("@playwright/test").Page) {
  return page.locator("body").evaluate((el) => getComputedStyle(el).color);
}

async function getBodyBgImage(page: import("@playwright/test").Page) {
  return page.locator("body").evaluate((el) => getComputedStyle(el).backgroundImage);
}

test.describe("Light mode", () => {
  test.use({ colorScheme: "light" });

  test("body has dark text", async ({ page }) => {
    await page.goto("/");
    // zinc-900 = rgb(24, 24, 27)
    expect(await getBodyColor(page)).toBe("rgb(24, 24, 27)");
  });

  test("body uses a light gradient background", async ({ page }) => {
    await page.goto("/");
    const bgImage = await getBodyBgImage(page);
    expect(bgImage).toMatch(/linear-gradient/);
    // zinc-50 = rgb(250, 250, 250) — appears as the gradient start colour
    expect(bgImage).toContain("rgb(250, 250, 250)");
  });

  test("header has light background", async ({ page }) => {
    await page.goto("/");
    const bg = await page.locator("header").evaluate((el) => getComputedStyle(el).backgroundColor);
    const [r, g, b] = bg.match(/\d+/g)!.map(Number);
    expect(r).toBeGreaterThan(200);
    expect(g).toBeGreaterThan(200);
    expect(b).toBeGreaterThan(200);
  });
});

test.describe("Dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("body has light text", async ({ page }) => {
    await page.goto("/");
    // zinc-100 = rgb(244, 244, 245)
    expect(await getBodyColor(page)).toBe("rgb(244, 244, 245)");
  });

  test("body uses a dark gradient background", async ({ page }) => {
    await page.goto("/");
    const bgImage = await getBodyBgImage(page);
    expect(bgImage).toMatch(/linear-gradient/);
    // zinc-950 = rgb(9, 9, 11) — appears as the gradient start colour
    expect(bgImage).toContain("rgb(9, 9, 11)");
  });

  test("header has dark background", async ({ page }) => {
    await page.goto("/");
    const bg = await page.locator("header").evaluate((el) => getComputedStyle(el).backgroundColor);
    const [r, g, b] = bg.match(/\d+/g)!.map(Number);
    expect(r).toBeLessThan(30);
    expect(g).toBeLessThan(30);
    expect(b).toBeLessThan(30);
  });

  test("contact form fields have dark background", async ({ page }) => {
    await page.goto("/contact/");
    const input = page.getByLabel(/name/i);
    const bg = await input.evaluate((el) => getComputedStyle(el).backgroundColor);
    // zinc-800 = rgb(39, 39, 42)
    const [r, g, b] = bg.match(/\d+/g)!.map(Number);
    expect(r).toBeLessThan(60);
    expect(g).toBeLessThan(60);
    expect(b).toBeLessThan(60);
  });
});

test.describe("Dark/light contrast", () => {
  test("body text colour differs between light and dark mode", async ({ browser }) => {
    const lightCtx = await browser.newContext({ colorScheme: "light" });
    const darkCtx = await browser.newContext({ colorScheme: "dark" });

    const lightPage = await lightCtx.newPage();
    const darkPage = await darkCtx.newPage();

    await lightPage.goto("/");
    await darkPage.goto("/");

    const lightColor = await getBodyColor(lightPage);
    const darkColor = await getBodyColor(darkPage);
    expect(lightColor).not.toBe(darkColor);

    await lightCtx.close();
    await darkCtx.close();
  });

  test("body background differs between light and dark mode", async ({ browser }) => {
    const lightCtx = await browser.newContext({ colorScheme: "light" });
    const darkCtx = await browser.newContext({ colorScheme: "dark" });

    const lightPage = await lightCtx.newPage();
    const darkPage = await darkCtx.newPage();

    await lightPage.goto("/");
    await darkPage.goto("/");

    const lightBg = await getBodyBgImage(lightPage);
    const darkBg = await getBodyBgImage(darkPage);
    expect(lightBg).not.toBe(darkBg);

    await lightCtx.close();
    await darkCtx.close();
  });
});
