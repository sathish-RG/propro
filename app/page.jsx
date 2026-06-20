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
          <div className="mb-12 relative rounded-3xl shadow-lg overflow-hidden">
            <img
              src="/section 2/TABULAR SECTION.png"
              alt="Statistics"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center w-full px-8">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">200+</div>
                  <div className="text-black font-bold text-sm md:text-base mt-2">Graphic Designs</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">50+</div>
                  <div className="text-black font-bold text-sm md:text-base mt-2">3D Projects</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">20+</div>
                  <div className="text-black font-bold text-sm md:text-base mt-2">Brands Managed</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">5+</div>
                  <div className="text-black font-bold text-sm md:text-base mt-2">Ad Shoots</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">3+</div>
                  <div className="text-black font-bold text-sm md:text-base mt-2">Architecture Projects</div>
                </div>
              </div>
            </div>
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
      <section 
        className="relative overflow-hidden py-16 lg:py-24"
        style={{
          backgroundImage: 'url(/section%203/WHITE%20BG.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Top Left Sparkle */}
        <img
          src="/section 3/SPARKLE 01.png"
          alt="Sparkle"
          className="absolute top-12 left-8 w-14 h-14 object-contain opacity-90 z-20"
        />

        {/* Bottom Right Sparkle */}
        <img
          src="/section 3/SPARKLE 02.png"
          alt="Sparkle"
          className="absolute bottom-32 right-16 w-16 h-16 object-contain opacity-90 z-20"
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header with Sparkle */}
          <div className="mb-20 flex items-center space-x-3">
            <img
              src="/section 3/SPARKLE 01.png"
              alt="Sparkle"
              className="w-8 h-8 object-contain"
            />
            <p className="text-2xl md:text-3xl text-gray-800 font-light tracking-widest">Special thing about PRO!</p>
          </div>

          {/* Main Offers Section - Responsive Layout */}
          <div className="mb-32">
            {/* Mobile & Tablet: Stacked Layout */}
            <div className="md:hidden space-y-12">
              {/* Left - Clients Offer */}
              <div className="space-y-4">
                <h3 className="text-7xl sm:text-8xl font-black text-black leading-none">25%</h3>
                <p className="text-2xl sm:text-3xl text-pro-red font-black leading-tight">
                  offer on<br />
                  first project
                </p>
                <button className="px-10 py-3 bg-black text-white font-bold text-base rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  For Clients
                </button>
              </div>

              {/* Center - Freelancers Offer */}
              <div className="space-y-4">
                <h3 className="text-7xl sm:text-8xl font-black text-pro-red leading-none">50%</h3>
                <p className="text-2xl sm:text-3xl text-black font-black leading-tight">
                  Project Share<br />
                  on every project
                </p>
                <button className="px-10 py-3 bg-pro-red text-white font-bold text-base rounded-md hover:bg-red-700 transition-colors w-full sm:w-auto">
                  For Freelancers
                </button>
              </div>

              {/* Image */}
              <div className="flex justify-center pt-4">
                <img
                  src="/section 3/IMG 01.png"
                  alt="PRO Professional"
                  className="w-full max-w-xs object-contain"
                />
              </div>
            </div>

            {/* Desktop: 3 Column Layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Left - Clients Offer */}
              <div className="space-y-6">
                <h3 className="text-8xl lg:text-9xl font-black text-black leading-none">25%</h3>
                <p className="text-3xl lg:text-4xl text-pro-red font-black leading-tight">
                  offer on<br />
                  first project
                </p>
                <button className="px-12 py-4 bg-black text-white font-bold text-base lg:text-lg rounded-md hover:bg-gray-800 transition-colors w-auto">
                  For Clients
                </button>
              </div>

              {/* Center - Freelancers Offer */}
              <div className="space-y-6">
                <h3 className="text-8xl lg:text-9xl font-black text-pro-red leading-none">50%</h3>
                <p className="text-3xl lg:text-4xl text-black font-black leading-tight">
                  Project Share<br />
                  on every project
                </p>
                <button className="px-12 py-4 bg-pro-red text-white font-bold text-base lg:text-lg rounded-md hover:bg-red-700 transition-colors w-auto">
                  For Freelancers
                </button>
              </div>

              {/* Right - Professional Image */}
              <div className="flex items-start justify-center lg:justify-end">
                <img
                  src="/section 3/IMG 01.png"
                  alt="PRO Professional"
                  className="w-full max-w-sm object-contain"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-300 my-20"></div>

          {/* Founder Section - Full Width Centered */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <p className="text-lg text-gray-800 font-light">
              Hello, I'm <span className="text-pro-red font-semibold">Rajeev Ramanathan</span>, Founder of PRO.
            </p>
            <p className="text-base text-gray-800 leading-relaxed">
              My journey started during my college years when I struggled to find creative work opportunities despite having the skills. I soon realized that many talented students and freelancers faced the same challenge. That's why I created PRO—a community where creative professionals can connect with real projects, gain experience, and earn through their skills.
            </p>
            <p className="text-base text-gray-800 leading-relaxed">
              Today, PRO continues to grow with one mission: <span className="font-semibold text-pro-red">Learn. Create. Earn.</span>
            </p>
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
