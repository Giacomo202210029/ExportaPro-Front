// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductList from '../views/ProductList.vue';
import ContainerList from '../views/ContainerList.vue';
import ExportOrderList from '../views/ExportOrderList.vue';
import ExportDocumentList from '../views/ExportDocumentList.vue';
import ShipmentList from '../views/ShipmentList.vue';
import CompanyList from '../views/CompanyList.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: ProductList },
    { path: '/containers', component: ContainerList },
    { path: '/export-orders', component: ExportOrderList },
    { path: '/export-documents', component: ExportDocumentList },
    { path: '/shipments', component: ShipmentList },
    { path: '/companies', component: CompanyList },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

