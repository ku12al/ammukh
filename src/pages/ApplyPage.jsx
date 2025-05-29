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
  }, [calculateScrollProgress])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const arrowProgress = scrollProgress * (steps.length - 1)
  const arrowPosition = `${16 + scrollProgress * 75}%`
  const progressLineWidth = `${scrollProgress * 75}%`

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Hero Section */}
      <section className="w-full pt-28 sm:pt-20 lg:pt-24 py-16 sm:py-20 mt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Apply for <span className="text-blue-600">Funding</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ready to take your startup to the next level? We're looking for exceptional founders building the future.
              Tell us about your vision and let's explore how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Apply for Capital Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#132229] mb-10">
            We back belief—not just traction.
          </h2>

          <p className="text-xl text-center text-[#132229] mb-16">Choose your path:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#f4f7f9] rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#132229] mb-4">🧪 Discovery Program</h3>
              <ul className="text-[#132229] space-y-2 text-base mb-6">
                <li>● ₹5–25L</li>
                <li>● Non-dilutive</li>
                <li>● Best for student, idea-stage, or stealth founders</li>
              </ul>
              <a
                href="#"
                className="inline-block text-white bg-[#132229] hover:bg-black font-medium px-6 py-2 rounded-lg transition-all duration-300"
              >
                → Apply to Discovery
              </a>
            </div>

            <div className="bg-[#f4f7f9] rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#132229] mb-4">📡 Signal Series</h3>
              <ul className="text-[#132229] space-y-2 text-base mb-6">
                <li>● ₹1–10 Cr</li>
                <li>● For post-PMF, breakout-stage startups</li>
                <li>● Must have early signs of momentum</li>
              </ul>
              <a
                href="#"
                className="inline-block text-white bg-[#132229] hover:bg-black font-medium px-6 py-2 rounded-lg transition-all duration-300"
              >
                → Apply to Signal Series
              </a>
            </div>
          </div>

          <h3 className="text-3xl font-semibold text-center text-[#132229] mt-20 mb-10">
            What Happens After You Apply:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fdfdfd] rounded-2xl p-6 shadow-md border border-gray-200">
              <p className="text-lg text-[#132229] font-medium">You'll hear from our team within 7 days</p>
            </div>

            <div className="bg-[#fdfdfd] rounded-2xl p-6 shadow-md border border-gray-200">
              <p className="text-lg text-[#132229] font-medium">We'll ask for clarity, not a pitch deck</p>
            </div>

            <div className="bg-[#fdfdfd] rounded-2xl p-6 shadow-md border border-gray-200">
              <p className="text-lg text-[#132229] font-medium">You'll get honest feedback—no ghosting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section ref={containerRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>

          {/* Scroll Direction Indicator */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
              <span className="text-sm font-medium text-gray-600">Scroll Direction:</span>
              <span
                className={`text-sm font-bold ${scrollDirection === "down" ? "text-green-600" : "text-orange-600"}`}
              >
                {scrollDirection === "down" ? "↓ Forward" : "↑ Backward"}
              </span>
            </div>
          </div>

          <div className="relative h-32">
            {/* Connecting Line */}
            <div className="absolute top-[15%] left-32 w-[75%] h-1 bg-gray-300 z-0" />

            {/* Progress Line */}
            <div
              className={`absolute top-[15%] left-32 h-1 z-10 transition-all duration-200 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                width: progressLineWidth,
                background:
                  scrollDirection === "down"
                    ? "linear-gradient(to right, #3b82f6, #1d4ed8)"
                    : "linear-gradient(to right, #f97316, #dc2626)",
              }}
            />

            {/* Enhanced Moving Arrow */}
            <div
              className={`absolute top-[15%] transform -translate-y-1/2 z-20 transition-all duration-200 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                left: arrowPosition,
                transform: `translateX(-50%) translateY(-50%) ${scrollDirection === "up" ? "rotate(180deg)" : "rotate(0deg)"}`,
              }}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition-colors duration-200 ${
                  scrollDirection === "down"
                    ? "bg-gradient-to-r from-blue-500 to-blue-700"
                    : "bg-gradient-to-r from-orange-500 to-red-600"
                }`}
              >
                →
              </div>
            </div>

            {/* Step Circles */}
            <div className="flex justify-between relative z-20">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center w-1/4">
                  <div
                    className={`w-10 h-10 border-4 rounded-full flex items-center justify-center font-bold transition-all duration-300 transform ${
                      arrowProgress >= idx && isVisible
                        ? `${
                            scrollDirection === "down"
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "bg-orange-500 border-orange-500 text-white"
                          } scale-110 shadow-lg`
                        : `${
                            scrollDirection === "down"
                              ? "border-blue-600 text-blue-600"
                              : "border-orange-500 text-orange-500"
                          } bg-white scale-100`
                    }`}
                  >
                    {arrowProgress > idx && isVisible ? "✓" : step.number}
                  </div>
                  <p className="mt-2 font-semibold text-center">{step.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step Descriptions */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`p-4 text-center transition-all duration-300 transform ${
                  arrowProgress >= idx && isVisible ? "opacity-100 translate-y-0" : "opacity-50 translate-y-2"
                }`}
              >
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
              <span className="text-sm font-medium text-gray-600">Progress:</span>
              <span className={`text-sm font-bold ${scrollDirection === "down" ? "text-blue-600" : "text-orange-600"}`}>
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>

            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
              <span className="text-sm font-medium text-gray-600">Current Step:</span>
              <span className={`text-sm font-bold ${scrollDirection === "down" ? "text-blue-600" : "text-orange-600"}`}>
                {currentStep + 1} of {steps.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full py-20 bg-white">
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
