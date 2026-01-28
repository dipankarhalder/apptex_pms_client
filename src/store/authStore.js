import { create } from "zustand";

export const useAuthStore = create((set) => ({
  /** State */
  isAuthChecked: false,
  accessToken: localStorage.getItem("authToken") || null,
  isUsername: localStorage.getItem("authUser") || null,
  isEmail: localStorage.getItem("authEmail") || null,

  /** Token */
  setToken: (token) => {
    if (token) {
      localStorage.setItem("authToken", token);
    }
    set({ accessToken: token });
  },
  removeToken: () => {
    localStorage.removeItem("authToken");
    set({ accessToken: null });
  },

  /** Email */
  setEmail: (email) => {
    localStorage.setItem("authEmail", email);
    set({ isEmail: email });
  },
  removeEmail: () => {
    localStorage.removeItem("authEmail");
    set({ isEmail: null });
  },

  /** username */
  setUsername: (username) => {
    localStorage.setItem("authUser", username);
    set({ isUsername: username });
  },
  removeUsername: () => {
    localStorage.removeItem("authUser");
    set({ isUsername: null });
  },

  /** Logout */
  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authEmail");
    set({
      accessToken: null,
      isEmail: null,
      isAuthChecked: true,
    });
  },

  /** Auth Check */
  setAuthChecked: () => {
    set({ isAuthChecked: true });
  },
}));
