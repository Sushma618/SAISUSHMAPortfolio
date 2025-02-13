import React from "react";
import avatar from "../assets/me.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div id="home" className="min-h-screen flex flex-col justify-center items-center py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Profile container with border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  style={{
                    objectPosition: "center 20%"
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center lg:text-left max-w-xl"
          >
            <h2 className="text-xl text-purple-400 font-medium mb-4">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text animate-gradient">THOKALA SAI SUSHMA</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
               Computer Science Student
            </p>
            <p className="text-gray-400 mb-8">
              Passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
            
            

            {/* Social Links */}
            <div className="flex gap-6 mt-8 justify-center lg:justify-start">
              <a href="https://github.com/Sushma618" className="text-gray-400 hover:text-purple-400 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/thokala-sai-sushma-411242255/">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:2200030339cseh@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
  <FaEnvelope size={24} />
</a>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;