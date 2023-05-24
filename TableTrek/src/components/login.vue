<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="black" v-bind="props">
          <img src="../assets/img/login.png" alt="">
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Login</span>
        </v-card-title>
        <v-form v-model="form" @submit.prevent="login">
          <v-card-text>
            <v-container>
              <v-col cols="12">
                <v-text-field v-model="email" label="Usuario" prepend-icon="mdi-account-circle" :rules="[required]"
                  :readonly="loading" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="password" label="Password" prepend-icon="mdi-lock" type="password"
                  :rules="[required]" :readonly="loading" required></v-text-field>
              </v-col>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
              Cerrar
            </v-btn>
            <v-btn :disabled="!form" :loading="loading" color="blue-darken-1" variant="text" type="submit">
              Login
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
    return {
      dialog: false,
      form: false,
      loading: false,
      isLoading: false,
      email: '',
      password: '',
      timeout: null,
      isLogged: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    login() {
      if (!this.form) return;

      this.loading = true;

      this.fetchData();
    },
    fetchData() {
      fetch('http://localhost:3070/restaurantes/raw')
        .then(response => response.json())
        .then(apiData => {
          apiData.forEach(user => {
            if (this.email === user.usuario && this.password === user.contraseña) {
              // Lógica para el login exitoso
              this.isLogged = true;
              console.log('Login exitoso');
              const restauranteId = user.id_restaurante;
              this.timeout = setTimeout(() => {
                this.loading = false;
                this.dialog = false;
                this.$emit('login', restauranteId);
                console.log(restauranteId);
              }, 2000);
            } else {
              // Lógica para el login fallido
              console.log('Login fallido');
              this.timeout = setTimeout(() => {
                this.loading = false;
                this.dialog = false;
              }, 2000);
            }
          });
        })
        .catch(error => {
          console.error(error);
        });
    },
    required(v) {
      return !!v || 'Field is required';
    },
  },
  beforeDestroy() {
    clearTimeout(this.timeout); // Cancelar el temporizador antes de destruir el componente
  },
};

</script>

<style>
#login {
  width: 35px;
  max-width: 35px;
  height: 35px;
}

.custom-button {
  background-color: black;
  /* Cambia los valores RGB y el nivel de transparencia según tus necesidades */
  border: none;
  /* Elimina el borde si no lo necesitas */
}
</style>
