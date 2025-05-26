import React from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-blue-600 font-medium text-lg">— Smart Investment for Bright Futures</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Built in <span className="text-blue-600">Bharat</span>,<br />
                  For the <span className="text-blue-600">World</span>.
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                  We Back India's Next Generation Of Breakout Founders—At Inception And Inflection.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors"
              >
                LEARN MORE ABOUT OUR PHILOSOPHY →
              </Link>

            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Financial analytics and business growth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Empowering India's Startup Ecosystem</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are a new-age venture capital firm focused on backing exceptional founders who are building the future
              of India and the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Early Stage Focus</h3>
              <p className="text-gray-700">We invest at the inception stage when founders need us the most.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Founder First</h3>
              <p className="text-gray-700">Our philosophy is centered around supporting visionary founders.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Global Vision</h3>
              <p className="text-gray-700">Building companies that can compete and win on the global stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us in creating the next generation of breakthrough companies.
          </p>
          <Link to="/apply">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg transition-colors">
              APPLY NOW
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
