<template>
    <div id="reservas">
      <div id="filtro">
        <v-text-field v-model="search" label="Search"></v-text-field>
      </div>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Fecha</th>
            <th class="text-left">Hora</th>
            <th class="text-left">Cantidad de personas</th>
            <th class="text-left">Borrar reserva</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredTableData" :key="item.name">
            <td>{{ item.nombre }}</td>
            <td>{{ item.fecha }}</td>
            <td>{{ item.hora }}</td>
            <td>{{ item.cantidad }}</td>
            <td>
                <v-btn 
                    icon="mdi-close"
                    @click="deleteItem(index)"
                ></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: '',
        reservacion: [
          {
            nombre: 'Pedro',
            fecha: 159,
            hora: 100,
            cantidad: 15
          },
          {
            nombre: 'Juan',
            fecha: 159,
            hora: 100,
            cantidad: 15
          },
        ],
      };
    },
    methods:{
        deleteItem(id){
            this.reservacion.splice(id,1);
        }
    },
    computed: {
      filteredTableData() {
        const query = this.search.toLowerCase();
        return this.reservacion.filter(
          item => item.nombre.toLowerCase().includes(query)
        );
      },
    },
  };
  </script>
  
  <style>
  #reservas {
    position: absolute;
    top: 15%;
    left: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #filtro{
    width: 70%;
  }
</style>
  