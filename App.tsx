
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Cpu, Github, Instagram, ArrowRight, ShieldCheck, Zap, Database, Cpu as Chip } from 'lucide-react';
import Terminal from './components/Terminal';
import ProjectCard from './components/ProjectCard';
import GlitchText from './components/GlitchText';
import { PROJECTS, TECHNICAL_SKILLS } from './constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link to="/" className="pointer-events-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-brutalist text-2xl font-black tracking-tighter"
          >
            <div className="w-15h-15 bg-[#00FF41] flex items-center justify-center text-black uppercase">HK</div>
          </motion.div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto bg-black border border-[#00FF41] p-3 hover:bg-[#00FF41] hover:text-black transition-all"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 bg-black z-[-1] flex flex-col items-center justify-center p-12 pointer-events-auto"
      >
        <div className="flex flex-col gap-8 text-center">
          {['HOME', 'DOSSIERS', 'ARCHITECT', 'INTEL'].map((item, i) => (
            <Link
              key={item}
              to={item === 'HOME' ? '/' : '#'}
              onClick={() => setIsOpen(false)}
              className="font-brutalist text-6xl md:text-8xl font-black text-white hover:text-[#00FF41] transition-colors glitch-hover"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-12 flex gap-8 text-[#00FF41] font-terminal text-sm">
          <a href="#" className="hover:underline">GITHUB</a>
          <a href="#" className="hover:underline">LINKEDIN</a>
          <a href="#" className="hover:underline">RESUME_V1.PDF</a>
        </div>
      </motion.div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden pt-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#00FF41_0%,_transparent_70%)]"></div>
      </div>

      <div className="max-w-screen-xl w-full relative z-10 text-center space-y-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 border border-[#00FF41] text-[#00FF41] font-terminal text-xs tracking-widest uppercase mb-4"
        >
          <Zap size={14} className="animate-pulse" /> IoT and Software Developer
        </motion.div>

        <div className="relative w-full flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -top-20 -left-12 md:-top-24 md:-left-0 flex flex-col gap-2 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 font-brutalist text-2xl md:text-3xl font-black tracking-tighter text-left"
              >
                <div className="w-12 h-10 bg-[#00FF41] flex items-center justify-center text-black">Hi</div>
                <span className="text-[#00FF41]">There,</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 font-brutalist text-2xl md:text-3xl font-black tracking-tighter ml-6 md:ml-12 text-left"
              >
                <div className="w-10 h-10 bg-[#00FF41] flex items-center justify-center text-black">I</div>
                <span className="text-[#00FF41]">'m</span>
              </motion.div>
            </div>

            <h1 className="font-brutalist text-6xl md:text-[9.5rem] font-black leading-[0.85] tracking-tighter text-white text-center w-full">
              <GlitchText text="HARSH" className="block" />
              <span className="text-[#00FF41]">
                KUMA<span className="inline-block scale-x-[-1]">R</span>
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mt-12 font-ui text-xl md:text-2xl text-gray-300 leading-relaxed text-center"
          >
            I build <span className="text-[#00FF41] font-bold">intelligent systems</span> where hardware meets AI — from embedded devices and IoT platforms to data-driven decision engines and modern mobile applications.
          </motion.p>
        </div>

        <div className="mt-12 text-center border-t border-[#00FF41]/20 pt-12 w-full max-w-2xl">
          <div className="space-y-6">

            <h4 className="font-terminal text-[#00FF41] text-sm uppercase tracking-widest">
              Tech_Stack
            </h4>

            {/* CORE SYSTEMS */}
            <ul className="font-terminal text-sm text-[#00FF41]/80 space-y-1">
              <li>{'>'} EMBEDDED_SYSTEMS // FIRMWARE_DEV // </li>
              <li>{'>'} REAL_TIME_SYSTEMS // SENSOR_INTERFACING</li>
            </ul>

            {/* HARDWARE */}
            <ul className="font-terminal text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} ARDUINO // ESP32 // NODEMCU // RP2040</li>
              <li>{'>'} PCB_DESIGN // CIRCUIT_DESIGN //3D_PRINTING</li>
            </ul>

            {/* LANGUAGES */}
            <ul className="font-terminal text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} C++ // PYTHON // DART</li>
            </ul>

            {/* CONNECTIVITY */}
            <ul className="font-terminal text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} BLE // MQTT // WIFI // IOT_PROTOCOLS</li>
              <li>{'>'} AWS_IOT // FIREBASE</li>
            </ul>

            {/* AI & DATA */}
            <ul className="font-terminal text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} EDGE_AI // MACHINE_LEARNING</li>
              <li>{'>'} COMPUTER_VISION // DATA_ANALYTICS</li>

            </ul>

            {/* APPLICATION & BACKEND */}
            <ul className="font-terminal text-sm text-[#00FF41]/70 space-y-1">
              <li>{'>'} FLUTTER // MOBILE_DASHBOARDS</li>
              <li>{'>'} FASTAPI // FLASK // REST_APIS</li>
            </ul>

            {/* OS */}
            <ul className="font-terminal text-sm text-[#00FF41]/70 space-y-1">

              <li>{'>'} CLOUD_INTEGRATION</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

// const SkillsSection: React.FC = () => {
//   const allSkills = [
//     "Embedded Systems",
//     "Firmware Development",
//     "RTOS",
//     "Real-Time Systems",

//     "PCB Design",
//     "Circuit Design",
//     "Sensor Interfacing",

//     "Arduino",
//     "ESP32",
//     "NodeMCU",
//     "RP2040",

//     "C++",
//     "Python",
//     "Dart",

//     "IoT Platforms",
//     "BLE",
//     "MQTT",
//     "WiFi",
//     "AWS IoT",
//     "Firebase",

//     "Edge AI",
//     "Machine Learning",
//     "Computer Vision",
//     "Data Analytics",

//     "Flutter",
//     "Mobile Dashboards",

//     "FastAPI",
//     "Flask",
//     "REST APIs",


//     "Linux",
//     "Cloud Integration"
//   ]

//   return (
//     <section className="py-24 px-6 md:px-12">
//       <div className="max-w-screen-xl mx-auto">
//         <div className="flex flex-wrap gap-4 justify-center">
//           {allSkills.map((skill, i) => (
//             <motion.div
//               key={skill}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05, duration: 0.4 }}
//               className="px-6 py-2.5 border border-white rounded-full text-white font-ui text-sm md:text-base font-medium tracking-tight whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-300 cursor-default"
//             >
//               {skill}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const ProjectSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-[#00FF41]/20">
      <div className="px-6 md:px-12 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-brutalist text-6xl md:text-8xl font-black text-white mb-4">PROJECTS</h2>
          </div>

        </div>
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
    <footer className="py-24 px-6 md:px-12 bg-black border-t border-[#00FF41]/20 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        <div className="space-y-8">
          <div className="font-brutalist text-4xl font-black text-white">
            READY TO <span className="text-[#00FF41]">UPLINK?</span>
          </div>
          <p className="max-w-md font-ui text-gray-400 text-xl leading-relaxed">
            Actively seeking collaborations in Edge AI, IoT Systems Design, and Embedded Hardware. Initialize connection for technical briefing.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#00FF41] text-black font-terminal font-bold px-8 py-4 uppercase tracking-widest hover:scale-105 transition-transform">
              Initiate_Protocol
            </button>
            <button className="border border-[#00FF41] text-[#00FF41] font-terminal font-bold px-8 py-4 uppercase tracking-widest hover:bg-[#00FF41]/10 transition-all">
              Access_CV_Archive
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-24 font-terminal text-sm">
          <div className="space-y-4">
            <h5 className="text-[#00FF41] font-bold">CORE_LOGS</h5>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">PROJECTS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ACHIEVEMENTS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TERMINAL</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ENCRYPTION</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[#00FF41] font-bold">TRANSMISSION</h5>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">GITHUB</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LINKEDIN</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EMAIL_UPLINK</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-[#00FF41]/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-terminal text-[#00FF41]/40 uppercase tracking-widest">
        <span>© 2025 HARSH KUMAR // ALL RIGHTS RESERVED</span>
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
      {/* <SkillsSection /> */}
      <ProjectSection />

      {/* Achievements Section
      <section className="py-24 px-6 md:px-12 border-t border-[#00FF41]/10">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-brutalist text-4xl md:text-6xl font-black text-white mb-16">ACHIEVEMENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#00FF41]/20 p-8 hover:bg-[#00FF41]/5 transition-all">
              <h3 className="font-brutalist text-2xl text-white mt-2">SMART INDIA HACKATHON</h3>
              <p className="font-ui text-gray-400 mt-4">Finalist (SIH) 2024 & 2025. Ranked among top teams from 300+ nationwide participants.</p>
            </div>
            <div className="border border-[#00FF41]/20 p-8 hover:bg-[#00FF41]/5 transition-all">
              <h3 className="font-brutalist text-2xl text-white mt-2">DEEP REINFORCEMENT LEARNING</h3>
              <p className="font-ui text-gray-400 mt-4">Advanced certification in Python-based DRL (2025) and PyTorch integration via Infosys.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-24 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto bg-[#00FF41]/5 border border-[#00FF41]/20 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="font-brutalist text-5xl md:text-7xl font-black text-white uppercase">THE_ARCHITECT</h2>
            <p className="font-ui text-xl text-gray-400 leading-relaxed">
              Software and Embedded Systems Developer with strong hands-on experience in designing end-to-end intelligent systems. Proven ability to integrate biomedical, environmental, and RF systems with AI-driven analytics. Experienced in hackathons, client-facing projects, and rapid prototyping of production-ready solutions.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col">
                <span className="font-terminal text-[#00FF41] text-xs uppercase">Core_Competencies</span>
                <span className="font-ui text-white text-sm">ML // IOT // PCB DESIGN // RTOS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-terminal text-[#00FF41] text-xs uppercase">Languages</span>
                <span className="font-ui text-white text-sm">ENGLISH // HINDI</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square relative">
            <div className="absolute inset-0 border border-[#00FF41] -translate-x-4 -translate-y-4"></div>
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Architect" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />

          </div>
        </div>
      </section> */}
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
