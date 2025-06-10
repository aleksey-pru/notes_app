import axios from 'axios';
import { LOCAL_STORAGE_KEYS } from 'constants/localStorage';
import LocalStorage from 'services/localStorage';
import { getBaseUrl } from 'utils';

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  (config) => {
    const token = LocalStorage.get(LOCAL_STORAGE_KEYS.token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
