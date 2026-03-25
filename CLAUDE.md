# SITO WEDDING — Project Context for Claude

## Chi siamo
Sito web per **Donato Cipriano** — violinista professionista di Pompei, Campania.
Direttore artistico di formazioni musicali per matrimoni di lusso sulla Costiera Amalfitana.

## IMPORTANTE — Scope del progetto
Il sito non è limitato agli archi. Donato coordina **più categorie di musicisti**:
- Ensemble d'archi (EvoStrings)
- Trio classico/cinematic (Trilogy Trio)
- Violino solo
- Sassofonisti
- Cantanti
- DJ
- Altri strumentisti

Il brand è **Donato Cipriano** come direttore artistico e curatore musicale — non un singolo ensemble.

## Brand & Identità
- **Nome progetto:** SITO WEDDING (repository: `doncip82/sito-wedding`)
- **Tono:** Editorial Luxury — stile Vogue Weddings / Belmond / Mezzatorre
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

## Le tre formazioni principali (presenti nel sito attuale)
1. **EvoStrings** — Ensemble d'archi (Duo, Trio, Quartetto) → https://www.evostrings.it/
2. **Trilogy Trio** — Violino, Violoncello, Pianoforte (Pop/Rock/Cinematic) → 1M+ views YouTube https://www.youtube.com/@trilogytrio
3. **Violino Solo** — Donato Cipriano in solo → https://www.donatocipriano.com/en/wedding#services

## Link ufficiali
- Sito Donato: https://www.donatocipriano.com/en/wedding#services
- EvoStrings: https://www.evostrings.it/
- Email: info@donatocipriano.com
- GitHub: github.com/doncip82/sito-wedding

## Stack tecnico
- Vite + React + Tailwind CSS + vite-ssg (Static Site Generation)
- Ogni pagina pre-renderizzata in HTML statico per SEO/GEO
- src/data/ensembles.js e src/data/venues.js sono le fonti di verità uniche
- Schema.org JSON-LD generato programmaticamente da src/data/schema.js
- Hero: video background in loop (public/videos/Sito_Wedding_-_Hero_Loop.mp4)

## Struttura cartelle
src/
├── components/
│   ├── layout/      NavBar.jsx, Footer.jsx
│   ├── sections/    Hero.jsx, Services.jsx, Locations.jsx, About.jsx
│   └── ui/          SectionHeader.jsx, TextLink.jsx, index.js
├── data/            ensembles.js, venues.js, schema.js
├── hooks/           useScrollReveal.js
├── pages/           Home.jsx, EvoStrings.jsx, TrilogyTrio.jsx, ViolinSolo.jsx, Contact.jsx
├── routes.js, App.jsx, main.jsx
└── styles/          globals.css

## Venue principali (Our Playground)
Villa Cimbrone · Palazzo Avino · Belmond Hotel Caruso · Villa Treville · Monastero Santa Rosa · Villa Eva

## Decisioni di design approvate
- Sezioni: Hero → Services → Contact Strip → Occasions → Locations → About → Footer
- Card servizi: griglia 3 colonne, aspect-ratio 4/5
- Venue rows: layout 3 colonne con hover gold line scaleX
- Viral badge Trilogy Trio: colore #6B5C3A, font-weight 500
- Sub-label formazioni: colore #8A7A5A, font-weight 300
- Testo corpo su bianco: #404040

## Sezione About — testo approvato
Donato ha suonato a Londra, Berlino e Parigi collaborando con direttori artistici di fama internazionale.

## To Do
- Sostituire div placeholder con foto reali WebP in public/images/
- Aggiungere YouTube embed ID in src/data/ensembles.js
- Collegare form Contact.jsx a Formspree
- Espandere il sito per includere sassofonisti, cantanti, DJ
- Deploy su Vercel o Netlify

## Comandi utili
npm run dev      # dev server localhost:5173
npm run build    # build statico /dist
git add . && git commit -m "descrizione" && git push
