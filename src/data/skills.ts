import { Braces, Layers3, Terminal, Workflow } from 'lucide-react'

type SkillLevel = 'Foundational Knowledge' | 'Project Experience' | 'Currently Learning'

interface SkillGroup {
  title: string
  icon: typeof Braces
  skills: readonly { name: string; level: SkillLevel }[]
}

export const skills: readonly SkillGroup[] = [
  {
    title: 'Programming',
    icon: Braces,
    skills: [
      { name: 'Python', level: 'Foundational Knowledge' },
      { name: 'JavaScript', level: 'Project Experience' },
      { name: 'HTML & CSS', level: 'Project Experience' },
      { name: 'TypeScript', level: 'Currently Learning' },
    ],
  },
  {
    title: 'Frontend',
    icon: Layers3,
    skills: [
      { name: 'React', level: 'Project Experience' },
      { name: 'Vite', level: 'Project Experience' },
      { name: 'Tailwind CSS', level: 'Project Experience' },
    ],
  },
  {
    title: 'Development tools',
    icon: Terminal,
    skills: [
      { name: 'Git & GitHub', level: 'Project Experience' },
      { name: 'GitHub Pages', level: 'Project Experience' },
      { name: 'VS Code', level: 'Project Experience' },
    ],
  },
  {
    title: 'Additional exposure',
    icon: Workflow,
    skills: [
      { name: 'Flask', level: 'Foundational Knowledge' },
      { name: 'SQLite', level: 'Foundational Knowledge' },
      { name: 'REST APIs', level: 'Foundational Knowledge' },
      { name: 'LLM integrations', level: 'Project Experience' },
    ],
  },
]
