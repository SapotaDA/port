import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Heart, Eye, ArrowRight, Code2 } from "lucide-react";
import { useState } from "react";
import { useTheme } from '../../contexts/ThemeContext';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured MERN e-commerce solution with real-time inventory management, secure payment processing via Stripe, and comprehensive admin dashboard. Optimized for performance with 95+ Lighthouse score.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/SapotaDA/ecommerce-platform",
    link: "https://ecommerce-demo.vercel.app",
    likes: 42,
    views: 1234,
    featured: true
  },
  {
    title: "AI-Powered Image Generator",
    description: "Web application leveraging OpenAI's DALL-E API for intelligent image generation. Features include prompt optimization, batch processing, and cloud storage integration with Cloudinary.",
    tech: ["React", "Express", "OpenAI API", "Cloudinary", "Material-UI"],
    github: "https://github.com/SapotaDA/ai-image-generator",
    link: "https://ai-image-generator.vercel.app",
    likes: 38,
    views: 892,
    featured: false
  },
  {
    title: "3D Interactive Portfolio",
    description: "Immersive 3D web experience showcasing projects in an interactive environment. Built with modern web technologies for smooth animations and exceptional performance across devices.",
    tech: ["React Three Fiber", "Three.js", "Framer Motion", "WebGL"],
    github: "https://github.com/SapotaDA/3d-portfolio",
    link: "https://3d-portfolio.vercel.app",
    likes: 56,
    views: 2156,
    featured: false
  },
  {
    title: "Real-Time Chat Application",
    description: "Full-stack chat application with WebSocket integration, real-time messaging, user authentication, and message history. Features emoji reactions and typing indicators.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/SapotaDA/chat-application",
    link: "https://chat-app.vercel.app",
    likes: 67,
    views: 1543,
    featured: false
  }
];

export const Projects = () => {
  const { colors } = useTheme();
  const [likedProjects, setLikedProjects] = useState(new Set());
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState('all');

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

  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects;

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
          <p className="text-xl mb-8" style={{ color: colors.textSecondary }}>Explore my latest work and creative solutions</p>
          
          <div className="flex justify-center gap-4 mb-12">
            <motion.button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'all' ? 'ring-2 ring-offset-2' : ''
              }`}
              style={{
                backgroundColor: filter === 'all' ? colors.accent : colors.cardBg,
                color: filter === 'all' ? colors.background : colors.textSecondary,
                borderColor: colors.border,
                ringColor: filter === 'all' ? colors.accent : 'transparent',
                ringOffsetColor: colors.background
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Projects
            </motion.button>
            <motion.button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'featured' ? 'ring-2 ring-offset-2' : ''
              }`}
              style={{
                backgroundColor: filter === 'featured' ? colors.accent : colors.cardBg,
                color: filter === 'featured' ? colors.background : colors.textSecondary,
                borderColor: colors.border,
                ringColor: filter === 'featured' ? colors.accent : 'transparent',
                ringOffsetColor: colors.background
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star size={16} className="mr-2" />
              Featured
            </motion.button>
          </div>
        </motion.div>
        
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
                className="group"
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <motion.div
                  className="px-8 py-6 rounded-xl shadow-lg border relative overflow-hidden"
                  style={{ 
                    backgroundColor: colors.cardBg,
                    borderColor: colors.border
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: colors.text === '#000000' 
                      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                      : '0 20px 25px -5px rgba(255, 255, 255, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: colors.accent,
                        color: colors.background
                      }}
                    >
                      <Star size={12} className="mr-1" />
                      Featured
                    </motion.div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2" style={{ color: colors.text }}>{project.title}</h3>
                        <div className="flex items-center gap-4 text-sm" style={{ color: colors.textSecondary }}>
                          <div className="flex items-center gap-1">
                            <Eye size={14} />
                            <span>{project.views.toLocaleString()}</span>
                          </div>
                          <motion.button
                            onClick={() => toggleLike(index)}
                            className="flex items-center gap-1"
                            style={{ color: likedProjects.has(index) ? '#ef4444' : colors.textSecondary }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart 
                              size={14} 
                              className={likedProjects.has(index) ? 'fill-current' : ''}
                            />
                            <span>{project.likes + (likedProjects.has(index) ? 1 : 0)}</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                    
                    <p className="leading-relaxed mb-6" style={{ color: colors.textSecondary }}>{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ 
                            backgroundColor: colors.cardBg,
                            color: colors.textSecondary,
                            border: `1px solid ${colors.border}`
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: colors.accent,
                            color: colors.background
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border"
                          style={{ 
                            color: colors.textSecondary,
                            borderColor: colors.border
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: colors.accent,
                            color: colors.background,
                            borderColor: colors.accent
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Github size={18} />
                          <span>Code</span>
                        </motion.a>
                        <motion.a
                          href={project.link}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border"
                          style={{ 
                            color: colors.textSecondary,
                            borderColor: colors.border
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: colors.accent,
                            color: colors.background,
                            borderColor: colors.accent
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </motion.a>
                      </div>
                      
                      {hoveredProject === project.title && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="text-sm"
                          style={{ color: colors.accent }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
            <span>Interested in working together?</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
