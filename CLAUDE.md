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
- Deploy: Vercel (auto-deploy su push a `main`; si era scollegato ed è stato ripristinato il 2026-07-06 — link Git era "sourceless")

## Documentazione di lavoro
- `docs/superpowers/plans/` — piani (incl. `2026-07-06-ssg-migration.md`)
- `docs/2026-07-06-session-log.md` — registro lavori (compressione video, fix auto-deploy, ottimizzazione immagini)

## Stack tecnico
- Vite + React + Tailwind CSS + React Router v6
- **SSG (dal 2026-07-06):** il sito è pre-renderizzato staticamente con **`vite-react-ssg`** — NON è più una SPA client-only. Ogni route diventa un HTML statico con title, meta, canonical, contenuto e JSON-LD già nel sorgente (fondamentale per SEO/GEO).
  - `src/main.jsx` esporta `createRoot = ViteReactSSG({ routes })`
  - `src/App.jsx` — le route sono un array "data router" con un `Layout` (`<Outlet/>`); Home e Ravello eager, resto `React.lazy`
  - Build: **`vite-react-ssg build`** (in `package.json`); tutte le 19 route pre-renderizzate
  - **Head per-pagina:** ogni pagina usa il componente **`<Head>` di `vite-react-ssg`** — NON `react-helmet-async`, NON `document.title` imperativo (non verrebbero pre-renderizzati). Ogni pagina deve avere title, description, `<link rel="canonical">` e JSON-LD dentro `<Head>`.
- Deploy su Vercel. `vercel.json` = `cleanUrls: true` + rewrite di fallback; Vercel serve prima l'HTML statico per-route (verificato). Mount id in `index.html` = **`root`**.
- `src/data/schema.js` — schema base (home/LocalBusiness+MusicGroup, con `founder.sameAs` per SEO invisibile) + helper; molte pagine definiscono lo schema **inline** per-pagina.
- `index.html` — niente title/meta di default (li inietta `<Head>`); contiene `<link rel="author" href="https://www.donatocipriano.com">` (autorità SEO invisibile verso Donato) + il set completo di link favicon (path assoluti).
- **Favicon / marchio (dal 2026-07-10):** il marchio del sito è un **monogramma a fedi intrecciate** — due anelli oro `#C6B58C` su charcoal `#1A1A1A`, motivo "wedding", leggibile fino a 16px e nitido nel cerchio dei risultati Google. Set in `public/`: `favicon.ico` (multi-size 16/32/48), `favicon-16x16.png`, `favicon-32x32.png`, `favicon.png` (512), `apple-touch-icon.png` (180), `android-chrome-192x192.png`, `site.webmanifest` (name = "Wedding Music Ravello"). *Sostituisce il vecchio marchio testuale "WMR".* Motivo del rifacimento: dopo un redirect temporaneo verso donatocipriano.com, Google mostrava ancora la favicon del sito personale + mancavano `/favicon.ico` e alcuni file (404).
- **Immagine social ≠ favicon:** l'anteprima WhatsApp/social è `public/images/og-cover.jpg` (1200×630) servita via `og:image`/`twitter:image` per-pagina — file **separato** dalla favicon. Cambiare la favicon NON la tocca (verificato). Non sovrascriverla per errore.
- Hero e menu mobile: video background in loop (`public/videos/Ravello_Hero.mp4`, ~23MB). **Il video del menu mobile si monta solo alla prima apertura del menu** (stato `menuVideo` in `NavBar.jsx`): prima era sempre nel DOM con `preload="auto"` e ogni pagina scaricava 23MB. Tutti i video hero hanno un `poster` in `public/videos/posters/` (primo fotogramma; per il DJ il fotogramma a 2s, perché il video parte da nero).
- ⚠️ **Codice morto:** `src/components/ui/PageHead.jsx` e `src/routes.js` non sono più usati — da rimuovere quando conviene.

## Struttura cartelle (stato attuale)
```
src/
├── components/
│   ├── layout/      NavBar.jsx, Footer.jsx
│   ├── sections/    Hero.jsx, Occasions.jsx, Locations.jsx, About.jsx
│   ├── privacy/     CookieConsent.jsx
│   └── ui/          EnquiryLinks.jsx, PageHead.jsx, SectionHeader.jsx, TextLink.jsx, index.js
├── data/            ensembles.js, venues.js, schema.js
├── hooks/           useScrollReveal.js
├── lib/             googleTag.js, consent.js, enquirySuccess.js, conversions.js, contactTracking.js,
│                    contactLinks.js, enquiry.js, attribution.js   (+ *.test.js, vitest)
├── pages/
│   ├── Home.jsx, EvoStrings.jsx, TrilogyTrio.jsx, ViolinSolo.jsx, Contact.jsx, FAQ.jsx, Privacy.jsx
│   ├── music/       MusicIndex.jsx, Saxophone.jsx, DJ.jsx, Vocalist.jsx, Opera.jsx, Posteggia.jsx, Piano.jsx
│   ├── locations/   Positano.jsx, Ravello.jsx, Sorrento.jsx
│   └── occasions/   WeddingCeremony.jsx, MarriageProposal.jsx, BirthdaysAnniversaries.jsx, CorporateEvents.jsx
├── routes.js, App.jsx, main.jsx
└── styles/          globals.css

api/                 enquiry.js   (Vercel Serverless Function — invia il form Contact via Resend)

public/
├── images/
│   ├── ravello-villa-rufolo.jpg   (About — vista Villa Rufolo, link a /locations/ravello)
│   ├── og-cover.jpg               (anteprima social/WhatsApp 1200×630 — og:image, NON è la favicon)
│   ├── Ceremony.jpg, Cocktail.jpg, Dinner.jpg   (Occasions — erano PNG, convertiti in JPG)
│   ├── EvoStrings/     EvoStrings.jpg
│   ├── Trilogy Trio/   Trilogy Trio 0-3 + Trilogy Trio.jpg
│   ├── Violin Solo/    immagine_donato.JPG
│   ├── Saxophone/      Sabasax 2.jpg  (Sabasax 1 non usato)
│   ├── Dj/             Dj Nice.jpeg
│   ├── Vocalist/       Momo Vocalist.jpeg
│   ├── Opera/          Elisabetta Vilni Soprano.jpg
│   ├── Piano Solo/     Angelo Borrelli.jpg
│   └── Posteggia/      Posteggia.jpg
├── videos/             Ravello_Hero.mp4 (hero + menu mobile), dj-hero.mp4 (pagina DJ), opera-hero.mp4
│   └── posters/        ravello-hero.jpg, evostrings-hero.jpg, dj-hero.jpg, opera-hero.jpg
└── (root)              favicon.ico, favicon-16x16.png, favicon-32x32.png, favicon.png (512),
                        apple-touch-icon.png, android-chrome-192x192.png, site.webmanifest   (marchio: fedi intrecciate)
```
> Immagini ottimizzate il 2026-07-06 (58MB → ~8MB). `og-cover.jpg` (1200×630, anteprima social/WhatsApp) è **presente** e servita via `og:image`.
> **Video usati dal sito:** solo `Ravello_Hero.mp4`, `dj-hero.mp4`, `EvoStrings/EvoStrings_Hero.mp4`. Eventuali altri video (sorgente grezzo/di lavoro non referenziato nel codice) vanno **in `.gitignore`**, non committati — GitHub blocca i file >100MB. Al 2026-07-14 due sorgenti locali sono ignorati: `Salone Margherita Sito Ravello DEF.mp4` e `NICE Video.MP4`.

## Struttura Home page (ordine sezioni)
Hero → GeoIntro → ContactStrip → Occasions → Locations → About → Footer

## Sezione About — stato attuale
Manifesto curatoriale della piattaforma. Nessun nome di persona.
- Eyebrow: "Our Philosophy"
- Titolo: "Music Selected With Intention, Not by Chance"
- **Immagine (dal 2026-07-06):** veduta di Villa Rufolo (Ravello) — `public/images/ravello-villa-rufolo.jpg`, aspect-ratio 3/4, **cliccabile → link interno a `/locations/ravello`** (lieve zoom hover), alt SEO. Sostituisce il vecchio placeholder blu.
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
- **CTA (dal 2026-10-11):** "Begin Your Enquiry" → `/contact` + "WhatsApp" (icona monocromatica `WhatsAppIcon.jsx` + testo, `wa.me`) sulla prima schermata; sotto, link secondario "Explore the Ensembles ↓" → `/music`
- **Altezza:** titolo, padding e spaziature scalano anche con l'altezza (`svh`) e la fascia delle località si nasconde sotto i 700px di altezza, così le CTA restano nella prima schermata anche su laptop bassi (~650px) e telefoni piccoli (verificato 360×640 → 1920×1000).

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
- Sfondo: stesso video loop dell'hero (`Ravello_Hero.mp4`)
- Overlay: identici all'hero (gamma SVG + verticale + orizzontale)
- Voci menu: stesso sistema di evidenziazione per riga dell'hero
- Hamburger: forzato bianco (`bg-[#F9F8F7]`) quando `menuOpen === true`

## Tracciamento conversioni (Google Ads — account `AW-18311455806`)
- **Tag:** `VITE_GOOGLE_TAG_ID` su Vercel, **solo Production** (la copia per le anteprime è stata rimossa l'11/10/2026). Mai usare ID o etichette dell'account di donatocipriano.com (`AW-1003501184`).
- **Account Ads:** `477-419-9225` (Wedding Music Ravello). Obiettivo "Contatti" impostato come predefinito per l'account (serve perché Email/WhatsApp click contino).
- **Etichette nel codice, non in env:** `src/lib/conversions.js`, sotto test (`conversions.test.js` verifica che ogni etichetta decodifichi nell'ID account 18311455806). Etichetta vuota = canale spento, nessuna richiesta.

| Canale | Chiave in `conversions.js` | Azione in Google Ads | Quando parte |
|---|---|---|---|
| Form | `enquiry` | Enquiry form (Invio modulo per i lead) | dopo `res.ok` di `POST /api/enquiry`, una volta (`src/lib/enquiry.js`) |
| Email | `email` | Email click (Contatto) | click su `mailto:` |
| WhatsApp | `whatsapp` | WhatsApp click (Contatto) | click su `wa.me` / `api.whatsapp.com` |
| Telefono | `phone` | — (nessun link `tel:` sul sito) | click su `tel:` |

- **Click di contatto:** un solo listener delegato su `document` in fase di cattura (`src/lib/contactTracking.js`), installato da `initGoogleTag()`. **Niente `onClick` sui singoli link.** I link della pagina `/privacy` sono esclusi.
- **Consenso:** le conversioni partono per tutti; Consent Mode v2 (avanzato, default `denied` ovunque — scelta confermata, niente default per regione) le trasforma in ping senza cookie se manca il consenso. `ads_data_redaction` e `url_passthrough` impostati con `set` prima di `config`. La pagina Privacy lo descrive.
- **`/thank-you`:** ci arrivano tutti dopo un invio riuscito (non dipende più dal consenso); non è più la conversione. In Ads l'azione basata sull'URL `/thank-you` va tenuta **Secondaria**.
- **Provenienza:** `src/lib/attribution.js` salva in sessionStorage pagina d'ingresso, referrer, `utm_source/campaign/term` e se c'era un click Ads (solo presenza del gclid, mai il valore); arrivano nell'email di ogni richiesta (sezione "Source").
- **WhatsApp:** numero della piattaforma `+39 393 213 0911` (WhatsApp Business "Wedding Music Ravello"), in `src/lib/contactLinks.js` con messaggi precompilati in inglese per pagina. CTA via `src/components/ui/EnquiryLinks.jsx` (hero delle landing + CTA finali).
- **Verifica:** `npm test`; dopo il deploy prova reale da **Chrome desktop** (DevTools → Network → `googleadservices`). Mai cliccare i propri annunci.

## To Do / Follow-up aperti
- **Google Ads dopo il deploy delle etichette (inserite l'11/10/2026):** mettere Secondaria l'azione URL `/thank-you` (e le altre vecchie azioni "Invio modulo per i lead" dell'account 477-419-9225); controllare che le 3 azioni escano da "In attesa di conversioni".
- Rifiniture editoriali: uniformare "365 m" (Home) vs "350 m" (Ravello); togliere il doppio `<h1>` in Home
- Pulizia: rimuovere dipendenze morte (`vite-ssg-react` + polyfill in `package.json`) e i file inutilizzati `PageHead.jsx` / `routes.js`
- **Favicon su Google:** dopo il deploy delle fedi, chiedere reindicizzazione della home in Search Console ("Controllo URL" → "Richiedi indicizzazione") per far aggiornare la favicon nei risultati (Google ci mette da giorni a settimane).
- **Fatti ✓ (2026-07-06):** migrazione SSG (tutte le 19 route pre-renderizzate), foto About, compressione video (171→24MB) e immagini (58→8MB), auto-deploy ripristinato
- **Fatti ✓ (2026-07-10):** rifatta favicon → **marchio a fedi intrecciate** (era "WMR"); set completo `favicon.ico`/16/32/512/apple-touch/android-chrome/`site.webmanifest` con path assoluti (risolto il problema della favicon donatocipriano.com in cache su Google + i 404 su `/favicon.ico`); `og-cover.jpg` (anteprima social/WhatsApp) lasciata intatta.
- **Fatti ✓ (2026-10-11):** dominio `weddingmusicravello.com` verificato in Resend e consegna confermata (il fallback di `MAIL_FROM` nel codice è `info@weddingmusicravello.com`, non `onboarding@resend.dev`: il vecchio commento era sbagliato); conversioni Ads esplicite + WhatsApp + campo telefono + provenienza nelle email + CTA nelle hero; video del menu non più scaricato su ogni pagina.
- **Fatti ✓:** form Contact collegato a backend reale (`api/enquiry.js`, Vercel Serverless + Resend); aggiunte pagine `FAQ.jsx` e `Privacy.jsx`.

## Comandi utili
```
npm run dev      # dev server localhost:5173
npm run build    # build statico /dist
npm test         # test (vitest)
git add . && git commit -m "descrizione" && git push
```
