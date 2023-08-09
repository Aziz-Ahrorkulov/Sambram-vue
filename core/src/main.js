import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/style.css';
import './assets/css/dashboard.css';
import axios from 'axios';
import store from './store/store';
const app = createApp(App);

// Set up CSRF token for Axios
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

app.use(router);
app.use(store);

app.mount('#app');
