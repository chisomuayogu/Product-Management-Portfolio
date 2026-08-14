import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InsightCard from '@/components/InsightCard'

export const metadata = { title: 'CV | Chisom Ayogu — Product Manager', description: 'CV placeholder for Chisom Ayogu. The approved PDF will be added before deployment.' }

export default function CVPage() {
  return (
    <div className="bg-ivory">
      <Navigation />
      <section className="section-spacing hero-atmosphere page-hero"><div className="container-wide"><p className="eyebrow mb-6 md:mb-8">Curriculum Vitae</p><h1 className="heading-hero mb-8 md:mb-10 max-w-4xl">CV file awaiting the approved PDF.</h1><p className="body-large text-grey-secondary max-w-3xl">A fake CV has not been created. This live placeholder keeps every View CV link working until the final document is available.</p></div></section>
      <section className="section-spacing section-warm border-t warm-divider"><div className="container-wide max-w-3xl"><InsightCard label="Final PDF Location" highlighted><p className="heading-card mb-4">public/Chisom-Ayogu-CV.pdf</p><p className="body-default text-grey-secondary mb-6">Place the approved PDF at this exact repository path. The portfolio links can then be updated from <span className="font-semibold text-near-black">/cv</span> to <span className="font-semibold text-near-black">/Chisom-Ayogu-CV.pdf</span>.</p><div className="flex flex-col sm:flex-row gap-4"><Link href="/#work" className="button-secondary text-center">View Product Work</Link><Link href="/contact" className="button-primary text-center">Contact</Link></div></InsightCard></div></section>
      <Footer />
    </div>
  )
}
