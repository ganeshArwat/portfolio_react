function HeroSection() {
  return (
    <section className="flex w-full justify-between bg-black text-white flex-col md:flex-row">
    {/* Content */}
    <div className="text-center flex flex-col justify-center items-center px-6 py-6 gap-1 md:w-2/3 h-[75vh]">
      <h3 className="text-[20px] font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
        Software Developer
      </h3>
      <h1 className="font-[Electrolize] text-[65px] font-medium">Ganesh Arwat</h1>
      <p className="text-[15px] leading-relaxed">
        Highly motivated and detail-oriented software developer with a passion
        <br />
        for creating efficient and innovative solutions.
      </p>
      <a
        href="#contact_section"
        className="inline-block px-6 py-3 mt-4 text-[15px] font-bold border border-primary text-white bg-primary hover:bg-white hover:text-[#732354] transition-all duration-300"
      >
        Contact Me
      </a>
    </div>
  
    {/* Image */}
    <div className="flex items-center justify-center md:w-1/3">
      <img
        src="/images/ganesh_image.png"
        alt="Ganesh Arwat"
        className="object-cover max-h-[80vh] rounded-lg"
      />
    </div>
  </section>
  )
}

export default HeroSection
