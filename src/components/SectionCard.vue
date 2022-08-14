<template>
   <section class="show-animation z-10">
      <div :class="borderColor" class="section-card-wrapper">
         <slot name="card-content"></slot>
      </div>
   </section>
</template>

<style scoped>
   .section-card-wrapper {
      @apply text-center bg-gray-50 mb-4 px-5 py-4 lg:px-8 lg:py-7 rounded-lg shadow border-l-8;
   }
</style>

<script setup>
   
   //Define props
   const props = defineProps({
      borderColor: {
         type: String,
         default: 'border-green-500'
      }
   })
</script>
