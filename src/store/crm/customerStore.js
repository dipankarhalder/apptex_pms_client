import { create } from "zustand";
import { persist } from "zustand/middleware";
import customerData from "../../db/crm/customers.json";

export const useCustomerStore = create(
  persist(
    (set, get) => ({
      customers: customerData || [],
      selectedCustomer: null,

      getCustomerById: (customerId) => {
        const customer = get().customers.find((item) => item.id === customerId);
        set({ selectedCustomer: customer || null });
        return customer;
      },

      getCustomerByLeadId: (leadId) => {
        return get().customers.find((customer) => customer.leadId === leadId);
      },

      getCustomersByAccountManager: (managerName) => {
        return get().customers.filter(
          (customer) => customer.assignedAccountManager === managerName,
        );
      },

      getActiveCustomers: () => {
        return get().customers.filter(
          (customer) => customer.status === "Active",
        );
      },

      addCustomer: (newCustomer) => {
        set({
          customers: [...get().customers, newCustomer],
        });
      },

      updateCustomer: (customerId, updatedData) => {
        set({
          customers: get().customers.map((customer) =>
            customer.id === customerId
              ? { ...customer, ...updatedData }
              : customer,
          ),
          selectedCustomer:
            get().selectedCustomer?.id === customerId
              ? { ...get().selectedCustomer, ...updatedData }
              : get().selectedCustomer,
        });
      },

      deleteCustomer: (customerId) => {
        set({
          customers: get().customers.filter(
            (customer) => customer.id !== customerId,
          ),
          selectedCustomer:
            get().selectedCustomer?.id === customerId
              ? null
              : get().selectedCustomer,
        });
      },

      addPurchaseToCustomer: (customerId, purchase) => {
        set({
          customers: get().customers.map((customer) =>
            customer.id === customerId
              ? {
                  ...customer,
                  purchaseHistory: [
                    ...(customer.purchaseHistory || []),
                    purchase,
                  ],
                }
              : customer,
          ),
        });
      },

      clearSelectedCustomer: () => {
        set({ selectedCustomer: null });
      },

      resetToSeedData: () => {
        set({
          customers: customerData.customers || [],
          selectedCustomer: null,
        });
      },
    }),
    {
      name: "customerData",
      merge: (persistedState, currentState) => {
        return persistedState ?? currentState;
      },
    },
  ),
);
