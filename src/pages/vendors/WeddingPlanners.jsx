import { Helmet } from 'react-helmet-async'

const plannersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wedding Planners on the Amalfi Coast — Curated by Donato Cipriano',
  description: 'Wedding planners with permanent Campania presence — for Comune permit handling, vendor coordination and day-of logistics at Ravello, Positano and Sorrento venues.',
  url: 'https://www.weddingmusicravello.com/vendors/wedding-planners',
}

export default function VendorWeddingPlanners() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Helmet>
        <title>Wedding Planners Amalfi Coast | Curated by Donato Cipriano</title>
        <meta name="description" content="Wedding planners with permanent Campania presence for permit handling, Comune liaison and day-of logistics. Curated selection by Donato Cipriano — not a national directory." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/vendors/wedding-planners" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/vendors/wedding-planners" />
        <meta property="og:title" content="Wedding Planners Amalfi Coast — Donato Cipriano" />
        <meta property="og:description" content="Planners with permanent Campania presence — Comune permits, vendor relationships and logistical coordination on the day. Editorial curation." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(plannersSchema)}</script>
      </Helmet>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Curated Selection · Wedding Planners
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Wedding Planners<br />Amalfi Coast
          </h1>
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2] text-white/55 max-w-[60ch]">
            Planners with permanent Campania presence — the distinction that matters for
            permit handling, vendor relationships, and logistical coordination on the day.
          </p>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-[72ch]">
          <p className="eyebrow mb-5">Why Local Presence Matters</p>
          <h2 className="section-title mb-8" style={{ maxWidth: '28ch' }}>
            Comune Permits and<br />Day-Of Coordination
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <div className="space-y-6 text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
            <p>
              Ravello's <em>Comune</em> requires event notifications 30 days in advance.
              Outdoor amplification after 23:00 requires a separate <em>autorizzazione</em>.
              Planners who operate nationally — flying in for the week — typically pass this
              coordination to the couple or the venue, creating a gap in accountability that
              becomes visible only when something goes wrong.
            </p>
            <p>
              A planner with a permanent Campania office manages the <em>Comune</em> liaison
              directly: the notification, the permit application, and the follow-up if
              conditions change. They also maintain working relationships with the venue event
              managers — relationships that translate into practical concessions on load-in
              times, equipment positioning, and vendor access on the day.
            </p>
            <p>
              Donato works regularly alongside planners in his curated selection. The
              recommendation is based on observed performance on-site — the logistical
              competence that is invisible in a portfolio but decisive in a crisis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F8F7] border-t border-black/[.09]
        px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)]">
        <p className="eyebrow mb-6">The Curation Principle</p>
        <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] max-w-[58ch] mb-6">
          No planner appears here because of a commercial arrangement. The selection reflects
          Donato's direct observation of their work at venues in Ravello, Positano and Sorrento
          over multiple seasons. Contact for a specific referral matched to your venue, scale,
          and nationality of the couple.
        </p>
        <p className="text-[.66rem] font-light tracking-[.08em] text-[#8A7A5A]">
          Current referrals provided on request.
        </p>
      </section>

      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Request a Planner<br />Recommendation.
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
