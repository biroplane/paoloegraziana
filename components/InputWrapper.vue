<script setup>
defineProps({
  title:{
    type:String,
    default:""
  },
  subtitle:{
    type:String,
    default:''
  },
  required:{
    type:Boolean,
    default:false
  }
})
</script>
<template>
  <div class=" wrapper">
    <h3 :class="{required}">{{title}}</h3>
    <p>{{subtitle}}</p>
    <slot :required="required"></slot>
  </div>
</template>
<style lang="postcss" scoped>
.wrapper{
  @apply relative py-4 px-5  mb-12 border-l-4 border-primary-100;
  
}
h3{
  @apply text-xl md:text-3xl font-sans font-bold relative;
  
  &.required::after{
    content:"🞶";
    
    @apply  text-red-500 text-xl;
  }
}
p{
  @apply  mb-5
}
</style>