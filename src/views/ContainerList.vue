<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Lista de Contenedores</h1>
    <table class="table-auto w-full">
      <thead>
      <tr class="bg-gray-200">
        <th class="px-4 py-2">ID</th>
        <th class="px-4 py-2">Número de Contenedor</th>
        <th class="px-4 py-2">Tipo</th>
        <th class="px-4 py-2">Capacidad</th>
        <th class="px-4 py-2">Estado</th>
        <th class="px-4 py-2">Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="container in containers" :key="container.id">
        <td class="border px-4 py-2">{{ container.id }}</td>
        <td class="border px-4 py-2">{{ container.container_number }}</td>
        <td class="border px-4 py-2">{{ container.type }}</td>
        <td class="border px-4 py-2">{{ container.capacity }}</td>
        <td class="border px-4 py-2">{{ container.status }}</td>
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
import { getContainers } from '../services/containerService';

export default {
  data() {
    return {
      containers: [],
    };
  },
  async mounted() {
    this.containers = await getContainers();
  },
};
</script>
