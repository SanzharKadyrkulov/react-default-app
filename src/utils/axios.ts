import axios from 'axios';
import { refreshAccessToken } from '../store/actions/auth.actions';

const axiosCustom = axios.create();

axiosCustom.interceptors.request.use(
  async (config) => {
    const tokens = JSON.parse(localStorage.getItem('token') as string);
    if (tokens) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${tokens.access}`
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosCustom.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const config = error.config;

    if (error.response) {
      if (error.response.status === 401 && !config._retry) {
        config._retry = true;
        const access = await refreshAccessToken();
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access;
        return axiosCustom(config);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosCustom;
