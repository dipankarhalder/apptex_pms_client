import { axiosInstance } from "../config/baseConfig";

export const getProfileApi = async () => {
  const { data } = await axiosInstance.get("/profile/details");
  return data;
};
