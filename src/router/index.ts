import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [];

const files = require.context('.', false, /\.ts$/);

files.keys().forEach((key) => {
  if (key === './index.ts') return;
  routes.push(...files(key).default);
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
