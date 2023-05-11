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


      text-decoration: line-through;



    }
    &:disabled {
      @apply text-neutral-100;
    }
  }

</style>
