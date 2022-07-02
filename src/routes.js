
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/pages/home/Home.vue';
import Login from '@/components/pages/login/Login.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;