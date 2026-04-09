import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPublishedPosts, getPostBySlug, getAllSlugs } from "@/lib/blog-data";
import BrandName from "@/components/BrandName";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://ricercai.it/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["RicercAI"],
    },
  };
}

export default async function BlogPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === 'true';
  const post = await getPostBySlug(slug, isPreview);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "RicercAI",
      url: "https://ricercai.it",
    },
    publisher: {
      "@type": "Organization",
      name: "RicercAI",
      url: "https://ricercai.it",
      logo: {
        "@type": "ImageObject",
        url: "https://ricercai.it/opengraph-image",
      },
    },
  };

  const faqJsonLd = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const howToJsonLd =
    post.slug === "come-apparire-risposte-chatgpt"
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: post.title,
          description: post.excerpt,
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Crea contenuti con definizioni chiare",
              text: "Struttura i tuoi articoli con domande chiare come sottotitoli e risposte immediate nei paragrafi successivi. I modelli AI prediligono contenuti che forniscono definizioni esplicite e risposte dirette.",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Ottieni menzioni su fonti autorevoli",
              text: "Le citazioni su testate giornalistiche, portali di settore, Wikipedia e pubblicazioni accademiche aumentano la probabilita di essere menzionati dai LLM. Investi in digital PR mirate.",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Usa dati strutturati Schema.org",
              text: "Implementa markup Schema.org completo sul tuo sito: Organization, LocalBusiness, Product, FAQ, Review. Questi dati aiutano i modelli AI a comprendere chi sei e cosa fai.",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "Mantieni coerenza NAP cross-piattaforma",
              text: "Nome, Indirizzo e Telefono (NAP) devono essere identici su ogni piattaforma: Google Business Profile, sito web, directory, social.",
            },
            {
              "@type": "HowToStep",
              position: 5,
              name: "Genera recensioni e testimonianze verificabili",
              text: "Le recensioni su Google, Trustpilot e piattaforme di settore sono fonti che i modelli AI consultano per formulare raccomandazioni.",
            },
            {
              "@type": "HowToStep",
              position: 6,
              name: "Pubblica case study dettagliati",
              text: "I case study con dati concreti (numeri, percentuali, risultati misurabili) sono il tipo di contenuto che i modelli AI preferiscono citare perche forniscono prove verificabili.",
            },
            {
              "@type": "HowToStep",
              position: 7,
              name: "Monitora e adatta continuamente",
              text: "Utilizza strumenti di AI monitoring per verificare regolarmente come il tuo brand viene citato nelle risposte AI. Adatta la strategia in base ai risultati.",
            },
          ],
        }
      : null;

  const breadcrumbItems = [
    { name: "Home", url: "https://ricercai.it" },
    { name: "Blog", url: "https://ricercai.it/blog" },
    { name: post.title, url: `https://ricercai.it/blog/${post.slug}` },
  ];

  // Parse inline markdown: bold (**text**) and links ([text](url))
  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={j} className="text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      }
      const linkMatch = part.match(/^\[(.+?)\]\((.+?)\)$/);
      if (linkMatch) {
        const isExternal = linkMatch[2].startsWith("http");
        if (isExternal) {
          return (
            <a key={j} href={linkMatch[2]} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              {linkMatch[1]}
            </a>
          );
        }
        return (
          <Link key={j} href={linkMatch[2]} className="text-accent hover:underline">
            {linkMatch[1]}
          </Link>
        );
      }
      return part;
    });
  };

  // Simple markdown-like renderer for the content
  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n")
      .map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="text-2xl font-bold mt-12 mb-4 tracking-tight"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="text-xl font-semibold mt-8 mb-3">
              {trimmed.slice(4)}
            </h3>
          );
        }
        if (trimmed.startsWith("- **")) {
          const text = trimmed.slice(2);
          const boldMatch = text.match(/^\*\*(.+?)\*\*(.*)$/);
          if (boldMatch) {
            return (
              <li key={i} className="ml-6 text-muted leading-relaxed">
                <strong className="text-foreground">{boldMatch[1]}</strong>
                {renderInline(boldMatch[2])}
              </li>
            );
          }
        }
        if (trimmed.startsWith("- ")) {
          return (
            <li key={i} className="ml-6 text-muted leading-relaxed">
              {renderInline(trimmed.slice(2))}
            </li>
          );
        }
        if (trimmed.startsWith("|")) {
          return null; // Skip table rows for simplicity
        }

        // Regular paragraph
        return (
          <p key={i} className="text-muted leading-relaxed mb-4">
            {renderInline(trimmed)}
          </p>
        );
      })
      .filter(Boolean);
  };

  // Get related posts
  const allPosts = await getAllPublishedPosts();
  // Prefer same-category posts, then fill with others
  const sameCategory = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  const relatedPosts = [...sameCategory, ...otherPosts].slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Draft banner */}
      {isPreview && post.status === 'draft' && (
        <div className="bg-yellow-400 text-yellow-900 text-center py-2 text-sm font-semibold">
          BOZZA — Questo articolo non è ancora pubblicato
        </div>
      )}

      <article className="pb-16 md:pb-24 bg-white">
        {/* Hero image */}
        <div className="relative h-64 md:h-96 w-full overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <header className="mb-12">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted">
              <span><BrandName /></span>
              <span>&middot;</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("it-IT", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>&middot;</span>
              <span>{post.readTime} di lettura</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose-custom">{renderContent(post.content)}</div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-background border border-border text-center">
            <h3 className="text-xl font-bold">
              Vuoi ottimizzare la tua presenza AI?
            </h3>
            <p className="mt-2 text-muted">
              Richiedi un GEO Audit gratuito e scopri come il tuo brand appare
              su ChatGPT, Gemini e Claude.
            </p>
            <Link
              href="/contatti"
              className="mt-6 inline-flex items-center justify-center bg-accent text-white font-medium px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Richiedi Audit Gratuito
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              Articoli correlati
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group p-6 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all bg-white"
                >
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-base font-semibold group-hover:text-accent transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed line-clamp-2">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
