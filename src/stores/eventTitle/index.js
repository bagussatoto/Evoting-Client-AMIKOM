//Store event title
import { defineStore } from 'pinia'

export const useEventTitle = defineStore('eventTitle', {
	state: () => {
		return {
			eventTitle: "Electronic Vote System Pemuda RT 01"
		}
	},
	actions: {
		setEventTitle(payload) {
			this.eventTitle = payload
		}
	}
})
