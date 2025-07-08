"use client";
import { useState, useEffect, useRef } from "react";
import { Instagram, Globe, Globe2 } from "lucide-react";
import "@fontsource/jetbrains-mono/400.css";

interface Experience {
    id: string;
    company: string;
    logo: string;
    title: string;
    description: string;
    time: string;
    skills: string[];
}

// Client data for Tora Media
const toraClients = [
  {
    id: "1",
    name: "uCycle",
    logo: "/ucycle.jpg",
    url: "https://www.ucycle.life/",
    instagram: "https://www.instagram.com/ucycle.life/",
  },
  {
    id: "2",
    name: "CoFitness",
    logo: "/cofit.png",
    url: "https://www.cofitness.com.ph/",
    instagram: "https://www.instagram.com/cofitnessph/",
  },
  {
    id: "3",
    name: "Ultraboxx",
    logo: "/ultraboxx.png",
    url: "https://ultraboxx.ph/",
    instagram: "https://www.instagram.com/ultra.boxx/",
  },
];

const experiences: Experience[] = [
    {
        id: '1',
        company: 'Tora Media',
        logo: '/tora-orange.png',
        title: 'Founder',
        time: 'Jun 2023 - Jun 2025',
        description: "Generated over <span class='text-accent'>1.5 million views</span> across organic and paid content. Rebuilt lightweight front-end systems that powered over 2,000 monthly client interactions. Designed scalable creative and content systems that clients could manage on their own.",
        skills: ['Branding', 'Web Design', 'Content Strategy', 'HTML', 'CSS', 'JavaScript']
      },
      {
        id: '2',
        company: 'TechnologyAdvice',
        logo: '/ta-logo.jpeg',
        title: 'Research Associate',
        time: 'Oct 2022 - Jan 2024',
        description: "Led updates for competitive B2B content and webpage components, helping generate over <span class='text-accent'>2 million organic views</span>. Contributed to SEO strategy and structure — identifying content gaps, optimizing internal links, and improving crawlability across core articles.",
        skills: ['SEO', 'Content Marketing', 'Google Analytics', 'Competitive Research']
      },
      {
        id: '3',
        company: 'Presidential Communications Office',
        logo: '/pco-logo.png',
        title: 'Administrative Assistant I',
        time: 'Apr 2021 - Apr 2022',
        description: "Helped ship official government websites and campaign media with a nationwide reach of <span class='text-accent'>10 million</span>. Built fast, scalable microsites for high-stakes launches — where clarity and timing were non-negotiable.",
        skills: ['Web Development', 'WordPress', 'Content Production', 'HTML', 'CSS']
      },
];

const skillBadgeClass = "bg-gradient-accent/20 text-accent border border-accent/30 px-3 py-1 rounded-full text-xs font-mono font-normal transition-transform duration-300 hover:scale-105 hover:shadow-md";

const companyLinks: { [key: string]: string } = {
  'TechnologyAdvice': 'https://technologyadvice.com/',
  'Presidential Communications Office': 'https://pco.gov.ph/',
};

// Function to split description into bullet points
const formatDescription = (description: string) => {
  const sentences = description.split(/\.\s|\.$/).filter(s => s.trim().length > 0);
  return (
    <ul className="pt-2 border-t border-neutral-600/30 list-none">
      {sentences.map((sentence, idx) => (
        <li key={idx} className="flex items-start gap-2 mb-1">
          <span className="text-gray-300 font-mono text-sm mt-1 flex-shrink-0">{'\u2022'}</span>
          <span 
            className="text-gray-300 leading-relaxed font-mono" 
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
            dangerouslySetInnerHTML={{ __html: sentence.trim() + '.' }}
          />
        </li>
      ))}
    </ul>
  );
};

const WorkExperience = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
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
            const expId = experiences[idx].id;
            if (expandedIds.has(expId)) {
                node.style.boxShadow = '0 0 12px 2px rgba(255,255,255,0.8)';
                node.style.transition = 'box-shadow 0.5s cubic-bezier(0.4,0,0.2,1) 0.15s';
            } else if (hoveredId === expId) {
                node.style.boxShadow = '0 0 12px 2px hsl(var(--accent))';
                node.style.transition = 'box-shadow 0.5s cubic-bezier(0.4,0,0.2,1) 0.15s';
            } else {
                node.style.boxShadow = '0 0 0 0 rgba(0,0,0,0)';
            }
        });
    }, [hoveredId, expandedIds]);

    const isExpanded = (id: string) => expandedIds.has(id) || hoveredId === id;

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
                Work Experience
              </h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-8 bottom-8 w-0.5 opacity-40 bg-gray-400"></div>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className="group relative"
                      onMouseEnter={() => setHoveredId(exp.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={e => {
                        e.stopPropagation();
                        setExpandedIds(prev => {
                          const newSet = new Set(prev);
                          if (newSet.has(exp.id)) {
                            newSet.delete(exp.id);
                          } else {
                            newSet.add(exp.id);
                          }
                          return newSet;
                        });
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Timeline node */}
                      <div
                        className={`absolute left-6 top-12 w-4 h-4 rounded-full z-10 transition-all duration-300 transition-colors transition-[background] ` +
                          (expandedIds.has(exp.id)
                            ? 'bg-white'
                            : hoveredId === exp.id
                              ? 'bg-accent'
                              : 'bg-gray-400')
                        }
                      ></div>
                      
                      <div
                        ref={el => { cardRefs.current[index] = el; }}
                        className="ml-16 bg-gradient-card rounded-2xl shadow-soft border border-border/50 transition-all duration-500 delay-150 group/card relative p-8"
                        style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)', transition: 'box-shadow 0.5s cubic-bezier(0.4,0,0.2,1) 0.15s' }}
                      >
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className="h-16 w-16 object-contain"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                              <div>
                                {companyLinks[exp.company] ? (
                                  <h3 className="text-2xl font-bold text-white flex items-center gap-1">
                                    <a
                                      href={companyLinks[exp.company]}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:underline hover:text-accent transition-colors flex items-center gap-1"
                                    >
                                      {exp.company}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-4 h-4 text-accent inline-block align-middle ml-1 hover:scale-110 transition-transform"
                                        style={{ verticalAlign: 'middle' }}
                                      >
                                        <path d="M10.5 2a8.5 8.5 0 0 1 8.5 8.5c0 4.694-3.5 8.5-8.5 8.5A8.5 8.5 0 0 1 2 10.5C2 5.806 5.5 2 10.5 2zM10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z" />
                                        <path d="M10.5 6a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
                                      </svg>
                                    </a>
                                  </h3>
                                ) : (
                                  <h3 className="text-2xl font-bold text-white">
                                    {exp.company}
                                  </h3>
                                )}
                                <span className="text-base text-gray-300 font-medium mt-1 block">
                                  {exp.title}
                                </span>
                              </div>
                              <span className="text-sm text-gray-400 bg-neutral-700 px-3 py-1 rounded-full self-start font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                                {exp.time}
                              </span>
                            </div>
                            <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                              isExpanded(exp.id) ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                            }`}>
                              {formatDescription(exp.description)}
                            
                            </div>
                          
                            <div className={`flex flex-wrap gap-2 transition-all duration-300 ${isExpanded(exp.id) ? 'mt-6' : 'mt-2'}`}>
                              {exp.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className={skillBadgeClass}
                                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            {/* Tora Clients - always visible for Tora Media */}
                            {exp.company === 'Tora Media' && (
                              <>
                                <div className="w-full h-px bg-neutral-600/30 my-6"></div>
                                <div className="mt-6">
                                <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                                  Featured Clients
                                </h4>
                                <div className="flex flex-row gap-8 items-start">
                                  {toraClients.map((client) => (
                                    <div key={client.id} className="group/client relative flex flex-col items-start">
                                      {/* Logo Container and Social Links */}
                                      <div className="relative w-24 h-24 md:w-28 md:h-28 mb-2 flex items-center justify-center">
                                        <div className="w-full h-full bg-black rounded-2xl p-3 flex items-center justify-center transition-all duration-300 group-hover/client:shadow-medium relative">
                                          <img 
                                            src={client.logo} 
                                            alt={`${client.name} logo`} 
                                            className="w-full h-full object-contain transition-all duration-300 group-hover/client:opacity-50" 
                                          />
                                          {/* Social Links - overlay on the logo, only on hover */}
                                          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover/client:opacity-100 transition-opacity duration-300">
                                            <a
                                              href={client.url}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="p-2 rounded-full bg-black/80 hover:bg-neutral-800 transition-all duration-300 group/link"
                                            >
                                              <svg
                                                className="w-4 h-4 text-accent group-hover/link:scale-110 transition-transform duration-300"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                              </svg>
                                            </a>
                                            <a
                                              href={client.instagram}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="p-2 rounded-full bg-black/80 hover:bg-neutral-800 transition-all duration-300 group/link"
                                            >
                                              <svg
                                                className="w-4 h-4 text-accent group-hover/link:scale-110 transition-transform duration-300"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </>
                            )}
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
};

export default WorkExperience;