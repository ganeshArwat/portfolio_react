function NavBar() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between bg-black px-5 py-2'>
      {/* Logo */}
      <div className=''>
        <img className='h-[70px]' src='/images/logo.png' alt='Logo' />
      </div>

      {/* Navigation */}
      <nav className='nav-bar flex justify-between gap-3'>
        {[
          { href: '#skills_section', label: 'Skills' },
          { href: '#Certification_section', label: 'Certifications' },
          { href: '#projects_section', label: 'Projects' },
          { href: '#experience_section', label: 'Experience' },
          { href: '#resume_section', label: 'Resume' },
          { href: '#contact_section', label: 'Contact' },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className='rounded-xl px-5 py-[7px] text-[15px] font-semibold text-white transition duration-300 hover:bg-white hover:text-[#732354]'
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default NavBar
