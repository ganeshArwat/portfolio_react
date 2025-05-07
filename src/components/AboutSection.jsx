function AboutSection() {
  return (
    <section className='flex items-center justify-center bg-white py-12 text-center'>
      <div className='flex w-full max-w-6xl flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:gap-12'>
        {/* Heading */}
        <div className='w-full text-left md:w-1/2'>
          <h2 className='text-xl font-semibold leading-snug text-gray-900 md:text-2xl'>
            Passionate software developer <br />
            with a diverse background and <br />a drive for innovation.
          </h2>
        </div>

        {/* Content */}
        <div className='w-full text-left md:w-1/2'>
          <p className='text-base leading-relaxed text-gray-700 md:text-sm'>
            With over 2 years of industry experience, I have honed my skills in
            web development and software engineering. <br />
            My dedication to delivering high–quality solutions consistently
            exceeds client expectations. <br />I am passionate about crafting
            innovative, efficient, and reliable software that drives success.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
