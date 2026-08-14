'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-burgundy/10 bg-ivory/80 shadow-wine-sm backdrop-blur-xl">
      <nav className="container-wide py-6 md:py-8" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-near-black hover:text-burgundy transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
          >
            Chisom Ayogu
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#work" className="link-ghost">
              Work
            </Link>
            <Link href="/about" className="link-ghost">
              About
            </Link>
            <Link href="/earlier-work" className="link-ghost">
              Earlier Work
            </Link>
            <Link href="/cv" className="link-ghost">
              CV
            </Link>
            <Link href="/contact" className="button-primary text-sm">
              Contact
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-near-black hover:text-burgundy transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-burgundy/10 flex flex-col gap-4">
            <Link href="/#work" className="body-default hover:text-burgundy transition-colors duration-200" onClick={() => setIsOpen(false)}>
              Work
            </Link>
            <Link href="/about" className="body-default hover:text-burgundy transition-colors duration-200" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/earlier-work" className="body-default hover:text-burgundy transition-colors duration-200" onClick={() => setIsOpen(false)}>
              Earlier Work
            </Link>
            <Link href="/cv" className="body-default hover:text-burgundy transition-colors duration-200" onClick={() => setIsOpen(false)}>
              CV
            </Link>
            <Link href="/contact" className="button-primary text-sm inline-block text-center" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
