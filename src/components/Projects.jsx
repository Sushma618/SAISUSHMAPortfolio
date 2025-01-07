import React from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectsImage1 from "../assets/me.jpg";
import ProjectsImage2 from "../assets/Project2.jpg";
import ProjectsImage3 from "../assets/Project3.jpg";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "GradeMate - Assignment Management System",
            description: "A comprehensive web platform built with Spring Boot that streamlines academic workflows through digital assignment submissions, automated grading, and interactive feedback systems.",
            image: ProjectsImage1,
            technologies: ["JSP", "Spring Boot", "MySQL"],
            githubLink: "https://github.com/Sushma618/sdp_grademate.git",
            liveLink: "#"
        },
        {
            id: 2,
            title: "Library Management System",
            description: "A comprehensive library management solution built with React and Node.js, featuring real-time book tracking and user management.",
            image: ProjectsImage2,
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            githubLink: "#",
            liveLink: "#"
        }
    ];

    return (
        <div id="projects" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <h2 className="section-title">Featured Projects</h2>
                <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
                    Showcasing my expertise in full-stack development through real-world applications.
                    Each project demonstrates my commitment to clean code and user-centered design.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800/50 rounded-xl overflow-hidden group hover:shadow-xl 
                                     hover:shadow-purple-500/10 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a 
                                        href={project.githubLink}
                                        className="text-gray-400 hover:text-purple-400 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    <a 
                                        href={project.liveLink}
                                        className="text-gray-400 hover:text-purple-400 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;