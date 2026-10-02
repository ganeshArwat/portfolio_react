const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const education = [
  {
    year: '2019 - 2022',
    title: 'University of Mumbai',
    organization: 'B.Sc (Information Technology)',
    desc: 'CGPA: 9.45 | Secured First Rank in program',
  },
  {
    year: '2024 - 2025',
    title: 'Specialized in Software Development & Problem Solving Program',
    organization: 'Scaler',
    desc: 'Top 1% Learner at Scaler - A Milestone in My Upskilling Journey',
  },
]

// Public roles only. Velox (Aug 2025 – Nov 2025) is intentionally omitted.
// `end` is the last worked month. `null` means the role is still active.
export const experience = [
  {
    title: 'PHP CodeIgniter Developer',
    company: 'ITD Services Pvt. Ltd.',
    start: '2022-05',
    end: '2024-07',
    points: [
      'Built and maintained core features of the company SaaS platform.',
      'Designed a PDF labeling system used across the product.',
      'Worked with cross-functional teams on business logic, performance, and code quality.',
    ],
  },
  {
    title: 'PHP CodeIgniter Developer',
    company: 'ITD Services Pvt. Ltd.',
    start: '2025-11',
    end: null,
    points: [
      'Rejoined to continue development on the SaaS platform, including AI integration.',
      'Mentor junior developers and new joiners.',
      'Take part in code reviews, releases, and performance work.',
    ],
  },
]

function parseYearMonth(value) {
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

export function formatPeriod(start, end) {
  const from = parseYearMonth(start)
  const startLabel = `${MONTHS[from.month - 1]} ${from.year}`
  if (!end) return `${startLabel} – Present`
  const to = parseYearMonth(end)
  return `${startLabel} – ${MONTHS[to.month - 1]} ${to.year}`
}

function monthsInRange(start, end, now) {
  const from = parseYearMonth(start)

  if (end) {
    const to = parseYearMonth(end)
    return (to.year - from.year) * 12 + (to.month - from.month) + 1
  }

  const toYear = now.getFullYear()
  const toMonth = now.getMonth() + 1
  return (toYear - from.year) * 12 + (toMonth - from.month)
}

export function getExperienceMonths(now = new Date()) {
  return experience.reduce(
    (total, role) => total + Math.max(0, monthsInRange(role.start, role.end, now)),
    0,
  )
}

export function getExperienceSummary(now = new Date()) {
  const totalMonths = getExperienceMonths(now)
  const years = Math.floor(totalMonths / 12)
  const extraMonths = totalMonths % 12

  if (years < 1) {
    return {
      totalMonths,
      years,
      extraMonths,
      badge: `${totalMonths}`,
      phrase: totalMonths === 1 ? '1 month' : `${totalMonths} months`,
    }
  }

  if (extraMonths > 0) {
    return {
      totalMonths,
      years,
      extraMonths,
      badge: `${years}+`,
      phrase: `${years}+ years`,
    }
  }

  return {
    totalMonths,
    years,
    extraMonths,
    badge: `${years}`,
    phrase: years === 1 ? '1 year' : `${years} years`,
  }
}
