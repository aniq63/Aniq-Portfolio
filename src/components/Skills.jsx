import { BrainCircuit, Cloud, Code2, Database, Layers } from 'lucide-react'
import { skillGroups } from '../data/skills'
import Reveal from './Reveal'
import TechLogo from './TechLogo'
import SectionHeading from './SectionHeading'

const icons = {
  brain: BrainCircuit,
  cloud: Cloud,
  code: Code2,
  database: Database,
  layers: Layers,
}

export default function Skills() {
  return (
    <section className="skills-section section-shell" id="skills">
      <div className="container">
        <SectionHeading
          title="Technical skills"
          description="The tools I use across data, models, APIs, and deployment."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon]

            return (
              <Reveal key={group.id} className="skill-group" delay={index * 45}>
                <div className="skill-group__heading">
                  <span className="skill-group__icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <ul className="skill-chips">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <TechLogo name={skill} />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
