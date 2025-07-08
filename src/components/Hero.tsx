"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

// Declare global types for particles.js
declare global {
  interface Window {
    particlesJS: any;
    pJSDom: any[];
  }
}

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect for description
  useEffect(() => {
    const fullText = "I'm a front-end developer and creative technologist from Manila with roots in simulation, storytelling, and self-reflective design. Whether it's optimizing traffic in a city or building an AI journaling companion, I care about code that feels intuitive — and interfaces that feel alive.";
    
    if (isVisible && currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 25); // Faster typing speed
      
      return () => clearTimeout(timer);
    } else if (currentIndex >= fullText.length) {
      setIsTypingComplete(true);
    }
  }, [isVisible, currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        sectionRef.current.style.backgroundPosition = `center ${-scrollY * 0.3}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      // Initialize particles after script loads
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.pJS.fn.particlesRefresh();
      } else {
        // Initialize particles if not already loaded
        if (window.particlesJS) {
          window.particlesJS.load('particles', '/particles.json', function() {
            var canvas = document.querySelector(".particles-js-canvas-el");
          });
        }
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script
      const existingScript = document.querySelector('script[src*="particles.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-full flex items-center justify-start relative bg-white bg-cover bg-left"
      style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}
    >
      {/* Particles container */}
      <div id="particles" className="absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10 flex flex-col items-center h-full justify-center">
        <div className="max-w-4xl w-full">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div 
              className={`w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg flex items-center justify-center transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <Image 
                src="/me2.jpg" 
                alt="Photo of Rafa Partosa" 
                width={192} 
                height={192} 
                className="rounded-full object-cover drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" 
              />
            </div>
          </div>

          {/* Name */}
          <h1 
            className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-black leading-tight transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Hi, I'm Rafa.
          </h1>

          {/* Tagline without frosted glass background */}
          <p 
            className={`text-xl md:text-2xl lg:text-3xl text-black leading-relaxed max-w-3xl mx-auto font-light transition-all duration-1000 ease-out delay-400 mb-8 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            I build human-centered digital experiences that move with clarity, emotion, and purpose.
          </p>

          {/* Description with animated frosted glass background */}
          <div 
            className={`backdrop-blur-md bg-white/20 rounded-2xl p-6 border border-white/30 shadow-xl transition-all duration-1000 ease-out delay-600 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div 
              className={`text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-600 font-mono h-32 flex items-start ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="relative text-left w-full">
                {displayText}
                <span 
                  className={`inline-block w-2 h-6 ml-1 bg-red-500 transition-opacity duration-100 align-text-bottom ${
                    isTypingComplete ? 'animate-pulse' : ''
                  }`}
                  style={{ 
                    opacity: isTypingComplete ? 1 : 1,
                    animation: isTypingComplete ? 'blink 1s infinite' : 'none'
                  }}
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;