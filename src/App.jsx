import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar    from './components/Navbar.jsx'
import Footer    from './components/Footer.jsx'
import FloatingWA from './components/FloatingWA.jsx'
import HomePage        from './pages/HomePage.jsx'
import ProductsPage    from './pages/ProductsPage.jsx'
import CertificatesPage from './pages/CertificatesPage.jsx'
import AboutPage       from './pages/AboutPage.jsx'
import ContactPage     from './pages/ContactPage.jsx'
import AdminPage       from './pages/AdminPage.jsx'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/products"     element={<ProductsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/about"        element={<AboutPage />} />
          <Route path="/contact"      element={<ContactPage />} />
          <Route path="/admin"        element={<AdminPage />} />
          {/* Catch-all → Home */}
          <Route path="*"             element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}
