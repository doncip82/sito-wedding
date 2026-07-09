// components/layout/Footer.jsx

export default function Footer() {
  const navLinks = [
    { label: 'Music',     href: '/music'       },
    { label: 'Occasions', href: '/#occasions'  },
    { label: 'Locations', href: '/#locations'  },
    { label: 'About',     href: '/#about'      },
    { label: 'FAQ',       href: '/faq'         },
    { label: 'Enquire',   href: '/contact'     },
  ]

  return (
    <footer id="footer" aria-label="Site footer"
      className="bg-[#1A1A1A] border-t border-white/[.06]
        px-[clamp(1.5rem,6vw,5rem)] pt-[clamp(3rem,7vw,5rem)] pb-[clamp(1.5rem,3vw,2.5rem)]">

      {/* Main row */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-[clamp(2rem,5vw,5rem)]
        pb-[clamp(2rem,4vw,3rem)] border-b border-white/[.08] mb-6">

        {/* Brand */}
        <div>
          <a href="/"
            className="font-serif italic font-light text-[1.1rem] tracking-[.04em]
              text-white/75 no-underline block mb-2 hover:text-[#B8A882] transition-colors">
            Wedding Music Ravello
          </a>
          <p className="text-[.52rem] font-light tracking-[.16em] uppercase text-white/25 leading-[1.7]">
            Bespoke Wedding Music · Amalfi Coast · Southern Italy
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation" className="flex flex-col gap-3">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href}
              className="text-[.56rem] font-light tracking-[.18em] uppercase no-underline
                text-white/40 hover:text-[#B8A882] transition-colors">
              {label}
            </a>
          ))}
        </nav>

      </div>

      {/* Legal */}
      <div className="flex items-center gap-4 flex-wrap
        text-[.5rem] font-light tracking-[.14em] text-white/20">
        <span>© {new Date().getFullYear()} Wedding Music Ravello. All rights reserved.</span>
        <span className="text-[#B8A882]/20" aria-hidden="true">·</span>
        <a href="/privacy"
          className="text-white/35 no-underline hover:text-[#B8A882] transition-colors">
          Privacy Policy
        </a>
        <span className="text-[#B8A882]/20" aria-hidden="true">·</span>
        <span>Ravello, Campania, Italy</span>
      </div>
    </footer>
  )
}
