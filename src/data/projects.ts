import { AudioLines, CodeXml, Moon, Radio, Route } from 'lucide-react'
import { profile } from './profile'

export const spaceApps = {
  title: 'Avantgarde',
  subtitle: 'Abandoned But Not Forgotten',
  event: 'NASA International Space Apps Challenge 2026',
  role: 'Team Lead & Developer',
  team: '4 members',
  live: 'https://codemicronx.github.io/nasa-Avantgarde/',
  repository: 'https://github.com/CodemicronX/nasa-Avantgarde',
  screenshot: undefined as string | undefined,
  awards: ['2nd Place Overall · Bishkek', 'Global Connection Local Award', 'Global Nominee · Advanced to Global Judging'],
  contributions: [
    'Coordinated the four-person team, set priorities, and helped shape the product and its presentation.',
    'Contributed to the frontend and interactive experience, including the Pip assistant.',
    'Helped explore LLM API integration, contextual answers, fallback behavior, navigation, and testing.',
  ],
  features: [
    {
      title: 'Moon Mission Control',
      detail: 'Explore the Moon in 3D, follow a mission timeline, and discover landing sites through interactive markers.',
      icon: Moon,
    },
    {
      title: 'Survival Simulator',
      detail: 'Work through historical mission challenges involving InSight, Spirit, and Surveyor 3.',
      icon: Radio,
    },
    {
      title: 'Pip',
      detail: 'Get contextual AI guidance and help finding your way through the experience.',
      icon: Route,
    },
  ],
}

interface Project {
  title: string
  description: string
  icon: typeof CodeXml
  status: string
  technologies: readonly string[]
  links?: readonly { label: string; href: string }[]
}

export const projects: readonly Project[] = [
  {
    title: 'Music Streaming PWA',
    description: 'An in-development progressive web app for exploring how to build a music streaming experience on the web.',
    icon: AudioLines,
    status: 'In Development',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Python Learning Projects',
    description: 'Ongoing hands-on practice in programming logic, object-oriented design, and small automation tasks.',
    icon: CodeXml,
    status: 'Ongoing',
    technologies: ['Python', 'OOP', 'Automation'],
    links: [{ label: 'GitHub profile', href: profile.github }],
  },
]
