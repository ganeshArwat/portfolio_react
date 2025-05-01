import { Link, Element } from 'react-scroll'

function NavBar() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between bg-black px-5 py-2'>
      {/* Logo */}
      <div className='cursor-pointer transition-transform duration-300 hover:scale-105'>
        <Link to='hero_section' smooth={true} duration={500} offset={-80}>
          <img
            className='h-[60px] w-auto object-contain md:h-[70px]'
            src='/images/logo.png'
            alt='Logo'
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className='nav-bar flex justify-between gap-3'>
        {[
          { href: 'skills_section', label: 'Skills' },
          { href: 'Certification_section', label: 'Certifications' },
          { href: 'projects_section', label: 'Projects' },
          { href: 'experience_section', label: 'Experience' },
          { href: 'resume_section', label: 'Resume' },
          { href: 'contact_section', label: 'Contact' },
        ].map((link) => (
          <Link
            to={link.href}
            key={link.href}
            smooth={true}
            duration={500}
            offset={-80}
            className='rounded-xl px-5 py-[7px] text-[15px] font-semibold text-white transition duration-300 hover:cursor-pointer hover:bg-white hover:text-[#732354]'
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default NavBar
