import { create } from "zustand";
import { persist } from "zustand/middleware";
import reportData from "../../db/crm/reports.json";

export const useReportStore = create(
  persist(
    (set, get) => ({
      reports: reportData || [],
      selectedReport: null,

      getReportById: (reportId) => {
        const report = get().reports.find((item) => item.id === reportId);
        set({ selectedReport: report || null });
        return report;
      },

      getReportsByType: (reportType) => {
        return get().reports.filter(
          (report) => report.reportType === reportType,
        );
      },

      getReportsByPeriod: (timePeriod) => {
        return get().reports.filter(
          (report) => report.timePeriod === timePeriod,
        );
      },

      addReport: (newReport) => {
        set({
          reports: [...get().reports, newReport],
        });
      },

      updateReport: (reportId, updatedData) => {
        set({
          reports: get().reports.map((report) =>
            report.id === reportId ? { ...report, ...updatedData } : report,
          ),
          selectedReport:
            get().selectedReport?.id === reportId
              ? { ...get().selectedReport, ...updatedData }
              : get().selectedReport,
        });
      },

      deleteReport: (reportId) => {
        set({
          reports: get().reports.filter((report) => report.id !== reportId),
          selectedReport:
            get().selectedReport?.id === reportId ? null : get().selectedReport,
        });
      },

      clearSelectedReport: () => {
        set({ selectedReport: null });
      },

      resetToSeedData: () => {
        set({
          reports: reportData.reports || [],
          selectedReport: null,
        });
      },
    }),
    {
      name: "reportData",
      merge: (persistedState, currentState) => {
        return persistedState ?? currentState;
      },
    },
  ),
);
