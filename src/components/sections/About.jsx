// components/sections/About.jsx

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title"
      className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,10rem)]
        border-t border-black/[.09] bg-[#F9F8F7]">

      <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-[clamp(3rem,6vw,6rem)] items-start">

        {/* Left — text */}
        <div>
          <p className="eyebrow mb-[1.1rem]">Artistic Direction</p>
          <h2 id="about-title"
            className="section-title mb-6" style={{ maxWidth: '18ch' }}>
            Every Note Begins<br />with a Name
          </h2>
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-7" aria-hidden="true" />

          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
            The musical curation of every wedding we accompany is the personal responsibility of{' '}
            <strong className="text-[#1A1A1A] font-[400]">Donato Cipriano</strong> — professional
            violinist, composer, and artistic director. While based in Pompei at the threshold of
            the Amalfi Coast, Donato's artistic footprint extends far beyond the Italian borders.
          </p>
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
            His career is defined by a global perspective, having performed in the cultural capitals
            of <strong className="text-[#1A1A1A] font-[400]">London</strong>,{' '}
            <strong className="text-[#1A1A1A] font-[400]">Berlin</strong>, and{' '}
            <strong className="text-[#1A1A1A] font-[400]">Paris</strong>, collaborating with
            internationally renowned artistic directors on prestigious global stages. This
            cosmopolitan experience allows him to blend European excellence with the soul of
            Mediterranean tradition.
          </p>
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
            With over two decades of experience, Donato has graced the most distinguished private
            and institutional events in Campania: from historic concert halls to clifftop terraces,
            from conservatory stages to the gardens of Ravello's most celebrated villas. It is
            Donato who selects the repertoire for each ceremony, adapting every arrangement to the
            specific acoustics of{' '}
            <strong className="text-[#1A1A1A] font-[400]">Villa Cimbrone</strong> or the{' '}
            <strong className="text-[#1A1A1A] font-[400]">Monastero Santa Rosa</strong>. He reads
            the light and the wind of the venue, ensuring the perfect opening note.
          </p>
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-5 max-w-[58ch]">
            The ensembles —{' '}
            <strong className="text-[#1A1A1A] font-[400]">EvoStrings</strong>, the{' '}
            <strong className="text-[#1A1A1A] font-[400]">Trilogy Trio</strong>, and the intimacy
            of the <strong className="text-[#1A1A1A] font-[400]">Violino Solo</strong> — are each
            an extension of his international vision, curated personally to guarantee the highest
            standard of Amalfi Coast Luxury.
          </p>
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-8 max-w-[58ch]">
            For couples who wish to explore the full breadth of his work — the recordings, the live
            performances, and the global repertoire archive — his complete wedding portfolio is
            available at the link below.
          </p>

          <a href="https://www.donatocipriano.com/en/wedding#services"
            className="link-underline inline-flex items-center gap-3 mt-4"
            target="_blank" rel="noopener noreferrer"
            aria-label="Visit the wedding portfolio of Donato Cipriano">
            Explore the Wedding Portfolio of Donato Cipriano
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Right — portrait */}
        <div>
          {/* Replace div with:
              <img src="/images/donato-cipriano-portrait.jpg"
                   alt="Donato Cipriano — Professional Violinist and Artistic Director, Amalfi Coast"
                   className="w-full object-cover"
                   style={{ aspectRatio: '3/4' }} />
          */}
          <div className="w-full bg-[#1C2030] flex items-end p-7" style={{ aspectRatio: '3/4' }}>
            <div className="flex flex-col gap-[.35rem]">
              <span className="font-serif italic font-light text-[1.1rem] text-white/60">
                Donato Cipriano
              </span>
              <span className="text-[.52rem] font-light tracking-[.18em] uppercase text-white/25 leading-[1.7]">
                Professional Violinist<br />Artistic Director
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-[.3rem]">
            <span className="font-serif italic font-light text-[1rem] text-[#1A1A1A]">
              Donato Cipriano
            </span>
            <span className="text-[.52rem] font-light tracking-[.18em] uppercase text-[#404040]">
              Violinist · Artistic Director · Pompei, Campania
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
