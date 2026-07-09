import { useState } from 'react'

// Privacy-friendly embed wrapper. Shows a lightweight placeholder and only
// mounts the third-party iframe (Spotify, Instagram, …) after the visitor
// clicks — so no third-party cookies are set on page load. The iframe passed
// as children is not mounted (no network request) until `loaded` is true.
export default function ClickToLoad({ label, height = 352, children }) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) return children

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Load ${label} content`}
      className="w-full flex flex-col items-center justify-center gap-2.5 px-6 text-center
        bg-[#F4F2F0] hover:bg-[#EFEDEA] transition-colors cursor-pointer"
      style={{ height }}
    >
      <span className="text-[.5rem] tracking-[.22em] uppercase font-light text-[#8A7A5A]">
        {label}
      </span>
      <span className="text-[.56rem] font-light leading-[1.7] text-[#404040] max-w-[24ch]">
        This content is loaded from {label} and may set cookies.
      </span>
      <span className="mt-1 text-[.46rem] tracking-[.18em] uppercase text-[#B8A882]
        border-b border-[#B8A882]/40 pb-[2px]">
        Click to load
      </span>
    </button>
  )
}
