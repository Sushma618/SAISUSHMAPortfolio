import React from 'react'; 
import { motion } from 'framer-motion'; 
import { FaExternalLinkAlt } from 'react-icons/fa'; 
import aws from "../assets/aws.png"; 
import redhat from "../assets/redhat.png"; 
import nptel from "../assets/nptel.png"; 
import salesforce from "../assets/salesforce.png";

const Certifications = () => {
    const certifications = [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023",
            credentialLink: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:7f6c0192-1e9f-4dc2-a0c0-cac50c181b40",
            avatar: aws
        },
        {
            title: "NPTEL Certification in Software Testing",
            issuer: "NPTEL",
            date: "2023",
            credentialLink: "https://1drv.ms/b/c/198f50e3de9512aa/EchNjO1MRmVPr83ENsBorEkB5zMBtrvqL2c_y3r47iEjpA",
            avatar: nptel
        },
        {
            title: "RedHat Certification",
            issuer: "Red Hat",
            date: "2023",
            credentialLink: "https://www.credly.com/badges/82a7c0c9-13c5-4f9c-8f7d-05448717a25f/public_url",
            avatar: redhat
        },
        {
            title: "Salesforce Certification",
            issuer: "Salesforce",
            date: "2023",
            credentialLink: "https://1drv.ms/b/c/198f50e3de9512aa/EeiZ8UylI_pKn5aGm-lelmUBBV9IxdplSZ9udM3D8Cllyw",
            avatar: salesforce
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
                            className="bg-gray-800/50 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img src={cert.avatar} alt={`${cert.title} logo`} className="w-full h-full object-cover" />
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
