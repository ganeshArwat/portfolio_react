import { Element } from 'react-scroll'

function ResumeSection() {
  return (
    <Element
      name='resume_section'
      className='flex h-[320px] flex-col justify-center gap-5'
    >
      {/* <section
        id='resume_section'
        className='flex h-[320px] flex-col justify-center gap-5'
      > */}
      <h2 className='ml-[150px] text-4xl font-bold text-dark'>
        Download My Resume
      </h2>
      <p className='ml-[100px] text-[17px] font-medium text-gray-800'>
        Stay updated with latest Projects and Skills
      </p>
      <a
        href='/Ganesh_Arwat_Resume.pdf'
        download
        className='ml-[150px] inline-block self-start bg-dark px-5 py-2 text-xl text-white no-underline'
      >
        Download
      </a>
      {/* </section> */}
    </Element>
  )
}

export default ResumeSection
