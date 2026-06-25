export default function Badge({ children, color = 'teal' }) {
  return (
    <span className={`badge badge--${color}`}>{children}</span>
  )
}
