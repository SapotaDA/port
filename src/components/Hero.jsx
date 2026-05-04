import { motion } from "framer-motion";
import { ArrowDown, Mouse } from "lucide-react";
import { useTheme } from '../contexts/ThemeContext';

export const Hero = () => {
  const { colors } = useTheme();
  
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20" style={{ backgroundColor: colors.background }}>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: colors.text }}
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
              className="inline-block"
              style={{ 
                background: colors.text === '#000000' 
                  ? 'linear-gradient(to right, #000000, #666666)'
                  : 'linear-gradient(to right, #ffffff, #cccccc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {" "}Aarav Uniyal
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 leading-relaxed"
            style={{ color: colors.textSecondary }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I am a passionate{" "}
            <motion.span 
              className="inline-block font-semibold"
              style={{ color: colors.text }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {" "}MERN stack{" "}
            </motion.span>
            {" "}developer who loves creating{" "}
            <motion.span 
              className="inline-block font-semibold"
              style={{ color: colors.text }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {" "}modern, scalable{" "}
            </motion.span>
            {" "}web applications.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-lg transition-all relative overflow-hidden group"
              style={{ 
                backgroundColor: colors.accent, 
                color: colors.background
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View my work</span>
              <motion.div 
                className="absolute inset-0"
                style={{ backgroundColor: colors.accentSecondary }}
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-lg transition-all relative overflow-hidden group"
              style={{ 
                border: `1px solid ${colors.border}`,
                color: colors.textSecondary
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get in touch</span>
              <motion.div 
                className="absolute inset-0"
                style={{ backgroundColor: colors.cardBg }}
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
            className="inline-flex items-center transition-colors group"
            style={{ color: colors.textSecondary }}
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
