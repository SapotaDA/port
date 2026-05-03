import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Heart, Eye } from "lucide-react";
import { useState } from "react";

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
    <section id="projects" className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 15 + Math.random() * 25,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600">Here are a few of my projects.</p>
        </motion.div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -5 }}
            >
              {/* Hover effect overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={hoveredProject === index ? { opacity: 1 } : { opacity: 0 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{project.views}</span>
                    </div>
                    <motion.button
                      onClick={() => toggleLike(index)}
                      className="flex items-center gap-1 hover:text-red-500 transition-colors"
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
                
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={18} className="group-hover:rotate-12 transition-transform" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
              
              {/* Floating elements on hover */}
              <AnimatePresence>
                {hoveredProject === index && (
                  <>
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Star className="w-4 h-4 text-blue-500 m-auto" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-4 left-4 w-6 h-6 bg-purple-500/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ delay: 0.2 }}
                    />
                    <motion.div
                      className="absolute top-1/2 right-8 w-4 h-4 bg-green-500/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ delay: 0.3 }}
                    />
                  </>
                )}
              </AnimatePresence>
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
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
            />
            <span className="text-gray-600">More projects coming soon!</span>
            <motion.div
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
