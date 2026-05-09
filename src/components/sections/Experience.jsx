import { motion } from "framer-motion";
import { useTheme } from '../../contexts/ThemeContext';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

export const Experience = () => {
  const { colors } = useTheme();
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      period: "Jan 2023 - Present",
      description: "Leading development of scalable web applications using MERN stack. Implemented RESTful APIs, real-time features, and optimized database performance.",
      achievements: ["Reduced page load time by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Mumbai, India",
      period: "Jun 2022 - Dec 2022",
      description: "Developed responsive web applications and landing pages. Collaborated with design team to implement pixel-perfect UI components and improve user engagement.",
      achievements: ["Increased conversion rates by 25%", "Improved accessibility scores", "Delivered 10+ projects on time"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      location: "Pune, India",
      period: "Aug 2021 - May 2022",
      description: "Built and maintained multiple client websites using React and modern CSS. Gained experience in agile development methodologies and version control.",
      achievements: ["Completed 15+ client projects", "Received 'Rising Star' award", "Contributed to 5+ open-source projects"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text }}>Chapters of Growth</h2>
          <p className="text-xl" style={{ color: colors.textSecondary }}>
            A chronological tale of challenges met and skills mastered.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: colors.border }} />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-4 h-4 rounded-full border-2" style={{ 
                    backgroundColor: colors.background,
                    borderColor: colors.accent 
                  }} />
                  <div className="absolute inset-0 w-2 h-2 rounded-full" style={{ 
                    backgroundColor: colors.accent 
                  }} />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  className="flex-1 p-6 rounded-xl shadow-lg border"
                  style={{ 
                    backgroundColor: colors.cardBg,
                    borderColor: colors.border
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2" style={{ color: colors.text }}>
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm" style={{ color: colors.textSecondary }}>
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: colors.textSecondary }}>
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <p className="leading-relaxed mb-6" style={{ color: colors.textSecondary }}>
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: colors.accent,
                            color: colors.background
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Award size={14} className="mr-1" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium"
            style={{
              backgroundColor: colors.accent,
              color: colors.background
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's discuss your next project</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
