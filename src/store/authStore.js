import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isEmail: localStorage.getItem("authEmail") || null,
  setEmail: (email) => {
    localStorage.setItem("authEmail", email);
    set({ isEmail: email });
  },
  removeEmail: () => {
    localStorage.removeItem("authEmail");
    set({ isEmail: null });
  },

  accessToken: localStorage.getItem("authToken") || null,
  setToken: (token) => {
    if (token) localStorage.setItem("authToken", token);
    set({ accessToken: token });
  },
}));
