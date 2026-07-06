# Piano — Migrazione completa SSG (vite-react-ssg)

**Branch:** `feature/ssg-prerendering-spike` (si continua qui — NO merge senza conferma).
**Obiettivo:** ogni rotta deve avere, nell'HTML statico (senza JS): `title`, `description`, `canonical`, contenuto visibile e JSON-LD.
**Base:** lo spike su `/locations/ravello` ha già validato l'approccio.

---

## 1. Pagine da convertire da `<Helmet>` a `<Head>` (14)

Cambio meccanico: `import { Helmet } from 'react-helmet-async'` → `import { Head } from 'vite-react-ssg'`, e `<Helmet>…</Helmet>` → `<Head>…</Head>` (contenuto interno invariato).

1. `src/pages/Home.jsx`
2. `src/pages/locations/Positano.jsx`
3. `src/pages/locations/Sorrento.jsx`
4. `src/pages/music/MusicIndex.jsx`  *(vedi lacune)*
5. `src/pages/music/DJ.jsx`
6. `src/pages/music/Opera.jsx`
7. `src/pages/music/Piano.jsx`
8. `src/pages/music/Posteggia.jsx`
9. `src/pages/music/Saxophone.jsx`
10. `src/pages/music/Vocalist.jsx`
11. `src/pages/occasions/WeddingCeremony.jsx`
12. `src/pages/occasions/MarriageProposal.jsx`
13. `src/pages/occasions/BirthdaysAnniversaries.jsx`
14. `src/pages/occasions/CorporateEvents.jsx`

> `src/pages/locations/Ravello.jsx` — **già convertita** nello spike. ✅

## 2. Pagine "imperative" da sistemare (4)

Oggi impostano titolo/meta/schema via `document.*` dentro `useEffect` → NON pre-renderizzate. Vanno riscritte allo stesso schema dichiarativo `<Head>`.

1. `src/pages/EvoStrings.jsx`
2. `src/pages/TrilogyTrio.jsx`
3. `src/pages/ViolinSolo.jsx`
4. `src/pages/Contact.jsx`

## Lacune da completare (regola "tutti gli elementi presenti")

Non è refactor editoriale: è metadata SEO mancante da aggiungere durante la conversione.
- **canonical mancante** → aggiungere su: `EvoStrings`, `TrilogyTrio`, `ViolinSolo`, `Contact`, `MusicIndex` (5).
- **JSON-LD mancante** → aggiungere su: `MusicIndex` (es. `CollectionPage`/`ItemList` delle formazioni), `Contact` (es. `ContactPage` o riuso `LocalBusiness`) (2).

## 3. Rotte da pre-renderizzare (tutte, 19)

`/` · `/evostrings` · `/trilogy-trio` · `/violin-solo` · `/contact` · `/locations/ravello` · `/locations/positano` · `/locations/sorrento` · `/music` · `/music/saxophone` · `/music/dj` · `/music/vocalist` · `/music/posteggia` · `/music/opera` · `/music/piano` · `/occasions/wedding-ceremony` · `/occasions/marriage-proposal` · `/occasions/birthdays-anniversaries` · `/occasions/corporate-events`

→ In `vite.config.js` si **rimuove** il filtro `includedRoutes` dello spike (di default vite-react-ssg pre-renderizza tutte le rotte).

## 4. File che saranno modificati

- I 18 file pagina (14 + 4) sopra.
- `src/data/schema.js` — aggiunta schema per `MusicIndex` e `Contact` (nuovi export, nessuna modifica agli esistenti).
- `vite.config.js` — rimozione filtro `includedRoutes`.
- `index.html` — vedi §5.
- `vercel.json` — vedi §6 (già fatto nello spike).
- `public/sitemap.xml` — vedi §7.
- *(già fatti nello spike, restano):* `src/main.jsx`, `src/App.jsx`, `package.json`, `.gitignore`.
- **Non si tocca:** `PageHead.jsx` (resta codice morto; rimozione rimandata per non fare refactor non necessari), contenuti editoriali delle pagine.

## 5. Modifiche a `index.html`

Rimuovere i meta **default hardcoded** (oggi duplicano quelli iniettati da `<Head>`): `<title>`, `<meta name="description">`, i blocchi `og:*` e `twitter:*`, e `<link rel="canonical">`.
Mantenere: `charset`, `viewport`, preconnect+stylesheet dei font, `<div id="root">`, lo script del modulo.
Opzionale (dall'audit SEO): aggiungere qui `<link rel="author" href="https://www.donatocipriano.com">` così compare su tutte le pagine.

## 6. Modifiche a `vercel.json`

Già applicate nello spike e validate: `"cleanUrls": true` + rewrite SPA come **fallback** per eventuali path senza file statico. Nessun'altra modifica prevista.

## 7. Modifiche a `sitemap.xml`

Riscrivere `public/sitemap.xml` allineandolo alle 19 rotte reali:
- **Rimuovere** i 5 URL fantasma `/vendors/*` (fotografi, fioristi, vintage-cars, wedding-planners, celebrant).
- **Aggiungere** i mancanti: `/music`, `/music/piano`, `/occasions/wedding-ceremony`, `/occasions/marriage-proposal`, `/occasions/birthdays-anniversaries`, `/occasions/corporate-events`.

## 8. Rischi residui

- 🟡 **Ripetitività su 18 pagine** → rischio di dimenticarne una. Mitigazione: check automatico pagina-per-pagina (§9) che fallisce se un elemento manca.
- 🟡 **Routing Vercel su 19 pagine statiche** — validato su Ravello nello spike; da riconfermare su tutte in preview.
- 🟡 **Hydration**: contenuto statico + React che "riattacca" gli eventi. Per contenuti statici il rischio è basso; si verifica che navigazione/menu/form funzionino dopo il caricamento.
- 🟢 **Nessun codice browser in fase di render** (verificato) → niente crash SSG.
- 🟢 **Produzione intatta** per tutta la durata (si lavora su branch).

## 9. Checklist di test — pagina per pagina (sulla preview)

Per **ognuna delle 19 rotte**, nel *sorgente statico* (Visualizza sorgente / `curl`), deve risultare presente:
- [ ] `<title>` specifico della pagina
- [ ] `<meta name="description">` specifica
- [ ] `<link rel="canonical">` con l'URL corretto della pagina
- [ ] JSON-LD (`ld+json`) con lo schema della pagina
- [ ] testo reale visibile (una frase-sonda per pagina, es. Ravello → "350 metres")
- [ ] nessun tag duplicato (un solo `<title>`, un solo canonical)

Più, in browser:
- [ ] la pagina si carica e la navigazione tra menu funziona
- [ ] il form Contact è cliccabile/inviabile dopo il caricamento
- [ ] le immagini e il video hero si vedono

> Fornirò uno script che esegue automaticamente i controlli del sorgente su tutte le 19 rotte e segnala eventuali mancanze.

## 10. Strategia di rollback

Tre livelli, dal più leggero:
1. **Pre-merge:** finché non si fa il merge, `main` e la produzione restano il sito attuale. Si scarta tutto abbandonando il branch.
2. **Post-merge, lato Vercel:** "Instant Rollback" dal dashboard → torna al deployment precedente in secondi.
3. **Post-merge, lato Git:** `git revert` del commit di merge + push → ripubblica lo stato precedente.

Nessun file viene cancellato in modo distruttivo; `sitemap.xml` e `index.html` sono modifiche versionate e reversibili.

---

## Sequenza operativa proposta (dopo approvazione)

1. Conversione `Helmet`→`Head` sulle 14 + riscrittura delle 4 imperative + aggiunta canonical/JSON-LD mancanti.
2. Pulizia `index.html`, `vite.config.js` (tutte le rotte), `sitemap.xml`.
3. Build locale → check automatico sulle 19 pagine.
4. Push branch → preview Vercel → checklist §9.
5. Report + **tua conferma** → solo allora merge in `main`.
