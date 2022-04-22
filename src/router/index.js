import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/tabs/home',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home',
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: 'leap',
        component: () => import('@/views/LeapPage.vue'),
      },
      {
        path: 'activity',
        component: () => import('@/views/ActivityPage.vue'),
      },
      {
        path: 'squad',
        component: () => import('@/views/SquadPage.vue'),
      },
      {
        path: 'profile',
        component: () => import('@/views/ProfilePage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
