// components/ui/EnquiryLinks.jsx
// The two contact CTAs used in page heroes and closing CTA bands: the enquiry
// form — pre-filled with the page's ensemble / venue — and WhatsApp with a
// pre-written message. `tone` matches the background: 'light' (ivory / sand)
// or 'dark' (charcoal, photo and video heroes). Text links with a hairline
// underline, per the design rules (no coloured rounded buttons). Clicks on the WhatsApp
// link are tracked by the delegated listener in src/lib/contactTracking.js —
// no onClick here.
import WhatsAppIcon from '@/components/ui/WhatsAppIcon.jsx'
import { enquiryHref, whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/contactLinks.js'

const base = `text-[.68rem] tracking-[.22em] uppercase no-underline
  border-b pb-1 whitespace-nowrap transition-colors`

const tones = {
  dark: {
    primary:   `${base} font-light text-[#B8A882] border-[rgba(184,168,130,.45)] hover:border-[#B8A882]`,
    secondary: `${base} font-light text-white/80 border-white/35 hover:text-[#B8A882] hover:border-[#B8A882]`,
  },
  light: {
    primary:   `${base} font-normal text-[#1A1A1A] border-[#1A1A1A]/60 hover:text-[#8A7A5A] hover:border-[#8A7A5A]`,
    secondary: `${base} font-light text-[#404040] border-[#8A7A5A]/50 hover:text-[#8A7A5A] hover:border-[#8A7A5A]`,
  },
}

export default function EnquiryLinks({
  label = 'Begin Your Enquiry',
  ensemble,
  venue,
  message = DEFAULT_WHATSAPP_MESSAGE,
  tone = 'dark',
  className = '',
}) {
  const { primary, secondary } = tones[tone]
  return (
    <div className={`flex items-center gap-x-8 gap-y-4 flex-wrap ${className}`}>
      <a href={enquiryHref({ ensemble, venue })} className={primary}>
        {label}
      </a>
      <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"
        className={`${secondary} inline-flex items-center gap-[.55rem]`}>
        <WhatsAppIcon className="w-[.85rem] h-[.85rem] shrink-0" />
        Chat on WhatsApp
      </a>
    </div>
  )
}
