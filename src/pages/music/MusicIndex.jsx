// pages/music/MusicIndex.jsx
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const MUSIC_OPTIONS = [
  {
    label:     'EvoStrings',
    sub:       'String Ensemble',
    href:      '/evostrings',
    img:       '/images/EvoStrings/EvoStrings.jpg',
    objectFit: 'contain',
    objectPos: 'center 30%',
    bg:        '#CECCC9',
  },
  {
    label:     'Trilogy Trio',
    sub:       'Violin · Cello · Piano',
    href:      '/trilogy-trio',
    img:       '/images/Trilogy%20Trio/Trilogy%20Trio.jpg',
    bg:        '#1E2228',
  },
  {
    label: 'Violin Solo',
    sub:   'Solo Performance',
    href:  '/violin-solo',
    img:   '/images/Violin%20Solo/immagine_donato.JPG',
    bg:    '#201E28',
  },
  {
    label: 'Saxophone',
    sub:   'Jazz & Contemporary',
    href:  '/music/saxophone',
    img:   '/images/Saxophone/Sabasax%202.jpg',
    bg:    '#1C2420',
  },
  {
    label: 'DJ',
    sub:   'Curated Sets',
    href:  '/music/dj',
    img:   '/images/Dj/Dj%20Nice.jpeg',
    bg:    '#0A0B10',
  },
  {
    label: 'Vocalist',
    sub:   'Live Voice',
    href:  '/music/vocalist',
    img:   '/images/Vocalist/Momo%20Vocalist.jpeg',
    bg:    '#160F1A',
  },
  {
    label: 'Posteggia',
    sub:   'Neapolitan Tradition',
    href:  '/music/posteggia',
    img:   '/images/Posteggia/Posteggia.png',
    bg:    '#8CA5B2',
  },
  {
    label: 'Opera',
    sub:   'Classical Performance',
    href:  '/music/opera',
    img:   '/images/Opera/Elisabetta%20Vilni%20Soprano.jpg',
    bg:    '#1A1E22',
  },
  {
    label: 'Piano Solo',
    sub:   'Classical & Contemporary',
    href:  '/music/piano',
    img:   '/images/Piano%20Solo/Angelo%20Borrelli.png',
    bg:    '#C2372A',
  },
]

export default function MusicIndex() {
  return (
    <>
      <Helmet>
        <title>Wedding Music on the Amalfi Coast | Wedding Music Ravello</title>
        <meta
          name="description"
          content="Discover the full range of live music for your wedding on the Amalfi Coast — from string ensembles to jazz saxophone, DJ, vocalist and classical opera."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-[120px] pb-16 px-[clamp(1.5rem,6vw,5rem)] bg-[#F9F8F7]">
        <h1 className="font-serif italic font-light text-[clamp(2.8rem,7vw,5rem)] text-[#1A1A1A] leading-[1.1] max-w-2xl">
          Music for<br />your event
        </h1>
        <p className="mt-6 text-[.8rem] font-light tracking-[.06em] text-[#404040] max-w-lg leading-relaxed">
          Choose from a curated selection of live music — from intimate string duos
          to full ensembles, jazz, opera and beyond. Every format is personally
          directed and tailored to your ceremony.
        </p>
      </section>

      {/* Grid */}
      <section className="px-[clamp(1rem,4vw,3rem)] pb-24 bg-[#F9F8F7]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {MUSIC_OPTIONS.map(({ label, sub, href, bg, img, objectFit, objectPos }) => (
            <Link
              key={label}
              to={href}
              className="group relative no-underline overflow-hidden"
              style={{ aspectRatio: '4/5', backgroundColor: bg }}
            >
              {img && (
                <img src={img} alt={label}
                  className={`absolute inset-0 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                  style={objectPos ? { objectPosition: objectPos } : undefined} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Gold hover line */}
              <span
                className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#B8A882] transition-all duration-500 group-hover:w-full"
                aria-hidden
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[.44rem] tracking-[.22em] uppercase text-[#B8A882] font-light mb-1.5">
                  {sub}
                </p>
                <h2 className="font-serif italic font-light text-[clamp(1.1rem,3vw,1.5rem)] text-white leading-tight">
                  {label}
                </h2>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#B8A882]/[.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 px-[clamp(1.5rem,6vw,5rem)] bg-[#1A1A1A] text-center">
        <p className="text-[.52rem] tracking-[.28em] uppercase text-[#B8A882] font-light mb-4">
          Not sure which format is right for you?
        </p>
        <a
          href="/#contact"
          className="inline-block text-[.58rem] tracking-[.22em] uppercase font-light
            text-white/80 border-b-[.5px] border-white/40 pb-[2px]
            hover:text-[#B8A882] hover:border-[#B8A882] transition-all duration-300 no-underline"
        >
          Enquire
        </a>
      </section>
    </>
  )
}
