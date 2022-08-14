//Store event title
import { defineStore } from 'pinia'

export const useEventTitle = defineStore('eventTitle', {
	state: () => {
		return {
			eventTitle: "Electronic Vote System Universitas Amikom Yogyakarta"
		}
	},
	actions: {
		setEventTitle(payload) {
			this.eventTitle = payload
		}
	}
})
