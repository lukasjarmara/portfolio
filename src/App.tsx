import React from "react";
import Hero from "./Components/Hero.tsx";
import About from "./Components/About.tsx";
import { Dock, DockIcon } from "./Components/magicui/dock.tsx";
import Work from "./Components/Work.tsx";
import Footer from "./Components/Footer.tsx";
const App: React.FC = () => {
  return (
    <div className="bg-light w-full">
      <main className="w-max-full">
        <Hero />
        <Work />
        <About />
      </main>
      <nav className="fixed bottom-5 w-full">
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
          <DockIcon size={40}>
            <a href="#contact">
              <span className="material-symbols-outlined font-semibold text-dark">
                mail
              </span>
            </a>
          </DockIcon>
        </Dock>
      </nav>
      <Footer />
    </div>
  );
};

export default App;
