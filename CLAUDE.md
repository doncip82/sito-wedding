# Amalfi Strings — Project Context for Claude

## Chi siamo
Sito web per **Donato Cipriano** — violinista professionista di Pompei, Campania.
Direttore artistico di tre formazioni musicali per matrimoni di lusso sulla Costiera Amalfitana.

## Brand & Identità
- **Nome sito:** Amalfi Strings
- **Tono:** Editorial Luxury — stile Vogue Weddings / Belmond / Mezzatorre
- **Palette:** Off-white `#F9F8F7`, Charcoal `#1A1A1A`, Gold `#B8A882`, Gold scuro `#8A7A5A`, Mid `#404040`
- **Font:** Cormorant Garamond (serif, display) + Montserrat (sans-serif, UI)
- **Regola fondamentale:** zero gradienti arancioni, zero bottoni arrotondati colorati, zero "AI slop"

## Le tre formazioni
1. **EvoStrings** — Ensemble d'archi (Duo, Trio, Quartetto) → `https://www.evostrings.it/`
2. **Trilogy Trio** — Violino, Violoncello, Pianoforte (Pop/Rock/Cinematic) → 1M+ views YouTube `https://www.youtube.com/@trilogytrio`
3. **Violino Solo** — Donato Cipriano in solo → `https://www.donatocipriano.com/en/wedding#services`

## Link ufficiali
- Sito Donato: `https://www.donatocipriano.com/en/wedding#services`
- EvoStrings: `https://www.evostrings.it/`
- Email contatti: `info@donatocipriano.com`

## Stack tecnico
- **Vite + React + Tailwind CSS + vite-ssg** (Static Site Generation)
- Ogni pagina pre-renderizzata in HTML statico per SEO/GEO
- `src/data/ensembles.js` e `src/data/venues.js` sono le fonti di verità uniche
- Schema.org JSON-LD generato programmaticamente da `src/data/schema.js`

## Struttura cartelle
```
src/
├── components/
│   ├── layout/      NavBar.jsx, Footer.jsx
│   ├── sections/    Hero.jsx, Services.jsx, Locations.jsx, About.jsx
│   └── ui/          SectionHeader.jsx, TextLink.jsx
├── data/            ensembles.js, venues.js, schema.js
├── hooks/           useScrollReveal.js
├── pages/           Home.jsx, EvoStrings.jsx, TrilogyTrio.jsx, ViolinSolo.jsx, Contact.jsx
└── styles/          globals.css
```

## Venue principali (Our Playground)
Villa Cimbrone · Palazzo Avino · Belmond Hotel Caruso · Villa Treville ·
Monastero Santa Rosa · Villa Eva — tutte a Ravello o Positano

## Decisioni di design già prese
- Hero: video background in loop (`public/videos/Sito_Wedding_-_Hero_Loop.mp4`)
- Card servizi: griglia 3 colonne, aspect-ratio 4/5 per le foto
- Venue rows: layout a 3 colonne (numero, testo, thumbnail), hover con gold line `scaleX`
- Scroll reveal: progressive enhancement — elementi visibili di default in CSS, JS li anima solo se IntersectionObserver disponibile (fix per Safari su file://)
- CTA: solo testo + `border-bottom: 0.5px` — zero bottoni colorati
- Tutti i link esterni: `target="_blank" rel="noopener noreferrer"`

## Sezione About — testo approvato
Donato ha suonato a Londra, Berlino e Parigi collaborando con direttori artistici di fama internazionale.
Il testo completo è in `src/components/sections/About.jsx`.

## Cose ancora da fare
- [ ] Sostituire i div placeholder con foto reali WebP in `public/images/`
- [ ] Aggiungere YouTube embed ID in `src/data/ensembles.js` (campo `youtubeUrl`)
- [ ] Collegare form Contact.jsx a Formspree (campo `YOUR_FORM_ID`)
- [ ] Aggiungere meta tag Open Graph per ogni pagina
- [ ] Deploy su Vercel o Netlify

## Comandi utili
```bash
npm run dev      # dev server → localhost:5173
npm run build    # build statico → /dist
npm run preview  # preview del build
```
