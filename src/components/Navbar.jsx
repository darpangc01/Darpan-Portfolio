import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Passion', href: '#passion' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ name, initials }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', 'about', 'skills', 'passion', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="logo-initials">{initials}</span>
          <span className="logo-name">{name}</span>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar-cta">
          Hire Me
        </a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
