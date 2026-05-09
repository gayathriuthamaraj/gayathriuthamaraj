import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Research from "@/components/sections/Research";
import GitHub from "@/components/sections/GitHub";
import Infrastructure from "@/components/sections/Infrastructure";
import Exploration from "@/components/sections/Exploration";
import Contact from "@/components/sections/Contact";
import GridOverlay from "@/components/ui/GridOverlay";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Global grid overlay */}
      <GridOverlay />

      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Research />
      <GitHub />
      <Infrastructure />
      <Exploration />
      <Contact />
    </div>
  );
}
