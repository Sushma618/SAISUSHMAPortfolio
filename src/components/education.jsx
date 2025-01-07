import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import kluLogo from "../assets/klu-logo.png";
import narayanaLogo from "../assets/narayana-logo.png";
import presidencyLogo from "../assets/presidency-logo.png";

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const education = [
    {
      logo: kluLogo,
      school: "KL University",
      grade: "9.81 CGPA",
      location: "Vijayawada, AP",
      duration: "2021 - 2025",
      icon: FaGraduationCap,
      color: "red-600"
    },
    {
      logo: narayanaLogo,
      school: "Narayana Jr College",
      grade: "950 Marks",
      location: "Singapore City, TG",
      duration: "2019 - 2021",
      icon: FaSchool,
      color: "red-600"
    },
    {
      logo: presidencyLogo,
      school: "Presidency High School",
      grade: "9.5 CGPA",
      location: "Yadagirigutta, TG",
      duration: "Up To 2019",
      icon: FaSchool,
      color: "red-600"
    }
  ];

  return (
    <div id="education" ref={ref} className="section-container">
      <motion.h2 
        className="text-4xl font-bold text-red-600 mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        MY EDUCATION
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {education.map((item, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white p-2">
                <img 
                  src={item.logo} 
                  alt={item.school}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.school}
                </h3>
                <p className="text-lg font-semibold text-red-500 mb-2">
                  {item.grade}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="education-badge">
                    <item.icon className="w-4 h-4" />
                    {item.location}
                  </span>
                  <span className="education-badge">
                    {item.duration}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
    </div>
  );
};

export default Education;
