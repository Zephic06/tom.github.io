import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/computer',
            component: () => import('../views/Computer.vue')
        },
        {
            path: '/binair-stelsel',
            component: () => import('../views/binair-stelsel.vue')
        },
        {
            path: '/kleur-modellen',
            component: () => import('../views/kleur-modellen.vue')
        },
        {
            path: '/beeld-en-geluid',
            component: () => import('../views/beeld-en-geluid.vue')
        },
    ]
})

export default router