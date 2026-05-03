import { motion } from "framer-motion";
import { Code, Zap, Globe, Smartphone, Database, Palette, Rocket, CheckCircle, Mail, ArrowRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Full-stack web applications built with modern technologies like React, Node.js, and MongoDB. Tailored solutions for your specific business needs.",
      features: ["React/Next.js Development", "Node.js Backend", "Database Design", "API Development"],
      timeline: "2-4 weeks",
      popular: true
    },
    {
      icon: Globe,
      title: "E-Commerce Platforms",
      description: "Complete online stores with payment processing, inventory management, and admin dashboards. Scalable solutions for growing businesses.",
      features: ["Payment Integration", "Product Management", "Admin Dashboard", "Shopping Cart"],
      timeline: "3-6 weeks",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Mobile-first design that works perfectly on all devices. Modern UI/UX with smooth animations and excellent user experience.",
      features: ["Mobile-First Design", "Cross-Platform", "Modern UI/UX", "Performance Optimization"],
      timeline: "1-3 weeks",
      popular: false
    },
    {
      icon: Database,
      title: "API Development",
      description: "RESTful APIs and backend services for your applications. Secure, scalable, and well-documented solutions.",
      features: ["REST APIs", "GraphQL", "Authentication", "Database Integration"],
      timeline: "2-3 weeks",
      popular: false
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users. Modern design principles with accessibility and performance in mind.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      timeline: "1-2 weeks",
      popular: false
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Speed up your existing website with optimization techniques. Better performance, higher conversions, and improved SEO.",
      features: ["Speed Optimization", "SEO Enhancement", "Code Auditing", "Performance Monitoring"],
      timeline: "1-2 weeks",
      popular: false
    }
  ];

  const process = [
    { step: "1", title: "Consultation", description: "We discuss your project requirements and goals" },
    { step: "2", title: "Planning", description: "Detailed project plan with timeline and deliverables" },
    { step: "3", title: "Development", description: "Agile development with regular updates and feedback" },
    { step: "4", title: "Delivery", description: "Testing, deployment, and post-launch support" }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", 
    "Tailwind CSS", "Three.js", "WebGL", "Chrome Extensions", "REST APIs", "GraphQL"
  ];

  const handleContact = () => {
    const subject = encodeURIComponent("Web Development Services Inquiry");
    const body = encodeURIComponent("Hi Aarav, I'm interested in your web development services. Can we discuss my project?");
    window.location.href = `mailto:aaravuniyal3@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="min-h-screen w-screen flex items-center justify-center max-w-7xl mx-auto px-4 md:px-8 relative py-16 md:py-0" id="services">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Web Development <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg">Professional web development services tailored to your needs</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative p-6 rounded-[2rem] border transition-all duration-300 ${
                  service.popular 
                    ? 'border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent' 
                    : 'border-blue-500/10 bg-black/90 hover:border-blue-500/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${service.popular ? 'bg-blue-500/20' : 'bg-blue-500/10'}`}>
                    <Icon className={service.popular ? 'text-blue-400' : 'text-blue-400'} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>

                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle size={14} className={service.popular ? 'text-blue-400' : 'text-blue-400'} />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Zap size={12} />
                    {service.timeline}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContact}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      service.popular 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-[0_0_20px_rgba(255,0,110,0.4)]'
                        : 'bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border border-sky-500/30'
                    }`}
                  >
                    Get Quote
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 rounded-[2rem] bg-gradient-to-r from-sky-500/5 to-blue-500/5 border border-sky-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-sm hover:bg-sky-500/20 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center p-8 rounded-[2rem] bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Your Dream Project?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together. I offer competitive pricing and deliver high-quality results.
          </p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContact}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all hover:shadow-[0_0_30px_rgba(255,0,110,0.6)] duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Get Started
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-sky-500/50 text-sky-400 font-semibold rounded-lg hover:bg-sky-500/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
