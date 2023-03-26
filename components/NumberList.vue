<script setup>
const props = defineProps({
  modelValue:{
    type:[Number,String],
    default:1
  },
  max:{
    type:Number,
    default:10
  }
})
const emits = defineEmits(['update:modelValue'])
const model = computed({
  get(){
    return props.modelValue
  },
  set(v){
    emits('update:modelValue',v)
  }
})
</script>
<template>
<ul class="flex flex-wrap justify-between gap-2 my-3">
  <li v-for="count in max" :key="count" class="flex items-center justify-center w-12 text-white shadow-md cursor-pointer aspect-square bg-primary-500 outline outline-primary-600 hover:bg-primary-600 transition-color" @click="$emit('update:modelValue',count)">
  <input type="radio" :value="count"  :checked="modelValue==count" class="hidden" />
  {{ count }}
  </li>
</ul>
</template>
<style lang="postcss" scoped>
li:has(input:checked){
  @apply bg-primary-700 outline outline-2 outline-primary-900;
}
</style>