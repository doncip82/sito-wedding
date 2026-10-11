import { Head } from 'vite-react-ssg'
import EnquiryLinks from '@/components/ui/EnquiryLinks.jsx'
import { weddingMessage } from '@/lib/contactLinks.js'

const saxophoneSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Saxophone — Wedding Music Ravello',
  description: 'Live saxophone for wedding cocktail hours, receptions and private dinners in Ravello and Positano. Jazz, soul and contemporary repertoire.',
  genre: ['Jazz', 'Soul', 'Contemporary'],
  areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
  url: 'https://www.weddingmusicravello.com/music/saxophone',
}

export default function MusicSaxophone() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Saxophone for Weddings on the Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Live saxophone for wedding cocktail hours, receptions and private dinners in Ravello and Positano. Jazz, soul and contemporary repertoire." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/saxophone" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/saxophone" />
        <meta property="og:title" content="Saxophone for Weddings on the Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Live saxophone for wedding cocktail hours, receptions and private dinners in Ravello and Positano. Jazz, soul and contemporary repertoire." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(saxophoneSchema)}</script>
      </Head>

      <section className="bg-[#F2EDE6] grid grid-cols-1 md:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)]">
        <div className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3.5rem,8vw,7rem)] self-center">
          <div className="max-w-4xl">
            <p className="text-[.64rem] font-light tracking-[.25em] uppercase text-[#6E6046]
              flex items-center gap-3 mb-5">
              <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
              Saxophone · Cocktail Hour & Ceremony
            </p>
            <h1 className="font-serif italic font-light leading-[1.02] text-[#1A1A1A] mb-6"
              style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
              Saxophone
            </h1>
            <p className="text-[.95rem] font-normal tracking-[.015em] leading-[1.85] text-[#2B2B2B] max-w-[60ch]">
              A professional saxophonist for the cocktail hour or ceremony — solo, or paired
              with a DJ backing track for a contemporary format that suits terrace receptions
              above the Amalfi Coast.
            </p>
            <EnquiryLinks tone="light" className="mt-10" ensemble="Saxophone" message={weddingMessage({ interest: 'the saxophone' })} />
          </div>
        </div>
        <div className="relative min-h-[52svh] md:min-h-[clamp(30rem,72svh,48rem)] overflow-hidden">
          <img src="/images/Saxophone/Sabasax%202.jpg" alt="Wedding saxophonist performing on the Amalfi Coast" fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }} />
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Saxophone on the Amalfi Coast</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Contemporary Warmth<br />for Terrace Receptions
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.95rem] font-normal tracking-[.015em] leading-[1.85] text-[#2B2B2B]">
            <p>
              The saxophone occupies a sonic register that carries naturally across an open
              terrace without amplification — a quality that matters at venues such as Villa
              Cimbrone's Terrazza dell'Infinito or the garden terraces of Villa Eva, where
              the ambient sound of the coast (wind off the Gulf, the distant sea) requires
              an instrument with natural projection and warmth.
            </p>
            <p>
              The platform presents saxophonists who perform across jazz, bossa nova,
              contemporary pop and classical crossover repertoire. Programmes are assembled
              in consultation with the couple. Common formats include: saxophone solo during
              the cocktail hour (60–90 minutes), saxophone with DJ lounge set for the
              aperitivo, or saxophone as the lead voice during the ceremony signing.
            </p>
            <p>
              For couples who want the sophistication of live music with the versatility
              of a contemporary setlist — saxophone with{' '}
              <a href="/music/dj" className="link-underline">DJ</a>{' '}
              is the most requested format for aperitivo on the Amalfi terraces.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F2EDE6] border-t border-black/[.06] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-[#1A1A1A] max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Add Saxophone<br />to Your Day.
        </p>
        <EnquiryLinks tone="light" ensemble="Saxophone" message={weddingMessage({ interest: 'the saxophone' })} />
      </section>
    </div>
  )
}
