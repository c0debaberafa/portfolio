'use client'
import { Github } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface Project {
  id: string;
  title: string;
  time: string;
  preview: string;
  githubUrl: string;
  subheader: string;
  description: string;
  skills: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Fred AI',
    time: 'Jun 2025',
    preview: '/fred.png',
    githubUrl: 'https://github.com/c0debaberafa/mirror',
    subheader: 'Your voice-first AI companion intentional self-reflection and life engineering.',
    description: 'Fred AI is a voice-first journaling companion designed to help users reflect intentionally and build self-alignment through quiet, evolving conversations. I contributed to building Fred\'s front-end experience — from designing and implementing the landing page to integrating interactive components that connect users with Fred\'s core features, including voice journaling, the Living Essay, and waitlist onboarding.\nI focused on creating a seamless, responsive UI that supports both scalability and rapid iteration during our MVP and soft launch phases.',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'TypeScript', 'Supabase', 'Drizzle ORM', 'VAPI.ai', 'Vercel']
  },
  {
    id: '2',
    title: 'Traffic Modeling Simulation',
    time: 'May 2025',
    preview: '/trike.png',
    githubUrl: 'https://github.com/c0debaberafa/tricycle-simulation',
    subheader: 'A traffic simulation tool that visualizes tricycle movement in Manila to support urban planning and local transport policy.',
    description: 'Here I led both simulation and front-end development of an agent-based system modeling tricycle productivity, terminal usage, and passenger wait times. Built in collaboration with the National Commission on Transport Services, the project aimed to improve their national traffic simulator by introducing localized dynamics for small-scale public vehicles. I designed an intuitive interface that visualized backend simulation data in real time, allowing planners and researchers to explore traffic behavior, test configurations, and optimize routing through interactive controls and visual overlays.',
    skills: ['D3.js', 'React', 'JavaScript', 'UI/UX', 'Data Visualization']
  }
];

const skillBadgeClass = "bg-gradient-accent/20 text-accent border border-accent/30 px-3 py-1 rounded-full text-xs font-mono font-normal transition-transform duration-300 hover:scale-105 hover:shadow-md";

const Projects = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [glowId, setGlowId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((node, idx) => {
      if (!node) return;
      const projectId = projects[idx].id;
      if (glowId === projectId) {
        node.style.boxShadow = '0 0 12px 2px hsl(var(--accent))';
        node.style.transition = 'box-shadow 0.5s cubic-bezier(0.4,0,0.2,1) 0.15s';
      } else {
        node.style.boxShadow = '0 0 0 0 rgba(0,0,0,0)';
      }
    });
  }, [glowId]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-colors duration-1000 ease-out delay-500 ${
            isVisible ? 'text-white' : 'text-accent'
          }`}>
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-smooth overflow-hidden border border-border/50 p-8"
                ref={el => { cardRefs.current[index] = el; }}
                onMouseEnter={() => {
                  setGlowId(project.id);
                  const image = imageRefs.current[index];
                  if (image) image.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={() => {
                  setGlowId(null);
                  const image = imageRefs.current[index];
                  if (image) image.style.transform = 'scale(1)';
                }}
                style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)', transition: 'box-shadow 0.5s cubic-bezier(0.4,0,0.2,1) 0.15s' }}
              >
                {/* Project preview */}
                <div className="relative overflow-hidden bg-muted mb-6">
                  <div className="aspect-video relative">
                    <img
                      ref={el => { imageRefs.current[index] = el; }}
                      src={project.preview}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                      style={{ transitionProperty: 'transform' }}
                    />
                  </div>
                </div>
                
                {/* Project info */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.subheader}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {project.time}
                      </span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-smooth shadow-medium hover:shadow-glow"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  {/* Always expanded description */}
                  <div className="overflow-visible mb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/30" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {project.description}
                    </p>
                  </div>
                  {/* Skills list at the bottom, styled like WorkExperience */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={skillBadgeClass}
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;