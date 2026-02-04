import { create } from "zustand";
import { persist } from "zustand/middleware";
import attendanceData from "../../db/hr/attendance.json";

export const useAttendanceStore = create(
  persist(
    (set, get) => ({
      attendance: attendanceData.employees || [],
      selectedAttendance: null,

      getAttendanceByEmployeeId: (employeeId) => {
        const record = get().attendance.find(
          (att) => att.employeeId === employeeId,
        );
        set({ selectedAttendance: record || null });
        return record;
      },

      getAttendanceByStatus: (status) => {
        return get().attendance.filter((att) => {
          const percentage =
            (att.summary.present / attendanceData.totalWorkingDays) * 100;

          if (status === "Excellent") return percentage >= 90;
          if (status === "Good") return percentage >= 75 && percentage < 90;
          if (status === "Poor") return percentage < 75;
          return false;
        });
      },

      addAttendanceRecord: (newRecord) => {
        set({
          attendance: [...get().attendance, newRecord],
        });
      },

      updateAttendanceRecord: (employeeId, updatedData) => {
        set({
          attendance: get().attendance.map((att) =>
            att.employeeId === employeeId ? { ...att, ...updatedData } : att,
          ),
          selectedAttendance:
            get().selectedAttendance?.employeeId === employeeId
              ? { ...get().selectedAttendance, ...updatedData }
              : get().selectedAttendance,
        });
      },

      deleteAttendanceRecord: (employeeId) => {
        set({
          attendance: get().attendance.filter(
            (att) => att.employeeId !== employeeId,
          ),
          selectedAttendance:
            get().selectedAttendance?.employeeId === employeeId
              ? null
              : get().selectedAttendance,
        });
      },

      clearSelectedAttendance: () => {
        set({ selectedAttendance: null });
      },

      resetToSeedData: () => {
        set({
          attendance: attendanceData.employees || [],
          selectedAttendance: null,
        });
      },
    }),
    {
      name: "attendanceData",
      merge: (persistedState, currentState) => persistedState ?? currentState,
    },
  ),
);
