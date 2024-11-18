<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Documentos de Exportación</h1>
    <table class="table-auto w-full">
      <thead>
      <tr class="bg-gray-200">
        <th class="px-4 py-2">ID</th>
        <th class="px-4 py-2">Tipo de Documento</th>
        <th class="px-4 py-2">Fecha de Creación</th>
        <th class="px-4 py-2">Estado</th>
        <th class="px-4 py-2">Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="document in documents" :key="document.id">
        <td class="border px-4 py-2">{{ document.id }}</td>
        <td class="border px-4 py-2">{{ document.document_type }}</td>
        <td class="border px-4 py-2">{{ document.creation_date }}</td>
        <td class="border px-4 py-2">{{ document.status }}</td>
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
import { getExportDocuments } from '../services/exportDocumentService';

export default {
  data() {
    return {
      documents: [],
    };
  },
  async mounted() {
    this.documents = await getExportDocuments();
  },
};
</script>
