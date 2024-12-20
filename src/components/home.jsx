import React from "react";
import avatar from "../assets/me.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent animate-gradient" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-500/20 rounded-full animate-float"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.random() * 10 + 10 + "s"
            }}
          />
        ))}
      </div>
      
      <motion.img
        src={avatar}
        className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 
                   border-purple-500/50 shadow-xl relative z-10 hover:border-purple-400 
                   transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      
      <motion.div
        className="text-center mt-8 relative z-10 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
          THOKALA SAI SUSHMA
        </h1>
        <motion.span 
          className="text-2xl md:text-3xl font-medium text-purple-400 block mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Aspiring Software Engineer
        </motion.span>
        
        <motion.p 
          className="text-gray-300 text-lg mt-6 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Passionate about creating innovative solutions with expertise in 
          <span className="text-purple-400"> Full Stack Development</span>,
          <span className="text-purple-400"> Cloud Technologies</span>, and
          <span className="text-purple-400"> Problem Solving</span>.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="/SAISUSHMATHOKALA_PROFILE.pdf"
            download
            className="button-primary flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="group-hover:animate-bounce" />
            Download Resume
          </motion.a>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600/20 
                         transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + index * 0.2 }}
              >
                <link.icon className="w-6 h-6 text-purple-400" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce mt-2" />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
