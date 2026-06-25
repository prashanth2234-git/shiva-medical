export default function SectionHead({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`section-head ${center ? 'section-head--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
