'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '/#work', external: false, isRoute: false },
  { label: 'About Me', href: '/about', external: false, isRoute: true },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F2F2EE]/85 backdrop-blur-md border-b border-[#E3E3DE]'
          : 'bg-transparent'
      }`}
    >
      <div
        className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-8 flex items-center justify-between"
        style={{ height: 'clamp(60px, 7vw, 80px)' }}
      >
        <Link
          href="/"
          className="font-body font-medium uppercase text-[#0A0A0A]
                     hover:opacity-60 transition-opacity duration-200
                     flex items-center gap-2"
          style={{
            fontSize: 'clamp(11px, 0.9vw, 12px)',
            letterSpacing: '0.18em',
          }}
        >
          <span
            aria-hidden
            className="inline-block bg-[#0A0A0A]"
            style={{
              width: 'clamp(8px, 0.9vw, 10px)',
              height: 'clamp(8px, 0.9vw, 10px)',
            }}
          />
          Joseph Kalu
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                href={item.href}
                className="font-body text-[12px] tracking-[0.18em] uppercase text-[#6B6B68]
                           hover:text-[#0A0A0A] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-[12px] tracking-[0.18em] uppercase text-[#6B6B68]
                           hover:text-[#0A0A0A] transition-colors duration-200"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="https://drive.google.com/file/d/1xsn421vkK07uhVMOh7UwqqfIDlr8Knvk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[12px] tracking-[0.18em] uppercase text-[#0A0A0A]
                       hover:opacity-60 transition-opacity duration-200 ml-6"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex flex-col items-end justify-center gap-[5px]"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] bg-[#0A0A0A] transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[3.5px] w-5' : 'w-5'}`} />
          <span className={`block h-[1.5px] bg-[#0A0A0A] transition-all duration-300 ${open ? 'opacity-0 w-4' : 'w-4'}`} />
          <span className={`block h-[1.5px] bg-[#0A0A0A] transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[3.5px] w-5' : 'w-5'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-[#F7F7F3] border-t border-[#E3E3DE] ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-5 sm:px-6 py-6 flex flex-col gap-5">
          {navLinks.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-body text-[14px] tracking-[0.18em] uppercase font-medium text-[#0A0A0A]"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-body text-[14px] tracking-[0.18em] uppercase font-medium text-[#0A0A0A]"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="https://drive.google.com/file/d/1xsn421vkK07uhVMOh7UwqqfIDlr8Knvk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="font-body text-[14px] tracking-[0.18em] uppercase font-medium text-[#0A0A0A]"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}
