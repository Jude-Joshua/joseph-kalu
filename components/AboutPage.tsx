'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const career = [
  { company: 'Yolo Group', year: '2025 — Present', role: 'Product Designer' },
  { company: 'Kenvue Inc. (Johnson & Johnson)', year: '2023 — 2024', role: 'Digital Experience Design Lead' },
  { company: 'Meaningful Gigs', year: '2022 — Present', role: 'UX Creative Partner' },
  { company: 'CoinHaven', year: '2022 — 2023', role: 'UX/UI Designer' },
  { company: 'SystemSpecs Group', year: '2021 — 2023', role: 'Digital Experience Design Lead' },
  { company: 'SlateMall', year: '2019 — 2021', role: 'User Experience Designer' },
]

const education = [
  { school: 'Tallinn University', degree: 'MSc Human Computer Interaction' },
  { school: 'Product School', degree: 'How to Build Digital Products' },
  { school: 'Udacity', degree: 'User Experience Nanodegree' },
  { school: 'IBM', degree: 'Enterprise Design Thinking Practitioner' },
]

type Feature = {
  role: string
  where: { place: string; url?: string }[]
}

const features: Feature[] = [
  { role: 'Chapter Lead', where: [{ place: 'ACM SIGCHI Lagos', url: 'https://www.linkedin.com/company/acmsigchilagos/' }] },
  { role: 'Associated Professional Member', where: [{ place: 'Association for Computing Machinery (ACM)', url: 'https://www.acm.org/' }] },
  { role: 'Speaker', where: [{ place: "Innovate MTM '23" }] },
  { role: 'Speaker', where: [{ place: 'Abia Tech Flock 2024' }] },
  { role: 'Curator', where: [{ place: 'World Usability Day, Africa', url: 'https://wudafrica.com/' }] },
  {
    role: 'Mentor',
    where: [
      { place: 'DesignLab', url: 'https://app.designlab.com/josephkalu/' },
      { place: 'ADPList', url: 'https://adplist.org/mentors/joseph-kalu/' },
      { place: 'HNG Internship', url: 'https://hng.tech/' },
    ],
  },
]

const moreAboutMe = [
  "When I'm not designing or doing design related works, I'm hanging out with friends at the bar, going on a road trip or watching a movie at the cinema.",
  'Yeah I love the smell of books too. Adventure, thriller and mysterious genre. Harry potter is my fav, DaVinci code and Angels and Demons are awesome books.',
  "I don't have a thing for Pizza because I do more than a bite. But Kebab is heavenly. I still don't like Sushi though.",
]

const CV_URL = 'https://drive.google.com/file/d/1xsn421vkK07uhVMOh7UwqqfIDlr8Knvk/view?usp=sharing'
const EMAIL_URL = 'mailto:joseph.kalu@yolo.com'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body font-medium text-[#0A0A0A]"
      style={{
        fontSize: '11px',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </p>
  )
}

export default function AboutPage() {
  const headRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const headIn = useInView(headRef, { once: true, amount: 0.2 })
  const bodyIn = useInView(bodyRef, { once: true, amount: 0.15 })

  return (
    <section
      id="about"
      className="px-5 sm:px-6 md:px-8 max-w-[1280px] mx-auto w-full"
      style={{
        paddingTop: 'clamp(120px, 14vw, 200px)',
        paddingBottom: 'clamp(80px, 10vw, 140px)',
      }}
    >
      {/* Header */}
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 16 }}
        animate={headIn ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease }}
      >
        <p
          className="font-body font-medium text-[#0A0A0A]"
          style={{
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: 'clamp(20px, 2.5vw, 32px)',
          }}
        >
          About me
        </p>
        <h1
          className="font-display font-bold text-[#0A0A0A]"
          style={{
            fontSize: 'clamp(34px, 5.6vw, 76px)',
            letterSpacing: '-0.028em',
            lineHeight: 1.05,
            maxWidth: '1040px',
          }}
        >
          I design systems that turn complex <em className="not-italic text-[#6B6B68]">human</em> problems into clear,{' '}
          <em className="not-italic text-[#6B6B68]">reliable</em> products—reducing cost, minimizing risk, and creating measurable{' '}
          <em className="not-italic text-[#6B6B68]">value</em> for businesses.
        </h1>

        <div
          className="flex flex-wrap items-center gap-3"
          style={{ marginTop: 'clamp(32px, 4vw, 48px)' }}
        >
          <a
            href={EMAIL_URL}
            className="font-body text-[#0A0A0A] border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F5F5F0] transition-colors duration-300"
            style={{
              fontSize: '12px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '14px 22px',
            }}
          >
            Discuss a project
          </a>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[#0A0A0A] border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F5F5F0] transition-colors duration-300"
            style={{
              fontSize: '12px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '14px 22px',
            }}
          >
            Resume
          </a>
        </div>

      </motion.div>

      {/* 01 — Career Highlights */}
      <motion.div
        ref={bodyRef}
        initial={{ opacity: 0, y: 16 }}
        animate={bodyIn ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease }}
        className="border-t border-[#E3E3DE]"
        style={{
          marginTop: 'clamp(80px, 10vw, 140px)',
          paddingTop: 'clamp(56px, 7vw, 100px)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-24">
          <div>
            <SectionLabel>01 — Career Highlights</SectionLabel>
          </div>

          <div className="flex flex-col">
            {career.map((item, i) => (
              <div
                key={item.company}
                className={`grid grid-cols-1 sm:grid-cols-[160px_1fr_auto] gap-2 sm:gap-6 ${
                  i !== 0 ? 'border-t border-[#E3E3DE]' : ''
                }`}
                style={{ paddingTop: '20px', paddingBottom: '20px' }}
              >
                <p
                  className="font-body text-[#6B6B68]"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.year}
                </p>
                <p
                  className="font-display font-bold text-[#0A0A0A]"
                  style={{ fontSize: 'clamp(16px, 1.3vw, 18px)' }}
                >
                  {item.company}
                </p>
                <p className="font-body text-[#6B6B68]" style={{ fontSize: '13px' }}>
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 02 — Education */}
      <div
        className="border-t border-[#E3E3DE]"
        style={{
          marginTop: 'clamp(80px, 10vw, 140px)',
          paddingTop: 'clamp(56px, 7vw, 100px)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-24">
          <SectionLabel>02 — Education</SectionLabel>

          <div className="flex flex-col">
            {education.map((item, i) => (
              <div
                key={item.school}
                className={`grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-6 ${
                  i !== 0 ? 'border-t border-[#E3E3DE]' : ''
                }`}
                style={{ paddingTop: '20px', paddingBottom: '20px' }}
              >
                <p
                  className="font-display font-bold text-[#0A0A0A]"
                  style={{ fontSize: 'clamp(16px, 1.3vw, 18px)' }}
                >
                  {item.school}
                </p>
                <p className="font-body text-[#6B6B68]" style={{ fontSize: '13px' }}>
                  {item.degree}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 03 — Features */}
      <div
        className="border-t border-[#E3E3DE]"
        style={{
          marginTop: 'clamp(80px, 10vw, 140px)',
          paddingTop: 'clamp(56px, 7vw, 100px)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-24">
          <SectionLabel>03 — Features</SectionLabel>

          <div className="flex flex-col">
            {features.map((f, i) => (
              <div
                key={`${f.role}-${i}`}
                className={`${i !== 0 ? 'border-t border-[#E3E3DE]' : ''}`}
                style={{ paddingTop: '20px', paddingBottom: '20px' }}
              >
                <p
                  className="font-body text-[#2A2A28] leading-relaxed"
                  style={{ fontSize: 'clamp(15px, 1.15vw, 17px)' }}
                >
                  <span className="font-display font-bold text-[#0A0A0A]">{f.role}</span>
                  <span className="text-[#6B6B68]"> at </span>
                  {f.where.map((w, idx) => (
                    <span key={w.place}>
                      {idx > 0 && idx < f.where.length - 1 ? ', ' : ''}
                      {idx > 0 && idx === f.where.length - 1 ? ' and ' : ''}
                      {w.url ? (
                        <a
                          href={w.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0A0A0A] border-b border-[#0A0A0A]/30 hover:border-[#0A0A0A] transition-colors duration-200"
                        >
                          {w.place}
                        </a>
                      ) : (
                        <span className="text-[#0A0A0A]">{w.place}</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 04 — More about me */}
      <div
        className="border-t border-[#E3E3DE]"
        style={{
          marginTop: 'clamp(80px, 10vw, 140px)',
          paddingTop: 'clamp(56px, 7vw, 100px)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-24">
          <SectionLabel>04 — More about me</SectionLabel>

          <div className="max-w-[680px] space-y-5 sm:space-y-6">
            {moreAboutMe.map((p, i) => (
              <p
                key={i}
                className="font-body text-[#2A2A28] leading-relaxed"
                style={{ fontSize: 'clamp(16px, 1.3vw, 20px)' }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Back CTA */}
      <div style={{ marginTop: 'clamp(72px, 8vw, 120px)' }}>
        <Link
          href="/#work"
          className="font-body text-[#0A0A0A] hover:opacity-60 transition-opacity duration-300 inline-flex items-center gap-2"
          style={{
            fontSize: '12px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          <span>←</span> Back to selected work
        </Link>
      </div>
    </section>
  )
}
