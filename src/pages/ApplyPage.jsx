"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ApplyPage = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Apply for <span className="text-blue-600">Funding</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ready to take your startup to the next level? We're looking for
              exceptional founders building the future. Tell us about your
              vision and let's explore how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Apply for Capital Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-center text-[#132229] mb-10"
          >
            We back belief—not just traction.
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-center text-[#132229] mb-16"
          >
            Choose your path:
          </motion.p>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Discovery Program Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f4f7f9] rounded-2xl p-6 shadow-md border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-[#132229] mb-4">
                🧪 Discovery Program
              </h3>
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
            </motion.div>

            {/* Signal Series Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f4f7f9] rounded-2xl p-6 shadow-md border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-[#132229] mb-4">
                📡 Signal Series
              </h3>
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
            </motion.div>
          </div>

          {/* What Happens After You Apply */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center text-[#132229] mt-20 mb-10"
          >
            What Happens After You Apply:
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#fdfdfd] rounded-2xl p-6 shadow-md border border-gray-200"
            >
              <p className="text-lg text-[#132229] font-medium">
                You’ll hear from our team within 7 days
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#fdfdfd] rounded-2xl p-6 shadow-md border border-gray-200"
            >
              <p className="text-lg text-[#132229] font-medium">
                We’ll ask for clarity, not a pitch deck
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#fdfdfd] rounded-2xl p-6 shadow-md border border-gray-200"
            >
              <p className="text-lg text-[#132229] font-medium">
                You’ll get honest feedback—no ghosting
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900">Application</h3>
              <p className="text-gray-700">
                Submit your application with company details and pitch deck
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900">Review</h3>
              <p className="text-gray-700">
                Our team reviews your application within 2 weeks
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900">Meeting</h3>
              <p className="text-gray-700">
                Initial meeting to discuss your vision and business model
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900">Decision</h3>
              <p className="text-gray-700">
                Final decision and term sheet if we move forward
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-lg rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Funding Application
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Company Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stage *
                    </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Description *
                  </label>
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
                <h3 className="text-2xl font-bold text-gray-900">
                  Founder Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Founder Name *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn Profile
                    </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Background & Experience *
                  </label>
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
                <h3 className="text-2xl font-bold text-gray-900">
                  Business Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Funding Amount Sought *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Revenue (Monthly)
                    </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Use of Funds *
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Traction & Milestones
                  </label>
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
                <h3 className="text-2xl font-bold text-gray-900">
                  Additional Information
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pitch Deck URL
                  </label>
                  <input
                    type="url"
                    name="pitchDeck"
                    value={formData.pitchDeck}
                    onChange={handleInputChange}
                    placeholder="Google Drive, Dropbox, or other shareable link"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Please ensure the link is publicly accessible
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Comments
                  </label>
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
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    I agree to the terms and conditions and privacy policy. I
                    understand that submitting this application does not
                    guarantee funding and that Aamukh Capital will review my
                    application and respond within 2 weeks.
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
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What stage companies do you invest in?
              </h3>
              <p className="text-gray-700">
                We primarily invest in pre-seed and seed stage companies, though
                we occasionally consider idea-stage companies with exceptional
                founders and clear market opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is your typical investment size?
              </h3>
              <p className="text-gray-700">
                Our typical investment ranges from ₹50 lakhs to ₹5 crores,
                depending on the stage, funding requirements, and growth
                potential of the company.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does the process take?
              </h3>
              <p className="text-gray-700">
                From application to final decision, our process typically takes
                4-6 weeks. We aim to provide initial feedback within 2 weeks of
                receiving your application.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you only invest in Indian companies?
              </h3>
              <p className="text-gray-700">
                While we focus primarily on Indian startups and founders, we're
                open to considering companies with strong India connections or
                those planning to expand into the Indian market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyPage;
