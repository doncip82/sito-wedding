// components/ui/EnquiryLinks.jsx
// The two contact CTAs used on dark sections (page heroes and closing CTA
// bands): the enquiry form — pre-filled with the page's ensemble / venue — and
// WhatsApp with a pre-written message. Text links with a hairline underline,
// per the design rules (no coloured rounded buttons). Clicks on the WhatsApp
// link are tracked by the delegated listener in src/lib/contactTracking.js —
// no onClick here.
import { enquiryHref, whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/contactLinks.js'

const primaryClass = `text-[.6rem] font-light tracking-[.22em] uppercase no-underline
  text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
  hover:border-[#B8A882] transition-colors`

const secondaryClass = `text-[.6rem] font-light tracking-[.22em] uppercase no-underline
  text-white/70 border-b border-white/25 pb-1 whitespace-nowrap
  hover:text-[#B8A882] hover:border-[#B8A882] transition-colors`

export default function EnquiryLinks({
  label = 'Begin Your Enquiry',
  ensemble,
  venue,
  message = DEFAULT_WHATSAPP_MESSAGE,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-x-8 gap-y-4 flex-wrap ${className}`}>
      <a href={enquiryHref({ ensemble, venue })} className={primaryClass}>
        {label}
      </a>
      <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"
        className={secondaryClass}>
        Chat on WhatsApp
      </a>
    </div>
  )
}
