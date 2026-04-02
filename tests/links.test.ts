// @vitest-environment node
import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.resolve(__dirname, "../out");

const EXPECTED_ROUTES = [
  "/",
  "/contact",
  "/solutions/homes",
  "/solutions/office",
  "/solutions/retail",
  "/advantage/stack",
  "/advantage/renovation",
  "/advantage/support",
];

const EXPECTED_MAILTO = "mailto:info@haygrid.com";
const EXPECTED_WHATSAPP_NUMBER = "6580950315";

function routeToHtmlPath(route: string): string {
  if (route === "/") return path.join(OUTPUT_DIR, "index.html");
  return path.join(OUTPUT_DIR, route.replace(/^\//, ""), "index.html");
}

function extractLinks(html: string): string[] {
  const matches = html.matchAll(/href="([^"]+)"/g);
  return Array.from(matches, (m) => m[1]);
}

// ---------------------------------------------------------------------------
// Build output: all expected routes exist
// ---------------------------------------------------------------------------

describe("Build output", () => {
  it.each(EXPECTED_ROUTES)("generates route %s", (route) => {
    const htmlPath = routeToHtmlPath(route);
    expect(fs.existsSync(htmlPath), `Missing: ${htmlPath}`).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Link validation: per page
// ---------------------------------------------------------------------------

describe("Link validation", () => {
  for (const route of EXPECTED_ROUTES) {
    const htmlPath = routeToHtmlPath(route);
    if (!fs.existsSync(htmlPath)) continue;

    const html = fs.readFileSync(htmlPath, "utf-8");
    const links = extractLinks(html);

    describe(`${route}`, () => {
      const internalLinks = links.filter((l) => l.startsWith("/") && !l.startsWith("//"));

      it.each(internalLinks)("internal link %s resolves to a file in out/", (href) => {
        // Strip trailing slash and check for index.html, or check direct file
        const normalised = href.endsWith("/") ? href : `${href}/`;
        const indexPath = path.join(OUTPUT_DIR, normalised.replace(/^\//, ""), "index.html");
        const directPath = path.join(OUTPUT_DIR, href.replace(/^\//, ""));
        const exists = fs.existsSync(indexPath) || fs.existsSync(directPath);
        expect(exists, `Broken internal link: ${href} on page ${route}`).toBe(true);
      });

      const mailtoLinks = links.filter((l) => l.startsWith("mailto:"));
      if (mailtoLinks.length > 0) {
        it("mailto links use the correct address", () => {
          for (const link of mailtoLinks) {
            expect(link, `Unexpected mailto: ${link} on ${route}`).toMatch(
              new RegExp(`^${EXPECTED_MAILTO}`)
            );
          }
        });
      }

      const whatsappLinks = links.filter((l) => l.includes("wa.me"));
      if (whatsappLinks.length > 0) {
        it("WhatsApp links use the correct number", () => {
          for (const link of whatsappLinks) {
            expect(link, `Unexpected wa.me number in: ${link} on ${route}`).toContain(
              EXPECTED_WHATSAPP_NUMBER
            );
          }
        });
      }
    });
  }
});
