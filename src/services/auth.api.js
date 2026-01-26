import { axiosInstance, axiosRefresh } from "../config/baseConfig";

const postService = async (axiosInst, url, payload) => {
  const { data } = await axiosInst.post(url, payload);
  return data;
};

export const verifyEmailApi = (payload) =>
  postService(axiosInstance, "/auth/findEmail", payload);
export const registerApi = (payload) =>
  postService(axiosInstance, "/auth/register", payload);
export const loginApi = (payload) =>
  postService(axiosInstance, "/auth/login", payload);
export const logoutApi = () => postService(axiosInstance, "/auth/logout");

export const refreshTokenApi = () =>
  postService(axiosRefresh, "/auth/refresh-token");
