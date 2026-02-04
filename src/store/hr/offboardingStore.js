import { create } from "zustand";
import { persist } from "zustand/middleware";
import offboardingData from "../../db/hr/offboarding.json";

export const useOffboardingStore = create(
  persist(
    (set, get) => ({
      offboardingList: offboardingData.employees || [],
      selectedOffboarding: null,

      getOffboardingByEmployeeId: (employeeId) => {
        const record = get().offboardingList.find(
          (emp) => emp.employeeId === employeeId,
        );
        set({ selectedOffboarding: record || null });
        return record;
      },

      getOffboardingByStatus: (status) => {
        return get().offboardingList.filter(
          (emp) => emp.offboardingStatus === status,
        );
      },

      updateDocumentStatus: (employeeId, documentKey, provided) => {
        set({
          offboardingList: get().offboardingList.map((emp) =>
            emp.employeeId === employeeId
              ? {
                  ...emp,
                  documents: {
                    ...emp.documents,
                    [documentKey]: { provided },
                  },
                }
              : emp,
          ),
        });
      },

      updateOffboardingStatus: (employeeId, status, remarks) => {
        set({
          offboardingList: get().offboardingList.map((emp) =>
            emp.employeeId === employeeId
              ? {
                  ...emp,
                  offboardingStatus: status,
                  remarks,
                  lastUpdated: new Date().toISOString().split("T")[0],
                }
              : emp,
          ),
        });
      },

      deleteOffboardingRecord: (employeeId) => {
        set({
          offboardingList: get().offboardingList.filter(
            (emp) => emp.employeeId !== employeeId,
          ),
          selectedOffboarding:
            get().selectedOffboarding?.employeeId === employeeId
              ? null
              : get().selectedOffboarding,
        });
      },

      clearSelectedOffboarding: () => {
        set({ selectedOffboarding: null });
      },

      resetToSeedData: () => {
        set({
          offboardingList: offboardingData.employees || [],
          selectedOffboarding: null,
        });
      },
    }),
    {
      name: "offboardingData",
      merge: (persistedState, currentState) => persistedState ?? currentState,
    },
  ),
);
