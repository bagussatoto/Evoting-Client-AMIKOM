   <style scoped>
   .voting-wrapper {
      @apply mt-16 px-3 py-2 lg:mt-20 lg:w-8/12 lg:mx-auto;
   }
   
   .voting-wrapper strong {
      @apply text-sm;
   }
   
   .voting-wrapper p {
      @apply text-xs;
   }
</style>

<template>
   <section>
   	<Loader :load="isLoader" />
      <div class="voting-wrapper">
         <!-- Pages info -->
         <SectionCard borderColor="border-blue-500">
            <template v-slot:card-content>
               <strong>Halaman Voting</strong>
               <p>{{ store.eventTitle }}</p>
            </template>
         </SectionCard>
         <!-- End of Pages Info -->
         
         <!-- Voting Card Wrapper -->
         <div class="voting-card-wrapper">
            <template v-for="(candidate, index) in candidates" :key="index">
               <!-- Voting card -->
               <VotingCard :candidate="candidate" @statusOk="successModal = true" @statusFail="successModal = false" @process-done="showModal = !showModal" :cardNumber="candidate.candidate_number"></VotingCard>
            </template>
         </div>
      </div>
   </section>
   <!-- For Modal -->
   <Modal v-if="showModal" :successModal="successModal"></Modal>
</template>

<script setup>
   import { ref, reactive, onMounted } from 'vue'
   import { useEventTitle } from '../stores/eventTitle'
   import SectionCard from '../components/SectionCard.vue'
   import VotingCard from '../components/VotingCard.vue'
   import Modal from '../components/Modal.vue'
   import Loader from '../components/Loader.vue'
   import http from '../API/http.js'

   //Init store
   const store = useEventTitle()

   const isLoader = ref(true)
   
   //Handler for Modal
   const showModal = ref(false)
   const successModal = ref(null)

   //Save candidates
   const candidates = ref(null)
	
   //Get data from API
   onMounted(() => {
   	 http.get('candidates', data => {
   	   candidates.value = data.response.candidates
   	   setTimeout(() => {
   	   	isLoader.value = false
   	   }, 1000)
   	 })
   })
</script>
