import { BookOpen, Code2, Database, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { articles } from '../data/articles'
import { socialLinks, writingLinks } from '../data/socialLinks'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const articleIcons = {
  'llm-memory': BookOpen,
  'shap-explained': BookOpen,
  'curse-of-dimensionality': BookOpen,
  'linear-regression': Code2,
}

const writingIcons = {
  medium: BookOpen,
  kaggle: Database,
}

const presenceIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  medium: BookOpen,
  kaggle: Database,
}

export default function Writing() {
  return (
    <section className="writing-section section-shell" id="writing">
      <div className="container">
        <SectionHeading title="Writing, Learning & Exploring AI" />

        <Reveal as="header" className="writing-subheading">
          <h3>Articles</h3>
        </Reveal>

        <div className="articles-grid">
          {articles.map((article, index) => {
            const Icon = articleIcons[article.id] || BookOpen

            return (
              <Reveal key={article.id} delay={(index % 2) * 70}>
                <a
                  className="article-card"
                  href={article.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="article-card__source" aria-hidden="true">
                    <Icon size={16} strokeWidth={1.8} />
                    {article.source}
                  </span>
                  <h4>{article.title}</h4>
                  <p>{article.excerpt}</p>
                  <span className="article-card__action">
                    Read article
                    <ExternalLink size={15} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal as="header" className="writing-subheading writing-subheading--profiles">
          <h3>Profiles</h3>
        </Reveal>

        <div className="writing-grid">
          {writingLinks.map((item, index) => {
            const Icon = writingIcons[item.id]

            return (
              <Reveal key={item.id} delay={index * 80}>
                <a
                  className="writing-card"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="writing-card__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span className="writing-card__platform">{item.platform}</span>
                  <span className="writing-card__description">{item.description}</span>
                  <span className="writing-card__action">
                    Visit profile
                    <ExternalLink size={15} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="presence-panel" delay={120}>
          <h3>Developer presence</h3>
          <div className="presence-grid">
            {socialLinks.map((link) => {
              const Icon = presenceIcons[link.id]

              return (
                <a key={link.id} href={link.href} target="_blank" rel="noreferrer noopener">
                  <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                  <span>
                    <strong>{link.label}</strong>
                    <small>{link.handle}</small>
                  </span>
                </a>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
