import './Skills.css'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg-accent" />
      <div className="container">
        <div className="skills-header">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-subtitle">
            A comprehensive toolkit built through academic study, hands-on practice,
            and continuous self-improvement in the cybersecurity domain.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div key={group.category} className={`skill-card card fade-up delay-${i + 1}`}>
              <div className="skill-card-top">
                <span className="skill-number">0{i + 1}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-divider" />
              <ul className="skill-items">
                {group.items.map(item => (
                  <li key={item} className="skill-item">
                    <span className="skill-bullet" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
