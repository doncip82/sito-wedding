// App.jsx — data routes for vite-react-ssg (SSG spike)
import { lazy, Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import NavBar from '@/components/layout/NavBar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CookieConsent from '@/components/privacy/CookieConsent.jsx'
import { trackPageView } from '@/lib/googleTag.js'
import { shouldSendThankYouPageView, markThankYouPageViewSent } from '@/lib/enquirySuccess.js'

// Home and Ravello are eager so the SSG spike can prerender their full
// content synchronously. Everything else stays lazy (client-rendered).
import Home from '@/pages/Home.jsx'
import LocationRavello from '@/pages/locations/Ravello.jsx'

const EvoStrings   = lazy(() => import('@/pages/EvoStrings.jsx'))
const TrilogyTrio  = lazy(() => import('@/pages/TrilogyTrio.jsx'))
const ViolinSolo   = lazy(() => import('@/pages/ViolinSolo.jsx'))
const Contact      = lazy(() => import('@/pages/Contact.jsx'))
const ThankYou     = lazy(() => import('@/pages/ThankYou.jsx'))
const Privacy      = lazy(() => import('@/pages/Privacy.jsx'))
const FAQ          = lazy(() => import('@/pages/FAQ.jsx'))
const LocationPositano = lazy(() => import('@/pages/locations/Positano.jsx'))
const LocationSorrento = lazy(() => import('@/pages/locations/Sorrento.jsx'))
const MusicIndex     = lazy(() => import('@/pages/music/MusicIndex.jsx'))
const MusicSaxophone = lazy(() => import('@/pages/music/Saxophone.jsx'))
const MusicDJ        = lazy(() => import('@/pages/music/DJ.jsx'))
const MusicVocalist  = lazy(() => import('@/pages/music/Vocalist.jsx'))
const MusicPosteggia = lazy(() => import('@/pages/music/Posteggia.jsx'))
const MusicOpera     = lazy(() => import('@/pages/music/Opera.jsx'))
const MusicPiano     = lazy(() => import('@/pages/music/Piano.jsx'))
const OccasionWeddingCeremony        = lazy(() => import('@/pages/occasions/WeddingCeremony.jsx'))
const OccasionMarriageProposal       = lazy(() => import('@/pages/occasions/MarriageProposal.jsx'))
const OccasionBirthdaysAnniversaries = lazy(() => import('@/pages/occasions/BirthdaysAnniversaries.jsx'))
const OccasionCorporateEvents        = lazy(() => import('@/pages/occasions/CorporateEvents.jsx'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#F9F8F7] flex items-center justify-center">
      <span className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]">
        Loading…
      </span>
    </div>
  )
}

// Reset scroll to the top on every client-side navigation — React Router keeps
// the previous scroll position otherwise (a card opened part-way down the page).
// Skip when there's a hash so in-page anchor links (e.g. /#occasions) still work.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

// Send a Google tag page view on the first render and on every client-side
// navigation. Keyed on pathname + search so each route change fires exactly
// once. The gtag config uses send_page_view:false, so this is the single
// source of page views (no double-counting of the initial view). No-op when
// the Google tag id is not configured.
//
// /thank-you is special: it is the Google Ads conversion page, so its page view
// must fire at most once per successful enquiry. It is sent only when a valid,
// not-yet-counted one-time authorization exists (see src/lib/enquirySuccess.js),
// after which it is marked as sent — so a refresh or a direct visit produces no
// (second) page view.
function AnalyticsTracker() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    // Defer to the next frame so the per-page <Head> has committed the new
    // document.title before we read it.
    const id = window.requestAnimationFrame(() => {
      if (pathname === '/thank-you') {
        if (shouldSendThankYouPageView()) {
          trackPageView({ path: pathname + search })
          markThankYouPageViewSent()
        }
      } else {
        trackPageView({ path: pathname + search })
      }
    })
    return () => window.cancelAnimationFrame(id)
  }, [pathname, search])
  return null
}

function Layout() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <AnalyticsTracker />
      <NavBar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
    </HelmetProvider>
  )
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/App.jsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'evostrings', element: <EvoStrings /> },
      { path: 'trilogy-trio', element: <TrilogyTrio /> },
      { path: 'violin-solo', element: <ViolinSolo /> },
      { path: 'contact', element: <Contact /> },
      { path: 'thank-you', element: <ThankYou /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'locations/ravello', element: <LocationRavello /> },
      { path: 'locations/positano', element: <LocationPositano /> },
      { path: 'locations/sorrento', element: <LocationSorrento /> },
      { path: 'music', element: <MusicIndex /> },
      { path: 'music/saxophone', element: <MusicSaxophone /> },
      { path: 'music/dj', element: <MusicDJ /> },
      { path: 'music/vocalist', element: <MusicVocalist /> },
      { path: 'music/posteggia', element: <MusicPosteggia /> },
      { path: 'music/opera', element: <MusicOpera /> },
      { path: 'music/piano', element: <MusicPiano /> },
      { path: 'occasions/wedding-ceremony', element: <OccasionWeddingCeremony /> },
      { path: 'occasions/marriage-proposal', element: <OccasionMarriageProposal /> },
      { path: 'occasions/birthdays-anniversaries', element: <OccasionBirthdaysAnniversaries /> },
      { path: 'occasions/corporate-events', element: <OccasionCorporateEvents /> },
    ],
  },
]
