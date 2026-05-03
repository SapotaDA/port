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
      title: "Web Applications",
      description: "Building scalable web applications with modern frameworks and best practices"
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
              I'm a passionate MERN stack developer who loves creating modern, scalable web applications. With expertise in React, Node.js, and MongoDB, I specialize in building full-stack applications that deliver exceptional user experiences and follow industry best practices.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in web development is driven by a commitment to clean code and practical solutions. I believe in creating maintainable applications that not only function perfectly but also provide excellent user experiences through thoughtful design and efficient architecture.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {['React & Next.js', 'Node.js & Express', 'MongoDB & Mongoose', 'REST APIs'].map((item, index) => (
                <span key={index} className="text-sm text-slate-300 bg-slate-950/70 border border-sky-500/10 rounded-2xl px-4 py-3">
                  {item}
                </span>
              ))}
            </div>
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
