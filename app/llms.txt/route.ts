import { NextResponse } from "next/server";
import { getAllPublishedPosts } from "@/lib/blog-data";

export async function GET() {
  const baseUrl = "https://ricercai.it";

  const posts = await getAllPublishedPosts();

  // Genera la sezione articoli dinamicamente da Supabase
  const articlesList = posts
    .map(
      (post) =>
        `- [${post.title}](${baseUrl}/blog/${post.slug}): ${post.excerpt.slice(0, 120)}...`
    )
    .join("\n");

  const content = `# RicercAI - Agenzia GEO Italia

> RicercAI è la prima agenzia italiana specializzata esclusivamente in Generative Engine Optimization (GEO). Aiutiamo aziende e professionisti a essere visibili nelle risposte di ChatGPT, Google Gemini, Claude, Perplexity e Microsoft Copilot.

## Informazioni Azienda

- Nome: RicercAI
- Sito web: ${baseUrl}
- Sede: Padova, Veneto, Italia
- Area operativa: Tutta Italia
- Fondazione: 2025
- Settore: Generative Engine Optimization (GEO), AI Search Marketing
- Email: info@ricercai.it
- Telefono: +39 049 123 4567

## Cosa Facciamo

RicercAI ottimizza la presenza dei brand nelle risposte generate dai Large Language Model (LLM). A differenza della SEO tradizionale che si concentra sui risultati di ricerca classici, la GEO si focalizza su come i modelli AI citano, raccomandano e descrivono un'azienda quando gli utenti fanno domande.

## Servizi Principali

### GEO Audit & Strategy
Analisi completa della visibilità AI del brand su ChatGPT, Gemini, Claude e Perplexity. Include report dettagliato, analisi competitiva, gap analysis e roadmap a 90 giorni con priorità d'intervento.

### AI Monitoring
Dashboard proprietaria per monitorare continuamente le citazioni del brand nelle risposte AI. Include AI Mention Share, Citation Quality Score, benchmark competitivo e alert automatici con report mensile.

### Content Optimization
Ottimizzazione completa dei contenuti per massimizzare le citazioni AI. Include audit contenuti esistenti, implementazione Schema.org avanzato, strategia digital PR, ottimizzazione directory e creazione contenuti GEO-optimized.

### Agent Readiness
Preparazione per gli AI agent autonomi (come Operator di OpenAI). Include audit machine-readability, ottimizzazione per agent, trust signals, structured data per transazioni e test di compatibilità.

## Competenze Specifiche

- Generative Engine Optimization (GEO)
- AI Search Optimization
- ChatGPT Optimization
- LLM Optimization
- Schema.org e Structured Data
- Digital PR per AI
- AI Visibility Monitoring
- Content Strategy per citabilità AI

## Pacchetti

- Starter (497 euro/mese): Per professionisti e studi. Setup tecnico + 5 pagine/mese + monitoraggio mensile.
- Growth (997 euro/mese): Per PMI. 15 pagine/mese + 4 piattaforme AI + report bisettimanale.
- Premium (1.997 euro/mese): Per aziende ambiziose. Copertura completa su 6+ piattaforme AI + call strategica mensile.

## Risorse e Articoli

${articlesList}

## Dati di Mercato Chiave

- Il 40% degli under-35 usa l'AI per decisioni d'acquisto
- L'85% si fida delle raccomandazioni AI
- ChatGPT ha oltre 300 milioni di utenti attivi settimanali
- Solo 2-3 aziende vengono citate per ogni risposta AI
- Il tasso di conversione da AI è 4,4x superiore rispetto alla ricerca organica tradizionale

## Contatti

Per richiedere un audit GEO gratuito della tua presenza AI:
- Web: ${baseUrl}/contatti
- Email: info@ricercai.it
- Telefono: +39 049 123 4567
- Risposta garantita entro 24 ore lavorative
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
