// src/lib/enquirySuccess.js
//
// One-time, short-lived authorization that gates the /thank-you conversion page.
//
// A record is written to sessionStorage ONLY after a genuinely successful
// /api/enquiry submission (and only when advertising consent is granted). It
// lets the visitor reach /thank-you exactly once and have its page view counted
// exactly once:
//   - a direct visit / refresh without a valid record → no page view,
//     and the page redirects back to /contact;
//   - a refresh after arriving legitimately → the record still exists but
//     `pageViewSent` is already true → no second page view;
//   - a new successful submission → a fresh record (new authorization).
//
// Stored under `wmr_enquiry_success` as:
//   { createdAt: number, pageViewSent: boolean, version: 1 }
//
// SSG-safe: never touches sessionStorage at import time; every access is
// guarded (isBrowser) and wrapped in try/catch (private mode / disabled/full
// storage) so failures degrade to "no authorization" rather than throwing.

export const ENQUIRY_SUCCESS_KEY = 'wmr_enquiry_success'
export const ENQUIRY_SUCCESS_VERSION = 1

// How long the authorization stays valid (guards against stale direct visits).
const TTL_MS = 15 * 60 * 1000 // 15 minutes

const isBrowser = () => typeof window !== 'undefined'

// Read + validate the record. Returns null when absent, malformed, wrong
// version, or expired (expired records are cleared as a side effect).
function readRecord() {
  if (!isBrowser()) return null
  try {
    const raw = window.sessionStorage.getItem(ENQUIRY_SUCCESS_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    if (parsed.version !== ENQUIRY_SUCCESS_VERSION) return null
    if (typeof parsed.createdAt !== 'number') return null
    if (Date.now() - parsed.createdAt > TTL_MS) {
      clearEnquirySuccess()
      return null
    }
    return parsed
  } catch {
    return null
  }
}

/**
 * Create a fresh one-time authorization after a successful enquiry.
 * @returns {boolean} true if stored and verified, false if sessionStorage is
 *   unavailable (caller should then fall back to the inline confirmation).
 */
export function grantEnquirySuccess() {
  if (!isBrowser()) return false
  try {
    const record = {
      createdAt: Date.now(),
      pageViewSent: false,
      version: ENQUIRY_SUCCESS_VERSION,
    }
    window.sessionStorage.setItem(ENQUIRY_SUCCESS_KEY, JSON.stringify(record))
    // Read-back: confirm the write actually persisted before we rely on it.
    return window.sessionStorage.getItem(ENQUIRY_SUCCESS_KEY) !== null
  } catch {
    return false
  }
}

/** True if a valid (unexpired) authorization exists — gates the /thank-you page. */
export function hasValidEnquirySuccess() {
  return readRecord() !== null
}

/** True if the /thank-you page view should still be sent (valid + not yet sent). */
export function shouldSendThankYouPageView() {
  const rec = readRecord()
  return !!(rec && rec.pageViewSent === false)
}

/** Mark the /thank-you page view as sent so a refresh cannot re-send it. */
export function markThankYouPageViewSent() {
  if (!isBrowser()) return
  try {
    const rec = readRecord()
    if (!rec) return
    rec.pageViewSent = true
    window.sessionStorage.setItem(ENQUIRY_SUCCESS_KEY, JSON.stringify(rec))
  } catch {
    // Non-fatal: worst case the flag isn't persisted; the guard below still
    // relies on the read-back value, so at most one extra view could occur.
  }
}

/** Remove the authorization (used on expiry). */
export function clearEnquirySuccess() {
  if (!isBrowser()) return
  try {
    window.sessionStorage.removeItem(ENQUIRY_SUCCESS_KEY)
  } catch {
    // ignore
  }
}
