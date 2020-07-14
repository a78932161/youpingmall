import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/category',
        name: 'category',
        component: () => import('views/category')
    },
    {
        path: '/market',
        name: 'market',
        component: () => import('views/market.vue')
    },



]

const router = new VueRouter({
    routes
})

export default router
