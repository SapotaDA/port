import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, X, Terminal, Cpu, Layers, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Window = ({ title, children, onClose, isOpen, icon: Icon }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="absolute top-12 left-12 right-12 bottom-12 bg-slate-900/90 backdrop-blur-2xl rounded-2xl border border-sky-500/30 shadow-[0_0_50px_rgba(56,189,248,0.2)] flex flex-col overflow-hidden z-50"
                >
                    <div className="bg-sky-500/10 px-6 py-4 flex justify-between items-center border-b border-sky-500/20">
                        <div className="flex items-center gap-3">
                            {Icon && <Icon size={16} className="text-sky-400" />}
                            <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">{title}</span>
                        </div>
                        <button onClick={onClose} className="hover:bg-red-500/20 p-1 rounded-lg transition-colors">
                            <X size={18} className="text-slate-400" />
                        </button>
                    </div>
                    <div className="flex-grow overflow-y-auto p-8 text-slate-300 custom-scrollbar">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const DesktopUI = () => {
    const [activeWindow, setActiveWindow] = useState(null);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const projects = [
        { title: "NEURAL NETWORK", desc: "Deep learning visualization with real-time weights.", tech: "Python, React, D3" },
        { title: "VOX CRYPTO", desc: "Next-gen decentralized exchange protocol.", tech: "Solidity, Ethers.js" },
        { title: "AETHER UI", desc: "Design system for spatial computing.", tech: "Three.js, WebXR" }
    ];

    return (
        <div className="w-[1024px] h-[640px] bg-[#020617] relative font-sans select-none overflow-hidden border-4 border-sky-900/50 rounded-xl shadow-[inset_0_0_100px_rgba(56,189,248,0.1)]">
            {/* Animated Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-sky-500/5 border-b border-sky-500/10 flex justify-between items-center px-4 backdrop-blur-md z-10">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-sky-500 tracking-tighter">AARAV_SYSTEM_V2.0</span>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-sky-500 animate-pulse" />
                        <div className="w-1 h-1 rounded-full bg-sky-500/50" />
                        <div className="w-1 h-1 rounded-full bg-sky-500/20" />
                    </div>
                </div>
                <div className="text-[10px] font-mono text-sky-500/70">
                    {time.toLocaleTimeString()} | CPU: 12% | RAM: 4.2GB
                </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
                {[
                    { id: 'about', label: 'BIO', icon: Terminal, color: 'text-sky-400' },
                    { id: 'projects', label: 'CORE', icon: Cpu, color: 'text-purple-400' },
                    { id: 'skills', label: 'DATA', icon: Layers, color: 'text-emerald-400' },
                    { id: 'contact', label: 'LINK', icon: Globe, color: 'text-rose-400' },
                ].map(item => (
                    <motion.button 
                        key={item.id}
                        whileHover={{ x: 5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveWindow(item.id)}
                        className="flex flex-col items-center group relative"
                    >
                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md group-hover:border-sky-500/50 transition-all ${item.color}`}>
                            <item.icon size={20} />
                        </div>
                        <span className="text-[8px] font-bold mt-1 tracking-widest opacity-40 group-hover:opacity-100 transition-opacity uppercase">{item.label}</span>
                        {activeWindow === item.id && (
                            <motion.div layoutId="active-indicator" className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-sky-500 rounded-full shadow-[0_0_10px_rgba(56,189,248,1)]" />
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Main Content Area / Desktop Icons */}
            <div className="absolute right-12 top-12 bottom-12 left-24 grid grid-cols-4 gap-8 pointer-events-none opacity-20">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="border border-sky-500/10 rounded-lg" />
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
                    <div className="p-6 bg-sky-500/5 border border-sky-500/10 rounded-xl font-mono text-sm leading-relaxed">
                        <span className="text-sky-500 mr-2">></span> I specialize in building high-performance decentralized systems and immersive web experiences. 
                        My workflow bridges the gap between low-level optimization and high-level abstract design.
                    </div>
                </div>
            </Window>

            <Window title="Core_Projects" icon={Cpu} isOpen={activeWindow === 'projects'} onClose={() => setActiveWindow(null)}>
                <div className="space-y-4">
                    {projects.map((p, i) => (
                        <div key={i} className="group p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-sky-500/10 hover:border-sky-500/30 transition-all cursor-pointer">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-white group-hover:text-sky-400">{p.title}</h3>
                                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-slate-400 mt-2 mb-4">{p.desc}</p>
                            <div className="flex gap-2">
                                {p.tech.split(', ').map(t => (
                                    <span key={t} className="text-[10px] px-2 py-0.5 bg-black/40 rounded border border-white/10 text-slate-500">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Window>

            {/* Bottom Dock */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-slate-900/80 backdrop-blur-2xl border border-sky-500/20 rounded-2xl flex items-center gap-8 shadow-2xl z-30">
                <Github size={20} className="text-slate-400 hover:text-white hover:scale-125 transition-all cursor-pointer" />
                <Linkedin size={20} className="text-slate-400 hover:text-white hover:scale-125 transition-all cursor-pointer" />
                <Mail size={20} className="text-slate-400 hover:text-white hover:scale-125 transition-all cursor-pointer" />
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] animate-scanline" />
        </div>
    );
};
