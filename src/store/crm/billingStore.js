import { create } from "zustand";
import { persist } from "zustand/middleware";
import billingData from "../../db/crm/cost.json";

export const useBillingStore = create(
  persist(
    (set, get) => ({
      billings: billingData || [],
      selectedBilling: null,

      getBillingById: (invoiceId) => {
        const billing = get().billings.find(
          (item) => item.invoiceId === invoiceId,
        );
        set({ selectedBilling: billing || null });
        return billing;
      },

      getBillingsByType: (billingType) => {
        return get().billings.filter(
          (billing) => billing.billingType === billingType,
        );
      },

      getBillingsByLeadId: (leadId) => {
        return get().billings.filter((billing) => billing.leadId === leadId);
      },

      getBillingsByPaymentStatus: (status) => {
        return get().billings.filter(
          (billing) => billing.paymentStatus === status,
        );
      },

      addBilling: (newBilling) => {
        set({
          billings: [...get().billings, newBilling],
        });
      },

      updateBilling: (invoiceId, updatedData) => {
        set({
          billings: get().billings.map((billing) =>
            billing.invoiceId === invoiceId
              ? { ...billing, ...updatedData }
              : billing,
          ),
          selectedBilling:
            get().selectedBilling?.invoiceId === invoiceId
              ? { ...get().selectedBilling, ...updatedData }
              : get().selectedBilling,
        });
      },

      deleteBilling: (invoiceId) => {
        set({
          billings: get().billings.filter(
            (billing) => billing.invoiceId !== invoiceId,
          ),
          selectedBilling:
            get().selectedBilling?.invoiceId === invoiceId
              ? null
              : get().selectedBilling,
        });
      },

      clearSelectedBilling: () => {
        set({ selectedBilling: null });
      },

      resetToSeedData: () => {
        set({
          billings: billingData || [],
          selectedBilling: null,
        });
      },
    }),
    {
      name: "billingData",
      merge: (persistedState, currentState) => {
        return persistedState ?? currentState;
      },
    },
  ),
);
