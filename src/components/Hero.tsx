import Image from 'next/image'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 md:h-40 rounded-full bg-gradient-accent p-1 shadow-glow">
                <div className="w-full h-full bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                <Image src="/me.jpg" alt="Photo of Rafa Partosa" width={160} height={160} className="rounded-full shadow-lg object-cover"/>
                </div>
              </div>
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Hi, I'm Rafa.
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              I build human-centered digital experiences that move with clarity, emotion, and purpose.
            </p>
          
            <div className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <p>
                I'm a front-end developer and creative technologist from Manila with roots in simulation, 
                storytelling, and self-reflective design. Whether it's optimizing traffic in a city or 
                building an AI journaling companion, I care about code that feels intuitive — and 
                interfaces that feel alive.
              </p>
            </div>
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
                <div className="w-1 h-3 bg-gradient-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;