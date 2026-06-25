# Shiva Medical & Surgicals — Website

A modern, responsive product catalog website for a licensed medical and surgical supplies distributor based in Hyderabad, Telangana.

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React 18, Vite 5, React Router 6  |
| Styling  | Plain CSS with design tokens      |
| Animation| Framer Motion                     |
| Icons    | Lucide React + emoji              |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server (opens at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project Structure

```
shiva-medical/
├── index.html                  # Root HTML (SEO meta tags included)
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # Entry point
    ├── App.jsx                 # Routes + layout
    ├── styles/
    │   └── index.css           # All styles (CSS custom properties)
    ├── data/
    │   └── products.js         # Products, categories, certs, company info
    ├── components/
    │   ├── Navbar.jsx          # Sticky nav with mobile drawer
    │   ├── Footer.jsx
    │   ├── FloatingWA.jsx      # Fixed WhatsApp button
    │   ├── WhatsAppBtn.jsx     # Reusable WA enquiry button
    │   ├── ProductCard.jsx     # Product tile
    │   ├── Badge.jsx           # Colour badge chip
    │   └── SectionHead.jsx     # Eyebrow + title + subtitle block
    └── pages/
        ├── HomePage.jsx        # Hero, categories, testimonials, CTA
        ├── ProductsPage.jsx    # Search + filter + 25 product cards
        ├── CertificatesPage.jsx# GST + Drug License cards + trust badges
        ├── AboutPage.jsx       # Story, timeline, stats, service areas
        ├── ContactPage.jsx     # Info cards, map placeholder, WA form
        └── AdminPage.jsx       # Product CRUD, cert upload, company info
```

---

## Customisation Checklist

### 1. Company Details
Edit `src/data/products.js` → `COMPANY` object:
```js
export const COMPANY = {
  name:      'Shiva Medical & Surgicals',
  phone:     '+91 98765 43210',       // ← your number
  waNumber:  '919876543210',          // ← country code + number, no +
  email:     'info@shivamedical.in',
  address:   '...',
  hours:     'Mon – Sat: 9:00 AM – 6:30 PM',
  gst:       '36AABCS1234F1Z5',
  mapsUrl:   'https://maps.google.com/?q=...',
}
```

### 2. Products
Add/edit products in `src/data/products.js` → `PRODUCTS` array.  
Each product needs: `id`, `category`, `name`, `desc`, `specs`, `icon`.

### 3. Google Maps Embed
In `src/pages/ContactPage.jsx`, replace the `<div className="map-placeholder">` block with:
```jsx
<iframe
  title="Location"
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%" height="220"
  style={{ border: 0, borderRadius: 12 }}
  allowFullScreen loading="lazy"
/>
```

### 4. Certificate PDFs
Put your PDF files in `public/` (e.g. `public/gst-certificate.pdf`).  
In `src/pages/CertificatesPage.jsx`, update the `handleView` and `handleDownload` functions to reference those paths.

### 5. Colours
All colours live in `src/styles/index.css` as CSS custom properties under `:root { }`.

---

## Deployment

### Frontend — Netlify
```bash
npm run build
# Drag and drop the `dist/` folder to Netlify, or connect your Git repo.
# Set publish directory to: dist
```

### Frontend — Vercel
```bash
npm install -g vercel
vercel
```

### Backend (optional — for file uploads & persistent data)
Build a Node.js + Express + MongoDB API separately and connect it to:
- `AdminPage.jsx` → product save/delete endpoints
- `CertificatesPage.jsx` → file upload endpoint

---

## No E-Commerce
This site has **no** shopping cart, checkout, payments, or user accounts.  
All enquiries route through WhatsApp (`https://wa.me/`) with pre-filled messages.

---

## License
MIT — free to use and modify for your business.
