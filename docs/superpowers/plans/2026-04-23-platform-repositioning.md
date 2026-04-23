# Platform Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Riposizionare il sito da portfolio personale di Donato Cipriano a piattaforma curatoriale luxury per fornitori selezionati, trasferendo autorità SEO a donatocipriano.com tramite Schema.org invisibile.

**Architecture:** Modifiche testuali e strutturali su 6 file esistenti. Nessun nuovo componente. Nessuna modifica al routing. Il dev server (`npm run dev`) è sufficiente per verificare ogni task visivamente.

**Tech Stack:** Vite + React + Tailwind CSS + react-helmet-async (Helmet) + Schema.org JSON-LD

---

## File Map

| File | Modifica |
|------|----------|
| `src/data/ensembles.js` | Rimuovere attribuzioni personali da EvoStrings e Trilogy Trio |
| `src/data/schema.js` | Aggiornare Organization name, founder jobTitle, ensembleSchema member |
| `src/components/ui/PageHead.jsx` | Aggiungere `<link rel="author">` |
| `src/components/sections/About.jsx` | Riscrittura completa come manifesto curatoriale |
| `src/components/layout/Footer.jsx` | Rimuovere partner section, aggiungere colonna Partners con categorie |
| `src/pages/ViolinSolo.jsx` | Aggiornare CTA e link email → form interno |

---

## Task 1: ensembles.js — Rimuovere attribuzioni personali

**Files:**
- Modify: `src/data/ensembles.js`

- [ ] **Step 1: Aprire il file e aggiornare la descrizione di EvoStrings**

  Trovare il campo `description` dell'ensemble `evostrings`. Sostituire la riga:
  ```
  Founded and directed by Donato Cipriano, EvoStrings has become a reference point in Italy's luxury wedding scene.
  The ensemble adapts seamlessly to each setting...
  ```
  con:
  ```
  A reference point in Italy's luxury wedding scene, EvoStrings adapts seamlessly to each setting...
  ```

  Il campo `description` completo risultante:
  ```js
  description: `EvoStrings was conceived as a string trio — its most authentic and defining form.
A refined dialogue between instruments, where each voice moves with intention, creating a sound that is both rich and perfectly balanced.

A reference point in Italy's luxury wedding scene, EvoStrings adapts seamlessly to each setting — evolving into a duo for more intimate atmospheres, or expanding into a full string quartet with the addition of viola — while preserving its distinctive identity.

On the Terrace of Infinity at Villa Cimbrone, three strings suspend time between wedding vows; within the intimate spaces of Palazzo Avino, a smaller ensemble reshapes the atmosphere with quiet elegance.

The repertoire moves effortlessly between classical rigor and contemporary sensitivity:
Vivaldi, Morricone, Einaudi, Max Richter.
Always curated with intention, never by chance.`,
  ```

- [ ] **Step 2: Aggiornare photoAlt di EvoStrings**

  ```js
  photoAlt: 'EvoStrings string ensemble at Villa Cimbrone, Ravello',
  ```

- [ ] **Step 3: Aggiornare la descrizione di Trilogy Trio**

  Trovare il campo `description` dell'ensemble `trilogy-trio`. Sostituire:
  ```
  The Trilogy Trio — violin, cello and piano under the artistic direction of Donato Cipriano —
  ```
  con:
  ```
  The Trilogy Trio — violin, cello and piano —
  ```

  Il campo `description` completo risultante:
  ```js
  description: `Three instruments, one unexpected conversation. The Trilogy Trio — violin, cello and piano — occupies the rare territory where classical formation meets cinematic emotion. Coldplay rendered with the weight of a chamber piece, Nino Rota with the lightness of a summer evening on the Amalfi terraces, Hans Zimmer recomposed for three acoustic voices. For couples who want their reception to feel like the score of a film they have not yet seen. Over one million views on YouTube confirm what every audience already knows: this is not background music.`,
  ```

- [ ] **Step 4: Aggiornare photoAlt di Trilogy Trio**

  ```js
  photoAlt: 'Trilogy Trio — Violin, Cello and Piano, Amalfi Coast wedding',
  ```

- [ ] **Step 5: Verificare visivamente**

  Con `npm run dev` attivo, aprire `http://localhost:5173` e controllare che le card Services non mostrino più "Donato Cipriano" nei testi visibili (le card mostrano il campo `description`, non il `photoAlt`).

- [ ] **Step 6: Commit**

  ```bash
  git add src/data/ensembles.js
  git commit -m "content: remove personal attributions from EvoStrings and Trilogy Trio"
  ```

---

## Task 2: schema.js — Aggiornare Schema.org per SEO

**Files:**
- Modify: `src/data/schema.js`

- [ ] **Step 1: Aggiornare il nome dell'Organization**

  Trovare:
  ```js
  name: 'Donato Cipriano — Wedding Music Ravello',
  ```
  Sostituire con:
  ```js
  name: 'Wedding Music Ravello',
  ```

- [ ] **Step 2: Aggiornare founder — espandere sameAs e correggere jobTitle**

  Trovare il nodo `founder` attuale:
  ```js
  founder: {
    '@type': 'Person',
    name: 'Donato Cipriano',
    jobTitle: 'Violinist & Artistic Director',
    sameAs: 'https://www.donatocipriano.com',
  },
  ```
  Sostituire con:
  ```js
  founder: {
    '@type': 'Person',
    name: 'Donato Cipriano',
    jobTitle: 'Professional Violinist',
    url: 'https://www.donatocipriano.com',
    sameAs: [
      'https://www.donatocipriano.com',
      'https://www.donatocipriano.com/en/wedding',
    ],
  },
  ```

- [ ] **Step 3: Aggiornare ensembleSchema — rimuovere "Artistic Director" dal member**

  Trovare in `ensembleSchema`:
  ```js
  member: {
    '@type': 'Person',
    name: 'Donato Cipriano',
    jobTitle: 'Artistic Director & Professional Violinist',
    url: 'https://www.donatocipriano.com/en/wedding#services',
  },
  ```
  Sostituire con:
  ```js
  member: {
    '@type': 'Person',
    name: 'Donato Cipriano',
    jobTitle: 'Professional Violinist',
    url: 'https://www.donatocipriano.com/en/wedding#services',
  },
  ```

- [ ] **Step 4: Verificare che il JSON-LD sia valido**

  Con `npm run dev` attivo, aprire DevTools → Elements → cercare `<script type="application/ld+json">` nella `<head>`. Verificare che il JSON sia ben formato e contenga `"name": "Wedding Music Ravello"` e il nodo `founder` aggiornato.

- [ ] **Step 5: Commit**

  ```bash
  git add src/data/schema.js
  git commit -m "seo: update Organization schema name and founder, remove Artistic Director title"
  ```

---

## Task 3: PageHead.jsx — Aggiungere link rel="author"

**Files:**
- Modify: `src/components/ui/PageHead.jsx`

- [ ] **Step 1: Aggiungere il meta tag author nel Helmet**

  Trovare il blocco `<Helmet>` in `PageHead.jsx`. Aggiungere come ultima riga prima di `</Helmet>`:
  ```jsx
  <link rel="author" href="https://www.donatocipriano.com" />
  ```

  Il file completo risultante:
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
        <link rel="author" href="https://www.donatocipriano.com" />
      </Helmet>
    )
  }
  ```

- [ ] **Step 2: Verificare nel browser**

  DevTools → Elements → `<head>` → cercare `<link rel="author" href="https://www.donatocipriano.com">`. Deve essere presente.

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/ui/PageHead.jsx
  git commit -m "seo: add rel=author link pointing to donatocipriano.com"
  ```

---

## Task 4: About.jsx — Riscrittura come manifesto curatoriale

**Files:**
- Modify: `src/components/sections/About.jsx`

- [ ] **Step 1: Sostituire il contenuto completo del file**

  ```jsx
  // components/sections/About.jsx

  export default function About() {
    return (
      <section id="about" aria-labelledby="about-title"
        className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,10rem)]
          border-t border-black/[.09] bg-[#F9F8F7]">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-[clamp(3rem,6vw,6rem)] items-start">

          {/* Left — text */}
          <div>
            <p className="eyebrow mb-[1.1rem]">Our Philosophy</p>
            <h2 id="about-title"
              className="section-title mb-6" style={{ maxWidth: '22ch' }}>
              Music Selected With Intention,<br />Not by Chance
            </h2>
            <div className="w-9 h-[.5px] bg-[#B8A882] mb-7" aria-hidden="true" />

            <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
              Wedding Music Ravello is a curated selection of live music for destination
              weddings and exclusive events on the Amalfi Coast.
            </p>
            <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
              Every artist and ensemble in our network has been personally evaluated for
              their ability to perform at the highest level — in the acoustics of clifftop
              terraces, within historic villas, across the open-air venues of a coast that
              demands as much from its music as it does from everything else.
            </p>
            <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
              We do not list. We curate. Every recommendation we make carries our name,
              and our standard is non-negotiable.
            </p>
            <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
              From ceremony to cocktail hour, from the dinner score to the final dance —
              we match each moment of your celebration to the right sound, the right
              formation, the right artist.
            </p>
          </div>

          {/* Right — visual */}
          <div>
            {/* Replace div with:
                <img src="/images/about-visual.jpg"
                     alt="Wedding music performance on the Amalfi Coast"
                     className="w-full object-cover"
                     style={{ aspectRatio: '3/4' }} />
            */}
            <div className="w-full bg-[#1C2030]" style={{ aspectRatio: '3/4' }} />
          </div>

        </div>
      </section>
    )
  }
  ```

- [ ] **Step 2: Verificare visivamente**

  Aprire `http://localhost:5173/#about`. Verificare:
  - Eyebrow: "Our Philosophy"
  - Titolo: "Music Selected With Intention, Not by Chance"
  - Nessun nome "Donato Cipriano" visibile
  - Nessuna caption sotto la foto
  - Nessun link esterno

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/sections/About.jsx
  git commit -m "content: rewrite About as curatorial platform manifesto"
  ```

---

## Task 5: Footer.jsx — Partners nav + rimozione sezione personale

**Files:**
- Modify: `src/components/layout/Footer.jsx`

- [ ] **Step 1: Sostituire il contenuto completo del file**

  ```jsx
  // components/layout/Footer.jsx

  export default function Footer() {
    const navLinks = [
      { label: 'Occasions', href: '/#occasions' },
      { label: 'Locations', href: '/#locations' },
      { label: 'About',     href: '/#about'     },
      { label: 'Enquire',   href: '/#contact'   },
    ]

    const partnerLinks = [
      { label: 'Music',            href: '/#services'                },
      { label: 'Photographers',    href: '/vendors/photographers'    },
      { label: 'Wedding Planners', href: '/vendors/wedding-planners' },
      { label: 'Vintage Cars',     href: '/vendors/vintage-cars'     },
      { label: 'Florists',         href: '/vendors/florists'         },
      { label: 'Celebrants',       href: '/vendors/celebrants'       },
    ]

    return (
      <footer id="footer" aria-label="Site footer"
        className="bg-[#1A1A1A] border-t border-white/[.06]
          px-[clamp(1.5rem,6vw,5rem)] pt-[clamp(3rem,7vw,5rem)] pb-[clamp(1.5rem,3vw,2.5rem)]">

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-[clamp(2rem,5vw,5rem)]
          pb-[clamp(2rem,4vw,3rem)] border-b border-white/[.08] mb-6">

          {/* Brand */}
          <div>
            <a href="/"
              className="font-serif italic font-light text-[1.1rem] tracking-[.04em]
                text-white/75 no-underline block mb-2 hover:text-[#B8A882] transition-colors">
              Wedding Music Ravello
            </a>
            <p className="text-[.52rem] font-light tracking-[.16em] uppercase text-white/25 leading-[1.7]">
              Bespoke Wedding Music · Amalfi Coast · Southern Italy
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href}
                className="text-[.56rem] font-light tracking-[.18em] uppercase no-underline
                  text-white/40 hover:text-[#B8A882] transition-colors">
                {label}
              </a>
            ))}
          </nav>

          {/* Partners */}
          <div className="flex flex-col gap-3">
            <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-white/20">
              Partners
            </p>
            {partnerLinks.map(({ label, href }) => (
              <a key={label} href={href}
                className="text-[.56rem] font-light tracking-[.18em] uppercase no-underline
                  text-white/40 hover:text-[#B8A882] transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="flex items-center gap-4 flex-wrap
          text-[.5rem] font-light tracking-[.14em] text-white/20">
          <span>© {new Date().getFullYear()} Wedding Music Ravello. All rights reserved.</span>
          <span className="text-[#B8A882]/20" aria-hidden="true">·</span>
          <span>Ravello, Campania, Italy</span>
        </div>
      </footer>
    )
  }
  ```

- [ ] **Step 2: Verificare visivamente**

  Scrollare fino al footer su `http://localhost:5173`. Verificare:
  - Nessun "An artistic project by"
  - Nessun "Donato Cipriano" nel footer
  - Nessun link a EvoStrings.it
  - Colonna Partners presente con: Music, Photographers, Wedding Planners, Vintage Cars, Florists, Celebrants
  - Nav principale: Occasions, Locations, About, Enquire (senza Music)

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/layout/Footer.jsx
  git commit -m "content: replace personal partner section with curated Partners category nav"
  ```

---

## Task 6: ViolinSolo.jsx — Aggiornare CTA e link

**Files:**
- Modify: `src/pages/ViolinSolo.jsx`

- [ ] **Step 1: Aggiornare il testo del titolo CTA**

  Trovare nella sezione CTA finale:
  ```jsx
  <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[24ch]"
    style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
    Book Donato Cipriano<br />for Your Ceremony.
  </p>
  ```
  Sostituire con:
  ```jsx
  <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[24ch]"
    style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
    Enquire About<br />This Performance.
  </p>
  ```

- [ ] **Step 2: Aggiornare il link della CTA**

  Trovare:
  ```jsx
  <a href="mailto:info@donatocipriano.com"
    className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
      text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1
      hover:border-[#B8A882] transition-colors">
    Begin Your Enquiry
  </a>
  ```
  Sostituire con:
  ```jsx
  <a href="/#contact"
    className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
      text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1
      hover:border-[#B8A882] transition-colors">
    Begin Your Enquiry
  </a>
  ```

- [ ] **Step 3: Verificare visivamente**

  Aprire `http://localhost:5173/violin-solo`. Scrollare fino alla sezione CTA nera finale. Verificare:
  - Titolo: "Enquire About This Performance."
  - Click su "Begin Your Enquiry" → deve scrollare alla sezione `/#contact` della home, non aprire il client email

- [ ] **Step 4: Commit**

  ```bash
  git add src/pages/ViolinSolo.jsx
  git commit -m "content: update ViolinSolo CTA to route through site contact form"
  ```

---

## Task 7: Push finale e verifica deploy

- [ ] **Step 1: Push su main**

  ```bash
  git push
  ```

- [ ] **Step 2: Attendere il deploy Vercel**

  Vercel avvia il deploy automaticamente su push a `main`. Verificare su Vercel dashboard che il build sia completato senza errori.

- [ ] **Step 3: Verifica in produzione**

  Aprire il sito live e verificare:
  - About: nessun nome Donato, nessun link esterno
  - Footer: sezione Partners con categorie, nessun "artistic project by"
  - ViolinSolo: CTA porta al contact form
  - DevTools → `<head>`: presenza di `<link rel="author" href="https://www.donatocipriano.com">`
  - DevTools → JSON-LD: `"name": "Wedding Music Ravello"` (senza "Donato Cipriano —")
