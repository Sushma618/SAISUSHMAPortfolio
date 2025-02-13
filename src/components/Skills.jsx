import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiSpringboot } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ]
    },
    {
      title: "Backend Development",
      skills: [
     
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      ]
    }
  ];

  return (
    <div id="skills" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Technical Proficiency
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group"
          >
            <h3 className="text-2xl font-bold text-purple-500 mb-6 
                         group-hover:translate-x-2 transition-transform">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center space-x-3 p-3 rounded-lg
                           bg-gray-800/50 hover:bg-gray-700/50
                           transition-all duration-300"
                >
                  <div className="text-2xl">
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional: Add a summary or call-to-action */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-gray-400 mt-12 max-w-2xl mx-auto"
      >
        Continuously expanding my skill set and staying updated with the latest technologies
        to deliver innovative and efficient solutions.
      </motion.p>
    </div>
  );
};

export default Skills; 