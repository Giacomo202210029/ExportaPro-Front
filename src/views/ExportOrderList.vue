<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Detalle de la Orden #{{ order.id }}</h1>
    <div>
      <p><strong>Compañía:</strong> {{ order.company_id }}</p>
      <p><strong>Destino:</strong> {{ order.destination }}</p>
      <p><strong>Total:</strong> {{ order.total_amount }}</p>
      <p><strong>Fecha de Envío:</strong> {{ order.shipping_date }}</p>
      <p><strong>Fecha de Entrega:</strong> {{ order.delivery_date }}</p>
    </div>
  </div>
</template>

<script>
import { getExportOrderById } from '../services/exportOrderService';

export default {
  data() {
    return {
      order: {},
    };
  },
  async mounted() {
    const orderId = this.$route.params.id;
    this.order = await getExportOrderById(orderId);
  },
};
</script>
