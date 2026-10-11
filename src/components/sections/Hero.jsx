// components/sections/Hero.jsx
import WhatsAppIcon from '@/components/ui/WhatsAppIcon.jsx'
import { whatsappUrl } from '@/lib/contactLinks.js'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-h1"
      className="relative h-svh min-h-[580px] overflow-hidden grid"
    >
      {/* ── VIDEO BACKGROUND ─────────────────────────────────────────
          Currently: Ravello_Hero.mp4 (1080p, 24fps, no audio, ~24MB)
          To replace: change the src below to your new video filename.
          File must be placed in /public/videos/
      ──────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden bg-[#1C2535]">
        {/* SVG filter: gamma > 1 darkens midtones while preserving shadows and highlights */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <filter id="hero-midtones">
              <feComponentTransfer>
                <feFuncR type="gamma" amplitude="1" exponent="1.08" offset="0" />
                <feFuncG type="gamma" amplitude="1" exponent="1.08" offset="0" />
                <feFuncB type="gamma" amplitude="1" exponent="1.08" offset="0" />
              </feComponentTransfer>
            </filter>
          </defs>
        </svg>
        <video
          autoPlay muted playsInline loop preload="auto"
          poster="/videos/posters/ravello-hero.jpg"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'url(#hero-midtones)' }}
        >
          <source src="/videos/Ravello_Hero.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay — vertical */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,26,26,.12) 0%, rgba(26,26,26,.12) 45%, rgba(26,26,26,.5) 100%)',
          }}
        />
        {/* Horizontal overlay — left fade for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(26,26,26,.42) 0%, rgba(26,26,26,.08) 55%, transparent 80%)',
          }}
        />
      </div>


      {/* Content — sizes and spacing also scale with the viewport HEIGHT (svh),
          so the contact CTAs stay on the first screen on short laptops
          (~650px) and small phones; tall screens are essentially unchanged. */}
      <div className="relative z-10 flex flex-col justify-start
        px-[clamp(1.5rem,6vw,5rem)] pt-[clamp(4.75rem,min(12vw,13svh),9rem)] h-full">

        <p className="text-[.64rem] font-normal tracking-[.28em] uppercase text-white
          mb-[1.1rem]"
          style={{ opacity: 0, animation: 'up .9s ease .3s forwards', textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)' }}>
          Bespoke Wedding Music · Amalfi Coast
        </p>

        <h1 id="hero-h1"
          className="font-serif italic font-light leading-[1.02] text-[#F9F8F7]"
          style={{
            fontSize: 'clamp(min(3rem,6.2svh),min(7vw,10svh),6.5rem)',
            maxWidth: '16ch',
            opacity: 0,
            animation: 'up 1s ease .55s forwards',
            textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.6)',
          }}>
          Live Wedding Music in<br />Ravello, Positano &amp; Sorrento
        </h1>

        <div aria-hidden="true"
          className="w-9 h-[.5px] bg-[#B8A882] my-[clamp(.9rem,3.5svh,1.75rem)]"
          style={{ opacity: 0, animation: 'up .9s ease .8s forwards' }} />

        <h2 className="text-[.92rem] font-normal tracking-[.14em] text-white max-w-[48ch] leading-[1.85]"
          style={{ opacity: 0, animation: 'up .9s ease 1s forwards', textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)' }}>
          A platform for curated live music at destination weddings across the Amalfi Coast — from string quartets at Villa Cimbrone to jazz ensembles at Belmond Hotel Caruso.
        </h2>

        {/* Contact CTAs — visible on the first screen. WhatsApp clicks are
            tracked by the delegated listener (src/lib/contactTracking.js). */}
        <div className="flex items-center gap-x-10 gap-y-5 mt-[clamp(1.1rem,4.5svh,2.25rem)] flex-wrap"
          style={{ opacity: 0, animation: 'up .9s ease 1.2s forwards' }}>
          <a href="/contact"
            className="text-[.68rem] font-light tracking-[.22em] uppercase text-white
              pb-1 border-b border-white/60 no-underline whitespace-nowrap
              hover:text-[#B8A882] hover:border-[#B8A882] transition-all"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
            Begin Your Enquiry
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-[.55rem] text-[.68rem] font-light tracking-[.22em]
              uppercase text-white pb-1 border-b border-white/60 no-underline whitespace-nowrap
              hover:text-[#B8A882] hover:border-[#B8A882] transition-all"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
            <WhatsAppIcon className="w-[.85rem] h-[.85rem] shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" />
            WhatsApp
          </a>
        </div>

        <a href="/music"
          className="self-start mt-[clamp(.75rem,2.8svh,1.5rem)] text-[.64rem] font-light tracking-[.2em] uppercase text-white/75
            no-underline hover:text-[#B8A882] transition-colors"
          style={{ opacity: 0, animation: 'up .9s ease 1.35s forwards', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
          Explore the Ensembles ↓
        </a>
      </div>

      {/* Location strip — hidden on short viewports, where it would cover the CTAs */}
      <div className="absolute bottom-0 left-0 right-0 z-10
        border-t border-white/[.1] px-[clamp(1.5rem,6vw,5rem)] py-[.85rem]
        flex items-center gap-[1.1rem] flex-wrap [@media(max-height:700px)]:hidden"
        aria-label="Locations served"
        style={{ opacity: 0, animation: 'up .9s ease 1.55s forwards' }}>
        {['Ravello','Positano','Praiano','Amalfi','Minori','Maiori','Sorrento','Sant\'Agnello','Vico Equense']
          .map((loc, i, arr) => (
            <span key={loc} className="flex items-center gap-[1.1rem]">
              <span className="text-[.6rem] font-normal tracking-[.22em] uppercase text-white/70">
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
