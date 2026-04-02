import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Motori di ricerca tradizionali
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },

      // OpenAI - ChatGPT
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },

      // Anthropic - Claude
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },

      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },

      // Google AI (Gemini, AI Overviews)
      { userAgent: "Google-Extended", allow: "/" },

      // Meta AI
      { userAgent: "FacebookBot", allow: "/" },

      // Apple AI (Siri, Apple Intelligence)
      { userAgent: "Applebot", allow: "/" },

      // Regola generale
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://ricercai.it/sitemap.xml",
  };
}
