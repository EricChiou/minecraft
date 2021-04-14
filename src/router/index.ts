import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Mods from '@/views/Mods.vue';
import Map from '@/views/Map.vue';
import QA from '@/views/QA.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mods',
    name: 'Mods',
    component: Mods,
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
  },
  {
    path: '/qa',
    name: 'QA',
    component: QA,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
