import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { projects } from '../data/projects'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechLogo from './TechLogo'

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className={`project-card__visual project-card__visual--${project.visual}`}>
        <ProjectVisual variant={project.visual} />
      </div>

      <div className="project-card__body">
        <div className="project-card__title-row">
          <h3>{project.name}</h3>
          <p>{project.subtitle}</p>
        </div>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__detail">
          <h4>Problem</h4>
          <p>{project.problem}</p>
        </div>

        <div className="project-card__detail">
          <h4>Contributions</h4>
          <ul>
            {project.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </div>

        <ul className="tag-list project-card__stack" aria-label={`${project.name} stack`}>
          {project.stack.map((technology) => (
            <li key={technology}>
              <TechLogo name={technology} />
              <span>{technology}</span>
            </li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.github ? (
            <a
              href={project.github}
              className="text-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon size={16} />
              View on GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              className="text-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
              Open live demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="projects-section section-shell" id="projects">
      <div className="container">
        <SectionHeading
          title="Selected work"
          description="Five projects spanning model development, retrieval systems, forecasting, and applied AI interfaces."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              className={`projects-grid__item ${project.featured ? 'projects-grid__item--wide' : ''}`}
              delay={(index % 2) * 70}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
