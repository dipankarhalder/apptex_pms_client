import { create } from "zustand";
import { persist } from "zustand/middleware";
import salaryData from "../../db/hr/salary.json";

export const useSalaryStore = create(
  persist(
    (set, get) => ({
      salaries: salaryData.employees || [],
      selectedSalary: null,

      getSalaryByEmployeeId: (employeeId) => {
        const salary = get().salaries.find(
          (sal) => sal.employeeId === employeeId,
        );
        set({ selectedSalary: salary || null });
        return salary;
      },

      getSalariesByDepartment: (department) => {
        return get().salaries.filter((sal) => sal.department === department);
      },

      getSalariesByLevel: (level) => {
        return get().salaries.filter((sal) => {
          if (level === "High") return sal.netSalary >= 35000;
          if (level === "Medium")
            return sal.netSalary >= 30000 && sal.netSalary < 35000;
          if (level === "Low") return sal.netSalary < 30000;
          return false;
        });
      },

      addSalary: (newSalary) => {
        set({
          salaries: [...get().salaries, newSalary],
        });
      },

      updateSalary: (employeeId, updatedData) => {
        set({
          salaries: get().salaries.map((sal) =>
            sal.employeeId === employeeId ? { ...sal, ...updatedData } : sal,
          ),
          selectedSalary:
            get().selectedSalary?.employeeId === employeeId
              ? { ...get().selectedSalary, ...updatedData }
              : get().selectedSalary,
        });
      },

      deleteSalary: (employeeId) => {
        set({
          salaries: get().salaries.filter(
            (sal) => sal.employeeId !== employeeId,
          ),
          selectedSalary:
            get().selectedSalary?.employeeId === employeeId
              ? null
              : get().selectedSalary,
        });
      },

      clearSelectedSalary: () => {
        set({ selectedSalary: null });
      },

      resetToSeedData: () => {
        set({
          salaries: salaryData.employees || [],
          selectedSalary: null,
        });
      },
    }),
    {
      name: "salaryData",
      merge: (persistedState, currentState) => persistedState ?? currentState,
    },
  ),
);
