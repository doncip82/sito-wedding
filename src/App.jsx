// App.jsx
import { Routes, Route } from 'react-router-dom'
import NavBar  from '@/components/layout/NavBar.jsx'
import Footer  from '@/components/layout/Footer.jsx'
import Home    from '@/pages/Home.jsx'

import { lazy, Suspense } from 'react'
const EvoStrings   = lazy(() => import('@/pages/EvoStrings.jsx'))
const TrilogyTrio  = lazy(() => import('@/pages/TrilogyTrio.jsx'))
const ViolinSolo   = lazy(() => import('@/pages/ViolinSolo.jsx'))
const Contact      = lazy(() => import('@/pages/Contact.jsx'))

const LocationRavello     = lazy(() => import('@/pages/locations/Ravello.jsx'))
const LocationPositano    = lazy(() => import('@/pages/locations/Positano.jsx'))
const LocationSorrento    = lazy(() => import('@/pages/locations/Sorrento.jsx'))
const MusicIndex          = lazy(() => import('@/pages/music/MusicIndex.jsx'))
const MusicSaxophone      = lazy(() => import('@/pages/music/Saxophone.jsx'))
const MusicDJ             = lazy(() => import('@/pages/music/DJ.jsx'))
const MusicVocalist       = lazy(() => import('@/pages/music/Vocalist.jsx'))
const MusicPosteggia      = lazy(() => import('@/pages/music/Posteggia.jsx'))
const MusicOpera          = lazy(() => import('@/pages/music/Opera.jsx'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#F9F8F7] flex items-center justify-center">
      <span className="text-[.56rem] font-light tracking-[.25em] uppercase text-[#B8A882]">
        Loading…
      </span>
    </div>
  )
}

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                       element={<Home />} />
            <Route path="/evostrings"             element={<EvoStrings />} />
            <Route path="/trilogy-trio"           element={<TrilogyTrio />} />
            <Route path="/violin-solo"            element={<ViolinSolo />} />
            <Route path="/contact"                element={<Contact />} />
            <Route path="/locations/ravello"      element={<LocationRavello />} />
            <Route path="/locations/positano"     element={<LocationPositano />} />
            <Route path="/locations/sorrento"     element={<LocationSorrento />} />
            <Route path="/music"                  element={<MusicIndex />} />
            <Route path="/music/saxophone"        element={<MusicSaxophone />} />
            <Route path="/music/dj"               element={<MusicDJ />} />
            <Route path="/music/vocalist"         element={<MusicVocalist />} />
            <Route path="/music/posteggia"        element={<MusicPosteggia />} />
            <Route path="/music/opera"            element={<MusicOpera />} />

          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
