import { Github } from 'lucide-react'

interface Project {
  id: string;
  title: string;
  time: string;
  preview: string;
  githubUrl: string;
  description: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI Journaling Companion',
    time: '2023',
    preview: '/project-preview-2.png',
    githubUrl: 'https://github.com',
    description: 'A React-based journaling app with AI-powered insights and mood tracking.'
  },
  {
    id: '2',
    title: 'Traffic Optimization Dashboard',
    time: '2023',
    preview: '/project-preview-1.png',
    githubUrl: 'https://github.com',
    description: 'Real-time traffic simulation and optimization tool built with D3.js and React.'
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-smooth overflow-hidden border border-border/50"
              >
                {/* Project preview */}
                <div className="relative overflow-hidden bg-muted">
                  <div className="aspect-video relative">
                    <img
                      src={project.preview}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
                    />
                    {/* Overlay with play effect */}
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-smooth"></div>
                  </div>
                </div>
                
                {/* Project info */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
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