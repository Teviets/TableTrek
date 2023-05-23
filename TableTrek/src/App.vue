<template>
  <div id="contenedor">
    <header id="elHeader">
      <div id="links">
        <h1>
          <router-link class="link" to="/" @click="cambioEstadoHomePage">TableTrek</router-link>
        </h1>
        <div class="routers" v-if="!inLogin">
          <router-link class="link" to="/pizzas" @click="cambioEstadoPizza">Pizzas</router-link>
          <router-link class="link" to="/hamburguesas" @click="cambioEstadoHamburguesa">Hamburguesas</router-link>
          <router-link class="link" to="/sushi" @click="cambioEstadoSushi">Sushi</router-link>
        </div> 
        <div class="routers" v-if="inLogin">
          <router-link class="link" to="/reservas">Reservas</router-link>
        </div>
      </div>
      <div id="prueba" v-if="!inLogin">
        <Login @login="login"/>
        <Register/>
      </div>
      <div v-if="inLogin">
        <v-btn
          color="black"
          @click="logout"
        >
          Logout
        </v-btn>
      </div>
    </header>
    <router-view></router-view>
    <div id="tiviet" v-if="estado===''">
      <Carousel />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import Login from './components/login.vue';
import Register from './components/register.vue';
import Cards from './components/Cards.vue';
import Carousel from './components/Carousel.vue';
export default {
  data() {
    return {
      inLogin: false,
      estado: ""
    }
  },
  components: {
    Login,
    Register,
    Cards,
    Carousel
  },
  setup() {
    const router = useRouter();
    const isLogged = false;
    return { router, isLogged };
  },
  methods:{
    login(value){
      this.inLogin = value;
    },
    logout(){
      this.router.push('/');
      this.inLogin = false;
    },
    cambioEstadoPizza(){
      this.estado = "pizza";
      console.log(this.estado);
    },
    cambioEstadoHamburguesa(){
      this.estado = "hamburguesa";
      console.log(this.estado);
    },
    cambioEstadoSushi(){
      this.estado = "sushi";
      console.log(this.estado);
    },
    cambioEstadoHomePage(){
      this.estado = "";
      console.log(this.estado);
    }
  }
}

</script>

<style>
#contenedor{
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

.routers{
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

#loginButton{
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
  width: auto;
  margin-right: 25px;
  display: flex;
  gap: 30px;
  align-items: center;
  flex-direction: row; /* Agregado para mostrar los componentes en una columna */
}

.cardsContainer {
  position: relative;
  margin-top: 19%;
  margin-bottom: 27%;
  display: flex;
  justify-content: center;
  align-items:center;
}

#tiviet {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>