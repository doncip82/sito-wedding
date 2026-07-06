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
            Wedding Music Ravello is not an agency. It is a curatorial platform — a deliberate
            selection of musicians, ensembles, and artists who understand that performance, in
            these places, carries a different weight.
          </p>
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
            The Amalfi Coast is among the most requested destinations for luxury weddings in
            Europe. Each year, thousands of couples choose venues between Ravello, Positano,
            Sorrento, and Praiano. Most of them plan from abroad. Many of them underestimate
            the role that music plays in the coherence of an event — how it bridges ceremony
            and reception, how it holds silence before the first note, how it extends the
            emotional life of a day long after the photographs are taken.
          </p>
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
            Every artist and ensemble in our network has been selected not by availability,
            but by judgment. We do not list. We choose.
          </p>
        </div>

        {/* Right — visual (links to the Ravello location page) */}
        <div>
          <a href="/locations/ravello" className="block overflow-hidden group"
            aria-label="Wedding music in Ravello">
            <img
              src="/images/ravello-villa-rufolo.jpg"
              alt="Villa Rufolo gardens overlooking the Gulf of Salerno, Ravello — Amalfi Coast"
              className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              style={{ aspectRatio: '3/4' }}
              loading="lazy"
            />
          </a>
        </div>

      </div>
    </section>
  )
}
