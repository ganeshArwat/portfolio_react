import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const certificates = [
  '/certificates/1.png',
  '/certificates/2.png',
  '/certificates/3.png',
  '/certificates/4.png',
  '/certificates/5.png',
  '/certificates/6.png',
]

function CertificationSection() {
  return (
    <section
      id='Certification_section'
      className='relative flex h-[90vh] w-full flex-col items-center justify-center bg-gradient-to-br from-[#e7e7ec] to-[#ffffff] px-4'
    >
      {/* Header */}
      <h2 className='mb-4 text-center text-5xl font-bold text-neutral-800'>
        Certifications & Achievements
      </h2>

      {/* Swiper Container */}
      <div className='relative w-full max-w-[1100px] px-10'>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          className='w-full'
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide key={index}>
              <div className='relative transform transition-transform duration-500 hover:scale-105'>
                <img
                  src={certificate}
                  alt={`Certificate ${index + 1}`}
                  className='rounded-xl border-8 border-black shadow-2xl'
                />
                {/* Stage Base Shadow */}
                <div className='absolute -bottom-6 left-1/2 z-[-1] h-5 w-[80%] -translate-x-1/2 rounded-full bg-black opacity-20 blur-md' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className='mt-6 flex items-center justify-between text-lg font-medium text-black'>
          <button className='custom-prev flex items-center gap-1 px-4 py-2 transition hover:scale-105'>
            <span className='text-2xl'>&#8592;</span> Previous
          </button>
          <button className='custom-next flex items-center gap-1 px-4 py-2 transition hover:scale-105'>
            Next <span className='text-2xl'>&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  )
}
export default CertificationSection
