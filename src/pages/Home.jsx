// pages/Home.jsx
import { Head } from 'vite-react-ssg'
import { baseSchema } from '@/data/schema.js'
import Hero      from '@/components/sections/Hero.jsx'
import Occasions from '@/components/sections/Occasions.jsx'
import Locations from '@/components/sections/Locations.jsx'
import About     from '@/components/sections/About.jsx'

function GeoIntro() {
  return (
    <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)] bg-[#F9F8F7] border-b border-black/[.06]">
      <p className="eyebrow mb-[1.1rem]">Ravello · Città della Musica</p>
      <h2 className="font-serif italic font-light leading-[1.08] text-[#1A1A1A] mb-6"
        style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', maxWidth: '32ch' }}>
        Where Music Has Always Been the Centre of Everything
      </h2>
      <div className="flex flex-col gap-5 max-w-[65ch]">
        <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
          Ravello sits 365 metres above the Tyrrhenian Sea, on a promontory between Minori and
          Atrani along the Amalfi Coast — a UNESCO World Heritage Site since 1997. It is one of
          the few places in the world where music is not an ornament but a founding principle.
          Richard Wagner composed parts of Parsifal here in 1880, inspired by the gardens of
          Villa Rufolo. Giuseppe Verdi visited. The Ravello Festival, held every summer since
          1953 on the clifftop stage of Villa Rufolo, has hosted conductors and soloists from
          across the world.
        </p>
        <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
          This history is not incidental. It shapes the way music is chosen, placed, and
          performed here. Wedding Music Ravello was built on that same principle: that the right
          music, in the right space, at the right moment, does not accompany an event — it
          defines it. Whether at Villa Cimbrone's Belvedere of Infinity, beneath the vaulted
          ceilings of Palazzo Avino, or on the open terrace of Belmond Hotel Caruso overlooking
          the coast, every performance is curated with the precision that this landscape demands.
        </p>
      </div>
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
        Every event is different.<br />Tell us about yours.
      </p>
      <a href="/contact"
        className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
          text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
          hover:border-[#B8A882] transition-colors">
        Get in touch →
      </a>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Wedding Music on the Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="A curated selection of music artists and ensembles for luxury weddings and private events in Ravello, Positano and Sorrento. String quartets, violin, saxophone, DJ and more." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/" />
        <meta property="og:title" content="Wedding Music on the Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="A curated selection of music artists and ensembles for luxury weddings and private events in Ravello, Positano and Sorrento. String quartets, violin, saxophone, DJ and more." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wedding Music on the Amalfi Coast | Wedding Music Ravello" />
        <meta name="twitter:description" content="A curated selection of music artists and ensembles for luxury weddings and private events in Ravello, Positano and Sorrento. String quartets, violin, saxophone, DJ and more." />
        <meta name="twitter:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Head>
      <Hero />
      <GeoIntro />
      <ContactStrip />
      <Occasions />
      <Locations />
      <About />
    </>
  )
}
