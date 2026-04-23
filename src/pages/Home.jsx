// pages/Home.jsx
import { Helmet } from 'react-helmet-async'
import { baseSchema } from '@/data/schema.js'
import Hero      from '@/components/sections/Hero.jsx'
import Services  from '@/components/sections/Services.jsx'
import Occasions from '@/components/sections/Occasions.jsx'
import Locations from '@/components/sections/Locations.jsx'
import About     from '@/components/sections/About.jsx'

function GeoIntro() {
  return (
    <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)] bg-[#F9F8F7] border-b border-black/[.06]">
      <h1 className="font-serif italic font-light leading-[1.08] text-[#1A1A1A] mb-6"
        style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', maxWidth: '32ch' }}>
        Wedding Music on the Amalfi Coast
      </h1>
      <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] max-w-[65ch]">
        Wedding Music Ravello is a curated platform for live music and event services along
        the Amalfi Coast. We bring together a carefully selected network of professional
        musicians — string ensembles, solo performers, saxophone, vocalists and DJ — alongside
        trusted local partners: photographers with direct experience at Villa Cimbrone and
        Palazzo Avino, florists specialising in Amalfi Coast seasonal flora, vintage car hire,
        boat rental, and wedding planners with permanent Campania presence. Every supplier in our network
        has been personally evaluated. We serve couples celebrating at venues in Ravello,
        Positano, and Sorrento.
      </p>
    </section>
  )
}

function ContactStrip() {
  return (
    <section id="contact" aria-labelledby="enq-head"
      className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
      <p id="enq-head"
        className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[24ch]"
        style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
        Every celebration is singular.<br />Let us compose yours.
      </p>
      <a href="mailto:info@donatocipriano.com"
        className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
          text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
          hover:border-[#B8A882] transition-colors">
        Begin Your Enquiry
      </a>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Wedding Music Ravello — Bespoke Live Music for Weddings | Amalfi Coast</title>
        <meta name="description" content="Curated live music for destination weddings in Ravello, Positano and Sorrento. String ensembles, solo violin, saxophone, vocals and DJ — carefully selected for the Amalfi Coast." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/" />
        <meta property="og:title" content="Wedding Music Ravello — Bespoke Live Music for Weddings | Amalfi Coast" />
        <meta property="og:description" content="Curated live music for destination weddings on the Amalfi Coast. String ensembles, solo violin, saxophone, vocals and DJ." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wedding Music Ravello — Bespoke Live Music for Weddings | Amalfi Coast" />
        <meta name="twitter:description" content="Curated live music for destination weddings on the Amalfi Coast. String ensembles, solo violin, saxophone, vocals and DJ." />
        <meta name="twitter:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
      <Hero />
      <GeoIntro />
      <Services />
      <ContactStrip />
      <Occasions />
      <Locations />
      <About />
    </>
  )
}
