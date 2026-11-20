import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'writing', label: 'Writing' },
]

export default function Navbar({ activeId, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          <span className="wordmark__mark" aria-hidden="true">
            AR
          </span>
          <span className="wordmark__name">Aniq Ramzan</span>
        </a>

        <nav
          id="primary-navigation"
          className={`primary-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="primary-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`primary-nav__link ${activeId === item.id ? 'is-active' : ''}`}
                  aria-current={activeId === item.id ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="primary-nav__mobile-contact">
              <a href="#contact" className="btn btn--primary" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#contact" className="btn btn--primary btn--compact header-contact">
            Contact
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} strokeWidth={1.8} /> : <Menu size={21} strokeWidth={1.8} />}
          </button>
        </div>
      </div>
    </header>
  )
}
