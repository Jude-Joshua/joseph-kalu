import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WorkSection from '@/components/WorkSection'
import Contact from '@/components/Contact'

export const metadata = {
  alternates: { canonical: '/' },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joseph Kalu',
  url: 'https://josephkalu.com',
  jobTitle: 'Senior Product Designer',
  description:
    'Senior Product Designer shipping high-stakes digital systems in fintech, enterprise SaaS, and consumer health.',
  sameAs: [
    'https://www.linkedin.com/in/josephkalu/',
    'https://adplist.org/mentors/joseph-kalu/',
  ],
  knowsAbout: [
    'Product Design',
    'UX Design',
    'Fintech',
    'Enterprise SaaS',
    'Design Research',
    'Human–Computer Interaction',
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <Contact />
      </main>
    </>
  )
}
