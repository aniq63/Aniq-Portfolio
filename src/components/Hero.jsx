import { GithubIcon, LinkedinIcon } from './BrandIcons'
import HeroGraph from './HeroGraph'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner container">
        <Reveal className="hero__copy">
          <p className="status-pill">
            <span className="status-pill__dot" aria-hidden="true" />
            Open to remote ML engineering roles
          </p>

          <h1 className="hero__title">
            Building Intelligent Systems Through Machine Learning &amp; AI.
          </h1>

          <p className="hero__description">
            I&apos;m Aniq Ramzan, a Computer Science undergraduate and Machine Learning Engineer focused on building practical ML systems, AI-powered applications, and intelligent software solutions.
          </p>

          <div className="hero__meta">
            <span>Machine Learning Engineer</span>
            <span className="hero__meta-separator" aria-hidden="true" />
            <span>Pakistan</span>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              Explore my work
            </a>
            <a href="#contact" className="btn btn--outline">
              Let&apos;s connect
            </a>
          </div>

          <div className="hero__social">
            <a href="https://github.com/aniq63" target="_blank" rel="noreferrer noopener">
              <GithubIcon size={17} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aniq-ramzan-ai-learner/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedinIcon size={17} />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal className="hero__visual" delay={160}>
          <HeroGraph />
        </Reveal>
      </div>
    </section>
  )
}
