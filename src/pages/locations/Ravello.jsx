import { Helmet } from 'react-helmet-async'

const ravelloSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Ravello',
  description: 'Ravello is a hill town on the Amalfi Coast, 350 metres above sea level, UNESCO World Heritage Site since 1997. Known as the city of music, it hosted Richard Wagner in 1880 and is home to the Ravello Festival (founded 1953). Principal wedding venues include Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Villa Eva.',
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
      <Helmet>
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
      </Helmet>

      {/* Hero */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Ravello · Campania · Southern Italy
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Music<br />in Ravello
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Donato Cipriano coordinates live music for destination weddings in Ravello —
            at an altitude of 350 metres above the Gulf of Salerno, in venues that have
            defined the benchmark for the Italian luxury wedding for over a century.
          </p>
        </div>
      </section>

      {/* Block A — Geographic & Historical Context */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Setting</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '24ch' }}>
            350 Metres Above<br />the Gulf of Salerno
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Ravello sits at 350 metres above sea level on a promontory overlooking the Gulf
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
              the local <em>Comune</em> and licensed carriers. Donato manages this logistics
              as part of every engagement.
            </p>
            <p>
              The <em>Comune</em> of Ravello requires event notifications 30 days in advance.
              Outdoor amplification after 23:00 requires a separate <em>autorizzazione</em>.
              Donato coordinates all permit filings on behalf of couples and their planners.
            </p>
          </div>
        </div>
      </section>

      {/* Block B — Venue details */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="eyebrow mb-5 text-[#B8A882]">Venues</p>
        <h2 className="section-title mb-12 text-[#F9F8F7]" style={{ maxWidth: '22ch' }}>
          Where Donato Performs<br />in Ravello
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/[.08]">
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
              className="py-8 pr-0 md:pr-12 border-b border-white/[.08]
                [&:nth-child(odd)]:md:border-r [&:nth-child(odd)]:md:pr-12
                [&:nth-child(even)]:md:pl-12">
              <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.4rem] text-[#F9F8F7] mb-4">
                {name}
              </h3>
              <p className="text-[.66rem] font-light tracking-[.05em] leading-[2] text-white/50">
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
              desc: '— Donato Cipriano performs the processional alone, a single voice above the Gulf of Salerno.',
            },
            {
              href: '/trilogy-trio',
              label: 'Trilogy Trio in Ravello',
              desc: '— violin, cello and piano for the dinner reception at Belmond Hotel Caruso or Palazzo Avino.',
            },
          ].map(({ href, label, desc }) => (
            <div key={href} className="flex items-start gap-6 py-5 border-b border-black/[.06] flex-wrap">
              <a href={href} className="link-underline whitespace-nowrap">{label}</a>
              <span className="text-[.65rem] font-light text-[#404040] tracking-[.04em] leading-[2]">
                {desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a wedding<br />in Ravello?
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
