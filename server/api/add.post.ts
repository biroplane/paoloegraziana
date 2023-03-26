import { useSupabase } from "~~/composables/useSupabase"

 export default defineEventHandler(async (event) => {
  let msg
  let page
  const body = await readBody(event)
  try {
    const supabase = useSupabase()


    const found = await supabase.from('guests').select('*').eq('email',body.email).eq("couple_id",body.couple_id)
    console.log("Found",found)
    if(!found.data?.length>0){

     page = await supabase.from('guests').insert(body)

    }

    console.log("Page",page)
    if(page?.error){
      // return page.error
      throw new Error(page.error.message)
    }
    msg='ok'
  } catch (error) {
    msg=error
    
  }
  return {msg,body,page}
})