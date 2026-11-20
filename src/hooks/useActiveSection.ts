import { useEffect, useState } from 'react'
import { sections, type SectionId } from '../data/profile'

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const landmarks = sections.map(({ id }) => ({ id, element: document.getElementById(id) }))
    let frame = 0

    function update() {
      frame = 0
      const threshold = Math.min(window.innerHeight * 0.28, 150)
      const current = landmarks.filter(({ element }) => element && element.getBoundingClientRect().top <= threshold).at(-1)
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      setActive(atBottom ? 'contact' : current?.id ?? 'home')
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(document.body)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    // A deep link may be resolved by the browser before React adds its target.
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    const fragment = window.location.hash.slice(1)
    const entryTarget = landmarks.find(({ id }) => id === fragment)?.element
    if (navigation?.type !== 'back_forward') entryTarget?.scrollIntoView({ behavior: 'instant' })

    update()

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return active
}
