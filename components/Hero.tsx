'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section
      className="px-5 sm:px-6 md:px-8 max-w-[1280px] mx-auto w-full"
      style={{
        paddingTop: 'clamp(120px, 14vw, 180px)',
        paddingBottom: 'clamp(72px, 10vw, 120px)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        {/* OPEN pill */}
        <div
          className="inline-flex items-center gap-2"
          style={{ marginBottom: 'clamp(24px, 3.5vw, 44px)' }}
        >
          <span
            className="font-body font-semibold text-[#0A0A0A]"
            style={{
              fontSize: '11px',
              letterSpacing: '0.18em',
              padding: '6px 12px',
              border: '1.2px solid #0A0A0A',
              borderRadius: '999px',
              lineHeight: 1,
            }}
          >
            OPEN
          </span>
          <span
            className="font-body font-medium text-[#0A0A0A]"
            style={{ fontSize: 'clamp(12px, 1vw, 13px)' }}
          >
            For new opportunities
          </span>
        </div>

        {/* Massive display headline */}
        <h1
          className="font-display font-bold text-[#0A0A0A]"
          style={{
            fontSize: 'clamp(38px, 7.8vw, 116px)',
            letterSpacing: '-0.032em',
            lineHeight: 0.98,
            maxWidth: '1180px',
          }}
        >
          Product Designer for<br className="hidden sm:inline" />{' '}
          high-stakes digital systems.
        </h1>

        {/* Bottom bar — 2 col grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-20"
          style={{ marginTop: 'clamp(56px, 14vh, 220px)' }}
        >
          {/* LEFT — description */}
          <div style={{ maxWidth: '520px' }}>
            <p
              className="font-body text-[#2A2A28] leading-relaxed"
              style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                marginBottom: '16px',
              }}
            >
              Designing high-risk digital products where errors carry real
              consequences. I focus on critical paths, reducing failure
              points and stabilizing user outcomes through clear,
              system-level thinking.
            </p>
            <p
              className="font-body text-[#2A2A28] leading-relaxed"
              style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}
            >
              Hands-on with modern AI tools to prototype and ship
              production-ready work while collaborating with engineering
              teams.
            </p>
          </div>

          {/* RIGHT — feature cards + CTA */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              <div>
                <p
                  className="font-display font-bold text-[#0A0A0A]"
                  style={{
                    fontSize: 'clamp(14px, 1.1vw, 15px)',
                    marginBottom: '6px',
                  }}
                >
                  Full stack
                </p>
                <p
                  className="font-body text-[#6B6B68] leading-relaxed"
                  style={{ fontSize: 'clamp(13px, 1vw, 13px)' }}
                >
                  Design and build in one flow. Decisions move straight into
                  working output.
                </p>
              </div>
              <div>
                <p
                  className="font-display font-bold text-[#0A0A0A]"
                  style={{
                    fontSize: 'clamp(14px, 1.1vw, 15px)',
                    marginBottom: '6px',
                  }}
                >
                  Built to scale
                </p>
                <p
                  className="font-body text-[#6B6B68] leading-relaxed"
                  style={{ fontSize: 'clamp(13px, 1vw, 13px)' }}
                >
                  Interfaces that reduce decision fatigue and increase
                  adoption.
                </p>
              </div>
            </div>

            <a
              href="#work"
              className="group inline-flex items-center justify-center
                         w-full bg-[#0A0A0A] text-[#F2F2EE]
                         hover:bg-[#1C1C1A] transition-colors duration-300"
              style={{
                height: 'clamp(52px, 5.5vw, 64px)',
                letterSpacing: '0.22em',
                fontSize: 'clamp(11px, 1vw, 12px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                marginTop: '4px',
              }}
            >
              <span>View selected work</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
