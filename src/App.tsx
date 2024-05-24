import React from "react";
import Nav from "./Components/Nav.tsx";
import "./index.css";
import Hero from "./Components/Hero.tsx";

const App: React.FC = () => {
  return (
    <div className="bg-light w-screen h-screen">
      <Nav />
      <main className="">
        <Hero />a
      </main>
    </div>
  );
};

export default App;
