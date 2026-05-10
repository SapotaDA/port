import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import HeroCanvas from "../canvas/HeroCanvas";

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen mx-auto overflow-hidden flex items-center" style={{ backgroundColor: '#0a0a0f' }}>
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Ambient gradient overlays */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)'
      }} />
      <div className="absolute inset-0 z-[1]" style={{
        background: 'radial-gradient(ellipse at 80% 30%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)'
      }} />

      <div className="relative max-w-6xl mx-auto px-6 z-10 pt-24">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="status-badge" style={{ 
              background: 'rgba(34, 197, 94, 0.1)', 
              color: '#22c55e',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span style={{ color: '#e4e4e7' }}>Hi, I'm </span>
            <span className="gradient-text">Aarav</span>
            <br />
            <span className="gradient-text">Uniyal</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="section-divider" />
            <p className="font-display text-lg md:text-xl font-medium" style={{ color: '#818cf8' }}>
              Full-Stack Developer & DevOps Intern
            </p>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ color: '#a1a1aa' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Final-year BCA student with hands-on experience building full-stack 
            web applications using <span style={{ color: '#e4e4e7' }}>React, Node.js, and AWS</span>. 
            Passionate about creating scalable, user-focused products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
              View My Work
              <ArrowDown size={18} />
            </a>
            <a href="#contact" className="btn-outline" style={{ textDecoration: 'none' }}>
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-4 mt-10"
          >
            <a 
              href="https://github.com/SapotaDA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border transition-all duration-300"
              style={{ borderColor: '#27272a', color: '#a1a1aa' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.color = '#818cf8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#27272a'; e.currentTarget.style.color = '#a1a1aa'; }}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/aaravuniyal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border transition-all duration-300"
              style={{ borderColor: '#27272a', color: '#a1a1aa' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.color = '#818cf8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#27272a'; e.currentTarget.style.color = '#a1a1aa'; }}
            >
              <Linkedin size={20} />
            </a>
            <span className="text-sm ml-2" style={{ color: '#71717a' }}>Delhi, India</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[28px] h-[46px] rounded-full border-2 flex justify-center items-start p-2" style={{ borderColor: '#3f3f46' }}>
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#6366f1' }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};
