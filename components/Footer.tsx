import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-xl font-bold tracking-tight">
              Ricerc<span className="text-teal-400">AI</span>
            </span>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              La prima agenzia italiana specializzata in Generative Engine Optimization.
              Sede a Padova, operativi in tutta Italia.
            </p>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Servizi
            </h4>
            <ul className="space-y-2">
              <li><Link href="/servizi#audit" className="text-sm text-gray-300 hover:text-white transition-colors">GEO Audit</Link></li>
              <li><Link href="/servizi#monitoring" className="text-sm text-gray-300 hover:text-white transition-colors">AI Monitoring</Link></li>
              <li><Link href="/servizi#optimization" className="text-sm text-gray-300 hover:text-white transition-colors">Content Optimization</Link></li>
              <li><Link href="/servizi#agent" className="text-sm text-gray-300 hover:text-white transition-colors">Agent Readiness</Link></li>
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Azienda
            </h4>
            <ul className="space-y-2">
              <li><Link href="/chi-siamo" className="text-sm text-gray-300 hover:text-white transition-colors">Chi Siamo</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contatti" className="text-sm text-gray-300 hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contatti
            </h4>
            <address className="not-italic space-y-2 text-sm text-gray-300">
              <p>Padova, Italia</p>
              <p>
                <a href="mailto:info@ricercai.it" className="hover:text-white transition-colors">
                  info@ricercai.it
                </a>
              </p>
              <p>
                <a href="tel:+390491234567" className="hover:text-white transition-colors">
                  +39 049 123 4567
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} RicercAI S.r.l. &mdash; P.IVA 05XXXXXXXX &mdash; Padova, Italia
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/ricercai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="RicercAI su LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
