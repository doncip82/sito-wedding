# Session Log — 2026-07-06

Sessione di ottimizzazione performance + risoluzione problema deploy per **Wedding Music Ravello** (`doncip82/sito-wedding`).

Focus: compressione video hero, scoperta e fix dell'auto-deploy Vercel rotto, ottimizzazione immagini.

---

## 1. Compressione video hero

Il video hero era pesantissimo. Sostituito con una versione compressa.

| | Prima | Dopo |
|---|---|---|
| File | `Ravello Sito Loop DEF.mp4` (master) | `Ravello_Hero.mp4` |
| Peso | 171 MB | **24 MB** (−86%) |
| Parametri | 1920×1080, 60fps, 20 Mbps, con audio | 1920×1080, **24fps**, ~2.7 Mbps, **audio rimosso**, `+faststart` |

- Ricetta ffmpeg: `-an -vf "fps=24,format=yuv420p" -c:v libx264 -profile:v high -preset slow -crf 28 -movflags +faststart`
- Collegato in `Hero.jsx` e `NavBar.jsx` (`/videos/Ravello_Hero.mp4`).
- Rimossi 2 video orfani non più referenziati (`Ravello_Loop.mp4` 94 MB, `Sito_Wedding_-_Hero_Loop.mp4` 19 MB) → −113 MB dal deploy.
- Il master da 171 MB è stato **spostato fuori dal repo** in `~/Desktop/SITO WEDDING - video masters/` (non cancellato, protetto da `git add .` accidentali).

> Nota ambiente: Homebrew su questo Mac è rotto (permessi su `/usr/local`) → ffmpeg installato come **binario statico** da evermeet.cx nella scratchpad, senza toccare il sistema.

---

## 2. ⚠️ Scoperta e fix: auto-deploy Vercel era ROTTO

**Sintomo:** dopo il push del video, il sito live continuava a servire il vecchio video da 94 MB. Un push confermato su GitHub `main` non generava **alcun** deployment Vercel; l'ultimo auto-deploy risaliva a ~62 giorni prima.

**Diagnosi (via API Vercel):**
- Progetto **non** in pausa (una pausa restituisce 503; il sito serviva regolarmente 200).
- Auto-deploy **abilitato** da config (`gitProviderOptions.createDeployments: "enabled"`).
- **Causa vera:** il collegamento Git era **`link.sourceless: true`** — Vercel aveva il *record* del repo (nome, branch, credenziale) ma non era più agganciato alla **GitHub App** che riceve i webhook dei push. Quindi GitHub non avvisava Vercel dei push.
- `vercel git connect` da CLI **non** risolveva (conferma solo il record, risponde "already connected").

**Fix (dashboard, lato utente):** Vercel → progetto `sito-wedding` → Settings → Git → **Disconnect** poi **Connect Git Repository** → riautorizzazione GitHub App sul repo. Dopo l'operazione `link.sourceless` è sparito (nuova credenziale) e un push di test ha auto-deployato (verificato via API: `BUILDING` → `READY`).

**Workaround usato per pubblicare nel frattempo:** deploy manuale via CLI con l'auth già salvata sul Mac —
`npx vercel link --yes --project sito-wedding --scope doncip82s-projects` + `npx vercel deploy --prod --yes`.

> Se l'auto-deploy si rompesse di nuovo allo stesso modo: controllare `link.sourceless` con `GET api.vercel.com/v9/projects/<id>` e rifare Disconnect/Connect dal dashboard.

---

## 3. Ottimizzazione immagini

Le immagini pesavano **58 MB** totali (foto Trilogy Trio da 12 megapixel, PNG usati per contenuti fotografici).

**Ricompressione JPEG** (in place, max 2400px lato lungo, qualità 82, dimensioni preservate dove già web-size):

| Immagine | Prima | Dopo |
|---|---|---|
| Trilogy Trio 3 | 11 MB | 585 KB |
| Trilogy Trio 1 | 9.6 MB | 537 KB |
| Trilogy Trio 2 | 8.9 MB | 564 KB |
| Trilogy Trio 0 | 4.4 MB | 953 KB |
| Trilogy Trio | 2.3 MB | 829 KB |
| Proposal | 2.3 MB | 1.2 MB |
| Opera (Elisabetta) | 2.0 MB | 428 KB |
| Sabasax 2 | 472 KB | 332 KB |

**Conversione PNG → JPEG** (foto salvate in PNG, nessun canale alpha; aggiornati 5 riferimenti in `Occasions.jsx` e `MusicIndex.jsx`): Ceremony, Cocktail, Dinner, Posteggia, Angelo Borrelli — ognuna da ~2 MB a ~0.3–0.5 MB.

**Rimozione immagini orfane** (~6.4 MB, zero riferimenti nel codice, residui dello slideshow EvoStrings sostituito dal video): `EvoStrings 0/2/3`, `Party.png`.

**Risultato: 58 MB → 8.4 MB (~85% in meno)**, senza perdita di qualità visibile (verificato a occhio sulla foto compressa più aggressivamente).

> Attenzione tecnica emersa: `sips -Z <px>` porta il lato lungo *esattamente* a quel valore → **fa upscaling** su immagini già più piccole. Applicare il resize solo se l'immagine supera la soglia.

---

## Commit della sessione (tutti su `main`, auto-deployati)

| Commit | Descrizione |
|---|---|
| `3df9462` | feat(hero): swap hero loop for compressed Ravello video (171MB → 24MB) |
| `8451e54` | chore: gitignore .vercel and .env.local (added by Vercel CLI link) |
| `476902c` | chore: verify Vercel auto-deploy after Git reconnect |
| `734b553` | perf(images): recompress JPEGs + convert PNGs to JPEG (58MB → ~8MB used) |
| `cde55ba` | chore(images): remove unused orphaned images (~6.4MB) |

## Bilancio peso (deploy)

- Video hero: 94 MB → **24 MB**
- Immagini: 58 MB → **8.4 MB**
- Auto-deploy: **ripristinato** (`git push` → live automatico)

---

## Cosa resta (follow-up)

- **`og-cover.jpg` mancante** — l'immagine di anteprima social è assente (gap pre-esistente). Referenziata in `index.html`/`PageHead.jsx` ma non presente in `public/images/`.
- **`Sabasax 1.jpg`** — non usata dal sito (citata solo in `CLAUDE.md`), tenuta come possibile foto per la pagina Saxophone.
- **Nodo strategico SEO/GEO** — il sito è una SPA (Vite + React Router, no SSG): `<title>`, meta e Schema.org JSON-LD vengono iniettati **solo via JavaScript** (`react-helmet-async`). I crawler LLM (GPTBot, ClaudeBot, PerplexityBot) tipicamente non eseguono JS → rischiano di vedere la stessa pagina generica ovunque, in tensione con l'obiettivo GEO dichiarato in `GEO_INSTRUCTIONS.md`. Intervento architetturale (pre-rendering/SSG) da pianificare.
- **`sitemap.xml`** — contiene URL fantasma `/vendors/*` (non più esistenti dopo il repositioning "solo musica") e manca delle route `/occasions/*` reali.
- **Dipendenze morte in `package.json`** — `vite-ssg-react` + polyfill (`buffer`, `events`, `os-browserify`, `stream-browserify`, `util`) non usati da nessuna parte.
