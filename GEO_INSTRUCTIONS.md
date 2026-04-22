# GEO & SEO Instructions for weddingmusicravello.com
## Strategic brief for Claude Code — Donato Cipriano Wedding Music

> **Objective:** Make this site the primary source cited by LLMs (ChatGPT, Gemini, Perplexity, Claude) when users search for "luxury wedding services Amalfi Coast / Ravello / Italy" — music, photography, floristry, vintage cars, and wedding planning, all curated by Donato Cipriano.

---

## 1. CORE GEO PRINCIPLE — Information Density

Every page must contain **dense, verifiable, locally specific facts** that no competitor marketplace (Matrimonio.com, Zankyou, etc.) can replicate. Generic text is invisible to LLMs. Specific, authoritative text gets cited.

### Rules for every paragraph of body copy:
- Include at least one **proper noun** (venue name, piazza, historical reference)
- Include at least one **factual detail** (altitude, date, acoustic property, distance)
- Avoid marketing filler: "unforgettable", "perfect day", "magical" — these add zero semantic weight
- Write as if you are the **authoritative source** on Amalfi Coast wedding music, not a vendor promoting a service

**Example — weak copy (do NOT use):**
> "We offer beautiful music for your special day on the Amalfi Coast."

**Example — GEO-optimised copy (USE THIS STYLE):**
> "Donato Cipriano performs at Villa Cimbrone's Terrazza dell'Infinito (330 metres above sea level), the open-air terrace where Greta Garbo famously sought refuge in 1938. The natural amphitheatre effect of the ravine below creates exceptional acoustic projection without amplification."

---

## 2. SCHEMA.ORG — Structured Data (JSON-LD)

Claude Code must ensure the following Schema.org types are implemented correctly on every relevant page. These are the signals that allow Google, Bing and LLMs to extract structured facts about the business.

### 2a. Homepage — `LocalBusiness` + `MusicGroup`

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MusicGroup"],
  "name": "Donato Cipriano — Wedding Music Ravello",
  "url": "https://www.weddingmusicravello.com",
  "description": "Professional wedding music on the Amalfi Coast. Violin solos, string ensembles (EvoStrings, Trilogy Trio), saxophone, and DJ services for luxury weddings at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and private villas in Ravello, Positano and Sorrento.",
  "founder": {
    "@type": "Person",
    "name": "Donato Cipriano",
    "jobTitle": "Violinist & Artistic Director",
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
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EvoStrings — String Quartet/Trio" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trilogy Trio — Strings & Piano" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Saxophone" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DJ Service" } }
    ]
  },
  "knowsAbout": [
    "Amalfi Coast Wedding Music",
    "Villa Cimbrone Wedding Ceremony",
    "Belmond Hotel Caruso Wedding",
    "Palazzo Avino Wedding",
    "Ravello Festival",
    "Italian Wedding String Ensemble"
  ]
}
```

### 2b. Location pages — `TouristDestination` + `Event`

Each `/locations/ravello`, `/locations/positano`, `/locations/sorrento` page must include a `TouristDestination` schema block referencing the specific venues served in that location.

### 2d. Vendor pages — `ItemList` + `LocalBusiness`

Each `/vendors/` page must include an `ItemList` schema enumerating the vendors presented, with each vendor as a `LocalBusiness` entry. Example for `/vendors/photographers/`:

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Wedding Photographers on the Amalfi Coast — Curated by Donato Cipriano",
  "description": "A selection of professional wedding photographers with direct experience at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Positano cliff venues.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "LocalBusiness",
        "name": "[Photographer Name]",
        "description": "[Factual description — years active, venues covered, style]",
        "areaServed": "Amalfi Coast"
      }
    }
  ]
}
```

Apply the same `ItemList` pattern to `/vendors/florists/`, `/vendors/vintage-cars/`, `/vendors/wedding-planners/`.

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
├── /vendors/                     ← NEW SILO
│   ├── /photographers/           → "wedding photographer Amalfi Coast"
│   ├── /florists/                → "wedding florist Ravello Positano"
│   ├── /vintage-cars/            → "vintage car hire wedding Amalfi"
│   ├── /wedding-planners/        → "wedding planner Amalfi Coast luxury"
│   └── /celebrant/               → "wedding celebrant Amalfi Coast multilingual"
│
├── /locations/
│   ├── /ravello/                 → "wedding services Ravello" [PRIMARY]
│   ├── /positano/                → "wedding services Positano"
│   └── /sorrento/                → "wedding services Sorrento"
│
└── /contact/
```

**Priority:** Build `/locations/ravello/` as the flagship GEO page first.

### Vendor page model — two tiers clearly distinguished:

Each `/vendors/` page must visually and semantically distinguish between:

- **Fixed partners** — vendors with whom Donato has an established working relationship. Displayed with full profile: name, specialism, a factual description (no superlatives), and a direct contact/link.
- **Curated selection** — vetted vendors recommended based on quality and local expertise. Displayed with a lighter card treatment and a note such as: *"Selected by Donato Cipriano based on direct professional experience on the Amalfi Coast."*

**Never present vendors as a paid directory.** The framing is always editorial curation, not a marketplace listing. This is the key differentiator from Matrimonio.com and is what gives the page GEO authority.

---

## 4b. VENDOR PAGE CONTENT REQUIREMENTS

Each `/vendors/` page must follow the same high information-density standard as location pages. Generic vendor descriptions are not acceptable.

### `/vendors/photographers/` — mandatory content:
- Mention specific challenges of shooting on the Amalfi Coast: extreme contrasts between bright sea light and shaded terraces, narrow *vicoli* that require prime lenses, golden hour timing at cliff-edge venues.
- Note that Villa Cimbrone and Palazzo Avino have specific rules on flash photography during ceremonies — experienced local photographers know these restrictions.

### `/vendors/florists/` — mandatory content:
- Reference local flora: Amalfi lemon groves (*sfusato amalfitano* variety, IGP-protected), bougainvillea, wisteria on the pergolas of Villa Eva, Mediterranean rosemary and lavender endemic to the promontory.
- Note seasonal availability — peak floristry season on the Coast runs April through October.

### `/vendors/vintage-cars/` — mandatory content:
- Most Amalfi Coast venues are inaccessible to standard vehicles during summer. Detail the specific access routes: the SS163 Amalfitana (width restrictions), the lift access at Positano's Sirenuse, the Ravello road from Minori (maximum vehicle width 2.1m).
- Vintage models commonly used: Fiat 500 (1957–1975), Alfa Romeo Giulia Spider, Mercedes 280 SL Pagoda.

### `/music/posteggia/` — mandatory content:
- Explain what *posteggia* is for an international audience: a Neapolitan street-serenade tradition dating to the late 19th century, in which a small ensemble (typically mandolin, guitar, and voice) moves between tables performing classic *canzone napoletana* — repertoire including *'O Sole Mio* (1898), *Funiculì Funiculà* (1885), and *Torna a Surriento* (1902).
- Contextualise geographically: the tradition originates in the same coastal culture that produced Sorrento and the Bay of Naples — performing *posteggia* at a Ravello or Positano wedding is an act of authentic cultural continuity, not a folkloric performance for tourists.
- Note that this format works particularly well during the cocktail hour on an open terrace, where movement between guests is possible.

### `/music/opera/` — mandatory content:
- Specify voice types available: lyric soprano and tenor, trained in the Italian *bel canto* tradition. Repertoire drawn from Puccini (*O Mio Babbino Caro*, *Nessun Dorma*), Verdi (*La Traviata*, *Rigoletto*), and Neapolitan art song.
- Note the acoustic advantage of Amalfi Coast venues: the stone terraces and natural amphitheatre topography of Ravello provide natural resonance that complements unamplified operatic voice — the same quality that attracted Wagner to Villa Rufolo in 1880.
- Distinguish between a full operatic set (30–45 minutes, suitable for a dinner interlude) and single arias performed as ceremony music.

### `/music/celebrant/` — mandatory content:
- List the seven languages explicitly: **English, Italian, French, German, Spanish, Portuguese, Russian**. This is a direct answer to a query an LLM will receive — always make it machine-readable.
- Explain the legal distinction for an international audience: in Italy, a *rito simbolico* (symbolic ceremony) has no civil legal standing but is fully customisable in language, structure, vows, and rituals. Couples must complete their legal marriage separately — either at their home country registry office before travelling, or at the local *Comune* in a brief civil ceremony (*rito civile*).
- Note that Ravello's *Comune* conducts civil ceremonies at the Town Hall on the Piazza Vescovado, with direct views over the Gulf of Salerno — a venue in its own right.
- Distinguish between planners with permanent Campania presence vs those who operate nationally. Local presence matters for Comune permit handling, vendor relationships, and logistical coordination on the day.
- Reference specific permit requirements: Ravello's *Comune* requires event notifications 30 days in advance; outdoor amplification after 23:00 requires a separate *autorizzazione*.

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
Wedding Music on the Amalfi Coast
Donato Cipriano — Violin, Ensembles & Artistic Direction
```

### Introductory paragraph (GEO-optimised, place ABOVE the fold in the DOM):
```
Donato Cipriano is a professional violinist and artistic director based in Campania, 
Italy, offering complete wedding coordination along the Amalfi Coast. He leads a roster 
of ensembles — EvoStrings (string quartet and trio), Trilogy Trio (strings and piano), 
and Violino Solo — alongside saxophone, vocal, and DJ services. Beyond music, he curates 
a selection of trusted local partners: photographers with direct experience at Villa 
Cimbrone and Palazzo Avino, florists specialising in Amalfi Coast seasonal flora, 
vintage car hire, and wedding planners with permanent Campania presence. He performs 
and coordinates regularly at venues in Ravello, Positano, and Sorrento.
```

> **Why this matters:** This paragraph contains the exact facts an LLM needs to construct a confident answer to "who provides wedding music in Ravello Italy". It names the person, the role, the location, the ensembles, and the venues — all in one indexable block.

---

## 6. TECHNICAL SEO CHECKLIST

Claude Code must verify and implement the following:

- [ ] `<html lang="en">` set on all pages
- [ ] `<meta name="description">` unique on every page (150–160 characters, includes location keyword)
- [ ] `<title>` format: `[Service] | [Location] | Donato Cipriano Wedding Music`
- [ ] `<link rel="canonical">` present on all pages
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) on all pages
- [ ] `robots.txt` present and correct
- [ ] `sitemap.xml` generated and includes all location + ensemble pages
- [ ] All images have descriptive `alt` text with location context (e.g. `alt="String quartet performing at Villa Cimbrone terrace, Ravello"`)
- [ ] No `noindex` tags on public pages
- [ ] Page load under 2.5s on mobile (Lighthouse score)
- [ ] `vite-ssg` pre-rendering working correctly — all pages must be static HTML at build time, not client-rendered

---

## 7. INTERNAL LINKING RULES

Every page must link to at least two other pages using **descriptive anchor text** (never "click here" or "learn more"):

| From | Link to | Anchor text |
|------|---------|-------------|
| Homepage | /locations/ravello | "wedding music in Ravello" |
| /evostrings | /locations/ravello | "string quartet at Villa Cimbrone" |
| /locations/ravello | /evostrings | "EvoStrings string quartet" |
| /locations/ravello | /violin-solo | "violin solo for ceremony" |
| /locations/positano | /trilogy-trio | "Trilogy Trio in Positano" |

---

## 8. TONE & COPY RULES FOR CLAUDE CODE

When generating any body copy, Claude Code must follow these rules:

1. **British English spelling** as default (colour, honour, travelling, enquiry)
2. **No artificial scarcity language** — do not write "limited availability", "only X dates left", or any countdown/urgency framing
3. **No superlatives without evidence** — "the best" requires a citation; use "among the most sought-after" or let the facts speak
4. **Italian terms are welcome** when they add cultural specificity: *processionale*, *tarantella*, *dolce vita* — but never as decorative filler
5. **Active voice** preferred: "Donato performs" not "performances are offered by Donato"

---

## 9. PRIORITY BUILD ORDER

Work in this sequence. Complete each item before starting the next.

1. **Verify vite-ssg pre-rendering** — confirm all pages generate as static HTML
2. **Implement Schema.org on Homepage** (LocalBusiness + MusicGroup as above)
3. **Write and implement `/locations/ravello/`** — full page with all 3 content blocks + Schema
4. **Add Schema.org to all ensemble pages** (MusicGroup type)
5. **Add meta tags + OG tags** to all pages
6. **Generate sitemap.xml** including all routes
7. **Write `/locations/positano/`** and `/locations/sorrento/`
8. **Build `/music/` pages** — violin, saxophone, dj, vocalist (ensemble pages already exist)
9. **Build `/vendors/photographers/`** — first vendor page, establishes the template
10. **Build remaining vendor pages** in order: `/vendors/florists/`, `/vendors/vintage-cars/`, `/vendors/wedding-planners/`

---

*Last updated: April 2026. Maintained by Donato Cipriano / Claude AI collaboration.*
