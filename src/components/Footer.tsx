import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-near-black text-ivory border-t border-burgundy/20">
      <div className="container-wide py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Chisom Ayogu
            </h2>
            <p className="text-sm md:text-base text-ivory/70">
              Product Manager
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="eyebrow text-ivory/60 mb-4">Navigation</p>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="#work"
                  className="text-ivory hover:text-burgundy transition-colors duration-200"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-ivory hover:text-burgundy transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/cv"
                  className="text-ivory hover:text-burgundy transition-colors duration-200"
                >
                  CV
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@chisomayogu.com"
                  className="text-ivory hover:text-burgundy transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="eyebrow text-ivory/60 mb-4">Connect</p>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory hover:text-burgundy transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory hover:text-burgundy transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@chisomayogu.com"
                  className="text-ivory hover:text-burgundy transition-colors duration-200"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-burgundy/10 pt-8 md:pt-12">
          {/* Copyright */}
          <p className="text-sm text-ivory/50 text-center md:text-left">
            © {currentYear} Chisom Ayogu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
