import './assets/main.css';
import FoodIcon from '../public/food-outline.png';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Pizzas from './pizzas.vue';
import Hamburguesas from './hamburguesas.vue';
import Sushi from './sushi.vue';

import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/pizzas', component: Pizzas },
    { path: '/hamburguesas', component: Hamburguesas },
    { path: '/sushi', component: Sushi },
  ]
});

const iconLink = document.createElement('link');
iconLink.rel = 'icon';
iconLink.href = FoodIcon;
iconLink.type = 'image/png';
document.head.appendChild(iconLink);

const vuetify = createVuetify();

createApp(App).use(router).use(vuetify).mount('#app');
