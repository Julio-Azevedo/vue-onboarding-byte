import {createRouter, createWebHistory} from 'vue-router'
import LoadingPage from "@/pages/LoadingPage.vue"
import MainPage from "@/pages/MyMainPage.vue"

const routes = [
    {
        path: '/',
        name: "splash",
        component: LoadingPage
    },
    {
        path: '/home',
        name: "home",
        component: MainPage 
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE),
    routes
})

export default router