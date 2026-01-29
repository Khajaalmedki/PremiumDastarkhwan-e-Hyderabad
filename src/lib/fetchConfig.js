// lib/fetchConfig.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function fetchProjectConfig() {
  const projectID = process.env.NEXT_PUBLIC_LAB_PROJECT_ID

  const { data, error } = await supabase
    .schema('labs')
    .from('projects')
    .select('sad_config')
    .eq('id', projectID)
    .eq('status', 'published')
    .single()

  if (error) throw error
  return data.sad_config
}
