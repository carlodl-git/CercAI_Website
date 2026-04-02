import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import AiLogos from "@/components/AiLogos";

const faqs = [
  {
    q: "Cos'è il GEO (Generative Engine Optimization)?",
    a: "Il GEO è l'insieme di strategie che ottimizzano la presenza di un brand nelle risposte generate da modelli AI come ChatGPT, Google Gemini, Claude e Perplexity. A differenza del SEO tradizionale, il GEO mira a far sì che il tuo brand venga citato e raccomandato nelle risposte AI.",
  },
  {
    q: "In quanto tempo si vedono i risultati del GEO?",
    a: "I primi miglioramenti nelle citazioni AI si osservano generalmente entro 60-90 giorni dall'implementazione della strategia. I risultati dipendono dal settore, dalla concorrenza e dal punto di partenza del brand.",
  },
  {
    q: "Il GEO sostituisce il SEO?",
    a: "No. GEO e SEO sono complementari. Il SEO rimane fondamentale per la visibilità sui motori di ricerca tradizionali, mentre il GEO aggiunge un nuovo canale di visibilità attraverso le risposte AI. Una strategia integrata è l'approccio più efficace.",
  },
  {
    q: "Lavorate solo a Padova o in tutta Italia?",
    a: "RicercAI ha sede a Padova ma opera con clienti in tutta Italia. Il GEO è un servizio digitale che non richiede presenza fisica, quindi possiamo servire aziende ovunque nel paese.",
  },
  {
    q: "Quanto costa un servizio GEO?",
    a: "Offriamo diverse soluzioni: dal GEO Audit one-shot a pacchetti di ottimizzazione continuativa. Contattaci per un preventivo personalizzato basato sulle tue esigenze specifiche.",
  },
  {
    q: "Come misurate i risultati?",
    a: "Utilizziamo metriche specifiche per il GEO: AI Mention Share (percentuale di query in cui il brand viene citato), Citation Quality Score e trend di menzioni nel tempo. Forniamo report mensili dettagliati.",
  },
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="bg-grid min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Prima agenzia GEO in Italia
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
              I tuoi clienti cercano su{" "}
              <span className="text-gradient">ChatGPT</span>.
              <br />
              Ti trovano?
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              RicercAI ottimizza la presenza del tuo brand nelle risposte di
              ChatGPT, Gemini, Claude e Perplexity. Perché nel 2026 non basta
              essere su Google: devi essere nella risposta dell&apos;AI.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center bg-accent text-white font-medium px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors text-base"
              >
                Richiedi Audit Gratuito
              </Link>
              <Link
                href="/servizi"
                className="inline-flex items-center justify-center border border-border text-foreground font-medium px-8 py-3.5 rounded-lg hover:bg-gray-50 transition-colors text-base"
              >
                Scopri i Servizi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section className="border-y border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-center text-xs uppercase tracking-wider text-muted mb-8">
            Ottimizziamo la tua presenza su
          </p>
          <AiLogos />
        </div>
      </section>

      {/* ── IL PROBLEMA ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Il problema che nessuno ti ha ancora spiegato
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Ogni giorno milioni di persone chiedono a ChatGPT, Gemini e
              Claude consigli su prodotti, servizi e aziende. Se il tuo brand
              non compare in queste risposte,{" "}
              <strong className="text-foreground">stai perdendo clienti</strong>{" "}
              senza nemmeno saperlo.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "40%",
                label: "degli under-35 usa AI per decisioni d'acquisto",
              },
              {
                stat: "85%",
                label: "si fida delle raccomandazioni AI",
              },
              {
                stat: "300M+",
                label: "utenti attivi settimanali su ChatGPT",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="text-center p-8 rounded-2xl border border-border bg-background"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient">
                  {item.stat}
                </div>
                <p className="mt-3 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COME FUNZIONA ── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Come funziona RicercAI
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tre fasi per portare il tuo brand nelle risposte AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Analisi",
                desc: "Analizziamo come il tuo brand appare (o non appare) nelle risposte dei principali modelli AI. Mappiamo i competitor citati e identifichiamo i gap.",
              },
              {
                step: "02",
                title: "Strategia & Ottimizzazione",
                desc: "Costruiamo una strategia personalizzata: ottimizzazione contenuti, dati strutturati, digital PR, autorevolezza delle fonti. Tutto pensato per i modelli AI.",
              },
              {
                step: "03",
                title: "Monitoring & Crescita",
                desc: "Monitoriamo in tempo reale le menzioni AI del tuo brand, misuriamo i progressi e adattiamo la strategia per risultati continuativi.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl border border-border bg-white"
              >
                <span className="text-5xl font-bold text-gray-100">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIZI PREVIEW ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              I nostri servizi
            </h2>
            <p className="mt-4 text-lg text-muted">
              Soluzioni complete per la tua visibilità AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔍",
                title: "GEO Audit & Strategy",
                desc: "Analisi completa della tua presenza AI con roadmap strategica a 90 giorni.",
                href: "/servizi#audit",
              },
              {
                icon: "📊",
                title: "AI Monitoring",
                desc: "Dashboard per tracciare in tempo reale le citazioni del tuo brand sui modelli AI.",
                href: "/servizi#monitoring",
              },
              {
                icon: "✍️",
                title: "Content Optimization",
                desc: "Ottimizzazione dei contenuti per massimizzare la citabilità da parte dei LLM.",
                href: "/servizi#optimization",
              },
              {
                icon: "🤖",
                title: "Agent Readiness",
                desc: "Preparazione per gli AI agent che effettuano acquisti e prenotazioni autonomamente.",
                href: "/servizi#agent",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all bg-background"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 text-xl font-semibold group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/servizi"
              className="text-accent font-medium hover:underline"
            >
              Scopri tutti i servizi &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST / PERCHÉ NOI ── */}
      <section className="py-24 md:py-32 bg-foreground text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Perché scegliere RicercAI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Specialisti GEO",
                desc: "Non siamo un'agenzia generica. Il GEO è il nostro unico focus.",
              },
              {
                title: "Metodologia proprietaria",
                desc: "Framework testato e replicabile per risultati misurabili.",
              },
              {
                title: "Report trasparenti",
                desc: "Dashboard e report mensili con metriche concrete.",
              },
              {
                title: "Tutta Italia",
                desc: "Sede a Padova, ma lavoriamo con clienti in ogni regione.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-lg font-semibold text-teal-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
            Cosa dicono i nostri clienti
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Dopo 3 mesi di lavoro con RicercAI, il nostro brand viene citato da ChatGPT nel 70% delle query di settore. Un risultato incredibile.",
                name: "Marco R.",
                role: "CEO, SaaS Company — Milano",
              },
              {
                quote:
                  "Non sapevamo nemmeno che esistesse il GEO. Ora i nostri clienti ci dicono che ci hanno trovato tramite ChatGPT. Game changer.",
                name: "Laura B.",
                role: "Marketing Director — Roma",
              },
              {
                quote:
                  "Finalmente un'agenzia che capisce dove sta andando il mercato. Professionali, trasparenti e con risultati concreti.",
                name: "Andrea T.",
                role: "Founder, E-commerce — Padova",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-2xl border border-border bg-background"
              >
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Dal nostro blog
              </h2>
              <p className="mt-2 text-muted">
                Approfondimenti su GEO, AI e marketing digitale
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex text-accent font-medium hover:underline"
            >
              Tutti gli articoli &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all bg-white"
              >
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="mt-3 text-xl font-semibold group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="mt-3 text-muted text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-xs text-muted">
                  {post.readTime} di lettura
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/blog"
              className="text-accent font-medium hover:underline"
            >
              Tutti gli articoli &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
            Domande frequenti
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-border rounded-xl p-6 bg-background"
              >
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-muted group-open:rotate-180 transition-transform shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-muted leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section className="py-24 md:py-32 bg-foreground text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Pronto a farti trovare dall&apos;AI?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Richiedi un audit gratuito della tua presenza sui modelli AI.
            Scopri come il tuo brand appare su ChatGPT, Gemini e Claude.
          </p>
          <Link
            href="/contatti"
            className="mt-8 inline-flex items-center justify-center bg-accent text-white font-medium px-10 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg"
          >
            Richiedi Audit Gratuito
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Gratuito, senza impegno. Risultati in 48 ore.
          </p>
        </div>
      </section>
    </>
  );
}
