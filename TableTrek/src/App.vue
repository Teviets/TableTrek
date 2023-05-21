<template>
  <div id="contenedor">
    <header id="elHeader">
      <div id="links">
        <h1>
          <router-link class="link" to="/">TableTrek</router-link>
        </h1>
        <div id="routers">
          <router-link class="link" to="/pizzas">Pizzas</router-link>
          <router-link class="link" to="/hamburguesas">Hamburguesas</router-link>
          <router-link class="link" to="/sushi">Sushi</router-link>
        </div>
      </div>
      <div id="prueba">
        <button id="loginButton">
          <img src="./assets/img/login.png" id="login" />
        </button>
      </div>
    </header>
    <router-view></router-view>
  </div>
  <div id="cardsContainer">
    <Cards 
      title="Burger King"
      categoria="Hambueguesas"
      description="El mejor restaurante de hamburguesas"
      apertura="07:30AM"
      cerrada="10:30PM"
      image="https://d1ralsognjng37.cloudfront.net/29998691-6cf0-413c-ae62-c35c21a47d0f.jpeg"
    />
  </div>
  <div id="cardsContainer">
    <Cards 
      title="Castor Pizza"
      categoria="Pizzas"
      description="El mejor restaurante de pizzas"
      apertura="10:30AM"
      cerrada="8:30PM"
      image="https://www.guatemala.com/fotos/2021/04/Castors-Pizza-GT-el-restaurante-que-ofrece-pizzas-con-mucho-queso-en-Ciudad-de-Guatemala-885x500.jpg"
    />
  </div>
  <div id="cardsContainer">
    <Cards 
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
import { useRouter } from 'vue-router';
import Cards from './components/Cards.vue'
const router = useRouter();

</script>

<style >
#contenedor {
  width: 100%;
  background-color: black;
}

#elHeader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgb(20, 19, 19);
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

#routers {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: 25px;
}

.link {
  color: white;
  text-decoration: none;
}

.link:hover {
  cursor: pointer;
}

#login {
  width: 35px;
  height: 35px;
  margin-right: 50px;
}

#loginButton {
  background-color: transparent;
  border: none;
  width: 36px;
  display: flex;
  align-items: center;
}

#loginButton:hover {
  width: 36px;
  cursor: pointer;
}

#prueba {
  width: 35px;
  margin-right: 25px;
}

#cardsContainer {
  position: relative;
  margin-top: 18%;
  margin-bottom: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#cardsContainer2 {
  position: relative;
  margin-top: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>