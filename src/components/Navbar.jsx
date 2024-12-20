import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Projects", to: "Projects" },
    { id: 3, text: "Certifications", to: "certifications" },
    { id: 4, text: "Contact", to: "Contact" },
  ];

  return (
    <div className="fixed w-full top-0 z-50 backdrop-blur-sm bg-gray-900/80">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center py-4 px-8 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <span className="text-white">THOKALA</span>
          <span className="gradient-text"> SAI SUSHMA</span>
        </div>
        
        <ul className="flex items-center space-x-8">
          {items.map(({ id, text, to }) => (
            <li key={id}>
              <Link 
                to={to} 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
        
        <button className="button-primary">
          Download CV
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center p-4">
        <div className="text-xl font-bold text-white">SAI SUSHMA</div>
        <motion.div onClick={() => setMenu((prev) => !prev)} className="cursor-pointer">
          {menu ? (
            <MdOutlineClose size={30} className="text-purple-500" />
          ) : (
            <LuMenu size={30} className="text-white" />
          )}
        </motion.div>
      </div>

      {/* Mobile Menu Items */}
      {menu && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 text-white p-6"
        >
          <ul className="space-y-4">
            {items.map(({ id, text, to }) => (
              <li key={id} className="text-lg">
                <Link to={to} smooth={true} duration={500} offset={-70}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <a className="block mt-4 bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full text-center">
            Download CV
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
