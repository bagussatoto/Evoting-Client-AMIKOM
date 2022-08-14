import { defineStore } from 'pinia'

export const useCounter = defineStore('count', {
	state: () => {
		return {
			count: 0
		}
	}
})
