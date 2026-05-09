import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import StarsCanvas from "./components/canvas/Stars";
import { ThemeProvider } from "./contexts/ThemeContext";
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import "./styles/index.css";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "AARAV | CYBERNETIC ARCHITECT";
  }, []);

  return (
    <ThemeProvider>
      <div className="relative z-0 bg-[#050505] min-h-screen font-sans selection:bg-[#ff00ff] selection:text-white">
        {/* Cinematic Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#ff00ff] z-[100] origin-left shadow-[0_0_15px_#ff00ff]"
          style={{ scaleX }}
        />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-[#ff00ff20] bg-[#050505cc]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.a 
              href="#" 
              className="text-2xl font-black tracking-tighter text-[#00fff2] neon-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AARAV.SYS
            </motion.a>
            <div className="hidden md:flex items-center space-x-10">
              {[
                ['THE JOURNEY', '#about'],
                ['THE TOOLKIT', '#skills'],
                ['CHAPTERS', '#experience'],
                ['VISIONS', '#projects'],
                ['CONNECT', '#contact']
              ].map(([label, href]) => (
                <a 
                  key={href}
                  href={href} 
                  className="text-xs font-bold tracking-[0.2em] text-[#9d00ff] hover:text-[#00fff2] transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* 3D Ambient Background */}
        <StarsCanvas />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        {/* Cyber Footer */}
        <footer className="py-10 text-center border-t border-[#ff00ff10] bg-[#050505]">
          <p className="text-[#9d00ff] font-mono text-xs tracking-widest uppercase">
            © 2024 AARAV UNIYAL // ESTABLISHED IN THE VOID
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
