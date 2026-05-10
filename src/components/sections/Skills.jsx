import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Drizzle ORM"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS)", "Docker", "Git", "CI/CD", "CodePipeline"]
  },
  {
    title: "Tools",
    skills: ["Postman", "Vite", "Nodemailer", "GitHub"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6" style={{ backgroundColor: '#12121a' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#818cf8' }}>
            What I Work With
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: '#e4e4e7' }}>
            Technical Skills
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-lg font-semibold mb-4" style={{ color: '#e4e4e7' }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: catIndex * 0.05 + skillIndex * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
