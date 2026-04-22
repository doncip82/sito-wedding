import { Helmet } from 'react-helmet-async'

const celebrantSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wedding Celebrants on the Amalfi Coast — Curated by Donato Cipriano',
  description: 'Multilingual wedding celebrants (English, Italian, French, German, Spanish, Portuguese, Russian) for symbolic ceremonies in Ravello, Positano and Sorrento.',
  url: 'https://www.weddingmusicravello.com/vendors/celebrant',
}

export default function VendorCelebrant() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Celebrant Amalfi Coast — 7 Languages | Donato Cipriano</title>
        <meta name="description" content="Multilingual wedding celebrants for symbolic ceremonies in Ravello, Positano and Sorrento — English, Italian, French, German, Spanish, Portuguese, Russian. Curated by Donato Cipriano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/vendors/celebrant" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/vendors/celebrant" />
        <meta property="og:title" content="Wedding Celebrant Amalfi Coast — 7 Languages | Donato Cipriano" />
        <meta property="og:description" content="Multilingual celebrants for symbolic ceremonies — English, Italian, French, German, Spanish, Portuguese, Russian. Legal context and Comune requirements explained." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(celebrantSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Curated Selection · Celebrants
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Celebrants<br />Amalfi Coast
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Multilingual celebrants for symbolic ceremonies in Ravello, Positano and Sorrento.
            Available languages:{' '}
            <strong className="text-white/80 font-normal">
              English, Italian, French, German, Spanish, Portuguese, Russian
            </strong>.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Legal Context</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '28ch' }}>
            Symbolic Ceremony vs<br />Civil Registration in Italy
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              In Italy, a <em>rito simbolico</em> (symbolic ceremony) has no civil legal
              standing — it is fully customisable in language, structure, vows, and rituals,
              but it does not constitute a legal marriage. Couples must complete their legal
              marriage separately: either at their home country registry office before
              travelling, or at the local <em>Comune</em> in a brief civil ceremony
              (<em>rito civile</em>) conducted in Italian.
            </p>
            <p>
              Ravello's <em>Comune</em> conducts civil ceremonies at the Town Hall on the
              Piazza Vescovado — with direct views over the Gulf of Salerno, a venue in its
              own right. The civil ceremony can precede the symbolic ceremony on the same day.
              Donato coordinates the timing between the two, including the transition from
              Piazza Vescovado to the main venue.
            </p>
            <p>
              Celebrants in Donato's curated selection hold permanent Campania presence —
              the practical requirement for <em>Comune</em> permit handling and the working
              relationships that make logistical coordination possible on the day of the event.
            </p>
          </div>

          <div className="mt-10 border-t border-black/[.09] pt-8">
            <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-4">
              Available Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {['English', 'Italian', 'French', 'German', 'Spanish', 'Portuguese', 'Russian'].map(lang => (
                <span key={lang}
                  className="text-[.5rem] font-light tracking-[.18em] uppercase
                    text-[#404040] border border-black/[.09] px-[.55rem] py-[.22rem]">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F8F7] border-t border-black/[.09]
        px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)]">
        <p className="eyebrow mb-6">The Curation Principle</p>
        <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] max-w-[58ch] mb-6">
          Each celebrant is recommended based on observed work at the venues of Ravello,
          Positano and Sorrento — their knowledge of the <em>Comune</em> process, their
          ability to hold a ceremony on an open terrace in coastal wind, and the quality of
          their ceremony structure across multiple languages. Referrals are matched to the
          couple's nationality and venue.
        </p>
        <p className="text-[.66rem] font-light tracking-[.08em] text-[#8A7A5A]">
          Current referrals provided on request.
        </p>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Request a Celebrant<br />Recommendation.
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
