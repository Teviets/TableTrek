<template>
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
            <span class="text-h5">Register</span>
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
                <v-col cols="12">
                    <v-text-field
                        label="Confirm Password"
                        prepend-icon="mdi-lock"
                        type="password"
                        required
                    ></v-text-field>
                </v-col>
                <v-row
                    cols="12"
                    sm="6"
                >
                    <v-col>
                        <v-select
                            :items="categoryOptions"
                            prepend-icon="mdi-food"
                            label="Category"
                            required
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-text-field
                            label="Nombre Restaurante"
                            prepend-icon="mdi-glass-mug-variant"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea
                            v-model="title"
                            counter
                            label="Description"
                            maxlength="240"
                            
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col 
                        cols="12"
                        sm="6">
                        <v-text-field
                            label="Label Text"
                            model-value="12:30:00"
                            type="time"
                            suffix="PST"
                        ></v-text-field>
                    </v-col>
                    <v-col 
                        cols="12"
                        sm="6">
                        <v-text-field
                            label="Label Text"
                            model-value="12:30:00"
                            type="time"
                            suffix="PST"
                        ></v-text-field>
                    </v-col>
                </v-row>
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
                Register
            </v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
</template>
  
  <script>
    export default {
      data () {
        return {
          dialog: false,
          categoryOptions: ['Sushi', 'Pizza', 'Hamburger'],
          title: ''
        }
      },
    }
  </script>
  <style>
  
  .custom-button {
    background-color: black; /* Cambia los valores RGB y el nivel de transparencia según tus necesidades */
    border: none; /* Elimina el borde si no lo necesitas */
  }
  
  
  </style>