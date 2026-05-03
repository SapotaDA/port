import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              I am a passionate MERN stack developer who loves creating modern, scalable web applications. 
              With expertise in React, Node.js, and MongoDB, I specialize in building full-stack applications 
              that deliver exceptional user experiences while following industry best practices.
            </p>
            
            <p>
              My journey in web development is driven by a commitment to clean code and practical solutions. 
              I believe in creating maintainable applications that not only function perfectly but also provide 
              excellent user experiences through thoughtful design and efficient architecture.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React & Next.js', 'Node.js & Express', 'MongoDB & Mongoose', 'REST APIs'].map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-center text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
