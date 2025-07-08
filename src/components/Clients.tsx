"use client";
import React from "react";
import "@fontsource/jetbrains-mono/400.css";

const clients = [
  {
    id: "1",
    name: "uCycle",
    logo: "/ucycle.jpg",
    url: "https://www.ucycle.life/",
    instagram: "https://www.instagram.com/ucycle.life/",
    description: "A cycling and fitness community platform focused on group rides, events, and cycling advocacy in the Philippines.",
  },
  {
    id: "2",
    name: "CoFitness",
    logo: "/cofit.png",
    url: "https://www.cofitness.com.ph/",
    instagram: "https://www.instagram.com/cofitness.ph/",
    description: "A boutique fitness studio offering group classes, personal training, and wellness programs for all levels.",
  },
  {
    id: "3",
    name: "Ultraboxx",
    logo: "/ultraboxx.png",
    url: "https://ultraboxx.ph/",
    instagram: "https://www.instagram.com/ultraboxx.ph/",
    description: "A premium boxing and fitness gym providing high-intensity workouts, personal coaching, and community events.",
  },
];

const Clients = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;ve had the privilege of working with amazing companies that share my passion for innovation and excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group relative flex flex-col items-center"
            >
              {/* Logo Container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 transition-all duration-300 ease-out group-hover:scale-110">
                <div className="w-full h-full bg-card rounded-2xl p-6 flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-2">
                {/* Website Link */}
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-card-hover transition-all duration-300 group/link"
                >
                  <svg
                    className="w-5 h-5 text-accent group-hover/link:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </a>
                
                {/* Instagram Link */}
                <a
                  href={client.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-card-hover transition-all duration-300 group/link"
                >
                  <svg
                    className="w-5 h-5 text-accent group-hover/link:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 