import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import DetailPage from '/src/views/DetailPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/detail-page/:id',
        name: 'DetailPage',
        component: DetailPage,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
