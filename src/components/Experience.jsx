import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechLogo from './TechLogo'

const details = [
  'Worked with PJM, MISO, ISNE, NYIS, and SWPP energy market datasets.',
  'Developed a FastAPI inference endpoint.',
  'Evaluated model performance on held-out data.',
  'Worked on monitoring regressions following model retraining.',
]

const technologies = ['Python', 'Pandas', 'NumPy', 'FastAPI', 'Time-series forecasting']

export default function Experience() {
  return (
    <section className="experience-section section-shell" id="experience">
      <div className="container">
        <SectionHeading title="Experience" />

        <Reveal className="experience-timeline">
          <article className="experience-card">
            <div className="experience-card__marker" aria-hidden="true" />
            <div className="experience-card__content">
              <div className="experience-card__header">
                <div>
                  <h3>Machine Learning Engineering Intern</h3>
                  <p className="experience-card__company">Pulse — Remote</p>
                </div>
                <p className="experience-card__dates">July 2026 – September 2026</p>
              </div>

              <p className="experience-card__description">
                Worked on PulsePredict, an energy demand forecasting project, contributing to forecasting workflows, model evaluation, inference services, and model performance monitoring.
              </p>

              <div className="experience-card__details">
                <h4>Additional details</h4>
                <ul>
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>

              <ul className="tag-list" aria-label="Technologies used">
                {technologies.map((technology) => (
                  <li key={technology}>
                    <TechLogo name={technology} />
                    <span>{technology}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
