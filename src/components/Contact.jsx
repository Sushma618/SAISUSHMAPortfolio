import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            value: "Andhra Pradesh, India",
            link: "#"
        }
    ];

    const socialLinks = [
        { icon: <FaGithub />, link: "#", label: "GitHub" },
        { icon: <FaLinkedin />, link: "#", label: "LinkedIn" },
        { icon: <FaEnvelope />, link: "mailto:2200030339cseh@gmail.com", label: "Email" }
    ];

    return (
        <div id="contact" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="section-title">Get In Touch</h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    I'm currently open to new opportunities and collaborations. 
                    Feel free to reach out if you'd like to connect!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.link}
                                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50
                                         hover:bg-gray-700/50 transition-all duration-300 group"
                            >
                                <div className="bg-purple-500/20 p-4 rounded-lg 
                                            group-hover:bg-purple-500/30 transition-colors">
                                    <div className="text-purple-400 w-6 h-6">
                                        {info.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-purple-400">{info.title}</h3>
                                    <p className="text-gray-300">{info.value}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700
                                         focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                                         text-gray-300 placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700
                                         focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                                         text-gray-300 placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700
                                         focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                                         text-gray-300 placeholder-gray-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 rounded-lg bg-purple-500 text-white font-medium
                                     hover:bg-purple-600 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-gray-800"
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
                                <div className="w-6 h-6">
                                    {social.icon}
                                </div>
                            </a>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-4">
                        © 2024 Thokala Sai Sushma. All rights reserved.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;