import { axiosInstance } from "../config/baseConfig";

/** find email service */
export const createCompanyApi = async (payload) => {
  const { data } = await axiosInstance.post("/company/create", payload);
  return data;
};
