// src/services/containerService.js
import axios from 'axios';

const API_URL = 'http://your-api-url.com';

export const getContainers = async () => {
    return await axios.get(`${API_URL}/containers`);
};
