// data/schema.js
// Generates Schema.org JSON-LD objects from data files.
// Import and render via <SchemaOrg> component in each page's <head>.

import { ensembles } from './ensembles.js'
import { venues }    from './venues.js'

export const baseSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'MusicGroup'],
      '@id': 'https://www.amalfistrings.com/#organization',
      name: 'Amalfi Strings — Wedding Music by Donato Cipriano',
      description:
        'Bespoke live music for luxury destination weddings on the Amalfi Coast. EvoStrings, Trilogy Trio and solo violin performances curated by professional violinist Donato Cipriano at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Villa Treville.',
      url: 'https://www.amalfistrings.com',
      priceRange: '€€€€',
      founder: {
        '@type': 'Person',
        name: 'Donato Cipriano',
        jobTitle: 'Artistic Director & Professional Violinist',
        description:
          'Donato Cipriano is a professional violinist based in Pompei, Campania. He has performed in London, Berlin and Paris, collaborating with internationally renowned artistic directors. He is the founder of EvoStrings and Trilogy Trio — the reference ensembles for luxury destination weddings in Ravello, Positano and Sorrento.',
        url: 'https://www.donatocipriano.com/en/wedding#services',
        sameAs: ['https://www.donatocipriano.com/en/wedding#services'],
      },
      performer: ensembles.map((e) => ({
        '@type': e.schemaType,
        name: e.name,
        description: e.description.slice(0, 200),
        ...(e.officialUrl && { url: e.officialUrl }),
        ...(e.interactionCount && {
          interactionStatistic: {
            '@type': 'InteractionCounter',
            interactionType: 'https://schema.org/WatchAction',
            userInteractionCount: String(e.interactionCount),
          },
        }),
        genre: e.genre,
      })),
      areaServed: [
        { '@type': 'City', name: 'Ravello' },
        { '@type': 'City', name: 'Positano' },
        { '@type': 'City', name: 'Sorrento' },
        { '@type': 'City', name: 'Praiano' },
        { '@type': 'City', name: 'Amalfi' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ravello',
        addressRegion: 'Campania',
        addressCountry: 'IT',
      },
      knowsAbout: [
        'String quartet weddings Amalfi Coast',
        'EvoStrings luxury wedding ensemble Italy',
        'Trilogy Trio cinematic wedding music',
        'Donato Cipriano violinista matrimonio',
        'Live music Ravello wedding Villa Cimbrone',
        'Wedding music Palazzo Avino Ravello',
        'Belmond Hotel Caruso wedding music',
        'Villa Treville Positano wedding',
        'Monastero Santa Rosa wedding ensemble',
        'Violino solo matrimonio Costiera Amalfitana',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Bespoke Wedding Music — Amalfi Coast Venues',
        itemListElement: venues.map((v) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Wedding Music at ${v.name}, ${v.addressLocality}`,
            areaServed: {
              '@type': v.schemaType,
              name: v.name,
              address: {
                '@type': 'PostalAddress',
                addressLocality: v.addressLocality,
                addressCountry: 'IT',
              },
            },
          },
        })),
      },
    },
  ],
}

// Per-page schema for ensemble detail pages
export const ensembleSchema = (ensemble) => ({
  '@context': 'https://schema.org',
  '@type': ensemble.schemaType,
  name: ensemble.name,
  description: ensemble.description,
  ...(ensemble.officialUrl && { url: ensemble.officialUrl }),
  ...(ensemble.interactionCount && {
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
      userInteractionCount: String(ensemble.interactionCount),
    },
  }),
  genre: ensemble.genre,
  foundingLocation: { '@type': 'Place', name: 'Campania, Italy' },
  member: {
    '@type': 'Person',
    name: 'Donato Cipriano',
    jobTitle: 'Artistic Director & Professional Violinist',
    url: 'https://www.donatocipriano.com/en/wedding#services',
  },
})
