//Store event title
import { defineStore } from 'pinia'

export const useEventTitle = defineStore('eventTitle', {
	state: () => {
		return {
			eventTitle: "Event title goes here"
		}
	},
	actions: {
		setEventTitle(payload) {
			this.eventTitle = payload
		}
	}
})
