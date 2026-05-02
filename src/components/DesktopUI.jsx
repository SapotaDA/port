import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, X, Terminal, Cpu, Layers, Globe } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Window = ({ title, children, onClose, isOpen, icon: Icon }) => {
    const scale = useMotionValue(0.8);
    const rotate = useMotionValue(-5);
    
    const springConfig = { damping: 20, stiffness: 300 };
    const scaleSpring = useSpring(scale, springConfig);
    const rotateSpring = useSpring(rotate, springConfig);
    
    useEffect(() => {
        if (isOpen) {
            scale.set(1);
            rotate.set(0);
        } else {
            scale.set(0.8);
            rotate.set(-5);
        }
    }, [isOpen, scale, rotate]);
    
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5, y: -50 }}
                    transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    className="absolute top-12 left-12 right-12 bottom-12 bg-black/95 backdrop-blur-2xl rounded-2xl border border-purple-500/20 shadow-[0_0_50px_rgba(255,0,110,0.4)] flex flex-col overflow-hidden z-50"
                    style={{
                        boxShadow: '0 0 50px rgba(255, 0, 110, 0.4), inset 0 0 20px rgba(131, 56, 236, 0.2)'
                    }}
                >
                    <div className="bg-black/30 px-6 py-4 flex justify-between items-center border-b border-purple-500/10">
                        <div className="flex items-center gap-3">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                {Icon && <Icon size={16} className="text-pink-400" />}
                            </motion.div>
                            <span className="text-xs font-mono font-bold tracking-widest text-pink-400 uppercase animate-pulse glitch">{title}</span>
                        </div>
                        <motion.button 
                            onClick={onClose} 
                            className="hover:bg-red-500/20 p-1 rounded-lg transition-all duration-200 hover:scale-110"
                            whileHover={{ rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={18} className="text-purple-300" />
                        </motion.button>
                    </div>
                    <motion.div 
                        className="flex-grow overflow-y-auto p-8 text-purple-200 custom-scrollbar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const DesktopUI = () => {
    const [activeWindow, setActiveWindow] = useState(null);
    const [time, setTime] = useState(new Date());
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isBooting, setIsBooting] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const bootTimer = setTimeout(() => setIsBooting(false), 2000);
        return () => clearTimeout(bootTimer);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const projects = [
        { title: "NEURAL NETWORK", desc: "Deep learning visualization with real-time weights.", tech: "Python, React, D3", status: "ACTIVE" },
        { title: "VOX CRYPTO", desc: "Next-gen decentralized exchange protocol.", tech: "Solidity, Ethers.js", status: "BETA" },
        { title: "AETHER UI", desc: "Design system for spatial computing.", tech: "Three.js, WebXR", status: "DEV" }
    ];

    const navItems = [
        { id: 'about', label: 'BIO', icon: Terminal, color: 'text-sky-400' },
        { id: 'projects', label: 'CORE', icon: Cpu, color: 'text-purple-400' },
        { id: 'skills', label: 'DATA', icon: Layers, color: 'text-emerald-400' },
        { id: 'contact', label: 'LINK', icon: Globe, color: 'text-rose-400' },
    ];

    return (
        <div className="w-full max-w-[800px] h-[500px] sm:h-[400px] mx-auto bg-black relative font-sans select-none overflow-hidden border-4 border-purple-900/50 rounded-xl shadow-[inset_0_0_100px_rgba(255,0,110,0.2)] cyber-grid">
            {/* Boot Screen */}
            <AnimatePresence>
                {isBooting && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black z-50 flex flex-col items-center justify-center"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full mb-4"
                        />
                        <motion.p 
                            className="text-pink-400 font-mono text-sm"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            INITIALIZING_CYBER_SYSTEM...
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Animated Grid Overlay - Cyberpunk */}
            <div className="absolute inset-0 cyber-grid bg-[size:40px_40px] pointer-events-none" />
            
            {/* Dynamic Particles - Cyberpunk */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            background: i % 3 === 0 ? '#ff006e' : i % 3 === 1 ? '#8338ec' : '#3a86ff'
                        }}
                        initial={{ 
                            x: Math.random() * 800, 
                            y: Math.random() * 500,
                            opacity: 0 
                        }}
                        animate={{ 
                            x: [null, Math.random() * 800],
                            y: [null, Math.random() * 500],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ 
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
            
            {/* Top Bar - Cyberpunk */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black/50 border-b border-purple-500/20 flex justify-between items-center px-4 backdrop-blur-md z-10">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-pink-500 tracking-tighter glitch">CYBER_SYSTEM_V2.0</span>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-pink-500 animate-pulse" />
                        <div className="w-1 h-1 rounded-full bg-purple-500/50" />
                        <div className="w-1 h-1 rounded-full bg-cyan-500/20" />
                    </div>
                </div>
                <div className="text-[10px] font-mono text-purple-500/70">
                    {time.toLocaleTimeString()} | CPU: 42% | RAM: 8.2GB | MATRIX: ONLINE
                </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
                {navItems.map((item, index) => (
                    <motion.button 
                        key={item.id}
                        whileHover={{ x: 8, scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setActiveWindow(item.id)}
                        className="flex flex-col items-center group relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <motion.div 
                            className={`p-3 rounded-xl bg-black/30 border border-white/5 backdrop-blur-md group-hover:border-pink-500/50 transition-all ${item.color}`}
                            whileHover={{ 
                                boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)',
                                borderColor: 'rgba(255, 0, 110, 0.8)'
                            }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                            >
                                <item.icon size={20} />
                            </motion.div>
                        </motion.div>
                        <motion.span 
                            className="text-[8px] font-bold mt-1 tracking-widest opacity-40 group-hover:opacity-100 transition-opacity uppercase"
                            animate={{ opacity: activeWindow === item.id ? 1 : 0.4 }}
                        >
                            {item.label}
                        </motion.span>
                        {activeWindow === item.id && (
                            <motion.div 
                                layoutId="active-indicator" 
                                className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(255,0,110,1)]" 
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Main Content Area / Desktop Icons - Cyberpunk */}
            <div className="absolute right-12 top-12 bottom-12 left-24 grid grid-cols-4 gap-8 pointer-events-none opacity-10">
                {[...Array(12)].map((_, i) => (
                    <motion.div 
                        key={i} 
                        className="border border-pink-500/10 rounded-lg"
                        animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.3, 0.1],
                            borderColor: ['#ff006e20', '#8338ec20', '#3a86ff20', '#ff006e20']
                        }}
                        transition={{ 
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            {/* Windows */}
            <Window title="Biological_Profile" icon={Terminal} isOpen={activeWindow === 'about'} onClose={() => setActiveWindow(null)}>
                <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                        <div className="w-24 h-24 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-4xl">👨‍💻</div>
                        <div>
                            <h2 className="text-3xl font-black text-white tracking-tighter mb-1">AARAV <span className="text-sky-500">KUMAR</span></h2>
                            <p className="text-sky-500/70 font-mono text-sm tracking-widest">SR. FULLSTACK ARCHITECT</p>
                        </div>
                    </div>
                    <div className="p-6 bg-black/20 border border-sky-500/10 rounded-xl font-mono text-sm leading-relaxed">
                        <span className="text-sky-500 mr-2">{'>'}</span> I specialize in building high-performance decentralized systems and immersive web experiences. 
                        My workflow bridges the gap between low-level optimization and high-level abstract design.
                    </div>
                </div>
            </Window>

            <Window title="Core_Projects" icon={Cpu} isOpen={activeWindow === 'projects'} onClose={() => setActiveWindow(null)}>
                <div className="space-y-4">
                    {projects.map((p, i) => (
                        <motion.div 
                            key={i} 
                            className="group p-6 bg-black/10 border border-white/5 rounded-2xl hover:bg-sky-500/10 hover:border-sky-500/20 transition-all cursor-pointer"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: '0 10px 30px rgba(56, 189, 248, 0.3)'
                            }}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{p.title}</h3>
                                    <motion.span 
                                        className="text-xs px-2 py-1 rounded-full bg-sky-500/20 text-sky-400 font-mono"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {p.status}
                                    </motion.span>
                                </div>
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            </div>
                            <p className="text-sm text-slate-400 mt-2 mb-4">{p.desc}</p>
                            <div className="flex gap-2">
                                {p.tech.split(', ').map(t => (
                                    <motion.span 
                                        key={t} 
                                        className="text-[10px] px-2 py-0.5 bg-black/40 rounded border border-white/5 text-slate-500"
                                        whileHover={{ scale: 1.2, color: '#38bdf8' }}
                                    >
                                        {t}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Window>

            <Window title="Technical_Skills" icon={Layers} isOpen={activeWindow === 'skills'} onClose={() => setActiveWindow(null)}>
                <div className="space-y-6">
                    <div className="space-y-4">
                        <motion.h3 
                            className="text-lg font-bold text-sky-400"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            FRONTEND
                        </motion.h3>
                        {['React', 'Next.js', 'Tailwind CSS', 'Three.js'].map((skill, index) => (
                            <motion.div 
                                key={skill} 
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="text-sm text-slate-300 w-24">{skill}</span>
                                <div className="flex-1 h-2 bg-sky-500/20 rounded-full overflow-hidden border border-sky-500/10">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-sky-500 to-blue-400 rounded-full"
                                        style={{ width: `${85 + Math.random() * 15}%` }}
                                        animate={{ width: [`${85 + Math.random() * 15}%`, `${90 + Math.random() * 10}%`, `${85 + Math.random() * 15}%`] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <motion.h3 
                            className="text-lg font-bold text-emerald-400"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                        >
                            BACKEND
                        </motion.h3>
                        {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'].map((skill, index) => (
                            <motion.div 
                                key={skill} 
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                <span className="text-sm text-slate-300 w-24">{skill}</span>
                                <div className="flex-1 h-2 bg-emerald-500/20 rounded-full overflow-hidden border border-emerald-500/10">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"
                                        style={{ width: `${80 + Math.random() * 15}%` }}
                                        animate={{ width: [`${80 + Math.random() * 15}%`, `${85 + Math.random() * 10}%`, `${80 + Math.random() * 15}%`] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0.4 + index * 0.5 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Window>

            <Window title="Contact_Link" icon={Globe} isOpen={activeWindow === 'contact'} onClose={() => setActiveWindow(null)}>
                <div className="space-y-6">
                    <div className="p-6 bg-black/20 border border-sky-500/10 rounded-xl">
                        <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-sky-400" />
                                <span className="text-slate-300">contact@aarav.dev</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Github size={16} className="text-sky-400" />
                                <span className="text-slate-300">github.com/aarav</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Linkedin size={16} className="text-sky-400" />
                                <span className="text-slate-300">linkedin.com/in/aarav</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-black/10 border border-white/5 rounded-xl">
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Available for freelance projects and full-time opportunities. 
                            Specialized in building scalable web applications and interactive experiences.
                        </p>
                    </div>
                </div>
            </Window>

            {/* Bottom Dock - Cyberpunk Enhanced */}
            <motion.div 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-black/90 backdrop-blur-2xl border border-purple-500/20 rounded-2xl flex items-center gap-8 shadow-2xl z-30 neon-border"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                {[
                    { icon: Github, label: 'GitHub' },
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Mail, label: 'Email' }
                ].map((social, index) => (
                    <motion.button
                        key={social.label}
                        whileHover={{ y: -8, scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.8 }}
                        className="relative group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                    >
                        <motion.div
                            className="absolute inset-0 rounded-full bg-pink-500/20 blur-xl"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        />
                        <social.icon 
                            size={20} 
                            className="text-purple-400 hover:text-pink-500 transition-colors relative z-10" 
                        />
                    </motion.button>
                ))}
            </motion.div>

            {/* Scanline Effect - Cyberpunk */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(255,0,110,0.3)_50%,rgba(131,56,236,0.25)_50%),linear-gradient(90deg,rgba(58,134,255,0.06),rgba(255,0,110,0.02),rgba(131,56,236,0.06))] bg-[size:100%_4px,3px_100%] animate-scanline" />
        </div>
    );
};
