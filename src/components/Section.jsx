export default function Section({ id, eyebrow, title, description, children }) {
  return <section id={id} className="section">
    <div className="section-heading">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>
    </div>
    {children}
  </section>;
}
