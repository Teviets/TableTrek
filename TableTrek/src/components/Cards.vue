<template>
    <div>
      <v-card class="mx-auto my-12 cardPersonalizada" id="contenedorCards" width="1000px" height="auto">
        <v-row>
          <v-col cols="6">
            <v-img cover width="100%" height="280px" :src="image"></v-img>
          </v-col>
  
          <v-col cols="6">
            <v-card-item>
              <v-card-title style="font-size: 30px;">{{ title }}</v-card-title>
            </v-card-item>
  
            <v-card-text>
              <div class="my-4 text-subtitle-1" style="margin-top: 0px!important;">
                $ • {{ categoria }}
              </div>
  
              <div>
                {{ description }}
              </div>
            </v-card-text>
  
            <v-divider class="mx-4 mb-1"></v-divider>
  
            <v-card-title style="display: flex; align-items: center;">
              Tonight's availability:
              <v-chip-group v-model="selection" style="margin-left: 8px;">
                <v-chip>{{ apertura }}</v-chip>
                <v-chip>{{ cerrada }}</v-chip>
              </v-chip-group>
            </v-card-title>
  
            <v-card-actions>
              <v-card-item>
                <v-card-title>Reserve</v-card-title>
              </v-card-item>
              <v-spacer></v-spacer>
              <v-btn @click="show = !show">
                <v-icon>
                  {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
              </v-btn>
            </v-card-actions>
  
            <v-expand-transition>
              <div v-show="show" class="my-4" style="transform-origin: top;">
                <v-divider></v-divider>
  
                <v-sheet class="mx-auto" style="max-width: 450px;">
                  <v-form fast-fail @submit.prevent style="margin-top: 10px;">
                    <v-row>
                      <v-col cols="12" sm="8">
                        <v-text-field v-model="Name" label="Nombre" :rules="nameRules"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row style="margin-top: -30px;">
                      <v-col cols="12" sm="4">
                        <v-text-field v-model="Persons" label="Cant. personas" :rules="personsRules"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-text-field v-model="Fecha" type="date" name="datetime"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-text-field v-model="Hora" type="time" name="datetime"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-btn type="submit" block class="mt-2" @click="reservar">Reserve</v-btn>
                  </v-form>
                </v-sheet>
              </div>
            </v-expand-transition>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </template>
  
  <script>
  import { VCard } from 'vuetify/components'
  
  export default {
    components: {
      VCard,
    },
    data: () => ({
      show: false,
      Name: '',
      Persons: '',
      Fecha: '',
      Hora: '',
    }),
    props: {
      title: String,
      categoria: String,
      description: String,
      apertura: String,
      cerrada: String,
      image: String,
      cardId: String,
    },
    methods: {
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
    },
  }
  </script>
  
  <style>
  #contenedorCards {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
  }
  
  @media screen and (max-width: 768px) {
    #contenedorCards {
      position: relative;
      left: 0%;
      transform: translate(0%, 0%);
      justify-content: center;
    }
  
    .cardPersonalizada {
      max-width: 80% !important;
      margin-left: 20px !important;
      gap: 35px !important;
    }
  }
  </style>
  