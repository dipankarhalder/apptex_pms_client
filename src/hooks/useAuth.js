import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyEmailApi, registerApi, loginApi } from "../services/auth.api";
import { useAuthStore } from "../store/authStore";
import { AUTH_PROFILE } from "../utils/queryKeys";

const useAuthMutation = (mutationFn, onSuccessExtra) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (typeof onSuccessExtra === "function") {
        onSuccessExtra(data);
      }
      queryClient.invalidateQueries({ queryKey: AUTH_PROFILE });
    },
  });
};

export const useFindEmail = () => useAuthMutation(verifyEmailApi);
export const useRegister = () => useAuthMutation(registerApi);
export const useLogin = () => {
  const { setToken } = useAuthStore();
  return useAuthMutation(loginApi, (data) => {
    setToken(data.accessToken);
  });
};
