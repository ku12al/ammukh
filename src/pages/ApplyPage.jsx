"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaFlask,
  FaSatelliteDish,
  FaClock,
  FaFileAlt,
  FaCommentDots,
} from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What stage companies do you invest in?",
    answer:
      "We primarily invest in pre-seed and seed stage companies, though we occasionally consider idea-stage companies with exceptional founders and clear market opportunities.",
  },
  {
    question: "What is your typical investment size?",
    answer:
      "Our typical investment ranges from ₹50 lakhs to ₹5 crores, depending on the stage, funding requirements, and growth potential of the company.",
  },
  {
    question: "How long does the process take?",
    answer:
      "From application to final decision, our process typically takes 4-6 weeks. We aim to provide initial feedback within 2 weeks of receiving your application.",
  },
  {
    question: "Do you only invest in Indian companies?",
    answer:
      "While we focus primarily on Indian startups and founders, we're open to considering companies with strong India connections or those planning to expand into the Indian market.",
  },
];

// const fadeUpVariant = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};
const steps = [
  {
    number: 1,
    title: "Application",
    description: "Submit your application with company details and pitch deck",
  },
  {
    number: 2,
    title: "Review",
    description: "Our team reviews your application within 2 weeks",
  },
  {
    number: 3,
    title: "Meeting",
    description: "Initial meeting to discuss your vision and business model",
  },
  {
    number: 4,
    title: "Decision",
    description: "Final decision and term sheet if we move forward",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ApplyPage = () => {
  const containerRef = useRef(null);
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [arrowSize, setArrowSize] = useState(48);
  const [debugInfo, setDebugInfo] = useState({}); // Add debug info

  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    industry: "",
    stage: "",
    description: "",
    founderName: "",
    email: "",
    phone: "",
    linkedin: "",
    background: "",
    fundingAmount: "",
    revenue: "",
    useOfFunds: "",
    traction: "",
    pitchDeck: "",
    comments: "",
    terms: false,
  });

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Debug: Add console logs to see if animation is working
  useEffect(() => {
    console.log("Component mounted, starting animation timer");
    if (!isVisible) return;

    const timer = setInterval(() => {
      setArrowSize((size) => {
        const newSize = size === 48 ? 52 : 48;
        console.log("Arrow size changed to:", newSize);
        return newSize;
      });
    }, 1);

    return () => {
      console.log("Cleaning up animation timer");
      clearInterval(timer);
    };
  }, [isVisible]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Please accept the terms and conditions");
      return;
    }
    console.log("Application submitted:", formData);
    alert(
      "Application submitted successfully! We'll review it and get back to you within 2 weeks."
    );
  };

  const calculateScrollProgress = useCallback(() => {
    if (!containerRef.current) return 0;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementHeight = rect.height;

    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    const startOffset = windowHeight * 0.8;
    const endOffset = windowHeight * 0.2;

    let progress = 0;

    if (elementTop <= startOffset && elementBottom >= endOffset) {
      const totalAnimationDistance = startOffset + elementHeight - endOffset;
      const currentPosition = startOffset - elementTop;
      progress = Math.max(
        0,
        Math.min(1, currentPosition / totalAnimationDistance)
      );
    } else if (elementBottom < endOffset) {
      progress = 1;
    }

    return progress;
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection("up");
    }

    lastScrollY.current = currentScrollY;

    const progress = calculateScrollProgress();
    setScrollProgress(progress);

    const step = Math.floor(progress * (steps.length - 1));
    setCurrentStep(Math.max(0, Math.min(steps.length - 1, step)));

    // Debug info
    setDebugInfo({
      scrollY: currentScrollY,
      progress: Math.round(progress * 100),
      direction: scrollDirection,
      isVisible,
      arrowSize,
    });

    console.log("Scroll event:", {
      scrollY: currentScrollY,
      progress: Math.round(progress * 100),
      direction: scrollDirection,
      isVisible,
    });
  }, [calculateScrollProgress, scrollDirection, isVisible, arrowSize]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection observer triggered:", entry.isIntersecting);
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
      console.log("Observer attached to container");
    }

    return () => {
      console.log("Observer disconnected");
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log("Adding scroll listener");
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      console.log("Removing scroll listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const arrowProgress = scrollProgress * (steps.length - 1);
  const arrowPosition = 16 + scrollProgress * 75;
  const progressLineWidth = scrollProgress * 75;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        position: "relative",
      }}
    >
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{
          width: "100%",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          marginTop: "5rem",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
          }}
        >
          <motion.h1
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#111827",
            }}
          >
            Apply for <span style={{ color: "#2563eb" }}>Funding</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: "1.25rem",
              color: "#4b5563",
              maxWidth: "56rem",
              margin: "2rem auto 0",
              lineHeight: "1.75",
            }}
          >
            Ready to take your startup to the next level? We're looking for
            exceptional founders building the future. Tell us about your vision
            and let's explore how we can help you succeed.
          </motion.p>
        </div>
      </motion.section>

      {/* Apply for Capital Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ width: "100%", padding: "5rem 0", backgroundColor: "white" }}
      >
        <div
          style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <motion.h2
            custom={0}
            variants={fadeInUp}
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              color: "#132229",
              marginBottom: "2.5rem",
            }}
          >
            We back belief—not just traction.
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeInUp}
            style={{
              fontSize: "1.25rem",
              textAlign: "center",
              color: "#132229",
              marginBottom: "4rem",
            }}
          >
            Choose your path:
          </motion.p>

          {/* Capital Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {[
              {
                title: "Discovery Program",
                icon: <FaFlask size={28} style={{ marginRight: "0.5rem" }} />,
                points: [
                  "₹5–25L",
                  "Non-dilutive",
                  "Best for student, idea-stage, or stealth founders",
                ],
                linkText: "→ Apply to Discovery",
              },
              {
                title: "Signal Series",
                icon: (
                  <FaSatelliteDish
                    size={28}
                    style={{ marginRight: "0.5rem" }}
                  />
                ),
                points: [
                  "₹1–10 Cr",
                  "For post-PMF, breakout-stage startups",
                  "Must have early signs of momentum",
                ],
                linkText: "→ Apply to Signal Series",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                custom={index + 2}
                variants={fadeInUp}
                style={{
                  backgroundColor: "#f4f7f9",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  border: "1px solid #e5e7eb",
                }}
              >
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#132229",
                    marginBottom: "1rem",
                  }}
                >
                  {card.icon}
                  {card.title}
                </h3>
                <ul style={{ color: "#132229", marginBottom: "1.5rem" }}>
                  {card.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>
                      ● {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  style={{
                    display: "inline-block",
                    color: "white",
                    backgroundColor: "#132229",
                    fontWeight: "500",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "0.5rem",
                    textDecoration: "none",
                  }}
                >
                  {card.linkText}
                </a>
              </motion.div>
            ))}
          </div>

          {/* What Happens Next */}
          <motion.h3
            custom={4}
            variants={fadeInUp}
            style={{
              fontSize: "1.875rem",
              fontWeight: "600",
              textAlign: "center",
              color: "#132229",
              marginTop: "5rem",
              marginBottom: "2.5rem",
            }}
          >
            What Happens After You Apply:
          </motion.h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              padding: "0 1rem", // Padding for smaller screens
            }}
          >
            {[
              {
                text: "You'll hear from our team within 7 days",
                icon: <FaClock size={36} color="#2563eb" />,
              },
              {
                text: "We'll ask for clarity, not a pitch deck",
                icon: <FaFileAlt size={36} color="#2563eb" />,
              },
              {
                text: "You'll get honest feedback—no ghosting",
                icon: <FaCommentDots size={36} color="#2563eb" />,
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                custom={5 + i}
                variants={fadeInUp}
                style={{
                  backgroundColor: "#fdfdfd",
                  borderRadius: "1rem",
                  padding: "2rem 1rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  minHeight: "200px",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>{step.icon}</div>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "#132229",
                    fontWeight: "500",
                    lineHeight: "1.5",
                  }}
                >
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Application Process */}
      <section
        ref={containerRef}
        style={{ minHeight: "70vh", backgroundColor: "white" }}
      >
        <div
          style={{ maxWidth: "78rem", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            Our Process
          </h2>

          {/* Scroll Direction Indicator */}
          {/* <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#f3f4f6",
                borderRadius: "9999px",
                padding: "0.5rem 1rem",
              }}
            >
              <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#4b5563", marginRight: "0.5rem" }}>
                Scroll Direction:
              </span>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  color: scrollDirection === "down" ? "#10b981" : "#f97316",
                }}
              >
                {scrollDirection === "down" ? "↓ Forward" : "↑ Backward"}
              </span>
            </div>
          </div> */}

          <div style={{ position: "relative", height: "8rem" }}>
            {/* Connecting Line */}
            <div
              style={{
                position: "absolute",
                top: "15%",
                left: "12.5%",
                width: "75%",
                height: "4px",
                backgroundColor: "#d1d5db",
                zIndex: 0,
              }}
            />

            {/* Progress Line */}
            <div
              style={{
                position: "absolute",
                top: "15%",
                left: "12.5%",
                height: "4px",
                zIndex: 10,
                transition: "all 0.3s ease-out",
                opacity: isVisible ? 1 : 0,
                width: `${progressLineWidth}%`,
                background:
                  scrollDirection === "down"
                    ? "linear-gradient(to right, #3b82f6, #1d4ed8)"
                    : "linear-gradient(to right, #f97316, #dc2626)",
              }}
            />

            {/* Enhanced Moving Arrow */}
            <div
              style={{
                position: "absolute",
                top: "15%",
                left: ` ${arrowPosition}%`,
                transform: `translateX(-50%) translateY(-50%) ${
                  scrollDirection === "up" ? "rotate(180deg)" : "rotate(0deg)"
                }`,
                zIndex: 20,
                transition: "all 2s ease-out",
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div
                style={{
                  width: `${arrowSize}px`,
                  height: `${arrowSize}px`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  boxShadow: `0 0 20px ${
                    scrollDirection === "down"
                      ? "rgba(59, 130, 246, 0.6)"
                      : "rgba(249, 115, 22, 0.6)"
                  }`,
                  backgroundColor:
                    scrollDirection === "down" ? "#2563eb" : "#f97316",
                  transition:
                    "width 2s ease-out, height 1s ease-out, box-shadow 2s ease-out",
                }}
              >
                →
              </div>
            </div>

            {/* Step Circles */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 20,
              }}
            >
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "25%",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderWidth: "4px",
                      borderStyle: "solid",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      transition: "all 0.3s ease-out",
                      transform:
                        arrowProgress >= idx && isVisible
                          ? "scale(1.1)"
                          : "scale(1)",
                      backgroundColor:
                        arrowProgress >= idx && isVisible
                          ? scrollDirection === "down"
                            ? "#2563eb"
                            : "#f97316"
                          : "white",
                      borderColor:
                        scrollDirection === "down" ? "#2563eb" : "#f97316",
                      color:
                        arrowProgress >= idx && isVisible
                          ? "white"
                          : scrollDirection === "down"
                          ? "#2563eb"
                          : "#f97316",
                      boxShadow:
                        arrowProgress >= idx && isVisible
                          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                          : "none",
                    }}
                  >
                    {arrowProgress > idx && isVisible ? "✓" : step.number}
                  </div>
                  <p
                    style={{
                      marginTop: "0.5rem",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Step Descriptions */}
          <div
            style={{
              marginTop: "4rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  transition: "all 0.3s ease-out",
                  transform:
                    arrowProgress >= idx && isVisible
                      ? "translateY(0)"
                      : "translateY(0.5rem)",
                  opacity: arrowProgress >= idx && isVisible ? 1 : 0.5,
                }}
              >
                <h4
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ color: "#4b5563" }}>{step.description}</p>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          {/* <div
            style={{ marginTop: "3rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#f3f4f6",
                borderRadius: "9999px",
                padding: "0.5rem 1rem",
              }}
            >
              <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#4b5563", marginRight: "0.5rem" }}>
                Progress:
              </span>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  color: scrollDirection === "down" ? "#2563eb" : "#f97316",
                }}
              >
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#f3f4f6",
                borderRadius: "9999px",
                padding: "0.5rem 1rem",
              }}
            >
              <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#4b5563", marginRight: "0.5rem" }}>
                Current Step:
              </span>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  color: scrollDirection === "down" ? "#2563eb" : "#f97316",
                }}
              >
                {currentStep + 1} of {steps.length}
              </span>
            </div>
          </div> */}
        </div>
      </section>

      {/* Rest of your form and FAQ sections remain the same */}
      {/* Application Form */}
      <section className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-lg rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Funding Application
            </h2>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* --- Company Information --- */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Company Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Company Name *"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your company name"
                  />
                  <Input
                    label="Website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourcompany.com"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Industry *"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    options={[
                      { label: "FinTech", value: "fintech" },
                      { label: "EdTech", value: "edtech" },
                      { label: "HealthTech", value: "healthtech" },
                      { label: "E-commerce", value: "ecommerce" },
                      { label: "SaaS", value: "saas" },
                      { label: "AI/ML", value: "ai" },
                      { label: "Other", value: "other" },
                    ]}
                  />
                  <Select
                    label="Stage *"
                    name="stage"
                    value={formData.stage}
                    onChange={handleInputChange}
                    required
                    options={[
                      { label: "Idea Stage", value: "idea" },
                      { label: "MVP", value: "mvp" },
                      { label: "Pre-Seed", value: "pre-seed" },
                      { label: "Seed", value: "seed" },
                      { label: "Series A", value: "series-a" },
                    ]}
                  />
                </div>
                <Textarea
                  label="Company Description *"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe what your company does..."
                />
              </div>

              {/* --- Founder Information --- */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Founder Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Founder Name *"
                    name="founderName"
                    value={formData.founderName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                  <Input
                    label="Email *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Phone *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 9876543210"
                  />
                  <Input
                    label="LinkedIn Profile"
                    name="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <Textarea
                  label="Background & Experience *"
                  name="background"
                  value={formData.background}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your background..."
                />
              </div>

              {/* --- Business Details --- */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Business Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Funding Amount Sought *"
                    name="fundingAmount"
                    value={formData.fundingAmount}
                    onChange={handleInputChange}
                    required
                    options={[
                      { label: "Under ₹50 Lakhs", value: "under-50k" },
                      { label: "₹50 Lakhs - ₹1 Crore", value: "50k-1cr" },
                      { label: "₹1 Crore - ₹5 Crores", value: "1cr-5cr" },
                      { label: "₹5 Crores - ₹10 Crores", value: "5cr-10cr" },
                      { label: "Above ₹10 Crores", value: "above-10cr" },
                    ]}
                  />
                  <Input
                    label="Current Revenue (Monthly)"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    placeholder="₹0 if pre-revenue"
                  />
                </div>
                <Textarea
                  label="Use of Funds *"
                  name="useOfFunds"
                  value={formData.useOfFunds}
                  onChange={handleInputChange}
                  required
                  placeholder="How will you use the funding?"
                />
                <Textarea
                  label="Traction & Milestones"
                  name="traction"
                  value={formData.traction}
                  onChange={handleInputChange}
                  placeholder="Share key metrics or milestones..."
                />
              </div>

              {/* --- Additional Information --- */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Additional Information
                </h3>
                <Input
                  label="Pitch Deck URL"
                  name="pitchDeck"
                  type="url"
                  value={formData.pitchDeck}
                  onChange={handleInputChange}
                  placeholder="Drive or Dropbox link"
                />
                <Textarea
                  label="Additional Comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Anything else you'd like to add..."
                />
              </div>

              <div className="pt-6 text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="text-indigo-600" />
                    ) : (
                      <ChevronDown className="text-indigo-600" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-700 mt-4 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyPage;

// ----- Reusable Input and Textarea Components -----
const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  rows = 4,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const Select = ({ label, name, value, onChange, options, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
