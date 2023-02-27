import AOS from "aos"
import "aos/dist/aos.css"
export default defineNuxtPlugin((nuxtApp)=>{
  nuxtApp.aos = new AOS.init({
    duration:600,
    easing:'ease-in-out-cubic',
    mirror:true,
    startEvent:"DOMContentLoaded"
  })
})