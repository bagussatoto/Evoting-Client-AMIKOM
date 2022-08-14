import { createRouter, createWebHistory } from 'vue-router'
import http from '../API/http.js'
import Home from '../views/Home.vue'
import Voting from '../views/Voting.vue'
import Login from '../views/Login.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/voting',
		name: 'voting',
		component: Voting
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	}
]
const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })

//Navigation Guard
router.beforeEach((to, next) => {
	http.get('auth', (data, response = true) => {
		//Auth token success
		//alert(JSON.stringify(data))
		if (response && to.name !== 'login') next()
		else router.push({ name: 'login' }) //Fail 
	})
})

export default router
