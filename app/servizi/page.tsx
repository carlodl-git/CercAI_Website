import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

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

const providerInfo = {
  "@type": "LocalBusiness",
  name: "RicercAI",
  url: "https://ricercai.it",
  telephone: "+393402256530",
  email: "info@ricercai.it",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Padova",
    addressRegion: "Veneto",
    addressCountry: "IT",
  },
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://ricercai.it/servizi#audit",
    name: "GEO Audit & Strategy",
    alternateName: "Audit Visibilità AI",
    description:
      "Analisi completa della visibilità del brand nelle risposte di ChatGPT, Gemini, Claude e Perplexity. Mappiamo competitor citati, identifichiamo gap e costruiamo una roadmap strategica GEO a 90 giorni.",
    url: "https://ricercai.it/servizi#audit",
    provider: providerInfo,
    areaServed: { "@type": "Country", name: "IT" },
    serviceType: "Generative Engine Optimization Audit",
    category: "Digital Marketing",
    audience: {
      "@type": "Audience",
      audienceType: "Aziende che vogliono capire la propria visibilità nelle risposte AI",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Deliverables GEO Audit",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Report presenza AI su ChatGPT, Gemini, Claude e Perplexity" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analisi competitiva citazioni AI" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gap analysis visibilità AI" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roadmap strategica GEO a 90 giorni" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Priorità d'intervento con impatto stimato" } },
      ],
    },
    termsOfService: "https://ricercai.it/contatti",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://ricercai.it/servizi#monitoring",
    name: "AI Monitoring",
    alternateName: "Monitoraggio Citazioni AI",
    description:
      "Dashboard proprietaria per monitorare in tempo reale le citazioni del brand su ChatGPT, Gemini, Claude e Perplexity. Include AI Mention Share, Citation Quality Score, benchmark competitivo, alert automatici e report mensile con raccomandazioni.",
    url: "https://ricercai.it/servizi#monitoring",
    provider: providerInfo,
    areaServed: { "@type": "Country", name: "IT" },
    serviceType: "AI Citation Monitoring",
    category: "Digital Marketing",
    audience: {
      "@type": "Audience",
      audienceType: "Aziende che vogliono misurare e tracciare la propria presenza AI nel tempo",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Deliverables AI Monitoring",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dashboard personalizzata con aggiornamenti settimanali" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Mention Share: percentuale di citazione sulle query target" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Citation Quality Score: qualità delle menzioni" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Benchmark vs competitor" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alert automatici su variazioni significative" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Report mensile con analisi e raccomandazioni" } },
      ],
    },
    termsOfService: "https://ricercai.it/contatti",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://ricercai.it/servizi#optimization",
    name: "Content Optimization",
    alternateName: "Ottimizzazione Contenuti per AI",
    description:
      "Ottimizzazione completa dei contenuti web per massimizzare le citazioni e raccomandazioni da parte dei modelli AI. Include audit contenuti, Schema.org avanzato, digital PR, ottimizzazione directory, creazione contenuti GEO-optimized e coerenza NAP cross-piattaforma.",
    url: "https://ricercai.it/servizi#optimization",
    provider: providerInfo,
    areaServed: { "@type": "Country", name: "IT" },
    serviceType: "GEO Content Optimization",
    category: "Digital Marketing",
    audience: {
      "@type": "Audience",
      audienceType: "Aziende che vogliono risultati concreti sulle citazioni AI",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Deliverables Content Optimization",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit e ottimizzazione contenuti sito web" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Implementazione Schema.org avanzato" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strategia digital PR per fonti autorevoli" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ottimizzazione profili directory e piattaforme" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Creazione contenuti GEO-optimized" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coerenza NAP cross-piattaforma" } },
      ],
    },
    termsOfService: "https://ricercai.it/contatti",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://ricercai.it/servizi#agent",
    name: "Agent Readiness",
    alternateName: "Preparazione per AI Agent Autonomi",
    description:
      "Preparazione del brand per gli AI agent autonomi come Operator di OpenAI. Include audit machine-readability, ottimizzazione trust signal, structured data per transazioni automatiche, test di compatibilità con i principali AI agent e piano di preparazione continua.",
    url: "https://ricercai.it/servizi#agent",
    provider: providerInfo,
    areaServed: { "@type": "Country", name: "IT" },
    serviceType: "AI Agent Readiness Optimization",
    category: "Digital Marketing",
    audience: {
      "@type": "Audience",
      audienceType: "E-commerce, hospitality e servizi B2C che vogliono essere scelti dagli AI agent",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Deliverables Agent Readiness",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit machine-readability del sito web" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ottimizzazione per AI agent (Operator, OpenAI Agents)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trust signal optimization" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Structured data per transazioni automatiche" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Test di compatibilità con principali AI agent" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Piano di preparazione continua" } },
      ],
    },
    termsOfService: "https://ricercai.it/contatti",
  },
];

const serviziFaqs = [
  {
    q: "Cosa include un GEO Audit?",
    a: "Analisi completa della presenza AI del brand su ChatGPT, Gemini, Claude e Perplexity. Include report con score di visibilità, analisi competitor, gap analysis e roadmap strategica.",
  },
  {
    q: "Quanto dura il servizio di AI Monitoring?",
    a: "Il monitoring è continuativo, con report mensili. Il contratto minimo è trimestrale per avere dati significativi e trend affidabili.",
  },
  {
    q: "Come funziona la Content Optimization per AI?",
    a: "Analizziamo come i modelli AI interpretano i contenuti del tuo sito, poi ottimizziamo struttura, formato e markup per massimizzare le citazioni nelle risposte AI.",
  },
  {
    q: "Cos'è l'Agent Readiness?",
    a: "Prepariamo il tuo sito per gli AI Agent, ovvero i sistemi autonomi che navigano, comparano e acquistano per conto degli utenti. Include ottimizzazione API, structured data avanzati e machine-readable content.",
  },
];

function ServiziFaq() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviziFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
          Domande frequenti sui servizi
        </h2>
        <div className="space-y-6">
          {serviziFaqs.map((faq) => (
            <div key={faq.q} className="p-6 rounded-xl border border-border bg-background">
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="mt-3 text-muted leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServiziPage() {
  return (
    <>
      {/* JSON-LD: Individual Service schemas */}
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Breadcrumbs items={[
        { name: "Home", url: "https://ricercai.it" },
        { name: "Servizi", url: "https://ricercai.it/servizi" },
      ]} />

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

      {/* FAQ */}
      <ServiziFaq />

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
