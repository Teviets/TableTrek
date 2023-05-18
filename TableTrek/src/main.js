import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Login from './login.vue';
import Register from './register.vue';
import Reservas from './reservas.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/reservas', component: Reservas },
    ]
})

createApp(App).use(router).mount('#app');
