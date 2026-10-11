// src/lib/contactLinks.js
//
// Builders for the site's contact links: the enquiry form (optionally
// pre-filled from a landing page) and WhatsApp with a pre-written message.
// Pure functions — SSG-safe.

// WhatsApp Business number of the platform, international format, digits only.
export const WHATSAPP_NUMBER = '393932130911'

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello! We're planning our wedding on the Amalfi Coast and would love live music. " +
  'Could you send us some information?'

/**
 * Pre-written English message for a wedding enquiry.
 * @param {Object} [opts]
 * @param {string} [opts.place]    e.g. 'in Ravello' (defaults to 'on the Amalfi Coast')
 * @param {string} [opts.interest] e.g. 'the saxophone' → "We're interested in the saxophone."
 */
export function weddingMessage({ place = 'on the Amalfi Coast', interest } = {}) {
  return `Hello! We're planning our wedding ${place} and would love live music.` +
    (interest ? ` We're interested in ${interest}.` : '') +
    ' Could you send us some information?'
}

/** https://wa.me link that opens a chat with the platform, message pre-filled. */
export function whatsappUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Link to the enquiry form. `ensemble` / `venue` must match the option values
 * of the form (src/pages/Contact.jsx) — anything else is ignored there.
 */
export function enquiryHref({ ensemble, venue } = {}) {
  const params = new URLSearchParams()
  if (ensemble) params.set('ensemble', ensemble)
  if (venue) params.set('venue', venue)
  const qs = params.toString()
  return qs ? `/contact?${qs}` : '/contact'
}
