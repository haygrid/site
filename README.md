# Haygrid Systems — Website

A simple marketing site built with Vite + React + Tailwind, ready for GitHub Pages.

## Local dev

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a repo (e.g. `haygrid-systems-site`) and push this folder.
2. Ensure `vite.config.js` `base` matches your repo name (e.g. `/site/`).
3. Build & deploy:
   ```bash
   npm run build
   npm run deploy
   ```
4. In GitHub → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: `gh-pages`.

The site will be available at `https://<your-username>.github.io/<repo>/`.
