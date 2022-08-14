<style scoped>
	.spinner {
		animation: spinner .5s inifinite;
	}

	@keyframes spinner {
		from {
			transform: rotate(0deg)
		} to {
			transform: rotate(360deg)
		}
	}
</style>

<!-- 
<template>

	<main v-if="load" class="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 grid place-items-center">
		<div class="w-5/12 flex flex-col items-center text-center gap-3">
			<i class="fa fa-spinner spinner text-gray-50 text-3xl"></i>
			<small class="text-xs font-medium text-gray-100">Please wait, fetching data from server </small>
		</div>
	</main>

</template> 
-->

<script setup>

	const props = defineProps({
		load: {
			type: Boolean,
			default: true
		}
	})
	
</script>
