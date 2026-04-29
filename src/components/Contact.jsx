import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
    { icon: Github, label: "GitHub", value: "github.com/yourprofile", href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section className="h-auto w-screen flex flex-col justify-center items-center max-w-7xl mx-auto px-8 py-20" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Let's Work <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Together</span>
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full mx-auto mt-6"></div>
        <p className="text-slate-400 mt-6 text-lg">Have a project in mind? I'd love to hear from you.</p>
      </motion.div>

      <div className="w-full grid md:grid-cols-3 gap-8 mb-16">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.a
              key={index}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-sky-500/5 border border-sky-500/30 hover:border-sky-500/60 transition-all group"
            >
              <Icon className="text-sky-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="font-semibold text-white mb-1">{method.label}</h3>
              <p className="text-slate-400 text-sm group-hover:text-sky-400 transition-colors flex items-center gap-2">
                {method.value}
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
            </motion.a>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6 p-10 rounded-3xl bg-gradient-to-br from-sky-500/5 to-blue-500/5 border border-sky-500/20 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-slate-300 font-medium ml-1">Full Name *</label>
              <input
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-sky-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:bg-white/10 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-300 font-medium ml-1">Email Address *</label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-sky-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:bg-white/10 transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-300 font-medium ml-1">Message *</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project or inquiry..."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-sky-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:bg-white/10 transition-all resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all"
          >
            <Send size={18} />
            {submitted ? "Message Sent! ✓" : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <p className="text-slate-400 mb-6">Connect with me on social media</p>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ y: -4 }}
                className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:bg-sky-500/20 hover:border-sky-500/60 transition-all"
                aria-label={link.label}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      <footer className="mt-20 pt-8 border-t border-sky-500/20 text-center text-slate-500 text-sm w-full">
        <p>© {new Date().getFullYear()} Aarav Dev. All rights reserved. | Crafted with care using React, Three.js & Modern Web Technologies</p>
      </footer>
    </section>
  );
};
