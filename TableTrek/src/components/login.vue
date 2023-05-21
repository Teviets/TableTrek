<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="black"
          v-bind="props"
        >
          <img src="../assets/img/login.png" alt="">
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-col cols="12">
              <v-text-field
                label="Usuario"
                prepend-icon="mdi-account-circle"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Password"
                prepend-icon="mdi-lock"
                type="password"
                required
              ></v-text-field>
            </v-col>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
<style>
#login{
  width: 35px;
  max-width: 35px;
  height: 35px;
}

.custom-button {
  background-color: black; /* Cambia los valores RGB y el nivel de transparencia según tus necesidades */
  border: none; /* Elimina el borde si no lo necesitas */
}


</style>