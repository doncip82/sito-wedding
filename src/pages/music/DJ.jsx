import { Helmet } from 'react-helmet-async'

export default function MusicDJ() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding DJ on the Amalfi Coast — Luxury Service | Donato Cipriano</title>
        <meta name="description" content="Professional DJ for luxury wedding receptions in Ravello, Positano and Sorrento. Curated by Donato Cipriano — not a generic booking service." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/dj" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/dj" />
        <meta property="og:title" content="Wedding DJ Amalfi Coast — Donato Cipriano" />
        <meta property="og:description" content="Curated DJ service for luxury weddings in Ravello, Positano and Sorrento. Selected for direct venue experience, not volume of bookings." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            DJ · Evening Reception
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            DJ Service
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Curated DJ coordination for the evening reception — selected for experience at
            the specific venues of the Amalfi Coast, not for volume of bookings.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Approach</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Editorial Selection,<br />Not a Directory
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Outdoor amplification in Ravello requires a separate <em>autorizzazione</em>
              from the local <em>Comune</em> for events running past 23:00. DJ set-up at
              cliff-edge venues requires knowledge of the specific power infrastructure at
              each property — Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso each
              have different electrical access points and PA placement constraints.
            </p>
            <p>
              Donato selects DJs with direct experience at these venues. The coordination
              is built into the engagement — sound check, set-up logistics with the venue
              manager, and transition from the live music programme to the DJ set are handled
              as a single continuous workflow, not handed off between separate vendors.
            </p>
            <p>
              The typical format for a full-day coordination: ceremony with{' '}
              <a href="/evostrings" className="link-underline">EvoStrings string quartet</a>,
              cocktail hour with{' '}
              <a href="/music/saxophone" className="link-underline">saxophone</a>,
              dinner with{' '}
              <a href="/trilogy-trio" className="link-underline">Trilogy Trio</a>,
              and DJ for the open-air evening reception.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Coordinate the Full<br />Evening Programme.
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
