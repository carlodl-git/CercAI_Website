import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ricercai.it"),
  title: {
    default: "RicercAI — Agenzia GEO Italia | Generative Engine Optimization",
    template: "%s | RicercAI",
  },
  description:
    "Prima agenzia GEO in Italia. Ottimizziamo la visibilità del tuo brand su ChatGPT, Gemini, Claude e Perplexity. Sede a Padova.",
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "agenzia GEO Italia",
    "agenzia GEO Padova",
    "ottimizzazione AI",
    "ChatGPT marketing",
    "visibilità AI",
    "SEO AI",
    "RicercAI",
  ],
  authors: [{ name: "RicercAI" }],
  creator: "RicercAI",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://ricercai.it",
    siteName: "RicercAI",
    title: "RicercAI — Agenzia GEO Italia | Generative Engine Optimization",
    description:
      "Portiamo il tuo brand nelle risposte di ChatGPT, Gemini, Claude e Perplexity. La prima agenzia GEO specializzata in Italia.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RicercAI — Agenzia GEO Italia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RicercAI — Agenzia GEO Italia",
    description:
      "Portiamo il tuo brand nelle risposte di ChatGPT, Gemini, Claude e Perplexity.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://ricercai.it",
  },
  verification: {
    google: "1s5UJmsrx2t9J11OHlqUO0KqEsjgOzSUAnuoJXd3tyE",
    // TODO: Register at https://www.bing.com/webmasters and replace placeholder
    other: {
      "msvalidate.01": "INSERIRE_CODICE_BING_QUI",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ricercai.it",
    name: "RicercAI",
    description:
      "Prima agenzia italiana specializzata in GEO (Generative Engine Optimization). Ottimizziamo la presenza dei brand nelle risposte dei modelli AI.",
    url: "https://ricercai.it",
    email: "info@ricercai.it",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Padova",
      addressRegion: "Veneto",
      addressCountry: "IT",
    },
    areaServed: {
      "@type": "Country",
      name: "Italia",
    },
    serviceType: [
      "Generative Engine Optimization",
      "GEO Audit",
      "AI Monitoring",
      "Content Optimization",
    ],
    knowsAbout: [
      "Generative Engine Optimization",
      "GEO",
      "AI Search Optimization",
      "ChatGPT Optimization",
      "LLM Optimization",
    ],
    sameAs: ["https://www.linkedin.com/company/ricercai"],
  };

  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
