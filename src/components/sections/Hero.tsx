import { ChevronDown, GitFork, MapPin } from 'lucide-react'
import { highlights, profile } from '../../data/profile'
import { publicAsset } from '../../lib/assets'

export function Hero() {
  return (
    <section className="hero container" id="home" tabIndex={-1} aria-labelledby="home-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Portfolio <span>/</span> Computer Science</p>
          <h1 id="home-title">{profile.name}<span>.</span></h1>
          <p className="hero-tagline">Building. Learning. Leading.</p>
          <p className="hero-summary">{profile.summary}</p>
          <p className="hero-status">Aspiring Computer Science Undergraduate <span className="hero-status-date"><span>·</span> Fall 2028</span></p>
          <div className="actions hero-actions">
            <a href="#projects" className="button button-primary">Explore My Work</a>
            <a href="#achievements" className="button button-outline">View Achievements</a>
            <a href={profile.github} className="button button-quiet"><GitFork size={18} aria-hidden="true" /> GitHub</a>
          </div>
        </div>
        <figure className="hero-art">
          <div className="art-grid" aria-hidden="true" />
          <picture>
            <source media="(max-width: 42rem)" srcSet={publicAsset('images/orbital-640.webp')} />
            <img
              src={publicAsset('images/orbital.webp')}
              alt=""
              width="1080"
              height="1080"
              fetchPriority="high"
            />
          </picture>
          <span className="art-corner art-corner-top" aria-hidden="true" />
          <span className="art-corner art-corner-bottom" aria-hidden="true" />
          <figcaption><MapPin size={15} aria-hidden="true" /> {profile.location}</figcaption>
        </figure>
      </div>
      <ul className="highlights" aria-label="Career highlights">
        {highlights.map(({ label, detail, icon: Icon }) => (
          <li key={label}>
            <span className="highlight-icon"><Icon size={22} strokeWidth={1.65} aria-hidden="true" /></span>
            <div><strong>{label}</strong><span>{detail}</span></div>
          </li>
        ))}
      </ul>
      <a href="#about" className="hero-scroll"><ChevronDown size={18} aria-hidden="true" /> About me</a>
    </section>
  )
}
