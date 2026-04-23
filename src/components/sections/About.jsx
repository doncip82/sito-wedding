// components/sections/About.jsx

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title"
      className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,10rem)]
        border-t border-black/[.09] bg-[#F9F8F7]">

      <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-[clamp(3rem,6vw,6rem)] items-start">

        {/* Left — text */}
        <div>
          <p className="eyebrow mb-[1.1rem]">Our Philosophy</p>
          <h2 id="about-title"
            className="section-title mb-6" style={{ maxWidth: '22ch' }}>
            Music Selected With Intention,<br />Not by Chance
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-7" aria-hidden="true" />

          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
            Wedding Music Ravello is a curated selection of live music for destination
            weddings and exclusive events on the Amalfi Coast.
          </p>
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
            Every artist and ensemble in our network has been personally evaluated for
            their ability to perform at the highest level — in the acoustics of clifftop
            terraces, within historic villas, across the open-air venues of a coast that
            demands as much from its music as it does from everything else.
          </p>
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
            We do not list. We curate. Every recommendation we make carries our name,
            and our standard is non-negotiable.
          </p>
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
            From ceremony to cocktail hour, from the dinner score to the final dance —
            we match each moment of your celebration to the right sound, the right
            formation, the right artist.
          </p>
        </div>

        {/* Right — visual */}
        <div>
          {/* Replace div with:
              <img src="/images/about-visual.jpg"
                   alt="Wedding music performance on the Amalfi Coast"
                   className="w-full object-cover"
                   style={{ aspectRatio: '3/4' }} />
          */}
          <div className="w-full bg-[#1C2030]" style={{ aspectRatio: '3/4' }} />
        </div>

      </div>
    </section>
  )
}
