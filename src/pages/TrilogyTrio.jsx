// pages/TrilogyTrio.jsx
import { useEffect, useState } from 'react'
import { Head } from 'vite-react-ssg'
import { ensembles } from '@/data/ensembles.js'
import { ensembleSchema } from '@/data/schema.js'

const ensemble = ensembles.find(e => e.id === 'trilogy-trio')

const trilogyTrioSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Trilogy Trio',
  description: 'Violin, cello and piano trio performing cinematic, pop and classical repertoire for weddings and private events on the Amalfi Coast.',
  genre: ['Cinematic', 'Pop', 'Classical'],
  areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
  url: 'https://www.weddingmusicravello.com/trilogy-trio',
}

const HERO_IMAGES = [
  { src: '/images/Trilogy%20Trio/Trilogy%20Trio%200.JPG', pos: 'center center' },
  { src: '/images/Trilogy%20Trio/Trilogy%20Trio%201.jpg', pos: 'center center' },
  { src: '/images/Trilogy%20Trio/Trilogy%20Trio%202.jpg', pos: 'center center' },
  { src: '/images/Trilogy%20Trio/Trilogy%20Trio%203.jpg', pos: 'center center' },
]

export default function TrilogyTrio() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>String Trio & Piano for Weddings in Italy | Trilogy Trio | Wedding Music Ravello</title>
        <meta name="description" content="Trilogy Trio — violin, cello and piano — performs cinematic, pop and classical repertoire for weddings and private events along the Amalfi Coast." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/trilogy-trio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/trilogy-trio" />
        <meta property="og:title" content="String Trio & Piano for Weddings in Italy | Trilogy Trio | Wedding Music Ravello" />
        <meta property="og:description" content="Trilogy Trio — violin, cello and piano — cinematic, pop and classical repertoire for weddings and private events on the Amalfi Coast." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(trilogyTrioSchema)}</script>
      </Head>

      {/* Hero — slideshow background */}
      <section className="relative overflow-hidden px-[clamp(1.5rem,6vw,5rem)] py-3.5 md:py-[clamp(5rem,12vw,9rem)]">
        {HERO_IMAGES.map(({ src, pos }, i) => (
          <img
            key={src}
            src={src}
            alt="Trilogy Trio performing on the Amalfi Coast"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out"
            style={{ objectPosition: pos, opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-[rgba(26,26,26,.38)]" />
        <div className="relative z-10 max-w-4xl">
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
            violin, cello and piano performing across the Amalfi Coast.
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
              <a href="/contact" className="link-underline">Request a booking</a>
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
                { composer: 'John Legend',       title: 'All of Me' },
                { composer: 'Elvis Presley',    title: 'Can\'t Help Falling in Love' },
                { composer: 'Coldplay',         title: 'The Scientist' },
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

      {/* Video Section */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
          flex items-center gap-3 mb-5">
          <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
          Live Performances
        </p>
        <h2 className="font-serif italic font-light leading-[1.08] text-[#F9F8F7] mb-[clamp(2.5rem,6vw,5rem)]"
          style={{ fontSize: 'clamp(2rem,4.5vw,3.6rem)', maxWidth: '18ch' }}>
          Watch Trilogy Trio Live
        </h2>

        {/* Hero video */}
        <div className="w-full mb-4 overflow-hidden rounded-sm
          transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,.5)]"
          style={{ aspectRatio: '16/9' }}>
          <iframe
            src="https://www.youtube.com/embed/7hp25qXj8ZU"
            title="Trilogy Trio - Live Performance"
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
            { id: 'leddQy0spuE', title: 'Trilogy Trio - Wedding Performance' },
            { id: 'sbFM3i88IFI', title: 'Trilogy Trio - Live Music Experience' },
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

      {/* Social */}
      <section className="bg-[#F9F8F7] border-t border-black/[.09]
        px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,6rem)]">
        <p className="eyebrow mb-5">Follow</p>
        <h2 className="section-title mb-10" style={{ maxWidth: '22ch' }}>
          Find Trilogy Trio Online
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Spotify */}
          <div className="border border-black/[.09] overflow-hidden flex flex-col rounded-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/[.09]">
              <span className="text-[.5rem] tracking-[.22em] uppercase font-light text-[#404040]">Spotify</span>
              <a href="https://open.spotify.com/artist/5fDrzYVHgAdzKgPAmJbLzD"
                target="_blank" rel="noopener noreferrer"
                className="text-[.46rem] tracking-[.16em] uppercase text-[#B8A882] no-underline hover:text-[#8A7A5A] transition-colors">
                Follow ↗
              </a>
            </div>
            <iframe
              src="https://open.spotify.com/embed/artist/5fDrzYVHgAdzKgPAmJbLzD?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Trilogy Trio on Spotify"
            />
          </div>

          {/* Instagram */}
          <div className="border border-black/[.09] overflow-hidden flex flex-col rounded-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/[.09]">
              <span className="text-[.5rem] tracking-[.22em] uppercase font-light text-[#404040]">Instagram</span>
              <a href="https://www.instagram.com/trilogytriolive"
                target="_blank" rel="noopener noreferrer"
                className="text-[.46rem] tracking-[.16em] uppercase text-[#B8A882] no-underline hover:text-[#8A7A5A] transition-colors">
                Follow ↗
              </a>
            </div>
            <iframe
              src="https://www.instagram.com/trilogytriolive/embed/"
              title="Trilogy Trio on Instagram"
              className="w-full"
              height="352"
              scrolling="no"
              frameBorder="0"
              loading="lazy"
            />
          </div>

          {/* YouTube */}
          <div className="border border-black/[.09] overflow-hidden flex flex-col rounded-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/[.09]">
              <span className="text-[.5rem] tracking-[.22em] uppercase font-light text-[#404040]">YouTube</span>
              <a href="https://www.youtube.com/watch?v=7hp25qXj8ZU"
                target="_blank" rel="noopener noreferrer"
                className="text-[.46rem] tracking-[.16em] uppercase text-[#B8A882] no-underline hover:text-[#8A7A5A] transition-colors">
                Watch ↗
              </a>
            </div>
            <div className="flex-1 min-h-0">
              <iframe
                src="https://www.youtube.com/embed/7hp25qXj8ZU"
                title="Trilogy Trio on YouTube"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="flex-1 min-h-0">
              <iframe
                src="https://www.youtube.com/embed/leddQy0spuE"
                title="Trilogy Trio on YouTube"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
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
        <a href="/contact"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>

    </div>
  )
}
