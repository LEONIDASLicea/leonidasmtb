'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#ftc', label: 'FTC Method' },
    { href: '#coaching', label: 'Coaching' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white dark:bg-slate-900 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-brand">
            LeonidasMTB
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="https://calendly.com/leonidasml/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Book Session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium hover:text-brand transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/leonidasml/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brand text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-center"
            >
              Book Session
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}