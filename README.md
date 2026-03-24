# Haygrid Systems — Website

A static marketing site built with Next.js + Tailwind, deployed to GitHub Pages via static export.

## Local dev

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Build the static export:
   ```bash
   npm run build
   ```
   This outputs the static site to the `docs/` directory.
3. Commit and push `docs/`:
   ```bash
   git add docs/
   git commit -m "Build"
   git push
   ```
4. In GitHub → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: `main` (or your branch), folder: `/docs`.

The site is available at https://www.haygrid.com.
