
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/pages/home/Home.vue';
import Login from '@/components/pages/login/Login.vue';
import User from '@/components/pages/user/User.vue';
import Customer from '@/components/pages/customer/Customer.vue';
import Owner from '@/components/pages/owner/Owner.vue';
import Vehicle from '@/components/pages/vehicle/Vehicle.vue';
import Gearbox from '@/components/pages/gearbox/Gearbox.vue';

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
  {
    path: '/proprietarios',
    name: 'owner',
    component: Owner
  },
  {
    path: '/veiculos',
    name: 'vehicle',
    component: Vehicle
  },
  {
    path: '/caixa-de-marchas',
    name: 'gearbox',
    component: Gearbox
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;