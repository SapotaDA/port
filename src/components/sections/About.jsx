import { motion } from "framer-motion";
import { Target, Rocket, Code, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web applications with React, Node.js, Express.js, and modern databases."
  },
  {
    icon: Rocket,
    title: "DevOps & Cloud",
    description: "Hands-on CI/CD pipeline experience with AWS services, Docker, and automated deployment workflows."
  },
  {
    icon: Target,
    title: "Production-Ready Products",
    description: "Delivered two production-ready projects with JWT authentication, RESTful APIs, and real-time features."
  },
  {
    icon: Users,
    title: "Open Source Contributor",
    description: "Actively contributing to open-source projects and staying current with modern web technologies."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#818cf8' }}>
            Introduction
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: '#e4e4e7' }}>
            About Me
          </h2>
          <div className="section-divider mb-8" />
          
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed" style={{ color: '#a1a1aa' }}>
            <p>
              I'm a <span style={{ color: '#e4e4e7' }}>MERN Stack Full-Stack Developer</span> building production-ready web applications.
              I specialize in <span style={{ color: '#e4e4e7' }}>React</span> for the UI, <span style={{ color: '#e4e4e7' }}>Node.js/Express</span> for APIs,
              and <span style={{ color: '#e4e4e7' }}>MongoDB/PostgreSQL</span> for data modeling.
            </p>
            
            <p>
              I’ve delivered multiple full-stack projects with <span style={{ color: '#e4e4e7' }}>JWT authentication</span>,
              RESTful APIs, and real-time user experiences. During my internship, I also worked on <span style={{ color: '#e4e4e7' }}>CI/CD on AWS</span>,
              reducing deployment effort by ~40% and improving release consistency.
            </p>
            
            <p>
              I focus on building <span style={{ color: '#818cf8' }}>scalable</span>, <span style={{ color: '#818cf8' }}>secure</span>,
              and <span style={{ color: '#818cf8' }}>user-focused</span> applications—clean architecture, reliable APIs, and smooth frontend performance.
            </p>
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="card p-6"
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
                  <item.icon size={22} style={{ color: '#818cf8' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#e4e4e7' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
