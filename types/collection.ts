import {Database} from './supabase'

export type PostType = Database['public']['Tables']['posts']['Row']