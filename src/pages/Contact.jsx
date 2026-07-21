// pages/Contact.jsx
import { useState, useRef } from 'react'
import { Head } from 'vite-react-ssg'
import { trackGoogleAdsConversion } from '@/lib/googleTag.js'

const venues = [
  'Villa Cimbrone', 'Palazzo Avino', 'Belmond Hotel Caruso',
  'Villa Treville', 'Monastero Santa Rosa', 'Villa Eva', 'Other / TBD',
]
const ensembles = [
  'EvoStrings', 'Trilogy Trio', 'Violin Solo', 'Saxophone', 'DJ',
  'Vocalist', 'Posteggia', 'Opera', 'Piano Solo', 'Not sure yet',
]

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Enquire — Wedding Music Ravello',
  url: 'https://www.weddingmusicravello.com/contact',
  description: 'Get in touch to discuss live music for your wedding or private event on the Amalfi Coast.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Wedding Music Ravello',
    email: 'info@weddingmusicravello.com',
    areaServed: { '@type': 'AdministrativeArea', name: 'Amalfi Coast' },
  },
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', date: '', venue: '', ensemble: '', message: '', company: '', consent: false,
  })
  const [sent, setSent]       = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError]     = useState('')
  // Synchronous re-entrancy guard: blocks a second submit (and therefore a
  // second conversion) if the button is clicked again before React re-renders
  // it as disabled.
  const submittingRef = useRef(false)

  const handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm(prev => ({ ...prev, [e.target.name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (submittingRef.current) return
    submittingRef.current = true
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      // Fire the Google Ads conversion only on a genuinely successful submit —
      // reached exactly once per successful enquiry, never in the catch block
      // and never on a plain page render. No-op if Ads env vars are unset.
      trackGoogleAdsConversion()
      setSent(true)
    } catch {
      setError('Something went wrong sending your enquiry. Please email us directly at info@weddingmusicravello.com.')
    } finally {
      setSending(false)
      submittingRef.current = false
    }
  }

  const inputClass = `w-full bg-transparent border-b border-black/[.25] pb-3 pt-1
    text-[.78rem] font-normal tracking-[.03em] text-[#1A1A1A] placeholder-[#404040]/60
    focus:outline-none focus:border-[#B8A882] transition-colors`

  const labelClass = `block text-[.6rem] font-normal tracking-[.18em] uppercase
    text-[#404040] mb-2.5`

  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Enquire | Wedding Music Ravello</title>
        <meta name="description" content="Get in touch to discuss music for your wedding or private event on the Amalfi Coast. We will respond within 48 hours." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/contact" />
        <meta property="og:title" content="Enquire | Wedding Music Ravello" />
        <meta property="og:description" content="Get in touch to discuss live music for your wedding or private event on the Amalfi Coast." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Head>

      {/* Header — Amalfi cliffside backdrop with dark overlays for legibility */}
      <section className="relative overflow-hidden bg-[#1A1A1A]
        px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,9rem)]">
        <img src="/images/ravello.jpg" alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-bottom" />
        <div aria-hidden="true" className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(18,16,13,.42) 0%, rgba(18,16,13,.62) 100%)',
        }} />
        <div aria-hidden="true" className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(18,16,13,.82) 0%, rgba(18,16,13,.42) 52%, transparent 86%)',
        }} />

        <div className="relative z-10">
          <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
            flex items-center gap-3 mb-5">
            <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
            Begin Your Enquiry
          </p>
          <h1 className="font-serif italic font-light text-[#F9F8F7] mb-6"
            style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', lineHeight: 1.05 }}>
            Every celebration<br />is singular.
          </h1>
          <p className="text-[.68rem] font-light tracking-[.1em] text-white/75
            max-w-[40ch] leading-[1.95]">
            Tell us about your wedding — venue, date, and the kind of music you imagine.
            We respond to all enquiries within 48 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        {sent ? (
          <div className="max-w-lg">
            <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
            <h2 className="font-serif italic font-light text-[2.5rem] text-[#1A1A1A] mb-4">
              Thank you.
            </h2>
            <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040]">
              Your enquiry has been received. We will be in touch within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}
            className="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

            {/* Honeypot — off-screen; real visitors never fill it, bots do */}
            <div aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
              <label>Company
                <input type="text" name="company" tabIndex={-1} autoComplete="off"
                  value={form.company} onChange={handleChange} />
              </label>
            </div>

            <div>
              <label htmlFor="name" className={labelClass}>Your Name</label>
              <input id="name" name="name" type="text" required
                placeholder="James & Serena"
                value={form.name} onChange={handleChange}
                className={inputClass} />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <input id="email" name="email" type="email" required
                placeholder="your@email.com"
                value={form.email} onChange={handleChange}
                className={inputClass} />
            </div>

            <div>
              <label htmlFor="date" className={labelClass}>Wedding Date</label>
              <input id="date" name="date" type="text"
                placeholder="September 2026"
                value={form.date} onChange={handleChange}
                className={inputClass} />
            </div>

            <div>
              <label htmlFor="venue" className={labelClass}>Venue</label>
              <select id="venue" name="venue"
                value={form.venue} onChange={handleChange}
                className={`${inputClass} cursor-pointer`}>
                <option value="">Select a venue…</option>
                {venues.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="ensemble" className={labelClass}>
                Preferred Ensemble
              </label>
              <select id="ensemble" name="ensemble"
                value={form.ensemble} onChange={handleChange}
                className={`${inputClass} cursor-pointer`}>
                <option value="">Select an ensemble…</option>
                {ensembles.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Tell Us About Your Wedding
              </label>
              <textarea id="message" name="message" rows={4}
                placeholder="Ceremony time, number of guests, any specific musical wishes…"
                value={form.message} onChange={handleChange}
                className={`${inputClass} resize-none`} />
            </div>

            <div className="md:col-span-2 flex flex-col gap-5 pt-2">
              <label className="flex items-start gap-3 cursor-pointer max-w-[54ch]">
                <input type="checkbox" name="consent" required
                  checked={form.consent} onChange={handleChange}
                  className="mt-[.15rem] w-[13px] h-[13px] shrink-0 accent-[#8A7A5A] cursor-pointer" />
                <span className="text-[.56rem] font-light tracking-[.04em] leading-[1.7] text-[#404040]">
                  I have read and agree to the{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer"
                    className="text-[#8A7A5A] no-underline border-b border-[#8A7A5A]/40 hover:border-[#8A7A5A]">
                    Privacy Policy
                  </a>.
                </span>
              </label>

              <div className="flex items-center gap-8 flex-wrap">
                <button type="submit" disabled={sending}
                  className="link-underline cursor-pointer bg-transparent border-t-0
                    border-x-0 font-sans disabled:opacity-40 disabled:cursor-default">
                  {sending ? 'Sending…' : 'Send Enquiry'}
                </button>
                <p className="text-[.5rem] font-light tracking-[.14em] text-[#404040]/60">
                  Or write directly to{' '}
                  <a href="mailto:info@weddingmusicravello.com"
                    className="text-[#8A7A5A] no-underline border-b border-[#8A7A5A]/40">
                    info@weddingmusicravello.com
                  </a>
                </p>
              </div>
              {error && (
                <p className="text-[.58rem] font-light tracking-[.04em] leading-[1.8] text-[#9A4B39] max-w-[46ch]">
                  {error}
                </p>
              )}
            </div>

          </form>
        )}
      </section>

      {/* Details */}
      <section className="border-t border-black/[.09] px-[clamp(1.5rem,6vw,5rem)]
        py-[clamp(3rem,6vw,5rem)] grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { label: 'Response Time', value: 'Within 48 hours' },
          { label: 'Email', value: 'info@weddingmusicravello.com' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-[.5rem] font-light tracking-[.2em] uppercase text-[#B8A882] mb-2">
              {label}
            </p>
            <p className="text-[.68rem] font-light tracking-[.06em] leading-[1.8] text-[#1A1A1A]">
              {value}
            </p>
          </div>
        ))}
      </section>

    </div>
  )
}
