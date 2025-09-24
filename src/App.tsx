import React from "react";
import Hero from "./Components/Hero.tsx";
import About from "./Components/About.tsx";
import Contact from "./Components/Contact.tsx";
import { Dock, DockIcon } from "./Components/magicui/dock.tsx";
import Work from "./Components/Work.tsx";
import Footer from "./Components/Footer.tsx";

const App: React.FC = () => {
  return (
    <div className="dark bg-neutral-950 text-neutral-50 w-full min-h-screen flex flex-col antialiased">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 opacity-90"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-primary-950/20 via-transparent to-accent-950/20"></div>
      
      {/* Main content */}
      <main className="relative z-10 flex-grow">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>

      {/* Enhanced navigation dock */}
      <nav className="fixed bottom-6 left-0 right-0 max-w-64 mx-auto z-50">
        <Dock magnification={70} distance={150}>
          <DockIcon size={48}>
            <a
              href="#home"
              className="h-full w-full flex justify-center items-center group transition-all duration-300"
            >
              <span className="material-symbols-outlined font-medium text-neutral-300 group-hover:text-primary-400 transition-colors duration-300">
                home
              </span>
            </a>
          </DockIcon>
          <DockIcon size={48}>
            <a
              href="#work"
              className="h-full w-full flex justify-center items-center group transition-all duration-300"
            >
              <span className="material-symbols-outlined font-medium text-neutral-300 group-hover:text-primary-400 transition-colors duration-300">
                code
              </span>
            </a>
          </DockIcon>
          <DockIcon size={48}>
            <a
              href="#about"
              className="h-full w-full flex justify-center items-center group transition-all duration-300"
            >
              <span className="material-symbols-outlined font-medium text-neutral-300 group-hover:text-primary-400 transition-colors duration-300">
                person
              </span>
            </a>
          </DockIcon>
          <DockIcon size={48}>
            <a
              href="#contact"
              className="h-full w-full flex justify-center items-center group transition-all duration-300"
            >
              <span className="material-symbols-outlined font-medium text-neutral-300 group-hover:text-primary-400 transition-colors duration-300">
                mail
              </span>
            </a>
          </DockIcon>
        </Dock>
      </nav>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;
