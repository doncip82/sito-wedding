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
            <Route path="/"              element={<Home />} />
            <Route path="/evostrings"    element={<EvoStrings />} />
            <Route path="/trilogy-trio"  element={<TrilogyTrio />} />
            <Route path="/violin-solo"   element={<ViolinSolo />} />
            <Route path="/contact"       element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
