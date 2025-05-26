import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonFade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-[#5271ff] font-medium text-lg">
                  — Smart Investment for Bright Futures
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#132229] leading-tight">
                  Built in <span className="text-[#5271ff]">Bharat</span>,<br />
                  For the <span className="text-[#5271ff]">World</span>.
                </h1>
                <p className="text-xl text-[#132229] leading-relaxed max-w-lg">
                  We Back India's Next Generation Of Breakout Founders—At
                  Inception And Inflection.
                </p>
              </div>
              <motion.div variants={buttonFade} initial="hidden" animate="show">
                <Link to="/about">
                  <button className="bg-[#5271ff] hover:bg-[#5271ff] text-[#FFFFFF] px-8 py-4 text-lg font-medium rounded-lg transition-transform hover:scale-105">
                    LEARN MORE ABOUT OUR PHILOSOPHY →
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Financial analytics and business growth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-5xl font-bold text-[#132229]"
            >
              Empowering India's Startup Ecosystem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#132229] max-w-3xl mx-auto"
            >
              We are a new-age venture capital firm focused on backing
              exceptional founders who are building the future of India and the
              world.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Early Stage Focus", "Founder First", "Global Vision"].map(
              (title, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-[#5271ff] rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#132229]">{title}</h3>
                  <p className="text-[#132229]">
                    {i === 0
                      ? "We invest at the inception stage when founders need us the most."
                      : i === 1
                      ? "Our philosophy is centered around supporting visionary founders."
                      : "Building companies that can compete and win on the global stage."}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full py-20 bg-[#5271ff]"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us in creating the next generation of breakthrough companies.
          </p>
          <motion.div variants={buttonFade} initial="hidden" whileInView="show">
            <Link to="/apply">
              <button className="bg-[#FFFFFF] text-[#5271ff] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg transition-transform hover:scale-105">
                APPLY NOW
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
