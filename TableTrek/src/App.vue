<template>
  <div>
    <header id="header">
      <h1>Inicio</h1>
      <div id="links">
        <router-link class="link" to="/login">Ir a Login</router-link>
        <router-link class="link" to="/register">Ir a Register</router-link>
        <router-link class="link" to="/reservas">Ir a Reservas</router-link>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style >
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}

#links {
  display: flex;
  gap: 20px;
  margin-right: 70px;
}

.link {
  color: white;
  text-decoration: none;
}
</style>