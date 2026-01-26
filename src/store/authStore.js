import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthChecked: false,
  isEmail: localStorage.getItem("authEmail") || null,
  accessToken: localStorage.getItem("authToken") || null,

  setEmail: (email) => {
    localStorage.setItem("authEmail", email);
    set({ isEmail: email });
  },

  removeEmail: () => {
    localStorage.removeItem("authEmail");
    set({ isEmail: null });
  },

  setToken: (token) => {
    if (token) localStorage.setItem("authToken", token);
    else localStorage.removeItem("authToken");
    set({ accessToken: token });
  },

  setAuthChecked: () => {
    set({ isAuthChecked: true });
  },
}));
