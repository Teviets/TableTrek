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
            <img src="../assets/vectores/register.svg" height="32" width="32"/>
        </v-btn>
    </template>
    <v-card>
        <v-card-title>
            <span class="text-h5">Register</span>
        </v-card-title>
        <v-form v-model="form" @sumbit.prevent="register">
        <v-card-text>
                <v-container>
                    <v-col cols="12">
                        <v-text-field
                            label="Usuario"
                            v-model="usuario"
                            prepend-icon="mdi-account-circle"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            label="Password"
                            v-model="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            label="Confirm Password"
                            v-model="confirmPassword"
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
                                v-model="category"
                                required
                            ></v-select>
                        </v-col>
                        <v-col>
                            <v-text-field
                                label="Nombre Restaurante"
                                v-model="nombreRestaurante"
                                prepend-icon="mdi-glass-mug-variant"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-textarea
                                counter
                                label="Description"
                                v-model="description"
                                maxlength="240"
                                prepend-icon="mdi-pencil"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col 
                            cols="12"
                            sm="6">
                            <v-text-field
                                label="Abren a las"
                                model-value="12:30:00"
                                type="time"
                                v-model="abren"
                                prepend-icon="mdi-clock"
                            ></v-text-field>
                        </v-col>
                        <v-col 
                            cols="12"
                            sm="6">
                            <v-text-field
                                label="Cierran a las"
                                model-value="12:30:00"
                                type="time"
                                v-model="cierran"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-file-input
                                label="File input"
                                variant="filled"
                                prepend-icon="mdi-camera"
                                v-model="file"
                        ></v-file-input>
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
                @click="register"
            >
                Register
            </v-btn>
        </v-card-actions>
        </v-form>  
    </v-card>
    </v-dialog>
</template>
  
  <script>
    export default {
        data () {
            return {
                dialog: false,
                categoryOptions: ['Sushi', 'Pizza', 'Hamburger'],
                title: '',
                usuario: '',
                password: '',
                confirmPassword: '',
                nombreRestaurante: '',
                description: '',
                abren: '12:30:00',
                cierran: '12:30:00',
                file:""
            }
        },
        methods: {
            register() {
                const data = {
                    usuario: this.usuario,
                    contra: this.password,
                    conf: this.confirmPassword,
                    name: this.nombreRestaurante,
                    descrip: this.description,
                    op: this.abren,
                    cie: this.cierran
                }
                const img = this.file;
                
                fetch('http://3.22.74.121:3070/restaurantes',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }).then((response) => {
                    if (response.ok){
                        console.log('Registro correcto');
                    } else {
                        console.log('Error: ',response.statusText);
                    }
                }).catch((error) =>{
                    console.error('Error al registrarse: ', error)
                })

                const restaurantes = {
                    id_restaurante: this.cardId,
                    cliente: this.Name,
                    hora: this.Hora,
                    fecha_reserva: this.Fecha,
                    cant_personas: this.Persons,

                };
                fetch('http://3.22.74.121:3070/reservaciones', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(restaurantes),
                })
                    .then((response) => {
                        if (response.ok) {
                            console.log('Reservación exitosa');
                        } else {
                            console.log('Error al reservar:', response.statusText);
                        }
                    })
                    .catch((error) => {
                        console.error('Error al reservar:', error);
                    });
                console.log('Usuario:', this.usuario);
                console.log('Contraseña:', this.password);
                console.log('Confirmar contraseña:', this.confirmPassword);
                console.log('Nombre del restaurante:', this.nombreRestaurante);
                console.log('Descripción:', this.description);
                console.log('Abren a las:', this.abren);
                console.log('Cierran a las:', this.cierran);
                console.log('File: ', this.file);
            },
            cargarImagenPorId(id, file) {
                const url = 'http://3.22.74.121:3070/archivo/' + id;
                const formData = new FormData();
                formData.append('myFile', file);

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                    console.log('Respuesta del servidor:', data);
                    alert('Imagen cargada correctamente.');
                    })
                    .catch(error => {
                    console.error('Error al cargar la imagen:', error);
                    alert('Error al cargar la imagen.');
                    });

            }
        }
    }
  </script>
  <style>
  
  .custom-button {
    background-color: black;
    border: none; 
  }
  
  
  </style>