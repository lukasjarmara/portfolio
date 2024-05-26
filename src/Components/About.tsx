import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-light h-screen pt-28 flex flex-col items-center">
      <p className="text-2xl font-bold mb-4">My Skills</p>
      <div className="w-3/4 mb-4 flex flex-row gap-4 justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React"
          className="h-24 w-24 mb-4"
        />
        <img
          src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
          alt="TypeScript"
          className="h-24 w-24 mb-4"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="JavaScript"
          className="h-24 w-24 mb-4"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          alt="Tailwind CSS"
          className="h-24 w-24 mb-4"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="HTML"
          className="h-24 w-24 mb-4"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt="CSS"
          className="h-24 w-24 mb-4"
        />
      </div>
    </div>
  );
};

export default About;
