import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              About <span className="text-blue-600">Aamukh Capital</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We are a new-age venture capital firm dedicated to backing India's next generation of breakout founders.
              Our mission is to identify and support exceptional entrepreneurs at the inception and inflection points of
              their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Aamukh Capital, we believe that great companies are built by great founders. Our founder-first
                approach means we invest in people who have the vision, determination, and capability to build
                category-defining companies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand the unique challenges of the Indian startup ecosystem and provide not just capital, but
                strategic guidance, mentorship, and access to our extensive network of industry experts and successful
                entrepreneurs.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our philosophy"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Early Stage Investment</h3>
                <p className="text-gray-700">
                  We invest in pre-seed and seed stage startups, providing the initial capital needed to validate ideas
                  and build initial traction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Strategic Mentorship</h3>
                <p className="text-gray-700">
                  Our team of experienced entrepreneurs and industry experts provide hands-on guidance to help founders
                  navigate challenges and scale their businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Network Access</h3>
                <p className="text-gray-700">
                  We connect our portfolio companies with potential customers, partners, and follow-on investors through
                  our extensive network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Anurag Sharma"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">Anurag Sharma</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-2">Managing Partner</p>
                  <p className="text-gray-700">
                    Former India Accelerator executive with extensive experience in early-stage investments and startup
                    ecosystem development.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Ravi Gupta"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">Ravi Gupta</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-2">Senior Partner</p>
                  <p className="text-gray-700">
                    Seasoned investor with 100+ investments across various sectors, bringing deep market insights and
                    strategic guidance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Arjun Prasad"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">Arjun Prasad</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-2">Investment Partner</p>
                  <p className="text-gray-700">
                    Partner at ECH Lab with expertise in technology ventures and innovation-driven business models.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Partner With Us</h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to take your startup to the next level? Let's build something amazing together.
          </p>
          <Link href="/apply">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg">
              APPLY FOR FUNDING
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
