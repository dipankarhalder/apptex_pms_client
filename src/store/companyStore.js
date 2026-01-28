import { create } from "zustand";

export const useCompanyStore = create((set) => ({
  /** State */
  allCompanies: [],

  /** Token */
  setCompanyList: (companies) => {
    set({ allCompanies: companies });
  },
}));
