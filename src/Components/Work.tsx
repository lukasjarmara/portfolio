import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "Future Port Youth",
    description: "A full-featured modern website for a youth organization with interactive elements and responsive design",
    link: "https://futureportyouth.com/",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    featured: true,
  },
  {
    title: "fox.cz",
    description: "E-commerce platform specializing in premium gadgets for the VW ID. Buzz electric vehicle",
    link: "https://fox.cz/",
    tech: ["React", "Next.js", "Commerce"],
    category: "E-commerce",
    featured: false,
  },
  {
    title: "Budvar Collaboration Signal Festival",
    description:
      "Fullstack application for the 2024 Signal Festival projected to the Prague's City Library",
    link: "https://www.signalfestival.com/historie/2024/budejovicky-budvar-produktova-kampan/",
  },
];

const Work: React.FC = () => {
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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
      id="work"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary-400 font-semibold text-lg tracking-wide uppercase">
            Portfolio
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that blend creativity with functionality. 
            Each project represents a unique challenge solved with modern technology.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`animate-on-scroll group relative ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Project card */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700/80 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary-500/10">
                  
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-950/10 via-transparent to-accent-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className={`relative z-10 p-8 ${project.featured ? 'lg:p-12' : ''}`}>
                    
                    {/* Category and featured badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-950/30 rounded-full border border-primary-800/30">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 text-xs font-semibold text-accent-400 bg-accent-950/30 rounded-full border border-accent-800/30">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Project title */}
                    <h3 className={`font-display font-bold text-neutral-100 mb-4 group-hover:text-primary-300 transition-colors duration-300 ${
                      project.featured ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'
                    }`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-neutral-400 leading-relaxed mb-6 ${
                      project.featured ? 'text-lg lg:text-xl' : 'text-base'
                    }`}>
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm font-medium text-neutral-300 bg-neutral-800/50 rounded-lg border border-neutral-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View project button */}
                    <div className="flex items-center gap-2 text-primary-400 font-semibold group-hover:text-primary-300 transition-colors duration-300">
                      <span>View Project</span>
                      <svg 
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/5 to-accent-500/5"></div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <p className="text-neutral-400 mb-6">Interested in seeing more projects?</p>
          <a
            href="mailto:lukas.jarmara@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-neutral-300 border border-neutral-700 hover:border-primary-500 rounded-xl transition-all duration-300 hover:text-primary-300 hover:shadow-lg hover:shadow-primary-500/10"
          >
            <span>Get in touch</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
