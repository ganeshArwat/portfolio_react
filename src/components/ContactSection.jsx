import { Element } from 'react-scroll'
function ContactSection() {
  return (
    <Element name='contact_section' className=''>
      <div className='flex flex-col items-center justify-center bg-gradient-to-r from-[#8630ca] to-[#732354] text-center text-white md:flex-row md:rounded-t-[143px]'>
        <div className='md:py-15 w-full px-4 py-14 text-4xl font-semibold md:w-[45%]'>
          <h3 className='flex flex-col flex-wrap items-center justify-end gap-4 sm:justify-start md:flex-row'>
            Contact me today -
            <span className='flex gap-4'>
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
            </span>
          </h3>
        </div>
        <div className='md: flex items-center justify-center px-4 text-cnter md:text-left text-[35px]'>
          <h2 className='md:py-15 md:pt-15 px-4 py-14 '>
            Let's Connect and <br /> Create something Amazing!
          </h2>
        </div>
      </div>
    </Element>
  )
}

export default ContactSection
