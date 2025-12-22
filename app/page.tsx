import Hero from "./components/blocks/Hero";
import { About } from "./components/blocks/About"; 
import Services from "./components/blocks/Services"; // <--- Import New File
import { Projects } from "./components/blocks/Projects";
import Certifications from "./components/blocks/Certifications";
import { Contact } from "./components/blocks/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Hero />
      <About />
      <Services /> {/* <--- Add it here! */}
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}