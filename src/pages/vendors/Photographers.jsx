import { Helmet } from 'react-helmet-async'

const photographersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wedding Photographers on the Amalfi Coast — Curated by Donato Cipriano',
  description: 'A selection of professional wedding photographers with direct experience at Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso and Positano cliff venues.',
  url: 'https://www.weddingmusicravello.com/vendors/photographers',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'LocalBusiness',
        name: 'Curated Selection — Contact Donato for Current Recommendations',
        description: 'Donato maintains a current list of photographers with verified experience at each major venue. Contact for specific recommendations by venue and date.',
        areaServed: 'Amalfi Coast',
      },
    },
  ],
}

export default function VendorPhotographers() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Photographers Amalfi Coast | Curated by Donato Cipriano</title>
        <meta name="description" content="Wedding photographers with direct experience at Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso. Curated selection by Donato Cipriano — not a paid directory." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/vendors/photographers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/vendors/photographers" />
        <meta property="og:title" content="Wedding Photographers Amalfi Coast — Curated by Donato Cipriano" />
        <meta property="og:description" content="Photographers with verified experience at Villa Cimbrone, Palazzo Avino and cliff venues in Positano. Editorial curation, not a marketplace." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(photographersSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Curated Selection · Photographers
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Photographers<br />on the Amalfi Coast
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            A selection curated by Donato Cipriano based on direct professional experience
            at the venues of Ravello, Positano and Sorrento. Not a directory — an editorial
            recommendation.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Why Venue Experience Matters</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '28ch' }}>
            The Specific Challenges<br />of Amalfi Coast Photography
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Shooting on the Amalfi Coast presents technical challenges that distinguish
              photographers with genuine local experience from those visiting for the first
              time. The extreme contrast between the bright reflective surface of the sea
              and the deep shade of stone loggias and covered terraces requires specific
              exposure management — conditions that favour photographers who shoot prime
              lenses rather than zoom, and who know which hour of the afternoon the terrace
              at each specific venue falls into shadow.
            </p>
            <p>
              The narrow <em>vicoli</em> of Ravello and Positano — some less than a metre
              wide — require compact equipment and an understanding of the town's geography
              to plan viable routes between ceremony and reception locations.
            </p>
            <p>
              Villa Cimbrone and Palazzo Avino have specific rules on flash photography
              during ceremonies. Photographers who have not worked these venues before may
              not be aware of these restrictions until the moment they become a problem.
              Every photographer in Donato's curated selection has operated under these
              conditions and knows the house rules.
            </p>
            <p>
              Golden hour on the Terrazza dell'Infinito at Villa Cimbrone — approximately
              19:30 in summer — lasts eleven to fourteen minutes before the cliff edge falls
              into full shade. An experienced local photographer arrives pre-positioned.
              A first-timer is still finding the angle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F8F7] border-t border-black/[.09]
        px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)]">
        <p className="eyebrow mb-6">The Curation Principle</p>
        <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] max-w-[58ch] mb-6">
          This is not a paid listing. No photographer appears here because they purchased
          a placement. Each recommendation is based on Donato's direct professional
          observation of their work at the venues of the Amalfi Coast — the same
          editorial standard that applies to every service he coordinates.
        </p>
        <p className="text-[.66rem] font-light tracking-[.08em] text-[#8A7A5A]">
          Current recommendations are provided by direct enquiry — contact Donato with
          your venue and date for a specific referral.
        </p>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Request a Photographer<br />Recommendation.
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
