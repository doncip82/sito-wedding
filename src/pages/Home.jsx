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
        Donato Cipriano is a professional violinist and artistic director based in Campania,
        Italy, offering complete wedding music coordination along the Amalfi Coast. He leads
        a roster of ensembles — EvoStrings (string quartet and trio), Trilogy Trio (strings
        and piano), and Violino Solo — alongside saxophone, vocal, and DJ services. Beyond
        music, he curates a selection of trusted local partners: photographers with direct
        experience at Villa Cimbrone and Palazzo Avino, florists specialising in Amalfi Coast
        seasonal flora, vintage car hire, and wedding planners with permanent Campania presence.
        He performs and coordinates regularly at venues in Ravello, Positano, and Sorrento.
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
        <title>Wedding Music Ravello — Bespoke Wedding Music by Donato Cipriano | Amalfi Coast</title>
        <meta name="description" content="EvoStrings, Trilogy Trio and solo violin for luxury destination weddings in Ravello, Positano and Sorrento. Artistic direction by Donato Cipriano." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/" />
        <meta property="og:title" content="Wedding Music Ravello — Bespoke Wedding Music by Donato Cipriano" />
        <meta property="og:description" content="EvoStrings, Trilogy Trio and solo violin for luxury destination weddings on the Amalfi Coast." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wedding Music Ravello — Bespoke Wedding Music by Donato Cipriano" />
        <meta name="twitter:description" content="EvoStrings, Trilogy Trio and solo violin for luxury destination weddings on the Amalfi Coast." />
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
