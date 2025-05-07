import { useState } from 'react'
import { Element } from 'react-scroll'

// https://devicon.dev/
const skillUrlMap = {
  Css: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  Html: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
}

const skillCategories = {
  Frontend: [
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React JS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
  ],
  Backend: [
    {
      name: 'Php CodeIgniter',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg',
    },
    {
      name: 'Node JS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express JS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'SQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    },
    {
      name: 'Supabase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
    },
  ],
  Tools: [
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    },
    {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    },
    {
      name: 'Netlify',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    },
  ],
  OS: [
    {
      name: 'Linux',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    },
    {
      name: 'Windows',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg',
    },
  ],
}

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('Frontend')
  return (
    <Element
      name='skills_section'
      className='relative bg-[#0f0f0f] px-4 py-12 text-white md:px-16'
    >
      <div className='mx-auto flex max-w-6xl flex-col md:flex-row'>
        {/* Vertical Nav */}
        <div className='mb-10 flex flex-col items-center justify-center md:mb-0 md:mr-8'>
          {/* Rotated "Skills" label for md+ screens, horizontal on small */}
          <div className='relative mb-6 h-10 md:h-32'>
            <span className='text-xl font-semibold tracking-widest text-white md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rotate-[-90deg]'>
              <span className='border-l-4 border-yellow-400 pl-3'>Skills</span>
            </span>
          </div>

          {/* Category Buttons */}
          <div className='flex flex-wrap justify-center gap-2 md:flex-col md:gap-0 md:space-y-2'>
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded px-3 py-1 text-sm tracking-wide transition-all duration-200 hover:text-yellow-400 ${
                  activeCategory === category
                    ? 'bg-yellow-400 font-semibold text-black'
                    : 'text-gray-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className='flex-1'>
          <h2 className='mb-4 text-center text-3xl font-bold text-yellow-400'>
            What I do
          </h2>
          <p className='mx-auto mb-10 max-w-2xl text-center text-sm text-gray-300 md:text-base'>
            Technologies and tools I've worked with.
          </p>

          <div className='flex justify-center'>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
              {skillCategories[activeCategory].map(({ name, icon }) => (
                <div
                  key={name}
                  className='flex flex-col items-center rounded-lg bg-[#1a1a1a] p-4 shadow-md transition-transform hover:scale-105'
                >
                  <img
                    src={icon}
                    alt={name}
                    className='mb-2 h-12 w-12 object-contain'
                  />
                  <p className='text-sm font-semibold'>{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

function SkillCard({ url, heading }) {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg bg-neutral-800 p-4 text-center text-white shadow-xl'>
      <img src={url} alt='CSS' className='h-20' />
      <p>{heading}</p>
    </div>
  )
}
export default SkillsSection
