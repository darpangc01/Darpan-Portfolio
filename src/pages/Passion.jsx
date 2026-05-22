import './Passion.css'

export default function Passion({ passions }) {
  return (
    <section id="passion" className="passion-section">
      <div className="container">
        <div className="passion-header">
          <p className="section-label">What Drives Me</p>
          <h2 className="section-title">My Passions</h2>
          <p className="section-subtitle">
            Beyond the curriculum — the areas of cybersecurity that truly ignite
            my curiosity and fuel my continuous growth.
          </p>
        </div>

        <div className="passion-grid">
          {passions.map((item, i) => (
            <div key={item.title} className={`passion-card card fade-up delay-${i + 1}`}>
              <div className="passion-icon">{item.icon}</div>
              <h3 className="passion-title">{item.title}</h3>
              <p className="passion-desc">{item.description}</p>
              <div className="passion-card-footer">
                <span className="passion-index">0{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
