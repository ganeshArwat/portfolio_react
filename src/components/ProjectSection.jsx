import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Element } from 'react-scroll'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function ProjectSection() {
  const projects = [
    {
      title: 'Abhanga Masale E-commerce Web App',
      description:
        'Abhanga Masale is a full-stack E-commerce web application built for a traditional spice brand. Developed using React, Tailwind CSS, Express, and MongoDB, it allows users to explore a wide range of spice products, add them to the cart, and place orders seamlessly. The platform also includes admin controls for managing products and orders.',
      image: '/projects/abhanga_4.png',
      stack: [
        'React',
        'TailwindCSS',
        'Express',
        'MongoDB',
        'Node.js',
      ],
      demo: 'https://drive.google.com/file/d/1tzEWkPTCkXTkdyaRZNn9SG8mBSvpdpBp/view',
    },
    {
      title: 'The Travel Empire',
      description:
        'Designed and developed a complete brand and web presence for The Travel Empire, a travel agency. The project included end-to-end delivery: logo design, responsive website development using React and Tailwind CSS, SEO optimization, deployment, and client handover. Focused on creating a user-friendly, visually appealing interface optimized for',
      image: '/projects/travel_empire.png',
      stack: [
        'React',
        'TailwindCSS',
        'Responsive Design',
        'Vercel',
      ],
      demo: 'https://thetravelempire.in/',
    },
    {
      title: 'CneMeet',
      description:
        'CneMeet is a One-to-One Real-Time Communication web application built with React, Socket.IO, and WebRTC (RTCPeerConnection). It enables users to make video/audio calls, chat in-call, and share their screen directly from the browser.',
      image: '/projects/cneMeet1.png',
      stack: [
        'React',
        'TailwindCSS',
        'Socket.IO',
        'WebRTC',
        'Node.js',
        'Express',
      ],
      github: 'https://github.com/ganeshArwat/CneMeet',
      demo: 'https://drive.google.com/file/d/1sFGzivC8afP_dOGmapk4-8iJyrkNlRVJ/view',
    },
    {
      title: 'CneDB - Movie Search & Watchlist App',
      description:
        "CneDB is a React-based movie search and watchlist app that integrates with the OMDb API to fetch movie details by name. Users can search for movies, view basic information, and add movies to a personal watchlist. The watchlist is stored in the browser's localStorage, allowing persistence even after page refreshes.",
      image: '/projects/cneDB1.png',
      stack: ['React', 'OMDb API', 'LocalStorage '],
      github: 'https://github.com/ganeshArwat/CneDB',
      demo: 'https://cne-db.vercel.app/',
    },
    {
      title: 'Cne Food',
      description: 'Cne Food is Promotional Website for a Food Delivery App',
      image: '/projects/cneFood1.png',
      stack: [
        'Html',
        'Css',
        'Javascript',
        'Responsive Design',
        'Netlify',
        'Figma',
      ],
      github: 'https://github.com/ganeshArwat/Cnefood',
      demo: 'https://cnefood.netlify.app',
    },
    {
      title: 'Blind Assistant',
      description:
        'Selected among the top 100 innovative projects in Mumbai at the Ciia Exhibit 2022, The Blind Assistant is an IoT-based solution designed to assist visually impaired individuals in navigating their surroundings safely and independently.',
      image: '/projects/BlindAssistant.png',
      stack: [
        'python',
        'Raspberry Pi',
        'Arduino',
        'Blynk',
        'Sensors',
        'Object Detection',
      ],
      github: '',
      demo: 'https://drive.google.com/file/d/1NTcEL3tTqp-5izQQNaRth6VAB6LwUkP-/view',
    },
  ]

  return (
    <Element
      name='projects_section'
      className='bg-dark-800 px-6 py-20 text-dark-50 lg:px-24'
    >
      <h2 className='mb-16 text-center text-4xl font-bold text-dark-50'>
        Projects I've Worked On
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className='max-w-full'
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center gap-8 lg:flex-row'>
              {/* Project Image */}
              <div className='w-full overflow-hidden rounded-lg shadow-lg lg:w-1/2'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
                />
              </div>

              {/* Project Details */}
              <div className='flex w-full flex-col gap-4 lg:w-1/2'>
                <p className='text-sm text-dark-300'>Featured Project</p>
                <h3 className='text-3xl font-bold text-dark-50'>
                  {project.title}
                </h3>

                <div className='rounded-md bg-dark-700 p-6 text-sm text-dark-200 shadow-md'>
                  <p className='mb-3 font-semibold text-dark-300'>
                    Tasks / Achievements
                  </p>
                  <p>{project.description}</p>
                </div>

                {/* Tech Stack */}
                <ul className='mt-2 flex flex-wrap gap-3 font-mono text-xs text-dark-400'>
                  {project.stack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className='mt-3 flex gap-6'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-dark-300 hover:underline'
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-dark-300 hover:underline'
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Element>
  )
}

export default ProjectSection
