import React, { useEffect, useState } from "react";
import WordRotate from "./magicui/word-rotate.tsx";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
      id="home"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/10 via-transparent to-accent-950/10 animate-gradient bg-[length:400%_400%]"></div>
      </div>

      {/* Interactive mouse glow effect */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 ease-out pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary-500/30 rounded-full animate-float opacity-40`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Greeting with subtle animation */}
        <div className="mb-6 animate-fade-up">
          <span className="text-lg md:text-xl font-medium text-neutral-400 tracking-wide">
            Hello, I'm
          </span>
        </div>

        {/* Main heading with gradient text */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-up animation-delay-200">
          <span className="text-gradient bg-gradient-to-r from-neutral-100 via-primary-400 to-accent-400 bg-clip-text text-transparent">
            Lukas
          </span>
        </h1>

        {/* Rotating subtitle */}
        <div className="mb-12 animate-fade-up animation-delay-400">
          <WordRotate 
            className="text-2xl md:text-4xl lg:text-5xl font-medium text-neutral-300"
            words={[
              "Front-End Developer",
              "UI/UX Designer", 
              "Problem Solver",
              "Digital Creator"
            ]}
            duration={3000}
          />
        </div>

        {/* CTA Button */}
        <div className="animate-fade-up animation-delay-600">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-glow hover:scale-105 transform"
          >
            <span>View My Work</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
