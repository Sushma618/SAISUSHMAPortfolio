import React from 'react';
import aboutImg from "../assets/me.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div id="about" ref={ref} className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div 
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group">
            <img
              src={aboutImg}
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-center 
                         transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        <motion.div 
          className="md:w-2/3 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-300">
            Hello! I'm <span className="text-purple-400 font-bold">Thokala Sai Sushma</span>, 
            a Computer Science student with a strong academic background (CGPA: 9.64/10.0).
          </p>
          <p className="text-lg text-gray-300">
            I have hands-on experience in web development, full-stack projects.
            I've built impactful applications such as Library Management and Hotel Booking systems.
          </p>
          <p className="text-lg text-gray-300">
            My goal is to create innovative solutions while enhancing my skills in a collaborative environment.
            I'm eager to contribute to challenging projects by applying my knowledge of algorithms, data structures, and OOP principles.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
