import { Element, Link } from 'react-scroll'
import { ArrowRight, Code2, Download, Github, Linkedin, Mail } from 'lucide-react'
import { getExperienceSummary } from '../data/experience'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/ganesh-arwat/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://github.com/ganeshArwat',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'mailto:ganesharwat123@gmail.com',
    label: 'Email',
    icon: Mail,
  },
]

function HeroSection() {
  const experience = getExperienceSummary()

  return (
    <Element
      name='hero_section'
      className='flex w-full flex-col bg-[radial-gradient(ellipse_60%_80%_at_78%_42%,#2c3d8f_0%,#16143c_36%,#0a081c_68%,#05030f_100%)] text-white md:h-[calc(100vh-86px)] md:flex-row md:items-stretch'
    >
      <div className='flex flex-col items-start justify-center px-6 py-10 text-left md:h-full md:w-[55%] md:px-14 md:py-0 lg:px-20'>
        <div className='flex max-w-xl flex-col items-start'>
          <span className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[13px] text-gray-200'>
            <span className='flex h-5 w-5 items-center justify-center rounded-md bg-violet-500/20 text-violet-300'>
              <Code2 size={12} strokeWidth={2.5} />
            </span>
            Software Developer
          </span>

          <p className="mt-5 font-[Inter,sans-serif] text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Hi, I'm
          </p>
          <h1 className="font-[Inter,sans-serif] text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Ganesh <span className='text-[#8b6cff]'>Arwat</span>
          </h1>

          <p className='mt-4 max-w-lg text-[15px] leading-relaxed text-gray-300 sm:text-base'>
            A passionate software developer who loves building innovative and
            user-friendly web applications. I focus on creating efficient,
            scalable and meaningful solutions that solve real-world problems.
          </p>

          <div className='mt-6 flex flex-wrap items-center gap-4'>
            <Link
              to='contact_section'
              smooth={true}
              duration={500}
              offset={-80}
              className='group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition duration-300 hover:from-violet-500 hover:to-purple-400 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-purple-700/50 motion-safe:active:translate-y-0'
            >
              Contact Me
              <ArrowRight
                size={16}
                className='transition duration-300 motion-safe:group-hover:translate-x-1'
              />
            </Link>
            <a
              href='/Ganesh_Arwat_Resume.pdf'
              download
              className='inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/30 hover:bg-white/10 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0'
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>

          <div className='mt-5 flex items-center gap-3'>
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition duration-300 hover:border-violet-400/40 hover:text-white motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg motion-safe:hover:shadow-violet-500/20 motion-safe:active:translate-y-0'
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className='relative flex h-[68vh] items-end justify-center md:h-full md:w-[45%] md:pl-8 md:pr-6 lg:pl-12 lg:pr-10'>
        <div className='relative h-full w-full max-w-[520px]'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute right-[6%] top-[8%] z-0 h-24 w-24 opacity-60 [background-image:radial-gradient(circle,rgba(255,255,255,0.7)_1px,transparent_1.2px)] [background-size:9px_9px]'
          />
          <svg
            viewBox='0 0 200 200'
            aria-hidden='true'
            className='pointer-events-none absolute left-[22%] top-[4%] z-0 h-[72%] w-[72%]'
          >
            <defs>
              <radialGradient id='heroGlow' cx='42%' cy='40%' r='62%'>
                <stop offset='0%' stopColor='#7a6cff' />
                <stop offset='48%' stopColor='#4d3ad8' />
                <stop offset='100%' stopColor='#24186e' stopOpacity='0.15' />
              </radialGradient>
            </defs>
            <circle cx='108' cy='96' r='78' fill='url(#heroGlow)' />
            <circle
              cx='118'
              cy='78'
              r='88'
              fill='none'
              stroke='rgba(186,170,255,0.45)'
              strokeWidth='1.2'
            />
          </svg>
          <img
            src='/images/ganesh_image_2.png'
            alt='Ganesh Arwat'
            className='relative z-10 h-full w-full object-contain object-bottom'
          />
          <div className='absolute bottom-4 right-0 z-20 rounded-2xl border border-white/15 bg-[#120c28]/80 px-4 py-3 text-center shadow-lg backdrop-blur-sm'>
            <p className='text-2xl font-bold leading-none text-white'>
              {experience.badge}
            </p>
            <p className='mt-1 text-[11px] leading-tight text-gray-300'>
              Years
              <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default HeroSection
