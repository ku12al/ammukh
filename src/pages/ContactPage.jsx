"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Hero Section */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 sm:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Get In <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-xl sm:max-w-3xl mx-auto leading-relaxed">
              Whether you're a founder looking for investment, an investor
              interested in co-investing, or just want to learn more about
              what we do, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info with background image behind */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <section className="w-full py-16 sm:py-20 relative overflow-hidden">
          {/* Background Image behind content */}
          <div
            className="absolute inset-0 bg-cover bg-repeat-x animate-pan-bg"
            style={{
              backgroundImage: "url(https://wallpapercave.com/wp/wp6944248.jpg)",
              zIndex: 0,
            }}
          ></div>

          {/* Content wrapper with higher z-index */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/30 backdrop-blur-md shadow-xl rounded-3xl p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
                {/* Contact Form */}
                <div className="bg-white/50 backdrop-blur-md shadow-md rounded-2xl p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Your first name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Your last name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium rounded-lg transition-colors"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="bg-white/50 backdrop-blur-md shadow-md rounded-2xl p-6 sm:p-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                      Contact Information
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-8">
                      We're here to help and answer any questions you might
                      have. We look forward to hearing from you.
                    </p>
                  </div>

                  <div className="space-y-6 text-gray-700">
                    {/* Offices */}
                    <div className="flex items-start space-x-4">
                      <svg
                        className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Our Offices
                        </h3>
                        <p>Gurugram, India</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <svg
                        className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                        <p>+91 9407684357</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <svg
                        className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                        <p>aamukhcapital@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Tailwind keyframe animation example */}
      <style jsx>{`
        @keyframes pan-bg {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-pan-bg {
          animation: pan-bg 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
