// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://your-api-url.com';

export const getProducts = async () => {
    return await axios.get(`${API_URL}/products`);
};
