import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';
import HeroCanvas from "../canvas/HeroCanvas";

export const Hero = () => {
  const { colors } = useTheme();
  
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-[#050505]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      <div className={`absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col justify-center items-start z-10`}>
        <div className="flex items-start gap-5">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#ff00ff] shadow-[0_0_15px_#ff00ff]' />
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#ff00ff] to-transparent' />
          </div>

          <div>
            <motion.h1 
              className="text-5xl md:text-8xl font-black mb-4 uppercase tracking-tighter"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#00fff2] neon-text">Aarav</span>
              <br />
              <span className="text-[#ff00ff] neon-text-magenta">Uniyal</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-[#00fff2]" />
              <p className="text-[#00fff2] font-mono tracking-widest uppercase text-sm">
                System Architect // Storyteller
              </p>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl mt-2 max-w-2xl leading-relaxed text-[#9d00ff] font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building the <span className="text-white">next dimension</span> of digital narrative. 
              Fusing <span className="text-[#00fff2]">code</span> and <span className="text-[#ff00ff]">creativity</span> to 
              redefine the virtual experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10"
            >
              <a 
                href="#projects" 
                className="px-10 py-4 bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] font-bold uppercase tracking-widest hover:bg-[#ff00ff] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,0,255,0.3)]"
              >
                Initiate Sequence
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-[#00fff2] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-2 h-2 rounded-full bg-[#00fff2] shadow-[0_0_10px_#00fff2]'
            />
          </div>
        </a>
      </div>
    </section>
  );
};
