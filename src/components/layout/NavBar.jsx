// components/layout/NavBar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Music',     href: '/#services'   },
  { label: 'Occasions', href: '/#occasions'  },
  { label: 'Locations', href: '/#locations'  },
  { label: 'About',     href: '/#about'      },
]

export default function NavBar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const navBg = scrolled
    ? 'bg-[rgba(249,248,247,0.97)] backdrop-blur-sm border-b border-black/[.09]'
    : ''

  const logoColor  = scrolled || !isHome ? 'text-[#1A1A1A]' : 'text-[#F9F8F7]'
  const linkColor  = scrolled || !isHome ? 'text-[#404040] hover:text-[#8A7A5A]' : 'text-white/55 hover:text-[#B8A882]'
  const ctaColor   = scrolled || !isHome
    ? 'text-[#1A1A1A] border-black/30 hover:text-[#8A7A5A] hover:border-[#8A7A5A]'
    : 'text-white/55 border-white/25 hover:text-[#B8A882] hover:border-[#B8A882]'
  const hamColor   = scrolled || !isHome ? 'bg-[#1A1A1A]' : 'bg-[#F9F8F7]'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] h-[68px] flex items-center justify-between
          px-[clamp(1.5rem,5vw,4rem)] transition-all duration-500 ${navBg}`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className={`font-serif italic font-light text-[1.15rem] tracking-[.04em] no-underline transition-colors duration-500 ${logoColor}`}
          aria-label="Home"
        >
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-[clamp(1.5rem,3vw,3rem)] list-none" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`text-[.58rem] font-light tracking-[.2em] uppercase no-underline transition-colors duration-300 ${linkColor}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          className={`hidden md:inline-block text-[.56rem] font-light tracking-[.22em] uppercase no-underline
            pb-[2px] border-b-[.5px] transition-all duration-300 ${ctaColor}`}
        >
          Enquire
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-5 h-[.5px] transition-all duration-300 ${hamColor}
            ${menuOpen ? 'translate-y-[5.5px] rotate-45' : ''}`} />
          <span className={`block w-5 h-[.5px] transition-all duration-300 ${hamColor}
            ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[.5px] transition-all duration-300 ${hamColor}
            ${menuOpen ? '-translate-y-[5.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation"
        aria-modal="true"
        className={`fixed inset-0 z-[199] bg-[#1A1A1A] flex flex-col justify-center
          px-[clamp(2rem,10vw,6rem)] gap-9 transition-opacity duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {[...NAV_LINKS, { label: 'Enquire', href: '/#contact' }].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`font-serif italic font-light no-underline transition-colors duration-300
              text-[clamp(2rem,6vw,3.5rem)] text-white/70 hover:text-[#B8A882]
              ${label === 'Enquire' ? 'text-[#B8A882]' : ''}`}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
