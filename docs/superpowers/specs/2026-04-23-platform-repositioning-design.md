# Design Spec — Platform Repositioning
**Date:** 2026-04-23
**Approach:** Approccio 2 — Riscrittura testi + About ripensata

---

## Obiettivo

Trasformare il sito da portfolio personale di Donato Cipriano a **piattaforma curatoriale luxury** per fornitori selezionati (musica, fotografi, planner, vintage cars, ecc.) per matrimoni ed eventi esclusivi in Costiera Amalfitana.

Donato Cipriano rimane presente **solo** come artista (violinista solista) — non come fondatore, direttore artistico o coordinatore.

Il sito deve trasferire autorità SEO a `donatocipriano.com` tramite Schema.org e meta tag (invisibile all'utente).

---

## File da modificare

| File | Tipo di modifica |
|------|-----------------|
| `src/components/sections/About.jsx` | Riscrittura completa |
| `src/components/layout/Footer.jsx` | Rimozione partner section + aggiunta Partners nav |
| `src/data/ensembles.js` | Rimozione attributi personali, fix photoAlt |
| `src/pages/ViolinSolo.jsx` | CTA + link → form interno |
| `src/data/schema.js` | Aggiunta founder + sameAs invisibile |

---

## 1 — About.jsx

### Cosa cambia
- Sezione trasformata in **manifesto curatoriale**
- Foto di Donato rimane come elemento visivo — **senza nome, senza caption**
- Link a donatocipriano.com rimosso
- Eyebrow cambia da "Artistic Direction" a "Our Philosophy"
- Titolo cambia da "Every Note Begins with a Name" a "Music Selected With Intention, Not by Chance"

### Testo approvato

**Eyebrow:** `Our Philosophy`

**Titolo:** `Music Selected With Intention, Not by Chance`

**Body:**
```
Wedding Music Ravello is a curated selection of live music for destination
weddings and exclusive events on the Amalfi Coast.

Every artist and ensemble in our network has been personally evaluated for
their ability to perform at the highest level — in the acoustics of clifftop
terraces, within historic villas, across the open-air venues of a coast that
demands as much from its music as it does from everything else.

We do not list. We curate. Every recommendation we make carries our name,
and our standard is non-negotiable.

From ceremony to cocktail hour, from the dinner score to the final dance —
we match each moment of your celebration to the right sound, the right
formation, the right artist.
```

**CTA:** rimossa completamente

**Colonna destra:** foto rimane (placeholder o immagine reale), nessun nome, nessuna caption sotto.

---

## 2 — Footer.jsx

### Cosa cambia
- La colonna "Partners" (attualmente "An artistic project by / Donato Cipriano · EvoStrings.it") viene **rimossa**
- Aggiunta nuova colonna "Partners" con link interni alle categorie
- Music si sposta dalla nav principale alla colonna Partners

### Struttura footer

**Nav principale:** Occasions · Locations · About · Enquire

**Colonna Partners:**
```
Partners
────────
Music          → /#services
Photographers  → /vendors/photographers
Wedding Planners → /vendors/wedding-planners
Vintage Cars   → /vendors/vintage-cars
Florists       → /vendors/florists
Celebrants     → /vendors/celebrants
```

**Legal:** `© 2026 Wedding Music Ravello. All rights reserved. · Ravello, Campania, Italy`

---

## 3 — ensembles.js

### EvoStrings
- **Rimuovere:** `"Founded and directed by Donato Cipriano, EvoStrings has become a reference point..."`
- **Sostituire con:** `"A reference point in Italy's luxury wedding scene, EvoStrings adapts seamlessly..."`
- **photoAlt:** rimuovere `"by Donato Cipriano"` → `"EvoStrings string ensemble at Villa Cimbrone, Ravello"`

### Trilogy Trio
- **Rimuovere:** `"under the artistic direction of Donato Cipriano —"`
- **Frase risultante:** `"The Trilogy Trio — violin, cello and piano — occupies the rare territory..."`
- **photoAlt:** rimuovere `"by Donato Cipriano"` → `"Trilogy Trio — Violin, Cello and Piano, Amalfi Coast wedding"`

### Violino Solo
- Nessuna modifica al description (Donato è l'artista di questa pagina — corretto nominarlo)

---

## 4 — ViolinSolo.jsx

### Cosa cambia
- **CTA finale:** `"Book Donato Cipriano for Your Ceremony"` → `"Enquire About This Performance"`
- **Link email:** `mailto:info@donatocipriano.com` → `/#contact`
- Donato rimane nominato come artista in tutta la pagina (eyebrow, titoli, copy) — è la sua pagina dedicata

---

## 5 — schema.js (SEO invisibile)

### Obiettivo
Trasferire autorità SEO a `donatocipriano.com` tramite Schema.org JSON-LD senza alcun elemento visibile.

### Modifica Organization schema
Aggiungere al nodo `Organization`:
```json
"founder": {
  "@type": "Person",
  "name": "Donato Cipriano",
  "url": "https://www.donatocipriano.com",
  "sameAs": [
    "https://www.donatocipriano.com",
    "https://www.donatocipriano.com/en/wedding"
  ]
}
```

### Meta tag `<link rel="author">`
In `PageHead.jsx` o equivalente, aggiungere nel `<head>`:
```html
<link rel="author" href="https://www.donatocipriano.com" />
```

Entrambe le tecniche sono crawlate da Google e riconosciute come segnale di autorità — invisibili all'utente finale.

---

## Cosa NON cambia

- Struttura del sito, routing, componenti
- Testi Hero (già neutri e platform-friendly)
- Sezione Services (struttura card)
- Pagine EvoStrings, TrilogyTrio, Saxophone, DJ ecc.
- Sezione Occasions
- Sezione Locations
