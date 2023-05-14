import {createRouter, createWebHistory} from 'vue-router'

import AboutComponent from '../views/AboutComponent'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router