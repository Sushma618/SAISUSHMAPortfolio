import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Certifications from "./components/Certifications";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-[#0e0c1e]">
      <Navbar />
      <Home />
      <About />
      <Certifications />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;

