import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

async function callClaude(prompt: string, apiKey: string): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(`Anthropic API error (${res.status}): ${error}`)
  }

  const data = await res.json()
  return data.content[0]?.text || ''
}

export async function POST(request: Request) {
  // Auth check
  const body = await request.json()
  const apiKey = body.api_key || request.headers.get('x-api-key')

  if (apiKey !== process.env.BLOG_API_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { client_id, topic_hint, target_queries, publish_immediately = false } = body

  if (!client_id) {
    return Response.json({ error: 'client_id is required' }, { status: 400 })
  }

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const anthropicKey = process.env.RICERCAI_ANTHROPIC_KEY
  if (!anthropicKey) {
    return Response.json({ error: 'RICERCAI_ANTHROPIC_KEY not configured in .env.local' }, { status: 500 })
  }

  try {
    // 1. Load client profile
    const { data: profile, error: profileError } = await supabaseAdmin
      .from('client_profiles')
      .select('*')
      .eq('id', client_id)
      .single()

    if (profileError || !profile) {
      return Response.json({ error: 'Client profile not found' }, { status: 404 })
    }

    // 2. Load existing posts (for dedup + internal linking)
    const { data: existingPosts } = await supabaseAdmin
      .from('blog_posts')
      .select('slug, title, category, date')
      .order('date', { ascending: false })

    const existingPostsList = (existingPosts || [])
      .map(p => `- "${p.title}" (/${p.slug}, ${p.category}, ${p.date})`)
      .join('\n')

    // 3. Build generation prompt
    const prompt = `Sei un esperto copywriter specializzato in GEO (Generative Engine Optimization) e SEO.
Devi generare un blog post per il seguente cliente:

=== PROFILO CLIENTE ===
Nome: ${profile.client_name}
Sito: ${profile.website_url}
Business: ${profile.business_description}
Target audience: ${profile.target_audience}
Tono di voce: ${profile.tone_of_voice}
Lingua: ${profile.language}
Keyword target: ${(profile.target_keywords || []).join(', ')}
Query AI target: ${(profile.target_ai_queries || []).join(', ')}
Categorie ammesse: ${(profile.content_categories || []).join(', ')}
Brand mentions: ${JSON.stringify(profile.brand_mentions)}
Competitor: ${(profile.competitors || []).join(', ')}

=== POST GIÀ PUBBLICATI ===
${existingPostsList || 'Nessun post pubblicato ancora.'}

=== TOPIC RICHIESTO ===
${topic_hint || "Scegli tu l'argomento migliore basandoti sulle keyword e query target non ancora coperte dai post esistenti. Evita di ripetere argomenti già trattati."}

=== QUERY AI DA OTTIMIZZARE ===
${target_queries && target_queries.length > 0
  ? `Il post DEVE essere ottimizzato per rispondere a queste query specifiche che gli utenti fanno ai modelli AI:\n${target_queries.map((q: string) => `- "${q}"`).join('\n')}\n\nAssicurati che il contenuto risponda direttamente a queste domande in modo che i LLM possano estrarre le risposte e citare il post.`
  : 'Nessuna query specifica fornita. Ottimizza per le query target del profilo cliente.'}

=== LINEE GUIDA GEO ===
Il post DEVE seguire queste regole per essere ottimizzato per i modelli AI:
1. Inizia con una definizione chiara e diretta dell'argomento nel primo paragrafo
2. Usa struttura a domanda-risposta dove possibile (i LLM adorano questo formato)
3. Includi dati, statistiche e numeri concreti (citando le fonti)
4. Scrivi paragrafi che funzionano come "snippet" autonomi (i LLM estraggono blocchi)
5. Aggiungi una sezione FAQ alla fine con 4-6 domande frequenti e risposte concise
6. Includi confronti e liste comparative (i LLM le citano spesso)
7. Usa linguaggio naturale conversazionale (come parlerebbe un esperto a un collega)
8. Menziona il brand del cliente 1-2 volte in modo naturale e contestuale
${profile.geo_guidelines || ''}

=== LINEE GUIDA SEO ===
${profile.seo_guidelines || ''}

=== INTERNAL LINKING ===
Dove pertinente, includi nel contenuto markdown link interni verso i post già pubblicati usando il formato [testo del link](/blog/slug-del-post). Usa solo gli slug elencati sopra.

=== FORMATO OUTPUT ===
Rispondi SOLO con un JSON valido (senza markdown code block, senza backtick) con questa struttura esatta:
{
  "slug": "url-friendly-slug-breve",
  "title": "Titolo del post (max 65 caratteri)",
  "excerpt": "Descrizione breve per preview e meta description (max 155 caratteri)",
  "content": "Contenuto completo in markdown. Usa ## per H2, ### per H3, **bold**, - per liste puntate. NON usare tabelle. Includi una sezione ## FAQ alla fine.",
  "category": "una delle categorie ammesse",
  "read_time": "X min",
  "image_search_query": "query per trovare un'immagine pertinente su Unsplash (in inglese)",
  "image_alt": "alt text descrittivo per l'immagine in italiano",
  "meta_title": "Title tag SEO (max 60 char)",
  "meta_description": "Meta description SEO (max 155 char)",
  "target_keywords": ["keyword1", "keyword2", "keyword3"],
  "target_ai_queries": ["query AI 1", "query AI 2"]
}`

    // 4. Call Claude via direct API
    const responseText = await callClaude(prompt, anthropicKey)

    // Parse JSON response (handle potential markdown code blocks)
    let postData
    try {
      const cleanJson = responseText
        .replace(/^```json\s*\n?/, '')
        .replace(/\n?```\s*$/, '')
        .trim()
      postData = JSON.parse(cleanJson)
    } catch {
      return Response.json({
        error: 'Failed to parse Claude response',
        raw_response: responseText.substring(0, 500),
      }, { status: 500 })
    }

    // 5. Fetch image from Unsplash
    let imageUrl = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop'
    if (process.env.UNSPLASH_ACCESS_KEY && process.env.UNSPLASH_ACCESS_KEY !== 'INSERISCI_QUI_LA_TUA_KEY') {
      try {
        const unsplashRes = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(postData.image_search_query)}&per_page=1&orientation=landscape`,
          { headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` } }
        )
        const unsplashData = await unsplashRes.json()
        if (unsplashData.results?.[0]?.urls?.regular) {
          imageUrl = unsplashData.results[0].urls.regular
        }
      } catch {
        // Use fallback image
      }
    }

    // 6. Check slug uniqueness
    const { data: existingSlug } = await supabaseAdmin
      .from('blog_posts')
      .select('slug')
      .eq('slug', postData.slug)
      .single()

    if (existingSlug) {
      postData.slug = `${postData.slug}-${Date.now().toString(36)}`
    }

    // 7. Insert into database
    const { data: newPost, error: insertError } = await supabaseAdmin
      .from('blog_posts')
      .insert({
        slug: postData.slug,
        title: postData.title,
        excerpt: postData.excerpt,
        content: postData.content,
        category: postData.category,
        read_time: postData.read_time,
        image: imageUrl,
        image_alt: postData.image_alt,
        status: publish_immediately ? 'published' : 'draft',
        meta_title: postData.meta_title,
        meta_description: postData.meta_description,
        target_keywords: postData.target_keywords,
        target_ai_queries: postData.target_ai_queries,
      })
      .select()
      .single()

    if (insertError) {
      return Response.json({ error: 'Failed to insert post', details: insertError.message }, { status: 500 })
    }

    // Revalidate blog pages if published immediately
    if (publish_immediately) {
      revalidatePath('/blog')
      revalidatePath('/')
      revalidatePath(`/blog/${newPost.slug}`)
    }

    return Response.json({
      success: true,
      post: newPost,
      preview_url: `${profile.website_url}/blog/${newPost.slug}`,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return Response.json({ error: 'Internal server error', details: message }, { status: 500 })
  }
}
