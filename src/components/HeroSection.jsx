import { useState } from 'react'
import { Element, Link } from 'react-scroll'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function HeroSection() {
  // === Floating image motion ===
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const scale = useTransform([rotateX, rotateY], ([x, y]) =>
    Math.abs(x) + Math.abs(y) > 15 ? 1.03 : 1
  )

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    rotateY.set((x / width - 0.5) * 25)
    rotateX.set(-(y / height - 0.5) * 25)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  // === Subtle background mouse movement ===
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const handleMouseMoveGlobal = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    })
  }

  // === Text reveal animation ===
  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  }

  return (
    <Element
      name='hero_section'
      onMouseMove={handleMouseMoveGlobal}
      className='relative flex h-[calc(100vh)] w-full flex-col-reverse items-center justify-center overflow-hidden bg-[#0a0a0a] text-white md:flex-row md:justify-between md:px-24'
    >
      {/* === Animated gradient background === */}
      <motion.div
        animate={{
          background: `radial-gradient(700px at ${mousePos.x}% ${mousePos.y}%, rgba(155,88,255,0.25), transparent 80%)`,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='absolute inset-0 -z-10 blur-2xl'
      />

      {/* === Floating particles === */}
      <div className='absolute inset-0 -z-20 overflow-hidden'>
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
            className='absolute h-[6px] w-[6px] rounded-full bg-gradient-to-r from-fuchsia-400 to-pink-400 blur-[2px]'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* === Left Text Section === */}
      <motion.div
        initial='hidden'
        animate='visible'
        className='flex max-w-xl flex-col items-center gap-6 text-center md:items-start md:text-left'
      >
        <motion.h3
          custom={0}
          variants={textVariants}
          className='text-[16px] font-medium uppercase tracking-[0.25em] text-gray-400'
        >
          Full Stack Developer
        </motion.h3>

        <motion.h1
          custom={1}
          variants={textVariants}
          className='font-[Electrolize] text-5xl font-bold leading-tight sm:text-6xl md:text-7xl'
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className='bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-[length:200%_200%] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(217,70,239,0.25)]'
          >
            Ganesh Arwat
          </motion.span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={textVariants}
          className='max-w-md text-[16px] leading-relaxed text-gray-400'
        >
          I build high-performance, scalable web applications with clean
          architecture, modern design systems, and a passion for great UX.
        </motion.p>

        <motion.div custom={3} variants={textVariants}>
          <Link
            to='contact_section'
            smooth
            duration={500}
            offset={-80}
            className='group mt-3 inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-gradient-to-r from-purple-600/20 to-pink-500/20 px-7 py-3 text-[15px] font-semibold text-gray-100 backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:from-purple-600/30 hover:to-pink-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]'
          >
            Contact Me
            <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </motion.div>
      </motion.div>

      {/* === Right Floating Image === */}
      <motion.div
        className='relative mt-10 flex items-center justify-center md:mt-0 md:w-1/2'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000 }}
      >
        <motion.div
          style={{ rotateX, rotateY, scale }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className='relative'
        >
          <div className='absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-purple-600/40 to-pink-500/30 blur-2xl' />
          <motion.img
            src='/images/ganesh_image.png'
            alt='Ganesh Arwat'
            className='relative z-10 max-h-[75vh] w-[260px] rounded-[2rem] object-cover shadow-[0_0_60px_rgba(0,0,0,0.6)] sm:w-[320px] md:w-[380px] lg:w-[420px]'
            animate={{
              y: [0, -12, 0],
              scale: [1, 1.02, 1],
              filter: ['brightness(1)', 'brightness(1.08)', 'brightness(1)'],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* === Scroll Down Cue === */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute bottom-6 left-1/2 -translate-x-1/2'
      >
        <ArrowRight className='h-5 w-5 rotate-90 text-gray-500' />
      </motion.div>
    </Element>
  )
}

export default HeroSection
