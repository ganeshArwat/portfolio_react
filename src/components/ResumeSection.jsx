import { Element } from 'react-scroll'

function ResumeSection() {
  return (
    <Element
      name='resume_section'
      className='flex flex-col justify-center gap-5 py-20'
    >
      <h2 className='text-center text-4xl font-bold text-dark'>
        Download My Resume
      </h2>
      <p className='text-center text-[17px] font-medium text-gray-800'>
        Stay updated with latest Projects and Skills
      </p>
      <p className='text-center'>
        <a
          href='/Ganesh_Arwat_Resume.pdf'
          download
          className='inline-block self-start bg-dark px-5 py-2 text-center text-xl text-white no-underline'
        >
          Download
        </a>
      </p>
    </Element>
  )
}

export default ResumeSection
