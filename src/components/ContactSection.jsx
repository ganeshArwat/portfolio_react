function ContactSection() {
  return (
    <section id='contact_section' className='h-[250px]'>
      <div className='flex h-full items-center justify-center rounded-t-[143px] bg-gradient-to-r from-[#8630ca] to-[#732354] text-center text-white'>
        <div className='w-[45%] pl-[50px] text-3xl font-semibold'>
          <h3 className='flex flex-wrap items-center justify-end gap-4 sm:justify-start'>
            Contact me today -
            <a
              href='mailto:ganesharwat123@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white no-underline'
            >
              <i className='fa-solid fa-envelope'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/ganesh-arwat/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white no-underline'
            >
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </h3>
        </div>
        <div className='text-left text-[35px]'>
          <h2>
            Let's Connect and <br /> Create something Amazing!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
