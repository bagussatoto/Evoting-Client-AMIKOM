<style scoped>
   .modal {
      @apply fixed inset-0 bg-gray-700 bg-opacity-50 z-50 grid place-items-center;
   }
   
   .modal-wrapper {
      @apply w-8/12 md:w-5/12 lg:w-3/12 text-center bg-gray-50 px-5 py-4 md:py-6 lg:py-8 rounded-lg shadow;
   }
   
   .modal-icon {
      @apply block bg-gray-100 mb-3 px-5 py-4 rounded-full text-3xl;
   }
</style>

<template>
   <section class="modal">
      <div class="show-animation modal-wrapper">
         <!-- state success modal -->
         <div v-if="successModal">
            <i class="modal-icon text-green-400 fa fa-check"></i>
            <strong class="text-sm">Sukses</strong>
            <p class="text-xs">Vote anda telah berhasil kami submit</p>
            <button @click="btnOk" class="btn bg-green-600 text-gray-50 ring-green-500 mt-4" type="button">Ok</button>
         </div>
         <!-- state alert modal -->
         <div v-if="!successModal">
            <i class="modal-icon text-red-400 fa fa-sign"></i>
            <strong class="text-sm">Error</strong>
            <p class="text-xs">{{ textAlert }}</p>
            <button @click="btnOk" class="btn bg-red-600 text-gray-50 ring-red-500 mt-4" type="button">Ok</button>
         </div>
      </div>
   </section>
</template>

<script setup>
   import { computed } from 'vue' 
   import { useRouter } from 'vue-router'
   import { useTextAlert } from '../stores/textAlert'
   //Instance router & textAlert
   const router = useRouter()
   const Alert = useTextAlert()
   
   //Get Alert from state
   const textAlert = computed(() => Alert.getTextAlert)
   
   //Define props
   const props = defineProps({
      successModal: {
         type: Boolean,
         default: true
      }
   })
   
   //Handler for Ok button
   const btnOk = () => {
      setTimeout(() => {
         router.push({ name: 'home' })
      }, 500)
   }
</script>
