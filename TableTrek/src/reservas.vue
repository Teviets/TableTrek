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
        <tr v-for="(item, index) in filteredTableData" :key="item.cliente">
          <td>{{ item.cliente }}</td>
          <td>{{ item.fecha_reserva }}</td>
          <td>{{ item.hora }}</td>
          <td>{{ item.cant_personas }}</td>
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
    restauranteId: String
  },
  data() {
    return {
      search: '',
      reservaciones: []
    };
  },
  mounted() {
    console.log(this.restauranteId);
    if (this.restauranteId) {
      this.fetchReservaciones();
    }
  },
  methods: {
    fetchReservaciones() {
      fetch(`http://3.22.74.121:3070/reservaciones/${this.restauranteId}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.reservaciones = data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteItem(id) {
      const reservaId = this.reservaciones[id].id_reserva; // Obtener el ID de la reserva
      fetch(`http://3.22.74.121:3070/reservaciones/${reservaId}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            // Eliminación exitosa, puedes realizar cualquier otra acción necesaria
            console.log(`Reserva ${reservaId} eliminada correctamente`);
          } else {
            // Manejar el error en caso de que la eliminación no sea exitosa
            console.error('Error al eliminar la reserva');
          }
        })
        .catch(error => {
          console.error(error);
        });

      this.reservaciones.splice(id, 1); // Eliminar la reserva del arreglo local
    }
  },
  computed: {
    filteredTableData() {
      const query = this.search.toLowerCase(); // Convertir a minúsculas
      return this.reservaciones.filter(item => item.cliente.toLowerCase().includes(query));
    },
  },

};
</script>

<style>
#reservas {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#filtro {
  width: 70%;
}
</style>
