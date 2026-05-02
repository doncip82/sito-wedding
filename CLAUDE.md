# SITO WEDDING — Project Context for Claude

## Posizionamento del sito
**Wedding Music Ravello** è una piattaforma curatoriale luxury per fornitori musicali selezionati per matrimoni ed eventi esclusivi in Costiera Amalfitana.

**NON è** il portfolio personale di Donato Cipriano.
**È** una piattaforma indipendente che propone esclusivamente partner musicali accuratamente selezionati.

### Ruolo di Donato Cipriano
- È il creatore del progetto (invisibile nel sito — presente solo in Schema.org `founder`)
- Compare **solo** come artista nella pagina Violino Solo
- **Non deve** apparire come direttore artistico, coordinatore o fondatore nelle sezioni visibili
- Il suo sito personale (donatocipriano.com) riceve autorità SEO tramite `founder.sameAs` e `<link rel="author">` — invisibili all'utente

## Categorie di partner proposti
### Musica
- EvoStrings — Ensemble d'archi (Duo, Trio, Quartetto)
- Trilogy Trio — Violino, Violoncello, Pianoforte (Pop/Rock/Cinematic)
- Violino Solo — Donato Cipriano (unica presenza visibile di Donato)
- Sassofono — Jazz & Contemporary
- Vocalist — Live Voice
- DJ — Curated Sets
- Posteggia — Tradizione Napoletana
- Opera — Classical Performance
- Piano Solo — Classical & Contemporary

### Nota strategica — Solo musica
Il sito propone **esclusivamente partner musicali**. L'aggiunta di fotografi, planner, vintage cars, fioristi, celebranti o altri fornitori non musicisti è stata valutata e scartata per preservare il posizionamento curatoriale. Qualsiasi futura espansione verso fornitori non musicali deve avvenire su dominio separato.

## Brand & Identità
- **Nome progetto:** SITO WEDDING (repository: `doncip82/sito-wedding`)
- **Brand pubblico:** Wedding Music Ravello
- **Tono:** Editorial Luxury — istituzionale/curatoriale — stile Vogue Weddings / Belmond / Mezzatorre
- **Palette:**
  - Off-white: `#F9F8F7` (sfondo)
  - Charcoal: `#1A1A1A` (testo principale, sezioni scure)
  - Mid: `#404040` (corpo testo su bianco)
  - Gold: `#B8A882` (accenti)
  - Gold scuro: `#8A7A5A` (sub-label, hover)
  - Border: `rgba(26,26,26,0.09)`
- **Font:** Cormorant Garamond (serif, display) + Montserrat (sans-serif, UI)
- **Regole design:**
  - Zero gradienti arancioni
  - Zero bottoni arrotondati colorati
  - CTA solo testo + border-bottom 0.5px
  - Tutti i link esterni: target="_blank" rel="noopener noreferrer"
  - Scroll reveal: progressive enhancement (elementi visibili di default in CSS)

## Link ufficiali
- Email piattaforma: info@weddingmusicravello.com
- Sito Donato (solo per SEO interno): https://www.donatocipriano.com/en/wedding#services
- EvoStrings: https://www.evostrings.it/
- GitHub: github.com/doncip82/sito-wedding
- Deploy: Vercel (auto-deploy su push a `main`)

## Stack tecnico
- Vite + React + Tailwind CSS + React Router v6 (SPA, client-side routing)
- **NON** usa vite-ssg — `main.jsx` monta con `ReactDOM.createRoot`; routing gestito da `BrowserRouter`
- Deploy su Vercel con rewrite `/* → /index.html` (`vercel.json`) per supporto SPA
- `src/data/schema.js` genera Schema.org JSON-LD — contiene `founder` con `sameAs` per SEO invisibile
- `src/components/ui/PageHead.jsx` — Helmet wrapper con `<link rel="author" href="https://www.donatocipriano.com">`
- `src/App.jsx` — routing con `React.lazy` + `Suspense` per code splitting automatico
- `src/routes.js` — documentazione delle route (non consumato dal build, solo riferimento)
- Hero e menu mobile: video background in loop (`public/videos/Sito_Wedding_-_Hero_Loop.mp4`)

## Struttura cartelle (stato attuale)
```
src/
├── components/
│   ├── layout/      NavBar.jsx, Footer.jsx
│   ├── sections/    Hero.jsx, Occasions.jsx, Locations.jsx, About.jsx
│   └── ui/          PageHead.jsx, SectionHeader.jsx, TextLink.jsx, index.js
├── data/            ensembles.js, venues.js, schema.js
├── hooks/           useScrollReveal.js
├── pages/
│   ├── Home.jsx, EvoStrings.jsx, TrilogyTrio.jsx, ViolinSolo.jsx, Contact.jsx
│   ├── music/       MusicIndex.jsx, Saxophone.jsx, DJ.jsx, Vocalist.jsx, Opera.jsx, Posteggia.jsx, Piano.jsx
│   ├── locations/   Positano.jsx, Ravello.jsx, Sorrento.jsx
│   └── occasions/   WeddingCeremony.jsx, MarriageProposal.jsx, BirthdaysAnniversaries.jsx, CorporateEvents.jsx
├── routes.js, App.jsx, main.jsx
└── styles/          globals.css

public/
├── images/
│   ├── EvoStrings/     EvoStrings.jpg
│   ├── Trilogy Trio/   Trilogy Trio.jpg
│   ├── Violin Solo/    immagine_donato.JPG
│   ├── Saxophone/      Sabasax 1.jpg, Sabasax 2.jpg
│   ├── Dj/             Dj Nice.jpeg
│   ├── Vocalist/       Momo Vocalist.jpeg
│   ├── Opera/          Elisabetta Vilni Soprano.jpg
│   ├── Piano Solo/     Angelo Borrelli.png
│   └── Posteggia/      Posteggia.png
└── videos/             Sito_Wedding_-_Hero_Loop.mp4
```

## Struttura Home page (ordine sezioni)
Hero → GeoIntro → ContactStrip → Occasions → Locations → About → Footer

## Sezione About — stato attuale
Manifesto curatoriale della piattaforma. Nessun nome di persona. Foto placeholder (senza caption, senza nome).
- Eyebrow: "Our Philosophy"
- Titolo: "Music Selected With Intention, Not by Chance"
- Nessun link esterno

## Footer — stato attuale
- Nav links: Music · Occasions · Locations · About · Enquire
- Nessun link esterno, nessun riferimento a Donato o EvoStrings

## Venue principali (Our Playground)
Villa Cimbrone · Palazzo Avino · Belmond Hotel Caruso · Villa Treville · Monastero Santa Rosa · Villa Eva

## Decisioni di design approvate
- Card MusicIndex: griglia 2/3/4 colonne, aspect-ratio 4/5, tutte con immagine
  - `object-contain` + bg campionato dall'immagine: EvoStrings (#CECCC9)
  - `object-cover` per tutte le altre card
- Venue rows: layout 3 colonne con hover gold line scaleX
- Sub-label formazioni: colore #8A7A5A, font-weight 300
- Testo corpo su bianco: #404040

### Occasions — sezione homepage + landing pages
- Ensemble suggeriti mostrati come pill buttons orizzontali (`flex-wrap gap-2`)
  - Border `#1A1A1A/18`, testo `#404040`, hover: `border-[#B8A882] text-[#1A1A1A]`
  - Label sopra: `"Suggested for this occasion"` in eyebrow gold `.47rem tracking-[.16em]`
- CTA "Explore this occasion ↗": testo `.48rem`, colore `#8A7A5A`, `border-b` gold, hover → charcoal
- Ogni occasion ha una landing page dedicata sotto `/occasions/`:
  - `/occasions/wedding-ceremony` — 4 momenti (Processional, Ceremony, Cocktail, Reception) in griglia 2×2
  - `/occasions/marriage-proposal` — How It Works + 3 location in griglia 3 col (dark bg)
  - `/occasions/birthdays-anniversaries` — 3 formati (Dinner, Cocktail, Evening Dance)
  - `/occasions/corporate-events` — 3 formati (Private Dinner, Brand Retreat, Product Launch)
- Tutte le landing pages seguono la struttura: Hero dark → Content light → Dark ensemble CTA → Light related links → Dark enquiry CTA

### Hero — copy attuale
- **Tagline (p sopra h1):** "Bespoke Wedding Music · Amalfi Coast"
- **H1:** "Live Wedding Music in / Ravello, Positano & Sorrento"
- **H2 (descrizione):** "A platform for curated live music at destination weddings across the Amalfi Coast — from string quartets at Villa Cimbrone to jazz ensembles at Belmond Hotel Caruso."
- **CTA:** "Explore the Ensembles ↓" → ancora `#music`

> Copy aggiornato (2026-05) con keyword GEO/SEO esplicite: Amalfi Coast, Ravello, Positano, Sorrento, venue specifiche.

### Hero — sistema overlay
Il video ha tre layer sovrapposti:
1. **Filtro SVG gamma** (`exponent: 1.22`) applicato direttamente al `<video>` — abbassa i mezzi toni
2. **Overlay verticale** `linear-gradient(to bottom, rgba(26,26,26,.18) … .62)`
3. **Overlay orizzontale** `linear-gradient(to right, rgba(26,26,26,.48) … transparent)`

### Hero — evidenziazione testo
Ogni blocco testo è avvolto in uno `<span>` con:
```js
{
  background: 'rgba(10,10,10,0.32–0.44)',  // h2 e CTA più scuri
  borderRadius: '4px',
  boxDecorationBreak: 'clone',
  WebkitBoxDecorationBreak: 'clone',
  padding: '0.06–0.18em 0.28–0.5em',
}
```
`box-decoration-break: clone` crea una striscia per ogni riga di testo (non un riquadro unico).

### Menu mobile — NavBar
- Sfondo: stesso video loop dell'hero (`Sito_Wedding_-_Hero_Loop.mp4`)
- Overlay: identici all'hero (gamma SVG + verticale + orizzontale)
- Voci menu: stesso sistema di evidenziazione per riga dell'hero
- Hamburger: forzato bianco (`bg-[#F9F8F7]`) quando `menuOpen === true`

## To Do
- Aggiungere foto reale About (sostituire placeholder `bg-[#1C2030]`)
- Aggiungere YouTube embed ID in src/data/ensembles.js
- Collegare form Contact.jsx a Formspree

## Comandi utili
```
npm run dev      # dev server localhost:5173
npm run build    # build statico /dist
git add . && git commit -m "descrizione" && git push
```
