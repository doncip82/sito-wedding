// components/sections/Occasions.jsx
const OCCASIONS = [
  {
    numeral:     'I',
    label:       'Wedding Ceremonies & Receptions',
    description: 'From the processional to the last dance — a complete musical programme for your day.',
    img:         '/images/Ceremony.png',
    options: [
      { label: 'EvoStrings',  href: '/evostrings'   },
      { label: 'Violin Solo', href: '/violin-solo'  },
      { label: 'Opera',       href: '/music/opera'  },
    ],
  },
  {
    numeral:     'II',
    label:       'Marriage Proposals',
    description: 'A single piece of music, perfectly chosen, can turn a moment into a memory.',
    img:         '/images/Proposal.jpg',
    options: [
      { label: 'Violin Solo',    href: '/violin-solo' },
      { label: 'EvoStrings Duo', href: '/evostrings'  },
      { label: 'Custom Enquiry', href: '/#contact'    },
    ],
  },
  {
    numeral:     'III',
    label:       'Birthdays & Anniversaries',
    description: 'Intimate dinners, sunset parties, milestone evenings along the coast.',
    img:         '/images/Dinner.png',
    options: [
      { label: 'Trilogy Trio', href: '/trilogy-trio'   },
      { label: 'Violin Solo',  href: '/violin-solo'    },
      { label: 'Saxophone',    href: '/music/saxophone' },
    ],
  },
  {
    numeral:     'IV',
    label:       'Exclusive Corporate Events',
    description: 'Background music and live performances for product launches, retreats, and private dinners.',
    img:         '/images/Cocktail.png',
    options: [
      { label: 'EvoStrings', href: '/evostrings'       },
      { label: 'Saxophone',  href: '/music/saxophone'  },
      { label: 'Custom Enquiry', href: '/#contact'     },
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
        </div>

        <div className={`flex flex-col gap-0 border-t ${dark ? 'border-white/[.06]' : 'border-black/[.06]'}`}>
          {moment.options.map(({ label, href }) => (
            <a key={label} href={href}
              className={`group/opt flex items-center justify-between
                py-4 border-b last:border-b-0 no-underline transition-colors duration-300
                ${dark ? 'border-white/[.06]' : 'border-black/[.06]'}`}>
              <span className={`font-serif italic font-light text-[clamp(1rem,2vw,1.25rem)]
                transition-colors duration-300
                ${dark
                  ? 'text-white/50 group-hover/opt:text-[#B8A882]'
                  : 'text-[#1A1A1A]/70 group-hover/opt:text-[#1A1A1A]'}`}>
                {label}
              </span>
              <span className="text-[.46rem] tracking-[.2em] uppercase font-light
                text-[#B8A882] opacity-0 group-hover/opt:opacity-100 transition-opacity duration-300">
                Discover
              </span>
            </a>
          ))}
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
