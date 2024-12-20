import React from 'react';
import ProjectsImage1 from "../assets/onlinesubmission.png";
import ProjectsImage2 from "../assets/library.jpg";
import ProjectsImage3 from "../assets/hotelbooking.jpg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
    const project = [
        {
            id: 11,
            title: "Online Assignment Submission and Grading System",
            description: "Developed a Spring Boot application enabling teachers to upload, grade, and provide feedback on assignments while students submit assignments, track deadlines, and view grades.",
            image: ProjectsImage1,  // Use the imported image
            alt: "Online Assignment Submission",  // Image alt text
            link: "#",
        },
        {
            id: 12,
            title: "Library Management System",
            description: "Designed a web application to manage library operations using JSP, JSF, JPA, and EJB. Integrated MySQL for efficient data storage and retrieval.",
            image: ProjectsImage2,  // Use the imported image
            alt: "Library Management System",  // Image alt text
            link: "#",
        },
        {
            id: 137,
            title: "Hotel Booking Management System",
            description: "Built a real-time hotel booking platform using React.js, Node.js, and MongoDB. Ensured smooth backend functionality and user-friendly design.",
            image: ProjectsImage3,  // Use the imported image
            alt: "Hotel Booking System",  // Image alt text
            link: "#",
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div id="Projects" ref={ref} className="section-container">
            <motion.h2 className="section-title">
                Projects
            </motion.h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                Showcase of my latest work and projects
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.map((project) => (
                    <motion.div
                        key={project.id}
                        className="card group"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative overflow-hidden rounded-lg mb-4">
                            <img 
                                src={project.image} 
                                alt={project.alt} 
                                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-purple-400">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                            {project.description}
                        </p>
                        <button className="button-primary text-sm">
                            View Details
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
