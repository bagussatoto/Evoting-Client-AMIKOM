//For save text alert from CardVoting component`
import { defineStore } from 'pinia'

export const useTextAlert = defineStore('textAlert', {
   state: () => {
      return {
         textAlert: 'Mohon maaf telah terjadi kesalahan'
      }
   },
   actions: {
      inputText(msg) {
         this.textAlert = msg
      }
   },
   getters: {
      getTextAlert(state) {
         return state.textAlert
      }
   }
})