// src/lib/conversions.js
//
// Google Ads conversion labels of AW-18311455806 (the part after the slash in
// `send_to`). Public by nature — they ship in the client bundle anyway — so they
// live in code, under test (src/lib/conversions.test.js checks that every label
// belongs to this account), NOT in Vercel env vars: a wrong label in an env var
// once silenced the conversions of donatocipriano.com for six weeks unnoticed.
//
// An empty label disables that channel: no request is ever sent with it.
// Never use ids or labels of the donatocipriano.com account (AW-1003501184).

export const ADS_CONVERSION_LABELS = {
  enquiry:  '', // "Enquiry form"   — successful POST /api/enquiry
  email:    '', // "Email click"    — mailto: links
  whatsapp: '', // "WhatsApp click" — wa.me links
  phone:    '', // no tel: links on the site yet
}
