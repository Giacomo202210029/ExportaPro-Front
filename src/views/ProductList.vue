<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Lista de Productos</h1>
    <table class="table-auto w-full">
      <thead>
      <tr class="bg-gray-200">
        <th class="px-4 py-2">ID</th>
        <th class="px-4 py-2">Nombre</th>
        <th class="px-4 py-2">Descripción</th>
        <th class="px-4 py-2">Precio</th>
        <th class="px-4 py-2">Stock</th>
        <th class="px-4 py-2">Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <td class="border px-4 py-2">{{ product.id }}</td>
        <td class="border px-4 py-2">{{ product.name }}</td>
        <td class="border px-4 py-2">{{ product.description }}</td>
        <td class="border px-4 py-2">{{ product.unit_price }}</td>
        <td class="border px-4 py-2">{{ product.stock }}</td>
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
import { getProducts } from '../services/productService';

export default {
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    this.products = await getProducts();
  },
};
</script>
