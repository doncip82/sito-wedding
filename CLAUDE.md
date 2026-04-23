# SITO WEDDING — Project Context for Claude

## Posizionamento del sito
**Wedding Music Ravello** è una piattaforma curatoriale luxury per fornitori selezionati per matrimoni ed eventi esclusivi in Costiera Amalfitana.

**NON è** il portfolio personale di Donato Cipriano.
**È** una piattaforma indipendente che propone partner musicali e non, accuratamente selezionati.

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
- Sassofonisti
- Cantanti / Vocalist
- DJ

### Altri fornitori
- Fotografi
- Wedding Planners
- Vintage Cars
- Fioristi
- Celebranti
- Noleggio barche

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
- Email piattaforma: info@donatocipriano.com (unica email funzionante al momento)
- Sito Donato (solo per SEO interno): https://www.donatocipriano.com/en/wedding#services
- EvoStrings: https://www.evostrings.it/
- GitHub: github.com/doncip82/sito-wedding
- Deploy: Vercel (auto-deploy su push a `main`)

## Stack tecnico
- Vite + React + Tailwind CSS + vite-ssg (Static Site Generation)
- Ogni pagina pre-renderizzata in HTML statico per SEO/GEO
- `src/data/ensembles.js` è la fonte di verità per le card musica
- `src/data/schema.js` genera Schema.org JSON-LD — contiene `founder` con `sameAs` per SEO invisibile
- `src/components/ui/PageHead.jsx` — Helmet wrapper con `<link rel="author" href="https://www.donatocipriano.com">`
- Hero: video background in loop (`public/videos/Sito_Wedding_-_Hero_Loop.mp4`)

## Struttura cartelle (stato attuale)
```
src/
├── components/
│   ├── layout/      NavBar.jsx, Footer.jsx
│   ├── sections/    Hero.jsx, Services.jsx, Occasions.jsx, Locations.jsx, About.jsx
│   └── ui/          PageHead.jsx, SectionHeader.jsx, TextLink.jsx, index.js
├── data/            ensembles.js, venues.js, schema.js
├── hooks/           useScrollReveal.js
├── pages/
│   ├── Home.jsx, EvoStrings.jsx, TrilogyTrio.jsx, ViolinSolo.jsx, Contact.jsx
│   ├── music/       MusicIndex.jsx, Saxophone.jsx, DJ.jsx, Vocalist.jsx, Opera.jsx, Posteggia.jsx
│   ├── locations/   Positano.jsx, Ravello.jsx, Sorrento.jsx
│   └── vendors/     Photographers.jsx, WeddingPlanners.jsx, VintageCars.jsx, Florists.jsx, Celebrant.jsx
├── routes.js, App.jsx, main.jsx
└── styles/          globals.css

public/
├── images/
│   ├── EvoStrings/     EvoStrings.jpg
│   ├── Trilogy Trio/   Trilogy Trio.jpg
│   ├── Violin Solo/    immagine_donato.JPG
│   └── Saxophone/      Sabasax 1.jpg, Sabasax 2.jpg
└── videos/             Sito_Wedding_-_Hero_Loop.mp4
```

## Struttura Home page (ordine sezioni)
Hero → GeoIntro → Services → ContactStrip → Occasions → Locations → About → Footer

## Sezione About — stato attuale
Manifesto curatoriale della piattaforma. Nessun nome di persona. Foto placeholder (senza caption, senza nome).
- Eyebrow: "Our Philosophy"
- Titolo: "Music Selected With Intention, Not by Chance"
- Nessun link esterno

## Footer — stato attuale
- Nav principale: Occasions · Locations · About · Enquire
- Colonna Partners: Music · Photographers · Wedding Planners · Vintage Cars · Florists · Celebrants · Boat Rental
- Nessun link esterno, nessun riferimento a Donato o EvoStrings

## Venue principali (Our Playground)
Villa Cimbrone · Palazzo Avino · Belmond Hotel Caruso · Villa Treville · Monastero Santa Rosa · Villa Eva

## Decisioni di design approvate
- Card servizi: griglia 3 colonne, aspect-ratio 4/5, object-contain per loghi ensemble
- Venue rows: layout 3 colonne con hover gold line scaleX
- Viral badge Trilogy Trio: colore #6B5C3A, font-weight 500
- Sub-label formazioni: colore #8A7A5A, font-weight 300
- Testo corpo su bianco: #404040

## To Do
- Aggiungere foto reale About (sostituire placeholder `bg-[#1C2030]`)
- Aggiungere YouTube embed ID in src/data/ensembles.js
- Collegare form Contact.jsx a Formspree
- Creare pagina vendors/boat-rental
- Aggiungere email piattaforma dedicata (sostituire info@donatocipriano.com)

## Comandi utili
```
npm run dev      # dev server localhost:5173
npm run build    # build statico /dist
git add . && git commit -m "descrizione" && git push
```
