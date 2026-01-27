import { useEffect } from "react";
import { refreshTokenApi } from "../services/auth.api";
import { useAuthStore } from "../store/authStore";

export const useAuthBootstrap = () => {
  const { setToken, setAuthChecked, logout } = useAuthStore.getState();

  useEffect(() => {
    const initAuth = async () => {
      const { accessToken } = useAuthStore.getState();

      if (!accessToken && !document.cookie.includes("refreshToken")) {
        setAuthChecked();
        return;
      }

      try {
        const { accessToken: newToken } = await refreshTokenApi();
        setToken(newToken);
      } catch {
        logout();
      } finally {
        setAuthChecked();
      }
    };

    initAuth();
  }, [logout, setAuthChecked, setToken]);
};
