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
            <v-btn icon="mdi-close" @click="deleteItem(index)"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
  
<script>
export default {
  props: {
    restauranteId: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      search: '',
      reservacion: []
    };
  },
  mounted() {
    console.log(this.restauranteId); // Agrega este console.log para verificar el valor del restauranteId
    this.fetchReservaciones();
  },
  methods: {
    fetchReservaciones() {
      fetch(`http://localhost:3070/reservaciones/${this.restauranteId}`)
        .then(response => response.json())
        .then(data => {
          this.reservacion = data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteItem(id) {
      this.reservacion.splice(id, 1);
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

#filtro {
  width: 70%;
}
</style>
  