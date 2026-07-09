import { Head } from 'vite-react-ssg'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Music for a Marriage Proposal — Amalfi Coast',
  description: 'Discreetly arranged live music for marriage proposals on the Amalfi Coast. Violin solo or saxophone on private terraces in Ravello, Positano and Sorrento — timed to the moment, coordinated with the venue.',
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
  serviceType: 'Marriage Proposal Music',
}

const ENSEMBLES = [
  { label: 'Violin Solo', href: '/violin-solo'     },
  { label: 'Saxophone',   href: '/music/saxophone' },
]

const LOCATIONS = [
  {
    name: 'Ravello — Terrazza dell\'Infinito',
    detail: 'Villa Cimbrone · 350m above sea level',
    desc: 'The most requested location for a proposal on the Amalfi Coast. The terrace sits at the cliff edge of Villa Cimbrone, 350 metres above sea level, with a panoramic view across the Gulf of Salerno. A violinist positioned discreetly at the terrace entrance begins at a pre-agreed signal — typically as the couple reaches the balustrade.',
  },
  {
    name: 'Positano — Waterfront & Private Terraces',
    detail: 'Golden hour · Cliff-edge venues',
    desc: 'Positano\'s vertical topography — the town descends 200 metres from the SS163 road to the waterfront — creates a series of private terraces and garden viewpoints. At golden hour (approximately 19:30–20:15 between May and September), the light off the Tyrrhenian Sea is unmatched. A saxophone performing softly on a private terrace requires no amplification and no visible setup.',
  },
  {
    name: 'Sorrento — Clifftop Gardens',
    detail: 'Bay of Naples · Mount Vesuvius backdrop',
    desc: 'The clifftop gardens above Sorrento look directly toward Naples and Mount Vesuvius across the Bay of Naples. Villa Comunale and the terrace gardens of the historic centre are accessible on foot. The distance from Ravello (approximately 55km via the SS163 and SS145) makes Sorrento a natural endpoint for couples touring the coast.',
  },
]

export default function OccasionMarriageProposal() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Music for a Marriage Proposal on the Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="A violin solo or saxophone on a private terrace above the Gulf of Salerno. Discreetly arranged, precisely timed. Music for marriage proposals in Ravello, Positano and Sorrento." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/occasions/marriage-proposal" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/occasions/marriage-proposal" />
        <meta property="og:title" content="Music for a Marriage Proposal on the Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="A violin solo or saxophone on a private terrace above the Gulf of Salerno. Discreetly arranged, precisely timed. Music for marriage proposals in Ravello, Positano and Sorrento." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Occasions · Proposal
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Marriage<br />Proposals
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            A violin solo on a panoramic terrace above the Gulf of Salerno, or a saxophone
            at golden hour along the Positano coastline. Discreetly arranged, precisely
            timed — music that shapes the setting without announcing itself.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">How It Works</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '24ch' }}>
            Coordinated With<br />the Setting in Mind
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              A proposal with live music requires coordination between the musician, the
              venue, and the moment — not a performance that simply happens to be present.
              The standard approach: the musician arrives at the location 45 minutes before
              the couple, positions discreetly (behind a terrace wall, inside a doorway, or
              among other guests at a terrace bar), and begins at a pre-agreed signal — a
              text, a hand gesture, or a specific cue from the venue contact.
            </p>
            <p>
              Repertoire is selected in advance: a single piece, or a short programme of
              two to three pieces that continues after the proposal itself. The musician
              does not announce the occasion or draw attention to the moment — the music
              is present, not performative. Venues on the Amalfi Coast with outdoor terraces
              require no PA system for violin or saxophone at this scale.
            </p>
            <p>
              For a fully coordinated experience, the music engagement can be arranged
              alongside complementary services — a vintage car transfer along the Amalfi
              Coast road, a private boat departure from Positano harbour, or a photographer
              positioned discreetly at the location. These elements are coordinated
              separately with specialist providers; the enquiry process can include them
              as part of the initial brief.
            </p>
            <p>
              All logistics — venue liaison, timing, positioning, entry — are handled
              as part of the engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="eyebrow mb-5 text-[#B8A882]">Locations</p>
        <h2 className="section-title mb-12 text-[#F9F8F7]" style={{ maxWidth: '22ch' }}>
          Three Settings<br />on the Coast
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/[.08]">
          {LOCATIONS.map(({ name, detail, desc }) => (
            <div key={name}
              className="py-8 border-b border-white/[.08]
                [&:not(:last-child)]:md:border-r [&:not(:last-child)]:md:pr-10
                [&:not(:first-child)]:md:pl-10">
              <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">
                {detail}
              </p>
              <h3 className="font-serif italic font-light text-[1.2rem] text-[#F9F8F7] mb-4">
                {name}
              </h3>
              <p className="text-[.66rem] font-light tracking-[.05em] leading-[2] text-white/50">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] bg-[#F9F8F7]">
        <p className="eyebrow mb-5">Suggested for this occasion</p>
        <div className="flex flex-wrap gap-3 mt-4">
          {ENSEMBLES.map(({ label, href }) => (
            <a key={label} href={href}
              className="inline-flex items-center px-5 py-3 border border-[#1A1A1A]/18
                no-underline transition-all duration-300
                text-[.5rem] font-light tracking-[.1em] uppercase
                text-[#404040] hover:border-[#B8A882] hover:text-[#1A1A1A]">
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] border-t border-black/[.06]">
        <p className="eyebrow mb-8">Related</p>
        <div className="flex flex-col gap-0 border-t border-black/[.09]">
          {[
            { href: '/locations/ravello',  label: 'Wedding music in Ravello',  desc: '— Villa Cimbrone and the Terrazza dell\'Infinito.' },
            { href: '/locations/positano', label: 'Wedding music in Positano', desc: '— clifftop terraces and the Tyrrhenian coastline.' },
            { href: '/violin-solo',        label: 'Violin solo for ceremony',  desc: '— intimate, unamplified, precise.' },
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
          Planning a proposal<br />on the Amalfi Coast?
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
