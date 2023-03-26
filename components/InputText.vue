<script setup>
import { computed } from "vue";
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: [String, Number],
    default: "",
  },
  required:{
    type:Boolean,
    default:false
  }

});
const emit = defineEmits(["update:modelValue"]);

const newVal = computed({
  get: () => props.modelValue,
  set: (v) => {
    emit("update:modelValue", v);
  },
});

const counter = computed(() => newVal.value.length);
</script>
<template>

      <input
        v-bind="$attrs"
        class="w-full"
        v-model="newVal"
        :type="$attrs.type || 'text'"
        :required="required"
      />
     

</template>
<style scoped lang="postcss">

input {
  @apply text-base relative bg-primary-100 bg-opacity-20 p-2;
  &::after {
    content: "";
    @apply absolute border-b w-full;
  }
}


  input,form {

    &:invalid,
    &:invalid:focus,
    &:invalid:not(:required):focus {
      outline: 1px solid theme('colors.red.700');
      box-shadow: 0 0 8px 0 rgba(255, 39, 68, 0.5);
      text-decoration: line-through;


      @apply bg-red-200;
    }
    &:disabled {
      @apply text-neutral-100;
    }
  }

</style>
