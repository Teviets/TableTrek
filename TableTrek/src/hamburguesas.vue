<template>
  <div class="cardsContainer">
    <div class="cardsWrapper">
      <Cards
        v-for="restaurante in restaurantes"
        :key="restaurante.id_restaurante"
        :title="restaurante.nombre_restaurante"
        :categoria="restaurante.categoria"
        :description="restaurante.descripcion"
        :apertura="restaurante.hora_apertura"
        :cerrada="restaurante.hora_cerrada"
        :image="restaurante.imagen"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Cards from './components/Cards.vue'
const restaurantes = ref([])

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3070/restaurantes/2')
    const data = await response.json()

    restaurantes.value = data.map(restaurante => ({
      ...restaurante,
      imagen: `data:image/png;base64,${restaurante.imagen}`
    }))
  } catch (error) {
    console.error(error)
  }
})
</script>


<style>
.cardsContainer {
  position: relative;
  margin-top: 19%;
  margin-bottom: 27%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cardsWrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 430px;
}
</style>
