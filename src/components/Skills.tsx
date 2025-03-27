
import { useInView } from 'react-intersection-observer';
import { Code, Server, Layout, Database, Cloud, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Skill {
  id: number;
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skills: Skill[] = [
  {
    id: 1,
    category: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    skills: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS/SCSS", "Tailwind CSS"]
  },
  {
    id: 2,
    category: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "Django", "Ruby on Rails", "Spring Boot", "Java", "Python", "C#", "PHP", "GraphQL"]
  },
  {
    id: 3,
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "DynamoDB", "SQLite", "Elasticsearch", "Cassandra"]
  },
  {
    id: 4,
    category: "DevOps & Cloud",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions", "Terraform", "Linux"]
  },
  {
    id: 5,
    category: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go", "Rust", "PHP", "Ruby", "Kotlin"]
  },
  {
    id: 6,
    category: "Security & Testing",
    icon: <Lock className="h-6 w-6" />,
    skills: ["Jest", "Cypress", "Selenium", "Mocha", "Chai", "OAuth", "JWT", "HTTPS", "OWASP", "Penetration Testing"]
  }
];

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      id="skills" 
      ref={ref}
      className="section-padding"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn(
            "inline-block py-1 px-3 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-medium transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Expertise
          </span>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Skills & Technologies
          </h2>
          
          <p className={cn(
            "text-muted-foreground transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            A comprehensive overview of my technical expertise, tools, and technologies
            that I leverage to build robust software solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className={cn(
                "bg-card border border-border rounded-xl p-6 transition-all duration-700 hover:shadow-md",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="mb-4 flex items-center">
                <div className="p-2 bg-accent rounded-lg mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item) => (
                  <span 
                    key={item}
                    className="py-1 px-3 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
