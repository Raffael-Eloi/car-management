
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/pages/home/Home.vue';
import Login from '@/components/pages/login/Login.vue';
import User from '@/components/pages/user/User.vue';
import Customer from '@/components/pages/customer/Customer.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/usuarios',
    name: 'user',
    component: User
  },
  {
    path: '/clientes',
    name: 'customer',
    component: Customer
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;