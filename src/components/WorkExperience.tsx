"use client";
import { useState, useEffect } from "react";

interface Experience {
    id: string;
    company: string;
    logo: string;
    title: string;
    description: string;
    time: string;
}

const experiences: Experience[] = [
    {
        id: '1',
        company: 'TechCorp',
        logo: '/techcorp.png',
        title: 'Senior Frontend Developer',
        time: '2022 - Present',
        description: 'Led the development of responsive web applications using React and TypeScript. Collaborated with design teams to create intuitive user interfaces that improved user engagement by 40%. Implemented modern development practices and mentored junior developers.'
      },
      {
        id: '2',
        company: 'InnovateLab',
        logo: '/innovatelab.png',
        title: 'Frontend Developer',
        time: '2020 - 2022',
        description: 'Built interactive data visualization components and dashboards. Optimized application performance, reducing load times by 60%. Worked closely with UX designers to translate wireframes into pixel-perfect, accessible web components.'
      },
      {
        id: '3',
        company: 'StartupCo',
        logo: '/startupco.png',
        title: 'Junior Developer',
        time: '2019 - 2020',
        description: 'Developed and maintained multiple client websites using modern JavaScript frameworks. Participated in agile development processes and contributed to codebase improvements. Gained expertise in responsive design and cross-browser compatibility.'
      }
    ];

const WorkExperience = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-accent bg-clip-text text-transparent">
                Work Experience
              </h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-accent opacity-30"></div>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className="group relative"
                      onMouseEnter={() => isClient && setHoveredId(exp.id)}
                      onMouseLeave={() => isClient && setHoveredId(null)}
                    >
                      {/* Timeline node */}
                      <div className="absolute left-6 top-12 w-4 h-4 rounded-full bg-gradient-accent shadow-glow z-10"></div>
                      
                      <div className="ml-16 bg-gradient-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-smooth p-8 border border-border/50">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-xl bg-primary-soft flex items-center justify-center overflow-hidden shadow-medium">
                              <img 
                                src={exp.logo} 
                                alt={`${exp.company} logo`}
                                className="w-12 h-12 object-contain"
                              />
                            </div>
                          </div>
                          
                          <div className="flex-grow min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">
                                  {exp.title}
                                </h3>
                                <p className="text-muted-foreground font-medium">
                                  {exp.company}
                                </p>
                              </div>
                              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full self-start">
                                {exp.time}
                              </span>
                            </div>
                            
                            {/* Expandable description */}
                            <div className={`transition-all duration-smooth overflow-hidden ${
                              isClient && hoveredId === exp.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                              <p className="text-muted-foreground leading-relaxed pt-2 border-t border-border/30">
                                {exp.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default WorkExperience;