import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm Aarav Uniyal
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            I am a passionate MERN stack developer who loves creating modern, scalable web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <a href="#about" className="inline-flex items-center text-gray-400 hover:text-gray-600 transition-colors">
            <span className="mr-2">Scroll down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
