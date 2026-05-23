import Hero from "./components/blocks/Hero";
import { About } from "./components/blocks/About"; 
import Services from "./components/blocks/Services"; 
import { Projects } from "./components/blocks/Projects";
import Certifications from "./components/blocks/Certifications";
import { Contact } from "./components/blocks/Contact";
import { MotionBackground } from "./components/shared/MotionBackground";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen relative">
      <MotionBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}