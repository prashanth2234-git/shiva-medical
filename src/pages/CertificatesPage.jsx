import { motion } from 'framer-motion'
import { CERTIFICATES } from '../data/products.js'
import SectionHead from '../components/SectionHead.jsx'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

const TRUST_BADGES = [
  { icon: '🏛️', label: 'Government Registered' },
  { icon: '💊', label: 'Licensed Medical Supplier' },
  { icon: '📊', label: 'GST Registered' },
  { icon: '✅', label: 'Authorised Distributor' },
  { icon: '🔒', label: 'Regulatory Compliant' },
  { icon: '⭐', label: 'Drug Controller Approved' },
]

export default function CertificatesPage() {
  const handleView = (cert) => {
  if (!cert.pdf) {
    alert("PDF not available.")
    return
  }

  window.open(cert.pdf, "_blank")
}

const handleDownload = (cert) => {
  if (!cert.pdf) {
    alert("PDF not available.")
    return
  }

  const link = document.createElement("a")
  link.href = cert.pdf
  link.download = cert.pdf.split("/").pop()
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">Legal &amp; Compliance</p>
          <h1>Certificates &amp; Licenses</h1>
          <p>Full regulatory compliance and transparency in every operation we conduct.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Certificate cards */}
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28, marginBottom: 60 }}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {CERTIFICATES.map((c) => (
              <motion.div key={c.title} className="card cert-card" variants={fadeUp}>
                <div className="cert-card__head">
                  <div className="cert-card__icon">{c.icon}</div>
                  <h3 className="cert-card__title">{c.title}</h3>
                  <p className="cert-card__number">{c.number}</p>
                </div>
                <div className="cert-card__body">
                  <p className="cert-card__desc">{c.desc}</p>
                  <div className="cert-card__meta">
                    <div>
                      <p className="cert-card__meta-label">Issued</p>
                      <p className="cert-card__meta-value">{c.issued}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p className="cert-card__meta-label">Authority</p>
                      <p className="cert-card__meta-value">{c.authority}</p>
                    </div>
                  </div>
                  <div className="cert-card__actions">
                    <button className="btn btn--teal btn--sm" style={{ flex: 1 }} onClick={() => handleView(c)}>
                      View PDF
                    </button>
                    <button className="btn btn--outline btn--sm" style={{ flex: 1 }} onClick={() => handleDownload(c)}>
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust section */}
          <motion.div
            className="trust-section"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          >
            <h3 className="trust-section__title">Our Trust Indicators</h3>
            <div className="trust-badges">
              {TRUST_BADGES.map((b) => (
                <div key={b.label} className="trust-badge">
                  <span className="trust-badge__icon">{b.icon}</span>
                  <span className="trust-badge__label">{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
