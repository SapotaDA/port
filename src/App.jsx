import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { MiniGame } from "./components/MiniGame";
import { Contact } from "./components/Contact";
import { motion } from 'framer-motion';
import "./styles/index.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-gray-900">
            Aarav Uniyal
          </a>
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors relative group">
              About
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
              />
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors relative group">
              Projects
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"
              />
            </a>
            <a href="#game" className="text-gray-600 hover:text-gray-900 transition-colors relative group">
              Game
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"
              />
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors relative group">
              Contact
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"
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
    </div>
  );
}

export default App;
