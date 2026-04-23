import { Helmet } from 'react-helmet-async'

const positanoSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Positano',
  description: 'Positano is a cliffside village on the Amalfi Coast, one of the most requested destinations for luxury destination weddings in Italy. Principal wedding venues include Villa Treville, formerly the private residence of Franco Zeffirelli, and Le Sirenuse.',
  url: 'https://www.weddingmusicravello.com/locations/positano',
  touristType: ['Wedding Couples', 'Luxury Travellers'],
  includesAttraction: [
    { '@type': 'TouristAttraction', name: 'Villa Treville' },
    { '@type': 'TouristAttraction', name: 'Le Sirenuse' },
  ],
}

export default function LocationPositano() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Music in Positano | Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Curated music for weddings and private events in Positano. String quartets, violin and saxophone at cliff-edge venues including Villa Treville and Le Sirenuse." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/locations/positano" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/locations/positano" />
        <meta property="og:title" content="Wedding Music in Positano | Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Curated music for weddings and private events in Positano. String quartets, violin and saxophone at cliff-edge venues including Villa Treville and Le Sirenuse." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(positanoSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Positano · Campania · Southern Italy
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Music<br />in Positano
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Positano is built vertically into the cliff face above the Tyrrhenian Sea.
            Its wedding venues — Villa Treville, Le Sirenuse, and a network of private
            cliff-edge properties — require a musician who understands the logistical and
            acoustic particularities of the location.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Setting</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Cliff Architecture<br />and Acoustic Precision
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Positano's principal venues are inaccessible to standard vehicles during summer.
              The SS163 Amalfitana has width restrictions that prohibit most transport above
              a certain specification. Le Sirenuse's ceremony terraces are reached via the
              hotel's private lift from the lower coastal road — maximum vehicle width 2.1
              metres for the approach route from Praiano.
            </p>
            <p>
              Villa Treville — the former private residence of director Franco Zeffirelli —
              cascades across the cliff face in a series of terraces. The sound behaviour at
              each terrace level differs: at the lowest, the sea reflects sound back; higher
              up, the open exposure requires careful positioning of acoustic instruments to
              avoid wind interference. Donato has performed at Villa Treville and knows
              each stage precisely.
            </p>
            <p>
              The{' '}
              <a href="/trilogy-trio" className="link-underline">Trilogy Trio in Positano</a>
              {' '}— violin, cello and piano — performs regularly at Le Sirenuse's terrace
              events, where the proximity of the sea and the lights of the Li Galli islands
              provide a setting unlike any ballroom in Europe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a wedding<br />in Positano?
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
