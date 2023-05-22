<template>
  <CardsComp 
      title="Sushiito"
      categoria="Sushi"
      description="El mejor restaurante de sushi"
      apertura="09:30AM"
      cerrada="11:30PM"
      image="https://www.sushiitto.com.gt/assets/img/products/rollosSushiitto.jpg"
    ></CardsComp>
</template>

<script setup>
import CardsComp from './components/Cards.vue';
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style>
#cardsContainer {
  position: relative;
  margin-top: 18%;
  margin-bottom: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
