import { useNavigate } from 'react-router-dom'
import { COMPANY } from '../data/products.js'

const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'Products',     path: '/products' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'About',        path: '/about' },
  { label: 'Contact',      path: '/contact' },
]

export default function Footer() {
  const navigate = useNavigate()
  const go = (path) => { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand">
              <div className="footer__brand-icon">🏥</div>
              <span className="footer__brand-name">Shiva Medical &amp; Surgicals</span>
            </div>
            <p className="footer__tagline">
              Licensed medical and surgical supplies distributor serving healthcare
              institutions across Telangana and Andhra Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__heading">Quick Links</h4>
            {NAV_LINKS.map((l) => (
              <button key={l.path} className="footer__link" onClick={() => go(l.path)}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__heading">Contact</h4>
            <p className="footer__info">📞 {COMPANY.phone}</p>
            <p className="footer__info">✉️ {COMPANY.email}</p>
            <p className="footer__info">📍 {COMPANY.address}</p>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="footer__heading">Certifications</h4>
            {['GST Registered', 'Drug License 20B', 'Drug License 21B', 'Govt. Recognised'].map((c) => (
              <p key={c} className="footer__info">✅ {c}</p>
            ))}
          </div>
        </div>

        <hr className="footer__divider" />
        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} Shiva Medical &amp; Surgicals. All rights reserved.</p>
          <p className="footer__copy">Hyderabad, Telangana, India</p>
        </div>
      </div>
    </footer>
  )
}
