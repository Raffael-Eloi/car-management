
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/pages/home/Home.vue';
import Login from '@/components/pages/login/Login.vue';
import User from '@/components/pages/user/User.vue';

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
    path: '/user',
    name: 'user',
    component: User
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;