import React, { useState, useRef, useEffect } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Hello Lukas,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    const mailtoLink = `mailto:lukas.jarmara@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
      id="contact"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/80 to-transparent"></div>
      
      {/* Animated background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary-400 font-semibold text-lg tracking-wide uppercase">
            Let's Connect
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-neutral-100 mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  I'm always excited to discuss new opportunities, creative projects, and innovative ideas. 
                  Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-200">Email</h4>
                    <p className="text-neutral-400">lukas.jarmara@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
                  <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-200">Response Time</h4>
                    <p className="text-neutral-400">Usually within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-200">Availability</h4>
                    <p className="text-neutral-400">Open for new projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll" style={{ animationDelay: '400ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm border border-neutral-800/50">
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-200 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50 text-neutral-100 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-200 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50 text-neutral-100 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50 text-neutral-100 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white hover:shadow-glow hover:scale-[1.02] transform'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;