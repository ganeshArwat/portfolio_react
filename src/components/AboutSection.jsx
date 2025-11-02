import { useState } from 'react'
import { motion } from 'framer-motion'

function AboutSection() {
  // === Cursor-based lighting ===
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    })
  }

  // === Animation Variants ===
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  }

  return (
    <section
      id='about_section'
      onMouseMove={handleMouseMove}
      className='relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-white py-20 text-gray-900'
    >
      {/* === Moving light background (subtle pastel glow) === */}
      <motion.div
        animate={{
          background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, rgba(196,147,255,0.25), transparent 80%)`,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='absolute inset-0 -z-10 blur-2xl'
      />

      {/* === Soft grid texture === */}
      <div className='absolute inset-0 -z-20 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30' />

      {/* === About Container === */}
      <div className='relative flex w-full max-w-6xl flex-col items-center justify-center gap-10 px-6 md:flex-row md:items-start md:gap-16'>
        {/* === Text Section === */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className='w-full text-center md:w-1/2 md:text-left'
        >
          <h2 className='bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600/40 bg-clip-text font-[Electrolize] text-3xl font-bold leading-snug text-transparent sm:text-4xl md:text-5xl'>
            Passionate Developer with a Drive for Innovation
          </h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            className='mt-6 text-base leading-relaxed text-gray-700 md:text-[15px]'
          >
            With over{' '}
            <span className='font-medium text-purple-600'>2 years</span> of
            hands-on experience, I’ve mastered the art of crafting modern,
            scalable, and visually stunning web applications. My focus is on
            creating seamless digital experiences powered by clean architecture
            and futuristic design.
          </motion.p>

          <motion.div
            custom={2}
            variants={fadeUp}
            className='mt-6 flex flex-wrap justify-center gap-3 md:justify-start'
          >
            {['Full Stack', 'React.js', 'Node.js', 'Spring Boot', 'AWS'].map(
              (item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className='rounded-full border border-purple-300 bg-purple-50 px-4 py-1 text-sm text-gray-800 shadow-sm transition-all duration-200 hover:border-purple-400 hover:bg-purple-100'
                >
                  {item}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>

        {/* === Floating Info Card (light mode glow) === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='relative w-full max-w-md rounded-2xl border border-purple-200 bg-white/80 p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)] backdrop-blur-lg md:w-1/2'
        >
          {/* Gradient glow ring */}
          <div className='absolute -inset-[2px] rounded-2xl bg-gradient-to-tr from-fuchsia-400/30 via-pink-300/20 to-violet-400/30 blur-2xl' />

          <div className='relative z-10'>
            <h3 className='mb-4 text-xl font-semibold text-purple-700'>
              Quick Highlights
            </h3>
            <ul className='space-y-3 text-sm text-gray-700'>
              <li>⚡ 2+ years in full-stack web development</li>
              <li>🚀 Expertise in React, Node.js, Spring Boot</li>
              <li>☁️ Experience with AWS & scalable deployments</li>
              <li>🎨 Passionate about clean UI & UX</li>
              <li>🤖 Exploring AI & futuristic web design</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
