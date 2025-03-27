
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="section-padding bg-secondary/30"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn(
            "inline-block py-1 px-3 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-medium transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Get in Touch
          </span>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Let's Work Together
          </h2>
          
          <p className={cn(
            "text-muted-foreground transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Have a project in mind or just want to say hello? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className={cn(
            "lg:col-span-1 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-accent rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:contact@chitronbhattacharjee.com" 
                    className="text-muted-foreground hover:text-accent-foreground transition-colors"
                  >
                    contact@chitronbhattacharjee.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-accent rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-accent-foreground transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-accent rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "lg:col-span-2 transition-all duration-700 delay-500",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <form 
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-6 md:p-8"
            >
              {submitMessage && (
                <div className="mb-6 p-4 bg-accent/30 text-accent-foreground rounded-lg">
                  {submitMessage}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 outline-none"
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
