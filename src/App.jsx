import { Canvas } from "@react-three/fiber";
import { ScrollControls, Loader } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import { Hero } from "./components/Hero";
import { DesktopUI } from "./components/DesktopUI";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen w-screen bg-[#020617] noise relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-14 md:h-16 bg-slate-950/80 backdrop-blur-lg border-b border-sky-500/10 z-50 flex items-center px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">AARAV<span className="text-sky-400">.DEV</span></h1>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Work</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Skills</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
            <a href="#" className="px-4 py-2 bg-sky-500 text-slate-950 font-semibold rounded-lg hover:bg-sky-400 transition-all text-sm">Resume</a>
          </div>
          <div className="md:hidden flex gap-2">
            <a href="#contact" className="px-3 py-1.5 bg-sky-500 text-slate-950 font-semibold rounded text-xs hover:bg-sky-400 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <div className="pointer-events-none">
        <div className="absolute -left-24 top-24 hidden md:block h-72 w-72 rounded-full bg-sky-500/20 blur-3xl animate-glow" />
        <div className="absolute right-10 top-1/3 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl animate-glow" style={{ animationDelay: '1.8s' }} />
        <div className="absolute left-1/2 top-[32%] h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl opacity-70 animate-glow" />
      </div>

      {/* 3D Canvas Background */}
      <div className="fixed top-14 md:top-16 left-0 right-0 bottom-0 z-0 pointer-events-none">
        <Canvas
          shadows
          camera={{ position: [0, 2, 8], fov: 35 }}
          dpr={[1, 2]}
          style={{ touchAction: 'none' }}
        >
          <Suspense fallback={null}>
            <ScrollControls pages={4} damping={0.15}>
              <Experience />
            </ScrollControls>
          </Suspense>
        </Canvas>

        <Loader
          containerStyles={{ background: '#020617' }}
          innerStyles={{ background: '#1e293b' }}
          barStyles={{ background: '#38bdf8' }}
          dataStyles={{ color: '#38bdf8', fontFamily: 'monospace' }}
          dataInterpolation={(p) => `LOADING... ${p.toFixed(0)}%`}
        />
      </div>

      {/* Content Sections */}
      <div className="relative z-10 pointer-events-auto">
        <Hero />
        <section className="w-screen flex justify-center px-4 md:px-8 py-12 md:py-20">
          <div className="w-full max-w-7xl">
            <div className="mb-8 text-center">
              <p className="text-slate-400 text-base md:text-lg">Explore a glimpse of my interactive workspace.</p>
            </div>
            <div className="overflow-x-auto">
              <DesktopUI />
            </div>
          </div>
        </section>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

      {/* Ambient Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://res.cloudinary.com/dzv9rq7qr/image/upload/v1682332841/noise_ovl7uz.png')]"></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-t from-sky-500/5 to-transparent"></div>
    </div>
  );
}

export default App;
