import { useSupabase } from "~~/composables/useSupabase"

 export default defineEventHandler(async (event) => {
  const supabase = useSupabase()
  const query = getQuery(event)
  let page
  try {
    console.log("Params",query)
    page = await supabase.from('guests').select().eq('email',query.e).limit(1).single()
  } catch (error) {
    createError("Errore "+JSON.stringify(error))
  }

  // return page.data
  return {guest:page?.data}
})