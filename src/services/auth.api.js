/** custom module */
import { axiosInstance } from "../config/baseConfig";

/** find email service */
export const verifyEmailApi = async (payload) => {
  const { data } = await axiosInstance.post("/auth/findEmail", payload);
  return data;
};

/** register service */
export const registerApi = async (payload) => {
  const { data } = await axiosInstance.post("/auth/register", payload);
  return data;
};

/** login service */
export const loginApi = async (payload) => {
  const { data } = await axiosInstance.post("/auth/login", payload);
  return data;
};

/** Logout service */
export const logoutApi = async () => {
  return await axiosInstance.post("/auth/logout");
};
