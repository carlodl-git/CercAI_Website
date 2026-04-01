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
  metadataBase: new URL("https://cercai.it"),
  title: {
    default: "CercAI — Agenzia GEO Italia | Generative Engine Optimization",
    template: "%s | CercAI",
  },
  description:
    "CercAI è la prima agenzia italiana specializzata in GEO (Generative Engine Optimization). Portiamo il tuo brand nelle risposte di ChatGPT, Gemini, Claude e Perplexity. Sede a Padova, operativi in tutta Italia.",
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "agenzia GEO Italia",
    "agenzia GEO Padova",
    "ottimizzazione AI",
    "ChatGPT marketing",
    "visibilità AI",
    "SEO AI",
    "CercAI",
  ],
  authors: [{ name: "CercAI" }],
  creator: "CercAI",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://cercai.it",
    siteName: "CercAI",
    title: "CercAI — Agenzia GEO Italia | Generative Engine Optimization",
    description:
      "Portiamo il tuo brand nelle risposte di ChatGPT, Gemini, Claude e Perplexity. La prima agenzia GEO specializzata in Italia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CercAI — Agenzia GEO Italia",
    description:
      "Portiamo il tuo brand nelle risposte di ChatGPT, Gemini, Claude e Perplexity.",
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
    canonical: "https://cercai.it",
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
    "@id": "https://cercai.it",
    name: "CercAI",
    description:
      "Prima agenzia italiana specializzata in GEO (Generative Engine Optimization). Ottimizziamo la presenza dei brand nelle risposte dei modelli AI.",
    url: "https://cercai.it",
    telephone: "+390491234567",
    email: "info@cercai.it",
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
    sameAs: [],
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
