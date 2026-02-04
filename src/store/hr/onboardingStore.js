import { create } from "zustand";
import { persist } from "zustand/middleware";
import onboardingData from "../../db/hr/onboarding.json";

export const useOnboardingStore = create(
  persist(
    (set, get) => ({
      onboardingList: onboardingData.employees || [],
      selectedOnboarding: null,

      getOnboardingByEmployeeId: (employeeId) => {
        const record = get().onboardingList.find(
          (emp) => emp.employeeId === employeeId,
        );
        set({ selectedOnboarding: record || null });
        return record;
      },

      getOnboardingByStatus: (status) => {
        return get().onboardingList.filter(
          (emp) => emp.onboardingStatus === status,
        );
      },

      updateDocumentStatus: (employeeId, documentKey, updatedDoc) => {
        set({
          onboardingList: get().onboardingList.map((emp) =>
            emp.employeeId === employeeId
              ? {
                  ...emp,
                  documents: {
                    ...emp.documents,
                    [documentKey]: {
                      ...emp.documents[documentKey],
                      ...updatedDoc,
                    },
                  },
                }
              : emp,
          ),
        });
      },

      updateOnboardingStatus: (employeeId, status, remarks) => {
        set({
          onboardingList: get().onboardingList.map((emp) =>
            emp.employeeId === employeeId
              ? {
                  ...emp,
                  onboardingStatus: status,
                  remarks,
                  lastUpdated: new Date().toISOString().split("T")[0],
                }
              : emp,
          ),
        });
      },

      deleteOnboardingRecord: (employeeId) => {
        set({
          onboardingList: get().onboardingList.filter(
            (emp) => emp.employeeId !== employeeId,
          ),
          selectedOnboarding:
            get().selectedOnboarding?.employeeId === employeeId
              ? null
              : get().selectedOnboarding,
        });
      },

      clearSelectedOnboarding: () => {
        set({ selectedOnboarding: null });
      },

      resetToSeedData: () => {
        set({
          onboardingList: onboardingData.employees || [],
          selectedOnboarding: null,
        });
      },
    }),
    {
      name: "onboardingData",
      merge: (persistedState, currentState) => persistedState ?? currentState,
    },
  ),
);
