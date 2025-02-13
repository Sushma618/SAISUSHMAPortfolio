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
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src={aboutImg}
                alt="Profile"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                style={{
                  objectPosition: "center 20%"
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <p className="text-gray-300 leading-relaxed mb-8">
            I am a Computer Science student with a CGPA of 9.64/10.0, proficient in Java with a strong foundation in 
            object-oriented programming, data structures, and algorithms. I have hands-on experience with Spring Boot, 
            web technologies, and cloud platforms like AWS. My expertise spans backend development, database management, 
            and front-end frameworks such as React.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            I have successfully developed and contributed to projects such as an Online Assignment Submission System, 
            and a Library Management System. Passionate about problem-solving and 
            learning emerging technologies, I continuously seek opportunities to apply my skills and contribute to 
            innovative solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a 
              href="https://1drv.ms/b/c/198f50e3de9512aa/EXv3Fun0WAtJro8VZnZF6O0BQBA1TYwA2zJYW_g_WSZJUg?e=jtAL8EView" 
              className="glass-card px-6 py-3 rounded-full font-medium bg-purple-400 text-white border border-purple-400 hover:bg-purple-500 transform hover:-translate-y-1"
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
