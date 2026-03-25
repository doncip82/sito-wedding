# Amalfi Strings — Wedding Music Platform

Bespoke wedding music site for Donato Cipriano / EvoStrings / Trilogy Trio.
Built with Vite + React + Tailwind CSS + vite-ssg (Static Site Generation).

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your video to public/videos/
cp "Sito_Wedding_-_Hero_Loop.mp4" public/videos/

# 3. Start dev server
npm run dev
# → http://localhost:5173

# 4. Build static site (pre-renders all pages to /dist)
npm run build

# 5. Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── data/
│   ├── ensembles.js   ← Single source of truth for EvoStrings, Trilogy, Solo
│   ├── venues.js      ← Villa Cimbrone, Palazzo Avino, Belmond Caruso…
│   └── schema.js      ← Generates Schema.org JSON-LD from data files
│
├── components/
│   ├── layout/
│   │   ├── NavBar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx       ← Video background hero
│       ├── Services.jsx   ← Three ensemble cards
│       ├── Locations.jsx  ← Our Playground — 6 venues
│       └── About.jsx      ← Donato Cipriano — Artistic Direction
│
├── pages/
│   ├── Home.jsx
│   ├── EvoStrings.jsx
│   ├── TrilogyTrio.jsx
│   ├── ViolinSolo.jsx
│   └── Contact.jsx
│
├── hooks/
│   └── useScrollReveal.js  ← Progressive enhancement scroll animations
│
└── styles/
    └── globals.css         ← Tailwind + CSS variables
```

---

## Adding Real Content

### Hero Video
Place your video in `public/videos/` and update the `<source src>` in `src/components/sections/Hero.jsx`.

### Photos
Place optimised WebP images in `public/images/` and replace the placeholder `<div>` elements in each component with:
```jsx
<img src="/images/filename.webp" alt="Description" className="w-full h-full object-cover" />
```

### YouTube Videos (Services section)
In `src/data/ensembles.js`, set the `youtubeUrl` field for each ensemble.
In `src/components/sections/Services.jsx`, replace the `.s-video-ph` button with an `<iframe>` embed.

### Contact Form
In `src/pages/Contact.jsx`, replace the `handleSubmit` function with a real backend call:
```js
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

---

## SEO / GEO Architecture

- **vite-ssg** pre-renders every page to static HTML at build time
- Each page ships with `<title>`, `<meta description>` and `Schema.org JSON-LD` in the HTML source
- Schema.org is generated programmatically from `src/data/schema.js` — update data files and JSON-LD updates everywhere
- Silo structure: each ensemble has its own URL (`/evostrings`, `/trilogy-trio`, `/violin-solo`) for vertical authority
- All external links use `target="_blank" rel="noopener noreferrer"`

---

## Deployment

The `npm run build` command outputs a fully static `/dist` folder.
Deploy to: **Vercel**, **Netlify**, **Cloudflare Pages** — any static host works.

For Vercel:
```bash
npm i -g vercel
vercel --prod
```

---

## Design Tokens

| Token       | Value     | Usage                        |
|-------------|-----------|------------------------------|
| `--white`   | `#F9F8F7` | Page background              |
| `--ink`     | `#1A1A1A` | Primary text, dark sections  |
| `--mid`     | `#404040` | Body text on white           |
| `--gold`    | `#B8A882` | Accents, borders             |
| `--gold-dark` | `#8A7A5A` | Sub-labels, hover states   |
| `--border`  | `rgba(26,26,26,0.09)` | Dividers          |

Fonts: **Cormorant Garamond** (serif, display) + **Montserrat** (sans-serif, UI)
