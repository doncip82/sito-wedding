// components/sections/Services.jsx
import { useEffect, useRef } from 'react'
import { ensembles } from '@/data/ensembles.js'

function EnsembleCard({ ensemble, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(18px)'
    el.style.transition = `opacity .7s ease ${index * 0.1}s, transform .7s ease ${index * 0.1}s`
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        io.unobserve(el)
      }
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [index])

  return (
    <article
      ref={ref}
      role="listitem"
      itemScope itemType="https://schema.org/MusicGroup"
      className="flex flex-col border-r border-b border-black/[.09] last:border-r-0"
    >
      {/* Photo */}
      <div className="w-full overflow-hidden bg-[#1A1A1A]" style={{ aspectRatio: '4/5' }}>
        {/* Replace div with: <img src={ensemble.photo} alt={ensemble.photoAlt} className="w-full h-full object-cover" /> */}
        <div className={`w-full h-full flex items-end p-4
          ${index === 0 ? 'bg-[#1D2535]' : index === 1 ? 'bg-[#1A2830]' : 'bg-[#252018]'}`}>
          <span className="text-[.45rem] tracking-[.18em] uppercase text-white/15 font-light">
            {ensemble.name} — add photo
          </span>
        </div>
      </div>

      {/* Video placeholder / embed */}
      {/* ── VIDEO: {ensemble.name} ─────────────────────────────────────
          Replace the div below with:
          <div style={{ aspectRatio:'16/9', borderTop:'.5px solid rgba(26,26,26,.09)' }}>
            <iframe src="https://www.youtube.com/embed/YOUR_ID"
              title="{ensemble.name} — Wedding Performance"
              frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
              style={{ width:'100%', height:'100%' }} />
          </div>
      ──────────────────────────────────────────────────────────────── */}
      <button className="flex items-center gap-3 px-7 py-[.85rem]
        border-t border-black/[.09] hover:bg-[rgba(184,168,130,.06)] transition-colors text-left">
        <span className="text-[.7rem] text-[#B8A882] opacity-70">▷</span>
        <span className="text-[.54rem] font-light tracking-[.16em] uppercase text-[#404040]">
          Watch {ensemble.name} in Performance
        </span>
      </button>

      {/* Copy */}
      <div className="px-7 pt-6 pb-8 flex flex-col flex-1">
        <span className="text-[.5rem] font-light tracking-[.25em] text-[#B8A882] mb-[.85rem]">
          {ensemble.index}
        </span>
        <h3 className="font-serif italic font-light text-[clamp(1.4rem,2.2vw,1.9rem)]
          leading-[1.15] text-[#1A1A1A] mb-[.85rem]" itemProp="name">
          {ensemble.name}
        </h3>
        <p className="text-[.56rem] font-light tracking-[.18em] uppercase text-[#8A7A5A]
          -mt-[.4rem] mb-[.6rem] font-[300]">
          {ensemble.subLabel}
        </p>

        {ensemble.viralBadge && (
          <p className="flex items-center gap-[.55rem] text-[.56rem] font-[500]
            tracking-[.14em] uppercase text-[#6B5C3A] mb-[.5rem]">
            <span className="w-[5px] h-[5px] rounded-full bg-[#6B5C3A] flex-shrink-0
              animate-pulse" />
            {ensemble.viralBadge}
          </p>
        )}

        <p className="text-[.64rem] font-light tracking-[.06em] leading-[1.95]
          text-[#404040] flex-1 mb-6">
          {ensemble.description}
        </p>

        <div className="flex items-center gap-6 flex-wrap">
          <a href="/#contact" className="link-underline">Enquire</a>

          {ensemble.officialUrl && (
            <a href={ensemble.officialUrl} className="link-ext"
              target="_blank" rel="noopener noreferrer">
              <span>↗</span> Visit Official Site
            </a>
          )}
          {ensemble.youtubeUrl && (
            <a href={ensemble.youtubeUrl} className="link-ext"
              target="_blank" rel="noopener noreferrer"
              aria-label={`Watch ${ensemble.name} on YouTube`}>
              <span className="inline-flex items-center justify-center w-[22px] h-[22px]
                border border-current rounded-full hover:bg-[#1A1A1A] hover:text-white
                transition-all">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path d="M1 1L9 6L1 11V1Z" stroke="currentColor" strokeWidth=".8"
                    strokeLinejoin="round"/>
                </svg>
              </span>
              Watch on YouTube
            </a>
          )}
          {ensemble.officialUrl?.includes('donatocipriano') && (
            <a href={ensemble.officialUrl} className="link-ext"
              target="_blank" rel="noopener noreferrer">
              <span>↗</span> Full Portfolio
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="s-title"
      className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,10rem)]">

      <div className="flex justify-between items-start gap-8 mb-[clamp(3.5rem,8vw,7rem)] flex-wrap">
        <div>
          <p className="eyebrow mb-[1.1rem]">Our Music</p>
          <h2 id="s-title" className="section-title" style={{ maxWidth: '18ch' }}>
            Every Ensemble,<br />Composed for the Moment
          </h2>
        </div>
        <p className="text-[.64rem] font-light tracking-[.1em] leading-[1.95] text-[#404040]
          max-w-[30ch] self-end text-right">
          Exclusive bespoke planning for every celebration.<br />
          Quality and detailed curation, without compromise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/[.09]"
        role="list">
        {ensembles.map((e, i) => (
          <EnsembleCard key={e.id} ensemble={e} index={i} />
        ))}
      </div>
    </section>
  )
}
