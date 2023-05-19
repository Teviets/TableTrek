import './assets/main.css';
import FoodIcon from '../public/food-outline.png';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Pizzas from './pizzas.vue';
import Hamburguesas from './hamburguesas.vue';
import Sushi from './sushi.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/pizzas', component: Pizzas },
        { path: '/hamburguesas', component: Hamburguesas },
        { path: '/sushi', component: Sushi },
    ]
})

const iconLink = document.createElement('link');
iconLink.rel = 'icon';
iconLink.href = FoodIcon;
iconLink.type = 'image/png';
document.head.appendChild(iconLink);


createApp(App).use(router).mount('#app');
