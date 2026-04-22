'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/app/data'

const ease = [0.16, 1, 0.3, 1]

const extendedSubtext: Record<string, string> = {
  inktrail:
    'Every knowledge worker I interviewed had the same problem — their work lived across five different apps. I designed a full AI-native workspace from zero — document editor, visual canvas, meeting transcription, and one-click publishing on a single continuous surface — then collaborated with engineers to ship it. AI generates real, editable files — not chat messages you copy-paste somewhere else.',
  coinhaven:
    'Everyone was building marketplaces. Nobody was building trust. Designed and shipped the full product — from provenance systems and creator verification down to the marketplace flows — built to earn belief in a market drowning in noise.',
  humanmanager:
    'The client expected new screens. The blocker was inconsistent components. Rebuilt the design system first, then applied it across every enterprise workflow — turning a product that worked into one that finally looked like it did.',
  'fintech-merchants':
    "A failed transaction wasn't an inconvenience. It was a livelihood problem. Designed the full payments experience for low-literacy, low-connectivity markets — three taps, zero ambiguity, engineered for the moment the signal drops.",
  'quit-app':
    "You don't get a second first session. Designed the onboarding, commitment device, and first-48-hour experience as one connected system — built to hold someone mid-craving, end-to-end across iOS and Android.",
  'pay-io':
    'Crypto wallets were built for traders, not businesses moving real money. Designed the full payment infrastructure dashboard — hot wallets, sweep logic, merchant settlements — built so operators could manage $200M+ without second-guessing a single transaction.',
}

function ProjectVisual({
  slug,
  videoSrc,
  hovered,
}: {
  slug: string
  videoSrc?: string
  hovered: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (hovered) video.pause()
    else video.play().catch(() => {})
  }, [hovered])

  return (
    <div
      className="w-full"
      style={{
        transform: `scale(${hovered ? 1.008 : 1})`,
        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-[14px] sm:rounded-[20px]"
        />
      ) : (
        <Image
          src={`/case-studies/${slug}/cover-image.png`}
          alt={`${slug} preview`}
          width={1280}
          height={720}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1280px"
        />
      )}
    </div>
  )
}

function CaseBlock({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.05, ease }}
      style={{
        paddingTop: 'clamp(64px, 10vw, 120px)',
        paddingBottom: 'clamp(64px, 10vw, 120px)',
      }}
    >
      {/* Header row: headline left, description + CTA right */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.1fr_1fr] gap-8 sm:gap-12 md:gap-24 items-start"
        style={{ marginBottom: 'clamp(32px, 5vw, 72px)' }}
      >
        {/* LEFT — overline + headline */}
        <div>
          <p
            className="font-body font-medium text-[#0A0A0A]"
            style={{
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: 'clamp(16px, 2vw, 28px)',
            }}
          >
            {project.name}
          </p>

          <h2
            className="font-display font-bold text-[#0A0A0A]"
            style={{
              fontSize: 'clamp(28px, 4.6vw, 64px)',
              lineHeight: 1.04,
              letterSpacing: '-0.028em',
              maxWidth: '680px',
            }}
          >
            {project.decision}
          </h2>
        </div>

        {/* RIGHT — description + CTA + metric */}
        <div
          className="flex flex-col"
          style={{ gap: 'clamp(20px, 3vw, 32px)', paddingTop: '4px' }}
        >
          <p
            className="font-body text-[#2A2A28] leading-relaxed"
            style={{
              fontSize: 'clamp(14px, 1.1vw, 16px)',
              maxWidth: '460px',
            }}
          >
            {extendedSubtext[project.slug] ?? project.tension}
          </p>

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center justify-center
                       bg-[#1C1C1A] text-[#F2F2EE] hover:bg-[#0A0A0A]
                       transition-colors duration-300 self-start
                       w-full sm:w-auto"
            style={{
              padding: '12px 22px',
              letterSpacing: '0.22em',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              borderRadius: '2px',
            }}
          >
            Open project
          </Link>

          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '10px',
              marginTop: '4px',
              paddingTop: '18px',
              borderTop: '1px solid #E3E3DE',
            }}
          >
            <span
              className="font-display font-bold text-[#0A0A0A]"
              style={{ fontSize: 'clamp(18px, 1.9vw, 26px)' }}
            >
              {project.metricValue}
            </span>
            <span
              className="font-body text-[#6B6B68]"
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              {project.metricLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Full-width visual — clickable */}
      <Link
        href={`/work/${project.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="block"
      >
        <ProjectVisual
          slug={project.slug}
          videoSrc={project.videoSrc}
          hovered={hovered}
        />
      </Link>
    </motion.div>
  )
}

export default function WorkSection() {
  const labelRef = useRef<HTMLParagraphElement>(null)
  const labelInView = useInView(labelRef, { once: true, amount: 0.5 })

  return (
    <div className="w-full">
      <section
        id="work"
        className="px-5 sm:px-6 md:px-8 max-w-[1280px] mx-auto"
        style={{
          paddingTop: 'clamp(72px, 10vw, 120px)',
          paddingBottom: 'clamp(48px, 7vw, 80px)',
        }}
      >
        <motion.p
          ref={labelRef}
          initial={{ opacity: 0 }}
          animate={labelInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-body font-medium text-[#0A0A0A]"
          style={{
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: 'clamp(16px, 2vw, 24px)',
          }}
        >
          Selected Work
        </motion.p>

        <div className="divide-y divide-[#E3E3DE]">
          {projects.map((project, i) => (
            <CaseBlock key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
