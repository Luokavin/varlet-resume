// 避免 tailwindcss 默认样式覆盖，放在最前
import './style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import '@varlet/touch-emulator';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

app.mount('#app');