import { skills } from '../../data/skills'
import { Section } from '../ui/Section'

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="My technical toolkit.">
      <div className="skill-grid">
        {skills.map(({ title, skills, icon: Icon }) => (
          <article className="panel skill-card" key={title}>
            <h3><Icon size={22} strokeWidth={1.65} aria-hidden="true" /> {title}</h3>
            <dl>
              {skills.map(({ name, level }) => (
                <div key={name}><dt>{name}</dt><dd>{level}</dd></div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </Section>
  )
}
