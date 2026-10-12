import { Head } from 'vite-react-ssg'
import EnquiryLinks from '@/components/ui/EnquiryLinks.jsx'
import { weddingMessage } from '@/lib/contactLinks.js'

const pianoSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Piano Solo — Wedding Music Ravello',
  description: 'Solo piano for wedding ceremonies, cocktail hours and private dinners on the Amalfi Coast. Classical, contemporary and cinematic repertoire at luxury venues in Ravello, Positano and Sorrento.',
  genre: ['Classical', 'Contemporary', 'Cinematic'],
  areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
  url: 'https://www.weddingmusicravello.com/music/piano',
}

export default function MusicPiano() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Piano Solo for Weddings on the Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Solo piano for wedding ceremonies, cocktail hours and private dinners in Ravello, Positano and Sorrento. Classical, contemporary and cinematic repertoire." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/piano" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/piano" />
        <meta property="og:title" content="Piano Solo for Weddings on the Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Solo piano for wedding ceremonies, cocktail hours and private dinners in Ravello, Positano and Sorrento. Classical, contemporary and cinematic repertoire." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(pianoSchema)}</script>
      </Head>

      <section className="bg-[#F2EDE6] grid grid-cols-1 md:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)]">
        <div className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3.5rem,8vw,7rem)] self-center">
          <div className="max-w-4xl">
            <p className="text-[.64rem] font-light tracking-[.25em] uppercase text-[#6E6046]
              flex items-center gap-3 mb-5">
              <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
              Piano Solo · Ceremony & Reception
            </p>
            <h1 className="font-serif italic font-light leading-[1.02] text-[#1A1A1A] mb-6"
              style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
              Piano Solo
            </h1>
            <p className="text-[.95rem] font-normal tracking-[.015em] leading-[1.85] text-[#2B2B2B] max-w-[60ch]">
              Solo piano for ceremony, cocktail hour and dinner — classical purity or
              contemporary warmth, adapted to the acoustic and emotional register of each
              venue on the Amalfi Coast.
            </p>
            <EnquiryLinks tone="light" className="mt-10" ensemble="Piano Solo" message={weddingMessage({ interest: 'solo piano' })} />
          </div>
        </div>
        <div className="relative min-h-[52svh] md:min-h-[clamp(30rem,72svh,48rem)] overflow-hidden">
          <img src="/images/Piano%20Solo/Angelo%20Borrelli.jpg" alt="Wedding pianist performing on the Amalfi Coast" fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }} />
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Piano on the Amalfi Coast</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            A Single Instrument<br />That Fills Any Room
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.95rem] font-normal tracking-[.015em] leading-[1.85] text-[#2B2B2B]">
            <p>
              Solo piano carries a particular authority in enclosed spaces — the interior
              salons of Palazzo Avino, the loggia of Villa Cimbrone, the dining rooms of
              Belmond Hotel Caruso. At these venues, the resonance of a grand piano in an
              historic room requires no amplification and no support act.
            </p>
            <p>
              Repertoire is assembled in consultation with the couple. Classical programmes
              draw from Bach, Chopin, Debussy and Satie. Contemporary and cinematic sets
              include composers such as Einaudi, Richter, Yiruma and Nils Frahm — formats
              that work particularly well for cocktail hours and dinner background.
            </p>
            <p>
              Piano solo is also available in combination with{' '}
              <a href="/violin-solo" className="link-underline">violin</a>
              {' '}for a fuller sound without the logistical complexity of a full ensemble.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F2EDE6] border-t border-black/[.06] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-[#1A1A1A] max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Add Piano Solo<br />to Your Day.
        </p>
        <EnquiryLinks tone="light" ensemble="Piano Solo" message={weddingMessage({ interest: 'solo piano' })} />
      </section>
    </div>
  )
}
