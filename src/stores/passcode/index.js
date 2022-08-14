//Store passcode event for confirm voting
import { defineStore } from 'pinia'

export const usePasscode = defineStore('passcode', {
	state: () => {
		return {
			passcode: ''
		}
	},
	actions: {
		setPasscode(payload) {
			this.passcode = payload
		}
	}
})
