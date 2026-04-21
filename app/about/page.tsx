import Nav from '@/components/Nav'
import AboutPage from '@/components/AboutPage'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'About',
  description:
    'Senior Product Designer — seven years shipping high-stakes digital systems across fintech, enterprise SaaS, and consumer health.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — Joseph Kalu',
    description:
      'Senior Product Designer — seven years shipping high-stakes digital systems across fintech, enterprise SaaS, and consumer health.',
    url: 'https://josephkalu.com/about',
    type: 'profile',
  },
}

export default function About() {
  return (
    <>
      <Nav />
      <main>
        <AboutPage />
        <Contact />
      </main>
    </>
  )
}
