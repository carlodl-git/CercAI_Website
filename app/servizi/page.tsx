import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servizi GEO — Generative Engine Optimization",
  description:
    "Scopri i servizi GEO di RicercAI: Audit AI, Monitoring delle citazioni, Content Optimization e Agent Readiness. Portiamo il tuo brand nelle risposte di ChatGPT, Gemini e Claude.",
  alternates: { canonical: "https://ricercai.it/servizi" },
};

const services = [
  {
    id: "audit",
    icon: "🔍",
    title: "GEO Audit & Strategy",
    subtitle: "Scopri come il tuo brand appare nelle risposte AI",
    description:
      "Un'analisi completa e approfondita della presenza del tuo brand nei principali modelli AI. Mappiamo i competitor che vengono citati al posto tuo, identifichiamo i gap e costruiamo un piano strategico personalizzato per colmarli.",
    deliverables: [
      "Report dettagliato presenza AI su ChatGPT, Gemini, Claude e Perplexity",
      "Analisi competitiva: chi viene citato nelle tue query target",
      "Gap analysis: dove il tuo brand è assente",
      "Roadmap strategica GEO a 90 giorni",
      "Priorità d'intervento con impatto stimato",
    ],
    cta: "Ideale per chi vuole capire il proprio punto di partenza",
  },
  {
    id: "monitoring",
    icon: "📊",
    title: "AI Monitoring",
    subtitle: "Traccia le citazioni del tuo brand in tempo reale",
    description:
      "Dashboard proprietaria per monitorare continuamente quante volte e come il tuo brand viene citato su ChatGPT, Gemini, Claude e Perplexity. Metriche chiare, alert automatici e trend nel tempo.",
    deliverables: [
      "Dashboard personalizzata con aggiornamenti settimanali",
      "AI Mention Share: percentuale di citazione sulle query target",
      "Citation Quality Score: qualità delle menzioni",
      "Benchmark vs competitor",
      "Alert automatici su variazioni significative",
      "Report mensile con analisi e raccomandazioni",
    ],
    cta: "Ideale per chi vuole misurare e tracciare i progressi",
  },
  {
    id: "optimization",
    icon: "✍️",
    title: "Content Optimization",
    subtitle: "Rendi i tuoi contenuti citabili dai modelli AI",
    description:
      "Ottimizzazione completa dei contenuti del tuo sito web e delle tue proprietà digitali per massimizzare la probabilità di essere citati e raccomandati dai modelli AI. Include dati strutturati, digital PR e strategie di autorevolezza.",
    deliverables: [
      "Audit e ottimizzazione contenuti sito web",
      "Implementazione Schema.org avanzato",
      "Strategia digital PR per fonti autorevoli",
      "Ottimizzazione profili directory e piattaforme",
      "Creazione contenuti GEO-optimized",
      "Coerenza NAP cross-piattaforma",
    ],
    cta: "Ideale per chi vuole risultati concreti sulle citazioni AI",
  },
  {
    id: "agent",
    icon: "🤖",
    title: "Agent Readiness",
    subtitle: "Preparati per gli AI agent autonomi",
    description:
      "Gli AI agent (come Operator di OpenAI) stanno iniziando a effettuare acquisti e prenotazioni in autonomia. Il tuo brand deve essere machine-readable, affidabile e facilmente interpretabile da questi agenti per essere scelto.",
    deliverables: [
      "Audit machine-readability del sito web",
      "Ottimizzazione per AI agent (Operator, OpenAI Agents)",
      "Trust signal optimization",
      "Structured data per transazioni automatiche",
      "Test di compatibilità con principali AI agent",
      "Piano di preparazione continua",
    ],
    cta: "Ideale per e-commerce, hospitality e servizi B2C",
  },
];

export default function ServiziPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-grid">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Servizi <span className="text-gradient">GEO</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Soluzioni complete per portare il tuo brand nelle risposte dei
              modelli AI. Dalla diagnosi alla strategia, dall&apos;ottimizzazione
              al monitoraggio continuo.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start p-8 md:p-12 rounded-2xl border border-border ${
                i % 2 === 0 ? "bg-white" : "bg-background"
              }`}
            >
              <div>
                <span className="text-4xl">{service.icon}</span>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold">
                  {service.title}
                </h2>
                <p className="mt-1 text-accent font-medium">
                  {service.subtitle}
                </p>
                <p className="mt-4 text-muted leading-relaxed">
                  {service.description}
                </p>
                <p className="mt-6 text-sm font-medium text-foreground/60 italic">
                  {service.cta}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                  Cosa include
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-muted">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-foreground text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Non sai da dove iniziare?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Richiedi un GEO Audit gratuito. Analizzeremo la tua presenza AI
            e ti mostreremo le opportunità concrete per il tuo brand.
          </p>
          <Link
            href="/contatti"
            className="mt-8 inline-flex items-center justify-center bg-accent text-white font-medium px-10 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg"
          >
            Richiedi Audit Gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
