'use client'

import { useState } from 'react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="min-h-screen relative overflow-hidden bg-[#E53935]"
        style={{
          backgroundImage: 'url(/bg-pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlend: 'overlay'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="text-black">Where</span>
                <br />
                <span className="text-white">Projects</span>
                <br />
                <span className="text-black">Meet</span>
                <br />
                <span className="text-white">Professionals.</span>
              </h1>

              {/* Divider Line */}
              <div className="flex items-center space-x-3">
                <div className="flex-1 h-1 bg-black max-w-[80px]"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>

              {/* Avatars and Stats */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="/FREELANCERS ROUNDS.png"
                    alt="Freelancers"
                    className="h-24 object-contain"
                  />
                  <span className="text-white text-3xl font-black">50+</span>
                </div>
                <p className="text-white text-2xl font-bold">freelancers joined!</p>
              </div>

              {/* Divider Line */}
              <div className="flex items-center space-x-3">
                <div className="flex-1 h-1 bg-black max-w-[80px]"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>

              {/* Tagline */}
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-black text-white">
                  Learn. Create. Earn.
                </h2>
                <p className="text-white text-lg font-medium max-w-md">
                  Become part of PRO's professional network and start earning from your creative skills.
                </p>
              </div>

              {/* CTA Button */}
              <button className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-colors inline-block">
                Join PRO!
              </button>
            </div>

            {/* Right Content - PRO Logo */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <img
                  src="/LOGO.png"
                  alt="PRO Logo"
                  className="w-full max-w-md mx-auto mb-6"
                />
                <div className="text-white text-lg font-semibold tracking-widest">
                  PROJECTS × PROFESSIONALS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Hero Section */}
      <section 
        className="relative overflow-hidden py-12 lg:py-20"
        style={{
          backgroundImage: 'url(/section%202/WHITE%20BG.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Top Statistics Bar */}
          <div className="mb-12">
            <img
              src="/section 2/TABULAR SECTION.png"
              alt="Statistics"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Team Image */}
            <div className="flex items-center justify-center relative">
              <img
                src="/section 2/IMG 01.png"
                alt="PRO Team"
                className="w-full max-w-md mx-auto object-contain"
              />
              {/* Sparkle decorations */}
              <img
                src="/section 2/SPARKLE 01.png"
                alt="Sparkle"
                className="absolute top-0 right-0 w-16 h-16 object-contain opacity-80"
              />
              <img
                src="/section 2/SPARKLE 02.png"
                alt="Sparkle"
                className="absolute bottom-0 left-0 w-16 h-16 object-contain opacity-80"
              />
            </div>

            {/* Right Content - Text */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-black">Need</span>
                <br />
                <span className="text-black">Creative</span>
                <br />
                <span className="text-pro-red">Work Done?</span>
              </h2>

              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-lg">
                  Whether you're a business owner, startup, content creator, or brand, PRO connects you with skilled professionals ready to bring your ideas to life.
                </p>

                <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-lg">
                  From concept to completion, we deliver high-quality creative solutions tailored to your goals.
                </p>
              </div>

              {/* Brand Symbols */}
              <div className="pt-4">
                <img
                  src="/section 2/BRAND SYMBOL 01.png"
                  alt="Brand Symbols"
                  className="h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="text-pro-red text-4xl">✦</span>
              <p className="text-xl text-gray-700 font-semibold">Special thing about PRO!</p>
            </div>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Clients Offer */}
            <div className="space-y-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-6xl md:text-7xl font-black text-black">
                25%
              </h3>
              <p className="text-xl md:text-2xl text-pro-red font-bold">
                offer on first project
              </p>
              <button className="btn-secondary bg-black hover:bg-gray-800 text-white">
                For Clients
              </button>
              <p className="text-gray-600 text-sm pt-4">
                Get exclusive discounts on your first project with PRO professionals
              </p>
            </div>

            {/* Freelancers Offer */}
            <div className="space-y-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-6xl md:text-7xl font-black text-pro-red">
                50%
              </h3>
              <p className="text-xl md:text-2xl text-black font-bold">
                Project Share on every project
              </p>
              <button className="btn-secondary bg-pro-red hover:bg-red-700">
                For Freelancers
              </button>
              <p className="text-gray-600 text-sm pt-4">
                Earn 50% share on every successful project you complete
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="mt-20 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Founder Text */}
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="heading-md text-black">
                  Hello, I'm <span className="text-pro-red">Rajeev Ramanathan</span>, Founder of PRO.
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey started during my college years when I struggled to find creative work opportunities despite having the skills. I soon realized that many talented students and freelancers faced the same challenge. That's why I created PRO—a community where creative professionals can connect with real projects, gain experience, and earn through their skills.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, PRO continues to grow with one mission: <span className="font-bold text-pro-red">Learn. Create. Earn.</span>
                </p>
              </div>

              {/* Founder Image Placeholder */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-80 h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💼</div>
                    <p className="text-gray-600 font-semibold">Rajeev Ramanathan</p>
                    <p className="text-gray-500">Founder of PRO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(/bg-pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
          <h2 className="heading-lg">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Join 50+ creative professionals already earning through PRO. Start your journey today!
          </p>
          <button className="btn-primary">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PRO</h3>
              <p className="text-gray-400">Where Projects Meet Professionals</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Clients</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Find Freelancers</a></li>
                <li><a href="#" className="hover:text-white transition">Post Projects</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Freelancers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Find Projects</a></li>
                <li><a href="#" className="hover:text-white transition">Earn Money</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PRO. All rights reserved. Learn. Create. Earn.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
