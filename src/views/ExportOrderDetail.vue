<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Órdenes de Exportación</h1>
    <table class="table-auto w-full">
      <thead>
      <tr class="bg-gray-200">
        <th class="px-4 py-2">ID</th>
        <th class="px-4 py-2">Compañía</th>
        <th class="px-4 py-2">Destino</th>
        <th class="px-4 py-2">Total</th>
        <th class="px-4 py-2">Fecha de Envío</th>
        <th class="px-4 py-2">Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td class="border px-4 py-2">{{ order.id }}</td>
        <td class="border px-4 py-2">{{ order.company_id }}</td>
        <td class="border px-4 py-2">{{ order.destination }}</td>
        <td class="border px-4 py-2">{{ order.total_amount }}</td>
        <td class="border px-4 py-2">{{ order.shipping_date }}</td>
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
import { getExportOrders } from '../services/exportOrderService';

export default {
  data() {
    return {
      orders: [],
    };
  },
  async mounted() {
    this.orders = await getExportOrders();
  },
};
</script>
