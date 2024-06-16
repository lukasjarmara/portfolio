import React from "react";

const About: React.FC = () => {
  return (
    <div
      className="bg-light  flex flex-col items-center lg:h-screen justify-center"
      id="about"
    >
      <p className="text-2xl font-bold mb-12">My Skills</p>
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {[
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            alt: "React",
          },
          {
            src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
            alt: "TypeScript",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            alt: "JavaScript",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
            alt: "Tailwind CSS",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            alt: "HTML",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            alt: "CSS",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
            alt: "Python",
          },
        ].map((logo, index) => (
          <div
            className="relative group mb-2 sm:mb-3 md:mb-4 flex flex-col items-center h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32"
            key={index}
          >
            <div className="absolute bottom-full mb-1 sm:mb-2 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-xs sm:text-sm font-semibold">{logo.alt}</p>
            </div>
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.alt}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
