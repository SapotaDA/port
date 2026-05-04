import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Heart, Eye } from "lucide-react";
import { useState } from "react";
import { useTheme } from '../contexts/ThemeContext';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured MERN e-commerce solution with real-time inventory management, secure payment processing via Stripe, and comprehensive admin dashboard. Optimized for performance with 95+ Lighthouse score.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "#",
    link: "#",
    likes: 42,
    views: 1234
  },
  {
    title: "AI-Powered Image Generator",
    description: "Web application leveraging OpenAI's DALL-E API for intelligent image generation. Features include prompt optimization, batch processing, and cloud storage integration with Cloudinary.",
    tech: ["React", "Express", "OpenAI API", "Cloudinary", "Material-UI"],
    github: "#",
    link: "#",
    likes: 38,
    views: 892
  },
  {
    title: "3D Interactive Portfolio",
    description: "Immersive 3D web experience showcasing projects in an interactive environment. Built with modern web technologies for smooth animations and exceptional performance across devices.",
    tech: ["React Three Fiber", "Three.js", "Framer Motion", "WebGL"],
    github: "#",
    link: "#",
    likes: 56,
    views: 2156
  },
];

export const Projects = () => {
  const { colors } = useTheme();
  const [likedProjects, setLikedProjects] = useState(new Set());
  const [hoveredProject, setHoveredProject] = useState(null);

  const toggleLike = (projectId) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  return (
    <section id="projects" className="py-20 px-6" style={{ backgroundColor: colors.background }}>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text }}>Projects</h2>
          <p className="text-xl mb-4" style={{ color: colors.textSecondary }}>Here are a few of my projects.</p>
        </motion.div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-8 py-3 rounded-lg shadow-sm border relative overflow-hidden group"
              style={{ 
                backgroundColor: colors.cardBg,
                borderColor: colors.border
              }}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm" style={{ color: colors.textSecondary }}>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{project.views}</span>
                    </div>
                    <motion.button
                      onClick={() => toggleLike(index)}
                      className="flex items-center gap-1"
                      style={{ color: colors.textSecondary }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart 
                        size={14} 
                        className={likedProjects.has(index) ? 'fill-red-500 text-red-500' : ''}
                      />
                      <span>{project.likes + (likedProjects.has(index) ? 1 : 0)}</span>
                    </motion.button>
                  </div>
                </div>
                
                <p className="leading-relaxed" style={{ color: colors.textSecondary }}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ 
                        backgroundColor: colors.cardBg,
                        color: colors.textSecondary,
                        border: `1px solid ${colors.border}`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="inline-flex items-center gap-2"
                    style={{ color: colors.textSecondary }}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2"
                    style={{ color: colors.textSecondary }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Interactive footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200">
            <span className="text-gray-600">More projects coming soon!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
