import { Head } from 'vite-react-ssg'

const operaSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Opera — Wedding Music Ravello',
  description: 'Lyric soprano and tenor for wedding ceremonies and dinner interludes on the Amalfi Coast. Puccini, Verdi and Neapolitan repertoire at venues in Ravello and Positano.',
  genre: ['Opera', 'Classical', 'Neapolitan'],
  areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
  url: 'https://www.weddingmusicravello.com/music/opera',
}

export default function MusicOpera() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Opera for Weddings in Italy | Soprano &amp; Tenor | Wedding Music Ravello</title>
        <meta name="description" content="Lyric soprano and tenor for wedding ceremonies and dinner interludes on the Amalfi Coast. Puccini, Verdi and Neapolitan repertoire at venues in Ravello and Positano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/music/opera" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/music/opera" />
        <meta property="og:title" content="Opera for Weddings in Italy | Soprano &amp; Tenor | Wedding Music Ravello" />
        <meta property="og:description" content="Lyric soprano and tenor for wedding ceremonies and dinner interludes on the Amalfi Coast. Puccini, Verdi and Neapolitan repertoire at venues in Ravello and Positano." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(operaSchema)}</script>
      </Head>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)] pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-[clamp(5rem,12vw,9rem)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center max-w-6xl">
          <div className="max-w-xl">
            <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
              flex items-center gap-3 mb-5">
              <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
              Lyric Voice · Ceremony & Dinner
            </p>
            <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
              style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
              Opera
            </h1>
            <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
              Lyric soprano and tenor, trained in the Italian <em>bel canto</em> tradition,
              for ceremony music and dinner interludes. The stone terraces of the Amalfi Coast
              provide natural resonance that no concert hall replicates.
            </p>
          </div>
          <div className="w-[65%] max-w-[260px] md:w-[300px] lg:w-[340px] md:max-w-none mx-auto md:mx-0 shrink-0 aspect-[9/16] overflow-hidden">
            <video
              autoPlay muted playsInline loop preload="auto"
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            >
              <source src="/videos/opera-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Voice & Repertoire</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            The Acoustic Advantage<br />of Stone Terraces
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              The stone terraces and natural amphitheatre topography of Ravello provide
              acoustic resonance that complements unamplified operatic voice — the same quality
              that attracted Wagner to Villa Rufolo in 1880 and that still draws international
              soloists to the Ravello Festival each summer.
            </p>
            <p>
              The platform curates lyric soprano and tenor voices trained in the Italian{' '}
              <em>bel canto</em> tradition. Repertoire is drawn from Puccini (
              <em>O Mio Babbino Caro</em>, <em>Nessun Dorma</em>), Verdi (
              <em>La Traviata</em>, <em>Rigoletto</em>), and Neapolitan art song.
              Each programme is discussed and confirmed with the couple in advance.
            </p>
            <p className="eyebrow !mb-0 pt-2">Versatile Musical Formats</p>
            <p>
              Our artists offer seamless musical accompaniment tailored to every chapter of
              your wedding day, performing during both the wedding ceremony (religious or
              symbolic) and the wedding dinner. The repertoire adapts beautifully to each
              moment: sacred and liturgical music for the ceremony — such as the processional,
              signing, or recessional — and a vibrant selection of celebrated opera arias and
              timeless Neapolitan songs to elevate your reception dinner.
            </p>
          </div>

          <div className="mt-10 border-t border-black/[.09] pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Ceremony', desc: 'One or two arias — processional, signing, recessional. Duration: 8–12 minutes.' },
              { label: 'Dinner Interlude', desc: 'Full operatic set — 30 to 45 minutes. Suitable for between courses at the reception.' },
            ].map(({ label, desc }) => (
              <div key={label} className="py-4 border-b border-black/[.06]">
                <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">{label}</p>
                <p className="text-[.66rem] font-light tracking-[.05em] leading-[2] text-[#404040]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Programme an Opera<br />Set for Your Wedding.
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
