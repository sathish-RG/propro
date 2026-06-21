'use client'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight break-words max-w-4xl">
                <span className="text-black">Where</span>
                <br />
                <span className="text-white">Projects</span>
                <br />
                <span className="text-black">Meet</span>
                <br />
                <span className="text-white">Professionals.</span>
              </h1>

              <div className="flex items-center space-x-3">
                <div className="flex-1 h-1 bg-black max-w-[80px]"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap sm:flex-nowrap">
                  <img
                    src="/FREELANCERS ROUNDS.png"
                    alt="Freelancers"
                    className="h-16 sm:h-20 md:h-24 object-contain"
                  />
                  <span className="text-white text-xl sm:text-2xl md:text-3xl font-black">50+</span>
                </div>
                <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">freelancers joined!</p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-1 h-1 bg-black max-w-[80px]"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>

              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-black text-white">
                  Learn. Create. Earn.
                </h2>
                <p className="text-white text-lg font-medium max-w-md">
                  Become part of PRO's professional network and start earning from your creative skills.
                </p>
              </div>

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

      {/* Second Section */}
      <section
        id="services"
        className="relative overflow-hidden py-12 lg:py-20"
        style={{
          backgroundImage: 'url(/section%202/WHITE%20BG.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Statistics Bar */}
          <div className="hidden lg:block mb-12 relative rounded-3xl shadow-lg overflow-hidden">
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
            <div className="flex items-center justify-center relative">
              <img
                src="/section 2/IMG 01.png"
                alt="PRO Team"
                className="w-full max-w-md mx-auto object-contain"
              />
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

            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-black">Need</span>
                <br />
                <span className="text-black">Creative</span>
                <br />
                <span className="text-[#E53935]">Work Done?</span>
              </h2>

              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-lg">
                  Whether you're a business owner, startup, content creator, or brand, PRO connects you with skilled professionals ready to bring your ideas to life.
                </p>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-lg">
                  From concept to completion, we deliver high-quality creative solutions tailored to your goals.
                </p>
              </div>

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

      {/* Special Offers Section — Section 3 */}
      <section
        id="offers"
        className="relative overflow-hidden py-12 lg:py-16"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.04'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), url(/section%203/WHITE%20BG.jpg)`,
          backgroundSize: 'auto, cover',
          backgroundPosition: 'center, center',
          backgroundColor: '#fff'
        }}
      >
        {/* Bottom Right Sparkle */}
        <div className="absolute bottom-14 right-10 z-20 pointer-events-none">
          <svg width="56" height="56" viewBox="0 0 40 40" fill="#E53935" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L23 17L40 20L23 23L20 40L17 23L0 20L17 17L20 0Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-10 lg:mb-14 justify-center md:justify-start">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#E53935" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" />
            </svg>
            <span className="text-base md:text-lg text-gray-800 tracking-widest font-light">
              Special thing about PRO!
            </span>
          </div>

          {/* Offers + Person Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">

            {/* Left — Clients */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-[80px] sm:text-[88px] lg:text-[100px] font-black text-black leading-none tracking-tight">
                25%
              </h3>
              <p className="text-2xl lg:text-[28px] font-black text-[#E53935] leading-snug">
                offer on<br />first project
              </p>
              <button className="mt-2 px-10 py-3.5 bg-black text-white font-bold text-[15px] rounded hover:bg-gray-800 transition-colors">
                For Clients
              </button>
            </div>

            {/* Center — Freelancers */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-[80px] sm:text-[88px] lg:text-[100px] font-black text-[#E53935] leading-none tracking-tight">
                50%
              </h3>
              <p className="text-2xl lg:text-[28px] font-black text-black leading-snug">
                Project Share<br />on every project
              </p>
              <button className="mt-2 px-10 py-3.5 bg-[#E53935] text-white font-bold text-[15px] rounded hover:bg-red-700 transition-colors">
                For Freelancers
              </button>
            </div>

            {/* Right — Person Image */}
            <div className="flex justify-center md:justify-end items-start">
              <img
                src="/section 3/IMG 01.png"
                alt="PRO Professional"
                className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px] object-contain"
              />
            </div>
          </div>

          {/* Founder Bio - 2 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start mt-0 md:mt-[-180px] lg:mt-[-400px]">
            <div className="text-center md:text-left pt-8 md:pt-12">
              <p className="text-base md:text-[17px] text-gray-800 mb-4 font-normal">
                Hello, I&apos;m{' '}
                <span className="text-[#E53935] font-semibold">Rajeev Ramanathan</span>
                , Founder of PRO.
              </p>
              <p className="text-sm md:text-[14px] text-gray-600 leading-relaxed mb-4">
                My journey started during my college years when I struggled to find creative work
                opportunities despite having the skills. I soon realized that many talented students
                and freelancers faced the same challenge. That&apos;s why I created PRO—a community
                where creative professionals can connect with real projects, gain experience, and
                earn through their skills.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-800">
                Today, PRO continues to grow with one mission:{' '}
                <span className="text-[#E53935] font-bold italic text-[15px] md:text-[16px]">
                  Learn. Create. Earn.
                </span>
              </p>
            </div>
            <div></div>
          </div>

          

        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
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
          <button className="btn-primary">Start Your Journey</button>
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