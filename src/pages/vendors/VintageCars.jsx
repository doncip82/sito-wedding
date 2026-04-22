import { Helmet } from 'react-helmet-async'

const vintageCarsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vintage Car Hire for Weddings on the Amalfi Coast — Curated by Donato Cipriano',
  description: 'Vintage wedding car hire with knowledge of Amalfi Coast access routes — SS163 restrictions, Ravello road from Minori, Positano lift access.',
  url: 'https://www.weddingmusicravello.com/vendors/vintage-cars',
}

export default function VendorVintageCars() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Vintage Wedding Cars Amalfi Coast | Curated by Donato Cipriano</title>
        <meta name="description" content="Vintage car hire for Amalfi Coast weddings — Fiat 500, Alfa Giulia Spider, Mercedes 280 SL. Drivers with knowledge of SS163 restrictions and Ravello road access." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/vendors/vintage-cars" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/vendors/vintage-cars" />
        <meta property="og:title" content="Vintage Wedding Cars Amalfi Coast — Donato Cipriano" />
        <meta property="og:description" content="Vintage car hire for Amalfi Coast weddings — Fiat 500, Alfa Romeo Giulia Spider. Curated for venue access knowledge, not just vehicle condition." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(vintageCarsSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Curated Selection · Vintage Cars
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Vintage Car Hire<br />Amalfi Coast
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            The SS163 Amalfitana has width and tonnage restrictions that eliminate most
            standard hire vehicles. A vintage car on the Amalfi Coast is not decorative —
            it is the only format that fits the roads.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Access & Logistics</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '26ch' }}>
            Roads That Require<br />Local Knowledge
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Most Amalfi Coast venues are inaccessible to standard vehicles during the summer
              months. The SS163 Amalfitana — the coastal road between Salerno and Sorrento —
              imposes width restrictions that prohibit vehicles above a certain specification.
              The Ravello road from Minori has a maximum passable vehicle width of 2.1 metres.
              Positano's Le Sirenuse has lift access from the lower coastal road rather than
              direct vehicle approach.
            </p>
            <p>
              Vintage models commonly used on the Amalfi Coast: Fiat 500 (produced 1957–1975
              in its original series), Alfa Romeo Giulia Spider, and the Mercedes 280 SL Pagoda
              — each narrow enough for the SS163 and each carrying the visual grammar of
              Southern Italian summer. The Fiat 500 in particular is the correct scale for the
              <em> vicoli</em> of Ravello and Positano.
            </p>
            <p>
              Donato recommends hire operators whose drivers have documented route knowledge for
              each venue — not those who rely on navigation applications that do not reflect
              seasonal closures or vehicle-class restrictions on the coastal road.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F8F7] border-t border-black/[.09]
        px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)]">
        <p className="eyebrow mb-6">The Curation Principle</p>
        <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] max-w-[58ch] mb-6">
          Recommendations are matched to the specific venue and route — a Fiat 500 for
          Ravello's <em>vicoli</em>, a larger vintage saloon for hotel forecourts in Sorrento.
          Contact Donato with your venue and arrival logistics for a specific referral.
        </p>
        <p className="text-[.66rem] font-light tracking-[.08em] text-[#8A7A5A]">
          Current referrals provided on request.
        </p>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Request a Vintage Car<br />Recommendation.
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
