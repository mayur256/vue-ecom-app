import { createRouter, createWebHistory } from 'vue-router'

// pages
import Home from '@/pages/Home.vue';
import Product from '@/pages/Product.vue';
import Checkout from '@/pages/Checkout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/product',
          name: 'product',
          component: Product
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout
        }
    ]
})

export default router
