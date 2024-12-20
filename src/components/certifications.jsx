import React from "react";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const certificationsData = [
    { title: "AWS Certified Cloud Practitioner", description: "AWS cloud concepts certification." },
    { title: "NPTEL Certification in Java", description: "Certified in Java programming." },
    { title: "RedHat Certification", description: "Linux system administration skills." },
    { title: "Salesforce Certification", description: "Mastered cloud-based CRM." },
  ];

  const handleAnimation = (e) => {
    const element = e.currentTarget;
    element.classList.add("animate-boxShadow"); // Add animation class
    setTimeout(() => {
      element.classList.remove("animate-boxShadow"); // Remove class after animation
    }, 500); // Match animation duration
  };

  return (
    <div id="certifications" className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 uppercase">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              onClick={handleAnimation}
              className="bg-gray-800 border-2 border-purple-600 rounded-lg p-6 text-center cursor-pointer transition-transform"
            >
              <FaCertificate className="text-4xl text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-400">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
