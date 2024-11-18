// src/services/shipmentService.js
import axios from 'axios';

const API_URL = 'http://your-api-url.com';

export const getShipments = async () => {
    return await axios.get(`${API_URL}/shipments`);
};
