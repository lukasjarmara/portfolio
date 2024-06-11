import React from "react";
import WordRotate from "./magicui/word-rotate.tsx";

const Hero: React.FC = () => {
  return (
    <div
      className="bg-light h-screen flex flex-col justify-center items-center"
      id="home"
    >
      <h1 className="text-5xl font-bold">Hi, I'm Lukas</h1>
      <WordRotate
        words={[
          "A Front-End Developer",
          "A UI/UX Designer",
          "A Problem Solver",
        ]}
        className="text-3xl"
      />
    </div>
  );
};

export default Hero;
