import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured MERN e-commerce solution with real-time inventory management, secure payment processing via Stripe, and comprehensive admin dashboard. Optimized for performance with 95+ Lighthouse score.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "#",
    link: "#",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "AI-Powered Image Generator",
    description: "Web application leveraging OpenAI's DALL-E API for intelligent image generation. Features include prompt optimization, batch processing, and cloud storage integration with Cloudinary.",
    tech: ["React", "Express", "OpenAI API", "Cloudinary", "Material-UI"],
    github: "#",
    link: "#",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    title: "3D Interactive Portfolio",
    description: "Immersive 3D web experience showcasing projects in an interactive environment. Built with modern web technologies for smooth animations and exceptional performance across devices.",
    tech: ["React Three Fiber", "Three.js", "Framer Motion", "WebGL"],
    github: "#",
    link: "#",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
];

export const Projects = () => {
  return (
    <section className="h-auto w-screen flex flex-col justify-center max-w-7xl mx-auto px-8 py-20" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Featured <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full"></div>
        <p className="text-slate-400 mt-6 text-lg">Showcasing my recent work and technical expertise</p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className={`group relative rounded-2xl border border-sky-500/20 bg-gradient-to-br ${project.color} backdrop-blur-sm p-8 flex flex-col h-full hover:border-sky-500/50 transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-sky-300 transition-colors">{project.title}</h3>
              <p className="text-slate-300 mb-6 text-base leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-medium">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-sky-500/20">
                <a href={project.github} className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group/link">
                  <Github size={18} />
                  <span className="text-sm font-medium">Code</span>
                </a>
                <a href={project.link} className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group/link ml-auto">
                  <span className="text-sm font-medium">Live</span>
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
