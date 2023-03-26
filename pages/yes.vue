<script setup>
import { useMotion } from "@vueuse/motion";
const form = reactive({
  name: "Gaetano Vallarelli",
  count: 3,
  side: ["Paolo"],
  allergies: "",
  menu_baby: true,
  how_many: 1,
  email:'g.vallarelli@gmail.com',
  couple_id:1
})
const options = ref(["Paolo", "Graziana"])
const isLoading = ref(false)
const send = async () => {
  try {
    const data = await $fetch('/api/add', { method: "POST", body: form })
    console.log("Inviati correttamente", data)
  } catch (error) {
    console.log("Errore ", error)
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
        offset:100
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
</script>
<template>
  <main class="grid h-full grid-rows-5 auto-rows-auto">
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
        <div class="max-w-xl py-12 mx-auto">
          <InputWrapper title="Nome e Cognome" subtitle="A chi è indirizzato l'invito?" required ref="name">
            <InputText v-model="form.name" required />
          </InputWrapper>
          <InputWrapper title="In quanti siete?" subtitle="Compreso te, figli, cani, gatti e pesci rossi" required ref="count">
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
            <InputText v-model="form.email" />
          </div>
          <div class="flex gap-4">
            <button ref="submit"
              class="px-6 py-2 text-white transition-colors border rounded-sm shadow-md bg-primary-500 border-primary-600 hover:bg-primary-600">Conferma 🎉</button>
            <NuxtLink to="/" ref="reset"
              class="px-6 py-2 text-white transition-colors border rounded-sm shadow-md bg-primary-50 bg-opacity-10 border-primary-600 hover:bg-primary-200">
              Fa nulla 🥲</NuxtLink>
          </div>
        </div>
      </form>
    </div>
   
  </main>
</template>
