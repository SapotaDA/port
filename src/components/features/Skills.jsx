import { motion } from "framer-motion";
import { useTheme } from '../../contexts/ThemeContext';
import { Code, Database, Globe, Server, Cpu, Layers, Zap } from 'lucide-react';

export const Skills = () => {
  const { colors } = useTheme();
  
  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 82 }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: Cpu,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vite", level: 88 }
      ]
    },
    {
      category: "Design & UI",
      icon: Layers,
      skills: [
        { name: "Framer Motion", level: 82 },
        { name: "Figma", level: 75 },
        { name: "Responsive Design", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text }}>Technical Skills</h2>
          <p className="text-xl mb-12" style={{ color: colors.textSecondary }}>
            Comprehensive expertise across modern web development technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-lg border"
              style={{ 
                backgroundColor: colors.cardBg,
                borderColor: colors.border
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 rounded-full"
                  style={{ backgroundColor: colors.accent }}
                >
                  <category.icon size={24} style={{ color: colors.background }} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>
                    {category.category}
                  </h3>
                  <p className="text-sm" style={{ color: colors.textSecondary }}>
                    {category.skills.length} technologies
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-medium mb-2" style={{ color: colors.text }}>
                        {skill.name}
                      </h4>
                      <div className="text-sm" style={{ color: colors.textSecondary }}>
                        Proficiency: {skill.level}%
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div 
                          className="w-full h-2 rounded-full overflow-hidden" 
                          style={{ backgroundColor: colors.border }}
                        >
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
                      <div className="text-lg font-bold" style={{ color: colors.text }}>
                        {skill.level}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium"
            style={{
              backgroundColor: colors.accent,
              color: colors.background
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap size={20} className="mr-2" />
            Ready to bring your ideas to life!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
