import { createRouter, createWebHistory } from 'vue-router'
import Showcase from '@/views/Showcase.vue'
import ShowDetails from '@/views/ShowDetails.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Showcase },
		{ path: '/show/:id', component: ShowDetails },
	]
})
