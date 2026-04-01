import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti — Richiedi un GEO Audit Gratuito",
  description:
    "Contatta CercAI per un audit gratuito della tua presenza AI. Scopri come il tuo brand appare su ChatGPT, Gemini e Claude. Sede a Padova, operativi in tutta Italia.",
  alternates: { canonical: "https://cercai.it/contatti" },
};

export default function ContattiPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-grid">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-gradient">Contattaci</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Richiedi un audit gratuito della tua presenza AI o parlaci del
              tuo progetto. Ti rispondiamo entro 24 ore.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium mb-2"
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cognome"
                      className="block text-sm font-medium mb-2"
                    >
                      Cognome *
                    </label>
                    <input
                      type="text"
                      id="cognome"
                      name="cognome"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="la-tua@email.it"
                  />
                </div>

                <div>
                  <label
                    htmlFor="azienda"
                    className="block text-sm font-medium mb-2"
                  >
                    Azienda
                  </label>
                  <input
                    type="text"
                    id="azienda"
                    name="azienda"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="Nome della tua azienda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sito"
                    className="block text-sm font-medium mb-2"
                  >
                    Sito web
                  </label>
                  <input
                    type="url"
                    id="sito"
                    name="sito"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="https://www.tuosito.it"
                  />
                </div>

                <div>
                  <label
                    htmlFor="servizio"
                    className="block text-sm font-medium mb-2"
                  >
                    Servizio di interesse
                  </label>
                  <select
                    id="servizio"
                    name="servizio"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                  >
                    <option value="">Seleziona un servizio</option>
                    <option value="audit">GEO Audit Gratuito</option>
                    <option value="monitoring">AI Monitoring</option>
                    <option value="optimization">Content Optimization</option>
                    <option value="agent">Agent Readiness</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="messaggio"
                    className="block text-sm font-medium mb-2"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                    placeholder="Raccontaci del tuo progetto o delle tue esigenze..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white font-medium py-3.5 rounded-lg hover:bg-accent/90 transition-colors text-base"
                >
                  Invia Richiesta
                </button>
                <p className="text-xs text-muted text-center">
                  Risposta garantita entro 24 ore lavorative.
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold mb-3">Sede operativa</h3>
                <address className="not-italic text-sm text-muted space-y-1">
                  <p>CercAI S.r.l.</p>
                  <p>Padova, Veneto</p>
                  <p>Italia</p>
                </address>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold mb-3">Contatti diretti</h3>
                <div className="text-sm text-muted space-y-2">
                  <p>
                    <span className="text-foreground font-medium">Email:</span>{" "}
                    <a
                      href="mailto:info@cercai.it"
                      className="text-accent hover:underline"
                    >
                      info@cercai.it
                    </a>
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Tel:</span>{" "}
                    <a
                      href="tel:+390491234567"
                      className="text-accent hover:underline"
                    >
                      +39 049 123 4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-background">
                <h3 className="font-semibold mb-3">Audit Gratuito</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Richiedi un GEO Audit gratuito e senza impegno. Analizzeremo
                  come il tuo brand appare nelle risposte di ChatGPT, Gemini,
                  Claude e Perplexity. Riceverai il report entro 48 ore.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-accent/20 bg-accent-light/30">
                <h3 className="font-semibold mb-2 text-accent">
                  Operativi in tutta Italia
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Sebbene la nostra sede sia a Padova, lavoriamo con clienti
                  in tutta Italia. Il GEO è un servizio completamente digitale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
