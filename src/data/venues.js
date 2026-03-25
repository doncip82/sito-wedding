// data/venues.js
// All venue data. Used by: Locations section, Schema.org generator, individual venue pages (future).

export const venues = [
  {
    id: 'villa-cimbrone',
    index: '01',
    name: 'Villa Cimbrone',
    location: 'Ravello, 365 m above the sea',
    schemaType: 'LandmarksOrHistoricalBuildings',
    addressLocality: 'Ravello',
    tags: ['EvoStrings', 'Ceremony', 'Open Terrace'],
    description: `The Belvedere of Infinity is not merely a view — it is an acoustic phenomenon. Sound carries differently at altitude: the absence of urban noise, the breath of the Tyrrhenian wind between phrases. A string quartet here does not compete with the landscape; it completes it. EvoStrings has performed beneath its wisteria-draped pergola for ceremonies of singular intimacy.`,
    recommendedEnsembles: ['evostrings', 'violino-solo'],
  },
  {
    id: 'palazzo-avino',
    index: '02',
    name: 'Palazzo Avino',
    location: 'Ravello · Five-Star Relais',
    schemaType: 'Hotel',
    addressLocality: 'Ravello',
    tags: ['Trilogy Trio', 'Aperitivo', 'Indoor & Outdoor'],
    description: `A twelfth-century villa converted into one of the coast's most distinguished hotels. Its pink marble terrace and intimate salons present two distinct acoustic environments — the terrace calls for a duo whose notes dissolve into the open air; the indoor ballroom rewards a fuller ensemble. Donato Cipriano adapts the arrangement to each space personally.`,
    recommendedEnsembles: ['trilogy-trio', 'evostrings'],
  },
  {
    id: 'belmond-caruso',
    index: '03',
    name: 'Belmond Hotel Caruso',
    location: 'Ravello · Belmond Collection',
    schemaType: 'Hotel',
    addressLocality: 'Ravello',
    tags: ['Violino Solo', 'EvoStrings Quartet', 'Sunset Ceremony'],
    description: `The infinity pool terrace of the Caruso carries a natural reverberation unlike any other on the coast — the limestone cliffside behind the property acts as a subtle reflector, lending live performance a warmth that no recording can replicate. We recommend Donato Cipriano in solo or the full EvoStrings quartet for sunset ceremonies on the main terrace.`,
    recommendedEnsembles: ['violino-solo', 'evostrings'],
  },
  {
    id: 'villa-treville',
    index: '04',
    name: 'Villa Treville',
    location: 'Positano · Private Residence',
    schemaType: 'Hotel',
    addressLocality: 'Positano',
    tags: ['Trilogy Trio', 'EvoStrings', 'Multi-Terrace'],
    description: `Franco Zeffirelli's former private residence perches directly above the sea. Its terraced gardens cascade across five levels, each requiring its own musical approach. The Trilogy Trio has performed on the lower terrace as the sun fell into the water; EvoStrings in the upper loggia during candlelit dinners. No other venue on the coast demands such intimate familiarity with its spaces.`,
    recommendedEnsembles: ['trilogy-trio', 'evostrings'],
  },
  {
    id: 'monastero-santa-rosa',
    index: '05',
    name: 'Monastero Santa Rosa',
    location: 'Conca dei Marini · Historic Convent',
    schemaType: 'Hotel',
    addressLocality: 'Conca dei Marini',
    tags: ['Violino Solo', 'EvoStrings Duo', 'Cloister Ceremony'],
    description: `A seventeenth-century Dominican convent suspended between cliffs and sea. Its cloister creates a natural resonance chamber of rare quality. A solo violin or EvoStrings duo in this space achieves a depth of sound that neither amplification nor technology can approximate. Sacred, ancient, and entirely irreplaceable.`,
    recommendedEnsembles: ['violino-solo', 'evostrings'],
  },
  {
    id: 'villa-eva',
    index: '06',
    name: 'Villa Eva',
    location: 'Ravello · Historic Gardens',
    schemaType: 'LandmarksOrHistoricalBuildings',
    addressLocality: 'Ravello',
    tags: ['EvoStrings', 'Garden Ceremony', 'Outdoor Reception'],
    description: `Less known than its neighbours, Villa Eva rewards those who seek it. Its Art Nouveau gardens — wild, lush and largely untouched since the early twentieth century — frame a natural outdoor theatre of remarkable acoustic character. The canopy of ancient trees absorbs higher frequencies, leaving only warmth. EvoStrings performs here as though the garden itself were listening.`,
    recommendedEnsembles: ['evostrings'],
  },
]

// Marquee items (all locations including unlisted)
export const marqueeLocations = [
  'Villa Cimbrone', 'Palazzo Avino', 'Belmond Hotel Caruso',
  'Villa Treville', 'Monastero Santa Rosa', 'Villa Eva',
  'Villa Rufolo', 'Le Sirenuse',
]
