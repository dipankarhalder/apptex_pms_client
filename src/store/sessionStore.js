import { create } from "zustand";

export const useSessionStore = create((set) => ({
  hasSession: localStorage.getItem("hasSession") === "true",
  justLoggedIn: false,

  setSession: (session) => {
    if (session) {
      localStorage.setItem("hasSession", "true");
    } else {
      localStorage.removeItem("hasSession");
    }
    set({ hasSession: session });
  },

  markJustLoggedIn: () => {
    set({ justLoggedIn: true });
  },

  clearJustLoggedIn: () => {
    set({ justLoggedIn: false });
  },
}));
