import { Award, GraduationCap, Medal, Orbit, Sigma, type LucideIcon } from 'lucide-react'

export const filters = ['All', 'International', 'Academic', 'Technology', 'Certificates'] as const
export type AchievementFilter = (typeof filters)[number]

interface Achievement {
  id: string
  title: string
  issuer: string
  category: Exclude<AchievementFilter, 'All'>
  filters: readonly Exclude<AchievementFilter, 'All'>[]
  year?: number
  location?: string
  award: string
  description: string
  icon: LucideIcon
  tone: 'blue' | 'gold' | 'bronze' | 'lavender' | 'teal'
  image?: string
  verificationUrl?: string
}

export const achievements: readonly Achievement[] = [
  {
    id: 'space-apps',
    title: 'NASA International Space Apps Challenge',
    issuer: 'NASA Space Apps · Bishkek local event',
    category: 'Technology',
    filters: ['Technology', 'International', 'Certificates'],
    year: 2026,
    location: 'Bishkek, Kyrgyzstan',
    award: '2nd Place Overall · Local Award',
    description: 'Earned the Global Connection Local Award and advanced to Global Judging as a Global Nominee. Led a four-person team at an event with more than 100 local teams reported.',
    icon: Orbit,
    tone: 'blue',
  },
  {
    id: 'owlypia-local',
    title: 'Owlypia Local Round',
    issuer: 'Owlypia',
    category: 'Academic',
    filters: ['Academic', 'Certificates'],
    location: 'Bishkek, Kyrgyzstan',
    award: 'Gold Medal',
    description: 'Earned gold in the Bishkek round, with approximately 500 participants reported.',
    icon: Medal,
    tone: 'gold',
  },
  {
    id: 'owlypia-global',
    title: 'Owlypia Global Round',
    issuer: 'Owlypia',
    category: 'International',
    filters: ['International', 'Academic', 'Certificates'],
    location: 'London, United Kingdom',
    award: 'Two Bronze Medals',
    description: 'Earned two bronze medals in the global round, with more than 1,000 participants reported.',
    icon: Medal,
    tone: 'bronze',
  },
  {
    id: 'amo',
    title: 'American Mathematics Olympiad',
    issuer: 'American Mathematics Olympiad',
    category: 'Academic',
    filters: ['International', 'Academic', 'Certificates'],
    award: 'Medalist',
    description: 'Recognized as a medalist in the AMO. Exact medal classification pending confirmation.',
    icon: Sigma,
    tone: 'lavender',
  },
  {
    id: 'sasmo',
    title: 'Singapore and Asian Schools Math Olympiad',
    issuer: 'Singapore and Asian Schools Math Olympiad',
    category: 'Academic',
    filters: ['International', 'Academic', 'Certificates'],
    award: 'Medalist',
    description: 'Recognized as a medalist in SASMO. Exact medal classification pending confirmation.',
    icon: Award,
    tone: 'teal',
  },
  {
    id: 'auca',
    title: 'AUCA English Course',
    issuer: 'American University of Central Asia',
    category: 'Certificates',
    filters: ['Certificates'],
    award: 'B2 Certificate',
    description: 'Completed 96 academic hours of English coursework and received a B2 certificate.',
    icon: GraduationCap,
    tone: 'blue',
  },
]
