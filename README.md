# quogol-site

Marketing website for [Quogol](https://quogol.com) — a privacy-first browser.

Built with [Astro](https://astro.build) + Tailwind CSS, deployed via Cloudflare Pages.

## Stack

- **Framework**: Astro 4 (Static output)
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages
- **Fonts**: Fontshare (Satoshi + General Sans)

## Getting Started

```bash
npm install
npm run dev
```

## Structure

```
src/
├── layouts/
│   └── BaseLayout.astro     # Shared HTML shell, SEO, fonts
├── components/
│   ├── Navbar.astro
│   └── Footer.astro
└── pages/
    ├── index.astro           # Home / landing
    ├── download.astro
    ├── privacy.astro
    ├── terms.astro
    └── 404.astro
public/
├── favicon.svg
├── _headers                  # Cloudflare security headers
└── _redirects                # Cloudflare redirects
```

## Deployment

Connect this repo to **Cloudflare Pages**:
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20

## robots.txt

Paste your `robots.txt` into `public/robots.txt` with the `quogol.com` sitemap URL.
