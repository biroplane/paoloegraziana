<script setup>
const email = ref('')
const wedding = await $fetch('/api/wedding', { query: { id: '1' } })
console.log("Wedding Date ", wedding)
const weddingDate = new Intl.DateTimeFormat('it-IT', { day: "numeric", month: "long" }).format(new Date(wedding.wedding_date))
</script>
<template>
  <main class="h-screen overflow-y-auto">
    <Particles></Particles>
    <Page class="relative flex-col gap-12">

      <div class="relative flex flex-col items-center justify-center inclinato">
        <h2 class="font-heading text-7xl ml-8 -mb-4 z-[2]" v-motion :enter="{scale:1,opacity:1}" :initial="{scale:.2, opacity:0}" :delay="100">{{ wedding.groom }}</h2>
        <b class="absolute font-heading text-primary-200 text-[12rem] ml-32 mt-12 drop-shadow-lg "
        v-motion :enter="{scale:1,z:0,opacity:1}" :initial="{scale:.2,z:-100, opacity:0}" :delay="500">&</b>
        <h2 class="font-heading text-7xl z-[2]" v-motion :enter="{scale:1,opacity:1}" :initial="{scale:.2, opacity:0}" :delay="200">{{ wedding.bride }}</h2>
      </div>
      <!-- <div class="absolute bottom-0 text-3xl rotate-180">⌃</div> -->

    </Page>
    <Page class="flex-col">
      <div class="inclinato">
        <h2 class="text-5xl capitalize" v-motion-fade-visible>{{ weddingDate }}</h2>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-full">Vuoi venire al nostro matrimonio?</div>
        <NuxtLink to="/yes" v-motion :initial="{ y: -100, opacity: .3 }" :visible="{ y: 0, opacity: 1 }" :enter="{ y: 0, opacity: 1 }"
          class="flex items-center justify-center border-2 rounded-sm aspect-square border-primary-700 hover:bg-primary-300">
          SI</NuxtLink>
        <NuxtLink to="/no" v-motion :initial="{ y: 50, opacity: .3, transition: { duration: 2000 } }" :visible="{ y: 0, opacity: 1 }"
          :enter="{ x: 0, opacity: 1 }" :delay="200"
          class="flex items-center justify-center border-2 rounded-sm aspect-square border-primary-700 hover:bg-primary-300">
          NO</NuxtLink>
      </div>
    </Page>
    <Page center>
      <div class="grid w-full h-full md:grid-cols-2">
        <div class="relative w-full h-[50vh] p-4 overflow-hidden md:p-16 bg-primary-700">
          <div class="">
            <h2 class="text-5xl md:text-7xl">{{ wedding.groom }}</h2>
            <div class="absolute h-[120%] border-4 rounded-full border-primary-100 aspect-square bg-primary-500 -right-40 top-0 float-right"><img src="/img/groom.png" class="object-contain w-full h-full"></div>
            
          </div>
        </div>
        <div class="relative w-full h-[50vh] p-4 overflow-hidden md:p-16 bg-primary-200">
          <h2 class="text-5xl text-right md:text-7xl">{{ wedding.bride }}</h2>
          <div class="absolute h-[120%] border-4 rounded-full border-primary-100 aspect-square bg-primary-500 -left-40 top-0 float-right "><img src="/img/bride.png" class="object-contain w-full h-full"></div>
        </div>
      </div>
    </Page>
    <Page class="bg-primary-900 text-primary-50" half>

      <div class="flex flex-col gap-4 p-4">
        <h5 class="text-xl font-body" v-motion :initial="{ y: 100, opacity: .3, transition: { duration: 2000 } }"
          :visible="{ y: 0, opacity: 1 }" :enter="{ y: 0, opacity: 1 }" :delay="200">Hai bisogno di modificare la tua
          partecipazione?</h5>
        <div class="flex" v-motion-fade-visible>
          <InputText v-model="email" placeholder="tua@email.com" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class=" placeholder:text-white"></InputText>
          <button
            class="px-8 bg-primary-100 text-primary-900">Vai</button>
        </div>
      </div>


  </Page>
</main></template>