import React from "react";

const projects = [
  {
    title: "Future Port Youth",
    description: "A full-fletch website for a company I am working with",
    link: "https://futureportyouth.com/",
  },
  {
    title: "Chatroom",
    description:
      "A chatroom application built with React and Firebase. Includes real-time messaging and room selection",
    link: "https://jarmara-chatroom.web.app/",
  },
  {
    title: "Habit Tracker",
    description:
      "A basic habit tracker with a login using Firebase API, build in React",
    link: "https://jarmara-habit-tracker.web.app/",
  },
  {
    title: "Thoughts dump",
    description:
      "A simple app to dump whatever you are thinking. Built with React and Firebase",
    link: "https://jarmara-thought-dump.web.app/",
  },
];

const Work: React.FC = () => {
  return (
    <section
      className="min-h-screen my-8 px-4 flex flex-col justify-center bg-secondaryLight"
      id="work"
    >
      <h2 className="text-3xl font-bold text-center mb-6">My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block transform scale-[0.99] transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="bg-light p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-40 ">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-dark text-base">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
