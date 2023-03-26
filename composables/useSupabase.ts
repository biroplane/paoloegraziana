import { createClient } from "@supabase/supabase-js"
const config =useRuntimeConfig()

export const useSupabase = ()=>{
  const supabase = createClient(config.SUPABASE_URL,config.SUPABASE_API_KEY)
  return supabase
}