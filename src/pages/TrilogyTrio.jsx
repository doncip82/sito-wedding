// pages/TrilogyTrio.jsx
import { useEffect } from 'react'
import { ensembles } from '@/data/ensembles.js'
import { ensembleSchema } from '@/data/schema.js'

const ensemble = ensembles.find(e => e.id === 'trilogy-trio')

export default function TrilogyTrio() {
  useEffect(() => {
    document.title = 'Trilogy Trio — Violin, Cello & Piano | 1M+ Views | Amalfi Coast Weddings'
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(ensembleSchema(ensemble))
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <div className="bg-[#F9F8F7] pt-[68px]">

      {/* Hero */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="max-w-4xl">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Violin · Cello · Piano
          </p>
          <h1 className="font-serif italic font-light leading-[1.02] text-[#F9F8F7] mb-4"
            style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>
            Trilogy Trio
          </h1>
          {/* Viral badge */}
          <p className="flex items-center gap-[.55rem] text-[.56rem] font-[500]
            tracking-[.14em] uppercase text-[#B8A882] mb-6">
            <span className="w-[5px] h-[5px] rounded-full bg-[#B8A882] animate-pulse" />
            A Global Viral Sensation · 1M+ Views on YouTube
          </p>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <p className="text-[.72rem] font-light tracking-[.06em] leading-[2]
            text-white/55 max-w-[60ch]">
            The ensemble where classical formation meets cinematic emotion —
            directed by Donato Cipriano.
          </p>
        </div>
      </section>

      {/* Video embed */}
      <section className="w-full bg-[#111]" style={{ aspectRatio: '16/9' }}>
        {/*
          VIDEO EMBED — Replace div with:
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Trilogy Trio — Official Performance Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <a href={ensemble.youtubeUrl}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 no-underline group">
            <span className="flex items-center justify-center w-16 h-16 rounded-full
              border border-white/30 group-hover:border-[#B8A882] transition-colors">
              <svg width="18" height="22" viewBox="0 0 10 12" fill="none">
                <path d="M1 1L9 6L1 11V1Z" stroke="white" strokeWidth=".8"
                  strokeLinejoin="round" opacity=".6"/>
              </svg>
            </span>
            <span className="text-[.56rem] font-light tracking-[.2em] uppercase text-white/40
              group-hover:text-[#B8A882] transition-colors">
              Watch on YouTube
            </span>
          </a>
          <p className="text-[.46rem] tracking-[.18em] uppercase text-white/15">
            Paste YouTube embed URL in code to activate
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-[clamp(3rem,6vw,6rem)]">
          <div>
            <p className="eyebrow mb-5">About the Ensemble</p>
            <h2 className="section-title mb-8" style={{ maxWidth: '20ch' }}>
              Three Instruments,<br />One Unexpected Conversation
            </h2>
            <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
            <p className="text-[.72rem] font-light tracking-[.05em] leading-[2]
              text-[#404040] max-w-[58ch] mb-6">
              {ensemble.description}
            </p>
            <div className="flex items-center gap-6 flex-wrap mt-8">
              <a href="/contact" className="link-underline">Enquire About Trilogy Trio</a>
              <a href={ensemble.youtubeUrl} className="link-ext"
                target="_blank" rel="noopener noreferrer"
                aria-label="Watch Trilogy Trio on YouTube">
                <span className="inline-flex items-center justify-center w-[22px] h-[22px]
                  border border-current rounded-full">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M1 1L9 6L1 11V1Z" stroke="currentColor" strokeWidth=".8"
                      strokeLinejoin="round"/>
                  </svg>
                </span>
                1M+ Views on YouTube
              </a>
            </div>
          </div>

          {/* Repertoire */}
          <div>
            <p className="eyebrow mb-6">Sample Repertoire</p>
            <div className="flex flex-col border-t border-black/[.09]">
              {[
                { composer: 'Hans Zimmer',      title: 'Time (Inception)' },
                { composer: 'Ennio Morricone',  title: 'Gabriel\'s Oboe' },
                { composer: 'Nino Rota',        title: 'The Godfather Theme' },
                { composer: 'Radiohead',        title: 'Creep (Chamber Version)' },
                { composer: 'Coldplay',         title: 'The Scientist' },
                { composer: 'Max Richter',      title: 'On the Nature of Daylight' },
              ].map(({ composer, title }) => (
                <div key={title}
                  className="py-4 border-b border-black/[.09] flex justify-between
                    items-baseline gap-4 hover:bg-black/[.02] transition-colors px-1">
                  <span className="font-serif italic font-light text-[.9rem] text-[#1A1A1A]">
                    {title}
                  </span>
                  <span className="text-[.52rem] font-light tracking-[.14em] uppercase
                    text-[#B8A882] flex-shrink-0">
                    {composer}
                  </span>
                </div>
              ))}
              <p className="text-[.52rem] font-light tracking-[.12em] uppercase text-[#404040]
                pt-4 opacity-60">
                Full repertoire available on request
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[24ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Book Trilogy Trio<br />for Your Wedding.
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
