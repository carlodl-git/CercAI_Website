"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read_time: string;
  category: string;
  status: string;
  created_at: string;
}

interface ClientProfile {
  id: string;
  client_name: string;
}

export default function AdminBlogPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [profiles, setProfiles] = useState<ClientProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [topicHint, setTopicHint] = useState("");
  const [targetQueries, setTargetQueries] = useState("");
  const [postCount, setPostCount] = useState(1);
  const [publishImmediately, setPublishImmediately] = useState(false);
  const [message, setMessage] = useState("");
  const [generationLog, setGenerationLog] = useState<string[]>([]);

  const loadData = useCallback(async () => {
    setLoading(true);
    // Use service role via API to get all posts (including drafts)
    const res = await fetch("/api/admin/posts");
    if (res.ok) {
      const data = await res.json();
      setPosts(data.posts || []);
      setProfiles(data.profiles || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authenticated) loadData();
  }, [authenticated, loadData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check — not production-grade security
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === "ricercai2026") {
      setAuthenticated(true);
    } else {
      setMessage("Password errata");
    }
  };

  const toggleStatus = async (postId: string, currentStatus: string) => {
    const newStatus = currentStatus === "published" ? "draft" : "published";
    const res = await fetch("/api/admin/posts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: postId, status: newStatus }),
    });
    if (res.ok) {
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, status: newStatus } : p))
      );
      setMessage(`Post ${newStatus === "published" ? "pubblicato" : "messo in bozza"}`);
    }
  };

  const deletePost = async (postId: string, postTitle: string) => {
    if (!confirm(`Sei sicuro di voler eliminare "${postTitle}"? Questa azione è irreversibile.`)) {
      return;
    }
    const res = await fetch("/api/admin/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: postId }),
    });
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.id !== postId));
      setMessage(`Post "${postTitle}" eliminato`);
    } else {
      setMessage("Errore durante l'eliminazione");
    }
  };

  const generatePost = async () => {
    if (profiles.length === 0) {
      setMessage("Nessun profilo cliente trovato");
      return;
    }
    setGenerating(true);
    setGenerationLog([]);

    const total = postCount;
    const queries = targetQueries
      .split("\n")
      .map((q) => q.trim())
      .filter(Boolean);

    for (let i = 0; i < total; i++) {
      const current = i + 1;
      setMessage(`Generazione post ${current}/${total}... (può richiedere 30-60 secondi)`);

      try {
        const res = await fetch("/api/generate-blog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            client_id: profiles[0].id,
            topic_hint: topicHint || undefined,
            target_queries: queries.length > 0 ? queries : undefined,
            publish_immediately: publishImmediately,
            api_key: "ricercai-blog-gen-2026-secret",
          }),
        });

        const data = await res.json();
        if (data.success) {
          setGenerationLog((prev) => [
            ...prev,
            `✅ ${current}/${total}: "${data.post.title}"`,
          ]);
        } else {
          setGenerationLog((prev) => [
            ...prev,
            `❌ ${current}/${total}: ${data.error}`,
          ]);
        }
      } catch {
        setGenerationLog((prev) => [
          ...prev,
          `❌ ${current}/${total}: Errore di rete`,
        ]);
      }
    }

    setMessage(`Generazione completata: ${total} post`);
    setTopicHint("");
    setTargetQueries("");
    setGenerating(false);
    loadData();
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
          <h1 className="text-2xl font-bold mb-6">Admin Blog</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Accedi
          </button>
          {message && <p className="mt-3 text-red-500 text-sm">{message}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Blog — RicercAI</h1>

        {/* Generate section */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Genera nuovo post</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Argomento (opzionale)
              </label>
              <input
                type="text"
                value={topicHint}
                onChange={(e) => setTopicHint(e.target.value)}
                placeholder="Es: GEO per ristoranti, come misurare la visibilità AI..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Query AI da ottimizzare (una per riga, opzionale)
              </label>
              <textarea
                value={targetQueries}
                onChange={(e) => setTargetQueries(e.target.value)}
                placeholder={"Es:\ncome apparire su Perplexity\nGEO per e-commerce\nquanto costa ottimizzazione AI"}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              />
              <p className="mt-1 text-xs text-gray-400">
                Queste query verranno passate a Claude come target di ottimizzazione per il post
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Numero di post
                </label>
                <select
                  value={postCount}
                  onChange={(e) => setPostCount(Number(e.target.value))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} post
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 pt-5">
                <input
                  type="checkbox"
                  id="publishImmediately"
                  checked={publishImmediately}
                  onChange={(e) => setPublishImmediately(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="publishImmediately" className="text-sm text-gray-700">
                  Pubblica immediatamente
                </label>
              </div>
            </div>
            <button
              onClick={generatePost}
              disabled={generating}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {generating
                ? `Generazione in corso...`
                : `Genera ${postCount > 1 ? postCount + " Post" : "Post"} con AI`}
            </button>
          </div>
          {message && (
            <p className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded">{message}</p>
          )}
          {generationLog.length > 0 && (
            <div className="mt-3 bg-gray-50 p-3 rounded space-y-1">
              {generationLog.map((log, i) => (
                <p key={i} className="text-sm text-gray-700">{log}</p>
              ))}
            </div>
          )}
        </div>

        {/* Posts list */}
        <div className="bg-white rounded-xl shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">
              Tutti i post ({posts.length})
            </h2>
          </div>
          {loading ? (
            <div className="p-6 text-center text-gray-500">Caricamento...</div>
          ) : (
            <div className="divide-y divide-gray-200">
              {posts.map((post) => (
                <div key={post.id} className="p-6 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                          post.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {post.status === "published" ? "Pubblicato" : "Bozza"}
                      </span>
                      <span className="text-xs text-gray-500">{post.category}</span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="font-medium text-gray-900 truncate">{post.title}</h3>
                    <p className="text-sm text-gray-500 truncate">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-3 ml-4 shrink-0">
                    <a
                      href={`/blog/${post.slug}${post.status === 'draft' ? '?preview=true' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Anteprima
                    </a>
                    <button
                      onClick={() => toggleStatus(post.id, post.status)}
                      className={`text-sm px-3 py-1 rounded-lg font-medium transition-colors ${
                        post.status === "published"
                          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                          : "bg-green-100 text-green-800 hover:bg-green-200"
                      }`}
                    >
                      {post.status === "published" ? "Metti in bozza" : "Pubblica"}
                    </button>
                    <button
                      onClick={() => deletePost(post.id, post.title)}
                      className="text-sm px-3 py-1 rounded-lg font-medium bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
                    >
                      Elimina
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
