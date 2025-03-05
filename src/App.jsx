import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Certifications from "./components/certifications";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
        
        {/* Content */}
        <div className="relative">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;