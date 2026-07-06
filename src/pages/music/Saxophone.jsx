import { Head } from 'vite-react-ssg'

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

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Saxophone · Cocktail Hour & Ceremony
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Saxophone
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            A professional saxophonist for the cocktail hour or ceremony — solo, or paired
            with a DJ backing track for a contemporary format that suits terrace receptions
            above the Amalfi Coast.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Saxophone on the Amalfi Coast</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Contemporary Warmth<br />for Terrace Receptions
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
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

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Add Saxophone<br />to Your Day.
        </p>
        <a href="mailto:info@weddingmusicravello.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
