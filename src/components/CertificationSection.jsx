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
      className='w-full bg-gradient-to-br from-[#e7e7ec] to-[#ffffff] px-4 py-20 sm:px-6 lg:px-12'
    >
      {/* Header */}
      <h2 className='mb-12 text-center text-3xl font-extrabold text-neutral-800 sm:text-4xl md:text-5xl'>
        Certifications & Achievements
      </h2>

      {/* Swiper Container */}
      <div className='relative mx-auto w-full max-w-[1200px]'>
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={40}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            640: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
          className='w-full'
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide key={index}>
              <div className='group relative mx-auto max-w-[350px] rounded-2xl border border-gray-300  bg-white/60 p-4 shadow-xl backdrop-blur-lg transition-all duration-300 hover:shadow-2xl'>
                <img
                  src={certificate}
                  alt={`Certificate ${index + 1}`}
                  className='h-auto w-full rounded-xl border border-gray-400 shadow-lg'
                />
                {/* Optional Title */}
                {/* <p className='mt-4 text-center text-lg font-semibold text-neutral-700'>
              Certificate Title
            </p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className='mt-10 flex justify-between px-6 text-base font-medium text-black sm:text-lg'>
          <button className='custom-prev flex items-center gap-2 rounded-lg border border-black bg-white px-4 py-2 transition hover:scale-105'>
            <span className='text-xl'>&#8592;</span> Previous
          </button>
          <button className='custom-next flex items-center gap-2 rounded-lg border border-black bg-white px-4 py-2 transition hover:scale-105'>
            Next <span className='text-xl'>&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  )
}
export default CertificationSection
