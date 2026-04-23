// components/layout/NavBar.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home',      href: '/'           },
  { label: 'Occasions', href: '/#occasions' },
  {
    label: 'Partners',
    items: [
      { label: 'Music',         href: '/music'                    },
      { label: 'Photographers', href: '/vendors/photographers'    },
      { label: 'Florists',      href: '/vendors/florists'         },
      { label: 'Vintage Cars',  href: '/vendors/vintage-cars'     },
      { label: 'Planners',      href: '/vendors/wedding-planners' },
      { label: 'Celebrant',     href: '/vendors/celebrant'        },
    ],
  },
  { label: 'Locations', href: '/#locations' },
  {
    label: 'Venues',
    items: [
      { label: 'Ravello',  href: '/locations/ravello'  },
      { label: 'Positano', href: '/locations/positano' },
      { label: 'Sorrento', href: '/locations/sorrento' },
    ],
  },
  { label: 'About', href: '/#about' },
]

const DROPDOWN_LINK = `block px-5 py-2.5 text-[.52rem] tracking-[.18em] uppercase
  text-[#404040] hover:text-[#8A7A5A] no-underline transition-colors
  border-b border-black/[.05] last:border-b-0 font-light`

export default function NavBar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [openDropdown,   setOpenDropdown]   = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) setMobileExpanded(null)
  }, [menuOpen])

  const navBg      = scrolled ? 'bg-[rgba(249,248,247,0.97)] backdrop-blur-sm border-b border-black/[.09]' : ''
  const logoColor  = scrolled || !isHome ? 'text-[#1A1A1A]'                              : 'text-[#F9F8F7]'
  const linkColor  = scrolled || !isHome ? 'text-[#404040] hover:text-[#8A7A5A]'         : 'text-white/85 hover:text-[#B8A882]'
  const linkWeight = scrolled || !isHome ? 'font-light'                                   : 'font-normal'
  const ctaColor   = scrolled || !isHome
    ? 'text-[#1A1A1A] border-black/30 hover:text-[#8A7A5A] hover:border-[#8A7A5A]'
    : 'text-white/85 border-white/60 hover:text-[#B8A882] hover:border-[#B8A882]'
  const ctaWeight  = scrolled || !isHome ? 'font-light'   : 'font-normal'
  const hamColor   = scrolled || !isHome ? 'bg-[#1A1A1A]' : 'bg-[#F9F8F7]'

  const NAV_TEXT = `text-[.58rem] tracking-[.2em] uppercase transition-colors duration-300 ${linkWeight} ${linkColor}`

  // ── Desktop ────────────────────────────────────────────────────────────────
  const renderDesktopItem = (item) => {
    if (item.href) {
      return (
        <li key={item.label}>
          <a href={item.href} className={`${NAV_TEXT} no-underline`}>{item.label}</a>
        </li>
      )
    }

    const isOpen = openDropdown === item.label
    return (
      <li key={item.label} className="relative">
        <button
          onClick={() => setOpenDropdown(isOpen ? null : item.label)}
          onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
          className={`${NAV_TEXT} bg-transparent border-none cursor-pointer`}
        >
          {item.label}
        </button>

        {isOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#F9F8F7] border border-black/[.09] shadow-sm z-50 min-w-[160px]">
            {item.items.map(({ label, href }) => (
              <a key={label} href={href} className={DROPDOWN_LINK}>{label}</a>
            ))}
          </div>
        )}
      </li>
    )
  }

  // ── Mobile ─────────────────────────────────────────────────────────────────
  const MOBILE_SERIF = `font-serif italic font-light no-underline transition-colors duration-300
    text-[clamp(1.8rem,5.5vw,3rem)] text-white/70 hover:text-[#B8A882]`

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] h-[68px] flex items-center justify-between
          px-[clamp(1.5rem,5vw,4rem)] transition-all duration-500 ${navBg}`}
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className={`font-serif italic font-light text-[1.15rem] tracking-[.04em] no-underline transition-colors duration-500 ${logoColor}`}
          aria-label="Home"
        />

        <ul className="hidden md:flex gap-[clamp(1.5rem,3vw,3rem)] list-none items-center" role="list">
          {NAV_ITEMS.map(renderDesktopItem)}
        </ul>

        <a
          href="/#contact"
          className={`hidden md:inline-block text-[.56rem] tracking-[.22em] uppercase no-underline
            pb-[2px] border-b-[.5px] transition-all duration-300 ${ctaWeight} ${ctaColor}`}
        >
          Enquire
        </a>

        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-5 h-[.5px] transition-all duration-300 ${hamColor} ${menuOpen ? 'translate-y-[5.5px] rotate-45'  : ''}`} />
          <span className={`block w-5 h-[.5px] transition-all duration-300 ${hamColor} ${menuOpen ? 'opacity-0'                       : ''}`} />
          <span className={`block w-5 h-[.5px] transition-all duration-300 ${hamColor} ${menuOpen ? '-translate-y-[5.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation"
        aria-modal="true"
        className={`fixed inset-0 z-[199] bg-[#1A1A1A] overflow-y-auto
          px-[clamp(2rem,10vw,6rem)] py-24 transition-opacity duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-7 justify-center min-h-full">
          {NAV_ITEMS.map((item) => {
            const hasChildren = !!item.items
            const isExpanded  = mobileExpanded === item.label

            return (
              <div key={item.label}>
                {hasChildren ? (
                  <button
                    onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                    className={`${MOBILE_SERIF} bg-transparent border-none cursor-pointer text-left w-full flex items-baseline gap-3`}
                  >
                    {item.label}
                    <span className={`text-[#B8A882]/60 text-sm font-sans font-light transition-transform duration-300 inline-block ${isExpanded ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                ) : (
                  <a href={item.href} onClick={() => setMenuOpen(false)} className={`${MOBILE_SERIF} block`}>
                    {item.label}
                  </a>
                )}

                {hasChildren && isExpanded && (
                  <div className="mt-4 ml-1 pl-4 border-l border-white/[.08] flex flex-col gap-2.5">
                    {item.items.map(({ label, href }) => (
                      <a
                        key={href}
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="text-[.55rem] font-light tracking-[.2em] uppercase no-underline text-white/45 hover:text-[#B8A882] transition-colors"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="font-serif italic font-light no-underline text-[clamp(1.8rem,5.5vw,3rem)] text-[#B8A882] mt-2"
          >
            Enquire
          </a>
        </div>
      </div>
    </>
  )
}
