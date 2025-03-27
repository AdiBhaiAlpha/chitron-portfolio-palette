
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: '#' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: '#' },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, url: 'mailto:contact@chitronbhattacharjee.com' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">Chitron Bhattacharjee</h2>
            <p className="text-primary-foreground/70">Building elegant software solutions</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="p-2 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors duration-200"
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {currentYear} Chitron Bhattacharjee. All rights reserved.
          </p>
          
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-4 md:mt-0">
            <li>
              <a href="#home" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
