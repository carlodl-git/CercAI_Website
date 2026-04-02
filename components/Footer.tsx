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
          <div className="flex gap-6">
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
