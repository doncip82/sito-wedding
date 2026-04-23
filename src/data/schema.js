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
      '@id': 'https://www.weddingmusicravello.com/#organization',
      name: 'Wedding Music Ravello',
      url: 'https://www.weddingmusicravello.com',
      description:
        'Professional wedding music on the Amalfi Coast. Violin solos, string ensembles (EvoStrings, Trilogy Trio), saxophone, and DJ services for luxury weddings at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and private villas in Ravello, Positano and Sorrento.',
      priceRange: '€€€€',
      founder: {
        '@type': 'Person',
        name: 'Donato Cipriano',
        jobTitle: 'Professional Violinist',
        url: 'https://www.donatocipriano.com',
        sameAs: [
          'https://www.donatocipriano.com',
          'https://www.donatocipriano.com/en/wedding',
        ],
      },
      areaServed: [
        { '@type': 'City', name: 'Ravello' },
        { '@type': 'City', name: 'Positano' },
        { '@type': 'City', name: 'Sorrento' },
        { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
        { '@type': 'AdministrativeArea', name: 'Campania' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pompei',
        addressRegion: 'Campania',
        addressCountry: 'IT',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Wedding Music Services — Amalfi Coast',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Violin Solo — Ceremony' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EvoStrings — String Quartet & Trio' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trilogy Trio — Strings & Piano' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Saxophone' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ Service' } },
        ],
      },
      knowsAbout: [
        'Amalfi Coast Wedding Music',
        'Villa Cimbrone Wedding Ceremony',
        'Belmond Hotel Caruso Wedding',
        'Palazzo Avino Wedding',
        'Ravello Festival',
        'Italian Wedding String Ensemble',
      ],
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
    jobTitle: 'Professional Violinist',
    url: 'https://www.donatocipriano.com/en/wedding#services',
  },
})
