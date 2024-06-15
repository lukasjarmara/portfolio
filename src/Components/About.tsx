import React from "react";

const About: React.FC = () => {
  return (
    <div
      className="bg-light pt-28 flex flex-col items-center lg:h-screen justify-center"
      id="about"
    >
      <p className="text-2xl font-bold mb-4">My Skills</p>
      <div className="w-3/4 mb-4 flex flex-col justify-center items-center sm:flex-row gap-4 mt-4">
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
        ].map((logo, index) => (
          <div
            className="relative group h-24 w-24 mb-4 flex flex-col items-center"
            key={index}
          >
            <div className="absolute bottom-full mb-2 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-semibold">{logo.alt}</p>
            </div>
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.alt}
              className="h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
