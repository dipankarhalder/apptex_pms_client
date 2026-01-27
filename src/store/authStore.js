import { create } from "zustand";

export const useAuthStore = create((set) => ({
  /** State */
  isAuthChecked: false,
  isEmail: localStorage.getItem("authEmail") || null,
  accessToken: localStorage.getItem("authToken") || null,

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
