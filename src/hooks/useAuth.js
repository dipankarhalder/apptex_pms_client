/** node modules */
// import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/** services call */
import {
  verifyEmailApi,
  registerApi,
  loginApi,
  // logoutApi,
} from "../services/auth.api";
import { useAuthStore } from "../store/authStore";

const PROFILE_QUERY_KEY = ["profile"];

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
    onError: (err) => err,
  });
};

export const useLogin = () => {
  const setToken = useAuthStore((s) => s.setToken);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginApi,
    onSuccess: async (data) => {
      setToken(data.accessToken);
      await queryClient.invalidateQueries({
        queryKey: PROFILE_QUERY_KEY,
      });
      return data;
    },
    onError: (err) => err,
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerApi,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: PROFILE_QUERY_KEY,
      });
      return data;
    },
    onError: (err) => err,
  });
};
