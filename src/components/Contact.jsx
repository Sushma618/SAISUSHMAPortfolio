import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const contactInfo = [
        { icon: FaPhone, title: "Phone", value: "7995689429" },
        { icon: FaEnvelope, title: "Email", value: "2200030339cseh@gmail.com" },
        { icon: FaMapMarkerAlt, title: "Location", value: "AP, INDIA" }
    ];

    return (
        <div id="Contact" ref={ref} className="section-container">
            <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                Get In Touch
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
                <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 group">
                            <div className="bg-purple-600/20 p-4 rounded-full 
                                          group-hover:bg-purple-600 transition-colors duration-300">
                                <item.icon className="w-6 h-6 text-purple-400 
                                                    group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-purple-400">{item.title}</h3>
                                <p className="text-gray-300">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div 
                    className="mt-8 md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <form className="space-y-6">
                        <input 
                            type="text" 
                            placeholder="Your Name"
                            className="w-full p-3 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            className="w-full p-3 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                        <textarea 
                            rows="4"
                            placeholder="Your Message"
                            className="w-full p-3 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        ></textarea>
                        <button className="button-primary w-full">Send Message</button>
                    </form>
                </motion.div>
            </div>

            <motion.div 
                className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <p className="text-gray-400">© 2024 Sai Sushma. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <FaGithub className="w-6 h-6" />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
