import axios from "axios";
import { refreshTokenApi } from "../services/auth.api";
import { useAuthStore } from "../store/authStore";

/** Base URL of backend services */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/v1";

/** Main instance for authenticated requests */
export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/** Main instance for authenticated response */
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/")
    ) {
      originalRequest._retry = true;

      try {
        const data = await refreshTokenApi();
        useAuthStore.getState().setToken(data.accessToken);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return axiosInstance.request(originalRequest);
      } catch {
        useAuthStore.getState().logout();
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
