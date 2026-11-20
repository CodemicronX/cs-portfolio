import { m, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import type { SectionId } from '../../data/profile'

interface SectionProps {
  id: Exclude<SectionId, 'home' | 'contact'>
  label: string
  title: string
  intro?: string
  children: ReactNode
}

export function Section({ id, label, title, intro, children }: SectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section" id={id} tabIndex={-1} aria-labelledby={`${id}-title`}>
      <div className="container">
        <m.div
          className="section-heading"
          initial={reduceMotion ? false : { opacity: 0.78, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <p className="eyebrow">{label}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </m.div>
        {children}
      </div>
    </section>
  )
}
