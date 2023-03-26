import { useSupabase } from "~~/composables/useSupabase"

 export default defineEventHandler(async (event) => {
  const supabase = useSupabase()
  const page = await supabase.from('guests').select()
  console.log("Page",page)
  return page.data
})