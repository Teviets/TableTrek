<template>
  <div class="text-center">
    <v-dialog
      
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="black"
          v-bind="props"
        >
            <img src="../assets/img/login.png" id="login" />
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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