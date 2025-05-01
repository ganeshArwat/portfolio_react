import { Element } from 'react-scroll'
function HeroSection() {
  return (
    <Element
      name='hero_section'
      className='flex w-full flex-col justify-between bg-black text-white md:flex-row'
    >
      <div className='flex h-[75vh] flex-col items-center justify-center gap-1 px-6 py-6 text-center md:w-2/3'>
        <h3 className='bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-[20px] font-bold text-transparent'>
          Software Developer
        </h3>
        <h1 className='font-[Electrolize] text-[65px] font-medium'>
          Ganesh Arwat
        </h1>
        <p className='text-[15px] leading-relaxed'>
          Highly motivated and detail-oriented software developer with a passion
          <br />
          for creating efficient and innovative solutions.
        </p>
        <a
          href='#contact_section'
          className='mt-4 inline-block border border-primary bg-primary px-6 py-3 text-[15px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#732354]'
        >
          Contact Me
        </a>
      </div>

      {/* Image */}
      <div className='flex items-center justify-center md:w-1/3'>
        <img
          src='/images/ganesh_image.png'
          alt='Ganesh Arwat'
          className='max-h-[80vh] rounded-lg object-cover'
        />
      </div>
    </Element>
  )
}

export default HeroSection
