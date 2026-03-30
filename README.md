# Haygrid Systems — Website

A static marketing site built with Next.js + Tailwind, deployed to GitHub Pages via static export.

## Local dev

```bash
npm install
npm run dev
```

## Testing

### Unit & component tests (Vitest + React Testing Library)

```bash
npm test
```

Covers `buildWhatsAppUrl` logic, `ContactForm` behaviour (field validation, WhatsApp submission, locked/edit state), `SolutionsTabs` tab switching, `Header` navigation and dropdowns, and link validation across all built pages in `docs/`.

### E2E tests (Playwright)

```bash
npm run test:e2e
```

Starts the dev server automatically and runs tests in Chromium across desktop and mobile (375px) viewports. Covers:

- **Mobile layout** — hamburger visibility, mobile menu open/close, Solutions accordion, nav link navigation
- **Dark mode** — body text, gradient background, header, contact form fields, and mobile menu text at both desktop and mobile viewports
- **Light mode** — same checks as dark mode

### CI

GitHub Actions runs `npm run build`, `npm test`, and `npm run test:e2e` on every push to `main`. See `.github/workflows/ci.yml`.

## Deploy to GitHub Pages

Run the full deploy pipeline (build → unit tests → E2E tests → push):

```bash
npm run deploy
```

This will:
1. Build the static export to `docs/`
2. Run all Vitest unit and component tests
3. Run all Playwright E2E tests
4. Commit `docs/` if changed
5. Push to GitHub

**Any test failure aborts the deploy.**

To deploy manually without the test gate:

1. Build the static export:
   ```bash
   npm run build
   ```
2. Commit and push `docs/`:
   ```bash
   git add docs/
   git commit -m "Build"
   git push
   ```

GitHub Pages serves from the `docs/` folder on the `main` branch. The site is available at https://www.haygrid.com.
