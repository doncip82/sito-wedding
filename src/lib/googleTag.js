// src/lib/googleTag.js
//
// Google tag (gtag.js) + Consent Mode v2.
//
// Design goals:
//   - SSG-safe: no access to `window`/`document` at import time or during
//     server-side pre-rendering (vite-react-ssg). Every browser API is guarded.
//   - Load gtag.js exactly once, only in the browser.
//   - No-op safely when the Google tag id is not configured (missing env var):
//     the site keeps working, no runtime errors. A one-time console warning is
//     emitted in dev only.
//   - Consent Mode v2 (ADVANCED): consent defaults are set to `denied` BEFORE
//     `gtag('config', …)`, so gtag.js may load but withholds cookies/identifiers
//     until the visitor grants consent. See applyConsentState() for updates.
//
// The Google Ads conversion is NOT fired from JS here — it is tracked by the
// load of the /thank-you page (Ads rule: "URL contains /thank-you"). See
// src/pages/ThankYou.jsx and src/lib/enquirySuccess.js.
//
// Configuration (Vite env var — set in Vercel, not hardcoded):
//   VITE_GOOGLE_TAG_ID   e.g. AW-XXXXXXXXXX  (the Google tag id)

import { readConsent } from '@/lib/consent.js'

const TAG_ID = import.meta.env.VITE_GOOGLE_TAG_ID

const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined'

// Emit a given warning message only once (dev only) to avoid console noise.
const warnedKeys = new Set()
function warnOnce(key, message) {
  if (import.meta.env.PROD) return
  if (warnedKeys.has(key)) return
  warnedKeys.add(key)
  // eslint-disable-next-line no-console
  console.warn(`[googleTag] ${message}`)
}

let initialised = false

// Ensure window.dataLayer + window.gtag exist. Mirrors the standard gtag.js
// snippet. Safe to call multiple times.
function ensureGtagStub() {
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      // gtag pushes the raw `arguments` object onto dataLayer — do not spread.
      window.dataLayer.push(arguments)
    }
  }
}

// Map our simple {analytics, advertising} booleans to Consent Mode v2 signals.
function toConsentSignals({ analytics, advertising }) {
  return {
    ad_storage:         advertising ? 'granted' : 'denied',
    ad_user_data:       advertising ? 'granted' : 'denied',
    ad_personalization: advertising ? 'granted' : 'denied',
    analytics_storage:  analytics   ? 'granted' : 'denied',
  }
}

/**
 * Push a Consent Mode v2 `update`. Call whenever the visitor changes their
 * choice (accept / reject / edit). SSG-safe; no-op without a tag id.
 * @param {{analytics:boolean, advertising:boolean}} choice
 */
export function applyConsentState(choice) {
  if (!isBrowser()) return
  if (!TAG_ID) return
  ensureGtagStub()
  window.gtag('consent', 'update', toConsentSignals(choice))
}

/**
 * Initialise the Google tag. Sets Consent Mode v2 defaults (denied) BEFORE the
 * config call, reflects any previously stored choice, loads gtag.js once, and
 * configures the tag. Idempotent + SSG-safe + no-op without a tag id.
 */
export function initGoogleTag() {
  if (!isBrowser()) return
  if (initialised) return
  if (!TAG_ID) {
    warnOnce('no-tag-id', 'VITE_GOOGLE_TAG_ID is not set — Google tag disabled (no-op).')
    return
  }

  ensureGtagStub()

  // 1. Consent Mode v2 DEFAULTS — everything denied — set BEFORE `config`.
  //    wait_for_update gives the banner a moment to apply a stored/updated
  //    choice before the first tags fire.
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  })

  // 2. If the visitor already chose in a previous session, reflect it now so
  //    the very first ping already respects a granted state.
  const stored = readConsent()
  if (stored) {
    window.gtag('consent', 'update', toConsentSignals(stored))
  }

  // 3. Load the gtag.js library once. Guard against a duplicate <script>.
  const src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(TAG_ID)}`
  if (!document.querySelector(`script[src^="https://www.googletagmanager.com/gtag/js"]`)) {
    const s = document.createElement('script')
    s.async = true
    s.src = src
    document.head.appendChild(s)
  }

  window.gtag('js', new Date())
  // send_page_view:false — page views are sent manually on every route change
  // (including the first) so SPA navigations are tracked and the initial view
  // is not double-counted.
  window.gtag('config', TAG_ID, { send_page_view: false })

  initialised = true
}

/**
 * Track a single page view. Call on every React Router navigation, including
 * the first render. No-op if not initialised / no tag id / not in browser.
 *
 * Consent Mode note: when analytics_storage is denied (the default until the
 * visitor grants analytics), Google Consent Mode downgrades this to a
 * cookieless ping — no analytics cookies / identifiers are stored. When granted
 * it becomes a normal page view. We therefore do not need to block the call;
 * Consent Mode enforces the cookieless behaviour.
 *
 * @param {Object} [opts]
 * @param {string} [opts.path]  page path incl. search+hash (defaults to current)
 * @param {string} [opts.title] document title (defaults to current)
 */
export function trackPageView(opts = {}) {
  if (!isBrowser()) return
  if (!TAG_ID) return
  if (!initialised) initGoogleTag()
  if (!initialised) return // still no tag id → give up quietly

  const path  = opts.path  ?? window.location.pathname + window.location.search + window.location.hash
  const title = opts.title ?? document.title

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: title,
  })
}
