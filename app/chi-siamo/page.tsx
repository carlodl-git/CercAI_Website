import type { Metadata } from "next";
import Link from "next/link";
import BrandName from "@/components/BrandName";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Chi Siamo — La Prima Agenzia GEO in Italia",
  description:
    "RicercAI: prima agenzia italiana specializzata in Generative Engine Optimization. Sede a Padova, operativi in tutta Italia.",
  alternates: { canonical: "https://ricercai.it/chi-siamo" },
};

export default function ChiSiamoPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", url: "https://ricercai.it" },
        { name: "Chi Siamo", url: "https://ricercai.it/chi-siamo" },
      ]} />
      {/* Hero */}
      <section className="py-24 md:py-32 bg-grid">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Chi <span className="text-gradient">Siamo</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              <BrandName />{" "}nasce con una missione chiara: aiutare le aziende italiane
              a essere visibili dove i loro clienti stanno iniziando a cercare
              — nelle risposte dell&apos;intelligenza artificiale.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                La nostra missione
              </h2>
              <p className="mt-6 text-muted leading-relaxed">
                Il modo in cui le persone cercano informazioni sta cambiando
                radicalmente. ChatGPT, Gemini, Claude e Perplexity non sono
                più strumenti di nicchia: sono il nuovo modo di cercare
                risposte, confrontare prodotti e prendere decisioni.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Eppure, quasi nessuna azienda in Italia sta ottimizzando la
                propria presenza per questi nuovi canali. <BrandName />{" "}esiste per
                colmare questo gap: siamo la prima agenzia italiana
                specializzata esclusivamente in{" "}
                <strong className="text-foreground">
                  Generative Engine Optimization (GEO)
                </strong>
                .
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Non facciamo SEO, non facciamo social media marketing, non
                facciamo pubblicità. Facciamo una cosa sola e la facciamo
                meglio di chiunque altro: portiamo il tuo brand nelle risposte
                dell&apos;AI.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: "Fondata nel",
                  value: "2025",
                  desc: "Tra le prime agenzie GEO al mondo",
                },
                {
                  label: "Sede",
                  value: "Padova, Veneto",
                  desc: "Operativi in tutta Italia",
                },
                {
                  label: "Focus",
                  value: "100% GEO",
                  desc: "Unica specializzazione, massima competenza",
                },
                {
                  label: "Modelli AI coperti",
                  value: "5+",
                  desc: "ChatGPT, Gemini, Claude, Perplexity, Copilot",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-xl border border-border bg-background"
                >
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gradient">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            I nostri valori
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Trasparenza totale",
                desc: "Metriche chiare, report dettagliati, nessuna promessa irrealistica. Sai sempre esattamente cosa stiamo facendo e quali risultati stiamo ottenendo.",
              },
              {
                title: "Specializzazione verticale",
                desc: "Non cerchiamo di fare tutto. Il GEO è la nostra unica competenza e la nostra unica offerta. Questo ci rende i migliori in quello che facciamo.",
              },
              {
                title: "Risultati misurabili",
                desc: "Ogni azione che intraprendiamo è legata a una metrica concreta. AI Mention Share, Citation Quality Score — numeri, non opinioni.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl border border-border bg-white"
              >
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perché Padova */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Perché Padova
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Padova è una città con una tradizione secolare di innovazione e
            ricerca — dall&apos;Università fondata nel 1222 al fiorente
            ecosistema tech del Veneto. È il luogo ideale per un&apos;agenzia
            che guarda al futuro della ricerca online. La nostra sede è qui,
            ma il nostro lavoro non conosce confini: serviamo clienti in tutta
            Italia con la stessa dedizione e qualità.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-foreground text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Parliamo del tuo brand
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Scopri come <BrandName />{" "}può portare la tua azienda nelle risposte AI.
          </p>
          <Link
            href="/contatti"
            className="mt-8 inline-flex items-center justify-center bg-accent text-white font-medium px-10 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
