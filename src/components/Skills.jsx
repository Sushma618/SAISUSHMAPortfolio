import React from 'react'
import {motion} from "motion/react"
import { useInView } from "react-intersection-observer";

const Skills = () => {
    const skills = [
        "Java",
"Spring Boot",
"Hibernate",
"JavaScript",
"React.js",
"Node.js",
"HTML",
"CSS",
"MySQL",
"MongoDB",
"JPA",
"EJB",
"AWS",
"Oracle",
"Figma",
"Canva"


    ];

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div ref={ref} className="section-container">
            <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                Technical Skills
            </motion.h2>

            <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4
                                 hover:bg-purple-900/30 transition-all duration-300
                                 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                        <p className="text-center text-gray-200">{skill}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills