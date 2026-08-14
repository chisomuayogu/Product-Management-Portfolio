import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InsightCard from '@/components/InsightCard'

export const metadata = { title: 'Contact | Chisom Ayogu — Product Manager', description: 'Contact Chisom Ayogu about Product Management roles and opportunities.' }

export default function ContactPage() {
  return (
    <div className="bg-ivory">
      <Navigation />
      <section className="section-spacing hero-atmosphere page-hero"><div className="container-wide"><p className="eyebrow mb-6 md:mb-8">Contact</p><h1 className="heading-hero mb-8 md:mb-10 max-w-4xl">Interested in working together?</h1><p className="body-large text-grey-secondary max-w-3xl">I&apos;m open to conversations about Product Management roles, product challenges, and opportunities to contribute to thoughtful teams.</p></div></section>
      <section className="section-spacing section-warm border-t warm-divider"><div className="container-wide"><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="Email"><p className="heading-card mb-3">Email placeholder</p><p className="body-small text-grey-secondary">Add the approved professional email before deployment.</p></InsightCard><InsightCard label="LinkedIn"><p className="heading-card mb-3">LinkedIn placeholder</p><p className="body-small text-grey-secondary">Add the approved LinkedIn profile URL before deployment.</p></InsightCard><InsightCard label="CV"><p className="heading-card mb-5">CV integration ready</p><Link href="/cv" className="link-primary font-medium">View CV status →</Link></InsightCard></div><div className="glass-panel rounded-2xl p-6 md:p-10 mt-8"><p className="eyebrow text-burgundy mb-4">Contact Details Pending</p><p className="body-default text-grey-secondary max-w-2xl">No contact information has been invented. Once approved details are supplied, the email and LinkedIn placeholders can become direct contact links.</p></div></div></section>
      <Footer />
    </div>
  )
}
