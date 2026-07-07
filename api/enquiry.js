// api/enquiry.js — Vercel Serverless Function.
// Receives the contact form and sends the enquiry via Resend (https://resend.com).
//
// Required env var:  RESEND_API_KEY
// Optional env vars: MAIL_FROM  (e.g. "Wedding Music Ravello <enquiries@weddingmusicravello.com>")
//                    MAIL_TO    (defaults to info@weddingmusicravello.com)
//
// Until a domain is verified in Resend, MAIL_FROM falls back to Resend's shared
// sender (onboarding@resend.dev), which can only deliver to the account owner.

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function sendEmail(apiKey, payload) {
  const resp = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (!resp.ok) {
    const detail = await resp.text().catch(() => '')
    throw new Error(`Resend ${resp.status}: ${detail}`)
  }
  return resp.json()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured yet.' })
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
  const {
    name = '', email = '', date = '', venue = '',
    ensemble = '', message = '', company = '',
  } = body

  // Honeypot: real visitors never fill the hidden "company" field. If it's set,
  // silently accept and send nothing.
  if (company) return res.status(200).json({ ok: true })

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!name.trim() || !emailOk) {
    return res.status(400).json({ error: 'Please provide your name and a valid email address.' })
  }

  const from = process.env.MAIL_FROM || 'Wedding Music Ravello <info@weddingmusicravello.com>'
  const to = process.env.MAIL_TO || 'info@weddingmusicravello.com'

  const rows = [
    ['Name', name], ['Email', email], ['Wedding date', date],
    ['Venue', venue], ['Preferred ensemble', ensemble], ['Message', message],
  ].map(([label, value]) =>
    `<tr>
       <td style="padding:5px 18px 5px 0;color:#8A7A5A;font:12px/1.6 Arial,sans-serif;white-space:nowrap;vertical-align:top">${label}</td>
       <td style="padding:5px 0;color:#1A1A1A;font:13px/1.7 Arial,sans-serif">${escapeHtml(value) || '&mdash;'}</td>
     </tr>`).join('')

  const notifyHtml = `
    <div style="max-width:560px;margin:0 auto">
      <p style="font:600 11px/1 Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;color:#8A7A5A;margin:0">New Enquiry</p>
      <h2 style="font:400 22px Georgia,serif;color:#1A1A1A;margin:8px 0 22px">Wedding Music Ravello</h2>
      <table style="border-collapse:collapse">${rows}</table>
    </div>`

  const notifyText =
    `New enquiry\n\n` +
    `Name: ${name}\nEmail: ${email}\nWedding date: ${date}\n` +
    `Venue: ${venue}\nPreferred ensemble: ${ensemble}\n\nMessage:\n${message}\n`

  // 1) Notification to the platform — must succeed.
  try {
    await sendEmail(apiKey, {
      from,
      to,
      reply_to: email,
      subject: `New enquiry — ${name}`,
      html: notifyHtml,
      text: notifyText,
    })
  } catch (err) {
    console.error('Enquiry notification failed:', err)
    return res.status(502).json({ error: 'Could not send your enquiry. Please email us directly.' })
  }

  // 2) Auto-reply to the couple — best effort (needs a verified sending domain).
  try {
    await sendEmail(apiKey, {
      from,
      to: email,
      subject: 'We received your enquiry — Wedding Music Ravello',
      html: `
        <div style="max-width:560px;margin:0 auto;font:400 14px/1.85 Georgia,serif;color:#1A1A1A">
          <p style="font:600 11px/1 Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;color:#8A7A5A;margin:0">Wedding Music Ravello</p>
          <p style="margin-top:20px">Dear ${escapeHtml(name)},</p>
          <p>Thank you for your enquiry. We have received your request and will be in touch within 48 hours.</p>
          <p style="margin-top:20px">With warm regards,<br/>Wedding Music Ravello</p>
        </div>`,
      text:
        `Dear ${name},\n\n` +
        `Thank you for your enquiry. We have received your request and will be in touch within 48 hours.\n\n` +
        `With warm regards,\nWedding Music Ravello`,
    })
  } catch (err) {
    console.error('Auto-reply failed (non-fatal):', err)
  }

  return res.status(200).json({ ok: true })
}
