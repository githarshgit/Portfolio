
import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Zap, Github, Linkedin, Mail } from 'lucide-react';
import Terminal from './components/Terminal';
import ProjectCard from './components/ProjectCard';
import GlitchText from './components/GlitchText';
import { PROJECTS } from './constants';

// === CONFIGURATION - Update these with your actual links ===
const SOCIAL_LINKS = {
  github: 'https://github.com/githarshgit',
  linkedin: 'https://linkedin.com/in/harshkumar-ison-linked-in',
  email: 'mailto:connectwithharshkumar@gmail.com',
  resume: 'Resume1.pdf'
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-10 pointer-events-none">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link to="/" className="pointer-events-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-brutalist text-xl md:text-2xl font-black tracking-tighter"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00FF41] flex items-center justify-center text-black uppercase text-sm md:text-base">HK</div>
          </motion.div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto bg-black border border-[#00FF41] p-2 md:p-3 hover:bg-[#00FF41] hover:text-black transition-all"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 bg-black z-[-1] flex flex-col items-center justify-center p-6 md:p-12 pointer-events-auto"
      >
        <div className="flex flex-col gap-6 md:gap-8 text-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-brutalist text-4xl md:text-8xl font-black text-white hover:text-[#00FF41] transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="font-brutalist text-4xl md:text-8xl font-black text-white hover:text-[#00FF41] transition-colors"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-brutalist text-4xl md:text-8xl font-black text-white hover:text-[#00FF41] transition-colors"
          >
            CONTACT
          </button>
        </div>
        <div className="absolute bottom-8 md:bottom-12 flex flex-col md:flex-row gap-4 md:gap-8 text-[#00FF41] font-terminal text-xs md:text-sm items-center">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
            <Github size={14} /> GITHUB
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
            <Linkedin size={14} /> LINKEDIN
          </a>
          <a href={SOCIAL_LINKS.resume} target="_blank" rel="noopener noreferrer" className="hover:underline">
            RESUME
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-6 overflow-hidden pt-24 md:pt-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#00FF41_0%,_transparent_70%)]"></div>
      </div>

      <div className="max-w-screen-xl w-full relative z-10 text-center space-y-8 md:space-y-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 border border-[#00FF41] text-[#00FF41] font-terminal text-[10px] md:text-xs tracking-widest uppercase"
        >
          <Zap size={12} className="animate-pulse" /> IoT & Software Developer
        </motion.div>

        <div className="relative w-full flex flex-col items-center">
          {/* Hi There - Hidden on mobile to avoid clutter */}
          <div className="hidden md:flex flex-col gap-2 mb-6 self-start max-w-screen-xl w-full pl-4 lg:pl-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 font-brutalist text-2xl lg:text-3xl font-black tracking-tighter text-left"
            >
              <div className="w-10 lg:w-12 h-8 lg:h-10 bg-[#00FF41] flex items-center justify-center text-black text-sm lg:text-base">Hi</div>
              <span className="text-[#00FF41]">There,</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 font-brutalist text-2xl lg:text-3xl font-black tracking-tighter ml-8 lg:ml-12 text-left"
            >
              <div className="w-8 lg:w-10 h-8 lg:h-10 bg-[#00FF41] flex items-center justify-center text-black text-sm lg:text-base">I</div>
              <span className="text-[#00FF41]">'m</span>
            </motion.div>
          </div>

          {/* Mobile greeting */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden flex items-center gap-2 font-brutalist text-lg font-black tracking-tighter mb-4"
          >
            <div className="w-8 h-8 bg-[#00FF41] flex items-center justify-center text-black text-sm">Hi</div>
            <span className="text-[#00FF41]">I'm</span>
          </motion.div>

          <h1 className="font-brutalist text-5xl md:text-[9.5rem] font-black leading-[0.9] tracking-tighter text-white text-center w-full">
            <GlitchText text="HARSH" className="block" />
            <span className="text-[#00FF41]">
              KUMA<span className="inline-block scale-x-[-1]">R</span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mt-8 md:mt-12 font-ui text-base md:text-2xl text-gray-300 leading-relaxed text-center px-2"
          >
            I build <span className="text-[#00FF41] font-bold">intelligent systems</span> where hardware meets AI — from embedded devices and IoT platforms to mobile applications.
          </motion.p>
        </div>

        <div className="mt-8 md:mt-12 text-center border-t border-[#00FF41]/20 pt-8 md:pt-12 w-full max-w-2xl px-2">
          <div className="space-y-4 md:space-y-6">
            <h4 className="font-terminal text-[#00FF41] text-xs md:text-sm uppercase tracking-widest">
              Tech Stack
            </h4>

            <ul className="font-terminal text-[10px] md:text-sm text-[#00FF41]/80 space-y-1">
              <li>{'>'} EMBEDDED SYSTEMS // FIRMWARE</li>
              <li>{'>'} REAL-TIME SYSTEMS // SENSORS</li>
            </ul>

            <ul className="font-terminal text-[10px] md:text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} ARDUINO // ESP32 // RP2040 // Raspberry Pi</li>
              <li>{'>'} PCB DESIGN // 3D PRINTING</li>
            </ul>

            <ul className="font-terminal text-[10px] md:text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} C++ // PYTHON // FLUTTER</li>
              <li>{'>'} MQTT // AWS IOT // FIREBASE</li>
            </ul>

            <ul className="font-terminal text-[10px] md:text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} EDGE AI // ML // COMPUTER VISION</li>
              <li>{'>'} FASTAPI // FLASK // REST APIS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-[#00FF41]/20">
      <div className="px-4 md:px-12 mb-12 md:mb-24">
        <h2 className="font-brutalist text-4xl md:text-8xl font-black text-white mb-4">PROJECTS</h2>
      </div>

      <div className="border-t border-[#00FF41]/30">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 md:py-24 px-4 md:px-12 bg-black border-t border-[#00FF41]/20 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12 relative z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="font-brutalist text-3xl md:text-4xl font-black text-white">
            LET'S <span className="text-[#00FF41]">CONNECT</span>
          </div>
          <p className="max-w-md font-ui text-gray-400 text-base md:text-xl leading-relaxed">
            Actively seeking collaborations in Edge AI, IoT Systems Design, and Embedded Hardware.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href={SOCIAL_LINKS.email}
              className="bg-[#00FF41] text-black font-terminal font-bold px-6 md:px-8 py-3 md:py-4 uppercase tracking-widest hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 text-sm"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#00FF41] text-[#00FF41] font-terminal font-bold px-6 md:px-8 py-3 md:py-4 uppercase tracking-widest hover:bg-[#00FF41]/10 transition-all text-center text-sm"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-24 font-terminal text-xs md:text-sm">
          <div className="space-y-3 md:space-y-4">
            <h5 className="text-[#00FF41] font-bold">NAVIGATE</h5>
            <ul className="space-y-2 text-gray-500">
              <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">HOME</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">PROJECTS</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">CONTACT</button></li>
            </ul>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h5 className="text-[#00FF41] font-bold">CONNECT</h5>
            <ul className="space-y-2 text-gray-500">
              <li><a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Github size={12} /> GitHub</a></li>
              <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin size={12} /> LinkedIn</a></li>
              <li><a href={SOCIAL_LINKS.email} className="hover:text-white transition-colors flex items-center gap-2"><Mail size={12} /> Email</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-[#00FF41]/10 text-center text-[9px] md:text-[10px] font-terminal text-[#00FF41]/40 uppercase tracking-widest">
          <span>© 2025 HARSH KUMAR</span>
        </div>
      </div>
    </footer>
  );
};

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00FF41] z-[100] origin-left"
        style={{ scaleX }}
      />
      <Hero />
      <ProjectSection />
      <Footer />
      <Terminal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
