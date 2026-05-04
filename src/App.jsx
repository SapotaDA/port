import { Hero } from "./components/features/Hero";
import { About } from "./components/features/About";
import { Projects } from "./components/features/Projects";
import { MiniGame } from "./components/game/MiniGame";
import { Contact } from "./components/contact/Contact";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/common/ThemeToggle";
import { motion } from 'framer-motion';
import "./styles/index.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'var(--nav-bg)', borderBottomColor: 'var(--border-color)' }}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" className="text-xl font-bold" style={{ color: 'var(--text-color)' }}>
              Aarav Uniyal
            </a>
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
              <a href="#projects" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                Projects
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
              <a href="#game" className="relative group" style={{ color: 'var(--text-secondary-color)' }}>
                Game
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
        <main>
          <Hero />
          <About />
          <Projects />
          <MiniGame />
          <Contact />
        </main>
        
        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
