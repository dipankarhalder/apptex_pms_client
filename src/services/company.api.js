import { axiosInstance } from "../config/baseConfig";

export const createCompanyApi = async (payload) => {
  const { data } = await axiosInstance.post("/company/create", payload);
  return data;
};

export const getCompaniesApi = async () => {
  const { data } = await axiosInstance.get("/company/list");
  return data;
};
