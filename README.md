# Goldstar Tech — Agency Website

Minimalist multi-page website built with Next.js 14 (App Router), Tailwind CSS and GSAP.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Production
```bash
npm run build
npm start
```
Or deploy directly to Vercel / Netlify (zero config for Next.js).

## Pages (folder = URL)
| URL | File |
|---|---|
| /                      | app/page.js |
| /about                 | app/about/page.js |
| /services              | app/services/page.js (anchor links per service) |
| /products              | app/products/page.js |
| /blog                  | app/blog/page.js |
| /blog/[slug]           | app/blog/[slug]/page.js (articles in lib/posts.js) |
| /contact               | app/contact/page.js |
| /privacy-policy        | app/privacy-policy/page.js |
| /terms-and-conditions  | app/terms-and-conditions/page.js |

## SEO built in
- Per-page title/description/canonical via Next metadata API
- Open Graph + Twitter cards
- JSON-LD Organization schema (app/layout.js) + Article schema on blog posts
- Auto-generated /sitemap.xml and /robots.txt
- Semantic H1→H3 hierarchy on every page

## Customise
- Brand colors & fonts: tailwind.config.js + app/globals.css (CSS variables)
- Contact details: components/Footer.js, app/contact/page.js, app/layout.js (schema)
- Blog articles: lib/posts.js (add an object → page auto-generates)
- Contact form: wire the submit() in components/ContactForm.js to your CRM/webhook
- Domain: replace https://www.goldstartech.com in app/layout.js, app/sitemap.js, app/robots.js

## Motion
GSAP ScrollTrigger reveals (components/Reveal.js), hero load timeline, animated counters,
marquees, hover micro-interactions. All respect prefers-reduced-motion.
