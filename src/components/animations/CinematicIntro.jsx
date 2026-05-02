import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Cpu, Globe, Play, Sparkles } from 'lucide-react';

const CinematicIntro = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPhase(1);
    }, 1000);

    const timer2 = setTimeout(() => {
      setCurrentPhase(2);
    }, 2500);

    const timer3 = setTimeout(() => {
      setCurrentPhase(3);
    }, 3500);

    const timer4 = setTimeout(() => {
      setCanProceed(true);
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleInitialize = () => {
    setShowContent(false);
    setTimeout(() => onComplete(), 500);
  };

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Cyberpunk Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,110,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(131,56,236,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Animated Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: i % 3 === 0 ? '#ff006e' : i % 3 === 1 ? '#8338ec' : '#3a86ff'
                }}
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  x: [null, Math.random() * window.innerWidth],
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
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

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Phase 0: Loading Circle */}
            <AnimatePresence>
              {currentPhase === 0 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="mb-8"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 border-4 border-pink-500 border-t-transparent rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-32 h-32 border-4 border-purple-500 border-b-transparent rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 w-24 h-24 border-4 border-cyan-500 border-l-transparent rounded-full"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phase 1: Brand Reveal */}
            <AnimatePresence>
              {currentPhase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                    className="flex justify-center gap-4 mb-6"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap size={32} className="text-pink-500" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Cpu size={32} className="text-purple-500" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    >
                      <Globe size={32} className="text-cyan-500" />
                    </motion.div>
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-6xl font-black tracking-tighter"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                      AARAV
                    </span>
                  </motion.h1>

                  <motion.h2
                    className="text-2xl md:text-4xl font-bold"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <span className="text-pink-400 glitch">CYBER</span>
                    <span className="text-purple-400 mx-2">•</span>
                    <span className="text-cyan-400">SYSTEMS</span>
                  </motion.h2>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phase 2: Tagline */}
            <AnimatePresence>
              {currentPhase >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                  className="mt-8"
                >
                  <motion.p
                    className="text-lg md:text-xl text-purple-300 font-mono"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    DIGITAL ARCHITECT • CYBER DEVELOPER
                  </motion.p>
                  <motion.div
                    className="mt-4 flex justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: i % 3 === 0 ? '#ff006e' : i % 3 === 1 ? '#8338ec' : '#3a86ff'
                        }}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phase 3: Initialize Button */}
            <AnimatePresence>
              {currentPhase >= 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8"
                >
                  <motion.button
                    onClick={handleInitialize}
                    disabled={!canProceed}
                    className={`px-8 py-4 rounded-full font-bold text-lg md:text-xl font-mono transition-all duration-300 ${
                      canProceed 
                        ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white hover:scale-110 hover:shadow-[0_0_40px_rgba(255,0,110,0.8)] cursor-pointer'
                        : 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    }`}
                    whileHover={canProceed ? { scale: 1.05 } : {}}
                    whileTap={canProceed ? { scale: 0.95 } : {}}
                  >
                    <div className="flex items-center gap-3">
                      {canProceed && (
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Play size={20} />
                        </motion.div>
                      )}
                      <span>{canProceed ? 'INITIALIZE' : 'LOADING...'}</span>
                      {canProceed && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Sparkles size={20} />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                  
                  {canProceed && (
                    <motion.p
                      className="mt-4 text-sm text-purple-400 font-mono"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Click to enter the cyber space
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
              animate={{ y: [0, '100vh'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Glitch Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-10"
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 0.1, repeat: Infinity }}
            style={{
              background: 'linear-gradient(0deg, transparent 0%, rgba(255,0,110,0.1) 50%, transparent 100%)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
