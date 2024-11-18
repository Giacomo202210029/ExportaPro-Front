<template>
  <div id="app" class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-center mb-6">Bienvenido a ExportaPro</h1>
    <router-view /> <!-- Aquí se renderizan las rutas -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Aquí puedes añadir estilos personalizados si los necesitas */
</style>
