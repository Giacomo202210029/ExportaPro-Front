<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Lista de Envíos</h1>
    <table class="table-auto w-full">
      <thead>
      <tr class="bg-gray-200">
        <th class="px-4 py-2">ID</th>
        <th class="px-4 py-2">Número de Rastreo</th>
        <th class="px-4 py-2">Fecha de Salida</th>
        <th class="px-4 py-2">Fecha de Llegada</th>
        <th class="px-4 py-2">Estado</th>
        <th class="px-4 py-2">Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="shipment in shipments" :key="shipment.id">
        <td class="border px-4 py-2">{{ shipment.id }}</td>
        <td class="border px-4 py-2">{{ shipment.tracking_number }}</td>
        <td class="border px-4 py-2">{{ shipment.departure_date }}</td>
        <td class="border px-4 py-2">{{ shipment.arrival_date }}</td>
        <td class="border px-4 py-2">{{ shipment.status }}</td>
        <td class="border px-4 py-2">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver Detalle
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getShipments } from '../services/shipmenteService';

export default {
  data() {
    return {
      shipments: [],
    };
  },
  async mounted() {
    this.shipments = await getShipments();
  },
};
</script>
