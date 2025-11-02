import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "skills_section", label: "Skills" },
    { href: "Certification_section", label: "Certifications" },
    { href: "projects_section", label: "Projects" },
    { href: "experience_section", label: "Experience" },
    { href: "resume_section", label: "Resume" },
    { href: "contact_section", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/70 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer"
      >
        <Link to="hero_section" smooth duration={500} offset={-80}>
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-[50px] w-auto object-contain md:h-[60px]"
          />
        </Link>
      </motion.div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <motion.div
            key={link.href}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to={link.href}
              smooth
              duration={500}
              offset={-80}
              className="relative group px-5 py-2 text-[15px] font-medium text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Mobile Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="text-gray-200 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-[75px] z-40 flex flex-col items-center gap-4 bg-[#0a0a0a]/95 py-6 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
                className="w-3/4 rounded-xl px-5 py-3 text-center text-[16px] font-medium text-gray-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-500/20 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default NavBar;
