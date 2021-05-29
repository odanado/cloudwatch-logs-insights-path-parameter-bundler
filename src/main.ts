import { createApp } from 'vue';
import App from './App.vue';

// @ts-expect-error node_modules 以下の equal-vue の package.json になぜか types がない。GitHub 版にはある
import Equal from 'equal-vue';
import '../node_modules/equal-vue/dist/style.css';

const app = createApp(App);
app.use(Equal);

app.mount('#app');
