// src/services/exportDocumentService.js
import axios from 'axios';

const API_URL = 'http://your-api-url.com';

export const getExportDocuments = async () => {
    return await axios.get(`${API_URL}/export-documents`);
};
