import axios from "axios";
import { refreshTokenApi } from "../services/auth.api";
import { useAuthStore } from "../store/authStore";

/** Base URL of backend services */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/v1";

/** Main instance for authenticated requests */
export const axiosInstance = axios.create({ baseURL: API_BASE_URL });
axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    config.withCredentials = false;
    return config;
  },
  (error) => Promise.reject(error),
);

/** Main instance for authenticated response */
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const data = await refreshTokenApi();
        useAuthStore.getState().setToken(data.accessToken);

        // Retry original request with new token
        error.config.headers.Authorization = `Bearer ${data.accessToken}`;
        return axiosInstance.request(error.config);
      } catch {
        useAuthStore.getState().removeToken();
        // optionally redirect to login
      }
    }
    return Promise.reject(error);
  },
);

/** Refresh token instance (cookies only) */
export const axiosRefresh = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
