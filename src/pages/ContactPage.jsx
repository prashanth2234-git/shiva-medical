import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHead from '../components/SectionHead.jsx'
import WhatsAppBtn from '../components/WhatsAppBtn.jsx'
import { COMPANY } from '../data/products.js'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

const INFO_CARDS = [
  { icon: '📞', label: 'Phone',          value: COMPANY.phone,   href: `tel:${COMPANY.phone.replace(/\s/g, '')}` },
  { icon: '✉️', label: 'Email',          value: COMPANY.email,   href: `mailto:${COMPANY.email}` },
  { icon: '📍', label: 'Address',        value: COMPANY.address, href: null },
  { icon: '🕒', label: 'Business Hours', value: COMPANY.hours,   href: null },
]

const EMPTY_FORM = { name: '', phone: '', email: '', product: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }))

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.phone.trim())   e.phone   = 'Phone number is required'
    if (!form.product.trim()) e.product = 'Please describe your product requirement'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    const msg =
      `*Enquiry from Website*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email || 'N/A'}\n` +
      `Product Requirement: ${form.product}\n` +
      `Message: ${form.message || 'N/A'}`
    window.open(`https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">Get in Touch</p>
          <h1>Contact Us</h1>
          <p>We typically respond within 2 business hours on working days.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 52 }}>

            {/* Left: info */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.h2
                variants={fadeUp}
                style={{ color: 'var(--navy)', fontWeight: 800, fontSize: 22, marginBottom: 22 }}
              >
                Reach Us Directly
              </motion.h2>

              {INFO_CARDS.map((info) => (
                <motion.div key={info.label} className="contact-info-card" variants={fadeUp}>
                  <div className="contact-info-card__icon">{info.icon}</div>
                  <div>
                    <p className="contact-info-card__label">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="contact-info-card__link">{info.value}</a>
                    ) : (
                      <p className="contact-info-card__value">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp}>
                <WhatsAppBtn label="Open WhatsApp Chat" fullWidth />
              </motion.div>

              {/* Map placeholder */}
              <motion.div className="map-placeholder" variants={fadeUp}>
                <span className="map-placeholder__icon">🗺️</span>
                <p className="map-placeholder__text">
                  Replace this with a Google Maps iframe embed
                </p>
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-placeholder__link"
                >
                  Open in Google Maps →
                </a>
              </motion.div>

              {/*
                To add a real map, replace the map-placeholder div above with:

                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: 12 }}
                  allowFullScreen
                  loading="lazy"
                />
              */}
            </motion.div>

            {/* Right: form */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.h2
                variants={fadeUp}
                style={{ color: 'var(--navy)', fontWeight: 800, fontSize: 22, marginBottom: 22 }}
              >
                Send an Enquiry
              </motion.h2>

              {sent ? (
                <motion.div className="form-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <p className="form-success__icon">✅</p>
                  <h3 className="form-success__title">Enquiry Sent!</h3>
                  <p className="form-success__text">
                    Your WhatsApp message has been prepared. Our team will respond shortly.
                  </p>
                  <button
                    className="btn btn--teal"
                    onClick={() => { setSent(false); setForm(EMPTY_FORM) }}
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
                  variants={stagger}
                >
                  {[
                    { key: 'name',    label: 'Full Name',            type: 'text',  required: true,  ph: 'e.g. Dr. Ramesh Kumar' },
                    { key: 'phone',   label: 'Phone Number',         type: 'tel',   required: true,  ph: "+91 98487 69912", },
                    { key: 'email',   label: 'Email Address',        type: 'email', required: false, ph: 'you@hospital.com' },
                    { key: 'product', label: 'Product Requirement',  type: 'text',  required: true,  ph: 'e.g. IV sets, glucometers, exam table' },
                  ].map((f) => (
                    <motion.div key={f.key} className="form-group" variants={fadeUp}>
                      <label className="form-label">
                        {f.label} {f.required && <span style={{ color: 'var(--danger)' }}>*</span>}
                      </label>
                      <input
                        type={f.type}
                        className="form-input"
                        placeholder={f.ph}
                        value={form[f.key]}
                        onChange={(e) => set(f.key, e.target.value)}
                        style={errors[f.key] ? { borderColor: 'var(--danger)' } : {}}
                      />
                      {errors[f.key] && (
                        <span style={{ color: 'var(--danger)', fontSize: 12 }}>{errors[f.key]}</span>
                      )}
                    </motion.div>
                  ))}

                  <motion.div className="form-group" variants={fadeUp}>
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      rows={4}
                      placeholder="Describe your requirement in detail — quantity, delivery timeline, etc."
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                    />
                  </motion.div>

                  <motion.button type="submit" className="btn btn--teal btn--lg btn--full" variants={fadeUp}>
                    Send via WhatsApp →
                  </motion.button>
                  <motion.p
                    variants={fadeUp}
                    style={{ color: 'var(--gray-500)', fontSize: 12, textAlign: 'center' }}
                  >
                    Clicking the button will open WhatsApp with your enquiry pre-filled.
                  </motion.p>
                </motion.form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
