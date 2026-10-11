// src/lib/enquiry.js
//
// Submit the enquiry form to the serverless function (api/enquiry.js) and, only
// after a successful response, send the "Enquiry form" Google Ads conversion —
// exactly once per successful submission, never for a failed one. The
// conversion is fired here, not on /thank-you, so a refresh, a direct visit or
// "back" to /thank-you can never count again.

import { trackConversion } from '@/lib/googleTag.js'
import { readAttribution } from '@/lib/attribution.js'

/**
 * @param {Object} form  the form fields
 * @throws {Error} when the request fails or the server answers with an error
 */
export async function submitEnquiry(form) {
  const res = await fetch('/api/enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...form, source: readAttribution() }),
  })
  if (!res.ok) throw new Error('Request failed')
  trackConversion('enquiry')
}
