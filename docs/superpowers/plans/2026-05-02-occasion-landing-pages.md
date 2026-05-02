# Occasion Landing Pages — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 4 dedicated landing pages under `/occasions/` — one per occasion type — with GEO-optimised copy, Schema.org, full meta tags, and internal links, mirroring the pattern of existing location and music pages.

**Architecture:** Each page is a self-contained static JSX file following the same Ravello.jsx / Saxophone.jsx pattern: inline schema object at the top, Helmet for meta, alternating dark/light sections (hero → content → suggested ensembles → internal links → CTA). The Occasions.jsx home section gains a `pageHref` field per occasion and a subtle "Explore" CTA link below each description.

**Tech Stack:** React + Vite + vite-ssg, react-helmet-async, Tailwind CSS. No new dependencies.

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Create | `src/pages/occasions/WeddingCeremony.jsx` | Landing page `/occasions/wedding-ceremony` |
| Create | `src/pages/occasions/MarriageProposal.jsx` | Landing page `/occasions/marriage-proposal` |
| Create | `src/pages/occasions/BirthdaysAnniversaries.jsx` | Landing page `/occasions/birthdays-anniversaries` |
| Create | `src/pages/occasions/CorporateEvents.jsx` | Landing page `/occasions/corporate-events` |
| Modify | `src/routes.js` | Register the 4 new routes |
| Modify | `src/components/sections/Occasions.jsx` | Add `pageHref` + "Explore" CTA link per occasion |

---

## Task 1 — Register routes

**Files:**
- Modify: `src/routes.js`

- [ ] Add the 4 new occasion routes:

```js
export const routes = [
  { path: '/',                                   component: () => import('./pages/Home.jsx')                                       },
  { path: '/evostrings',                         component: () => import('./pages/EvoStrings.jsx')                                 },
  { path: '/trilogy-trio',                       component: () => import('./pages/TrilogyTrio.jsx')                                },
  { path: '/violin-solo',                        component: () => import('./pages/ViolinSolo.jsx')                                 },
  { path: '/contact',                            component: () => import('./pages/Contact.jsx')                                    },
  { path: '/locations/ravello',                  component: () => import('./pages/locations/Ravello.jsx')                         },
  { path: '/locations/positano',                 component: () => import('./pages/locations/Positano.jsx')                        },
  { path: '/locations/sorrento',                 component: () => import('./pages/locations/Sorrento.jsx')                        },
  { path: '/music/piano',                        component: () => import('./pages/music/Piano.jsx')                               },
  { path: '/occasions/wedding-ceremony',         component: () => import('./pages/occasions/WeddingCeremony.jsx')                 },
  { path: '/occasions/marriage-proposal',        component: () => import('./pages/occasions/MarriageProposal.jsx')                },
  { path: '/occasions/birthdays-anniversaries',  component: () => import('./pages/occasions/BirthdaysAnniversaries.jsx')         },
  { path: '/occasions/corporate-events',         component: () => import('./pages/occasions/CorporateEvents.jsx')                 },
]
```

- [ ] Commit:
```bash
git add src/routes.js
git commit -m "feat(routes): add 4 occasion landing page routes"
```

---

## Task 2 — WeddingCeremony.jsx

**Files:**
- Create: `src/pages/occasions/WeddingCeremony.jsx`

- [ ] Create `src/pages/occasions/` directory and the file with this exact content:

```jsx
import { Helmet } from 'react-helmet-async'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wedding Ceremony & Reception Music — Amalfi Coast',
  description: 'A complete musical programme for destination weddings on the Amalfi Coast. String ensembles, violin solo, piano, and opera for the processional, ceremony, cocktail hour and reception at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and private villas in Ravello, Positano and Sorrento.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Wedding Music Ravello',
    url: 'https://www.weddingmusicravello.com',
  },
  areaServed: [
    { '@type': 'City', name: 'Ravello' },
    { '@type': 'City', name: 'Positano' },
    { '@type': 'City', name: 'Sorrento' },
  ],
  serviceType: 'Wedding Music',
}

const ENSEMBLES = [
  { label: 'EvoStrings',   href: '/evostrings'   },
  { label: 'Trilogy Trio', href: '/trilogy-trio' },
  { label: 'Violin Solo',  href: '/violin-solo'  },
  { label: 'Opera',        href: '/music/opera'  },
  { label: 'Piano Solo',   href: '/music/piano'  },
]

const MOMENTS = [
  {
    moment: 'The Processional',
    detail: 'Ceremony entrance · 3–5 minutes',
    desc: 'The processional is the most acoustically exposed moment of the day — a single sustained melody over silence, often performed without amplification at outdoor venues. EvoStrings and violin solo are the standard formats at Villa Cimbrone\'s Terrazza dell\'Infinito, where the natural amphitheatre effect of the ravine provides projection without a PA system.',
  },
  {
    moment: 'The Ceremony',
    detail: 'Signing & readings · 20–45 minutes',
    desc: 'Continuous background music during vows, readings and the signing of the register. String ensembles, piano solo, or operatic voice. The acoustic stone surfaces of Palazzo Avino\'s interior courtyard and Belmond Hotel Caruso\'s terrace suit unamplified performance. A curated repertoire — classical, cinematic, or contemporary — is assembled in consultation with the couple.',
  },
  {
    moment: 'The Cocktail Hour',
    detail: 'Aperitivo · 60–90 minutes',
    desc: 'The most versatile moment of the day in terms of format. Saxophone, violin solo, Trilogy Trio, or a saxophone-and-DJ pairing. The cocktail hour on a terrace above the Gulf of Salerno benefits from a format with natural acoustic presence — instruments that carry without competing with conversation.',
  },
  {
    moment: 'The Reception & Dinner',
    detail: 'Evening · 3–5 hours',
    desc: 'String quartet or trio for the dinner service, transitioning to DJ or vocalist for dancing. Trilogy Trio (violin, cello and piano) is the standard format for a seated dinner at Belmond Hotel Caruso or Villa Eva. The DJ set follows with a curated programme agreed in advance.',
  },
]

export default function OccasionWeddingCeremony() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Ceremony & Reception Music | Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="A complete musical programme for your wedding day on the Amalfi Coast — processional, ceremony, cocktail hour and reception. String ensembles, violin, piano and opera at Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/occasions/wedding-ceremony" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/occasions/wedding-ceremony" />
        <meta property="og:title" content="Wedding Ceremony & Reception Music | Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="A complete musical programme for your wedding day on the Amalfi Coast — processional, ceremony, cocktail hour and reception. String ensembles, violin, piano and opera at Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Occasions · Wedding Day
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Ceremonies<br />&amp; Receptions
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            From the first note of the processional to the last dance of the evening —
            a complete musical programme for destination weddings on the Amalfi Coast.
            String ensembles, solo violin, piano, and operatic voice, matched to the
            acoustics of each venue and the arc of the day.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Musical Programme</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Four Moments,<br />Four Distinct Sounds
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-black/[.06] max-w-5xl">
          {MOMENTS.map(({ moment, detail, desc }) => (
            <div key={moment}
              className="py-8 pr-0 md:pr-12 border-b border-black/[.06]
                [&:nth-child(odd)]:md:border-r [&:nth-child(odd)]:md:pr-12
                [&:nth-child(even)]:md:pl-12">
              <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.4rem] text-[#1A1A1A] mb-4">
                {moment}
              </h3>
              <p className="text-[.66rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="eyebrow mb-5 text-[#B8A882]">Suggested for this occasion</p>
        <h2 className="section-title mb-10 text-[#F9F8F7]" style={{ maxWidth: '24ch' }}>
          Music Partners<br />for the Wedding Day
        </h2>
        <div className="flex flex-wrap gap-3">
          {ENSEMBLES.map(({ label, href }) => (
            <a key={label} href={href}
              className="inline-flex items-center px-5 py-3 border border-white/20
                no-underline transition-all duration-300
                text-[.5rem] font-light tracking-[.1em] uppercase
                text-white/55 hover:border-[#B8A882] hover:text-[#B8A882]">
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] bg-[#F9F8F7]">
        <p className="eyebrow mb-8">Related</p>
        <div className="flex flex-col gap-0 border-t border-black/[.09]">
          {[
            { href: '/locations/ravello', label: 'Wedding music in Ravello',    desc: '— Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Villa Eva.' },
            { href: '/evostrings',        label: 'EvoStrings string quartet',   desc: '— string quartet, trio and duo for processionals and receptions.' },
            { href: '/music/opera',       label: 'Opera for the ceremony',      desc: '— lyric soprano and tenor in the Italian bel canto tradition.' },
          ].map(({ href, label, desc }) => (
            <div key={href} className="flex items-start gap-6 py-5 border-b border-black/[.06] flex-wrap">
              <a href={href} className="link-underline whitespace-nowrap">{label}</a>
              <span className="text-[.65rem] font-light text-[#404040] tracking-[.04em] leading-[2]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a wedding<br />on the Amalfi Coast?
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

- [ ] Commit:
```bash
git add src/pages/occasions/WeddingCeremony.jsx
git commit -m "feat(occasions): add Wedding Ceremony landing page"
```

---

## Task 3 — MarriageProposal.jsx

**Files:**
- Create: `src/pages/occasions/MarriageProposal.jsx`

- [ ] Create the file with this exact content:

```jsx
import { Helmet } from 'react-helmet-async'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Music for a Marriage Proposal — Amalfi Coast',
  description: 'Discreetly arranged live music for marriage proposals on the Amalfi Coast. Violin solo or saxophone on private terraces in Ravello, Positano and Sorrento — timed to the moment, coordinated with the venue.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Wedding Music Ravello',
    url: 'https://www.weddingmusicravello.com',
  },
  areaServed: [
    { '@type': 'City', name: 'Ravello' },
    { '@type': 'City', name: 'Positano' },
    { '@type': 'City', name: 'Sorrento' },
  ],
  serviceType: 'Marriage Proposal Music',
}

const ENSEMBLES = [
  { label: 'Violin Solo', href: '/violin-solo'     },
  { label: 'Saxophone',   href: '/music/saxophone' },
]

const LOCATIONS = [
  {
    name: 'Ravello — Terrazza dell\'Infinito',
    detail: 'Villa Cimbrone · 350m above sea level',
    desc: 'The most requested location for a proposal on the Amalfi Coast. The terrace sits at the cliff edge of Villa Cimbrone, 350 metres above sea level, with a panoramic view across the Gulf of Salerno. A violinist positioned discreetly at the terrace entrance begins at a pre-agreed signal — typically as the couple reaches the balustrade.',
  },
  {
    name: 'Positano — Waterfront & Private Terraces',
    detail: 'Golden hour · Cliff-edge venues',
    desc: 'Positano\'s vertical topography — the town descends 200 metres from the SS163 road to the waterfront — creates a series of private terraces and garden viewpoints. At golden hour (approximately 19:30–20:15 between May and September), the light off the Tyrrhenian Sea is unmatched. A saxophone performing softly on a private terrace requires no amplification and no visible setup.',
  },
  {
    name: 'Sorrento — Clifftop Gardens',
    detail: 'Bay of Naples · Mount Vesuvius backdrop',
    desc: 'The clifftop gardens above Sorrento look directly toward Naples and Mount Vesuvius across the Bay of Naples. Villa Comunale and the terrace gardens of the historic centre are accessible on foot. The distance from Ravello (approximately 55km via the SS163 and SS145) makes Sorrento a natural endpoint for couples touring the coast.',
  },
]

export default function OccasionMarriageProposal() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Music for a Marriage Proposal on the Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="A violin solo or saxophone on a private terrace above the Gulf of Salerno. Discreetly arranged, precisely timed. Music for marriage proposals in Ravello, Positano and Sorrento." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/occasions/marriage-proposal" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/occasions/marriage-proposal" />
        <meta property="og:title" content="Music for a Marriage Proposal on the Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="A violin solo or saxophone on a private terrace above the Gulf of Salerno. Discreetly arranged, precisely timed. Music for marriage proposals in Ravello, Positano and Sorrento." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Occasions · Proposal
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Marriage<br />Proposals
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            A violin solo on a panoramic terrace above the Gulf of Salerno, or a saxophone
            at golden hour along the Positano coastline. Discreetly arranged, precisely
            timed — music that shapes the setting without announcing itself.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">How It Works</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '24ch' }}>
            Coordinated With<br />the Setting in Mind
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              A proposal with live music requires coordination between the musician, the
              venue, and the moment — not a performance that simply happens to be present.
              The standard approach: the musician arrives at the location 20 minutes before
              the couple, positions discreetly (behind a terrace wall, inside a doorway, or
              among other guests at a terrace bar), and begins at a pre-agreed signal — a
              text, a hand gesture, or a specific cue from the venue contact.
            </p>
            <p>
              Repertoire is selected in advance: a single piece, or a short programme of
              two to three pieces that continues after the proposal itself. The musician
              does not announce the occasion or draw attention to the moment — the music
              is present, not performative. Venues on the Amalfi Coast with outdoor terraces
              require no PA system for violin or saxophone at this scale.
            </p>
            <p>
              All logistics — venue liaison, timing, positioning, entry — are handled
              as part of the engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="eyebrow mb-5 text-[#B8A882]">Locations</p>
        <h2 className="section-title mb-12 text-[#F9F8F7]" style={{ maxWidth: '22ch' }}>
          Three Settings<br />on the Coast
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/[.08]">
          {LOCATIONS.map(({ name, detail, desc }) => (
            <div key={name}
              className="py-8 border-b border-white/[.08]
                [&:not(:last-child)]:md:border-r [&:not(:last-child)]:md:pr-10
                [&:not(:first-child)]:md:pl-10">
              <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.2rem] text-[#F9F8F7] mb-4">
                {name}
              </h3>
              <p className="text-[.66rem] font-light tracking-[.05em] leading-[2] text-white/50">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] bg-[#F9F8F7]">
        <p className="eyebrow mb-5">Suggested for this occasion</p>
        <div className="flex flex-wrap gap-3 mt-4">
          {ENSEMBLES.map(({ label, href }) => (
            <a key={label} href={href}
              className="inline-flex items-center px-5 py-3 border border-[#1A1A1A]/18
                no-underline transition-all duration-300
                text-[.5rem] font-light tracking-[.1em] uppercase
                text-[#404040] hover:border-[#B8A882] hover:text-[#1A1A1A]">
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] border-t border-black/[.06]">
        <p className="eyebrow mb-8">Related</p>
        <div className="flex flex-col gap-0 border-t border-black/[.09]">
          {[
            { href: '/locations/ravello',  label: 'Wedding music in Ravello',  desc: '— Villa Cimbrone and the Terrazza dell\'Infinito.' },
            { href: '/locations/positano', label: 'Wedding music in Positano', desc: '— clifftop terraces and the Tyrrhenian coastline.' },
            { href: '/violin-solo',        label: 'Violin solo for ceremony',  desc: '— intimate, unamplified, precise.' },
          ].map(({ href, label, desc }) => (
            <div key={href} className="flex items-start gap-6 py-5 border-b border-black/[.06] flex-wrap">
              <a href={href} className="link-underline whitespace-nowrap">{label}</a>
              <span className="text-[.65rem] font-light text-[#404040] tracking-[.04em] leading-[2]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a proposal<br />on the Amalfi Coast?
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

- [ ] Commit:
```bash
git add src/pages/occasions/MarriageProposal.jsx
git commit -m "feat(occasions): add Marriage Proposal landing page"
```

---

## Task 4 — BirthdaysAnniversaries.jsx

**Files:**
- Create: `src/pages/occasions/BirthdaysAnniversaries.jsx`

- [ ] Create the file with this exact content:

```jsx
import { Helmet } from 'react-helmet-async'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Birthday & Anniversary Music — Amalfi Coast',
  description: 'Live music for private birthdays, milestone anniversaries and sunset celebrations on the Amalfi Coast. String quartets, DJ sets, saxophone and vocalist in Ravello, Positano and Sorrento.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Wedding Music Ravello',
    url: 'https://www.weddingmusicravello.com',
  },
  areaServed: [
    { '@type': 'City', name: 'Ravello' },
    { '@type': 'City', name: 'Positano' },
    { '@type': 'City', name: 'Sorrento' },
  ],
  serviceType: 'Private Event Music',
}

const ENSEMBLES = [
  { label: 'EvoStrings', href: '/evostrings'      },
  { label: 'DJ',         href: '/music/dj'        },
  { label: 'Saxophone',  href: '/music/saxophone' },
  { label: 'Vocalist',   href: '/music/vocalist'  },
]

const FORMATS = [
  {
    title: 'Dinner & Garden Party',
    detail: 'Intimate · 10–40 guests',
    desc: 'A string quartet for a terrace dinner at Palazzo Avino or the garden of Villa Eva. EvoStrings performs for 60–90 minutes during the dining service — typically three or four sets of 20 minutes, with a short break between each. Repertoire spans classical, cinematic and pop. A light PA system is set up where the outdoor acoustics require it.',
  },
  {
    title: 'Cocktail & Aperitivo',
    detail: 'Sunset format · 60–90 minutes',
    desc: 'Saxophone — solo or paired with a DJ lounge set — is the most requested format for a Positano aperitivo. The instrument carries naturally across a terrace without amplification, leaving space for conversation. A vocalist can be added for a live element during the cocktail hour before the dinner programme begins.',
  },
  {
    title: 'Evening Dance & Celebration',
    detail: 'Dancing · 2–4 hours',
    desc: 'A DJ set with a curated programme — assembled around the decade, genre preferences and specific tracks requested by the host. The Amalfi Coast outdoor venues (Villa Eva, private villa terraces above Positano) require permits for amplified music after 23:00. All permit coordination with the local Comune is handled as part of the engagement.',
  },
]

export default function OccasionBirthdaysAnniversaries() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Birthday & Anniversary Music on the Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Live music for private birthday dinners, milestone anniversaries and sunset celebrations on the Amalfi Coast. String quartets, DJ sets, saxophone and vocalist in Ravello, Positano and Sorrento." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/occasions/birthdays-anniversaries" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/occasions/birthdays-anniversaries" />
        <meta property="og:title" content="Birthday & Anniversary Music on the Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Live music for private birthday dinners, milestone anniversaries and sunset celebrations on the Amalfi Coast. String quartets, DJ sets, saxophone and vocalist in Ravello, Positano and Sorrento." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Occasions · Private Celebrations
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Birthdays<br />&amp; Anniversaries
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            A string quartet for a terrace dinner at Palazzo Avino, a DJ set for a sunset
            gathering in Positano, a saxophone for the cocktail hour — the format is selected
            to match the scale and mood of the occasion, not the other way round.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Programme Formats</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Dinner, Cocktail<br />or Evening Dance
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/[.06] max-w-5xl">
          {FORMATS.map(({ title, detail, desc }) => (
            <div key={title}
              className="py-8 border-b border-black/[.06]
                [&:not(:last-child)]:md:border-r [&:not(:last-child)]:md:pr-10
                [&:not(:first-child)]:md:pl-10">
              <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.2rem] text-[#1A1A1A] mb-4">
                {title}
              </h3>
              <p className="text-[.66rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="eyebrow mb-5 text-[#B8A882]">Suggested for this occasion</p>
        <h2 className="section-title mb-10 text-[#F9F8F7]" style={{ maxWidth: '24ch' }}>
          Music Partners<br />for Private Events
        </h2>
        <div className="flex flex-wrap gap-3">
          {ENSEMBLES.map(({ label, href }) => (
            <a key={label} href={href}
              className="inline-flex items-center px-5 py-3 border border-white/20
                no-underline transition-all duration-300
                text-[.5rem] font-light tracking-[.1em] uppercase
                text-white/55 hover:border-[#B8A882] hover:text-[#B8A882]">
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] bg-[#F9F8F7]">
        <p className="eyebrow mb-8">Related</p>
        <div className="flex flex-col gap-0 border-t border-black/[.09]">
          {[
            { href: '/locations/positano', label: 'Wedding music in Positano', desc: '— clifftop terraces and sunset venues for private events.' },
            { href: '/evostrings',         label: 'EvoStrings string quartet', desc: '— string quartet and trio for dinner service and garden parties.' },
            { href: '/music/dj',           label: 'DJ for private events',     desc: '— curated sets for dancing on outdoor terraces.' },
          ].map(({ href, label, desc }) => (
            <div key={href} className="flex items-start gap-6 py-5 border-b border-black/[.06] flex-wrap">
              <a href={href} className="link-underline whitespace-nowrap">{label}</a>
              <span className="text-[.65rem] font-light text-[#404040] tracking-[.04em] leading-[2]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a private event<br />on the Amalfi Coast?
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

- [ ] Commit:
```bash
git add src/pages/occasions/BirthdaysAnniversaries.jsx
git commit -m "feat(occasions): add Birthdays & Anniversaries landing page"
```

---

## Task 5 — CorporateEvents.jsx

**Files:**
- Create: `src/pages/occasions/CorporateEvents.jsx`

- [ ] Create the file with this exact content:

```jsx
import { Helmet } from 'react-helmet-async'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Event Music — Amalfi Coast',
  description: 'Live music for exclusive corporate events on the Amalfi Coast — private dinners, brand retreats, product presentations and team incentives at Relais & Châteaux and luxury hotel venues in Ravello, Positano and Sorrento.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Wedding Music Ravello',
    url: 'https://www.weddingmusicravello.com',
  },
  areaServed: [
    { '@type': 'City', name: 'Ravello' },
    { '@type': 'City', name: 'Positano' },
    { '@type': 'City', name: 'Sorrento' },
  ],
  serviceType: 'Corporate Event Music',
}

const ENSEMBLES = [
  { label: 'Vocalist',     href: '/music/vocalist' },
  { label: 'DJ',           href: '/music/dj'       },
  { label: 'EvoStrings',   href: '/evostrings'     },
  { label: 'Trilogy Trio', href: '/trilogy-trio'   },
  { label: 'Piano Solo',   href: '/music/piano'    },
]

const FORMATS = [
  {
    title: 'Private Dinner',
    detail: 'Seated · 20–80 guests',
    desc: 'A string trio or piano solo for the dinner service at Belmond Hotel Caruso, Palazzo Avino or Villa Cimbrone. The format is understated by design — music that sets an atmosphere without competing with conversation. Three to four sets of 20 minutes, with a short break between each. Repertoire agreed in advance with the client.',
  },
  {
    title: 'Brand Retreat & Incentive',
    detail: 'Full-day format · Multiple stages',
    desc: 'A full-day programme — morning session background music, afternoon free time, evening gala dinner with live performance. EvoStrings for the welcome aperitivo, Trilogy Trio for the dinner, DJ for the after-dinner dancing. All formats coordinated as a single engagement. Transfer logistics from Naples Capodichino Airport (90 minutes) are typically arranged through the hotel concierge.',
  },
  {
    title: 'Product Launch & Presentation',
    detail: 'Experiential · Brand alignment',
    desc: 'Live music as an element of a brand activation or product launch at an Amalfi Coast venue. A vocalist or DJ set matched to the brand\'s creative direction. Palazzo Avino\'s interior courtyard and the terrace of Villa Cimbrone have hosted events for international luxury brands — venues where the setting is itself part of the communication.',
  },
]

export default function OccasionCorporateEvents() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Corporate Event Music on the Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Live music for private dinners, brand retreats and product presentations at Amalfi Coast venues. Vocalist, DJ, string ensembles and piano for exclusive corporate events in Ravello and Positano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/occasions/corporate-events" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/occasions/corporate-events" />
        <meta property="og:title" content="Corporate Event Music on the Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Live music for private dinners, brand retreats and product presentations at Amalfi Coast venues. Vocalist, DJ, string ensembles and piano for exclusive corporate events in Ravello and Positano." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Occasions · Corporate
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Exclusive<br />Corporate Events
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Private dinners, brand retreats, and presentations at Amalfi Coast venues.
            Live music — from curated DJ sets to vocal performances — selected for its
            capacity to establish atmosphere without competing with conversation.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Event Formats</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Dinner, Retreat<br />or Brand Activation
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/[.06] max-w-5xl">
          {FORMATS.map(({ title, detail, desc }) => (
            <div key={title}
              className="py-8 border-b border-black/[.06]
                [&:not(:last-child)]:md:border-r [&:not(:last-child)]:md:pr-10
                [&:not(:first-child)]:md:pl-10">
              <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.2rem] text-[#1A1A1A] mb-4">
                {title}
              </h3>
              <p className="text-[.66rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="eyebrow mb-5 text-[#B8A882]">Suggested for this occasion</p>
        <h2 className="section-title mb-10 text-[#F9F8F7]" style={{ maxWidth: '24ch' }}>
          Music Partners<br />for Corporate Events
        </h2>
        <div className="flex flex-wrap gap-3">
          {ENSEMBLES.map(({ label, href }) => (
            <a key={label} href={href}
              className="inline-flex items-center px-5 py-3 border border-white/20
                no-underline transition-all duration-300
                text-[.5rem] font-light tracking-[.1em] uppercase
                text-white/55 hover:border-[#B8A882] hover:text-[#B8A882]">
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] bg-[#F9F8F7]">
        <p className="eyebrow mb-8">Related</p>
        <div className="flex flex-col gap-0 border-t border-black/[.09]">
          {[
            { href: '/locations/ravello',  label: 'Corporate venues in Ravello', desc: '— Belmond Hotel Caruso, Palazzo Avino and Villa Cimbrone.' },
            { href: '/trilogy-trio',       label: 'Trilogy Trio in Positano',    desc: '— violin, cello and piano for the dinner reception.' },
            { href: '/music/vocalist',     label: 'Vocalist for corporate events', desc: '— live voice for the evening programme.' },
          ].map(({ href, label, desc }) => (
            <div key={href} className="flex items-start gap-6 py-5 border-b border-black/[.06] flex-wrap">
              <a href={href} className="link-underline whitespace-nowrap">{label}</a>
              <span className="text-[.65rem] font-light text-[#404040] tracking-[.04em] leading-[2]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a corporate event<br />on the Amalfi Coast?
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

- [ ] Commit:
```bash
git add src/pages/occasions/CorporateEvents.jsx
git commit -m "feat(occasions): add Corporate Events landing page"
```

---

## Task 6 — Link Occasions.jsx to landing pages

**Files:**
- Modify: `src/components/sections/Occasions.jsx`

Add a `pageHref` field to each occasion in `OCCASIONS` and render a subtle "Explore this occasion" CTA link below the description.

- [ ] Add `pageHref` to each occasion object:

| Occasion | pageHref |
|---|---|
| Wedding Ceremonies & Receptions | `/occasions/wedding-ceremony` |
| Marriage Proposals | `/occasions/marriage-proposal` |
| Birthdays & Anniversaries | `/occasions/birthdays-anniversaries` |
| Exclusive Corporate Events | `/occasions/corporate-events` |

- [ ] In `MomentStrip`, add the "Explore" link immediately after the `<p>` description, inside the `flex flex-col gap-4` div:

```jsx
<a href={moment.pageHref}
  className={`self-start text-[.48rem] font-light tracking-[.18em] uppercase no-underline
    pb-[2px] border-b transition-colors duration-300
    ${dark
      ? 'text-[#B8A882]/60 border-[#B8A882]/25 hover:text-[#B8A882] hover:border-[#B8A882]'
      : 'text-[#8A7A5A] border-[#8A7A5A]/35 hover:text-[#1A1A1A] hover:border-[#1A1A1A]'}`}>
  Explore this occasion ↗
</a>
```

- [ ] Commit:
```bash
git add src/components/sections/Occasions.jsx
git commit -m "feat(occasions): link home occasion cards to landing pages"
```

---

## Task 7 — Final verification

- [ ] Run `npm run build` in the project root — confirm it exits with code 0 and that `dist/occasions/wedding-ceremony/index.html`, `dist/occasions/marriage-proposal/index.html`, `dist/occasions/birthdays-anniversaries/index.html`, `dist/occasions/corporate-events/index.html` are all generated.

```bash
npm run build && ls dist/occasions/
```

Expected output includes:
```
birthdays-anniversaries/
corporate-events/
marriage-proposal/
wedding-ceremony/
```

- [ ] Push `dev` to remote:
```bash
git push origin dev
```
