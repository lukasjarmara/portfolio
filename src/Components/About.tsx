import React, { useEffect, useRef } from "react";

const About: React.FC = () => {
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

  const skills = [
    {
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      level: 95,
      category: "Frontend"
    },
    {
      name: "TypeScript",
      icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      level: 90,
      category: "Language"
    },
    {
      name: "JavaScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      level: 95,
      category: "Language"
    },
    {
      name: "Tailwind CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      level: 90,
      category: "Styling"
    },
    {
      name: "HTML5",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      level: 98,
      category: "Markup"
    },
    {
      name: "CSS3",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      level: 95,
      category: "Styling"
    },
    {
      name: "Python",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
      level: 80,
      category: "Backend"
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
      id="about"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/30 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-400 font-semibold text-lg tracking-wide uppercase">
            Expertise
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6">
            <span className="text-gradient-purple">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Constantly evolving and mastering the latest technologies to deliver exceptional digital experiences
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="animate-on-scroll group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-accent-500/10">
                
                {/* Skill icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-neutral-800/50 flex items-center justify-center group-hover:bg-neutral-700/50 transition-colors duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute -top-2 -right-2">
                    <span className="px-2 py-1 text-xs font-semibold text-accent-400 bg-accent-950/30 rounded-lg border border-accent-800/30">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Skill name */}
                <h3 className="text-lg font-semibold text-neutral-100 text-center mb-3 group-hover:text-accent-300 transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Skill level bar */}
                <div className="relative">
                  <div className="w-full h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full transition-all duration-1000 ease-out transform origin-left"
                      style={{ 
                        width: `${skill.level}%`,
                        transform: 'scaleX(0)',
                        animation: 'fillBar 1.5s ease-out forwards',
                        animationDelay: `${index * 100 + 500}ms`
                      }}
                    ></div>
                  </div>
                  <span className="absolute -top-6 right-0 text-xs font-medium text-neutral-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-500/5 to-accent-400/5"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About me section */}
        <div className="animate-on-scroll">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm border border-neutral-800/50">
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-neutral-100 mb-6">
                About Me
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                I'm a passionate front-end developer and UI/UX designer with a keen eye for creating 
                beautiful, functional digital experiences. With expertise in modern web technologies, 
                I transform ideas into engaging, user-friendly applications that make a real impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-4 py-2 bg-primary-950/30 border border-primary-800/30 rounded-lg">
                  <span className="text-primary-400 font-semibold">3+ Years Experience</span>
                </div>
                <div className="px-4 py-2 bg-accent-950/30 border border-accent-800/30 rounded-lg">
                  <span className="text-accent-400 font-semibold">10+ Projects Completed</span>
                </div>
                <div className="px-4 py-2 bg-purple-950/30 border border-purple-800/30 rounded-lg">
                  <span className="text-purple-400 font-semibold">Always Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for skill bar animation */}
      <style jsx>{`
        @keyframes fillBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
