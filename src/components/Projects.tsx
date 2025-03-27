
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import BlurImage from './ui/BlurImage';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects. Built with Vue.js and Firebase, it offers real-time updates, task prioritization, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "TypeScript"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Real-Time Analytics Dashboard",
    description: "A data visualization dashboard for monitoring business metrics. Integrated with various APIs, it provides real-time insights through interactive charts and customizable widgets.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["React", "D3.js", "WebSockets", "Material-UI", "Express"],
    links: {
      demo: "#"
    }
  }
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      id="projects" 
      ref={ref}
      className="section-padding bg-secondary/30"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn(
            "inline-block py-1 px-3 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-medium transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            My Work
          </span>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Featured Projects
          </h2>
          
          <p className={cn(
            "text-muted-foreground transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Explore a selection of my recent work spanning various technologies and industries.
            Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group bg-card border border-border rounded-xl overflow-hidden transition-all duration-700 hover:shadow-xl",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <BlurImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-block py-1 px-2 bg-secondary text-secondary-foreground text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      className="flex items-center text-sm font-medium hover:text-accent-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  )}
                  
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      className="flex items-center text-sm font-medium hover:text-accent-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
