'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import type { Project, CaseSection, MetricItem } from '@/app/data'

const ease = [0.16, 1, 0.3, 1]

function CaseImage({
  src,
  alt = 'Case study image',
}: {
  src: string
  alt?: string
}) {
  return (
    <div className="w-full overflow-hidden rounded-md">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="w-full h-auto"
        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 90vw, 1100px"
      />
    </div>
  )
}

function VideoBlock({ src }: { src: string }) {
  return (
    <div className="w-full overflow-hidden rounded-md">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto"
      />
    </div>
  )
}

/* ── Pull-quote block ─────────────────────────────── */
function PullQuoteBlock({
  section,
  index,
}: {
  section: CaseSection
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      className="py-12 sm:py-20 md:py-28 -mx-6 px-6 md:-mx-0 md:px-0"
    >
      <div className="max-w-[860px] mx-auto text-center">
        <p
          className="font-display font-bold text-[#0A0A0A] leading-[1.25] tracking-tight"
          style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}
        >
          &ldquo;{section.quote}&rdquo;
        </p>
        {section.attribution && (
          <p
            className="font-body text-[#6B6B68] mt-6"
            style={{ fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            {section.attribution}
          </p>
        )}
      </div>
    </motion.div>
  )
}

/* ── Metric callout row ───────────────────────────── */
function MetricCalloutBlock({
  section,
  index,
}: {
  section: CaseSection
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease }}
      className="py-14 border-t border-[#E3E3DE]"
    >
      {section.title && (
        <p
          className="font-body uppercase text-[#6B6B68] mb-10"
          style={{ fontSize: '11px', letterSpacing: '0.16em' }}
        >
          {section.title}
        </p>
      )}
      <div
        className={`grid gap-4 sm:gap-8 ${
          section.metrics && section.metrics.length === 2
            ? 'grid-cols-1 sm:grid-cols-2'
            : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {section.metrics?.map((m, i) => (
          <div
            key={i}
            className="bg-white border border-[#E3E3DE] rounded-lg p-5 sm:p-8"
          >
            <p
              className="font-display font-bold text-[#0A0A0A] tracking-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              {m.value}
            </p>
            <p
              className="font-body text-[#6B6B68] mt-2 leading-relaxed"
              style={{ fontSize: 'clamp(13px, 1vw, 15px)' }}
            >
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ── Full-bleed image section ─────────────────────── */
function FullBleedBlock({
  section,
  index,
  slug,
}: {
  section: CaseSection
  index: number
  slug: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease }}
      className="py-10 -mx-6 md:-mx-[calc((100vw-1100px)/2+24px)] overflow-hidden"
      style={{ maxWidth: '100vw' }}
    >
      {section.title && (
        <p
          className="font-body uppercase text-[#6B6B68] mb-6 px-6 md:px-[calc((100vw-1100px)/2+24px)]"
          style={{ fontSize: '11px', letterSpacing: '0.16em' }}
        >
          {section.title}
        </p>
      )}
      {section.images?.map((img) => (
        <div key={img} className="w-full">
          {img.endsWith('.mp4') ? (
            <VideoBlock src={`/case-studies/${slug}/${img}`} />
          ) : (
            <Image
              src={`/case-studies/${slug}/${img}`}
              alt={section.title || 'Full-bleed image'}
              width={1920}
              height={1080}
              className="w-full h-auto"
              sizes="100vw"
            />
          )}
        </div>
      ))}
      {section.desc && (
        <p
          className="font-body text-[#6B6B68] mt-4 px-6 md:px-[calc((100vw-1100px)/2+24px)]"
          style={{ fontSize: 'clamp(13px, 1vw, 14px)' }}
        >
          {section.desc}
        </p>
      )}
    </motion.div>
  )
}

/* ── Role card ────────────────────────────────────── */
function RoleCardBlock({
  section,
  index,
}: {
  section: CaseSection
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const r = section.role
  if (!r) return null

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease }}
      className="py-14 border-t border-[#E3E3DE]"
    >
      <p
        className="font-body uppercase text-[#6B6B68] mb-8"
        style={{ fontSize: '11px', letterSpacing: '0.16em' }}
      >
        {section.title || 'My Role'}
      </p>
      <div className="bg-white border border-[#E3E3DE] rounded-lg p-5 sm:p-8 md:p-10">
        <p
          className="font-body text-[#2A2A28] leading-[1.75] mb-8"
          style={{ fontSize: 'clamp(15px, 1.2vw, 17px)' }}
        >
          {r.what}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E3E3DE]">
          <div>
            <p
              className="font-body uppercase text-[#6B6B68] mb-2"
              style={{ fontSize: '10px', letterSpacing: '0.16em' }}
            >
              Team
            </p>
            <p className="font-body text-[#0A0A0A]" style={{ fontSize: '14px' }}>
              {r.team}
            </p>
          </div>
          <div>
            <p
              className="font-body uppercase text-[#6B6B68] mb-2"
              style={{ fontSize: '10px', letterSpacing: '0.16em' }}
            >
              Timeline
            </p>
            <p className="font-body text-[#0A0A0A]" style={{ fontSize: '14px' }}>
              {r.timeline}
            </p>
          </div>
          {r.tools && (
            <div>
              <p
                className="font-body uppercase text-[#6B6B68] mb-2"
                style={{ fontSize: '10px', letterSpacing: '0.16em' }}
              >
                Tools
              </p>
              <p className="font-body text-[#0A0A0A]" style={{ fontSize: '14px' }}>
                {r.tools}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Default section block ────────────────────────── */
function DefaultSectionBlock({
  section,
  index,
  slug,
}: {
  section: CaseSection
  index: number
  slug: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay: Math.min(index * 0.02, 0.15) }}
      className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-16
                 py-10 sm:py-14 border-t border-[#E3E3DE]"
    >
      <p
        className="font-body uppercase text-[#6B6B68] pt-1"
        style={{ fontSize: '11px', letterSpacing: '0.16em' }}
      >
        {String(index + 1).padStart(2, '0')}
      </p>

      <div className="max-w-full md:max-w-[680px] space-y-6">
        <h2
          className="font-display font-bold tracking-tight leading-[1.15]
                     text-[#0A0A0A]"
          style={{ fontSize: 'clamp(22px, 2.4vw, 30px)' }}
        >
          {section.title}
        </h2>

        {section.desc &&
          section.desc.split('\n\n').map((para, i) => (
            <p
              key={i}
              className="font-body text-[#2A2A28] leading-[1.75]"
              style={{ fontSize: 'clamp(15px, 1.2vw, 17px)' }}
            >
              {para}
            </p>
          ))}

        {section.images && section.images.length > 0 && (
          <div className="space-y-4 pt-2 -mx-0 sm:-mx-0 md:-mx-0">
            {section.images.map((img) =>
              img.endsWith('.mp4') ? (
                <VideoBlock
                  key={img}
                  src={`/case-studies/${slug}/${img}`}
                />
              ) : (
                <CaseImage
                  key={img}
                  src={`/case-studies/${slug}/${img}`}
                  alt={section.title}
                />
              )
            )}
          </div>
        )}

        {section.parts && section.parts.length > 0 && (
          <ul className="space-y-5 pt-2">
            {section.parts.map((p, i) => (
              <li key={i}>
                {p.label && (
                  <p
                    className="font-display font-bold text-[#0A0A0A] mb-1"
                    style={{ fontSize: 'clamp(15px, 1.2vw, 17px)' }}
                  >
                    {p.label}
                  </p>
                )}
                <p
                  className="font-body text-[#2A2A28] leading-[1.75]"
                  style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}
                >
                  {p.text}
                </p>
              </li>
            ))}
          </ul>
        )}

        {section.bullets && section.bullets.length > 0 && (
          <ul className="space-y-3 pt-2 list-disc pl-5">
            {section.bullets.map((b, i) => (
              <li
                key={i}
                className="font-body text-[#2A2A28] leading-[1.75]
                           marker:text-[#A8A8A4]"
                style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}
              >
                {b}
              </li>
            ))}
          </ul>
        )}

        {section.close && (
          <p
            className="font-body text-[#2A2A28] leading-[1.75] pt-2"
            style={{ fontSize: 'clamp(15px, 1.2vw, 17px)' }}
          >
            {section.close}
          </p>
        )}
      </div>
    </motion.div>
  )
}

/* ── Section dispatcher ───────────────────────────── */
function SectionBlock({
  section,
  index,
  slug,
}: {
  section: CaseSection
  index: number
  slug: string
}) {
  const t = section.type || 'default'
  if (t === 'pullQuote') return <PullQuoteBlock section={section} index={index} />
  if (t === 'metricCallout') return <MetricCalloutBlock section={section} index={index} />
  if (t === 'fullBleed') return <FullBleedBlock section={section} index={index} slug={slug} />
  if (t === 'roleCard') return <RoleCardBlock section={section} index={index} />
  return <DefaultSectionBlock section={section} index={index} slug={slug} />
}

function PasswordGate({
  password,
  onUnlock,
}: {
  password: string
  onUnlock: () => void
}) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  return (
    <div className="bg-[#F2F2EE] min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="w-full max-w-[380px] text-center"
      >
        <div
          className="w-10 h-10 mx-auto mb-6 rounded-full border border-[#E3E3DE]
                     flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6B68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h1
          className="font-display font-bold text-[#0A0A0A] mb-2"
          style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
        >
          Protected project
        </h1>
        <p
          className="font-body text-[#6B6B68] mb-8"
          style={{ fontSize: '14px' }}
        >
          Enter the password to view this case study.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onUnlock()
          }}
          className="space-y-3"
        >
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              setError(false)
            }}
            placeholder="Password"
            className="w-full font-body bg-white border border-[#E3E3DE] rounded-md
                       px-4 py-3 text-[14px] text-[#0A0A0A] placeholder-[#B8B8B3]
                       outline-none focus:border-[#0A0A0A] transition-colors duration-200"
            autoFocus
          />
          {error && (
            <p className="font-body text-[13px] text-red-500">Incorrect password</p>
          )}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              if (value === password) {
                onUnlock()
              } else {
                setError(true)
              }
            }}
            className="w-full font-body bg-[#1C1C1A] text-[#F2F2EE] hover:bg-[#0A0A0A]
                       transition-colors duration-300 rounded-md py-3"
            style={{
              fontSize: '12px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Continue
          </button>
        </form>
        <Link
          href="/"
          className="inline-block mt-6 font-body text-[13px] text-[#6B6B68]
                     hover:text-[#0A0A0A] transition-colors duration-200"
        >
          ← Back home
        </Link>
      </motion.div>
    </div>
  )
}

export default function CaseStudyClient({ project }: { project: Project }) {
  const [unlocked, setUnlocked] = useState(!project.password)
  const cs = project.caseStudy

  if (!unlocked) {
    return (
      <PasswordGate
        password={project.password!}
        onUnlock={() => setUnlocked(true)}
      />
    )
  }

  return (
    <div className="bg-[#F2F2EE] min-h-screen text-[#0A0A0A]">
      {/* Nav */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[#F2F2EE]/95
                   backdrop-blur-sm border-b border-[#E3E3DE]"
      >
        <div
          className="max-w-[1100px] mx-auto px-6 h-16
                     flex items-center justify-between"
        >
          <Link
            href="/"
            className="font-display font-semibold text-[15px] tracking-tight
                       text-[#0A0A0A] hover:opacity-50 transition-opacity duration-200"
          >
            Joseph Kalu
          </Link>
          <Link
            href="/#work"
            className="font-body text-[13px] text-[#6B6B68]
                       hover:text-[#0A0A0A] transition-colors duration-200"
          >
            ← Work
          </Link>
        </div>
      </header>

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <p
            className="font-body uppercase text-[#6B6B68] mb-6"
            style={{ fontSize: '12px', letterSpacing: '0.14em' }}
          >
            {project.category} · {project.year}
          </p>
          <h1
            className="font-display font-bold tracking-tight leading-[1.05]
                       text-[#0A0A0A] mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
          >
            {project.name}
          </h1>
          <p
            className="font-body text-[#2A2A28] leading-relaxed max-w-[720px]"
            style={{ fontSize: 'clamp(17px, 1.4vw, 22px)' }}
          >
            {project.decision}
          </p>

          {cs?.link && (
            <a
              href={cs.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8
                         font-body text-[#0A0A0A]
                         border-b border-[#0A0A0A]/40 hover:border-[#0A0A0A]
                         transition-colors duration-200"
              style={{ fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              {cs.link.title} ↗
            </a>
          )}
        </motion.div>

        {/* Hero cover */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mt-14 md:mt-20"
        >
          <CaseImage
            src={`/case-studies/${project.slug}/cover-image.png`}
            alt={`${project.name} cover`}
          />
        </motion.div>

        {/* Meta row under hero */}
        <div
          className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8
                     border-t border-[#E3E3DE] pt-6 sm:pt-8"
        >
          <div>
            <p
              className="font-body uppercase text-[#6B6B68] mb-2"
              style={{ fontSize: '11px', letterSpacing: '0.16em' }}
            >
              Role
            </p>
            <p className="font-body text-[#0A0A0A]" style={{ fontSize: '14px' }}>
              Product Design · Research
            </p>
          </div>
          <div>
            <p
              className="font-body uppercase text-[#6B6B68] mb-2"
              style={{ fontSize: '11px', letterSpacing: '0.16em' }}
            >
              Year
            </p>
            <p className="font-body text-[#0A0A0A]" style={{ fontSize: '14px' }}>
              {project.year}
            </p>
          </div>
          <div>
            <p
              className="font-body uppercase text-[#6B6B68] mb-2"
              style={{ fontSize: '11px', letterSpacing: '0.16em' }}
            >
              Outcome
            </p>
            <p className="font-body text-[#0A0A0A]" style={{ fontSize: '14px' }}>
              {project.metricValue} {project.metricLabel}
            </p>
          </div>
        </div>

        {/* Intro paragraphs from long-form */}
        {cs?.intro && (
          <div className="mt-16 space-y-6">
            {cs.intro.map((p, i) => (
              <p
                key={i}
                className="font-body text-[#2A2A28] leading-[1.8]"
                style={{ fontSize: 'clamp(16px, 1.3vw, 19px)' }}
              >
                {p}
              </p>
            ))}
          </div>
        )}

        {/* Long-form sections */}
        {cs?.sections && (
          <div className="mt-16">
            {cs.sections.map((section, i) => (
              <SectionBlock key={i} section={section} index={i} slug={project.slug} />
            ))}
          </div>
        )}

        {/* Result (short-form summary) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-16
                     py-10 sm:py-16 border-t border-[#E3E3DE]"
        >
          <p
            className="font-body uppercase text-[#6B6B68] pt-1"
            style={{ fontSize: '11px', letterSpacing: '0.16em' }}
          >
            Result
          </p>
          <div className="max-w-[560px]">
            <p
              className="font-display font-bold tracking-tight text-[#0A0A0A] mb-4"
              style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
            >
              {project.result.metric}
            </p>
            <p
              className="font-body text-[#2A2A28] leading-[1.75] mb-2"
              style={{ fontSize: 'clamp(15px, 1.3vw, 17px)' }}
            >
              {project.result.descriptor} {project.result.timeframe}
            </p>
            <p
              className="font-body text-[#6B6B68] leading-[1.75]"
              style={{ fontSize: 'clamp(14px, 1.1vw, 15px)' }}
            >
              {project.result.mechanism}
            </p>
          </div>
        </motion.div>

        {/* Back */}
        <div className="pt-16 border-t border-[#E3E3DE]">
          <Link
            href="/#work"
            className="font-body text-[13px] text-[#6B6B68]
                       hover:text-[#0A0A0A] transition-colors duration-200"
          >
            ← Back to work
          </Link>
        </div>
      </main>
    </div>
  )
}
