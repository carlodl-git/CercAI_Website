import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog GEO — Guide e Strategie di Generative Engine Optimization",
  description:
    "Approfondimenti su GEO, AI Search e marketing digitale. Guide pratiche per apparire nelle risposte di ChatGPT, Gemini e Claude.",
  alternates: { canonical: "https://ricercai.it/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-grid">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Blog <span className="text-gradient">GEO</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Guide, analisi e strategie per la Generative Engine Optimization.
              Tutto quello che devi sapere per portare il tuo brand nelle
              risposte AI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all bg-background overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold text-white uppercase tracking-wider bg-accent/90 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs text-muted">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-muted text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-accent font-medium">
                    Leggi l&apos;articolo
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
