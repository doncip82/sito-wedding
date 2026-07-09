// App.jsx — data routes for vite-react-ssg (SSG spike)
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import NavBar from '@/components/layout/NavBar.jsx'
import Footer from '@/components/layout/Footer.jsx'

// Home and Ravello are eager so the SSG spike can prerender their full
// content synchronously. Everything else stays lazy (client-rendered).
import Home from '@/pages/Home.jsx'
import LocationRavello from '@/pages/locations/Ravello.jsx'

const EvoStrings   = lazy(() => import('@/pages/EvoStrings.jsx'))
const TrilogyTrio  = lazy(() => import('@/pages/TrilogyTrio.jsx'))
const ViolinSolo   = lazy(() => import('@/pages/ViolinSolo.jsx'))
const Contact      = lazy(() => import('@/pages/Contact.jsx'))
const Privacy      = lazy(() => import('@/pages/Privacy.jsx'))
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

function Layout() {
  return (
    <HelmetProvider>
      <NavBar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
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
      { path: 'privacy', element: <Privacy /> },
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
