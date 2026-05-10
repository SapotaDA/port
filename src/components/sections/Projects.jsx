import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "Cricket Ground Booking Platform",
    period: "Aug 2025 – Nov 2025",
    description: "A full-stack web platform that enables users to book cricket grounds with real-time availability, calendar scheduling, and automated booking management. Features a database-driven reservation system with real-time slot availability.",
    highlights: [
      "Developed a full-stack sports facility booking system with real-time slot availability and database-driven reservations.",
      "Implemented calendar integration and backend APIs using Express.js and PostgreSQL with Drizzle ORM for efficient data handling.",
      "Built responsive UI with React and Tailwind CSS to streamline booking workflows and improve user experience."
    ],
    tech: ["TypeScript", "JavaScript", "React", "Express.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    github: "https://github.com/SapotaDA",
    live: null
  },
  {
    title: "TaskiFlow Project",
    period: "Nov 2025 – Feb 2026",
    description: "A task management application designed to streamline task creation, tracking, and notifications. Features secure user authentication, email notifications, and optimized security configurations for production deployment.",
    highlights: [
      "Built a full-stack task management system using the MERN stack (MongoDB, Express.js, React, Node.js) with a responsive UI powered by Vite and TailwindCSS.",
      "Implemented secure user authentication with JWT, password hashing using bcrypt, and email notifications via Nodemailer for password resets and task updates.",
      "Deployed on Vercel with optimized configurations, including security features like Helmet, rate-limiting, and input sanitization for production readiness."
    ],
    tech: ["MERN Stack", "Vite", "TailwindCSS", "MongoDB", "JWT", "Nodemailer", "Helmet"],
    github: "https://github.com/SapotaDA",
    live: null
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6" style={{ backgroundColor: '#12121a' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#818cf8' }}>
            What I've Built
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: '#e4e4e7' }}>
            Projects
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="card p-8 group">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-1" style={{ color: '#e4e4e7' }}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm mb-3" style={{ color: '#71717a' }}>
                      <Calendar size={14} />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mb-4 md:mb-0">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                        style={{ 
                          color: '#a1a1aa',
                          border: '1px solid #27272a'
                        }}
                        whileHover={{ scale: 1.03 }}
                        onMouseEnter={(e) => { 
                          e.currentTarget.style.borderColor = '#6366f1'; 
                          e.currentTarget.style.color = '#818cf8';
                          e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                        }}
                        onMouseLeave={(e) => { 
                          e.currentTarget.style.borderColor = '#27272a'; 
                          e.currentTarget.style.color = '#a1a1aa';
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <Github size={16} />
                        GitHub
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                        style={{ 
                          color: '#a1a1aa',
                          border: '1px solid #27272a'
                        }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 leading-relaxed" style={{ color: '#a1a1aa' }}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={hIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: hIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#6366f1' }}
                      />
                      <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/SapotaDA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ textDecoration: 'none' }}
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
