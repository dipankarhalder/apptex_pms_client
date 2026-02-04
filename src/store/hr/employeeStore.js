import { create } from "zustand";
import { persist } from "zustand/middleware";
import employeeData from "../../db/hr/employee.json";

export const useEmployeeStore = create(
  persist(
    (set, get) => ({
      employees: employeeData || [],
      selectedEmployee: null,

      getEmployeeById: (employeeId) => {
        const employee = get().employees.find(
          (emp) => emp.jobInfo.employeeId === employeeId,
        );
        set({ selectedEmployee: employee || null });
        return employee;
      },

      getEmployeesByDepartment: (department) => {
        return get().employees.filter(
          (emp) => emp.jobInfo.department === department,
        );
      },

      getEmployeesByShift: (shiftType) => {
        return get().employees.filter(
          (emp) => emp.shiftInfo.shiftType === shiftType,
        );
      },

      addEmployee: (newEmployee) => {
        set({
          employees: [...get().employees, newEmployee],
        });
      },

      updateEmployee: (employeeId, updatedData) => {
        set({
          employees: get().employees.map((emp) =>
            emp.jobInfo.employeeId === employeeId
              ? { ...emp, ...updatedData }
              : emp,
          ),
          selectedEmployee:
            get().selectedEmployee?.jobInfo.employeeId === employeeId
              ? { ...get().selectedEmployee, ...updatedData }
              : get().selectedEmployee,
        });
      },

      deleteEmployee: (employeeId) => {
        set({
          employees: get().employees.filter(
            (emp) => emp.jobInfo.employeeId !== employeeId,
          ),
          selectedEmployee:
            get().selectedEmployee?.jobInfo.employeeId === employeeId
              ? null
              : get().selectedEmployee,
        });
      },

      clearSelectedEmployee: () => {
        set({ selectedEmployee: null });
      },

      resetToSeedData: () => {
        set({
          employees: employeeData || [],
          selectedEmployee: null,
        });
      },
    }),
    {
      name: "employeeData",
      merge: (persistedState, currentState) => persistedState ?? currentState,
    },
  ),
);
