export interface Certificate {
  id: string
  title: string
  issuer: string
  category: string
  award?: string
  year?: number
  description: string
  image?: string
  verificationUrl?: string
}

// The order here determines the gallery order. See CERTIFICATES_GUIDE.md.
export const certificates: readonly Certificate[] = [
  {
    id: 'owlypia-local-gold',
    title: 'Owlypia Local Round',
    issuer: 'Owlypia',
    category: 'Academic competition',
    award: 'Gold Medal',
    description: 'Gold medal from the local round in Bishkek.',
  },
  {
    id: 'owlypia-global-bronze-1',
    title: 'Owlypia Global Round',
    issuer: 'Owlypia',
    category: 'Academic competition',
    award: 'Bronze Medal · 1 of 2',
    description: 'First bronze medal from the global round in London.',
  },
  {
    id: 'owlypia-global-bronze-2',
    title: 'Owlypia Global Round',
    issuer: 'Owlypia',
    category: 'Academic competition',
    award: 'Bronze Medal · 2 of 2',
    description: 'Second bronze medal from the global round in London.',
  },
  {
    id: 'amo',
    title: 'American Mathematics Olympiad',
    issuer: 'American Mathematics Olympiad',
    category: 'Mathematics',
    award: 'Medalist',
    description: 'Medalist. Exact medal classification pending confirmation.',
  },
  {
    id: 'sasmo',
    title: 'Singapore and Asian Schools Math Olympiad',
    issuer: 'Singapore and Asian Schools Math Olympiad',
    category: 'Mathematics',
    award: 'Medalist',
    description: 'Medalist. Exact medal classification pending confirmation.',
  },
  {
    id: 'auca-b2',
    title: 'AUCA English Course',
    issuer: 'American University of Central Asia',
    category: 'Language',
    award: 'B2 Certificate',
    description: 'Completed 96 academic hours of English coursework.',
  },
  {
    id: 'space-apps-local-award',
    title: 'NASA Space Apps Bishkek',
    issuer: 'NASA International Space Apps Challenge · Bishkek',
    category: 'Technology',
    award: 'Global Connection Local Award',
    year: 2026,
    description: 'Local award received by the four-person Avantgarde team.',
  },
  {
    id: 'space-apps-second',
    title: 'NASA Space Apps Bishkek',
    issuer: 'NASA International Space Apps Challenge · Bishkek',
    category: 'Technology',
    award: '2nd Place Overall',
    year: 2026,
    description: 'Second place overall at the Bishkek local event.',
  },
]
