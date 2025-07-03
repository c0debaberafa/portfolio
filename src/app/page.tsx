import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <div id="experience">
        <WorkExperience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}