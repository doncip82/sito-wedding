import { Head } from 'vite-react-ssg'
import EnquiryLinks from '@/components/ui/EnquiryLinks.jsx'
import LoopVideo from '@/components/ui/LoopVideo.jsx'
import { weddingMessage } from '@/lib/contactLinks.js'

const SITE = 'https://www.weddingmusicravello.com'

// One wedding cocktail at Hotel Marincanto, Positano (18 Sept 2026) —
// moonlight first, then blue hour and sunset (order chosen by Donato).
const saxClips = [
  {
    slug: 'night',
    title: 'Moonlight',
    time: '8:00 pm',
    duration: 'PT26S',
    label: 'Moonlight over the sea and the wedding cocktail on the terrace of Hotel Marincanto, Positano, at night',
  },
  {
    slug: 'blue-hour',
    title: 'Blue Hour',
    time: '7:30 pm',
    duration: 'PT15S',
    label: 'Wedding guests on the terrace of Hotel Marincanto at blue hour, with Positano lighting up behind them',
  },
  {
    slug: 'golden-hour',
    title: 'Golden Hour',
    time: '7:15 pm',
    duration: 'PT27S',
    label: 'Saxophonist playing at sunset during a wedding cocktail on the terrace of Hotel Marincanto, Positano',
  },
]

const saxophoneSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Saxophone — Wedding Music Ravello',
  description: 'Live saxophone for wedding cocktail hours, receptions and private dinners in Ravello and Positano. Jazz, soul and contemporary repertoire.',
  genre: ['Jazz', 'Soul', 'Contemporary'],
  areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
  url: 'https://www.weddingmusicravello.com/music/saxophone',
  subjectOf: saxClips.map((clip) => ({
    '@type': 'VideoObject',
    name: `Wedding Saxophone in Positano — ${clip.title}`,
    description: clip.label,
    thumbnailUrl: `${SITE}/videos/posters/sax-positano-${clip.slug}.jpg`,
    contentUrl: `${SITE}/videos/sax-positano-${clip.slug}.mp4`,
    uploadDate: '2026-10-12',
    duration: clip.duration,
  })),
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

      {/* Live clips — 3 columns on desktop, swipeable row on mobile */}
      <section className="pb-[clamp(4rem,10vw,8rem)]">
        <div className="px-[clamp(1.5rem,6vw,5rem)] max-w-[72ch] box-content mb-12">
          <p className="eyebrow mb-5">Live at Hotel Marincanto · Positano</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            One Evening<br />on the Terrace
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <p className="text-[.95rem] font-normal tracking-[.015em] leading-[1.85] text-[#2B2B2B]">
            Three moments from one wedding cocktail on the terrace of Hotel Marincanto,
            filmed as the evening turned from sunset to night above Positano.
            Turn the sound on to hear the saxophone.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory
          px-[clamp(1.5rem,6vw,5rem)] scroll-px-[clamp(1.5rem,6vw,5rem)]
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:max-w-5xl md:box-content">
          {saxClips.map((clip) => (
            <figure key={clip.slug} className="snap-start shrink-0 w-[72vw] max-w-[320px] md:w-auto md:max-w-none">
              <LoopVideo
                playInView
                src={`/videos/sax-positano-${clip.slug}.mp4`}
                poster={`/videos/posters/sax-positano-${clip.slug}.jpg`}
                label={clip.label}
                className="aspect-[9/16] w-full bg-[#1A1A1A]" />
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <span className="font-serif italic font-light text-[1.4rem] leading-tight text-[#1A1A1A]">
                  {clip.title}
                </span>
                <span className="text-[.66rem] font-normal tracking-[.18em] uppercase text-[#6E6046]">
                  {clip.time}
                </span>
              </figcaption>
            </figure>
          ))}
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
