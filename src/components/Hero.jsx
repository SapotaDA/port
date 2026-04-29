import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden py-12 md:py-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl px-4 md:px-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-sky-500/10 border border-sky-500/30"
        >
          <p className="text-xs md:text-sm font-mono text-sky-400 tracking-widest">Welcome to my workspace</p>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
          Full Stack Developer & <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Creative Builder</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 font-light mb-8 md:mb-12 leading-relaxed">
          I craft beautiful, performant web experiences using modern technologies.
          <span className="block text-sm md:text-base mt-2 text-slate-500">Specialized in React, Node.js, Three.js, and full-stack development</span>
        </p>
        
        <motion.div 
          className="flex gap-3 md:gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a href="#projects" className="px-6 md:px-8 py-3 md:py-4 bg-sky-500 text-slate-950 font-semibold rounded-lg hover:bg-sky-400 transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] duration-300 text-sm md:text-base">
            View My Work
          </a>
          <a href="#contact" className="px-6 md:px-8 py-3 md:py-4 border border-sky-500/50 text-sky-400 font-semibold rounded-lg hover:bg-sky-500/10 transition-all duration-300 text-sm md:text-base">
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} className="text-sky-500/60" />
      </motion.div>
    </section>
  );
};
