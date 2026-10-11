// components/sections/Locations.jsx
import { useEffect, useRef } from 'react'
import { venues, marqueeLocations } from '@/data/venues.js'
import { enquiryHref } from '@/lib/contactLinks.js'

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
      className="grid border-b border-black/[.09] py-8 relative group"
      style={{ gridTemplateColumns: '3rem 1fr auto', gap: 'clamp(1rem,3vw,2.5rem)' }}
    >
      {/* Gold line on hover */}
      <div className="absolute left-0 bottom-[-0.5px] right-0 h-[.5px] bg-[#B8A882]
        scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      <span className="text-[.6rem] font-light tracking-[.2em] text-[#8A7A5A]/70 pt-[.3rem]">
        {venue.index}
      </span>

      <div className="flex flex-col gap-[.6rem]">
        <span className="text-[.6rem] font-light tracking-[.24em] uppercase text-[#8A7A5A]">
          {venue.location}
        </span>
        <h3 className="font-serif italic font-light text-[#1A1A1A]"
          style={{ fontSize: 'clamp(1.35rem,2.4vw,2rem)', lineHeight: 1.15 }}
          itemProp="name">
          {venue.name}
        </h3>
        <p className="text-[.84rem] font-light tracking-[.015em] leading-[1.85]
          text-[#404040] max-w-[58ch]"
          itemProp="description">
          {venue.description}
        </p>
        <div className="flex gap-[.55rem] flex-wrap mt-[.3rem]">
          {venue.tags.map(tag => (
            <span key={tag}
              className="text-[.56rem] font-light tracking-[.18em] uppercase
                text-[#8A7A5A] border border-[#8A7A5A]/30 px-[.55rem] py-[.22rem]
                group-hover:border-[#8A7A5A]/60 transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right col — enquire link */}
      <div className="hidden sm:flex flex-col items-end justify-center pt-[.15rem]">
        <a href={enquiryHref({ venue: venue.name })}
          className="text-[.6rem] font-light tracking-[.2em] uppercase no-underline
            text-[#404040] border-b border-[#1A1A1A]/25 pb-[2px] whitespace-nowrap
            hover:text-[#8A7A5A] group-hover:border-[#8A7A5A] transition-all">
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
      style={{ background: '#F2EDE6' }}>

      {/* Header */}
      <div className="flex justify-between items-start gap-8 flex-wrap
        mb-[clamp(3.5rem,8vw,6.5rem)]">
        <div>
          <p className="text-[.64rem] font-light tracking-[.25em] uppercase text-[#8A7A5A]
            flex items-center gap-3 mb-[1.1rem]">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Our Playground
          </p>
          <h2 id="loc-title"
            className="font-serif italic font-light leading-[1.1] text-[#1A1A1A]"
            style={{ fontSize: 'clamp(2rem,4.5vw,3.6rem)', maxWidth: '20ch' }}>
            The Venues We Know<br />by Heart
          </h2>
        </div>
        <p className="text-[.86rem] font-light tracking-[.015em] leading-[1.85]
          text-[#404040] max-w-[34ch] self-end">
          Each venue on the Amalfi Coast has its own acoustic signature, its own logistical
          constraints, its own light at golden hour. We know them all.
        </p>
      </div>

      {/* Venue rows */}
      <div className="flex flex-col border-t border-black/[.09]" role="list">
        {venues.map((v, i) => <VenueRow key={v.id} venue={v} index={i} />)}
      </div>

      {/* Scrolling marquee */}
      <div className="overflow-hidden mt-[clamp(3.5rem,8vw,6rem)]
        border-t border-black/[.06] pt-7" aria-hidden="true">
        <div className="flex gap-12 w-max"
          style={{ animation: 'marquee 32s linear infinite' }}>
          {marquee.map((name, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="font-serif italic font-light whitespace-nowrap
                text-[#1A1A1A]/20 hover:text-[#8A7A5A] transition-colors cursor-default"
                style={{ fontSize: 'clamp(.85rem,1.4vw,1.05rem)', letterSpacing: '.04em' }}>
                {name}
              </span>
              <span className="text-[#8A7A5A]/40 font-light">·</span>
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
