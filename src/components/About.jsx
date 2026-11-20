import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const highlights = [
  'Machine learning engineering',
  'LLM applications & RAG',
  'Backend & API development',
  'MLOps & model deployment',
]

export default function About() {
  return (
    <section className="about-section section-shell" id="about">
      <div className="container">
        <SectionHeading title="Beyond Models. Building Systems." />

        <div className="about-layout">
          <Reveal className="about-layout__lead">
            <p>
              I&apos;m a Computer Science undergraduate at Riphah International University with a strong focus on Machine Learning Engineering and Artificial Intelligence.
            </p>
          </Reveal>

          <Reveal className="about-layout__body" delay={100}>
            <p>
              My work revolves around developing practical machine learning solutions, integrating LLMs into applications, building backend services, and exploring how ML systems can move from experimentation to production.
            </p>
            <p>
              I enjoy working across the ML lifecycle, from data processing and model development to API integration, evaluation, deployment, and monitoring.
            </p>
            <p>
              My goal is to build intelligent systems that solve meaningful real-world problems.
            </p>

            <ul className="about-highlights">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
