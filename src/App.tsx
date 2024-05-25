import React from "react";
import Nav from "./Components/Nav.tsx";
import "./index.css";
import Hero from "./Components/Hero.tsx";
import About from "./Components/About.tsx";
const App: React.FC = () => {
  return (
    <div className="bg-light w-full">
      <Nav />
      <main className="w-max-full">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
