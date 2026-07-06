import { Head } from 'vite-react-ssg'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wedding Ceremony & Reception Music — Amalfi Coast',
  description: 'A complete musical programme for destination weddings on the Amalfi Coast. String ensembles, violin solo, piano, and opera for the processional, ceremony, cocktail hour and reception at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and private villas in Ravello, Positano and Sorrento.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Wedding Music Ravello',
    url: 'https://www.weddingmusicravello.com',
  },
  areaServed: [
    { '@type': 'City', name: 'Ravello' },
    { '@type': 'City', name: 'Positano' },
    { '@type': 'City', name: 'Sorrento' },
  ],
  serviceType: 'Wedding Music',
}

const ENSEMBLES = [
  { label: 'EvoStrings',   href: '/evostrings'   },
  { label: 'Trilogy Trio', href: '/trilogy-trio' },
  { label: 'Violin Solo',  href: '/violin-solo'  },
  { label: 'Opera',        href: '/music/opera'  },
  { label: 'Piano Solo',   href: '/music/piano'  },
]

const MOMENTS = [
  {
    moment: 'The Processional',
    detail: 'Ceremony entrance · 3–5 minutes',
    desc: 'The processional is the most acoustically exposed moment of the day — a single sustained melody over silence, often performed without amplification at outdoor venues. EvoStrings and violin solo are the standard formats at Villa Cimbrone\'s Terrazza dell\'Infinito, where the natural amphitheatre effect of the ravine provides projection without a PA system.',
  },
  {
    moment: 'The Ceremony',
    detail: 'Signing & readings · 20–45 minutes',
    desc: 'Continuous background music during vows, readings and the signing of the register. String ensembles, piano solo, or operatic voice. The acoustic stone surfaces of Palazzo Avino\'s interior courtyard and Belmond Hotel Caruso\'s terrace suit unamplified performance. A curated repertoire — classical, cinematic, or contemporary — is assembled in consultation with the couple.',
  },
  {
    moment: 'The Cocktail Hour',
    detail: 'Aperitivo · 60–90 minutes',
    desc: 'The most versatile moment of the day in terms of format. Saxophone, violin solo, Trilogy Trio, or a saxophone-and-DJ pairing. The cocktail hour on a terrace above the Gulf of Salerno benefits from a format with natural acoustic presence — instruments that carry without competing with conversation.',
  },
  {
    moment: 'The Reception & Dinner',
    detail: 'Evening · 3–5 hours',
    desc: 'String quartet or trio for the dinner service, transitioning to DJ or vocalist for dancing. Trilogy Trio (violin, cello and piano) is the standard format for a seated dinner at Belmond Hotel Caruso or Villa Eva. The DJ set follows with a curated programme agreed in advance.',
  },
]

export default function OccasionWeddingCeremony() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Wedding Ceremony & Reception Music | Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="A complete musical programme for your wedding day on the Amalfi Coast — processional, ceremony, cocktail hour and reception. String ensembles, violin, piano and opera at Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/occasions/wedding-ceremony" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/occasions/wedding-ceremony" />
        <meta property="og:title" content="Wedding Ceremony & Reception Music | Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="A complete musical programme for your wedding day on the Amalfi Coast — processional, ceremony, cocktail hour and reception. String ensembles, violin, piano and opera at Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Occasions · Wedding Day
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Ceremonies<br />&amp; Receptions
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            From the first note of the processional to the last dance of the evening —
            a complete musical programme for destination weddings on the Amalfi Coast.
            String ensembles, solo violin, piano, and operatic voice, matched to the
            acoustics of each venue and the arc of the day.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Musical Programme</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Four Moments,<br />Four Distinct Sounds
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-black/[.06] max-w-5xl">
          {MOMENTS.map(({ moment, detail, desc }) => (
            <div key={moment}
              className="py-8 pr-0 md:pr-12 border-b border-black/[.06]
                [&:nth-child(odd)]:md:border-r [&:nth-child(odd)]:md:pr-12
                [&:nth-child(even)]:md:pl-12">
              <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.4rem] text-[#1A1A1A] mb-4">
                {moment}
              </h3>
              <p className="text-[.66rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="eyebrow mb-5 text-[#B8A882]">Suggested for this occasion</p>
        <h2 className="section-title mb-10 text-[#F9F8F7]" style={{ maxWidth: '24ch' }}>
          Music Partners<br />for the Wedding Day
        </h2>
        <div className="flex flex-wrap gap-3">
          {ENSEMBLES.map(({ label, href }) => (
            <a key={label} href={href}
              className="inline-flex items-center px-5 py-3 border border-white/20
                no-underline transition-all duration-300
                text-[.5rem] font-light tracking-[.1em] uppercase
                text-white/55 hover:border-[#B8A882] hover:text-[#B8A882]">
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] bg-[#F9F8F7]">
        <p className="eyebrow mb-8">Related</p>
        <div className="flex flex-col gap-0 border-t border-black/[.09]">
          {[
            { href: '/locations/ravello', label: 'Wedding music in Ravello',  desc: '— Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Villa Eva.' },
            { href: '/evostrings',        label: 'EvoStrings string quartet', desc: '— string quartet, trio and duo for processionals and receptions.' },
            { href: '/music/opera',       label: 'Opera for the ceremony',    desc: '— lyric soprano and tenor in the Italian bel canto tradition.' },
          ].map(({ href, label, desc }) => (
            <div key={href} className="flex items-start gap-6 py-5 border-b border-black/[.06] flex-wrap">
              <a href={href} className="link-underline whitespace-nowrap">{label}</a>
              <span className="text-[.65rem] font-light text-[#404040] tracking-[.04em] leading-[2]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a wedding<br />on the Amalfi Coast?
        </p>
        <a href="mailto:info@weddingmusicravello.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
