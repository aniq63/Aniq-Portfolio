import { ExternalLink } from 'lucide-react'
import { certifications } from '../data/certifications'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section className="certifications-section section-shell" id="certifications">
      <div className="container">
        <SectionHeading
          title="Certifications & learning"
          description="Programs that shaped how I work with models, agents, and applied AI."
        />

        <Reveal className="certifications-grid">
          {certifications.map((certification) => {
            const Tag = certification.credential ? 'a' : 'div'
            const linkProps = certification.credential
              ? {
                  href: certification.credential,
                  target: '_blank',
                  rel: 'noreferrer noopener',
                  'aria-label': `View credential for ${certification.title}`,
                }
              : {}

            return (
              <Tag
                key={certification.id}
                className={`certification-card ${certification.credential ? 'certification-card--linked' : ''}`}
                {...linkProps}
              >
                <div className="certification-card__body">
                  <span className="certification-card__provider">{certification.provider}</span>
                  <span className="certification-card__title">{certification.title}</span>
                  {certification.credential ? (
                    <span className="certification-card__action">
                      View credential
                      <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                  ) : null}
                </div>
              </Tag>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
