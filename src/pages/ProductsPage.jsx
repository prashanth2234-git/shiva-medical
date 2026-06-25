import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS, CATEGORIES } from '../data/products.js'

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }
const stagger = { show: { transition: { staggerChildren: 0.07 } } }

export default function ProductsPage() {
  const location = useLocation()
  const initCat = location.state?.category || 'all'

  const [activeCat, setActiveCat] = useState(initCat)
  const [query, setQuery] = useState('')

  // If navigated here with a category state, apply it
  useEffect(() => {
    if (location.state?.category) setActiveCat(location.state.category)
  }, [location.state])

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCat === 'all' || p.category === activeCat
    const q = query.toLowerCase()
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    return matchCat && matchQ
  })

  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">Product Catalog</p>
          <h1>Our Products</h1>
          <p>
            Browse our complete range. For pricing &amp; availability, use the WhatsApp
            enquiry button on any product card.
          </p>
        </div>
      </div>

      <div className="section--gray" style={{ padding: '0 0 72px' }}>
        <div className="container">
          {/* Filter bar */}
          <div className="filter-bar">
            <input
              type="text"
              className="form-input filter-bar__search"
              placeholder="Search products…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="filter-chips">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  className={`filter-chip ${activeCat === c.id ? 'active' : ''}`}
                  onClick={() => setActiveCat(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p style={{ color: 'var(--gray-500)', fontSize: 14, marginBottom: 24 }}>
            Showing <strong style={{ color: 'var(--navy)' }}>{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''}
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--gray-500)' }}>
              <p style={{ fontSize: 40, marginBottom: 12 }}>🔍</p>
              <p style={{ fontSize: 16 }}>No products match your search. Try a different keyword or category.</p>
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
        </div>
      </div>
    </>
  )
}
