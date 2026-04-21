'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="w-full border-t border-[#E3E3DE]">
      <section
        id="contact"
        ref={ref}
        className="px-5 sm:px-6 md:px-8 max-w-[1280px] mx-auto"
        style={{
          paddingTop: 'clamp(96px, 12vw, 160px)',
          paddingBottom: 'clamp(96px, 12vw, 160px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease }}
        >
          <p
            className="font-body font-medium text-[#0A0A0A]"
            style={{
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: 'clamp(24px, 3vw, 36px)',
            }}
          >
            Contact
          </p>
          <h2
            className="font-display font-bold text-[#0A0A0A]"
            style={{
              fontSize: 'clamp(38px, 6.4vw, 96px)',
              letterSpacing: '-0.032em',
              lineHeight: 1.0,
              marginBottom: 'clamp(32px, 5vw, 48px)',
            }}
          >
            Let's build something<br />that ships.
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
            <a
              href="mailto:mrjosephkalu@gmail.com"
              className="group font-body text-[#0A0A0A] hover:opacity-60
                         transition-opacity duration-300 inline-flex items-center gap-3"
              style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}
            >
              mrjosephkalu@gmail.com
              <span
                style={{
                  display: 'inline-block',
                  transition: 'transform 0.2s ease',
                }}
                className="group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/josephkalu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn — Joseph Kalu"
              className="group inline-flex items-center gap-2.5 text-[#0A0A0A]
                         hover:opacity-60 transition-opacity duration-300"
              style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}
            >
              <LinkedInIcon />
              <span className="font-body">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
