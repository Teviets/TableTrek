# TableTrek
## Link de Firebase:

https://proyecto-2-stw.web.app/app

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

-`TableTreck`
--`src`
  - `assets`
    - `fonts`
    - `images`
    - `vectores`
  - `components`
  - `App.vue`
  - `main.js`
- `index.html`

### Navegacion

 ```const router = createRouter({
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
