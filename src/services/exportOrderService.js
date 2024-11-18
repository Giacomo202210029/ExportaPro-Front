// src/services/exportOrderService.js
import axios from 'axios';

const API_URL = 'http://your-api-url.com'; // Cambia esta URL según sea necesario

export const getExportOrders = async () => {
    return await axios.get(`${API_URL}/export-orders`);
};

export const getExportOrderById = async (id) => {
    return await axios.get(`${API_URL}/export-orders/${id}`);
};
