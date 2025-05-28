import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ParticlesBackground from "../components/ParticlesBackground"

const team = [
  {
    name: "Anurag Sharma",
    title: "CEO",
    image: "/Anurag-sharma.png",
    bio: "Ex–India Accelerator, We Founder Circle\nDeals: Garuda Aerospace, iMumz, BluSmart, Crackle",
    linkedin: "https://www.linkedin.com/in/anurag-sharma-0361091b1/",
  },
  {
    name: "Ravi Gupta",
    title: "Chief Advisor",
    image: "/Ravi.png",
    bio: "Founder, SafeXPay\n100+ investments: Zypp, Vidyakul, Garuda Aerospace",
    linkedin: "https://www.linkedin.com/in/ravi-gupta-01883719/",
  },
  {
    name: "Arjun Prasad",
    title: "Chief Advisor",
    image: "/arjun-prashad.png",
    bio: "Partner, ECH Lab\nInvestor: Uber, Razorpay, 5ire, Delhivery",
    linkedin: "https://www.linkedin.com/in/aparjunprasad/",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const TeamPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-14 relative z-10">
        {/* Headline */}
        <motion.h1
          className="text-5xl font-bold text-gray-900"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Built by Believers.
        </motion.h1>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-xl rounded-2xl p-6 text-left"
              initial="hidden"
              animate="visible"
              custom={i + 2}
              variants={fadeUp}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center">{member.name}</h3>
              <p className="text-sm text-gray-600 text-center mb-2">{member.title}</p>
              <p className="text-gray-700 whitespace-pre-line text-sm text-center">
                {member.bio}
              </p>
              <div className="mt-4 flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  LinkedIn →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center space-y-4"
          initial="hidden"
          animate="visible"
          custom={team.length + 3}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-gray-900">Join Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We’re a lean team building India’s most belief-led venture platform. If you’re obsessed with founders,
            operations, and early-stage magic—<br />
            <strong>this is your place.</strong>
          </p>
          <Link to="/careers">
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Explore Opportunities
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default TeamPage
