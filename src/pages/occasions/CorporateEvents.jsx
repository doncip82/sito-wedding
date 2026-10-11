import { Head } from 'vite-react-ssg'
import EnquiryLinks from '@/components/ui/EnquiryLinks.jsx'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Event Music — Amalfi Coast',
  description: 'Live music for exclusive corporate events on the Amalfi Coast — private dinners, brand retreats, product presentations and team incentives at Relais & Châteaux and luxury hotel venues in Ravello, Positano and Sorrento.',
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
  serviceType: 'Corporate Event Music',
}

const ENSEMBLES = [
  { label: 'Vocalist',     href: '/music/vocalist' },
  { label: 'DJ',           href: '/music/dj'       },
  { label: 'EvoStrings',   href: '/evostrings'     },
  { label: 'Trilogy Trio', href: '/trilogy-trio'   },
  { label: 'Piano Solo',   href: '/music/piano'    },
  { label: 'Opera',        href: '/music/opera'    },
]

const FORMATS = [
  {
    title: 'Private Dinner',
    detail: 'Seated · 20–80 guests',
    desc: 'A string trio or piano solo for the dinner service at Belmond Hotel Caruso, Palazzo Avino or Villa Cimbrone. The format is understated by design — music that sets an atmosphere without competing with conversation. Three to four sets of 20 minutes, with a short break between each. Repertoire agreed in advance with the client.',
  },
  {
    title: 'Brand Retreat & Incentive',
    detail: 'Full-day format · Multiple stages',
    desc: 'A full-day programme — morning session background music, afternoon free time, evening gala dinner with live performance. EvoStrings for the welcome aperitivo, Trilogy Trio for the dinner, DJ for the after-dinner dancing. All formats coordinated as a single engagement. Transfer logistics from Naples Capodichino Airport (90 minutes) are typically arranged through the hotel concierge.',
  },
  {
    title: 'Product Launch & Presentation',
    detail: 'Experiential · Brand alignment',
    desc: 'Live music as an element of a brand activation or product launch at an Amalfi Coast venue. A vocalist or DJ set matched to the brand\'s creative direction. Palazzo Avino\'s interior courtyard and the terrace of Villa Cimbrone have hosted events for international luxury brands — venues where the setting is itself part of the communication.',
  },
]

export default function OccasionCorporateEvents() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Corporate Event Music on the Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Live music for private dinners, brand retreats and product presentations at Amalfi Coast venues. Vocalist, DJ, string ensembles and piano for exclusive corporate events in Ravello and Positano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/occasions/corporate-events" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/occasions/corporate-events" />
        <meta property="og:title" content="Corporate Event Music on the Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Live music for private dinners, brand retreats and product presentations at Amalfi Coast venues. Vocalist, DJ, string ensembles and piano for exclusive corporate events in Ravello and Positano." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      <section className="bg-[#F2EDE6] grid grid-cols-1 md:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)]">
        <div className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3.5rem,8vw,7rem)] self-center">
          <div className="max-w-4xl">
            <p className="text-[.64rem] font-light tracking-[.25em] uppercase text-[#6E6046]
              flex items-center gap-3 mb-5">
              <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
              Occasions · Corporate
            </p>
            <h1 className="font-serif italic font-light leading-[1.02] text-[#1A1A1A] mb-6"
              style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
              Exclusive<br />Corporate Events
            </h1>
            <p className="text-[.95rem] font-light tracking-[.015em] leading-[1.85] text-[#404040] max-w-[60ch]">
              Private dinners, brand retreats, and presentations at Amalfi Coast venues.
              Live music — from curated DJ sets to vocal performances — selected for its
              capacity to establish atmosphere without competing with conversation.
            </p>
          </div>
        </div>
        <div className="relative min-h-[52svh] md:min-h-[clamp(30rem,72svh,48rem)] overflow-hidden">
          <img src="/images/Cocktail.jpg" alt="Corporate cocktail event with live music on the Amalfi Coast" fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center' }} />
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Event Formats</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Dinner, Retreat<br />or Brand Activation
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/[.06] max-w-5xl">
          {FORMATS.map(({ title, detail, desc }) => (
            <div key={title}
              className="py-8 border-b border-black/[.06]
                [&:not(:last-child)]:md:border-r [&:not(:last-child)]:md:pr-10
                [&:not(:first-child)]:md:pl-10">
              <p className="text-[.6rem] font-light tracking-[.2em] uppercase text-[#6E6046] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.2rem] text-[#1A1A1A] mb-4">
                {title}
              </h3>
              <p className="text-[.86rem] font-light tracking-[.015em] leading-[1.85] text-[#404040]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F2EDE6] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="eyebrow mb-5 text-[#6E6046]">Suggested for this occasion</p>
        <h2 className="section-title mb-10 text-[#1A1A1A]" style={{ maxWidth: '24ch' }}>
          Music Partners<br />for Corporate Events
        </h2>
        <div className="flex flex-wrap gap-3">
          {ENSEMBLES.map(({ label, href }) => (
            <a key={label} href={href}
              className="inline-flex items-center px-5 py-3 border border-[#1A1A1A]/[.18]
                no-underline transition-all duration-300
                text-[.6rem] font-light tracking-[.1em] uppercase
                text-[#404040] hover:border-[#B8A882] hover:text-[#1A1A1A]">
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] bg-[#F9F8F7]">
        <p className="eyebrow mb-8">Related</p>
        <div className="flex flex-col gap-0 border-t border-black/[.09]">
          {[
            { href: '/locations/ravello',  label: 'Corporate venues in Ravello',   desc: '— Belmond Hotel Caruso, Palazzo Avino and Villa Cimbrone.' },
            { href: '/trilogy-trio',       label: 'Trilogy Trio in Positano',       desc: '— violin, cello and piano for the dinner reception.' },
            { href: '/music/vocalist',     label: 'Vocalist for corporate events',  desc: '— live voice for the evening programme.' },
          ].map(({ href, label, desc }) => (
            <div key={href} className="flex items-start gap-6 py-5 border-b border-black/[.06] flex-wrap">
              <a href={href} className="link-underline whitespace-nowrap">{label}</a>
              <span className="text-[.86rem] font-light text-[#404040] tracking-[.015em] leading-[1.85]">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F2EDE6] border-t border-black/[.06] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-[#1A1A1A] max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Planning a corporate event<br />on the Amalfi Coast?
        </p>
        <EnquiryLinks tone="light" message="Hello! We're planning a corporate event on the Amalfi Coast and would love live music. Could you send us some information?" />
      </section>
    </div>
  )
}
