import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import StarsCanvas from "./components/canvas/Stars";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/ui/ThemeToggle";
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
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen" 
        style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
          style={{ scaleX, backgroundColor: 'var(--accent-color)' }}
        />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'var(--nav-bg)', borderBottomColor: 'var(--border-color)' }}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.a 
              href="#" 
              className="text-xl font-bold" 
              style={{ color: 'var(--text-color)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Aarav Uniyal
            </motion.a>
            <div className="flex items-center space-x-8">
              <a href="#about" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                The Journey
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
              <a href="#skills" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                The Toolkit
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
              <a href="#experience" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                Chapters
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
              <a href="#projects" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                Visions
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
              <a href="#contact" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                Connect
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <StarsCanvas />
        </main>
        
        {/* Theme Toggle */}
        <ThemeToggle />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
