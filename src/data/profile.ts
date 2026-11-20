import { BookOpen, Compass, GitFork, GraduationCap, MapPin, Users, Award, Globe2 } from 'lucide-react'

export const profile = {
  name: 'Kasymov Aidar',
  github: 'https://github.com/CodemicronX',
  handle: 'CodemicronX',
  location: 'Bishkek, Kyrgyzstan',
  target: 'Shanghai Jiao Tong University',
  enrollment: 'Fall 2028',
  summary:
    'Computer Science enthusiast from Kyrgyzstan, international academic competition medalist, and NASA Space Apps 2026 Global Nominee. Passionate about software engineering, problem-solving, and building meaningful technology.',
}

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'space-apps', label: 'NASA Space Apps' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof sections)[number]['id']

export const highlights = [
  { label: '2nd Place', detail: 'NASA Space Apps Bishkek 2026', icon: Award },
  { label: 'Global Nominee', detail: 'NASA Space Apps 2026', icon: Globe2 },
  { label: '4 Members', detail: 'Team led', icon: Users },
]

export const profileFacts = [
  { label: 'Location', value: profile.location, icon: MapPin },
  { label: 'Focus', value: 'Computer Science & Software Engineering', icon: Compass },
  { label: 'Target university', value: profile.target, icon: GraduationCap },
  { label: 'Enrollment goal', value: profile.enrollment, icon: BookOpen },
  { label: 'GitHub', value: '@CodemicronX', href: profile.github, icon: GitFork },
]

export const journey = [
  { period: 'Now', title: 'High school in Kyrgyzstan', detail: 'Independent programming and preparation in mathematics and algorithms.', planned: false },
  { period: '2026', title: 'Competitions & Space Apps', detail: 'Competed in academic events and led the Avantgarde team at NASA Space Apps Bishkek.', planned: false },
  { period: '2027', title: 'Focused preparation', detail: 'Deepen programming and mathematics skills and prepare for an official English proficiency exam.', planned: true },
  { period: '2028', title: 'Apply to SJTU', detail: 'Aim for fall enrollment in Computer Science, with English as the preferred teaching language.', planned: true },
]

export const languages = [
  { name: 'Kyrgyz', level: 'Native' },
  { name: 'Russian', level: 'Native' },
  { name: 'English', level: 'B2 · AUCA, 96 academic hours' },
  { name: 'Mandarin', level: 'Planned' },
]

export const sjtuAdmissions = {
  announcement: 'https://en.sjtu.edu.cn/study-sjtu/prospective/degree-programs/278',
}
