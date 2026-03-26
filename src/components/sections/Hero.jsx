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
        <video
          autoPlay muted playsInline loop preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/Sito_Wedding_-_Hero_Loop.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,26,26,.25) 0%, rgba(26,26,26,.42) 45%, rgba(26,26,26,.72) 100%)',
          }}
        />
      </div>

      {/* Vertical editorial tag */}
      <div
        aria-hidden="true"
        className="absolute right-[clamp(1.5rem,4vw,4rem)] top-1/2 -translate-y-1/2 z-10
          hidden sm:flex flex-col items-center gap-[.9rem]"
        style={{ opacity: 0, animation: 'up .9s ease 1.4s forwards' }}
      >
        <div style={{ width: '.5px', height: 52,
          background: 'linear-gradient(to bottom, transparent, rgba(184,168,130,.45))' }} />
        <span className="text-[.5rem] font-light tracking-[.22em] uppercase text-white/25"
          style={{ writingMode: 'vertical-rl' }}>
          Amalfi Coast · Est. 2008
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start
        px-[clamp(1.5rem,6vw,5rem)] pt-[clamp(5rem,12vw,9rem)] h-full">

        <p className="text-[.56rem] font-normal tracking-[.28em] uppercase text-white/85
          mb-[1.1rem]"
          style={{ opacity: 0, animation: 'up .9s ease .3s forwards' }}>
          Bespoke Wedding Music · Southern Italy
        </p>

        <h1 id="hero-h1"
          className="font-serif italic font-light leading-[1.02] text-[#F9F8F7]"
          style={{
            fontSize: 'clamp(3rem,7vw,6.5rem)',
            maxWidth: '14ch',
            opacity: 0,
            animation: 'up 1s ease .55s forwards',
          }}>
          The Sound of an<br />Unforgettable Day
        </h1>

        <div aria-hidden="true"
          className="w-9 h-[.5px] bg-[#B8A882] my-7"
          style={{ opacity: 0, animation: 'up .9s ease .8s forwards' }} />

        <h2 className="text-[.68rem] font-normal tracking-[.14em] text-white/85 max-w-[44ch] leading-[1.95]"
          style={{ opacity: 0, animation: 'up .9s ease 1s forwards' }}>
          Live music for destination weddings — Ravello, Positano &amp; Sorrento
        </h2>

        <div className="flex items-center gap-10 mt-9 flex-wrap"
          style={{ opacity: 0, animation: 'up .9s ease 1.2s forwards' }}>

          <a href="/#contact"
            className="text-[.6rem] font-light tracking-[.22em] uppercase text-[#F9F8F7]
              pb-1 border-b border-white/45 no-underline
              hover:text-[#B8A882] hover:border-[#B8A882] transition-all">
            Enquire About Your Date
          </a>

          <a href="/#services"
            className="text-[.6rem] font-normal tracking-[.2em] uppercase text-white/85
              no-underline flex items-center gap-3 hover:text-white/75 transition-colors group">
            <span className="inline-block w-7 h-[.5px] bg-current relative
              group-hover:w-10 transition-all duration-300">
              <span className="absolute right-0 top-[-3px] w-[6px] h-[6px]
                border-r-[.5px] border-t-[.5px] border-current rotate-45" />
            </span>
            Discover Our Music
          </a>
        </div>
      </div>

      {/* Location strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10
        border-t border-white/[.1] px-[clamp(1.5rem,6vw,5rem)] py-[.85rem]
        flex items-center gap-[1.1rem] flex-wrap"
        aria-label="Locations served"
        style={{ opacity: 0, animation: 'up .9s ease 1.55s forwards' }}>
        {['Ravello','Positano','Sorrento','Praiano','Villa Cimbrone','Villa Rufolo','Amalfi']
          .map((loc, i, arr) => (
            <span key={loc} className="flex items-center gap-[1.1rem]">
              <span className="text-[.5rem] font-light tracking-[.22em] uppercase text-white/28">
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
