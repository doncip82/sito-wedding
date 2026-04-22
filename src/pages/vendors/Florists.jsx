import { Helmet } from 'react-helmet-async'

const floristsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wedding Florists on the Amalfi Coast — Curated by Donato Cipriano',
  description: 'Florists specialising in Amalfi Coast seasonal flora — sfusato amalfitano lemon, bougainvillea, wisteria and Mediterranean botanicals.',
  url: 'https://www.weddingmusicravello.com/vendors/florists',
}

export default function VendorFlorists() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Florists Ravello & Amalfi Coast | Curated by Donato Cipriano</title>
        <meta name="description" content="Wedding florists with expertise in Amalfi Coast seasonal flora — sfusato amalfitano lemon, bougainvillea, wisteria. Curated selection by Donato Cipriano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/vendors/florists" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/vendors/florists" />
        <meta property="og:title" content="Wedding Florists Amalfi Coast — Curated by Donato Cipriano" />
        <meta property="og:description" content="Florists specialising in local seasonal flora — sfusato amalfitano lemon, bougainvillea, wisteria and Mediterranean botanicals. Editorial curation." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(floristsSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Curated Selection · Florists
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Florists<br />on the Amalfi Coast
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Flora native to the Campanian coast — IGP-protected lemon groves, bougainvillea,
            the wisteria of Villa Eva's pergola. A curated selection of florists who work
            with what grows here, not what arrives by refrigerated truck from the Netherlands.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">The Flora of the Amalfi Coast</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '28ch' }}>
            What Grows Here<br />and When
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              The <em>sfusato amalfitano</em> lemon — IGP-protected and grown exclusively on
              the terraced hillsides between Maiori and Vietri sul Mare — is the defining
              botanical of this coastline. Its leaves, blossom and fruit appear in floristry
              work from April through September, providing a visual and olfactory reference
              that no imported substitute replicates.
            </p>
            <p>
              Bougainvillea reaches full bloom on the coast between May and October. Wisteria —
              which drapes the pergola at Villa Eva and the entrance terraces at Villa Cimbrone —
              peaks in April and May and is gone by June. Mediterranean rosemary and lavender,
              endemic to the promontory limestone, are available year-round and form the backbone
              of arrangements that hold up in coastal heat.
            </p>
            <p>
              Peak floristry season on the Coast runs April through October. Outside this
              window, the palette of available local material narrows substantially — florists
              who know the seasonal calendar plan accordingly, rather than over-committing to
              arrangements that require importation in November or February.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F8F7] border-t border-black/[.09]
        px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)]">
        <p className="eyebrow mb-6">The Curation Principle</p>
        <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] max-w-[58ch] mb-6">
          Each recommendation is based on observed work at the venues of the Amalfi Coast —
          florists who understand that the palette of the coastline is the brief, not an
          afterthought. Current referrals are provided on request, matched to the venue,
          season, and scale of the event.
        </p>
        <p className="text-[.66rem] font-light tracking-[.08em] text-[#8A7A5A]">
          Contact Donato with your venue and date for a specific referral.
        </p>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Request a Florist<br />Recommendation.
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
