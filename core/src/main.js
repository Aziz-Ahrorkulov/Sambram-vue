import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/style.css';
import './assets/css/dashboard.css';
import store from './store/store'; // Импортируйте ваш store.js файл
import axios from 'axios';
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

// Set up CSRF token for Axios
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

