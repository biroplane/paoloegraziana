<script setup>
defineProps({
  half:{
    type:Boolean,
    default:false
  }
})
</script>
<template>
  <article class="flex items-center justify-center " :class="[half ? 'h-[50vh]': 'h-screen']" v-bind="$attrs">
    <slot />
  </article>
</template>
