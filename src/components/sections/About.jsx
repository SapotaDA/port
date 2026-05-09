import { motion } from "framer-motion";
import { useTheme } from '../../contexts/ThemeContext';
import { Code, Server, Database, Globe } from 'lucide-react';

export const About = () => {
  const { colors } = useTheme();
  
  const skills = [
    { name: 'React & Next.js', icon: Code, level: 90 },
    { name: 'Node.js & Express', icon: Server, level: 85 },
    { name: 'MongoDB & Mongoose', icon: Database, level: 80 },
    { name: 'REST APIs', icon: Globe, level: 88 }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-12 text-center text-[#00fff2] neon-text uppercase tracking-tighter">The Journey</h2>
          
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
            <p>
              Every great project starts with a single line of code. My story began with a curiosity for how the digital world works, 
              which quickly evolved into a mission to build scalable, full-stack solutions. 
              As a MERN stack developer, I don't just build websites; I create digital homes for ideas.
            </p>
            
            <p>
              With expertise in React, Node.js, and MongoDB, I bridge the gap between complex backend logic and 
              intuitive frontend experiences. I believe that code is a form of craftsmanship—one that requires 
              precision, creativity, and a constant thirst for learning.
            </p>
          </div>
          
          <div className="mt-12 space-y-6">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.text }}>Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg border"
                  style={{ 
                    backgroundColor: colors.cardBg,
                    borderColor: colors.border
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <skill.icon size={24} style={{ color: colors.text }} />
                    <h4 className="text-lg font-medium" style={{ color: colors.text }}>{skill.name}</h4>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between text-sm mb-2">
                      <span style={{ color: colors.textSecondary }}>Proficiency</span>
                      <span style={{ color: colors.text }}>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors.border }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: colors.accent }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
