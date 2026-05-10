import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    title: "Frontend Development using React – Board Infinity",
    platform: "Coursera",
    date: "Oct 2025",
    credentialId: "SOAT74O0JE39",
    link: "https://coursera.org/verify/SOAT74O0JE39"
  },
  {
    title: "CI/CD Pipeline with AWS Native",
    platform: "TCS iON",
    date: "Nov 2025 – Feb 2026",
    credentialId: "1252-28910953-1016",
    link: null
  },
  {
    title: "Interactive Statistical Data Visualization 101",
    platform: "Coursera",
    date: "Apr 2025",
    credentialId: "HJUCJHDYBVOX",
    link: "https://coursera.org/verify/HJUCJHDYBVOX"
  },
  {
    title: "Strategic Leadership and Management Capstone",
    platform: "University of Illinois Urbana-Champaign",
    date: "Apr 2025",
    credentialId: "DM4L8URG9K7",
    link: "https://coursera.org/verify/DM4L8URG9K7"
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#818cf8' }}>
            Continuous Learning
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: '#e4e4e7' }}>
            Certifications & Achievements
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="card p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="p-3 rounded-xl flex-shrink-0"
                  style={{ background: 'rgba(99, 102, 241, 0.1)' }}
                >
                  <Award size={22} style={{ color: '#818cf8' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1 leading-snug" style={{ color: '#e4e4e7' }}>
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium mb-2" style={{ color: '#818cf8' }}>
                    {cert.platform}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: '#71717a' }}>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{cert.date}</span>
                    </div>
                    {cert.credentialId && (
                      <span>ID: {cert.credentialId}</span>
                    )}
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs mt-3 transition-colors duration-200"
                      style={{ color: '#6366f1' }}
                      onMouseEnter={(e) => e.target.style.color = '#818cf8'}
                      onMouseLeave={(e) => e.target.style.color = '#6366f1'}
                    >
                      <ExternalLink size={12} />
                      Verify Credential
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
