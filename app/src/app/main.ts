import 'reflect-metadata';
import '@/styles/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import createDependencies from './dependencies';
import { createDependenciesPlugin } from '@/core/dependency-injection';
import { enableMocking } from './enable-mocks';

async function main() {
  await enableMocking();

  const app = createApp(App);

  app.use(createPinia());
  app.use(router);

  const dependencies = await createDependencies();
  app.use(createDependenciesPlugin(dependencies));

  app.mount('#app');
}

main();
