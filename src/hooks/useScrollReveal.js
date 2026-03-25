// hooks/useScrollReveal.js
// Progressive enhancement scroll reveal.
// Elements are visible by default; JS adds entrance animation only if
// IntersectionObserver is available (all modern browsers).

import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return

    const { threshold = 0.1, delay = 0 } = options

    // Hide first
    el.style.opacity = '0'
    el.style.transform = 'translateY(16px)'
    el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          io.unobserve(el)
        }
      },
      { threshold }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}

// Stagger variant — apply to a list of refs
export function useStaggerReveal(count, options = {}) {
  const refs = useRef([])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const { threshold = 0.1, baseDelay = 0, step = 0.1 } = options

    refs.current.forEach((el, i) => {
      if (!el) return
      const delay = baseDelay + i * step
      el.style.opacity = '0'
      el.style.transform = 'translateY(16px)'
      el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            io.unobserve(el)
          }
        },
        { threshold }
      )
      io.observe(el)
    })
  }, [count])

  const setRef = (i) => (el) => { refs.current[i] = el }
  return setRef
}
