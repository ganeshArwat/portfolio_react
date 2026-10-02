import {
  Briefcase,
  Code2,
  GraduationCap,
  Lightbulb,
  Rocket,
  TrendingUp,
  Users,
} from 'lucide-react'
import { getExperienceSummary } from '../data/experience'

function AboutSection() {
  const summary = getExperienceSummary()
  const yearsLabel =
    summary.years > 0 && summary.extraMonths > 0
      ? `${summary.years}.${summary.extraMonths}+`
      : `${summary.badge}`

  const highlights = [
    {
      icon: Briefcase,
      title: `${yearsLabel} Years`,
      subtitle: 'Professional Experience',
      iconClass: 'bg-blue-100 text-blue-600',
      cardClass: 'bg-[#eef5ff]',
      titleClass: 'text-blue-700',
    },
    {
      icon: Code2,
      title: '10+',
      subtitle: 'Projects Built',
      iconClass: 'bg-violet-100 text-violet-600',
      cardClass: 'bg-[#f3f0ff]',
      titleClass: 'text-violet-600',
    },
    {
      icon: GraduationCap,
      title: 'BSc IT',
      subtitle: 'University of Mumbai (First Rank in College)',
      iconClass: 'bg-amber-100 text-amber-600',
      cardClass: 'bg-[#fff8e8]',
      titleClass: 'text-slate-900',
    },
    {
      icon: TrendingUp,
      title: 'Top 1%',
      subtitle: 'Learner at Scaler Academy',
      iconClass: 'bg-emerald-100 text-emerald-600',
      cardClass: 'bg-[#eefbf3]',
      titleClass: 'text-emerald-600',
    },
  ]

  const traits = [
    {
      icon: Rocket,
      title: 'Problem Solver',
      subtitle: 'Analytical & Logical',
      iconClass: 'bg-violet-100 text-violet-600',
    },
    {
      icon: Lightbulb,
      title: 'Quick Learner',
      subtitle: 'Always exploring',
      iconClass: 'bg-sky-100 text-sky-600',
    },
    {
      icon: Users,
      title: 'Team Player',
      subtitle: 'Collaborative mindset',
      iconClass: 'bg-emerald-100 text-emerald-600',
    },
  ]

  return (
    <section className='relative overflow-hidden bg-[#f7f9fc] px-6 py-16 text-slate-800 md:px-16 md:py-24'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-[#e7f0ff]'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#eef4ff]'
      />

      <div className='relative mx-auto max-w-6xl'>
        <div className='grid items-start gap-10 lg:grid-cols-2 lg:gap-16'>
          <div>
            <div className='flex items-center gap-3'>
              <span className='h-px w-8 bg-[#2f6bff]' />
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-slate-500'>
                About me
              </p>
            </div>
            <h2 className='mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#12143a] sm:text-5xl'>
              Building ideas
              <span className='mt-1 block text-[#2f6bff]'>into real products</span>
            </h2>
            <p className='mt-5 max-w-md text-base leading-relaxed text-slate-500'>
              A Full Stack Developer who enjoys creating clean, scalable and
              user-focused web applications with modern technologies.
            </p>
          </div>

          <p className='text-[15px] leading-relaxed text-slate-400 lg:pt-8 lg:text-base'>
            With over {summary.years} years of industry experience, I have honed
            my skills in web development and software engineering. My dedication
            to delivering high-quality solutions consistently exceeds client
            expectations. I am passionate about crafting innovative, efficient
            and reliable software that drives success.
          </p>
        </div>

        <ul className='mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.title}
                className={`flex items-center gap-3 rounded-2xl px-4 py-4 ${item.cardClass}`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.iconClass}`}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span>
                  <span className={`block text-sm font-bold ${item.titleClass}`}>
                    {item.title}
                  </span>
                  <span className='block text-xs leading-snug text-slate-500'>
                    {item.subtitle}
                  </span>
                </span>
              </li>
            )
          })}
        </ul>

        <ul className='mt-4 grid gap-4 md:grid-cols-3'>
          {traits.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.title}
                className='flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3.5 shadow-sm'
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.iconClass}`}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span>
                  <span className='block text-sm font-semibold text-slate-900'>
                    {item.title}
                  </span>
                  <span className='block text-xs text-slate-500'>
                    {item.subtitle}
                  </span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
