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
      path: '/signup',
      name: 'singup',
      component: () => import('@/views/signup/SignupView.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/signin/SigninView.vue'),
    },
    {
      path: '/workspace/:workspaceId',
      name: 'workspace',
      props: true,
      component: () => import('@/views/workspace/WorkspaceView.vue'),
    },
    {
      path: '/project/:projectId',
      name: 'project',
      props: true,
      component: () => import('@/views/project/ProjectView.vue'),
    },
    {
      path: '/demo/home',
      name: 'demo-home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/demo/signup',
      name: 'demo-signup',
      component: () => import('@/views/SignupView.vue'),
    },
    {
      path: '/demo/signin',
      name: 'demo-signin',
      component: () => import('@/views/SigninView.vue'),
    },
  ],
});

export default router;
