// components/sections/Occasions.jsx
const OCCASIONS = [
  {
    numeral:     'I',
    label:       'Wedding Ceremonies & Receptions',
    description: 'From the processional at Villa Cimbrone\'s Terrazza dell\'Infinito to the final toast — each phase of the day calls for a distinct sound. String ensembles, solo violin, and operatic voice are matched to the acoustics of the venue and the arc of the celebration.',
    pageHref:    '/occasions/wedding-ceremony',
    img:         '/images/Ceremony.png',
    options: [
      { label: 'EvoStrings',   href: '/evostrings'    },
      { label: 'Trilogy Trio', href: '/trilogy-trio'  },
      { label: 'Violin Solo',  href: '/violin-solo'   },
      { label: 'Opera',        href: '/music/opera'   },
      { label: 'Piano Solo',   href: '/music/piano'   },
    ],
  },
  {
    numeral:     'II',
    label:       'Marriage Proposals',
    description: 'A violin solo on a panoramic terrace above the Gulf of Salerno, or a saxophone at golden hour along the Positano coastline. Discreetly arranged, precisely timed — music that shapes the setting without announcing itself.',
    pageHref:    '/occasions/marriage-proposal',
    img:         '/images/Proposal.jpg',
    options: [
      { label: 'Violin Solo', href: '/violin-solo'     },
      { label: 'Saxophone',   href: '/music/saxophone' },
    ],
  },
  {
    numeral:     'III',
    label:       'Birthdays & Anniversaries',
    description: 'A string quartet for a terrace dinner at Palazzo Avino, a DJ set for a sunset gathering in Positano, a saxophone for the cocktail hour — the format is selected to match the scale and mood of the occasion, not the other way round.',
    pageHref:    '/occasions/birthdays-anniversaries',
    img:         '/images/Dinner.png',
    options: [
      { label: 'EvoStrings', href: '/evostrings'       },
      { label: 'DJ',         href: '/music/dj'         },
      { label: 'Saxophone',  href: '/music/saxophone'  },
      { label: 'Vocalist',   href: '/music/vocalist'   },
    ],
  },
  {
    numeral:     'IV',
    label:       'Exclusive Corporate Events',
    description: 'Private dinners, brand retreats, and presentations at Amalfi Coast venues. Live music — from curated DJ sets to vocal performances — selected for its capacity to establish atmosphere without competing with conversation.',
    pageHref:    '/occasions/corporate-events',
    img:         '/images/Cocktail.png',
    options: [
      { label: 'Vocalist',     href: '/music/vocalist'  },
      { label: 'DJ',           href: '/music/dj'        },
      { label: 'EvoStrings',   href: '/evostrings'      },
      { label: 'Trilogy Trio', href: '/trilogy-trio'    },
      { label: 'Piano Solo',   href: '/music/piano'     },
    ],
  },
]

function MomentStrip({ moment, dark = false }) {
  return (
    <article className="group flex flex-col md:flex-row border-b border-black/[.06] last:border-b-0">
      <div className="md:w-[38%] min-h-[240px] md:min-h-[320px] flex-shrink-0 overflow-hidden bg-[#1A1A1A]">
        {moment.img ? (
          <img src={moment.img} alt={moment.label} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${moment.gradient}`} />
        )}
      </div>

      <div className={`flex-1 px-[clamp(1.5rem,6vw,4rem)] py-[clamp(2.5rem,5vw,4rem)]
        flex flex-col justify-between gap-8
        ${dark ? 'bg-[#111111]' : 'bg-[#F9F8F7]'}`}>
        <div className="flex flex-col gap-4">
          <span className={`font-serif italic font-light text-[.95rem] tracking-[.06em]
            ${dark ? 'text-[#B8A882]/40' : 'text-[#B8A882]/60'}`}>
            {moment.numeral}
          </span>
          <h3 className={`font-serif italic font-light text-[clamp(2rem,4vw,3rem)]
            leading-[1.1] ${dark ? 'text-[#F9F8F7]' : 'text-[#1A1A1A]'}`}>
            {moment.label}
          </h3>
          <p className={`text-[.63rem] font-light tracking-[.06em] leading-[2] max-w-[42ch]
            ${dark ? 'text-white/45' : 'text-[#404040]'}`}>
            {moment.description}
          </p>
          <a href={moment.pageHref}
            className={`self-start text-[.48rem] font-light tracking-[.18em] uppercase no-underline
              pb-[2px] border-b transition-colors duration-300
              ${dark
                ? 'text-[#B8A882]/60 border-[#B8A882]/25 hover:text-[#B8A882] hover:border-[#B8A882]'
                : 'text-[#8A7A5A] border-[#8A7A5A]/35 hover:text-[#1A1A1A] hover:border-[#1A1A1A]'}`}>
            Explore this occasion ↗
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className={`text-[.47rem] font-light tracking-[.16em] uppercase
            ${dark ? 'text-white/30' : 'text-[#B8A882]'}`}>
            Suggested for this occasion
          </span>
          <div className="flex flex-wrap gap-2">
            {moment.options.map(({ label, href }) => (
              <a key={label} href={href}
                className={`inline-flex items-center px-4 py-[0.45rem] border no-underline
                  transition-all duration-300
                  text-[.5rem] font-light tracking-[.1em] uppercase
                  ${dark
                    ? 'border-white/20 text-white/55 hover:border-[#B8A882] hover:text-[#B8A882]'
                    : 'border-[#1A1A1A]/18 text-[#404040] hover:border-[#B8A882] hover:text-[#1A1A1A]'}`}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Occasions() {
  return (
    <section id="occasions" aria-labelledby="occ-title" className="bg-[#F9F8F7]">

      <div className="px-[clamp(1.5rem,6vw,5rem)] pt-[clamp(5rem,12vw,9rem)] pb-[clamp(3rem,6vw,5rem)]
        flex justify-between items-end gap-8 flex-wrap border-b border-black/[.06]">
        <div>
          <p className="eyebrow mb-[1.1rem]">Every Moment Deserves a Soundtrack</p>
          <h2 id="occ-title" className="section-title" style={{ maxWidth: '22ch' }}>
            Music for Every Kind<br />of Celebration
          </h2>
        </div>
        <p className="text-[.63rem] font-light tracking-[.08em] leading-[2] text-[#404040] max-w-[34ch] text-right">
          Just as Ravello captures the essence of the Amalfi Coast, music lies at the heart
          of every event — from the ceremony to a sunset toast, to the most intimate and
          unforgettable experiences.
        </p>
      </div>

      {OCCASIONS.map((occasion) => (
        <MomentStrip key={occasion.label} moment={occasion} dark={false} />
      ))}

    </section>
  )
}
