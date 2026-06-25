import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'Products',     path: '/products' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'About',        path: '/about' },
  { label: 'Contact',      path: '/contact' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const go = (path) => { navigate(path); setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          {/* Logo */}
          <button className="navbar__logo" onClick={() => go('/')}>
            <div className="navbar__logo-icon">🏥</div>
            <div className="navbar__logo-text">
              <p>Shiva Medical</p>
              <p>&amp; Surgicals</p>
            </div>
          </button>

          {/* Desktop links */}
          <div className="navbar__links">
            {NAV_LINKS.map((l) => (
              <button
                key={l.path}
                className={`navbar__link ${isActive(l.path) ? 'active' : ''}`}
                onClick={() => go(l.path)}
              >
                {l.label}
              </button>
            ))}
            <button
              className={`navbar__admin ${location.pathname.startsWith('/admin') ? 'active' : ''}`}
              onClick={() => go('/admin')}
            >
              Admin
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <button
            key={l.path}
            className={`navbar__link ${isActive(l.path) ? 'active' : ''}`}
            onClick={() => go(l.path)}
          >
            {l.label}
          </button>
        ))}
        <button
          className={`navbar__admin ${location.pathname.startsWith('/admin') ? 'active' : ''}`}
          onClick={() => go('/admin')}
        >
          Admin Panel
        </button>
      </div>
    </>
  )
}
