import { Canvas } from "@react-three/fiber";
import { ScrollControls, Loader } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="h-screen w-screen bg-[#020617] noise">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-14 md:h-16 bg-slate-950/80 backdrop-blur-lg border-b border-sky-500/10 z-40 flex items-center px-4 md:px-8">
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

      {/* 3D Canvas Section */}
      <div className="fixed top-14 md:top-16 left-0 right-0 bottom-0">
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

      {/* Overlay Content Sections */}
      <div className="relative z-10 pointer-events-auto">
        <Hero />
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
