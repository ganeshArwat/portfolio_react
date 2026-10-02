import { Element } from 'react-scroll'
import { education, experience, formatPeriod } from '../data/experience'

function ExperienceSection() {

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
              <Card
                key={index}
                year={formatPeriod(item.start, item.end)}
                title={item.title}
                company={item.company}
                points={item.points}
              />
            ))}
          </div>
        </div>
      </div>
    </Element>
  )
}

const Card = ({ year, title, desc, points, company, organization }) => (
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
    {desc && <p className='text-sm text-gray-600'>{desc}</p>}
    {points?.length > 0 && (
      <ul className='mt-2 list-disc space-y-1 pl-4 text-sm text-gray-600'>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    )}
  </div>
)

export default ExperienceSection
