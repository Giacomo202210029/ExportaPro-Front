<template>
  <div>
    <h1>Lista de Empresas</h1>
    <ul>
      <li v-for="company in companies" :key="company.id">
        {{ company.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getCompanies } from '../services/CompanyServices.js';

export default {
  data() {
    return {
      companies: [],
    };
  },
  async mounted() {
    this.companies = await getCompanies();
  },
};
</script>
