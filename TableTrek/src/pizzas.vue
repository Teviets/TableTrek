<template>
  
    <div id="cardsContainer">
    <CardsComp 
      title="Sushiito"
      categoria="Sushi"
      description="El mejor restaurante de sushi"
      apertura="09:30AM"
      cerrada="11:30PM"
      image="https://www.sushiitto.com.gt/assets/img/products/rollosSushiitto.jpg"
    />
  </div>
  
</template>

<script setup>
import { useRouter } from 'vue-router'
import CardsComp from './components/Cards.vue'
const router = useRouter()
</script>

<style>
#contenido {
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#cardsContainer {
  position: relative;
  margin-top: 18%;
  margin-bottom: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
