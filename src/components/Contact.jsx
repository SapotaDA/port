import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Formspree integration for automatic email sending
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);
      formDataObj.append('_subject', `Portfolio Contact from ${formData.name}`);
      formDataObj.append('_replyto', formData.email);

      const response = await fetch('https://formspree.io/f/xblrgvnl', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Fallback to mailto if form submission fails
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Message:\n${formData.message}`
      );
      window.location.href = `mailto:aaravuniyal3@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: "aaravuniyal3@gmail.com", href: "mailto:aaravuniyal3@gmail.com" },
    { icon: Github, label: "GitHub", value: "github.com/SapotaDA", href: "https://github.com/SapotaDA" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aarav-uniyal-24943222a", href: "https://www.linkedin.com/in/aarav-uniyal-24943222a/" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/SapotaDA", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aarav-uniyal-24943222a/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section className="w-screen flex flex-col justify-center items-center max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20" id="contact">
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

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
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
              className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/5 to-sky-500/3 border border-sky-500/20 hover:border-sky-500/40 transition-all group"
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
        <div className="mb-8 text-center">
          <p className="text-slate-400 text-base md:text-lg">Let's build something unforgettable together.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {['Launch-ready products', 'Interactive dashboards', 'Brand experiences', 'High-performance apps'].map((item, index) => (
              <span key={index} className="text-xs md:text-sm px-3 py-1 rounded-full bg-black/30 border border-sky-500/10 text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 p-6 md:p-10 rounded-[2rem] bg-gradient-to-br from-sky-500/3 to-blue-500/3 border border-sky-500/15 backdrop-blur-sm w-full shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="text-sm text-slate-300 font-medium ml-1">Full Name *</label>
              <input
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/30 border border-sky-500/15 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:bg-black/40 transition-all text-sm md:text-base"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs md:text-sm text-slate-300 font-medium ml-1">Email Address *</label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black/30 border border-sky-500/15 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:bg-black/40 transition-all text-sm md:text-base"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-300 font-medium ml-1">Message *</label>
            <textarea
              rows="4"
              placeholder="Tell me about your project or inquiry..."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-sky-500/20 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-white placeholder-slate-500 outline-none focus:border-sky-500 focus:bg-white/10 transition-all resize-none text-sm md:text-base"
            />
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}
          
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold py-3 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} className={loading ? "animate-spin" : ""} />
            {loading ? "Sending..." : submitted ? "Message Sent! ✓" : "Send Message"}
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
                className="p-3 rounded-lg bg-sky-500/5 border border-sky-500/20 text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/40 transition-all"
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
