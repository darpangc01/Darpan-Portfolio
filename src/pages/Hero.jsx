import './Hero.css'

export default function Hero({ identity }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />

      <div className="container hero-inner">
        <div className="hero-tag fade-up">
          <span className="hero-tag-dot" />
          <span>{identity.availability || 'Available for Opportunities'}</span>
        </div>

        <h1 className="hero-name fade-up delay-1">
          {identity.name}
        </h1>

        <div className="hero-title-row fade-up delay-2">
          <span className="hero-line" />
          <span className="hero-title">{identity.title}</span>
        </div>

        <p className="hero-tagline fade-up delay-3">
          {identity.tagline}
        </p>

        <p className="hero-bio fade-up delay-4">
          {identity.shortBio}
        </p>

        <div className="hero-actions fade-up delay-5">
          <a href="#contact" className="btn-primary">
            Get In Touch <span className="arrow">→</span>
          </a>
          <a href="#about" className="btn-ghost">
            Learn More
          </a>
        </div>

        <div className="hero-meta fade-up delay-5">
          <div className="hero-meta-item">
            <span className="meta-label">Location</span>
            <span className="meta-value">{identity.location}</span>
          </div>
          <div className="hero-meta-divider" />
          <div className="hero-meta-item">
            <span className="meta-label">Degree</span>
            <span className="meta-value">{identity.degree}</span>
          </div>
          <div className="hero-meta-divider" />
          <div className="hero-meta-item">
            <span className="meta-label">University</span>
            <span className="meta-value">{identity.university}</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span className="scroll-line" />
        <span className="scroll-label">scroll</span>
      </div>
    </section>
  )
}
