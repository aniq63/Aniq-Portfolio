import { contactDetails, socialLinks } from '../data/socialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__identity">
          <span className="site-footer__name">Aniq Ramzan</span>
          <span className="site-footer__role">Machine Learning Engineer</span>
          <a className="site-footer__phone" href={contactDetails.phoneHref}>
            {contactDetails.phone}
          </a>
        </div>

        <nav className="site-footer__links" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.href} target="_blank" rel="noreferrer noopener">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="site-footer__copyright">© {year} Aniq Ramzan</p>
      </div>
    </footer>
  )
}
