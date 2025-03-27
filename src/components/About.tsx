
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import BlurImage from './ui/BlurImage';
import { cn } from '@/lib/utils';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      id="about" 
      ref={ref}
      className="section-padding"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className={cn(
              "inline-block py-1 px-3 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-medium transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              About Me
            </span>
            
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Software Engineer with a passion for elegant solutions
            </h2>
            
            <div className={cn(
              "space-y-4 text-muted-foreground transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <p>
                I'm Chitron Bhattacharjee, a software engineer focused on building high-performance applications with clean, maintainable code. With expertise in full-stack development, I combine technical precision with creative problem-solving.
              </p>
              <p>
                My journey in software development began with a fascination for how technology can solve real-world problems. This curiosity led me to pursue a degree in Computer Science and has guided my professional path ever since.
              </p>
              <p>
                I specialize in modern web technologies, cloud architecture, and building scalable systems. When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>
            
            <div className={cn(
              "mt-8 transition-all duration-700 delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              >
                Let's Connect
              </a>
            </div>
          </div>
          
          <div className={cn(
            "lg:order-2 transition-all duration-1000",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-accent/30 blur-2xl opacity-50 -z-10"></div>
              <div className="aspect-square overflow-hidden rounded-2xl border border-border shadow-lg">
                <BlurImage
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Chitron Bhattacharjee"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass rounded-lg py-3 px-4 shadow-lg">
                <p className="text-sm font-medium">5+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
