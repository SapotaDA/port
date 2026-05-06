import { Hero } from "./components/features/Hero";
import { About } from "./components/features/About";
import { Projects } from "./components/features/Projects";
import { Skills } from "./components/features/Skills";
import { Experience } from "./components/features/Experience";
import { Contact } from "./components/contact/Contact";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/common/ThemeToggle";
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import "./styles/index.css";

function App() {
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
                About
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
              <a href="#skills" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                Skills
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
              <a href="#experience" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                Experience
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
              <a href="#projects" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                Projects
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
              <a href="#contact" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                Contact
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
        </main>
        
        {/* Theme Toggle */}
        <ThemeToggle />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
