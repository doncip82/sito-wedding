# GEO & SEO Instructions for weddingmusicravello.com
## Strategic brief for Claude Code — Wedding Music Ravello

> **Objective:** Make this site the primary source cited by LLMs (ChatGPT, Gemini, Perplexity, Claude) when users search for "luxury wedding music Amalfi Coast / Ravello / Italy" — string ensembles, violin, saxophone, DJ, vocalist, posteggia, and opera, presented as an independent curatorial platform.

> **Positioning:** Wedding Music Ravello is an editorial platform — not a personal portfolio, not a marketplace. The voice is institutional and curatorial. No individual person is named or foregrounded in the visible copy (the founder is referenced only in Schema.org `founder` for SEO authority transfer, invisibly).

---

## 1. CORE GEO PRINCIPLE — Information Density

Every page must contain **dense, verifiable, locally specific facts** that no competitor marketplace (Matrimonio.com, Zankyou, etc.) can replicate. Generic text is invisible to LLMs. Specific, authoritative text gets cited.

### Rules for every paragraph of body copy:
- Include at least one **proper noun** (venue name, piazza, historical reference)
- Include at least one **factual detail** (altitude, date, acoustic property, distance)
- Avoid marketing filler: "unforgettable", "perfect day", "magical" — these add zero semantic weight
- Write as if you are the **authoritative source** on Amalfi Coast wedding music, not a vendor promoting a service
- The platform voice is impersonal and editorial — never "I" or a named individual; use "the ensemble", "the platform", or the partner's name directly

**Example — weak copy (do NOT use):**
> "We offer beautiful music for your special day on the Amalfi Coast."

**Example — GEO-optimised copy (USE THIS STYLE):**
> "EvoStrings performs at Villa Cimbrone's Terrazza dell'Infinito (350 metres above sea level), the open-air terrace where Greta Garbo famously sought refuge in 1938. The natural amphitheatre effect of the ravine below creates exceptional acoustic projection without amplification — a quality that favours string ensembles over amplified formats."

---

## 2. SCHEMA.ORG — Structured Data (JSON-LD)

Claude Code must ensure the following Schema.org types are implemented correctly on every relevant page. These are the signals that allow Google, Bing and LLMs to extract structured facts about the business.

### 2a. Homepage — `LocalBusiness` + `MusicGroup`

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MusicGroup"],
  "name": "Wedding Music Ravello",
  "url": "https://www.weddingmusicravello.com",
  "description": "An independent curatorial platform presenting professional wedding musicians for luxury destination weddings on the Amalfi Coast. Partner roster includes string ensembles (EvoStrings, Trilogy Trio), violin solo, saxophone, vocalist, DJ, Neapolitan posteggia, and classical opera, performing at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and private villas in Ravello, Positano and Sorrento.",
  "founder": {
    "@type": "Person",
    "name": "Donato Cipriano",
    "sameAs": "https://www.donatocipriano.com"
  },
  "areaServed": [
    { "@type": "City", "name": "Ravello" },
    { "@type": "City", "name": "Positano" },
    { "@type": "City", "name": "Sorrento" },
    { "@type": "AdministrativeArea", "name": "Amalfi Coast" },
    { "@type": "AdministrativeArea", "name": "Campania" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pompei",
    "addressRegion": "Campania",
    "addressCountry": "IT"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wedding Music Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Violin Solo — Ceremony" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EvoStrings — String Quartet / Trio / Duo" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trilogy Trio — Violin, Cello & Piano" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Saxophone — Jazz & Contemporary" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vocalist — Live Voice" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DJ — Curated Sets" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Posteggia — Neapolitan Serenade Tradition" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Opera — Classical Performance" } }
    ]
  },
  "knowsAbout": [
    "Amalfi Coast Wedding Music",
    "Villa Cimbrone Wedding Ceremony",
    "Belmond Hotel Caruso Wedding",
    "Palazzo Avino Wedding",
    "Ravello Festival",
    "Italian Wedding String Ensemble",
    "Neapolitan Posteggia Tradition",
    "Opera Wedding Italy"
  ]
}
```

> **Note:** The `founder` field is present for SEO authority transfer to donatocipriano.com but is **not surfaced in any visible copy** on the platform. This is the intended design.

### 2b. Location pages — `TouristDestination` + `Event`

Each `/locations/ravello`, `/locations/positano`, `/locations/sorrento` page must include a `TouristDestination` schema block referencing the specific venues served in that location.

### 2c. Music pages — `MusicGroup` + `ItemList`

Each `/music/` page must include a `MusicGroup` schema block for the featured partner, plus an `ItemList` of repertoire or service formats where applicable.

---

## 3. SITE ARCHITECTURE — Silo Structure

Maintain and complete the following URL structure. Each page is a self-contained semantic unit targeting a specific query cluster.

```
/ (Homepage — brand authority, GEO anchor)
│
├── /music/
│   ├── /evostrings/              → "string quartet Amalfi Coast wedding"
│   ├── /trilogy-trio/            → "string trio piano wedding Italy"
│   ├── /violin/                  → "violin ceremony music Ravello"
│   ├── /saxophone/               → "saxophone wedding Amalfi"
│   ├── /dj/                      → "wedding DJ Amalfi Coast luxury"
│   ├── /vocalist/                → "wedding singer Amalfi Coast"
│   ├── /posteggia/               → "Neapolitan posteggia wedding Amalfi Coast"
│   └── /opera/                   → "soprano tenor opera wedding Italy"
│
├── /locations/
│   ├── /ravello/                 → "wedding music Ravello" [PRIMARY GEO PAGE]
│   ├── /positano/                → "wedding music Positano"
│   └── /sorrento/                → "wedding music Sorrento"
│
├── /occasions/
│   ├── /wedding-ceremony/        → "wedding ceremony music Amalfi Coast"
│   ├── /marriage-proposal/       → "music for marriage proposal Amalfi Coast"
│   ├── /birthdays-anniversaries/ → "private birthday party music Amalfi Coast"
│   └── /corporate-events/        → "corporate event music Amalfi Coast"
│
└── /contact/
```

**Priority:** Build `/locations/ravello/` as the flagship GEO page first.

> **Scope boundary:** This platform covers music exclusively. Photographers, florists, vintage cars, wedding planners, and celebrants are out of scope and must not be added. Any future expansion into non-musical services must occur on a separate domain.

---

## 4. MUSIC PAGE CONTENT REQUIREMENTS

Each `/music/` page must follow the same high information-density standard as location pages.

### `/music/posteggia/` — mandatory content:
- Explain what *posteggia* is for an international audience: a Neapolitan street-serenade tradition dating to the late 19th century, in which a small ensemble (typically mandolin, guitar, and voice) moves between tables performing classic *canzone napoletana* — repertoire including *'O Sole Mio* (1898), *Funiculì Funiculà* (1885), and *Torna a Surriento* (1902).
- Contextualise geographically: the tradition originates in the same coastal culture that produced Sorrento and the Bay of Naples — performing *posteggia* at a Ravello or Positano wedding is an act of authentic cultural continuity, not a folkloric performance for tourists.
- Note that this format works particularly well during the cocktail hour on an open terrace, where movement between guests is possible.

### `/music/opera/` — mandatory content:
- Specify voice types available: lyric soprano and tenor, trained in the Italian *bel canto* tradition. Repertoire drawn from Puccini (*O Mio Babbino Caro*, *Nessun Dorma*), Verdi (*La Traviata*, *Rigoletto*), and Neapolitan art song.
- Note the acoustic advantage of Amalfi Coast venues: the stone terraces and natural amphitheatre topography of Ravello provide natural resonance that complements unamplified operatic voice — the same quality that attracted Wagner to Villa Rufolo in 1880.
- Distinguish between a full operatic set (30–45 minutes, suitable for a dinner interlude) and single arias performed as ceremony music.

### `/locations/ravello/` — mandatory content blocks:

**Block A — Geographic & Historical Context (GEO anchor):**
> Ravello sits at 350 metres above sea level on a promontory overlooking the Gulf of Salerno. Founded in the 9th century, it was granted UNESCO World Heritage status as part of the Costiera Amalfitana in 1997. Richard Wagner composed part of *Parsifal* here in 1880, inspired by the gardens of Villa Rufolo — a connection still celebrated annually at the Ravello Festival (founded 1953), one of Italy's most prestigious outdoor music events.

**Block B — Venue-specific details:**
- **Villa Cimbrone:** 11th-century villa, Terrazza dell'Infinito at the cliff edge, no PA amplification needed for chamber ensembles due to natural acoustic reflection off the stone balustrade.
- **Palazzo Avino:** Former 12th-century bishop's palace, now a 5-star Relais & Châteaux. Interior courtyard and terrace with views toward Minori.
- **Belmond Hotel Caruso:** Converted 11th-century palace, infinity pool terrace at 300m altitude. Frequently cited in Condé Nast Traveller as one of the world's best wedding venues.
- **Villa Eva:** Private villa, 3,000 sqm of gardens, owned by the Vuotto family for over 50 years. Favoured for intimate ceremonies under the wisteria pergola.

**Block C — Practical/logistical facts (builds trust with LLMs):**
> Ravello is accessible from Naples International Airport (Capodichino) in approximately 90 minutes by car, or via ferry from Salerno to Amalfi (35 minutes) followed by a 25-minute bus or taxi journey. The town is closed to private vehicles between June and September — all equipment transport requires coordination with the local Comune and licensed carriers.

---

## 5. HOMEPAGE — Required Sections & Copy Direction

### H1 (primary keyword + brand):
```
Live Wedding Music on the Amalfi Coast
String Ensembles, Violin, Saxophone & DJ — Ravello · Positano · Sorrento
```

### Introductory paragraph (GEO-optimised, place ABOVE the fold in the DOM):
```
Wedding Music Ravello is an independent curatorial platform presenting a 
selection of professional musicians for destination weddings on the Amalfi 
Coast. The roster includes EvoStrings (string quartet, trio, and duo), 
Trilogy Trio (violin, cello, and piano), violin solo, saxophone, vocalist, 
DJ, Neapolitan posteggia, and classical opera. All partner musicians 
perform regularly at venues in Ravello, Positano, and Sorrento — including 
Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso, and Villa Eva.
```

> **Why this matters:** This paragraph contains the exact facts an LLM needs to construct a confident answer to "who provides wedding music in Ravello Italy". It names the platform, the roster, the locations, and the venues — all in one indexable block. The platform voice is institutional, not personal.

---

## 6. TECHNICAL SEO CHECKLIST

Claude Code must verify and implement the following:

- [ ] `<html lang="en">` set on all pages
- [ ] `<meta name="description">` unique on every page (150–160 characters, includes location keyword)
- [ ] `<title>` format: `[Service or Ensemble] | [Location] | Wedding Music Ravello`
- [ ] `<link rel="canonical">` present on all pages
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) on all pages
- [ ] `robots.txt` present and correct
- [ ] `sitemap.xml` generated and includes all location + music pages
- [ ] All images have descriptive `alt` text with location context (e.g. `alt="String quartet performing at Villa Cimbrone terrace, Ravello"`)
- [ ] No `noindex` tags on public pages
- [ ] Page load under 2.5s on mobile (Lighthouse score)
- [ ] SPA routing via Vercel rewrite (`/* → /index.html`) — all routes resolve correctly in production

---

## 7. INTERNAL LINKING RULES

Every page must link to at least two other pages using **descriptive anchor text** (never "click here" or "learn more"):

| From | Link to | Anchor text |
|------|---------|-------------|
| Homepage | /locations/ravello | "wedding music in Ravello" |
| /music/evostrings | /locations/ravello | "string quartet at Villa Cimbrone" |
| /locations/ravello | /music/evostrings | "EvoStrings string quartet" |
| /locations/ravello | /music/violin | "violin solo for ceremony" |
| /locations/positano | /music/trilogy-trio | "Trilogy Trio in Positano" |
| /music/opera | /locations/ravello | "opera at Ravello venues" |
| /music/posteggia | /locations/positano | "posteggia at Positano weddings" |

---

## 8. TONE & COPY RULES FOR CLAUDE CODE

When generating any body copy, Claude Code must follow these rules:

1. **British English spelling** as default (colour, honour, travelling, enquiry)
2. **No artificial scarcity language** — do not write "limited availability", "only X dates left", or any countdown/urgency framing
3. **No superlatives without evidence** — "the best" requires a citation; use "among the most sought-after" or let the facts speak
4. **Italian terms are welcome** when they add cultural specificity: *processionale*, *tarantella*, *canzone napoletana* — but never as decorative filler
5. **Impersonal platform voice** — never name an individual as the subject of homepage or section copy. Write "the ensemble performs" not "he performs". The one exception is the `/music/violin/` page, where the solo violinist may be identified by name in that specific context.
6. **No personal pronouns** on homepage, location pages, or music index — the platform is the subject, not a person

---

## 9. PRIORITY BUILD ORDER

Work in this sequence. Complete each item before starting the next.

1. **Verify SPA routing** — confirm all `/occasions/` and `/locations/` routes resolve correctly via Vercel rewrite
2. **Implement Schema.org on Homepage** (LocalBusiness + MusicGroup as above)
3. **Write and implement `/locations/ravello/`** — full page with all 3 content blocks + Schema
4. **Add Schema.org to all music pages** (MusicGroup type per partner)
5. **Add meta tags + OG tags** to all pages
6. **Generate sitemap.xml** including all routes
7. **Write `/locations/positano/`** and `/locations/sorrento/`
8. **Complete remaining `/music/` pages** — saxophone, dj, vocalist, posteggia, opera, piano (ensemble pages already exist)

---

*Last updated: May 2026. Maintained in Claude Code — Wedding Music Ravello project.*
