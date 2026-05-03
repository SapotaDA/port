import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden py-12 md:py-0 bg-[#0a0a0f]">
      {/* Animated Background Particles - Professional */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'
            }}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl px-4 md:px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", damping: 15 }}
        >
          <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
            <motion.p 
              className="text-xs md:text-sm font-mono text-blue-400 tracking-widest"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              MERN_STACK_DEVELOPER
            </motion.p>
          </div>
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", damping: 12 }}
        >
          WEB DEVELOPER & 
          <motion.span 
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text'
            }}
          >
            FULL_STACK_DEVELOPER
          </motion.span>
          <motion.div
            className="inline-block ml-2"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={24} className="text-blue-500" />
          </motion.div>
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-300 font-light mb-6 leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          I build modern web applications using the MERN stack and cutting-edge web technologies.
          <span className="block text-sm md:text-base mt-3 text-blue-400">Specializing in React, Node.js, MongoDB, and scalable web development solutions.</span>
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {['WEB_APPS', 'UI/UX', 'MERN_STACK', 'SCALABLE_SOLUTIONS'].map((item, index) => (
            <motion.span 
              key={index} 
              className="px-3 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-200 text-xs md:text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                borderColor: 'rgba(59, 130, 246, 0.8)',
                color: '#3b82f6',
                textShadow: '0 0 10px #3b82f6'
              }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          className="flex gap-3 md:gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.a 
            href="#projects" 
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all hover:shadow-[0_0_30px_rgba(255,0,110,0.6)] duration-300 text-sm md:text-base neon-border"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 0, 110, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div className="flex items-center gap-2" animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <Zap size={16} className="text-cyan-400" />
              <span>VIEW_PROJECTS</span>
            </motion.div>
          </motion.a>
          <motion.a 
            href="#contact" 
            className="px-6 md:px-8 py-3 md:py-4 border border-purple-500/50 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 text-sm md:text-base"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 0, 110, 0.8)', color: '#ff006e' }}
            whileTap={{ scale: 0.95 }}
          >
            CONNECT_NOW
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 z-10"
        animate={{ 
          y: [0, 8, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          animate={{ rotate: [0, 180] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <ArrowDown size={24} className="text-pink-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
