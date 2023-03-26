<script setup>
const props = defineProps({
  modelValue: { type: [Array, Boolean] },

  value: { type: String },
  label: { type: String },
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>

  <div class="">
 <input type="checkbox" v-model="model" :value="value"  />
  {{ label }}
  </div>
</template>
<style lang="postcss" scoped>
input[type="checkbox"]{
  @apply appearance-none bg-transparent border-2 border-primary-100 shadow-lg p-2 rounded-sm inline-block relative;
  &:active,
  &:checked:active{
    @apply shadow-xl;
  }
  &:checked{
    @apply bg-primary-300 border border-primary-700 shadow-inner text-pink-500;
  }
  &:checked:after {
  @apply text-base absolute -top-1 left-0 text-pink-500;
	content: '\2714';
	
}
}

</style>