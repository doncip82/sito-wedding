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

## Analytics — Google tag & Google Ads conversion

The Google tag (`gtag.js`) loads on every page and tracks React Router
navigations as page views.

The **Google Ads conversion is tracked by the load of the `/thank-you` page**,
configured in the Ads account with the rule **"URL contains /thank-you"**. There
is **no** manual `gtag('event','conversion', …)` call anywhere in the code — the
page load is the single source of the conversion (no double counting).

`/thank-you` is reached **only** after a genuinely successful enquiry
(`200` from `/api/enquiry`) **and** only when advertising consent is granted.
A one-time, short-lived authorization in `sessionStorage`
(`wmr_enquiry_success`, see `src/lib/enquirySuccess.js`) gates it, so a direct
visit or a refresh cannot manufacture a conversion:

- direct visit / refresh **without** a valid authorization → redirected to
  `/contact`, and **no** `/thank-you` page view is sent;
- refresh **after** a legitimate arrival → the authorization exists but
  `pageViewSent` is already `true` → **no second** page view;
- a new successful submission → a fresh authorization (new conversion allowed).

### Environment variables (set in Vercel)

Vercel → Project → **Settings → Environment Variables** (Production + Preview):

| Variable | Format | Meaning |
|---|---|---|
| `VITE_GOOGLE_TAG_ID` | `AW-XXXXXXXXXX` | The Google tag id |

Only `VITE_GOOGLE_TAG_ID` is required. Any previous Google Ads conversion
id/label env vars are **no longer used** — the conversion is now the
`/thank-you` URL rule, so they can be removed from Vercel.

It has the `VITE_` prefix, so it is baked into the client bundle at build time
— **redeploy after changing it**. See `.env.example` for the template. If it is
unset the site works normally and tracking is a safe no-op (a dev-only console
warning appears; production stays silent).

### Consent (Consent Mode v2 — Advanced)

The site ships a cookie banner (`src/components/privacy/CookieConsent.jsx`) and
**Google Consent Mode v2 in Advanced mode**:

- `gtag('consent', 'default', …)` sets **all non-essential storage to `denied`**
  *before* `gtag('config', …)`. The Google tag may load, but withholds
  cookies/identifiers until the visitor grants consent (Advanced mode → Google
  still receives cookieless pings while denied). Advanced was chosen so
  navigation and modelling work from the first page load without setting cookies
  pre-consent — as opposed to Basic mode, which blocks the tag entirely until
  consent and loses cookieless signals.
- **Accept all** → `analytics` + `advertising` granted. **Reject non-essential**
  → both denied. A **Manage preferences** view toggles each category.
- The choice is stored in `localStorage` as `wmr_cookie_consent`
  (`{ analytics, advertising, timestamp, version }`) and re-applied on load.
  Bump `CONSENT_VERSION` in `src/lib/consent.js` after a material privacy change
  to re-prompt everyone.
- **Cookie Settings** (footer, every page) re-opens the panel to change/withdraw
  consent — no page navigation.
- **Google tag & page views** (all ordinary pages) use Advanced Consent Mode:
  they always call `gtag('event','page_view', …)`, and while consent is `denied`
  Consent Mode sends **cookieless pings** (no cookies/identifiers) rather than
  nothing.
- The **form conversion applies a stricter, intentional rule**: when advertising
  consent is denied, the form is still submitted and a confirmation is shown
  **inline on `/contact`**, but the user is **not navigated to `/thank-you`** —
  so the conversion URL is never loaded and **no conversion is generated at all**
  (not even a cookieless one). This is enforced in our own code
  (`hasAdvertisingConsent()` guard in `src/pages/Contact.jsx`), on top of Consent
  Mode.
- **Consequence (by design):** form conversions from visitors who declined
  advertising are therefore **not** available to Google for advertiser-specific
  conversion modelling. This is a deliberate project choice — a stricter privacy
  posture — **not a bug**. If you later prefer to rely on Consent Mode modelling
  instead, navigate to `/thank-you` regardless of advertising consent and let
  Consent Mode downgrade the denied case.

> This describes the **technical behaviour implemented**; it is not a statement
> of legal compliance. Have the banner copy and privacy policy reviewed for your
> jurisdiction before launch.

### Verifying with Google Tag Assistant

1. Install the **Tag Assistant** Chrome extension (or use
   [tagassistant.google.com](https://tagassistant.google.com)).
2. Deploy a Preview build with the env vars set and open it via Tag Assistant.
3. Confirm the Google tag is detected **once** (no duplicate `gtag.js`) and that
   navigating between pages emits one `page_view` per route.
4. Open the **Consent** tab: on first load, `ad_storage`, `analytics_storage`,
   `ad_user_data`, `ad_personalization` are all **denied** (default). After
   **Accept all** they become **granted** via a consent `update`; after **Reject
   non-essential** they stay **denied**.
5. Submit the `/contact` form with valid data **and** advertising consent → the
   browser navigates to **`/thank-you`**, which fires exactly **one** page view
   for that URL. Configure the Ads conversion with the rule **"URL contains
   /thank-you"**.
6. **Refresh `/thank-you`** → no second `/thank-you` page view.
7. Open **`/thank-you` directly** (new tab, no submission) → redirected to
   `/contact`, **no** `/thank-you` page view.
8. Submit with advertising **rejected** → the form still succeeds and "Thank
   you" shows **inline on `/contact`**; the browser does **not** navigate to
   `/thank-you`, so no conversion is generated.
9. Confirm there is **no** manual `gtag('event','conversion', …)` in the loaded
   scripts (the conversion is purely the `/thank-you` URL rule).

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
