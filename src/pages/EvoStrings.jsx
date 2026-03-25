// pages/EvoStrings.jsx
import { useEffect } from 'react'
import { ensembles } from '@/data/ensembles.js'
import { ensembleSchema } from '@/data/schema.js'

const ensemble = ensembles.find(e => e.id === 'evostrings')

export default function EvoStrings() {
  useEffect(() => {
    document.title = 'EvoStrings — Luxury String Ensemble | Amalfi Coast Weddings'
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(ensembleSchema(ensemble))
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <div className="bg-[#F9F8F7] pt-[68px]">

      {/* Hero — dark editorial */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            String Ensemble · Amalfi Coast
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            EvoStrings
          </h1>
          <p className="text-[.68rem] font-light tracking-[.14em] text-white/60
            max-w-[44ch] leading-[1.95] mb-8">
            {ensemble.subLabel}
          </p>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2]
            text-white/55 max-w-[60ch]">
            Italy's reference string ensemble for the luxury wedding sector —
            conceived and directed by Donato Cipriano from Pompei, Campania.
          </p>
        </div>
      </section>

      {/* Photo / video placeholder */}
      <section className="w-full" style={{ aspectRatio: '16/6', background: '#1D2535' }}>
        {/*
          PHOTO: Replace with:
          <img src="/images/evostrings-hero.jpg"
               alt="EvoStrings performing at Villa Cimbrone, Ravello"
               className="w-full h-full object-cover" />

          VIDEO: Or replace with:
          <video autoPlay muted playsInline loop className="w-full h-full object-cover">
            <source src="/videos/evostrings-reel.mp4" type="video/mp4" />
          </video>
        */}
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-[.5rem] tracking-[.2em] uppercase text-white/15">
            EvoStrings — hero image / video
          </span>
        </div>
      </section>

      {/* Description */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-[clamp(3rem,6vw,6rem)]">
          <div>
            <p className="eyebrow mb-5">About the Ensemble</p>
            <h2 className="section-title mb-8" style={{ maxWidth: '20ch' }}>
              Four Voices,<br />One Silence Broken
            </h2>
            <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
            <p className="text-[.72rem] font-light tracking-[.05em] leading-[2]
              text-[#404040] max-w-[58ch] mb-6">
              {ensemble.description}
            </p>
            <div className="flex items-center gap-6 flex-wrap mt-8">
              <a href="/contact" className="link-underline">Enquire About EvoStrings</a>
              <a href={ensemble.officialUrl} className="link-ext"
                target="_blank" rel="noopener noreferrer">
                <span>↗</span> Visit EvoStrings.it
              </a>
            </div>
          </div>

          {/* Configurations */}
          <div className="flex flex-col gap-0 border-t border-black/[.09]">
            {[
              { label: 'Duo',     desc: 'Two violins. For intimate garden ceremonies and cocktail receptions in smaller venues.' },
              { label: 'Trio',    desc: 'Violin, viola and cello. The ideal balance of presence and delicacy for terraces and loggias.' },
              { label: 'Quartet', desc: 'The full string quartet. For grand ceremonies in historic salons and open-air amphitheatres.' },
            ].map(({ label, desc }) => (
              <div key={label}
                className="py-6 border-b border-black/[.09] group cursor-default">
                <div className="flex items-start gap-4">
                  <span className="text-[.5rem] font-light tracking-[.22em] uppercase
                    text-[#B8A882] opacity-60 pt-[.15rem] w-12 flex-shrink-0">
                    {label}
                  </span>
                  <p className="text-[.64rem] font-light tracking-[.06em] leading-[1.95]
                    text-[#404040] group-hover:text-[#1A1A1A] transition-colors">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues where EvoStrings performs */}
      <section className="bg-[#F9F8F7] border-t border-black/[.09]
        px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,6rem)]">
        <p className="eyebrow mb-5">Our Venues</p>
        <h2 className="section-title mb-10" style={{ maxWidth: '22ch' }}>
          Where EvoStrings Has Performed
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-t border-black/[.09]">
          {['Villa Cimbrone','Palazzo Avino','Belmond Hotel Caruso',
            'Villa Treville','Monastero Santa Rosa','Villa Eva'].map(v => (
            <div key={v}
              className="py-5 px-4 border-b border-r border-black/[.09] last:border-r-0
                hover:bg-black/[.02] transition-colors cursor-default">
              <span className="font-serif italic font-light text-[1rem] text-[#1A1A1A]">
                {v}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[24ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Book EvoStrings<br />for Your Wedding.
        </p>
        <a href="mailto:info@donatocipriano.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>

    </div>
  )
}
