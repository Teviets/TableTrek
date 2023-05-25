<template>
    <v-carousel cycle hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="imagen in carouselImages" :key="imagen.src">
            <v-img :src="imagen.src" cover></v-img>
        </v-carousel-item>
    </v-carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const carouselImages = ref([])

onMounted(async () => {
    try {
        const response = await fetch('http://3.22.74.121:3070/restaurantes')
        const data = await response.json()

        const firstGroup = data.slice(0, 15)
        const firstGroupRandomImages = shuffle(firstGroup).slice(0, 5)

        const secondGroup = data.slice(15, 30)
        const secondGroupRandomImages = shuffle(secondGroup).slice(0, 5)

        const thirdGroup = data.slice(30, 45)
        const thirdGroupRandomImages = shuffle(thirdGroup).slice(0, 5)

        carouselImages.value = [
            ...firstGroupRandomImages,
            ...secondGroupRandomImages,
            ...thirdGroupRandomImages
        ].map(restaurante => ({
            src: `data:image/png;base64,${restaurante.imagen}`,
        }))
    } catch (error) {
        console.error(error)
    }
})

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    return array
}
</script>
  
<style>
/* Estilos personalizados si es necesario */
</style>
  