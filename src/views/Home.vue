<template>
  <div class="container mx-auto p-8">
    <!-- Header -->
    <header class="flex items-center justify-between py-4">
      <h1 class="text-4xl font-bold">ExportaPro Dashboard</h1>
    </header>

    <!-- Tarjetas de Funcionalidades -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card class="hover:shadow-lg cursor-pointer" @click="goTo('products')">
        <template #header>
          <i class="pi pi-box text-5xl text-blue-500"></i>
        </template>
        <h2 class="text-xl font-semibold">Gestión de Productos</h2>
        <p class="text-gray-500">Accede a la lista de productos y gestiona su inventario.</p>
      </Card>

      <Card class="hover:shadow-lg cursor-pointer" @click="goTo('containers')">
        <template #header>
          <i class="pi pi-th-large text-5xl text-green-500"></i>
        </template>
        <h2 class="text-xl font-semibold">Contenedores</h2>
        <p class="text-gray-500">Monitorea y gestiona el estado de los contenedores.</p>
      </Card>

      <Card class="hover:shadow-lg cursor-pointer" @click="goTo('shipments')">
        <template #header>
          <i class="pi pi-truck text-5xl text-red-500"></i>
        </template>
        <h2 class="text-xl font-semibold">Envíos</h2>
        <p class="text-gray-500">Revisa las órdenes de envío y su progreso.</p>
      </Card>
    </div>

    <!-- Sección de Estadísticas -->
    <h2 class="text-2xl font-bold mb-4">Estadísticas Clave de Exportaciones</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Gráfico de Exportaciones Completadas -->
      <div class="bg-white p-4 shadow-lg rounded-lg">
        <h3 class="text-xl font-semibold mb-2">Exportaciones Completadas</h3>
        <BarChart :data="exportData" />
      </div>

      <!-- Gráfico de Destinos -->
      <div class="bg-white p-4 shadow-lg rounded-lg">
        <h3 class="text-xl font-semibold mb-2">Principales Destinos de Exportación</h3>
        <DoughnutChart :data="destinationsData" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Bar, Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

// Registrar componentes de Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

export default {
  components: {
    BarChart: Bar,
    DoughnutChart: Doughnut
  },
  setup() {
    const router = useRouter();

    const exportData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [{
        label: 'Exportaciones Completadas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    const destinationsData = {
      labels: ['USA', 'España', 'Brasil', 'Alemania', 'China'],
      datasets: [{
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    };

    const goTo = (route) => {
      router.push(`/${route}`);
    };

    return { exportData, destinationsData, goTo };
  },
};
</script>

<style scoped>
.card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
