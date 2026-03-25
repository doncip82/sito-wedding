// pages/Home.jsx
import { useEffect } from 'react'
import { baseSchema } from '@/data/schema.js'
import Hero      from '@/components/sections/Hero.jsx'
import Services  from '@/components/sections/Services.jsx'
import Locations from '@/components/sections/Locations.jsx'
import About     from '@/components/sections/About.jsx'

// Contact strip (inline — simple enough not to warrant a separate file)
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

// Occasions strip (For Every Moment section — inline data for brevity)
import { ensembles } from '@/data/ensembles.js'
function Occasions() {
  return (
    <section id="occasions" aria-labelledby="ms-title"
      className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,10rem)] bg-[#F9F8F7]">
      <div className="flex justify-between items-start gap-8 mb-[clamp(3.5rem,8vw,7rem)] flex-wrap">
        <div>
          <p className="eyebrow mb-[1.1rem]">For Every Moment of Your Day</p>
          <h2 id="ms-title" className="section-title" style={{ maxWidth: '18ch' }}>
            Three Formations,<br />One Artistic Vision
          </h2>
        </div>
        <p className="text-[.64rem] font-light tracking-[.1em] leading-[1.95] text-[#404040]
          max-w-[30ch] self-end text-right">
          Each ensemble is personally directed<br />
          by Donato Cipriano — curated for your day alone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/[.09]" role="list">
        {ensembles.map((e, i) => (
          <article key={e.id} role="listitem"
            className="flex flex-col border-r border-b border-black/[.09] last:border-r-0">
            <p className="text-[.5rem] font-light tracking-[.22em] uppercase text-[#B8A882]
              px-7 pt-5">
              {e.occasionMoment}
            </p>
            {/* Photo placeholder */}
            <div className="w-full mt-4 overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <div className={`w-full h-full
                ${i===0?'bg-gradient-to-br from-[#1C2430] to-[#2A3040]':
                  i===1?'bg-gradient-to-br from-[#1A2220] to-[#253028]':
                        'bg-gradient-to-br from-[#1E1628] to-[#2A1E38]'}`} />
            </div>
            <div className="px-7 pt-6 pb-8 flex flex-col gap-3 flex-1">
              <div className="font-serif italic font-light text-[.9rem]
                tracking-[.1em] text-[#B8A882] opacity-70">
                {['I','II','III'][i]}
              </div>
              <h3 className="font-serif italic font-light text-[clamp(1.5rem,2.2vw,1.9rem)]
                leading-[1.15] text-[#1A1A1A]">
                {e.name}
              </h3>
              <p className="text-[.63rem] font-light tracking-[.06em] leading-[1.95]
                text-[#404040] flex-1">
                {e.occasionDescription}
              </p>
              <div className="flex gap-[.5rem] flex-wrap my-1">
                {e.tags.map(t => (
                  <span key={t}
                    className="text-[.46rem] font-light tracking-[.18em] uppercase
                      text-[#404040] border border-black/[.09] px-[.55rem] py-[.22rem]">
                    {t}
                  </span>
                ))}
              </div>
              <a href="/#contact" className="link-underline self-start">Enquire</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  // Inject JSON-LD into <head> on mount
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(baseSchema)
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <ContactStrip />
      <Occasions />
      <Locations />
      <About />
    </>
  )
}

// vite-ssg: export head meta for static pre-rendering
export const frontmatter = {
  title: 'Amalfi Strings — Bespoke Wedding Music by Donato Cipriano | Amalfi Coast',
  description:
    'EvoStrings, Trilogy Trio and solo violin performances for luxury destination weddings in Ravello, Positano and Sorrento. Artistic direction by Donato Cipriano.',
}
