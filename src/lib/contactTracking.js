// src/lib/contactTracking.js
//
// Contact-click tracking: ONE delegated `click` listener on `document`, in the
// capture phase, covers every contact link on every page — present and future,
// prerendered or client-rendered. No per-link onClick handlers: on
// donatocipriano.com those left gaps and double-counted.
//
// SSG-safe: nothing touches `document` until installContactClickTracking() is
// called in the browser (from initGoogleTag()).

// Contact links on these pages are not leads (e.g. data-protection requests on
// the privacy policy) and are never counted as conversions.
const EXCLUDED_PATH_PREFIXES = ['/privacy']

/**
 * Map a link href to a contact channel.
 * @param {string|null|undefined} href
 * @returns {'whatsapp'|'email'|'phone'|null}
 */
export function classifyContactHref(href) {
  if (!href) return null
  const value = String(href).trim()
  const lower = value.toLowerCase()
  if (lower.startsWith('mailto:')) return 'email'
  if (lower.startsWith('tel:')) return 'phone'
  if (lower.startsWith('whatsapp:')) return 'whatsapp'
  try {
    const url = new URL(value)
    if (url.protocol === 'https:' &&
        (url.hostname === 'wa.me' || url.hostname === 'api.whatsapp.com')) {
      return 'whatsapp'
    }
  } catch {
    // relative or malformed href — not a contact link
  }
  return null
}

function isExcludedPath(pathname = '') {
  return EXCLUDED_PATH_PREFIXES.some(prefix =>
    pathname === prefix || pathname.startsWith(`${prefix}/`))
}

// The installed listener is kept on `document` itself, so there is only ever
// one per page — even if this module is evaluated twice (dev HMR, tests).
const LISTENER_KEY = '__wmrContactClickListener'

/**
 * Install the delegated listener. `onContact(channel)` is called once per
 * click on a contact link. Idempotent: a later call replaces the listener,
 * never adds a second one.
 * @param {(channel: 'whatsapp'|'email'|'phone') => void} onContact
 */
export function installContactClickTracking(onContact) {
  if (typeof document === 'undefined') return

  const previous = document[LISTENER_KEY]
  if (previous) document.removeEventListener('click', previous, true)

  const listener = event => {
    const target = event.target
    if (!target || typeof target.closest !== 'function') return
    const link = target.closest('a[href]')
    if (!link) return
    const channel = classifyContactHref(link.getAttribute('href'))
    if (!channel) return
    if (isExcludedPath(window.location.pathname)) return
    onContact(channel)
  }
  document[LISTENER_KEY] = listener
  document.addEventListener('click', listener, true) // capture phase
}
