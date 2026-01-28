import { axiosInstance } from "../config/baseConfig";

export const createStatusApi = async (payload) => {
  const { data } = await axiosInstance.post("/status/create", payload);
  return data;
};

export const getStatusesApi = async () => {
  const { data } = await axiosInstance.get("/status/list");
  return data;
};
