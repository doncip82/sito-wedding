// components/sections/Hero.jsx

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-h1"
      className="relative h-svh min-h-[580px] overflow-hidden grid"
    >
      {/* ── VIDEO BACKGROUND ─────────────────────────────────────────
          Currently: Sito_Wedding_-_Hero_Loop.mp4
          To replace: change the src below to your new video filename.
          File must be placed in /public/videos/
      ──────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden bg-[#1C2535]">
        {/* SVG filter: gamma > 1 darkens midtones while preserving shadows and highlights */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <filter id="hero-midtones">
              <feComponentTransfer>
                <feFuncR type="gamma" amplitude="1" exponent="1.22" offset="0" />
                <feFuncG type="gamma" amplitude="1" exponent="1.22" offset="0" />
                <feFuncB type="gamma" amplitude="1" exponent="1.22" offset="0" />
              </feComponentTransfer>
            </filter>
          </defs>
        </svg>
        <video
          autoPlay muted playsInline loop preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'url(#hero-midtones)' }}
        >
          <source src="/videos/Ravello_Loop.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay — vertical */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,26,26,.18) 0%, rgba(26,26,26,.22) 45%, rgba(26,26,26,.62) 100%)',
          }}
        />
        {/* Horizontal overlay — left fade for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(26,26,26,.48) 0%, rgba(26,26,26,.12) 55%, transparent 80%)',
          }}
        />
      </div>


      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start
        px-[clamp(1.5rem,6vw,5rem)] pt-[clamp(5rem,12vw,9rem)] h-full">

        <p className="text-[.56rem] font-normal tracking-[.28em] uppercase text-white
          mb-[1.1rem]"
          style={{ opacity: 0, animation: 'up .9s ease .3s forwards', textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)' }}>
          Bespoke Wedding Music · Amalfi Coast
        </p>

        <h1 id="hero-h1"
          className="font-serif italic font-light leading-[1.02] text-[#F9F8F7]"
          style={{
            fontSize: 'clamp(3rem,7vw,6.5rem)',
            maxWidth: '16ch',
            opacity: 0,
            animation: 'up 1s ease .55s forwards',
            textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.6)',
          }}>
          Live Wedding Music in<br />Ravello, Positano &amp; Sorrento
        </h1>

        <div aria-hidden="true"
          className="w-9 h-[.5px] bg-[#B8A882] my-7"
          style={{ opacity: 0, animation: 'up .9s ease .8s forwards' }} />

        <h2 className="text-[.80rem] font-normal tracking-[.14em] text-white max-w-[48ch] leading-[1.95]"
          style={{ opacity: 0, animation: 'up .9s ease 1s forwards', textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)' }}>
          A platform for curated live music at destination weddings across the Amalfi Coast — from string quartets at Villa Cimbrone to jazz ensembles at Belmond Hotel Caruso.
        </h2>

        <div className="flex items-center gap-10 mt-9 flex-wrap"
          style={{ opacity: 0, animation: 'up .9s ease 1.2s forwards' }}>
          <a href="/music"
            className="text-[.6rem] font-light tracking-[.22em] uppercase text-white
              pb-1 border-b border-white/60 no-underline
              hover:text-[#B8A882] hover:border-[#B8A882] transition-all"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
            Explore the Ensembles ↓
          </a>
        </div>
      </div>

      {/* Location strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10
        border-t border-white/[.1] px-[clamp(1.5rem,6vw,5rem)] py-[.85rem]
        flex items-center gap-[1.1rem] flex-wrap"
        aria-label="Locations served"
        style={{ opacity: 0, animation: 'up .9s ease 1.55s forwards' }}>
        {['Ravello','Positano','Praiano','Amalfi','Minori','Maiori','Sorrento','Sant\'Agnello','Vico Equense']
          .map((loc, i, arr) => (
            <span key={loc} className="flex items-center gap-[1.1rem]">
              <span className="text-[.5rem] font-normal tracking-[.22em] uppercase text-white/70">
                {loc}
              </span>
              {i < arr.length - 1 && (
                <span aria-hidden="true"
                  className="w-[2.5px] h-[2.5px] rounded-full bg-[#B8A882] opacity-35 flex-shrink-0" />
              )}
            </span>
          ))}
      </div>
    </section>
  )
}
