import { supabase, supabaseAdmin } from './supabase'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  imageAlt: string
  content: string
  status: string
  targetKeywords?: string[]
  targetAiQueries?: string[]
  faqs?: { question: string; answer: string }[]
}

export async function getAllPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug, title, excerpt, date, read_time, category, image, image_alt, content, status, target_keywords, target_ai_queries, faqs')
    .eq('status', 'published')
    .order('date', { ascending: false })

  if (error) throw error

  return (data || []).map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    readTime: post.read_time,
    category: post.category,
    image: post.image,
    imageAlt: post.image_alt,
    content: post.content,
    status: post.status,
    targetKeywords: post.target_keywords,
    targetAiQueries: post.target_ai_queries,
    faqs: post.faqs,
  }))
}

export async function getPostBySlug(slug: string, includeDrafts = false): Promise<BlogPost | null> {
  // Use admin client to bypass RLS when including drafts
  const client = includeDrafts ? supabaseAdmin : supabase
  let query = client
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)

  if (!includeDrafts) {
    query = query.eq('status', 'published')
  }

  const { data, error } = await query.single()

  if (error || !data) return null

  return {
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    readTime: data.read_time,
    category: data.category,
    image: data.image,
    imageAlt: data.image_alt,
    content: data.content,
    status: data.status,
    targetKeywords: data.target_keywords,
    targetAiQueries: data.target_ai_queries,
    faqs: data.faqs,
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published')

  if (error) throw error
  return (data || []).map(p => p.slug)
}
