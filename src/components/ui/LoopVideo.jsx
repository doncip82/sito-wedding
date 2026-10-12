// components/ui/LoopVideo.jsx
// Muted autoplay loop (browsers block autoplay with sound) with a discreet
// "Sound on / Sound off" text toggle — for performance clips where the sound is
// the point (e.g. the Posteggia). Text control with a hairline underline, per
// the design rules; a soft bottom shade keeps it legible over any frame.
import { useRef, useState } from 'react'

function SpeakerIcon({ muted }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"
      className="w-[.9rem] h-[.9rem] shrink-0" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
      {muted
        ? <path d="M16 9.5l5 5M21 9.5l-5 5" />
        : <path d="M15.5 9a4.5 4.5 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11" />}
    </svg>
  )
}

export default function LoopVideo({ src, poster, label, className = '' }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    if (video.paused) video.play().catch(() => {})
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay muted playsInline loop preload="metadata"
        poster={poster}
        aria-label={label}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
      <button type="button" onClick={toggleSound} aria-pressed={!muted}
        aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
        className="absolute bottom-3 right-3 inline-flex items-center gap-[.45rem]
          bg-transparent border-0 border-b border-white/70 p-0 pb-[3px] cursor-pointer
          text-[.62rem] font-normal tracking-[.2em] uppercase text-white
          hover:text-[#B8A882] hover:border-[#B8A882] transition-colors">
        <SpeakerIcon muted={muted} />
        {muted ? 'Sound on' : 'Sound off'}
      </button>
    </div>
  )
}
