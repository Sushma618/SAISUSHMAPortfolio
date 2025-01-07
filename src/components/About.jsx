import React from 'react';
import aboutImg from "../assets/me.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64 md:w-96 md:h-96"
        >
          <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-pulse-border" />
          <img
            src={aboutImg}
            alt="Professional headshot"
            className="relative w-full h-full object-cover rounded-full 
                     hover:scale-105 transition-transform duration-300
                     border-2 border-purple-500/50"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <p className="text-gray-300 leading-relaxed mb-8">
            As a Computer Science student with a CGPA of 9.64/10.0, I combine strong academic foundations 
            with hands-on development experience. I specialize in full-stack development using React, 
            Node.js, and cloud technologies, having successfully delivered projects like Library Management 
            and Hotel Booking systems. My expertise extends from frontend development to database design, 
            with a focus on creating scalable and user-friendly applications.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            I'm passionate about solving complex technical challenges through clean, efficient code and 
            innovative solutions. Currently seeking opportunities to contribute to meaningful projects 
            while expanding my skills in emerging technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a 
              href="#contact" 
              className="button-primary"
            >
              Get in Touch
            </a>
            <a 
              href="/path-to-resume" 
              className="glass-card px-6 py-3 rounded-full font-medium 
                       hover:transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;