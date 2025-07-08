"use client";

import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      setIsScrolled(scrollY > 50);
      setIsDarkTheme(scrollY >= heroHeight); // Switch to dark theme when past hero
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? isDarkTheme
          ? 'bg-neutral-900/80 backdrop-blur-md shadow-lg border-b border-neutral-700/50'
          : 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-xl font-semibold transition-colors duration-500 ${
            isDarkTheme 
              ? 'text-white' 
              : 'bg-gradient-accent bg-clip-text text-transparent'
          }`}>
            <img 
              src={isDarkTheme ? '/tora-white.png' : '/tora-black.png'} 
              alt="Rafa" 
              className="h-8 w-auto transition-all duration-500"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('experience')}
              className={`transition-colors duration-500 ${
                isDarkTheme
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors duration-500 ${
                isDarkTheme
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-4 py-2 rounded-full transition-all duration-500 ${
                isDarkTheme
                  ? 'bg-white text-neutral-900 hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
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