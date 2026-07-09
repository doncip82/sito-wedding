import { Head } from 'vite-react-ssg'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Birthday & Anniversary Music — Amalfi Coast',
  description: 'Live music for private birthdays, milestone anniversaries and sunset celebrations on the Amalfi Coast. String quartets, DJ sets, saxophone and vocalist in Ravello, Positano and Sorrento.',
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
  serviceType: 'Private Event Music',
}

const ENSEMBLES = [
  { label: 'EvoStrings', href: '/evostrings'      },
  { label: 'DJ',         href: '/music/dj'        },
  { label: 'Saxophone',  href: '/music/saxophone' },
  { label: 'Vocalist',   href: '/music/vocalist'  },
]

const FORMATS = [
  {
    title: 'Dinner & Garden Party',
    detail: 'Intimate · 10–40 guests',
    desc: 'A string quartet for a terrace dinner at Palazzo Avino or the garden of Villa Eva. EvoStrings performs for 60–90 minutes during the dining service — typically three or four sets of 20 minutes, with a short break between each. Repertoire spans classical, cinematic and pop. A light PA system is set up where the outdoor acoustics require it.',
  },
  {
    title: 'Cocktail & Aperitivo',
    detail: 'Sunset format · 60–90 minutes',
    desc: 'Saxophone — solo or paired with a DJ lounge set — is the most requested format for a Positano aperitivo. The instrument carries naturally across a terrace without amplification, leaving space for conversation. A vocalist can be added for a live element during the cocktail hour before the dinner programme begins.',
  },
  {
    title: 'Evening Dance & Celebration',
    detail: 'Dancing · 2–4 hours',
    desc: 'A DJ set with a curated programme — assembled around the decade, genre preferences and specific tracks requested by the host. The Amalfi Coast outdoor venues (Villa Eva, private villa terraces above Positano) require permits for amplified music after 23:00. All permit coordination with the local Comune is handled as part of the engagement.',
  },
]

export default function OccasionBirthdaysAnniversaries() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Birthday & Anniversary Music on the Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Live music for private birthday dinners, milestone anniversaries and sunset celebrations on the Amalfi Coast. String quartets, DJ sets, saxophone and vocalist in Ravello, Positano and Sorrento." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/occasions/birthdays-anniversaries" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/occasions/birthdays-anniversaries" />
        <meta property="og:title" content="Birthday & Anniversary Music on the Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Live music for private birthday dinners, milestone anniversaries and sunset celebrations on the Amalfi Coast. String quartets, DJ sets, saxophone and vocalist in Ravello, Positano and Sorrento." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Occasions · Private Celebrations
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Birthdays<br />&amp; Anniversaries
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            A string quartet for a terrace dinner at Palazzo Avino, a DJ set for a sunset
            gathering in Positano, a saxophone for the cocktail hour — the format is selected
            to match the scale and mood of the occasion, not the other way round.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Programme Formats</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Dinner, Cocktail<br />or Evening Dance
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/[.06] max-w-5xl">
          {FORMATS.map(({ title, detail, desc }) => (
            <div key={title}
              className="py-8 border-b border-black/[.06]
                [&:not(:last-child)]:md:border-r [&:not(:last-child)]:md:pr-10
                [&:not(:first-child)]:md:pl-10">
              <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.2rem] text-[#1A1A1A] mb-4">
                {title}
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
          Music Partners<br />for Private Events
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
            { href: '/locations/positano', label: 'Wedding music in Positano', desc: '— clifftop terraces and sunset venues for private events.' },
            { href: '/evostrings',         label: 'EvoStrings string quartet', desc: '— string quartet and trio for dinner service and garden parties.' },
            { href: '/music/dj',           label: 'DJ for private events',     desc: '— curated sets for dancing on outdoor terraces.' },
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
          Planning a private event<br />on the Amalfi Coast?
        </p>
        <a href="/contact"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
