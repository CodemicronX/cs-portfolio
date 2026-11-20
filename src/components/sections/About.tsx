import { BookOpen, Globe2 } from 'lucide-react'
import { journey, languages, profileFacts, sjtuAdmissions } from '../../data/profile'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about" label="About" title="From Bishkek, with curiosity.">
      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">I’m a high school student in Bishkek, Kyrgyzstan, interested in computer science, engineering, and what it takes to turn an idea into useful software.</p>
          <p>Academic competitions have pushed me to approach unfamiliar problems from different angles. I study mathematics and algorithms alongside independent programming, and I’m interested in how entrepreneurship can help good technical ideas reach the people who need them.</p>
          <p>Leading a four-person team at NASA Space Apps gave me a chance to apply that curiosity to a shared project. I hope to study Computer Science at Shanghai Jiao Tong University in fall 2028.</p>
        </div>
        <dl className="profile-facts panel">
          {profileFacts.map(({ label, value, href, icon: Icon }) => (
            <div key={label}>
              <dt><Icon size={16} aria-hidden="true" /> {label}</dt>
              <dd>{href ? <a className="text-link" href={href}>{value}</a> : value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="journey-grid">
        <article className="panel journey-panel">
          <h3><BookOpen size={20} aria-hidden="true" /> Academic journey</h3>
          <ol className="timeline">
            {journey.map(({ period, title, detail, planned }) => (
              <li key={period}>
                <div className="timeline-period">{period}{planned && <small>Goal</small>}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>
        <div className="about-side">
          <article className="panel languages-panel">
            <h3><Globe2 size={20} aria-hidden="true" /> Languages</h3>
            <dl>
              {languages.map(({ name, level }) => (
                <div key={name}><dt>{name}</dt><dd>{level}</dd></div>
              ))}
            </dl>
            <p className="language-goal">IELTS target <strong>7.0+</strong></p>
          </article>
          <article className="admissions-note">
            <h3>SJTU admissions</h3>
            <p>SJTU lists Computer Science and Technology in its English-taught Engineering Cluster for 2027. The published requirements include CSCA Mathematics and proof of English proficiency. The 2028 program and requirements are pending confirmation.</p>
            <a className="text-link" href={sjtuAdmissions.announcement}>Official 2027 program and requirements</a>
          </article>
        </div>
      </div>
    </Section>
  )
}
