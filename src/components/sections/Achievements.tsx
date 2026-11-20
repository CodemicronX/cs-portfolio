import { useState } from 'react'
import { achievements, filters, type AchievementFilter } from '../../data/achievements'
import { publicAsset } from '../../lib/assets'
import { Section } from '../ui/Section'

export function Achievements() {
  const [filter, setFilter] = useState<AchievementFilter>('All')
  const visible = filter === 'All' ? achievements : achievements.filter((achievement) => achievement.filters.includes(filter))

  return (
    <Section
      id="achievements"
      label="Achievements"
      title="Competition & coursework."
      intro="Results from academic competitions, a technology challenge, and English study. Awards and participation figures are self-reported."
    >
      <div className="filter-row" role="group" aria-label="Filter achievements">
        {filters.map((option) => (
          <button key={option} type="button" aria-pressed={filter === option} onClick={() => setFilter(option)}>
            {option}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">{visible.length} {visible.length === 1 ? 'achievement' : 'achievements'} shown</p>
      <ul className="achievement-grid">
        {visible.map(({ id, title, issuer, category, year, location, award, description, tone, icon: Icon, image, verificationUrl }) => (
          <li key={id} className="panel achievement-card" data-tone={tone}>
            <div className="achievement-top">
              <span className="achievement-icon">
                {image ? <img src={publicAsset(image)} alt="" width="48" height="48" loading="lazy" /> : <Icon size={22} strokeWidth={1.65} aria-hidden="true" />}
              </span>
              <span className="card-category">{category}{year && ` · ${year}`}</span>
            </div>
            <p className="award">{award}</p>
            <h3>{title}</h3>
            <p className="issuer">{issuer}</p>
            <p>{description}</p>
            {location && <p className="card-location">{location}</p>}
            {verificationUrl && <a className="text-link" href={verificationUrl}>Verify achievement</a>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
