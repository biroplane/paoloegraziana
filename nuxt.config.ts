// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', '~/assets/css/typography.css','~/assets/css/app.pcss'],
  plugins: [],
  modules:['@vueuse/motion/nuxt'],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig:{
    SUPABASE_URL:process.env.SUPABASE_URL,
    SUPABASE_API_KEY:process.env.SUPABASE_API_KEY
  },
  devServer:{
    host:"localhost"
  }
 
})
