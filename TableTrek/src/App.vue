<template>
  <div>
    <p>Prueba</p>
    <router-link to="/login">Ir a Login</router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToLogin = () => {
  router.push({ path: '/login', replace: true })
}
</script>
