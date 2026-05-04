import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';

export const Hero = () => {
  const { colors } = useTheme();
  
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ color: colors.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm{" "}
          <span style={{ 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            background: colors.text === '#000000' 
              ? 'linear-gradient(to right, #000000, #666666)'
              : 'linear-gradient(to right, #ffffff, #cccccc)'
          }}>
            Aarav Uniyal
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 leading-relaxed"
          style={{ color: colors.textSecondary }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am a passionate{" "}
          <span style={{ color: colors.text, fontWeight: '600' }}>
            MERN stack{" "}
          </span>
          developer who loves creating{" "}
          <span style={{ color: colors.text, fontWeight: '600' }}>
            modern, scalable{" "}
          </span>
          web applications.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-lg relative overflow-hidden"
            style={{ 
              backgroundColor: colors.accent, 
              color: colors.background
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View my work</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg relative overflow-hidden"
            style={{ 
              border: `1px solid ${colors.border}`,
              color: colors.textSecondary
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get in touch</span>
          </motion.a>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16"
        >
          <motion.a 
            href="#about" 
            style={{ color: colors.textSecondary }}
            whileHover={{ y: -2 }}
          >
            <span className="mr-2">Scroll down</span>
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
