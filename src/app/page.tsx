import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      
      {/* Hero Section - Light Theme Only */}
      <section className="h-screen bg-white">
        <Hero />
      </section>
      
      {/* Dark Theme Sections */}
      <div className="bg-neutral-900 text-white">
        <section id="experience">
          <WorkExperience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}