
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import BlurImage from './ui/BlurImage';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 -z-10 opacity-10 scale-110"
      >
        <BlurImage
          src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w=2070&auto=format&fit=crop"
          alt="Abstract background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-medium opacity-0 animate-fade-up">
            Software Engineer & Developer
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up animate-delay-100">
            Chitron Bhattacharjee
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl opacity-0 animate-fade-up animate-delay-200">
            Building elegant software solutions with precision and creativity.
            Transforming complex problems into intuitive user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animate-delay-300">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              View Projects
            </a>
            
            <a 
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in animate-delay-700"
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ArrowDown className="h-4 w-4 animate-pulse-subtle" />
      </a>
    </section>
  );
};

export default Hero;
