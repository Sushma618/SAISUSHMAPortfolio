import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    const certifications = [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023",
            description: "Comprehensive understanding of AWS Cloud concepts, services, and deployment models.",
            credentialLink: "#",
            skills: ["Cloud Computing", "AWS Services", "Security"]
        },
        {
            title: "NPTEL Certification in Java",
            issuer: "IIT Kharagpur",
            date: "2023",
            description: "Advanced Java programming concepts and application development fundamentals.",
            credentialLink: "#",
            skills: ["Java", "OOP", "Data Structures"]
        },
        {
            title: "RedHat Certification",
            issuer: "Red Hat",
            date: "2023",
            description: "Enterprise Linux system administration and configuration management.",
            credentialLink: "#",
            skills: ["Linux", "System Admin", "Shell Scripting"]
        },
        {
            title: "Salesforce Certification",
            issuer: "Salesforce",
            date: "2023",
            description: "CRM platform development and customization expertise.",
            credentialLink: "#",
            skills: ["Salesforce", "Apex", "Lightning"]
        }
    ];

    return (
        <div id="certifications" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="section-title">Professional Certifications</h2>
                <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
                    Continuous learning and professional development through industry-recognized certifications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800/50 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 
                                     transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                                    <FaAward className="text-purple-400 w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                                            {cert.title}
                                        </h3>
                                        <a 
                                            href={cert.credentialLink}
                                            className="text-gray-400 hover:text-purple-400 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaExternalLinkAlt size={16} />
                                        </a>
                                    </div>
                                    <p className="text-purple-400 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                                    <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex}
                                                className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Certifications;