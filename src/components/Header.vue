<template>
   <header class="header">
      <div class="header-wrapper">
	      <div class="header-brand">
	         <span>
	            <img src="/logo1.png" width="55" />
	         </span>
	         <span>
	            <h1 class="text-gray-50 font-semibold">EVOTING PEMUDA RT01</h1>
	         </span>
         </div>
      </div>
   </header>
</template>

<style scoped>
   .header {
      @apply fixed left-0 right-0 top-0 z-40;   
   }
   
   .header-wrapper {
      @apply w-full px-5 md:px-8 py-2 flex items-center gap-2;
      background: var(--secondary);
   }

   .header-brand {
   	@apply flex items-center lg:justify-center gap-2 lg:w-3/12 lg:mx-auto;
   }
</style>
