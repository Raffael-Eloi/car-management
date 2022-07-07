import BootstrapVue3 from 'bootstrap-vue-3';
import { createApp } from 'vue'
import router from './routes.js';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Toaster from '@meforma/vue-toaster';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(BootstrapVue3).use(router).use(Toaster, {position: "top"}).use(VueSweetalert2).mount('#app')