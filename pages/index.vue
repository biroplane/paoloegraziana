<template>
<main class="h-screen overflow-y-auto">
      <Particles></Particles>
    <Page class="flex-col gap-12 relative">

      <div class="relative flex flex-col justify-center items-center inclinato"  >
        <h2 class="font-heading text-7xl ml-8 -mb-4 z-[2]" data-aos="fade-right">Paolo</h2>
        <b class="absolute font-heading text-salvia-200 text-[12rem] ml-32 mt-12 drop-shadow-lg " data-aos="zoom-in" data-delay="500">&</b>
        <h2 class="font-heading text-7xl z-[2]" data-aos="fade-left">Graziana</h2>
      </div>
      <div class="absolute bottom-0 rotate-180 text-3xl">⌃</div>

    </Page>
    <Page class="flex-col">
      <div class="inclinato">
        <h2 class="text-5xl">2 Settembre</h2>
      </div>
      <div class="grid grid-cols-2 gap-4">
      <div class="col-span-full">Vuoi venire al nostro matrimonio?</div>
      <NuxtLink to="/yes" class="flex items-center justify-center aspect-square border-2 rounded-sm border-salvia-700 hover:bg-salvia-300">SI</NuxtLink>
      <NuxtLink to="/no" class="flex items-center justify-center aspect-square border-2 rounded-sm border-salvia-700 hover:bg-salvia-300">NO</NuxtLink>
      </div>
    </Page>
  </main>

</template>