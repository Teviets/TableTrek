# TableTrek

<img src="./TableTrek.png" style="position:absolute; left:50%;"/>

## Descripcion de proyecto

Este proyecto tiene el proposito de servir tanto a restaurantes como a consumidores. A los consumidores les permite generar reservaciones en sus restaurantes favoritos y a los restaurantes les permite el manejo de sus reservaciones.

## Link de Firebase:

https://proyectostw2-d92ba.web.app/

## Link repositorio API:

https://github.com/Jskenpo/API_PROYECTO2_STW

## Tecnologias utilizadas

- **Vue** — v3.3.4
- **Webpack**  — Hot Reloading, Code Splitting, Optimized Build
- **JS** - Components
- **CSS** — Styled Components, CSS

## Getting started

1. Clonar repositorio `https://github.com/Teviets/TableTrek`
2. Moverse al directorio: `cd TableTreck`.<br />
3. Correr `npm install` para instalar dependencias.<br />
4. Correr `npm run webpack` para ver la página.

## Estructura

- `TableTreck` carpeta donde se encuentra la configuracion (package.json, webpack)
- - `src` carpeta donde se encuentra los archivos .vue .js y .css
- - - `assets` carpeta donde se encuentran las fuentes, imagenes y vectores
- - - `componentes` carpeta donde se encuentran los componentes del proyecto
- - - `App.vue` archivo donde se reciben los componentes del proyecto
- - - `main.js` archivo donde se realiza la navegación de la página
- - `index.html` archivo donde se recibe el script de la página

### Navegacion

 ```
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App},
    { path: '/pizzas', component: Pizzas },
    { path: '/hamburguesas', component: Hamburguesas },
    { path: '/sushi', component: Sushi },
    { path: '/reservas', component: Reservas }
  ]
});
  ```

### Obtener datos de API

```
import { ref, onMounted } from 'vue'
const restaurantes = ref([])

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3070/restaurantes/1')
    const data = await response.json()

    restaurantes.value = data.map(restaurante => ({
      ...restaurante,
      imagen: `data:image/png;base64,${restaurante.imagen}`
    }))
  } catch (error) {
    console.error(error)
  }
})
  ```

### Enviar datos a la API

```
reservar() {
    const data = {
        id_restaurante: this.cardId,
        cliente: this.Name,
        hora: this.Hora,
        fecha_reserva: this.Fecha,
        cant_personas: this.Persons,
    };
    fetch('http://localhost:3070/reservaciones', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                console.log('Reservación exitosa');
                this.Name = '';
                this.Persons = '';
                this.Fecha = '';
                this.Hora = '';
            } else {
                console.log('Error al reservar:', response.statusText);
            }
        })
        .catch((error) => {
            console.error('Error al reservar:', error);
        });
},
  ```

### Codigo general de componente en Vue

```
<template>
  <!--
    Estructura visual del component
  -->
</template>

<script>
// Importacion de componentes o dependencias
export default {
  data() {
    return {
      // Variables a utilizar en en el template
    }
  },
  components: {
    // Componentes a utilizar en el template
  },
  setup() {
    const router = useRouter();
    const isLogged = false;
    return { router, isLogged };
  },
  methods: {
    // Metodos a utlizar en template
  },
  props:{
    // Propiedades que requiere el componente
  }
  onMounted(){
    // Al montar el DOM
  }
  beforeDestroy(){
    // Lo que sucedera al cerrar el DOM
  }
}

</script>

<style>
    /**
      Aplicar estilos aqui
    */
</style>
```


### Como llamar el componente de vue a un JS

```
import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

//Importar componentes para el router
import App from './src/App.vue'

// Importa dependencias necesarias


const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Se coloca el path que se desea y el componente al que se debe dirigir el path
    { path: '/', component: App},
  ]
});

// Crea una instancia de Vuetify
const vuetify = createVuetify();

// Creacion de App que utilice nuestro componente principal y nuestro router
createApp(App).use(router).use(vuetify).mount('#app');
```

### Estructura del Index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/food-outline.png">
    <title>TableTrek</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```