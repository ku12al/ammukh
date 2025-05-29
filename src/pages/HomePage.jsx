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
  const floatingCircles = [
    // Top left cluster
    {
      size: 24,
      top: "5%",
      left: "5%",
      bg: "bg-blue-500",
      opacity: 0.3,
      duration: 3,
      delay: 0,
    },
    {
      size: 32,
      top: "15%",
      left: "10%",
      bg: "bg-indigo-500",
      opacity: 0.2,
      duration: 4,
      delay: 2,
    },
    {
      size: 20,
      top: "25%",
      left: "8%",
      bg: "bg-purple-500",
      opacity: 0.25,
      duration: 3.5,
      delay: 1,
    },
    {
      size: 28,
      top: "10%",
      left: "15%",
      bg: "bg-pink-500",
      opacity: 0.2,
      duration: 2.5,
      delay: 3,
    },

    // Top right cluster
    {
      size: 18,
      top: "5%",
      right: "5%",
      bg: "bg-green-500",
      opacity: 0.15,
      duration: 4.5,
      delay: 4,
    },
    {
      size: 22,
      top: "20%",
      right: "10%",
      bg: "bg-yellow-500",
      opacity: 0.25,
      duration: 3,
      delay: 5,
    },
    {
      size: 26,
      top: "15%",
      right: "15%",
      bg: "bg-blue-400",
      opacity: 0.22,
      duration: 3.5,
      delay: 14,
    },
    {
      size: 30,
      top: "25%",
      right: "8%",
      bg: "bg-pink-400",
      opacity: 0.2,
      duration: 4,
      delay: 15,
    },

    // Bottom left cluster
    {
      size: 18,
      bottom: "5%",
      left: "5%",
      bg: "bg-purple-400",
      opacity: 0.18,
      duration: 3,
      delay: 16,
    },
    {
      size: 24,
      bottom: "10%",
      left: "10%",
      bg: "bg-green-400",
      opacity: 0.17,
      duration: 3.5,
      delay: 17,
    },
    {
      size: 20,
      bottom: "15%",
      left: "7%",
      bg: "bg-indigo-400",
      opacity: 0.2,
      duration: 3,
      delay: 18,
    },
    {
      size: 28,
      bottom: "8%",
      left: "12%",
      bg: "bg-pink-600",
      opacity: 0.25,
      duration: 4,
      delay: 19,
    },

    // Bottom right cluster
    {
      size: 16,
      bottom: "5%",
      right: "5%",
      bg: "bg-green-600",
      opacity: 0.15,
      duration: 2.5,
      delay: 20,
    },
    {
      size: 20,
      bottom: "10%",
      right: "12%",
      bg: "bg-blue-600",
      opacity: 0.2,
      duration: 3,
      delay: 21,
    },
    {
      size: 18,
      bottom: "15%",
      right: "10%",
      bg: "bg-purple-600",
      opacity: 0.22,
      duration: 3.5,
      delay: 22,
    },
    {
      size: 24,
      bottom: "8%",
      right: "7%",
      bg: "bg-indigo-600",
      opacity: 0.25,
      duration: 3,
      delay: 23,
    },

    // Far left vertical
    {
      size: 22,
      top: "40%",
      left: "1%",
      bg: "bg-yellow-700",
      opacity: 0.25,
      duration: 3.5,
      delay: 6,
    },
    {
      size: 22,
      top: "60%",
      left: "3%",
      bg: "bg-yellow-500",
      opacity: 0.25,
      duration: 3,
      delay: 7,
    },
    {
      size: 22,
      top: "80%",
      left: "1%",
      bg: "bg-yellow-300",
      opacity: 0.25,
      duration: 2.5,
      delay: 8,
    },

    // Far right vertical
    {
      size: 22,
      top: "40%",
      right: "1%",
      bg: "bg-yellow-500",
      opacity: 0.25,
      duration: 3,
      delay: 9,
    },
    {
      size: 22,
      top: "60%",
      right: "3%",
      bg: "bg-yellow-700",
      opacity: 0.25,
      duration: 3.5,
      delay: 10,
    },
    {
      size: 22,
      top: "80%",
      right: "1%",
      bg: "bg-yellow-300",
      opacity: 0.25,
      duration: 2.5,
      delay: 11,
    },

    // More scattered (avoiding center area)
    {
      size: 22,
      top: "15%",
      left: "25%",
      bg: "bg-yellow-500",
      opacity: 0.25,
      duration: 3,
      delay: 12,
    },
    {
      size: 22,
      top: "75%",
      right: "25%",
      bg: "bg-yellow-500",
      opacity: 0.25,
      duration: 3,
      delay: 13,
    },
    {
      size: 18,
      top: "85%",
      left: "20%",
      bg: "bg-yellow-400",
      opacity: 0.22,
      duration: 3.5,
      delay: 24,
    },
    {
      size: 20,
      top: "10%",
      right: "30%",
      bg: "bg-yellow-300",
      opacity: 0.25,
      duration: 3,
      delay: 25,
    },
    {
      size: 24,
      bottom: "15%",
      left: "25%",
      bg: "bg-yellow-600",
      opacity: 0.28,
      duration: 3.5,
      delay: 26,
    },
    {
      size: 18,
      top: "30%",
      right: "30%",
      bg: "bg-yellow-700",
      opacity: 0.22,
      duration: 2.5,
      delay: 27,
    },
    {
      size: 16,
      bottom: "20%",
      left: "30%",
      bg: "bg-yellow-500",
      opacity: 0.18,
      duration: 3,
      delay: 28,
    },

    // Extra for more coverage around edges
    {
      size: 22,
      top: "5%",
      left: "40%",
      bg: "bg-pink-400",
      opacity: 0.15,
      duration: 3,
      delay: 29,
    },
    {
      size: 22,
      bottom: "5%",
      right: "40%",
      bg: "bg-green-400",
      opacity: 0.18,
      duration: 3,
      delay: 30,
    },
  ];

  const imageHoverClasses =
    "transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl";

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
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
              <motion.div
                variants={buttonFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
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
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
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

      {/* Injected Full Aamukh Content Section */}
      <section className="w-full py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-24 text-[#132229]">
          {/* Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - slides from left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Why We Exist</h2>
              <p className="text-lg mb-4 italic">
                Aamukh means "threshold" or "opening act."
              </p>
              <p className="text-lg mb-2">
                We aim to be the first believer—the first cheque, the first to
                bet on belief before proof.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Spotting India's future unicorns at the college level</li>
                <li>Backing creators building companies</li>
                <li>
                  Supporting brands with cultural relevance, not just
                  product-market fit
                </li>
              </ul>
            </motion.div>

            {/* Image - slides from right + hover */}
            <motion.img
              src="https://i.ytimg.com/vi/7YK4-b_t1LM/maxresdefault.jpg"
              alt="Why We Exist"
              className={`rounded-xl ${imageHoverClasses}`}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - slides from left + hover */}
            <motion.img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
              alt="Conviction Platform"
              className={`rounded-xl order-1 lg:order-none ${imageHoverClasses}`}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            {/* Content - slides from right */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                We’re not just a fund. We’re a conviction platform.
              </h2>
              <p className="text-lg mb-2">
                India doesn’t lack ambition. It needs the systems and capital to
                turn ambition into lasting companies.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Scout the best student and early-stage founders</li>
                <li>Back them before the rest of the market sees them</li>
                <li>Scale them with belief and capital</li>
              </ul>
            </motion.div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - slides from left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                We don’t just write cheques. We back belief.
              </h2>
              <p className="text-lg mb-4">
                Aamukh exists to identify India’s next generation of iconic
                founders—and give them the belief, structure, and capital they
                need to win.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>That doesn’t wait for traction to invest.</li>
                <li>That doesn’t disappear after deploying capital.</li>
                <li>That doesn’t treat founders as portfolio “entries.”</li>
                <li>
                  We step in early. We stay when things get hard. We back the
                  first step—and every step after.
                </li>
              </ul>
            </motion.div>

            {/* Image - slides from right + hover */}
            <motion.img
              src="https://mycurrencyexchange.com/wp-content/uploads/2020/06/writing-a-check.jpg"
              alt="Back Belief"
              className={`rounded-xl order-1 lg:order-none ${imageHoverClasses}`}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Block 4 - Edge Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#132229]">
              Our Edge – Why We're Different
            </h2>

            <div className="overflow-x-auto">
              <div className="min-w-[600px] grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border border-gray-200 rounded-lg">
                <div className="p-6 space-y-4 border-b md:border-b-0 md:border-r border-gray-200">
                  <h4 className="text-xl font-semibold text-[#5271ff]">
                    What Others Do
                  </h4>
                  <ul className="list-disc ml-5 text-[#132229] space-y-1">
                    <li>Waits for traction</li>
                    <li>Follows signals</li>
                    <li>Deploys capital, then steps back</li>
                    <li>Optimizes for returns</li>
                    <li>Offers support when needed—not always-on</li>
                  </ul>
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-semibold text-[#5271ff]">
                    What Aamukh Does
                  </h4>
                  <ul className="list-disc ml-5 text-[#132229] space-y-1">
                    <li>Backs at idea or breakout moment</li>
                    <li>Builds conviction through founder-first lens</li>
                    <li>Optimizes for long-term founder relationships</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Snapshot of Our Model Section */}

      <section className="relative w-full py-20 bg-gray-50 overflow-hidden">
        {/* Multiple floating circles */}
        {floatingCircles.map(
          (
            { size, top, bottom, left, right, bg, opacity, duration, delay },
            i
          ) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${bg}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top,
                bottom,
                left,
                right,
                opacity,
              }}
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "loop",
                delay,
              }}
            />
          )
        )}

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-[#132229] text-center mb-16"
          >
            Snapshot of Our Model
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#132229] mb-4">
                  🚀 Discovery Program
                </h3>
                <p className="text-[#132229] mb-6">
                  Early-stage bets | Non-dilutive capital | PMF-focused
                </p>
              </div>
              <Link to="/discovery-program">
                <button className="mt-auto bg-[#5271ff] hover:bg-[#405be0] text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 w-full">
                  Explore Program →
                </button>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#132229] mb-4">
                  📈 Signal Series
                </h3>
                <p className="text-[#132229] mb-6">
                  Growth-stage deals | ₹1–10 Cr | High-signal, high-conviction
                </p>
              </div>
              <Link to="/signal-series">
                <button className="mt-auto bg-[#5271ff] hover:bg-[#405be0] text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 w-full">
                  Explore Series →
                </button>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#132229] mb-4">
                  🧭 Founder Fellowship
                </h3>
                <p className="text-[#132229] mb-6">
                  Exclusive cohort | Mentorship, capital, & resources |
                  Founder-first focus
                </p>
              </div>
              <Link to="/founder-fellowship">
                <button className="mt-auto bg-[#5271ff] hover:bg-[#405be0] text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 w-full">
                  Join Fellowship →
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Investment Philosophy Section */}
      <section
        className="w-full relative overflow-hidden"
        style={{ height: "700px" }}
      >
        {/* Sliding images wrapper */}
        <div className="absolute inset-0 z-0 overflow-hidden h-full w-full">
          <div
            className="flex animate-slide-step h-full"
            style={{
              width: "500vw", // 5 images * 100vw each
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
              alt="slide 1"
              className="w-screen h-full object-cover"
            />
            <img
              src="https://th.bing.com/th/id/OIP.jdu8EvPAO4808apRFR-TPAHaEo?rs=1&pid=ImgDetMain"
              alt="slide 2"
              className="w-screen h-full object-cover"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/015/286/533/non_2x/economy-and-finance-concept-financial-business-investment-statistics-with-stock-market-candlesticks-and-bar-chart-on-blue-background-vector.jpg"
              alt="slide 3"
              className="w-screen h-full object-cover"
            />
            <img
              src="https://happay.com/blog/wp-content/uploads/sites/12/2023/07/financial-assets-scaled.webp"
              alt="slide 4"
              className="w-screen h-full object-cover"
            />
            {/* Repeat first image for seamless looping */}
            <img
              src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
              alt="slide 1 repeat"
              className="w-screen h-full object-cover"
            />
          </div>
        </div>

        {/* Content on glass card */}
        <div
          className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col justify-center items-center h-[80%] mt-16"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "15px",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            padding: "2rem",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-[#132229] mb-6 flex justify-center items-center"
          >
            Our Investment Philosophy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl font-medium text-[#132229] mb-10 flex justify-center items-center"
          >
            Structured belief. Founder-first capital. Long-term conviction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-[#132229] leading-relaxed space-y-4 text-left max-w-3xl mx-auto"
          >
            <p>
              Aamukh backs founders early — and stays with them as they scale.
            </p>
            <p>We don’t wait for traction.</p>
            <p>We don’t follow trends.</p>
            <p>We don’t disappear after the cheque clears.</p>
            <p>
              We invest with a system — one that lets us:
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Spot breakout energy before traction</li>
                <li>Support founders with real operational help</li>
                <li>Double down when breakout becomes momentum</li>
              </ul>
            </p>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes slideStep {
            0% {
              transform: translateX(0);
            }
            15% {
              transform: translateX(0);
            }
            20% {
              transform: translateX(-100vw);
            }
            35% {
              transform: translateX(-100vw);
            }
            40% {
              transform: translateX(-200vw);
            }
            55% {
              transform: translateX(-200vw);
            }
            60% {
              transform: translateX(-300vw);
            }
            75% {
              transform: translateX(-300vw);
            }
            80% {
              transform: translateX(-400vw);
            }
            95% {
              transform: translateX(-400vw);
            }
            100% {
              transform: translateX(0);
            }
          }
          .animate-slide-step {
            animation: slideStep 25s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* The Dual Model Section */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#132229] text-center mb-4"
          >
            The Dual Model
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-center text-[#132229] mb-12"
          >
            Two tracks. One belief system.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-lg text-[#132229] max-w-3xl mx-auto mb-16"
          >
            Aamukh operates on two complementary tracks:
            <br />
            → One built for the inception moment
            <br />→ One built for the inflection point
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Track 1: Discovery Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-2xl font-semibold text-[#132229] mb-4">
                Track 1: Discovery Program
              </h3>
              <div className="space-y-2 text-[#132229] text-base">
                <p>
                  <strong>Stage:</strong> Idea, student, pre-PMF
                </p>
                <p>
                  <strong>Cheque Size:</strong> ₹5–25 lakhs
                </p>
                <p>
                  <strong>Equity:</strong> No dilution
                </p>
                <p>
                  <strong>Edge:</strong> Access + long-term rights + no-pressure
                  GTM help
                </p>
                <p>
                  <strong>Why it matters:</strong> We get in before the crowd
                </p>
              </div>
            </motion.div>

            {/* Track 2: Signal Series */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-2xl font-semibold text-[#132229] mb-4">
                Track 2: Signal Series
              </h3>
              <div className="space-y-2 text-[#132229] text-base">
                <p>
                  <strong>Stage:</strong> Post-PMF, early scale, breakout
                  traction
                </p>
                <p>
                  <strong>Cheque Size:</strong> ₹1–10 Cr
                </p>
                <p>
                  <strong>Equity:</strong> Standard (co-investment with top
                  investors)
                </p>
                <p>
                  <strong>Edge:</strong> Brand momentum + GTM + ops leverage
                </p>
                <p>
                  <strong>Why it matters:</strong> We join at the inflection,
                  not the peak
                </p>
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
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-[#132229]"
            >
              Empowering India's Startup Ecosystem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
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
                  viewport={{ once: true, amount: 0.3 }}
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
        viewport={{ once: true, amount: 0.3 }}
        className="w-full py-20 bg-[#5271ff]"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us in creating the next generation of breakthrough companies.
          </p>
          <motion.div
            variants={buttonFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link to="/apply">
              <button className="bg-[#FFFFFF] text-[#5271ff] hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg transition-transform hover:scale-105">
                APPLY NOW
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <style JSX>
        {`
        @keyframes slideBackground {
  0% { background-image: url('https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg'); }
  33% { background-image: url('/images/bg2.jpg'); }
  66% { background-image: url('/images/bg3.jpg'); }
  100% { background-image: url('/images/bg1.jpg'); }
}
.bg-slider {
  animation: slideBackground 15s infinite;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}
`}
      </style>
    </div>
  );
};

export default HomePage;
