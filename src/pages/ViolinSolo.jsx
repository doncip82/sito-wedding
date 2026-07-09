// pages/ViolinSolo.jsx
import { Head } from 'vite-react-ssg'
import { ensembles } from '@/data/ensembles.js'
import { ensembleSchema } from '@/data/schema.js'

const ensemble = ensembles.find(e => e.id === 'violino-solo')

const violinSoloSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Violin Solo — Donato Cipriano',
  description: 'Solo violin for wedding ceremonies in Ravello, Positano and Sorrento. Classical and contemporary repertoire performed without amplification at cliff-edge venues including Villa Cimbrone.',
  genre: ['Classical', 'Contemporary'],
  areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
  url: 'https://www.weddingmusicravello.com/violin-solo',
}

export default function ViolinSolo() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Violin Solo for Wedding Ceremony | Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Solo violin for wedding ceremonies in Ravello, Positano and Sorrento. Classical and contemporary repertoire, performed without amplification at cliff-edge venues." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/violin-solo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/violin-solo" />
        <meta property="og:title" content="Violin Solo for Wedding Ceremony | Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Solo violin for wedding ceremonies in Ravello, Positano and Sorrento — classical and contemporary repertoire, performed without amplification." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(violinSoloSchema)}</script>
      </Head>

      {/* Hero — minimal, text-forward */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-3xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Solo Performance · Donato Cipriano
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Violin Solo
          </h1>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <p className="text-[.8rem] font-serif italic font-light text-white/50
            max-w-[36ch] leading-[1.8]">
            "There are moments within a wedding that belong to a single voice."
          </p>
        </div>
      </section>

      {/* Split — photo + intro text */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Photo */}
        <div className="bg-[#1C2030] overflow-hidden" style={{ minHeight: 480 }}>
          <img
            src="/images/Violin%20Solo/immagine_donato.JPG"
            alt="Donato Cipriano performing violin solo on the Amalfi Coast"
            className="w-full object-cover object-center"
            style={{ height: '100%', minHeight: 480 }}
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="px-[clamp(2rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
          flex flex-col justify-center">
          <p className="eyebrow mb-5">About the Performance</p>
          <h2 className="section-title mb-6" style={{ maxWidth: '18ch' }}>
            One Instrument.<br />Every Emotion.
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-6" />
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2]
            text-[#404040] mb-6">
            {ensemble.description}
          </p>
          <div className="flex items-center gap-6 flex-wrap mt-4">
            <a href="/contact" className="link-underline">Enquire</a>
            <a href={ensemble.officialUrl} className="link-ext"
              target="_blank" rel="noopener noreferrer">
              <span>↗</span> Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Moments this is perfect for */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,6rem)]
        border-t border-black/[.09]">
        <p className="eyebrow mb-6">Perfect For</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-black/[.09]">
          {[
            {
              moment: 'The Processional',
              desc: 'A single note that announces the arrival. The silence before it is part of the music.',
            },
            {
              moment: 'The Signing',
              desc: 'During the signing of the register, a solo line of violin gives the moment its weight.',
            },
            {
              moment: 'The Recessional',
              desc: 'The first walk as a married couple deserves music that rises. Solo violin rises.',
            },
            {
              moment: 'Intimate Ceremonies',
              desc: 'For small gatherings in private gardens or historic chapels where a full ensemble would overwhelm.',
            },
          ].map(({ moment, desc }) => (
            <div key={moment}
              className="py-7 px-4 border-b border-r border-black/[.09]
                hover:bg-black/[.02] transition-colors group">
              <h3 className="font-serif italic font-light text-[1.1rem] text-[#1A1A1A] mb-3">
                {moment}
              </h3>
              <p className="text-[.63rem] font-light tracking-[.06em] leading-[1.95]
                text-[#404040]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[24ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Enquire About<br />This Performance.
        </p>
        <a href="/contact"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>

    </div>
  )
}
