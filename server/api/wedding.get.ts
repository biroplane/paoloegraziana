import { useSupabase } from "~~/composables/useSupabase"

 export default defineEventHandler(async (event) => {
  const supabase = useSupabase()
  const {id} = getQuery(event)
  const page = await supabase.from('couples').select().eq('id',id)
  console.log("Page",page.data)
  return page.data![0]
})