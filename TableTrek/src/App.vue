<template>
  <div id="contenedor">
    <header id="elHeader">
      <div id="links">
        <h1 v-if="!inLogin">
          <router-link class="link" to="/" @click="cambioEstadoHomePage">TableTrek</router-link>
        </h1>
        <h1 v-if="inLogin">
          TableTrek
        </h1>
        <div class="routers" v-if="!inLogin">
          <router-link class="link" to="/pizzas" @click="cambioEstadoPizza">Pizzas</router-link>
          <router-link class="link" to="/hamburguesas" @click="cambioEstadoHamburguesa">Hamburguesas</router-link>
          <router-link class="link" to="/sushi" @click="cambioEstadoSushi">Sushi</router-link>
        </div>
      </div>
      <div id="prueba" v-if="!inLogin && estado === ''">
        <Login @login="login" />
        <!--<Register />-->
      </div>
      <div v-if="inLogin">
        <v-btn color="black" @click="logout">
          Logout
        </v-btn>
      </div>
    </header>
    <router-view></router-view>
    <div class="tiviet" v-if="estado === '' && !inLogin">
      <h1>TableTrek</h1>
      
    </div>
    <div class="routers" v-if="inLogin">
      <!-- <router-link class="link" to="/reservas" :restauranteId="restauranteId">Reservas</router-link> -->
      <Reservas :restauranteId="restauranteId" />
    </div>
    <div id="tivetPrueba" v-if="inLogin">
      <!--
      <h1>TableTrek</h1>
      <h2>Reserva tu mesa en los mejores restaurantes de la ciudad</h2>
      -->
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import Login from './components/login.vue';
import Register from './components/register.vue';
import Cards from './components/Cards.vue';
import Carousel from './components/Carousel.vue';
import Reservas from './reservas.vue';
export default {
  data() {
    return {
      inLogin: false,
      estado: "",
      restauranteId: null
    }
  },
  components: {
    Login,
    Register,
    Cards,
    Carousel,
    Reservas
  },
  setup() {
    const router = useRouter();
    const isLogged = false;
    return { router, isLogged };
  },
  methods: {
    login(value) {
      this.inLogin = value;
      this.router.push('/');
    },
    login(restauranteId) {
      this.inLogin = true;
      this.restauranteId = restauranteId;
      console.log(this.restauranteId);
    },
    logout() {
      this.router.push('/');
      this.inLogin = false;
    },
    cambioEstadoPizza() {
      this.estado = "pizza";
      console.log(this.estado);
    },
    cambioEstadoHamburguesa() {
      this.estado = "hamburguesa";
      console.log(this.estado);
    },
    cambioEstadoSushi() {
      this.estado = "sushi";
      console.log(this.estado);
    },
    cambioEstadoHomePage() {
      this.estado = "";
      console.log(this.estado);
    }
  }
}

</script>

<style>
#contenedor {
  width: 100%;
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

.routers {
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
  width: auto;
  margin-right: 25px;
  display: flex;
  gap: 30px;
  align-items: center;
  flex-direction: row;
  /* Agregado para mostrar los componentes en una columna */
}

.cardsContainer {
  position: relative;
  margin-top: 19%;
  margin-bottom: 27%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tiviet {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.tiviet h1 {
  font-size: 60px;
  margin-top: 0;
}

.tiviet p {
  margin-bottom: 0;
}


#tivetPrueba {
  position: absolute;
  top: 50%;
  left: 50%;
}

@media (min-width: 300px) and (max-width: 768px) {
  #prueba{
    display: none;
    
  }
  #links{
    font-size: small;
  }
}

@media (min-width: 1180px){
  #tiviet{
    margin-top: 25%;
  }
}
</style>