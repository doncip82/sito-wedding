import { Helmet } from 'react-helmet-async'

const sorrentoSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Sorrento',
  description: 'Sorrento is a clifftop town on the Sorrentine Peninsula overlooking the Bay of Naples, a popular base for destination weddings on the Amalfi Coast. Known as the birthplace of Torna a Surriento (1902).',
  url: 'https://www.weddingmusicravello.com/locations/sorrento',
  touristType: ['Wedding Couples', 'Luxury Travellers'],
  includesAttraction: [
    { '@type': 'TouristAttraction', name: 'Piazza Tasso' },
    { '@type': 'TouristAttraction', name: 'Villa Comunale' },
  ],
}

export default function LocationSorrento() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Music in Sorrento | Wedding Music Ravello</title>
        <meta name="description" content="Live music for weddings and events in Sorrento and the Sorrentine Peninsula. Ensembles and soloists available for ceremonies, receptions and private celebrations." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/locations/sorrento" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/locations/sorrento" />
        <meta property="og:title" content="Wedding Music in Sorrento | Wedding Music Ravello" />
        <meta property="og:description" content="Live music for weddings and events in Sorrento and the Sorrentine Peninsula. Ensembles and soloists available for ceremonies, receptions and private celebrations." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(sorrentoSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Sorrento · Campania · Southern Italy
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Music<br />in Sorrento
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Sorrento faces north across the Bay of Naples toward Vesuvius — the only major
            resort on the peninsula where the volcano forms the visual backdrop to every
            ceremony. A carefully selected roster of artists performs at the clifftop
            hotels and private villas of the Sorrentine coast.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Setting</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Vesuvius on the Horizon,<br />Strings on the Terrace
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              The Grand Hotel Excelsior Vittoria has occupied its clifftop position above the
              port of Sorrento since 1834. Its terrace garden — at 50 metres above sea level —
              frames the Bay of Naples on three sides and has hosted private concerts and
              wedding receptions for over a century. The natural stone retaining walls create
              a contained acoustic environment suitable for string quartet without amplification.
            </p>
            <p>
              Sorrento is the cultural origin of <em>Torna a Surriento</em> (1902) and the
              broader tradition of Neapolitan art song — the same musical lineage that informs the{' '}
              <a href="/music/posteggia" className="link-underline">posteggia</a>
              {' '}programming for cocktail hours on the peninsula. Performing this repertoire here is an
              act of geographic and cultural specificity, not decoration.
            </p>
            <p>
              <a href="/evostrings" className="link-underline">EvoStrings string quartet</a>
              {' '}performs regularly in Sorrento for ceremony music, transitioning to the{' '}
              <a href="/trilogy-trio" className="link-underline">Trilogy Trio</a>
              {' '}for dinner reception — a programme that has become the standard format for
              full-day events on the Sorrentine peninsula.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a wedding<br />in Sorrento?
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
