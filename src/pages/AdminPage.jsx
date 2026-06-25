import { useState } from 'react'
import { motion } from 'framer-motion'
import Badge from '../components/Badge.jsx'
import { PRODUCTS as INITIAL_PRODUCTS, CATEGORIES, COMPANY } from '../data/products.js'

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }

const EMPTY_FORM = { name: '', category: 'consumables', desc: '', specs: '', icon: '💊' }

export default function AdminPage() {
  const [tab, setTab] = useState('products')
  const [products, setProducts] = useState(INITIAL_PRODUCTS)
  const [editing, setEditing] = useState(null)   // product id being edited
  const [adding, setAdding] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)
  const [formErrors, setFormErrors] = useState({})
  const [companyForm, setCompanyForm] = useState(COMPANY)
  const [companySaved, setCompanySaved] = useState(false)

  const setF = (key, val) => setForm((f) => ({ ...f, [key]: val }))
  const setC = (key, val) => setCompanyForm((f) => ({ ...f, [key]: val }))

  const validateForm = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.desc.trim()) e.desc = 'Required'
    return e
  }

  const startAdd = () => { setForm(EMPTY_FORM); setAdding(true); setEditing(null); setFormErrors({}) }
  const startEdit = (p) => {
    setForm({ name: p.name, category: p.category, desc: p.desc, specs: p.specs, icon: p.icon })
    setEditing(p.id); setAdding(false); setFormErrors({})
  }
  const cancelForm = () => { setAdding(false); setEditing(null); setFormErrors({}) }

  const saveProduct = () => {
    const errs = validateForm()
    if (Object.keys(errs).length) { setFormErrors(errs); return }
    if (adding) {
      setProducts((ps) => [...ps, { ...form, id: Date.now() }])
    } else if (editing !== null) {
      setProducts((ps) => ps.map((p) => (p.id === editing ? { ...p, ...form } : p)))
    }
    cancelForm()
  }

  const deleteProduct = (id) => {
    if (window.confirm('Delete this product? This cannot be undone.')) {
      setProducts((ps) => ps.filter((p) => p.id !== id))
    }
  }

  const saveCompany = () => {
    setCompanySaved(true)
    setTimeout(() => setCompanySaved(false), 3000)
    // In production: POST companyForm to your API
  }

  const TABS = [
    { id: 'products',     label: 'Products' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'company',      label: 'Company Info' },
  ]

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--gold)' }}>Admin Panel</p>
          <h1>Dashboard</h1>
          <p>Manage products, certificates, and company information.</p>
        </div>
      </div>

      <div className="section--gray" style={{ minHeight: '60vh', padding: '0 0 72px' }}>
        <div className="container" style={{ paddingTop: 32 }}>

          {/* Tabs */}
          <div className="admin-tabs">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`admin-tab ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ── Products Tab ── */}
          {tab === 'products' && (
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h2 style={{ color: 'var(--navy)', fontWeight: 800, fontSize: 20 }}>
                  Products ({products.length})
                </h2>
                <button className="btn btn--teal" onClick={startAdd}>+ Add Product</button>
              </div>

              {/* Add/Edit form */}
              {(adding || editing !== null) && (
                <div className="admin-form-panel">
                  <h3>{adding ? 'Add New Product' : 'Edit Product'}</h3>
                  <div className="admin-form-grid">
                    <div className="form-group">
                      <label className="form-label">Icon (emoji) *</label>
                      <input className="form-input" value={form.icon} onChange={(e) => setF('icon', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Product Name *</label>
                      <input
                        className="form-input"
                        value={form.name}
                        onChange={(e) => setF('name', e.target.value)}
                        style={formErrors.name ? { borderColor: 'var(--danger)' } : {}}
                      />
                      {formErrors.name && <span style={{ color: 'var(--danger)', fontSize: 12 }}>{formErrors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Category</label>
                      <select className="form-select" value={form.category} onChange={(e) => setF('category', e.target.value)}>
                        {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                          <option key={c.id} value={c.id}>{c.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom: 14 }}>
                    <label className="form-label">Description *</label>
                    <textarea
                      className="form-textarea"
                      rows={2}
                      value={form.desc}
                      onChange={(e) => setF('desc', e.target.value)}
                      style={formErrors.desc ? { borderColor: 'var(--danger)' } : {}}
                    />
                    {formErrors.desc && <span style={{ color: 'var(--danger)', fontSize: 12 }}>{formErrors.desc}</span>}
                  </div>
                  <div className="form-group" style={{ marginBottom: 20 }}>
                    <label className="form-label">Specifications</label>
                    <input className="form-input" value={form.specs} onChange={(e) => setF('specs', e.target.value)} placeholder="e.g. Size: M | Box of 100 | CE certified" />
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <button className="btn btn--teal" onClick={saveProduct}>Save Product</button>
                    <button className="btn btn--outline" onClick={cancelForm}>Cancel</button>
                  </div>
                </div>
              )}

              {/* Table */}
              <div className="table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Icon</th>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p.id}>
                        <td className="admin-table__icon">{p.icon}</td>
                        <td>
                          <p className="admin-table__name">{p.name}</p>
                          <p className="admin-table__desc">{p.desc.slice(0, 65)}…</p>
                        </td>
                        <td>
                          <Badge color="teal">
                            {CATEGORIES.find((c) => c.id === p.category)?.label}
                          </Badge>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: 8 }}>
                            <button className="btn btn--blue-light btn--sm" onClick={() => startEdit(p)}>Edit</button>
                            <button className="btn btn--danger-light btn--sm" onClick={() => deleteProduct(p.id)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* ── Certificates Tab ── */}
          {tab === 'certificates' && (
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <h2 style={{ color: 'var(--navy)', fontWeight: 800, fontSize: 20, marginBottom: 24 }}>
                Upload Certificates
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                {[
                  { name: 'GST Certificate',   hint: 'GST_Certificate.pdf', icon: '📋' },
                  { name: 'Drug License 20B',  hint: 'DrugLicense_20B.pdf', icon: '💊' },
                  { name: 'Drug License 21B',  hint: 'DrugLicense_21B.pdf', icon: '🏪' },
                ].map((cert) => (
                  <div key={cert.name} className="cert-upload-card">
                    <div className="cert-upload-card__icon">{cert.icon}</div>
                    <h4 className="cert-upload-card__title">{cert.name}</h4>
                    <p className="cert-upload-card__hint">PDF or image, max 5 MB<br /><em>{cert.hint}</em></p>
                    <button
                      className="btn btn--teal btn--sm"
                      onClick={() => alert('Connect to your backend or Cloudinary/S3 to handle file uploads.')}
                    >
                      Choose File
                    </button>
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--blue-light)', border: '1px solid #93C5FD', borderRadius: 10, padding: '16px 20px' }}>
                <p style={{ color: '#1E40AF', fontSize: 14, lineHeight: 1.65 }}>
                  <strong>📌 Developer Note:</strong> To enable file uploads, connect a backend endpoint
                  (e.g. <code>/api/upload</code>) that accepts multipart/form-data and stores files in
                  Cloudinary, AWS S3, or your server. Then update the button handler in this component.
                </p>
              </div>
            </motion.div>
          )}

          {/* ── Company Tab ── */}
          {tab === 'company' && (
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <h2 style={{ color: 'var(--navy)', fontWeight: 800, fontSize: 20, marginBottom: 24 }}>
                Company Information
              </h2>
              <div style={{ maxWidth: 620, background: 'var(--white)', borderRadius: 14, border: '1px solid var(--gray-100)', padding: 28 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18, marginBottom: 20 }}>
                  {[
                    { key: 'name',     label: 'Company Name' },
                    { key: 'phone',    label: 'Phone Number' },
                    { key: 'waNumber', label: 'WhatsApp Number (with country code)' },
                    { key: 'email',    label: 'Email Address' },
                    { key: 'gst',      label: 'GST Number' },
                    { key: 'hours',    label: 'Business Hours' },
                  ].map((f) => (
                    <div key={f.key} className="form-group">
                      <label className="form-label">{f.label}</label>
                      <input
                        className="form-input"
                        value={companyForm[f.key] || ''}
                        onChange={(e) => setC(f.key, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <div className="form-group" style={{ marginBottom: 24 }}>
                  <label className="form-label">Business Address</label>
                  <textarea
                    className="form-textarea"
                    rows={2}
                    value={companyForm.address || ''}
                    onChange={(e) => setC('address', e.target.value)}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <button className="btn btn--teal" onClick={saveCompany}>Save Changes</button>
                  {companySaved && (
                    <span style={{ color: 'var(--teal)', fontWeight: 600, fontSize: 14 }}>✅ Saved!</span>
                  )}
                </div>
                <p style={{ color: 'var(--gray-500)', fontSize: 12, marginTop: 12 }}>
                  Note: Changes here are in-memory only. Connect to your backend API to persist them.
                </p>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </>
  )
}
