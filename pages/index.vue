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
        <h2 class="font-heading text-7xl ml-8 -mb-4 z-[2]" v-motion :enter="{ scale: 1, opacity: 1 }"
          :initial="{ scale: .2, opacity: 0 }" :delay="100">{{ wedding.groom }}</h2>
        <b class="absolute font-heading text-primary-200 text-[12rem] ml-32 mt-12 drop-shadow-lg " v-motion
          :enter="{ scale: 1, z: 0, opacity: 1 }" :initial="{ scale: .2, z: -100, opacity: 0 }" :delay="500">&</b>
        <h2 class="font-heading text-7xl z-[2]" v-motion :enter="{ scale: 1, opacity: 1 }"
          :initial="{ scale: .2, opacity: 0 }" :delay="200">{{ wedding.bride }}</h2>
      </div>
      <!-- <div class="absolute bottom-0 text-3xl rotate-180">⌃</div> -->

    </Page>
    <Page>
      <div class="flex w-full container h-2/3 flex-col lg:flex-row">
        <div class="lg:w-2/3 bg-primary-700 p-12 flex flex-col justify-center  ">
          <div class="inclinato -mt-12">
            <h2 class="text-7xl text-primary-100 capitalize stroke-primary-500" v-motion-fade-visible>{{ weddingDate }}</h2>
          </div>
          <div class="text-white">
            <p class="mt-12" v-motion-fade-visible>Finalmente ce l'abbiamo fatta! 🎉</p>
            <p class="my-4" v-motion-fade-visible>Siamo lietissimi di annunciare il nostro matrimonio.</p>
            <p class="mb-12" v-motion-fade-visible>Per rendelo speciale, manchi solo tu. Vuoi venire al nostro mastrimonio?</p>
          </div>

          <div class="flex w-full mt-6 gap-8">
            <NuxtLink to="/yes" v-motion :initial="{ y: -100, opacity: .3 }" :visible="{ y: 0, opacity: 1 }"
              :enter="{ y: 0, opacity: 1 }"
              class="w-48 text-center text-white py-3 border border-primary-500 text-primary-900 bg-primary-50 bg-opacity-20 hover:bg-primary-500 transition-colors"
              >
              SI 🎉</NuxtLink>
            <NuxtLink to="/no" v-motion :initial="{ y: 50, opacity: .3, transition: { duration: 2000 } }"
              :visible="{ y: 0, opacity: 1 }" :enter="{ x: 0, opacity: 1 }" :delay="200"
              class="w-48 text-center py-3 text-white  text-primary-900 bg-primary-600 bg-opacity-20 hover:bg-primary-600 transition-colors"
              >
              NO 😔</NuxtLink>
          </div>
        </div>
        <div class="lg:w-1/3">
          <img src="/img/couple.jpeg" class="object-cover w-full h-full">
        </div>
      </div>
     
    </Page>
    
    <Page>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3004.7734603195822!2d16.4844934642779!3d41.139471111383635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1683784467341!5m2!1sit!2sit"
        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Page>
    <Page class="bg-primary-900 text-primary-50" half>

      <div class="flex flex-col gap-4 p-4">
        <h5 class="text-xl font-body" v-motion :initial="{ y: 100, opacity: .3, transition: { duration: 2000 } }"
          :visible="{ y: 0, opacity: 1 }" :enter="{ y: 0, opacity: 1 }" :delay="200">Hai bisogno di modificare la tua
          partecipazione?</h5>
        <div class="flex" v-motion-fade-visible>
          <InputText v-model="email" placeholder="tua@email.com" type="email"
            pattern="([A-Za-z0-9][._]?)+[A-Za-z0-9]@[A-Za-z0-9]+(\.?[A-Za-z0-9]){2}(\.[A-Za-z0-9]{2,4})?"
            class=" placeholder:text-white"></InputText>
          <NuxtLink :to="`yes?e=${email}`" class="px-8 bg-primary-100 text-primary-900 flex items-center justify-center">Vai</NuxtLink>
        </div>
      </div>
    </Page>

  </main>
</template>