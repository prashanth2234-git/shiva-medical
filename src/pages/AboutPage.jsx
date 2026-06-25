import { motion } from 'framer-motion'
import SectionHead from '../components/SectionHead.jsx'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

const VALUES = [
  { icon: '🎯', title: 'Mission',    desc: 'Supply certified medical products reliably and affordably across Telangana and AP.' },
  { icon: '🌟', title: 'Vision',     desc: "Become the region's most trusted one-stop medical supply partner by 2027." },
  { icon: '💎', title: 'Values',     desc: 'Integrity, quality, transparency, and service excellence in every order we fulfil.' },
  { icon: '❤️', title: 'Commitment', desc: 'Supporting better patient outcomes through supply chain reliability and speed.' },
]

const TIMELINE = [
  { year: '2013', event: 'Founded in Kukatpally, Hyderabad with a focus on surgical consumables.' },
  { year: '2015', event: 'Obtained Drug License Form 20B for retail distribution.' },
  { year: '2017', event: 'Expanded into diagnostic equipment and hospital furniture segment.' },
  { year: '2019', event: 'GST registration and launch of pan-Telangana distribution network.' },
  { year: '2021', event: 'Drug License Form 21B obtained for wholesale distribution.' },
  { year: '2023', event: 'Crossed 200+ active healthcare institution clients across two states.' },
  { year: '2024', event: 'Launched digital product catalog and WhatsApp enquiry system.' },
]

const CITIES = [
  'Hyderabad', 'Secunderabad', 'Warangal', 'Karimnagar',
  'Nizamabad', 'Khammam', 'Nalgonda', 'Vijayawada',
  'Visakhapatnam', 'Guntur',
]

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1>Shiva Medical &amp; Surgicals</h1>
          <p>A decade of trusted healthcare supply in Telangana and beyond.</p>
        </div>
      </div>

      {/* Story + Values */}
      <section className="section">
        <div className="container">
          <div className="grid-auto" style={{ alignItems: 'start', gap: 48 }}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHead
                  eyebrow="Our Story"
                  title="Built on Trust, Powered by Quality"
                  subtitle="Shiva Medical & Surgicals was established in 2013 with a singular purpose: to make high-quality
                    medical supplies accessible to every healthcare provider in Hyderabad. Today, we are one of the region's
                    most trusted distributors, serving over 200 hospitals, clinics, nursing homes, and diagnostic labs."
                />
              </motion.div>
              <motion.p
                variants={fadeUp}
                style={{ color: 'var(--gray-500)', fontSize: 15, lineHeight: 1.75 }}
              >
                Our growth has been driven by an unwavering commitment to quality, regulatory compliance, and
                customer service. Every product we supply carries the assurance of proper certification, safe
                handling, and timely delivery — the three pillars that healthcare procurement depends on.
              </motion.p>
            </motion.div>

            <motion.div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              {VALUES.map((v) => (
                <motion.div key={v.title} className="value-card" variants={fadeUp}>
                  <div className="value-card__icon">{v.icon}</div>
                  <h4 className="value-card__title">{v.title}</h4>
                  <p className="value-card__desc">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow="Our Journey" title="Company Timeline" center />
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                className="timeline__item"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="timeline__card">
                  <span className="timeline__year">{t.year}</span>
                  <p className="timeline__event">{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <motion.div
            style={{ display: 'flex', justifyContent: 'center', gap: 60, flexWrap: 'wrap' }}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {[
              { n: '500+',  l: 'Products in Catalog' },
              { n: '200+',  l: 'Healthcare Clients' },
              { n: '10+',   l: 'Years Experience' },
              { n: '3',     l: 'Regulatory Licenses' },
              { n: '48 hr', l: 'Average Delivery Time' },
            ].map((s) => (
              <motion.div key={s.l} style={{ textAlign: 'center' }} variants={fadeUp}>
                <p style={{ color: '#4DD0E1', fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{s.n}</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Coverage" title="Service Areas" center />
          <motion.div
            className="service-chips"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {CITIES.map((city) => (
              <motion.span key={city} className="service-chip" variants={fadeUp}>
                {city}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
