// pages/Home.jsx
import { Helmet } from 'react-helmet-async'
import { baseSchema } from '@/data/schema.js'
import Hero      from '@/components/sections/Hero.jsx'
import Services  from '@/components/sections/Services.jsx'
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

const MOMENTS = [
  {
    numeral:     'I',
    label:       'Ceremony',
    description: 'The most sacred moment of your day. A single instrument or an ensemble — strings, voice, or solo violin — holds the space between the world outside and the vows you are about to speak.',
    img:         '/images/Ceremony.png',
    options: [
      { label: 'EvoStrings',  href: '/evostrings'   },
      { label: 'Violin Solo', href: '/violin-solo'  },
      { label: 'Opera',       href: '/music/opera'  },
    ],
  },
  {
    numeral:     'II',
    label:       'Cocktail',
    description: 'As the ceremony draws to a close and the light shifts golden, your guests move to the terrace. An ensemble that converses — present but never intrusive.',
    img:         '/images/Cocktail.png',
    options: [
      { label: 'EvoStrings', href: '/evostrings'       },
      { label: 'Saxophone',  href: '/music/saxophone'  },
      { label: 'Posteggia',  href: '/music/posteggia'  },
    ],
  },
  {
    numeral:     'III',
    label:       'Dinner',
    description: 'The table is set, the candles lit, the sea visible through every window. Music that feels like the score of this precise evening, in this precise place.',
    img:         '/images/Dinner.png',
    options: [
      { label: 'Trilogy Trio', href: '/trilogy-trio'   },
      { label: 'Violin Solo',  href: '/violin-solo'    },
      { label: 'Vocalist',     href: '/music/vocalist' },
    ],
  },
  {
    numeral:     'IV',
    label:       'Party',
    description: 'When formality dissolves and the evening opens. Energy, movement, and a floor that should be danced on.',
    img:         '/images/Party.png',
    options: [
      { label: 'DJ',          href: '/music/dj' },
      { label: 'DJ + Sax',   href: '/#contact' },
      { label: 'DJ + Violin', href: '/#contact' },
    ],
  },
]

function Occasions() {
  return (
    <section id="occasions" aria-labelledby="occ-title" className="bg-[#F9F8F7]">

      {/* Section header */}
      <div className="px-[clamp(1.5rem,6vw,5rem)] pt-[clamp(5rem,12vw,9rem)] pb-[clamp(3rem,6vw,5rem)]
        flex justify-between items-end gap-8 flex-wrap border-b border-black/[.06]">
        <div>
          <p className="eyebrow mb-[1.1rem]">For Every Moment of Your Day</p>
          <h2 id="occ-title" className="section-title" style={{ maxWidth: '22ch' }}>
            Four Moments,<br />One Vision
          </h2>
        </div>
        <p className="text-[.63rem] font-light tracking-[.08em] leading-[2] text-[#404040] max-w-[28ch] text-right">
          Each formation is personally selected<br />
          and directed by Donato Cipriano.
        </p>
      </div>

      {/* Moment strips */}
      {MOMENTS.map((moment) => (
        <article
          key={moment.label}
          className="group flex flex-col md:flex-row border-b border-black/[.06] last:border-b-0"
        >
          {/* Image */}
          <div className="md:w-[38%] min-h-[240px] md:min-h-[320px] flex-shrink-0 overflow-hidden bg-[#1A1A1A]">
            <img
              src={moment.img}
              alt={moment.label}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 px-[clamp(1.5rem,6vw,4rem)] py-[clamp(2.5rem,5vw,4rem)]
            flex flex-col justify-between gap-8">

            {/* Top: numeral + title + description */}
            <div className="flex flex-col gap-4">
              <span className="font-serif italic font-light text-[.95rem] text-[#B8A882]/60 tracking-[.06em]">
                {moment.numeral}
              </span>
              <h3 className="font-serif italic font-light text-[clamp(2rem,4vw,3rem)]
                leading-[1.1] text-[#1A1A1A]">
                {moment.label}
              </h3>
              <p className="text-[.63rem] font-light tracking-[.06em] leading-[2]
                text-[#404040] max-w-[42ch]">
                {moment.description}
              </p>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-0 border-t border-black/[.06]">
              {moment.options.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group/opt flex items-center justify-between
                    py-4 border-b border-black/[.06] last:border-b-0
                    no-underline transition-colors duration-300"
                >
                  <span className="font-serif italic font-light
                    text-[clamp(1rem,2vw,1.25rem)] text-[#1A1A1A]/70
                    group-hover/opt:text-[#1A1A1A] transition-colors duration-300">
                    {label}
                  </span>
                  <span className="text-[.46rem] tracking-[.2em] uppercase font-light
                    text-[#B8A882] opacity-0 group-hover/opt:opacity-100
                    transition-opacity duration-300">
                    Discover
                  </span>
                </a>
              ))}
            </div>

          </div>
        </article>
      ))}

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
