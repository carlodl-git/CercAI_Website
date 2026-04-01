import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/lib/blog-data";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://cercai.it/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["CercAI"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "CercAI",
      url: "https://cercai.it",
    },
    publisher: {
      "@type": "Organization",
      name: "CercAI",
      url: "https://cercai.it",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cercai.it",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://cercai.it/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://cercai.it/blog/${post.slug}`,
      },
    ],
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
                {boldMatch[2]}
              </li>
            );
          }
        }
        if (trimmed.startsWith("- ")) {
          return (
            <li key={i} className="ml-6 text-muted leading-relaxed">
              {trimmed.slice(2)}
            </li>
          );
        }
        if (trimmed.startsWith("|")) {
          return null; // Skip table rows for simplicity
        }

        // Regular paragraph
        const parts = trimmed.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={i} className="text-muted leading-relaxed mb-4">
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={j} className="text-foreground">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      })
      .filter(Boolean);
  };

  // Get related posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-3">
          <nav className="text-sm text-muted">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.category}</span>
          </nav>
        </div>
      </div>

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
              <span>CercAI</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all bg-white"
                >
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-accent transition-colors leading-tight">
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
