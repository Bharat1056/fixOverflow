import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-between">
      <main className="container mx-auto px-4 py-16 flex-grow">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fix Overflow
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Experience the power of simplicity with our professional and minimalist approach.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded text-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <h2 className="text-2xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Clean Design', 'Efficient Performance', 'Professional Look'].map((feature, index) => (
              <div key={index} className="border border-gray-700 p-6 rounded">
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                <p className="text-gray-400">Streamlined functionality that meets the highest standards of professional excellence.</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border border-gray-700 py-16 px-4 rounded text-center my-20">
          <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Experience?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Join us in redefining professional standards with our minimalist approach.</p>
          <button  className="bg-white text-gray-900 px-8 py-3 rounded text-lg font-semibold hover:bg-gray-200 transition-colors">
            <a href="mailto:bharatpanigrahi225@gmail.com">Contact Us</a>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">&copy; 2023 Official Minimal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
