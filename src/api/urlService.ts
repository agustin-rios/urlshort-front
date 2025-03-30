import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1/development/urls', // Replace with deployed endpoint
});

export const createUrl = (url: string) => api.post('/', { url });
export const getAllUrls = (offset = 0, limit = 10) => api.get(`/?offset=${offset}&limit=${limit}`);
export const getUrlByCode = (code: string) => api.get(`/${code}`);
// this method will get all url from getUrlByCode
export const getUrlByCodeLink = (code: string) => api.defaults.baseURL + '/' + code;
