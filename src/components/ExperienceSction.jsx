import { Element } from 'react-scroll'
function ExperienceSection() {
  const education = [
    {
      year: '2019 - 2022',
      title: 'University of Mumbai',
      organization: 'B.Sc (Information Technology)',
      desc: 'CGPA: 9.45 | Secured First Rank in program',
    },
    {
      year: '2024 - 2025',
      title: 'Specialized in Software Development & Problem Solving Program',
      organization: 'Scaler',
      desc: 'Top 1% Learner at Scaler - A Milestone in My Upskilling Journey',
    },
  ]

  const experience = [
    {
      year: '2022 - 2024',
      title: 'Software Developer',
      company: 'ITD Services Pvt. Ltd.',
      desc: 'Developed and maintained core components of the company\'s SaaS product, contributing to improved functionality and user experience.',
    },
  ]

  return (
    <Element
      name='experience_section'
      className='bg-gray-100 px-6 py-16 text-gray-800 md:px-20'
    >
      <h2 className='mb-12 text-center text-3xl font-bold text-primary-700'>
        Education & Experience
      </h2>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        {/* Education */}
        <div>
          <h3 className='mb-6 text-xl font-semibold text-primary-600'>
            Education
          </h3>
          <div className='space-y-6'>
            {education.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className='mb-6 text-xl font-semibold text-primary-600'>
            Experience
          </h3>
          <div className='space-y-6'>
            {experience.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Element>
  )
}

const Card = ({ year, title, desc, company, organization }) => (
  <div className='group relative rounded-md border-l-4 border-primary-500 bg-white px-8 py-6 shadow-md transition-all duration-300 hover:shadow-xl'>
    <div className='absolute left-[-0.4rem] top-6 h-3 w-3 rounded-full border-2 border-white bg-primary-500 transition group-hover:scale-125' />
    <p className='text-sm text-gray-500'>{year}</p>
    <h4 className='text-lg font-semibold text-primary-700'>{title}</h4>
    {organization && (
      <p className='mb-2 text-sm italic text-primary-500'>{organization}</p>
    )}
    {company && (
      <p className='mb-2 text-sm italic text-primary-500'>{company}</p>
    )}
    <p className='text-sm text-gray-600'>{desc}</p>
  </div>
)

export default ExperienceSection
