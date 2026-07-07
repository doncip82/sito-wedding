// components/sections/Locations.jsx
import { useEffect, useRef } from 'react'
import { venues, marqueeLocations } from '@/data/venues.js'

// Two coordinated palettes: refined dark (default) and light editorial.
// Passed down from the section via the `light` prop.
function rowTheme(light) {
  return light
    ? {
        border:  'border-black/[.08]',
        line:    'bg-[#8A7A5A]',
        index:   'text-[#8A7A5A]/45',
        loc:     'text-[#404040]/55',
        name:    'text-[#1A1A1A] group-hover:text-[#8A7A5A]',
        desc:    'text-[#404040]',
        tag:     'text-[#8A7A5A]/75 border-[#8A7A5A]/25 group-hover:text-[#8A7A5A] group-hover:border-[#8A7A5A]/55',
        enquire: 'text-[#8A7A5A] border-transparent group-hover:text-[#1A1A1A] group-hover:border-[#8A7A5A]/45',
      }
    : {
        border:  'border-white/[.08]',
        line:    'bg-[#B8A882]',
        index:   'text-[rgba(184,168,130,.4)]',
        loc:     'text-white/40',
        name:    'text-white/90 group-hover:text-white',
        desc:    'text-white/60 group-hover:text-white/75',
        tag:     'text-[rgba(184,168,130,.52)] border-[rgba(184,168,130,.28)] group-hover:text-[#B8A882] group-hover:border-[rgba(184,168,130,.5)]',
        enquire: 'text-white/45 border-transparent group-hover:text-[#B8A882] group-hover:border-[rgba(184,168,130,.4)]',
      }
}

function VenueRow({ venue, index, light }) {
  const ref = useRef(null)
  const t = rowTheme(light)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'
    el.style.transition = `opacity .65s ease ${index * 0.08}s, transform .65s ease ${index * 0.08}s`
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        io.unobserve(el)
      }
    }, { threshold: 0.08 })
    io.observe(el)
    return () => io.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      role="listitem"
      itemScope itemType={`https://schema.org/${venue.schemaType}`}
      className={`grid border-b ${t.border} py-8 relative group`}
      style={{ gridTemplateColumns: '3rem 1fr auto', gap: 'clamp(1rem,3vw,2.5rem)' }}
    >
      {/* Gold line on hover */}
      <div className={`absolute left-0 bottom-[-0.5px] right-0 h-[.5px] ${t.line}
        scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`} />

      <span className={`text-[.52rem] font-light tracking-[.2em] ${t.index} pt-[.3rem]`}>
        {venue.index}
      </span>

      <div className="flex flex-col gap-[.6rem]">
        <span className={`text-[.5rem] font-light tracking-[.24em] uppercase ${t.loc}`}>
          {venue.location}
        </span>
        <h3 className={`font-serif italic font-light ${t.name} transition-colors duration-300`}
          style={{ fontSize: 'clamp(1.35rem,2.4vw,2rem)', lineHeight: 1.15 }}
          itemProp="name">
          {venue.name}
        </h3>
        <p className={`text-[.63rem] font-light tracking-[.06em] leading-[1.95]
          ${t.desc} transition-colors duration-500 max-w-[58ch]`}
          itemProp="description">
          {venue.description}
        </p>
        <div className="flex gap-[.55rem] flex-wrap mt-[.3rem]">
          {venue.tags.map(tag => (
            <span key={tag}
              className={`text-[.46rem] font-light tracking-[.18em] uppercase
                border px-[.55rem] py-[.22rem] transition-all ${t.tag}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right col — enquire link */}
      <div className="hidden sm:flex flex-col items-end justify-center pt-[.15rem]">
        <a href="/#contact"
          className={`text-[.5rem] font-light tracking-[.2em] uppercase no-underline
            border-b pb-[2px] whitespace-nowrap transition-all ${t.enquire}`}>
          Enquire →
        </a>
      </div>
    </div>
  )
}

export default function Locations({ light = false }) {
  // Duplicate marquee items for seamless loop
  const marquee = [...marqueeLocations, ...marqueeLocations]

  const t = light
    ? {
        eyebrow:       'text-[#8A7A5A]',
        title:         'text-[#1A1A1A]',
        intro:         'text-[#404040]',
        listBorder:    'border-black/[.08]',
        marqueeBorder: 'border-black/[.06]',
        marqueeName:   'text-[#1A1A1A]/10 hover:text-[#8A7A5A]/55',
        marqueeDot:    'text-[#8A7A5A]/25',
      }
    : {
        eyebrow:       'text-[#B8A882]',
        title:         'text-white/88',
        intro:         'text-white/55',
        listBorder:    'border-white/[.08]',
        marqueeBorder: 'border-white/[.06]',
        marqueeName:   'text-white/10 hover:text-[rgba(184,168,130,.45)]',
        marqueeDot:    'text-[rgba(184,168,130,.18)]',
      }

  return (
    <section id="locations" aria-labelledby="loc-title"
      className={`overflow-hidden px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,10rem)]
        ${light ? 'bg-[#F9F8F7]' : ''}`}
      style={light ? undefined : { background: 'linear-gradient(180deg,#262019 0%,#1B1610 100%)' }}>

      {/* Header */}
      <div className="flex justify-between items-start gap-8 flex-wrap
        mb-[clamp(3.5rem,8vw,6.5rem)]">
        <div>
          <p className={`text-[.56rem] font-light tracking-[.25em] uppercase ${t.eyebrow}
            flex items-center gap-3 mb-[1.1rem]`}>
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Our Playground
          </p>
          <h2 id="loc-title"
            className={`font-serif italic font-light leading-[1.1] ${t.title}`}
            style={{ fontSize: 'clamp(2rem,4.5vw,3.6rem)', maxWidth: '20ch' }}>
            The Venues We Know<br />by Heart
          </h2>
        </div>
        <p className={`text-[.66rem] font-light tracking-[.08em] leading-[2]
          ${t.intro} max-w-[34ch] self-end`}>
          Each venue on the Amalfi Coast has its own acoustic signature, its own logistical
          constraints, its own light at golden hour. We know them all.
        </p>
      </div>

      {/* Venue rows */}
      <div className={`flex flex-col border-t ${t.listBorder}`} role="list">
        {venues.map((v, i) => <VenueRow key={v.id} venue={v} index={i} light={light} />)}
      </div>

      {/* Scrolling marquee */}
      <div className={`overflow-hidden mt-[clamp(3.5rem,8vw,6rem)]
        border-t ${t.marqueeBorder} pt-7`} aria-hidden="true">
        <div className="flex gap-12 w-max"
          style={{ animation: 'marquee 32s linear infinite' }}>
          {marquee.map((name, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className={`font-serif italic font-light whitespace-nowrap
                ${t.marqueeName} transition-colors cursor-default`}
                style={{ fontSize: 'clamp(.85rem,1.4vw,1.05rem)', letterSpacing: '.04em' }}>
                {name}
              </span>
              <span className={`${t.marqueeDot} font-light`}>·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
