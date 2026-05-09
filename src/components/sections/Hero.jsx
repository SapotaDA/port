import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';
import HeroCanvas from "../canvas/HeroCanvas";

export const Hero = () => {
  const { colors } = useTheme();
  
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10`}>
        
        {/* Left Side: Text Content */}
        <div className="flex-1 z-10 pt-20 md:pt-0">
          <div className="flex items-start gap-5">
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full' style={{ backgroundColor: 'var(--accent-color)' }} />
              <div className='w-1 sm:h-80 h-40' style={{ background: `linear-gradient(to bottom, var(--accent-color), transparent)` }} />
            </div>

            <div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                style={{ color: 'var(--text-color)' }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Hi, I'm <span style={{ color: 'var(--accent-color)' }}>Aarav</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mt-2 max-w-xl leading-relaxed"
                style={{ color: 'var(--text-secondary-color)' }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I weave code into <span className="font-semibold text-white">digital stories</span>, 
                crafting immersive experiences that bridge the gap between 
                <span className="font-semibold text-white"> imagination</span> and 
                <span className="font-semibold text-white"> reality</span>.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Right Side: 3D Element */}
        <div className="flex-1 w-full h-[50vh] md:h-full relative">
          <HeroCanvas />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2" style={{ borderColor: 'var(--text-secondary-color)' }}>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full mb-1'
              style={{ backgroundColor: 'var(--text-secondary-color)' }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};
