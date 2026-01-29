import { create } from "zustand";
import { persist } from "zustand/middleware";
import statusData from "../db/status.json";

export const useStatusStore = create(
  persist(
    (set, get) => ({
      statusList: statusData,
      selectedStatus: null,

      getStatusById: (statusId) => {
        const status = get().statusList.find((item) => item.id === statusId);
        set({ selectedStatus: status || null });
        return status;
      },

      getStatusByCode: (code) => {
        return get().statusList.find((item) => item.code === code) || null;
      },

      getStatusesByGroup: (groupKey) => {
        return get().statusList.filter(
          (item) => item.groupKey === groupKey && !item.isDeleted,
        );
      },

      addStatus: (newStatus) => {
        set({
          statusList: [...get().statusList, newStatus],
        });
      },

      updateStatus: (statusId, updatedData) => {
        set({
          statusList: get().statusList.map((status) =>
            status.id === statusId ? { ...status, ...updatedData } : status,
          ),
        });
      },

      deleteStatus: (statusId) => {
        set({
          statusList: get().statusList.map((status) =>
            status.id === statusId
              ? {
                  ...status,
                  isDeleted: true,
                  deletedAt: new Date().toISOString(),
                }
              : status,
          ),
          selectedStatus:
            get().selectedStatus?.id === statusId ? null : get().selectedStatus,
        });
      },

      clearSelectedStatus: () => {
        set({ selectedStatus: null });
      },

      resetToSeedData: () => {
        set({
          statusList: statusData,
          selectedStatus: null,
        });
      },
    }),
    {
      name: "statusData",
      merge: (persistedState, currentState) => {
        return persistedState ?? currentState;
      },
    },
  ),
);
