"use client"

import { useState, useRef, useCallback, useEffect } from "react"

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
]

const ApplyPage = () => {
  const containerRef = useRef(null)
  const lastScrollY = useRef(0)
  const [scrollDirection, setScrollDirection] = useState("down")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [arrowSize, setArrowSize] = useState(48)
  const [debugInfo, setDebugInfo] = useState({}) // Add debug info

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
  })

  // Debug: Add console logs to see if animation is working
  useEffect(() => {
    console.log("Component mounted, starting animation timer")
    if (!isVisible) return

    const timer = setInterval(() => {
      setArrowSize((size) => {
        const newSize = size === 48 ? 52 : 48
        console.log("Arrow size changed to:", newSize)
        return newSize
      })
    }, 1)

    return () => {
      console.log("Cleaning up animation timer")
      clearInterval(timer)
    }
  }, [isVisible])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.terms) {
      alert("Please accept the terms and conditions")
      return
    }
    console.log("Application submitted:", formData)
    alert("Application submitted successfully! We'll review it and get back to you within 2 weeks.")
  }

  const calculateScrollProgress = useCallback(() => {
    if (!containerRef.current) return 0

    const rect = containerRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementHeight = rect.height

    const elementTop = rect.top
    const elementBottom = rect.bottom

    const startOffset = windowHeight * 0.8
    const endOffset = windowHeight * 0.2

    let progress = 0

    if (elementTop <= startOffset && elementBottom >= endOffset) {
      const totalAnimationDistance = startOffset + elementHeight - endOffset
      const currentPosition = startOffset - elementTop
      progress = Math.max(0, Math.min(1, currentPosition / totalAnimationDistance))
    } else if (elementBottom < endOffset) {
      progress = 1
    }

    return progress
  }, [])

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY.current) {
      setScrollDirection("down")
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection("up")
    }

    lastScrollY.current = currentScrollY

    const progress = calculateScrollProgress()
    setScrollProgress(progress)

    const step = Math.floor(progress * (steps.length - 1))
    setCurrentStep(Math.max(0, Math.min(steps.length - 1, step)))

    // Debug info
    setDebugInfo({
      scrollY: currentScrollY,
      progress: Math.round(progress * 100),
      direction: scrollDirection,
      isVisible,
      arrowSize,
    })

    console.log("Scroll event:", {
      scrollY: currentScrollY,
      progress: Math.round(progress * 100),
      direction: scrollDirection,
      isVisible,
    })
  }, [calculateScrollProgress, scrollDirection, isVisible, arrowSize])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection observer triggered:", entry.isIntersecting)
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
      console.log("Observer attached to container")
    }

    return () => {
      console.log("Observer disconnected")
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    console.log("Adding scroll listener")
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      console.log("Removing scroll listener")
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const arrowProgress = scrollProgress * (steps.length - 1)
  const arrowPosition = 16 + scrollProgress * 75
  const progressLineWidth = scrollProgress * 75

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", position: "relative" }}>

      {/* Hero Section */}
      <section
        style={{
          width: "100%",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          marginTop: "5rem",
          backgroundColor: "white",
        }}
      >
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#111827" }}>
              Apply for <span style={{ color: "#2563eb" }}>Funding</span>
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#4b5563",
                maxWidth: "56rem",
                margin: "2rem auto 0",
                lineHeight: "1.75",
              }}
            >
              Ready to take your startup to the next level? We're looking for exceptional founders building the future.
              Tell us about your vision and let's explore how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Apply for Capital Section */}
      <section style={{ width: "100%", padding: "5rem 0", backgroundColor: "white" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              color: "#132229",
              marginBottom: "2.5rem",
            }}
          >
            We back belief—not just traction.
          </h2>

          <p style={{ fontSize: "1.25rem", textAlign: "center", color: "#132229", marginBottom: "4rem" }}>
            Choose your path:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            <div
              style={{
                backgroundColor: "#f4f7f9",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#132229", marginBottom: "1rem" }}>
                🧪 Discovery Program
              </h3>
              <ul style={{ color: "#132229", marginBottom: "1.5rem" }}>
                <li style={{ marginBottom: "0.5rem" }}>● ₹5–25L</li>
                <li style={{ marginBottom: "0.5rem" }}>● Non-dilutive</li>
                <li>● Best for student, idea-stage, or stealth founders</li>
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
                → Apply to Discovery
              </a>
            </div>

            <div
              style={{
                backgroundColor: "#f4f7f9",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#132229", marginBottom: "1rem" }}>
                📡 Signal Series
              </h3>
              <ul style={{ color: "#132229", marginBottom: "1.5rem" }}>
                <li style={{ marginBottom: "0.5rem" }}>● ₹1–10 Cr</li>
                <li style={{ marginBottom: "0.5rem" }}>● For post-PMF, breakout-stage startups</li>
                <li>● Must have early signs of momentum</li>
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
                → Apply to Signal Series
              </a>
            </div>
          </div>

          <h3
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
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            <div
              style={{
                backgroundColor: "#fdfdfd",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb",
              }}
            >
              <p style={{ fontSize: "1.125rem", color: "#132229", fontWeight: "500" }}>
                You'll hear from our team within 7 days
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#fdfdfd",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb",
              }}
            >
              <p style={{ fontSize: "1.125rem", color: "#132229", fontWeight: "500" }}>
                We'll ask for clarity, not a pitch deck
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#fdfdfd",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb",
              }}
            >
              <p style={{ fontSize: "1.125rem", color: "#132229", fontWeight: "500" }}>
                You'll get honest feedback—no ghosting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section ref={containerRef} style={{minHeight: "70vh", backgroundColor: "white" }}>
        <div style={{ maxWidth: "78rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", textAlign: "center", marginBottom: "4rem" }}>
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
                left:` ${arrowPosition}%`,
                transform: `translateX(-50%) translateY(-50%) ${scrollDirection === "up" ? "rotate(180deg)" : "rotate(0deg)"}`,
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
                  boxShadow: `0 0 20px ${scrollDirection === "down" ? "rgba(59, 130, 246, 0.6)" : "rgba(249, 115, 22, 0.6)"}`,
                  backgroundColor: scrollDirection === "down" ? "#2563eb" : "#f97316",
                  transition: "width 2s ease-out, height 1s ease-out, box-shadow 2s ease-out",
                }}
              >
                →
              </div>
            </div>

            {/* Step Circles */}
            <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 20 }}>
              {steps.map((step, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "25%" }}>
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
                      transform: arrowProgress >= idx && isVisible ? "scale(1.1)" : "scale(1)",
                      backgroundColor:
                        arrowProgress >= idx && isVisible
                          ? scrollDirection === "down"
                            ? "#2563eb"
                            : "#f97316"
                          : "white",
                      borderColor: scrollDirection === "down" ? "#2563eb" : "#f97316",
                      color:
                        arrowProgress >= idx && isVisible
                          ? "white"
                          : scrollDirection === "down"
                            ? "#2563eb"
                            : "#f97316",
                      boxShadow: arrowProgress >= idx && isVisible ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
                    }}
                  >
                    {arrowProgress > idx && isVisible ? "✓" : step.number}
                  </div>
                  <p style={{ marginTop: "0.5rem", fontWeight: "600", textAlign: "center" }}>{step.title}</p>
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
                  transform: arrowProgress >= idx && isVisible ? "translateY(0)" : "translateY(0.5rem)",
                  opacity: arrowProgress >= idx && isVisible ? 1 : 0.5,
                }}
              >
                <h4 style={{ fontWeight: "bold", fontSize: "1.125rem", marginBottom: "0.5rem" }}>{step.title}</h4>
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
      <section className="w-full bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-lg rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Funding Application</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Company Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourcompany.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select industry</option>
                      <option value="fintech">FinTech</option>
                      <option value="edtech">EdTech</option>
                      <option value="healthtech">HealthTech</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="saas">SaaS</option>
                      <option value="ai">AI/ML</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stage *</label>
                    <select
                      name="stage"
                      value={formData.stage}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select stage</option>
                      <option value="idea">Idea Stage</option>
                      <option value="mvp">MVP</option>
                      <option value="pre-seed">Pre-Seed</option>
                      <option value="seed">Seed</option>
                      <option value="series-a">Series A</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe what your company does, the problem you're solving, and your solution..."
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Founder Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Founder Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Founder Name *</label>
                    <input
                      type="text"
                      name="founderName"
                      value={formData.founderName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Background & Experience *</label>
                  <textarea
                    name="background"
                    value={formData.background}
                    onChange={handleInputChange}
                    placeholder="Tell us about your background, previous experience, and what makes you the right person to solve this problem..."
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Business Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Business Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Funding Amount Sought *</label>
                    <select
                      name="fundingAmount"
                      value={formData.fundingAmount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select amount</option>
                      <option value="under-50k">Under ₹50 Lakhs</option>
                      <option value="50k-1cr">₹50 Lakhs - ₹1 Crore</option>
                      <option value="1cr-5cr">₹1 Crore - ₹5 Crores</option>
                      <option value="5cr-10cr">₹5 Crores - ₹10 Crores</option>
                      <option value="above-10cr">Above ₹10 Crores</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Revenue (Monthly)</label>
                    <input
                      type="text"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                      placeholder="₹0 if pre-revenue"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Use of Funds *</label>
                  <textarea
                    name="useOfFunds"
                    value={formData.useOfFunds}
                    onChange={handleInputChange}
                    placeholder="How will you use the funding? (e.g., product development, marketing, hiring, etc.)"
                    rows={3}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Traction & Milestones</label>
                  <textarea
                    name="traction"
                    value={formData.traction}
                    onChange={handleInputChange}
                    placeholder="Share key metrics, user growth, partnerships, or other significant milestones..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Additional Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pitch Deck URL</label>
                  <input
                    type="url"
                    name="pitchDeck"
                    value={formData.pitchDeck}
                    onChange={handleInputChange}
                    placeholder="Google Drive, Dropbox, or other shareable link"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Please ensure the link is publicly accessible</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Anything else you'd like us to know about your company or this application..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                    I agree to the terms and conditions and privacy policy. I understand that submitting this
                    application does not guarantee funding and that Aamukh Capital will review my application and
                    respond within 2 weeks.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-medium rounded-lg transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What stage companies do you invest in?</h3>
              <p className="text-gray-700">
                We primarily invest in pre-seed and seed stage companies, though we occasionally consider idea-stage
                companies with exceptional founders and clear market opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is your typical investment size?</h3>
              <p className="text-gray-700">
                Our typical investment ranges from ₹50 lakhs to ₹5 crores, depending on the stage, funding requirements,
                and growth potential of the company.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does the process take?</h3>
              <p className="text-gray-700">
                From application to final decision, our process typically takes 4-6 weeks. We aim to provide initial
                feedback within 2 weeks of receiving your application.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you only invest in Indian companies?</h3>
              <p className="text-gray-700">
                While we focus primarily on Indian startups and founders, we're open to considering companies with
                strong India connections or those planning to expand into the Indian market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ApplyPage