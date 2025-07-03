const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, 
              or just having a conversation about technology and design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rafa@example.com"
                className="bg-gradient-accent text-accent-foreground px-8 py-4 rounded-full hover:shadow-glow transition-all duration-smooth font-medium"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/rafa"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-8 py-4 rounded-full hover:bg-card-hover transition-all duration-smooth font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;