import axios from "axios";


// axios.defaults.baseURL = 'https://phonebook-app-backend-xskd.onrender.com';

axios.defaults.baseURL = 'http://localhost:3000';

// Utility to add JWT
export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};