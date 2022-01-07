import { createApp } from 'vue';
import vant from '@/plugins/vant';
import App from './App.vue';
import router from './router';

createApp(App).use(router).use(vant).mount('#app');
