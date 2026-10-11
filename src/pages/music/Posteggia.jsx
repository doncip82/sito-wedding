import { Head } from 'vite-react-ssg'
import EnquiryLinks from '@/components/ui/EnquiryLinks.jsx'
import { weddingMessage } from '@/lib/contactLinks.js'

const posteggiaSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Posteggia Napoletana — Wedding Music Ravello',
  description: 'Traditional Neapolitan posteggia — mandolin, guitar and voice — for wedding cocktail hours and receptions in Ravello, Positano and Sorrento. Repertoire includes O Sole Mio (1898), Funiculì Funiculà (1885) and Torna a Surriento (1902).',
  genre: ['Neapolitan', 'Traditional', 'Folk'],
  areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
  url: 'https://www.weddingmusicravello.com/music/posteggia',
}

export default function MusicPosteggia() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Neapolitan Posteggia for Weddings | Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Traditional Neapolitan posteggia — mandolin, guitar and voice — for wedding cocktail hours and receptions in Ravello, Positano and Sorrento." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/posteggia" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/posteggia" />
        <meta property="og:title" content="Neapolitan Posteggia for Weddings | Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Traditional Neapolitan posteggia — mandolin, guitar and voice — for wedding cocktail hours and receptions in Ravello, Positano and Sorrento." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(posteggiaSchema)}</script>
      </Head>

      <section className="bg-[#F2EDE6] grid grid-cols-1 md:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)]">
        <div className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3.5rem,8vw,7rem)] self-center">
          <div className="max-w-4xl">
            <p className="text-[.64rem] font-light tracking-[.25em] uppercase text-[#6E6046]
              flex items-center gap-3 mb-5">
              <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
              Neapolitan Tradition · Cocktail Hour
            </p>
            <h1 className="font-serif italic font-light leading-[1.02] text-[#1A1A1A] mb-6"
              style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
              Posteggia
            </h1>
            <p className="text-[.95rem] font-light tracking-[.015em] leading-[1.85] text-[#404040] max-w-[60ch]">
              A Neapolitan street-serenade tradition performed at your wedding cocktail hour
              on the Amalfi Coast — where it was born.
            </p>
          </div>
        </div>
        <div className="relative min-h-[52svh] md:min-h-[clamp(30rem,72svh,48rem)] overflow-hidden">
          <img src="/images/Posteggia/Posteggia.jpg" alt="Posteggia, the Neapolitan musical tradition, at a wedding" fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }} />
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">What is Posteggia</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            A Tradition That<br />Moves Between Tables
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.95rem] font-light tracking-[.015em] leading-[1.85] text-[#404040]">
            <p>
              <em>Posteggia</em> is a Neapolitan street-serenade tradition dating to the late
              19th century, in which a small ensemble — typically mandolin, guitar and voice —
              moves between tables performing classic <em>canzone napoletana</em>. The
              repertoire includes <em>'O Sole Mio</em> (Giovanni Capurro, 1898),{' '}
              <em>Funiculì Funiculà</em> (Peppino Turco, 1885), and{' '}
              <em>Torna a Surriento</em> (Giambattista De Curtis, 1902).
            </p>
            <p>
              The tradition originates in the same coastal culture that produced Sorrento
              and the Bay of Naples. Performing <em>posteggia</em> at a Ravello or Positano
              wedding is an act of authentic cultural continuity — the ensemble moving through
              guests on the same cliff terraces above the same sea that inspired the songs
              themselves.
            </p>
            <p>
              This format works particularly well during the cocktail hour on an open terrace,
              where movement between guests is possible and the ambient noise level of
              conversation calls for a format that is participatory rather than staged.
              The ensemble approaches each group individually — the music comes to the guest,
              not the reverse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F2EDE6] border-t border-black/[.06] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-[#1A1A1A] max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Add Posteggia<br />to Your Day.
        </p>
        <EnquiryLinks tone="light" ensemble="Posteggia" message={weddingMessage({ interest: 'the Neapolitan Posteggia' })} />
      </section>
    </div>
  )
}
