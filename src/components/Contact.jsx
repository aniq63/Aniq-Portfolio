import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { contactDetails } from '../data/socialLinks'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <div className="container">
        <Reveal className="contact-panel">
          <SectionHeading
            title="Let's Build Something Intelligent."
            description="Have an interesting ML project, collaboration opportunity, or engineering challenge? I'd be happy to connect."
          />

          <a
            className="btn btn--primary contact-email"
            href={`mailto:${contactDetails.email}?subject=Portfolio%20inquiry`}
          >
            <Mail size={17} strokeWidth={1.8} aria-hidden="true" />
            {contactDetails.email}
          </a>

          <div className="contact-links">
            <a href={contactDetails.phoneHref}>
              <Phone size={17} strokeWidth={1.8} aria-hidden="true" />
              {contactDetails.phone}
            </a>
            <a
              href="https://www.linkedin.com/in/aniq-ramzan-ai-learner/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedinIcon size={17} />
              LinkedIn
            </a>
            <a href="https://github.com/aniq63" target="_blank" rel="noreferrer noopener">
              <GithubIcon size={17} />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
