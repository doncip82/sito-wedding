// src/lib/attribution.js
//
// Where an enquiry came from. On the first page of a browsing session we store
// the entry page, the referring site and any campaign parameters; the enquiry
// form sends them along with the message, so every enquiry email shows which
// landing page (and which campaign) produced it.
//
// Stored in sessionStorage under `wmr_attribution`:
//   { landing, referrer, utm_source, utm_campaign, utm_term, ad_click }
//
// SSG-safe: no browser access at import time; every storage access is wrapped
// in try/catch (private mode / disabled storage → attribution is simply empty).

export const ATTRIBUTION_KEY = 'wmr_attribution'

const UTM_PARAMS = ['utm_source', 'utm_campaign', 'utm_term']
// Google Ads auto-tagging parameters. Only their presence is recorded, never
// the click id itself.
const AD_CLICK_PARAMS = ['gclid', 'gbraid', 'wbraid']

const MAX_LENGTH = 200
const clip = value => String(value || '').slice(0, MAX_LENGTH)

function referrerHost(referrer, ownHost) {
  try {
    const host = new URL(referrer).hostname
    return host && host !== ownHost ? host : ''
  } catch {
    return ''
  }
}

/** Record the entry point once per session (first call wins). */
export function captureAttribution() {
  if (typeof window === 'undefined') return
  try {
    if (window.sessionStorage.getItem(ATTRIBUTION_KEY)) return
    const params = new URLSearchParams(window.location.search)
    const record = {
      landing: clip(window.location.pathname),
      referrer: clip(referrerHost(document.referrer, window.location.hostname)),
      ad_click: AD_CLICK_PARAMS.some(p => params.has(p)),
    }
    for (const key of UTM_PARAMS) record[key] = clip(params.get(key))
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(record))
  } catch {
    // storage unavailable — no attribution for this session
  }
}

/** The stored attribution, or an empty object. */
export function readAttribution() {
  if (typeof window === 'undefined') return {}
  try {
    const parsed = JSON.parse(window.sessionStorage.getItem(ATTRIBUTION_KEY) || 'null')
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}
