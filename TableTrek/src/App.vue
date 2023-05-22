<template>
  <div id="contenedor">
    <header id="elHeader">
      <div id="links">
        <h1>
          TableTrek
        </h1>
        <div class="routers" v-if="!inLogin">
          <router-link class="link" to="/pizzas">Pizzas</router-link>
          <router-link class="link" to="/hamburguesas">Hamburguesas</router-link>
          <router-link class="link" to="/sushi">Sushi</router-link>
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
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import Login from './components/login.vue';
import Register from './components/register.vue';
export default {
  data() {
    return {
      inLogin: false
    }
  },
  components: {
    Login,
    Register
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

.link:hover{
  cursor: pointer;
}

#loginButton{
  background-color: transparent;
  border: none;
  width: 36px;
  display: flex;
  align-items: center;
}

#loginButton:hover{
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


</style>