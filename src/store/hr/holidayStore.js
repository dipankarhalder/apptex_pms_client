import { create } from "zustand";
import { persist } from "zustand/middleware";
import holidayData from "../../db/hr/holidays.json";

export const useHolidayStore = create(
  persist(
    (set, get) => ({
      holidays: holidayData || [],
      selectedHoliday: null,

      getHolidayByDate: (date) => {
        const holiday = get().holidays.find((item) => item.date === date);
        set({ selectedHoliday: holiday || null });
        return holiday;
      },

      getHolidayByName: (name) => {
        return get().holidays.find(
          (holiday) => holiday.name.toLowerCase() === name.toLowerCase(),
        );
      },

      getHolidaysByType: (type) => {
        return get().holidays.filter((holiday) => holiday.type === type);
      },

      getAllHolidays: () => {
        return get().holidays;
      },

      addHoliday: (newHoliday) => {
        set({
          holidays: [...get().holidays, newHoliday],
        });
      },

      updateHoliday: (date, updatedData) => {
        set({
          holidays: get().holidays.map((holiday) =>
            holiday.date === date ? { ...holiday, ...updatedData } : holiday,
          ),
          selectedHoliday:
            get().selectedHoliday?.date === date
              ? { ...get().selectedHoliday, ...updatedData }
              : get().selectedHoliday,
        });
      },

      deleteHoliday: (date) => {
        set({
          holidays: get().holidays.filter((holiday) => holiday.date !== date),
          selectedHoliday:
            get().selectedHoliday?.date === date ? null : get().selectedHoliday,
        });
      },

      clearSelectedHoliday: () => {
        set({ selectedHoliday: null });
      },

      resetToSeedData: () => {
        set({
          holidays: holidayData.holidays || [],
          selectedHoliday: null,
        });
      },
    }),
    {
      name: "holidayData",
      merge: (persistedState, currentState) => {
        return persistedState ?? currentState;
      },
    },
  ),
);
