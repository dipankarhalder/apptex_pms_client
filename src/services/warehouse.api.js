import { axiosInstance } from "../config/baseConfig";

export const createWarehouseApi = async (payload) => {
  const { data } = await axiosInstance.post("/warehouse/create", payload);
  return data;
};

export const getWarehousesApi = async () => {
  const { data } = await axiosInstance.get("/warehouse/list");
  return data;
};
