// src/services/companyService.js
import axios from 'axios';

const API_URL = 'http://your-api-url.com'; // URL del servidor IIS con las APIs

export const getCompanies = async () => {
    return await axios.get(`${API_URL}/companies`);
};

export const getCompanyById = async (id) => {
    return await axios.get(`${API_URL}/companies/${id}`);
};

export const createCompany = async (data) => {
    return await axios.post(`${API_URL}/companies`, data);
};

// Y así para cada entidad.
