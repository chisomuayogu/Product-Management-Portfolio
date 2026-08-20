import Link from 'next/link'
import { CV_FILE_NAME, CV_FILE_PATH } from '@/data/cv'
import { CONTACT_DETAILS } from '@/data/contact'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const footerLinkClass = 'text-ivory transition-colors duration-200 hover:text-blush focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush'

  return (
    <footer className="bg-near-black text-ivory border-t border-burgundy-light/30">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">Chisom Ayogu</h2>
            <p className="text-sm md:text-base text-ivory/70">Product Manager</p>
          </div>

          <div>
            <p className="eyebrow text-ivory/60 mb-4">Selected Work</p>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/case-studies/gradready" className={footerLinkClass}>GradReady</Link></li>
              <li><Link href="/case-studies/impacthub" className={footerLinkClass}>ImpactHub</Link></li>
              <li><Link href="/case-studies/bulk-market" className={footerLinkClass}>Bulk-Market</Link></li>
              <li><Link href="/case-studies/foodsaver" className={footerLinkClass}>FoodSaver</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/60 mb-4">Navigation</p>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/#work" className={footerLinkClass}>
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className={footerLinkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/earlier-work" className={footerLinkClass}>
                  Earlier Work
                </Link>
              </li>
              <li>
                <a
                  href={CV_FILE_PATH}
                  download={CV_FILE_NAME}
                  className={footerLinkClass}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/60 mb-4">Connect</p>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/contact" className={footerLinkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={CONTACT_DETAILS.linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_DETAILS.emailHref}
                  className={footerLinkClass}
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-burgundy/10 pt-8 md:pt-12">
          <p className="text-sm text-ivory/50 text-center md:text-left">
            © {currentYear} Chisom Ayogu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
