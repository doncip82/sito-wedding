// data/schema.js
// Generates Schema.org JSON-LD objects from data files.
// Import and render via <SchemaOrg> component in each page's <head>.

import { ensembles } from './ensembles.js'
import { venues }    from './venues.js'

export const baseSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MusicGroup'],
  name: 'Wedding Music Ravello',
  url: 'https://www.weddingmusicravello.com',
  description:
    'A curated platform of selected music artists and ensembles for luxury weddings and private events on the Amalfi Coast. String ensembles, saxophone, vocalist and DJ services for ceremonies and receptions at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and private villas in Ravello, Positano and Sorrento.',
  founder: {
    '@type': 'Person',
    name: 'Donato Cipriano',
    sameAs: 'https://www.donatocipriano.com',
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
    name: 'Wedding Music Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Violin Solo — Ceremony' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EvoStrings — String Ensemble' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trilogy Trio — Strings & Piano' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Saxophone' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vocalist' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DJ Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Opera — Soprano & Tenor' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Posteggia Napoletana' } },
    ],
  },
  knowsAbout: [
    'Amalfi Coast Wedding Music',
    'Villa Cimbrone Wedding Ceremony',
    'Belmond Hotel Caruso Wedding',
    'Palazzo Avino Wedding',
    'Ravello Festival',
    'Italian Wedding String Ensemble',
    'Neapolitan Posteggia',
    'Opera Wedding Italy',
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
