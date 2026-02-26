import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface UserProgress {
  id: string
  user_id: string
  problem_id: number
  problem_type: 'neetcode' | 'system-design' | 'flashcard'
  completed: boolean
  completed_at: string | null
  notes: string | null
}

export interface UserProfile {
  id: string
  github_id: string
  github_username: string
  display_name: string
  avatar_url: string
  created_at: string
  last_active: string
}
