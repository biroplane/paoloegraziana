<script setup>
import { useMotion } from "@vueuse/motion";
const route = useRoute()
const form = reactive({
  name: "",
  count: 0,
  side: [],
  allergies: "",
  menu_baby: false,
  how_many: 0,
  email: '',
  couple_id: 1
})
const options = ref(["Paolo", "Graziana"])
const isLoading = ref(false)
const send = async () => {
  try {
    isLoading.value=true
    let data
    if(route.query.e){
      console.log("UPDATE!!!!!")
      data =await $fetch('/api/add', { method: "PATCH", body: form })
    }else{

       data = await $fetch('/api/add', { method: "POST", body: form })
    }
    console.log("Inviati correttamente", data)
  } catch (error) {
    console.log("Errore ", error)
  }finally{
    isLoading.value=false
  }
}
const name = ref()
const count = ref()
const sides = ref()
const allegies = ref()
const baby = ref()
const homany = ref()
const email = ref()
const submit = ref()
const reset = ref()
const refs = [
  name,
  count,
  sides,
  allegies,
  baby,
  homany,
  email,
  submit,
  reset,
]
onMounted(() => {
  refs.forEach((ref, index) => {
    useMotion(ref, {
      initial: {
        x: index % 2 == 0 ? -100 : 100,

        opacity: 0,
        offset: 100
      },
      visible: {
        x: 0,

        opacity: 1,

        transition: {
          type: "spring",
          stiffness: 350,
          damping: 20,
          delay: index * 50,
        },
      }
    })
  })
})
onMounted(async () => {
  console.log("Route", route.query)
  if (route.query.e) {
    try {
      console.log("Fetch email")
      const { guest } = await $fetch('/api/guest', { query: { e: route.query.e } })


        form.name= guest.name,
        form.count= guest.count,
        form.side= guest.side,
        form.allergies= guest.allegies,
        form.menu_baby= guest.menu_baby,
        form.how_many= guest.how_many,
        form.email= guest.email,
        form.couple_id= guest.couple_id

    } catch (error) {
      console.log("Errore ", error)
    }
  }
})
</script>
<template>
  <main class="grid h-full grid-rows-5 auto-rows-auto">
  <Loader v-if="isLoading"></Loader>
    <div class="px-4 py-3 bg-opacity-50 md:py-12 bg-primary-500 backdrop-blur-lg">
      <div class="container text-center">
        <h1 class="text-4xl md:text-6xl">Si, lo voglio!</h1>
        <p class="text-sm md:text-base">
          Grazie per aver confermato la tua presenza.<br> Al fine di rendere la festa perfetta
          per tutti, ti chiediamo qualche informazione in più 😉
        </p>
      </div>
    </div>
    <div class="h-full row-span-4 px-8 overflow-y-auto">
      <form @submit.prevent="send">
        <fieldset class="max-w-xl py-12 mx-auto" :disabled="isLoading">
          <InputWrapper title="Nome e Cognome" subtitle="A chi è indirizzato l'invito?" required ref="name">
            <InputText v-model="form.name" required />
          </InputWrapper>
          <InputWrapper title="In quanti siete?" subtitle="Compreso te, figli, cani, gatti e pesci rossi" required
            ref="count">
            <NumberList v-model="form.count" />
          </InputWrapper>
          <InputWrapper title="Da che lato?" subtitle="Sei amico dello sposo? della sposa? di entrambi? " ref="sides">
            <CheckBox v-for="option in options" :key="option" v-model="form.side" :label="option" :value="option" />
          </InputWrapper>
          <InputWrapper title="Intolleranze / Allergie?"
            subtitle="Vogliamo garantirti un pranzo coi fiocchi, aiutaci a renderlo speciale" ref="allegies">
            <InputText v-model="form.allergies" />
          </InputWrapper>
          <InputWrapper title="Menu Baby?" subtitle="Ci sono bambini con te?" ref="baby">
            <CheckBox v-model="form.menu_baby" label="Certo che si" />
          </InputWrapper>
          <InputWrapper title="Quanti?" v-if="form.menu_baby" ref="homany">
            <NumberList v-model="form.how_many" :max="5" />
          </InputWrapper>
          <div class="w-screen px-8 py-12 my-6 -ml-8 text-white shadow-xl md:ml-0 md:w-full bg-primary-500" ref="email">
            <h5 class="text-2xl font-bold text-primary-700">Inserisci la tua mail</h5>
            <p class="mb-6">Servirà per eventuali cambi</p>
            <InputText v-model="form.email" :disabled="route.query.e" />
          </div>
          <div class="flex gap-4">
            <button ref="submit"
              class="px-6 py-2 text-white transition-colors border rounded-sm shadow-md bg-primary-500 border-primary-600 hover:bg-primary-600">Conferma
              🎉</button>
            <NuxtLink to="/" ref="reset"
              class="px-6 py-2 text-white transition-colors border rounded-sm shadow-md bg-primary-50 bg-opacity-10 border-primary-600 hover:bg-primary-200">
              Fa nulla 🥲</NuxtLink>
          </div>
        </fieldset>
      </form>
    </div>

  </main>
</template>
