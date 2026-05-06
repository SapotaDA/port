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
    <section id="about" className="py-20 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: colors.text }}>About Me</h2>
          
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
            <p>
              I am a passionate MERN stack developer who loves creating modern, scalable web applications. 
              With expertise in React, Node.js, and MongoDB, I specialize in building full-stack applications 
              that deliver exceptional user experiences while following industry best practices.
            </p>
            
            <p>
              My journey in web development is driven by a commitment to clean code and practical solutions. 
              I believe in creating maintainable applications that not only function perfectly but also provide 
              excellent user experiences through thoughtful design and efficient architecture.
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
