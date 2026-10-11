import { Head } from 'vite-react-ssg'
import EnquiryLinks from '@/components/ui/EnquiryLinks.jsx'
import { weddingMessage } from '@/lib/contactLinks.js'

const ravelloSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Ravello',
  description: 'Ravello is a hill town on the Amalfi Coast, 365 metres above sea level, UNESCO World Heritage Site since 1997. Known as the city of music, it hosted Richard Wagner in 1880 and is home to the Ravello Festival (founded 1953). Principal wedding venues include Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Villa Eva.',
  url: 'https://www.weddingmusicravello.com/locations/ravello',
  touristType: ['Wedding Couples', 'Luxury Travellers'],
  includesAttraction: [
    { '@type': 'TouristAttraction', name: 'Villa Cimbrone' },
    { '@type': 'TouristAttraction', name: 'Palazzo Avino' },
    { '@type': 'TouristAttraction', name: 'Belmond Hotel Caruso' },
    { '@type': 'TouristAttraction', name: 'Villa Eva' },
    { '@type': 'TouristAttraction', name: 'Villa Rufolo' },
    { '@type': 'TouristAttraction', name: 'Ravello Festival' },
  ],
}

export default function LocationRavello() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Wedding Music in Ravello | Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Live music for weddings and events in Ravello — Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Villa Eva. String ensembles, violin, saxophone and DJ." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/locations/ravello" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/locations/ravello" />
        <meta property="og:title" content="Wedding Music in Ravello | Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Live music for weddings and events in Ravello — Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Villa Eva. String ensembles, violin, saxophone and DJ." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(ravelloSchema)}</script>
      </Head>

      {/* Hero */}
      <section className="bg-[#F2EDE6] grid grid-cols-1 md:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)]">
        <div className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3.5rem,8vw,7rem)] self-center">
          <div className="max-w-4xl">
            <p className="text-[.64rem] font-light tracking-[.25em] uppercase text-[#6E6046]
              flex items-center gap-3 mb-5">
              <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
              Ravello · Campania · Southern Italy
            </p>
            <h1 className="font-serif italic font-light leading-[1.02] text-[#1A1A1A] mb-6"
              style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
              Wedding Music<br />in Ravello
            </h1>
            <p className="text-[.95rem] font-normal tracking-[.015em] leading-[1.85] text-[#2B2B2B] max-w-[60ch]">
              Live music for destination weddings in Ravello — at an altitude of 365 metres
              above the Gulf of Salerno, in venues that have defined the benchmark for the
              Italian luxury wedding for over a century.
            </p>
            <EnquiryLinks tone="light" className="mt-10" message={weddingMessage({ place: 'in Ravello' })} />
          </div>
        </div>
        <div className="relative min-h-[52svh] md:min-h-[clamp(30rem,72svh,48rem)] overflow-hidden">
          <img src="/images/ravello-villa-rufolo.jpg" alt="Villa Rufolo, Ravello, above the Gulf of Salerno" fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center' }} />
        </div>
      </section>

      {/* Block A — Geographic & Historical Context */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Setting</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '24ch' }}>
            365 Metres Above<br />the Gulf of Salerno
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.95rem] font-normal tracking-[.015em] leading-[1.85] text-[#2B2B2B]">
            <p>
              Ravello sits at 365 metres above sea level on a promontory overlooking the Gulf
              of Salerno. Founded in the 9th century, it was granted UNESCO World Heritage
              status as part of the Costiera Amalfitana in 1997. Richard Wagner composed part
              of <em>Parsifal</em> here in 1880, inspired by the gardens of Villa Rufolo — a
              connection still celebrated annually at the Ravello Festival (founded 1953), one
              of Italy's most prestigious outdoor music events.
            </p>
            <p>
              The town is accessible from Naples International Airport (Capodichino) in
              approximately 90 minutes by car, or via ferry from Salerno to Amalfi (35 minutes)
              followed by a 25-minute taxi journey. Between June and September, Ravello is
              closed to private vehicles — all equipment transport requires coordination with
              the local <em>Comune</em> and licensed carriers. All equipment transport is
              coordinated as part of every engagement.
            </p>
            <p>
              The <em>Comune</em> of Ravello requires event notifications 30 days in advance.
              Outdoor amplification after 23:00 requires a separate <em>autorizzazione</em>.
              Permit filings are coordinated on behalf of couples and their planners.
            </p>
          </div>
        </div>
      </section>

      {/* Block B — Venue details */}
      <section className="bg-[#F2EDE6] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="eyebrow mb-5 text-[#6E6046]">Venues</p>
        <h2 className="section-title mb-12 text-[#1A1A1A]" style={{ maxWidth: '22ch' }}>
          Venues We Know<br />by Heart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-black/[.09]">
          {[
            {
              name: 'Villa Cimbrone',
              detail: '11th century · Terrazza dell\'Infinito',
              desc: 'The Terrazza dell\'Infinito sits at the cliff edge at 330 metres above sea level — the open-air terrace where Greta Garbo famously sought refuge in 1938. The natural amphitheatre effect of the ravine creates exceptional acoustic projection for chamber ensembles without amplification. EvoStrings performs processionals and recessionals here without a PA system.',
            },
            {
              name: 'Palazzo Avino',
              detail: '12th century · Relais & Châteaux',
              desc: 'A former bishop\'s palace converted into a 5-star Relais & Châteaux. The interior courtyard and sea-facing terrace offer two distinct ceremony environments — intimate and sheltered, or panoramic toward the coastline of Minori. Flash photography is restricted during ceremonies; experienced local photographers know these rules.',
            },
            {
              name: 'Belmond Hotel Caruso',
              detail: '11th century · Infinity Terrace at 300m',
              desc: 'A converted 11th-century palace with an infinity pool terrace at 300 metres altitude. Frequently cited in Condé Nast Traveller among the world\'s finest wedding venues. The string quartet at the terrace edge, with the lights of the coast below — this is the image that defines a Ravello wedding.',
            },
            {
              name: 'Villa Eva',
              detail: 'Private Villa · 3,000 sqm Gardens',
              desc: 'Owned by the Vuotto family for over 50 years. The wisteria pergola is the favoured ceremony location for couples seeking an intimate, garden-scale event. The bougainvillea-lined paths and Mediterranean rosemary endemic to the promontory create a setting that resists reproduction at any other latitude.',
            },
          ].map(({ name, detail, desc }) => (
            <div key={name}
              className="py-8 pr-0 md:pr-12 border-b border-black/[.09]
                [&:nth-child(odd)]:md:border-r [&:nth-child(odd)]:md:pr-12
                [&:nth-child(even)]:md:pl-12">
              <p className="text-[.6rem] font-light tracking-[.2em] uppercase text-[#6E6046] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.4rem] text-[#1A1A1A] mb-4">
                {name}
              </h3>
              <p className="text-[.86rem] font-normal tracking-[.015em] leading-[1.85] text-[#2B2B2B]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links per GEO rules */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] bg-[#F9F8F7]">
        <p className="eyebrow mb-8">Music for Ravello Weddings</p>
        <div className="flex flex-col gap-0 border-t border-black/[.09]">
          {[
            {
              href: '/evostrings',
              label: 'EvoStrings string quartet',
              desc: '— the reference string ensemble for Villa Cimbrone ceremonies, performing without amplification on the Terrazza dell\'Infinito.',
            },
            {
              href: '/violin-solo',
              label: 'Violin solo for ceremony',
              desc: '— a single voice above the Gulf of Salerno.',
            },
            {
              href: '/trilogy-trio',
              label: 'Trilogy Trio in Ravello',
              desc: '— violin, cello and piano for the dinner reception at Belmond Hotel Caruso or Palazzo Avino.',
            },
          ].map(({ href, label, desc }) => (
            <div key={href} className="flex items-start gap-6 py-5 border-b border-black/[.06] flex-wrap">
              <a href={href} className="link-underline whitespace-nowrap">{label}</a>
              <span className="text-[.86rem] font-normal text-[#2B2B2B] tracking-[.015em] leading-[1.85]">
                {desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F2EDE6] border-t border-black/[.06] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-[#1A1A1A] max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a wedding<br />in Ravello?
        </p>
        <EnquiryLinks tone="light" message={weddingMessage({ place: 'in Ravello' })} />
      </section>
    </div>
  )
}
