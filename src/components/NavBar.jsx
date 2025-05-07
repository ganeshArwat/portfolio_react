import { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react' // Optional: lucide-react for icons

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { href: 'skills_section', label: 'Skills' },
    { href: 'Certification_section', label: 'Certifications' },
    { href: 'projects_section', label: 'Projects' },
    { href: 'experience_section', label: 'Experience' },
    { href: 'resume_section', label: 'Resume' },
    { href: 'contact_section', label: 'Contact' },
  ]
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

      {/* Desktop Nav */}
      <nav className='hidden gap-3 md:flex'>
        {navLinks.map((link) => (
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

      {/* Mobile Menu Button */}
      <button
        className='text-white focus:outline-none md:hidden'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className='absolute left-0 right-0 top-[70px] z-40 flex flex-col items-center gap-3 bg-black py-4 shadow-md md:hidden'>
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.href}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
              className='w-full rounded-xl px-5 py-3 text-center text-[16px] font-medium text-white transition duration-300 hover:bg-white hover:text-[#732354]'
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default NavBar
