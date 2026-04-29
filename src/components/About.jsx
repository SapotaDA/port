import { motion } from "framer-motion";
import { Code2, Zap, Globe } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building robust applications from database to user interface with modern tech stacks"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimizing for speed, accessibility, and delivering exceptional user experiences"
    },
    {
      icon: Globe,
      title: "Interactive Experiences",
      description: "Creating immersive 3D web experiences with Three.js and WebGL technologies"
    }
  ];

  return (
    <section className="min-h-screen w-screen flex items-center justify-center max-w-7xl mx-auto px-4 md:px-8 relative py-16 md:py-0" id="about">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm a full-stack developer passionate about creating elegant solutions to complex problems. With expertise in modern web technologies, I specialize in building scalable applications that prioritize user experience and performance.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My approach combines technical excellence with creative thinking. I believe in writing clean, maintainable code and continuously learning emerging technologies. Every project is an opportunity to push boundaries and deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-sky-500/5 border border-sky-500/20 hover:border-sky-500/40 transition-all"
                >
                  <Icon className="text-sky-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
