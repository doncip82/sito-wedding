import { Head } from 'vite-react-ssg'
import EnquiryLinks from '@/components/ui/EnquiryLinks.jsx'
import { weddingMessage } from '@/lib/contactLinks.js'

const vocalistSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Vocalist — Wedding Music Ravello',
  description: 'Live vocal performance for weddings and private events in Ravello and Positano. Jazz, pop and classical repertoire, solo or with ensemble.',
  genre: ['Jazz', 'Pop', 'Classical'],
  areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
  url: 'https://www.weddingmusicravello.com/music/vocalist',
}

export default function MusicVocalist() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Wedding Singer Amalfi Coast | Vocalist | Wedding Music Ravello</title>
        <meta name="description" content="Live vocal performance for weddings and private events in Ravello and Positano. Jazz, pop and classical repertoire, solo or with ensemble." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/vocalist" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/vocalist" />
        <meta property="og:title" content="Wedding Singer Amalfi Coast | Vocalist | Wedding Music Ravello" />
        <meta property="og:description" content="Live vocal performance for weddings and private events in Ravello and Positano. Jazz, pop and classical repertoire, solo or with ensemble." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(vocalistSchema)}</script>
      </Head>

      <section className="bg-[#F2EDE6] grid grid-cols-1 md:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)]">
        <div className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3.5rem,8vw,7rem)] self-center">
          <div className="max-w-4xl">
            <p className="text-[.64rem] font-light tracking-[.25em] uppercase text-[#8A7A5A]
              flex items-center gap-3 mb-5">
              <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
              Vocalist · Ceremony & Reception
            </p>
            <h1 className="font-serif italic font-light leading-[1.02] text-[#1A1A1A] mb-6"
              style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
              Vocalist
            </h1>
            <p className="text-[.95rem] font-light tracking-[.015em] leading-[1.85] text-[#404040] max-w-[60ch]">
              A professional vocalist for ceremony and reception — pop, soul, contemporary
              and Italian repertoire, selected for voice quality and direct experience
              performing on the Amalfi Coast.
            </p>
            <EnquiryLinks tone="light" className="mt-10" ensemble="Vocalist" message={weddingMessage({ interest: 'a vocalist' })} />
          </div>
        </div>
        <div className="relative min-h-[52svh] md:min-h-[clamp(30rem,72svh,48rem)] overflow-hidden">
          <img src="/images/Vocalist/Momo%20Vocalist.jpeg" alt="Wedding vocalist performing live on the Amalfi Coast" fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center' }} />
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Vocalist on the Amalfi Coast</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Voice as the Primary<br />Instrument of the Day
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.95rem] font-light tracking-[.015em] leading-[1.85] text-[#404040]">
            <p>
              The platform presents vocalists with training across pop, soul, jazz and
              contemporary Italian repertoire. For ceremony use, the vocalist performs
              a curated selection agreed with the couple in advance — typically three to
              four songs across the processional, signing, and recessional.
            </p>
            <p>
              For the reception, a vocalist integrated with a backing track or with a{' '}
              <a href="/music/saxophone" className="link-underline">saxophone</a>{' '}
              or{' '}
              <a href="/trilogy-trio" className="link-underline">Trilogy Trio</a>{' '}
              creates a format that bridges the formal dinner and the open dancing — a
              transition that, on a Ravello terrace after midnight, feels entirely natural.
            </p>
            <p>
              Each vocalist is selected for voice quality and demonstrated experience
              performing at luxury venue events, not for profile or social media presence.
              Audio samples are available on request.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F2EDE6] border-t border-black/[.06] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-[#1A1A1A] max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Add a Vocalist<br />to Your Day.
        </p>
        <EnquiryLinks tone="light" ensemble="Vocalist" message={weddingMessage({ interest: 'a vocalist' })} />
      </section>
    </div>
  )
}
