import BootstrapVue3 from 'bootstrap-vue-3';
import { createApp } from 'vue'
import router from './routes.js';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

createApp(App).use(BootstrapVue3).use(router).mount('#app')