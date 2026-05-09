import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';
import HeroCanvas from "../canvas/HeroCanvas";

export const Hero = () => {
  const { colors } = useTheme();
  
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <HeroCanvas />
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full' style={{ backgroundColor: colors.accent }} />
          <div className='w-1 sm:h-80 h-40' style={{ background: `linear-gradient(to bottom, ${colors.accent}, transparent)` }} />
        </div>

        <div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ color: colors.text }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm <span style={{ color: colors.accent }}>Aarav</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mt-2 max-w-2xl"
            style={{ color: colors.textSecondary }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I weave code into <span className="font-semibold" style={{ color: colors.text }}>digital stories</span>, 
            crafting immersive experiences that bridge the gap between 
            <span className="font-semibold" style={{ color: colors.text }}> imagination</span> and 
            <span className="font-semibold" style={{ color: colors.text }}> reality</span>.
          </motion.p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2" style={{ borderColor: colors.textSecondary }}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full mb-1'
              style={{ backgroundColor: colors.textSecondary }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};
