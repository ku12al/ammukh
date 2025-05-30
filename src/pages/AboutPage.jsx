import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const scaleImage = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const AboutPage = () => {
  const sections = [
    {
      title: "Who We Are",
      content: (
        <>
          Aamukh Capital is a new-age venture capital platform that backs Indian
          founders before the market believes—and stays with them long after the
          crowd catches up.
          <br />
          <br />
          We operate through a dual-engine model:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>
              The Discovery Program – Non-dilutive, founder-first capital at the
              idea or student stage
            </li>
            <li>
              The Signal Series – ₹1–10 Cr cheques at high-momentum inflection
              points
            </li>
          </ul>
          <br />
          But at the core of everything is one belief:
          <strong>
            {" "}
            Ideas evolve. Great founders endure. We back founders—not forecasts.
          </strong>
        </>
      ),
      image: "https://www.pngmart.com/files/22/Illustration-Art-PNG-HD.png",
      reverse: false,
    },
    {
      title: "What 'Aamukh' Means",
      content: (
        <>
          Aamukh (आमख) means threshold or opening act—the beginning of something
          powerful. That’s how we see ourselves in every founder journey:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>The first call</li>
            <li>The first cheque</li>
            <li>The first structured conviction in your corner</li>
          </ul>
        </>
      ),
      image:
        "https://www.pngall.com/wp-content/uploads/12/Illustration-PNG-Photo.png",
      reverse: true,
    },
    {
      title: "Why We Exist",
      content: (
        <>
          India’s venture landscape is growing, but it’s still crowded with
          consensus thinking and FOMO-driven capital.
          <br />
          <br />
          We built Aamukh to be different:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>We spot breakout energy before the pitch deck</li>
            <li>We invest from our own balance sheet in every deal</li>
            <li>
              We offer real help when founders ask—not dashboards and check-ins
            </li>
          </ul>
        </>
      ),
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/007/264/277/small_2x/q-and-a-or-faq-concept-with-tiny-people-characters-big-question-mark-frequently-asked-questions-template-vector.jpg",
      reverse: false,
    },
    {
      title: "Our Vision",
      content: (
        <>
          To build India’s most founder-aligned early-stage capital
          platform—scouting, backing, and scaling ideas that shape the next
          decade.
          <br />
          <br />
          We’re not chasing the “next big thing.” We’re backing people who
          become the next big thing.
        </>
      ),
      image:
        "https://www.iconindia.org/upload/images/page/1684568780-mission.png",
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full pt-28 sm:pt-20 lg:pt-24 py-16 sm:py-20 mt-20 bg-white">
        <motion.div
          className="max-w-4xl mx-auto px-6 space-y-10 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900"
            variants={fadeUp}
          >
            About Us – <span className="text-blue-600">Aamukh Capital</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 leading-relaxed"
            variants={fadeUp}
          >
            We don’t just fund startups. We build conviction systems that find
            them first—and back them longer.
          </motion.p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="w-full py-20 space-y-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                section.reverse ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="w-full md:w-1/2" variants={scaleImage}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-xl w-full max-h-80 md:max-h-96 object-cover"
                />
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 space-y-4"
                variants={section.reverse ? fadeRight : fadeLeft}
              >
                <h2 className="text-3xl font-bold text-blue-600">
                  {section.title}
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-blue-50 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl font-bold text-blue-600"
          variants={fadeUp}
        >
          Let’s Build Together
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto"
          variants={fadeUp}
        >
          Whether you're a founder starting from a dorm room, or an LP who
          believes in conviction-first capital—there’s a place for you at
          Aamukh.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 pt-6"
          variants={fadeUp}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/apply">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Apply for Capital
              </button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="">
              <button className="bg-blue-100 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-200 transition">
                Join Our LP Circle
              </button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/contact">
              <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                Talk to the Team
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
