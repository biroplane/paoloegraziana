<template>
  <NuxtPage/>
</template>
<style lang="postcss">
html,body{
  @apply h-screen overflow-hidden !important;
  
}
body {
  @apply bg-primary-500 relative;
  &:before {
    content: "";
    @apply absolute w-full h-full -z-[1];
    background-image: url("/img/ok_ci_sposiamo.svg"), url("/img/paper.png");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: "screen";
    opacity: 0.5;
  }
  &:after {
    content: "";
    @apply absolute w-full h-full z-0 bg-primary-500;
  }
}
#__nuxt{
  @apply h-full;
}
main{
  scroll-behavior: smooth;
  scroll-snap-type: mandatory;
}
h1,h2,h3,h4{
  @apply font-heading text-primary-800 drop-shadow-lg;
}
.inclinato{
  transform: skew(0deg, -10deg);
}
</style>
