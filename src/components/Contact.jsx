import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaPhone />,
            title: "Phone",
            value: "+91 7995689429",
            link: "tel:+917995689429"
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "2200030339cseh@gmail.com",
            link: "mailto:2200030339cseh@gmail.com"
        }
    ];

    const socialLinks = [
        { icon: <FaGithub />, link: "https://github.com/Sushma618", label: "GitHub" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/thokala-sai-sushma-411242255/", label: "LinkedIn" }
    ];

    return (
        <div id="contact" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="section-title">Contact Me</h2>
               

                <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.link}
                            className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-gray-800/50
                                         hover:bg-gray-700/50 transition-all duration-300"
                        >
                            <div className="text-purple-400 w-6 h-6">{info.icon}</div>
                            <div>
                                <h3 className="text-lg font-medium text-purple-400">{info.title}</h3>
                                <p className="text-gray-300">{info.value}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 pt-6 border-t border-gray-800"
                >
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                                aria-label={social.label}
                            >
                                <div className="w-6 h-6">{social.icon}</div>
                            </a>
                        ))}
                    </div>
                    
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
