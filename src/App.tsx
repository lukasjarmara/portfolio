import React from "react";
import Hero from "./Components/Hero.tsx";
import About from "./Components/About.tsx";
import { Dock, DockIcon } from "./Components/magicui/dock.tsx";
import Work from "./Components/Work.tsx";
import Footer from "./Components/Footer.tsx";

const App: React.FC = () => {
  return (
    <div className="bg-light w-full min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Work />
        <About />
      </main>

      <nav className="fixed bottom-5 left-0 right-0 max-w-40 mx-auto sm:z-50">
        <Dock magnification={60} distance={140}>
          <DockIcon size={40}>
            <a href="#home">
              <span className="material-symbols-outlined font-semibold text-dark">
                home
              </span>
            </a>
          </DockIcon>
          <DockIcon size={40}>
            <a href="#work">
              <span className="material-symbols-outlined font-semibold text-dark">
                code
              </span>
            </a>
          </DockIcon>
          <DockIcon size={40}>
            <a href="#about">
              <span className="material-symbols-outlined font-semibold text-dark">
                person
              </span>
            </a>
          </DockIcon>
        </Dock>
      </nav>

      <div className="relative z-10 lg:z-0">
        <Footer />
      </div>
    </div>
  );
};

export default App;
