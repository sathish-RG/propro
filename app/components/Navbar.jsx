'use client'

import { useState, useEffect } from 'react'

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const SpeakersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)

const AgendaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const AboutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
)

const TicketIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a2 2 0 010-4h20a2 2 0 010 4v2a2 2 0 000 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 000-4V9z"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
    <line x1="4" y1="18" x2="20" y2="18"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const navItems = [
  { id: 'hero',     label: 'Home',     href: '#hero',     icon: HomeIcon },
  { id: 'services', label: 'Services', href: '#services', icon: SpeakersIcon },
  { id: 'offers',   label: 'Special Offers',   href: '#offers',   icon: AgendaIcon },
  { id: 'about',    label: 'About PRO',    href: '#about',    icon: AboutIcon },
  { id: 'contact',   label: 'Contact',   href: '#contact',   icon: TicketIcon },
]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Create intersection observer to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    )

    // Observe all sections
    navItems.forEach(({ href }) => {
      const element = document.querySelector(href)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      navItems.forEach(({ href }) => {
        const element = document.querySelector(href)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const handleNavClick = (id, href) => {
    setActiveItem(id)
    setMobileMenuOpen(false)
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-20">
          {/* Desktop Navigation - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-0.5 p-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/40 shadow-lg">
            {navItems.map(({ id, label, href, icon: Icon }) => {
              const isActive = activeItem === id
              return (
                <a
                  key={id}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(id, href) }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white/75 text-black shadow-md'
                      : 'text-black/85 hover:bg-white/30'
                  }`}
                >
                  <Icon />
                  <span>{label}</span>
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button - Visible only on Mobile */}
          <div className="md:hidden w-full flex items-center justify-between">
            <span className="text-lg font-bold text-black">PRO</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black hover:bg-white/30 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Visible when open */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 py-4 px-4">
            <div className="space-y-2">
              {navItems.map(({ id, label, href, icon: Icon }) => {
                const isActive = activeItem === id
                return (
                  <a
                    key={id}
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(id, href) }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gray-200 text-black'
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    <Icon />
                    <span>{label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}