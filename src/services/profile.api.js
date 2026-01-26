/** custom module */
import { axiosInstance } from "../config/baseConfig";

/** get profile service */
export const getProfileApi = async () => {
  const { data } = await axiosInstance.get("/profile/details");
  return data;
};
