import Reveal from './Reveal'

export default function SectionHeading({ title, description }) {
  return (
    <Reveal as="header" className="section-heading">
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </Reveal>
  )
}
