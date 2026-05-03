import { motion } from "framer-motion";
import { ArrowDown, Mouse } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hi, I'm{" "}
            </motion.span>
            <motion.span 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {" "}Aarav Uniyal
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I am a passionate{" "}
            <motion.span 
              className="inline-block text-blue-600 font-semibold"
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {" "}MERN stack{" "}
            </motion.span>
            {" "}developer who loves creating{" "}
            <motion.span 
              className="inline-block text-purple-600 font-semibold"
              whileHover={{ scale: 1.1, color: "#9333ea" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {" "}modern, scalable{" "}
            </motion.span>
            {" "}web applications.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View my work</span>
              <motion.div 
                className="absolute inset-0 bg-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get in touch</span>
              <motion.div 
                className="absolute inset-0 bg-gray-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16"
        >
          <motion.a 
            href="#about" 
            className="inline-flex items-center text-gray-400 hover:text-gray-600 transition-colors group"
            whileHover={{ y: -2 }}
          >
            <Mouse size={16} className="mr-2 group-hover:animate-bounce" />
            <span className="mr-2">Scroll down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
