import { create } from "zustand";
import { persist } from "zustand/middleware";
import companyData from "../db/company.json";

export const useCompanyStore = create(
  persist(
    (set, get) => ({
      companyInfo: companyData,
      selectedCompany: null,

      getCompanyById: (companyCode) => {
        const company = get().companyInfo.find(
          (item) => item.id === companyCode,
        );
        set({ selectedCompany: company || null });
        return company;
      },

      addCompany: (newCompany) => {
        set({
          companyInfo: [...get().companyInfo, newCompany],
        });
      },

      updateCompany: (companyId, updatedData) => {
        set({
          companyInfo: get().companyInfo.map((company) =>
            company.id === companyId ? { ...company, ...updatedData } : company,
          ),
        });
      },

      deleteCompany: (companyId) => {
        set({
          companyInfo: get().companyInfo.filter(
            (company) => company.id !== companyId,
          ),
          selectedCompany:
            get().selectedCompany?.id === companyId
              ? null
              : get().selectedCompany,
        });
      },

      clearSelectedCompany: () => {
        set({ selectedCompany: null });
      },

      resetToSeedData: () => {
        set({
          companyInfo: companyData,
          selectedCompany: null,
        });
      },
    }),
    {
      name: "companyData",
      merge: (persistedState, currentState) => {
        return persistedState ?? currentState;
      },
    },
  ),
);
