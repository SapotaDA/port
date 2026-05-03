import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured MERN e-commerce solution with real-time inventory management, secure payment processing via Stripe, and comprehensive admin dashboard. Optimized for performance with 95+ Lighthouse score.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "#",
    link: "#",
  },
  {
    title: "AI-Powered Image Generator",
    description: "Web application leveraging OpenAI's DALL-E API for intelligent image generation. Features include prompt optimization, batch processing, and cloud storage integration with Cloudinary.",
    tech: ["React", "Express", "OpenAI API", "Cloudinary", "Material-UI"],
    github: "#",
    link: "#",
  },
  {
    title: "3D Interactive Portfolio",
    description: "Immersive 3D web experience showcasing projects in an interactive environment. Built with modern web technologies for smooth animations and exceptional performance across devices.",
    tech: ["React Three Fiber", "Three.js", "Framer Motion", "WebGL"],
    github: "#",
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
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
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
