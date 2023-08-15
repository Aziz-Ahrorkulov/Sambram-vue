import { createRouter, createWebHistory } from 'vue-router'; 
import HomeView from './views/Home.vue';
import ContactView from './views/Contact.vue';
import ApplicationView from './views/Application.vue';
import DashboardView from './views/Dashboard.vue';
import Application_listView from './views/Application-list.vue';
import LoginView from './views/Login.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/contact/',
      component: ContactView,
    },
    {
      path: '/application/',
      component: ApplicationView,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/application-list/',
      component: Application_listView,
    },
    {
      path: '/login/',
      component: LoginView,
    }
  ],
});
