import Badge from './Badge.jsx'
import WhatsAppBtn from './WhatsAppBtn.jsx'
import { CATEGORIES } from '../data/products.js'

export default function ProductCard({ product }) {
  const catLabel =
    CATEGORIES.find((c) => c.id === product.category)?.label ?? product.category

  return (
    <div className="card product-card">
      {/* Product Image */}
      <img
        src={product.image || "/images/products/default.jpg"}
        alt={product.name}
        className="product-card__image"
      />

      <div className="product-card__body">
        <Badge color="teal">{catLabel}</Badge>

        <h3 className="product-card__name">{product.name}</h3>

        <p className="product-card__desc">{product.desc}</p>

        <p className="product-card__specs">
          <strong>Specs:</strong> {product.specs}
        </p>

        <WhatsAppBtn
          label="Enquire via WhatsApp"
          message={`Hello, I am interested in: *${product.name}*. Please share price and availability.`}
          fullWidth
        />
      </div>
    </div>
  )
}