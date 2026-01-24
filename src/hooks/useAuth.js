/** node modules */
// import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/** services call */
import {
  verifyEmailApi,
  // registerApi,
  // loginApi,
  // logoutApi,
} from "../services/auth.api";

const PROFILE_QUERY_KEY = ["profile"];

/** Find initial email */
export const useFindEmail = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: verifyEmailApi,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: PROFILE_QUERY_KEY,
      });
      return data;
    },
    onError: (err) => {
      return err;
    },
  });
};
