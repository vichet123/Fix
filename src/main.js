import './assets/main.css';

import 'primeicons/primeicons.css'
import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';

import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//app.use(createPinia())
library.add(faMagnifyingGlass);
library.add(faUser);
library.add(faCartShopping);

 
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
