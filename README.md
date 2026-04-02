# Haygrid Systems — Website

A static marketing site built with Next.js + Tailwind, deployed to Cloudflare Pages.

## Environments

| Branch    | Environment | URL                        | Promoted by          |
|-----------|-------------|----------------------------|----------------------|
| `staging` | Staging     | staging.haygrid.com        | merge from feature branch |
| `main`    | Production  | https://www.haygrid.com    | manual merge from `staging` at a stable checkpoint |

## Development workflow

1. **Branch from `staging`**
   ```bash
   git checkout staging
   git pull
   git checkout -b my-feature
   ```
2. **Make changes** — run `npm run precheckin` locally before pushing
3. **Merge back to `staging`** via PR or direct merge; Cloudflare Pages deploys staging automatically
4. **Close the issue** once changes are verified on staging
5. **Promote to production** — manually merge `staging` → `main` when staging is at a stable checkpoint; Cloudflare Pages deploys production automatically

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

Covers `buildWhatsAppUrl` logic, `ContactForm` behaviour (field validation, WhatsApp submission, locked/edit state), `SolutionsTabs` tab switching, `Header` navigation and dropdowns, and link validation across all built pages in `out/`.

### E2E tests (Playwright)

```bash
npm run test:e2e
```

Starts the dev server automatically and runs tests in Chromium across desktop and mobile (375px) viewports. Covers:

- **Mobile layout** — hamburger visibility, mobile menu open/close, Solutions accordion, nav link navigation
- **Dark mode** — body text, gradient background, header, contact form fields, and mobile menu text at both desktop and mobile viewports
- **Light mode** — same checks as dark mode

### CI

GitHub Actions runs `npm run build`, `npm test`, and `npm run test:e2e` on every push to `main` and `staging`, and on PRs targeting either branch. See `.github/workflows/ci.yml`.

## Deploy (Cloudflare Pages)

Cloudflare Pages builds and deploys automatically on push to `main`. Before pushing, run the full pre-checkin gate (build → unit tests → E2E tests):

```bash
npm run precheckin
```

If all tests pass, commit and push:

```bash
git push
```

**Any test failure aborts the deploy.**

The site is available at https://www.haygrid.com.

## Contact Worker (Cloudflare Worker + AWS SES)

The contact form's email path posts to `https://www.haygrid.com/api/contact`, handled by a Cloudflare Worker defined in `worker/`.

### Local dev

```bash
npm run worker:dev
```

### Deploy

```bash
npm run worker:deploy
```

### First-time setup

Set the required secrets via Wrangler before deploying:

```bash
npx wrangler secret put AWS_ACCESS_KEY_ID --config worker/wrangler.toml
npx wrangler secret put AWS_SECRET_ACCESS_KEY --config worker/wrangler.toml
npx wrangler secret put SES_FROM_EMAIL --config worker/wrangler.toml
npx wrangler secret put SES_TO_EMAIL --config worker/wrangler.toml
```

The Worker route (`www.haygrid.com/api/contact`) requires `www.haygrid.com` to be proxied through Cloudflare (orange cloud enabled in DNS settings).
