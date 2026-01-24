import axios from "axios";
import { apiUrl } from "./baseUrl";
// import { refreshTokenApi } from "@/services/auth.api";
// import { useAuthStore } from "@/store/authStore";

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  // const token = useAuthStore.getState().accessToken;
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    // const originalRequest = error.config;
    // if (
    //   error.response?.status === 401 &&
    //   !originalRequest?._retry &&
    //   !originalRequest.url?.includes("/auth/refresh")
    // ) {
    //   originalRequest._retry = true;
    //   try {
    //     const { accessToken } = await refreshTokenApi();
    //     useAuthStore.getState().setToken(accessToken);
    //     originalRequest.headers = {
    //       ...originalRequest.headers,
    //       Authorization: `Bearer ${accessToken}`,
    //     };
    //     return axiosInstance(originalRequest);
    //   } catch {
    //     useAuthStore.getState().userLogout();
    //     return Promise.reject(error);
    //   }
    // }
    return Promise.reject(error);
  },
);
