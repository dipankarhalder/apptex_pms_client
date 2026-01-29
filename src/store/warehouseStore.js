import { create } from "zustand";
import { persist } from "zustand/middleware";
import warehouseData from "../db/warehouse.json";

export const useWarehouseStore = create(
  persist(
    (set, get) => ({
      warehouseList: warehouseData,
      selectedWarehouse: null,

      getWarehouseByCode: (warehouseId) => {
        const warehouse = get().warehouseList.find(
          (item) => item.id === warehouseId,
        );

        set({ selectedWarehouse: warehouse || null });
        return warehouse;
      },

      // 2️⃣ Get warehouses by companyId
      getWarehousesByCompanyId: (companyId) => {
        return get().warehouseList.filter(
          (warehouse) => warehouse.companyId === companyId,
        );
      },

      // 3️⃣ Add new warehouse
      addWarehouse: (newWarehouse) => {
        set({
          warehouseList: [...get().warehouseList, newWarehouse],
        });
      },

      // 4️⃣ Update warehouse
      updateWarehouse: (warehouseId, updatedData) => {
        set({
          warehouseList: get().warehouseList.map((warehouse) =>
            warehouse.id === warehouseId
              ? { ...warehouse, ...updatedData }
              : warehouse,
          ),
        });
      },

      // 5️⃣ Delete warehouse
      deleteWarehouse: (warehouseId) => {
        set({
          warehouseList: get().warehouseList.filter(
            (warehouse) => warehouse.id !== warehouseId,
          ),
          selectedWarehouse:
            get().selectedWarehouse?.id === warehouseId
              ? null
              : get().selectedWarehouse,
        });
      },

      // 6️⃣ Clear selected warehouse
      clearSelectedWarehouse: () => {
        set({ selectedWarehouse: null });
      },

      // 7️⃣ Reset to seed JSON
      resetToSeedData: () => {
        set({
          warehouseList: warehouseData,
          selectedWarehouse: null,
        });
      },
    }),
    {
      name: "warehouseData",

      // Prevent seed JSON from overwriting persisted data
      merge: (persistedState, currentState) => {
        return persistedState ?? currentState;
      },
    },
  ),
);
