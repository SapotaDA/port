import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export const Overlay = () => {
  return (
    <div className="w-screen px-4 md:px-0">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Navigation or Footer if needed */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/40 text-xs uppercase tracking-widest pointer-events-none">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/20" />
        <span>Explore</span>
      </div>
    </div>
  );
};
