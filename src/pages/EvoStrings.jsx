// pages/EvoStrings.jsx
import { useEffect, useState } from 'react'
import { ensembles } from '@/data/ensembles.js'
import { ensembleSchema } from '@/data/schema.js'

const ensemble = ensembles.find(e => e.id === 'evostrings')

const HERO_IMAGES = [
  { src: '/images/EvoStrings/EvoStrings%200.jpeg', pos: 'center 75%' },
  { src: '/images/EvoStrings/EvoStrings 2.jpg', pos: 'center 15%' },
  { src: '/images/EvoStrings/EvoStrings 3.jpg', pos: 'center 10%' },
]

export default function EvoStrings() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    document.title = 'String Quartet & Ensemble for Weddings | EvoStrings | Wedding Music Ravello'
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m); return m })()
    meta.content = 'EvoStrings performs as duo, trio and quartet at Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso. Classical and contemporary repertoire for ceremonies and receptions on the Amalfi Coast.'
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MusicGroup',
      name: 'EvoStrings',
      description: 'String ensemble available as duo, trio and quartet for wedding ceremonies and receptions on the Amalfi Coast. Performs at Villa Cimbrone, Palazzo Avino and Belmond Hotel Caruso in Ravello.',
      genre: ['Classical', 'Contemporary', 'Cinematic'],
      areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
      url: 'https://www.weddingmusicravello.com/music/evostrings',
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <div className="bg-[#F9F8F7] pt-[68px]">

      {/* Hero — slideshow background */}
      <section className="relative overflow-hidden px-[clamp(1.5rem,6vw,5rem)] py-[clamp(6rem,14vw,11rem)]">
        {HERO_IMAGES.map(({ src, pos }, i) => (
          <img
            key={src}
            src={src}
            alt="EvoStrings string ensemble performing on the Amalfi Coast"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out"
            style={{ objectPosition: pos, opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(26,26,26,.82) 40%, rgba(26,26,26,.45) 100%)' }} />
        <div className="relative z-10 max-w-4xl">
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
            A reference string ensemble for the luxury wedding sector on the
            Amalfi Coast — available as string duo, trio and quartet.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="flex flex-col gap-[clamp(3rem,6vw,5rem)]">
          <div>
            <p className="eyebrow mb-5">About the Ensemble</p>
            <h2 className="section-title mb-8" style={{ maxWidth: '20ch' }}>
              Three Voices,<br />One Silence Broken
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
              { label: 'Duo',     desc: 'Violin and cello. For intimate garden ceremonies and cocktail receptions in smaller venues.' },
              { label: 'Trio',    desc: 'Two violins and cello. The ideal balance of presence and delicacy for terraces and loggias.' },
              { label: 'Quartet', desc: 'The full string quartet. Ideal for those who desire an authentic classical experience, where the musical choice defines the atmosphere — not the space.' },
            ].map(({ label, desc }) => (
              <div key={label}
                className="py-6 border-b border-black/[.09] group cursor-default">
                <div className="flex items-start gap-4">
                  <span className="text-[.5rem] font-normal tracking-[.22em] uppercase
                    text-[#B8A882] pt-[.15rem] w-12 flex-shrink-0">
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

      {/* Video Section */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
          flex items-center gap-3 mb-5">
          <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
          Live Performances
        </p>
        <h2 className="font-serif italic font-light leading-[1.08] text-[#F9F8F7] mb-[clamp(2.5rem,6vw,5rem)]"
          style={{ fontSize: 'clamp(2rem,4.5vw,3.6rem)', maxWidth: '18ch' }}>
          Watch EvoStrings Live
        </h2>

        {/* Hero video */}
        <div className="w-full mb-4 overflow-hidden rounded-sm
          transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,.5)]"
          style={{ aspectRatio: '16/9' }}>
          <iframe
            src="https://www.youtube.com/embed/35YL651-TtU"
            title="EvoStrings - Live Performance"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Two secondary videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: 'emeweWCEfJw', title: 'EvoStrings - Wedding Performance' },
            { id: 'yKYFvmn9Jpc', title: 'EvoStrings - Live Music Experience' },
          ].map(({ id, title }) => (
            <div key={id}
              className="overflow-hidden rounded-sm
                transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,.5)]"
              style={{ aspectRatio: '16/9' }}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={title}
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
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
            'Villa Treville','Convento Anantara','Villa Eva'].map(v => (
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
        <a href="mailto:info@weddingmusicravello.com"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>

    </div>
  )
}
