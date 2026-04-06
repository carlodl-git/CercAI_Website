import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET() {
  const { data: posts, error: postsError } = await supabaseAdmin
    .from('blog_posts')
    .select('id, slug, title, excerpt, date, read_time, category, status, created_at')
    .order('date', { ascending: false })

  const { data: profiles, error: profilesError } = await supabaseAdmin
    .from('client_profiles')
    .select('id, client_name')

  if (postsError || profilesError) {
    return Response.json({ error: 'Failed to load data' }, { status: 500 })
  }

  return Response.json({ posts, profiles })
}

export async function PATCH(request: Request) {
  const { id, status } = await request.json()

  if (!id || !status || !['draft', 'published'].includes(status)) {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { error } = await supabaseAdmin
    .from('blog_posts')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)

  if (error) {
    return Response.json({ error: 'Failed to update post' }, { status: 500 })
  }

  return Response.json({ success: true })
}

export async function DELETE(request: Request) {
  const { id } = await request.json()

  if (!id) {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { error } = await supabaseAdmin
    .from('blog_posts')
    .delete()
    .eq('id', id)

  if (error) {
    return Response.json({ error: 'Failed to delete post' }, { status: 500 })
  }

  return Response.json({ success: true })
}
