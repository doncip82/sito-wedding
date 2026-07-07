// components/sections/Locations.jsx
import { useEffect, useRef } from 'react'
import { venues, marqueeLocations } from '@/data/venues.js'

function VenueRow({ venue, index }) {
  const ref = useRef(null)

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
      className="grid border-b border-white/[.08] py-8 relative group"
      style={{ gridTemplateColumns: '3rem 1fr auto', gap: 'clamp(1rem,3vw,2.5rem)' }}
    >
      {/* Gold line on hover */}
      <div className="absolute left-0 bottom-[-0.5px] right-0 h-[.5px] bg-[#B8A882]
        scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      <span className="text-[.52rem] font-light tracking-[.2em] text-[rgba(184,168,130,.4)] pt-[.3rem]">
        {venue.index}
      </span>

      <div className="flex flex-col gap-[.6rem]">
        <span className="text-[.5rem] font-light tracking-[.24em] uppercase text-white/40">
          {venue.location}
        </span>
        <h3 className="font-serif italic font-light text-white/90
          group-hover:text-white transition-colors duration-300"
          style={{ fontSize: 'clamp(1.35rem,2.4vw,2rem)', lineHeight: 1.15 }}
          itemProp="name">
          {venue.name}
        </h3>
        <p className="text-[.63rem] font-light tracking-[.06em] leading-[1.95]
          text-white/60 group-hover:text-white/75 transition-colors duration-500 max-w-[58ch]"
          itemProp="description">
          {venue.description}
        </p>
        <div className="flex gap-[.55rem] flex-wrap mt-[.3rem]">
          {venue.tags.map(tag => (
            <span key={tag}
              className="text-[.46rem] font-light tracking-[.18em] uppercase
                text-[rgba(184,168,130,.52)] border border-[rgba(184,168,130,.28)] px-[.55rem] py-[.22rem]
                group-hover:text-[#B8A882] group-hover:border-[rgba(184,168,130,.5)] transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right col — enquire link */}
      <div className="hidden sm:flex flex-col items-end justify-center pt-[.15rem]">
        <a href="/#contact"
          className="text-[.5rem] font-light tracking-[.2em] uppercase no-underline
            text-white/45 border-b border-transparent pb-[2px] whitespace-nowrap
            group-hover:text-[#B8A882] group-hover:border-[rgba(184,168,130,.4)] transition-all">
          Enquire →
        </a>
      </div>
    </div>
  )
}

export default function Locations() {
  // Duplicate marquee items for seamless loop
  const marquee = [...marqueeLocations, ...marqueeLocations]

  return (
    <section id="locations" aria-labelledby="loc-title"
      className="overflow-hidden px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,10rem)]"
      style={{ background: 'linear-gradient(180deg,#262019 0%,#1B1610 100%)' }}>

      {/* Header */}
      <div className="flex justify-between items-start gap-8 flex-wrap
        mb-[clamp(3.5rem,8vw,6.5rem)]">
        <div>
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-[1.1rem]">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Our Playground
          </p>
          <h2 id="loc-title"
            className="font-serif italic font-light leading-[1.1] text-white/90"
            style={{ fontSize: 'clamp(2rem,4.5vw,3.6rem)', maxWidth: '20ch' }}>
            The Venues We Know<br />by Heart
          </h2>
        </div>
        <p className="text-[.66rem] font-light tracking-[.08em] leading-[2]
          text-white/55 max-w-[34ch] self-end">
          Each venue on the Amalfi Coast has its own acoustic signature, its own logistical
          constraints, its own light at golden hour. We know them all.
        </p>
      </div>

      {/* Venue rows */}
      <div className="flex flex-col border-t border-white/[.08]" role="list">
        {venues.map((v, i) => <VenueRow key={v.id} venue={v} index={i} />)}
      </div>

      {/* Scrolling marquee */}
      <div className="overflow-hidden mt-[clamp(3.5rem,8vw,6rem)]
        border-t border-white/[.06] pt-7" aria-hidden="true">
        <div className="flex gap-12 w-max"
          style={{ animation: 'marquee 32s linear infinite' }}>
          {marquee.map((name, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="font-serif italic font-light whitespace-nowrap
                text-white/10 hover:text-[rgba(184,168,130,.45)] transition-colors cursor-default"
                style={{ fontSize: 'clamp(.85rem,1.4vw,1.05rem)', letterSpacing: '.04em' }}>
                {name}
              </span>
              <span className="text-[rgba(184,168,130,.18)] font-light">·</span>
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
