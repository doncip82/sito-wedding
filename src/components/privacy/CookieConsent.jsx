// components/privacy/CookieConsent.jsx
//
// Cookie consent banner + preferences panel.
//
//   - Appears on first visit (no stored choice).
//   - "Accept all" and "Reject non-essential" get equal visual weight (no dark
//     pattern). A "Manage preferences" view lets the visitor toggle the two
//     optional categories individually.
//   - Essential cookies are always on and shown as such (never optional).
//   - The choice is stored (localStorage via src/lib/consent.js) and the banner
//     does not re-appear on route changes.
//   - Re-openable anytime via the footer "Cookie Settings" link, which fires
//     the OPEN_SETTINGS_EVENT this component listens for.
//   - Keyboard accessible, ARIA dialog roles, responsive, site-styled.
//   - Drives Consent Mode v2 through applyConsentState()/initGoogleTag().

import { useEffect, useRef, useState } from 'react'
import {
  readConsent,
  saveConsent,
  hasStoredConsent,
  OPEN_SETTINGS_EVENT,
} from '@/lib/consent.js'
import { initGoogleTag, applyConsentState } from '@/lib/googleTag.js'

export default function CookieConsent() {
  const [open, setOpen]       = useState(false)
  const [manage, setManage]   = useState(false)
  const [analytics, setAnalytics]     = useState(false)
  const [advertising, setAdvertising] = useState(false)
  const panelRef = useRef(null)

  // On mount (browser only): set up Consent Mode defaults + reflect any stored
  // choice, then decide whether to show the banner. Also subscribe to the
  // footer "Cookie Settings" trigger.
  useEffect(() => {
    // initGoogleTag() sets Consent Mode v2 defaults (denied) and re-applies a
    // stored choice; safe/idempotent no-op when no tag id is configured.
    initGoogleTag()

    if (!hasStoredConsent()) {
      setOpen(true)
    }

    const openFromSettings = () => {
      const stored = readConsent()
      setAnalytics(stored ? stored.analytics : false)
      setAdvertising(stored ? stored.advertising : false)
      setManage(true)
      setOpen(true)
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, openFromSettings)
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openFromSettings)
  }, [])

  // Move focus into the panel when it opens (keyboard accessibility).
  useEffect(() => {
    if (open && panelRef.current) panelRef.current.focus()
  }, [open, manage])

  function commit(choice) {
    saveConsent(choice)          // persist { analytics, advertising, timestamp, version }
    applyConsentState(choice)    // Consent Mode v2 update
    setOpen(false)
    setManage(false)
  }

  const acceptAll = () => commit({ analytics: true,  advertising: true })
  const rejectAll = () => commit({ analytics: false, advertising: false })
  const savePreferences = () => commit({ analytics, advertising })

  if (!open) return null

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-desc"
      tabIndex={-1}
      className="fixed inset-x-0 bottom-0 z-[9999] outline-none
        bg-[#1A1A1A] border-t border-[#B8A882]/25
        px-[clamp(1.25rem,5vw,3.5rem)] py-[clamp(1.25rem,3vw,2rem)]
        shadow-[0_-10px_40px_rgba(0,0,0,0.35)]"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col gap-5
        md:flex-row md:items-start md:justify-between md:gap-10">

        {/* Copy */}
        <div className="max-w-[62ch]">
          <p className="text-[.5rem] font-light tracking-[.22em] uppercase text-[#B8A882] mb-2.5">
            Cookies &amp; Privacy
          </p>
          <p id="cookie-consent-desc"
            className="text-[.68rem] font-light tracking-[.03em] leading-[1.85] text-white/70">
            We use cookies and similar technologies to measure website activity and advertising
            performance. You can accept or reject non-essential cookies. You can change your
            choice at any time.{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer"
              className="text-[#B8A882] no-underline border-b border-[#B8A882]/40 hover:border-[#B8A882]">
              Privacy Policy
            </a>.
          </p>

          {/* Preferences (granular) */}
          {manage && (
            <fieldset className="mt-5 border-t border-white/[.1] pt-4 flex flex-col gap-3.5">
              <legend className="sr-only">Choose which cookies to allow</legend>

              <label className="flex items-start gap-3 opacity-70 cursor-not-allowed">
                <input type="checkbox" checked readOnly disabled
                  className="mt-[.15rem] w-[13px] h-[13px] shrink-0 accent-[#8A7A5A]" />
                <span className="text-[.6rem] font-light tracking-[.04em] leading-[1.6] text-white/70">
                  <span className="uppercase tracking-[.14em] text-white/80">Essential</span>
                  {' '}— always on. Required for the site and the enquiry form to work.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="analytics"
                  checked={analytics} onChange={e => setAnalytics(e.target.checked)}
                  className="mt-[.15rem] w-[13px] h-[13px] shrink-0 accent-[#8A7A5A] cursor-pointer" />
                <span className="text-[.6rem] font-light tracking-[.04em] leading-[1.6] text-white/70">
                  <span className="uppercase tracking-[.14em] text-white/80">Analytics</span>
                  {' '}— helps us measure visits to improve the site.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="advertising"
                  checked={advertising} onChange={e => setAdvertising(e.target.checked)}
                  className="mt-[.15rem] w-[13px] h-[13px] shrink-0 accent-[#8A7A5A] cursor-pointer" />
                <span className="text-[.6rem] font-light tracking-[.04em] leading-[1.6] text-white/70">
                  <span className="uppercase tracking-[.14em] text-white/80">Advertising</span>
                  {' '}— measures the performance of our Google Ads campaigns.
                </span>
              </label>
            </fieldset>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 shrink-0 md:min-w-[210px]">
          <button type="button" onClick={acceptAll}
            className="cursor-pointer text-center bg-[#B8A882] text-[#1A1A1A]
              text-[.56rem] font-normal tracking-[.18em] uppercase
              px-6 py-3 border border-[#B8A882] hover:bg-transparent hover:text-[#B8A882]
              transition-colors">
            Accept all
          </button>
          <button type="button" onClick={rejectAll}
            className="cursor-pointer text-center bg-transparent text-white/80
              text-[.56rem] font-normal tracking-[.18em] uppercase
              px-6 py-3 border border-white/30 hover:border-[#B8A882] hover:text-[#B8A882]
              transition-colors">
            Reject non-essential
          </button>

          {manage ? (
            <button type="button" onClick={savePreferences}
              className="cursor-pointer text-center text-[.52rem] font-light tracking-[.16em]
                uppercase text-[#B8A882] underline-offset-4 hover:underline pt-1">
              Save preferences
            </button>
          ) : (
            <button type="button" onClick={() => {
              const stored = readConsent()
              setAnalytics(stored ? stored.analytics : false)
              setAdvertising(stored ? stored.advertising : false)
              setManage(true)
            }}
              className="cursor-pointer text-center text-[.52rem] font-light tracking-[.16em]
                uppercase text-white/45 underline-offset-4 hover:underline hover:text-white/70 pt-1">
              Manage preferences
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
