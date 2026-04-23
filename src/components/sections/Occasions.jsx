// components/sections/Occasions.jsx
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
      { label: 'DJ + Sax',   href: '/#contact'  },
      { label: 'DJ + Violin', href: '/#contact'  },
    ],
  },
]

const PROPOSALS = [
  {
    numeral:     'I',
    label:       'Proposal in Positano',
    description: 'On the terraced cliffs above the Tyrrhenian Sea, with the coloured houses of Positano behind you. A solo violin emerges from the silence — and the world holds its breath. Curated for the most intimate and private of moments.',
    img:         '/images/Proposal.jpg',
    options: [
      { label: 'Violin Solo',    href: '/violin-solo' },
      { label: 'EvoStrings Duo', href: '/evostrings'  },
      { label: 'Custom Enquiry', href: '/#contact'    },
    ],
  },
  {
    numeral:     'II',
    label:       'Proposal in Ravello',
    description: 'At the Belvedere of Infinity, 365 metres above the sea, where sound travels differently and time seems to pause. The gardens of Villa Cimbrone or the private terraces of Palazzo Avino — each a stage for a singular declaration.',
    img:         '/images/Proposal.jpg',
    options: [
      { label: 'Violin Solo',    href: '/violin-solo' },
      { label: 'EvoStrings Duo', href: '/evostrings'  },
      { label: 'Custom Enquiry', href: '/#contact'    },
    ],
  },
  {
    numeral:     'III',
    label:       'Proposal in Capri',
    description: 'The island has hosted poets, emperors and lovers for two thousand years. A private terrace overlooking the Faraglioni, a musician waiting in the wings, and a question posed in the finest setting the Mediterranean can offer.',
    img:         '/images/Proposal.jpg',
    options: [
      { label: 'Violin Solo',    href: '/violin-solo' },
      { label: 'EvoStrings Duo', href: '/evostrings'  },
      { label: 'Custom Enquiry', href: '/#contact'    },
    ],
  },
  {
    numeral:     'IV',
    label:       'Boat Proposal Experience',
    description: 'Between the sea stacks and the grottos, on the open water of the Gulf of Naples or the Amalfi Coast. A private vessel, champagne at anchor, and a musician aboard — the proposal that the sea itself will remember.',
    img:         '/images/Proposal.jpg',
    options: [
      { label: 'Violin Solo',    href: '/violin-solo' },
      { label: 'Custom Enquiry', href: '/#contact'    },
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

      {/* The Wedding Day */}
      <div className="px-[clamp(1.5rem,6vw,5rem)] pt-[clamp(5rem,12vw,9rem)] pb-[clamp(3rem,6vw,5rem)]
        flex justify-between items-end gap-8 flex-wrap border-b border-black/[.06]">
        <div>
          <p className="eyebrow mb-[1.1rem]">For Every Moment of Your Day</p>
          <h2 id="occ-title" className="section-title" style={{ maxWidth: '22ch' }}>
            The Wedding Day
          </h2>
        </div>
        <p className="text-[.63rem] font-light tracking-[.08em] leading-[2] text-[#404040] max-w-[28ch] text-right">
          Each formation is personally selected<br />
          and carefully curated for your celebration.
        </p>
      </div>

      {MOMENTS.map((moment) => (
        <MomentStrip key={moment.label} moment={moment} dark={false} />
      ))}

      {/* Proposals & Private Moments */}
      <div className="bg-[#111111] px-[clamp(1.5rem,6vw,5rem)]
        pt-[clamp(5rem,12vw,9rem)] pb-[clamp(3rem,6vw,5rem)]
        flex justify-between items-end gap-8 flex-wrap border-b border-white/[.06]">
        <div>
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-[1.1rem]">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Beyond the Wedding
          </p>
          <h2 className="font-serif italic font-light leading-[1.08] text-[#F9F8F7]"
            style={{ fontSize: 'clamp(2rem,4.5vw,3.6rem)', maxWidth: '22ch' }}>
            Proposals &amp; Private Moments
          </h2>
        </div>
        <p className="text-[.63rem] font-light tracking-[.08em] leading-[2] text-white/35 max-w-[34ch] text-right">
          Intimate, unforgettable experiences designed for a single moment —<br />
          the one that changes everything.
        </p>
      </div>

      {PROPOSALS.map((proposal) => (
        <MomentStrip key={proposal.label} moment={proposal} dark={true} />
      ))}

    </section>
  )
}
