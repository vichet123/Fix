import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../Views/HomeView.vue';
import Aboutus from '../Views/Aboutus.vue';
import Contactus from '../Views/Contactus.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',  
    component: HomeView,
  },
  {
    path: '/aboutus',
    name:'Aboutus',
    component:Aboutus
  },
  {
    path:'/productpage',
    name:'productpage',
    // component:products
  },
  {
    path:'/contact',
    name:'contactus',
    component: Contactus
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
