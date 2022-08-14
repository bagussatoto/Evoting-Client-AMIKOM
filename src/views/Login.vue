<style scoped>
   .login-wrapper {
      @apply px-5 md:px-8 py-2 mt-20 lg:w-5/12 lg:mx-auto;
   }
   
   .form {
      @apply mt-5;
   }
   
   .input-wrapper {
      @apply w-full mt-3;
   }
   
   .input-wrapper label {
      @apply text-sm font-semibold block mb-1;
   }
   
   .input-wrapper input::placeholder {
      font-size: .8rem;
   }
   
   .input-wrapper input {
      @apply text-sm bg-gray-50 p-3 rounded-lg border-2 border-gray-300;
   }
</style>

<template>
   <section class="show-animation login-wrapper">
      <p class="text-sm">
         Silahkan login dengan menggunakan akun anda yang telah terdaftar.
      </p>
      <!-- Form login -->
      <div class="form">
         <!-- username -->
         <div class="input-wrapper">
            <label for="username">Username</label>
            <input v-model="formLogin.username" class="w-full" type="text" name="username" id="username" placeholder="Masukkan username anda" />
         </div>
         <!-- passswod -->
         <div class="input-wrapper">
            <label for="password">Password</label>
            <div class="flex gap-2">
               <input v-model="formLogin.password" class="w-full" :type="showPassword ? 'text' : 'password'" name="password" id="password" placeholder="Masukkan passswod anda" />
               <!-- Show or hide passswod -->
               <button @click="showPassword = !showPassword" type="button" class="bg-gray-500 px-3 rounded-lg text-gray-50 focus:ring-2 ring-blue-100">
                  <i class="duration-300 fa" :class="showPassword ? 'fa-eye' : 'fa-eye-slash'"></i>
               </button>
            </div>
         </div>
         
         <!-- Alert -->
         <small v-if="isFail" class="duration-300 text-red-600">Username atau kata sandi salah</small>
         
         <!-- Button submit -->
         <button :disabled="!isValidForm" @click="btnLogin" type="submit" class="btn bg-blue-500 text-gray-50 mt-6">
            <!-- default state -->
            <span v-if="!isProcess && !isSuccess" class="text-sm">
               Login
               <i class="text-xs fas fa-sign-in-alt"></i>
            </span>
            
            <!-- Loading state -->
            <span v-if="isProcess && !isSuccess">
               <i class="spinner text-xs fa fa-spinner"></i>
            </span>
            
            <!-- Success state -->
            <span v-if="isSuccess && !isProcess">
               <i class="text-xs fa fa-check"></i>
            </span>
            
         </button>
         <p class="mt-4 text-xs">
            Salah password ? atau kendala teknis lainnya, silahkan hubungi
            <a href="" class="text-blue-600 text-xs">Pusat Bantuan</a>
         </p>
      </div>
   </section>
</template>

<script setup>
   import { ref, reactive, watch, onMounted } from 'vue'
   import { useRouter } from 'vue-router'
   import http from '../API/http.js'
   
   //Instance 
   const router = useRouter()
   
   //Validation form login
   const isValidForm = ref(false)
   const formLogin = reactive({
      username: '',
      password: ''
   })
   
   watch(formLogin, () => {
      if ( formLogin.username === '' || formLogin.password === '' ) isValidForm.value = false
      else isValidForm.value = true
   })
   
   //Handler for login progress
   const isProcess = ref(false)
   const isSuccess = ref(false)
   const isFail = ref(false)
   
   //Handler for submit form login
   const btnLogin = () => {
      //Handler for login API
      const afterLogin = (response, success) => {
			setTimeout(() => {
				//Process state
				[ isProcess.value, isSuccess.value ] = [ true, false ]
				          
				//Response success
        localStorage.setItem('$evote-token', response.response.token)
				if ( success ) {
				    //Save token to localStorage
			        
					setTimeout(() => {
					   
					   //Success state
					   [ isProcess.value, isSuccess.value ] = [ false, true ] 
					 
					   //Push to Home
					   setTimeout(() => {
					      router.push({ name: 'home' })
					   }, 500)
					}, 2000)
				} else {
					setTimeout(() => {
						 //Fail state
					   [ isProcess.value, isSuccess.value, isFail.value ] = [ false, false, true ]
					}, 2000)
				}         
      }, 100)
		}

		http.post('login', formLogin, afterLogin)
	}
   
   //Handler for Show and hide password
   const showPassword = ref(false)
   
</script>
