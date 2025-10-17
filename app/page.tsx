import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl sm:text-3xl font-serif text-slate-800">
              Floating Arrangements
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
              <a href="#products" className="text-slate-600 hover:text-slate-900 transition">Products</a>
              <a href="#gallery" className="text-slate-600 hover:text-slate-900 transition">Gallery</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-white-roses.jpg"
            alt="Floating white roses in luxury pool"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-6">
            Elevate Your Waterscape
          </h2>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Transform pools, ponds, and fountains into breathtaking works of art
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-slate-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-100 transition shadow-lg"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-serif text-center mb-12 text-slate-800">
            Our Mission
          </h3>
          <p className="text-lg sm:text-xl text-slate-600 text-center max-w-4xl mx-auto leading-relaxed">
            To transform water features into artistic focal points with sustainable,
            floating floral designs and art pieces. We combine artistry with nature to bring
            elegance and tranquility to your outdoor spaces.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl mb-4">🌸</div>
              <h4 className="text-xl font-serif mb-2 text-slate-800">Unique Elegance</h4>
              <p className="text-slate-600">Custom designs that turn ordinary water features into extraordinary experiences</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h4 className="text-xl font-serif mb-2 text-slate-800">Eco-Friendly</h4>
              <p className="text-slate-600">Sustainable materials and locally sourced flowers for environmentally responsible decor</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h4 className="text-xl font-serif mb-2 text-slate-800">Hassle-Free</h4>
              <p className="text-slate-600">Complete setup with anchors and care instructions for perfect floating displays</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-serif text-center mb-16 text-slate-800">
            Products & Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Floating Floral Displays */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/images/tropical-flowers.jpg"
                  alt="Floating floral displays"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-serif mb-3 text-slate-800">Floating Floral Displays</h4>
                <p className="text-slate-600 mb-4">
                  Custom-made arrangements with fresh or artificial flowers, designed as letters, hearts, or abstract forms.
                </p>
                <p className="text-slate-800 font-semibold">From $50</p>
              </div>
            </div>

            {/* Floating Art Pieces */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/images/succulent-arrangement.png"
                  alt="Floating art pieces"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-serif mb-3 text-slate-800">Floating Art Pieces</h4>
                <p className="text-slate-600 mb-4">
                  Lightweight, weather-resistant sculptures and succulent arrangements for year-round beauty.
                </p>
                <p className="text-slate-800 font-semibold">From $75</p>
              </div>
            </div>

            {/* Event Rentals */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/images/floating-fire.jpg"
                  alt="Event rentals"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-serif mb-3 text-slate-800">Event Rentals</h4>
                <p className="text-slate-600 mb-4">
                  Stunning displays for weddings, parties, and corporate events with setup and takedown services.
                </p>
                <p className="text-slate-800 font-semibold">From $200</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-serif text-center mb-16 text-slate-800">
            Gallery
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/hero-white-roses.jpg"
                alt="White roses floating in pool"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/tropical-flowers.jpg"
                alt="Tropical flower arrangements"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/floating-fire.jpg"
                alt="Floating fire bowls"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src="/images/succulent-arrangement.png"
                alt="Succulent arrangements"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-serif text-center mb-12 text-slate-800">
            Get in Touch
          </h3>
          <div className="bg-slate-50 rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-slate-700 mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none"
                >
                  <option>Wedding</option>
                  <option>Party</option>
                  <option>Corporate Event</option>
                  <option>Residential</option>
                  <option>Commercial Property</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-700 transition shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-2">Based in San Diego, CA</p>
            <p className="text-slate-600">Serving clients nationwide</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">Floating Arrangements</h2>
          <p className="text-slate-400 mb-6">Transform Your Water, Inspire Your Space</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-slate-400 hover:text-white transition">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-white transition">Pinterest</a>
            <a href="#" className="text-slate-400 hover:text-white transition">Facebook</a>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Floating Arrangements. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
