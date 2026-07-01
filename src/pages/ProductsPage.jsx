import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS, CATEGORIES, COMPANY } from '../data/products.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 }
  }
}

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.07
    }
  }
}

export default function ProductsPage() {
  const location = useLocation()

  const initCat = location.state?.category || 'all'

  const [activeCat, setActiveCat] = useState(initCat)
  const [query, setQuery] = useState('')

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [hospital, setHospital] = useState('')
  const [requirement, setRequirement] = useState('')

  useEffect(() => {
    if (location.state?.category) {
      setActiveCat(location.state.category)
    }
  }, [location.state])

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCat === 'all' || p.category === activeCat

    const q = query.toLowerCase()

    const matchQ =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)

    return matchCat && matchQ
  })

  const sendWhatsApp = () => {
    const message = `Hello ${COMPANY.name},

I would like to enquire about the following product(s).

Name: ${name}
Phone: ${phone}
Email: ${email}
Hospital/Lab: ${hospital}

Product Requirement:
${requirement}

Please share the quotation and availability.

Thank you.`

    window.open(
      `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">Product Catalog</p>

          <h1>Our Products</h1>

          <p>
            Browse our complete range of products. Contact us for pricing,
            availability and bulk enquiries.
          </p>
        </div>
      </div>

      <div className="section--gray" style={{ padding: '0 0 72px' }}>
        <div className="container">

          <div className="filter-bar">
            <input
              type="text"
              className="form-input filter-bar__search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <div className="filter-chips">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  className={`filter-chip ${
                    activeCat === c.id ? 'active' : ''
                  }`}
                  onClick={() => setActiveCat(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <p
            style={{
              color: 'var(--gray-500)',
              fontSize: 14,
              marginBottom: 24
            }}
          >
            Showing{' '}
            <strong style={{ color: 'var(--navy)' }}>
              {filtered.length}
            </strong>{' '}
            product{filtered.length !== 1 ? 's' : ''}
          </p>

          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '64px 0'
              }}
            >
              <p style={{ fontSize: 40 }}>🔍</p>

              <p>No products found.</p>
            </div>
          ) : (
            <motion.div
              key={activeCat + query}
              className="grid-products"
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              {filtered.map((p) => (
                <motion.div key={p.id} variants={fadeUp}>
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ENQUIRY SECTION */}

          <div className="enquiry-section">

            <h2>Didn't Find the Product You're Looking For?</h2>

            <p className="enquiry-subtitle">
              We supply a wide range of medical products, laboratory reagents,
              diagnostic kits, surgical products, hospital consumables and
              healthcare essentials.
            </p>

            <p className="enquiry-note">
              <strong>For any further enquiry, reach out to us.</strong>
              <br />
              Fill out the form below and our team will get back to you with
              product availability, pricing and complete assistance.
            </p>

            <div className="enquiry-form">

              <input
                className="form-input"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Email Address (Optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Hospital / Laboratory / Clinic (Optional)"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
              />

              <textarea
                className="form-input"
                rows="6"
                placeholder="Please mention the product(s) you require, quantity and specifications."
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
              />

              <button
                className="btn btn--primary enquiry-btn"
                onClick={sendWhatsApp}
              >
                Send Enquiry via WhatsApp
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}