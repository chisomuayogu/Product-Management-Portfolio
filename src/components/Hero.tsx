import Link from 'next/link'
import styles from './Hero.module.css'
import { CV_FILE_NAME, CV_FILE_PATH } from '@/data/cv'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.panel}>
        <svg
          className={styles.curves}
          viewBox="0 0 1440 1000"
          preserveAspectRatio="xMaxYMax slice"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="heroIvoryRibbon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF8F2" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#EBCFC5" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="heroBlushRibbon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EBCFC5" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#AA5562" stopOpacity="0.38" />
            </linearGradient>
            <linearGradient id="heroWineRibbon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#981B32" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7A0C20" stopOpacity="0.62" />
            </linearGradient>
            <linearGradient id="heroOxbloodRibbon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#981B32" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#7A0C20" stopOpacity="0.94" />
            </linearGradient>
            <linearGradient id="heroDeepRibbon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7A0C20" />
              <stop offset="72%" stopColor="#520713" />
              <stop offset="100%" stopColor="#3D050E" />
            </linearGradient>
            <filter id="heroRibbonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          <path d="M1440 205C1272 527 950 840 470 1000H1440V205Z" fill="url(#heroIvoryRibbon)" />
          <path d="M1440 314C1250 590 930 860 515 1000H1440V314Z" fill="url(#heroBlushRibbon)" stroke="rgba(255,255,255,0.82)" strokeWidth="2" />
          <path d="M1440 405C1240 640 950 880 560 1000H1440V405Z" fill="url(#heroWineRibbon)" stroke="rgba(255,255,255,0.78)" strokeWidth="2" />
          <path d="M1440 492C1260 690 990 900 605 1000H1440V492Z" fill="url(#heroOxbloodRibbon)" stroke="rgba(255,255,255,0.72)" strokeWidth="2" />
          <path d="M1440 574C1280 730 1050 920 655 1000H1440V574Z" fill="url(#heroDeepRibbon)" stroke="rgba(255,255,255,0.72)" strokeWidth="2" />
          <path d="M1440 299C1248 585 920 855 500 1000" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="16" filter="url(#heroRibbonGlow)" />
        </svg>

        <div className={`container-wide ${styles.content}`}>
          <div className={styles.eyebrow}>Early-Career Product Manager</div>

          <h1 className={styles.heading}>
            <span>I turn complex user</span>
            <span>problems into clear</span>
            <span>product decisions and</span>
            <span>coordinated execution.</span>
          </h1>

          <p className={styles.supportingCopy}>
            <span>With a legal background, I bring hands-on experience across product discovery,</span>
            <span>AI-enabled products, marketplace strategy, cross-functional delivery,</span>
            <span>and stakeholder communication.</span>
          </p>

          <div className={styles.actions}>
            <Link href="/#work" className={styles.primaryButton}>
              <span aria-hidden="true">↗</span>
              View My Work
            </Link>
            <a href={CV_FILE_PATH} download={CV_FILE_NAME} className={styles.secondaryButton}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 3.75h6.5L18 8.25v12H7z" />
                <path d="M13.5 3.75v4.5H18M9.75 12h5M9.75 15.5h5" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
