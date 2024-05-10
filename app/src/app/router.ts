import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue'),
    },
    {
      path: '/workspace/:workspaceId',
      name: 'workspace',
      props: true,
      component: () => import('@/views/workspace/WorkspaceView.vue'),
    },
    {
      path: '/foos',
      name: 'foos',
      component: () => import('@/views/FoosView.vue'),
    },
  ],
});

export default router;
