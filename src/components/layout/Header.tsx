import { GitFork, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { profile, sections, type SectionId } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'

function NavigationLinks({ active, onNavigate }: { active: SectionId; onNavigate?: () => void }) {
  return (
    <ul>
      {sections.map(({ id, label }) => (
        <li key={id}>
          <a href={`#${id}`} aria-current={id === active ? 'location' : undefined} onClick={onNavigate}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 70rem)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  function handleEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'Escape' || !open) return
    event.preventDefault()
    setOpen(false)
    toggle.current?.focus()
  }

  return (
    <header className="site-header" onKeyDown={handleEscape}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="container header-content">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">KA</span>
          <span>{profile.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          <NavigationLinks active={active} />
        </nav>
        <a className="header-github" href={profile.github} aria-label="GitHub profile">
          <GitFork size={17} aria-hidden="true" /> <span>GitHub</span>
        </a>
        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          ref={toggle}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Primary" data-open={open} inert={!open}>
        <div className="mobile-nav-content">
          <NavigationLinks active={active} onNavigate={() => setOpen(false)} />
        </div>
      </nav>
    </header>
  )
}
