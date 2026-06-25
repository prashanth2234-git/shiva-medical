import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHead from '../components/SectionHead.jsx'
import WhatsAppBtn from '../components/WhatsAppBtn.jsx'
import Badge from '../components/Badge.jsx'
import { TESTIMONIALS, CERTIFICATES } from '../data/products.js'

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

const CATEGORY_TILES = [
  { icon: '🩺', label: 'Medical Consumables',  cat: 'consumables' },
  { icon: '🔬', label: 'Surgical Products',    cat: 'surgical' },
  { icon: '💊', label: 'Diagnostic Equipment', cat: 'diagnostic' },
  { icon: '🛏️', label: 'Hospital Furniture',   cat: 'furniture' },
  { icon: '⚗️', label: 'Laboratory Products',  cat: 'laboratory' },
  { icon: '🚨', label: 'Emergency Care',       cat: 'emergency' },
]

const WHY_CARDS = [
  { icon: '🏛️', title: 'Government Licensed',  desc: 'Drug License Form 20B & 21B, GST registered under Telangana state.' },
  { icon: '🎯', title: 'Quality Assurance',     desc: 'All products are ISO/CE/FDA certified. Zero compromise on standards.' },
  { icon: '🤝', title: 'Trusted Network',       desc: 'Authorised distributor for leading national and international brands.' },
  { icon: '⚡', title: 'Fast Turnaround',       desc: '48-hour delivery within Hyderabad. Same-day dispatch for critical orders.' },
]

const ABOUT_MINI = [
  { icon: '🏥', label: 'Govt. Registered' },
  { icon: '📜', label: 'Drug Licensed' },
  { icon: '✅', label: 'GST Registered' },
  { icon: '🚚', label: 'Pan-Telangana' },
]

export default function HomePage() {
  const navigate = useNavigate()
  const go = (path, state) => { navigate(path, { state }); window.scrollTo({ top: 0 }) }

  return (
    <>
      {/* ── Hero ── */}
      <div className="hero">
        <div className="hero__circle-1" />
        <div className="hero__circle-2" />
        <div className="hero__inner">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge color="teal">Licensed Medical Distributor · Hyderabad</Badge>
            </motion.div>
            <motion.h1 className="hero__title" variants={fadeUp}>
              Your Trusted Partner in{' '}
              <span>Medical &amp; Surgical</span> Supplies
            </motion.h1>
            <motion.p className="hero__subtitle" variants={fadeUp}>
              Shiva Medical &amp; Surgicals supplies premium-grade healthcare products to hospitals,
              clinics, and laboratories across Telangana and Andhra Pradesh.
            </motion.p>
            <motion.div className="hero__ctas" variants={fadeUp}>
              <button className="btn btn--teal btn--lg" onClick={() => go('/products')}>
                Browse Catalog →
              </button>
              <WhatsAppBtn label="WhatsApp Enquiry" />
            </motion.div>
            <motion.div className="hero__stats" variants={fadeUp}>
              {[
                { n: '500+', l: 'Products' },
                { n: '200+', l: 'Healthcare Clients' },
                { n: '10+',  l: 'Years Experience' },
                { n: '48 hr',l: 'Avg. Delivery' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="hero__stat-n">{s.n}</p>
                  <p className="hero__stat-l">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── About Preview ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="grid-auto" style={{ alignItems: 'center' }}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHead
                  eyebrow="About Us"
                  title="Committed to Healthcare Excellence"
                  subtitle="Founded in Hyderabad, Shiva Medical & Surgicals is a Drug Controller–licensed distributor
                    of medical consumables, surgical instruments, diagnostic equipment, and hospital furniture.
                    We serve government hospitals, private clinics, nursing homes, diagnostic labs, and pharmacies."
                />
              </motion.div>
              <motion.button variants={fadeUp} className="btn btn--outline" onClick={() => go('/about')}>
                Our Story →
              </motion.button>
            </motion.div>
            <motion.div
              className="about-mini-grid"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              {ABOUT_MINI.map((c) => (
                <motion.div key={c.label} className="about-mini-card" variants={fadeUp}>
                  <div className="about-mini-card__icon">{c.icon}</div>
                  <p className="about-mini-card__label">{c.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Our Range"
            title="Product Categories"
            subtitle="From consumables to capital equipment — everything your healthcare facility needs."
            center
          />
          <motion.div
            className="grid-categories"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {CATEGORY_TILES.map((c) => (
              <motion.button
                key={c.cat}
                className="cat-btn"
                variants={fadeUp}
                onClick={() => go('/products', { category: c.cat })}
              >
                <span className="cat-btn__icon">{c.icon}</span>
                <span className="cat-btn__label">{c.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section section--navy">
        <div className="container">
          <SectionHead
            eyebrow="Why Choose Us"
            title="What Makes Us Different"
            subtitle="We don't just supply products — we build long-term healthcare partnerships."
            center
          />
          <motion.div
            className="grid-auto"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {WHY_CARDS.map((w) => (
              <motion.div key={w.title} className="why-card" variants={fadeUp}>
                <div className="why-card__icon">{w.icon}</div>
                <h3 className="why-card__title">{w.title}</h3>
                <p className="why-card__desc">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow="Testimonials" title="What Our Clients Say" center />
          <motion.div
            className="grid-auto"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.name} className="card testimonial-card" variants={fadeUp}>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name[0]}</div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__role">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Certificates Preview ── */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Legal &amp; Compliance"
            title="Our Certifications"
            subtitle="We operate with full regulatory compliance under the Drugs &amp; Cosmetics Act."
            center
          />
          <motion.div
            style={{ display: 'flex', justifyContent: 'center', gap: 22, flexWrap: 'wrap' }}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {CERTIFICATES.map((c) => (
              <motion.div key={c.title} className="cert-preview-card" variants={fadeUp}>
                <div className="cert-preview-card__icon">{c.icon}</div>
                <p className="cert-preview-card__title">{c.title}</p>
                <p className="cert-preview-card__number">{c.number}</p>
                <button className="btn btn--teal-light btn--sm" onClick={() => go('/certificates')}>
                  View →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--teal">
        <div className="container cta-section">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 className="cta-section__title" variants={fadeUp}>
              Ready to Place an Order or Get a Quote?
            </motion.h2>
            <motion.p className="cta-section__sub" variants={fadeUp}>
              Contact us today — our team responds within 2 business hours.
            </motion.p>
            <motion.div className="cta-section__btns" variants={fadeUp}>
              <WhatsAppBtn label="Chat on WhatsApp" />
              <button className="btn btn--outline-white" onClick={() => go('/contact')}>
                Send an Enquiry
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
