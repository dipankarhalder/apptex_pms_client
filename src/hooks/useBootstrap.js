import { useEffect } from "react";
import { refreshTokenApi } from "../services/auth.api";
import { useAuthStore } from "../store/authStore";

export const useAuthBootstrap = () => {
  const setToken = useAuthStore((s) => s.setToken);
  const setAuthChecked = useAuthStore((s) => s.setAuthChecked);

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
        setToken(null);
      } finally {
        setAuthChecked();
      }
    };

    initAuth();
  }, [setToken, setAuthChecked]);
};
