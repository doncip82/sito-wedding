// src/lib/consent.js
//
// Cookie-consent preference storage for the site.
//
// Stores the visitor's choice in localStorage under `wmr_cookie_consent` as:
//   { analytics: boolean, advertising: boolean, timestamp: string, version: number }
//
// Design goals:
//   - SSG-safe: never touch window/localStorage at import time; every access
//     is guarded and wrapped in try/catch (private mode / disabled storage).
//   - Keep an in-memory copy for the session so that, even if localStorage is
//     unavailable, the current choice is still honoured (e.g. the Ads
//     conversion guard) until the tab is closed.
//   - A version number lets us re-prompt after a material privacy change:
//     bump CONSENT_VERSION and stored choices from older versions are ignored.

export const CONSENT_KEY = 'wmr_cookie_consent'

// Bump this when the privacy policy changes materially — older stored consent
// then becomes stale and the banner is shown again.
export const CONSENT_VERSION = 1

// Custom event name used to re-open the cookie panel from anywhere (footer).
export const OPEN_SETTINGS_EVENT = 'wmr:open-cookie-settings'

const isBrowser = () => typeof window !== 'undefined'

// Session cache — authoritative once set this session.
let currentConsent = null

/**
 * Read the stored consent choice. Returns null if absent, malformed, or from
 * an older consent version (→ re-prompt). SSG-safe.
 * @returns {{analytics:boolean, advertising:boolean, timestamp:string, version:number}|null}
 */
export function readConsent() {
  if (currentConsent) return currentConsent
  if (!isBrowser()) return null
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    if (parsed.version !== CONSENT_VERSION) return null
    currentConsent = {
      analytics: !!parsed.analytics,
      advertising: !!parsed.advertising,
      timestamp: parsed.timestamp,
      version: parsed.version,
    }
    return currentConsent
  } catch {
    return null
  }
}

/**
 * Persist a consent choice. Always updates the in-memory copy; localStorage
 * write failures (private mode) are swallowed so the choice still applies for
 * the session.
 * @param {{analytics:boolean, advertising:boolean}} choice
 */
export function saveConsent({ analytics, advertising }) {
  const record = {
    analytics: !!analytics,
    advertising: !!advertising,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  }
  currentConsent = record
  if (isBrowser()) {
    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record))
    } catch {
      // Storage unavailable — choice held in memory for this session only.
    }
  }
  return record
}

/** True once the visitor has made a (current-version) choice. */
export function hasStoredConsent() {
  return readConsent() !== null
}

/** True if the visitor granted analytics cookies. */
export function hasAnalyticsConsent() {
  const c = readConsent()
  return !!(c && c.analytics)
}

/** True if the visitor granted advertising cookies. */
export function hasAdvertisingConsent() {
  const c = readConsent()
  return !!(c && c.advertising)
}

/** Ask the CookieConsent component (anywhere in the tree) to open. SSG-safe. */
export function openCookieSettings() {
  if (!isBrowser()) return
  window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT))
}
