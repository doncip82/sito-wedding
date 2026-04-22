// pages/Contact.jsx
import { useState, useEffect } from 'react'

const venues = [
  'Villa Cimbrone', 'Palazzo Avino', 'Belmond Hotel Caruso',
  'Villa Treville', 'Monastero Santa Rosa', 'Villa Eva', 'Other / TBD',
]
const ensembles = ['EvoStrings', 'Trilogy Trio', 'Violino Solo', 'Not sure yet']

export default function Contact() {
  useEffect(() => {
    document.title = 'Enquire — Wedding Music Ravello | Bespoke Wedding Music'
  }, [])

  const [form, setForm] = useState({
    name: '', email: '', date: '', venue: '', ensemble: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  // Form submits to Formspree (replace YOUR_FORM_ID) or any backend
  const handleSubmit = e => {
    e.preventDefault()
    // Replace with: fetch('https://formspree.io/f/YOUR_FORM_ID', { method:'POST', body: JSON.stringify(form) })
    setSent(true)
  }

  const inputClass = `w-full bg-transparent border-b border-black/[.15] pb-3 pt-1
    text-[.68rem] font-light tracking-[.06em] text-[#1A1A1A] placeholder-[#404040]/50
    focus:outline-none focus:border-[#B8A882] transition-colors`

  const labelClass = `block text-[.5rem] font-light tracking-[.2em] uppercase
    text-[#B8A882] mb-2`

  return (
    <div className="bg-[#F9F8F7] pt-[68px]">

      {/* Header */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <p className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]
          flex items-center gap-3 mb-5">
          <span className="inline-block w-[22px] h-[.5px] bg-[#B8A882]" />
          Begin Your Enquiry
        </p>
        <h1 className="font-serif italic font-light text-[#F9F8F7] mb-6"
          style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', lineHeight: 1.05 }}>
          Every celebration<br />is singular.
        </h1>
        <p className="text-[.68rem] font-light tracking-[.1em] text-white/50
          max-w-[40ch] leading-[1.95]">
          Tell us about your wedding — venue, date, and the kind of music you imagine.
          Donato will respond personally within 48 hours.
        </p>
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
              Your enquiry has been received. Donato will be in touch within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}
            className="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

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
              <div className="flex gap-4 flex-wrap pt-1">
                {ensembles.map(e => (
                  <label key={e}
                    className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="ensemble" value={e}
                      checked={form.ensemble === e}
                      onChange={handleChange}
                      className="accent-[#B8A882]" />
                    <span className="text-[.56rem] font-light tracking-[.14em] uppercase
                      text-[#404040] group-hover:text-[#1A1A1A] transition-colors">
                      {e}
                    </span>
                  </label>
                ))}
              </div>
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

            <div className="md:col-span-2 flex items-center gap-8 flex-wrap pt-2">
              <button type="submit"
                className="link-underline cursor-pointer bg-transparent border-t-0
                  border-x-0 font-sans">
                Send Enquiry
              </button>
              <p className="text-[.5rem] font-light tracking-[.14em] text-[#404040]/60">
                Or write directly to{' '}
                <a href="mailto:info@donatocipriano.com"
                  className="text-[#8A7A5A] no-underline border-b border-[#8A7A5A]/40">
                  info@donatocipriano.com
                </a>
              </p>
            </div>

          </form>
        )}
      </section>

      {/* Details */}
      <section className="border-t border-black/[.09] px-[clamp(1.5rem,6vw,5rem)]
        py-[clamp(3rem,6vw,5rem)] grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { label: 'Response Time', value: 'Within 48 hours' },
          { label: 'Based In', value: 'Pompei, Campania — available across the Amalfi Coast' },
          { label: 'Email', value: 'info@donatocipriano.com' },
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
