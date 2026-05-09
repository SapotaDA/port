import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useTheme } from '../../contexts/ThemeContext';

export const Contact = () => {
  const { colors } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Formspree integration
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
      }
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aaravuniyal3@gmail.com',
      href: 'mailto:aaravuniyal3@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91XXXXXXXXXX'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/SapotaDA'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-[#00fff2] neon-text uppercase tracking-tighter">Connect the Future</h2>
          <div className="w-24 h-1 bg-[#ff00ff] mx-auto mt-4 shadow-[0_0_10px_#ff00ff]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="p-8 rounded-2xl shadow-xl border"
              style={{ 
                backgroundColor: colors.cardBg,
                borderColor: colors.border
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Send Message
              </h3>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        required
                        className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                        style={{
                          backgroundColor: colors.background,
                          borderColor: focused === 'name' ? colors.accent : colors.border,
                          color: colors.text,
                          outline: 'none'
                        }}
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        required
                        className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                        style={{
                          backgroundColor: colors.background,
                          borderColor: focused === 'email' ? colors.accent : colors.border,
                          color: colors.text,
                          outline: 'none'
                        }}
                        placeholder="john@example.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused('')}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none"
                        style={{
                          backgroundColor: colors.background,
                          borderColor: focused === 'message' ? colors.accent : colors.border,
                          color: colors.text,
                          outline: 'none'
                        }}
                        placeholder="Tell me about your project..."
                      />
                    </motion.div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: loading ? colors.textSecondary : colors.accent,
                      color: colors.background,
                      cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                    whileHover={{ scale: loading ? 1 : 1.05 }}
                    whileTap={{ scale: loading ? 1 : 0.95 }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-t-2 border-r-2 rounded-full"
                          style={{
                            borderTopColor: colors.background,
                            borderRightColor: 'transparent'
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: colors.text }}>
                    Message Sent Successfully!
                  </h4>
                  <p style={{ color: colors.textSecondary }}>
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <motion.div
              className="p-8 rounded-2xl shadow-xl border"
              style={{ 
                backgroundColor: colors.cardBg,
                borderColor: colors.border
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300"
                    style={{ 
                      color: colors.textSecondary
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      color: colors.accent,
                      backgroundColor: colors.background
                    }}
                  >
                    <info.icon size={20} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: colors.text }}>
                        {info.label}
                      </div>
                      <div className="text-sm">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="p-8 rounded-2xl shadow-xl border"
              style={{ 
                backgroundColor: colors.cardBg,
                borderColor: colors.border
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300"
                    style={{ 
                      color: colors.textSecondary
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      color: colors.accent,
                      backgroundColor: colors.background
                    }}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
