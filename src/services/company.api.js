import { axiosInstance } from "../config/baseConfig";

/** create company */
export const createCompanyApi = async (payload) => {
  const { data } = await axiosInstance.post("/company/create", payload);
  return data;
};

/** get the lists of company */
export const getCompaniesApi = async () => {
  const { data } = await axiosInstance.get("/company/list");
  return data;
};
