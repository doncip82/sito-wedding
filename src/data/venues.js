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
    description: `A 12th-century estate set at the southernmost point of Ravello's promontory. Its Belvedere of Infinity, perched at 350m above sea level, accommodates intimate ceremonies of up to 60 guests.`,
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
    description: `A private 12th-century palazzo converted into a 5-star hotel. Its pink façade and panoramic terrace have hosted ceremonies for couples from over 40 countries.`,
    recommendedEnsembles: ['trilogy-trio', 'evostrings'],
  },
  {
    id: 'belmond-caruso',
    index: '03',
    name: 'Belmond Hotel Caruso',
    location: 'Ravello · Belmond Collection',
    schemaType: 'Hotel',
    addressLocality: 'Ravello',
    tags: ['Violin Solo', 'EvoStrings Quartet', 'Sunset Ceremony'],
    description: `Former bishop's palace, now a Belmond property. Its infinity pool terrace offers an unobstructed view of the Gulf of Salerno — one of the most photographed ceremony settings on the coast.`,
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
    description: `Once the private residence of Franco Zeffirelli. Four terraced gardens descend toward the sea; the lowest terrace accommodates ceremonies of up to 80 guests.`,
    recommendedEnsembles: ['trilogy-trio', 'evostrings'],
  },
  {
    id: 'monastero-santa-rosa',
    index: '05',
    name: 'Monastero Santa Rosa',
    location: 'Conca dei Marini · Historic Convent',
    schemaType: 'Hotel',
    addressLocality: 'Conca dei Marini',
    tags: ['Violin Solo', 'EvoStrings Duo', 'Cloister Ceremony'],
    description: `An 17th-century Dominican monastery converted into a hotel in 2012. Its clifftop garden overlooks the Fiordo di Furore — one of the most acoustically sheltered outdoor settings on the coast.`,
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
    description: `Set at the highest point of Ravello, surrounded by terraced gardens and ancient lemon groves. Among the most atmospheric venues for evening receptions.`,
    recommendedEnsembles: ['evostrings'],
  },
]

// Marquee items (all locations including unlisted)
export const marqueeLocations = [
  'Villa Cimbrone', 'Palazzo Avino', 'Belmond Hotel Caruso',
  'Villa Treville', 'Monastero Santa Rosa', 'Villa Eva',
  'Villa Rufolo', 'Le Sirenuse',
]
