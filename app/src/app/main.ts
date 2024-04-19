import 'reflect-metadata';
import '@/assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import dependencies from './dependencies';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(dependencies);

app.mount('#app');
