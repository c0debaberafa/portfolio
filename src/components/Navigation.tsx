"use client";

import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-smooth ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md shadow-soft border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold bg-gradient-accent bg-clip-text text-transparent">
            Rafa
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('experience')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-smooth"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-smooth"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-accent text-accent-foreground px-4 py-2 rounded-full hover:shadow-glow transition-all duration-smooth"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 