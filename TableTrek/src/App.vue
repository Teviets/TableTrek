<template>
  <header id="header">
    <h1>Inicio</h1>

    <router-link to="/login" @click="handleClick">Ir a Login</router-link>
    <br>
    <router-link to="/register">Ir a Register</router-link>
    <br>
    <router-link to="/reservas">Ir a Reservas</router-link>
  </header>

  <router-view></router-view>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onBeforeRouteLeave } from 'vue-router'
const router = useRouter()

const handleClick = () => {
  const header = document.getElementById('header');
  if (header) {
    header.style.display = 'none';
  }
};

</script>

<style >

</style>