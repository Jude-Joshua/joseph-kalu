import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/app/data'
import CaseStudyClient from './CaseStudyClient'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}

  const title = `${project.name} — ${project.category}`
  const description = project.decision
  const url = `/work/${project.slug}`
  const ogImage = `/case-studies/${project.slug}/cover-image.png`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${project.name} — Joseph Kalu`,
      description,
      images: [{ url: ogImage, alt: `${project.name} cover` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} — Joseph Kalu`,
      description,
      images: [ogImage],
    },
  }
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    headline: `${project.name} — ${project.category}`,
    description: project.decision,
    creator: {
      '@type': 'Person',
      name: 'Joseph Kalu',
      url: 'https://josephkalu.com',
    },
    datePublished: project.year,
    url: `https://josephkalu.com/work/${project.slug}`,
    keywords: [project.category, project.name, 'Product Design', 'Case Study'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyClient project={project} />
    </>
  )
}
