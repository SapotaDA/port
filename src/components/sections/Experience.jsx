import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "DevOps Intern",
    company: "TCS iON (Tata Consultancy Services)",
    location: "Bangalore, India",
    period: "Nov 2025 – Feb 2026",
    description: "Worked on automating deployment workflows and building CI/CD pipelines using AWS services for continuous application delivery.",
    achievements: [
      "Designed and implemented an automated CI/CD pipeline using AWS CodeCommit, CodePipeline, CodeDeploy, and Amazon EC2 for continuous application delivery.",
      "Configured IAM roles, AWS CLI, and Apache web server to enable secure and structured deployment workflows.",
      "Automated build and deployment processes, reducing manual intervention and improving release consistency.",
      "Monitored pipeline execution and resolved deployment issues through log analysis and configuration updates."
    ],
    tech: ["AWS", "CodePipeline", "CodeDeploy", "EC2", "IAM", "Apache", "CI/CD"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#818cf8' }}>
            Where I've Worked
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: '#e4e4e7' }}>
            Experience
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block">
                  <div className="timeline-dot mt-2" />
                </div>

                {/* Experience Card */}
                <div className="flex-1 card p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold mb-1" style={{ color: '#e4e4e7' }}>
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium mb-3" style={{ color: '#818cf8' }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 md:mb-0 md:text-right">
                      <div className="flex items-center gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: '#6366f1' }}
                        />
                        <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
