import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'

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
    {
        path: '/promotion',
        name: 'promotion',
        component: () => import('views/promotion/index')
    },
    {
        path: '/revenue',
        name: 'revenue',
        component: () => import('views/promotion/revenue')
    },
    {
        path: '/revenueInfo',
        name: 'revenueInfo',
        component: () => import('views/promotion/revenueInfo')
    },
    {
        path: '/withdraw',
        name: 'withdraw',
        component: () => import('views/promotion/withdraw'),
    },
    {
        path: '/withdrawAmount',
        name: 'withdrawAmount',
        component: () => import('views/promotion/withdrawAmount'),
    },
    {
        path: '/withdrawInfo',
        name: 'withdrawInfo',
        component: () => import('views/promotion/withdrawInfo'),
    },
    {
        path: '/withdrawRecord',
        name: 'withdrawRecord',
        component: () => import('views/promotion/withdrawRecord'),
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('views/promotion/user'),
    },
    {
        path: '/people',
        name: 'people',
        component: () => import('views/promotion/people'),
    },
    {
        path: '/entry',
        name: 'entry',
        redirect: '/entry/form',
        component: () => import('views/entry/index'),
        children: [
            {
                path: 'form',
                name: 'form',
                component: () => import('views/entry/form'),
            },
            {
                path: 'info',
                name: 'info',
                component: () => import('views/entry/info'),
            },
        ],
    },


]

const router = new VueRouter({
    routes
})

export default router
