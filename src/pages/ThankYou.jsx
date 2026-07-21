// pages/ThankYou.jsx
//
// Conversion confirmation page, reached ONLY after a genuinely successful
// enquiry (see src/lib/enquirySuccess.js). It is the single source of the
// Google Ads conversion, which is configured in the Ads account with the rule
// "URL contains /thank-you".
//
// Not linked from navigation, footer, sitemap, structured data, or ordinary
// internal links. Marked noindex,nofollow — it is deliberately NOT an SEO page.
//
// A direct visit / refresh without a valid one-time authorization is redirected
// back to /contact (and AnalyticsTracker sends no page view in that case).

import { useEffect } from 'react'
import { Head, Link } from 'vite-react-ssg'
import { useNavigate } from 'react-router-dom'
import { hasValidEnquirySuccess } from '@/lib/enquirySuccess.js'

export default function ThankYou() {
  const navigate = useNavigate()

  // Client-side guard: without a valid authorization, this page must not be
  // reachable directly — send the visitor back to the form. SSG renders the
  // static markup (matching the first client render, so no hydration mismatch);
  // this effect then redirects unauthorized visitors.
  useEffect(() => {
    if (!hasValidEnquirySuccess()) {
      navigate('/contact', { replace: true })
    }
  }, [navigate])

  return (
    <div className="bg-[#F9F8F7] pt-[68px] min-h-[70vh] flex flex-col">
      <Head>
        <title>Thank You | Wedding Music Ravello</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="flex-1 flex items-center
        px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,8rem)]">
        <div className="max-w-lg">
          <div className="w-9 h-[.5px] bg-[#B8A882] mb-8" />
          <h1 className="font-serif italic font-light text-[2.5rem] text-[#1A1A1A] mb-4">
            Thank you.
          </h1>
          <p className="text-[.72rem] font-light tracking-[.05em] leading-[2] text-[#404040] mb-8">
            Your enquiry has been received. We will be in touch within 48 hours.
          </p>
          <p className="text-[.62rem] font-light tracking-[.06em] leading-[1.9] text-[#404040] mb-10">
            In the meantime, you can write to us directly at{' '}
            <a href="mailto:info@weddingmusicravello.com"
              className="text-[#8A7A5A] no-underline border-b border-[#8A7A5A]/40 hover:border-[#8A7A5A]">
              info@weddingmusicravello.com
            </a>.
          </p>
          <Link to="/"
            className="link-underline no-underline text-[.56rem] font-normal tracking-[.18em]
              uppercase text-[#1A1A1A]">
            Return to homepage
          </Link>
        </div>
      </section>
    </div>
  )
}
