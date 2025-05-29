import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-500 mb-2">Aamukh Capital</h2>
          <p className="text-sm text-gray-300">
            Empowering your financial journey with expert insights and personalized solutions.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold border-l-4 border-blue-500 pl-2 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Our Services</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold border-l-4 border-blue-500 pl-2 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2" />123 Finance Street, Indore, MP, India</li>
            <li className="flex items-center"><FaPhoneAlt className="mr-2" />+91 98765 43210</li>
            <li className="flex items-center"><FaEnvelope className="mr-2" />info@aamukhcapital.com</li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-12 text-center text-sm text-gray-400 border-t border-gray-700 pt-6"
      >
        &copy; 2025 Aamukh Capital. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
