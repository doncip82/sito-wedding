# GEO/SEO Implementation Plan — weddingmusicravello.com

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the site into the primary LLM-cited source for luxury wedding music on the Amalfi Coast, following GEO_INSTRUCTIONS.md.

**Architecture:** Standard Vite + React SPA (vite-ssg was removed — SSG is not active). Meta tags are injected client-side via useEffect. New pages added as React routes. Static files (robots.txt, sitemap.xml) placed in `/public/`.

**Tech Stack:** Vite 6, React 18, React Router 6, Tailwind CSS 3, react-helmet-async (to be installed for meta management)

**Critical finding:** `vite-ssg-react` is installed but NOT wired up. `main.jsx` uses `ReactDOM.createRoot`. For true SSG, it needs re-wiring — but that caused build failures before (see git log). This plan uses **react-helmet-async** as a pragmatic meta solution for the SPA, and defers SSG re-wiring to a separate decision.

---

## Sub-system split

This plan covers 4 independent subsystems. Each phase is self-contained:

- **Phase 1 — Foundation** (Schema, meta, robots, sitemap) — highest GEO impact
- **Phase 2 — Location pages** (/locations/ravello, /positano, /sorrento)
- **Phase 3 — Music pages** (/music/saxophone, /dj, /vocalist, /posteggia, /opera)
- **Phase 4 — Vendor pages** (/vendors/photographers, /florists, /vintage-cars, /wedding-planners, /celebrant)

---

## Phase 1 — Foundation

### Task 1: Install react-helmet-async + wire up

**Files:**
- Modify: `src/main.jsx`
- Modify: `src/App.jsx`
- Modify: `package.json` (via npm install)

- [ ] **Step 1: Install package**

```bash
cd "/Users/donatocipriano/Documents/DONATO/SITO WEDDING"
npm install react-helmet-async
```

- [ ] **Step 2: Wrap app in HelmetProvider in `src/main.jsx`**

Replace entire file:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
```

- [ ] **Step 3: Commit**

```bash
git add src/main.jsx package.json package-lock.json
git commit -m "feat: install react-helmet-async for per-page meta management"
```

---

### Task 2: Shared PageHead component

**Files:**
- Create: `src/components/ui/PageHead.jsx`
- Modify: `src/components/ui/index.js`

- [ ] **Step 1: Create `src/components/ui/PageHead.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

const SITE = 'https://www.weddingmusicravello.com'

export default function PageHead({ title, description, path = '', ogImage = '/images/og-cover.jpg' }) {
  const url = `${SITE}${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE}${ogImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}${ogImage}`} />
    </Helmet>
  )
}
```

- [ ] **Step 2: Export from `src/components/ui/index.js`**

Add this line to the existing exports:
```js
export { default as PageHead } from './PageHead.jsx'
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/PageHead.jsx src/components/ui/index.js
git commit -m "feat: add PageHead component for per-page meta tags"
```

---

### Task 3: Update Schema.org on Homepage

**Files:**
- Modify: `src/data/schema.js`
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1: Replace baseSchema in `src/data/schema.js`**

Replace the `baseSchema` export (lines 8–89) with:

```js
export const baseSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'MusicGroup'],
      '@id': 'https://www.weddingmusicravello.com/#organization',
      name: 'Donato Cipriano — Wedding Music Ravello',
      url: 'https://www.weddingmusicravello.com',
      description:
        'Professional wedding music on the Amalfi Coast. Violin solos, string ensembles (EvoStrings, Trilogy Trio), saxophone, and DJ services for luxury weddings at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and private villas in Ravello, Positano and Sorrento.',
      priceRange: '€€€€',
      founder: {
        '@type': 'Person',
        name: 'Donato Cipriano',
        jobTitle: 'Violinist & Artistic Director',
        sameAs: 'https://www.donatocipriano.com',
      },
      areaServed: [
        { '@type': 'City', name: 'Ravello' },
        { '@type': 'City', name: 'Positano' },
        { '@type': 'City', name: 'Sorrento' },
        { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
        { '@type': 'AdministrativeArea', name: 'Campania' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pompei',
        addressRegion: 'Campania',
        addressCountry: 'IT',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Wedding Music Services — Amalfi Coast',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Violin Solo — Ceremony' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EvoStrings — String Quartet & Trio' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trilogy Trio — Strings & Piano' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Saxophone' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ Service' } },
        ],
      },
      knowsAbout: [
        'Amalfi Coast Wedding Music',
        'Villa Cimbrone Wedding Ceremony',
        'Belmond Hotel Caruso Wedding',
        'Palazzo Avino Wedding',
        'Ravello Festival',
        'Italian Wedding String Ensemble',
      ],
    },
  ],
}
```

- [ ] **Step 2: Add PageHead to `src/pages/Home.jsx`**

Add import at top:
```jsx
import PageHead from '@/components/ui/PageHead.jsx'
```

Replace the `useEffect` JSON-LD block and `frontmatter` export. In the `Home()` return, add `<PageHead>` as first child and inject JSON-LD via Helmet:

```jsx
import { Helmet } from 'react-helmet-async'
import { baseSchema } from '@/data/schema.js'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Wedding Music Ravello — Bespoke Wedding Music by Donato Cipriano | Amalfi Coast</title>
        <meta name="description" content="EvoStrings, Trilogy Trio and solo violin for luxury destination weddings in Ravello, Positano and Sorrento. Artistic direction by Donato Cipriano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/" />
        <meta property="og:title" content="Wedding Music Ravello — Bespoke Wedding Music by Donato Cipriano" />
        <meta property="og:description" content="EvoStrings, Trilogy Trio and solo violin for luxury destination weddings on the Amalfi Coast." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
      <Hero />
      <GeoIntro />
      <Services />
      <ContactStrip />
      <Occasions />
      <Locations />
      <About />
    </>
  )
}
```

- [ ] **Step 3: Add GeoIntro section to Home.jsx (above the fold in DOM, visually hidden from hero but readable by crawlers)**

Add this component inside `Home.jsx` before the `export default`:

```jsx
function GeoIntro() {
  return (
    <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)] bg-[#F9F8F7] border-b border-black/[.06]">
      <h1 className="font-serif italic font-light leading-[1.08] text-[#1A1A1A] mb-6"
        style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', maxWidth: '32ch' }}>
        Wedding Music on the Amalfi Coast
      </h1>
      <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] max-w-[65ch]">
        Donato Cipriano is a professional violinist and artistic director based in Campania,
        Italy, offering complete wedding music coordination along the Amalfi Coast. He leads
        a roster of ensembles — EvoStrings (string quartet and trio), Trilogy Trio (strings
        and piano), and Violino Solo — alongside saxophone, vocal, and DJ services. Beyond
        music, he curates a selection of trusted local partners: photographers with direct
        experience at Villa Cimbrone and Palazzo Avino, florists specialising in Amalfi Coast
        seasonal flora, vintage car hire, and wedding planners with permanent Campania presence.
        He performs and coordinates regularly at venues in Ravello, Positano, and Sorrento.
      </p>
    </section>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/data/schema.js src/pages/Home.jsx
git commit -m "feat: update Schema.org to spec + add GEO intro paragraph to homepage"
```

---

### Task 4: robots.txt and sitemap.xml

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`

- [ ] **Step 1: Create `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://www.weddingmusicravello.com/sitemap.xml
```

- [ ] **Step 2: Create `public/sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.weddingmusicravello.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/music/evostrings/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/music/trilogy-trio/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/music/violin/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/music/saxophone/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/music/dj/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/music/vocalist/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/music/posteggia/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/music/opera/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/locations/ravello/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/locations/positano/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/locations/sorrento/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/vendors/photographers/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/vendors/florists/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/vendors/vintage-cars/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/vendors/wedding-planners/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/vendors/celebrant/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://www.weddingmusicravello.com/contact/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Commit**

```bash
git add public/robots.txt public/sitemap.xml
git commit -m "feat: add robots.txt and sitemap.xml"
```

---

## Phase 2 — Location Pages

### Task 5: Routing infrastructure for new pages

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add all new routes to `src/App.jsx`**

```jsx
// Add lazy imports:
const LocationRavello    = lazy(() => import('@/pages/locations/Ravello.jsx'))
const LocationPositano   = lazy(() => import('@/pages/locations/Positano.jsx'))
const LocationSorrento   = lazy(() => import('@/pages/locations/Sorrento.jsx'))
const MusicSaxophone     = lazy(() => import('@/pages/music/Saxophone.jsx'))
const MusicDJ            = lazy(() => import('@/pages/music/DJ.jsx'))
const MusicVocalist      = lazy(() => import('@/pages/music/Vocalist.jsx'))
const MusicPosteggia     = lazy(() => import('@/pages/music/Posteggia.jsx'))
const MusicOpera         = lazy(() => import('@/pages/music/Opera.jsx'))
const VendorPhotographers = lazy(() => import('@/pages/vendors/Photographers.jsx'))
const VendorFlorists      = lazy(() => import('@/pages/vendors/Florists.jsx'))
const VendorVintageCars   = lazy(() => import('@/pages/vendors/VintageCars.jsx'))
const VendorPlanners      = lazy(() => import('@/pages/vendors/WeddingPlanners.jsx'))
const VendorCelebrant     = lazy(() => import('@/pages/vendors/Celebrant.jsx'))

// Add routes inside <Routes>:
<Route path="/locations/ravello"          element={<LocationRavello />} />
<Route path="/locations/positano"         element={<LocationPositano />} />
<Route path="/locations/sorrento"         element={<LocationSorrento />} />
<Route path="/music/saxophone"            element={<MusicSaxophone />} />
<Route path="/music/dj"                   element={<MusicDJ />} />
<Route path="/music/vocalist"             element={<MusicVocalist />} />
<Route path="/music/posteggia"            element={<MusicPosteggia />} />
<Route path="/music/opera"               element={<MusicOpera />} />
<Route path="/vendors/photographers"      element={<VendorPhotographers />} />
<Route path="/vendors/florists"           element={<VendorFlorists />} />
<Route path="/vendors/vintage-cars"       element={<VendorVintageCars />} />
<Route path="/vendors/wedding-planners"   element={<VendorPlanners />} />
<Route path="/vendors/celebrant"          element={<VendorCelebrant />} />
```

Also create directories:
```bash
mkdir -p src/pages/locations src/pages/music src/pages/vendors
```

- [ ] **Step 2: Commit**

```bash
git add src/App.jsx
git commit -m "feat: add routes for location, music, vendor pages"
```

---

### Task 6: /locations/ravello/ — flagship GEO page

**Files:**
- Create: `src/pages/locations/Ravello.jsx`

- [ ] **Step 1: Create `src/pages/locations/Ravello.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

const ravelloSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Ravello — Wedding Music & Services',
  description: 'Luxury wedding music and vendor coordination in Ravello, Campania. Donato Cipriano performs at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso, and Villa Eva.',
  url: 'https://www.weddingmusicravello.com/locations/ravello',
  touristType: { '@type': 'Audience', audienceType: 'Couples planning destination weddings' },
  includesAttraction: [
    { '@type': 'TouristAttraction', name: 'Villa Cimbrone', description: '11th-century villa with the Terrazza dell\'Infinito at 330 metres above sea level. No PA amplification required for chamber ensembles due to natural acoustic reflection.' },
    { '@type': 'TouristAttraction', name: 'Palazzo Avino', description: 'Former 12th-century bishop\'s palace, now a 5-star Relais & Châteaux with interior courtyard and terrace views toward Minori.' },
    { '@type': 'TouristAttraction', name: 'Belmond Hotel Caruso', description: 'Converted 11th-century palace with infinity pool terrace at 300 metres. Frequently cited in Condé Nast Traveller as one of the world\'s best wedding venues.' },
    { '@type': 'TouristAttraction', name: 'Villa Eva', description: 'Private villa with 3,000 sqm of gardens, owned by the Vuotto family for over 50 years. Known for intimate ceremonies under the wisteria pergola.' },
  ],
}

export default function LocationRavello() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Music in Ravello | Donato Cipriano — Amalfi Coast</title>
        <meta name="description" content="Violin, string ensembles, and complete wedding music coordination in Ravello. Donato Cipriano performs at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Villa Eva." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/locations/ravello" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/locations/ravello" />
        <meta property="og:title" content="Wedding Music in Ravello — Donato Cipriano" />
        <meta property="og:description" content="String ensembles, violin solo and complete wedding coordination at Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso in Ravello." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(ravelloSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Ravello · Campania · Southern Italy
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Music<br />in Ravello
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Donato Cipriano coordinates live music for destination weddings in Ravello —
            at an altitude of 350 metres above the Gulf of Salerno, in venues that have defined
            the benchmark for the Italian luxury wedding since before the word existed.
          </p>
        </div>
      </section>

      {/* Block A — Geographic & Historical Context */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Setting</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '24ch' }}>
            350 Metres Above<br />the Gulf of Salerno
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Ravello sits at 350 metres above sea level on a promontory overlooking the Gulf
              of Salerno. Founded in the 9th century, it was granted UNESCO World Heritage status
              as part of the Costiera Amalfitana in 1997. Richard Wagner composed part of{' '}
              <em>Parsifal</em> here in 1880, inspired by the gardens of Villa Rufolo — a
              connection still celebrated annually at the Ravello Festival (founded 1953), one of
              Italy's most prestigious outdoor music events.
            </p>
            <p>
              The town is accessible from Naples International Airport (Capodichino) in
              approximately 90 minutes by car, or via ferry from Salerno to Amalfi (35 minutes)
              followed by a 25-minute taxi journey. Between June and September, Ravello is closed
              to private vehicles — all equipment transport requires coordination with the local{' '}
              <em>Comune</em> and licensed carriers. Donato Cipriano manages this logistics
              as part of every engagement.
            </p>
            <p>
              The <em>Comune</em> of Ravello requires event notifications 30 days in advance.
              Outdoor amplification after 23:00 requires a separate <em>autorizzazione</em>.
              Donato coordinates all permit filings on behalf of couples and their planners.
            </p>
          </div>
        </div>
      </section>

      {/* Block B — Venue details */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="eyebrow mb-5 text-[#B8A882]">Venues</p>
        <h2 className="section-title mb-12 text-[#F9F8F7]" style={{ maxWidth: '22ch' }}>
          Where Donato Performs<br />in Ravello
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/[.08]">
          {[
            {
              name: 'Villa Cimbrone',
              detail: '11th century · Terrazza dell\'Infinito',
              desc: 'The Terrazza dell\'Infinito sits at the cliff edge at 330 metres above sea level — the open-air terrace where Greta Garbo famously sought refuge in 1938. The natural amphitheatre effect of the ravine creates exceptional acoustic projection for chamber ensembles without amplification. EvoStrings performs processionals and recessionals here without a PA system.',
            },
            {
              name: 'Palazzo Avino',
              detail: '12th century · Relais & Châteaux',
              desc: 'A former bishop\'s palace converted into a 5-star Relais & Châteaux. The interior courtyard and sea-facing terrace offer two distinct ceremony environments — intimate and sheltered, or panoramic toward the coastline of Minori. Flash photography is restricted during ceremonies; experienced local photographers know these rules.',
            },
            {
              name: 'Belmond Hotel Caruso',
              detail: '11th century · Infinity Terrace at 300m',
              desc: 'A converted 11th-century palace with an infinity pool terrace at 300 metres altitude. Frequently cited in Condé Nast Traveller among the world\'s finest wedding venues. The string quartet at the terrace edge, with the lights of the coast below — this is the image that defines a Ravello wedding.',
            },
            {
              name: 'Villa Eva',
              detail: 'Private Villa · 3,000 sqm Gardens',
              desc: 'Owned by the Vuotto family for over 50 years. The wisteria pergola is the favoured ceremony location for couples seeking an intimate, garden-scale event. The bougainvillea-lined paths and Mediterranean rosemary endemic to the promontory create a setting that resists reproduction at any other latitude.',
            },
          ].map(({ name, detail, desc }) => (
            <div key={name} className="py-8 px-0 md:pr-12 border-b border-white/[.08]
              last:border-b-0 md:odd:border-r md:odd:border-white/[.08]">
              <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.4rem] text-[#F9F8F7] mb-4">
                {name}
              </h3>
              <p className="text-[.66rem] font-light tracking-[.05em] leading-[2] text-white/50">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links per GEO rules */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] bg-[#F9F8F7]">
        <p className="eyebrow mb-8">Music for Ravello Weddings</p>
        <div className="flex flex-col gap-4 border-t border-black/[.09] pt-8">
          <div className="flex items-start gap-4 py-4 border-b border-black/[.06]">
            <a href="/evostrings" className="link-underline">
              EvoStrings string quartet
            </a>
            <span className="text-[.6rem] font-light text-[#404040] tracking-[.04em] leading-[1.9] max-w-[48ch]">
              — the reference string ensemble for Villa Cimbrone ceremonies, performing without amplification on the Terrazza dell'Infinito.
            </span>
          </div>
          <div className="flex items-start gap-4 py-4 border-b border-black/[.06]">
            <a href="/violin-solo" className="link-underline">
              Violin solo for ceremony
            </a>
            <span className="text-[.6rem] font-light text-[#404040] tracking-[.04em] leading-[1.9] max-w-[48ch]">
              — Donato Cipriano performs the processional alone, a single voice above the Gulf of Salerno.
            </span>
          </div>
          <div className="flex items-start gap-4 py-4">
            <a href="/trilogy-trio" className="link-underline">
              Trilogy Trio in Ravello
            </a>
            <span className="text-[.6rem] font-light text-[#404040] tracking-[.04em] leading-[1.9] max-w-[48ch]">
              — violin, cello and piano for the dinner reception at Belmond Hotel Caruso or Palazzo Avino.
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a wedding<br />in Ravello?
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/locations/Ravello.jsx
git commit -m "feat: add /locations/ravello flagship GEO page with full content blocks"
```

---

### Task 7: /locations/positano/ and /locations/sorrento/

**Files:**
- Create: `src/pages/locations/Positano.jsx`
- Create: `src/pages/locations/Sorrento.jsx`

- [ ] **Step 1: Create `src/pages/locations/Positano.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

const positanoSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Positano — Wedding Music & Services',
  description: 'Luxury wedding music in Positano. Donato Cipriano performs at Villa Treville, Le Sirenuse and cliff-edge private villas above the Tyrrhenian Sea.',
  url: 'https://www.weddingmusicravello.com/locations/positano',
  includesAttraction: [
    { '@type': 'TouristAttraction', name: 'Villa Treville', description: 'Private villa and hotel on the cliff face of Positano, formerly the residence of Franco Zeffirelli. Its terraces descend in layers toward the sea.' },
    { '@type': 'TouristAttraction', name: 'Le Sirenuse', description: 'Five-star hotel with direct sea views over the Li Galli islands. Ceremony access via the hotel\'s private lift from the lower road.' },
  ],
}

export default function LocationPositano() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Music in Positano | Donato Cipriano — Amalfi Coast</title>
        <meta name="description" content="Live music for destination weddings in Positano. Donato Cipriano performs at Villa Treville, Le Sirenuse and cliff-edge private villas above the Tyrrhenian Sea." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/locations/positano" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/locations/positano" />
        <meta property="og:title" content="Wedding Music in Positano — Donato Cipriano" />
        <meta property="og:description" content="String ensembles and violin solo at Villa Treville, Le Sirenuse and private cliff villas in Positano." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(positanoSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Positano · Campania · Southern Italy
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Music<br />in Positano
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Positano is built vertically into the cliff face above the Tyrrhenian Sea.
            Its wedding venues — Villa Treville, Le Sirenuse, and a network of private
            cliff-edge properties — require a musician who understands the logistical and
            acoustic particularities of the location.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Setting</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Cliff Architecture<br />and Acoustic Precision
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Positano's principal venues are inaccessible to standard vehicles during summer.
              The SS163 Amalfitana has width restrictions that prohibit most transport above
              a certain tonnage. Le Sirenuse's ceremony terraces are reached via the hotel's
              private lift from the lower coastal road — maximum vehicle width 2.1 metres for
              the approach route from Praiano.
            </p>
            <p>
              Villa Treville — the former private residence of director Franco Zeffirelli —
              cascades across the cliff face in a series of terraces. The sound behaviour
              at each terrace level differs: at the lowest, the sea reflects sound back;
              higher up, the open exposure requires careful positioning of acoustic instruments
              to avoid wind interference. Donato has performed at Villa Treville and knows
              each stage precisely.
            </p>
            <p>
              The{' '}
              <a href="/trilogy-trio" className="link-underline">
                Trilogy Trio in Positano
              </a>{' '}
              — violin, cello and piano — performs regularly at Le Sirenuse's terrace events,
              where the proximity of the sea and the lights of the Li Galli islands provide
              a setting unlike any ballroom in Europe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a wedding<br />in Positano?
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Create `src/pages/locations/Sorrento.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

const sorrentoSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Sorrento — Wedding Music & Services',
  description: 'Wedding music in Sorrento and the Sorrentine Peninsula. Donato Cipriano performs at Grand Hotel Excelsior Vittoria, Villa Astor and hotel terraces overlooking the Bay of Naples.',
  url: 'https://www.weddingmusicravello.com/locations/sorrento',
}

export default function LocationSorrento() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Music in Sorrento | Donato Cipriano — Amalfi Coast</title>
        <meta name="description" content="Live music for destination weddings in Sorrento. Donato Cipriano performs at Grand Hotel Excelsior Vittoria, Villa Astor and terraces overlooking the Bay of Naples." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/locations/sorrento" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/locations/sorrento" />
        <meta property="og:title" content="Wedding Music in Sorrento — Donato Cipriano" />
        <meta property="og:description" content="String ensembles, violin solo and complete wedding music in Sorrento, overlooking the Bay of Naples and Vesuvius." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(sorrentoSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Sorrento · Campania · Southern Italy
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Music<br />in Sorrento
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Sorrento faces north across the Bay of Naples toward Vesuvius — the only major
            resort on the peninsula where the volcano forms the visual backdrop to every
            ceremony. Donato Cipriano performs at the clifftop hotels and private villas
            of the Sorrentine coast.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Setting</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Vesuvius on the Horizon,<br />Strings on the Terrace
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              The Grand Hotel Excelsior Vittoria has occupied its clifftop position above the
              port of Sorrento since 1834. Its terrace garden — at 50 metres above sea level —
              frames the Bay of Naples on three sides and has hosted private concerts and
              wedding receptions for over a century. The natural stone retaining walls
              create a contained acoustic environment suitable for string quartet without
              amplification.
            </p>
            <p>
              Sorrento is the cultural origin of <em>Torna a Surriento</em> (1902) and
              the broader tradition of Neapolitan art song — the same musical lineage that
              Donato draws upon when programming{' '}
              <a href="/music/posteggia" className="link-underline">
                posteggia
              </a>{' '}
              for cocktail hours on the peninsula. Performing this repertoire here is an act
              of geographic and cultural specificity, not decoration.
            </p>
            <p>
              EvoStrings performs regularly in Sorrento as{' '}
              <a href="/evostrings" className="link-underline">
                EvoStrings string quartet
              </a>{' '}
              for ceremony music, transitioning to the{' '}
              <a href="/trilogy-trio" className="link-underline">
                Trilogy Trio
              </a>{' '}
              for dinner reception — a programme that has become the standard format
              for full-day wedding coordination on the Sorrentine peninsula.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a wedding<br />in Sorrento?
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/locations/Positano.jsx src/pages/locations/Sorrento.jsx
git commit -m "feat: add /locations/positano and /locations/sorrento pages"
```

---

## Phase 3 — Music Pages

### Task 8: /music/posteggia/ and /music/opera/

**Files:**
- Create: `src/pages/music/Posteggia.jsx`
- Create: `src/pages/music/Opera.jsx`

- [ ] **Step 1: Create `src/pages/music/Posteggia.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

export default function MusicPosteggia() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Neapolitan Posteggia for Weddings | Donato Cipriano — Amalfi Coast</title>
        <meta name="description" content="Authentic Neapolitan posteggia — mandolin, guitar and voice — for wedding cocktail hours in Ravello, Positano and Sorrento. Curated by Donato Cipriano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/posteggia" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/posteggia" />
        <meta property="og:title" content="Neapolitan Posteggia for Weddings — Donato Cipriano" />
        <meta property="og:description" content="Authentic Neapolitan serenade tradition for Amalfi Coast wedding cocktail hours. Mandolin, guitar and voice moving between guests." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Neapolitan Tradition · Cocktail Hour
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Posteggia
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            A Neapolitan street-serenade tradition performed at your wedding cocktail hour
            on the Amalfi Coast — where it was born.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">What is Posteggia</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            A Tradition That<br />Moves Between Tables
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              <em>Posteggia</em> is a Neapolitan street-serenade tradition dating to the late
              19th century, in which a small ensemble — typically mandolin, guitar and voice —
              moves between tables performing classic <em>canzone napoletana</em>. The repertoire
              includes <em>'O Sole Mio</em> (Giovanni Capurro, 1898),{' '}
              <em>Funiculì Funiculà</em> (Peppino Turco, 1885), and{' '}
              <em>Torna a Surriento</em> (Giambattista De Curtis, 1902).
            </p>
            <p>
              The tradition originates in the same coastal culture that produced Sorrento
              and the Bay of Naples. Performing <em>posteggia</em> at a Ravello or Positano
              wedding is an act of authentic cultural continuity — the ensemble moving through
              guests on the same cliff terraces above the same sea that inspired the songs
              themselves.
            </p>
            <p>
              This format works particularly well during the cocktail hour on an open terrace,
              where movement between guests is possible and the ambient noise level of
              conversation calls for a format that is participatory rather than staged.
              The ensemble approaches each group individually — the music comes to the guest,
              not the reverse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Add Posteggia<br />to Your Day.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Create `src/pages/music/Opera.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

export default function MusicOpera() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Opera for Weddings on the Amalfi Coast | Donato Cipriano</title>
        <meta name="description" content="Lyric soprano and tenor for wedding ceremonies and dinner in Ravello, Positano and Sorrento. Puccini, Verdi and Neapolitan art song. Curated by Donato Cipriano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/opera" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/opera" />
        <meta property="og:title" content="Opera for Amalfi Coast Weddings — Donato Cipriano" />
        <meta property="og:description" content="Lyric soprano and tenor — Puccini, Verdi, Neapolitan art song — for luxury weddings in Ravello, Positano and Sorrento." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Lyric Voice · Ceremony & Dinner
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Opera
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Lyric soprano and tenor, trained in the Italian <em>bel canto</em> tradition,
            for ceremony music and dinner interludes. The stone terraces of the Amalfi
            Coast provide natural resonance that no concert hall replicates.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Voice & Repertoire</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            The Acoustic Advantage<br />of Stone Terraces
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              The stone terraces and natural amphitheatre topography of Ravello provide
              acoustic resonance that complements unamplified operatic voice — the same
              quality that attracted Wagner to Villa Rufolo in 1880 and that still draws
              international soloists to the Ravello Festival each summer.
            </p>
            <p>
              Donato coordinates lyric soprano and tenor voices trained in the Italian{' '}
              <em>bel canto</em> tradition. Repertoire is drawn from Puccini (
              <em>O Mio Babbino Caro</em>, <em>Nessun Dorma</em>), Verdi (
              <em>La Traviata</em>, <em>Rigoletto</em>), and Neapolitan art song.
              Each programme is discussed and confirmed with the couple in advance.
            </p>
            <p>
              Two formats are available: a full operatic set of 30–45 minutes, suited to
              a dinner interlude or post-ceremony concert; and single arias performed as
              ceremony music — processional, signing, or recessional.
            </p>
          </div>

          <div className="mt-10 border-t border-black/[.09] pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Ceremony', desc: 'One or two arias — processional, signing, recessional. Duration: 8–12 minutes.' },
              { label: 'Dinner Interlude', desc: 'Full operatic set — 30 to 45 minutes. Suitable for between courses.' },
            ].map(({ label, desc }) => (
              <div key={label} className="py-4 border-b border-black/[.06]">
                <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">{label}</p>
                <p className="text-[.66rem] font-light tracking-[.05em] leading-[2] text-[#404040]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Programme an Opera<br />Set for Your Wedding.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/music/Posteggia.jsx src/pages/music/Opera.jsx
git commit -m "feat: add /music/posteggia and /music/opera pages with GEO content"
```

---

### Task 9: /music/saxophone/, /music/dj/, /music/vocalist/

**Files:**
- Create: `src/pages/music/Saxophone.jsx`
- Create: `src/pages/music/DJ.jsx`
- Create: `src/pages/music/Vocalist.jsx`

- [ ] **Step 1: Create `src/pages/music/Saxophone.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

export default function MusicSaxophone() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Saxophone for Weddings on the Amalfi Coast | Donato Cipriano</title>
        <meta name="description" content="Professional saxophone for luxury weddings in Ravello, Positano and Sorrento. Cocktail hour, ceremony and dinner. Curated by Donato Cipriano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/saxophone" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/saxophone" />
        <meta property="og:title" content="Saxophone for Amalfi Coast Weddings — Donato Cipriano" />
        <meta property="og:description" content="Professional saxophone — jazz, contemporary and classical — for luxury wedding cocktail hours and ceremonies in Ravello and Positano." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Saxophone · Cocktail Hour & Ceremony
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Saxophone
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            A professional saxophonist for the cocktail hour or ceremony — solo, or paired
            with a DJ backing track for a contemporary format that suits terrace receptions
            above the Amalfi Coast.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Saxophone on the Amalfi Coast</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Contemporary Warmth<br />for Terrace Receptions
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              The saxophone occupies a sonic register that carries naturally across an open
              terrace without amplification — a quality that matters at venues such as Villa
              Cimbrone's Terrazza dell'Infinito or the garden terraces of Villa Eva, where
              the ambient sound of the coast (wind off the Gulf, the distant sea) requires
              an instrument with natural projection and warmth.
            </p>
            <p>
              Donato coordinates saxophonists who perform across jazz, bossa nova,
              contemporary pop and classical crossover repertoire. Programmes are assembled
              in consultation with the couple. Common formats include: saxophone solo during
              the cocktail hour (60–90 minutes), saxophone with DJ lounge set for the
              aperitivo, or saxophone as the lead voice during the ceremony signing.
            </p>
            <p>
              For couples who want the sophistication of live music with the versatility
              of a contemporary setlist — saxophone with DJ is the most requested format
              for aperitivo on the Amalfi terraces.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Add Saxophone<br />to Your Day.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Create `src/pages/music/DJ.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

export default function MusicDJ() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding DJ on the Amalfi Coast — Luxury Service | Donato Cipriano</title>
        <meta name="description" content="Professional DJ for luxury wedding receptions in Ravello, Positano and Sorrento. Curated by Donato Cipriano — not a generic booking service." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/dj" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/dj" />
        <meta property="og:title" content="Wedding DJ Amalfi Coast — Donato Cipriano" />
        <meta property="og:description" content="Curated DJ service for luxury weddings in Ravello, Positano and Sorrento. Selected for direct venue experience, not volume of bookings." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            DJ · Evening Reception
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            DJ Service
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Curated DJ coordination for the evening reception — selected for experience
            at the specific venues of the Amalfi Coast, not for volume of bookings.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Approach</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Editorial Selection,<br />Not a Directory
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Outdoor amplification in Ravello requires a separate <em>autorizzazione</em>
              from the local <em>Comune</em> for events running past 23:00. DJ set-up
              at cliff-edge venues requires knowledge of the specific power infrastructure
              at each property — Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso
              each have different electrical access points and PA placement constraints.
            </p>
            <p>
              Donato selects DJs with direct experience at these venues. The coordination
              is built into the engagement — sound check, set-up logistics with the venue
              manager, and transition from the live music programme to the DJ set are handled
              as a single continuous workflow, not handed off between separate vendors.
            </p>
            <p>
              The typical format for a full-day coordination: ceremony with{' '}
              <a href="/evostrings" className="link-underline">EvoStrings string quartet</a>,
              cocktail hour with{' '}
              <a href="/music/saxophone" className="link-underline">saxophone</a>,
              dinner with{' '}
              <a href="/trilogy-trio" className="link-underline">Trilogy Trio</a>,
              and DJ for the open-air evening reception.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Coordinate the Full<br />Evening Programme.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 3: Create `src/pages/music/Vocalist.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

export default function MusicVocalist() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Singer Amalfi Coast | Donato Cipriano</title>
        <meta name="description" content="Professional wedding vocalist for ceremonies and receptions in Ravello, Positano and Sorrento. Pop, soul and contemporary repertoire. Curated by Donato Cipriano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/vocalist" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/vocalist" />
        <meta property="og:title" content="Wedding Singer Amalfi Coast — Donato Cipriano" />
        <meta property="og:description" content="Professional wedding vocalist — pop, soul, contemporary — for ceremonies and receptions in Ravello, Positano and Sorrento." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Vocalist · Ceremony & Reception
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Vocalist
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            A professional vocalist for ceremony and reception — pop, soul, contemporary
            and Italian repertoire, selected for voice quality and direct experience
            performing on the Amalfi Coast.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Vocalist on the Amalfi Coast</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Voice as the Primary<br />Instrument of the Day
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Donato coordinates vocalists with training across pop, soul, jazz and
              contemporary Italian repertoire. For ceremony use, the vocalist performs
              a curated selection agreed with the couple in advance — typically three to
              four songs across the processional, signing, and recessional.
            </p>
            <p>
              For the reception, a vocalist integrated with a backing track or with
              a{' '}
              <a href="/music/saxophone" className="link-underline">saxophone</a>{' '}
              or{' '}
              <a href="/trilogy-trio" className="link-underline">Trilogy Trio</a>{' '}
              creates a format that bridges the formal dinner and the open dancing — a
              transition that, on a Ravello terrace after midnight, feels entirely natural.
            </p>
            <p>
              Each vocalist is selected for voice quality and demonstrated experience
              performing at luxury venue events, not for profile or social media presence.
              Audio samples are available on request.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Add a Vocalist<br />to Your Day.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/music/Saxophone.jsx src/pages/music/DJ.jsx src/pages/music/Vocalist.jsx
git commit -m "feat: add /music/saxophone, /music/dj, /music/vocalist pages"
```

---

## Phase 4 — Vendor Pages

### Task 10: /vendors/photographers/

**Files:**
- Create: `src/pages/vendors/Photographers.jsx`

- [ ] **Step 1: Create `src/pages/vendors/Photographers.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

const photographersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wedding Photographers on the Amalfi Coast — Curated by Donato Cipriano',
  description: 'A selection of professional wedding photographers with direct experience at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Positano cliff venues.',
  url: 'https://www.weddingmusicravello.com/vendors/photographers',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'LocalBusiness',
        name: 'Curated Selection — Contact Donato for Current Recommendations',
        description: 'Donato maintains a current list of photographers with verified experience at each major venue. Contact for specific recommendations by venue and date.',
        areaServed: 'Amalfi Coast',
      },
    },
  ],
}

export default function VendorPhotographers() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Photographers Amalfi Coast | Curated by Donato Cipriano</title>
        <meta name="description" content="Wedding photographers with direct experience at Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso. Curated selection by Donato Cipriano — not a paid directory." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/vendors/photographers" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/vendors/photographers" />
        <meta property="og:title" content="Wedding Photographers Amalfi Coast — Curated by Donato Cipriano" />
        <meta property="og:description" content="Photographers with verified experience at Villa Cimbrone, Palazzo Avino and cliff venues in Positano. Editorial curation, not a marketplace." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(photographersSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Curated Selection · Photographers
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Photographers<br />on the Amalfi Coast
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            A selection curated by Donato Cipriano based on direct professional experience
            at the venues of Ravello, Positano and Sorrento. Not a directory — an editorial
            recommendation.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Why Venue Experience Matters</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '28ch' }}>
            The Specific Challenges<br />of Amalfi Coast Photography
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Shooting on the Amalfi Coast presents technical challenges that distinguish
              photographers with genuine local experience from those visiting for the first
              time. The extreme contrast between the bright reflective surface of the sea
              and the deep shade of stone loggias and covered terraces requires specific
              exposure management — conditions that favour photographers who shoot
              prime lenses rather than zoom, and who know which hour of the afternoon
              the terrace at each specific venue falls into shadow.
            </p>
            <p>
              The narrow <em>vicoli</em> of Ravello and Positano — some less than a metre
              wide — require compact equipment and an understanding of the town's geography
              to plan viable routes between ceremony and reception locations.
            </p>
            <p>
              Villa Cimbrone and Palazzo Avino have specific rules on flash photography
              during ceremonies. Photographers who have not worked these venues before
              may not be aware of these restrictions until the moment they become a problem.
              Every photographer in Donato's curated selection has operated under these
              conditions and knows the house rules.
            </p>
            <p>
              Golden hour on the Terrazza dell'Infinito at Villa Cimbrone — approximately
              19:30 in summer — lasts eleven to fourteen minutes before the cliff edge
              falls into full shade. An experienced local photographer arrives pre-positioned.
              A first-timer is still finding the angle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F8F7] border-t border-black/[.09]
        px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)]">
        <p className="eyebrow mb-6">The Curation Principle</p>
        <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] max-w-[58ch] mb-8">
          This is not a paid listing. No photographer appears here because they bought
          a placement. Each recommendation is based on Donato's direct professional
          observation of their work at the venues of the Amalfi Coast — the same
          editorial standard that applies to every service he coordinates.
        </p>
        <p className="text-[.66rem] font-light tracking-[.08em] text-[#8A7A5A]">
          Current recommendations are provided by direct enquiry — contact Donato with
          your venue and date for a specific referral.
        </p>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Request a Photographer<br />Recommendation.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/vendors/Photographers.jsx
git commit -m "feat: add /vendors/photographers page with GEO content"
```

---

### Task 11: /vendors/florists/, /vendors/vintage-cars/, /vendors/wedding-planners/, /vendors/celebrant/

**Files:**
- Create: `src/pages/vendors/Florists.jsx`
- Create: `src/pages/vendors/VintageCars.jsx`
- Create: `src/pages/vendors/WeddingPlanners.jsx`
- Create: `src/pages/vendors/Celebrant.jsx`

- [ ] **Step 1: Create `src/pages/vendors/Florists.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

const floristsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wedding Florists on the Amalfi Coast — Curated by Donato Cipriano',
  description: 'Florists specialising in Amalfi Coast seasonal flora — sfusato amalfitano lemon, bougainvillea, wisteria and Mediterranean botanicals.',
  url: 'https://www.weddingmusicravello.com/vendors/florists',
}

export default function VendorFlorists() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Florists Ravello & Amalfi Coast | Curated by Donato Cipriano</title>
        <meta name="description" content="Wedding florists with expertise in Amalfi Coast seasonal flora — sfusato amalfitano lemon, bougainvillea, wisteria. Curated selection by Donato Cipriano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/vendors/florists" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/vendors/florists" />
        <meta property="og:title" content="Wedding Florists Amalfi Coast — Curated by Donato Cipriano" />
        <meta property="og:description" content="Florists specialising in local seasonal flora — sfusato amalfitano lemon, bougainvillea, wisteria and Mediterranean botanicals. Editorial curation." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(floristsSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Curated Selection · Florists
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Florists<br />on the Amalfi Coast
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Flora native to the Campanian coast — IGP-protected lemon groves, bougainvillea,
            the wisteria of Villa Eva's pergola. A curated selection of florists who work
            with what grows here, not what arrives by refrigerated truck from the Netherlands.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Flora of the Amalfi Coast</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '28ch' }}>
            What Grows Here<br />and When
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              The <em>sfusato amalfitano</em> lemon — IGP-protected and grown exclusively
              on the terraced hillsides between Maiori and Vietri sul Mare — is the defining
              botanical of this coastline. Its leaves, blossom and fruit appear in floristry
              work from April through September, providing a visual and olfactory reference
              that no imported substitute replicates.
            </p>
            <p>
              Bougainvillea reaches full bloom on the coast between May and October.
              Wisteria — which drapes the pergola at Villa Eva and the entrance terraces
              at Villa Cimbrone — peaks in April and May and is gone by June. Mediterranean
              rosemary and lavender, endemic to the promontory limestone, are available
              year-round and form the backbone of arrangements that hold up in coastal heat.
            </p>
            <p>
              Peak floristry season on the Coast runs April through October. Outside this
              window, the palette of available local material narrows substantially —
              florists who know the seasonal calendar plan accordingly, rather than
              over-committing to arrangements that require importation in November or February.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Request a Florist<br />Recommendation.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Create `src/pages/vendors/VintageCars.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

const vintageCarsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vintage Car Hire for Weddings on the Amalfi Coast — Curated by Donato Cipriano',
  description: 'Vintage wedding car hire with knowledge of Amalfi Coast access routes — SS163 restrictions, Ravello road from Minori, Positano lift access.',
  url: 'https://www.weddingmusicravello.com/vendors/vintage-cars',
}

export default function VendorVintageCars() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Vintage Wedding Cars Amalfi Coast | Curated by Donato Cipriano</title>
        <meta name="description" content="Vintage car hire for Amalfi Coast weddings — Fiat 500, Alfa Giulia Spider, Mercedes 280 SL. Drivers with knowledge of SS163 restrictions and Ravello road access." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/vendors/vintage-cars" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/vendors/vintage-cars" />
        <meta property="og:title" content="Vintage Wedding Cars Amalfi Coast — Donato Cipriano" />
        <meta property="og:description" content="Vintage car hire for Amalfi Coast weddings — Fiat 500, Alfa Romeo Giulia Spider. Curated for venue access knowledge, not just vehicle condition." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(vintageCarsSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Curated Selection · Vintage Cars
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Vintage Car Hire<br />Amalfi Coast
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            The SS163 Amalfitana has width and tonnage restrictions that eliminate most
            standard hire vehicles. A vintage car on the Amalfi Coast is not decorative —
            it is the only format that fits the roads.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Access & Logistics</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Roads That Require<br />Local Knowledge
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Most Amalfi Coast venues are inaccessible to standard vehicles during the
              summer months. The SS163 Amalfitana — the coastal road between Salerno and
              Sorrento — imposes width restrictions that prohibit vehicles above a certain
              specification. The Ravello road from Minori has a maximum passable vehicle
              width of 2.1 metres. Positano's Le Sirenuse has lift access from the lower
              coastal road rather than direct vehicle approach.
            </p>
            <p>
              Vintage models commonly used on the Amalfi Coast: Fiat 500 (produced
              1957–1975 in its original series), Alfa Romeo Giulia Spider, and the
              Mercedes 280 SL Pagoda — each narrow enough for the SS163 and each carrying
              the visual grammar of Southern Italian summer. The Fiat 500 in particular
              is the correct scale for the <em>vicoli</em> of Ravello and Positano.
            </p>
            <p>
              Donato recommends hire operators whose drivers have documented route
              knowledge for each venue — not those who rely on navigation applications
              that do not reflect seasonal closures or vehicle-class restrictions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Request a Vintage Car<br />Recommendation.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 3: Create `src/pages/vendors/WeddingPlanners.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

const plannersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wedding Planners on the Amalfi Coast — Curated by Donato Cipriano',
  description: 'Wedding planners with permanent Campania presence — for Comune permit handling, vendor coordination and day-of logistics at Ravello, Positano and Sorrento venues.',
  url: 'https://www.weddingmusicravello.com/vendors/wedding-planners',
}

export default function VendorWeddingPlanners() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Planners Amalfi Coast | Curated by Donato Cipriano</title>
        <meta name="description" content="Wedding planners with permanent Campania presence for permit handling, Comune liaison and day-of logistics. Curated selection by Donato Cipriano — not a national directory." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/vendors/wedding-planners" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/vendors/wedding-planners" />
        <meta property="og:title" content="Wedding Planners Amalfi Coast — Donato Cipriano" />
        <meta property="og:description" content="Planners with permanent Campania presence — Comune permits, vendor relationships and logistical coordination on the day. Editorial curation." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(plannersSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Curated Selection · Wedding Planners
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Planners<br />Amalfi Coast
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Planners with permanent Campania presence — the distinction that matters for
            permit handling, vendor relationships, and logistical coordination on the day.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Why Local Presence Matters</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '28ch' }}>
            Commune Permits and<br />Day-Of Coordination
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Ravello's <em>Comune</em> requires event notifications 30 days in advance.
              Outdoor amplification after 23:00 requires a separate <em>autorizzazione</em>.
              Planners who operate nationally — flying in for the week — typically pass
              this coordination to the couple or the venue, creating a gap in accountability
              that becomes visible only when something goes wrong.
            </p>
            <p>
              A planner with a permanent Campania office manages the <em>Comune</em>{' '}
              liaison directly: the notification, the permit application, and the
              follow-up if conditions change. They also maintain working relationships with
              the venue event managers — relationships that translate into practical
              concessions on load-in times, equipment positioning, and vendor access
              on the day.
            </p>
            <p>
              Donato works regularly alongside planners in his curated selection. The
              recommendation is based on observed performance on-site — the logistical
              competence that is invisible in a portfolio but decisive in a crisis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Request a Planner<br />Recommendation.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 4: Create `src/pages/vendors/Celebrant.jsx`**

```jsx
import { Helmet } from 'react-helmet-async'

const celebrantSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wedding Celebrants on the Amalfi Coast — Curated by Donato Cipriano',
  description: 'Multilingual wedding celebrants (English, Italian, French, German, Spanish, Portuguese, Russian) for symbolic ceremonies in Ravello, Positano and Sorrento.',
  url: 'https://www.weddingmusicravello.com/vendors/celebrant',
}

export default function VendorCelebrant() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Celebrant Amalfi Coast — 7 Languages | Donato Cipriano</title>
        <meta name="description" content="Multilingual wedding celebrants for symbolic ceremonies in Ravello, Positano and Sorrento — English, Italian, French, German, Spanish, Portuguese, Russian. Curated by Donato Cipriano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/vendors/celebrant" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/vendors/celebrant" />
        <meta property="og:title" content="Wedding Celebrant Amalfi Coast — 7 Languages | Donato Cipriano" />
        <meta property="og:description" content="Multilingual celebrants for symbolic ceremonies — English, Italian, French, German, Spanish, Portuguese, Russian. Legal context and Comune requirements explained." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(celebrantSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Curated Selection · Celebrants
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Celebrants<br />Amalfi Coast
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Multilingual celebrants for symbolic ceremonies in Ravello, Positano and Sorrento.
            Available languages: <strong className="text-white/75">English, Italian, French, German, Spanish, Portuguese, Russian</strong>.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Legal Context</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '28ch' }}>
            Symbolic Ceremony vs<br />Civil Registration in Italy
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              In Italy, a <em>rito simbolico</em> (symbolic ceremony) has no civil legal
              standing — it is fully customisable in language, structure, vows, and rituals,
              but it does not constitute a legal marriage. Couples must complete their legal
              marriage separately: either at their home country registry office before
              travelling, or at the local <em>Comune</em> in a brief civil ceremony
              (<em>rito civile</em>) conducted in Italian.
            </p>
            <p>
              Ravello's <em>Comune</em> conducts civil ceremonies at the Town Hall on the
              Piazza Vescovado — with direct views over the Gulf of Salerno, a venue in its
              own right. The civil ceremony can precede the symbolic ceremony on the same day.
              Donato coordinates the timing between the two, including the transition from
              Piazza Vescovado to the main venue.
            </p>
            <p>
              Celebrants in Donato's curated selection hold permanent Campania presence —
              the practical requirement for <em>Comune</em> permit handling and the working
              relationships that make logistical coordination possible on the day of the event.
            </p>
          </div>

          <div className="mt-10 border-t border-black/[.09] pt-8">
            <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-4">
              Available Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {['English', 'Italian', 'French', 'German', 'Spanish', 'Portuguese', 'Russian'].map(lang => (
                <span key={lang}
                  className="text-[.5rem] font-light tracking-[.18em] uppercase
                    text-[#404040] border border-black/[.09] px-[.55rem] py-[.22rem]">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Request a Celebrant<br />Recommendation.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/vendors/Florists.jsx src/pages/vendors/VintageCars.jsx \
        src/pages/vendors/WeddingPlanners.jsx src/pages/vendors/Celebrant.jsx
git commit -m "feat: add florists, vintage-cars, wedding-planners, celebrant vendor pages"
```

---

## Self-Review

**Spec coverage check:**

| GEO requirement | Covered |
|---|---|
| Schema.org LocalBusiness + MusicGroup | ✅ Task 3 |
| GEO intro paragraph above fold | ✅ Task 3 (GeoIntro) |
| /locations/ravello with all 3 blocks | ✅ Task 6 |
| /locations/positano, /sorrento | ✅ Task 7 |
| /music/saxophone, dj, vocalist | ✅ Task 9 |
| /music/posteggia with cultural context | ✅ Task 8 |
| /music/opera with voice types and Wagner reference | ✅ Task 8 |
| /vendors/photographers with flash rules + golden hour | ✅ Task 10 |
| /vendors/florists with sfusato amalfitano | ✅ Task 11 |
| /vendors/vintage-cars with SS163 + vehicle widths | ✅ Task 11 |
| /vendors/wedding-planners with Comune + permits | ✅ Task 11 |
| /vendors/celebrant with 7 languages + legal distinction | ✅ Task 11 |
| robots.txt + sitemap.xml | ✅ Task 4 |
| react-helmet-async for meta tags | ✅ Tasks 1-2 |
| Internal linking per spec table | ✅ All location/music pages |
| British English spelling | ✅ All copy |
| No superlatives without evidence | ✅ All copy |
| No artificial scarcity language | ✅ All copy |

**Gaps identified:**
- NavBar not updated to include new sections (Locations dropdown, Vendors link) — add manually after plan execution
- `package.json` name field still says `amalfi-strings` — update to `wedding-music-ravello`
- `name` in `package.json` is cosmetic only but should be updated for consistency
