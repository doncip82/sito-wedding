import { Head } from 'vite-react-ssg'
import EnquiryLinks from '@/components/ui/EnquiryLinks.jsx'
import { weddingMessage } from '@/lib/contactLinks.js'

// DJ & Vocalist — one act (the DJ and the vocalist perform together).
// The former /music/vocalist page redirects here (vercel.json).

const djVocalistSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'DJ & Vocalist — Wedding Music Ravello',
  description: 'A DJ and a live vocalist who perform together for wedding receptions and private celebrations at luxury venues in Ravello, Positano and Sorrento.',
  genre: ['Pop', 'Soul', 'Dance', 'Electronic', 'Italian'],
  areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
  url: 'https://www.weddingmusicravello.com/music/dj',
}

const ENQUIRY_MESSAGE = weddingMessage({ interest: 'the DJ & vocalist duo' })

export default function MusicDJ() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Wedding DJ & Vocalist Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="A DJ and a live vocalist who perform together for wedding receptions and private celebrations on the Amalfi Coast. Curated sets and live voice for luxury venues in Ravello, Positano and Sorrento." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/dj" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/dj" />
        <meta property="og:title" content="Wedding DJ & Vocalist Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="A DJ and a live vocalist who perform together for wedding receptions and private celebrations on the Amalfi Coast." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(djVocalistSchema)}</script>
      </Head>

      {/* Hero — video background */}
      <section className="relative overflow-hidden bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-3.5 md:py-[clamp(6rem,14vw,11rem)]">
        <video
          autoPlay muted playsInline loop preload="auto"
          poster="/videos/posters/dj-hero.jpg"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/dj-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[rgba(26,26,26,.38)]" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-[.64rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            DJ & Vocalist · Evening Reception
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            DJ & Vocalist
          </h1>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <p className="text-[.95rem] font-light tracking-[.015em] leading-[1.85] text-white/70 max-w-[60ch]">
            A DJ and a live vocalist who perform as one act — curated sets and live voice
            for the evening reception, selected for experience at the specific venues of the
            Amalfi Coast, not for volume of bookings.
          </p>
          <EnquiryLinks className="mt-10" ensemble="DJ & Vocalist" message={ENQUIRY_MESSAGE} />
        </div>
      </section>

      {/* The duo — split: text + vocalist photo */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
        <div className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
          <div className="max-w-[72ch]">
            <p className="eyebrow mb-5">DJ & Vocalist on the Amalfi Coast</p>
            <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
              One Act, from Dinner<br />to the Dance Floor
            </h2>
            <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
            <div className="space-y-6 text-[.95rem] font-normal tracking-[.015em] leading-[1.85] text-[#2B2B2B]">
              <p>
                The DJ and the vocalist work together as a single act: live voice over the
                DJ&apos;s set turns the reception into a performance rather than a playlist.
                The repertoire spans pop, soul, dance and contemporary Italian, agreed with
                the couple in advance.
              </p>
              <p>
                For the ceremony, the vocalist can also perform on their own — a curated
                selection of three to four songs across the processional, the signing and
                the recessional.
              </p>
              <p>
                For the reception, voice and DJ set — joined, if you wish, by a{' '}
                <a href="/music/saxophone" className="link-underline">saxophone</a>{' '}
                or by{' '}
                <a href="/trilogy-trio" className="link-underline">Trilogy Trio</a>{' '}
                — bridge the formal dinner and the open dancing: a transition that, on a
                Ravello terrace after midnight, feels entirely natural.
              </p>
              <p>
                Both are selected for quality and demonstrated experience at luxury venue
                events, not for profile or social media presence. Audio and video samples
                are available on request.
              </p>
            </div>
          </div>
        </div>
        <div className="relative min-h-[60svh] md:min-h-0 overflow-hidden">
          <img src="/images/Vocalist/Momo%20Vocalist.jpeg" alt="The vocalist singing live at an evening wedding reception on the Amalfi Coast"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }} />
        </div>
      </section>

      <section className="bg-[#F2EDE6] border-t border-black/[.06] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Approach</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Editorial Selection,<br />Not a Directory
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.95rem] font-normal tracking-[.015em] leading-[1.85] text-[#2B2B2B]">
            <p>
              Outdoor amplification in Ravello requires a separate <em>autorizzazione</em>{' '}
              from the local <em>Comune</em> for events running past 23:00. Set-up at
              cliff-edge venues requires knowledge of the specific power infrastructure at
              each property — Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso each
              have different electrical access points and PA placement constraints.
            </p>
            <p>
              The DJ and vocalist presented on this platform have direct experience at these
              venues. The coordination is built into the engagement — sound check, set-up
              logistics with the venue manager, and the transition from the live music
              programme to the DJ set are handled as a single continuous workflow, not handed
              off between separate vendors.
            </p>
            <p>
              The typical format for a full-day coordination: ceremony with{' '}
              <a href="/evostrings" className="link-underline">EvoStrings string quartet</a>,
              cocktail hour with{' '}
              <a href="/music/saxophone" className="link-underline">saxophone</a>,
              dinner with{' '}
              <a href="/trilogy-trio" className="link-underline">Trilogy Trio</a>,
              and DJ & vocalist for the open-air evening reception.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F8F7] border-t border-black/[.06] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-[#1A1A1A] max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Coordinate the Full<br />Evening Programme.
        </p>
        <EnquiryLinks tone="light" ensemble="DJ & Vocalist" message={ENQUIRY_MESSAGE} />
      </section>
    </div>
  )
}
