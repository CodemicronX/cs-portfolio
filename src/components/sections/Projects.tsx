import { CircleCheck, GitFork, Globe2, Image, Lock } from 'lucide-react'
import { projects, spaceApps } from '../../data/projects'
import { publicAsset } from '../../lib/assets'
import { Section } from '../ui/Section'

export function SpaceApps() {
  return (
    <Section id="space-apps" label="NASA Space Apps" title="Avantgarde." intro={spaceApps.event}>
      <article className="case-study panel">
        <div className="case-main">
          <div className="case-copy">
            <h3>{spaceApps.subtitle}</h3>
            <p>An interactive experience about space missions and their legacies, built by a four-person team at the Bishkek local event.</p>
            <dl className="case-facts">
              <div><dt>Role</dt><dd>{spaceApps.role}</dd></div>
              <div><dt>Team</dt><dd>{spaceApps.team}</dd></div>
            </dl>
            <ul className="case-awards">
              {spaceApps.awards.map((award) => <li key={award}><CircleCheck size={17} aria-hidden="true" />{award}</li>)}
            </ul>
            <div className="actions">
              <a className="button button-primary" href={spaceApps.live}><Globe2 size={17} aria-hidden="true" /> Live site</a>
              <a className="button button-outline" href={spaceApps.repository}><GitFork size={17} aria-hidden="true" /> Source code</a>
            </div>
          </div>
          <figure className="project-preview">
            <figcaption className="browser-bar">
              <span className="browser-dots" aria-hidden="true"><i /><i /><i /></span>
              <span className="browser-address"><Lock size={12} aria-hidden="true" /> {spaceApps.live.slice('https://'.length)}</span>
            </figcaption>
            {spaceApps.screenshot ? (
              <img
                className="project-screenshot"
                src={publicAsset(spaceApps.screenshot)}
                alt="Avantgarde project interface"
                loading="lazy"
                width="1152"
                height="720"
              />
            ) : (
              <div className="project-placeholder">
                <div className="preview-graphic" aria-hidden="true" />
                <span><Image size={18} aria-hidden="true" /> Project screenshot coming soon</span>
              </div>
            )}
          </figure>
        </div>
        <div className="case-contributions">
          <h3>My contributions</h3>
          <ul>{spaceApps.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
        </div>
        <ul className="case-features">
          {spaceApps.features.map(({ title, detail, icon: Icon }) => (
            <li key={title}>
              <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      </article>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" label="Projects" title="What I’m working on." intro="Independent programming projects alongside school and competition preparation.">
      <ul className="project-grid">
        {projects.map(({ title, description, status, technologies, links, icon: Icon }) => (
          <li key={title} className="panel project-card">
            <div className="project-top">
              <span className="tile-icon"><Icon size={23} strokeWidth={1.65} aria-hidden="true" /></span>
              <span className="status-label">{status}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="tags" aria-label="Technologies">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            {links?.map(({ label, href }) => <a className="text-link" key={href} href={href}>{label}</a>)}
          </li>
        ))}
      </ul>
    </Section>
  )
}
