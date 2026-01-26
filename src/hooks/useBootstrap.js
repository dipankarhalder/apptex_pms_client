import { useEffect } from "react";
import { refreshTokenApi } from "../services/auth.api";
import { useAuthStore } from "../store/authStore";
// import { useSessionStore } from "../store/sessionStore";

export const useAuthBootstrap = () => {
  const setToken = useAuthStore((s) => s.setToken);
  const setAuthChecked = useAuthStore((s) => s.setAuthChecked);
  // const hasSession = useSessionStore((s) => s.hasSession);
  // const justLoggedIn = useSessionStore((s) => s.justLoggedIn);
  // const clearJustLoggedIn = useSessionStore((s) => s.clearJustLoggedIn);

  useEffect(() => {
    const initAuth = async () => {
      // if (justLoggedIn) {
      //   clearJustLoggedIn();
      //   setAuthChecked();
      //   return;
      // }

      // if (!hasSession) {
      //   setAuthChecked();
      //   return;
      // }

      try {
        const { accessToken } = await refreshTokenApi();
        setToken(accessToken);
      } catch {
        setToken(null);
        // useSessionStore.getState().setSession(false);
      } finally {
        setAuthChecked();
      }
    };

    initAuth();
  }, [setToken, setAuthChecked]);
};
