import { Suspense, useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { motion } from 'framer-motion';
import CinematicIntro from "./components/animations/CinematicIntro";
import "./styles/index.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowMainContent(true);
  };

  return (
    <>
      {/* Cinematic Intro */}
      <CinematicIntro onComplete={handleIntroComplete} />
      
      {/* Main App Content */}
      {showMainContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen w-screen bg-[#0a0a0f] noise relative overflow-hidden"
        >
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 h-14 md:h-16 bg-black/90 backdrop-blur-lg border-b border-purple-500/20 z-50 flex items-center px-4 md:px-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-sm md:text-base font-bold text-pink-500 glitch">AARAV.CYBER</span>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-6">
              {['HOME', 'ABOUT', 'PROJECTS', 'SERVICES', 'CONTACT'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs md:text-sm font-mono text-purple-400 hover:text-pink-500 transition-colors"
                  whileHover={{ scale: 1.1, textShadow: '0 0 10px #ff006e' }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </nav>

          <div className="pointer-events-none">
            <div className="absolute -left-24 top-24 hidden md:block h-72 w-72 rounded-full bg-sky-500/20 blur-3xl animate-glow" />
            <div className="absolute right-10 top-1/3 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl animate-glow" style={{ animationDelay: '1.8s' }} />
            <div className="absolute left-1/2 top-[32%] h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl opacity-70 animate-glow" />
          </div>

          {/* Content Sections */}
          <div className="relative z-10 pointer-events-auto">
            <Hero />
            <section className="w-screen flex justify-center px-4 md:px-8 py-12 md:py-20">
              <div className="w-full max-w-7xl">
                <div className="mb-8 text-center">
                  <p className="text-slate-400 text-base md:text-lg">Welcome to my portfolio. Explore my work and services below.</p>
                </div>
              </div>
            </section>
            <About />
            <Projects />
            <Skills />
            <Services />
            <Contact />
          </div>

          {/* Ambient Effects - Cyberpunk */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://res.cloudinary.com/dzv9rq7qr/image/upload/v1682332841/noise_ovl7uz.png')]"></div>
          <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-t from-purple-500/5 via-pink-500/3 to-transparent"></div>
        </motion.div>
      )}
    </>
  );
}

export default App;
